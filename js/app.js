(function(){
const S=window.SITE,T=window.TOOLS||[];
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const RM=matchMedia('(prefers-reduced-motion: reduce)');
const pad=n=>String(n).padStart(2,'0');
$('#yr').textContent=new Date().getFullYear();

/* number helpers: "+684.50%" -> {pre,num,post,dec} */
function parseNum(str){const m=String(str).match(/^(.*?)(\d+(?:\.\d+)?)(.*)$/);if(!m)return null;return{pre:m[1],num:parseFloat(m[2]),post:m[3],dec:(m[2].split('.')[1]||'').length}}
function numHTML(str,extra=''){const p=parseNum(str);if(!p)return esc(str);return `<span data-cnt="${p.num}" data-pre="${esc(p.pre)}" data-post="${esc(p.post)}" data-dec="${p.dec}" ${extra}>${esc(str)}</span>`}
function animNum(el){if(RM.matches){return}const n=parseFloat(el.dataset.cnt),pre=el.dataset.pre||'',post=el.dataset.post||'',dec=+el.dataset.dec||0;const t0=performance.now(),dur=1400;
  (function f(t){const k=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-k,3);el.textContent=pre+(n*e).toFixed(dec)+post;if(k<1)requestAnimationFrame(f);else el.textContent=pre+n.toFixed(dec)+post})(t0)}
window.animNum=animNum;window.animNums=root=>$$('[data-cnt]',root).forEach(animNum);

/* nav */
$('#menuBtn').onclick=e=>{const o=$('#links').classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',o)};
$$('#links a').forEach(a=>a.addEventListener('click',()=>$('#links').classList.remove('open')));

/* drawer */
const dlg=$('#dlg');
function drawer({c='#0B1026',lite=false,k='',title='',sub='',body='',nav=''}){
  $('#dlgBody').innerHTML=`<div class="m-top${lite?' lite':''}" style="--c:${c}"><button class="m-x" type="button" data-close aria-label="Close">×</button><div class="k">${k}</div><h2 id="dlgTitle">${title}</h2>${sub?`<p>${sub}</p>`:''}</div><div class="m-body">${body}${nav}</div>`;
  if(!dlg.open)dlg.showModal();dlg.scrollTop=0;window.animNums(dlg)}
dlg.addEventListener('click',e=>{if(e.target===dlg||e.target.closest('[data-close]'))dlg.close();const g=e.target.closest('[data-case]');if(g)openCase(g.dataset.case)});
[$('#searchDlg')].forEach(d=>d.addEventListener('click',e=>{if(e.target===d)d.close()}));

/* ---------- case data ---------- */
const CC={fashion:['#3B5BFF'],medical:['#14B88F'],grocery:['#FF5C5C'],electronics:['#7B5CFF'],furniture:['#FFB830',1],beauty:['#F0559A'],sports:['#2A3366'],books:['#FF9F43',1],pharmacy:['#1D4E89'],produce:['#0E8F7E'],toys:['#E0457B'],realestate:['#5B3FD6']};
const SHORT={fashion:'Fashion',medical:'Medical',grocery:'Grocery',electronics:'Electronics',furniture:'Furniture',beauty:'Beauty',sports:'Sports',books:'Books',pharmacy:'Pharmacy',produce:'Produce',toys:'Toys',realestate:'Real estate'};
const cases=S.seoCases.filter(c=>c.published);
const dnum=d=>{const m=String(d).match(/[\d.]+/);return m?parseFloat(m[0]):0};

/* ---------- hero ---------- */
const parts=S.name.split(' ');
$('#home').innerHTML=`<div class="glow g1"></div><div class="glow g2"></div><div class="spot"></div>
<div class="wrap hero-in"><div class="hero-copy">
  <div class="hello"><span class="av">MN</span><div><b>${esc(S.title)} · Al Khobar</b><span>Saudi market · SEO, paid media, analytics</span></div><i class="live" aria-hidden="true"></i></div>
  <h1 id="hero-name" aria-label="${esc(S.name)}">${parts.join(' ')}</h1>
  <p class="role">I turn digital attention into <strong>measurable</strong> business growth.</p>
  <p class="stmt">SEO, paid media and analytics, judged by what <span class="hl">Sales actually closes</span>.</p>
  <p class="focusline">Focused on: <span class="rot" id="rot"></span></p>
  <div class="hbtns"><a class="pill sun mag" href="#work">See my work →</a><a class="pill ghost mag" href="${esc(S.cv)}" download>Download CV</a><a class="pill ghost mag" href="#contact">Contact</a></div>
  <div class="proof">${S.highlights.slice(0,3).map(h=>`<div class="pc"><b>${numHTML(h.value)}</b><span>${esc(h.label)}</span></div>`).join('')}</div>
</div>
<div class="sc" id="sc" aria-label="Search Console results">
  <div class="sc-bar"><span class="dots"><i></i><i></i><i></i></span><div class="sc-in">⌕ <span id="scType" class="caret"></span></div></div>
  <div class="sc-tabs" role="group" aria-label="Metric"><button type="button" aria-pressed="true" data-m="clicks">Clicks</button><button type="button" aria-pressed="false" data-m="impressions">Impressions</button></div>
  <p class="sc-meta" id="scMeta"></p>
  <div class="rows" id="scRows"></div>
</div></div>`;
/* name letters */
(function(){const name=$('#hero-name');const words=S.name.split(' ');let i=0;name.innerHTML=words.map(w=>`<span class="w" aria-hidden="true">${[...w].map(c=>`<span class="ch" style="--i:${i++}"><span class="in">${esc(c)}</span></span>`).join('')}</span>`).join('')})();
/* SC card */
let scMetric='clicks';
function drawSC(){const list=cases.map((c,i)=>({c,i,d:c.metrics[scMetric].d,v:dnum(c.metrics[scMetric].d)})).sort((a,b)=>b.v-a.v);const max=list[0].v||1;
  $('#scMeta').textContent=`${scMetric==='clicks'?'Change in organic clicks':'Change in impressions'} · ${cases.length} projects · Google Search Console`;
  $('#scRows').innerHTML=list.map(o=>`<button type="button" class="row2" data-id="${o.c.id}" style="--c:${CC[o.c.id][0]==='#2A3366'?'#3B5BFF':CC[o.c.id][0]}"><span class="n">${SHORT[o.c.id]}</span><span class="bar"><i data-w="${(o.v/max*100).toFixed(1)}"></i></span><span class="v">${esc(o.d)}</span></button>`).join('')}
drawSC();
$('#sc').addEventListener('click',e=>{const t=e.target.closest('.sc-tabs button');if(t){scMetric=t.dataset.m;$$('.sc-tabs button').forEach(b=>b.setAttribute('aria-pressed',b===t));drawSC();requestAnimationFrame(()=>requestAnimationFrame(fillBars));return}const r=e.target.closest('.row2');if(r)openCase(r.dataset.id)});
function fillBars(){$$('#scRows .bar i').forEach(i=>i.style.width=i.dataset.w+'%')}
window.fillBars=fillBars;

/* ---------- marquee + stats ---------- */
const brandItems=[['Salla','platform'],['Zid','platform'],['WordPress','platform'],['Shopify','platform'],['Easy Order','platform'],['Wix','platform'],['Custom-built sites','native'],['Google Search Console','tool'],['GA4','tool'],['Tag Manager','tool'],['Google Ads','paid'],['Meta Ads','paid'],['TikTok Ads','paid']];
const row=brandItems.map(([n,k])=>`<span>${esc(n)}<small>${k}</small></span>`).join('');
$('#brands').setAttribute('aria-hidden','true');$('#brands').innerHTML=`<div class="marq-t">${row}${row}</div>`;
const stats=[...S.highlights,{value:String(cases.length),label:'SEO case studies with Google Search Console data',note:''}];
$('#statsBand').innerHTML=`<div class="stats-in">${stats.map(s=>`<div class="stat"><b>${numHTML(s.value)}</b><span>${esc(s.label)}</span></div>`).join('')}</div>`;

/* ---------- work ---------- */
const b=S.boss;
$('#work').innerHTML=`<div class="wrap"><div class="shead"><div><p class="kicker">Selected work</p><h2 class="h2">From enquiries to tracked sales.</h2></div><p class="lede">One in-depth acquisition case, plus ${cases.length} SEO projects across Saudi e-commerce, every number straight from Google Search Console.</p></div>
<div class="boss"><div><p class="tag">CASE STUDY · BOSS CAR CARE</p><h3>Paid and organic, judged by sales.</h3><p>${esc(b.context)}</p><div class="big">${numHTML('SAR 360K+')}</div><p class="cap">${esc(b.result)}</p><div class="row" style="margin-top:22px"><button class="pill sun mag" id="bossBtn" type="button">Open the full case study →</button></div></div>
<div class="flow">${['Google Ads, Meta, TikTok and SEO planned as one effort','Enquiries handled by the Sales team','Each lead followed to its outcome','Source recorded in a Google Sheets sales log','Targeting and retargeting refined from Sales feedback'].map((t,i)=>`<div class="fstep"><i>${i+1}</i>${esc(t)}</div>`).join('')}</div></div>
<h3 style="margin-top:56px;font-size:clamp(1.6rem,3vw,2.2rem)">SEO case studies</h3>
<p class="lede" style="margin-top:8px">Last period vs. the previous period in Google Search Console. Client names are withheld.</p>
<div class="cgrid" id="cgrid">${cases.map((c,i)=>{const [col,lite]=CC[c.id];const big=[0,1,8,9,10,11].includes(i);return `<button type="button" class="cc${big?' big':''}${lite?' lite':''}" style="--c:${col}" data-case="${c.id}" aria-label="Open case study: ${esc(c.title)}"><span class="tag">${pad(i+1)} · ${c.months} months</span><h3>${esc(c.title)}</h3><span class="ba">${esc(c.problem)}</span><span class="open" aria-hidden="true">↗</span><span class="num">${numHTML(c.metrics.clicks.d)}<small>organic clicks vs. previous ${c.months} months</small></span></button>`}).join('')}</div></div>`;
$('#bossBtn').onclick=()=>drawer({c:'#0B1026',k:'CASE STUDY',title:'Boss Car Care: tracked sales',sub:esc(b.result),body:`<p class="note">${esc(b.resultNote)}</p><ol class="steps">${b.steps.map(s=>`<li><b>${esc(s.h)}.</b> ${esc(s.t)}</li>`).join('')}</ol>`});
function openCase(id){const i=cases.findIndex(x=>x.id===id);if(i<0)return;const c=cases[i],[col,lite]=CC[id],m=c.metrics;
  const pr=cases[(i+cases.length-1)%cases.length],nx=cases[(i+1)%cases.length];
  const cls=d=>/^\+/.test(d)?'':(/^-/.test(d)?'dn':'fl');
  const met=(n,o)=>`<div><span>${n}</span><b>${numHTML(o.v)}</b><i class="${cls(o.d)}">${esc(o.d)}</i></div>`;
  const pos=`<div><span>Avg. position</span><b>${numHTML(m.position.v)}</b><i class="${m.position.d==='Stable'?'fl':''}">${m.position.d==='Stable'?'Stable':'▲ '+esc(m.position.d.replace('-',''))+' positions better'}</i></div>`;
  drawer({c:col,lite,k:`${pad(i+1)} · ${esc(c.market)}`,title:esc(c.title),sub:esc(c.client)+' · '+esc(c.period),
    body:`<div class="metrics">${met('Total clicks',m.clicks)}${met('Impressions',m.impressions)}${met('Avg. CTR',m.ctr)}${pos}</div><div><h4>Challenge</h4><p>${esc(c.problem)}</p></div><div><h4>Strategy</h4><p>${esc(c.strategy)}</p></div><p class="note">${esc(c.attribution)}</p>`,
    nav:`<div class="m-nav"><button class="btn" type="button" data-case="${pr.id}">← ${esc(SHORT[pr.id])}</button><button class="btn primary" type="button" data-case="${nx.id}">${esc(SHORT[nx.id])} →</button></div>`})}
window.openCase=openCase;
$('#work').addEventListener('click',e=>{const k=e.target.closest('.cc');if(k)openCase(k.dataset.case)});

/* ---------- skills ---------- */
const SKC=['#3B5BFF','#FF5C5C','#14B88F','#7B5CFF','#FFB830','#F0559A','#FF8A3D','#1D4E89','#0E8F7E','#E0457B','#5B3FD6'];
const lite=c=>c==='#FFB830'||c==='#FF8A3D';
$('#skills').innerHTML=`<div class="wrap"><div class="shead"><div><p class="kicker">What I do</p><h2 class="h2">Tap a skill. See what's inside it.</h2></div><p class="lede">Everything I use, grouped the way I actually work. Tap a bubble to open it, or grab the loose skills on the right and throw them around.</p></div>
<div class="skgrid"><div class="orbwrap"><div class="orbit" id="orbit"></div><p class="ob-hint" id="obHint">Tap any skill: the tools and places I've used it open around it.</p></div>
<div><div class="jar" id="jar" aria-label="Skills playground"></div><div style="margin-top:10px" class="row"><button class="btn" id="shake" type="button">Shake the jar</button></div></div></div>
<div class="detail" id="skillDetail" aria-live="polite">Select a skill to see what it covers, the tools I use and where I've used it.</div>
<div class="combos" id="combos">${S.combos.map((c,i)=>`<button type="button" class="combo" style="--c:${['#3B5BFF','#7B5CFF','#0E8F7E'][i%3]}" data-combo="${i}"><h4>${esc(c.name)}</h4><p>${esc(c.text)}</p><div class="chips">${c.needs.map(n=>`<span class="chip">${esc(S.skills.find(s=>s.id===n).name)}</span>`).join('')}</div></button>`).join('')}</div></div>`;
function showSkill(sk){$('#skillDetail').innerHTML=`<h3>${esc(sk.name)}</h3><p>${esc(sk.detail)}</p><p><span class="lab">Tools</span>${esc(sk.tools)}</p><p><span class="lab">Used in</span>${esc(sk.related)}</p>`}
/* orbit */
(function(){const box=$('#orbit'),N=S.skills.length;let cur=null;
  box.innerHTML=`<svg viewBox="0 0 100 100" aria-hidden="true"><g class="ring"><circle cx="50" cy="50" r="44" fill="none" stroke="rgba(255,255,255,.14)" stroke-dasharray=".6 1.2" stroke-width=".25"/></g><circle cx="50" cy="50" r="29" fill="none" stroke="rgba(255,255,255,.07)" stroke-width=".25"/><g id="obLines"></g></svg>
  <button type="button" class="ob-core" id="obCore" aria-label="Reset"><span><b>MN</b><span id="obSub">${N} skills</span></span></button>
  ${S.skills.map((s,i)=>{const a=(i/N)*Math.PI*2-Math.PI/2;return `<button type="button" class="bub" data-id="${s.id}" aria-pressed="false" style="--c:${SKC[i%SKC.length]};left:${50+44*Math.cos(a)}%;top:${50+44*Math.sin(a)}%"><i></i>${esc(s.name)}</button>`}).join('')}`;
  const clamp=()=>{const W=box.clientWidth;if(!W)return;$$('.bub',box).forEach((bb,i)=>{const a=(i/N)*Math.PI*2-Math.PI/2,bw=bb.offsetWidth;let x=W/2+W*.44*Math.cos(a);x=Math.min(Math.max(x,bw/2+4),W-bw/2-4);bb.style.left=x+'px'})};
  requestAnimationFrame(clamp);addEventListener('resize',clamp);document.fonts&&document.fonts.ready.then(clamp);
  const hint=$('#obHint'),core=$('#obCore');
  const reset=()=>{cur=null;$$('.sat',box).forEach(s=>s.remove());$('#obLines').innerHTML='';$$('.bub',box).forEach(x=>{x.classList.remove('dim','on','lit');x.setAttribute('aria-pressed','false')});core.classList.remove('active');core.style.removeProperty('--c');core.style.removeProperty('--c2');$('b',core).textContent='MN';$('#obSub').textContent=N+' skills';hint.textContent="Tap any skill: the tools and places I've used it open around it."};
  const show=id=>{if(cur===id)return reset();const i=S.skills.findIndex(s=>s.id===id),sk=S.skills[i],col=SKC[i%SKC.length];cur=id;$$('.sat',box).forEach(s=>s.remove());
    $$('.bub',box).forEach(x=>{const on=x.dataset.id===id;x.classList.toggle('on',on);x.classList.toggle('dim',!on);x.setAttribute('aria-pressed',String(on))});
    core.classList.add('active');core.style.setProperty('--c',col);core.style.setProperty('--c2',col);$('b',core).textContent=sk.name;
    const items=[...sk.tools.split(',').map(x=>x.trim()),...sk.related.split(',').map(x=>x.trim())].filter((x,k,a)=>x&&a.indexOf(x)===k).slice(0,12);
    $('#obSub').textContent=items.length+' links';
    const small=box.clientWidth<420,list=small?[]:items,M=list.length,off=(i/N)*Math.PI*2-Math.PI/2,lines=[];
    list.forEach((t,k)=>{const a=off+((k+.5)/M)*Math.PI*2,rr=M>8?(k%2?34:24):29,x=50+rr*Math.cos(a),y=50+rr*Math.sin(a);const s=document.createElement('span');s.className='sat';s.textContent=t;s.style.left='50%';s.style.top='50%';s.style.setProperty('--c',col);box.append(s);
      lines.push(`<line x1="50" y1="50" x2="${x}" y2="${y}" stroke="${col}" stroke-width=".3" opacity=".7"/>`);
      const go=()=>{s.style.left=x+'%';s.style.top=y+'%';s.classList.add('in')};RM.matches?go():setTimeout(go,30+k*45)});
    $('#obLines').innerHTML=lines.join('');hint.textContent=`${sk.name} · tap the centre to reset`;showSkill(sk)};
  box.addEventListener('click',e=>{const t=e.target.closest('.bub');if(t)show(t.dataset.id);else if(e.target.closest('#obCore'))reset()});
  $('#combos').addEventListener('click',e=>{const t=e.target.closest('.combo');if(!t)return;const c=S.combos[+t.dataset.combo];reset();$$('.bub',box).forEach(x=>x.classList.toggle('lit',c.needs.includes(x.dataset.id)));hint.textContent=c.name+': '+c.text;$('#skillDetail').innerHTML=`<h3>${esc(c.name)}</h3><p>${esc(c.text)}</p>`;box.scrollIntoView({behavior:RM.matches?'auto':'smooth',block:'center'})});
})();
/* jar with gravity + throw */
(function(){const box=$('#jar');box.innerHTML=S.skills.map((s,i)=>{const c=SKC[i%SKC.length];return `<button type="button" class="bd${lite(c)?' lite':''}" data-id="${s.id}" style="background:${c}">${esc(s.name)}</button>`}).join('');
  const els=$$('.bd',box);
  if(RM.matches){box.style.height='auto';box.style.padding='54px 16px 16px';box.style.display='flex';box.style.flexWrap='wrap';box.style.gap='8px';els.forEach(e=>{e.style.position='static'});box.addEventListener('click',e=>{const x=e.target.closest('.bd');if(x)showSkill(S.skills.find(s=>s.id===x.dataset.id))});$('#shake').hidden=true;return}
  let W=0,H=0,bodies=[],run=false,drag=null;const G=.55,R=.45,F=.992;
  const measure=()=>{W=box.clientWidth;H=box.clientHeight;bodies.forEach(o=>{o.w=o.el.offsetWidth;o.h=o.el.offsetHeight;o.x=Math.min(o.x,W-o.w);o.y=Math.min(o.y,H-o.h)})};
  bodies=els.map((el,i)=>({el,x:0,y:0,vx:0,vy:0,w:0,h:0}));
  measure();bodies.forEach((o,i)=>{o.x=20+Math.random()*Math.max(10,W-o.w-40);o.y=-60-i*40;o.vx=(Math.random()-.5)*4});
  addEventListener('resize',measure);document.fonts&&document.fonts.ready.then(measure);
  function tick(){if(!run)return;
    bodies.forEach(o=>{if(o===drag)return;o.vy+=G;o.vx*=F;o.x+=o.vx;o.y+=o.vy;
      if(o.y+o.h>H){o.y=H-o.h;o.vy*=-R;o.vx*=.92;if(Math.abs(o.vy)<1.2)o.vy=0}
      if(o.y<0&&o.vy<0){o.y=0;o.vy*=-R}
      if(o.x<0){o.x=0;o.vx*=-R}if(o.x+o.w>W){o.x=W-o.w;o.vx*=-R}});
    for(let i=0;i<bodies.length;i++)for(let j=i+1;j<bodies.length;j++){const a=bodies[i],c=bodies[j];const ox=Math.min(a.x+a.w,c.x+c.w)-Math.max(a.x,c.x),oy=Math.min(a.y+a.h,c.y+c.h)-Math.max(a.y,c.y);
      if(ox>0&&oy>0){if(oy<ox){const s=(a.y+a.h/2<c.y+c.h/2)?-1:1;if(a!==drag)a.y+=s*oy/2;if(c!==drag)c.y-=s*oy/2;const t=a.vy;a.vy=c.vy*.5;c.vy=t*.5}else{const s=(a.x+a.w/2<c.x+c.w/2)?-1:1;if(a!==drag)a.x+=s*ox/2;if(c!==drag)c.x-=s*ox/2;const t=a.vx;a.vx=c.vx*.6;c.vx=t*.6}}}
    bodies.forEach(o=>o.el.style.transform=`translate(${o.x}px,${o.y}px)`);requestAnimationFrame(tick)}
  new IntersectionObserver(es=>es.forEach(e=>{const was=run;run=e.isIntersecting;if(run&&!was)requestAnimationFrame(tick)})).observe(box);
  bodies.forEach(o=>{const el=o.el;let sx,sy,ox,oy,moved=false,lx,ly,lt;
    el.addEventListener('pointerdown',e=>{el.setPointerCapture(e.pointerId);drag=o;moved=false;sx=lx=e.clientX;sy=ly=e.clientY;lt=performance.now();ox=o.x;oy=o.y;o.vx=o.vy=0;el.classList.add('drag')});
    el.addEventListener('pointermove',e=>{if(drag!==o)return;const dx=e.clientX-sx,dy=e.clientY-sy;if(Math.abs(dx)+Math.abs(dy)>4)moved=true;o.x=Math.max(0,Math.min(W-o.w,ox+dx));o.y=Math.max(0,Math.min(H-o.h,oy+dy));const now=performance.now(),dt=Math.max(8,now-lt);o.vx=(e.clientX-lx)/dt*16;o.vy=(e.clientY-ly)/dt*16;lx=e.clientX;ly=e.clientY;lt=now});
    const end=()=>{if(drag!==o)return;drag=null;el.classList.remove('drag');if(!moved){o.vx=0;o.vy=0;showSkill(S.skills.find(s=>s.id===el.dataset.id))}else{o.vx=Math.max(-40,Math.min(40,o.vx));o.vy=Math.max(-40,Math.min(40,o.vy))}};
    el.addEventListener('pointerup',end);el.addEventListener('pointercancel',end);
    el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();showSkill(S.skills.find(s=>s.id===el.dataset.id))}else if(e.key.startsWith('Arrow')){e.preventDefault();const st=30;o.vy=0;o.x=Math.max(0,Math.min(W-o.w,o.x+({ArrowLeft:-st,ArrowRight:st}[e.key]||0)));o.y=Math.max(0,Math.min(H-o.h,o.y+({ArrowUp:-st,ArrowDown:st}[e.key]||0)))}})});
  $('#shake').onclick=()=>bodies.forEach(o=>{o.vx=(Math.random()-.5)*50;o.vy=-10-Math.random()*28})})();

