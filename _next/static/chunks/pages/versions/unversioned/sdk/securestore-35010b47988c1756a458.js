_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[534],{B81n:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return u})),n.d(t,"headings",(function(){return d})),n.d(t,"default",(function(){return b}));var a=n("HALo"),r=n("dhJC"),o=(n("q1tI"),n("7ljp")),s=n("3Ukx"),c=n("HCau"),i=n("hykZ"),p=n("I0q5"),l=["components"],u={title:"SecureStore",sourceCodeUrl:"https://github.com/expo/expo/tree/main/packages/expo-secure-store",packageName:"expo-secure-store"},d=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"Usage"},{depth:2,type:"text",title:"API"}],h={meta:u,headings:d};function b(e){var t=e.components,n=Object(r.a)(e,l);return Object(o.b)("wrapper",Object(a.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"expo-secure-store"))," provides a way to encrypt and securely store key\u2013value pairs locally on the device. Each Expo project has a separate storage system and has no access to the storage of other Expo projects. ",Object(o.b)("strong",{parentName:"p"},"Please note")," that for iOS standalone apps, data stored with ",Object(o.b)("inlineCode",{parentName:"p"},"expo-secure-store")," can persist across app installs."),Object(o.b)("p",null,"iOS: Values are stored using the ",Object(o.b)("a",{parentName:"p",href:"https://developer.apple.com/documentation/security/keychain_services"},"keychain services")," as ",Object(o.b)("inlineCode",{parentName:"p"},"kSecClassGenericPassword"),". iOS has the additional option of being able to set the value's ",Object(o.b)("inlineCode",{parentName:"p"},"kSecAttrAccessible")," attribute, which controls when the value is available to be fetched."),Object(o.b)("p",null,"Android: Values are stored in ",Object(o.b)("a",{parentName:"p",href:"https://developer.android.com/training/basics/data-storage/shared-preferences.html"},Object(o.b)("inlineCode",{parentName:"a"},"SharedPreferences")),", encrypted with ",Object(o.b)("a",{parentName:"p",href:"https://developer.android.com/training/articles/keystore.html"},"Android's Keystore system"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Size limit for a value is 2048 bytes. An attempt to store larger values may fail. Currently, we print a warning when the limit is reached, but in a future SDK version, we may throw an error.")),Object(o.b)(i.a,{android:!0,emulator:!0,ios:!0,simulator:!0,mdxType:"PlatformsSection"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"This API is not compatible on devices running Android 5 or lower.")),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)(c.a,{mdxType:"APIInstallSection"}),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)(p.a,{label:"SecureStore",dependencies:["expo-secure-store"],platforms:["ios","android"],mdxType:"SnackInline"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"import * as React from 'react';\nimport { Text, View, StyleSheet, TextInput, Button } from 'react-native';\nimport * as SecureStore from 'expo-secure-store';\n\nasync function save(key, value) {\n  await SecureStore.setItemAsync(key, value);\n}\n\nasync function getValueFor(key) {\n  let result = await SecureStore.getItemAsync(key);\n  if (result) {\n    alert(\"\ud83d\udd10 Here's your value \ud83d\udd10 \\n\" + result);\n  } else {\n    alert('No values stored under that key.');\n  }\n}\n\nexport default function App() {\n  const [key, onChangeKey] = React.useState('Your key here');\n  const [value, onChangeValue] = React.useState('Your value here');\n\n  return (\n    <View style={styles.container}>\n      <Text style={styles.paragraph}>Save an item, and grab it later!</Text>\n      {/* @hide Add some TextInput components... */}\n\n      <TextInput\n        style={styles.textInput}\n        clearTextOnFocus\n        onChangeText={text => onChangeKey(text)}\n        value={key}\n      />\n      <TextInput\n        style={styles.textInput}\n        clearTextOnFocus\n        onChangeText={text => onChangeValue(text)}\n        value={value}\n      />\n      {/* @end */}\n      <Button\n        title=\"Save this key/value pair\"\n        onPress={() => {\n          save(key, value);\n          onChangeKey('Your key here');\n          onChangeValue('Your value here');\n        }}\n      />\n\n      <Text style={styles.paragraph}>\ud83d\udd10 Enter your key \ud83d\udd10</Text>\n      <TextInput\n        style={styles.textInput}\n        onSubmitEditing={event => {\n          getValueFor(event.nativeEvent.text);\n        }}\n        placeholder=\"Enter the key for the value you want to get\"\n      />\n    </View>\n  );\n}\n\n/* @hide const styles = StyleSheet.create({ ... }); */\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    paddingTop: 10,\n    backgroundColor: '#ecf0f1',\n    padding: 8,\n  },\n  paragraph: {\n    marginTop: 34,\n    margin: 24,\n    fontSize: 18,\n    fontWeight: 'bold',\n    textAlign: 'center',\n  },\n  textInput: {\n    height: 35,\n    borderColor: 'gray',\n    borderWidth: 0.5,\n    padding: 4,\n  },\n});\n/* @end */\n"))),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import * as SecureStore from 'expo-secure-store';\n")),Object(o.b)(s.a,{packageName:"expo-secure-store",apiName:"SecureStore",mdxType:"APISection"}))}b.isMDXComponent=!0},I0q5:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var a=n("z7pX"),r=n("H+61"),o=n("UlJF"),s=n("+Css"),c=n("7LId"),i=n("VIvw"),p=n("iHvq"),l=n("cpVT"),u=n("q1tI"),d=n("ufKf"),h=n("3zh3"),b=n("AeFk"),f=function(e){var t=e.size,n=void 0===t?24:t,a=e.stroke,r=void 0===a?h.palette.dark.white:a;return Object(b.c)("svg",{"aria-label":"check",width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(b.c)("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))},m=n("5BX9");function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(p.a)(e);if(t){var r=Object(p.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(i.a)(this,n)}}var j="v".concat(n("kiQV").version),v=function(e){Object(c.a)(n,e);var t=y(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,c=new Array(o),i=0;i<o;i++)c[i]=arguments[i];return e=t.call.apply(t,[this].concat(c)),Object(l.a)(Object(s.a)(e),"contentRef",u.createRef()),Object(l.a)(Object(s.a)(e),"state",{ready:!1}),Object(l.a)(Object(s.a)(e),"getSelectedDocsVersion",(function(){var t=e.context.version;return"latest"===t?j:t})),Object(l.a)(Object(s.a)(e),"getSnackSdkVersion",(function(){var t=e.getSelectedDocsVersion();return"unversioned"===t&&(t=j),t.replace("v","")})),Object(l.a)(Object(s.a)(e),"getExamplesPath",(function(){return"".concat(document.location.origin,"/static/examples/").concat(e.getSelectedDocsVersion())})),Object(l.a)(Object(s.a)(e),"getDependencies",(function(){return Object(a.a)(e.props.dependencies).join(",")})),Object(l.a)(Object(s.a)(e),"getCode",(function(){return(e.contentRef.current&&e.contentRef.current.textContent||"").replace(/%%placeholder-start%%.*%%placeholder-end%%/g,"")})),e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.setState({ready:!0})}},{key:"render",value:function(){return Object(b.c)("div",null,Object(b.c)("div",{ref:this.contentRef,style:this.props.contentHidden?{display:"none"}:void 0},this.props.children),Object(b.c)("form",{action:d.a,method:"POST",target:"_blank"},Object(b.c)("input",{type:"hidden",name:"platform",value:this.props.defaultPlatform||"android"}),Object(b.c)("input",{type:"hidden",name:"name",value:this.props.label||"Example"}),Object(b.c)("input",{type:"hidden",name:"dependencies",value:this.getDependencies()}),Object(b.c)("input",{type:"hidden",name:"sdkVersion",value:this.getSnackSdkVersion()}),this.props.platforms&&Object(b.c)("input",{type:"hidden",name:"supportedPlatforms",value:this.props.platforms.join(",")}),this.state.ready&&Object(b.c)("input",{type:"hidden",name:"files",value:JSON.stringify(Object(d.b)({templateId:this.props.templateId,code:this.getCode(),files:this.props.files,baseURL:this.getExamplesPath()}))}),Object(b.c)("button",{className:"snack-inline-example-button",disabled:!this.state.ready},Object(b.c)(f,{size:16})," ",this.props.buttonTitle||"Try this example on Snack")))}}]),n}(u.Component);Object(l.a)(v,"contextType",m.a),Object(l.a)(v,"defaultProps",{dependencies:[]})},ufKf:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var a="https://snack.expo.dev";function r(e){var t=e.templateId,n=e.code,a=e.files,r=e.baseURL,o={};return a&&Object.keys(a).forEach((function(e){var t=a[e],n=/\.(jsx?|tsx?|json|md)$/i.test(e);o[e]=n?{type:"CODE",url:t.match(/^https?:\/\//)?t:"".concat(r,"/").concat(t)}:{type:"ASSET",contents:t}})),t?o["App.js"]={type:"CODE",url:"".concat(r,"/").concat(t,".js")}:n&&(o["App.js"]={type:"CODE",contents:n}),o}},wDSt:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/unversioned/sdk/securestore",function(){return n("B81n")}])}},[["wDSt",1,0,2,3,4,5,6,7,8,9,10,11,12,13,14]]]);