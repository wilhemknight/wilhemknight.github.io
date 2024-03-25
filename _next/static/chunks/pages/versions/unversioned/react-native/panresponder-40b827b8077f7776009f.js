_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[425],{"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n("q1tI"),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,m=b["".concat(l,".").concat(d)]||b[d]||u[d]||o;return n?a.a.createElement(m,i(i({ref:t},c),{},{components:n})):a.a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"===typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},"843m":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return i})),n.d(t,"headings",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n("HALo"),a=n("dhJC"),o=(n("q1tI"),n("7ljp")),l=["components"],i={id:"panresponder",title:"PanResponder"},s=[{depth:2,type:"text",title:"Usage Pattern"},{depth:2,type:"text",title:"Example"},{depth:1,type:"text",title:"Reference"},{depth:2,type:"text",title:"Methods"},{depth:3,type:"inlineCode",title:"create()"}],c={meta:i,headings:s};function p(e){var t=e.components,n=Object(a.a)(e,l);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"PanResponder")," reconciles several touches into a single gesture. It makes single-touch gestures resilient to extra touches, and can be used to recognize basic multi-touch gestures."),Object(o.b)("p",null,"By default, ",Object(o.b)("inlineCode",{parentName:"p"},"PanResponder")," holds an ",Object(o.b)("inlineCode",{parentName:"p"},"InteractionManager")," handle to block long-running JS events from interrupting active gestures."),Object(o.b)("p",null,"It provides a predictable wrapper of the responder handlers provided by the ",Object(o.b)("a",{parentName:"p",href:"https://reactnative.dev/docs/0.64/gesture-responder-system"},"gesture responder system"),". For each handler, it provides a new ",Object(o.b)("inlineCode",{parentName:"p"},"gestureState")," object alongside the native event object:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"onPanResponderMove: (event, gestureState) => {};\n")),Object(o.b)("p",null,"A native event is a synthetic touch event with form of ",Object(o.b)("a",{parentName:"p",href:"/versions/unversioned/react-native/pressevent/"},"PressEvent"),"."),Object(o.b)("p",null,"A ",Object(o.b)("inlineCode",{parentName:"p"},"gestureState")," object has the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"stateID")," - ID of the gestureState- persisted as long as there's at least one touch on screen"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"moveX")," - the latest screen coordinates of the recently-moved touch"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"moveY")," - the latest screen coordinates of the recently-moved touch"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"x0")," - the screen coordinates of the responder grant"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"y0")," - the screen coordinates of the responder grant"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"dx")," - accumulated distance of the gesture since the touch started"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"dy")," - accumulated distance of the gesture since the touch started"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"vx")," - current velocity of the gesture"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"vy")," - current velocity of the gesture"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"numberActiveTouches")," - Number of touches currently on screen")),Object(o.b)("h2",{id:"usage-pattern"},"Usage Pattern"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const ExampleComponent = () => {\n  const panResponder = React.useRef(\n    PanResponder.create({\n      // Ask to be the responder:\n      onStartShouldSetPanResponder: (evt, gestureState) => true,\n      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,\n      onMoveShouldSetPanResponder: (evt, gestureState) => true,\n      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,\n\n      onPanResponderGrant: (evt, gestureState) => {\n        // The gesture has started. Show visual feedback so the user knows\n        // what is happening!\n        // gestureState.d{x,y} will be set to zero now\n      },\n      onPanResponderMove: (evt, gestureState) => {\n        // The most recent move distance is gestureState.move{X,Y}\n        // The accumulated gesture distance since becoming responder is\n        // gestureState.d{x,y}\n      },\n      onPanResponderTerminationRequest: (evt, gestureState) => true,\n      onPanResponderRelease: (evt, gestureState) => {\n        // The user has released all touches while this view is the\n        // responder. This typically means a gesture has succeeded\n      },\n      onPanResponderTerminate: (evt, gestureState) => {\n        // Another component has become the responder, so this gesture\n        // should be cancelled\n      },\n      onShouldBlockNativeResponder: (evt, gestureState) => {\n        // Returns whether this component should block native components from becoming the JS\n        // responder. Returns true by default. Is currently only supported on android.\n        return true;\n      },\n    })\n  ).current;\n\n  return <View {...panResponder.panHandlers} />;\n};\n")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"PanResponder")," works with ",Object(o.b)("inlineCode",{parentName:"p"},"Animated")," API to help build complex gestures in the UI. The following example contains an animated ",Object(o.b)("inlineCode",{parentName:"p"},"View")," component which can be dragged freely across the screen"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import React, { useRef } from 'react';\nimport { Animated, View, StyleSheet, PanResponder, Text } from 'react-native';\n\nconst App = () => {\n  const pan = useRef(new Animated.ValueXY()).current;\n\n  const panResponder = useRef(\n    PanResponder.create({\n      onMoveShouldSetPanResponder: () => true,\n      onPanResponderGrant: () => {\n        pan.setOffset({\n          x: pan.x._value,\n          y: pan.y._value,\n        });\n      },\n      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),\n      onPanResponderRelease: () => {\n        pan.flattenOffset();\n      },\n    })\n  ).current;\n\n  return (\n    <View style={styles.container}>\n      <Text style={styles.titleText}>Drag this box!</Text>\n      <Animated.View\n        style={{\n          transform: [{ translateX: pan.x }, { translateY: pan.y }],\n        }}\n        {...panResponder.panHandlers}>\n        <View style={styles.box} />\n      </Animated.View>\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  titleText: {\n    fontSize: 14,\n    lineHeight: 24,\n    fontWeight: 'bold',\n  },\n  box: {\n    height: 150,\n    width: 150,\n    backgroundColor: 'blue',\n    borderRadius: 5,\n  },\n});\n\nexport default App;\n")),Object(o.b)("p",null,"Try the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/master/packages/rn-tester/js/examples/PanResponder/PanResponderExample.js"},"PanResponder example in RNTester"),"."),Object(o.b)("hr",null),Object(o.b)("h1",{id:"reference"},"Reference"),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"create"},Object(o.b)("inlineCode",{parentName:"h3"},"create()")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"static create(config)\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters:")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Name"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"config ",Object(o.b)("strong",{parentName:"td"},"(Required)")),Object(o.b)("td",{parentName:"tr",align:null},"object"),Object(o.b)("td",{parentName:"tr",align:null},"Refer below")))),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"config")," object provides enhanced versions of all of the responder callbacks that provide not only the ",Object(o.b)("a",{parentName:"p",href:"/versions/unversioned/react-native/pressevent/"},Object(o.b)("inlineCode",{parentName:"a"},"PressEvent")),", but also the ",Object(o.b)("inlineCode",{parentName:"p"},"PanResponder")," gesture state, by replacing the word ",Object(o.b)("inlineCode",{parentName:"p"},"Responder")," with ",Object(o.b)("inlineCode",{parentName:"p"},"PanResponder")," in each of the typical ",Object(o.b)("inlineCode",{parentName:"p"},"onResponder*")," callbacks. For example, the ",Object(o.b)("inlineCode",{parentName:"p"},"config")," object would look like:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onMoveShouldSetPanResponder: (e, gestureState) => {...}")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onMoveShouldSetPanResponderCapture: (e, gestureState) => {...}")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onStartShouldSetPanResponder: (e, gestureState) => {...}")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onStartShouldSetPanResponderCapture: (e, gestureState) => {...}")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onPanResponderReject: (e, gestureState) => {...}")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onPanResponderGrant: (e, gestureState) => {...}")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onPanResponderStart: (e, gestureState) => {...}")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onPanResponderEnd: (e, gestureState) => {...}")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onPanResponderRelease: (e, gestureState) => {...}")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onPanResponderMove: (e, gestureState) => {...}")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onPanResponderTerminate: (e, gestureState) => {...}")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onPanResponderTerminationRequest: (e, gestureState) => {...}")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onShouldBlockNativeResponder: (e, gestureState) => {...}"))),Object(o.b)("p",null,"In general, for events that have capture equivalents, we update the gestureState once in the capture phase and can use it in the bubble phase as well."),Object(o.b)("p",null,"Be careful with ",Object(o.b)("inlineCode",{parentName:"p"},"onStartShould*")," callbacks. They only reflect updated ",Object(o.b)("inlineCode",{parentName:"p"},"gestureState")," for start/end events that bubble/capture to the Node. Once the node is the responder, you can rely on every start/end event being processed by the gesture and ",Object(o.b)("inlineCode",{parentName:"p"},"gestureState")," being updated accordingly. (numberActiveTouches) may not be totally accurate unless you are the responder."))}p.isMDXComponent=!0},HALo:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},PF4l:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/unversioned/react-native/panresponder",function(){return n("843m")}])},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},dhJC:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return r}))}},[["PF4l",1,0]]]);