_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[41],{"4Ygw":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return c})),n.d(t,"headings",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n("HALo"),o=n("dhJC"),a=(n("q1tI"),n("7ljp")),i=["components"],c={title:"Syncing credentials between remote and local sources"},l=[{depth:2,type:"text",title:"Downloading credentials"},{depth:2,type:"text",title:"Uploading credentials"}],s={meta:c,headings:l};function u(e){var t=e.components,n=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"If you use automatically managed credentials, your credentials will be hosted remotely on EAS servers, but you may encounter a situation where you want to pull your credentials down to run a build locally. And if you use local credentials, you may find yourself in a position where you want to upload credentials specified in ",Object(a.b)("strong",{parentName:"p"},"credentials.json")," up to EAS to be managed for you. Both of these are possible using the ",Object(a.b)("inlineCode",{parentName:"p"},"eas credentials")," command."),Object(a.b)("h2",{id:"downloading-credentials"},"Downloading credentials"),Object(a.b)("p",null,"To download your automatically managed credentials, run ",Object(a.b)("inlineCode",{parentName:"p"},"eas credentials")," in the root of your project, pick a platform, choose ",Object(a.b)("inlineCode",{parentName:"p"},'"Credentials.json: Upload/Download credentials between EAS servers and your local json"'),", and then ",Object(a.b)("inlineCode",{parentName:"p"},'"Download credentials from EAS to credentials.json"'),". Run the command again to download the credentials for another platform, if needed."),Object(a.b)("p",null,"Android credentials will be ready to use immediately because your project will read the credentials from ",Object(a.b)("strong",{parentName:"p"},"credentials.json"),"."),Object(a.b)("p",null,'iOS credentials requires two steps to set up locally. You will first need to install the distribution certificate into your keychain. Next, open your project Xcode and navigate to the "Signing & Capabilities" section, then import your provisioning profile and select it.'),Object(a.b)("h2",{id:"uploading-credentials"},"Uploading credentials"),Object(a.b)("p",null,"To upload your credentials from ",Object(a.b)("strong",{parentName:"p"},"credentials.json")," to be managed by EAS, run ",Object(a.b)("inlineCode",{parentName:"p"},"eas credentials")," in the root of your project, pick a platform, choose ",Object(a.b)("inlineCode",{parentName:"p"},'"Credentials.json: Upload/Download credentials between EAS servers and your local json"'),", and then ",Object(a.b)("inlineCode",{parentName:"p"},'"Upload credentials from credentials.json to EAS"'),". Run the command again to upload the credentials for another platform, if needed."))}u.isMDXComponent=!0},"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n("q1tI"),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"===typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,b=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return n?o.a.createElement(b,c(c({ref:t},s),{},{components:n})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"===typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},HALo:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},dhJC:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))},hx49:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app-signing/syncing-credentials",function(){return n("4Ygw")}])}},[["hx49",1,0]]]);