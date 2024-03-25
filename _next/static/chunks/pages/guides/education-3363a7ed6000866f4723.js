_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[144],{"299F":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return s})),n.d(t,"headings",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n("HALo"),r=n("dhJC"),o=(n("q1tI"),n("7ljp")),i=["components"],s={title:"Crafting Educational Materials"},l=[{depth:2,type:"text",title:"Background"},{depth:2,type:"text",title:"Tips for crafting educational materials"}],c={meta:s,headings:l};function u(e){var t=e.components,n=Object(r.a)(e,i);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Creating educational content for fast-moving software projects comes with some inherent difficulties, and Expo is no exception. You want the documentation that you prepare to hold up over time, but the tools change and some of your content will become invalid over time. This document is intended to give some background on versioning of React Native and other libraries within the Expo Go app / SDK, and then leave you with some practical advice on how to proceed given the constraints."),Object(o.b)("h2",{id:"background"},"Background"),Object(o.b)("p",null,"Expo tools lower the barrier to entry for React Native by making it faster to get started by requiring fewer tools to install and letting you interact with just JavaScript and its ecosystem rather than the explosion of new tools and languages that arise when working with iOS and Android projects. For this reason, it is a popular choice for educators when creating learning materials for React Native. It lets educators focus on the essential complexity at the heart of React Native rather than the accidental complexity that arises from divergent tools and languages that solve similar problems in different ways."),Object(o.b)("p",null,"We frequently release new versions of Expo and each release includes a number of breaking changes in the SDK and in React Native itself. The ideal state is that we have very few breaking changes and they are rolled out gradually with long deprecation timelines and built-in backwards compatibility. But the ecosystem isn\u2019t there yet, it\u2019s fairly unstable and moves quickly, so we continue to support old versions in the Expo Go app by including the entire set of libraries necessary to run that version in the same binary as the latest release. We have historically continued to support old versions in the same Expo Go binary for about 1 year."),Object(o.b)("p",null,"This allows educators to target a specific version of React Native / Expo in their learning materials rather than have to re-write it every few months to accommodate the changes in the latest release."),Object(o.b)("p",null,'But maintaining backwards compatibility in this way is very costly. It\u2019s extremely difficult and sometimes effectively impossible for us include multiple versions of some libraries in one app. Code occasionally must be shared across versions and that can lead to unexpected bugs. Internals of a library might change in subtle ways that our scripts for "versioning" it may miss and it can take us days to find the ',Object(o.b)("a",{parentName:"p",href:"https://github.com/expo/expo/pull/4007"},"source of the resulting bug"),". Transitive dependencies may change and result in incompatibilities. Google or Apple might remove or deprecate features that previous versions depended on. When we finally get everything compiling, it\u2019s difficult to adequately test a single release, never mind 6 or 7 releases at the same time, given the massive surface area of Expo. The result is that ",Object(o.b)("strong",{parentName:"p"},"we cannot make any promises around the lifetime of any given Expo SDK in the Expo Go app that is available on the App / Play Store.")," It will always be possible to download old versions of the Expo Go app and install them in your simulator, and we may at some point provide a service that lets you create ad-hoc builds for old versions as well, but we are limited in what we can do on the official stores."),Object(o.b)("h2",{id:"tips-for-crafting-educational-materials"},"Tips for crafting educational materials"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The core primitives of React Native do not change much or often, they are based largely on web standards. View, Text, Image and their related properties are going to work the same regardless of the version that you use, generally speaking."),Object(o.b)("li",{parentName:"ul"},"We\u2019ve found most of the breaking changes stem from a few libraries that Expo uses, like React Native. Other libraries, like React, are fairly stable. Writing educational materials in a way that covers the ideas more than specific APIs of unstable libraries will make your content more evergreen."),Object(o.b)("li",{parentName:"ul"},"You can lock the version that users install with init, eg: ",Object(o.b)("inlineCode",{parentName:"li"},"expo init --template blank@sdk-31"),". As mentioned above, we may not be able to maintain version compatibility indefinitely, so if you do this you should use the latest available version at the time of preparing your materials and be prepared to update them within 3 to 6 months in the worst case."),Object(o.b)("li",{parentName:"ul"},"Always specify what SDK version your materials were created for. Be prepared to update the materials every 6 months to 1 year if they are important to you."),Object(o.b)("li",{parentName:"ul"},"If the time constraints around supported SDK version in the Expo Go app are not acceptable for you, we recommend either using the ",Object(o.b)("em",{parentName:"li"},"bare workflow")," with expo-cli or react-native-cli on its own.")))}u.isMDXComponent=!0},"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var a=n("q1tI"),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"===typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,f=p["".concat(i,".").concat(h)]||p[h]||d[h]||o;return n?r.a.createElement(f,s(s({ref:t},c),{},{components:n})):r.a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"===typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},HALo:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},Pdl3:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/education",function(){return n("299F")}])},Qetd:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},dhJC:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,"a",(function(){return a}))}},[["Pdl3",1,0]]]);