/* ---------- problems ---------- */
$('#problems').innerHTML=`<div class="wrap"><div class="shead"><div><p class="kicker">Problems I've solved</p><h2 class="h2">Investigate it with me.</h2></div><p class="lede">Common marketing problems and how I work through them. These are <b>educational scenarios</b>, not case studies of specific clients.</p></div>
<div class="mgrid">${S.problems.map(p=>`<div class="mcard" data-id="${p.id}"><span class="env">${esc(p.kind)}</span><h3 class="q">${esc(p.title)}</h3><div class="sym">${p.symptoms.map(s=>`<span>${esc(s)}</span>`).join('')}</div><div class="mst"></div><button class="btn probBtn" type="button" style="align-self:flex-start">Start investigation</button></div>`).join('')}</div></div>`;
$$('.mcard').forEach(card=>{const p=S.problems.find(x=>x.id===card.dataset.id),btn=$('.probBtn',card),st=$('.mst',card);let i=-1;
  btn.onclick=()=>{i++;if(i<p.steps.length){st.insertAdjacentHTML('beforeend',`<div class="mstep"><b>STEP ${i+1}</b><span>${esc(p.steps[i])}</span></div>`);btn.textContent=i<p.steps.length-1?'Next step →':'Show the lesson'}else if(i===p.steps.length){st.insertAdjacentHTML('beforeend',`<p class="lesson">Lesson: ${esc(p.lesson)}</p>`);btn.textContent='Start over'}else{i=-1;st.innerHTML='';btn.textContent='Start investigation'}}});

