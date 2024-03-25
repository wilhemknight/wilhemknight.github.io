_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[1062],{"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var r=n("q1tI"),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"===typeof e?e(t):b(b({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),s=r,O=d["".concat(i,".").concat(s)]||d[s]||u[s]||o;return n?a.a.createElement(O,b(b({ref:t},c),{},{components:n})):a.a.createElement(O,b({ref:t},c))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var o=n.length,i=new Array(o);i[0]=s;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"===typeof e?e:r,i[1]=b;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},HALo:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},"Y/RE":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v43.0.0/react-native/keyboardavoidingview",function(){return n("frY/")}])},dhJC:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return r}))},"frY/":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return b})),n.d(t,"headings",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n("HALo"),a=n("dhJC"),o=(n("q1tI"),n("7ljp")),i=["components"],b={id:"keyboardavoidingview",title:"KeyboardAvoidingView"},l=[{depth:2,type:"text",title:"Example"},{depth:1,type:"text",title:"Reference"},{depth:2,type:"text",title:"Props"},{depth:3,type:"link",title:""},{depth:3,type:"inlineCode",title:"behavior"},{depth:3,type:"inlineCode",title:"contentContainerStyle"},{depth:3,type:"inlineCode",title:"enabled"},{depth:3,type:"inlineCode",title:"keyboardVerticalOffset"}],c={meta:b,headings:l};function p(e){var t=e.components,n=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"It is a component to solve the common problem of views that need to move out of the way of the virtual keyboard. It can automatically adjust either its height, position, or bottom padding based on the keyboard height."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport {\n  View,\n  KeyboardAvoidingView,\n  TextInput,\n  StyleSheet,\n  Text,\n  Platform,\n  TouchableWithoutFeedback,\n  Button,\n  Keyboard,\n} from 'react-native';\n\nconst KeyboardAvoidingComponent = () => {\n  return (\n    <KeyboardAvoidingView\n      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}\n      style={styles.container}>\n      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>\n        <View style={styles.inner}>\n          <Text style={styles.header}>Header</Text>\n          <TextInput placeholder=\"Username\" style={styles.textInput} />\n          <View style={styles.btnContainer}>\n            <Button title=\"Submit\" onPress={() => null} />\n          </View>\n        </View>\n      </TouchableWithoutFeedback>\n    </KeyboardAvoidingView>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n  },\n  inner: {\n    padding: 24,\n    flex: 1,\n    justifyContent: 'space-around',\n  },\n  header: {\n    fontSize: 36,\n    marginBottom: 48,\n  },\n  textInput: {\n    height: 40,\n    borderColor: '#000000',\n    borderBottomWidth: 1,\n    marginBottom: 36,\n  },\n  btnContainer: {\n    backgroundColor: 'white',\n    marginTop: 12,\n  },\n});\n\nexport default KeyboardAvoidingComponent;\n")),Object(o.b)("hr",null),Object(o.b)("h1",{id:"reference"},"Reference"),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("h3",{id:"view-props"},Object(o.b)("a",{parentName:"h3",href:"/versions/v43.0.0/react-native/view/#props"},"View Props")),Object(o.b)("p",null,"Inherits ",Object(o.b)("a",{parentName:"p",href:"/versions/v43.0.0/react-native/view/#props"},"View Props"),"."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"behavior"},Object(o.b)("inlineCode",{parentName:"h3"},"behavior")),Object(o.b)("p",null,"Specify how to react to the presence of the keyboard."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Android and iOS both interact with this prop differently. On both iOS and Android, setting ",Object(o.b)("inlineCode",{parentName:"p"},"behavior")," is recommended.")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"enum(",Object(o.b)("inlineCode",{parentName:"td"},"'height'"),", ",Object(o.b)("inlineCode",{parentName:"td"},"'position'"),", ",Object(o.b)("inlineCode",{parentName:"td"},"'padding'"),")")))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"contentcontainerstyle"},Object(o.b)("inlineCode",{parentName:"h3"},"contentContainerStyle")),Object(o.b)("p",null,"The style of the content container (View) when behavior is ",Object(o.b)("inlineCode",{parentName:"p"},"'position'"),"."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/versions/v43.0.0/react-native/view-style-props/"},"View Style"))))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"enabled"},Object(o.b)("inlineCode",{parentName:"h3"},"enabled")),Object(o.b)("p",null,"Enabled or disabled KeyboardAvoidingView."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"boolean"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"true"))))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"keyboardverticaloffset"},Object(o.b)("inlineCode",{parentName:"h3"},"keyboardVerticalOffset")),Object(o.b)("p",null,"This is the distance between the top of the user screen and the react native view, may be non-zero in some use cases."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"number"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"0"))))))}p.isMDXComponent=!0}},[["Y/RE",1,0]]]);