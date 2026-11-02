(function(){
const P={first:'Tanmay',last:'Agarwal',full:'Tanmay Agarwal',email:'ta2830@columbia.edu',phone:'+1 (646) 821-7473',phoneDigits:'6468217473',
linkedin:'https://www.linkedin.com/in/tanmay10agarwal',github:'https://github.com/TanmayAgarwal123',site:'https://www.tanmayresume.com',
loc:'New York, NY',city:'New York',state:'New York',zip:'10027',country:'United States',school:'Columbia University',degree:"Master's",
discipline:'Computer Science',grad:'December 2026',start:'January 2027',salary:'$120,000 - $160,000',salaryOne:'140000',company:'Stealth startup (Columbia Build Labs)',title:'Foundation Engineer'};
function setV(el,v){const p=el.tagName==='TEXTAREA'?HTMLTextAreaElement.prototype:HTMLInputElement.prototype;el.focus();Object.getOwnPropertyDescriptor(p,'value').set.call(el,v);el.dispatchEvent(new Event('input',{bubbles:true}));el.dispatchEvent(new Event('change',{bubbles:true}));el.dispatchEvent(new Event('blur',{bubbles:true}));}
function fileFromB64(){const bin=atob(window.__resumeB64);const u=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)u[i]=bin.charCodeAt(i);return new File([u],'Agarwal_Tanmay_-_Resume.pdf',{type:'application/pdf'});}
function setFile(inp){const dt=new DataTransfer();dt.items.add(fileFromB64());inp.files=dt.files;inp.dispatchEvent(new Event('input',{bubbles:true}));inp.dispatchEvent(new Event('change',{bubbles:true}));}
function labelOf(el){let t='';if(el.labels&&el.labels.length)t=[...el.labels].map(l=>l.innerText).join(' ');
 if(!t&&el.getAttribute('aria-label'))t=el.getAttribute('aria-label');
 if(!t&&el.getAttribute('aria-labelledby'))t=el.getAttribute('aria-labelledby').split(' ').map(i=>document.getElementById(i)?.innerText||'').join(' ');
 if(!t){let e=el;for(let i=0;i<6&&e;i++){e=e.parentElement;const l=e&&e.querySelector('label,legend,.text,.application-label');if(l&&l.innerText.trim()){t=l.innerText;break;}}}
 return (t||el.name||el.placeholder||'').replace(/\s+/g,' ').trim();}
function textAnswer(L,el){L=L.toLowerCase();
 if(/preferred (first )?name/.test(L))return P.first;
 if(/first name|given name|^first\b/.test(L))return P.first; if(/last name|family name|surname|^last\b/.test(L))return P.last;
 if(/^(full )?name\*?$|full name|your name|legal name/.test(L))return P.full;
 if(/e-?mail/.test(L))return P.email; if(/phone|mobile/.test(L))return el.type==='tel'&&/digits/.test(L)?P.phoneDigits:P.phone;
 if(/linkedin/.test(L))return P.linkedin; if(/github/.test(L))return P.github; if(/website|portfolio|personal site|url/.test(L))return P.site;
 if(/pronoun/.test(L))return 'he/him';
 if(/zip|postal/.test(L))return P.zip; if(/^city|\bcity\b/.test(L))return P.city; if(/^state|province/.test(L))return P.state; if(/^country/.test(L))return P.country;
 if(/location|where are you (currently )?(based|located)|current address|address/.test(L))return P.loc;
 if(/school|university|college/.test(L))return P.school; if(/degree/.test(L))return P.degree; if(/discipline|major|field of study/.test(L))return P.discipline;
 if(/graduat/.test(L))return P.grad; if(/start date|earliest.*start|available to start|when can you start/.test(L))return P.start;
 if(/salary|compensation|pay expectation/.test(L))return /number|numeric/.test(L)||el.type==='number'?P.salaryOne:P.salary;
 if(/current (company|employer)|most recent (company|employer)/.test(L))return P.company; if(/current (title|role|position)/.test(L))return P.title;
 if(/years of (professional |relevant )?experience/.test(L))return el.type==='number'?'2':'2';
 if(/how did you hear|where did you (hear|find)|source/.test(L))return window.__taSource||'Job board';
 return null;}
function choice(L,opts){const l=L.toLowerCase();const f=re=>opts.findIndex(o=>re.test(o.trim()));
 if(/sponsor|visa/.test(l))return f(/^yes/i);
 if(/authori[sz]ed|legally (able|eligible|permitted)|eligible to work|right to work/.test(l))return f(/^yes/i);
 if(/citizen/.test(l)&&!/sponsor/.test(l))return f(/^no/i);
 if(/clearance/.test(l))return -2;
 if(/18 years|over 18|at least 18|of legal age/.test(l))return f(/^yes/i);
 if(/hispanic|latin/.test(l))return f(/^no/i);
 if(/gender|\bsex\b/.test(l))return f(/^male|^man$/i);
 if(/race|ethnic/.test(l))return opts.findIndex(o=>/asian/i.test(o));
 if(/veteran/.test(l))return opts.findIndex(o=>/not a (protected )?veteran|i am not/i.test(o));
 if(/disabilit/.test(l))return opts.findIndex(o=>/no,? i do(n.t| not) have|^no\b/i.test(o));
 if(/previously (worked|employed|applied)|have you (ever )?(worked|been employed|applied)|former employee/.test(l))return f(/^no/i);
 if(/relocat|commut|on-?site|in[- ]office|hybrid|in person|work from (the|our) office/.test(l)){let i=opts.findIndex(o=>/ready to move|self-funded/i.test(o));if(i<0)i=f(/^yes/i);return i;}
 if(/how did you hear|source/.test(l)){let i=opts.findIndex(o=>new RegExp(window.__taSource||'job board','i').test(o));if(i<0)i=opts.findIndex(o=>/job board|online|other/i.test(o));return i;}
 if(/remote/.test(l))return f(/^yes/i);
 if(/pronoun/.test(l))return opts.findIndex(o=>/he\/him/i.test(o));
 if(/degree|education level|highest level/.test(l))return opts.findIndex(o=>/master/i.test(o));
 if(/country/.test(l))return opts.findIndex(o=>/^united states/i.test(o));
 if(/state/.test(l))return opts.findIndex(o=>/^new york$|^ny$/i.test(o));
 if(/text messages|sms|consent to receive/.test(l))return -1;
 return -1;}
window.taFill=function(cl){const rep={filled:[],todo:[]};
 const done=new Set();
 // text-like inputs
 for(const el of document.querySelectorAll('input:not([type=hidden]):not([type=file]):not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]),textarea')){
  if(el.offsetParent===null&&el.type!=='search')continue; if(el.getAttribute('role')==='combobox'||el.closest('[class*=select__]')){rep.todo.push('COMBO: '+labelOf(el).slice(0,90));continue;}
  const L=labelOf(el); if(el.value){continue;}
  if(el.tagName==='TEXTAREA'&&/cover letter/i.test(L)&&cl){setV(el,cl);rep.filled.push('cover letter');continue;}
  const v=textAnswer(L,el); if(v!=null){setV(el,v);rep.filled.push(L.slice(0,40)+'='+v.slice(0,30));} else if(el.required||el.getAttribute('aria-required')==='true'||/\*/.test(L))rep.todo.push('TEXT*: '+L.slice(0,150)); else rep.todo.push('text(opt): '+L.slice(0,80));}
 // selects
 for(const s of document.querySelectorAll('select')){if(s.value&&s.selectedIndex>0)continue;const L=labelOf(s);const opts=[...s.options].map(o=>o.text);const i=choice(L,opts);
  if(i>=0){s.selectedIndex=i;s.dispatchEvent(new Event('change',{bubbles:true}));rep.filled.push(L.slice(0,40)+'='+opts[i]);} else rep.todo.push('SELECT: '+L.slice(0,120)+' ['+opts.slice(0,8).join('|')+']');}
 // radio groups
 const groups={};for(const r of document.querySelectorAll('input[type=radio]')){(groups[r.name]=groups[r.name]||[]).push(r);}
 for(const n in groups){const rs=groups[n];if(rs.some(r=>r.checked))continue;let c=rs[0];let L='';for(let i=0;i<8&&c;i++){c=c.parentElement;const lg=c.querySelector('legend,label:not([for]),.application-label,[class*=question]');const t=c.innerText||'';if(t.length>rs.map(r=>labelOf(r)).join('').length+10){L=t.split('\n').find(x=>x.trim().length>3)||t;L=t;break;}}
  const opts=rs.map(r=>(r.labels&&r.labels[0]?r.labels[0].innerText:r.value)||'');const i=choice(L,opts);
  if(i>=0){rs[i].click();rep.filled.push(L.replace(/\s+/g,' ').slice(0,50)+'='+opts[i].slice(0,40));} else rep.todo.push((i==-2?'FLAG ':'')+'RADIO: '+L.replace(/\s+/g,' ').slice(0,200));}
 // ashby yes/no buttons
 for(const e of document.querySelectorAll('.ashby-application-form-field-entry')){const b=[...e.querySelectorAll('button.ashby-application-form-input-yesno-option')];if(b.length!==2||b.some(x=>/_active/.test(x.className)))continue;
  const L=e.innerText;const i=choice(L,b.map(x=>x.innerText));if(i>=0){b[i].click();rep.filled.push(L.replace(/\s+/g,' ').slice(0,50)+'='+b[i].innerText);} else rep.todo.push((i==-2?'FLAG ':'')+'YESNO: '+L.replace(/\s+/g,' ').slice(0,200));}
 // resume file
 const files=[...document.querySelectorAll('input[type=file]')];let rf=files.find(f=>/resume|cv/i.test((f.id||'')+(f.name||'')+labelOf(f)+(f.closest('[class*=field],fieldset,div')?.innerText||'').slice(0,80)))||(files.length===1?files[0]:null);
 if(rf){setFile(rf);rep.filled.push('resume -> '+(rf.id||rf.name));}else rep.todo.push('NO RESUME INPUT FOUND ('+files.length+' file inputs)');
 rep.otherFiles=files.filter(f=>f!==rf).map(f=>labelOf(f).slice(0,60)+' | '+(f.closest('div')?.parentElement?.innerText||'').replace(/\s+/g,' ').slice(0,80));
 rep.unchecked=[...document.querySelectorAll('input[type=checkbox]')].filter(c=>!c.checked&&c.offsetParent!==null).map(c=>labelOf(c).slice(0,120));
 return rep;};
window.taFillLoaded=true;
})();
