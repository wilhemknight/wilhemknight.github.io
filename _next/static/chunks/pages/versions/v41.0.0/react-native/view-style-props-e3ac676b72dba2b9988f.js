_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[775],{"7ljp":function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var b=a("q1tI"),r=a.n(b);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,b)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,b,r=function(e,t){if(null==e)return{};var a,b,r={},n=Object.keys(e);for(b=0;b<n.length;b++)a=n[b],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(b=0;b<n.length;b++)a=n[b],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),c=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"===typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var a=e.components,b=e.mdxType,n=e.originalType,l=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),p=c(a),j=b,u=p["".concat(l,".").concat(j)]||p[j]||O[j]||n;return a?r.a.createElement(u,o(o({ref:t},i),{},{components:a})):r.a.createElement(u,o({ref:t},i))}));function u(e,t){var a=arguments,b=t&&t.mdxType;if("string"===typeof e||b){var n=a.length,l=new Array(n);l[0]=j;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"===typeof e?e:b,l[1]=o;for(var i=2;i<n;i++)l[i]=a[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},BxVD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v41.0.0/react-native/view-style-props",function(){return a("XFOu")}])},HALo:function(e,t,a){"use strict";function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var b in a)Object.prototype.hasOwnProperty.call(a,b)&&(e[b]=a[b])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return b}))},Qetd:function(e,t,a){"use strict";var b=Object.assign.bind(Object);e.exports=b,e.exports.default=e.exports},XFOu:function(e,t,a){"use strict";a.r(t),a.d(t,"meta",(function(){return o})),a.d(t,"headings",(function(){return d})),a.d(t,"default",(function(){return c}));var b=a("HALo"),r=a("dhJC"),n=(a("q1tI"),a("7ljp")),l=["components"],o={id:"view-style-props",title:"View Style Props"},d=[{depth:3,type:"text",title:"Example"},{depth:1,type:"text",title:"Reference"},{depth:2,type:"text",title:"Props"},{depth:3,type:"inlineCode",title:"borderRightColor"},{depth:3,type:"inlineCode",title:"backfaceVisibility"},{depth:3,type:"inlineCode",title:"borderBottomColor"},{depth:3,type:"inlineCode",title:"borderBottomEndRadius"},{depth:3,type:"inlineCode",title:"borderBottomLeftRadius"},{depth:3,type:"inlineCode",title:"borderBottomRightRadius"},{depth:3,type:"inlineCode",title:"borderBottomStartRadius"},{depth:3,type:"inlineCode",title:"borderBottomWidth"},{depth:3,type:"inlineCode",title:"borderColor"},{depth:3,type:"inlineCode",title:"borderEndColor"},{depth:3,type:"inlineCode",title:"borderLeftColor"},{depth:3,type:"inlineCode",title:"borderLeftWidth"},{depth:3,type:"inlineCode",title:"borderRadius"},{depth:3,type:"inlineCode",title:"backgroundColor"},{depth:3,type:"inlineCode",title:"borderRightWidth"},{depth:3,type:"inlineCode",title:"borderStartColor"},{depth:3,type:"inlineCode",title:"borderStyle"},{depth:3,type:"inlineCode",title:"borderTopColor"},{depth:3,type:"inlineCode",title:"borderTopEndRadius"},{depth:3,type:"inlineCode",title:"borderTopLeftRadius"},{depth:3,type:"inlineCode",title:"borderTopRightRadius"},{depth:3,type:"inlineCode",title:"borderTopStartRadius"},{depth:3,type:"inlineCode",title:"borderTopWidth"},{depth:3,type:"inlineCode",title:"borderWidth"},{depth:3,type:"inlineCode",title:"opacity"},{depth:3,type:"inlineCode",title:"elevation"}],i={meta:o,headings:d};function c(e){var t=e.components,a=Object(r.a)(e,l);return Object(n.b)("wrapper",Object(b.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h3",{id:"example"},"Example"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { View, StyleSheet } from 'react-native';\n\nconst ViewStyleProps = () => {\n  return (\n    <View style={styles.container}>\n      <View style={styles.top} />\n      <View style={styles.middle} />\n      <View style={styles.bottom} />\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'space-between',\n    backgroundColor: '#fff',\n    padding: 20,\n    margin: 10,\n  },\n  top: {\n    flex: 0.3,\n    backgroundColor: 'grey',\n    borderWidth: 5,\n    borderTopLeftRadius: 20,\n    borderTopRightRadius: 20,\n  },\n  middle: {\n    flex: 0.3,\n    backgroundColor: 'beige',\n    borderWidth: 5,\n  },\n  bottom: {\n    flex: 0.3,\n    backgroundColor: 'pink',\n    borderWidth: 5,\n    borderBottomLeftRadius: 20,\n    borderBottomRightRadius: 20,\n  },\n});\n\nexport default ViewStyleProps;\n")),Object(n.b)("h1",{id:"reference"},"Reference"),Object(n.b)("h2",{id:"props"},"Props"),Object(n.b)("h3",{id:"borderrightcolor"},Object(n.b)("inlineCode",{parentName:"h3"},"borderRightColor")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Type"),Object(n.b)("th",{parentName:"tr",align:null},"Required"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("a",{parentName:"td",href:"https://reactnative.dev/docs/colors"},"color")),Object(n.b)("td",{parentName:"tr",align:null},"No")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"backfacevisibility"},Object(n.b)("inlineCode",{parentName:"h3"},"backfaceVisibility")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Type"),Object(n.b)("th",{parentName:"tr",align:null},"Required"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"enum('visible', 'hidden')"),Object(n.b)("td",{parentName:"tr",align:null},"No")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"borderbottomcolor"},Object(n.b)("inlineCode",{parentName:"h3"},"borderBottomColor")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Type"),Object(n.b)("th",{parentName:"tr",align:null},"Required"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("a",{parentName:"td",href:"https://reactnative.dev/docs/colors"},"color")),Object(n.b)("td",{parentName:"tr",align:null},"No")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"borderbottomendradius"},Object(n.b)("inlineCode",{parentName:"h3"},"borderBottomEndRadius")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Type"),Object(n.b)("th",{parentName:"tr",align:null},"Required"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"number"),Object(n.b)("td",{parentName:"tr",align:null},"No")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"borderbottomleftradius"},Object(n.b)("inlineCode",{parentName:"h3"},"borderBottomLeftRadius")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Type"),Object(n.b)("th",{parentName:"tr",align:null},"Required"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"number"),Object(n.b)("td",{parentName:"tr",align:null},"No")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"borderbottomrightradius"},Object(n.b)("inlineCode",{parentName:"h3"},"borderBottomRightRadius")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Type"),Object(n.b)("th",{parentName:"tr",align:null},"Required"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"number"),Object(n.b)("td",{parentName:"tr",align:null},"No")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"borderbottomstartradius"},Object(n.b)("inlineCode",{parentName:"h3"},"borderBottomStartRadius")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Type"),Object(n.b)("th",{parentName:"tr",align:null},"Required"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"number"),Object(n.b)("td",{parentName:"tr",align:null},"No")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"borderbottomwidth"},Object(n.b)("inlineCode",{parentName:"h3"},"borderBottomWidth")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Type"),Object(n.b)("th",{parentName:"tr",align:null},"Required"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"number"),Object(n.b)("td",{parentName:"tr",align:null},"No")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"bordercolor"},Object(n.b)("inlineCode",{parentName:"h3"},"borderColor")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Type"),Object(n.b)("th",{parentName:"tr",align:null},"Required"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("a",{parentName:"td",href:"https://reactnative.dev/docs/colors"},"color")),Object(n.b)("td",{parentName:"tr",align:null},"No")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"borderendcolor"},Object(n.b)("inlineCode",{parentName:"h3"},"borderEndColor")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Type"),Object(n.b)("th",{parentName:"tr",align:null},"Required"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("a",{parentName:"td",href:"https://reactnative.dev/docs/colors"},"color")),Object(n.b)("td",{parentName:"tr",align:null},"No")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"borderleftcolor"},Object(n.b)("inlineCode",{parentName:"h3"},"borderLeftColor")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Type"),Object(n.b)("th",{parentName:"tr",align:null},"Required"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("a",{parentName:"td",href:"https://reactnative.dev/docs/colors"},"color")),Object(n.b)("td",{parentName:"tr",align:null},"No")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"borderleftwidth"},Object(n.b)("inlineCode",{parentName:"h3"},"borderLeftWidth")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Type"),Object(n.b)("th",{parentName:"tr",align:null},"Required"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"number"),Object(n.b)("td",{parentName:"tr",align:null},"No")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"borderradius"},Object(n.b)("inlineCode",{parentName:"h3"},"borderRadius")),Object(n.b)("p",null,"If the rounded border is not visible, try applying ",Object(n.b)("inlineCode",{parentName:"p"},"overflow: 'hidden'")," as well."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Type"),Object(n.b)("th",{parentName:"tr",align:null},"Required"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"number"),Object(n.b)("td",{parentName:"tr",align:null},"No")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"backgroundcolor"},Object(n.b)("inlineCode",{parentName:"h3"},"backgroundColor")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Type"),Object(n.b)("th",{parentName:"tr",align:null},"Required"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("a",{parentName:"td",href:"https://reactnative.dev/docs/colors"},"color")),Object(n.b)("td",{parentName:"tr",align:null},"No")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"borderrightwidth"},Object(n.b)("inlineCode",{parentName:"h3"},"borderRightWidth")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Type"),Object(n.b)("th",{parentName:"tr",align:null},"Required"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"number"),Object(n.b)("td",{parentName:"tr",align:null},"No")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"borderstartcolor"},Object(n.b)("inlineCode",{parentName:"h3"},"borderStartColor")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Type"),Object(n.b)("th",{parentName:"tr",align:null},"Required"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("a",{parentName:"td",href:"https://reactnative.dev/docs/colors"},"color")),Object(n.b)("td",{parentName:"tr",align:null},"No")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"borderstyle"},Object(n.b)("inlineCode",{parentName:"h3"},"borderStyle")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Type"),Object(n.b)("th",{parentName:"tr",align:null},"Required"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"enum('solid', 'dotted', 'dashed')"),Object(n.b)("td",{parentName:"tr",align:null},"No")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"bordertopcolor"},Object(n.b)("inlineCode",{parentName:"h3"},"borderTopColor")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Type"),Object(n.b)("th",{parentName:"tr",align:null},"Required"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("a",{parentName:"td",href:"https://reactnative.dev/docs/colors"},"color")),Object(n.b)("td",{parentName:"tr",align:null},"No")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"bordertopendradius"},Object(n.b)("inlineCode",{parentName:"h3"},"borderTopEndRadius")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Type"),Object(n.b)("th",{parentName:"tr",align:null},"Required"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"number"),Object(n.b)("td",{parentName:"tr",align:null},"No")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"bordertopleftradius"},Object(n.b)("inlineCode",{parentName:"h3"},"borderTopLeftRadius")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Type"),Object(n.b)("th",{parentName:"tr",align:null},"Required"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"number"),Object(n.b)("td",{parentName:"tr",align:null},"No")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"bordertoprightradius"},Object(n.b)("inlineCode",{parentName:"h3"},"borderTopRightRadius")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Type"),Object(n.b)("th",{parentName:"tr",align:null},"Required"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"number"),Object(n.b)("td",{parentName:"tr",align:null},"No")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"bordertopstartradius"},Object(n.b)("inlineCode",{parentName:"h3"},"borderTopStartRadius")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Type"),Object(n.b)("th",{parentName:"tr",align:null},"Required"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"number"),Object(n.b)("td",{parentName:"tr",align:null},"No")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"bordertopwidth"},Object(n.b)("inlineCode",{parentName:"h3"},"borderTopWidth")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Type"),Object(n.b)("th",{parentName:"tr",align:null},"Required"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"number"),Object(n.b)("td",{parentName:"tr",align:null},"No")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"borderwidth"},Object(n.b)("inlineCode",{parentName:"h3"},"borderWidth")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Type"),Object(n.b)("th",{parentName:"tr",align:null},"Required"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"number"),Object(n.b)("td",{parentName:"tr",align:null},"No")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"opacity"},Object(n.b)("inlineCode",{parentName:"h3"},"opacity")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Type"),Object(n.b)("th",{parentName:"tr",align:null},"Required"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"number"),Object(n.b)("td",{parentName:"tr",align:null},"No")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"elevation"},Object(n.b)("inlineCode",{parentName:"h3"},"elevation")),Object(n.b)("p",null,"(Android-only) Sets the elevation of a view, using Android's underlying ",Object(n.b)("a",{parentName:"p",href:"https://developer.android.com/training/material/shadows-clipping.html#Elevation"},"elevation API"),". This adds a drop shadow to the item and affects z-order for overlapping views. Only supported on Android 5.0+, has no effect on earlier versions."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Type"),Object(n.b)("th",{parentName:"tr",align:null},"Required"),Object(n.b)("th",{parentName:"tr",align:null},"Platform"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"number"),Object(n.b)("td",{parentName:"tr",align:null},"No"),Object(n.b)("td",{parentName:"tr",align:null},"Android")))))}c.isMDXComponent=!0},dhJC:function(e,t,a){"use strict";function b(e,t){if(null==e)return{};var a,b,r=function(e,t){if(null==e)return{};var a,b,r={},n=Object.keys(e);for(b=0;b<n.length;b++)a=n[b],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(b=0;b<n.length;b++)a=n[b],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a.d(t,"a",(function(){return b}))}},[["BxVD",1,0]]]);