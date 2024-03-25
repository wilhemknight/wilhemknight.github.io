_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[1066],{"4kZs":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return i})),n.d(t,"headings",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n("HALo"),r=n("dhJC"),l=(n("q1tI"),n("7ljp")),b=["components"],i={id:"modal",title:"Modal"},o=[{depth:2,type:"text",title:"Example"},{depth:1,type:"text",title:"Reference"},{depth:2,type:"text",title:"Props"},{depth:3,type:"inlineCode",title:"animated"},{depth:3,type:"inlineCode",title:"animationType"},{depth:3,type:"inlineCode",title:"hardwareAccelerated   "},{depth:3,type:"inlineCode",title:"onDismiss   "},{depth:3,type:"inlineCode",title:"onOrientationChange   "},{depth:3,type:"inlineCode",title:"onRequestClose"},{depth:3,type:"inlineCode",title:"onShow"},{depth:3,type:"inlineCode",title:"presentationStyle   "},{depth:3,type:"inlineCode",title:"statusBarTranslucent   "},{depth:3,type:"inlineCode",title:"supportedOrientations   "},{depth:3,type:"inlineCode",title:"transparent"},{depth:3,type:"inlineCode",title:"visible"}],c={meta:i,headings:o};function p(e){var t=e.components,n=Object(r.a)(e,b);return Object(l.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The Modal component is a basic way to present content above an enclosing view."),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"import React, { useState } from 'react';\nimport { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';\n\nconst App = () => {\n  const [modalVisible, setModalVisible] = useState(false);\n  return (\n    <View style={styles.centeredView}>\n      <Modal\n        animationType=\"slide\"\n        transparent={true}\n        visible={modalVisible}\n        onRequestClose={() => {\n          Alert.alert('Modal has been closed.');\n          setModalVisible(!modalVisible);\n        }}>\n        <View style={styles.centeredView}>\n          <View style={styles.modalView}>\n            <Text style={styles.modalText}>Hello World!</Text>\n            <Pressable\n              style={[styles.button, styles.buttonClose]}\n              onPress={() => setModalVisible(!modalVisible)}>\n              <Text style={styles.textStyle}>Hide Modal</Text>\n            </Pressable>\n          </View>\n        </View>\n      </Modal>\n      <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>\n        <Text style={styles.textStyle}>Show Modal</Text>\n      </Pressable>\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  centeredView: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center',\n    marginTop: 22,\n  },\n  modalView: {\n    margin: 20,\n    backgroundColor: 'white',\n    borderRadius: 20,\n    padding: 35,\n    alignItems: 'center',\n    shadowColor: '#000',\n    shadowOffset: {\n      width: 0,\n      height: 2,\n    },\n    shadowOpacity: 0.25,\n    shadowRadius: 4,\n    elevation: 5,\n  },\n  button: {\n    borderRadius: 20,\n    padding: 10,\n    elevation: 2,\n  },\n  buttonOpen: {\n    backgroundColor: '#F194FF',\n  },\n  buttonClose: {\n    backgroundColor: '#2196F3',\n  },\n  textStyle: {\n    color: 'white',\n    fontWeight: 'bold',\n    textAlign: 'center',\n  },\n  modalText: {\n    marginBottom: 15,\n    textAlign: 'center',\n  },\n});\n\nexport default App;\n")),Object(l.b)("hr",null),Object(l.b)("h1",{id:"reference"},"Reference"),Object(l.b)("h2",{id:"props"},"Props"),Object(l.b)("h3",{id:"animated"},Object(l.b)("inlineCode",{parentName:"h3"},"animated")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"Deprecated.")," Use the ",Object(l.b)("a",{parentName:"p",href:"/versions/v43.0.0/react-native/modal/#animationtype"},Object(l.b)("inlineCode",{parentName:"a"},"animationType"))," prop instead.")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"animationtype"},Object(l.b)("inlineCode",{parentName:"h3"},"animationType")),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"animationType")," prop controls how the modal animates."),Object(l.b)("p",null,"Possible values:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"slide")," slides in from the bottom,"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"fade")," fades into view,"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"none")," appears without an animation.")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"enum(",Object(l.b)("inlineCode",{parentName:"td"},"'none'"),", ",Object(l.b)("inlineCode",{parentName:"td"},"'slide'"),", ",Object(l.b)("inlineCode",{parentName:"td"},"'fade'"),")"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"none"))))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"hardwareaccelerated-android"},Object(l.b)("inlineCode",{parentName:"h3"},"hardwareAccelerated")," ",Object(l.b)("strong",{parentName:"h3"},"(Android)")),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"hardwareAccelerated")," prop controls whether to force hardware acceleration for the underlying window."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false"))))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"ondismiss-ios"},Object(l.b)("inlineCode",{parentName:"h3"},"onDismiss")," ",Object(l.b)("strong",{parentName:"h3"},"(iOS)")),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"onDismiss")," prop allows passing a function that will be called once the modal has been dismissed."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onorientationchange-ios"},Object(l.b)("inlineCode",{parentName:"h3"},"onOrientationChange")," ",Object(l.b)("strong",{parentName:"h3"},"(iOS)")),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"onOrientationChange")," callback is called when the orientation changes while the modal is being displayed. The orientation provided is only 'portrait' or 'landscape'. This callback is also called on initial render, regardless of the current orientation."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onrequestclose"},Object(l.b)("inlineCode",{parentName:"h3"},"onRequestClose")),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"onRequestClose")," callback is called when the user taps the hardware back button on Android or the menu button on Apple TV. Because of this required prop, be aware that ",Object(l.b)("inlineCode",{parentName:"p"},"BackHandler")," events will not be emitted as long as the modal is open."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function ",Object(l.b)("div",{className:"label basic required"},"Required"),Object(l.b)("div",{className:"label android"},"Android"),Object(l.b)("div",{className:"label tv"},"TV"),Object(l.b)("hr",null),"function ",Object(l.b)("div",{className:"label ios"},"iOS"))))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onshow"},Object(l.b)("inlineCode",{parentName:"h3"},"onShow")),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"onShow")," prop allows passing a function that will be called once the modal has been shown."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"presentationstyle-ios"},Object(l.b)("inlineCode",{parentName:"h3"},"presentationStyle")," ",Object(l.b)("strong",{parentName:"h3"},"(iOS)")),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"presentationStyle")," prop controls how the modal appears (generally on larger devices such as iPad or plus-sized iPhones). See ",Object(l.b)("a",{parentName:"p",href:"https://developer.apple.com/reference/uikit/uimodalpresentationstyle"},"https://developer.apple.com/reference/uikit/uimodalpresentationstyle")," for details."),Object(l.b)("p",null,"Possible values:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"fullScreen")," covers the screen completely"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"pageSheet")," covers portrait-width view centered (only on larger devices)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"formSheet")," covers narrow-width view centered (only on larger devices)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"overFullScreen")," covers the screen completely, but allows transparency")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"enum(",Object(l.b)("inlineCode",{parentName:"td"},"'fullScreen'"),", ",Object(l.b)("inlineCode",{parentName:"td"},"'pageSheet'"),", ",Object(l.b)("inlineCode",{parentName:"td"},"'formSheet'"),", ",Object(l.b)("inlineCode",{parentName:"td"},"'overFullScreen'"),")"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"fullScreen")," if ",Object(l.b)("inlineCode",{parentName:"td"},"transparent={false}"),Object(l.b)("hr",null),Object(l.b)("inlineCode",{parentName:"td"},"overFullScreen")," if ",Object(l.b)("inlineCode",{parentName:"td"},"transparent={true}"))))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"statusbartranslucent-android"},Object(l.b)("inlineCode",{parentName:"h3"},"statusBarTranslucent")," ",Object(l.b)("strong",{parentName:"h3"},"(Android)")),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"statusBarTranslucent")," prop determines whether your modal should go under the system statusbar."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false"))))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"supportedorientations-ios"},Object(l.b)("inlineCode",{parentName:"h3"},"supportedOrientations")," ",Object(l.b)("strong",{parentName:"h3"},"(iOS)")),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"supportedOrientations")," prop allows the modal to be rotated to any of the specified orientations. On iOS, the modal is still restricted by what's specified in your app's Info.plist's UISupportedInterfaceOrientations field."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"When using ",Object(l.b)("inlineCode",{parentName:"p"},"presentationStyle")," of ",Object(l.b)("inlineCode",{parentName:"p"},"pageSheet")," or ",Object(l.b)("inlineCode",{parentName:"p"},"formSheet"),", this property will be ignored by iOS.")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"array of enums(",Object(l.b)("inlineCode",{parentName:"td"},"'portrait'"),", ",Object(l.b)("inlineCode",{parentName:"td"},"'portrait-upside-down'"),", ",Object(l.b)("inlineCode",{parentName:"td"},"'landscape'"),", ",Object(l.b)("inlineCode",{parentName:"td"},"'landscape-left'"),", ",Object(l.b)("inlineCode",{parentName:"td"},"'landscape-right'"),")"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"['portrait']"))))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"transparent"},Object(l.b)("inlineCode",{parentName:"h3"},"transparent")),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"transparent")," prop determines whether your modal will fill the entire view. Setting this to ",Object(l.b)("inlineCode",{parentName:"p"},"true")," will render the modal over a transparent background."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false"))))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"visible"},Object(l.b)("inlineCode",{parentName:"h3"},"visible")),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"visible")," prop determines whether your modal is visible."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"true"))))))}p.isMDXComponent=!0},"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n("q1tI"),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),O=a,u=d["".concat(b,".").concat(O)]||d[O]||s[O]||l;return n?r.a.createElement(u,i(i({ref:t},c),{},{components:n})):r.a.createElement(u,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var l=n.length,b=new Array(l);b[0]=O;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"===typeof e?e:a,b[1]=i;for(var c=2;c<l;c++)b[c]=n[c];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},HALo:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},Qetd:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},SWd1:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v43.0.0/react-native/modal",function(){return n("4kZs")}])},dhJC:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,"a",(function(){return a}))}},[["SWd1",1,0]]]);