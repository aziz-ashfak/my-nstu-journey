/* People: pixel character sprites for me, Kaiser and friends. */
/* people */
const ME={skin:'#8d5a3c',skinD:'#6b4128',hair:'#16100d',hairStyle:'curly',beard:'stubble',top:'#2f57b5',topD:'#1d3a85',pattern:'#a9c3f2',pants:'#2b2a33',shoe:'#1a1416',seed:0};
const ME_F=Object.assign({},ME,{top:'#2d4fc4',topD:'#1f3a99',pattern:null,pants:'#d9cdb4',shoe:'#3a2a20'});
const ME_P=Object.assign({},ME,{panjabi:true,top:'#6e4b7c',topD:'#543a62',pattern:null,pants:'#ddd5c6'});
const KAISER={skin:'#a06e4c',skinD:'#7c5136',hair:'#110c0a',hairStyle:'short',beard:'full',top:'#1d1b21',topD:'#3a3742',trim:'#a3a0ad',panjabi:true,big:true,tall:true,pants:'#2a2830',shoe:'#151215',seed:3};
const GIRL={skin:'#a8724f',skinD:'#86563a',hair:'#1d1411',hairStyle:'long',top:'#b4486a',topD:'#8e3453',panjabi:true,pants:'#efe2cf',seed:5};
const TEACH={skin:'#9a6848',skinD:'#7a4e33',hair:'#9a958e',hairStyle:'short',top:'#e2dccd',topD:'#bdb6a6',pants:'#3a3a44',seed:9};
const SK=['#8d5a3c','#a06e4c','#7a4b30','#b07a55','#6d4229'];
const TOPS=['#c9a227','#3f8f6a','#d0d0c8','#a04a3a','#5a6fa8','#d98fa2','#3a3a4e','#7aa6a0'];
function stu(i){const r=k=>rnd(i*9.7+k);const sk=SK[Math.floor(r(2)*5)];const top=TOPS[Math.floor(r(5)*8)];
 if(r(1)<0.42)return{skin:sk,skinD:shade(sk),hair:'#1a1210',hairStyle:r(3)<0.6?'hijab':'long',hijab:['#e8d6b8','#2b2b38','#c9748a','#6c8fb0'][Math.floor(r(4)*4)],top,topD:shade(top),panjabi:true,pants:'#e7d9c9',seed:i};
 return{skin:sk,skinD:shade(sk),hair:'#151010',hairStyle:r(3)<0.5?'short':'curly',beard:r(6)<0.3?'stubble':null,top,topD:shade(top),pants:['#2b2a33','#3b4a6b','#6b5a45'][Math.floor(r(7)*3)],seed:i};}

