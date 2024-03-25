_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[750],{"7ljp":function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r("q1tI"),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"===typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,m=u["".concat(l,".").concat(f)]||u[f]||b[f]||a;return r?o.a.createElement(m,i(i({ref:t},p),{},{components:r})):o.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"===typeof e||n){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"===typeof e?e:n,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},HALo:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))},Qetd:function(e,t,r){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},dhJC:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r.d(t,"a",(function(){return n}))},s0Tp:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v41.0.0/react-native/platformcolor",function(){return r("vQj8")}])},vQj8:function(e,t,r){"use strict";r.r(t),r.d(t,"meta",(function(){return i})),r.d(t,"headings",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r("HALo"),o=r("dhJC"),a=(r("q1tI"),r("7ljp")),l=["components"],i={id:"platformcolor",title:"PlatformColor"},c=[{depth:2,type:"text",title:"Developer notes"},{depth:2,type:"text",title:"Example"}],p={meta:i,headings:c};function s(e){var t=e.components,r=Object(o.a)(e,l);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"PlatformColor(color1, [color2, ...colorN]);\n")),Object(a.b)("p",null,"You can use the ",Object(a.b)("inlineCode",{parentName:"p"},"PlatformColor")," function to access native colors on the target platform by supplying the native color\u2019s corresponding string value. You pass a string to the ",Object(a.b)("inlineCode",{parentName:"p"},"PlatformColor")," function, and provided it exists on that platform, that native color will be applied to the control or JavaScript component specified in your style. All native color logic also translates if applicable, meaning if the native color specified is themes and/or high contrast sensitive, that logic will also transfer to the JavaScript component being colored."),Object(a.b)("h2",{id:"developer-notes"},"Developer notes"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Web"),": If you\u2019re familiar with design systems, another way of thinking about this is that ",Object(a.b)("inlineCode",{parentName:"p"},"PlatformColor")," lets you tap into the local design system's color tokens so your app can blend right in!")),Object(a.b)("p",null,"For a full list of the types of system colors supported, see:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Android:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://developer.android.com/reference/android/R.attr"},"R.attr")," - ",Object(a.b)("inlineCode",{parentName:"li"},"?attr")," prefix"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://developer.android.com/reference/android/R.color"},"R.color")," - ",Object(a.b)("inlineCode",{parentName:"li"},"@android:color")," prefix"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://developer.apple.com/documentation/uikit/uicolor/ui_element_colors"},"iOS UIColor"))),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { Platform, PlatformColor, StyleSheet, Text, View } from 'react-native';\n\nexport default App = () => (\n  <View>\n    <Text style={styles.labelCell}>I am a special label color!</Text>\n  </View>\n);\n\nconst styles = StyleSheet.create({\n  labelCell: {\n    flex: 1,\n    alignItems: 'stretch',\n    ...Platform.select({\n      ios: { color: PlatformColor('label') },\n      android: {\n        color: PlatformColor('?attr/colorControlNormal'),\n      },\n      default: { color: 'black' },\n    }),\n  },\n});\n")),Object(a.b)("p",null,"The string value provided to the ",Object(a.b)("inlineCode",{parentName:"p"},"PlatformColor")," function must match and agree with the same string as it exists on the native platform the app is being run on. This means to avoid runtime errors the function should be wrapped in a platform check, either through a ",Object(a.b)("inlineCode",{parentName:"p"},"Platform.OS === 'platform'")," or a ",Object(a.b)("inlineCode",{parentName:"p"},"Platform.Select()"),"."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," You can find a complete example that demonstrates proper, intended use of ",Object(a.b)("inlineCode",{parentName:"p"},"PlatformColor")," in ",Object(a.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/master/RNTester/js/examples/PlatformColor/PlatformColorExample.js"},"PlatformColorExample.js"),".")))}s.isMDXComponent=!0}},[["s0Tp",1,0]]]);