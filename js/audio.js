/* Sound: chiptune score and sound effects with Web Audio (live and offline). */
/* ---------- sound: chiptune score + effects (Web Audio, live or offline) ---------- */
const AU=(()=>{
 const N=m=>440*Math.pow(2,(m-69)/12);const NB=new WeakMap();
 function noise(ctx){let b=NB.get(ctx);if(!b){b=ctx.createBuffer(1,ctx.sampleRate*2,ctx.sampleRate);const d=b.getChannelData(0);let s=12345;for(let i=0;i<d.length;i++){s=(s*1103515245+12345)&0x7fffffff;d[i]=s/0x3fffffff-1;}NB.set(ctx,b);}return b;}
 function tone(ctx,out,type,f,t,dur,vol,a=0.006,r=0.08,slide){if(t<0)return;const o=ctx.createOscillator(),gn=ctx.createGain();o.type=type;o.frequency.setValueAtTime(f,t);if(slide)o.frequency.exponentialRampToValueAtTime(slide,t+dur);gn.gain.setValueAtTime(0.0001,t);gn.gain.exponentialRampToValueAtTime(vol,t+a);gn.gain.setValueAtTime(vol,t+Math.max(a+0.001,dur-r));gn.gain.exponentialRampToValueAtTime(0.0001,t+dur);o.connect(gn).connect(out);o.start(t);o.stop(t+dur+0.03);}
 function nz(ctx,out,t,dur,vol,ft='highpass',fq=6000,q=0.7,a=0.002,sus=false){if(t<0)return;const s=ctx.createBufferSource();s.buffer=noise(ctx);s.loop=true;const f=ctx.createBiquadFilter();f.type=ft;f.frequency.value=fq;f.Q.value=q;const gn=ctx.createGain();gn.gain.setValueAtTime(0.0001,t);gn.gain.exponentialRampToValueAtTime(vol,t+a);if(sus){gn.gain.setValueAtTime(vol,t+Math.max(a+0.01,dur-0.6));}gn.gain.exponentialRampToValueAtTime(0.0001,t+dur);s.connect(f).connect(gn).connect(out);s.start(t,(t*7.13)%1.5);s.stop(t+dur+0.05);}
 const kick=(c,o,t,v=0.45)=>tone(c,o,'sine',150,t,0.2,v,0.002,0.15,40);
 const snare=(c,o,t,v=0.2)=>{nz(c,o,t,0.16,v,'bandpass',1900,0.8);tone(c,o,'triangle',190,t,0.08,v*0.6);};
 const hat=(c,o,t,v=0.05)=>nz(c,o,t,0.04,v,'highpass',7500);
 const M={
  dream:{bpm:84,root:60,prog:[[0,4,7,11],[5,9,12,16],[9,12,16,19],[7,11,14,17]],lead:'triangle',lv:.055,arp:'square',av:.018,dr:0,pad:.03,mel:[0,-1,2,-1,1,-1,3,-1]},
  hope:{bpm:112,root:60,prog:[[0,4,7],[7,11,14],[9,12,16],[5,9,12]],lead:'square',lv:.04,arp:'square',av:.02,dr:1,pad:.02,mel:[2,-1,1,0,1,-1,2,3]},
  tense:{bpm:138,root:57,prog:[[0,3,7],[0,3,7],[-4,0,3],[-2,2,5]],lead:'sawtooth',lv:.025,arp:'square',av:.024,dr:2,pad:0,mel:[0,0,-1,1,0,-1,2,1]},
  sad:{bpm:72,root:57,prog:[[0,3,7],[-4,0,3],[3,7,10],[-2,2,5]],lead:'triangle',lv:.065,arp:'sine',av:.035,dr:0,pad:.035,mel:[2,-1,-1,1,0,-1,-1,-1]},
  love:{bpm:88,root:65,prog:[[0,4,7],[9,12,16],[5,9,12],[7,11,14]],lead:'triangle',lv:.065,arp:'sine',av:.035,dr:3,pad:.03,mel:[2,-1,3,2,1,-1,0,-1]},
  drive:{bpm:128,root:62,prog:[[0,3,7],[-2,2,5],[-4,0,3],[-5,-1,2]],lead:'square',lv:.035,arp:'square',av:.026,dr:1,pad:.015,mel:[0,2,1,2,3,2,1,-1]},
  night:{bpm:66,root:64,prog:[[0,3,7,10],[-4,0,3,7],[-7,-3,0,3],[-2,2,5,9]],lead:'sine',lv:.06,arp:'triangle',av:.03,dr:0,pad:.035,mel:[3,-1,-1,2,-1,-1,1,-1]},
  chill:{bpm:96,root:62,prog:[[0,4,7,11],[9,12,16,19],[2,5,9,12],[7,11,14,17]],lead:'triangle',lv:.05,arp:'sine',av:.03,dr:3,pad:.025,mel:[2,-1,1,-1,3,2,-1,1]},
  triumph:{bpm:132,root:60,prog:[[0,4,7],[5,9,12],[7,11,14],[0,4,7]],lead:'square',lv:.045,arp:'square',av:.022,dr:1,pad:.022,mel:[0,1,2,3,2,-1,3,-1]}};
 function music(c,o,m,t0,dur){const S=M[m],b8=60/S.bpm/2,bar=b8*8,nb=Math.ceil(dur/bar),r=S.root;
  for(let k=0;k<nb;k++){const tb=t0+k*bar;if(tb>t0+dur)break;const ch=S.prog[k%S.prog.length];
   if(S.pad)ch.forEach(n=>tone(c,o,'triangle',N(r+n),tb,bar*0.98,S.pad,0.25,0.35));
   tone(c,o,'triangle',N(r-24+ch[0]),tb,b8*3.6,0.15,0.01,0.1);tone(c,o,'triangle',N(r-24+ch[0]+7),tb+4*b8,b8*3.6,0.13,0.01,0.1);
   for(let i=0;i<8;i++)tone(c,o,S.arp,N(r+ch[[0,1,2,1,0,1,2,1][i]%ch.length]+(i>=4?12:0)),tb+i*b8,b8*0.85,S.av,0.004,0.05);
   const mel=k%4===3?S.mel.slice().reverse():S.mel,lift=(k%8)>=4?1:0;
   for(let i=0;i<8;i++){let idx=mel[i];if(idx<0)continue;idx+=lift;let len=1;while(i+len<8&&mel[i+len]<0&&len<3)len++;
    tone(c,o,S.lead,N(r+12+ch[idx%ch.length]+12*Math.floor(idx/ch.length)),tb+i*b8,b8*len*0.95,S.lv,0.01,0.06);}
   for(let i=0;i<8;i++){const t=tb+i*b8;
    if(S.dr===1){if(i===0||i===4)kick(c,o,t);if(i===2||i===6)snare(c,o,t);hat(c,o,t);}
    else if(S.dr===2){if(i===0||i===3||i===4||i===7)kick(c,o,t,0.4);if(i===2||i===6)snare(c,o,t,0.16);hat(c,o,t);hat(c,o,t+b8/2,0.03);}
    else if(S.dr===3){if(i===0)kick(c,o,t,0.25);if(i%2)hat(c,o,t,0.03);}}}}
 const FX={
  rain:(c,o,t,d,v=1)=>{nz(c,o,t,d,0.11*v,'bandpass',2600,0.4,0.6,true);nz(c,o,t,d,0.05*v,'lowpass',500,0.5,0.6,true);},
  thunder:(c,o,t,d)=>{for(let x=0;x<d;x+=3.4){nz(c,o,t+x,0.25,0.25,'highpass',2000);nz(c,o,t+x+0.1,2.6,0.55,'lowpass',260,0.7,0.06);}},
  heart:(c,o,t,d)=>{for(let x=0;x<d;x+=0.75){tone(c,o,'sine',70,t+x,0.12,0.4,0.004,0.08,40);tone(c,o,'sine',60,t+x+0.18,0.12,0.3,0.004,0.08,38);}},
  tick:(c,o,t,d)=>{for(let x=0;x<d;x+=0.5)nz(c,o,t+x,0.025,0.06,'highpass',5000);},
  wind:(c,o,t,d)=>nz(c,o,t,d,0.07,'bandpass',450,0.6,1.2,true),
  water:(c,o,t,d)=>nz(c,o,t,d,0.045,'lowpass',650,0.6,1,true),
  birds:(c,o,t,d)=>{for(let x=0.4;x<d;x+=0.7+((x*13.7)%1)*1.4){const f=2400+((x*31)%1)*1000;tone(c,o,'sine',f,t+x,0.07,0.025,0.005,0.03,f*1.3);tone(c,o,'sine',f*1.1,t+x+0.1,0.06,0.02,0.005,0.03,f*0.9);}},
  crowd:(c,o,t,d)=>nz(c,o,t,d,0.04,'bandpass',900,0.4,0.8,true),
  chalk:(c,o,t,d)=>{for(let x=0;x<d;x+=0.09)nz(c,o,t+x,0.05,0.03,'bandpass',3500,2);},
  crack:(c,o,t)=>{nz(c,o,t,0.3,0.25,'bandpass',1200,1);tone(c,o,'square',300,t,0.35,0.05,0.004,0.1,70);},
  ding:(c,o,t)=>{tone(c,o,'sine',1318.5,t,1.4,0.13,0.004,1.1);tone(c,o,'sine',1975.5,t+0.06,1.1,0.07,0.004,0.9);tone(c,o,'triangle',2637,t+0.12,0.8,0.03,0.004,0.6);},
  typing:(c,o,t,d)=>{let x=0,i=0;while(x<d){nz(c,o,t+x,0.025,0.06+((i*7)%5)*0.012,'highpass',2800);x+=0.07+((i*17)%7)*0.025+(i%23===22?0.5:0);i++;}},
  snore:(c,o,t,d)=>{for(let x=0.5;x<d;x+=3.2){nz(c,o,t+x,1.5,0.09,'lowpass',260,1,1.0);}},
  crickets:(c,o,t,d)=>{for(let x=0.2;x<d;x+=0.8+((x*11.3)%1)*0.6)for(let k=0;k<3;k++)tone(c,o,'sine',4300,t+x+k*0.05,0.03,0.014,0.003,0.015);},
  steps:(c,o,t,d)=>{for(let x=0;x<d;x+=0.5)nz(c,o,t+x,0.07,0.08,'lowpass',700,1);},
  hit:(c,o,t)=>{[45,52,57].forEach(n=>tone(c,o,'square',N(n),t,1.6,0.05,0.005,1.2));kick(c,o,t,0.6);nz(c,o,t,1.4,0.12,'highpass',4000,0.7,0.003);},
  shot:(c,o,t)=>{[1.5,1.0,0.5].forEach((b,i)=>tone(c,o,'square',i===2?1760:880,t-b,0.07,0.045));tone(c,o,'sine',1800,t-0.45,0.4,0.015,0.01,0.05,5200);nz(c,o,t,0.035,0.3,'highpass',2500);nz(c,o,t+0.07,0.04,0.25,'highpass',2000);},
  blips:(c,o,t,d)=>{const sc=[72,74,76,79,81,84];for(let x=0.2,i=0;x<d;x+=0.3,i++)if((i*7)%3)tone(c,o,'square',N(sc[(i*5)%6]),t+x,0.05,0.02);},
  cheer:(c,o,t,d)=>{nz(c,o,t,d,0.12,'bandpass',1500,0.35,0.8,true);for(let x=0.1,i=0;x<d;x+=0.05+((i*13)%5)*0.03,i++)nz(c,o,t+x,0.04,0.06,'bandpass',1300,1.5);},
  chatter:(c,o,t,d)=>{nz(c,o,t,d,0.035,'bandpass',1100,0.7,0.8,true);for(let x=0.1,i=0;x<d;x+=0.12+((i*7)%5)*0.05,i++){const f=180+((i*37)%9)*25;tone(c,o,'triangle',f,t+x,0.09,0.012,0.01,0.04,f*(i%2?1.15:0.9));}},
  laugh:(c,o,t,d)=>{for(const x of [1.9,7.3]){if(x>d)break;for(let k=0;k<5;k++){const f=330-k*18;tone(c,o,'square',f,t+x+k*0.13,0.08,0.02,0.005,0.04,f*0.85);}}},
  sizzle:(c,o,t,d)=>{nz(c,o,t,d,0.07,'highpass',3500,0.6,0.3,true);for(let x=0.2,i=0;x<d;x+=0.11+((i*7)%5)*0.04,i++)nz(c,o,t+x,0.03,0.05,'bandpass',5000,2);},
  clink:(c,o,t)=>{tone(c,o,'sine',2093,t,0.6,0.06,0.002,0.5);tone(c,o,'sine',3136,t+0.04,0.4,0.03,0.002,0.3);},
  count:(c,o,t,d)=>{for(let x=0;x<d;x+=0.6)tone(c,o,'square',x>1?1046.5:784,t+x,0.12,0.05);},
  whoosh:(c,o,t)=>{nz(c,o,t,0.9,0.18,'bandpass',1800,0.6,0.25);tone(c,o,'square',300,t,0.5,0.03,0.01,0.2,1200);},
  timer:(c,o,t,d)=>{for(let x=0;x<d;x+=0.33)tone(c,o,'square',1320,t+x,0.04,0.03);}};
 const SA=[
  {m:'dream'},{m:'hope',fx:[['crowd',0,40]]},{m:'hope',fx:[['chalk',0.3,3]]},
  {m:'tense',fx:[['rain',0,40],['thunder',0,40],['heart',0,40],['tick',0,40]]},
  {m:'sad',fx:[['wind',0,40]]},{m:'love',fx:[['water',0,40],['birds',0,40]]},
  {m:'sad',sw:[3.2,'triumph'],fx:[['crack',1.0],['ding',3.2]]},
  {m:'drive',fx:[['steps',0,2.4],['typing',2.7,40]]},{m:'night',fx:[['snore',0,40]]},
  {m:'chill',fx:[['sizzle',0,4.2],['steps',4.2,1.4],['clink',6.2]]},
  {m:'chill',fx:[['chatter',0,40],['laugh',0,40],['birds',0,40]]},
  {m:'night',fx:[['crickets',0,40],['steps',0,40]]},
  {m:'sad',sw:[4.4,'triumph'],fx:[['rain',0,40,0.4],['hit',4.4]]},
  {m:'hope',fx:[['steps',0,2],['birds',0,40]]},
  {m:'hope',fx:[['birds',0,40],['shot',2.6],['shot',6.0]]},
  {m:'drive',fx:[['blips',0,40]]},
  {m:'love',fx:[['water',0,40],['shot',3.0]]},
  {m:'tense',sw:[4.2,'triumph'],fx:[['hit',4.2],['shot',8.0]]},
  {m:'triumph',fx:[['cheer',0,40]]},
  {m:'dream',fx:[['typing',0,6]]},
  {m:'hope',sw:[5.0,'triumph'],fx:[['steps',1.6,1.8],['timer',3.4,1.6],['shot',5.0],['cheer',5.3,40]]},
  {m:'triumph',fx:[['count',0.6,1.8],['whoosh',2.4],['cheer',2.4,40],['hit',2.4]]}];
 function master(ctx,dest){const comp=ctx.createDynamicsCompressor();comp.threshold.value=-16;comp.knee.value=8;comp.ratio.value=3.5;comp.attack.value=0.008;comp.release.value=0.25;
  const mg=ctx.createGain();mg.gain.value=0.9;const hp=ctx.createBiquadFilter();hp.type='highpass';hp.frequency.value=32;const lp=ctx.createBiquadFilter();lp.type='lowpass';lp.frequency.value=7200;lp.Q.value=0.5;
  const len=Math.floor(ctx.sampleRate*2.4),ir=ctx.createBuffer(2,len,ctx.sampleRate);let s=987;for(let c=0;c<2;c++){const d=ir.getChannelData(c);for(let i=0;i<len;i++){s=(s*1103515245+12345)&0x7fffffff;d[i]=(s/0x3fffffff-1)*Math.pow(1-i/len,3.4)*(i<ctx.sampleRate*0.012?i/(ctx.sampleRate*0.012):1);}}
  const rv=ctx.createConvolver();rv.buffer=ir;const dry=ctx.createGain();dry.gain.value=0.85;const wet=ctx.createGain();wet.gain.value=0.3;
  mg.connect(hp).connect(lp);lp.connect(dry).connect(comp);lp.connect(rv).connect(wet).connect(comp);comp.connect(dest);return mg;}
 function scene(ctx,dest,i,t0,dur,fadeOut){const sg=ctx.createGain();sg.gain.setValueAtTime(0.0001,t0);sg.gain.exponentialRampToValueAtTime(1,t0+0.3);
  if(fadeOut){sg.gain.setValueAtTime(1,t0+dur-0.4);sg.gain.exponentialRampToValueAtTime(0.0001,t0+dur);}sg.connect(dest);
  const a=SA[i];if(a.sw){music(ctx,sg,a.m,t0,a.sw[0]);music(ctx,sg,a.sw[1],t0+a.sw[0],dur-a.sw[0]);}else music(ctx,sg,a.m,t0,dur);
  (a.fx||[]).forEach(([n,s,d,v])=>{if(s<dur)FX[n](ctx,sg,t0+s,Math.min(d||0,dur-s),v);});return sg;}
 return{master,scene};})();

let actx=null,amaster=null,acur=null,soundOn=true;
function audioStart(){if(actx||!soundOn)return;const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;try{actx=new AC();amaster=AU.master(actx,actx.destination);}catch(e){actx=null;}}
function audioScene(i){if(!actx||!soundOn)return;if(actx.state==='suspended'&&playing)actx.resume();const now=actx.currentTime;
 if(acur){const old=acur;old.gain.cancelScheduledValues(now);old.gain.setValueAtTime(old.gain.value,now);old.gain.linearRampToValueAtTime(0,now+0.25);setTimeout(()=>{try{old.disconnect();}catch(e){}},500);}
 acur=AU.scene(actx,amaster,i,now+0.03,40,false);}
