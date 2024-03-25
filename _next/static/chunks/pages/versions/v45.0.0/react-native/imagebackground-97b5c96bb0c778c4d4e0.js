_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[1382],{"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n("q1tI"),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,d=s["".concat(c,".").concat(m)]||s[m]||u[m]||o;return n?a.a.createElement(d,i(i({ref:t},b),{},{components:n})):a.a.createElement(d,i({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"===typeof e?e:r,c[1]=i;for(var b=2;b<o;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},HALo:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},N4Tt:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return i})),n.d(t,"headings",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n("HALo"),a=n("dhJC"),o=(n("q1tI"),n("7ljp")),c=["components"],i={id:"imagebackground",title:"ImageBackground"},l=[{depth:2,type:"text",title:"Example"},{depth:1,type:"text",title:"Reference"},{depth:2,type:"text",title:"Props"},{depth:3,type:"link",title:""},{depth:3,type:"inlineCode",title:"imageStyle"},{depth:3,type:"inlineCode",title:"imageRef"},{depth:3,type:"inlineCode",title:"style"}],b={meta:i,headings:l};function p(e){var t=e.components,n=Object(a.a)(e,c);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A common feature request from developers familiar with the web is ",Object(o.b)("inlineCode",{parentName:"p"},"background-image"),". To handle this use case, you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"<ImageBackground>")," component, which has the same props as ",Object(o.b)("inlineCode",{parentName:"p"},"<Image>"),", and add whatever children to it you would like to layer on top of it."),Object(o.b)("p",null,"You might not want to use ",Object(o.b)("inlineCode",{parentName:"p"},"<ImageBackground>")," in some cases, since the implementation is basic. Refer to ",Object(o.b)("inlineCode",{parentName:"p"},"<ImageBackground>"),"'s ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/master/Libraries/Image/ImageBackground.js"},"source code")," for more insight, and create your own custom component when needed."),Object(o.b)("p",null,"Note that you must specify some width and height style attributes."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { ImageBackground, StyleSheet, Text, View } from 'react-native';\n\nconst image = { uri: 'https://reactjs.org/logo-og.png' };\n\nconst App = () => (\n  <View style={styles.container}>\n    <ImageBackground source={image} resizeMode=\"cover\" style={styles.image}>\n      <Text style={styles.text}>Inside</Text>\n    </ImageBackground>\n  </View>\n);\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n  },\n  image: {\n    flex: 1,\n    justifyContent: 'center',\n  },\n  text: {\n    color: 'white',\n    fontSize: 42,\n    lineHeight: 84,\n    fontWeight: 'bold',\n    textAlign: 'center',\n    backgroundColor: '#000000c0',\n  },\n});\n\nexport default App;\n")),Object(o.b)("hr",null),Object(o.b)("h1",{id:"reference"},"Reference"),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("h3",{id:"image-props"},Object(o.b)("a",{parentName:"h3",href:"/versions/v45.0.0/react-native/image/#props"},"Image Props")),Object(o.b)("p",null,"Inherits ",Object(o.b)("a",{parentName:"p",href:"/versions/v45.0.0/react-native/image/#props"},"Image Props"),"."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"imagestyle"},Object(o.b)("inlineCode",{parentName:"h3"},"imageStyle")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/versions/v45.0.0/react-native/image-style-props/"},"Image Style"))))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"imageref"},Object(o.b)("inlineCode",{parentName:"h3"},"imageRef")),Object(o.b)("p",null,"Allows to set a reference to the inner ",Object(o.b)("inlineCode",{parentName:"p"},"Image")," component"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://reactjs.org/docs/refs-and-the-dom.html"},"Ref"))))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"style"},Object(o.b)("inlineCode",{parentName:"h3"},"style")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/versions/v45.0.0/react-native/view-style-props/"},"View Style"))))))}p.isMDXComponent=!0},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},UdMU:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v45.0.0/react-native/imagebackground",function(){return n("N4Tt")}])},dhJC:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return r}))}},[["UdMU",1,0]]]);