_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[902],{"7ljp":function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var a=t("q1tI"),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),u=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"===typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=u(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),b=a,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||o;return t?r.a.createElement(m,c(c({ref:n},s),{},{components:t})):r.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"===typeof e||a){var o=t.length,i=new Array(o);i[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"===typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},HALo:function(e,n,t){"use strict";function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return a}))},LolJ:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v42.0.0/react-native/interactionmanager",function(){return t("bUKj")}])},Qetd:function(e,n,t){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},bUKj:function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return c})),t.d(n,"headings",(function(){return l})),t.d(n,"default",(function(){return u}));var a=t("HALo"),r=t("dhJC"),o=(t("q1tI"),t("7ljp")),i=["components"],c={id:"interactionmanager",title:"InteractionManager"},l=[{depth:2,type:"text",title:"Example"},{depth:3,type:"text",title:"Basic"},{depth:3,type:"text",title:"Advanced"},{depth:1,type:"text",title:"Reference"},{depth:2,type:"text",title:"Methods"},{depth:3,type:"inlineCode",title:"runAfterInteractions()"},{depth:3,type:"inlineCode",title:"createInteractionHandle()"},{depth:3,type:"inlineCode",title:"clearInteractionHandle()"},{depth:3,type:"inlineCode",title:"setDeadline()"},{depth:2,type:"text",title:"Properties"}],s={meta:c,headings:l};function u(e){var n=e.components,t=Object(r.a)(e,i);return Object(o.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"InteractionManager allows long-running work to be scheduled after any interactions/animations have completed. In particular, this allows JavaScript animations to run smoothly."),Object(o.b)("p",null,"Applications can schedule tasks to run after interactions with the following:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"InteractionManager.runAfterInteractions(() => {\n  // ...long-running synchronous task...\n});\n")),Object(o.b)("p",null,"Compare this to other scheduling alternatives:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"requestAnimationFrame(): for code that animates a view over time."),Object(o.b)("li",{parentName:"ul"},"setImmediate/setTimeout(): run code later, note this may delay animations."),Object(o.b)("li",{parentName:"ul"},"runAfterInteractions(): run code later, without delaying active animations.")),Object(o.b)("p",null,"The touch handling system considers one or more active touches to be an 'interaction' and will delay ",Object(o.b)("inlineCode",{parentName:"p"},"runAfterInteractions()")," callbacks until all touches have ended or been cancelled."),Object(o.b)("p",null,"InteractionManager also allows applications to register animations by creating an interaction 'handle' on animation start, and clearing it upon completion:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"var handle = InteractionManager.createInteractionHandle();\n// run animation... (`runAfterInteractions` tasks are queued)\n// later, on animation completion:\nInteractionManager.clearInteractionHandle(handle);\n// queued tasks run if all handles were cleared\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"runAfterInteractions")," takes either a plain callback function, or a ",Object(o.b)("inlineCode",{parentName:"p"},"PromiseTask")," object with a ",Object(o.b)("inlineCode",{parentName:"p"},"gen")," method that returns a ",Object(o.b)("inlineCode",{parentName:"p"},"Promise"),". If a ",Object(o.b)("inlineCode",{parentName:"p"},"PromiseTask")," is supplied, then it is fully resolved (including asynchronous dependencies that also schedule more tasks via ",Object(o.b)("inlineCode",{parentName:"p"},"runAfterInteractions"),") before starting on the next task that might have been queued up synchronously earlier."),Object(o.b)("p",null,"By default, queued tasks are executed together in a loop in one ",Object(o.b)("inlineCode",{parentName:"p"},"setImmediate")," batch. If ",Object(o.b)("inlineCode",{parentName:"p"},"setDeadline")," is called with a positive number, then tasks will only be executed until the deadline (in terms of js event loop run time) approaches, at which point execution will yield via setTimeout, allowing events such as touches to start interactions and block queued tasks from executing, making apps more responsive."),Object(o.b)("hr",null),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("h3",{id:"basic"},"Basic"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import React, { useState, useEffect } from 'react';\nimport {\n  Alert,\n  Animated,\n  InteractionManager,\n  Platform,\n  StyleSheet,\n  Text,\n  View,\n} from 'react-native';\n\nconst instructions = Platform.select({\n  ios: 'Press Cmd+R to reload,\\\\n' + 'Cmd+D or shake for dev menu',\n  android:\n    'Double tap R on your keyboard to reload,\\\\n' + 'Shake or press menu button for dev menu',\n});\n\nconst useMount = func => useEffect(() => func(), []);\n\nconst useFadeIn = (duration = 5000) => {\n  const [opacity] = useState(new Animated.Value(0));\n\n  // Running the animation when the component is mounted\n  useMount(() => {\n    // Animated.timing() create a interaction handle by default, if you want to disabled that\n    // behaviour you can set isInteraction to false to disabled that.\n    Animated.timing(opacity, {\n      toValue: 1,\n      duration,\n    }).start();\n  });\n\n  return opacity;\n};\n\nconst Ball = ({ onShown }) => {\n  const opacity = useFadeIn();\n\n  // Running a method after the animation\n  useMount(() => {\n    const interactionPromise = InteractionManager.runAfterInteractions(() => onShown());\n    return () => interactionPromise.cancel();\n  });\n\n  return <Animated.View style={[styles.ball, { opacity }]} />;\n};\n\nconst App = () => {\n  return (\n    <View style={styles.container}>\n      <Text>{instructions}</Text>\n      <Ball onShown={() => Alert.alert('Animation is done')} />\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },\n  ball: {\n    width: 100,\n    height: 100,\n    backgroundColor: 'salmon',\n    borderRadius: 100,\n  },\n});\n\nexport default App;\n")),Object(o.b)("h3",{id:"advanced"},"Advanced"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import React, { useEffect } from 'react';\nimport {\n  Alert,\n  Animated,\n  InteractionManager,\n  Platform,\n  StyleSheet,\n  Text,\n  View,\n} from 'react-native';\n\nconst instructions = Platform.select({\n  ios: 'Press Cmd+R to reload,\\\\n' + 'Cmd+D or shake for dev menu',\n  android:\n    'Double tap R on your keyboard to reload,\\\\n' + 'Shake or press menu button for dev menu',\n});\n\nconst useMount = func => useEffect(() => func(), []);\n\n// You can create a custom interaction/animation and add\n// support for InteractionManager\nconst useCustomInteraction = (timeLocked = 2000) => {\n  useMount(() => {\n    const handle = InteractionManager.createInteractionHandle();\n\n    setTimeout(() => InteractionManager.clearInteractionHandle(handle), timeLocked);\n\n    return () => InteractionManager.clearInteractionHandle(handle);\n  });\n};\n\nconst Ball = ({ onInteractionIsDone }) => {\n  useCustomInteraction();\n\n  // Running a method after the interaction\n  useMount(() => {\n    InteractionManager.runAfterInteractions(() => onInteractionIsDone());\n  });\n\n  return <Animated.View style={[styles.ball]} />;\n};\n\nconst App = () => {\n  return (\n    <View style={styles.container}>\n      <Text>{instructions}</Text>\n      <Ball onInteractionIsDone={() => Alert.alert('Interaction is done')} />\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },\n  ball: {\n    width: 100,\n    height: 100,\n    backgroundColor: 'salmon',\n    borderRadius: 100,\n  },\n});\n\nexport default App;\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note"),": ",Object(o.b)("inlineCode",{parentName:"p"},"InteractionManager.runAfterInteractions()")," is not working properly on web. It triggers immediately without waiting until the interaction is finished.")),Object(o.b)("h1",{id:"reference"},"Reference"),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"runafterinteractions"},Object(o.b)("inlineCode",{parentName:"h3"},"runAfterInteractions()")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"static runAfterInteractions(task)\n")),Object(o.b)("p",null,'Schedule a function to run after all interactions have completed. Returns a cancellable "promise".'),Object(o.b)("hr",null),Object(o.b)("h3",{id:"createinteractionhandle"},Object(o.b)("inlineCode",{parentName:"h3"},"createInteractionHandle()")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"static createInteractionHandle()\n")),Object(o.b)("p",null,"Notify manager that an interaction has started."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"clearinteractionhandle"},Object(o.b)("inlineCode",{parentName:"h3"},"clearInteractionHandle()")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"static clearInteractionHandle(handle)\n")),Object(o.b)("p",null,"Notify manager that an interaction has completed."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"setdeadline"},Object(o.b)("inlineCode",{parentName:"h3"},"setDeadline()")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"static setDeadline(deadline)\n")),Object(o.b)("p",null,"A positive number will use setTimeout to schedule any tasks after the eventLoopRunningTime hits the deadline value, otherwise all tasks will be executed in one setImmediate batch (default)."),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("hr",null))}u.isMDXComponent=!0},dhJC:function(e,n,t){"use strict";function a(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t.d(n,"a",(function(){return a}))}},[["LolJ",1,0]]]);