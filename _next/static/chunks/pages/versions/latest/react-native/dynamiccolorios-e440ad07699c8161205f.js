_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[248],{"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n("q1tI"),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"===typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,f=s["".concat(i,".").concat(m)]||s[m]||b[m]||a;return n?o.a.createElement(f,c(c({ref:t},p),{},{components:n})):o.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"===typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},HALo:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},Zvgt:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/latest/react-native/dynamiccolorios",function(){return n("co52")}])},co52:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return c})),n.d(t,"headings",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n("HALo"),o=n("dhJC"),a=(n("q1tI"),n("7ljp")),i=["components"],c={id:"dynamiccolorios",title:"DynamicColorIOS"},l=[{depth:2,type:"text",title:"Developer notes"},{depth:2,type:"text",title:"Example"}],p={meta:c,headings:l};function u(e){var t=e.components,n=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"DynamicColorIOS")," function is a platform color type specific to iOS."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"DynamicColorIOS({ light: color, dark: color });\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"DynamicColorIOS")," takes a single argument as an object with two keys: ",Object(a.b)("inlineCode",{parentName:"p"},"dark")," and ",Object(a.b)("inlineCode",{parentName:"p"},"light"),'. These correspond to the colors you want to use for "light mode" and "dark mode" on iOS.'),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"In the future, more keys might become available for different user preferences, like high contrast.")),Object(a.b)("p",null,"At runtime, the system will choose which of the two colors to display depending on the current system appearance settings. Dynamic colors are useful for branding colors or other app specific colors that still respond automatically to system setting changes."),Object(a.b)("h2",{id:"developer-notes"},"Developer notes"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Web"),": If you\u2019re familiar with ",Object(a.b)("inlineCode",{parentName:"p"},"@media (prefers-color-scheme: dark)")," in CSS, this is similar! Only instead of defining all the colors in a media query, you define which color to use under what circumstances right there where you're using it. Neat!")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"iOS"),": The ",Object(a.b)("inlineCode",{parentName:"p"},"DynamicColorIOS")," function is similar to the iOS native methods ",Object(a.b)("a",{parentName:"p",href:"https://developer.apple.com/documentation/uikit/uicolor/3238040-colorwithdynamicprovider"},Object(a.b)("inlineCode",{parentName:"a"},"UIColor colorWithDynamicProvider:")))),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"import { DynamicColorIOS } from 'react-native';\n\nconst customDynamicTextColor = DynamicColorIOS({\n  dark: 'lightskyblue',\n  light: 'midnightblue',\n});\n")))}u.isMDXComponent=!0},dhJC:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))}},[["Zvgt",1,0]]]);