_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[155],{"4F+G":function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return s})),n.d(e,"headings",(function(){return l})),n.d(e,"default",(function(){return u}));var a=n("HALo"),r=n("dhJC"),i=(n("q1tI"),n("7ljp")),o=n("3iwL"),c=["components"],s={title:"Routing & Navigation",previous___FILE:"./using-custom-fonts.md",next___FILE:"./push-notifications.md"},l=[{depth:2,type:"text",title:"Our recommendation: React Navigation"},{depth:3,type:"text",title:"Getting started with React Navigation"},{depth:2,type:"text",title:"Alternatives"}],p={meta:s,headings:l};function u(t){var e=t.components,n=Object(r.a)(t,c);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Routing and navigation refers to the ability to organize your app into distinct screens, map screens to URLs, move between those screens, and display the appropriate platform-specific navigation-related user interface elements (eg: tabs, navigation bar, screen transition animations and gestures, drawers)."),Object(i.b)("h2",{id:"our-recommendation-react-navigation"},"Our recommendation: React Navigation"),Object(i.b)(o.a,{file:"routing-and-navigation/preview.mp4",loop:!1,mdxType:"Video"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\ud83c\udfac This video demonstrates using React Navigation on iOS, Android, and web. Notice that it adapts to the platform conventions in each case. The code that powers this example app is available on GitHub in ",Object(i.b)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation/tree/main/example"},"react-navigation/example"),".")),Object(i.b)("p",null,"The library that we recommend that you use for routing & navigation for iOS, Android, and web is ",Object(i.b)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation"},"React Navigation"),"."),Object(i.b)("p",null,"React Navigation is the most popular navigation library in the React Native ecosystem and it is maintained by Expo, so it's guaranteed to work great in your apps. It includes support for common navigation patterns like stacks, tabs, and drawers. It's also built to be customizable, so you can achieve any navigation pattern that you wish with it, even if it's not built-in to the library. It supports using the platform native APIs via ",Object(i.b)("a",{parentName:"p",href:"https://reactnavigation.org/docs/native-stack-navigator"},Object(i.b)("inlineCode",{parentName:"a"},"createNativeStackNavigator")),', this is commonly referred to in React Native as "native navigation".'),Object(i.b)("h3",{id:"getting-started-with-react-navigation"},"Getting started with React Navigation"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Install"),": To install React Navigation in your project, refer to its ",Object(i.b)("a",{parentName:"li",href:"https://reactnavigation.org/docs/getting-started/"},'"Getting started" guide'),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Learn"),': We strongly advise going through the "Fundamentals" guides to become comfortable with the library, you can start with ',Object(i.b)("a",{parentName:"li",href:"https://reactnavigation.org/docs/hello-react-navigation"},'"Hello React Navigation"')," after installing the library in your project.")),Object(i.b)("h2",{id:"alternatives"},"Alternatives"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An alternative solution for web is to use ",Object(i.b)("a",{parentName:"li",href:"/guides/using-nextjs/"},"Next.js"),". It provides its own routing system and built-in support for code-splitting. Read more in ",Object(i.b)("a",{parentName:"li",href:"/guides/using-nextjs/"},"Using Next.js with Expo for Web"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/wix/react-native-navigation"},"React Native Navigation")," will not work in Expo managed workflow apps, but if you are using a bare React Native app it may be something you will consider. Similar to ",Object(i.b)("inlineCode",{parentName:"li"},"createNativeStackNavigator")," from React Navigation, it uses the platform native APIs.")))}u.isMDXComponent=!0},"6UOh":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/routing-and-navigation",function(){return n("4F+G")}])},"7ljp":function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return f}));var a=n("q1tI"),r=n.n(a);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=r.a.createContext({}),p=function(t){var e=r.a.useContext(l),n=e;return t&&(n="function"===typeof t?t(e):c(c({},e),t)),n},u=function(t){var e=p(t.components);return r.a.createElement(l.Provider,{value:e},t.children)},b={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},g=r.a.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,o=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),u=p(n),g=a,f=u["".concat(o,".").concat(g)]||u[g]||b[g]||i;return n?r.a.createElement(f,c(c({ref:e},l),{},{components:n})):r.a.createElement(f,c({ref:e},l))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"===typeof t||a){var i=n.length,o=new Array(i);o[0]=g;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"===typeof t?t:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},HALo:function(t,e,n){"use strict";function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return a}))},dhJC:function(t,e,n){"use strict";function a(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}n.d(e,"a",(function(){return a}))}},[["6UOh",1,0,2,15]]]);