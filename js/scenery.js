/* Scenery: sky, weather, trees, and the real NSTU buildings (main gate, Haji Idris Auditorium, Proshasonik Bhaban and statue, Salam Hall, Shaheed Minar, Central Library). */
/* scenery */
function clouds(t,y,col,n,sp,seed=1){for(let i=0;i<n;i++){const cx=((rnd(i+seed)*W*1.6+t*sp*(0.6+rnd(i+seed*3)))%(W+70))-35;const cy=y+rnd(i+seed*7)*12;const s=4+Math.floor(rnd(i+seed*5)*5);disc(cx,cy,s,col);disc(cx+s,cy+1,s-1,col);disc(cx-s,cy+2,s-2,col);R(cx-2*s,cy+2,4*s,s-1,col);}}
function rain(t,n,col,len=4,sp=1){for(let i=0;i<n;i++){const speed=(150+rnd(i+9)*80)*sp;const yy=((rnd(i+3)*(H+20)+t*speed)%(H+20))-10;const xx=((rnd(i)*(W+40)-yy*0.3)%(W+40)+W+40)%(W+40)-20;R(xx,yy,1,len,col);}}
function stars(t,n,maxY=80){for(let i=0;i<n;i++){const tw=(Math.floor(t*4+i*7)%11)===0;P(rnd(i+0.5)*W,rnd(i+77)*maxY,tw?C.sun:(i%3?'#cfd6ff':'#7f87b9'));}}
function moon(x,y){glow(x,y,13,'#f3ecd0',0.12);disc(x,y,7,'#f3ecd0');P(x-2,y-1,'#d6cca8');P(x+2,y+2,'#d6cca8');R(x+1,y-3,2,1,'#d6cca8');}
function palm(px,gy,h,t,ph=0,sil){const sw=RM?0:Math.sin(t*1.4+ph);let tx=px,ty=gy;for(let i=0;i<h;i++){tx=px+Math.sin(i/h*1.4)*4*(i/h)+sw*(i/h)*0.8;ty=gy-i;R(tx,ty,2,1,sil||(i%3?C.trunk:'#55392a'));}
 const fr=[[-1,0.35],[1,0.35],[-0.7,-0.15],[0.7,-0.15],[-1,0.85],[1,0.85],[0.1,-0.5]];
 fr.forEach(([dx,dy],k)=>{for(let j=1;j<14;j++){const fx=tx+1+dx*j+sw*j*0.08;const fy=ty+dy*j+0.045*j*j*(Math.abs(dx)+0.2);R(fx,fy,1,1,sil||(k%2?C.leaf:C.green));if(j%2)R(fx,fy+1,1,1,sil||C.gd);}});R(tx-1,ty,4,3,sil||'#5e4a2a');}
