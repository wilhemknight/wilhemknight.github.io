_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[238],{"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return s}));var r=n("q1tI"),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"===typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),d=p(n),O=r,s=d["".concat(l,".").concat(O)]||d[O]||u[O]||i;return n?a.a.createElement(s,c(c({ref:t},b),{},{components:n})):a.a.createElement(s,c({ref:t},b))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var i=n.length,l=new Array(i);l[0]=O;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"===typeof e?e:r,l[1]=c;for(var b=2;b<i;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},HALo:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},dhJC:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return r}))},yZOf:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/latest/react-native/activityindicator",function(){return n("zayl")}])},zayl:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return c})),n.d(t,"headings",(function(){return o})),n.d(t,"default",(function(){return p}));var r=n("HALo"),a=n("dhJC"),i=(n("q1tI"),n("7ljp")),l=["components"],c={id:"activityindicator",title:"ActivityIndicator"},o=[{depth:2,type:"text",title:"Example"},{depth:1,type:"text",title:"Reference"},{depth:2,type:"text",title:"Props"},{depth:3,type:"link",title:""},{depth:3,type:"inlineCode",title:"animating"},{depth:3,type:"inlineCode",title:"color"},{depth:3,type:"inlineCode",title:"hidesWhenStopped   "},{depth:3,type:"inlineCode",title:"size"}],b={meta:c,headings:o};function p(e){var t=e.components,n=Object(a.a)(e,l);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Displays a circular loading indicator."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { ActivityIndicator, StyleSheet, Text, View } from 'react-native';\n\nconst App = () => (\n  <View style={[styles.container, styles.horizontal]}>\n    <ActivityIndicator />\n    <ActivityIndicator size=\"large\" />\n    <ActivityIndicator size=\"small\" color=\"#0000ff\" />\n    <ActivityIndicator size=\"large\" color=\"#00ff00\" />\n  </View>\n);\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n  },\n  horizontal: {\n    flexDirection: 'row',\n    justifyContent: 'space-around',\n    padding: 10,\n  },\n});\n\nexport default App;\n")),Object(i.b)("h1",{id:"reference"},"Reference"),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("h3",{id:"view-props"},Object(i.b)("a",{parentName:"h3",href:"/versions/latest/react-native/view/#props"},"View Props")),Object(i.b)("p",null,"Inherits ",Object(i.b)("a",{parentName:"p",href:"/versions/latest/react-native/view/#props"},"View Props"),"."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"animating"},Object(i.b)("inlineCode",{parentName:"h3"},"animating")),Object(i.b)("p",null,"Whether to show the indicator (",Object(i.b)("inlineCode",{parentName:"p"},"true"),") or hide it (",Object(i.b)("inlineCode",{parentName:"p"},"false"),")."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"bool"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"true"))))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"color"},Object(i.b)("inlineCode",{parentName:"h3"},"color")),Object(i.b)("p",null,"The foreground color of the spinner."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"https://reactnative.dev/docs/0.64/colors"},"color")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"null")," (system accent default color) ",Object(i.b)("strong",{parentName:"td"},"(Android)")," ",Object(i.b)("hr",null),Object(i.b)("inlineCode",{parentName:"td"},"'#999999'")," ",Object(i.b)("strong",{parentName:"td"},"(iOS)"))))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"hideswhenstopped-ios"},Object(i.b)("inlineCode",{parentName:"h3"},"hidesWhenStopped")," ",Object(i.b)("strong",{parentName:"h3"},"(iOS)")),Object(i.b)("p",null,"Whether the indicator should hide when not animating."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"bool"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"true"))))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"size"},Object(i.b)("inlineCode",{parentName:"h3"},"size")),Object(i.b)("p",null,"Size of the indicator."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"enum(",Object(i.b)("inlineCode",{parentName:"td"},"'small'"),", ",Object(i.b)("inlineCode",{parentName:"td"},"'large'"),")",Object(i.b)("hr",null),"number ",Object(i.b)("strong",{parentName:"td"},"(Android)")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"'small'"))))))}p.isMDXComponent=!0}},[["yZOf",1,0]]]);