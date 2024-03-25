_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[925],{"74ty":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v42.0.0/react-native/toastandroid",function(){return n("OxCU")}])},"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var r=n("q1tI"),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,O=d["".concat(i,".").concat(u)]||d[u]||b[u]||a;return n?o.a.createElement(O,s(s({ref:t},l),{},{components:n})):o.a.createElement(O,s({ref:t},l))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"===typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},HALo:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},OxCU:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return s})),n.d(t,"headings",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n("HALo"),o=n("dhJC"),a=(n("q1tI"),n("7ljp")),i=["components"],s={id:"toastandroid",title:"ToastAndroid"},c=[{depth:3,type:"text",title:"Imperative hack"},{depth:1,type:"text",title:"Reference"},{depth:2,type:"text",title:"Methods"},{depth:3,type:"inlineCode",title:"show()"},{depth:3,type:"inlineCode",title:"showWithGravity()"},{depth:3,type:"inlineCode",title:"showWithGravityAndOffset()"},{depth:2,type:"text",title:"Properties"},{depth:3,type:"inlineCode",title:"SHORT"},{depth:3,type:"inlineCode",title:"LONG"},{depth:3,type:"inlineCode",title:"TOP"},{depth:3,type:"inlineCode",title:"BOTTOM"},{depth:3,type:"inlineCode",title:"CENTER"}],l={meta:s,headings:c};function p(e){var t=e.components,n=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"React Native's ToastAndroid API exposes the Android platform's ToastAndroid module as a JS module. It provides the method ",Object(a.b)("inlineCode",{parentName:"p"},"show(message, duration)")," which takes the following parameters:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"message")," A string with the text to toast"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"duration")," The duration of the toast\u2014either ",Object(a.b)("inlineCode",{parentName:"li"},"ToastAndroid.SHORT")," or ",Object(a.b)("inlineCode",{parentName:"li"},"ToastAndroid.LONG"))),Object(a.b)("p",null,"You can alternatively use ",Object(a.b)("inlineCode",{parentName:"p"},"showWithGravity(message, duration, gravity)")," to specify where the toast appears in the screen's layout. May be ",Object(a.b)("inlineCode",{parentName:"p"},"ToastAndroid.TOP"),", ",Object(a.b)("inlineCode",{parentName:"p"},"ToastAndroid.BOTTOM")," or ",Object(a.b)("inlineCode",{parentName:"p"},"ToastAndroid.CENTER"),"."),Object(a.b)("p",null,"The 'showWithGravityAndOffset(message, duration, gravity, xOffset, yOffset)' method adds the ability to specify an offset with in pixels."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { View, StyleSheet, ToastAndroid, Button } from 'react-native';\nimport Constants from 'expo-constants';\n\nexport default function App() {\n  const showToast = () => {\n    ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);\n  };\n\n  const showToastWithGravity = () => {\n    ToastAndroid.showWithGravity(\n      'All Your Base Are Belong To Us',\n      ToastAndroid.SHORT,\n      ToastAndroid.CENTER\n    );\n  };\n\n  const showToastWithGravityAndOffset = () => {\n    ToastAndroid.showWithGravityAndOffset(\n      'A wild toast appeared!',\n      ToastAndroid.LONG,\n      ToastAndroid.BOTTOM,\n      25,\n      50\n    );\n  };\n\n  return (\n    <View style={styles.container}>\n      <Button title=\"Toggle Toast\" onPress={() => showToast()} />\n      <Button title=\"Toggle Toast With Gravity\" onPress={() => showToastWithGravity()} />\n      <Button\n        title=\"Toggle Toast With Gravity & Offset\"\n        onPress={() => showToastWithGravityAndOffset()}\n      />\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    paddingTop: Constants.statusBarHeight,\n    backgroundColor: '#888888',\n    padding: 8,\n  },\n});\n\nexport default App;\n")),Object(a.b)("h3",{id:"imperative-hack"},"Imperative hack"),Object(a.b)("p",null,"The ToastAndroid API is imperative, but there is a way to expose a declarative component from it as in this example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"import React, { useState, useEffect } from 'react';\nimport { View, StyleSheet, ToastAndroid, Button } from 'react-native';\nimport Constants from 'expo-constants';\n\nconst Toast = ({ visible, message }) => {\n  if (visible) {\n    ToastAndroid.showWithGravityAndOffset(message, ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);\n    return null;\n  }\n  return null;\n};\n\nexport default function App() {\n  const [visibleToast, setvisibleToast] = useState(false);\n\n  useEffect(() => setvisibleToast(false), [visibleToast]);\n\n  const handleButtonPress = () => {\n    setvisibleToast(true);\n  };\n\n  return (\n    <View style={styles.container}>\n      <Toast visible={visibleToast} message=\"Example\" />\n      <Button title=\"Toggle Toast\" onPress={() => handleButtonPress()} />\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    paddingTop: Constants.statusBarHeight,\n    backgroundColor: '#888888',\n    padding: 8,\n  },\n});\n\nexport default App;\n")),Object(a.b)("hr",null),Object(a.b)("h1",{id:"reference"},"Reference"),Object(a.b)("h2",{id:"methods"},"Methods"),Object(a.b)("h3",{id:"show"},Object(a.b)("inlineCode",{parentName:"h3"},"show()")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"static show(message, duration)\n")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"showwithgravity"},Object(a.b)("inlineCode",{parentName:"h3"},"showWithGravity()")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"static showWithGravity(message, duration, gravity)\n")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"showwithgravityandoffset"},Object(a.b)("inlineCode",{parentName:"h3"},"showWithGravityAndOffset()")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"static showWithGravityAndOffset(message, duration, gravity, xOffset, yOffset)\n")),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"short"},Object(a.b)("inlineCode",{parentName:"h3"},"SHORT")),Object(a.b)("p",null,"Indicates the duration on the screen."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"ToastAndroid.SHORT;\n")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"long"},Object(a.b)("inlineCode",{parentName:"h3"},"LONG")),Object(a.b)("p",null,"Indicates the duration on the screen."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"ToastAndroid.LONG;\n")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"top"},Object(a.b)("inlineCode",{parentName:"h3"},"TOP")),Object(a.b)("p",null,"Indicates the position on the screen."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"ToastAndroid.TOP;\n")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"bottom"},Object(a.b)("inlineCode",{parentName:"h3"},"BOTTOM")),Object(a.b)("p",null,"Indicates the position on the screen."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"ToastAndroid.BOTTOM;\n")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"center"},Object(a.b)("inlineCode",{parentName:"h3"},"CENTER")),Object(a.b)("p",null,"Indicates the position on the screen."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"ToastAndroid.CENTER;\n")))}p.isMDXComponent=!0},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},dhJC:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))}},[["74ty",1,0]]]);