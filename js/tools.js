// Interactive tools. Every value shown is computed from the visitor's own inputs.
// All defaults are HYPOTHETICAL and never represent real campaign results.
(function(){
const $=(s,r=document)=>r.querySelector(s);
const num=(el)=>{const v=parseFloat(el.value);return isFinite(v)?v:0};
const fmt=(n,d=2)=>isFinite(n)?n.toLocaleString("en-US",{maximumFractionDigits:d}):"n/a";
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const SIM='<span class="sim">HYPOTHETICAL DATA — not my results</span>';

// generic calculator builder
function calc(el,intro,fields,compute){
  el.innerHTML=SIM+'<p>'+intro+'</p><div class="two">'+fields.map(f=>`<div><label for="f_${f.k}">${f.l}</label><input id="f_${f.k}" type="number" step="any" min="0" value="${f.v}"></div>`).join('')+'</div><div class="out" role="status" aria-live="polite"></div>';
  const out=$('.out',el);
  const run=()=>{const v={};fields.forEach(f=>v[f.k]=num($('#f_'+f.k,el)));out.innerHTML=compute(v)};
  el.querySelectorAll('input').forEach(i=>i.addEventListener('input',run));run();
}

const T=[];
const add=(id,group,name,render)=>T.push({id,group,name,render});

/* ---------- Performance marketing ---------- */
add('roas','perf','ROAS calculator',el=>calc(el,'Return on ad spend = revenue ÷ ad spend.',[{k:'rev',l:'Revenue attributed to ads',v:50000},{k:'spend',l:'Ad spend',v:10000}],v=>v.spend?`ROAS: <b>${fmt(v.rev/v.spend)}x</b><br>Revenue per 1 spent: ${fmt(v.rev/v.spend)}`:'Enter ad spend above 0.'));
add('cac','perf','CAC calculator',el=>calc(el,'Customer acquisition cost = marketing cost ÷ new customers.',[{k:'cost',l:'Total acquisition cost',v:12000},{k:'cust',l:'New customers',v:30}],v=>v.cust?`CAC: <b>${fmt(v.cost/v.cust)}</b> per customer`:'Enter customers above 0.'));
add('be','perf','Break-even ROAS',el=>calc(el,'Break-even ROAS = 1 ÷ profit margin. Below it, ads lose money.',[{k:'m',l:'Profit margin on a sale (%)',v:35}],v=>v.m>0&&v.m<=100?`Break-even ROAS: <b>${fmt(100/v.m)}x</b><br>Every 1 spent must return at least ${fmt(100/v.m)} in revenue.`:'Enter a margin between 0 and 100.'));
add('funnel','perf','Marketing funnel simulator',el=>calc(el,'Follow a budget through impressions, clicks, leads and sales.',[{k:'budget',l:'Budget',v:10000},{k:'cpm',l:'Cost per 1,000 impressions',v:20},{k:'ctr',l:'Click-through rate (%)',v:1.2},{k:'lcr',l:'Click → lead rate (%)',v:6},{k:'scr',l:'Lead → sale rate (%)',v:15},{k:'aov',l:'Average sale value',v:2500}],v=>{const imp=v.cpm?v.budget/v.cpm*1000:0,cl=imp*v.ctr/100,ld=cl*v.lcr/100,sl=ld*v.scr/100,rev=sl*v.aov;return `Impressions <b>${fmt(imp,0)}</b> → Clicks <b>${fmt(cl,0)}</b> → Leads <b>${fmt(ld,1)}</b> → Sales <b>${fmt(sl,1)}</b><br>Revenue: <b>${fmt(rev,0)}</b> · Cost per lead: ${fmt(ld?v.budget/ld:0)} · Cost per sale: ${fmt(sl?v.budget/sl:0)} · ROAS: ${fmt(v.budget?rev/v.budget:0)}x`}));
add('budget','perf','Budget allocation simulator',el=>{
  el.innerHTML=SIM+'<p>Split a budget across channels using assumed return per unit of spend. Move the sliders; allocation is normalised to 100%.</p><div class="two" id="bs"></div><label for="tb">Total budget</label><input id="tb" type="number" min="0" value="10000"><div class="out" role="status" aria-live="polite"></div>';
  const ch=[['Search',3.2],['Social A',2.4],['Social B',1.8],['Retargeting',4.0]];
  const bs=$('#bs',el);bs.innerHTML=ch.map((c,i)=>`<div><label for="s${i}">${c[0]} weight (assumed ROAS ${c[1]}x)</label><input id="s${i}" type="range" min="0" max="100" value="25"></div>`).join('');
  const run=()=>{const w=ch.map((c,i)=>num($('#s'+i,el)));const sum=w.reduce((a,b)=>a+b,0)||1,tb=num($('#tb',el));let rev=0;const rows=ch.map((c,i)=>{const sp=tb*w[i]/sum,r=sp*c[1];rev+=r;return `${c[0]}: spend <b>${fmt(sp,0)}</b> (${fmt(w[i]/sum*100,0)}%) → revenue ${fmt(r,0)}`});$('.out',el).innerHTML=rows.join('<br>')+`<br><br>Blended ROAS: <b>${fmt(tb?rev/tb:0)}x</b> · Total revenue: <b>${fmt(rev,0)}</b>`};
  el.querySelectorAll('input').forEach(i=>i.addEventListener('input',run));run();});
add('cr','perf','Conversion rate scenarios',el=>calc(el,'See what a better conversion rate does to cost per customer at the same traffic and cost.',[{k:'vis',l:'Visitors',v:5000},{k:'cost',l:'Cost of that traffic',v:8000},{k:'cr1',l:'Current conversion rate (%)',v:1.5},{k:'cr2',l:'Improved conversion rate (%)',v:2.2}],v=>{const c1=v.vis*v.cr1/100,c2=v.vis*v.cr2/100;return `Current: <b>${fmt(c1,1)}</b> customers, cost each <b>${fmt(c1?v.cost/c1:0)}</b><br>Improved: <b>${fmt(c2,1)}</b> customers, cost each <b>${fmt(c2?v.cost/c2:0)}</b><br>Change in cost per customer: <b>${fmt(c1&&c2?(v.cost/c2-v.cost/c1)/(v.cost/c1)*100:0,1)}%</b>`}));
add('l2s','perf','Lead-to-sale funnel',el=>calc(el,'Compare lead sources by what they close, not what they send.',[{k:'la',l:'Source A leads',v:200},{k:'sa',l:'Source A sales',v:12},{k:'lb',l:'Source B leads',v:80},{k:'sb',l:'Source B sales',v:10}],v=>{const a=v.la?v.sa/v.la*100:0,b=v.lb?v.sb/v.lb*100:0;return `Source A closes <b>${fmt(a,1)}%</b> · Source B closes <b>${fmt(b,1)}%</b><br>${a>b?'A sends more volume and closes less.':b>a?'B closes better per lead.':'Equal close rate.'} Lead volume alone would hide this.`}));
add('utm','perf','UTM builder',el=>{
  el.innerHTML='<p>Consistent UTM tags keep lead sources recoverable in analytics.</p>'+['url|Landing page URL|https://example.com/page','source|utm_source|meta','medium|utm_medium|paid_social','campaign|utm_campaign|spring_offer','content|utm_content (optional)|video_a'].map(s=>{const[p,l,v]=s.split('|');return `<label for="u_${p}">${l}</label><input id="u_${p}" value="${v}">`}).join('')+'<div class="out" role="status" aria-live="polite"></div><button class="btn" id="cp" type="button">Copy URL</button>';
  const run=()=>{let u;try{u=new URL($('#u_url',el).value.trim())}catch(e){$('.out',el).innerHTML='<span class="bad">Enter a full URL starting with https://</span>';return}
    const s=x=>$('#u_'+x,el).value.trim().toLowerCase().replace(/\s+/g,'_');[['source','utm_source'],['medium','utm_medium'],['campaign','utm_campaign'],['content','utm_content']].forEach(([k,p])=>{const v=s(k);if(v)u.searchParams.set(p,v)});$('.out',el).textContent=u.toString()};
  el.querySelectorAll('input').forEach(i=>i.addEventListener('input',run));run();
  $('#cp',el).onclick=()=>{try{navigator.clipboard.writeText($('.out',el).textContent).catch(()=>{})}catch(e){}};});
add('attr','perf','Attribution models',el=>{
  el.innerHTML=SIM+'<p>One sale, four touchpoints. See how the model changes the credit. Edit the sale value.</p><label for="sv">Sale value</label><input id="sv" type="number" min="0" value="1000"><div class="out" role="status" aria-live="polite"></div>';
  const tp=['Social ad','Search ad','Organic article','Direct visit'];
  const run=()=>{const v=num($('#sv',el)),n=tp.length;const m={'Last click':[0,0,0,1],'First click':[1,0,0,0],'Linear':[1/n,1/n,1/n,1/n],'Position-based (40/20/20/20… 40 first, 40 last)':[.4,.1,.1,.4]};
    $('.out',el).innerHTML='<table style="width:100%;border-collapse:collapse"><tr><th align=left>Model</th>'+tp.map(t=>`<th>${t}</th>`).join('')+'</tr>'+Object.entries(m).map(([k,w])=>`<tr><td>${k.split(' (')[0]}</td>`+w.map(x=>`<td align=center>${fmt(v*x,0)}</td>`).join('')+'</tr>').join('')+'</table><p class="fn">Same sale, different story. Pick the model deliberately and state it when reporting.</p>'};
  $('#sv',el).addEventListener('input',run);run();});
add('seovspaid','perf','SEO vs paid scenario',el=>calc(el,'Cumulative cost over 12 months. Paid cost is linear; SEO has an upfront build cost then a smaller upkeep. Assumed, illustrative numbers.',[{k:'paid',l:'Paid cost per month',v:5000},{k:'seoUp',l:'SEO upfront (months 1–3, per month)',v:6000},{k:'seoMo',l:'SEO upkeep per month after month 3',v:2500},{k:'paidL',l:'Paid leads per month',v:40},{k:'seoL',l:'SEO leads per month once mature (from month 7)',v:55}],v=>{let p=0,s=0,pl=0,sl=0,cross=null,rows=[];for(let m=1;m<=12;m++){p+=v.paid;pl+=v.paidL;s+=m<=3?v.seoUp:v.seoMo;sl+=m>=7?v.seoL:m>=4?v.seoL*(m-3)/4:0;rows.push([m,p,s,pl,sl])}
    const r=rows[11];return `After 12 months — Paid: cost <b>${fmt(r[1],0)}</b>, leads <b>${fmt(r[3],0)}</b> (${fmt(r[3]?r[1]/r[3]:0,0)} each) · SEO: cost <b>${fmt(r[2],0)}</b>, leads <b>${fmt(r[4],0)}</b> (${fmt(r[4]?r[2]/r[4]:0,0)} each)<br><span class="fn">Paid gives leads from month 1; SEO needs time. The two work best together.</span>`}));

/* ---------- SEO tools ---------- */
add('status','seo','HTTP status simulator',el=>{
  const S={200:['OK','Content returned. Page can be crawled, rendered and indexed.'],301:['Moved Permanently','Permanent redirect. Signals and users move to the new URL; use for URL changes.'],302:['Found (temporary)','Temporary redirect. The original URL stays the main one; do not use for permanent moves.'],404:['Not Found','Page does not exist. Fine for removed pages; fix internal links pointing to it.'],410:['Gone','Removed on purpose. Drops from the index a little faster than 404.'],500:['Server Error','Server failed. Repeated 5xx errors can reduce crawling; fix quickly.'],503:['Service Unavailable','Temporary outage. Use with Retry-After during maintenance.']};
  el.innerHTML='<label for="sc">Status code</label><select id="sc">'+Object.keys(S).map(k=>`<option>${k}</option>`).join('')+'</select><div class="out" role="status" aria-live="polite"></div>';
  const run=()=>{const k=$('#sc',el).value;$('.out',el).innerHTML=`<b>${k} ${S[k][0]}</b><br>${S[k][1]}`};$('#sc',el).onchange=run;run();});
add('index','seo','Indexability simulator',el=>{
  const o=[['robots','robots.txt','Allow|Block'],['status','HTTP status','200|301|404|500'],['canon','Canonical','Self|Other URL|Missing'],['meta','Meta robots','index|noindex'],['links','Internal links','Linked|Orphan']];
  el.innerHTML='<div class="two">'+o.map(([k,l,v])=>`<div><label for="i_${k}">${l}</label><select id="i_${k}">${v.split('|').map(x=>`<option>${x}</option>`).join('')}</select></div>`).join('')+'</div><div class="out" role="status" aria-live="polite"></div>';
  const run=()=>{const g=k=>$('#i_'+k,el).value,n=[];if(g('robots')==='Block')n.push('<span class="bad">Blocked by robots.txt: crawlers will not fetch it (a blocked page can still appear in results without content).</span>');
    if(g('status')!=='200')n.push(`<span class="bad">Status ${g('status')}: ${g('status')==='301'?'the redirect target is what gets indexed':'there is no indexable content here'}.</span>`);
    if(g('meta')==='noindex')n.push('<span class="bad">noindex tells search engines to keep it out of the index.</span>');
    if(g('canon')==='Other URL')n.push('<span class="bad">Canonical points elsewhere: this URL is treated as a duplicate of another.</span>');
    if(g('canon')==='Missing')n.push('Canonical missing: not an error, but duplicates are harder to control.');
    if(g('links')==='Orphan')n.push('Orphan page: no internal links, so it is hard to discover and gets little internal authority.');
    $('.out',el).innerHTML=n.length?n.join('<br>'):'<b class="good">Indexable.</b> Eligible, not guaranteed: quality and duplication still matter.'};
  el.querySelectorAll('select').forEach(s=>s.onchange=run);run();});
add('robots','seo','robots.txt tester',el=>{
  el.innerHTML='<label for="rt">robots.txt</label><textarea id="rt">User-agent: *\nDisallow: /cart/\nDisallow: /search\nAllow: /search/help\n\nSitemap: https://example.com/sitemap.xml</textarea><label for="rp">URL path to test</label><input id="rp" value="/search/help"><div class="out" role="status" aria-live="polite"></div>';
  const run=()=>{const lines=$('#rt',el).value.split('\n').map(l=>l.trim());let on=false,rules=[];for(const l of lines){const m=l.match(/^([A-Za-z-]+)\s*:\s*(.*)$/);if(!m)continue;const k=m[1].toLowerCase(),v=m[2].trim();if(k==='user-agent')on=v==='*';else if(on&&(k==='allow'||k==='disallow')&&v)rules.push([k,v])}
    const p=$('#rp',el).value.trim()||'/';let best=null;for(const r of rules){if(p.startsWith(r[1])&&(!best||r[1].length>best[1].length||(r[1].length===best[1].length&&r[0]==='allow')))best=r}
    $('.out',el).innerHTML=best?`Result for <b>${esc(p)}</b>: <b class="${best[0]==='allow'?'good':'bad'}">${best[0].toUpperCase()}ED</b> by rule <code>${best[0]}: ${esc(best[1])}</code> (longest matching rule wins).`:`Result for <b>${esc(p)}</b>: <b class="good">ALLOWED</b> (no matching rule). Simplified tester for the * agent; wildcards are not evaluated.`};
  el.querySelectorAll('textarea,input').forEach(i=>i.addEventListener('input',run));run();});
add('canon','seo','Canonical checker',el=>{
  el.innerHTML='<label for="cu">Page URL</label><input id="cu" value="https://example.com/shoes?color=red&sort=price"><label for="cc">Canonical URL</label><input id="cc" value="https://example.com/shoes"><div class="out" role="status" aria-live="polite"></div>';
  const run=()=>{let a,b;try{a=new URL($('#cu',el).value);b=new URL($('#cc',el).value)}catch(e){$('.out',el).innerHTML='<span class="bad">Enter two full URLs.</span>';return}
    const n=[];n.push(a.href===b.href?'Self-referencing canonical: the page declares itself the preferred version.':'Canonical differs from the page URL: this page is treated as a duplicate of the canonical.');
    if(a.search&&!b.search)n.push('Parameters are dropped in the canonical: good for filter and sort variants.');if(a.origin!==b.origin)n.push('<span class="bad">Canonical is on a different host or protocol: check this is intended (for example http vs https, www vs non-www).</span>');
    $('.out',el).innerHTML=n.join('<br>')};el.querySelectorAll('input').forEach(i=>i.addEventListener('input',run));run();});
add('schema','seo','Product schema builder',el=>{
  el.innerHTML='<div class="two"><div><label for="sn">Name</label><input id="sn" value="Example Product"></div><div><label for="sp">Price</label><input id="sp" type="number" value="199"></div><div><label for="sc2">Currency</label><input id="sc2" value="SAR"></div><div><label for="sa">Availability</label><select id="sa"><option value="InStock">InStock</option><option value="OutOfStock">OutOfStock</option><option value="PreOrder">PreOrder</option></select></div></div><label for="sd">Description</label><input id="sd" value="Short product description"><div class="out"><pre id="sj" style="white-space:pre-wrap;margin:0"></pre></div>';
  const run=()=>{const j={"@context":"https://schema.org","@type":"Product",name:$('#sn',el).value,description:$('#sd',el).value,offers:{"@type":"Offer",price:String(num($('#sp',el))),priceCurrency:$('#sc2',el).value,availability:'https://schema.org/'+$('#sa',el).value}};$('#sj',el).textContent=JSON.stringify(j,null,2)};
  el.querySelectorAll('input,select').forEach(i=>i.addEventListener('input',run));run();});
add('serp','seo','Title & meta length preview',el=>{
  el.innerHTML='<label for="tt">Title tag</label><input id="tt" value="Window Tinting & Paint Protection in Khobar | Example Brand"><label for="md">Meta description</label><textarea id="md" style="min-height:70px">Professional window tinting and paint protection film across the Eastern Province. Book a free inspection today.</textarea><div class="out" role="status" aria-live="polite"></div>';
  const run=()=>{const t=$('#tt',el).value,d=$('#md',el).value;const tl=t.length,dl=d.length;$('.out',el).innerHTML=`<div style="color:#1a0dab;font-size:1.1rem">${esc(t.slice(0,60))}${tl>60?'…':''}</div><div style="color:#4d5156;font-size:.9rem">${esc(d.slice(0,160))}${dl>160?'…':''}</div><p class="fn">Title ${tl} chars (about 50–60 shown) · Description ${dl} chars (about 120–160 shown). Guidance only; Google rewrites snippets by pixel width.</p>`};
  el.querySelectorAll('input,textarea').forEach(i=>i.addEventListener('input',run));run();});

window.TOOLS=T;
})();
