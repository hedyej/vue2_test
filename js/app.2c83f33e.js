(function(){"use strict";var t={2229:function(t,e,n){var r=n(8145),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("nav",[e("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),e("router-link",{attrs:{to:"/test1"}},[t._v("考題1")]),t._v(" | "),e("router-link",{attrs:{to:"/test2"}},[t._v("考題2")])],1),e("router-view")],1)},i=[],u=n(3736),a={},c=(0,u.Z)(a,o,i,!1,null,null,null),s=c.exports,l=n(1476),f=function(){var t=this;t._self._c;return t._m(0)},d=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("h1",[t._v("This is an home page")])])}],p={},h=(0,u.Z)(p,f,d,!1,null,null,null),v=h.exports;r.ZP.use(l.ZP);const m=[{path:"/",name:"home",component:v},{path:"/test1",name:"test1",component:()=>n.e(800).then(n.bind(n,6800))},{path:"/test2",name:"test2",component:()=>n.e(875).then(n.bind(n,875))}],g=new l.ZP({routes:m});var w=g,b=n(5222),y=n(6148);const _=!0,k={table_data:[{id:1,text:"Hello world",url:"https://www.google.com"},{id:2,text:"iphone",url:"https://www.apple.com/tw/"},{id:3,text:"andriod",url:"https://www.android.com/intl/zh-TW_tw/"}],showData:[]},S={setShowData(t,e){t.showData=e}},O={async getShowData({commit:t}){const e="https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";try{const n=await y.Z.get(e);t("setShowData",n)}catch(n){alert("應用程式錯誤")}}};var P={namespaced:_,state:k,actions:O,mutations:S};r.ZP.use(b.ZP);var C=new b.ZP.Store(P);r.ZP.config.productionTip=!1,new r.ZP({router:w,store:C,render:t=>t(s)}).$mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,i){if(!r){var u=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],i=t[l][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){t.splice(l--,1);var s=o();void 0!==s&&(e=s)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[r,o,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{800:"b4831053",875:"d189426d"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{800:"dcc065bd",875:"1e381228"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="vue2_test:";n.l=function(r,o,i,u){if(t[r])t[r].push(o);else{var a,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==e+i){a=f;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",e+i),a.src=r),t[r]=[o];var d=function(e,n){a.onerror=a.onload=null,clearTimeout(p);var o=t[r];if(delete t[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,n,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var u=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var u=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=u,c.request=a,i.parentNode&&i.parentNode.removeChild(i),o(c)}};return i.onerror=i.onload=u,i.href=e,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===t||i===e))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===t||i===e)return o}},r=function(r){return new Promise((function(o,i){var u=n.miniCssF(r),a=n.p+u;if(e(u,a))return o();t(r,a,null,o,i)}))},o={143:0};n.f.miniCss=function(t,e){var n={800:1,875:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=i);var u=n.p+n.u(e),a=new Error,c=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+e+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};n.l(u,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,i,u=r[0],a=r[1],c=r[2],s=0;if(u.some((function(e){return 0!==t[e]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(c)var l=c(n)}for(e&&e(r);s<u.length;s++)i=u[s],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},r=self["webpackChunkvue2_test"]=self["webpackChunkvue2_test"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(2229)}));r=n.O(r)})();
//# sourceMappingURL=app.2c83f33e.js.map