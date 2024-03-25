_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[551],{GI5v:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return b})),n.d(t,"headings",(function(){return f})),n.d(t,"default",(function(){return h}));var i=n("HALo"),a=n("dhJC"),r=(n("q1tI"),n("7ljp")),s=n("vFJ3"),o=n("utVh"),c=n("3Ukx"),p=n("HCau"),l=n("hykZ"),u=n("I0q5"),d=["components"],b={title:"TrackingTransparency",sourceCodeUrl:"https://github.com/expo/expo/tree/main/packages/expo-tracking-transparency",packageName:"expo-tracking-transparency"},f=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"Configuration in app.json / app.config.js"},{depth:2,type:"text",title:"Usage"},{depth:2,type:"text",title:"API"},{depth:2,type:"text",title:"Permissions"},{depth:3,type:"text",title:"Android"},{depth:3,type:"text",title:"iOS"}],m={meta:b,headings:f};function h(e){var t=e.components,n=Object(a.a)(e,d);return Object(r.b)("wrapper",Object(i.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,'A library for requesting permission to track the user or their device. Examples of data used for tracking include email address, device ID, advertising ID, etc... This permission is only necessary on iOS 14 and higher; on iOS 13 and below this permission is always granted. If the "Allow Apps to Request to Track" device-level setting is off, this permission will be denied. Be sure to add ',Object(r.b)("inlineCode",{parentName:"p"},"NSUserTrackingUsageDescription")," to your ",Object(r.b)("a",{parentName:"p",href:"/../../../../../../versions/latest/config/app/#infoplist"},Object(r.b)("strong",{parentName:"a"},"Info.plist"))," to explain how the user will be tracked, otherwise your app will be rejected by Apple."),Object(r.b)("p",null,"For more information on Apple's new App Tracking Transparency framework, please refer to their ",Object(r.b)("a",{parentName:"p",href:"https://developer.apple.com/app-store/user-privacy-and-data-use/"},"documentation"),"."),Object(r.b)(l.a,{ios:!0,simulator:!0,mdxType:"PlatformsSection"}),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)(p.a,{mdxType:"APIInstallSection"}),Object(r.b)("h2",{id:"configuration-in-appjson--appconfigjs"},"Configuration in app.json / app.config.js"),Object(r.b)("p",null,"You can configure ",Object(r.b)("inlineCode",{parentName:"p"},"expo-tracking-transparency")," using its built-in ",Object(r.b)("a",{parentName:"p",href:"/guides/config-plugins/"},"config plugin")," if you use config plugins in your project (",Object(r.b)("a",{parentName:"p",href:"/build/introduction/"},"EAS Build")," or ",Object(r.b)("inlineCode",{parentName:"p"},"expo run:[android|ios]"),"). The plugin allows you to configure various properties that cannot be set at runtime and require building a new app binary to take effect."),Object(r.b)(s.a,{mdxType:"ConfigClassic"},Object(r.b)("p",null,"You can configure ",Object(r.b)("a",{parentName:"p",href:"/versions/unversioned/sdk/tracking-transparency/#permissions"},"the permissions for this library")," using ",Object(r.b)("a",{parentName:"p",href:"/versions/unversioned/config/app/#infoplist"},Object(r.b)("inlineCode",{parentName:"a"},"ios.infoPlist"))," and ",Object(r.b)("a",{parentName:"p",href:"/versions/unversioned/config/app/#permissions"},Object(r.b)("inlineCode",{parentName:"a"},"android.permissions")),".")),Object(r.b)(s.d,{mdxType:"ConfigReactNative"},Object(r.b)("p",null,"Learn how to configure the native projects in the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/expo/expo/tree/main/packages/expo-tracking-transparency#installation-in-bare-react-native-projects"},"installation instructions in the ",Object(r.b)("inlineCode",{parentName:"a"},"expo-tracking-transparency")," repository"),".")),Object(r.b)(s.b,{mdxType:"ConfigPluginExample"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "expo": {\n    "plugins": [\n      [\n        "expo-tracking-transparency",\n        {\n          "userTrackingPermission": "This identifier will be used to deliver personalized ads to you."\n        }\n      ]\n    ]\n  }\n}\n'))),Object(r.b)(s.c,{properties:[{name:"userTrackingPermission",platform:"ios",description:"Sets the iOS `NSUserTrackingUsageDescription` permission message in Info.plist.",default:'"Allow this app to collect app-related data that can be used for tracking you or your device."'}],mdxType:"ConfigPluginProperties"}),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)(u.a,{label:"Basic tracking transparency usage",dependencies:["expo-tracking-transparency"],mdxType:"SnackInline"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"import React, { useEffect } from 'react';\nimport { Text, StyleSheet, View } from 'react-native';\nimport { requestTrackingPermissionsAsync } from 'expo-tracking-transparency';\n\nexport default function App() {\n  useEffect(() => {\n    (async () => {\n      const { status } = await requestTrackingPermissionsAsync();\n      if (status === 'granted') {\n        console.log('Yay! I have user permission to track data');\n      }\n    })();\n  }, []);\n\n  return (\n    <View style={styles.container}>\n      <Text>Tracking Transparency Module Example</Text>\n    </View>\n  );\n}\n\n/* @hide const styles = StyleSheet.create({ ... }); */\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n});\n/* @end */\n"))),Object(r.b)("h2",{id:"api"},"API"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import {\n  requestTrackingPermissionsAsync,\n  getTrackingPermissionsAsync,\n} from 'expo-tracking-transparency';\n")),Object(r.b)(c.a,{packageName:"expo-tracking-transparency",mdxType:"APISection"}),Object(r.b)("h2",{id:"permissions"},"Permissions"),Object(r.b)("h3",{id:"android"},"Android"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"No permissions required"),"."),Object(r.b)("h3",{id:"ios"},"iOS"),Object(r.b)("p",null,"The following usage description keys are used by this library:"),Object(r.b)(o.b,{permissions:["NSUserTrackingUsageDescription"],mdxType:"IOSPermissions"}))}h.isMDXComponent=!0},I0q5:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var i=n("z7pX"),a=n("H+61"),r=n("UlJF"),s=n("+Css"),o=n("7LId"),c=n("VIvw"),p=n("iHvq"),l=n("cpVT"),u=n("q1tI"),d=n("ufKf"),b=n("3zh3"),f=n("AeFk"),m=function(e){var t=e.size,n=void 0===t?24:t,i=e.stroke,a=void 0===i?b.palette.dark.white:i;return Object(f.c)("svg",{"aria-label":"check",width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(f.c)("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))},h=n("5BX9");function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=Object(p.a)(e);if(t){var a=Object(p.a)(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return Object(c.a)(this,n)}}var j="v".concat(n("kiQV").version),y=function(e){Object(o.a)(n,e);var t=g(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return e=t.call.apply(t,[this].concat(o)),Object(l.a)(Object(s.a)(e),"contentRef",u.createRef()),Object(l.a)(Object(s.a)(e),"state",{ready:!1}),Object(l.a)(Object(s.a)(e),"getSelectedDocsVersion",(function(){var t=e.context.version;return"latest"===t?j:t})),Object(l.a)(Object(s.a)(e),"getSnackSdkVersion",(function(){var t=e.getSelectedDocsVersion();return"unversioned"===t&&(t=j),t.replace("v","")})),Object(l.a)(Object(s.a)(e),"getExamplesPath",(function(){return"".concat(document.location.origin,"/static/examples/").concat(e.getSelectedDocsVersion())})),Object(l.a)(Object(s.a)(e),"getDependencies",(function(){return Object(i.a)(e.props.dependencies).join(",")})),Object(l.a)(Object(s.a)(e),"getCode",(function(){return(e.contentRef.current&&e.contentRef.current.textContent||"").replace(/%%placeholder-start%%.*%%placeholder-end%%/g,"")})),e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.setState({ready:!0})}},{key:"render",value:function(){return Object(f.c)("div",null,Object(f.c)("div",{ref:this.contentRef,style:this.props.contentHidden?{display:"none"}:void 0},this.props.children),Object(f.c)("form",{action:d.a,method:"POST",target:"_blank"},Object(f.c)("input",{type:"hidden",name:"platform",value:this.props.defaultPlatform||"android"}),Object(f.c)("input",{type:"hidden",name:"name",value:this.props.label||"Example"}),Object(f.c)("input",{type:"hidden",name:"dependencies",value:this.getDependencies()}),Object(f.c)("input",{type:"hidden",name:"sdkVersion",value:this.getSnackSdkVersion()}),this.props.platforms&&Object(f.c)("input",{type:"hidden",name:"supportedPlatforms",value:this.props.platforms.join(",")}),this.state.ready&&Object(f.c)("input",{type:"hidden",name:"files",value:JSON.stringify(Object(d.b)({templateId:this.props.templateId,code:this.getCode(),files:this.props.files,baseURL:this.getExamplesPath()}))}),Object(f.c)("button",{className:"snack-inline-example-button",disabled:!this.state.ready},Object(f.c)(m,{size:16})," ",this.props.buttonTitle||"Try this example on Snack")))}}]),n}(u.Component);Object(l.a)(y,"contextType",h.a),Object(l.a)(y,"defaultProps",{dependencies:[]})},"o/g9":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/unversioned/sdk/tracking-transparency",function(){return n("GI5v")}])},ufKf:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a}));var i="https://snack.expo.dev";function a(e){var t=e.templateId,n=e.code,i=e.files,a=e.baseURL,r={};return i&&Object.keys(i).forEach((function(e){var t=i[e],n=/\.(jsx?|tsx?|json|md)$/i.test(e);r[e]=n?{type:"CODE",url:t.match(/^https?:\/\//)?t:"".concat(a,"/").concat(t)}:{type:"ASSET",contents:t}})),t?r["App.js"]={type:"CODE",url:"".concat(a,"/").concat(t,".js")}:n&&(r["App.js"]={type:"CODE",contents:n}),r}}},[["o/g9",1,0,2,3,4,5,6,7,8,9,10,11,12,13,14,16]]]);