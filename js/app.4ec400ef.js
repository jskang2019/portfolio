(function(e){function t(t){for(var o,a,c=t[0],i=t[1],l=t[2],d=0,h=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&h.push(r[a][0]),r[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);m&&m(t);while(h.length)h.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],o=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(o=!1)}o&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={app:0},r={app:0},u=[];function c(e){return i.p+"js/"+({"about~home":"about~home",about:"about",home:"home",notfound:"notfound",one:"one",two:"two"}[e]||e)+"."+{"chunk-3d7c6497":"a1a511e6","chunk-445260da":"4593dd97","chunk-5812abfc":"da1a91a8","about~home":"4290ca05",about:"b74e4a79",home:"82506de7","chunk-e28809d6":"17884148","chunk-b8cac33a":"aef85138",notfound:"5909d050",one:"5e4fdc8d",two:"b80ad6e1","chunk-90d28aa0":"c80dc01d"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-3d7c6497":1,"chunk-445260da":1,"chunk-5812abfc":1,"about~home":1,home:1,"chunk-e28809d6":1,"chunk-b8cac33a":1,notfound:1,one:1,two:1,"chunk-90d28aa0":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var o="css/"+({"about~home":"about~home",about:"about",home:"home",notfound:"notfound",one:"one",two:"two"}[e]||e)+"."+{"chunk-3d7c6497":"75c0bc4f","chunk-445260da":"b33cb9df","chunk-5812abfc":"686f87d4","about~home":"b52fa337",about:"31d6cfe0",home:"0e62d9dd","chunk-e28809d6":"05b3397f","chunk-b8cac33a":"508cbe8e",notfound:"1984e69b",one:"1984e69b",two:"1984e69b","chunk-90d28aa0":"32b113be"}[e]+".css",r=i.p+o,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var l=u[c],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===o||d===r))return t()}var h=document.getElementsByTagName("style");for(c=0;c<h.length;c++){l=h[c],d=l.getAttribute("data-href");if(d===o||d===r)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var o=t&&t.target&&t.target.src||r,u=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=o,delete a[e],m.parentNode.removeChild(m),n(u)},m.href=r;var s=document.getElementsByTagName("head")[0];s.appendChild(m)})).then((function(){a[e]=0})));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var u=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=u);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=c(e);var h=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(m);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",h.name="ChunkLoadError",h.type=o,h.request=a,n[1](h)}r[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/portfolio/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var h=0;h<l.length;h++)t(l[h]);var m=d;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);var o=n("2b0e"),a=n("a523"),r=n("f6c4"),u=function(){var e=this,t=e._self._c;return t(r["a"],[t(a["a"],{staticClass:"grey lighten-5"},[t("router-view")],1)],1)},c=[],i={data:()=>({selectedItem:1,drawer:!1,ip:"",items:[{icon:"mdi-alpha-a-box-outline",title:"메뉴 아이템 #1",to:"/"},{icon:"mdi-alpha-b-box-outline",title:"메뉴 아이템 #2",to:"/one"},{icon:"mdi-alpha-c-box-outline",title:"메뉴 아이템 #3",to:"/two"},{icon:"mdi-alpha-d-box-outline",title:"메뉴 아이템 #4",to:"/admin"}]}),updated(){},created(){},mounted(){this.$store.commit("increment",3)}},l=i,d=n("2877"),h=Object(d["a"])(l,u,c,!1,null,null,null),m=h.exports,s=n("f309");o["a"].use(s["a"]);var f=new s["a"]({}),p=n("8c4f"),b=n("2f62");o["a"].use(b["a"]);var g=new b["a"].Store({state:{token:"",count:0,myip:""},getters:{isAuth:e=>!!e.token,getIp:e=>e.myip},mutations:{increment(e,t){e.count+=t},setIP(e,t){e.myip=t},login(e,t){console.log(t),t&&(e.token=t,localStorage.setItem("token",t))},logout(e){e.token=null,localStorage.removeItem("token")}},actions:{login({commit:e},{token:t}){e("login",t)},logout(e){e.token=null,localStorage.removeItem("token")}},modules:{}});o["a"].use(p["a"]);const k=[{path:"/",component:()=>Promise.all([n.e("chunk-3d7c6497"),n.e("chunk-5812abfc"),n.e("chunk-b8cac33a")]).then(n.bind(null,"1974")),children:[{path:"/",name:"Home",meta:{authRequired:!0},component:()=>Promise.all([n.e("chunk-3d7c6497"),n.e("chunk-445260da"),n.e("chunk-5812abfc"),n.e("about~home"),n.e("home")]).then(n.bind(null,"bb51"))},{path:"/one",name:"One",component:()=>Promise.all([n.e("chunk-3d7c6497"),n.e("one")]).then(n.bind(null,"2796"))},{path:"/two",name:"Two",component:()=>Promise.all([n.e("chunk-3d7c6497"),n.e("two")]).then(n.bind(null,"d524"))},{path:"/notfound",name:"NotFound",meta:{authRequired:!0},component:()=>Promise.all([n.e("chunk-3d7c6497"),n.e("notfound")]).then(n.bind(null,"9703"))},{path:"/admin",name:"Admin",meta:{authRequired:!0},component:()=>Promise.all([n.e("chunk-3d7c6497"),n.e("chunk-445260da"),n.e("chunk-5812abfc"),n.e("about~home"),n.e("about")]).then(n.bind(null,"3530"))}]},{path:"/auth",name:"Auth",component:()=>n.e("chunk-90d28aa0").then(n.bind(null,"318d")),children:[{path:"/login",name:"Login",component:()=>Promise.all([n.e("chunk-3d7c6497"),n.e("chunk-445260da"),n.e("chunk-e28809d6")]).then(n.bind(null,"a55b"))}],meta:{authRequired:!1}}],v=new p["a"]({mode:"history",base:"/portfolio/",routes:k});v.beforeEach((e,t,n)=>{e.matched.some(e=>e.meta.authRequired)&&!g.getters.isAuth?(alert("please login "),n({path:"/login",replace:!0})):n()});var y=v,w=n("bc3a"),P=n.n(w);o["a"].config.productionTip=!1,P.a.defaults.headers.common["Access-Control-Allow-Origin"]="*",o["a"].prototype.$axios=P.a,new o["a"]({vuetify:f,router:y,store:g,render:e=>e(m)}).$mount("#app")}});
//# sourceMappingURL=app.4ec400ef.js.map