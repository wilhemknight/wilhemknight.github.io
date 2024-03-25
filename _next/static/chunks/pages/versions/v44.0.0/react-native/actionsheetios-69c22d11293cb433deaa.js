_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[1203],{"6xQW":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v44.0.0/react-native/actionsheetios",function(){return n("zrvp")}])},"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n("q1tI"),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"===typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,h=p["".concat(a,".").concat(d)]||p[d]||u[d]||o;return n?i.a.createElement(h,c(c({ref:t},s),{},{components:n})):i.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"===typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},HALo:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},dhJC:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}n.d(t,"a",(function(){return r}))},zrvp:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return c})),n.d(t,"headings",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n("HALo"),i=n("dhJC"),o=(n("q1tI"),n("7ljp")),a=["components"],c={id:"actionsheetios",title:"ActionSheetIOS"},l=[{depth:2,type:"text",title:"Example"},{depth:1,type:"text",title:"Reference"},{depth:2,type:"text",title:"Methods"},{depth:3,type:"inlineCode",title:"showActionSheetWithOptions()"},{depth:3,type:"inlineCode",title:"showShareActionSheetWithOptions()"}],s={meta:c,headings:l};function b(e){var t=e.components,n=Object(i.a)(e,a);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Displays native to iOS ",Object(o.b)("a",{parentName:"p",href:"https://developer.apple.com/design/human-interface-guidelines/ios/views/action-sheets/"},"Action Sheet")," component."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import React, { useState } from 'react';\nimport { ActionSheetIOS, Button, StyleSheet, Text, View } from 'react-native';\n\nconst App = () => {\n  const [result, setResult] = useState('\ud83d\udd2e');\n\n  const onPress = () =>\n    ActionSheetIOS.showActionSheetWithOptions(\n      {\n        options: ['Cancel', 'Generate number', 'Reset'],\n        destructiveButtonIndex: 2,\n        cancelButtonIndex: 0,\n        userInterfaceStyle: 'dark',\n      },\n      buttonIndex => {\n        if (buttonIndex === 0) {\n          // cancel action\n        } else if (buttonIndex === 1) {\n          setResult(Math.floor(Math.random() * 100) + 1);\n        } else if (buttonIndex === 2) {\n          setResult('\ud83d\udd2e');\n        }\n      }\n    );\n\n  return (\n    <View style={styles.container}>\n      <Text style={styles.result}>{result}</Text>\n      <Button onPress={onPress} title=\"Show Action Sheet\" />\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n  },\n  result: {\n    fontSize: 64,\n    textAlign: 'center',\n  },\n});\n\nexport default App;\n")),Object(o.b)("h1",{id:"reference"},"Reference"),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"showactionsheetwithoptions"},Object(o.b)("inlineCode",{parentName:"h3"},"showActionSheetWithOptions()")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"static showActionSheetWithOptions(options, callback)\n")),Object(o.b)("p",null,"Display an iOS action sheet. The ",Object(o.b)("inlineCode",{parentName:"p"},"options")," object must contain one or more of:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"options")," (array of strings) - a list of button titles (required)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"cancelButtonIndex")," (int) - index of cancel button in ",Object(o.b)("inlineCode",{parentName:"li"},"options")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"destructiveButtonIndex")," (int or array of ints) - indices of destructive buttons in ",Object(o.b)("inlineCode",{parentName:"li"},"options")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"title")," (string) - a title to show above the action sheet"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"message")," (string) - a message to show below the title"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"anchor")," (number) - the node to which the action sheet should be anchored (used for iPad)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"tintColor")," (string) - the ",Object(o.b)("a",{parentName:"li",href:"https://reactnative.dev/docs/0.64/colors"},"color")," used for non-destructive button titles"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"disabledButtonIndices")," (array of numbers) - a list of button indices which should be disabled"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"userInterfaceStyle")," (string) - the interface style used for the action sheet, can be set to ",Object(o.b)("inlineCode",{parentName:"li"},"light")," or ",Object(o.b)("inlineCode",{parentName:"li"},"dark"),", otherwise the default system style will be used")),Object(o.b)("p",null,"The 'callback' function takes one parameter, the zero-based index of the selected item."),Object(o.b)("p",null,"Minimal example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"ActionSheetIOS.showActionSheetWithOptions(\n  {\n    options: ['Cancel', 'Remove'],\n    destructiveButtonIndex: 1,\n    cancelButtonIndex: 0,\n  },\n  buttonIndex => {\n    if (buttonIndex === 1) {\n      /* destructive action */\n    }\n  }\n);\n")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"showshareactionsheetwithoptions"},Object(o.b)("inlineCode",{parentName:"h3"},"showShareActionSheetWithOptions()")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"static showShareActionSheetWithOptions(options, failureCallback, successCallback)\n")),Object(o.b)("p",null,"Display the iOS share sheet. The ",Object(o.b)("inlineCode",{parentName:"p"},"options")," object should contain one or both of ",Object(o.b)("inlineCode",{parentName:"p"},"message")," and ",Object(o.b)("inlineCode",{parentName:"p"},"url")," and can additionally have a ",Object(o.b)("inlineCode",{parentName:"p"},"subject")," or ",Object(o.b)("inlineCode",{parentName:"p"},"excludedActivityTypes"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"url")," (string) - a URL to share"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"message")," (string) - a message to share"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"subject")," (string) - a subject for the message"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"excludedActivityTypes")," (array) - the activities to exclude from the ActionSheet")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:")," If ",Object(o.b)("inlineCode",{parentName:"p"},"url")," points to a local file, or is a base64-encoded uri, the file it points to will be loaded and shared directly. In this way, you can share images, videos, PDF files, etc. If ",Object(o.b)("inlineCode",{parentName:"p"},"url")," points to a remote file or address it must conform to URL format as described in ",Object(o.b)("a",{parentName:"p",href:"https://www.ietf.org/rfc/rfc2396.txt"},"RFC 2396"),". For example, a web URL without a proper protocol (HTTP/HTTPS) will not be shared.")),Object(o.b)("p",null,"The 'failureCallback' function takes one parameter, an error object. The only property defined on this object is an optional ",Object(o.b)("inlineCode",{parentName:"p"},"stack")," property of type ",Object(o.b)("inlineCode",{parentName:"p"},"string"),"."),Object(o.b)("p",null,"The 'successCallback' function takes two parameters:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"a boolean value signifying success or failure"),Object(o.b)("li",{parentName:"ul"},"a string that, in the case of success, indicates the method of sharing")))}b.isMDXComponent=!0}},[["6xQW",1,0]]]);