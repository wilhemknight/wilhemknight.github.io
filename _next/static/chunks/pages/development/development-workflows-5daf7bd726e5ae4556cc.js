_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[86],{"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var o=n("q1tI"),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),c=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"===typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(n),s=o,m=d["".concat(i,".").concat(s)]||d[s]||b[s]||r;return n?a.a.createElement(m,l(l({ref:t},u),{},{components:n})):a.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"===typeof e||o){var r=n.length,i=new Array(r);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"===typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},HALo:function(e,t,n){"use strict";function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return o}))},LcKt:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return l})),n.d(t,"headings",(function(){return p})),n.d(t,"default",(function(){return c}));var o=n("HALo"),a=n("dhJC"),r=(n("q1tI"),n("7ljp")),i=["components"],l={title:"Development Workflows"},p=[{depth:2,type:"text",title:"Iterating on your product with development builds"},{depth:2,type:"text",title:"Tools"},{depth:3,type:"text",title:"Tunnel URLs"},{depth:3,type:"text",title:"Published Updates"},{depth:3,type:"text",title:"Deep linking URLs"},{depth:3,type:"text",title:"QR Codes"},{depth:2,type:"text",title:"Example Workflows"},{depth:3,type:"text",title:"Development Builds"},{depth:3,type:"text",title:"Side by side installation"},{depth:3,type:"text",title:"PR Previews"}],u={meta:l,headings:p};function c(e){var t=e.components,n=Object(a.a)(e,i);return Object(r.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"iterating-on-your-product-with-development-builds"},"Iterating on your product with development builds"),Object(r.b)("p",null,"When you create a development build of your project, you'll get a stable environment to load any changes to your app that can be defined in JavaScript or other asset-related changes to your app. Other changes to your app, whether defined directly in your ",Object(r.b)("strong",{parentName:"p"},"ios/")," and ",Object(r.b)("strong",{parentName:"p"},"android/")," directories or by packages or SDKs you choose to install, will require you to create a new build of your development build."),Object(r.b)("p",null,"To enforce an API contract between the JavaScript and native layers of your app, you should set the ",Object(r.b)("a",{parentName:"p",href:"/distribution/runtime-versions/"},Object(r.b)("inlineCode",{parentName:"a"},"runtimeVersion"))," value in ",Object(r.b)("strong",{parentName:"p"},"app.json")," or ",Object(r.b)("strong",{parentName:"p"},"app.config.js"),". Each build you make will have this value embedded and will only load bundles with the same ",Object(r.b)("inlineCode",{parentName:"p"},"runtimeVersion"),", in both development and production."),Object(r.b)("h2",{id:"tools"},"Tools"),Object(r.b)("h3",{id:"tunnel-urls"},"Tunnel URLs"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"expo start")," exposes your development server on a publicly available URL that can be accessed through firewalls from around the globe. This option is useful if you are not able to connect to your development server with the default LAN option or if you want to get feedback on your implementation while you are developing."),Object(r.b)("p",null,"To get a tunneled URL, pass the ",Object(r.b)("inlineCode",{parentName:"p"},"--tunnel")," flag to ",Object(r.b)("inlineCode",{parentName:"p"},"expo start"),' from the command line, or select the "tunnel" option for "CONNECTION" if you are using the developer tools.'),Object(r.b)("h3",{id:"published-updates"},"Published Updates"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"/workflow/publishing/"},Object(r.b)("inlineCode",{parentName:"a"},"expo publish")),' packages the current state of your JavaScript and asset files into an optimized "update" stored on a free hosting service provided by Expo. A development build of your app can load published updates without needing to check out a particular commit or leave a development machine running.'),Object(r.b)("h3",{id:"deep-linking-urls"},"Deep linking URLs"),Object(r.b)("p",null,"You can load your app on a device that has a compatible build of your custom client by opening a URL of the form ",Object(r.b)("inlineCode",{parentName:"p"},"{scheme}://expo-development-client/?url={manifestUrl}")," where"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"parameter"),Object(r.b)("th",{parentName:"tr",align:null},"value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"scheme")),Object(r.b)("td",{parentName:"tr",align:null},"URL scheme of your client (defaults to ",Object(r.b)("inlineCode",{parentName:"td"},"exp+{slug}")," where slug is the value set in your app.json)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"url")),Object(r.b)("td",{parentName:"tr",align:null},"URL-encoded URL of a update manifest to load (e.g. as provided by ",Object(r.b)("inlineCode",{parentName:"td"},"expo publish"),")")))),Object(r.b)("h3",{id:"qr-codes"},"QR Codes"),Object(r.b)("p",null,"You can use our endpoint to generate a QR code that can be easily loaded by a development build."),Object(r.b)("p",null,"Requests to ",Object(r.b)("inlineCode",{parentName:"p"},"https://qr.expo.dev/development-client"),", when supplied the query parameters"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"parameter"),Object(r.b)("th",{parentName:"tr",align:null},"value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"appScheme")),Object(r.b)("td",{parentName:"tr",align:null},"URL-encoded deeplinking scheme of your development build (defaults to ",Object(r.b)("inlineCode",{parentName:"td"},"exp+{slug}")," where slug is the value set in your ",Object(r.b)("strong",{parentName:"td"},"app.json"),")")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"url")),Object(r.b)("td",{parentName:"tr",align:null},"URL of a update manifest to load (e.g. as provided by ",Object(r.b)("inlineCode",{parentName:"td"},"expo publish"),")")))),Object(r.b)("p",null,"receive a response with an SVG image containing a QR code that can be easily scanned to load a version of your project in your development build."),Object(r.b)("h2",{id:"example-workflows"},"Example Workflows"),Object(r.b)("p",null,"These are a few examples of workflows to help your team get the most out of your development build. If you come up with others that would be useful for other teams, please ",Object(r.b)("a",{parentName:"p",href:"https://github.com/expo/expo/tree/main/CONTRIBUTING.md#-updating-documentation"},"submit a PR")," to share your knowledge!"),Object(r.b)("h3",{id:"development-builds"},"Development Builds"),Object(r.b)("p",null,"Developers on your team with expertise working with Xcode and Android Studio can update, review, and test changes to the native portion of your app and release them to your team periodically. The rest of your team can install these builds on their devices and simulators and quickly iterate on the JavaScript portion of your app without needing to understand and maintain the tooling required to create a new build."),Object(r.b)("h3",{id:"side-by-side-installation"},"Side by side installation"),Object(r.b)("p",null,"If you need to look at release builds of your project, it is convenient to not overwrite the development build of your app every time you do so. You can accomplish this by using ",Object(r.b)("a",{parentName:"p",href:"/workflow/configuration/"},Object(r.b)("strong",{parentName:"a"},"app.config.js"))," to set the bundle identifier or package name based on an environment variable. When changing the ID of your project, be aware that some modules will expect you to perform installation steps for each bundle identifier or package name you use."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"module.exports = () => {\n  if (process.env.MY_ENVIRONMENT === 'production') {\n    return {\n      ios: { bundleIdentifier: 'dev.expo.example' },\n      android: { package: 'dev.expo.example' },\n    };\n  } else {\n    return {\n      ios: { bundleIdentifier: 'dev.expo.example.dev' },\n      android: { package: 'dev.expo.example.dev' },\n    };\n  }\n};\n")),Object(r.b)("h3",{id:"pr-previews"},"PR Previews"),Object(r.b)("p",null,"You can set up your CI process to publish your project whenever a pull request is merged or updated and add a QR code that can be used to view the change in a compatible development build."),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://github.com/expo/expo-preview-action"},"expo-preview-action")," can be used to implement this workflow in your project using GitHub Actions, or serve as a template in your CI of choice."))}c.isMDXComponent=!0},Qetd:function(e,t,n){"use strict";var o=Object.assign.bind(Object);e.exports=o,e.exports.default=e.exports},VMmm:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/development/development-workflows",function(){return n("LcKt")}])},dhJC:function(e,t,n){"use strict";function o(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return o}))}},[["VMmm",1,0]]]);