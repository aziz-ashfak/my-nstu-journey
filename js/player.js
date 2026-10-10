/* Player: controls, chapter dots, captions, and the video export hooks. */
/* ---------- sound playback ----------
   The soundtrack is pre-rendered (media/soundtrack.mp3, made by tools/render_video.py) and played
   as a normal audio file kept in sync with the scene clock. Phones play this reliably, unlike
   hundreds of live Web Audio notes. If the file cannot load, it falls back to live Web Audio. */
const OFFS=[];SC.reduce((a,s,i)=>(OFFS[i]=a,a+s.d),0);
const track=new Audio();track.preload='auto';track.setAttribute('playsinline','');track.src='media/soundtrack.mp3';
let trackOK=true,unlocked=false;track.addEventListener('error',()=>{if(!track.src.startsWith('blob:'))trackOK=false;});
// Load the whole file into memory so seeking works on any host and is instant on phones.
if(!VIDEO&&window.fetch)fetch('media/soundtrack.mp3').then(r=>{if(!r.ok)throw 0;return r.blob();}).then(b=>{const t=track.currentTime;track.src=URL.createObjectURL(b);trackOK=true;
 track.addEventListener('loadedmetadata',()=>{try{track.currentTime=t;}catch(e){}},{once:true});}).catch(()=>{});
function sndUnlock(){if(unlocked||!soundOn)return;unlocked=true;
 try{if(navigator.audioSession)navigator.audioSession.type='playback';}catch(e){}   // iOS: play even with the silent switch on
 if(trackOK){const p=track.play();if(p&&p.catch)p.catch(()=>{trackOK=false;audioStart();audioScene(cur);});}else audioStart();}
function sndWanted(){return soundOn&&unlocked&&playing&&started&&st<SC[cur].d;}
function sndScene(i){if(!soundOn||!unlocked)return;
 if(!trackOK){audioScene(i);return;}
 const want=OFFS[i]+st;if(Math.abs(track.currentTime-want)>0.25){try{track.currentTime=want;}catch(e){}}track.playbackRate=SPEEDS[sp];if(sndWanted()){const p=track.play();if(p&&p.catch)p.catch(()=>{});}}
function sndSync(){if(!trackOK||!unlocked)return;
 if(!sndWanted()){if(!track.paused)track.pause();return;}
 const want=OFFS[cur]+st;if(Math.abs(track.currentTime-want)>0.35){try{track.currentTime=want;}catch(e){}}
 if(track.paused){const p=track.play();if(p&&p.catch)p.catch(()=>{});}}
function sndPause(){if(trackOK)track.pause();else if(actx)actx.suspend();}
function sndResume(){if(trackOK)sndSync();else if(actx)actx.resume();}
document.addEventListener('visibilitychange',()=>{if(document.hidden)sndPause();});

/* ---------- player ---------- */
let cur=0,st=0,playing=true,auto=true,started=false,sp=0,last=performance.now(),shown=-1;
const SPEEDS=[1,2,0.5];
const $=id=>document.getElementById(id);
const dots=$('dots');
SC.forEach((s,k)=>{const b=document.createElement('button');b.type='button';b.className='dot';b.setAttribute('aria-label','Go to '+s.ch.toLowerCase());b.addEventListener('click',()=>{started=true;sndUnlock();go(k);});dots.appendChild(b);});
function go(n){cur=(n+SC.length)%SC.length;st=0;shown=-1;playId++;$('chap').textContent=SC[cur].ch;$('tag').textContent=SC[cur].tag;
 [...dots.children].forEach((d,k)=>{d.className='dot'+(k===cur?' on':k<cur?' done':'');});$('bNext').textContent=cur===SC.length-1?'REPLAY':'NEXT >';sndScene(cur);}
function next(){if(!started){started=true;sndUnlock();go(1);return;}sndUnlock();go(cur+1);}
function prev(){started=true;sndUnlock();go(cur-1);}
$('bNext').onclick=next;$('bPrev').onclick=prev;
$('stage').addEventListener('click',next);
$('stage').addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();next();}});
$('bPlay').onclick=()=>{playing=!playing;$('bPlay').textContent=playing?'PAUSE':'PLAY';playing?sndResume():sndPause();};
$('bSpeed').onclick=()=>{sp=(sp+1)%3;$('bSpeed').textContent=SPEEDS[sp]+'X';track.playbackRate=SPEEDS[sp];};
$('bAuto').onclick=()=>{auto=!auto;$('bAuto').setAttribute('aria-pressed',String(auto));};
$('bSound').onclick=()=>{soundOn=!soundOn;$('bSound').textContent=soundOn?'SOUND ON':'SOUND OFF';$('bSound').setAttribute('aria-pressed',String(soundOn));
 if(soundOn){sndUnlock();if(trackOK){track.muted=false;sndScene(cur);}else{audioStart();if(amaster)amaster.gain.value=0.9;audioScene(cur);}}
 else{track.pause();track.muted=true;if(amaster)amaster.gain.value=0;}};
