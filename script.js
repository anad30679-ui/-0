const data = {
 intro: {
  eyebrow:"01 / مقدمة البحث", title:"مقدمة البحث", summary:"يُعد الذكاء الاصطناعي من أهم التطورات التكنولوجية في العصر الحديث، وأصبح يُستخدم في مجالات متعددة.",
  cards:[
   ["التقنية في العصر الحديث","يُعد الذكاء الاصطناعي من أهم التطورات التكنولوجية في العصر الحديث، حيث أصبح يُستخدم في العديد من المجالات."],
   ["مجالات الاستخدام","يُستخدم في الطب والتعليم والصناعة والزراعة، وغيرها من المجالات التي تمسّ حياة الإنسان."],
   ["تسهيل الحياة","يساعد على تسهيل حياة الإنسان وإنجاز الأعمال بسرعة ودقة."],
   ["هدف البحث","يتناول البحث أهم فوائد الذكاء الاصطناعي، ثم يناقش أضراره ومخاطره، وأهمية استخدامه بشكل واعٍ ومسؤول.",true]
  ]
 },
 benefits: {
  eyebrow:"02 / الفوائد", title:"أهم فوائد الذكاء الاصطناعي", summary:"يساهم الذكاء الاصطناعي في تطوير قطاعات متعددة، وتحسين جودة العمل وتوفير الوقت والجهد.",
  cards:[
   ["١. مجال الطب","يساعد في اكتشاف الأمراض وتشخيصها مبكرًا، وتحليل الأشعة الطبية، والمساعدة في تطوير الأدوية وتحسين الرعاية الصحية."],
   ["٢. مجال التعليم","يساعد الطلاب على فهم الدروس وتلخيص المعلومات وتوفير مصادر تعليمية متنوعة، كما يتيح تقديم محتوى يناسب مستوى كل طالب."],
   ["٣. مجال الصناعة","يساهم في زيادة الإنتاج وتقليل الأخطاء وتوفير الوقت والجهد وتحسين جودة المنتجات."],
   ["٤. مجال الزراعة","يساعد في اكتشاف أمراض النباتات، وتحديد احتياجات المحاصيل من المياه، ومتابعة حالة التربة، مما يساهم في زيادة الإنتاج الزراعي."],
   ["٥. النقل والمواصلات","يساعد في تنظيم حركة المرور وتحسين مسارات السيارات والتنبؤ بالازدحام وتطوير أنظمة القيادة الذكية."],
   ["٦. مجال العمل","يساعد على إنجاز المهام المتكررة بسرعة وتنظيم البيانات وتحليل المعلومات، مما يوفر الوقت ويساعد الموظفين على التركيز في الأعمال المهمة."],
   ["٧. الترجمة واللغات","يساعد في ترجمة النصوص بين اللغات المختلفة وتصحيح الأخطاء اللغوية وتسهيل التواصل بين الأشخاص من ثقافات مختلفة."],
   ["٨. البحث العلمي","يساعد الباحثين على تحليل كميات كبيرة من البيانات واكتشاف الأنماط والوصول إلى نتائج تساعد في تطوير العلوم والتكنولوجيا."],
   ["٩. مجال التجارة","يساعد الشركات على فهم احتياجات العملاء وتحسين خدمة العملاء وإدارة المخزون والتنبؤ بالطلب على المنتجات."],
   ["١٠. توفير الوقت والجهد","يساعد على تنفيذ العديد من المهام بسرعة، وتقليل بعض التكاليف، وتحسين كفاءة العمل في مختلف المجالات.",true]
  ]
 },
 harms: {
  eyebrow:"03 / الأضرار والتحديات", title:"أضرار الذكاء الاصطناعي", summary:"إلى جانب الفوائد، توجد مخاطر حقيقية تستدعي الانتباه، وتؤكد أهمية الاستخدام المسؤول والوعي بالنتائج.",
  cards:[
   ["١. الخصوصية","قد تجمع بعض الأنظمة بيانات كثيرة عن المستخدمين، مثل معلومات الاستخدام والصوت والصورة والموقع. وإذا أسيء التعامل مع هذه البيانات أو تسرّبت، فقد تهدد الحرية الشخصية. <span class='term' tabindex='0' data-tip='الخصوصية: حق الشخص في حماية معلوماته الشخصية والتحكم في مشاركتها.'>الخصوصية</span>"],
   ["٢. التحيّز","إذا كانت البيانات التي يتعلم منها النظام تحتوي على تمييز، فقد ينقل هذا التمييز إلى قراراته، مثل التوظيف أو القروض. <span class='term' tabindex='0' data-tip='التحيّز: ميل غير عادل لفئة أو رأي على حساب فئة أخرى.'>التحيّز</span>"],
   ["٣. البطالة","قد تؤدي أتمتة بعض المهام إلى تراجع الحاجة لبعض الوظائف، بينما تتطلب الوظائف الجديدة مهارات مختلفة قد يحتاج العاملون إلى تعلمها. <span class='term' tabindex='0' data-tip='البطالة: عدم حصول الشخص القادر والراغب في العمل على فرصة عمل.'>البطالة</span>"],
   ["٤. الأخبار الكاذبة","يمكن إنشاء صور أو مقاطع فيديو أو أصوات مزيفة تبدو حقيقية، ما قد يضلل الناس ويضعف الثقة في المعلومات. <span class='term' tabindex='0' data-tip='التزييف العميق: محتوى صوتي أو مرئي مُعدّل بالذكاء الاصطناعي ليبدو كأنه حقيقي.'>التزييف العميق</span>"],
   ["٥. الأسلحة الذكية","يثير استخدام الذكاء الاصطناعي في أنظمة الأسلحة مخاوف بشأن اتخاذ قرارات خطيرة، واحتمال وقوع أخطاء، وتحديد المسؤولية عنها. <span class='term' tabindex='0' data-tip='الأسلحة الذكية: أنظمة تسليح تستخدم تقنيات متقدمة للمساعدة في تحديد الأهداف أو التعامل معها.'>الأسلحة الذكية</span>"],
   ["٦. الاعتماد الزائد","الاعتماد على الآلات في كل المهام قد يضعف ممارسة بعض المهارات، مثل الحساب الذهني أو التفكير المستقل. <span class='term' tabindex='0' data-tip='الاعتماد الزائد: استخدام التقنية بدلًا من أداء المهارات أو التفكير الشخصي عند الحاجة إليهما.'>الاعتماد الزائد</span>"],
   ["٧. استهلاك الطاقة","تحتاج بعض أنظمة الذكاء الاصطناعي ومراكز البيانات إلى الكهرباء والمياه للتشغيل والتبريد، وهو ما قد يزيد الضغط على الموارد والبيئة. <span class='term' tabindex='0' data-tip='استهلاك الطاقة: مقدار الكهرباء أو الموارد المستخدمة لتشغيل الأجهزة والأنظمة.'>استهلاك الطاقة</span>"],
   ["٨. الاستخدام المفرط","قد تشجع بعض التطبيقات المستخدم على قضاء وقت طويل أمام الشاشة، مما قد يؤثر في النوم والنشاط اليومي إذا غاب التوازن. <span class='term' tabindex='0' data-tip='الاستخدام المفرط: قضاء وقت أطول من المناسب في استخدام التطبيق بما يؤثر في الأنشطة اليومية.'>الاستخدام المفرط</span>"]
  ]
 }
};
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const body = document.body;
const reader = $("#reader");
const placeholder = $("#readerPlaceholder");
const readerGrid = $("#readerGrid");
const tooltip = $("#termTooltip");
let activeSection = "intro";
let motionPaused = false;

