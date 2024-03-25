_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[600],{"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return y}));var o=n("q1tI"),r=n.n(o);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(n),d=o,y=p["".concat(a,".").concat(d)]||p[d]||u[d]||l;return n?r.a.createElement(y,i(i({ref:t},c),{},{components:n})):r.a.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"===typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"===typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},HALo:function(e,t,n){"use strict";function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return o}))},Qetd:function(e,t,n){"use strict";var o=Object.assign.bind(Object);e.exports=o,e.exports.default=e.exports},dhJC:function(e,t,n){"use strict";function o(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,"a",(function(){return o}))},eRnL:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v40.0.0/react-native/stylesheet",function(){return n("maRm")}])},maRm:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return i})),n.d(t,"headings",(function(){return s})),n.d(t,"default",(function(){return b}));var o=n("HALo"),r=n("dhJC"),l=(n("q1tI"),n("7ljp")),a=["components"],i={id:"stylesheet",title:"StyleSheet"},s=[{depth:1,type:"text",title:"Reference"},{depth:2,type:"text",title:"Methods"},{depth:3,type:"inlineCode",title:"compose()"},{depth:3,type:"inlineCode",title:"create()"},{depth:3,type:"inlineCode",title:"flatten()"},{depth:3,type:"inlineCode",title:"setStyleAttributePreprocessor()"},{depth:2,type:"text",title:"Properties"},{depth:3,type:"inlineCode",title:"absoluteFill"},{depth:3,type:"inlineCode",title:"absoluteFillObject"},{depth:3,type:"inlineCode",title:"hairlineWidth"},{depth:2,type:"inlineCode",title:"absoluteFill  vs.  absoluteFillObject"}],c={meta:i,headings:s};function b(e){var t=e.components,n=Object(r.a)(e,a);return Object(l.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"A StyleSheet is an abstraction similar to CSS StyleSheets"),Object(l.b)("p",null,"Creates a StyleSheet style reference from the given object:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { StyleSheet, Text, View } from 'react-native';\n\nconst App = () => (\n  <View style={styles.container}>\n    <Text style={styles.title}>React Native</Text>\n  </View>\n);\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    padding: 24,\n    backgroundColor: '#eaeaea',\n  },\n  title: {\n    marginTop: 16,\n    paddingVertical: 8,\n    borderWidth: 4,\n    borderColor: '#20232a',\n    borderRadius: 6,\n    backgroundColor: '#61dafb',\n    color: '#20232a',\n    textAlign: 'center',\n    fontSize: 30,\n    fontWeight: 'bold',\n  },\n});\n\nexport default App;\n")),Object(l.b)("p",null,"Code quality tips:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"By moving styles away from the render function, you're making the code easier to understand."),Object(l.b)("li",{parentName:"ul"},"Naming the styles is a good way to add meaning to the low level components in the render function.")),Object(l.b)("hr",null),Object(l.b)("h1",{id:"reference"},"Reference"),Object(l.b)("h2",{id:"methods"},"Methods"),Object(l.b)("h3",{id:"compose"},Object(l.b)("inlineCode",{parentName:"h3"},"compose()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"static compose(style1: object, style2: object): object | object[]\n")),Object(l.b)("p",null,"Combines two styles such that ",Object(l.b)("inlineCode",{parentName:"p"},"style2")," will override any styles in ",Object(l.b)("inlineCode",{parentName:"p"},"style1"),". If either style is falsy, the other one is returned without allocating an array, saving allocations and maintaining reference equality for PureComponent checks."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { StyleSheet, Text, View } from 'react-native';\n\nconst App = () => (\n  <View style={container}>\n    <Text style={text}>React Native</Text>\n  </View>\n);\n\nconst page = StyleSheet.create({\n  container: {\n    flex: 1,\n    padding: 24,\n    backgroundColor: '#fff',\n  },\n  text: {\n    fontSize: 30,\n    color: '#000',\n  },\n});\n\nconst lists = StyleSheet.create({\n  listContainer: {\n    flex: 1,\n    backgroundColor: '#61dafb',\n  },\n  listItem: {\n    fontStyle: 'italic',\n    fontWeight: 'bold',\n  },\n});\n\nconst container = StyleSheet.compose(page.container, lists.listContainer);\nconst text = StyleSheet.compose(page.text, lists.listItem);\n\nexport default App;\n")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"create"},Object(l.b)("inlineCode",{parentName:"h3"},"create()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"static create(obj: object): object\n")),Object(l.b)("p",null,"Creates a StyleSheet style reference from the given object."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"flatten"},Object(l.b)("inlineCode",{parentName:"h3"},"flatten()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"static flatten(style: array<object>): object\n")),Object(l.b)("p",null,"Flattens an array of style objects, into one aggregated style object. Alternatively, this method can be used to lookup IDs, returned by ",Object(l.b)("inlineCode",{parentName:"p"},"StyleSheet.register"),"."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"NOTE:")," Exercise caution as abusing this can tax you in terms of optimizations. IDs enable optimizations through the bridge and memory in general. Referring to style objects directly will deprive you of these optimizations.")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { StyleSheet, Text, View } from 'react-native';\n\nconst App = () => (\n  <View style={page.container}>\n    <Text style={flattenStyle}>React Native</Text>\n    <Text>Flatten Style</Text>\n    <Text style={page.code}>{JSON.stringify(flattenStyle, null, 2)}</Text>\n  </View>\n);\n\nconst page = StyleSheet.create({\n  container: {\n    flex: 1,\n    padding: 24,\n    alignItems: 'center',\n  },\n  text: {\n    color: '#000',\n    fontSize: 14,\n    fontWeight: 'bold',\n  },\n  code: {\n    marginTop: 12,\n    padding: 12,\n    borderRadius: 8,\n    color: '#666',\n    backgroundColor: '#eaeaea',\n  },\n});\n\nconst typography = StyleSheet.create({\n  header: {\n    color: '#61dafb',\n    fontSize: 30,\n    marginBottom: 36,\n  },\n});\n\nconst flattenStyle = StyleSheet.flatten([page.text, typography.header]);\n\nexport default App;\n")),Object(l.b)("p",null,"This method internally uses ",Object(l.b)("inlineCode",{parentName:"p"},"StyleSheetRegistry.getStyleByID(style)")," to resolve style objects represented by IDs. Thus, an array of style objects (instances of ",Object(l.b)("inlineCode",{parentName:"p"},"StyleSheet.create()"),"), are individually resolved to, their respective objects, merged as one and then returned. This also explains the alternative use."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"setstyleattributepreprocessor"},Object(l.b)("inlineCode",{parentName:"h3"},"setStyleAttributePreprocessor()")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"WARNING: EXPERIMENTAL.")," Breaking changes will probably happen a lot and will not be reliably announced. The whole thing might be deleted, who knows? Use at your own risk.")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"static setStyleAttributePreprocessor(property: string, process: (propValue: any) => any)\n")),Object(l.b)("p",null,"Sets a function to use to pre-process a style property value. This is used internally to process color and transform values. You should not use this unless you really know what you are doing and have exhausted other options."),Object(l.b)("h2",{id:"properties"},"Properties"),Object(l.b)("hr",null),Object(l.b)("h3",{id:"absolutefill"},Object(l.b)("inlineCode",{parentName:"h3"},"absoluteFill")),Object(l.b)("p",null,"A very common pattern is to create overlays with position absolute and zero positioning (",Object(l.b)("inlineCode",{parentName:"p"},"position: 'absolute', left: 0, right: 0, top: 0, bottom: 0"),"), so ",Object(l.b)("inlineCode",{parentName:"p"},"absoluteFill")," can be used for convenience and to reduce duplication of these repeated styles. If you want, absoluteFill can be used to create a customized entry in a StyleSheet, e.g.:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { StyleSheet, Text, View } from 'react-native';\n\nconst App = () => (\n  <View style={styles.container}>\n    <View style={styles.box1}>\n      <Text style={styles.text}>1</Text>\n    </View>\n    <View style={styles.box2}>\n      <Text style={styles.text}>2</Text>\n    </View>\n    <View style={styles.box3}>\n      <Text style={styles.text}>3</Text>\n    </View>\n  </View>\n);\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n  },\n  box1: {\n    position: 'absolute',\n    top: 40,\n    left: 40,\n    width: 100,\n    height: 100,\n    backgroundColor: 'red',\n  },\n  box2: {\n    ...StyleSheet.absoluteFill,\n    width: 100,\n    height: 100,\n    backgroundColor: 'blue',\n  },\n  box3: {\n    position: 'absolute',\n    top: 120,\n    left: 120,\n    width: 100,\n    height: 100,\n    backgroundColor: 'green',\n  },\n  text: {\n    color: '#FFF',\n    fontSize: 80,\n  },\n});\n\nexport default App;\n")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"absolutefillobject"},Object(l.b)("inlineCode",{parentName:"h3"},"absoluteFillObject")),Object(l.b)("p",null,"Sometimes you may want ",Object(l.b)("inlineCode",{parentName:"p"},"absoluteFill")," but with a couple tweaks - ",Object(l.b)("inlineCode",{parentName:"p"},"absoluteFillObject")," can be used to create a customized entry in a ",Object(l.b)("inlineCode",{parentName:"p"},"StyleSheet"),", e.g.:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { StyleSheet, Text, View } from 'react-native';\n\nconst App = () => (\n  <View style={styles.container}>\n    <View style={styles.box1}>\n      <Text style={styles.text}>1</Text>\n    </View>\n    <View style={styles.box2}>\n      <Text style={styles.text}>2</Text>\n    </View>\n    <View style={styles.box3}>\n      <Text style={styles.text}>3</Text>\n    </View>\n  </View>\n);\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n  },\n  box1: {\n    position: 'absolute',\n    top: 40,\n    left: 40,\n    width: 100,\n    height: 100,\n    backgroundColor: 'red',\n  },\n  box2: {\n    ...StyleSheet.absoluteFill,\n    top: 120,\n    left: 50,\n    width: 100,\n    height: 100,\n    backgroundColor: 'blue',\n  },\n  box3: {\n    ...StyleSheet.absoluteFillObject,\n    top: 120,\n    left: 120,\n    width: 100,\n    height: 100,\n    backgroundColor: 'green',\n  },\n  text: {\n    color: '#FFF',\n    fontSize: 80,\n  },\n});\n\nexport default App;\n")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"hairlinewidth"},Object(l.b)("inlineCode",{parentName:"h3"},"hairlineWidth")),Object(l.b)("p",null,"This is defined as the width of a thin line on the platform. It can be used as the thickness of a border or division between two elements. Example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { StyleSheet, Text, View } from 'react-native';\n\nconst App = () => (\n  <View style={styles.container}>\n    <Text style={styles.row}>React</Text>\n    <Text style={styles.row}>Native</Text>\n  </View>\n);\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    padding: 24,\n  },\n  row: {\n    padding: 4,\n    borderBottomColor: 'red',\n    borderBottomWidth: StyleSheet.hairlineWidth,\n  },\n});\n\nexport default App;\n")),Object(l.b)("p",null,"This constant will always be a round number of pixels (so a line defined by it can look crisp) and will try to match the standard width of a thin line on the underlying platform. However, you should not rely on it being a constant size, because on different platforms and screen densities its value may be calculated differently."),Object(l.b)("p",null,"A line with hairline width may not be visible if your simulator is downscaled."),Object(l.b)("hr",null),Object(l.b)("h2",{id:"absolutefill-vs-absolutefillobject"},Object(l.b)("inlineCode",{parentName:"h2"},"absoluteFill")," vs. ",Object(l.b)("inlineCode",{parentName:"h2"},"absoluteFillObject")),Object(l.b)("p",null,"Currently, there is no difference between using ",Object(l.b)("inlineCode",{parentName:"p"},"absoluteFill")," vs. ",Object(l.b)("inlineCode",{parentName:"p"},"absoluteFillObject"),"."))}b.isMDXComponent=!0}},[["eRnL",1,0]]]);