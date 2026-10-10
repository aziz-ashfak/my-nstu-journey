# My NSTU Journey

A pixel-art story of my years at Noakhali Science and Technology University (NSTU), Sonapur, Noakhali: from the main gate and the admission queue to Salam Hall coding nights, my BSc research defense, graduation, and the last photo with my friends.

It plays in the browser with chiptune music and sound effects, and it can be rendered to an MP4 video.

## Project structure

```
.
├── index.html            Page layout: stage, captions, controls
├── css/style.css         Page styles (pixel look, dark theme)
├── js/
│   ├── core.js           Canvas, palette, drawing helpers, 3x5 pixel font
│   ├── scenery.js        Sky, weather, trees, real NSTU buildings
│   ├── people.js         Character sprites (me, Kaiser, friends)
│   ├── scenes.js         Every chapter + the scene list (durations, captions)
│   ├── audio.js          Chiptune score and sound effects (Web Audio)
│   └── player.js         Controls, chapter dots, captions, video export hooks
├── assets/img/           Pixel portraits (me, Kaiser, defense photo)
├── media/                The rendered video (My_NSTU_Journey.mp4)
├── tools/render_video.py Renders the story to MP4
└── vercel.json           Static hosting settings for Vercel
```

## Run it locally

Any static web server works:

```bash
python -m http.server 8000
# open http://localhost:8000
```

Tap the picture or press the right arrow to move on. Space pauses. Use SOUND ON/OFF, speed (1X / 2X / 0.5X) and AUTO from the control bar.

## Put it on GitHub

```bash
git init
git add .
git commit -m "My NSTU Journey"
git branch -M main
git remote add origin https://github.com/<your-username>/my-nstu-journey.git
git push -u origin main
```

## Deploy on Vercel

1. Go to vercel.com, choose **Add New → Project**, and import the GitHub repo.
2. Framework preset: **Other**. Leave build command and output directory empty.
3. Click **Deploy**.

The video is downloadable from the site with the **DOWNLOAD THE VIDEO (MP4)** button.

## Re-render the video

After changing scenes or captions:

```bash
pip install playwright
python -m playwright install chromium
python tools/render_video.py
```

This needs `ffmpeg` installed. The new video replaces `media/My_NSTU_Journey.mp4`.

## Editing the story

- **Captions and scene order:** the `SC` list at the bottom of `js/scenes.js`.
- **Music and sound for each scene:** the `SA` list in `js/audio.js` (one entry per scene, same order as `SC`).
- **Friends' looks and names:** the `FRIENDS` list in `js/scenes.js`.
- **Portraits:** replace the PNGs in `assets/img/` (40×48 for `me.png` and `kaiser.png`, 40×56 for `defense.png`).