$("#themeToggle").addEventListener("click", () => {
 body.classList.toggle("light");
 const light = body.classList.contains("light");
 $("#themeSymbol").textContent = light ? "☾" : "☼";
 $("#themeText").textContent = light ? "الوضع الليلي" : "الوضع النهاري";
});
$("#motionToggle").addEventListener("click", () => {
 motionPaused = !motionPaused;
 body.classList.toggle("motion-off", motionPaused);
 $("#motionToggle").textContent = motionPaused ? "▶" : "Ⅱ";
 $("#motionToggle").title = motionPaused ? "تشغيل الحركة" : "إيقاف الحركة";
 $("#motionToggle").setAttribute("aria-label", $("#motionToggle").title);
});
$("#scrollHint").addEventListener("click", () => $("#explore").scrollIntoView({behavior:"smooth"}));

function openSection(key) {
 const section = data[key];
 if (!section) return;
 activeSection = key;
 placeholder.classList.add("hidden");
 reader.classList.remove("hidden");
 $("#readerEyebrow").textContent = section.eyebrow;
 $("#readerTitle").textContent = section.title;
 $("#readerSummary").textContent = section.summary;
 $("#progressLabel").textContent = key === "intro" ? "01 / 03" : key === "benefits" ? "02 / 03" : "03 / 03";
 $("#progressBar").style.width = key === "intro" ? "33.33%" : key === "benefits" ? "66.66%" : "100%";
 readerGrid.innerHTML = "";
 section.cards.forEach((item, i) => {
  const card = document.createElement("section");
  card.className = "info-card" + (item[2] ? " full" : "");
  card.style.animationDelay = `${Math.min(i * 45, 400)}ms`;
  if (key === "harms") card.style.setProperty("--card-accent", "#f5bd82");
  else if (key === "intro") card.style.setProperty("--card-accent", "#83a2ff");
  const title = document.createElement("h3"); title.textContent = item[0];
  const p = document.createElement("p"); p.innerHTML = item[1];
  card.append(title, p); readerGrid.append(card);
 });
 $("#reader").scrollIntoView({behavior:"smooth",block:"start"});
}
$$("[data-section]").forEach(btn => {
 btn.addEventListener("click", () => openSection(btn.dataset.section));
 // Subtle 3D tilt, disabled for touch-first devices.
 btn.addEventListener("pointermove", e => {
  if (e.pointerType !== "mouse" || motionPaused) return;
  const r = btn.getBoundingClientRect();
  const x = (e.clientX-r.left)/r.width, y=(e.clientY-r.top)/r.height;
  btn.style.transform = `rotateX(${(0.5-y)*5}deg) rotateY(${(x-0.5)*6}deg) translateY(-3px)`;
 });
 btn.addEventListener("pointerleave", () => {btn.style.transform = "";});
});
$("#closeReader").addEventListener("click", () => {
 reader.classList.add("hidden"); placeholder.classList.remove("hidden"); hideTip();
 $("#explore").scrollIntoView({behavior:"smooth",block:"start"});
});
$("#backToPortals").addEventListener("click", () => $("#explore").scrollIntoView({behavior:"smooth",block:"start"}));

