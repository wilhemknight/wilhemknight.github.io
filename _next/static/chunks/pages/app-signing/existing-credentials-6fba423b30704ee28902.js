_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[38],{"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n("q1tI"),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,b=u["".concat(i,".").concat(f)]||u[f]||d[f]||a;return n?o.a.createElement(b,c(c({ref:t},l),{},{components:n})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"===typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},BOK0:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return c})),n.d(t,"headings",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n("HALo"),o=n("dhJC"),a=(n("q1tI"),n("7ljp")),i=["components"],c={title:"Using existing credentials"},s=[],l={meta:c,headings:s};function p(e){var t=e.components,n=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"EAS Build gives you two options for how you can supply your build jobs with app signing credentials:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",{parentName:"li",href:"/app-signing/managed-credentials/"},"Automatically managed credentials"),": EAS can host your app signing credentials and take care of sharing them with teammates that have the necessary permissions."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",{parentName:"li",href:"/app-signing/local-credentials/"},"Local credentials"),": You create a ",Object(a.b)("strong",{parentName:"li"},"credentials.json")," file in your project that points to your keystore (Android) and/or provisioning profile and distribution certificate (iOS), along with associated passwords. This is uploaded from your local machine at the time any given build job is run, and disposed of once that build job has completed.")),Object(a.b)("p",null,"Regardless of which option you choose, your first step for using your existing set of credentials is to set them up as local credentials in ",Object(a.b)("strong",{parentName:"p"},"credentials.json"),". Refer to the ",Object(a.b)("a",{parentName:"p",href:"/app-signing/local-credentials/#credentialsjson"},"credentials.json section of the local credentials guide")," for more information on how to do this."),Object(a.b)("p",null,"Once your ",Object(a.b)("strong",{parentName:"p"},"credentials.json")," file is configured, you can run ",Object(a.b)("inlineCode",{parentName:"p"},"eas credentials"),", choose a platform, and then select ",Object(a.b)("inlineCode",{parentName:"p"},'"Update credentials on Expo servers with values from credentials.json"')," to upload them to be hosted and managed by EAS, if you would like. ",Object(a.b)("a",{parentName:"p",href:"/app-signing/syncing-credentials/"},"Read more about syncing credentials"),"."))}p.isMDXComponent=!0},HALo:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},Wsrk:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app-signing/existing-credentials",function(){return n("BOK0")}])},dhJC:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))}},[["Wsrk",1,0]]]);