function tree(px,gy,s,t,cols){const sw=RM?0:Math.round(Math.sin(t*1.2+px)*0.6);R(px-1,gy-s*1.4,3,s*1.4,cols[3]||C.trunk);disc(px+sw,gy-s*1.9,s,cols[0]);disc(px-s*0.7+sw,gy-s*1.5,s*0.75,cols[0]);disc(px+s*0.75+sw,gy-s*1.55,s*0.7,cols[1]);disc(px-1+sw,gy-s*2.2,s*0.6,cols[2]);}
function fan(cx,cy,t){R(cx,cy-6,1,6,'#555');R(cx-2,cy,5,2,'#444');const p=RM?0:Math.floor(t*14)%3;const L=[14,9,4][p];R(cx-L,cy+(p?1:0),L*2+1,1,'#6c6c72');}
function clock(cx,cy,r,a){disc(cx,cy,r+1,'#3a3a3a');disc(cx,cy,r,C.white);for(let k=0;k<12;k++){const an=k/12*Math.PI*2;P(cx+Math.round(Math.sin(an)*(r-1)),cy-Math.round(Math.cos(an)*(r-1)),'#666');}line(cx,cy,cx+Math.sin(a)*(r-2),cy-Math.cos(a)*(r-2),C.red);line(cx,cy,cx+Math.sin(a/12)*(r-4),cy-Math.cos(a/12)*(r-4),'#222');}
function lamp(x,gy,c='#2a2a33'){R(x,gy-30,1,30,c);R(x-2,gy-31,5,2,c);glow(x,gy-28,12,C.sun,0.12);glow(x,gy-28,6,C.sun,0.25);P(x,gy-29,C.sunL);P(x-1,gy-29,C.sunL);P(x+1,gy-29,C.sunL);}
function minar(x,gy,c,hi){glow(x,gy-34,16,'#c0303a',0.35);R(x-16,gy-4,32,4,c);R(x-11,gy-8,22,4,c);for(let k=0;k<50;k++){const w=Math.max(1,Math.round(6-k/9));R(x-w,gy-8-k,2*w,1,c);}for(let k=2;k<16;k++)P(x,gy-8-50+k,hi);}
/* Haji Idris Auditorium, from the real photo: cream 5 floors, tan pilasters, balcony bays, tall right tower, arched ground floor */
function auditorium(x,gy,w,h){x=Math.round(x);const fl=5,fh=Math.floor((h-4)/fl),top=gy-fl*fh-4;
 const lw=Math.round(w*0.56),mw=Math.round(w*0.26),tw=w-lw-mw,mx=x+lw,tx=mx+mw,tan='#c99d78',wall='#ece4cf',dk='#3a3f44';
 R(x,top,lw+mw,gy-top,wall);R(x,top,lw+mw,2,'#f6f1e3');R(tx,top-6,tw,gy-top+6,'#f0e9d7');R(tx,top-6,tw,2,'#f8f4ea');
 const bays=Math.max(3,Math.round(lw/11)),bw=lw/bays;
 for(let f=0;f<fl;f++){const y=top+3+f*fh,ground=f===fl-1;R(x,y+fh-2,lw+mw,1,'#d8cdb4');
  for(let b=0;b<bays;b++){const bx=Math.round(x+b*bw)+3,iw=Math.round(bw)-5;
   if(ground){R(bx,y+2,iw,fh-2,'#5d5a52');P(bx,y+2,wall);P(bx+iw-1,y+2,wall);}
   else{R(bx,y+3,2,4,dk);R(bx+iw-2,y+3,2,4,dk);if(f===0)R(bx+3,y+4,iw-6,1,dk);}}}
 for(let b=0;b<=bays;b++)R(Math.round(x+b*bw),top,2,gy-top,tan);
 for(let f=0;f<fl;f++){const y=top+3+f*fh;if(f<fl-1){R(mx+3,y+1,mw-6,fh-4,'#a7a092');R(mx+3,y+1,mw-6,1,'#8a8478');R(mx+3,y+fh-6,mw-6,1,'#4a4a48');for(let k=mx+4;k<mx+mw-4;k+=3)R(k,y+fh-6,1,3,'#4a4a48');}}
 R(mx,top,2,gy-top,tan);R(mx+mw-2,top,2,gy-top,tan);
 R(tx,top-6,2,gy-top+6,tan);R(tx+tw-2,top-6,2,gy-top+6,tan);const sx=tx+Math.round(tw/2)-2;R(sx,top,4,gy-top-fh,dk);for(let y=top+3;y<gy-fh;y+=4)R(sx,y,4,1,'#5a6066');
 R(mx+3,gy-fh+2,mw-6,fh-2,'#2f2e2c');R(mx,gy-fh-1,mw,3,'#f6f1e3');R(x-4,gy-1,w+8,1,'#b9b19d');
 const s='HAJI IDRIS AUDITORIUM',sw=s.length*4+5,sc=mx+Math.round(mw/2);box(Math.max(x,Math.min(x+w-sw,sc-Math.round(sw/2))),gy-fh-11,sw,9,'#f8f4ea','#3a3530');txt(s,Math.max(x,Math.min(x+w-sw,sc-Math.round(sw/2)))+3,gy-fh-9,'#3a3530');}

/* Bhasha Shahid Abdus Salam Hall exterior, from the real photo */
function casuarina(x,gy,h,t){const sw=RM?0:Math.sin(t*1.3+x)*1;R(x,gy-h,2,h,'#5a4636');R(x,gy-8,2,2,'#c0303a');for(let k=0;k<h-10;k+=3){const w=4+Math.round(Math.sin(k*0.7+x)*2)+Math.round((h-k)/6);R(x-w+sw*(k/h),gy-h+k,w*2+2,2,k%2?'#3f6a3a':'#4f7d45');}}
function salamExt(t){sky(['#7fb8e4','#9ccbec','#bcdcf0','#dcedf5'],100);clouds(t,10,'#ffffff',4,3,31);
 const x=40,w=176,gy=104,fh=16,top=gy-4*fh-4,cx=x+w/2;
 R(x,top,w,gy-top,'#efe6d2');R(x-2,top-4,w+4,5,'#e2d8c2');R(cx-10,top-9,20,6,'#e6ddc8');
 const bays=6,bw=w/bays;
 for(let f=0;f<4;f++){const y=top+2+f*fh;for(let b=0;b<bays;b++){const bx=Math.round(x+b*bw)+5,iw=Math.round(bw)-10;
   if(f===3&&(b===2||b===3))continue;R(bx,y+2,iw,8,'#2c3a48');for(let m=bx+3;m<bx+iw;m+=4)R(m,y+2,1,8,'#6a8094');R(bx,y+5,iw,1,'#6a8094');R(bx-1,y+1,iw+2,1,'#f8f2e4');
   if((f+b)%2===0&&f<3){R(bx-1,y+11,iw+2,4,'#e8dfc8');R(bx-1,y+15,iw+2,1,'#c9bfa6');}}}
 R(cx-11,gy-14,22,14,'#24282c');R(cx-13,gy-16,26,2,'#f3ecdc');
 const s='BHASHA SHAHID ABDUS SALAM HALL',sw=s.length*4+5;box(Math.round(cx-sw/2),gy-26,sw,9,'#f8f4ea','#2a2a2a');txt(s,Math.round(cx-sw/2)+3,gy-24,'#2a2a2a');
 R(0,gy,W,H-gy,'#5fa64a');for(let i=0;i<60;i++)P(rnd(i+140)*W,gy+2+rnd(i+141)*40,'#4f9640');
 for(let y=gy;y<H;y++){const hw=11+(y-gy)*1.3;R(cx-hw,y,hw*2,1,(y%5)?'#a8705a':'#9a6450');}
 casuarina(22,112,64,t);casuarina(232,116,70,t);casuarina(250,120,58,t);tree(8,118,12,t,['#2f6a34','#3f7a3e','#5a9a4a']);
 const p=Math.min(1,t/2.4);person(cx,142-p*36,ME,t,{walk:p<1,face:1});
 hud('SALAM HALL');}

