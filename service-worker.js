if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let r={};const l=e=>d(e,n),s={module:{uri:n},exports:r,require:l};i[n]=Promise.all(a.map((e=>s[e]||l(e)))).then((e=>(c(...e),r)))}}define(["./workbox-9a84fccb"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2024-AIS3-junior/20240818/1959086707/index.html",revision:"0b2395f7d9ce721fa1ace2e517c44181"},{url:"2024-AIS3-junior/20240818/2511373762/index.html",revision:"fd0e70788f20472ba7ce03249a263e55"},{url:"2024-AIS3-junior/20240818/2558445555/index.html",revision:"e38892c7f9021c8570c8fade603570e2"},{url:"2024-AIS3-junior/20240818/3116610850/index.html",revision:"6837480948f0a0c36464d513c28536a5"},{url:"2024-AIS3-junior/20241007/3482195068/index.html",revision:"5c916d3763d5a94e482b99451e76fad4"},{url:"404.html",revision:"7d03724f2042770a4315b06df2882b1c"},{url:"about/index.html",revision:"5113efdc7edc64c28caf0c20f10f6387"},{url:"album/index.html",revision:"25b216e2c1089541dad0f8c36938c0af"},{url:"anzhiyu/random.js",revision:"2f6daefad00172785f8dc2726563f033"},{url:"archives/2024/08/index.html",revision:"b3cf3a11427a75f5178e515880f1b6e7"},{url:"archives/2024/08/page/2/index.html",revision:"b6c386d50cf81d55d60dc2e36a0deac4"},{url:"archives/2024/08/page/3/index.html",revision:"41db4ace535e541d34b9f3ec909a9788"},{url:"archives/2024/10/index.html",revision:"bd20e26637e8c04416248b2252ccd3db"},{url:"archives/2024/12/index.html",revision:"7eb6fc476faaee4c51c280c9303a7a69"},{url:"archives/2024/index.html",revision:"716a54d6d2df27c16e133e038dc9d409"},{url:"archives/2024/page/2/index.html",revision:"c016f0b828c26a7b49b71475d206f84e"},{url:"archives/2024/page/3/index.html",revision:"52922c8fc2824732644a4b8d87e54b75"},{url:"archives/2024/page/4/index.html",revision:"266658a807d4347c2ebbf26a367e9666"},{url:"archives/index.html",revision:"dec4d4ba1e63453f9c748b7e426aa610"},{url:"archives/page/2/index.html",revision:"d9d971795f3d5d4d48259436feda5298"},{url:"archives/page/3/index.html",revision:"56bced5d26aa38f28406367435c31150"},{url:"archives/page/4/index.html",revision:"a50df81c5292caeec3485e621be69ba7"},{url:"categories/2024-AIS3-junior/index.html",revision:"04b6fafc8fa12ff140fe1022073092d5"},{url:"categories/class-note/index.html",revision:"0353f4395bc241b96974094a917ab486"},{url:"categories/development-plan-study/index.html",revision:"17a207d648efefa6e34ac2c61aa65e12"},{url:"categories/development-plan-study/page/2/index.html",revision:"c7e43f36b689d4a3e8e39f44201cd1bb"},{url:"categories/English-vocabulary/index.html",revision:"bafac2e58e51883802c6ef1e524bb4fa"},{url:"categories/FinTech-Summer-CAMP/index.html",revision:"505af12d6395d30bbdc523f74da36d71"},{url:"categories/hexo/index.html",revision:"e2cfbd37dd87c9cc1ffde96b7fefb95c"},{url:"categories/index.html",revision:"70839ffc5d52446e79a447fb1419159d"},{url:"categories/security-class/index.html",revision:"d49b68cd93f146cf8496104aafaf2c53"},{url:"certificate/index.html",revision:"e01957bd42879dd3259ac78324e715c3"},{url:"class-note/20241219/3214263100/index.html",revision:"b80930a76c16b4f752363927455deeea"},{url:"css/index.css",revision:"10a7d5f4afb88d7d597e0ceaadbe33e1"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"dailyPhoto/index.html",revision:"92d66522585e36012721b0d310726a99"},{url:"development-plan-study/20240803/4150029420/index.html",revision:"e4ccde44f397bf80e85d2154acc3c03c"},{url:"development-plan-study/20240804/1071407613/index.html",revision:"26a0b9a12d553d83298c04f72fcd1a9d"},{url:"development-plan-study/20240804/1104221922/index.html",revision:"1f2bc4f6a43df738fab66f1c1b3d7873"},{url:"development-plan-study/20240804/1141489070/index.html",revision:"becfe22ca496cf9327c4a3184886fd73"},{url:"development-plan-study/20240804/1145725608/index.html",revision:"f755acc9cc66480ed3bba7468514d1f8"},{url:"development-plan-study/20240804/1445033/index.html",revision:"7f85b7949370040ee994298b2a1f769e"},{url:"development-plan-study/20240804/1622524640/index.html",revision:"a575e2e716c170c55f1d62e06b27e96d"},{url:"development-plan-study/20240804/219339943/index.html",revision:"add2a24709f3d3d206dc39186b0fc7cc"},{url:"development-plan-study/20240804/2488948160/index.html",revision:"0b7f4f755775b70af9153b004f906f11"},{url:"development-plan-study/20240804/2738207586/index.html",revision:"7650af43c5c5354ebf51d776c6f68b98"},{url:"development-plan-study/20240804/2773257752/index.html",revision:"ddcbce64d1a353f152d00099056047e5"},{url:"development-plan-study/20240804/2949654091/index.html",revision:"4d23e515d591f1facd94f5283c4c2bfe"},{url:"development-plan-study/20240804/3228624429/index.html",revision:"2b402ba2bb8b3873de0e84d777ce3cdb"},{url:"development-plan-study/20240804/3400113813/index.html",revision:"dbff97aa96f8c94c607f94e1cbeae97f"},{url:"development-plan-study/20240804/3641593312/index.html",revision:"e2036bd0622eb76bffc619118085156c"},{url:"development-plan-study/20240804/3731081070/index.html",revision:"ec3a907332cc2338184c825ce908f5b7"},{url:"development-plan-study/20240804/4071265999/index.html",revision:"1a0543db9486c367142a340cb8751d06"},{url:"development-plan-study/20240804/661704589/index.html",revision:"6de42556a37ea6b5bd8830d16e53b018"},{url:"development-plan-study/20240804/922213511/index.html",revision:"4de59cf9b2fc606596b6f3d5b2b81eba"},{url:"development-plan-study/20240804/947027972/index.html",revision:"36c8359a59990c30da341f9bf0dce0c2"},{url:"English-vocabulary/20241213/1584650327/index.html",revision:"420529f97265f66bbf5b3ed99e807c5c"},{url:"FinTech-Summer-CAMP/20240807/2573885561/index.html",revision:"c1aad483e1039a8fffd96bab317b5e60"},{url:"hexo/20241226/949953052/index.html",revision:"020a821146462a609f27ca2201f4d357"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/cover.gif",revision:"c65270c47b7a37de5c28786122703430"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"index.html",revision:"e5ce881b3ab968d4de9cf5563ebf24d3"},{url:"js/anzhiyu/ai_abstract.js",revision:"e4baa11685a6c14d4130b5b74d9222dc"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/people.js",revision:"b946db8294a26b0b91e93dca5abda935"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"586c1eecf6617180a50d419def5fd4c0"},{url:"js/main.js",revision:"0ca6e958debf5d18e10ead8c0c00191c"},{url:"js/search/algolia.js",revision:"3ce06f0458bccd45a20ae797cccb6561"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/utils.js",revision:"b2bbde9d96fc4ded6c7a163038818ae5"},{url:"page/2/index.html",revision:"0138d8ede1f4a446d5ab5cdf8166a2d1"},{url:"page/3/index.html",revision:"7517933ae1c9635dec1acc4a399aee11"},{url:"page/4/index.html",revision:"87dc19a977acca40ec198b4e36f73715"},{url:"security-class/20240804/2649270278/index.html",revision:"c2d8883ff9c0dd5a8b2afef73acca467"},{url:"security-class/20240805/2835330838/index.html",revision:"57214f6bf0680c03bd15fbd7ec660eb4"},{url:"tags/English/index.html",revision:"0a3b64723969ae82b31c9a0306056d39"},{url:"tags/hexo/index.html",revision:"81b342b77d8d0a15eec78df84ae5d3ba"},{url:"tags/index.html",revision:"131fba5b8a08247548a5ebb95d93ea70"},{url:"tags/writeup/index.html",revision:"2e1f270fa476306bccbd47f0d6b8cb75"},{url:"tags/共筆筆記/index.html",revision:"59adb71dd91e95bb57092f83218f0315"},{url:"tags/國文/index.html",revision:"5d0702ef7f0538974bf34f5394ccba72"},{url:"tags/密碼學/index.html",revision:"05b0fac4d8992e71a91e53aeb03ef8a3"},{url:"tags/網路漏洞/index.html",revision:"070411b781312aa9466087a029cb5345"},{url:"tags/網路漏洞/page/2/index.html",revision:"7cbb3a3b064830470733217228679ba9"},{url:"tags/逆向工程/index.html",revision:"7dc75faa0e6c9f7924f87e08c99a6bd9"},{url:"tags/金融/index.html",revision:"9da363edd6b0ac76371c5d8cabe376b2"}],{})}));
//# sourceMappingURL=service-worker.js.map
