_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[767],{"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var a=n("q1tI"),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"===typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),d=p(n),s=a,O=d["".concat(b,".").concat(s)]||d[s]||u[s]||l;return n?r.a.createElement(O,o(o({ref:t},i),{},{components:n})):r.a.createElement(O,o({ref:t},i))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var l=n.length,b=new Array(l);b[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"===typeof e?e:a,b[1]=o;for(var i=2;i<l;i++)b[i]=n[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},"85i/":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return o})),n.d(t,"headings",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n("HALo"),r=n("dhJC"),l=(n("q1tI"),n("7ljp")),b=["components"],o={id:"touchablenativefeedback",title:"TouchableNativeFeedback"},c=[{depth:2,type:"text",title:"Example"},{depth:1,type:"text",title:"Reference"},{depth:2,type:"text",title:"Props"},{depth:3,type:"inlineCode",title:"background"},{depth:3,type:"inlineCode",title:"useForeground"},{depth:3,type:"inlineCode",title:"hasTVPreferredFocus"},{depth:3,type:"inlineCode",title:"nextFocusDown"},{depth:3,type:"inlineCode",title:"nextFocusForward"},{depth:3,type:"inlineCode",title:"nextFocusLeft"},{depth:3,type:"inlineCode",title:"nextFocusRight"},{depth:3,type:"inlineCode",title:"nextFocusUp"},{depth:2,type:"text",title:"Methods"},{depth:3,type:"inlineCode",title:"SelectableBackground()"},{depth:3,type:"inlineCode",title:"SelectableBackgroundBorderless()"},{depth:3,type:"inlineCode",title:"Ripple()"},{depth:3,type:"inlineCode",title:"canUseNativeForeground()"}],i={meta:o,headings:c};function p(e){var t=e.components,n=Object(r.a)(e,b);return Object(l.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"If you're looking for a more extensive and future-proof way to handle touch-based input, check out the ",Object(l.b)("a",{parentName:"p",href:"/versions/v41.0.0/react-native/pressable/"},"Pressable")," API.")),Object(l.b)("p",null,"A wrapper for making views respond properly to touches (Android only). On Android this component uses native state drawable to display touch feedback."),Object(l.b)("p",null,"At the moment it only supports having a single View instance as a child node, as it's implemented by replacing that View with another instance of RCTView node with some additional properties set."),Object(l.b)("p",null,"Background drawable of native feedback touchable can be customized with ",Object(l.b)("inlineCode",{parentName:"p"},"background")," property."),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"import React, { useState } from 'react';\nimport { Text, View, StyleSheet, TouchableNativeFeedback } from 'react-native';\nimport Constants from 'expo-constants';\n\nconst randomHexColor = () => {\n  return '#000000'.replace(/0/g, function() {\n    return (~~(Math.random() * 16)).toString(16);\n  });\n};\n\nconst App = () => {\n  const [rippleColor, setRippleColor] = useState(randomHexColor());\n  const [rippleOverflow, setRippleOverflow] = useState(false);\n  return (\n    <View style={styles.container}>\n      <TouchableNativeFeedback\n        onPress={() => {\n          setRippleColor(randomHexColor());\n          setRippleOverflow(!rippleOverflow);\n        }}\n        background={TouchableNativeFeedback.Ripple(rippleColor, rippleOverflow)}>\n        <View style={styles.touchable}>\n          <Text style={styles.text}>TouchableNativeFeedback</Text>\n        </View>\n      </TouchableNativeFeedback>\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    paddingTop: Constants.statusBarHeight,\n    backgroundColor: '#ecf0f1',\n    padding: 8,\n  },\n  touchable: { flex: 0.5, borderColor: 'black', borderWidth: 1 },\n  text: { alignSelf: 'center' },\n});\n\nexport default App;\n")),Object(l.b)("hr",null),Object(l.b)("h1",{id:"reference"},"Reference"),Object(l.b)("h2",{id:"props"},"Props"),Object(l.b)("p",null,"Inherits ",Object(l.b)("a",{parentName:"p",href:"/versions/v41.0.0/react-native/touchablewithoutfeedback/#props"},"TouchableWithoutFeedback Props"),"."),Object(l.b)("h3",{id:"background"},Object(l.b)("inlineCode",{parentName:"h3"},"background")),Object(l.b)("p",null,"Determines the type of background drawable that's going to be used to display feedback. It takes an object with ",Object(l.b)("inlineCode",{parentName:"p"},"type")," property and extra data depending on the ",Object(l.b)("inlineCode",{parentName:"p"},"type"),". It's recommended to use one of the static methods to generate that dictionary."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"backgroundPropType"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"useforeground"},Object(l.b)("inlineCode",{parentName:"h3"},"useForeground")),Object(l.b)("p",null,"Set to true to add the ripple effect to the foreground of the view, instead of the background. This is useful if one of your child views has a background of its own, or you're e.g. displaying images, and you don't want the ripple to be covered by them."),Object(l.b)("p",null,"Check TouchableNativeFeedback.canUseNativeForeground() first, as this is only available on Android 6.0 and above. If you try to use this on older versions you will get a warning and fallback to background."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"hastvpreferredfocus"},Object(l.b)("inlineCode",{parentName:"h3"},"hasTVPreferredFocus")),Object(l.b)("p",null,"TV preferred focus (see documentation for the View component)."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Android")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"nextfocusdown"},Object(l.b)("inlineCode",{parentName:"h3"},"nextFocusDown")),Object(l.b)("p",null,"TV next focus down (see documentation for the View component)."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Android")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"nextfocusforward"},Object(l.b)("inlineCode",{parentName:"h3"},"nextFocusForward")),Object(l.b)("p",null,"TV next focus forward (see documentation for the View component)."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Android")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"nextfocusleft"},Object(l.b)("inlineCode",{parentName:"h3"},"nextFocusLeft")),Object(l.b)("p",null,"TV next focus left (see documentation for the View component)."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Android")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"nextfocusright"},Object(l.b)("inlineCode",{parentName:"h3"},"nextFocusRight")),Object(l.b)("p",null,"TV next focus right (see documentation for the View component)."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Android")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"nextfocusup"},Object(l.b)("inlineCode",{parentName:"h3"},"nextFocusUp")),Object(l.b)("p",null,"TV next focus up (see documentation for the View component)."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Android")))),Object(l.b)("h2",{id:"methods"},"Methods"),Object(l.b)("h3",{id:"selectablebackground"},Object(l.b)("inlineCode",{parentName:"h3"},"SelectableBackground()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"static SelectableBackground(rippleRadius: ?number)\n")),Object(l.b)("p",null,"Creates an object that represents android theme's default background for selectable elements (?android:attr/selectableItemBackground). ",Object(l.b)("inlineCode",{parentName:"p"},"rippleRadius")," parameter controls the radius of the ripple effect."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"selectablebackgroundborderless"},Object(l.b)("inlineCode",{parentName:"h3"},"SelectableBackgroundBorderless()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"static SelectableBackgroundBorderless(rippleRadius: ?number)\n")),Object(l.b)("p",null,"Creates an object that represent android theme's default background for borderless selectable elements (?android:attr/selectableItemBackgroundBorderless). Available on android API level 21+. ",Object(l.b)("inlineCode",{parentName:"p"},"rippleRadius")," parameter controls the radius of the ripple effect."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"ripple"},Object(l.b)("inlineCode",{parentName:"h3"},"Ripple()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"static Ripple(color: string, borderless: boolean, rippleRadius: ?number)\n")),Object(l.b)("p",null,"Creates an object that represents ripple drawable with specified color (as a string). If property ",Object(l.b)("inlineCode",{parentName:"p"},"borderless")," evaluates to true the ripple will render outside of the view bounds (see native actionbar buttons as an example of that behavior). This background type is available on Android API level 21+."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"color"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"The ripple color")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"borderless"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"If the ripple can render outside its bounds")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"rippleRadius"),Object(l.b)("td",{parentName:"tr",align:null},"number?"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"controls the radius of the ripple effect")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"canusenativeforeground"},Object(l.b)("inlineCode",{parentName:"h3"},"canUseNativeForeground()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"static canUseNativeForeground()\n")))}p.isMDXComponent=!0},HALo:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},PBRW:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v41.0.0/react-native/touchablenativefeedback",function(){return n("85i/")}])},Qetd:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},dhJC:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,"a",(function(){return a}))}},[["PBRW",1,0]]]);