function person(cx,gy,s,t=0,o={}){
 cx=Math.round(cx);gy=Math.round(gy);
 const b=s.big?1:0,dir=o.face||1,long=s.panjabi||o.gown;
 const tw=8+b*2,hw=6+b,hh=7+b;
 const step=o.walk&&!RM?Math.floor(t*6)%2:0,bob=o.walk&&step?1:0;
 const legH=7+b+(s.tall&&!o.sit?3:0),tH=o.sit?9+b:(long?13:9)+b+(s.tall?1:0);
 const L=cx-tw/2;
 const top=o.gown?'#1d1c26':s.top,topD=o.gown?'#34333f':(s.topD||shade(s.top));
 const shoe=s.shoe||'#1a1416';
 if(o.sit){const tx=dir>0?cx-3:cx-7;R(tx,gy-5,10,3,s.pants);const kx=dir>0?cx+5:cx-7;R(kx,gy-5,2,5,s.pants);R(dir>0?kx:kx-1,gy-1,3,1,shoe);}
 else{const l1=cx-3-b,l2=cx+1+b,o1=o.walk?(step?-1:1):0,sx=dir>0?0:-1;R(l1+o1,gy-legH,2,legH,s.pants);R(l2-o1,gy-legH,2,legH,s.pants);R(l1+o1+sx,gy-1,3,1,shoe);R(l2-o1+sx,gy-1,3,1,shoe);}
 const yT=o.sit?gy-3-tH:gy-legH-tH+(long?5:0)-bob;
 R(L,yT,tw,tH,top);
 if(long&&!o.sit)R(L-1,yT+tH-4,tw+2,4,top);
 if(s.pattern&&!o.gown){for(let k=0;k<tw*tH;k++)if(rnd(k*3.7+11)<0.24)P(L+k%tw,yT+Math.floor(k/tw),s.pattern);}
 if(long){for(let k=1;k<6;k++)P(cx-1,yT+k,topD);if(s.trim&&!o.gown&&!o.sit)R(L-1,yT+tH-1,tw+2,1,s.trim);}
 else R(cx-1,yT+1,1,tH-1,topD);
 P(cx-1,yT,s.skinD);P(cx,yT,s.skinD);if(!long){P(cx-2,yT,s.pattern||topD);P(cx+1,yT,s.pattern||topD);}
 const armLen=(long?9:8)+b,sleeve=long?armLen-1:3;
 const A=(side,pose)=>{const x0=side<0?L-2:L+tw,y0=yT+1;
  for(let k=0;k<armLen;k++){const c=k<sleeve?((k===sleeve-1&&s.trim&&!o.gown)?s.trim:top):s.skin;
   if(pose==='up')R(x0,y0-k,2,1,c);
   else if(pose==='out')R(side<0?L-1-k:L+tw+k,y0+1,1,2,c);
   else if(pose==='fwd'){if(k<4)R(x0,y0+k,2,1,c);else R(x0-side*(k-3),y0+4,1,2,c);}
   else R(x0,y0+k,2,1,c);}};
 A(-1,o.armL||'down');A(1,o.armR||'down');
 if(o.tie){R(cx-1,yT,2,1,'#26407e');R(cx-1,yT+1,1,6,'#26407e');P(cx,yT+2,'#26407e');}
 if(o.book){R(cx-3,yT+3,7,8,'#1a1a1e');P(cx,yT+5,C.sun);R(cx-2,yT+7,5,1,'#55555c');R(L-1,yT+6,2,2,s.skin);R(L+tw-1,yT+6,2,2,s.skin);}
 if(o.papers){const px=dir>0?L+tw+1:L-6;R(px,yT+5,5,6,C.white);R(px+1,yT+7,3,1,'#9a9aa8');R(px+1,yT+9,3,1,'#9a9aa8');}
 R(cx-1,yT-1,2,1,s.skinD);
 const hx=cx-Math.floor(hw/2),hy=yT-1-hh;
 R(hx,hy,hw,hh,s.skin);P(hx-1,hy+3,s.skin);P(hx+hw,hy+3,s.skin);R(hx,hy+hh-1,hw,1,s.skinD);
 const hr=s.hair;
 if(s.hairStyle==='curly'){R(hx-1,hy-2,hw+2,3,hr);for(let i=0;i<hw+2;i+=2)P(hx-1+i,hy-3,hr);R(hx-1,hy+1,1,2,hr);R(hx+hw,hy+1,1,1,hr);}
 else if(s.hairStyle==='short'){R(hx,hy-2,hw,3,hr);R(hx-1,hy-1,1,3,hr);R(hx+hw,hy-1,1,3,hr);}
 else if(s.hairStyle==='long'){R(hx-1,hy-2,hw+2,3,hr);R(hx-1,hy,2,hh+5,hr);R(hx+hw-1,hy,2,hh+5,hr);}
 else if(s.hairStyle==='hijab'){R(hx-1,hy-2,hw+2,hh+4,s.hijab);R(hx-2,hy+hh-1,hw+4,3,s.hijab);R(hx+1,hy+1,hw-2,hh-2,s.skin);}
 const e1=hx+(dir>0?2:1),e2=e1+2+b,ey=hy+3;
 const bl=o.closed||(!RM&&Math.floor(t*8+(s.seed||0)*13)%37===0);
 if(o.glasses){R(e1-1,ey,e2-e1+3,1,'#2a2a2a');}
 const ec=bl?s.skinD:'#120b09';P(e1,ey,ec);P(e2,ey,ec);
 let my=hy+hh-2,mc=shade(s.skin,0.55);
 if(s.beard==='full'){R(hx,hy+hh-3,hw,3,hr);R(hx+1,hy+hh,hw-2,2,hr);P(hx,hy+hh-4,hr);P(hx+hw-1,hy+hh-4,hr);my=hy+hh-3;mc='#c58a6a';}
 else if(s.beard==='stubble'){for(let i=0;i<hw;i+=2)P(hx+i,hy+hh-1,'#3a2418');P(hx,hy+hh-2,'#4a2e1e');P(hx+hw-1,hy+hh-2,'#4a2e1e');}
 const mood=o.mood||'neutral';
 if(mood==='happy'){P(e1,my-1,mc);R(e1+1,my,e2-e1-1,1,mc);P(e2,my-1,mc);}
 else if(mood==='sad'){P(e1,my,mc);R(e1+1,my-1,e2-e1-1,1,mc);P(e2,my,mc);}
 else R(e1+1,my,e2-e1-1,1,mc);
 if(o.cap){R(hx-2,hy-3,hw+4,1,'#111118');R(hx,hy-2,hw,2,'#111118');R(hx+hw+1,hy-2,1,4,C.sun);}
 if(o.sweat){const d=Math.floor((t*6)%5);P(hx+hw+1,hy+1+d,'#8fd3f0');P(hx-2,hy+2+((d+2)%5),'#8fd3f0');}
 return{hx,hy,yT};}

function sleeper(x,y,s,t){R(x-1,y-8,3,7,s.hair);R(x+2,y-8,7,6,s.skin);P(x+6,y-6,s.skinD);P(x+7,y-6,s.skinD);R(x+2,y-3,7,1,s.skinD);
 R(x+9,y-7,16,6,s.top);for(let k=0;k<96;k++)if(rnd(k*2.3)<0.22)P(x+9+k%16,y-7+Math.floor(k/16),s.pattern);
 R(x+25,y-6,18,4,s.pants);R(x+43,y-8,2,5,s.shoe);R(x+12,y-4,9,2,s.skin);
 R(x+13,y-15,11,8,'#2b2f3a');R(x+14,y-14,9,6,'#1b2330');for(let k=0;k<4;k++)R(x+15,y-13+k*1.5,2+Math.floor(rnd(k+Math.floor(t))*6),1,['#7cc86a','#7cc1d9','#ffd36b','#d98fa2'][k]);R(x+11,y-7,14,1,'#555');
 glow(x+18,y-11,9,'#7cc1d9',0.15);
 for(let k=0;k<3;k++){const p=((t*0.7+k*0.33)%1);txt('Z',x+2+k*5+p*6,y-14-p*22,'#cfd6ff',k===2?2:1);}}
