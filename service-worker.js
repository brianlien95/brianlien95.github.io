if(!self.define){let e,i={};const n=(n,o)=>(n=new URL(n+".js",o).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let t={};const c=e=>n(e,r),u={module:{uri:r},exports:t,require:c};i[r]=Promise.all(o.map((e=>u[e]||c(e)))).then((e=>(s(...e),t)))}}define(["./workbox-a02082c8"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"b1c7fe5aa3ff4857c0d6d488092e6a83"},{url:"css/index.css",revision:"10a7d5f4afb88d7d597e0ceaadbe33e1"},{url:"/",revision:"index-20241106124513429"},{url:"music/",revision:"music-20241106124513429"},{url:"about/",revision:"about-20241106124513429"}],{}),e.registerRoute(/^https:\/\/npm\.elemecdn\.com\/anzhiyu-blog/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