/* ---------- playground ---------- */
const groups={perf:'Performance marketing',seo:'SEO'};
$('#playground').innerHTML=`<div class="wrap"><div class="shead"><div><p class="kicker">Playground</p><h2 class="h2">Don't take my word for it. Try it.</h2></div><p class="lede">${T.length} working tools. All sample numbers are hypothetical and are never my campaign results.</p></div>
<div class="pg"><div class="pg-list" role="tablist" aria-label="Playground tools">${T.map((t,i)=>`<button type="button" role="tab" id="tab_${t.id}" aria-selected="${i===0}" aria-controls="tp" data-id="${t.id}" tabindex="${i===0?0:-1}"><span>${pad(i+1)}</span>${esc(t.name)}</button>`).join('')}</div><div class="pg-stage" id="tp" role="tabpanel" tabindex="0"></div></div></div>`;
function showTool(id){const t=T.find(x=>x.id===id);if(!t)return;$$('.pg-list button').forEach(x=>{const on=x.dataset.id===id;x.setAttribute('aria-selected',on);x.tabIndex=on?0:-1});const tp=$('#tp');tp.setAttribute('aria-labelledby','tab_'+id);tp.style.animation='none';void tp.offsetWidth;tp.style.animation='';tp.innerHTML=`<h3>${esc(t.name)} <span class="tag">${groups[t.group]||''}</span></h3><div id="tb"></div>`;t.render($('#tb'))}
$('.pg-list').addEventListener('click',e=>{const x=e.target.closest('button');if(x)showTool(x.dataset.id)});
$('.pg-list').addEventListener('keydown',e=>{const tabs=$$('.pg-list button'),i=tabs.findIndex(t=>t.getAttribute('aria-selected')==='true');let n=null;if(e.key==='ArrowDown'||e.key==='ArrowRight')n=(i+1)%tabs.length;if(e.key==='ArrowUp'||e.key==='ArrowLeft')n=(i-1+tabs.length)%tabs.length;if(n!==null){e.preventDefault();showTool(tabs[n].dataset.id);tabs[n].focus()}});
if(T.length)showTool(T[0].id);window.showTool=showTool;

