/* Scenes: every chapter of the story (plus the Proshasonik Bhaban and statue drawings), and the SC list of durations and captions. */
/* ---------- scenes ---------- */
function s0(t){sky(['#0f0d17','#141430','#1b1f3a','#262c56','#33406f'],112);stars(t,70,70);moon(222,20);
 const sil='#120f22';
 [[0,22],[22,30],[60,18],[176,26],[206,34],[236,22]].forEach(([x,h],i)=>{R(x,112-h,i%2?22:30,h+40,sil);for(let k=0;k<6;k++)if(rnd(i*10+k)<0.5)R(x+3+(k%3)*7,112-h+4+Math.floor(k/3)*8,3,4,'#ffd36b55');});
 palm(46,124,28,t,0,sil);palm(204,124,30,t,2,sil);R(0,118,W,26,sil);
 txt('MY NSTU JOURNEY',W/2,8,C.sun,2,true);
 R(106,26,44,52,C.cream);R(107,27,42,50,'#3a3552');if(imMe.complete&&imMe.naturalWidth)g.drawImage(imMe,108,28);
 txt('ME',128,82,C.cream,1,true);txt('STATISTICS, NSTU',128,89,'#a49db8',1,true);
 txt('SONAPUR, NOAKHALI',W/2,102,'#7cc86a',1,true);
 if(VIDEO)txt('A TRUE STORY',W/2,130,C.white,1,true);
 else if(RM||Math.floor(t*2)%2)txt('TAP TO BEGIN',W/2,130,C.white,1,true);}

/* NSTU main gate, from the real photo */
function nstuGate(t){sky(['#cfd8df','#dde4e8','#e8eef0'],96);clouds(t,14,'#f6f8f9',3,2,41);
 R(0,40,44,58,'#eceae4');for(let r=0;r<4;r++)for(let k=0;k<4;k++)R(4+k*10,46+r*12,6,6,'#3a4048');R(0,38,46,3,'#d8d6d0');
 for(let i=0;i<5;i++)tree(206+i*14,98,9+rnd(i+300)*4,t,['#2f6a34','#3f7a3e','#5a9a4a']);
 R(0,96,W,48,'#cfcabc');R(0,96,W,1,'#b8b2a2');
 const gate=(x0,w)=>{R(x0,66,w,1,'#c8ccd0');R(x0,78,w,1,'#c8ccd0');R(x0,94,w,1,'#c8ccd0');for(let x=x0;x<x0+w;x+=3)R(x,62,1,34,'#c0c4c8');
  for(let a=0;a<2;a++){const cx=x0+w/4+a*w/2,r=Math.floor(w/4)-1;for(let k=0;k<=12;k++){const an=Math.PI*k/12;P(cx-Math.cos(an)*r,64-Math.sin(an)*8,'#aab0b6');}}};
 gate(8,58);gate(190,58);
 R(66,38,4,56,'#6f8fb0');R(186,38,4,56,'#6f8fb0');
 R(100,38,56,56,'#7e9cbc');R(108,52,40,42,'#f4f4f0');disc(128,52,20,'#f4f4f0');
 disc(128,48,4,'#2f6fb0');P(128,48,'#ffd36b');txt('NSTU',128,64,'#8a9098',2,true);
 const board=(x)=>{R(x-1,42,36,38,'#9a6a3a');R(x,43,34,36,'#1f3f8f');disc(x+17,48,3,'#d8dce6');txt('NOAKHALI',x+17,54,C.white,1,true);txt('SCIENCE',x+17,61,C.white,1,true);txt('AND TECH',x+17,67,C.white,1,true);txt('UNIV.',x+17,73,C.white,1,true);};
 R(70,38,30,56,'#8aa6c2');R(156,38,30,56,'#8aa6c2');board(68);board(154);
 R(60,26,136,3,'#eef0f0');R(56,29,144,7,'#d4d8d8');R(58,36,140,2,'#8f969a');
 R(62,94,132,3,'#9aa0a8');R(82,97,92,9,'#b0553a');R(84,97,88,7,'#4f8f3a');for(let i=0;i<40;i++)P(85+rnd(i+310)*86,97+rnd(i+311)*6,['#e04a5a','#ffd36b','#f28ab0'][i%3]);
 R(100,96,10,6,'#b0553a');R(146,96,10,6,'#b0553a');R(102,92,6,5,'#3f8a3a');R(148,92,6,5,'#3f8a3a');}
function s1(t){if(t<4.2){nstuGate(t);const mx=t<3.4?-12+t*(100/3.4):88;person(mx,134,ME,t,{walk:t<3.4,papers:true,mood:'happy'});if(t>1.2)bubble('FIRST DAY AT NSTU!',Math.max(40,mx),104,C.sun);hud('DAY 1');return;}
 const u=t-4.2;sQueue(u);if(u<0.3){g.globalAlpha=1-u/0.3;R(0,0,W,H,'#000');g.globalAlpha=1;}}
function sQueue(t){sky(['#4f9fd8','#6cb2e2','#8fc6ea','#b6dcef','#d6ebf1'],96);
 glow(36,22,18,C.sunL,0.25);disc(36,22,8,C.sunL);clouds(t,12,'#f2f6f7',5,3,1);
 for(let i=0;i<12;i++)tree(i*24+6,96,7+rnd(i)*4,t,['#3f8a4a','#4f9a52','#6ab05a']);
 R(0,96,W,48,C.conc);R(0,96,W,2,C.concD);for(let x=0;x<W;x+=16)R(x,98,1,46,'#bdb6a5');R(0,112,W,1,'#bdb6a5');R(0,130,W,1,'#bdb6a5');
 auditorium(120,118,120,90);
 palm(14,122,42,t,0);palm(102,122,34,t,1);
 const shift=t>4.5?Math.min(5,(t-4.5)*4):0;
 [110,99,88,77,66,55].forEach((px,i)=>person(px+shift,126,stu(i+10),t+i,{papers:i%2===0}));
 const arrive=3.2,mx=(t<arrive?-10+t*(54/arrive):44)+shift;
 person(mx,126,ME,t,{walk:t<arrive,papers:true,mood:'happy'});
 hud('DAY 1');}

function s2(t){R(0,0,W,108,'#ddd3bb');R(0,0,W,5,'#c9bea3');R(0,104,W,40,'#8a6a4c');for(let y=110;y<H;y+=7)R(0,y,W,1,'#7a5c40');
 R(206,16,40,46,'#7a5a3a');R(208,18,36,42,'#9fd0ee');clouds(t,20,'#ffffff',2,2,4);tree(226,62,9,t,[C.green,C.leaf,'#7cc86a']);
 for(let x=212;x<244;x+=6)R(x,18,1,42,'#7a5a3a');R(208,38,36,1,'#7a5a3a');
 R(48,12,148,52,'#6b4a33');R(50,14,144,48,C.board);
 txt('STAT 1101',56,19,C.chalk);txt('INTRO TO STATISTICS',56,27,'#bcd3c2');txt('MEAN = SUM / N',56,40,'#bcd3c2');
 R(124,57,66,1,'#8fb09a');const n=Math.min(64,Math.floor(t*22));for(let i=0;i<n;i++){const z=(i-32)/10;P(125+i,56-Math.exp(-z*z/2)*26,C.chalk);}
 if(n>=64){R(157,30,1,27,'#ffd36b88');txt('U',155,22,C.sun);}
 fan(110,7,t);fan(170,7,t);
 person(34,104,TEACH,t,{armR:'out',glasses:true,mood:'happy'});
 [60,92,164,196,228].forEach((x,i)=>{person(x,114,stu(i+30),t+i,{sit:true});desk(x,108);});
 [72,184,218].forEach((x,i)=>{person(x,138,stu(i+50),t+i,{sit:true});desk(x,132);});
 person(128,138,ME,t,{sit:true,mood:'happy'});desk(128,132,28);R(122,129,8,3,C.white);
 hud('STATISTICS DEPT.');}

