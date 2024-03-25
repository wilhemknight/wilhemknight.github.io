_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[287],{"0gpk":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return l})),n.d(t,"headings",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n("HALo"),a=n("dhJC"),o=(n("q1tI"),n("7ljp")),s=["components"],l={id:"transforms",title:"Transforms"},i=[{depth:2,type:"text",title:"Example"},{depth:1,type:"text",title:"Reference"},{depth:2,type:"text",title:"Methods"},{depth:3,type:"inlineCode",title:"transform()"},{depth:3,type:"inlineCode",title:"decomposedMatrix ,  rotation ,  scaleX ,  scaleY ,  transformMatrix ,  translateX ,  translateY"}],c={meta:l,headings:i};function b(e){var t=e.components,n=Object(a.a)(e,s);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Transforms are style properties that will help you modify the appearance and position of your components using 2D or 3D transformations. However, once you apply transforms, the layouts remain the same around the transformed component hence it might overlap with the nearby components. You can apply margin to the transformed component, the nearby components or padding to the container to prevent such overlaps."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';\n\nconst App = () => (\n  <SafeAreaView style={styles.container}>\n    <ScrollView contentContainerStyle={styles.scrollContentContainer}>\n      <View style={styles.box}>\n        <Text style={styles.text}>Original Object</Text>\n      </View>\n\n      <View\n        style={[\n          styles.box,\n          {\n            transform: [{ scale: 2 }],\n          },\n        ]}>\n        <Text style={styles.text}>Scale by 2</Text>\n      </View>\n\n      <View\n        style={[\n          styles.box,\n          {\n            transform: [{ scaleX: 2 }],\n          },\n        ]}>\n        <Text style={styles.text}>ScaleX by 2</Text>\n      </View>\n\n      <View\n        style={[\n          styles.box,\n          {\n            transform: [{ scaleY: 2 }],\n          },\n        ]}>\n        <Text style={styles.text}>ScaleY by 2</Text>\n      </View>\n\n      <View\n        style={[\n          styles.box,\n          {\n            transform: [{ rotate: '45deg' }],\n          },\n        ]}>\n        <Text style={styles.text}>Rotate by 45 deg</Text>\n      </View>\n\n      <View\n        style={[\n          styles.box,\n          {\n            transform: [{ rotateX: '45deg' }, { rotateZ: '45deg' }],\n          },\n        ]}>\n        <Text style={styles.text}>Rotate X&Z by 45 deg</Text>\n      </View>\n\n      <View\n        style={[\n          styles.box,\n          {\n            transform: [{ rotateY: '45deg' }, { rotateZ: '45deg' }],\n          },\n        ]}>\n        <Text style={styles.text}>Rotate Y&Z by 45 deg</Text>\n      </View>\n\n      <View\n        style={[\n          styles.box,\n          {\n            transform: [{ skewX: '45deg' }],\n          },\n        ]}>\n        <Text style={styles.text}>SkewX by 45 deg</Text>\n      </View>\n\n      <View\n        style={[\n          styles.box,\n          {\n            transform: [{ skewY: '45deg' }],\n          },\n        ]}>\n        <Text style={styles.text}>SkewY by 45 deg</Text>\n      </View>\n\n      <View\n        style={[\n          styles.box,\n          {\n            transform: [{ skewX: '30deg' }, { skewY: '30deg' }],\n          },\n        ]}>\n        <Text style={styles.text}>Skew X&Y by 30 deg</Text>\n      </View>\n\n      <View\n        style={[\n          styles.box,\n          {\n            transform: [{ translateX: -50 }],\n          },\n        ]}>\n        <Text style={styles.text}>TranslateX by -50 </Text>\n      </View>\n\n      <View\n        style={[\n          styles.box,\n          {\n            transform: [{ translateY: 50 }],\n          },\n        ]}>\n        <Text style={styles.text}>TranslateY by 50 </Text>\n      </View>\n    </ScrollView>\n  </SafeAreaView>\n);\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n  },\n  scrollContentContainer: {\n    alignItems: 'center',\n    paddingBottom: 60,\n  },\n  box: {\n    height: 100,\n    width: 100,\n    borderRadius: 5,\n    marginVertical: 40,\n    backgroundColor: '#61dafb',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  text: {\n    fontSize: 14,\n    fontWeight: 'bold',\n    margin: 8,\n    color: '#000',\n    textAlign: 'center',\n  },\n});\n\nexport default App;\n")),Object(o.b)("hr",null),Object(o.b)("h1",{id:"reference"},"Reference"),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"transform"},Object(o.b)("inlineCode",{parentName:"h3"},"transform()")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"transform")," accepts an array of transformation objects. Each object specifies the property that will be transformed as the key, and the value to use in the transformation. Objects should not be combined. Use a single key/value pair per object."),Object(o.b)("p",null,"The rotate transformations require a string so that the transform may be expressed in degrees (deg) or radians (rad). For example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"transform([{ rotateX: '45deg' }, { rotateZ: '0.785398rad' }]);\n")),Object(o.b)("p",null,"The skew transformations require a string so that the transform may be expressed in degrees (deg). For example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"transform([{ skewX: '45deg' }]);\n")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Required"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"array of objects: {matrix: number[]}, {perspective: number}, {rotate: string}, {rotateX: string}, {rotateY: string}, {rotateZ: string}, {scale: number}, {scaleX: number}, {scaleY: number}, {translateX: number}, {translateY: number}, {skewX: string}, {skewY: string}"),Object(o.b)("td",{parentName:"tr",align:null},"No")))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"decomposedmatrix-rotation-scalex-scaley-transformmatrix-translatex-translatey"},Object(o.b)("inlineCode",{parentName:"h3"},"decomposedMatrix"),", ",Object(o.b)("inlineCode",{parentName:"h3"},"rotation"),", ",Object(o.b)("inlineCode",{parentName:"h3"},"scaleX"),", ",Object(o.b)("inlineCode",{parentName:"h3"},"scaleY"),", ",Object(o.b)("inlineCode",{parentName:"h3"},"transformMatrix"),", ",Object(o.b)("inlineCode",{parentName:"h3"},"translateX"),", ",Object(o.b)("inlineCode",{parentName:"h3"},"translateY")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Deprecated.")," Use the ",Object(o.b)("a",{parentName:"p",href:"/versions/latest/react-native/transforms/#transform"},Object(o.b)("inlineCode",{parentName:"a"},"transform"))," prop instead.")))}b.isMDXComponent=!0},"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var r=n("q1tI"),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"===typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},y=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=b(n),y=r,u=p["".concat(s,".").concat(y)]||p[y]||m[y]||o;return n?a.a.createElement(u,l(l({ref:t},c),{},{components:n})):a.a.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var o=n.length,s=new Array(o);s[0]=y;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"===typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},HALo:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},MCsf:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/latest/react-native/transforms",function(){return n("0gpk")}])},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},dhJC:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return r}))}},[["MCsf",1,0]]]);