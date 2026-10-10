/* Core: canvas setup, palette, drawing helpers and the 3x5 pixel font. */
const W=256,H=144;
const cv=document.getElementById('cv');const g=cv.getContext('2d');g.imageSmoothingEnabled=false;
const VIDEO=/[?&]video=1/.test(location.search);
const RM=!VIDEO&&window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
const imMe=new Image();imMe.src='assets/img/me.png';
const imDef=new Image();imDef.src='assets/img/defense.png';
const imK=new Image();imK.src='assets/img/kaiser.png';

const C={ink:'#0f0d17',sun:'#ffd36b',sunL:'#fff1b8',gd:'#1f4d2f',green:'#2f7a3f',leaf:'#57a64a',conc:'#c9c2b2',concD:'#8f897d',
brick:'#a5553a',cream:'#e8e0cc',white:'#f6f2e6',wood:'#7a5236',woodD:'#55381f',trunk:'#6b4c33',red:'#d9443f',chalk:'#e9efe6',board:'#23402f'};

function R(x,y,w,h,c){g.fillStyle=c;g.fillRect(Math.round(x),Math.round(y),Math.round(w),Math.round(h));}
function P(x,y,c){R(x,y,1,1,c);}
function rnd(i){const s=Math.sin(i*127.1+311.7)*43758.5453;return s-Math.floor(s);}
function disc(cx,cy,r,c){cx=Math.round(cx);cy=Math.round(cy);r=Math.max(1,Math.floor(r));for(let y=-r;y<=r;y++){const w=Math.floor(Math.sqrt(r*r-y*y));R(cx-w,cy+y,w*2+1,1,c);}}
function glow(cx,cy,r,c,a){g.globalAlpha=a;disc(cx,cy,r,c);g.globalAlpha=1;}
function shade(h,f=0.75){const n=parseInt(h.slice(1,7),16);const r=(n>>16&255)*f|0,gg=(n>>8&255)*f|0,b=(n&255)*f|0;return'#'+((1<<24)|(r<<16)|(gg<<8)|b).toString(16).slice(1);}
function mix(a,b,k){const A=parseInt(a.slice(1),16),B=parseInt(b.slice(1),16);const ch=s=>Math.round((A>>s&255)*(1-k)+(B>>s&255)*k);return'#'+((1<<24)|(ch(16)<<16)|(ch(8)<<8)|ch(0)).toString(16).slice(1);}
function sky(cols,h=H){const bh=h/cols.length;cols.forEach((c,i)=>{const y=Math.round(i*bh);R(0,y,W,Math.ceil(bh)+1,c);if(i>0)for(let x=i%2;x<W;x+=2)P(x,y-1,c);});}
function line(x0,y0,x1,y1,c){x0=Math.round(x0);y0=Math.round(y0);x1=Math.round(x1);y1=Math.round(y1);const dx=Math.abs(x1-x0),dy=-Math.abs(y1-y0),sx=x0<x1?1:-1,sy=y0<y1?1:-1;let e=dx+dy;for(let i=0;i<400;i++){P(x0,y0,c);if(x0===x1&&y0===y1)break;const e2=2*e;if(e2>=dy){e+=dy;x0+=sx;}if(e2<=dx){e+=dx;y0+=sy;}}}

/* 3x5 pixel font */
const F={A:'010101111101101',B:'110101110101110',C:'011100100100011',D:'110101101101110',E:'111100110100111',F:'111100110100100',G:'011100101101011',H:'101101111101101',I:'111010010010111',J:'001001001101010',K:'101101110101101',L:'100100100100111',M:'101111111101101',N:'110101101101101',O:'010101101101010',P:'110101110100100',Q:'010101101110011',R:'110101110101101',S:'011100010001110',T:'111010010010010',U:'101101101101111',V:'101101101101010',W:'101101111111101',X:'101101010101101',Y:'101101010010010',Z:'111001010100111',
'0':'111101101101111','1':'010110010010111','2':'110001010100111','3':'110001010001110','4':'101101111001001','5':'111100110001110','6':'011100111101111','7':'111001010010010','8':'111101111101111','9':'111101111001110',
'.':'000000000000010','!':'010010010000010','?':'110001010000010',':':'000010000010000','-':'000000111000000','>':'100010001010100','/':'001001010100100',',':'000000000010100','+':'000010111010000',"'":'010010000000000','_':'000000000000111','=':'000111000111000','(':'010100100100010',')':'010001001001010'};
function txt(s,x,y,c,sc=1,center=false){s=String(s).toUpperCase();const w=s.length*4*sc-sc;if(center)x=Math.round(x-w/2);for(let i=0;i<s.length;i++){const d=F[s[i]];if(!d)continue;for(let k=0;k<15;k++)if(d[k]==='1')R(x+i*4*sc+(k%3)*sc,y+Math.floor(k/3)*sc,sc,sc,c);}return w;}
function box(x,y,w,h,bg,bd){R(x+1,y,w-2,h,bd);R(x,y+1,w,h-2,bd);R(x+1,y+1,w-2,h-2,bg);}
function hud(s,x=4,y=4,c=C.sun){box(x,y,s.length*4+7,11,'#0f0d17',c);txt(s,x+4,y+3,c);}
function bubble(s,cx,by,bg=C.white,fg=C.ink){cx=Math.round(cx);const w=s.length*4+5,h=11;let x=Math.round(cx-w/2);x=Math.max(2,Math.min(W-w-2,x));const y=Math.round(by-h-3);box(x,y,w,h,bg,fg);R(cx-1,y+h-1,3,1,bg);P(cx-1,y+h,fg);P(cx,y+h,bg);P(cx+1,y+h,fg);P(cx,y+h+1,fg);txt(s,x+3,y+3,fg);}
const HEART=['01010','11111','11111','01110','00100'];
function heart(x,y,c){HEART.forEach((r,j)=>{for(let i=0;i<5;i++)if(r[i]==='1')P(x+i,y+j,c);});}
