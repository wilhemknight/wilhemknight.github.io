_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[597],{"/K1x":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v40.0.0/react-native/shadow-props",function(){return n("KTDn")}])},"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n("q1tI"),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),u=p(n),s=a,h=u["".concat(l,".").concat(s)]||u[s]||d[s]||o;return n?r.a.createElement(h,i(i({ref:t},c),{},{components:n})):r.a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"===typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},HALo:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},KTDn:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return i})),n.d(t,"headings",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n("HALo"),r=n("dhJC"),o=(n("q1tI"),n("7ljp")),l=["components"],i={id:"shadow-props",title:"Shadow Props"},b=[{depth:1,type:"text",title:"Reference"},{depth:2,type:"text",title:"Props"},{depth:3,type:"inlineCode",title:"shadowColor"},{depth:3,type:"inlineCode",title:"shadowOffset"},{depth:3,type:"inlineCode",title:"shadowOpacity"},{depth:3,type:"inlineCode",title:"shadowRadius"}],c={meta:i,headings:b};function p(e){var t=e.components,n=Object(r.a)(e,l);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import React, { useState } from 'react';\nimport { Text, View, StyleSheet, Slider } from 'react-native';\n\nconst ShadowPropSlider = ({ label, value, ...props }) => {\n  return (\n    <>\n      <Text>\n        {label} ({value.toFixed(2)})\n      </Text>\n      <Slider step={1} value={value} {...props} />\n    </>\n  );\n};\n\nconst App = () => {\n  const [shadowOffsetWidth, setShadowOffsetWidth] = useState(0);\n  const [shadowOffsetHeight, setShadowOffsetHeight] = useState(0);\n  const [shadowRadius, setShadowRadius] = useState(0);\n  const [shadowOpacity, setShadowOpacity] = useState(0.1);\n\n  return (\n    <View style={styles.container}>\n      <View\n        style={[\n          styles.square,\n          {\n            shadowOffset: {\n              width: shadowOffsetWidth,\n              height: -shadowOffsetHeight,\n            },\n            shadowOpacity,\n            shadowRadius,\n          },\n        ]}\n      />\n      <View style={styles.controls}>\n        <ShadowPropSlider\n          label=\"shadowOffset - X\"\n          minimumValue={-50}\n          maximumValue={50}\n          value={shadowOffsetWidth}\n          onValueChange={val => setShadowOffsetWidth(val)}\n        />\n        <ShadowPropSlider\n          label=\"shadowOffset - Y\"\n          minimumValue={-50}\n          maximumValue={50}\n          value={shadowOffsetHeight}\n          onValueChange={val => setShadowOffsetHeight(val)}\n        />\n        <ShadowPropSlider\n          label=\"shadowRadius\"\n          minimumValue={0}\n          maximumValue={100}\n          value={shadowRadius}\n          onValueChange={val => setShadowRadius(val)}\n        />\n        <ShadowPropSlider\n          label=\"shadowOpacity\"\n          minimumValue={0}\n          maximumValue={1}\n          step={0.05}\n          value={shadowOpacity}\n          onValueChange={val => setShadowOpacity(val)}\n        />\n      </View>\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'space-around',\n    backgroundColor: '#ecf0f1',\n    padding: 8,\n  },\n  square: {\n    alignSelf: 'center',\n    backgroundColor: 'white',\n    borderRadius: 4,\n    height: 150,\n    shadowColor: 'black',\n    width: 150,\n  },\n  controls: {\n    paddingHorizontal: 12,\n  },\n});\n\nexport default App;\n")),Object(o.b)("h1",{id:"reference"},"Reference"),Object(o.b)("p",null,"These properties are iOS only - for similar functionality on Android, use the ",Object(o.b)("a",{parentName:"p",href:"/versions/v40.0.0/react-native/view-style-props/#elevation"},Object(o.b)("inlineCode",{parentName:"a"},"elevation")," property"),"."),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("h3",{id:"shadowcolor"},Object(o.b)("inlineCode",{parentName:"h3"},"shadowColor")),Object(o.b)("p",null,"Sets the drop shadow color"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Required"),Object(o.b)("th",{parentName:"tr",align:null},"Platform"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://reactnative.dev/docs/colors"},"color")),Object(o.b)("td",{parentName:"tr",align:null},"No"),Object(o.b)("td",{parentName:"tr",align:null},"iOS")))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"shadowoffset"},Object(o.b)("inlineCode",{parentName:"h3"},"shadowOffset")),Object(o.b)("p",null,"Sets the drop shadow offset"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Required"),Object(o.b)("th",{parentName:"tr",align:null},"Platform"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"object: {width: number,height: number}"),Object(o.b)("td",{parentName:"tr",align:null},"No"),Object(o.b)("td",{parentName:"tr",align:null},"iOS")))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"shadowopacity"},Object(o.b)("inlineCode",{parentName:"h3"},"shadowOpacity")),Object(o.b)("p",null,"Sets the drop shadow opacity (multiplied by the color's alpha component)"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Required"),Object(o.b)("th",{parentName:"tr",align:null},"Platform"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"number"),Object(o.b)("td",{parentName:"tr",align:null},"No"),Object(o.b)("td",{parentName:"tr",align:null},"iOS")))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"shadowradius"},Object(o.b)("inlineCode",{parentName:"h3"},"shadowRadius")),Object(o.b)("p",null,"Sets the drop shadow blur radius"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Required"),Object(o.b)("th",{parentName:"tr",align:null},"Platform"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"number"),Object(o.b)("td",{parentName:"tr",align:null},"No"),Object(o.b)("td",{parentName:"tr",align:null},"iOS")))))}p.isMDXComponent=!0},Qetd:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},dhJC:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,"a",(function(){return a}))}},[["/K1x",1,0]]]);