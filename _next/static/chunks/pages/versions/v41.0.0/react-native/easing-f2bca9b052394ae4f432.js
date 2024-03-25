_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[736],{"7ljp":function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return O}));var a=t("q1tI"),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),o=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"===typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=o(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),p=o(t),d=a,O=p["".concat(c,".").concat(d)]||p[d]||u[d]||r;return t?i.a.createElement(O,l(l({ref:n},s),{},{components:t})):i.a.createElement(O,l({ref:n},s))}));function O(e,n){var t=arguments,a=n&&n.mdxType;if("string"===typeof e||a){var r=t.length,c=new Array(r);c[0]=d;var l={};for(var b in n)hasOwnProperty.call(n,b)&&(l[b]=n[b]);l.originalType=e,l.mdxType="string"===typeof e?e:a,c[1]=l;for(var s=2;s<r;s++)c[s]=t[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},"8l6d":function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return l})),t.d(n,"headings",(function(){return b})),t.d(n,"default",(function(){return o}));var a=t("HALo"),i=t("dhJC"),r=(t("q1tI"),t("7ljp")),c=["components"],l={id:"easing",title:"Easing"},b=[{depth:3,type:"text",title:"Predefined animations"},{depth:3,type:"text",title:"Standard functions"},{depth:3,type:"text",title:"Additional functions"},{depth:2,type:"text",title:"Example"},{depth:1,type:"text",title:"Reference"},{depth:2,type:"text",title:"Methods"},{depth:3,type:"inlineCode",title:"step0()"},{depth:3,type:"inlineCode",title:"step1()"},{depth:3,type:"inlineCode",title:"linear()"},{depth:3,type:"inlineCode",title:"ease()"},{depth:3,type:"inlineCode",title:"quad()"},{depth:3,type:"inlineCode",title:"cubic()"},{depth:3,type:"inlineCode",title:"poly()"},{depth:3,type:"inlineCode",title:"sin()"},{depth:3,type:"inlineCode",title:"circle()"},{depth:3,type:"inlineCode",title:"exp()"},{depth:3,type:"inlineCode",title:"elastic()"},{depth:3,type:"inlineCode",title:"back()"},{depth:3,type:"inlineCode",title:"bounce()"},{depth:3,type:"inlineCode",title:"bezier()"},{depth:3,type:"inlineCode",title:"in()"},{depth:3,type:"inlineCode",title:"out()"},{depth:3,type:"inlineCode",title:"inOut()"}],s={meta:l,headings:b};function o(e){var n=e.components,t=Object(i.a)(e,c);return Object(r.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"Easing")," module implements common easing functions. This module is used by ",Object(r.b)("a",{parentName:"p",href:"/versions/v41.0.0/react-native/animated/#timing"},"Animated.timing()")," to convey physically believable motion in animations."),Object(r.b)("p",null,"You can find a visualization of some common easing functions at ",Object(r.b)("a",{parentName:"p",href:"http://easings.net/"},"http://easings.net/")),Object(r.b)("h3",{id:"predefined-animations"},"Predefined animations"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"Easing")," module provides several predefined animations through the following methods:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/versions/v41.0.0/react-native/easing/#back"},Object(r.b)("inlineCode",{parentName:"a"},"back"))," provides a basic animation where the object goes slightly back before moving forward"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/versions/v41.0.0/react-native/easing/#bounce"},Object(r.b)("inlineCode",{parentName:"a"},"bounce"))," provides a bouncing animation"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/versions/v41.0.0/react-native/easing/#ease"},Object(r.b)("inlineCode",{parentName:"a"},"ease"))," provides a basic inertial animation"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/versions/v41.0.0/react-native/easing/#elastic"},Object(r.b)("inlineCode",{parentName:"a"},"elastic"))," provides a basic spring interaction")),Object(r.b)("h3",{id:"standard-functions"},"Standard functions"),Object(r.b)("p",null,"Three standard easing functions are provided:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/versions/v41.0.0/react-native/easing/#linear"},Object(r.b)("inlineCode",{parentName:"a"},"linear"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/versions/v41.0.0/react-native/easing/#quad"},Object(r.b)("inlineCode",{parentName:"a"},"quad"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/versions/v41.0.0/react-native/easing/#cubic"},Object(r.b)("inlineCode",{parentName:"a"},"cubic")))),Object(r.b)("p",null,"The ",Object(r.b)("a",{parentName:"p",href:"/versions/v41.0.0/react-native/easing/#poly"},Object(r.b)("inlineCode",{parentName:"a"},"poly"))," function can be used to implement quartic, quintic, and other higher power functions."),Object(r.b)("h3",{id:"additional-functions"},"Additional functions"),Object(r.b)("p",null,"Additional mathematical functions are provided by the following methods:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/versions/v41.0.0/react-native/easing/#bezier"},Object(r.b)("inlineCode",{parentName:"a"},"bezier"))," provides a cubic bezier curve"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/versions/v41.0.0/react-native/easing/#circle"},Object(r.b)("inlineCode",{parentName:"a"},"circle"))," provides a circular function"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/versions/v41.0.0/react-native/easing/#sin"},Object(r.b)("inlineCode",{parentName:"a"},"sin"))," provides a sinusoidal function"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/versions/v41.0.0/react-native/easing/#exp"},Object(r.b)("inlineCode",{parentName:"a"},"exp"))," provides an exponential function")),Object(r.b)("p",null,"The following helpers are used to modify other easing functions."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/versions/v41.0.0/react-native/easing/#in"},Object(r.b)("inlineCode",{parentName:"a"},"in"))," runs an easing function forwards"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/versions/v41.0.0/react-native/easing/#inout"},Object(r.b)("inlineCode",{parentName:"a"},"inOut"))," makes any easing function symmetrical"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/versions/v41.0.0/react-native/easing/#out"},Object(r.b)("inlineCode",{parentName:"a"},"out"))," runs an easing function backwards")),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport {\n  Animated,\n  Easing,\n  SectionList,\n  StatusBar,\n  StyleSheet,\n  Text,\n  TouchableOpacity,\n  View,\n} from 'react-native';\n\nexport default function App() {\n  let opacity = new Animated.Value(0);\n\n  const animate = easing => {\n    opacity.setValue(0);\n    Animated.timing(opacity, {\n      toValue: 1,\n      duration: 1200,\n      easing,\n    }).start();\n  };\n\n  const size = opacity.interpolate({\n    inputRange: [0, 1],\n    outputRange: [0, 80],\n  });\n\n  const animatedStyles = [\n    styles.box,\n    {\n      opacity,\n      width: size,\n      height: size,\n    },\n  ];\n\n  return (\n    <View style={styles.container}>\n      <StatusBar hidden={true} />\n      <Text style={styles.title}>Press rows below to preview the Easing!</Text>\n      <View style={styles.boxContainer}>\n        <Animated.View style={animatedStyles} />\n      </View>\n      <SectionList\n        style={styles.list}\n        sections={SECTIONS}\n        keyExtractor={item => item.title}\n        renderItem={({ item }) => (\n          <TouchableOpacity onPress={() => animate(item.easing)} style={styles.listRow}>\n            <Text>{item.title}</Text>\n          </TouchableOpacity>\n        )}\n        renderSectionHeader={({ section: { title } }) => (\n          <Text style={styles.listHeader}>{title}</Text>\n        )}\n      />\n    </View>\n  );\n}\n\nconst SECTIONS = [\n  {\n    title: 'Predefined animations',\n    data: [\n      { title: 'Bounce', easing: Easing.bounce },\n      { title: 'Ease', easing: Easing.ease },\n      { title: 'Elastic', easing: Easing.elastic(4) },\n    ],\n  },\n  {\n    title: 'Standard functions',\n    data: [\n      { title: 'Linear', easing: Easing.linear },\n      { title: 'Quad', easing: Easing.quad },\n      { title: 'Cubic', easing: Easing.cubic },\n    ],\n  },\n  {\n    title: 'Additional functions',\n    data: [\n      {\n        title: 'Bezier',\n        easing: Easing.bezier(0, 2, 1, -1),\n      },\n      { title: 'Circle', easing: Easing.circle },\n      { title: 'Sin', easing: Easing.sin },\n      { title: 'Exp', easing: Easing.exp },\n    ],\n  },\n  {\n    title: 'Combinations',\n    data: [\n      {\n        title: 'In + Bounce',\n        easing: Easing.in(Easing.bounce),\n      },\n      {\n        title: 'Out + Exp',\n        easing: Easing.out(Easing.exp),\n      },\n      {\n        title: 'InOut + Elastic',\n        easing: Easing.inOut(Easing.elastic(1)),\n      },\n    ],\n  },\n];\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: '#20232a',\n  },\n  title: {\n    marginTop: 10,\n    textAlign: 'center',\n    color: '#61dafb',\n  },\n  boxContainer: {\n    height: 160,\n    alignItems: 'center',\n  },\n  box: {\n    marginTop: 32,\n    borderRadius: 4,\n    backgroundColor: '#61dafb',\n  },\n  list: {\n    backgroundColor: '#fff',\n  },\n  listHeader: {\n    paddingHorizontal: 8,\n    paddingVertical: 4,\n    backgroundColor: '#f4f4f4',\n    color: '#999',\n    fontSize: 12,\n    textTransform: 'uppercase',\n  },\n  listRow: {\n    padding: 8,\n  },\n});\n")),Object(r.b)("hr",null),Object(r.b)("h1",{id:"reference"},"Reference"),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"step0"},Object(r.b)("inlineCode",{parentName:"h3"},"step0()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"static step0(n)\n")),Object(r.b)("p",null,"A stepping function, returns 1 for any positive value of ",Object(r.b)("inlineCode",{parentName:"p"},"n"),"."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"step1"},Object(r.b)("inlineCode",{parentName:"h3"},"step1()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"static step1(n)\n")),Object(r.b)("p",null,"A stepping function, returns 1 if ",Object(r.b)("inlineCode",{parentName:"p"},"n")," is greater than or equal to 1."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"linear"},Object(r.b)("inlineCode",{parentName:"h3"},"linear()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"static linear(t)\n")),Object(r.b)("p",null,"A linear function, ",Object(r.b)("inlineCode",{parentName:"p"},"f(t) = t"),". Position correlates to elapsed time one to one."),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"http://cubic-bezier.com/#0,0,1,1"},"http://cubic-bezier.com/#0,0,1,1")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"ease"},Object(r.b)("inlineCode",{parentName:"h3"},"ease()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"static ease(t)\n")),Object(r.b)("p",null,"A basic inertial interaction, similar to an object slowly accelerating to speed."),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"http://cubic-bezier.com/#.42,0,1,1"},"http://cubic-bezier.com/#.42,0,1,1")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"quad"},Object(r.b)("inlineCode",{parentName:"h3"},"quad()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"static quad(t)\n")),Object(r.b)("p",null,"A quadratic function, ",Object(r.b)("inlineCode",{parentName:"p"},"f(t) = t * t"),". Position equals the square of elapsed time."),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"http://easings.net/#easeInQuad"},"http://easings.net/#easeInQuad")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"cubic"},Object(r.b)("inlineCode",{parentName:"h3"},"cubic()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"static cubic(t)\n")),Object(r.b)("p",null,"A cubic function, ",Object(r.b)("inlineCode",{parentName:"p"},"f(t) = t * t * t"),". Position equals the cube of elapsed time."),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"http://easings.net/#easeInCubic"},"http://easings.net/#easeInCubic")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"poly"},Object(r.b)("inlineCode",{parentName:"h3"},"poly()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"static poly(n)\n")),Object(r.b)("p",null,"A power function. Position is equal to the Nth power of elapsed time."),Object(r.b)("p",null,"n = 4: ",Object(r.b)("a",{parentName:"p",href:"http://easings.net/#easeInQuart"},"http://easings.net/#easeInQuart")," n = 5: ",Object(r.b)("a",{parentName:"p",href:"http://easings.net/#easeInQuint"},"http://easings.net/#easeInQuint")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"sin"},Object(r.b)("inlineCode",{parentName:"h3"},"sin()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"static sin(t)\n")),Object(r.b)("p",null,"A sinusoidal function."),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"http://easings.net/#easeInSine"},"http://easings.net/#easeInSine")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"circle"},Object(r.b)("inlineCode",{parentName:"h3"},"circle()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"static circle(t)\n")),Object(r.b)("p",null,"A circular function."),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"http://easings.net/#easeInCirc"},"http://easings.net/#easeInCirc")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"exp"},Object(r.b)("inlineCode",{parentName:"h3"},"exp()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"static exp(t)\n")),Object(r.b)("p",null,"An exponential function."),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"http://easings.net/#easeInExpo"},"http://easings.net/#easeInExpo")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"elastic"},Object(r.b)("inlineCode",{parentName:"h3"},"elastic()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"static elastic(bounciness)\n")),Object(r.b)("p",null,"A basic elastic interaction, similar to a spring oscillating back and forth."),Object(r.b)("p",null,"Default bounciness is 1, which overshoots a little bit once. 0 bounciness doesn't overshoot at all, and bounciness of N > 1 will overshoot about N times."),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"http://easings.net/#easeInElastic"},"http://easings.net/#easeInElastic")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"back"},Object(r.b)("inlineCode",{parentName:"h3"},"back()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"static back(s)\n")),Object(r.b)("p",null,"Use with ",Object(r.b)("inlineCode",{parentName:"p"},"Animated.parallel()")," to create a basic effect where the object animates back slightly as the animation starts."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"bounce"},Object(r.b)("inlineCode",{parentName:"h3"},"bounce()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"static bounce(t)\n")),Object(r.b)("p",null,"Provides a basic bouncing effect."),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"http://easings.net/#easeInBounce"},"http://easings.net/#easeInBounce")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"bezier"},Object(r.b)("inlineCode",{parentName:"h3"},"bezier()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"static bezier(x1, y1, x2, y2)\n")),Object(r.b)("p",null,"Provides a cubic bezier curve, equivalent to CSS Transitions' ",Object(r.b)("inlineCode",{parentName:"p"},"transition-timing-function"),"."),Object(r.b)("p",null,"A useful tool to visualize cubic bezier curves can be found at ",Object(r.b)("a",{parentName:"p",href:"http://cubic-bezier.com/"},"http://cubic-bezier.com/")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"in"},Object(r.b)("inlineCode",{parentName:"h3"},"in()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"static in(easing);\n")),Object(r.b)("p",null,"Runs an easing function forwards."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"out"},Object(r.b)("inlineCode",{parentName:"h3"},"out()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"static out(easing)\n")),Object(r.b)("p",null,"Runs an easing function backwards."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"inout"},Object(r.b)("inlineCode",{parentName:"h3"},"inOut()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"static inOut(easing)\n")),Object(r.b)("p",null,"Makes any easing function symmetrical. The easing function will run forwards for half of the duration, then backwards for the rest of the duration."))}o.isMDXComponent=!0},HALo:function(e,n,t){"use strict";function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return a}))},Qetd:function(e,n,t){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},dhJC:function(e,n,t){"use strict";function a(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}t.d(n,"a",(function(){return a}))},vsmE:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v41.0.0/react-native/easing",function(){return t("8l6d")}])}},[["vsmE",1,0]]]);