_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[1419],{"7hdQ":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return l})),n.d(t,"headings",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n("HALo"),a=n("dhJC"),i=(n("q1tI"),n("7ljp")),o=["components"],l={id:"vibration",title:"Vibration"},b=[{depth:2,type:"text",title:"Example"},{depth:1,type:"text",title:"Reference"},{depth:2,type:"text",title:"Methods"},{depth:3,type:"inlineCode",title:"cancel()"},{depth:3,type:"inlineCode",title:"vibrate()"}],c={meta:l,headings:b};function p(e){var t=e.components,n=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Vibrates the device."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { Button, Platform, Text, Vibration, View, SafeAreaView, StyleSheet } from 'react-native';\n\nconst Separator = () => {\n  return <View style={Platform.OS === 'android' ? styles.separator : null} />;\n};\n\nconst App = () => {\n  const ONE_SECOND_IN_MS = 1000;\n\n  const PATTERN = [1 * ONE_SECOND_IN_MS, 2 * ONE_SECOND_IN_MS, 3 * ONE_SECOND_IN_MS];\n\n  const PATTERN_DESC =\n    Platform.OS === 'android'\n      ? 'wait 1s, vibrate 2s, wait 3s'\n      : 'wait 1s, vibrate, wait 2s, vibrate, wait 3s';\n\n  return (\n    <SafeAreaView style={styles.container}>\n      <Text style={[styles.header, styles.paragraph]}>Vibration API</Text>\n      <View>\n        <Button title=\"Vibrate once\" onPress={() => Vibration.vibrate()} />\n      </View>\n      <Separator />\n      {Platform.OS == 'android'\n        ? [\n            <View>\n              <Button\n                title=\"Vibrate for 10 seconds\"\n                onPress={() => Vibration.vibrate(10 * ONE_SECOND_IN_MS)}\n              />\n            </View>,\n            <Separator />,\n          ]\n        : null}\n      <Text style={styles.paragraph}>Pattern: {PATTERN_DESC}</Text>\n      <Button title=\"Vibrate with pattern\" onPress={() => Vibration.vibrate(PATTERN)} />\n      <Separator />\n      <Button\n        title=\"Vibrate with pattern until cancelled\"\n        onPress={() => Vibration.vibrate(PATTERN, true)}\n      />\n      <Separator />\n      <Button title=\"Stop vibration pattern\" onPress={() => Vibration.cancel()} color=\"#FF0000\" />\n    </SafeAreaView>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    paddingTop: 44,\n    padding: 8,\n  },\n  header: {\n    fontSize: 18,\n    fontWeight: 'bold',\n    textAlign: 'center',\n  },\n  paragraph: {\n    margin: 24,\n    textAlign: 'center',\n  },\n  separator: {\n    marginVertical: 8,\n    borderBottomColor: '#737373',\n    borderBottomWidth: StyleSheet.hairlineWidth,\n  },\n});\n\nexport default App;\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Android apps should request the ",Object(i.b)("inlineCode",{parentName:"p"},"android.permission.VIBRATE")," permission by adding ",Object(i.b)("inlineCode",{parentName:"p"},'<uses-permission android:name="android.permission.VIBRATE"/>')," to ",Object(i.b)("strong",{parentName:"p"},"AndroidManifest.xml"),".")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The Vibration API is implemented as a ",Object(i.b)("inlineCode",{parentName:"p"},"AudioServicesPlaySystemSound(kSystemSoundID_Vibrate)")," call on iOS.")),Object(i.b)("hr",null),Object(i.b)("h1",{id:"reference"},"Reference"),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"cancel"},Object(i.b)("inlineCode",{parentName:"h3"},"cancel()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"Vibration.cancel();\n")),Object(i.b)("p",null,"Call this to stop vibrating after having invoked ",Object(i.b)("inlineCode",{parentName:"p"},"vibrate()")," with repetition enabled."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"vibrate"},Object(i.b)("inlineCode",{parentName:"h3"},"vibrate()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"Vibration.vibrate(pattern, repeat);\n")),Object(i.b)("p",null,"Triggers a vibration with a fixed duration."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"On Android,")," the vibration duration defaults to 400 milliseconds, and an arbitrary vibration duration can be specified by passing a number as the value for the ",Object(i.b)("inlineCode",{parentName:"p"},"pattern")," argument. ",Object(i.b)("strong",{parentName:"p"},"On iOS,")," the vibration duration is fixed at roughly 400 milliseconds."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"vibrate()")," method can take a ",Object(i.b)("inlineCode",{parentName:"p"},"pattern")," argument with an array of numbers that represent time in milliseconds. You may set ",Object(i.b)("inlineCode",{parentName:"p"},"repeat")," to true to run through the vibration pattern in a loop until ",Object(i.b)("inlineCode",{parentName:"p"},"cancel()")," is called."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"On Android,")," the odd indices of the ",Object(i.b)("inlineCode",{parentName:"p"},"pattern")," array represent the vibration duration, while the even ones represent the separation time. ",Object(i.b)("strong",{parentName:"p"},"On iOS,")," the numbers in the ",Object(i.b)("inlineCode",{parentName:"p"},"pattern")," array represent the separation time, as the vibration duration is fixed."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters:")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Default"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"pattern"),Object(i.b)("td",{parentName:"tr",align:null},"number ",Object(i.b)("strong",{parentName:"td"},"(Android)")," ",Object(i.b)("hr",null),"array of numbers"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"400")),Object(i.b)("td",{parentName:"tr",align:null},"Vibration duration in milliseconds.",Object(i.b)("hr",null),"Vibration pattern as an array of numbers in milliseconds.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"repeat"),Object(i.b)("td",{parentName:"tr",align:null},"boolean"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"false")),Object(i.b)("td",{parentName:"tr",align:null},"Repeat vibration pattern until ",Object(i.b)("inlineCode",{parentName:"td"},"cancel()"),".")))))}p.isMDXComponent=!0},"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n("q1tI"),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"===typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,m=s["".concat(o,".").concat(d)]||s[d]||u[d]||i;return n?a.a.createElement(m,l(l({ref:t},c),{},{components:n})):a.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"===typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},HALo:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},bj5u:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v45.0.0/react-native/vibration",function(){return n("7hdQ")}])},dhJC:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return r}))}},[["bj5u",1,0]]]);