function s3(t){R(0,0,W,108,'#8e978b');R(0,0,W,4,'#7b8478');R(0,104,W,40,'#5e5a52');
 const fp=t%3.4,flash=!RM&&(fp<0.12||(fp>0.22&&fp<0.3));
 R(10,12,84,58,'#4b4a46');g.save();g.beginPath();g.rect(12,14,80,54);g.clip();
 sky(flash?['#c9d2e8','#aab4cf']:['#2c3446','#39445a','#46516a'],70);clouds(t,14,'#252b3a',6,22,9);clouds(t,30,'#30384a',5,30,2);rain(t,70,'#9fb3cc',4,1.3);
 if(flash){line(52,14,46,30,C.white);line(46,30,54,38,C.white);line(54,38,48,56,C.white);}
 g.restore();for(let x=21;x<92;x+=10)R(x,14,1,54,'#4b4a46');R(12,40,80,1,'#4b4a46');
 box(130,10,48,11,'#e8e0cc','#3d4239');txt('EXAM HALL',134,13,'#3d4239');
 clock(214,30,10,t*7);
 const a=0.6+0.4*Math.sin(t*9);box(150,48,84,16,'#0f0d17',C.red);txt('ANXIETY',154,51,C.red);R(154,58,Math.round(74*a),3,C.red);
 [52,98,158,204].forEach((x,i)=>{person(x,114,stu(i+70),t+i,{sit:true});desk(x,108);R(x-4,106,8,2,C.white);});
 [60,196].forEach((x,i)=>{person(x,138,stu(i+80),t+i,{sit:true});desk(x,132);});
 person(128,138,ME,t,{sit:true,mood:'sad',sweat:true,armL:'fwd',armR:'fwd'});desk(128,132,28);R(122,129,9,3,C.white);
 bubble('?!',128,108);
 if(flash){g.globalAlpha=0.35;R(0,0,W,H,'#eef3ff');g.globalAlpha=1;}
 hud('SEMESTER 1 FINAL');}

function s4(t){sky(['#3f465c','#4d5570','#5f6880','#737b90','#878d9c'],92);clouds(t,8,'#6a7286',6,2,3);clouds(t,26,'#7c8497',5,3,8);
 for(let i=0;i<13;i++)tree(i*22,92,6+rnd(i+20)*3,t,['#2c3f36','#34493d','#3f5546','#2a3328']);
 R(0,90,W,4,'#3e5241');R(0,94,W,30,'#3f5a70');R(0,94,W,3,'#33495c');
 for(let i=0;i<18;i++){const rx=((rnd(i)*W+t*3*(rnd(i+2)-0.5)*2)%W+W)%W;R(rx,97+rnd(i+4)*24,4+rnd(i+1)*6,1,'#5b7a90');}
 R(0,122,W,22,'#3e5a3a');for(let i=0;i<40;i++)P(rnd(i+5)*W,122+rnd(i+6)*20,'#4f6f45');
 person(118,128,ME,t,{sit:true,mood:'sad'});
 for(let i=0;i<6;i++){const p=((t*0.25+rnd(i))%1);P(rnd(i+9)*W+Math.sin(t*2+i)*4,p*130,'#a0743a');}
 const q=['???','WHY AM I HERE?','WHAT IS THE POINT?'][Math.floor(t/2.4)%3];bubble(q,118,100,'#d8dbe2');
 hud('LOST');}

function s5(t){sky(['#2e2350','#5a2e62','#9a3c66','#d65f5f','#f08a4b','#ffc46b'],96);
 glow(128,92,26,'#ffd98a',0.25);disc(128,92,15,'#ffd98a');
 R(0,90,W,6,'#3a2a3a');palm(30,96,30,t,0,'#2a1e30');palm(60,96,24,t,1,'#2a1e30');palm(222,96,34,t,2,'#2a1e30');tree(190,96,7,t,['#2a1e30','#2a1e30','#2a1e30','#2a1e30']);
 R(0,96,W,26,'#a0506a');for(let k=0;k<8;k++){const w=26-k*3+Math.round(Math.sin(t*3+k)*2);R(128-w/2,98+k*3,w,1,'#ffd98a');}
 R(0,122,W,22,'#3a2c38');for(let i=0;i<30;i++)P(rnd(i+3)*W,123+rnd(i+8)*18,'#4a3848');
 const x=74+t*7;person(x,130,ME,t,{walk:true,mood:'happy'});person(x+15,130,GIRL,t,{walk:true,mood:'happy'});
 for(let i=0;i<5;i++){const p=((t*0.35+i*0.2)%1);heart(x+4+Math.sin(t*2+i)*8,104-p*60,p<0.8?'#ff7a9a':'#ffb3c4');}
 hud('GOLDEN HOUR');}

function s6(t){sky(['#141225','#1f2244','#2e3360','#4a4a76','#6a5a7e'],100);stars(t,30,60);
 R(0,100,W,44,'#2a3a35');R(0,118,W,8,'#3a443e');
 for(let i=0;i<6;i++)tree(i*48+10,100,7,t,['#1c2a26','#22322c','#283a32','#1a221e']);
 if(t<4){const gx=146+Math.max(0,t-1)*30;person(gx,128,GIRL,t,{walk:t>1});}
 const lit=t>=3.2;person(128,128,ME,t,{mood:lit?'happy':'sad',armR:t>4.6?'up':'down'});
 if(t<3.2){const sp=Math.min(3,Math.max(0,(t-0.8)*2));heart(120-sp,86,'#ff7a9a');R(122-sp,86,1,5,'#141225');heart(124+sp,86,'#ff7a9a');R(124+sp,86,2,5,'#1f2244');
  heart(125+sp,86,'#ff7a9a');}
 if(lit){glow(128,82,14,C.sun,0.25);disc(128,82,4,C.sun);R(126,86,5,3,'#9a9aa8');for(let k=0;k<8;k++){const an=k/8*Math.PI*2+t;line(128+Math.cos(an)*7,82+Math.sin(an)*7,128+Math.cos(an)*10,82+Math.sin(an)*10,C.sunL);}
  box(58,16,140,13,'#0f0d17',C.sun);txt('TIME TO BUILD SKILLS',W/2,20,C.sun,1,true);
  if(t>4.6){txt('I WILL LEARN AI',W/2,38,'#7cc86a',2,true);}}
 hud('THE TURN');}

function s7(t){if(t<2.6){salamExt(t);return;}const t0=t;t-=2.6;s7in(t);if(t<0.3){g.globalAlpha=1-t/0.3;R(0,0,W,H,'#000');g.globalAlpha=1;}}
function s7in(t){R(0,0,W,110,'#c8c4a2');R(0,0,W,5,'#b3ae8c');R(0,106,W,38,'#6c5a48');
 box(6,8,126,12,C.gd,C.cream);txt('BHASHA SHAHID ABDUS SALAM HALL',10,12,C.cream);
 const ph=(t*0.55)%1,day=0.5+0.5*Math.cos(ph*Math.PI*2);
 R(178,14,64,46,'#7a5a3a');R(180,16,60,42,mix('#141a38','#8fc6ea',day));
 if(day>0.5)disc(196+ph*60,30,4,C.sunL);else{disc(196+ph*30,26,4,'#f3ecd0');for(let k=0;k<6;k++)P(184+rnd(k)*52,20+rnd(k+3)*20,'#cfd6ff');}
 tree(226,58,8,t,[mix('#1a2a24',C.green,day),mix('#22322c',C.leaf,day),mix('#283a32','#7cc86a',day)]);
 for(let x=186;x<240;x+=8)R(x,16,1,42,'#7a5a3a');
 R(10,30,44,76,C.woodD);for(let r=0;r<4;r++){R(12,32+r*18,40,1,C.wood);for(let k=0;k<8;k++)R(13+k*5,34+r*18,4,15,['#a04a3a','#3f6f8f','#c9a227','#3f8f6a','#7a5a9a'][(k+r*3)%5]);}
 person(128,124,ME,t,{sit:true,mood:'neutral',armL:'fwd',armR:'fwd'});
 R(84,104,92,4,C.wood);R(88,108,3,30,C.woodD);R(169,108,3,30,C.woodD);
 R(116,90,26,14,'#2b2f3a');R(118,92,22,10,'#151b26');
 for(let k=0;k<4;k++){const w=4+Math.floor(rnd(k+Math.floor(t*4))*14);R(119+(k%2)*2,93+k*2,w,1,['#7cc86a','#7cc1d9','#ffd36b','#d98fa2'][k]);}
 R(114,103,30,1,'#555');glow(129,97,12,'#7cc1d9',0.12);
 R(152,97,6,7,C.white);R(158,99,2,3,C.white);for(let k=0;k<3;k++){const p=(t*1.2+k*0.33)%1;P(154+Math.sin(p*6+k)*1.5,95-p*10,'#ffffffaa');}
 R(94,96,14,8,'#c9a227');R(95,94,12,2,'#3f6f8f');
 codePanel(56,24,120,64,t);
 const d=Math.min(730,1+Math.floor(t/(SC[7].d-3)*730));hud('DAY '+String(d).padStart(3,'0'),4,24,C.sun);
 hud('CODING '+(12+Math.floor((t*1.4)%4))+'H',180,64,'#7cc86a');}

