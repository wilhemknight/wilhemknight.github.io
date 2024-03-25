_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[407],{"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n("q1tI"),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=s(n),d=a,h=b["".concat(p,".").concat(d)]||b[d]||u[d]||i;return n?r.a.createElement(h,o(o({ref:t},l),{},{components:n})):r.a.createElement(h,o({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var i=n.length,p=new Array(i);p[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"===typeof e?e:a,p[1]=o;for(var l=2;l<i;l++)p[l]=n[l];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},HALo:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},NonU:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/unversioned/react-native/appstate",function(){return n("OHLM")}])},OHLM:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return o})),n.d(t,"headings",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n("HALo"),r=n("dhJC"),i=(n("q1tI"),n("7ljp")),p=["components"],o={id:"appstate",title:"AppState"},c=[{depth:3,type:"text",title:"App States"},{depth:2,type:"text",title:"Basic Usage"},{depth:1,type:"text",title:"Reference"},{depth:2,type:"text",title:"Events"},{depth:3,type:"inlineCode",title:"change"},{depth:3,type:"inlineCode",title:"memoryWarning"},{depth:3,type:"inlineCode",title:"focus   "},{depth:3,type:"inlineCode",title:"blur   "},{depth:2,type:"text",title:"Methods"},{depth:3,type:"inlineCode",title:"addEventListener()"},{depth:3,type:"inlineCode",title:"removeEventListener()"},{depth:2,type:"text",title:"Properties"},{depth:3,type:"inlineCode",title:"currentState"}],l={meta:o,headings:c};function s(e){var t=e.components,n=Object(r.a)(e,p);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"AppState")," can tell you if the app is in the foreground or background, and notify you when the state changes."),Object(i.b)("p",null,"AppState is frequently used to determine the intent and proper behavior when handling push notifications."),Object(i.b)("h3",{id:"app-states"},"App States"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"active")," - The app is running in the foreground"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"background")," - The app is running in the background. The user is either:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"in another app"),Object(i.b)("li",{parentName:"ul"},"on the home screen"),Object(i.b)("li",{parentName:"ul"},"[Android]"," on another ",Object(i.b)("inlineCode",{parentName:"li"},"Activity")," (even if it was launched by your app)"))),Object(i.b)("li",{parentName:"ul"},"[iOS]"," ",Object(i.b)("inlineCode",{parentName:"li"},"inactive")," - This is a state that occurs when transitioning between foreground & background, and during periods of inactivity such as entering the Multitasking view or in the event of an incoming call")),Object(i.b)("p",null,"For more information, see ",Object(i.b)("a",{parentName:"p",href:"https://developer.apple.com/documentation/uikit/app_and_scenes/managing_your_app_s_life_cycle"},"Apple's documentation")),Object(i.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(i.b)("p",null,"To see the current state, you can check ",Object(i.b)("inlineCode",{parentName:"p"},"AppState.currentState"),", which will be kept up-to-date. However, ",Object(i.b)("inlineCode",{parentName:"p"},"currentState")," will be null at launch while ",Object(i.b)("inlineCode",{parentName:"p"},"AppState")," retrieves it over the bridge."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import React, { useRef, useState, useEffect } from 'react';\nimport { AppState, StyleSheet, Text, View } from 'react-native';\n\nconst AppStateExample = () => {\n  const appState = useRef(AppState.currentState);\n  const [appStateVisible, setAppStateVisible] = useState(appState.current);\n\n  useEffect(() => {\n    const subscription = AppState.addEventListener(\"change\", _handleAppStateChange);\n    return () => {\n      subscription.remove();\n    };\n  }, []);\n\n  const _handleAppStateChange = nextAppState => {\n    if (appState.current.match(/inactive|background/) && nextAppState === 'active') {\n      console.log('App has come to the foreground!');\n    }\n\n    appState.current = nextAppState;\n    setAppStateVisible(appState.current);\n    console.log('AppState', appState.current);\n  };\n\n  return (\n    <View style={styles.container}>\n      <Text>Current state is: {appStateVisible}</Text>\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center',\n  },\n});\n\nexport default AppStateExample;\n")),Object(i.b)("p",null,"If you don't want to see the AppState update from ",Object(i.b)("inlineCode",{parentName:"p"},"active")," to ",Object(i.b)("inlineCode",{parentName:"p"},"inactive")," on iOS you can remove the state variable and use the ",Object(i.b)("inlineCode",{parentName:"p"},"appState.current")," value."),Object(i.b)("p",null,'This example will only ever appear to say "Current state is: active" because the app is only visible to the user when in the ',Object(i.b)("inlineCode",{parentName:"p"},"active")," state, and the null state will happen only momentarily. If you want to experiment with the code we recommend to use your own device instead of embedded preview."),Object(i.b)("hr",null),Object(i.b)("h1",{id:"reference"},"Reference"),Object(i.b)("h2",{id:"events"},"Events"),Object(i.b)("h3",{id:"change"},Object(i.b)("inlineCode",{parentName:"h3"},"change")),Object(i.b)("p",null,"This event is received when the app state has changed. The listener is called with one of ",Object(i.b)("a",{parentName:"p",href:"/versions/unversioned/react-native/appstate/#app-states"},"the current app state values"),"."),Object(i.b)("h3",{id:"memorywarning"},Object(i.b)("inlineCode",{parentName:"h3"},"memoryWarning")),Object(i.b)("p",null,"This event is used in the need of throwing memory warning or releasing it."),Object(i.b)("h3",{id:"focus-android"},Object(i.b)("inlineCode",{parentName:"h3"},"focus")," ",Object(i.b)("strong",{parentName:"h3"},"(Android)")),Object(i.b)("p",null,"Received when the app gains focus (the user is interacting with the app)."),Object(i.b)("h3",{id:"blur-android"},Object(i.b)("inlineCode",{parentName:"h3"},"blur")," ",Object(i.b)("strong",{parentName:"h3"},"(Android)")),Object(i.b)("p",null,"Received when the user is not actively interacting with the app. Useful in situations when the user pulls down the ",Object(i.b)("a",{parentName:"p",href:"https://developer.android.com/guide/topics/ui/notifiers/notifications#bar-and-drawer"},"notification drawer"),". ",Object(i.b)("inlineCode",{parentName:"p"},"AppState")," won't change but the ",Object(i.b)("inlineCode",{parentName:"p"},"blur")," event will get fired."),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"addeventlistener"},Object(i.b)("inlineCode",{parentName:"h3"},"addEventListener()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"addEventListener(type, handler);\n")),Object(i.b)("p",null,"Add a handler to AppState changes by listening to the ",Object(i.b)("inlineCode",{parentName:"p"},"change")," event type and providing the handler"),Object(i.b)("p",null,"TODO: now that AppState is a subclass of NativeEventEmitter, we could deprecate ",Object(i.b)("inlineCode",{parentName:"p"},"addEventListener")," and ",Object(i.b)("inlineCode",{parentName:"p"},"removeEventListener")," and use ",Object(i.b)("inlineCode",{parentName:"p"},"addListener")," and ",Object(i.b)("inlineCode",{parentName:"p"},"listener.remove()")," directly. That will be a breaking change though, as both the method and event names are different (addListener events are currently required to be globally unique)."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"removeeventlistener"},Object(i.b)("inlineCode",{parentName:"h3"},"removeEventListener()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"removeEventListener(type, handler);\n")),Object(i.b)("p",null,"Remove a handler by passing the ",Object(i.b)("inlineCode",{parentName:"p"},"change")," event type and the handler"),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"currentstate"},Object(i.b)("inlineCode",{parentName:"h3"},"currentState")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"AppState.currentState;\n")))}s.isMDXComponent=!0},Qetd:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},dhJC:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,"a",(function(){return a}))}},[["NonU",1,0]]]);