/* ---------- experience ---------- */
const XC=['#3B5BFF','#14B88F','#7B5CFF','#FF5C5C','#FFB830','#F0559A'];
const ini=o=>o.split(/\s+/).map(w=>w[0]).join('').slice(0,2).toUpperCase();
$('#experience').innerHTML=`<div class="wrap"><div class="shead"><div><p class="kicker">Experience</p><h2 class="h2">Where I've done it.</h2></div><p class="lede">Content → SEO → e-commerce growth → paid media → integrated digital marketing. Select a role to see what I did.</p></div>
<div class="xp"><div class="xp-list" role="tablist" aria-label="Roles">${S.roles.map((r,i)=>`<button type="button" role="tab" class="xp-item" data-id="${r.id}" aria-selected="${i===0}" style="--c:${XC[i%XC.length]}"><span class="lg${lite(XC[i%XC.length])?' lite':''}">${esc(ini(r.org))}</span><span class="t">${esc(r.title)}</span><span class="p">${esc(r.org)} · ${esc(r.dates)}</span></button>`).join('')}</div><div class="xp-detail" id="xpd" role="tabpanel"></div></div>
<div class="edu"><div class="card"><h3>Education</h3><p>${esc(S.education)}</p></div><div class="card"><h3>Certifications and courses (${S.certs.length})</h3><div class="chips">${S.certs.map(c=>`<span class="chip">${esc(c)}</span>`).join('')}</div><p class="fn" style="margin-top:12px">No credential IDs are shown. Verification links will be added only where they exist.</p></div></div></div>`;
function selectXp(id){const r=S.roles.find(x=>x.id===id);$$('.xp-item').forEach(x=>x.setAttribute('aria-selected',x.dataset.id===id));const d=$('#xpd');d.style.animation='none';void d.offsetWidth;d.style.animation='';d.innerHTML=`<h3>${esc(r.title)}</h3><p class="meta">${esc(r.org)} · ${esc(r.dates)}${r.place?' · '+esc(r.place):''}</p><ul class="lst">${r.points.map(p=>`<li>${esc(p)}</li>`).join('')}</ul><p style="margin-top:16px"><span class="lab">Skills</span>${esc(r.skills)}</p>`}
$('.xp-list').addEventListener('click',e=>{const x=e.target.closest('.xp-item');if(x)selectXp(x.dataset.id)});selectXp(S.roles[0].id);

