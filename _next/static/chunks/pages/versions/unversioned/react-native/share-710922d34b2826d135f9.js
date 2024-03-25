_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[438],{"2j+J":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/unversioned/react-native/share",function(){return n("w37M")}])},"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n("q1tI"),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"===typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=r,O=p["".concat(o,".").concat(u)]||p[u]||d[u]||i;return n?a.a.createElement(O,c(c({ref:t},b),{},{components:n})):a.a.createElement(O,c({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"===typeof e?e:r,o[1]=c;for(var b=2;b<i;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},HALo:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},dhJC:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return r}))},w37M:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return c})),n.d(t,"headings",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n("HALo"),a=n("dhJC"),i=(n("q1tI"),n("7ljp")),o=["components"],c={id:"share",title:"Share"},l=[{depth:2,type:"text",title:"Example"},{depth:1,type:"text",title:"Reference"},{depth:2,type:"text",title:"Methods"},{depth:3,type:"inlineCode",title:"share()"},{depth:2,type:"text",title:"Properties"},{depth:3,type:"inlineCode",title:"sharedAction"},{depth:3,type:"inlineCode",title:"dismissedAction   "}],b={meta:c,headings:l};function s(e){var t=e.components,n=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { Share, View, Button } from 'react-native';\n\nconst ShareExample = () => {\n  const onShare = async () => {\n    try {\n      const result = await Share.share({\n        message: 'React Native | A framework for building native apps using React',\n      });\n      if (result.action === Share.sharedAction) {\n        if (result.activityType) {\n          // shared with activity type of result.activityType\n        } else {\n          // shared\n        }\n      } else if (result.action === Share.dismissedAction) {\n        // dismissed\n      }\n    } catch (error) {\n      alert(error.message);\n    }\n  };\n  return (\n    <View style={{ marginTop: 50 }}>\n      <Button onPress={onShare} title=\"Share\" />\n    </View>\n  );\n};\n\nexport default ShareExample;\n")),Object(i.b)("h1",{id:"reference"},"Reference"),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"share"},Object(i.b)("inlineCode",{parentName:"h3"},"share()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"static share(content, options)\n")),Object(i.b)("p",null,"Open a dialog to share text content."),Object(i.b)("p",null,"In iOS, returns a Promise which will be invoked with an object containing ",Object(i.b)("inlineCode",{parentName:"p"},"action")," and ",Object(i.b)("inlineCode",{parentName:"p"},"activityType"),". If the user dismissed the dialog, the Promise will still be resolved with action being ",Object(i.b)("inlineCode",{parentName:"p"},"Share.dismissedAction")," and all the other keys being undefined. Note that some share options will not appear or work on the iOS simulator."),Object(i.b)("p",null,"In Android, returns a Promise which will always be resolved with action being ",Object(i.b)("inlineCode",{parentName:"p"},"Share.sharedAction"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Properties:")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"content ",Object(i.b)("strong",{parentName:"td"},"(Required)")),Object(i.b)("td",{parentName:"tr",align:null},"object"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"message")," - a message to share",Object(i.b)("br",null),Object(i.b)("inlineCode",{parentName:"td"},"url")," - a URL to share ",Object(i.b)("strong",{parentName:"td"},"(iOS)"),Object(i.b)("br",null),Object(i.b)("inlineCode",{parentName:"td"},"title")," - title of the message ",Object(i.b)("strong",{parentName:"td"},"(Android)"),Object(i.b)("hr",null),"At least one of ",Object(i.b)("inlineCode",{parentName:"td"},"url")," and ",Object(i.b)("inlineCode",{parentName:"td"},"message")," is required.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"options"),Object(i.b)("td",{parentName:"tr",align:null},"object"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"dialogTitle")," ",Object(i.b)("strong",{parentName:"td"},"(Android)"),Object(i.b)("br",null),Object(i.b)("inlineCode",{parentName:"td"},"excludedActivityTypes")," ",Object(i.b)("strong",{parentName:"td"},"(iOS)"),Object(i.b)("br",null),Object(i.b)("inlineCode",{parentName:"td"},"subject")," - a subject to share via email ",Object(i.b)("strong",{parentName:"td"},"(iOS)"),Object(i.b)("br",null),Object(i.b)("inlineCode",{parentName:"td"},"tintColor")," ",Object(i.b)("strong",{parentName:"td"},"(iOS)"))))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"sharedaction"},Object(i.b)("inlineCode",{parentName:"h3"},"sharedAction")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"static sharedAction\n")),Object(i.b)("p",null,"The content was successfully shared."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"dismissedaction-ios"},Object(i.b)("inlineCode",{parentName:"h3"},"dismissedAction")," ",Object(i.b)("strong",{parentName:"h3"},"(iOS)")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"static dismissedAction\n")),Object(i.b)("p",null,"The dialog has been dismissed."))}s.isMDXComponent=!0}},[["2j+J",1,0]]]);