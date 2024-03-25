_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[71],{"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n("q1tI"),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),c=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"===typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=c(n),f=r,d=s["".concat(a,".").concat(f)]||s[f]||b[f]||i;return n?o.a.createElement(d,l(l({ref:t},p),{},{components:n})):o.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"===typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},HALo:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},dhJC:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))},mAtc:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/build-reference/simulators",function(){return n("pYG0")}])},pYG0:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return l})),n.d(t,"headings",(function(){return u})),n.d(t,"default",(function(){return c}));var r=n("HALo"),o=n("dhJC"),i=(n("q1tI"),n("7ljp")),a=["components"],l={title:"Building for iOS simulators"},u=[{depth:2,type:"text",title:"Configuring a profile to build for simulators"},{depth:2,type:"text",title:"Installing your build on the simulator"}],p={meta:l,headings:u};function c(e){var t=e.components,n=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Running a build of your app in an iOS simulator is particularly useful in managed apps to get the standalone (independent of Expo Go) version of the app running easily without needing to deploy to TestFlight or even have an Apple Developer account."),Object(i.b)("h2",{id:"configuring-a-profile-to-build-for-simulators"},"Configuring a profile to build for simulators"),Object(i.b)("p",null,"To build your app for installation into an iOS simulator, you can create a new profile in ",Object(i.b)("strong",{parentName:"p"},"eas.json")," and set the ",Object(i.b)("inlineCode",{parentName:"p"},"ios.simulator")," value to ",Object(i.b)("inlineCode",{parentName:"p"},"true"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "build": {\n    "preview": {\n      "ios": {\n        "simulator": true\n      }\n    },\n    "production": {}\n  }\n}\n')),Object(i.b)("p",null,"Now, to run your build run ",Object(i.b)("inlineCode",{parentName:"p"},"eas build -p ios --profile preview"),'. Remember that you can name the profile whatever you like; we named the profile "preview", but you could call it "simulator", "local", or "simulador" ',"\u2014"," whatever makes most sense for you."),Object(i.b)("h2",{id:"installing-your-build-on-the-simulator"},"Installing your build on the simulator"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"If you haven't installed or run the iOS simulator before, follow the ",Object(i.b)("a",{parentName:"p",href:"/../../../../../../workflow/ios-simulator/"},"iOS simulator guide")," before proceeding.")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Once your build is completed, download the build from the build details page or the link provided when ",Object(i.b)("inlineCode",{parentName:"li"},"eas build")," is done. This will be a ",Object(i.b)("inlineCode",{parentName:"li"},".tar.gz")," file."),Object(i.b)("li",{parentName:"ul"},"Extract the file by opening it. You will now have a file like ",Object(i.b)("inlineCode",{parentName:"li"},"myapp.app"),"."),Object(i.b)("li",{parentName:"ul"},"Open up your simulator."),Object(i.b)("li",{parentName:"ul"},"Drag ",Object(i.b)("inlineCode",{parentName:"li"},"myapp.app")," into the simulator."),Object(i.b)("li",{parentName:"ul"},"The app will be installed in a few seconds. When you see it appear on the simulator home screen, tap it to run it."),Object(i.b)("li",{parentName:"ul"},"You can share this build, it will run in any iOS simulator.")))}c.isMDXComponent=!0}},[["mAtc",1,0]]]);