document.addEventListener('keydown',e=>{if(e.target.tagName==='BUTTON'&&(e.key===' '||e.key==='Enter'))return;
 if(e.key==='ArrowRight'){next();}else if(e.key==='ArrowLeft'){prev();}else if(e.key===' '){e.preventDefault();$('bPlay').click();}});

function drawScene(i,t){g.globalAlpha=1;try{SC[i].f(t);}catch(err){console.error(err);}if(t<0.35){g.globalAlpha=1-t/0.35;R(0,0,W,H,'#000');g.globalAlpha=1;}}
function frame(now){const dt=Math.min(0.1,(now-last)/1000);last=now;if(playing)st+=dt*SPEEDS[sp];
 drawScene(cur,st);
 const n=Math.min(SC[cur].cap.length,Math.floor(st*40));if(n!==shown){shown=n;$('txt').textContent=SC[cur].cap.slice(0,n);}
 if(auto&&started&&playing&&st>SC[cur].d&&cur<SC.length-1)go(cur+1);
 if(!VIDEO)sndSync();
 requestAnimationFrame(frame);}

/* ---------- video export hooks (used only to render the MP4) ---------- */
window.STORY={
 durations:SC.map(s=>s.d),
 frame(i,t,fade){const vc=window.STORY.vc||(window.STORY.vc=Object.assign(document.createElement('canvas'),{width:1280,height:720}));const v=vc.getContext('2d');
  if(this.lastScene!==i){this.lastScene=i;playId++;}
  drawScene(i,t);v.imageSmoothingEnabled=false;v.fillStyle='#0f0d17';v.fillRect(0,0,1280,720);
  const SX=128,SY=6;v.fillStyle='#3a3552';v.fillRect(SX-6,SY-6+6,1024+12,576+12);v.drawImage(cv,SX,SY+6,1024,576);
  v.globalAlpha=0.08;v.fillStyle='#000';for(let y=SY+6;y<SY+582;y+=4)v.fillRect(SX,y,1024,1);v.globalAlpha=1;
  const s=SC[i],cap=s.cap.slice(0,Math.min(s.cap.length,Math.floor(t*40)));const MW=1000;
  v.font='29px VT323';const words=cap.split(' '),lines=[];let ln='';words.forEach(w=>{const tt=ln?ln+' '+w:w;if(v.measureText(tt).width>MW){lines.push(ln);ln=w;}else ln=tt;});if(ln)lines.push(ln);
  const by=600,a=Math.min(1,t/0.4);v.globalAlpha=a;v.textBaseline='top';
  v.font='12px "Press Start 2P"';v.fillStyle='#ffd36b';v.fillText(s.ch,SX,by);v.fillStyle='#7cc86a';const tw=v.measureText(s.tag).width;v.fillText(s.tag,SX+1024-tw,by);
  v.font='29px VT323';v.fillStyle='#ece5d3';lines.forEach((l,k)=>v.fillText(l,SX,by+22+k*27));v.globalAlpha=1;
  if(fade>0){v.globalAlpha=Math.min(1,fade);v.fillStyle='#000';v.fillRect(0,0,1280,720);v.globalAlpha=1;}
  return vc.toDataURL('image/png');},
 async audio(){const d=SC.reduce((a,s)=>a+s.d,0)+2;const sr=44100;const ctx=new OfflineAudioContext(2,Math.ceil(sr*d),sr);const m=AU.master(ctx,ctx.destination);let t0=0;
  SC.forEach((s,i)=>{AU.scene(ctx,m,i,t0,i===SC.length-1?s.d+2:s.d,true);t0+=s.d;});
  const buf=await ctx.startRendering();const L=buf.getChannelData(0),Rr=buf.getChannelData(1);const n=L.length;const ab=new ArrayBuffer(44+n*4);const dv=new DataView(ab);
  const ws=(o,s)=>{for(let k=0;k<s.length;k++)dv.setUint8(o+k,s.charCodeAt(k));};ws(0,'RIFF');dv.setUint32(4,36+n*4,true);ws(8,'WAVEfmt ');dv.setUint32(16,16,true);dv.setUint16(20,1,true);dv.setUint16(22,2,true);dv.setUint32(24,sr,true);dv.setUint32(28,sr*4,true);dv.setUint16(32,4,true);dv.setUint16(34,16,true);ws(36,'data');dv.setUint32(40,n*4,true);
  for(let k=0;k<n;k++){dv.setInt16(44+k*4,Math.max(-1,Math.min(1,L[k]))*32767,true);dv.setInt16(46+k*4,Math.max(-1,Math.min(1,Rr[k]))*32767,true);}
  const bytes=new Uint8Array(ab);let bin='';for(let k=0;k<bytes.length;k+=32768)bin+=String.fromCharCode.apply(null,bytes.subarray(k,k+32768));return btoa(bin);}};

go(0);
if(!VIDEO)requestAnimationFrame(frame);
