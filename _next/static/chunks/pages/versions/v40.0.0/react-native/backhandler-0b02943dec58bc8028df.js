_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[570],{"6kc9":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return i})),n.d(t,"headings",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n("HALo"),a=n("dhJC"),o=(n("q1tI"),n("7ljp")),c=["components"],i={id:"backhandler",title:"BackHandler"},l=[{depth:2,type:"text",title:"Pattern"},{depth:2,type:"text",title:"Example"},{depth:2,type:"text",title:"Usage with React Navigation"},{depth:2,type:"text",title:"Backhandler hook"},{depth:1,type:"text",title:"Reference"},{depth:2,type:"text",title:"Methods"},{depth:3,type:"inlineCode",title:"addEventListener()"},{depth:3,type:"inlineCode",title:"exitApp()"},{depth:3,type:"inlineCode",title:"removeEventListener()"}],s={meta:i,headings:l};function u(e){var t=e.components,n=Object(a.a)(e,c);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Backhandler API detects hardware button presses for back navigation, lets you register event listeners for the system's back action, and lets you control how your application responds. It is Android-only."),Object(o.b)("p",null,"The event subscriptions are called in reverse order (i.e. the last registered subscription is called first)."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"If one subscription returns true,")," then subscriptions registered earlier will not be called."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"If no subscription returns true or none are registered,")," it programmatically invokes the default back button functionality to exit the app.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Warning for modal users:")," If your app shows an opened ",Object(o.b)("inlineCode",{parentName:"p"},"Modal"),", ",Object(o.b)("inlineCode",{parentName:"p"},"BackHandler")," will not publish any events (",Object(o.b)("a",{parentName:"p",href:"/versions/v40.0.0/react-native/modal/#onrequestclose"},"see ",Object(o.b)("inlineCode",{parentName:"a"},"Modal")," docs"),").")),Object(o.b)("h2",{id:"pattern"},"Pattern"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"BackHandler.addEventListener('hardwareBackPress', function() {\n  /**\n   * this.onMainScreen and this.goBack are just examples,\n   * you need to use your own implementation here.\n   *\n   * Typically you would use the navigator here to go to the last state.\n   */\n  if (!this.onMainScreen()) {\n    this.goBack();\n\n    /**\n     * When true is returned the event will not be bubbled up\n     * & no other back action will execute\n     */\n    return true;\n  }\n\n  /**\n   * Returning false will let the event to bubble up & let other event listeners\n   * or the system's default back action to be executed.\n   */\n  return false;\n});\n")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"The following example implements a scenario where you confirm if the user wants to exit the app:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import React, { useEffect } from 'react';\nimport { Text, View, StyleSheet, BackHandler, Alert } from 'react-native';\n\nexport default function App() {\n  useEffect(() => {\n    const backAction = () => {\n      Alert.alert('Hold on!', 'Are you sure you want to go back?', [\n        {\n          text: 'Cancel',\n          onPress: () => null,\n          style: 'cancel',\n        },\n        { text: 'YES', onPress: () => BackHandler.exitApp() },\n      ]);\n      return true;\n    };\n\n    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);\n\n    return () => backHandler.remove();\n  }, []);\n\n  return (\n    <View style={styles.container}>\n      <Text style={styles.text}>Click Back button!</Text>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  text: {\n    fontSize: 18,\n    fontWeight: 'bold',\n  },\n});\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"BackHandler.addEventListener")," creates an event listener & returns a ",Object(o.b)("inlineCode",{parentName:"p"},"NativeEventSubscription")," object which should be cleared using ",Object(o.b)("inlineCode",{parentName:"p"},"NativeEventSubscription.remove")," method."),Object(o.b)("p",null,"Additionally ",Object(o.b)("inlineCode",{parentName:"p"},"BackHandler.removeEventListener")," can also be used to clear the event listener. Ensure the callback has the reference to the same function used in the ",Object(o.b)("inlineCode",{parentName:"p"},"addEventListener")," call as shown the following example \ufe63"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import React, { useEffect } from 'react';\nimport { Text, View, StyleSheet, BackHandler, Alert } from 'react-native';\n\nexport default function App() {\n  useEffect(() => {\n    const backAction = () => {\n      Alert.alert('Hold on!', 'Are you sure you want to go back?', [\n        {\n          text: 'Cancel',\n          onPress: () => null,\n          style: 'cancel',\n        },\n        { text: 'YES', onPress: () => BackHandler.exitApp() },\n      ]);\n      return true;\n    };\n\n    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);\n\n    return () => backHandler.remove();\n  }, []);\n\n  return (\n    <View style={styles.container}>\n      <Text style={styles.text}>Click Back button!</Text>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  text: {\n    fontSize: 18,\n    fontWeight: 'bold',\n  },\n});\n")),Object(o.b)("h2",{id:"usage-with-react-navigation"},"Usage with React Navigation"),Object(o.b)("p",null,"If you are using React Navigation to navigate across different screens, you can follow their guide on ",Object(o.b)("a",{parentName:"p",href:"https://reactnavigation.org/docs/custom-android-back-button-handling/"},"Custom Android back button behaviour")),Object(o.b)("h2",{id:"backhandler-hook"},"Backhandler hook"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/react-native-community/hooks#usebackhandler"},"React Native Hooks")," has a nice ",Object(o.b)("inlineCode",{parentName:"p"},"useBackHandler")," hook which will simplify the process of setting up event listeners."),Object(o.b)("hr",null),Object(o.b)("h1",{id:"reference"},"Reference"),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"addeventlistener"},Object(o.b)("inlineCode",{parentName:"h3"},"addEventListener()")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"static addEventListener(eventName, handler)\n")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"exitapp"},Object(o.b)("inlineCode",{parentName:"h3"},"exitApp()")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"static exitApp()\n")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"removeeventlistener"},Object(o.b)("inlineCode",{parentName:"h3"},"removeEventListener()")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"static removeEventListener(eventName, handler)\n")))}u.isMDXComponent=!0},"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n("q1tI"),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,h=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(h,i(i({ref:t},s),{},{components:n})):a.a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"===typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},HALo:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},KH5m:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v40.0.0/react-native/backhandler",function(){return n("6kc9")}])},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},dhJC:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return r}))}},[["KH5m",1,0]]]);