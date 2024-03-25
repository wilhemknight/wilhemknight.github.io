_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[591],{"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n("q1tI"),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),c=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=c(n),O=a,m=s["".concat(l,".").concat(O)]||s[O]||d[O]||b;return n?r.a.createElement(m,i(i({ref:t},p),{},{components:n})):r.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var b=n.length,l=new Array(b);l[0]=O;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"===typeof e?e:a,l[1]=i;for(var p=2;p<b;p++)l[p]=n[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},FjC1:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v40.0.0/react-native/pressable",function(){return n("f+R7")}])},HALo:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},Qetd:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},dhJC:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,"a",(function(){return a}))},"f+R7":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return i})),n.d(t,"headings",(function(){return o})),n.d(t,"default",(function(){return c}));var a=n("HALo"),r=n("dhJC"),b=(n("q1tI"),n("7ljp")),l=["components"],i={id:"pressable",title:"Pressable"},o=[{depth:2,type:"text",title:"How it works"},{depth:2,type:"text",title:"Example"},{depth:2,type:"text",title:"Props"},{depth:3,type:"inlineCode",title:'android_disableSound   <div class="label android"> Android </div>'},{depth:3,type:"inlineCode",title:'android_ripple   <div class="label android"> Android </div>'},{depth:3,type:"inlineCode",title:"children"},{depth:3,type:"inlineCode",title:"delayLongPress"},{depth:3,type:"inlineCode",title:"disabled"},{depth:3,type:"inlineCode",title:"hitSlop"},{depth:3,type:"inlineCode",title:"onLongPress"},{depth:3,type:"inlineCode",title:"onPress"},{depth:3,type:"inlineCode",title:"onPressIn"},{depth:3,type:"inlineCode",title:"onPressOut"},{depth:3,type:"inlineCode",title:"pressRetentionOffset"},{depth:3,type:"inlineCode",title:"style"},{depth:3,type:"inlineCode",title:"testOnly_pressed"},{depth:2,type:"text",title:"Type Definitions"},{depth:3,type:"text",title:"RippleConfig"}],p={meta:i,headings:o};function c(e){var t=e.components,n=Object(r.a)(e,l);return Object(b.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Pressable is a Core Component wrapper that can detect various stages of press interactions on any of it's defined children."),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-js"},"<Pressable onPress={onPressFunction}>\n  <Text>I'm pressable!</Text>\n</Pressable>\n")),Object(b.b)("h2",{id:"how-it-works"},"How it works"),Object(b.b)("p",null,"On an element wrapped by ",Object(b.b)("inlineCode",{parentName:"p"},"Pressable"),":"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/versions/v40.0.0/react-native/pressable/#onpressin"},Object(b.b)("inlineCode",{parentName:"a"},"onPressIn"))," is called when a press is activated."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/versions/v40.0.0/react-native/pressable/#onpressout"},Object(b.b)("inlineCode",{parentName:"a"},"onPressOut"))," is called when the press gesture is deactivated.")),Object(b.b)("p",null,"After pressing ",Object(b.b)("a",{parentName:"p",href:"/versions/v40.0.0/react-native/pressable/#onpressin"},Object(b.b)("inlineCode",{parentName:"a"},"onPressIn")),", one of two things will happen:"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"The person will remove their finger, triggering ",Object(b.b)("a",{parentName:"li",href:"/versions/v40.0.0/react-native/pressable/#onpressout"},Object(b.b)("inlineCode",{parentName:"a"},"onPressOut"))," followed by ",Object(b.b)("a",{parentName:"li",href:"/versions/v40.0.0/react-native/pressable/#onpress"},Object(b.b)("inlineCode",{parentName:"a"},"onPress")),"."),Object(b.b)("li",{parentName:"ol"},"If the person leaves their finger longer than 370 milliseconds before removing it, ",Object(b.b)("a",{parentName:"li",href:"/versions/v40.0.0/react-native/pressable/#onlongpress"},Object(b.b)("inlineCode",{parentName:"a"},"onLongPress"))," is triggered. (",Object(b.b)("a",{parentName:"li",href:"/versions/v40.0.0/react-native/pressable/#onpressout"},Object(b.b)("inlineCode",{parentName:"a"},"onPressOut"))," will still fire when they remove their finger.)")),Object(b.b)("img",{src:"/static/images/d_pressable_pressing.svg",width:"1000",alt:"Diagram of the onPress events in sequence."}),Object(b.b)("p",null,"Fingers are not the most precise instruments, and it is common for users to accidentally activate the wrong element or miss the activation area. To help, ",Object(b.b)("inlineCode",{parentName:"p"},"Pressable")," has an optional ",Object(b.b)("inlineCode",{parentName:"p"},"HitRect")," you can use to define how far a touch can register away from the the wrapped element. Presses can start anywhere within a ",Object(b.b)("inlineCode",{parentName:"p"},"HitRect"),"."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"PressRect")," allows presses to move beyond the element and its ",Object(b.b)("inlineCode",{parentName:"p"},"HitRect"),' while maintaining activation and being eligible for a "press"\u2014think of sliding your finger slowly away from a button you\'re pressing down on.'),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"The touch area never extends past the parent view bounds and the Z-index of sibling views always takes precedence if a touch hits two overlapping views.")),Object(b.b)("figure",null,Object(b.b)("img",{src:"/static/images/d_pressable_anatomy.svg",width:"1000",alt:"Diagram of HitRect and PressRect and how they work."}),Object(b.b)("figcaption",null,"You can set ",Object(b.b)("code",null,"HitRect")," with ",Object(b.b)("code",null,"hitSlop")," and set ",Object(b.b)("code",null,"PressRect")," with ",Object(b.b)("code",null,"pressRetentionOffset"),".")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("inlineCode",{parentName:"p"},"Pressable")," uses React Native's ",Object(b.b)("inlineCode",{parentName:"p"},"Pressability")," API. For more information around the state machine flow of Pressability and how it works, check out the implementation for ",Object(b.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/16ea9ba8133a5340ed6751ec7d49bf03a0d4c5ea/Libraries/Pressability/Pressability.js#L347"},"Pressability"),".")),Object(b.b)("h2",{id:"example"},"Example"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-js"},"import React, { useState } from 'react';\nimport { Pressable, StyleSheet, Text, View } from 'react-native';\n\nexport default function App() {\n  const [timesPressed, setTimesPressed] = useState(0);\n\n  let textLog = '';\n  if (timesPressed > 1) {\n    textLog = timesPressed + 'x onPress';\n  } else if (timesPressed > 0) {\n    textLog = 'onPress';\n  }\n\n  return (\n    <View>\n      <Pressable\n        onPress={() => {\n          setTimesPressed(current => current + 1);\n        }}\n        style={({ pressed }) => [\n          {\n            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',\n          },\n          styles.wrapperCustom,\n        ]}>\n        {({ pressed }) => <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text>}\n      </Pressable>\n      <View style={styles.logBox}>\n        <Text testID=\"pressable_press_console\">{textLog}</Text>\n      </View>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  text: {\n    fontSize: 16,\n  },\n  wrapperCustom: {\n    borderRadius: 8,\n    padding: 6,\n  },\n  logBox: {\n    padding: 20,\n    margin: 10,\n    borderWidth: StyleSheet.hairlineWidth,\n    borderColor: '#f0f0f0',\n    backgroundColor: '#f9f9f9',\n  },\n});\n")),Object(b.b)("h2",{id:"props"},"Props"),Object(b.b)("h3",{id:"android_disablesound-android"},Object(b.b)("inlineCode",{parentName:"h3"},"android_disableSound")," ",Object(b.b)("div",{class:"label android"},"Android")),Object(b.b)("p",null,"If true, doesn't play Android system sound on press."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"boolean"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"false"))))),Object(b.b)("h3",{id:"android_ripple-android"},Object(b.b)("inlineCode",{parentName:"h3"},"android_ripple")," ",Object(b.b)("div",{class:"label android"},"Android")),Object(b.b)("p",null,"Enables the Android ripple effect and configures its properties."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/versions/v40.0.0/react-native/pressable/#rippleconfig"},"RippleConfig")),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("h3",{id:"children"},Object(b.b)("inlineCode",{parentName:"h3"},"children")),Object(b.b)("p",null,"Either children or a function that receives a boolean reflecting whether the component is currently pressed."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"https://reactnative.dev/docs/react-node"},"React Node")),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("h3",{id:"delaylongpress"},Object(b.b)("inlineCode",{parentName:"h3"},"delayLongPress")),Object(b.b)("p",null,"Duration (in milliseconds) from ",Object(b.b)("inlineCode",{parentName:"p"},"onPressIn")," before ",Object(b.b)("inlineCode",{parentName:"p"},"onLongPress")," is called."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"number"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"370")))),Object(b.b)("h3",{id:"disabled"},Object(b.b)("inlineCode",{parentName:"h3"},"disabled")),Object(b.b)("p",null,"Whether the press behavior is disabled."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"boolean"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"false"))))),Object(b.b)("h3",{id:"hitslop"},Object(b.b)("inlineCode",{parentName:"h3"},"hitSlop")),Object(b.b)("p",null,"Sets additional distance outside of element in which a press can be detected."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"https://reactnative.dev/docs/rect"},"Rect")," or number"),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("h3",{id:"onlongpress"},Object(b.b)("inlineCode",{parentName:"h3"},"onLongPress")),Object(b.b)("p",null,"Called if the time after ",Object(b.b)("inlineCode",{parentName:"p"},"onPressIn")," lasts longer than 370 milliseconds. This time period can be customized with ",Object(b.b)("a",{parentName:"p",href:"/versions/v40.0.0/react-native/pressable/#delaylongpress"},Object(b.b)("inlineCode",{parentName:"a"},"delayLongPress")),"."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"https://reactnative.dev/docs/pressevent"},"PressEvent")),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("h3",{id:"onpress"},Object(b.b)("inlineCode",{parentName:"h3"},"onPress")),Object(b.b)("p",null,"Called after ",Object(b.b)("inlineCode",{parentName:"p"},"onPressOut"),"."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"https://reactnative.dev/docs/pressevent"},"PressEvent")),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("h3",{id:"onpressin"},Object(b.b)("inlineCode",{parentName:"h3"},"onPressIn")),Object(b.b)("p",null,"Called immediately when a touch is engaged, before ",Object(b.b)("inlineCode",{parentName:"p"},"onPressOut")," and ",Object(b.b)("inlineCode",{parentName:"p"},"onPress"),"."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"https://reactnative.dev/docs/pressevent"},"PressEvent")),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("h3",{id:"onpressout"},Object(b.b)("inlineCode",{parentName:"h3"},"onPressOut")),Object(b.b)("p",null,"Called when a touch is released."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"https://reactnative.dev/docs/pressevent"},"PressEvent")),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("h3",{id:"pressretentionoffset"},Object(b.b)("inlineCode",{parentName:"h3"},"pressRetentionOffset")),Object(b.b)("p",null,"Additional distance outside of this view in which a touch is considered a press before ",Object(b.b)("inlineCode",{parentName:"p"},"onPressOut")," is triggered."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"https://reactnative.dev/docs/rect"},"Rect")," or number"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"{ bottom: 30, left: 20, right: 20, top: 20 }"))))),Object(b.b)("h3",{id:"style"},Object(b.b)("inlineCode",{parentName:"h3"},"style")),Object(b.b)("p",null,"Either view styles or a function that receives a boolean reflecting whether the component is currently pressed and returns view styles."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/versions/v40.0.0/react-native/view-style-props/"},"ViewStyleProp")),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("h3",{id:"testonly_pressed"},Object(b.b)("inlineCode",{parentName:"h3"},"testOnly_pressed")),Object(b.b)("p",null,"Used only for documentation or testing (e.g. snapshot testing)."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"boolean"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"false"))))),Object(b.b)("h2",{id:"type-definitions"},"Type Definitions"),Object(b.b)("h3",{id:"rippleconfig"},"RippleConfig"),Object(b.b)("p",null,"Ripple effect configuration for the ",Object(b.b)("inlineCode",{parentName:"p"},"android_ripple")," property."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"object")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Properties:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"color"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"https://reactnative.dev/docs/colors"},"color")),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"Defines the color of the ripple effect.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"borderless"),Object(b.b)("td",{parentName:"tr",align:null},"boolean"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"Defines if ripple effect should not include border.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"radius"),Object(b.b)("td",{parentName:"tr",align:null},"number"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"Defines the radius of the ripple effect.")))))}c.isMDXComponent=!0}},[["FjC1",1,0]]]);