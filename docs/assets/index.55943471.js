import{r as ie,_ as p,c as I,a as _,o as r,b as d,d as m,F as v,e,u as z,t as y,n as ne,p as h,f as w,w as f,g as A,h as C,i as x,S as G,j as R,k as ae,l as ce,m as re,E as le,q as P,s as j,v as de,x as me,A as ue,y as _e,z as pe,B as ve,C as fe,D as be,G as ge,P as he,T as we,H as ye}from"./vendor.4862a777.js";const xe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerpolicy&&(c.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?c.credentials="include":n.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(n){if(n.ep)return;n.ep=!0;const c=i(n);fetch(n.href,c)}};xe();const T={owners:[{id:10,name:"Trena Something",color:"#ACC6AA",description:" lorem lorem lorem ipsum ppissum i ma lorem lorem lorem ipsum ppissum i ma lroem lorem I made this! lorem lorem lorem ipsum ppissum i ma lroem lorem I made this! I made this!",img:"/src/assets/img/wowom-removebg-preview.png"},{id:5,name:"Edward Cullen",color:"#8B0000",description:" lorem lorem lorem ipsum ppissum i ma lorem lorem lorem ipsum ppissum i ma lroem lorem I made this! lorem lorem lorem ipsum ppissum i ma lroem lorem I made this! lorem lorem ipsum delor",img:"/src/assets/img/John_marston.webp"}],groomers:[{id:1,name:"Liz Jensen",color:"#9870FC",description:" lorem lorem lorem ipsum ppissum i ma lorem lorem lorem ipsum ppissum i ma lroem lorem I made this! lorem lorem lorem ipsum ppissum i ma lroem lorem I made this! hi im lizard",img:"/src/assets/img/lizbitz.png"},{id:3,name:"John Marston",color:"#EEEEEE",description:" lorem lorem lorem ipsum ppissum i ma lorem lorem lorem ipsum ppissum i ma lroem lorem I made this! lorem lorem lorem ipsum ppissum i ma lroem lorem I made this! hi im lizard",img:"/src/assets/img/John_marston.webp"},{id:4,name:"Bastion B",color:"#77628C ",description:" /src/assets/img/152-1521917_bastion-bastion-overwatch-transparent (1).png",img:"/src/assets/img/152-1521917_bastion-bastion-overwatch-transparent (1).png"}],reviews:[{id:1,name:"Rene Ware",body:"Amanda was great! She listened to my request and concerns. She did a awesome job on my Shihtzu Roxy . Nice staff also"},{id:2,name:"Alley Jacobson",body:"I love how easy Jamie and Treana are to work with... I love the way my grandpuppy looks when these ladies have had their way with his little furiness. Wonderful place."},{id:3,name:"Sarah Crockett",body:"My dog, Koda, was groomed by Jamie and I can\u2019t even begin to tell you how fantastic he looks! I love coming here!"},{id:4,name:"Karen D. Arvizu",body:"Liz worked wonders with my shih tzu puppy. Nice clean shop."},{id:5,name:"Tracy Balkovic",body:"Trena did a great job on my 3 little dogs.  Will be seeing up future appointments!"},{id:6,name:"Paula Shannon",body:"Trena and her staff go above and beyond to care for the dogs in their care. The shop is big beautiful and welcomed change from the cramped hot fur flying shop we had been going to. So glad my fur babies have this place to be cared for in."}]};class D{constructor(t){this.id=t.id,this.name=t.name||"",this.img=t.img||"",this.description=t.description||"",this.color=t.color||""}}const F=T.groomers.map(s=>new D(s)),B=T.owners.map(s=>new D(s)),$=ie({user:{},account:{},groomers:F,owners:B,staff:[...B,...F],reviews:T.reviews});const $e={name:"App",setup(){return{appState:I(()=>$)}}},Se=e("footer",null,null,-1);function ke(s,t,i,o,n,c){const a=_("router-view");return r(),d(v,null,[m(a),Se],64)}var Ie=p($e,[["render",ke]]);const Ae=new IntersectionObserver((s,t)=>{s.forEach(i=>{i.isIntersecting&&(i.target.classList.add("enter"),t.unobserve(i.target))})}),je=(s,t)=>{t.value||(t.value={before:"before-enter",after:"upon-exit"}),console.log(t),s.classList.add("before-enter"),Ae.observe(s)};const Me={props:{groomer:{type:Object,required:!0}},setup(s){const t=z();return{showGroomerDetails(){t.push({name:"details",params:{id:s.groomer.id}})}}}},Ce=s=>(h("data-v-40f3b250"),s=s(),w(),s),Pe={class:"title-text fade-text"},Te=["src","alt"],Ee={class:"groomer-text"},qe=Ce(()=>e("div",{class:"swirly"},null,-1)),Le={class:"profile-button btn"};function Oe(s,t,i,o,n,c){const a=_("router-view");return r(),d(v,null,[e("div",{class:"groom-circle",style:ne(`--bg-color: ${i.groomer.color}`)},[e("p",Pe,y(i.groomer.name),1),e("img",{src:i.groomer.img,class:"groomer-p",alt:"image of {{groomer.name}}"},null,8,Te),e("p",Ee,y(i.groomer.name),1),qe,e("div",Le,[e("i",{class:"mdi mdi-chevron-right",onClick:t[0]||(t[0]=u=>o.showGroomerDetails())})])],4),m(a,{groomer:"groomer"})],64)}var J=p(Me,[["render",Oe],["__scopeId","data-v-40f3b250"]]),ze=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:J});const Ge={setup(){return{center:{lat:43.62036418660121,lng:-116.3136561693169},markers:[{position:{lat:43.62036418660121,lng:-116.3136561693169}}]}}},Re=e("div",{class:"col-12 d-flex justify-content-center"},[e("div",{class:"text-holder"},[e("h1",null,"Where to Find Us"),e("div",{class:"color-splash mb-4 bg-primary"})])],-1),De={class:"col-md-10 col-sm-12 col-lg-4 mb-4"},Fe=x('<div class="row"><span class="text-center"><p class="fs-4"><i class="mdi mdi-clock mx-1"></i> Mon - Sat: 7:30AM - 3:30PM </p></span><span class="text-center"><p class="fs-4"><i class="mdi mdi-phone mx-1"></i> 208-555-5555 </p></span></div>',1);function Be(s,t,i,o,n,c){const a=_("GMapMarker"),u=_("GMapCluster"),l=_("GMapMap");return r(),d(v,null,[Re,e("div",De,[m(l,{center:o.center,zoom:13,"map-type-id":"terrain",style:{height:"350px","border-radius":"1%"},"aria-describedby":"Map"},{default:f(()=>[m(u,null,{default:f(()=>[(r(!0),d(v,null,A(o.markers,(g,O)=>(r(),C(a,{key:O,position:g.position,clickable:!0,draggable:!0,onClick:Dt=>o.center=g.position,"aria-describedby":"Map"},null,8,["position","onClick"]))),128))]),_:1})]),_:1},8,["center"]),Fe])],64)}var Je=p(Ge,[["render",Be]]),Ne=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Je});const Ve={components:{Swiper:G,SwiperSlide:R},setup(){const s=z(),t=ae(),i=ce({});return re(()=>{i.value=$.staff.find(o=>o.id==t.params.id)}),{groomer:i,modules:[le],goBack(){s.go(-1),i.value={}}}}},M=s=>(h("data-v-292bd2c8"),s=s(),w(),s),He={class:"row d-flex justify-content-between bg-info"},Ke={class:"groom-circle m-0"},We=["src","alt"],Xe={class:"col-lg-9 p-5"},Ue={class:"row justify-content-center"},Ye={class:"col-lg-6"},Qe={class:"col-lg-6 swiper-images"},Ze=M(()=>e("img",{src:"https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/283516196_344714747793835_2385254879953852717_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=30y38CrzFGwAX9JCMro&_nc_ht=scontent-sea1-1.xx&oh=00_AT8QbFzxM12Lb730CxJD2sTwjJR9Y9mq-MGzr_bokjkKcA&oe=62F432DF",class:"",alt:""},null,-1)),es=M(()=>e("img",{src:"https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/283516196_344714747793835_2385254879953852717_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=30y38CrzFGwAX9JCMro&_nc_ht=scontent-sea1-1.xx&oh=00_AT8QbFzxM12Lb730CxJD2sTwjJR9Y9mq-MGzr_bokjkKcA&oe=62F432DF",class:"",alt:""},null,-1)),ss=M(()=>e("img",{src:"https://scontent.fboi1-1.fna.fbcdn.net/v/t39.30808-6/278138655_311978764400767_6982268134065803474_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=2x_V9lUlOqMAX-RYJXM&tn=tu3rTWTnrst4-Qth&_nc_ht=scontent.fboi1-1.fna&oh=00_AT9Z4nD2lGA1wuBMK4EeXBMKuuRWO1XT95yf0uEDnajv-w&oe=62F6C987",class:"",alt:""},null,-1)),ts=M(()=>e("img",{src:"https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/283516196_344714747793835_2385254879953852717_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=30y38CrzFGwAX9JCMro&_nc_ht=scontent-sea1-1.xx&oh=00_AT8QbFzxM12Lb730CxJD2sTwjJR9Y9mq-MGzr_bokjkKcA&oe=62F432DF",class:"",alt:""},null,-1));function os(s,t,i,o,n,c){const a=_("Bee32"),u=_("swiper-slide"),l=_("swiper"),g=P("scrollanimation");return j((r(),d("div",He,[e("div",{class:"col-lg-3 d-flex align-items-center flex-column text-center pt-5",onClick:t[0]||(t[0]=de(O=>o.goBack(),["stop"]))},[e("h2",null,y(o.groomer.name),1),e("div",Ke,[e("img",{src:o.groomer.img,alt:o.groomer.name+"'s picture",class:"groomer-p"},null,8,We)])]),e("div",Xe,[e("div",Ue,[e("div",Ye,[m(a),e("p",null,y(o.groomer.description),1)]),e("div",Qe,[m(l,{effect:"cards",grabCursor:!0,modules:o.modules,class:"mySwiper"},{default:f(()=>[m(u,null,{default:f(()=>[Ze]),_:1}),m(u,null,{default:f(()=>[es]),_:1}),m(u,null,{default:f(()=>[ss]),_:1}),m(u,null,{default:f(()=>[ts]),_:1})]),_:1},8,["modules"])])])])],512)),[[g]])}var is=p(Ve,[["render",os],["__scopeId","data-v-292bd2c8"]]),N=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:is}),ns="/assets/botique_round-removebg.06c82abc.png",as="/assets/dog-shirts-removebg.b3fe6afe.png",cs="/assets/botiaue_items-removebg.1ee33744.png";const rs={setup(){return{}}},E=s=>(h("data-v-0dc03dd4"),s=s(),w(),s),ls=E(()=>e("div",{class:"col-md-3 pt-md-4 text-hold ps-0 pe-5"},[e("p",{class:"big-the dimbo text-info"},"the"),e("h1",null,"Boutique"),e("div",{class:"color-splash mb-3 bg-warning w-50"}),e("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quasi obcaecati enim, labore eius vero, necessitatibus officia totam saepe delectus provident quis earum facere mollitia eum exercitationem deserunt aut quo! "),e("br")],-1)),ds=E(()=>e("div",{class:"col-lg-6 col-md-8 col-sm-12 d-flex justify-content-center align-items-center"},[e("div",{class:"flower d-flex"},[e("img",{class:"round-image img-fluid",src:ns,alt:"shelves with dog treats"}),e("div",{class:"petal-1"}),e("div",{class:"petal-2"}),e("div",{class:"petal-3"}),e("div",{class:"petal-4"}),e("div",{class:"circle-3"})])],-1)),ms=E(()=>e("div",{class:"col-lg-3 d-md-flex d-lg-block d-flex pe-md-5"},[e("div",{class:"d-flex position-relative justify-content-center circle-holder-2"},[e("img",{class:"small-image-2 img-fluid",src:as,alt:"dog shirts"}),e("div",{class:"circle-2"})]),e("div",{class:"d-flex position-relative justify-content-center circle-holder"},[e("img",{class:"small-image img-fluid",src:cs,alt:"dog toys and brushes"}),e("div",{class:"circle"})])],-1));function us(s,t,i,o,n,c){return r(),d(v,null,[ls,ds,ms],64)}var _s=p(rs,[["render",us],["__scopeId","data-v-0dc03dd4"]]),V=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_s}),H="/assets/pooflogo-removebg.c8a33de1.png";const ps={setup(){return{}}},S=s=>(h("data-v-40ab164b"),s=s(),w(),s),vs={class:"row navbar justify-content-between"},fs=S(()=>e("div",{class:"bone-banner"},[e("i",{class:"mdi mdi-bone icon-fun ps-2"}),e("i",{class:"mdi mdi-bone icon-fun ps-2"}),e("i",{class:"mdi mdi-dog icon-fun ps-2"}),e("i",{class:"mdi mdi-content-cut icon-fun ps-2"}),e("i",{class:"mdi mdi-dog icon-fun ps-2"}),e("i",{class:"mdi mdi-tennis-ball icon-fun ps-2"}),e("i",{class:"mdi mdi-content-cut icon-fun ps-2"}),e("i",{class:"mdi mdi-dog icon-fun ps-2"}),e("i",{class:"mdi mdi-bone icon-fun ps-2"}),e("i",{class:"mdi mdi-dog icon-fun ps-2"}),e("i",{class:"mdi mdi-dog icon-fun ps-2"}),e("i",{class:"mdi mdi-content-cut icon-fun ps-2"}),e("i",{class:"mdi mdi-bone icon-fun ps-2"}),e("i",{class:"mdi mdi-tennis-ball icon-fun ps-2"}),e("i",{class:"mdi mdi-tennis-ball icon-fun ps-2"}),e("i",{class:"mdi mdi-content-cut icon-fun ps-2"}),e("i",{class:"mdi mdi-content-cut icon-fun ps-2"}),e("i",{class:"mdi mdi-bone icon-fun ps-2"}),e("i",{class:"mdi mdi-tennis-ball icon-fun ps-2"}),e("i",{class:"mdi mdi-tennis-ball icon-fun ps-2"}),e("i",{class:"mdi mdi-content-cut icon-fun ps-2"}),e("i",{class:"mdi mdi-bone icon-fun ps-2"}),e("i",{class:"mdi mdi-tennis-ball icon-fun ps-2"}),e("i",{class:"mdi mdi-content-cut icon-fun ps-2"}),e("i",{class:"mdi mdi-bone icon-fun ps-2"}),e("i",{class:"mdi mdi-tennis-ball icon-fun ps-2"}),e("i",{class:"mdi mdi-tennis-ball icon-fun ps-2"}),e("i",{class:"mdi mdi-content-cut icon-fun ps-2"}),e("i",{class:"mdi mdi-bone icon-fun ps-2"}),e("i",{class:"mdi mdi-tennis-ball icon-fun ps-2"}),e("i",{class:"mdi mdi-content-cut icon-fun ps-2"}),e("i",{class:"mdi mdi-bone icon-fun ps-2"}),e("i",{class:"mdi mdi-tennis-ball icon-fun ps-2"}),e("i",{class:"mdi mdi-tennis-ball icon-fun ps-2"}),e("i",{class:"mdi mdi-content-cut icon-fun ps-2"}),e("i",{class:"mdi mdi-bone icon-fun ps-2"}),e("i",{class:"mdi mdi-tennis-ball icon-fun ps-2"}),e("i",{class:"mdi mdi-content-cut icon-fun ps-2"})],-1)),bs=S(()=>e("div",{class:"col-1"},null,-1)),gs=S(()=>e("div",{class:"col-3 text-dark"},[e("p",{class:"mb-0"},"PoofPets\xA9 2022"),e("p",null,[me(" Website Developed by "),e("s",null,"Austin Dye"),e("b",{class:"min-width"},"The Squad")])],-1)),hs=S(()=>e("div",{class:"col-3 text-center"},[e("img",{class:"my-3 logo",src:H,alt:"Poof Pets logo"})],-1)),ws={class:"col-3 d-flex justify-content-center"},ys={class:"links"},xs=S(()=>e("div",{class:"col-1"},null,-1));function $s(s,t,i,o,n,c){return r(),d("div",null,[e("div",vs,[fs,bs,gs,hs,e("div",ws,[e("div",ys,[e("b",{class:"text-dark",onClick:t[0]||(t[0]=a=>s.$emit("scroll","middle"))},"Services"),e("b",{class:"text-dark",onClick:t[1]||(t[1]=a=>s.$emit("scroll","wayBottom"))},"Location"),e("b",{class:"text-dark",onClick:t[2]||(t[2]=a=>s.$emit("scroll","bottom"))},"About")])]),xs])])}var Ss=p(ps,[["render",$s],["__scopeId","data-v-40ab164b"]]),K=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ss});const ks={setup(){return{groomers:I(()=>$.groomers),owners:I(()=>$.owners),changePage(s){let t=s.toString(),i=document.getElementById(t),o=`
        `;return i.innerHTML=o,i}}},components:{GroomIcons:J}},Is={class:"row bg-info holder"},As=x('<div class="col-lg-4 col-md-10 d-flex justify-content-center position-relative" data-v-d234293e><div class="text-holder d-flex" data-v-d234293e><h1 class="text-white about-text" data-v-d234293e>the</h1><div class="d-flex flex-column" data-v-d234293e><h1 class="text-white about-text-big" data-v-d234293e>Staff</h1><div class="color-splash bg-success w-50 align-self-end" data-v-d234293e></div></div></div></div>',1),js={class:"col-12 loader",id:"loader"},Ms={class:"row d-md-flex justify-content-end"},Cs={class:"col-12 loader pb-5 mb-5",id:"loader"},Ps={class:"row d-block d-md-flex groom-row justify-content-end"};function Ts(s,t,i,o,n,c){const a=_("GroomIcons"),u=P("scrollanimation");return j((r(),d("div",Is,[As,e("div",js,[e("div",Ms,[(r(!0),d(v,null,A(o.owners,l=>(r(),d("div",{class:"col-lg-3 col-md-6",key:l.id},[m(a,{groomer:l,key:l.id},null,8,["groomer"])]))),128))])]),e("div",Cs,[e("div",Ps,[(r(!0),d(v,null,A(o.groomers,l=>(r(),d("div",{class:"col-lg-3 col-md-6",key:l.id},[m(a,{groomer:l,key:l.id},null,8,["groomer"])]))),128))])])],512)),[[u]])}var Es=p(ks,[["render",Ts],["__scopeId","data-v-d234293e"]]),W=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Es});const qs={setup(){return{}}},Ls={class:"row scrolling-wrapper flex-row flex-nowrap pb-4 position-absoulte"},Os=x('<div class="col-12"><div class="div d-flex justify-content-center pb-2"><i class="mdi mdi-star text-success fs-4"></i><i class="mdi mdi-star text-success fs-4"></i><i class="mdi mdi-star text-success fs-4"></i><i class="mdi mdi-star text-success fs-4"></i><i class="mdi mdi-star text-success fs-4"></i></div><div class="p-3 d-flex justify-content-center"><i class="mdi mdi-format-quote-open"></i><i class=""> My dog, Koda, was groomed by Jamie and I can\u2019t even begin to tell you how fantastic he looks! I love coming here! </i><i class="mdi mdi-format-quote-close"></i></div></div><div class="col-12"><div class="div d-flex justify-content-center pb-2"><i class="mdi mdi-star text-success fs-4"></i><i class="mdi mdi-star text-success fs-4"></i><i class="mdi mdi-star text-success fs-4"></i><i class="mdi mdi-star text-success fs-4"></i><i class="mdi mdi-star text-success fs-4"></i></div><div class="p-3 d-flex justify-content-center"><i class="mdi mdi-format-quote-open"></i><i class=""> My dog, Koda, was groomed by Jamie and I can\u2019t even begin to tell you how fantastic he looks! I love coming here! </i><i class="mdi mdi-format-quote-close"></i></div></div><div class="col-12"><div class="div d-flex justify-content-center pb-2"><i class="mdi mdi-star text-success fs-4"></i><i class="mdi mdi-star text-success fs-4"></i><i class="mdi mdi-star text-success fs-4"></i><i class="mdi mdi-star text-success fs-4"></i><i class="mdi mdi-star text-success fs-4"></i></div><div class="p-3 d-flex justify-content-center"><i class="mdi mdi-format-quote-open"></i><i class=""> My dog, Koda, was groomed by Jamie and I can\u2019t even begin to tell you how fantastic he looks! I love coming here! </i><i class="mdi mdi-format-quote-close"></i></div></div><div class="col-12"><div class="div d-flex justify-content-center pb-2"><i class="mdi mdi-star text-success fs-4"></i><i class="mdi mdi-star text-success fs-4"></i><i class="mdi mdi-star text-success fs-4"></i><i class="mdi mdi-star text-success fs-4"></i><i class="mdi mdi-star text-success fs-4"></i></div><div class="p-3 d-flex justify-content-center"><i class="mdi mdi-format-quote-open"></i><i class=""> My dog, Koda, was groomed by Jamie and I can\u2019t even begin to tell you how fantastic he looks! I love coming here! </i><i class="mdi mdi-format-quote-close"></i></div></div>',4),zs=[Os];function Gs(s,t,i,o,n,c){return r(),d("div",Ls,zs)}var X=p(qs,[["render",Gs]]),U=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:X});const Rs={components:{Swiper:G,SwiperSlide:R},setup(){return{onSwiper:i=>{},onSlideChange:()=>{},modules:[ue],reviews:I(()=>$.reviews)}}},Ds=s=>(h("data-v-87d74a1a"),s=s(),w(),s),Fs={class:"review-container mt-5 pb-0"},Bs={class:"review-body mb-0 text-center"},Js={class:"text-dark"},Ns=Ds(()=>e("div",{class:"div d-flex justify-content-center pb-2"},[e("i",{class:"mdi mdi-star text-success fs-4"}),e("i",{class:"mdi mdi-star text-success fs-4"}),e("i",{class:"mdi mdi-star text-success fs-4"}),e("i",{class:"mdi mdi-star text-success fs-4"}),e("i",{class:"mdi mdi-star text-success fs-4"})],-1));function Vs(s,t,i,o,n,c){const a=_("swiper-slide"),u=_("swiper");return r(),C(u,{"slides-per-view":1,autoplay:{delay:15e3,disableOnInteraction:!1},"space-between":50,loop:!0,navigation:!0,modules:o.modules,onSwiper:o.onSwiper,onSlideChange:o.onSlideChange,class:"mySwiper"},{default:f(()=>[(r(!0),d(v,null,A(o.reviews,l=>(r(),C(a,{key:l.id},{default:f(()=>[e("div",Fs,[e("p",Bs,[e("q",Js,y(l.body),1)])]),Ns]),_:2},1024))),128))]),_:1},8,["modules","onSwiper","onSlideChange"])}var Y=p(Rs,[["render",Vs],["__scopeId","data-v-87d74a1a"]]),Q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Y}),Hs="/assets/3dogsnobackground.e7952d0e.png";const Ks={setup(){return{}},components:{Reviews:X,ReviewsSwiper:Y}},Ws=s=>(h("data-v-7f1a0406"),s=s(),w(),s),Xs={class:"col-12 position-absolute"},Us=x('<div class="spacer" data-v-7f1a0406></div><div class="col-md-5 pt-5" data-v-7f1a0406><div class="py-5 top-text" data-v-7f1a0406><h1 class="" data-v-7f1a0406>Call to Action Wow</h1><div class="color-splash mb-3 bg-danger w-75" data-v-7f1a0406></div><p data-v-7f1a0406> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate aliquid veritatis voluptatum enim a placeat deleniti quas ipsa. </p></div></div>',2),Ys={class:"col-md-7 d-flex justify-content-center align-items-end"},Qs={class:"d-flex container-fluid pt-5",ref:"top"},Zs=Ws(()=>e("img",{class:"img-fluid three-dogs",src:Hs,alt:"3 dogs"},null,-1)),et=[Zs];function st(s,t,i,o,n,c){const a=_("ReviewsSwiper");return r(),d(v,null,[e("div",Xs,[m(a)]),Us,e("div",Ys,[e("div",Qs,et,512)])],64)}var tt=p(Ks,[["render",st],["__scopeId","data-v-7f1a0406"]]),Z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:tt});const ot={setup(){return{}}},q=s=>(h("data-v-0bc4ec60"),s=s(),w(),s),it={class:"w-100 d-lg-flex d-md-block d-none justify-content-end py-1 contact-hours"},nt={class:"fs-3 dimbo d-flex pt-1"},at=q(()=>e("a",{class:"text-info",href:"tel:555-555-5555"},"1-208-555-5555",-1)),ct={class:"dimbo text-dark d-flex mx-5 pt-1 fs-3"},rt=q(()=>e("a",null," Mon - Sat: 7:30AM - 3:30PM",-1)),lt={class:"navbar navbar-expand-lg navbar-dark"},dt={class:"loader"},mt={class:"position-absolute logo-container"},ut={class:"container-fluid"},_t=q(()=>e("button",{class:"navbar-toggler collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbar-items","aria-controls":"navbar-items","aria-expanded":"false","aria-label":"Toggle navigation"},[e("span",{class:"navbar-toggler-icon"})],-1)),pt={class:"collapse navbar-collapse justify-content-md-end",id:"navbar-items"},vt={class:"nav-content"},ft={class:"navbar-nav"},bt={class:"nav-item"},gt={class:"nav-item"},ht={class:"nav-item"},wt={class:"nav-item dropdown"};function yt(s,t,i,o,n,c){const a=_("PhoneFilled"),u=_("Time"),l=_("router-link");return r(),d(v,null,[e("div",it,[e("span",nt,[m(a),at]),e("span",ct,[m(u),rt])]),e("nav",lt,[e("div",dt,[m(l,{class:"navbar-brand d-flex",to:{path:"/home"}},{default:f(()=>[e("div",mt,[e("img",{src:H,class:"logo position-absolute",onClick:t[0]||(t[0]=g=>s.$emit("scroll","top")),alt:"Poof Pets logo"})])]),_:1})]),e("div",ut,[_t,e("div",pt,[e("div",vt,[e("ul",ft,[e("li",bt,[e("b",{class:"btn",onClick:t[1]||(t[1]=g=>s.$emit("scroll","middle")),"aria-describedby":"Services navigation button"},"Services")]),e("li",gt,[e("b",{class:"btn",onClick:t[2]||(t[2]=g=>s.$emit("scroll","bottom")),"aria-describedby":"About navigation button"},"About")]),e("li",ht,[e("b",{class:"btn",onClick:t[3]||(t[3]=g=>s.$emit("scroll","gallery")),"aria-describedby":"Gallery navigation button"},"Gallery")]),e("li",wt,[e("b",{class:"btn",onClick:t[4]||(t[4]=g=>s.$emit("scroll","wayBottom")),"aria-describedby":"Location navigation button"},"Location")])])])])])])],64)}var xt=p(ot,[["render",yt],["__scopeId","data-v-0bc4ec60"]]),ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:xt});const $t={setup(){return{}}},St=s=>(h("data-v-14a41f27"),s=s(),w(),s),kt={class:"col-md-7 justify-content-center"},It=St(()=>e("div",{class:"popout-circle bg-white"},[e("img",{class:"popout-image",src:"https://jankrepl.github.io/assets/images/symbolic_regression/main_files/cute-dog-transparent-background.png",alt:"dog"})],-1)),At=[It],jt={class:"col-md-5 about-service"},Mt=x('<div class="" data-v-14a41f27><h1 class="text-white" data-v-14a41f27>What We Do</h1><div class="color-splash mb-3 bg-success w-50" data-v-14a41f27></div></div><div class="content-box p-2 m-4 my-5" data-v-14a41f27><p data-v-14a41f27><i class="title-text mdi mdi-content-cut mx-3" data-v-14a41f27></i>Grooming</p><div class="row" data-v-14a41f27><div class="col-12" data-v-14a41f27> Lorem ipsum dolor, sit amet consectetur adipisicing elit. A alias ipsa tempore impedit, sed odio mollitia cumque eligendi placeat quia quas. Lorem ipsum dolor, sit amet consectetur adipisicing elit. </div></div></div><div class="content-box p-2 m-4 my-5" data-v-14a41f27><p data-v-14a41f27><i class="title-text mdi mdi-shower mx-3" data-v-14a41f27></i>Bathing</p><div class="color-splash mb-3 bg- w-50" data-v-14a41f27></div><div class="row" data-v-14a41f27><div class="col-12" data-v-14a41f27> Lorem ipsum dolor, sit amet consectetur adipisicing elit. A alias ipsa tempore impedit, sed odio mollitia cumque eligendi placeat quia quas. </div></div></div><div class="content-box p-2 m-4 my-5" data-v-14a41f27><p data-v-14a41f27><i class="title-text mdi mdi-hair-dryer mx-3" data-v-14a41f27></i>More!</p><div class="row" data-v-14a41f27><div class="col-12 px-3" data-v-14a41f27> Lorem ipsum dolor, sit amet consectetur adipisicing elit. A alias ipsa tempore impedit, sed odio mollitia cumque eligendi placeat quia quas. </div></div></div>',4),Ct=[Mt];function Pt(s,t,i,o,n,c){const a=P("scrollanimation");return r(),d(v,null,[j(e("div",kt,At,512),[[a]]),j(e("div",jt,Ct,512),[[a]])],64)}var Tt=p($t,[["render",Pt],["__scopeId","data-v-14a41f27"]]),se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Tt});function Et(s){const t={"./components/AboutSection.vue":N,"./components/BotiqueSection.vue":V,"./components/Footer.vue":K,"./components/GroomersSection.vue":W,"./components/HomeSection.vue":Z,"./components/NewNavbar.vue":ee,"./components/Reviews.vue":U,"./components/ReviewsSwiper.vue":Q,"./components/ServicesSection.vue":se}+{"./sections/GroomIcons.vue":ze,"./sections/LocationSection.vue":Ne};Object.entries(t).forEach(([i,o])=>{const n=o.name||i.substr(i.lastIndexOf("/")+1).replace(/\.\w+$/,"");s.component(n,o.default)})}const qt="modulepreload",te={},Lt="/",b=function(t,i){return!i||i.length===0?t():Promise.all(i.map(o=>{if(o=`${Lt}${o}`,o in te)return;te[o]=!0;const n=o.endsWith(".css"),c=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${c}`))return;const a=document.createElement("link");if(a.rel=n?"stylesheet":qt,n||(a.as="script",a.crossOrigin=""),a.href=o,document.head.appendChild(a),n)return new Promise((u,l)=>{a.addEventListener("load",u),a.addEventListener("error",l)})})).then(()=>t())};function Ot(s){switch(s){case"./components/AboutSection.vue":return b(()=>Promise.resolve().then(function(){return N}),void 0);case"./components/BotiqueSection.vue":return b(()=>Promise.resolve().then(function(){return V}),void 0);case"./components/Footer.vue":return b(()=>Promise.resolve().then(function(){return K}),void 0);case"./components/GroomersSection.vue":return b(()=>Promise.resolve().then(function(){return W}),void 0);case"./components/HomeSection.vue":return b(()=>Promise.resolve().then(function(){return Z}),void 0);case"./components/NewNavbar.vue":return b(()=>Promise.resolve().then(function(){return ee}),void 0);case"./components/Reviews.vue":return b(()=>Promise.resolve().then(function(){return U}),void 0);case"./components/ReviewsSwiper.vue":return b(()=>Promise.resolve().then(function(){return Q}),void 0);case"./components/ServicesSection.vue":return b(()=>Promise.resolve().then(function(){return se}),void 0);default:return new Promise(function(t,i){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+s)))})}}function zt(s){switch(s){case"./pages/HomePage.vue":return b(()=>import("./HomePage.b37e1f51.js"),["assets/HomePage.b37e1f51.js","assets/HomePage.98a2a825.css","assets/vendor.4862a777.js","assets/vendor.8294b109.css"]);default:return new Promise(function(t,i){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+s)))})}}function L(s){return()=>zt(`./pages/${s}.vue`)}function oe(s){return()=>Ot(`./components/${s}.vue`)}const Gt=[{path:"/home",name:"Home",component:L("HomePage"),children:[{name:"groomers",path:"",component:oe("GroomersSection")},{name:"details",path:"groomers/:id",component:oe("AboutSection")}]},{path:"/",redirect:s=>({path:"/home"})},{path:"/about",name:"About",component:L("AboutPage")},{path:"/account",name:"Account",component:L("AccountPage"),beforeEnter:ve}],Rt=_e({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:pe(),routes:Gt}),k=fe(Ie);k.use(be,{components:{Bee32:ge,PhoneFilled:he,Time:we}});k.directive("scrollanimation",je);k.use(ye,{load:{key:"AIzaSyCSYnAG1XV7NV2-O4-Ragzj5XABXOiFUc4"}});Et(k);k.use(Rt).mount("#app");export{$ as A,_s as B,Ss as F,tt as H,Je as L,xt as N,Tt as S,is as a};