function showTip(el, x, y) {
 tooltip.textContent = el.dataset.tip || "";
 tooltip.style.left = `${Math.min(innerWidth-145,Math.max(145,x))}px`;
 tooltip.style.top = `${Math.max(110,y)}px`;
 tooltip.classList.add("show");
}
function hideTip(){tooltip.classList.remove("show")}
readerGrid.addEventListener("pointerover", e => {
 const term=e.target.closest(".term"); if(term) showTip(term,e.clientX,e.clientY);
});
readerGrid.addEventListener("pointermove", e => {
 const term=e.target.closest(".term"); if(term) showTip(term,e.clientX,e.clientY);
});
readerGrid.addEventListener("pointerout", e => {if(e.target.closest(".term")) hideTip()});
readerGrid.addEventListener("click", e => {
 const term=e.target.closest(".term"); if(term){const r=term.getBoundingClientRect();showTip(term,r.left+r.width/2,r.top);}
 else hideTip();
});
readerGrid.addEventListener("focusin", e => {
 const term=e.target.closest(".term"); if(term){const r=term.getBoundingClientRect();showTip(term,r.left+r.width/2,r.top);}
});
readerGrid.addEventListener("focusout", hideTip);
window.addEventListener("scroll", hideTip, {passive:true});
$("#year").textContent = new Date().getFullYear();

// Canvas starfield with gentle parallax; no libraries required.
const canvas = $("#starfield"), ctx = canvas.getContext("2d");
let w=0,h=0,dpr=1,stars=[],pointer={x:.5,y:.5};
function resize(){
 dpr=Math.min(window.devicePixelRatio||1,2);w=innerWidth;h=innerHeight;
 canvas.width=w*dpr;canvas.height=h*dpr;canvas.style.width=w+"px";canvas.style.height=h+"px";ctx.setTransform(dpr,0,0,dpr,0,0);
 stars=Array.from({length:Math.min(115,Math.floor(w*h/9500))},()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.25+.25,a:Math.random()*.5+.15,s:Math.random()*.18+.04,p:Math.random()*Math.PI*2}));
}
function draw(){
 ctx.clearRect(0,0,w,h);
 const light=body.classList.contains("light");
 stars.forEach(st=>{
  if(!motionPaused){st.p+=.009;st.y-=st.s;if(st.y<0)st.y=h}
  const x=st.x+(pointer.x-.5)*14, y=st.y+(pointer.y-.5)*10;
  ctx.beginPath();ctx.arc(x,y,st.r,0,Math.PI*2);ctx.fillStyle=light?`rgba(44,80,125,${st.a*.45})`:`rgba(166,224,255,${st.a*(.7+Math.sin(st.p)*.3)})`;ctx.fill();
 });
 if(!motionPaused) requestAnimationFrame(draw);
}
window.addEventListener("resize",resize);
window.addEventListener("pointermove",e=>{pointer.x=e.clientX/innerWidth;pointer.y=e.clientY/innerHeight},{passive:true});
resize();draw();