/* NSTU Shaheed Minar, from the real photo: white pointed frame, black panel, red sun, round base, orange steps */
function minarReal(x,gy,night){const wh=night?'#cdd3e4':'#f4f4f0',bk='#121216',st=night?'#7a3a2a':'#d9653a',stL=night?'#8e4632':'#ef8a5a',sun=night?'#b0202c':'#d8222c';
 if(night){glow(x,gy-46,36,'#5a6aa8',0.35);glow(x,gy-46,24,'#7a88c0',0.3);}
 for(let i=0;i<5;i++){const hw=46-i*6;R(x-hw,gy-2-i*2,hw*2,2,i%2?st:stL);}
 R(x-56,gy-24,10,14,wh);R(x+46,gy-24,10,14,wh);
 R(x-16,gy-20,32,8,wh);R(x-16,gy-20,32,1,'#ffffff');
 const H2=52,base=gy-20;
 for(let k=0;k<H2;k++){const f=k/H2;const hw=Math.round(4+13*Math.pow(f,1.6));const y=base-k;const bw=2+(f>0.75?1:0);
  if(k>H2-8){const cut=Math.round((k-(H2-8))*1.6);R(x-hw,y,bw,1,wh);R(x+hw-bw,y,bw,1,wh);if(hw-bw-cut>2){R(x-hw+bw,y,Math.max(0,hw-bw-cut-1),1,bk);R(x+cut+1,y,Math.max(0,hw-bw-cut-1),1,bk);}}
  else{R(x-hw,y,hw*2,1,bk);R(x-hw,y,bw,1,wh);R(x+hw-bw,y,bw,1,wh);}}
 R(x-1,base-H2-4,2,H2+4,wh);if(night)glow(x,base-34,9,sun,0.35);disc(x,base-34,5,sun);P(x-2,base-36,'#ff8a8a');}

/* NSTU Central Library, from the real photo: cream, orange brick pilasters, big dark glass, overhanging roof slab */
function libraryReal(x,gy,w,h){const fl=4,fh=Math.floor((h-6)/fl),top=gy-fl*fh;const or='#d9844a',orD='#c2703a',wall='#efe4c8';
 R(x,top,w,gy-top,wall);R(x-5,top-4,w+10,4,'#e9e0c8');R(x-5,top,w+10,1,'#b8ae96');
 const bw=13;for(let px=x;px<x+w;px+=bw){for(let f=0;f<fl;f++){const y=top+2+f*fh,big=f===1||f===3;
   if(px+bw>x+w)break;if(big){R(px+4,y+1,bw-5,fh-3,'#22262b');R(px+4+Math.floor((bw-5)/2),y+1,1,fh-3,'#4a5058');R(px+4,y+Math.floor(fh/2),bw-5,1,'#4a5058');}
   else{R(px+5,y+3,bw-7,fh-6,'#2c3036');R(px+5+Math.floor((bw-7)/2),y+3,1,fh-6,'#555c64');R(px+4,y+2,bw-5,1,'#f8f0dc');}}
  R(px,top,3,gy-top,or);for(let y=top;y<gy;y+=2)P(px+((y/2)%2),y,orD);}
 R(x,gy-4,w,1,'#8a8a8a');for(let k=x+2;k<x+w;k+=4)R(k,gy-4,1,4,'#8a8a8a');
 R(x-16,gy-22,22,3,or);R(x-15,gy-19,2,19,or);R(x+2,gy-19,2,19,or);
 const s='CENTRAL LIBRARY',sw=s.length*4+5;box(Math.round(x+w/2-sw/2),top-14,sw,9,'#2f5f8f',C.white);txt(s,Math.round(x+w/2-sw/2)+3,top-12,C.white);}
function desk(x,y,w=24){R(x-w/2,y,w,3,C.wood);R(x-w/2,y+3,w,9,C.woodD);R(x-w/2,y+3,w,1,'#3f2915');}

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