/* ---------- about ---------- */
$('#about').innerHTML=`<div class="wrap"><div class="abt"><div><p class="kicker">About</p><h2 class="h2">The short story.</h2><p class="big">${esc(S.about)}</p></div><div><h3 style="margin-bottom:14px;font-size:24px">Recruiter Q&amp;A</h3>${S.qa.map(x=>`<details><summary>${esc(x.q)}</summary><p>${esc(x.a)}</p></details>`).join('')}</div></div></div>`;

/* ---------- contact ---------- */
$('#contact').innerHTML=`<div class="wrap"><p class="kicker">Contact</p><h2>Let's build something <em>measurable.</em></h2>
<div class="cgrid2"><div><p class="lede" style="color:#C9CEEA">Open to digital marketing, SEO and customer acquisition roles in the Saudi market.</p><div class="row" style="margin-top:26px"><a class="pill sun mag" href="mailto:${esc(S.email)}">${esc(S.email)}</a><a class="pill ghost mag" href="tel:+${S.phoneRaw}">${esc(S.phone)}</a><a class="pill ghost mag" href="https://wa.me/${S.phoneRaw}" rel="noopener">WhatsApp</a>${S.linkedin?`<a class="pill ghost mag" href="${esc(S.linkedin)}" rel="noopener">LinkedIn</a>`:''}<a class="pill ghost mag" href="${esc(S.cv)}" download>Download CV</a></div></div>
<form class="cform" id="cf"><label for="cn">Your name</label><input id="cn" required><label for="cm">Message</label><textarea id="cm" required></textarea><p class="fn">This opens your email app with the message ready to send. Or write to ${esc(S.email)} or call ${esc(S.phone)}.</p><button class="pill sun" type="submit">Send by email</button></form></div></div>`;
$('#cf').onsubmit=e=>{e.preventDefault();location.href=`mailto:${S.email}?subject=${encodeURIComponent('Message from '+$('#cn').value)}&body=${encodeURIComponent($('#cm').value)}`};

