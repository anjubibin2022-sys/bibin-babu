(function(){var b=document.getElementById('burger'),n=document.getElementById('nav');
if(b&&n){b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o);b.textContent=o?'\u2715':'\u2630'})}
var f=document.getElementById('enq');if(!f)return;
function msg(){var g=function(i){return document.getElementById(i).value.trim()};
return 'Hello Bibin, I would like to enquire about health insurance.\nName: '+g('fn')+'\nPhone: '+g('fp')+'\nCity: '+g('fl')+'\nInterested in: '+g('fq')+'\nMessage: '+g('fm')}
f.addEventListener('submit',function(e){e.preventDefault();window.open('https://wa.me/917012254255?text='+encodeURIComponent(msg()),'_blank')});
document.getElementById('mail').addEventListener('click',function(){if(!f.reportValidity())return;window.location.href='mailto:Bibin.Babu@nivabupa.com?subject='+encodeURIComponent('Health insurance enquiry')+'&body='+encodeURIComponent(msg())})})();

(function(){var WA='https://wa.me/917012254255?text=',hd=document.querySelector('header');
function wa(t){return WA+encodeURIComponent(t)}
function plan(a){var c=a.closest('.card'),h=c&&c.querySelector('h3');return h?h.textContent.trim():''}
var A=document.querySelectorAll('a[href^="https://wa.me/917012254255"]');
A.forEach(function(a){if(a.href.indexOf('text=')>-1)return;var t='Hello Bibin, I found your website and would like a free health insurance consultation.';
if(a.classList.contains('wa'))t='Hello Bibin, I have a question about health insurance. Could you help me?';a.href=wa(t);a.target='_blank';a.rel='noopener'});
document.querySelectorAll('a.btn').forEach(function(a){var x=a.textContent.trim(),h=a.getAttribute('href')||'';
if(x==='Get Quote'){var p=plan(a);a.href=wa('Hello Bibin, I would like a quote for the '+p+' plan. Could you please guide me?');a.target='_blank';a.rel='noopener'}
else if(x==='Send Enquiry'&&h.indexOf('contact')>-1){a.href=wa('Hello Bibin, I would like to send an enquiry about health insurance plans for my family.');a.target='_blank';a.rel='noopener'}});
var sel=document.querySelectorAll('.card,.stat,.eyebrow,section h2,.sub,.cta,.intro,.ci,.post>*');
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(e){e.forEach(function(i){if(i.isIntersecting){i.target.classList.add('in');io.unobserve(i.target)}})},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
sel.forEach(function(el,n){if(el.closest('.hero'))return;el.classList.add('rv');el.style.setProperty('--d',(n%4)*.08+'s');io.observe(el)})}
function s(){hd&&hd.classList.toggle('sc',window.scrollY>10)}window.addEventListener('scroll',s,{passive:true});s()})();

(function(){var els=document.querySelectorAll('.stat b');if(!els.length)return;
function run(el){var m=el.textContent.trim().match(/^([\d,]+)(\+?)$/);if(!m)return;var end=parseInt(m[1].replace(/,/g,''),10),suf=m[2],t0=null,D=1800;
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
function f(ts){if(!t0)t0=ts;var p=Math.min((ts-t0)/D,1),e=1-Math.pow(1-p,4);el.textContent=Math.round(end*e).toLocaleString('en-IN')+suf;if(p<1)requestAnimationFrame(f)}
el.textContent='0'+suf;requestAnimationFrame(f)}
if(!('IntersectionObserver' in window)){return}
var o=new IntersectionObserver(function(e){e.forEach(function(i){if(i.isIntersecting){run(i.target);o.unobserve(i.target)}})},{threshold:.6});
els.forEach(function(el){o.observe(el)})})();
