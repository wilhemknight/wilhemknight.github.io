_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[121],{"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n("q1tI"),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),l=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),b=a,h=d["".concat(s,".").concat(b)]||d[b]||u[b]||o;return n?r.a.createElement(h,i(i({ref:t},c),{},{components:n})):r.a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var o=n.length,s=new Array(o);s[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"===typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},ExTr:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/eas-update/optimize-assets",function(){return n("l3w8")}])},KiYJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n("cpVT"),r=n("3zh3"),o=(n("q1tI"),n("AeFk"));function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e){var t=e.alt,n=e.src,a=e.style,s=e.containerStyle;return Object(o.c)("div",{style:i({textAlign:"center",backgroundColor:r.theme.background.secondary,paddingTop:10,paddingBottom:10,marginTop:20,marginBottom:20},s)},Object(o.c)("img",{src:n,alt:t,style:a}))}},cpVT:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))},l3w8:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return p})),n.d(t,"headings",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n("HALo"),r=n("dhJC"),o=(n("q1tI"),n("7ljp")),s=n("KiYJ"),i=["components"],p={title:"How to optimize assets for EAS Update"},c=[{depth:2,type:"strong",title:""},{depth:2,type:"strong",title:""},{depth:2,type:"strong",title:""},{depth:2,type:"strong",title:""}],l={meta:p,headings:c};function d(e){var t=e.components,n=Object(r.a)(e,i);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"When an app finds a new update, it downloads a manifest and then downloads any new or updated assets so that it can run the update. The process is as follows:"),Object(o.b)(s.a,{alt:"Update download timeline",src:"/static/images/eas-update/process.png",mdxType:"ImageSpotlight"}),Object(o.b)("p",null,"Many users running Android and iOS apps are using mobile connections that are not as consistent or fast as when they are using Wi-Fi, so it's important that the assets shipped as a part of an update are as small as possible."),Object(o.b)("h2",{id:"code-assets"},Object(o.b)("strong",{parentName:"h2"},"Code assets")),Object(o.b)("p",null,"When publishing an update, EAS CLI runs Expo CLI to bundle the project into an update. The update will appear in our project's ",Object(o.b)("strong",{parentName:"p"},"./dist")," folder."),Object(o.b)("p",null,"In ",Object(o.b)("strong",{parentName:"p"},"./dist/bundles"),", we can see the size of the ",Object(o.b)("strong",{parentName:"p"},"index.ios.js")," and ",Object(o.b)("strong",{parentName:"p"},"index.android.js")," files that will be part of the iOS and Android updates, respectively. Note that these are uncompressed file sizes; EAS Update uses Brotli and gzip compression, which can significantly reduce download sizes. Nevertheless, these files will be downloaded to a user's device when getting the new update if the device has not downloaded them before. Making these file sizes as small as possible helps end-users download updates quickly."),Object(o.b)("h2",{id:"image-assets"},Object(o.b)("strong",{parentName:"h2"},"Image assets")),Object(o.b)("p",null,"Users will have to download any new images or other assets when they detect a new update, if those assets are not already a part of their build. You can view all the assets uploaded to EAS' servers in ",Object(o.b)("strong",{parentName:"p"},"./dist/assets"),". The assets there are hashed with their extensions removed, so it is difficult to know what assets are there. To see a pretty-printed list of assets, we can run:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"expo export --experimental-bundle\n")),Object(o.b)("p",null,"To optimize all the images in an app at once, we can use the ",Object(o.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/expo-optimize"},"expo-optimize library"),". ",Object(o.b)("inlineCode",{parentName:"p"},"expo-optimize")," uses ",Object(o.b)("inlineCode",{parentName:"p"},"sharp-cli")," to optimize all image assets."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"npx expo-optimize\n")),Object(o.b)("h2",{id:"other-assets"},Object(o.b)("strong",{parentName:"h2"},"Other assets")),Object(o.b)("p",null,"For assets like GIFs or movies, or non-code and non-image assets, it's up to the developer to optimize and minify those assets. (Note: GIFs are a very inefficient format. Modern video codecs can produce smaller file sizes by over an order of magnitude.)"),Object(o.b)("h2",{id:"further-considerations"},Object(o.b)("strong",{parentName:"h2"},"Further considerations")),Object(o.b)("p",null,"It's important to point out that a user's app will only download new or updated assets. It will not re-download unchanged assets that already exist inside the app."),Object(o.b)("p",null,"One way to make sure that updates stay as slim as possible is to build and submit the app frequently to the app stores so that users can download a new app binary that includes more up-to-date assets. Generally, it's a good practice to build and submit an app when adding large or many assets, and good to use updates to fix small bugs and make minor changes between app store releases."))}d.isMDXComponent=!0}},[["ExTr",1,0,2,3]]]);