const CODE=[['import','torch'],['from','nn','import','net'],['model','=','net()'],['for','epoch','in','range(100):'],['  loss','=','train(model)'],['  loss.backward()'],['  opt.step()'],['acc','=','test(model)'],['print(acc)','>','0.94']];
const KW={IMPORT:1,FROM:1,FOR:1,IN:1,PRINT:0};
function codePanel(x,y,w,h,t){box(x,y,w,h,'#0d1117','#3a3552');R(x+1,y+1,w-2,8,'#1f2633');P(x+4,y+4,'#d9443f');P(x+7,y+4,'#ffd36b');P(x+10,y+4,'#7cc86a');txt('TRAIN.PY',x+w/2,y+3,'#9aa4b8',1,true);
 const chars=Math.floor(t*14);let used=0;const shown=[];
 for(let i=0;i<CODE.length;i++){const s=CODE[i].join(' ');if(used>=chars)break;shown.push([i,Math.min(s.length,chars-used)]);used+=s.length+2;}
 const vis=shown.slice(-6);vis.forEach(([i,n],r)=>{const ly=y+12+r*7;txt(String(i+1),x+3,ly,'#4a5268');let cx=x+12,left=n;
  CODE[i].forEach(wd=>{if(left<=0)return;const part=wd.slice(0,left);const u=wd.trim().toUpperCase();const col=KW[u]?'#ff7aa8':(/^[\d.]+$/.test(u)?'#ffd36b':(/\(/.test(u)?'#7cc1d9':'#e6edf3'));txt(part,cx,ly,col);cx+=(wd.length+1)*4;left-=wd.length+1;});
  if(r===vis.length-1&&Math.floor(t*3)%2)R(x+12+n*4,ly,3,5,'#e6edf3');});
 const sy=y+h-14;txt('LOSS',x+3,sy+4,'#9aa4b8');R(x+22,sy+11,w-26,1,'#3a3552');const pts=Math.min(w-28,Math.floor(t*12));
 for(let k=0;k<pts;k++){const v=Math.exp(-k/22)*9+Math.sin(k*1.7)*0.8;P(x+23+k,sy+10-v,'#7cc86a');}}

function sDefense(t){
 if(t<5.4){R(0,0,W,108,'#dcd6c4');R(0,0,W,5,'#c8c0aa');R(0,104,W,40,'#8a7a64');
  R(18,10,120,70,'#2a2a30');R(20,12,116,66,'#f6f6f2');txt('BSC RESEARCH DEFENSE',78,16,'#1f3a99',1,true);txt('DEPT. OF STATISTICS, NSTU',78,24,'#555',1,true);
  R(28,66,100,1,'#888');[12,18,15,24,21,30].forEach((h,i)=>R(32+i*15,66-h,9,h,i===5?'#d9443f':'#3f6fae'));
  glow(78,45,30,'#ffffff',0.06);fan(200,7,t);
  R(150,94,100,4,C.wood);R(152,98,96,12,C.woodD);
  const T1={skin:'#9a6848',skinD:'#7a4e33',hair:'#7a7570',hairStyle:'short',top:'#e2dccd',pants:'#333',seed:71},T2={skin:'#a87a5a',skinD:'#86603f',hair:'#1a1410',hairStyle:'hijab',hijab:'#5a6f8a',top:'#7a4a5a',panjabi:true,pants:'#eee',seed:72},T3={skin:'#8d5a3c',skinD:'#6b4128',hair:'#2a2a2a',hairStyle:'short',beard:'stubble',top:'#3a5a7a',pants:'#333',seed:73};
  const nod=t>3.6;const tp=[[172,T1],[200,T2],[228,T3]].map(([x,s])=>person(x,110,s,t+x,{sit:true,face:-1,mood:nod?'happy':'neutral',glasses:x===172}));
  const me=person(140,128,ME_F,t,{face:-1,tie:true,mood:t>3.6?'happy':'neutral',armL:'out'});
  if(t>1&&t<2.6)bubble('WHY THIS MODEL?',172,tp[0].hy-3);
  else if(t>2.6&&t<3.8)bubble('BECAUSE THE DATA SAYS SO!',120,me.hy-3,C.sun);
  else if(t>3.8)bubble('WELL DONE!',200,tp[1].hy-3);
  if(t>4.2){box(64,84,104,18,'#0f0d17',C.red);txt('DEFENDED!',116,88,C.red,2,true);}
  hud('DEFENSE DAY');return;}
 const u=t-5.4;
 R(0,0,W,H,'#e9e6dc');R(0,112,W,32,'#b9b4a6');R(0,112,W,1,'#9a9588');
 R(10,4,236,34,'#2d5aa8');R(12,6,232,30,'#3a6ab8');txt('DEPARTMENT OF STATISTICS',128,10,C.white,2,true);
 R(10,38,236,22,'#f2f2ee');txt('NOAKHALI SCIENCE AND TECHNOLOGY UNIVERSITY',128,41,'#2d5aa8',1,true);txt('NOAKHALI-3814',128,48,'#333',1,true);txt('ESTABLISHED: 2016',128,54,'#333',1,true);
 R(10,60,236,3,'#6a5a48');
 const gate=(x0,w)=>{R(x0,63,w,49,'#e9e6dc');for(let k=0;k<w;k+=6){line(x0+k,63,x0+k+6,87,'#7a5a3a');line(x0+k+6,87,x0+k,112,'#7a5a3a');R(x0+k,63,1,49,'#5e4430');}R(x0,63,w,2,'#5e4430');};
 gate(12,40);gate(198,46);
 R(60,66,40,46,'#c98a4a');R(62,68,36,42,'#d79a58');R(64,72,14,16,'#c98a4a');R(82,72,14,16,'#c98a4a');R(64,92,14,16,'#c98a4a');R(82,92,14,16,'#c98a4a');P(93,90,'#6a4a2a');
 R(150,70,36,30,'#2a2a2e');for(let x=152;x<186;x+=4)R(x,70,1,30,'#555');R(106,72,30,6,'#c9a227');R(106,80,30,6,'#c9a227');
 R(16,98,18,14,'#f2f2ee');R(18,90,2,8,'#7a5a3a');R(24,88,2,10,'#7a5a3a');R(29,91,2,7,'#7a5a3a');
 const shot=2.6;person(122,136,ME_F,u,{tie:true,book:true,mood:'happy'});
 const k=person(214,138,KAISER,u,{face:-1,mood:'happy',armL:'out'});camera(k);
 countdown(u,shot,214,k.hy-3);
 if(u>shot+0.25)polaroid(Math.round(146+Math.max(0,shot+0.9-u)*90),66,imDef,40,56,'DEFENDED!');
 flashFx(u,shot);if(u<0.3){g.globalAlpha=1-u/0.3;R(0,0,W,H,'#000');g.globalAlpha=1;}
 hud('DEFENDED!',4,124,C.red);}

function sCook(t){R(0,0,W,110,'#d6ccae');R(0,0,W,5,'#c4b998');R(0,106,W,38,'#7a6650');for(let y=112;y<H;y+=8)R(0,y,W,1,'#6c5a46');
 R(110,14,40,36,'#7a5a3a');R(112,16,36,32,'#101630');for(let k=0;k<6;k++)P(114+rnd(k+150)*32,18+rnd(k+151)*26,'#cfd6ff');disc(138,24,3,'#f3ecd0');for(let x=118;x<148;x+=6)R(x,16,1,32,'#7a5a3a');
 R(158,6,40,2,'#e8f0d0');glow(178,8,22,'#e8f0d0',0.07);fan(64,8,t);
 box(4,20,86,11,'#2f5f8f',C.white);txt('SALAM HALL ROOM',47,23,C.white,1,true);
 R(20,92,58,4,C.wood);R(22,96,3,16,C.woodD);R(73,96,3,16,C.woodD);
 R(28,86,18,6,'#3a3a40');R(30,85,14,1,'#d9443f');
 R(30,76,14,10,'#9aa0a8');R(28,76,18,2,'#b8bec6');R(29,78,1,4,'#7a8088');R(44,78,1,4,'#7a8088');
 for(let k=0;k<5;k++){const p=(t*0.9+k*0.2)%1;P(32+k*2+Math.sin(p*7+k)*2,74-p*18,'#ffffffaa');}
 for(let k=0;k<3;k++){const p=(t*0.5+k*0.33)%1;line(40+k*8,70-p*20,44+k*8,66-p*20,'#f0a86888');}
 R(54,88,8,4,C.white);R(64,86,6,6,'#e8c070');R(52,84,4,4,'#d9443f');
 R(170,104,76,6,'#e8e0cc');R(170,110,76,4,'#8a6a4a');R(170,96,6,8,'#8a6a4a');R(176,100,14,4,'#c9d6e8');
 const MAH=FRIENDS[0][1];const go=t>4.2,arrive=Math.min(1,Math.max(0,(t-4.2)/1.4));const mx=Math.round(56+arrive*(150-56));
 const eat=t>6.2;
 const me=person(204,112,ME,t,{sit:true,face:-1,mood:eat?'happy':'neutral',armL:eat?'fwd':'fwd',armR:'fwd'});
 if(!eat){R(190,100,14,1,'#555');R(192,92,11,8,'#2b2f3a');R(193,93,9,6,'#1b2330');R(194,95,5,1,'#7cc86a');R(194,97,6,1,'#7cc1d9');}
 const mk=person(mx,124,MAH,t,{face:go?1:-1,walk:go&&arrive<1,mood:'happy',armR:'fwd',armL:go?'fwd':'down'});
 if(!go){line(mx-6,mk.yT+5,mx-14,mk.yT-6,'#8a8f96');}
 const plateX=eat?194:mx+8,plateY=eat?96:mk.yT+3;if(go){disc(plateX,plateY,4,C.white);R(plateX-3,plateY-2,4,2,'#f4f1e8');R(plateX,plateY-2,3,2,'#d8a33a');P(plateX+1,plateY-3,C.sun);}
 if(go&&!eat)for(let k=0;k<2;k++){const p=(t+k*0.5)%1;P(plateX-1+k*2,plateY-4-p*6,'#ffffffaa');}
 if(t<4)bubble('DIM BHUNA COMING!',mx,mk.hy-3);
 else if(t<6.2)bubble('EAT FIRST, CODE LATER!',mx,mk.hy-3);
 else bubble('THANKS, BRO!',204,me.hy-3,C.sun);
 hud('MAHRUF COOKS');}

function sAdda(t){sky(['#4a6fa8','#7c86b0','#c9908a','#f0a868','#ffd08a'],96);glow(200,92,20,'#ffd98a',0.25);disc(200,92,10,'#ffd98a');
 for(let i=0;i<11;i++)tree(i*26+4,96,6+rnd(i+120)*3,t,['#2f5a3a','#3a6a42','#4a7a4c']);
 R(0,96,W,48,'#8a7a5c');for(let i=0;i<50;i++)P(rnd(i+121)*W,98+rnd(i+122)*44,'#7a6a4e');
 R(170,56,74,4,'#8a8f96');R(174,60,2,40,'#5a4a3a');R(238,60,2,40,'#5a4a3a');R(170,52,74,4,'#a8adb4');
 box(180,40,54,11,'#c94f3a',C.cream);txt('CHA STALL',207,43,C.cream,1,true);
 const MAMA={skin:'#7a4b30',skinD:'#5e3822',hair:'#c9c4bc',hairStyle:'short',beard:'full',top:'#e8e0cc',pants:'#4a4a52',seed:61};
 person(214,100,MAMA,t,{mood:'happy',armL:'fwd'});
 R(172,86,70,4,C.wood);R(172,90,70,10,C.woodD);
 R(186,78,8,8,'#9aa0a8');R(184,80,2,2,'#9aa0a8');R(185,86,10,2,'#d9443f');for(let k=0;k<3;k++){const p=(t*0.8+k*0.33)%1;P(190+Math.sin(p*7+k)*2,76-p*14,'#ffffffaa');}
 for(let k=0;k<4;k++)R(222+k*4,82,3,4,C.white);
 R(20,116,120,3,'#9a7a4a');R(24,119,2,12,'#7a5a3a');R(134,119,2,12,'#7a5a3a');
 const laugh=Math.floor(t*2.2)%3===0;const bob=k=>laugh&&Math.floor(t*10+k)%2?1:0;
 const F=n=>FRIENDS.find(f=>f[0]===n)[1];const pos={};
 [['NUHA',30],['FOYSAL',62],['TUSHAR',94]].forEach(([n,x],k)=>{const p=person(x,114-bob(k+4),F(n),t+k+4,{face:k===0?1:-1,mood:'happy',glasses:n==='TUSHAR',armR:'fwd'});pos[n]=[x,p.hy];R(x+5,p.yT+5,3,4,C.white);});
 [['MAHRUF',22],['FAISAL',46],['ME',70],['RAIHAN',94]].forEach(([n,x],k)=>{const p=person(x+14,128-bob(k),n==='ME'?ME:F(n),t+k,{sit:true,face:k<2?1:-1,mood:'happy',armR:n==='ME'?'out':'fwd'});pos[n]=[x+14,p.hy];R(x+14+(k<2?5:-8),p.yT+5,3,4,C.white);});
 const kp=person(140,132-bob(5),KAISER,t,{face:-1,mood:'happy',armL:'fwd'});R(kp.hx-4,kp.yT+5,3,4,C.white);pos.KAISER=[140,kp.hy];
 if(t>0.6){const lines=[["THEN HE SAID...",'ME'],['HAHAHA!','KAISER'],['NO WAY!','NUHA'],['ONE MORE CHA!','RAIHAN'],['HAHA, TRUE!','FOYSAL'],['STOP IT!','MAHRUF'],['I SWEAR!','TUSHAR'],['LOL!','FAISAL']];
  const ln=lines[Math.floor((t-0.6)/1.15)%lines.length];const [bx,by]=pos[ln[1]];bubble(ln[0],bx,by-3,C.white);}
 for(let k=0;k<6;k++){const p=(t*0.6+k*0.2)%1;P([36,58,82,110,67,144][k]+Math.sin(p*6)*1.5,100-p*12,'#ffffff88');}
 hud('ADDA TIME');}

function s8(t){R(0,0,W,112,'#23253a');R(0,108,W,36,'#181926');
 R(40,14,40,40,'#3b3d55');R(42,16,36,36,'#0d1028');stars(t,0);for(let k=0;k<8;k++)P(44+rnd(k)*32,18+rnd(k+4)*30,'#cfd6ff');disc(66,26,4,'#f3ecd0');for(let x=48;x<78;x+=6)R(x,16,1,36,'#3b3d55');
 const fl=!RM&&rnd(Math.floor(t*6))<0.08;R(150,6,48,2,fl?'#55584a':'#e8f0d0');if(!fl)glow(174,8,24,'#e8f0d0',0.08);
 fan(110,8,t);
 box(150,30,99,11,'#0f0d17','#7f87b9');txt('SALAM HALL READING ROOM',154,33,'#9ca4d6');
 R(70,96,110,3,C.woodD);R(74,99,2,10,C.woodD);R(174,99,2,10,C.woodD);R(70,110,110,4,C.wood);R(74,114,3,16,C.woodD);R(173,114,3,16,C.woodD);
 sleeper(84,110,ME,t);
 hud('03:14 AM');}

function s9(t){sky(['#070612','#0d0c22','#141433','#1d1f48'],104);stars(t,80,90);moon(34,20);
 const off=t*3;for(let i=0;i<9;i++){const x=((i*36-off*0.5)%(W+40)+W+40)%(W+40)-20;tree(x,104,8,t,['#0d1418','#111a1e','#152024','#0b1013']);}
 minarReal(Math.round(190-off*1.2),112,true);
 R(0,104,W,40,'#141c1a');R(0,118,W,10,'#24282b');for(let x=0;x<W+20;x+=20)R(((x-off*2)%(W+20)+W+20)%(W+20)-10,122,8,1,'#3a3f42');
 for(let i=0;i<4;i++){const x=((i*80-off*2)%(W+40)+W+40)%(W+40)-20;lamp(Math.round(x),118);}
 const x=70+t*5;person(x,126,ME,t,{walk:true});
 if(t>1){const q=["DON'T QUIT","ONE MORE DAY","YOU CAN DO IT","KEEP GOING"][Math.floor((t-1)/2.2)%4];bubble(q,x,98,'#e8e0cc');}
 hud(t<4?'12:00 AM':'02:00 AM');}

function s10(t){sky(['#59606d','#6b7280','#7e8592','#9298a3'],100);clouds(t,8,'#4f5664',6,4,11);
 libraryReal(152,102,98,72);
 R(0,100,W,44,'#55604f');R(0,116,W,10,'#6d6e68');
 R(44,88,3,36,C.woodD);R(118,88,3,36,C.woodD);box(34,22,94,70,'#efe9da','#5a3e26');txt('RESULTS',81,27,'#5a3e26',1,true);
 R(42,84,78,1,'#5a3e26');const v=[30,24,28,19,23,14];
 v.forEach((h,i)=>{const k=Math.min(1,Math.max(0,t*1.4-i*0.35));const hh=Math.round(h*1.5*k);const down=i>0&&h<v[i-1];R(46+i*12,84-hh,8,hh,down?C.red:'#3f8f6a');txt('S'+(i+1),46+i*12,86,'#5a3e26');});
 if(t>2.4){line(100,34,118,58,C.red);R(114,56,6,2,C.red);R(118,52,2,6,C.red);}
 const fight=t>4.4;person(160,128,ME,t,{face:-1,mood:fight?'happy':'sad',armR:fight?'up':'down'});
 if(fight)bubble('NEVER GIVE UP',160,98,C.sun);else if(t>2.4)bubble('...',160,100,'#d8dbe2');
 rain(t,55,'#b6c0cf',3,0.9);
 hud('CGPA FALLING');}

function s11(t){sky(['#cfd8d3','#c0ccc6','#b1c0b8'],70);
 R(0,66,W,78,'#4f7a45');for(let y=66;y<H;y++){const w=12+(y-66)*2.4;R(128-w/2,y,w,1,(y%9===0)?'#9a9a94':'#8c8c86');}
 for(let i=0;i<8;i++){const lx=8+i*14,rx=W-8-i*14,h=70+i*4;R(lx,h-50,2+Math.floor(i/3),50+i*2,'#3a3226');R(rx,h-50,2+Math.floor(i/3),50+i*2,'#3a3226');}
 for(let i=0;i<34;i++){const x=rnd(i+40)*W,y=rnd(i+41)*36,r=8+rnd(i+42)*10;if(x>96&&x<160&&y>20)continue;disc(x,y,r,['#2e5a34','#3a6e3e','#4c8648','#5f9a52'][i%4]);}
 for(let i=0;i<14;i++){disc(i<7?rnd(i+60)*70:W-rnd(i+60)*70,68+rnd(i+61)*16,5+rnd(i+62)*4,['#3a6e3e','#4c8648'][i%2]);}
 const off=Math.max(0,2-t)*16;const walk=off>0;
 person(110-off,130,ME_P,t,{walk,mood:'happy'});
 const k=person(138-off,130,KAISER,t,{walk,mood:'happy',armL:t>2.2?'out':'down'});
 R(k.hx+5,k.hy,1,14,'#55525e');R(138-off,k.yT+5,6,5,'#222228');P(140-off,k.yT+7,'#6a8aaa');
 if(t<2.2){txt('KAISER',138-off,k.hy-10,C.white,1,true);}
 else bubble(t<4.8?'YOU CAN DO IT, BRO':"I'M WITH YOU",138,k.hy-2);
 hud('BEST FRIEND');}

function adminBldg(x,gy,w,h){R(x,gy-h,w,h,'#ece6d6');R(x-3,gy-h-3,w+6,3,'#3f6f8f');const fl=5,fh=Math.floor((h-22)/fl);
 for(let f=0;f<fl;f++){const y=gy-h+3+f*fh;R(x,y+fh-1,w,1,'#d4ccb8');for(let wx=x+4;wx<x+w-5;wx+=7){R(wx,y+1,4,fh-4,'#4d6f86');P(wx,y+1,'#9ab8cc');}}
 const cx=Math.round(x+w/2);R(cx-14,gy-h-10,28,h+10,'#f6f2e8');R(cx-16,gy-h-13,32,3,'#3f6f8f');for(let k=0;k<5;k++)R(cx-10,gy-h-6+k*11,20,7,'#4d6f86');
 R(cx-12,gy-20,24,20,'#3a3430');for(let i=0;i<4;i++)R(cx-11+i*7,gy-20,2,20,C.cream);
 const s='PROSHASONIK BHABAN',sw=s.length*4+5;box(cx-Math.round(sw/2),gy-31,sw,9,'#3f6f8f',C.white);txt(s,cx-Math.round(sw/2)+3,gy-29,C.white);
 R(x-6,gy-2,w+12,2,'#b5ad9c');}
/* Proshasonik Bhaban, drawn from the real photo: cream 4-storey block, pilasters, dark window grids, roof blocks */
function adminReal(gy){const top=gy-74;R(0,top,W,74,'#efe7d2');R(0,top,W,2,'#f7f1e2');
 const fh=17;for(let f=0;f<4;f++){const y=top+4+f*fh;R(0,y+fh-3,W,3,'#e2d8bf');R(0,y+fh-3,W,1,'#f8f2e4');}
 for(let px=-6;px<W;px+=30){
  for(let f=0;f<4;f++){const y=top+5+f*fh;R(px+6,y,22,fh-8,'#1f2428');for(let m=px+9;m<px+28;m+=4)R(m,y,1,fh-8,'#3a4247');R(px+6,y+4,22,1,'#3a4247');P(px+7,y+1,'#55606a');}
  R(px,top,6,74,'#f6efdd');R(px+5,top,1,74,'#d6cbb0');R(px+1,top-4,4,4,'#b9b4a8');R(px+1,top-4,4,1,'#cfcac0');}
 const ex=178;R(ex-2,gy-26,28,3,'#f6efdd');R(ex,gy-23,24,23,'#262a2e');R(ex+2,gy-21,20,21,'#30363b');
 const s='PROSHASONIK BHABAN',sw=s.length*4+5;box(ex+12-Math.round(sw/2),gy-36,sw,9,'#f8f2e4','#2a2a2a');txt(s,ex+12-Math.round(sw/2)+3,gy-34,'#2a2a2a');
 R(0,gy-2,W,2,'#cfc6ae');}
function statue(x,gy){const st='#ecece6',sh='#b4b5ae',dk='#8e8f88';
 R(x-30,gy-3,60,4,'#4a4c48');R(x-34,gy,68,3,'#d8d8d2');
 R(x-20,gy-23,40,20,'#f2f2ee');R(x-20,gy-23,40,2,'#d8d8d2');R(x+16,gy-23,4,20,'#dcdcd6');R(x-9,gy-18,18,11,'#c97a32');R(x-8,gy-17,16,9,'#b5652a');R(x-5,gy-15,3,5,'#d68a44');R(x+1,gy-14,4,4,'#d68a44');
 const o='#6a6b65';[[1,0],[-1,0],[0,1],[0,-1]].forEach(([a,b])=>statueFig(x+a,gy+b,o,o,o));statueFig(x,gy,st,sh,dk);}
function statueFig(x,gy,st,sh,dk){
 // flag bearer with raised fist
 line(x-15,gy-30,x-15,gy-72,dk);line(x-14,gy-30,x-14,gy-72,sh);
 for(let k=0;k<11;k++){const w=13-Math.floor(k/2);R(x-13,gy-72+k,w,1,k===5?sh:st);}
 R(x-11,gy-36,3,13,st);R(x-7,gy-36,3,13,sh);R(x-12,gy-48,9,12,st);R(x-5,gy-48,2,12,sh);R(x-11,gy-41,8,2,sh);
 R(x-10,gy-54,5,6,st);R(x-6,gy-54,1,6,sh);R(x-10,gy-55,5,1,dk);
 R(x-14,gy-47,2,9,st);R(x-4,gy-62,2,14,st);R(x-5,gy-65,4,4,st);P(x-3,gy-64,sh);
 // rifle bearer
 R(x+4,gy-36,3,13,st);R(x+8,gy-36,3,13,sh);R(x+3,gy-48,9,12,st);R(x+10,gy-48,2,12,sh);R(x+3,gy-41,9,2,sh);
 R(x+5,gy-54,5,6,st);R(x+9,gy-54,1,6,sh);R(x+5,gy-55,5,1,dk);
 line(x+1,gy-33,x+19,gy-58,dk);line(x+2,gy-33,x+20,gy-58,st);R(x+11,gy-46,5,2,st);R(x+1,gy-40,4,2,st);}
function flowers(y0,h,t){R(0,y0,W,h,'#5f8f3a');for(let i=0;i<120;i++){const x=rnd(i+200)*W,y=y0+rnd(i+201)*h;P(x,y,i%3?'#f2d43a':'#e8c02a');if(i%4===0)P(x,y+1,'#4a7a2e');}}
function flag(x,top,gy,t){R(x,top,1,gy-top,'#d8d8d8');P(x,top-1,C.sun);for(let c=0;c<18;c++){const dy=RM?0:Math.round(Math.sin(t*4-c*0.5));R(x+1+c,top+1+dy,1,11,'#006a4e');}const dy=RM?0:Math.round(Math.sin(t*4-8*0.5));disc(x+9,top+6+dy,3,'#f42a41');}
function polaroid(px,py,src=imMe,iw=40,ih=48,label='BY KAISER'){const w=iw+6,h=ih+10;R(px+2,py+2,w,h,'#00000044');R(px,py,w,h,'#fbf8f0');R(px+2,py+2,iw+2,ih+2,'#222');if(src&&(src.width||src.naturalWidth))g.drawImage(src,px+3,py+3,iw,ih);txt(label,px+w/2,py+ih+4,'#555',1,true);}
let playId=0;const snaps={};
function snap(key,sx,sy,w,h){const k=key+':'+playId;if(snaps[key]&&snaps[key].k===k)return snaps[key].c;const c=document.createElement('canvas');c.width=w;c.height=h;const cg=c.getContext('2d');cg.imageSmoothingEnabled=false;cg.drawImage(cv,sx,sy,w,h,0,0,w,h);snaps[key]={k,c};return c;}
function getSnap(key){const s=snaps[key];return s&&s.k===key+':'+playId?s.c:null;}
function countdown(t,s,x,y){if(t>s-1.5&&t<s)bubble(String(3-Math.floor((t-(s-1.5))/0.5)),x,y,C.sun);}
function flashFx(t,s){const d=t-s;if(d>=0&&d<0.18&&!RM){g.globalAlpha=0.75*(1-d/0.18);R(0,0,W,H,'#ffffff');g.globalAlpha=1;}}
function camera(k){R(k.hx-6,k.hy+2,7,5,'#222228');P(k.hx-6,k.hy+4,'#6a8aaa');R(k.hx-4,k.hy+1,3,1,'#222228');}

function sPhoto2(t){sky(['#33245a','#6a2f66','#b4456a','#e2685a','#f59a52','#ffcf78'],98);
 glow(70,94,24,'#ffd98a',0.3);disc(70,94,13,'#ffd98a');
 R(0,92,W,6,'#3a2a3a');for(let i=0;i<8;i++)tree(i*34+16,98,6+rnd(i+80)*3,t,['#2a1e30','#2a1e30','#2a1e30','#2a1e30']);palm(150,98,30,t,2,'#2a1e30');
 R(0,98,W,24,'#a0506a');for(let k=0;k<7;k++){const w=24-k*3+Math.round(Math.sin(t*3+k)*2);R(70-w/2,100+k*3,w,1,'#ffd98a');}
 R(0,122,W,22,'#4a3640');for(let i=0;i<30;i++)P(rnd(i+33)*W,123+rnd(i+34)*18,'#5a4450');
 R(60,112,1,12,'#2a1e30');R(60,112,60,1,'#2a1e30');R(119,112,1,12,'#2a1e30');R(60,117,60,1,'#2a1e30');
 const shot=3.0;person(92,134,ME,t,{mood:'happy',armL:'up',face:1});
 const k=person(184,134,KAISER,t,{face:-1,mood:'happy',armL:'out'});camera(k);
 countdown(t,shot,184,k.hy-3);
 if(t>=shot){const c=snap('pond',72,82,40,52);if(t>shot+0.25){polaroid(Math.round(200+Math.max(0,shot+0.95-t)*90),14,c,40,52,'BY KAISER');}}
 flashFx(t,shot);
 if(t>shot+1.2)bubble('PERFECT LIGHT!',184,k.hy-3);
 hud('GOLDEN HOUR');}

const FRIENDS=[
 ['MAHRUF',{skin:'#93603f',skinD:'#71462c',hair:'#151010',hairStyle:'short',beard:'stubble',top:'#3f8f6a',pants:'#2b2a33',seed:41}],
 ['NUHA',{skin:'#ad7754',skinD:'#8a5a3a',hair:'#1a1210',hairStyle:'hijab',hijab:'#c9748a',top:'#e8d6b8',topD:'#c9b796',panjabi:true,pants:'#efe2cf',seed:42}],
 ['FAISAL',{skin:'#86553a',skinD:'#663f29',hair:'#140f0c',hairStyle:'curly',top:'#c9a227',pants:'#3b4a6b',seed:43}],
 ['FOYSAL',{skin:'#a06a48',skinD:'#7c4f33',hair:'#130e0c',hairStyle:'short',beard:'stubble',top:'#5a6fa8',topD:'#43568a',pants:'#2b2a33',seed:46}],
 ['ME',ME],
 ['KAISER',KAISER],
 ['RAIHAN',{skin:'#9a6848',skinD:'#7a4e33',hair:'#120d0b',hairStyle:'short',beard:'full',top:'#d0d0c8',topD:'#aaa9a0',panjabi:true,pants:'#2a2830',seed:44}],
 ['TUSHAR',{skin:'#a3714f',skinD:'#80573a',hair:'#171210',hairStyle:'short',top:'#a04a3a',pants:'#2b2a33',seed:45,glasses:true}]];
function sGroup(t){sky(['#6aaee0','#8cc2e8','#b0d6ee','#d2e8f2'],96);glow(214,18,14,C.sunL,0.3);disc(214,18,6,C.sunL);clouds(t,10,'#f4f7f8',4,3,23);
 for(let i=0;i<12;i++)tree(i*24+2,98,6+rnd(i+90)*4,t,['#3f8a4a','#4f9a52','#6ab05a']);
 auditorium(84,98,88,74);R(0,96,W,48,'#5f9f50');for(let i=0;i<60;i++)P(rnd(i+91)*W,98+rnd(i+92)*44,'#4f8f45');
 const shot=5.0,xs=[30,48,66,84,104,126,150,170],KI=5,MI=4;
 line(226,106,219,132,'#333');line(226,106,233,132,'#333');line(226,106,226,132,'#333');R(220,100,12,7,'#222228');P(220,103,'#6a8aaa');
 if(t>1.6&&t<shot&&Math.floor(t*6)%2)P(230,101,C.red);
 const cheer=t>shot+0.5;
 FRIENDS.forEach(([n,s],i)=>{if(n==='KAISER')return;person(xs[i],130,s,t+i,{mood:'happy',glasses:s.glasses,armR:cheer&&i%2?'up':'down',armL:cheer&&i%2===0?'up':'down'});});
 let kx;if(t<1.6)kx=212;else if(t<3.4)kx=212-(t-1.6)/1.8*(212-xs[KI]);else kx=xs[KI];
 person(kx,130,KAISER,t,{face:t<1.6?-1:(t<3.4?-1:1),walk:t>=1.6&&t<3.4,mood:'happy',armR:cheer?'up':'down',armL:t<1.6?'out':'down'});
 if(t<1.6)txt('TIMER ON',214,86,C.white,1,true);
 if(t>3.4&&t<shot)txt(String(3-Math.min(2,Math.floor((t-3.4)/0.54))),226,88,C.sun,2,true);
 if(t<8.6)FRIENDS.forEach(([n],i)=>txt(n,xs[i],i%2?139:133,i===MI||i===KI?C.sun:C.white,1,true));
 if(t>=shot){const c=snap('group',18,84,176,48);if(t>shot+0.5){const py=Math.round(Math.min(6,-70+(t-shot-0.5)*160));polaroid(37,py,c,176,48,'NSTU FAMILY');}}
 flashFx(t,shot);}

function sCaps(t){sky(['#3f93d6','#5aa6dc','#7ab9e4','#a2cfec','#c8e3f1'],100);glow(40,18,16,C.sunL,0.3);disc(40,18,7,C.sunL);clouds(t,10,'#f4f7f8',5,4,29);
 for(let i=0;i<12;i++)tree(i*24+2,100,6+rnd(i+95)*4,t,['#3f8a4a','#4f9a52','#6ab05a']);
 auditorium(84,100,88,76);R(0,98,W,46,'#5f9f50');for(let i=0;i<60;i++)P(rnd(i+96)*W,100+rnd(i+97)*44,'#4f8f45');
 const TH=2.4,xs=[30,48,66,84,104,126,150,170],thrown=t>=TH,MI=4;
 const heads=[];
 FRIENDS.forEach(([n,s],i)=>{const jump=thrown&&t<TH+0.6?Math.round(Math.sin((t-TH)/0.6*Math.PI)*4):0;
  const k=person(xs[i]+36,132-jump,s,t+i,{gown:true,cap:!thrown,mood:'happy',glasses:s.glasses,armL:thrown?'up':'down',armR:thrown?'up':(t>0.8?'up':'down')});heads.push(k);});
 if(!thrown&&t>0.6){const n=Math.min(3,1+Math.floor((t-0.6)/0.6));bubble(String(n)+'!',xs[MI]+36,heads[MI].hy-4,C.sun);}
 if(thrown){const dt=t-TH;FRIENDS.forEach((f,i)=>{const h=heads[i],v=105+rnd(i+5)*25,a=48;const x=xs[i]+36+(rnd(i+7)-0.5)*30*dt,y=h.hy-3-v*dt+0.5*a*dt*dt;if(y>140)return;
   const sp=Math.floor(dt*8+i)%3;if(sp===0){R(x-3,y,7,1,'#111118');R(x-1,y+1,3,1,'#111118');}else if(sp===1){R(x-2,y-1,5,1,'#111118');R(x-2,y,5,1,'#22222c');R(x-1,y+1,3,1,'#111118');}else{R(x,y-2,1,5,'#111118');R(x+1,y,2,1,'#111118');}
   P(x+3,y+1,C.sun);P(x+3,y+2,C.sun);});
  for(let i=0;i<70;i++){const yy=((rnd(i)*H+(t-TH)*(28+rnd(i+1)*34))%H);P(rnd(i+2)*W+Math.sin(t*3+i)*2,yy,['#ffd36b','#ff7a9a','#7cc1d9','#7cc86a','#f6f2e6'][i%5]);}
  box(66,4,124,18,'#0f0d17',C.sun);txt('WE DID IT!',W/2,8,C.sun,2,true);}
 if(t>6.2){box(96,26,64,12,'#0f0d17',C.white);txt('THE END',W/2,30,C.white,1,true);}
 hud('CLASS OF NSTU',4,128,C.sun);}
function sPhoto(t){sky(['#5aa6dc','#79b8e4','#9bcbea','#c2e1f0'],100);glow(40,18,14,C.sunL,0.3);disc(40,18,6,C.sunL);clouds(t,12,'#f4f7f8',4,3,17);
 for(let i=0;i<11;i++)tree(i*26+4,104,6+rnd(i+30)*3,t,['#3f8a4a','#4f9a52','#6ab05a']);
 adminReal(112);statue(112,114);
 flowers(118,10,t);R(0,128,W,16,C.conc);R(0,128,W,1,C.concD);
 const shots=[2.6,6.0];const second=t>4.2;
 person(62,138,ME,t,{mood:'happy',armR:second?'down':'up',armL:second?'up':'down'});
 const k=person(196,138,KAISER,t,{face:-1,mood:'happy',armL:'out'});
 R(k.hx-6,k.hy+2,7,5,'#222228');P(k.hx-6,k.hy+4,'#6a8aaa');R(k.hx-4,k.hy+1,3,1,'#222228');
 shots.forEach(s=>{if(t>s-1.5&&t<s)bubble(String(3-Math.floor((t-(s-1.5))/0.5)),196,k.hy-3,C.sun);});
 if(t>3.0&&t<4.2)bubble('ONE MORE!',196,k.hy-3);
 if(t>6.4)bubble('NICE SHOT!',196,k.hy-3);
 if(t>shots[0]+0.2){const px=205+Math.max(0,shots[0]+0.9-t)*90;polaroid(Math.round(px),4);}
 if(t>shots[1]+0.2){const px=196+Math.max(0,shots[1]+0.9-t)*90;polaroid(Math.round(px),10);}
 shots.forEach(s=>{const d=t-s;if(d>=0&&d<0.18&&!RM){g.globalAlpha=0.75*(1-d/0.18);R(0,0,W,H,'#ffffff');g.globalAlpha=1;}});
 hud('PHOTO TIME');}

function s12(t){R(0,0,W,110,'#d7dfdc');R(0,106,W,38,'#7e8a8a');
 box(66,8,124,58,'#13202a','#2f3b44');txt('RESEARCH PROJECT',W/2,12,'#7cc1d9',1,true);
 const lay=[[86,3],[112,4],[140,4],[166,2]],act=Math.floor(t*3)%4,nodes=lay.map(([x,n])=>Array.from({length:n},(_,j)=>[x,40+(j-(n-1)/2)*9]));
 for(let l=0;l<3;l++)nodes[l].forEach(a=>nodes[l+1].forEach(b=>line(a[0],a[1],b[0],b[1],l===act||l+1===act?'#3f7f96':'#22404c')));
 nodes.forEach((ns,l)=>ns.forEach(([x,y])=>disc(x,y,2,l===act?C.sun:'#7cc1d9')));
 R(40,110,176,4,'#b8a586');R(44,114,3,24,'#8a7a60');R(209,114,3,24,'#8a7a60');
 const P1={skin:'#9a6848',skinD:'#7a4e33',hair:'#1c1410',hairStyle:'short',beard:'stubble',top:'#8a3b3b',pants:'#333',seed:21};
 const P2={skin:'#b07a55',skinD:'#8a5a3a',hair:'#1a1210',hairStyle:'hijab',hijab:'#2b2b38',top:'#3b6e8a',panjabi:true,pants:'#eee',seed:22};
 person(74,128,P1,t,{sit:true,glasses:true,mood:'happy',armR:'fwd'});person(182,128,P2,t,{sit:true,mood:'happy',armL:'fwd'});
 person(128,128,ME,t,{sit:true,mood:'happy',armL:'fwd',armR:'fwd'});
 R(40,106,176,4,'#c9b694');[[74,96],[128,96],[182,96]].forEach(([x,y])=>{R(x-8,y,16,10,'#2b2f3a');R(x-7,y+1,14,8,'#1b2330');R(x-6,y+3,6+Math.floor(rnd(x+Math.floor(t*3))*6),1,'#7cc86a');R(x-6,y+5,8,1,'#7cc1d9');});
 for(let k=0;k<6;k++){const an=k/6*Math.PI*2+t*1.5,r=20+Math.sin(t*3+k)*3;const sx=128+Math.cos(an)*r,sy=86+Math.sin(an)*r*0.5;P(sx,sy,C.sun);P(sx-1,sy,'#ffd36b88');P(sx+1,sy,'#ffd36b88');P(sx,sy-1,'#ffd36b88');P(sx,sy+1,'#ffd36b88');}
 const c=Math.min(1,t/5);box(4,4,92,16,'#0f0d17','#7cc86a');txt('CONFIDENCE',8,7,'#7cc86a');R(8,14,Math.round(84*c),3,'#7cc86a');}

function s13(t){sky(['#4f9fd8','#6cb2e2','#8fc6ea','#b6dcef'],100);glow(220,20,16,C.sunL,0.3);disc(220,20,7,C.sunL);clouds(t,12,'#f2f6f7',4,4,13);
 auditorium(64,104,128,84);
 R(0,104,W,40,C.conc);R(0,104,W,2,C.concD);
 const gx=[24,52,80,108,136,166,196,226];
 FRIENDS.forEach(([n,s],i)=>{person(gx[i],130,s,t+i,{gown:true,cap:true,mood:'happy',glasses:s.glasses,armR:i%2?'up':'down',armL:n==='ME'?'up':'down'});txt(n,gx[i],133+(i%2)*6,n==='ME'||n==='KAISER'?C.sun:'#2a2a2a',1,true);});
 for(let i=0;i<6;i++){const p=((t*0.8+i*0.23)%1.4);if(p>1.25)continue;const x=120+(i-2.5)*16*p,y=100-95*p+72*p*p;R(x-3,y,7,1,'#111118');R(x-1,y+1,3,1,'#111118');P(x+3,y+1,C.sun);}
 for(let i=0;i<40;i++){const y=((rnd(i)*H+t*(30+rnd(i+1)*30))%H);P(rnd(i+2)*W+Math.sin(t*3+i)*2,y,['#ffd36b','#ff7a9a','#7cc1d9','#7cc86a','#f6f2e6'][i%5]);}
 box(76,4,104,18,'#0f0d17',C.sun);txt('GRADUATED!',W/2,8,C.sun,2,true);}

function s14(t){sky(['#0f0d17','#151530','#1b1f3a','#262c56'],96);stars(t,40,50);
 box(56,8,144,56,'#0b1210','#2f3b44');
 const L=['> MY CODING JOURNEY',"> 2 YEARS. 12-15 HRS A DAY","> RESULTS FELL. I DIDN'T.",'> NEVER GIVE UP'];let n=Math.floor(t*16);
 L.forEach((s,i)=>{const k=Math.max(0,Math.min(s.length,n));n-=s.length+3;txt(s.slice(0,k),62,14+i*10,i===3?C.sun:'#7cc86a');if(k>0&&k<s.length)R(62+k*4,14+i*10,3,5,'#7cc86a');});
 R(0,96,W,48,'#2a1f2a');R(0,96,W,2,'#4a3a48');
 g.globalAlpha=0.14;g.fillStyle=C.sunL;g.beginPath();g.moveTo(118,0);g.lineTo(138,0);g.lineTo(162,124);g.lineTo(94,124);g.closePath();g.fill();g.globalAlpha=1;
 R(146,100,1,22,'#888');R(143,121,7,1,'#888');R(145,98,3,3,'#333');
 person(128,122,ME,t,{mood:'happy',armR:'out'});
 for(let i=0;i<14;i++){const x=10+i*18,y=140-(i%2)*2;disc(x,y,4,'#120f1a');R(x-6,y+3,12,6,'#120f1a');}
 hud('TODAY');}

const SC=[
 {d:8,f:s0,ch:'PROLOGUE',tag:'SONAPUR, NOAKHALI',cap:"This is my story at Noakhali Science and Technology University, the Oxford of the Coastal."},
 {d:13,f:s1,ch:'CHAPTER 01 / DAY ONE',tag:'HUMID SUN',cap:"Day one. I walked through the NSTU main gate for the first time. Then I stood in the long admission queue in front of the Haji Idris Auditorium, papers in my hand, heart running faster than the line."},
 {d:9,f:s2,ch:'CHAPTER 02 / FIRST CLASS',tag:'BRIGHT MORNING',cap:"My first class in the Department of Statistics. A new board, a new bell curve, a new life. I thought everything would be perfect."},
 {d:9,f:s3,ch:'CHAPTER 03 / FIRST FINALS',tag:'MONSOON STORM',cap:"First semester final. Noakhali's monsoon hammered the windows, and the anxiety inside me was louder than the thunder."},
 {d:9,f:s4,ch:'CHAPTER 04 / LOST',tag:'GREY EVENING',cap:"Then came the frustration. I sat by the campus pond for hours. I could not find any meaning in life."},
 {d:8,f:s5,ch:'CHAPTER 05 / SOMEONE',tag:'GOLDEN SUNSET',cap:"Then I met a girl. We walked along the pond at sunset, and I fell in love."},
 {d:9,f:s6,ch:'CHAPTER 06 / THE TURN',tag:'DUSK',cap:"After some days I realized I was wasting my time. I needed real skills. So I made a decision: I will learn AI."},
 {d:12,f:s7,ch:'CHAPTER 07 / SALAM HALL',tag:'DAY AFTER DAY',cap:"Every day I went to Salam Hall to study and code, 12 to 15 hours a day. Day after day, for two years."},
 {d:8,f:s8,ch:'CHAPTER 08 / THE BENCH',tag:'LATE NIGHT',cap:"Most nights I never made it to bed. I fell asleep on the bench in the Salam Hall reading room, with the code still open."},
 {d:9,f:sCook,ch:'CHAPTER 09 / HOME FOOD',tag:'HALL NIGHT',cap:"Some nights Mahruf cooked for me in the hall. While I was lost in code, he made sure I never forgot to eat."},
 {d:10,f:sAdda,ch:'CHAPTER 09 / ADDA',tag:'TEA STALL EVENING',cap:"But life was not only code. Evenings at the cha stall, all eight of us: Kaiser, Mahruf, Nuha, Faisal, Foysal, Raihan, Tushar and me. Endless gossip, laughing until our tea went cold."},
 {d:10,f:s9,ch:'CHAPTER 09 / 2 AM WALKS',tag:'CLEAR NIGHT',cap:"Sometimes I got depressed and felt I was going to give up. At 12 or 2 AM I walked the campus alone and talked to myself until I believed again."},
 {d:9,f:s10,ch:'CHAPTER 10 / THE RESULTS',tag:'DRIZZLE',cap:"My results kept falling. Some semesters I wrote well and still did not get the grade I deserved. It hurt. But I never gave up."},
 {d:9,f:s11,ch:'CHAPTER 11 / KAISER',tag:'SOFT CLOUDS',cap:"I found great friends on this road. Kaiser most of all: always supportive, always the one pushing me forward, and always carrying his camera."},
 {d:9,f:sPhoto,ch:'CHAPTER 12 / SNAPSHOTS',tag:'AFTERNOON SUN',cap:"I always loved taking photos, and Kaiser was always the one capturing them. He is a great photographer. Here he shoots me in front of the Proshasonik Bhaban."},
 {d:9,f:s12,ch:'CHAPTER 13 / THE CHANCE',tag:'LAB LIGHTS',cap:"After two years, I got the chance to work directly with PhD candidates on their research project. I was so happy. For the first time, I truly believed in myself."},
 {d:8,f:sPhoto2,ch:'CHAPTER 14 / GOLDEN HOUR',tag:'SUNSET BY THE POND',cap:"Kaiser never missed a moment. Wherever we went on campus, his camera was ready, and so was my pose."},
 {d:11,f:sDefense,ch:'CHAPTER 16 / THE DEFENSE',tag:'DEPT. OF STATISTICS',cap:"Before graduation came my BSc research defense. I faced the panel, answered every question, and defended my research project. Kaiser was there, of course, to capture it."},
 {d:8,f:s13,ch:'CHAPTER 15 / GRADUATION',tag:'BLUE SKY',cap:"Strong on my dream and loyal to it, I graduated, side by side with all of my friends."},
 {d:11,f:s14,ch:'CHAPTER 16 / TODAY',tag:'SPOTLIGHT',cap:"Now I share my coding journey. Results fell, nights were long, I almost quit. But I never gave up. That was my full journey."},
 {d:10,f:sGroup,ch:'CHAPTER 17 / ONE LAST PHOTO',tag:'ALL OF US',cap:"One last photo. Kaiser set the timer and ran into the frame with Mahruf, Nuha, Faisal, Foysal, Raihan, Tushar and me. My NSTU family."},
 {d:11,f:sCaps,ch:'FINALE / CAPS IN THE SKY',tag:'GRADUATION DAY',cap:"Then we put on our graduation gowns, counted to three, and threw our caps into the Noakhali sky. I never gave up, and I was never alone. We did it."}
];

SC.forEach((s,i)=>{if(/^CHAPTER \d+/.test(s.ch))s.ch=s.ch.replace(/\d+/,String(i).padStart(2,'0'));});