/* ---------- search palette ---------- */
const index=[];
S.skills.forEach(s=>index.push({t:s.name,s:'Skill: '+s.detail,go:'#skills'}));
S.roles.forEach(r=>index.push({t:r.title+' · '+r.org,s:r.dates+' · '+r.skills,go:'#experience'}));
S.qa.forEach(q=>index.push({t:q.q,s:q.a,go:'#about'}));
S.problems.forEach(p=>index.push({t:p.title,s:p.kind,go:'#problems'}));
T.forEach(t=>index.push({t:t.name,s:'Playground · '+(groups[t.group]||''),go:'#playground',tool:t.id}));
cases.forEach(c=>index.push({t:'SEO case: '+c.title,s:c.problem+' · '+c.results,go:'#work',cs:c.id}));
index.push({t:'Boss Car Care case study',s:S.boss.result,go:'#work',boss:1});
const sd=$('#searchDlg'),q=$('#q'),res=$('#results');
const doSearch=()=>{const v=q.value.trim().toLowerCase();const r=v?index.filter(i=>(i.t+' '+i.s).toLowerCase().includes(v)).slice(0,20):[];res.innerHTML=r.length?r.map(i=>`<li><button type="button" data-k="${index.indexOf(i)}"><b>${esc(i.t)}</b><br><span class="fn">${esc(i.s.slice(0,110))}</span></button></li>`).join(''):`<li class="fn" style="padding:12px 8px">${v?'No results.':'Type to search.'}</li>`};
q.addEventListener('input',doSearch);
res.addEventListener('click',e=>{const bt=e.target.closest('button');if(!bt)return;const i=index[bt.dataset.k];sd.close();if(i.tool)showTool(i.tool);location.hash=i.go;if(i.cs)setTimeout(()=>openCase(i.cs),350);if(i.boss)setTimeout(()=>$('#bossBtn').click(),350)});
$('#searchX').onclick=()=>sd.close();
const openSearch=()=>{sd.showModal();q.value='';doSearch();q.focus()};
$('#searchBtn').onclick=openSearch;
document.addEventListener('keydown',e=>{if(e.key==='/'&&!/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)&&!document.querySelector('dialog[open]')){e.preventDefault();openSearch()}});
})();
