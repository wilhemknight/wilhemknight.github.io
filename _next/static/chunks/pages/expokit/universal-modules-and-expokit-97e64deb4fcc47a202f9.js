_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[128],{"7KWB":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return l})),n.d(t,"headings",(function(){return p})),n.d(t,"default",(function(){return c}));var o=n("HALo"),r=n("dhJC"),i=(n("q1tI"),n("7ljp")),a=["components"],l={title:"Universal Modules and ExpoKit"},p=[{depth:1,type:"text",title:"Omitting Unneeded Modules"},{depth:2,type:"text",title:"iOS"},{depth:3,type:"text",title:"These modules are included by default, but can be omitted"},{depth:3,type:"text",title:"These modules are included by default, but can be dangerously omitted"},{depth:2,type:"text",title:"Android"},{depth:1,type:"text",title:"Adding Optional Modules on iOS"}],u={meta:l,headings:p};function c(e){var t=e.components,n=Object(r.a)(e,a);return Object(i.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\ud83d\udeab ExpoKit is deprecated and is no longer supported after SDK 38. If you need to make customizations to your Expo project, we recommend using the ",Object(i.b)("a",{parentName:"p",href:"/workflow/customizing/"},"bare workflow")," instead.")),Object(i.b)("p",null,"Universal Modules are pieces of the Expo SDK with some special properties:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"They are optional; you can remove them from your ExpoKit build if you don't need their native code."),Object(i.b)("li",{parentName:"ul"},"They can run as standalone libraries without Expo.")),Object(i.b)("p",null,"Not all Expo SDK modules are Universal Modules. Right now, only a small part of our SDK has this property. We're continually expanding the number of our APIs that are available as universal modules."),Object(i.b)("h1",{id:"omitting-unneeded-modules"},"Omitting Unneeded Modules"),Object(i.b)("p",null,"When you ",Object(i.b)("a",{parentName:"p",href:"/expokit/eject/"},"create an ExpoKit project"),", we automatically add most of the same native APIs that are available in the Expo Go app. Each of these APIs is supported by some native code which increases the size of your native binary."),Object(i.b)("p",null,"You can remove any Expo Universal Module from your ExpoKit project if you don't think you need it. This means it will no longer be available in your native binary; if you write some JS which tries to import this API, you might cause a fatal error in your app. If you send an ",Object(i.b)("a",{parentName:"p",href:"/guides/configuring-updates/"},"update")," to your app which contains API calls that aren't present in your native binary, you might cause a fatal error."),Object(i.b)("p",null,"Omitting Universal Modules is currently supported on iOS but not Android."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"If you aren't sure what this guide is for or whether you need this,")," you are probably better off just leaving it alone. Otherwise you risk causing crashes in your app by ripping out needed APIs.")),Object(i.b)("h2",{id:"ios"},"iOS"),Object(i.b)("p",null,"To omit a Universal Module from your iOS ExpoKit project, remove the respective dependency from ",Object(i.b)("inlineCode",{parentName:"p"},"ios/Podfile"),". Then re-run ",Object(i.b)("inlineCode",{parentName:"p"},"npx pod-install")," and rebuild your native code."),Object(i.b)("h3",{id:"these-modules-are-included-by-default-but-can-be-omitted"},"These modules are included by default, but can be omitted"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"GL (",Object(i.b)("inlineCode",{parentName:"li"},"EXGL")," and ",Object(i.b)("inlineCode",{parentName:"li"},"EXGL-CPP"),")"),Object(i.b)("li",{parentName:"ul"},"SMS composer (",Object(i.b)("inlineCode",{parentName:"li"},"EXSMS"),")"),Object(i.b)("li",{parentName:"ul"},"Accelerometer, DeviceMotion, Gyroscope, Magnetometer, Pedometer (",Object(i.b)("inlineCode",{parentName:"li"},"EXSensors"),")")),Object(i.b)("h3",{id:"these-modules-are-included-by-default-but-can-be-dangerously-omitted"},"These modules are included by default, but can be dangerously omitted"),Object(i.b)("p",null,"Some modules implement core Expo functionality through a generic interface. For example, our ",Object(i.b)("inlineCode",{parentName:"p"},"Permissions")," module implements ",Object(i.b)("inlineCode",{parentName:"p"},"expo-permissions-interface"),". If you remove the Permissions module, the project will build, but it may not run unless you add some other code which provides Expo Permissions functionality."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Camera (",Object(i.b)("inlineCode",{parentName:"li"},"EXCamera"),")"),Object(i.b)("li",{parentName:"ul"},"Constants (",Object(i.b)("inlineCode",{parentName:"li"},"EXConstants"),")"),Object(i.b)("li",{parentName:"ul"},"FileSystem (",Object(i.b)("inlineCode",{parentName:"li"},"EXFileSystem"),")"),Object(i.b)("li",{parentName:"ul"},"Permissions (",Object(i.b)("inlineCode",{parentName:"li"},"EXPermissions"),")")),Object(i.b)("h2",{id:"android"},"Android"),Object(i.b)("p",null,"Omitting Universal Modules is not currently supported on Android."),Object(i.b)("h1",{id:"adding-optional-modules-on-ios"},"Adding Optional Modules on iOS"),Object(i.b)("p",null,"A few Expo modules are not included by default in ExpoKit iOS projects, nor in Standalone iOS Apps produced by ",Object(i.b)("inlineCode",{parentName:"p"},"expo build"),". Typically this is either because they add a disproportionate amount of bloat to the binary, or because they include APIs that are governed by extra Apple review guidelines. Right now those modules are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"FaceDetector (",Object(i.b)("inlineCode",{parentName:"li"},"EXFaceDetector"),")"),Object(i.b)("li",{parentName:"ul"},"ARKit"),Object(i.b)("li",{parentName:"ul"},"Payments")),Object(i.b)("p",null,"If you want to use any of these modules in your Expo iOS app, you need to eject to ExpoKit rather than using ",Object(i.b)("inlineCode",{parentName:"p"},"expo build"),". (It's on our roadmap to improve this.)"),Object(i.b)("p",null,"To add FaceDetector:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Add ",Object(i.b)("inlineCode",{parentName:"li"},"expo-face-detector")," to ",Object(i.b)("strong",{parentName:"li"},"package.json")," and install JS dependencies."),Object(i.b)("li",{parentName:"ol"},"Add ",Object(i.b)("inlineCode",{parentName:"li"},"pod 'EXFaceDetector', path: '../node_modules/expo-face-detector/ios'")," to your ",Object(i.b)("inlineCode",{parentName:"li"},"Podfile"),"."),Object(i.b)("li",{parentName:"ol"},"Re-run ",Object(i.b)("inlineCode",{parentName:"li"},"npx pod-install"),".")),Object(i.b)("p",null,"To add ",Object(i.b)("inlineCode",{parentName:"p"},"Payments")," or ",Object(i.b)("inlineCode",{parentName:"p"},"AR"),", add the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/expo/expo/blob/sdk-38/ExpoKit.podspec"},"respective subspec")," to your ",Object(i.b)("inlineCode",{parentName:"p"},"ExpoKit")," dependency in your ",Object(i.b)("inlineCode",{parentName:"p"},"Podfile"),", and re-run ",Object(i.b)("inlineCode",{parentName:"p"},"npx pod-install"),"."))}c.isMDXComponent=!0},"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n("q1tI"),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),c=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"===typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=c(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),b=c(n),s=o,m=b["".concat(a,".").concat(s)]||b[s]||d[s]||i;return n?r.a.createElement(m,l(l({ref:t},u),{},{components:n})):r.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"===typeof e||o){var i=n.length,a=new Array(i);a[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"===typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},HALo:function(e,t,n){"use strict";function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return o}))},Qetd:function(e,t,n){"use strict";var o=Object.assign.bind(Object);e.exports=o,e.exports.default=e.exports},RdG1:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/expokit/universal-modules-and-expokit",function(){return n("7KWB")}])},dhJC:function(e,t,n){"use strict";function o(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,"a",(function(){return o}))}},[["RdG1",1,0]]]);