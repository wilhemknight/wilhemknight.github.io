_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[1385],{"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n("q1tI"),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"===typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,m=p["".concat(l,".").concat(u)]||p[u]||s[u]||i;return n?r.a.createElement(m,b(b({ref:t},c),{},{components:n})):r.a.createElement(m,b({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"===typeof e?e:a,l[1]=b;for(var c=2;c<i;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},BBUM:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return b})),n.d(t,"headings",(function(){return o})),n.d(t,"default",(function(){return d}));var a=n("HALo"),r=n("dhJC"),i=(n("q1tI"),n("7ljp")),l=["components"],b={id:"keyboard",title:"Keyboard"},o=[{depth:3,type:"text",title:"Usage"},{depth:1,type:"text",title:"Reference"},{depth:2,type:"text",title:"Methods"},{depth:3,type:"inlineCode",title:"addListener()"},{depth:3,type:"inlineCode",title:"removeListener()"},{depth:3,type:"inlineCode",title:"removeAllListeners()"},{depth:3,type:"inlineCode",title:"dismiss()"},{depth:3,type:"inlineCode",title:"scheduleLayoutAnimation"}],c={meta:b,headings:o};function d(e){var t=e.components,n=Object(r.a)(e,l);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Keyboard")," module to control keyboard events."),Object(i.b)("h3",{id:"usage"},"Usage"),Object(i.b)("p",null,"The Keyboard module allows you to listen for native events and react to them, as well as make changes to the keyboard, like dismissing it."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import React, { useState, useEffect } from 'react';\nimport { Keyboard, Text, TextInput, StyleSheet, View } from 'react-native';\n\nconst Example = () => {\n  useEffect(() => {\n    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);\n    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);\n\n    // cleanup function\n    return () => {\n      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);\n      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);\n    };\n  }, []);\n\n  const [keyboardStatus, setKeyboardStatus] = useState(undefined);\n  const _keyboardDidShow = () => setKeyboardStatus('Keyboard Shown');\n  const _keyboardDidHide = () => setKeyboardStatus('Keyboard Hidden');\n\n  return (\n    <View style={style.container}>\n      <TextInput style={style.input} placeholder=\"Click here\u2026\" onSubmitEditing={Keyboard.dismiss} />\n      <Text style={style.status}>{keyboardStatus}</Text>\n    </View>\n  );\n};\n\nconst style = StyleSheet.create({\n  container: {\n    flex: 1,\n    padding: 36,\n  },\n  input: {\n    padding: 10,\n    borderWidth: 0.5,\n    borderRadius: 4,\n  },\n  status: {\n    padding: 10,\n    textAlign: 'center',\n  },\n});\n\nexport default Example;\n")),Object(i.b)("hr",null),Object(i.b)("h1",{id:"reference"},"Reference"),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"addlistener"},Object(i.b)("inlineCode",{parentName:"h3"},"addListener()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"static addListener(eventName, callback)\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"addListener")," function connects a JavaScript function to an identified native keyboard notification event."),Object(i.b)("p",null,"This function then returns the reference to the listener."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters:")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"eventName ",Object(i.b)("strong",{parentName:"td"},"(Required)")),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"The string that identifies the event you're listening for. See the list below.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"callback ",Object(i.b)("strong",{parentName:"td"},"(Required)")),Object(i.b)("td",{parentName:"tr",align:null},"function"),Object(i.b)("td",{parentName:"tr",align:null},"The function to be called when the event fires")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"eventName"))),Object(i.b)("p",null,"This can be any of the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"keyboardWillShow")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"keyboardDidShow")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"keyboardWillHide")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"keyboardDidHide")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"keyboardWillChangeFrame")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"keyboardDidChangeFrame"))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note that if you set ",Object(i.b)("inlineCode",{parentName:"p"},"android:windowSoftInputMode")," to ",Object(i.b)("inlineCode",{parentName:"p"},"adjustResize")," or ",Object(i.b)("inlineCode",{parentName:"p"},"adjustPan"),", only ",Object(i.b)("inlineCode",{parentName:"p"},"keyboardDidShow")," and ",Object(i.b)("inlineCode",{parentName:"p"},"keyboardDidHide")," events will be available on Android. If you set ",Object(i.b)("inlineCode",{parentName:"p"},"android:windowSoftInputMode")," to ",Object(i.b)("inlineCode",{parentName:"p"},"adjustNothing"),", no events will be available on Android. ",Object(i.b)("inlineCode",{parentName:"p"},"keyboardWillShow")," as well as ",Object(i.b)("inlineCode",{parentName:"p"},"keyboardWillHide")," are generally not available on Android since there is no native corresponding event.")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"removelistener"},Object(i.b)("inlineCode",{parentName:"h3"},"removeListener()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"static removeListener(eventName, callback)\n")),Object(i.b)("p",null,"Removes a specific listener."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters:")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Required"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"eventName"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"Yes"),Object(i.b)("td",{parentName:"tr",align:null},"The ",Object(i.b)("inlineCode",{parentName:"td"},"nativeEvent")," is the string that identifies the event you're listening for")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"callback"),Object(i.b)("td",{parentName:"tr",align:null},"function"),Object(i.b)("td",{parentName:"tr",align:null},"Yes"),Object(i.b)("td",{parentName:"tr",align:null},"The function to be called when the event fires")))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"removealllisteners"},Object(i.b)("inlineCode",{parentName:"h3"},"removeAllListeners()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"static removeAllListeners(eventName)\n")),Object(i.b)("p",null,"Removes all listeners for a specific event type."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters:")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Required"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"eventType"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"Yes"),Object(i.b)("td",{parentName:"tr",align:null},"The native event string listeners are watching which will be removed")))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"dismiss"},Object(i.b)("inlineCode",{parentName:"h3"},"dismiss()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"static dismiss()\n")),Object(i.b)("p",null,"Dismisses the active keyboard and removes focus."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"schedulelayoutanimation"},Object(i.b)("inlineCode",{parentName:"h3"},"scheduleLayoutAnimation")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"static scheduleLayoutAnimation(event)\n")),Object(i.b)("p",null,"Useful for syncing TextInput (or other keyboard accessory view) size of position changes with keyboard movements."))}d.isMDXComponent=!0},HALo:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},Qetd:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},dhJC:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,"a",(function(){return a}))},qcLL:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v45.0.0/react-native/keyboard",function(){return n("BBUM")}])}},[["qcLL",1,0]]]);