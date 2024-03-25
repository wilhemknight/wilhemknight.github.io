_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[608],{"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return j}));var a=n("q1tI"),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,j=u["".concat(b,".").concat(d)]||u[d]||O[d]||l;return n?r.a.createElement(j,i(i({ref:t},o),{},{components:n})):r.a.createElement(j,i({ref:t},o))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var l=n.length,b=new Array(l);b[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"===typeof e?e:a,b[1]=i;for(var o=2;o<l;o++)b[o]=n[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},FQsO:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v40.0.0/react-native/touchableopacity",function(){return n("O9w0")}])},HALo:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},O9w0:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return i})),n.d(t,"headings",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n("HALo"),r=n("dhJC"),l=(n("q1tI"),n("7ljp")),b=["components"],i={id:"touchableopacity",title:"TouchableOpacity"},c=[{depth:2,type:"text",title:"Example"},{depth:1,type:"text",title:"Reference"},{depth:2,type:"text",title:"Props"},{depth:3,type:"inlineCode",title:"style"},{depth:3,type:"inlineCode",title:"activeOpacity"},{depth:3,type:"inlineCode",title:"tvParallaxProperties"},{depth:3,type:"inlineCode",title:"hasTVPreferredFocus"},{depth:3,type:"inlineCode",title:"nextFocusDown"},{depth:3,type:"inlineCode",title:"nextFocusForward"},{depth:3,type:"inlineCode",title:"nextFocusLeft"},{depth:3,type:"inlineCode",title:"nextFocusRight"},{depth:3,type:"inlineCode",title:"nextFocusUp"},{depth:2,type:"text",title:"Methods"},{depth:3,type:"inlineCode",title:"setOpacityTo()"}],o={meta:i,headings:c};function p(e){var t=e.components,n=Object(r.a)(e,b);return Object(l.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"If you're looking for a more extensive and future-proof way to handle touch-based input, check out the ",Object(l.b)("a",{parentName:"p",href:"/versions/v40.0.0/react-native/pressable/"},"Pressable")," API.")),Object(l.b)("p",null,"A wrapper for making views respond properly to touches. On press down, the opacity of the wrapped view is decreased, dimming it."),Object(l.b)("p",null,"Opacity is controlled by wrapping the children in an ",Object(l.b)("inlineCode",{parentName:"p"},"Animated.View"),", which is added to the view hierarchy. Be aware that this can affect layout."),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"import React, { useState } from 'react';\nimport { StyleSheet, Text, TouchableOpacity, View } from 'react-native';\n\nconst App = () => {\n  const [count, setCount] = useState(0);\n  const onPress = () => setCount(prevCount => prevCount + 1);\n\n  return (\n    <View style={styles.container}>\n      <View style={styles.countContainer}>\n        <Text>Count: {count}</Text>\n      </View>\n      <TouchableOpacity style={styles.button} onPress={onPress}>\n        <Text>Press Here</Text>\n      </TouchableOpacity>\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    paddingHorizontal: 10,\n  },\n  button: {\n    alignItems: 'center',\n    backgroundColor: '#DDDDDD',\n    padding: 10,\n  },\n  countContainer: {\n    alignItems: 'center',\n    padding: 10,\n  },\n});\n\nexport default App;\n")),Object(l.b)("hr",null),Object(l.b)("h1",{id:"reference"},"Reference"),Object(l.b)("h2",{id:"props"},"Props"),Object(l.b)("p",null,"Inherits ",Object(l.b)("a",{parentName:"p",href:"/versions/v40.0.0/react-native/touchablewithoutfeedback/#props"},"TouchableWithoutFeedback Props"),"."),Object(l.b)("h3",{id:"style"},Object(l.b)("inlineCode",{parentName:"h3"},"style")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"View.style"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"activeopacity"},Object(l.b)("inlineCode",{parentName:"h3"},"activeOpacity")),Object(l.b)("p",null,"Determines what the opacity of the wrapped view should be when touch is active. Defaults to ",Object(l.b)("inlineCode",{parentName:"p"},"0.2"),"."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"tvparallaxproperties"},Object(l.b)("inlineCode",{parentName:"h3"},"tvParallaxProperties")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"(Apple TV only)")," Object with properties to control Apple TV parallax effects."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"enabled"),": If ",Object(l.b)("inlineCode",{parentName:"li"},"true"),", parallax effects are enabled. Defaults to ",Object(l.b)("inlineCode",{parentName:"li"},"true"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"shiftDistanceX"),": Defaults to ",Object(l.b)("inlineCode",{parentName:"li"},"2.0"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"shiftDistanceY"),": Defaults to ",Object(l.b)("inlineCode",{parentName:"li"},"2.0"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"tiltAngle"),": Defaults to ",Object(l.b)("inlineCode",{parentName:"li"},"0.05"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"magnification"),": Defaults to ",Object(l.b)("inlineCode",{parentName:"li"},"1.0"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"pressMagnification"),": Defaults to ",Object(l.b)("inlineCode",{parentName:"li"},"1.0"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"pressDuration"),": Defaults to ",Object(l.b)("inlineCode",{parentName:"li"},"0.3"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"pressDelay"),": Defaults to ",Object(l.b)("inlineCode",{parentName:"li"},"0.0"),".")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"object"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"iOS")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"hastvpreferredfocus"},Object(l.b)("inlineCode",{parentName:"h3"},"hasTVPreferredFocus")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"(Apple TV only)")," TV preferred focus (see documentation for the View component)."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"iOS")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"nextfocusdown"},Object(l.b)("inlineCode",{parentName:"h3"},"nextFocusDown")),Object(l.b)("p",null,"TV next focus down (see documentation for the View component)."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Android")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"nextfocusforward"},Object(l.b)("inlineCode",{parentName:"h3"},"nextFocusForward")),Object(l.b)("p",null,"TV next focus forward (see documentation for the View component)."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Android")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"nextfocusleft"},Object(l.b)("inlineCode",{parentName:"h3"},"nextFocusLeft")),Object(l.b)("p",null,"TV next focus left (see documentation for the View component)."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Android")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"nextfocusright"},Object(l.b)("inlineCode",{parentName:"h3"},"nextFocusRight")),Object(l.b)("p",null,"TV next focus right (see documentation for the View component)."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Android")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"nextfocusup"},Object(l.b)("inlineCode",{parentName:"h3"},"nextFocusUp")),Object(l.b)("p",null,"TV next focus up (see documentation for the View component)."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Android")))),Object(l.b)("h2",{id:"methods"},"Methods"),Object(l.b)("h3",{id:"setopacityto"},Object(l.b)("inlineCode",{parentName:"h3"},"setOpacityTo()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"setOpacityTo((value: number), (duration: number));\n")),Object(l.b)("p",null,"Animate the touchable to a new opacity."))}p.isMDXComponent=!0},Qetd:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},dhJC:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,"a",(function(){return a}))}},[["FQsO",1,0]]]);