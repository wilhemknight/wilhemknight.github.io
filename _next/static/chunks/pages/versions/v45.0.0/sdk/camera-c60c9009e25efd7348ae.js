_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[1443],{I0q5:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var a=n("z7pX"),r=n("H+61"),o=n("UlJF"),c=n("+Css"),s=n("7LId"),i=n("VIvw"),p=n("iHvq"),l=n("cpVT"),u=n("q1tI"),b=n("ufKf"),m=n("3zh3"),d=n("AeFk"),h=function(e){var t=e.size,n=void 0===t?24:t,a=e.stroke,r=void 0===a?m.palette.dark.white:a;return Object(d.c)("svg",{"aria-label":"check",width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(d.c)("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))},f=n("5BX9");function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(p.a)(e);if(t){var r=Object(p.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(i.a)(this,n)}}var O="v".concat(n("kiQV").version),y=function(e){Object(s.a)(n,e);var t=j(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return e=t.call.apply(t,[this].concat(s)),Object(l.a)(Object(c.a)(e),"contentRef",u.createRef()),Object(l.a)(Object(c.a)(e),"state",{ready:!1}),Object(l.a)(Object(c.a)(e),"getSelectedDocsVersion",(function(){var t=e.context.version;return"latest"===t?O:t})),Object(l.a)(Object(c.a)(e),"getSnackSdkVersion",(function(){var t=e.getSelectedDocsVersion();return"unversioned"===t&&(t=O),t.replace("v","")})),Object(l.a)(Object(c.a)(e),"getExamplesPath",(function(){return"".concat(document.location.origin,"/static/examples/").concat(e.getSelectedDocsVersion())})),Object(l.a)(Object(c.a)(e),"getDependencies",(function(){return Object(a.a)(e.props.dependencies).join(",")})),Object(l.a)(Object(c.a)(e),"getCode",(function(){return(e.contentRef.current&&e.contentRef.current.textContent||"").replace(/%%placeholder-start%%.*%%placeholder-end%%/g,"")})),e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.setState({ready:!0})}},{key:"render",value:function(){return Object(d.c)("div",null,Object(d.c)("div",{ref:this.contentRef,style:this.props.contentHidden?{display:"none"}:void 0},this.props.children),Object(d.c)("form",{action:b.a,method:"POST",target:"_blank"},Object(d.c)("input",{type:"hidden",name:"platform",value:this.props.defaultPlatform||"android"}),Object(d.c)("input",{type:"hidden",name:"name",value:this.props.label||"Example"}),Object(d.c)("input",{type:"hidden",name:"dependencies",value:this.getDependencies()}),Object(d.c)("input",{type:"hidden",name:"sdkVersion",value:this.getSnackSdkVersion()}),this.props.platforms&&Object(d.c)("input",{type:"hidden",name:"supportedPlatforms",value:this.props.platforms.join(",")}),this.state.ready&&Object(d.c)("input",{type:"hidden",name:"files",value:JSON.stringify(Object(b.b)({templateId:this.props.templateId,code:this.getCode(),files:this.props.files,baseURL:this.getExamplesPath()}))}),Object(d.c)("button",{className:"snack-inline-example-button",disabled:!this.state.ready},Object(d.c)(h,{size:16})," ",this.props.buttonTitle||"Try this example on Snack")))}}]),n}(u.Component);Object(l.a)(y,"contextType",f.a),Object(l.a)(y,"defaultProps",{dependencies:[]})},"Xo+/":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return u})),n.d(t,"headings",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n("HALo"),r=n("dhJC"),o=(n("q1tI"),n("7ljp")),c=n("3Ukx"),s=n("HCau"),i=n("hykZ"),p=n("I0q5"),l=["components"],u={title:"Camera",sourceCodeUrl:"https://github.com/expo/expo/tree/sdk-45/packages/expo-camera",packageName:"expo-camera"},b=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"Configuration"},{depth:2,type:"text",title:"Usage"},{depth:2,type:"text",title:"Web Support"},{depth:3,type:"inlineCode",title:"Chrome  iframe  usage"},{depth:2,type:"text",title:"API"}],m={meta:u,headings:b};function d(e){var t=e.components,n=Object(r.a)(e,l);return Object(o.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"expo-camera"))," provides a React component that renders a preview for the device's front or back camera. The camera's parameters like zoom, auto focus, white balance and flash mode are adjustable. With the use of ",Object(o.b)("inlineCode",{parentName:"p"},"Camera"),", one can also take photos and record videos that are then saved to the app's cache. Morever, the component is also capable of detecting faces and bar codes appearing in the preview. Run the ",Object(o.b)("a",{parentName:"p",href:"/versions/v45.0.0/sdk/camera/#usage"},"example")," on your device to see all these features working together!"),Object(o.b)(i.a,{android:!0,ios:!0,web:!0,mdxType:"PlatformsSection"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\ud83d\udca1 Android devices can use one of two available Camera APIs: you can opt-in to using ",Object(o.b)("a",{parentName:"p",href:"https://developer.android.com/reference/android/hardware/camera2/package-summary"},Object(o.b)("inlineCode",{parentName:"a"},"Camera2"))," with the ",Object(o.b)("inlineCode",{parentName:"p"},"useCamera2Api")," prop.")),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)(s.a,{mdxType:"APIInstallSection"}),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"In managed apps, ",Object(o.b)("inlineCode",{parentName:"p"},"Camera")," requires ",Object(o.b)("inlineCode",{parentName:"p"},"Permissions.CAMERA"),". Video recording requires ",Object(o.b)("inlineCode",{parentName:"p"},"Permissions.AUDIO_RECORDING"),"."),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u26a0\ufe0f Only one Camera preview can be active at any given time. If you have multiple screens in your app, you should unmount ",Object(o.b)("inlineCode",{parentName:"p"},"Camera")," components whenever a screen is unfocused.")),Object(o.b)(p.a,{label:"Basic Camera usage",dependencies:["expo-camera"],mdxType:"SnackInline"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState, useEffect } from 'react';\nimport { StyleSheet, Text, View, TouchableOpacity } from 'react-native';\nimport { Camera } from 'expo-camera';\n\nexport default function App() {\n  const [hasPermission, setHasPermission] = useState(null);\n  const [type, setType] = useState(Camera.Constants.Type.back);\n\n  useEffect(() => {\n    (async () => {\n      const { status } = await Camera.requestCameraPermissionsAsync();\n      setHasPermission(status === 'granted');\n    })();\n  }, []);\n\n  if (hasPermission === null) {\n    return <View />;\n  }\n  if (hasPermission === false) {\n    return <Text>No access to camera</Text>;\n  }\n  return (\n    <View style={styles.container}>\n      <Camera style={styles.camera} type={type}>\n        <View style={styles.buttonContainer}>\n          <TouchableOpacity\n            style={styles.button}\n            onPress={() => {\n              setType(\n                type === Camera.Constants.Type.back\n                  ? Camera.Constants.Type.front\n                  : Camera.Constants.Type.back\n              );\n            }}>\n            <Text style={styles.text}> Flip </Text>\n          </TouchableOpacity>\n        </View>\n      </Camera>\n    </View>\n  );\n}\n\n/* @hide const styles = StyleSheet.create({ ... }); */\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n  },\n  camera: {\n    flex: 1,\n  },\n  buttonContainer: {\n    flex: 1,\n    backgroundColor: 'transparent',\n    flexDirection: 'row',\n    margin: 20,\n  },\n  button: {\n    flex: 0.1,\n    alignSelf: 'flex-end',\n    alignItems: 'center',\n  },\n  text: {\n    fontSize: 18,\n    color: 'white',\n  },\n});\n/* @end */\n"))),Object(o.b)("h2",{id:"web-support"},"Web Support"),Object(o.b)("p",null,"Luckily most browsers support at least some form of web camera functionality, you can check out the ",Object(o.b)("a",{parentName:"p",href:"https://caniuse.com/#feat=stream"},"web camera browser support here"),". Image URIs are always returned as base64 strings because local file system paths are not available in the browser."),Object(o.b)("h3",{id:"chrome-iframe-usage"},"Chrome ",Object(o.b)("inlineCode",{parentName:"h3"},"iframe")," usage"),Object(o.b)("p",null,"When using ",Object(o.b)("strong",{parentName:"p"},"Chrome versions 64+"),", if you try to use a web camera in a cross-origin iframe nothing will render. To add support for cameras in your iframe simply add the attribute ",Object(o.b)("inlineCode",{parentName:"p"},'allow="microphone; camera;"')," to the iframe element:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'<iframe src="..." allow="microphone; camera;">\n  \x3c!-- <Camera /> --\x3e\n</iframe>\n')),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { Camera } from 'expo-camera';\n")),Object(o.b)(c.a,{packageName:"expo-camera",apiName:"Camera",mdxType:"APISection"}))}d.isMDXComponent=!0},YJYA:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v45.0.0/sdk/camera",function(){return n("Xo+/")}])},ufKf:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var a="https://snack.expo.dev";function r(e){var t=e.templateId,n=e.code,a=e.files,r=e.baseURL,o={};return a&&Object.keys(a).forEach((function(e){var t=a[e],n=/\.(jsx?|tsx?|json|md)$/i.test(e);o[e]=n?{type:"CODE",url:t.match(/^https?:\/\//)?t:"".concat(r,"/").concat(t)}:{type:"ASSET",contents:t}})),t?o["App.js"]={type:"CODE",url:"".concat(r,"/").concat(t,".js")}:n&&(o["App.js"]={type:"CODE",contents:n}),o}}},[["YJYA",1,0,2,3,4,5,6,7,8,9,10,11,12,13,14]]]);