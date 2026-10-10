"""Render the story to an MP4 (1280x720, 30 fps, stereo sound).

Usage (from the project root):
    pip install playwright
    python -m playwright install chromium
    python tools/render_video.py                     # writes media/My_NSTU_Journey.mp4
    python tools/render_video.py --out my_video.mp4  # custom output

Needs ffmpeg on your PATH. The page is served from a local web server so the
images can be drawn to the canvas, and opened with ?video=1 (export mode).
"""
import argparse, base64, functools, http.server, json, os, subprocess, threading
from playwright.sync_api import sync_playwright

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def serve(port):
    handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=ROOT)
    httpd = http.server.ThreadingHTTPServer(('127.0.0.1', port), handler)
    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    return httpd


def local_fonts_js(font_dir):
    """Optional: load VT323 / Press Start 2P from local .woff2 files (for offline machines)."""
    js = []
    for fam, fname in [('VT323', 'vt323.woff2'), ('Press Start 2P', 'press-start-2p.woff2')]:
        p = os.path.join(font_dir, fname)
        if os.path.exists(p):
            b = base64.b64encode(open(p, 'rb').read()).decode()
            js.append(f"(async()=>{{const f=new FontFace({json.dumps(fam)},'url(data:font/woff2;base64,{b})');await f.load();document.fonts.add(f);}})()")
    return 'Promise.all([' + ','.join(js) + '])'


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--out', default=os.path.join(ROOT, 'media', 'My_NSTU_Journey.mp4'))
    ap.add_argument('--fps', type=int, default=30)
    ap.add_argument('--port', type=int, default=8765)
    ap.add_argument('--font-dir', help='folder with vt323.woff2 and press-start-2p.woff2 (optional)')
    a = ap.parse_args()

    httpd = serve(a.port)
    tail = 2.0
    wav = os.path.join(ROOT, 'media', '_audio.wav')
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto(f'http://127.0.0.1:{a.port}/index.html?video=1')
        if a.font_dir:
            page.evaluate(local_fonts_js(a.font_dir))
        page.evaluate('document.fonts.ready')
        page.wait_for_function('window.STORY && [...document.images].every(i => i.complete)')
        durs = page.evaluate('STORY.durations')

        print('Rendering sound...', flush=True)
        open(wav, 'wb').write(base64.b64decode(page.evaluate('STORY.audio()')))

        ff = subprocess.Popen(['ffmpeg', '-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', str(a.fps), '-c:v', 'png', '-i', '-',
                               '-i', wav, '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-preset', 'medium', '-crf', '18', '-tune', 'animation',
                               '-c:a', 'aac', '-b:a', '192k', '-shortest', '-movflags', '+faststart', a.out], stdin=subprocess.PIPE)
        for i, d in enumerate(durs):
            last = i == len(durs) - 1
            for k in range(int(round((d + (tail if last else 0)) * a.fps))):
                t = k / a.fps
                fade = (t - d) / tail if last and t > d else 0
                url = page.evaluate(f'STORY.frame({i},{t},{fade})')
                ff.stdin.write(base64.b64decode(url.split(',')[1]))
            print(f'Scene {i + 1}/{len(durs)} done', flush=True)
        ff.stdin.close()
        ff.wait()
        browser.close()
    httpd.shutdown()
    os.remove(wav)
    print('Saved', a.out)


if __name__ == '__main__':
    main()
