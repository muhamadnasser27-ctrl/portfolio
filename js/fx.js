(function(){
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine=matchMedia('(hover: hover) and (pointer: fine)').matches;
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];

/* scroll progress */
const bar=$('#prog');
const prog=()=>{const h=document.documentElement;bar.style.width=(h.scrollTop/((h.scrollHeight-h.clientHeight)||1)*100)+'%'};
addEventListener('scroll',prog,{passive:true});prog();

/* nav scrollspy */
const links=$$('#links a');
const spy=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){links.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id))}}),{rootMargin:'-45% 0px -50% 0px'});
['home','work','skills','problems','playground','experience','about'].forEach(id=>{const el=document.getElementById(id);el&&spy.observe(el)});

/* counters */
const cio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){window.animNum(e.target);cio.unobserve(e.target)}}),{threshold:.5});
$$('[data-cnt]').forEach(el=>cio.observe(el));

/* hero search-console card: type the query, fill bars, replay */
const type=$('#scType');const q='seo results · saudi e-commerce';
const fill=()=>window.fillBars&&window.fillBars();
if(RM){type.textContent=q;fill();}
else{let i=0;(function t(){type.textContent=q.slice(0,i++);if(i<=q.length)setTimeout(t,45+Math.random()*40)})();
  setTimeout(fill,1300);
  setInterval(()=>{const hero=$('#home');if(document.hidden||hero.getBoundingClientRect().bottom<0)return;$$('#scRows .bar i').forEach(i=>i.style.width='0%');setTimeout(fill,350)},9000);
  /* rotating focus line */
  const words=['SEO','Paid search','Paid social','Lead generation','Customer acquisition','Marketing analytics'];let wi=0,ci=0,del=false;const el=$('#rot');
  (function tick(){const w=words[wi];ci+=del?-1:1;el.textContent=w.slice(0,ci);let t=del?35:75;if(!del&&ci===w.length){del=true;t=1400}else if(del&&ci===0){del=false;wi=(wi+1)%words.length;t=300}setTimeout(tick,t)})();
}
if(RM){$('#rot').textContent='SEO · Paid media · Customer acquisition'}

/* reveal on scroll */
if(!RM){
  const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target)}}),{threshold:.1});
  $$('.shead,.boss,.cgrid .cc,.orbwrap,.jar,.detail,.combo,.mcard,.pg,.xp-item,.xp-detail,.edu .card,.abt>div,details,.cgrid2>*,section h3').forEach((el,i)=>{el.classList.add('rv');el.style.transitionDelay=(i%4)*70+'ms';io.observe(el)});
}

if(RM||!fine)return;

/* hero: spotlight, parallax glows, letter proximity, card tilt */
const hero=$('#home'),g1=$('.g1'),g2=$('.g2'),av=$('.av',hero),sc=$('#sc'),letters=$$('#hero-name .ch .in');
let mx=0,my=0,raf=0;
hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();mx=e.clientX;my=e.clientY;hero.style.setProperty('--mx',(e.clientX-r.left)+'px');hero.style.setProperty('--my',(e.clientY-r.top)+'px');if(!raf)raf=requestAnimationFrame(frame)});
hero.addEventListener('pointerleave',()=>{letters.forEach(l=>{l.style.transform='';l.parentNode.classList.remove('lift')});sc.style.setProperty('--rx','0deg');sc.style.setProperty('--ry','-4deg');sc.style.setProperty('--px','0px');sc.style.setProperty('--py','0px')});
function frame(){raf=0;
  const cx=innerWidth/2,cy=innerHeight/2,nx=(mx-cx)/cx,ny=(my-cy)/cy;
  g1.style.transform=`translate(${nx*-40}px,${ny*-30}px)`;g2.style.transform=`translate(${nx*30}px,${ny*24}px)`;
  av.style.transform=`rotate(${-6+nx*8}deg) translate(${nx*4}px,${ny*4}px)`;
  sc.style.setProperty('--px',nx*-10+'px');sc.style.setProperty('--py',ny*-8+'px');
  const sr=sc.getBoundingClientRect();
  if(mx>sr.left-60&&mx<sr.right+60&&my>sr.top-60&&my<sr.bottom+60){sc.style.setProperty('--ry',((mx-(sr.left+sr.width/2))/sr.width)*10+'deg');sc.style.setProperty('--rx',((sr.top+sr.height/2-my)/sr.height)*8+'deg')}
  else{sc.style.setProperty('--ry','-4deg');sc.style.setProperty('--rx','0deg')}
  letters.forEach(l=>{const b=l.getBoundingClientRect(),dx=mx-(b.left+b.width/2),dy=my-(b.top+b.height/2),d=Math.hypot(dx,dy),f=Math.max(0,1-d/160);l.style.transform=f?`translate(${-dx*f*.12}px,${-f*18}px) scale(${1+f*.08})`:'';l.parentNode.classList.toggle('lift',f>.55)});
}

/* magnetic buttons */
$$('.mag').forEach(b=>{b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.18}px,${(e.clientY-r.top-r.height/2)*.25}px)`});b.addEventListener('pointerleave',()=>b.style.transform='')});

/* stat + proof tilt */
$$('.stat,.proof .pc').forEach(c=>{c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(700px) rotateY(${x*8}deg) rotateX(${-y*8}deg) translateY(-3px)`});c.addEventListener('pointerleave',()=>c.style.transform='')});
})();
