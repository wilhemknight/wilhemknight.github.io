_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[1515],{"2Gni":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return d})),n.d(t,"headings",(function(){return u})),n.d(t,"default",(function(){return m}));var a=n("HALo"),o=n("dhJC"),r=(n("q1tI"),n("7ljp")),c=n("HCau"),i=n("3Ukx"),s=n("hykZ"),p=n("I0q5"),l=["components"],d={title:"TaskManager",sourceCodeUrl:"https://github.com/expo/expo/tree/sdk-45/packages/expo-task-manager",packageName:"expo-task-manager"},u=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"Configuration for standalone apps"},{depth:3,type:"text",title:"Background modes on iOS"},{depth:3,type:"text",title:"AppDelegate.h"},{depth:2,type:"text",title:"Example"},{depth:2,type:"text",title:"API"}],b={meta:d,headings:u};function m(e){var t=e.components,n=Object(o.a)(e,l);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"expo-task-manager"))," provides an API that allows you to manage long-running tasks, in particular those tasks that can run while your app is in the background.\nSome features of this module are used by other modules under the hood. Here is a list of Expo modules that use TaskManager:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/versions/v45.0.0/sdk/location/"},"Location")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/versions/v45.0.0/sdk/background-fetch/"},"BackgroundFetch"))),Object(r.b)(s.a,{android:!0,emulator:!0,ios:!0,simulator:!0,mdxType:"PlatformsSection"}),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)(c.a,{mdxType:"APIInstallSection"}),Object(r.b)("h2",{id:"configuration-for-standalone-apps"},"Configuration for standalone apps"),Object(r.b)("h3",{id:"background-modes-on-ios"},"Background modes on iOS"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"TaskManager")," works out of the box in the Expo Go app on Android, but on iOS you'll need to test using ",Object(r.b)("a",{parentName:"p",href:"/../../../../../../guides/adhoc-builds/"},"a custom Expo Go build"),"."),Object(r.b)("p",null,"Standalone apps need some extra configuration: on iOS, each background feature requires a special key in ",Object(r.b)("inlineCode",{parentName:"p"},"UIBackgroundModes")," array in your ",Object(r.b)("strong",{parentName:"p"},"Info.plist")," file. In standalone apps this array is empty by default, so in order to use background features you will need to add appropriate keys to your ",Object(r.b)("strong",{parentName:"p"},"app.json")," configuration.\nHere is an example of an ",Object(r.b)("strong",{parentName:"p"},"app.json")," configuration that enables background location and background fetch:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "expo": {\n    ...\n    "ios": {\n      ...\n      "infoPlist": {\n        ...\n        "UIBackgroundModes": [\n          "location",\n          "fetch"\n        ]\n      }\n    }\n  }\n}\n')),Object(r.b)("p",null,"For bare React Native apps, you need to add those keys manually. You can do it by clicking on your project in Xcode, then ",Object(r.b)("inlineCode",{parentName:"p"},"Signing & Capabilities"),", adding the ",Object(r.b)("inlineCode",{parentName:"p"},"BackgroundMode")," capability (if absent), and checking either ",Object(r.b)("inlineCode",{parentName:"p"},"Location updates")," or ",Object(r.b)("inlineCode",{parentName:"p"},"Background fetch"),", depending on your needs."),Object(r.b)("h3",{id:"appdelegateh"},"AppDelegate.h"),Object(r.b)("p",null,"Make sure that in your ",Object(r.b)("inlineCode",{parentName:"p"},"AppDelegate.h"),", ",Object(r.b)("inlineCode",{parentName:"p"},"AppDelegate")," subclasses the ",Object(r.b)("inlineCode",{parentName:"p"},"UMAppDelegateWrapper")," class from ",Object(r.b)("inlineCode",{parentName:"p"},"@unimodules/core"),", like so:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-objc"},"#import <UMCore/UMAppDelegateWrapper.h>\n\n@interface AppDelegate : UMAppDelegateWrapper <RCTBridgeDelegate>\n")),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)(p.a,{dependencies:["expo-task-manager","expo-location"],mdxType:"SnackInline"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react';\nimport { Text, TouchableOpacity } from 'react-native';\nimport * as TaskManager from 'expo-task-manager';\nimport * as Location from 'expo-location';\n\nconst LOCATION_TASK_NAME = 'background-location-task';\n\nconst requestPermissions = async () => {\n  const { status } = await Location.requestPermissionsAsync();\n  if (status === 'granted') {\n    await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {\n      accuracy: Location.Accuracy.Balanced,\n    });\n  }\n};\n\nconst PermissionsButton = () => (\n  <TouchableOpacity onPress={requestPermissions}>\n    <Text>Enable background location</Text>\n  </TouchableOpacity>\n);\n\nTaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {\n  if (error) {\n    // Error occurred - check `error.message` for more details.\n    return;\n  }\n  if (data) {\n    const { locations } = data;\n    // do something with the locations captured in the background\n  }\n});\n\nexport default PermissionsButton;\n"))),Object(r.b)("h2",{id:"api"},"API"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import * as TaskManager from 'expo-task-manager';\n")),Object(r.b)(i.a,{packageName:"expo-task-manager",apiName:"TaskManager",mdxType:"APISection"}))}m.isMDXComponent=!0},I0q5:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n("z7pX"),o=n("H+61"),r=n("UlJF"),c=n("+Css"),i=n("7LId"),s=n("VIvw"),p=n("iHvq"),l=n("cpVT"),d=n("q1tI"),u=n("ufKf"),b=n("3zh3"),m=n("AeFk"),h=function(e){var t=e.size,n=void 0===t?24:t,a=e.stroke,o=void 0===a?b.palette.dark.white:a;return Object(m.c)("svg",{"aria-label":"check",width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(m.c)("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))},f=n("5BX9");function O(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(p.a)(e);if(t){var o=Object(p.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return Object(s.a)(this,n)}}var j="v".concat(n("kiQV").version),g=function(e){Object(i.a)(n,e);var t=O(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return e=t.call.apply(t,[this].concat(i)),Object(l.a)(Object(c.a)(e),"contentRef",d.createRef()),Object(l.a)(Object(c.a)(e),"state",{ready:!1}),Object(l.a)(Object(c.a)(e),"getSelectedDocsVersion",(function(){var t=e.context.version;return"latest"===t?j:t})),Object(l.a)(Object(c.a)(e),"getSnackSdkVersion",(function(){var t=e.getSelectedDocsVersion();return"unversioned"===t&&(t=j),t.replace("v","")})),Object(l.a)(Object(c.a)(e),"getExamplesPath",(function(){return"".concat(document.location.origin,"/static/examples/").concat(e.getSelectedDocsVersion())})),Object(l.a)(Object(c.a)(e),"getDependencies",(function(){return Object(a.a)(e.props.dependencies).join(",")})),Object(l.a)(Object(c.a)(e),"getCode",(function(){return(e.contentRef.current&&e.contentRef.current.textContent||"").replace(/%%placeholder-start%%.*%%placeholder-end%%/g,"")})),e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.setState({ready:!0})}},{key:"render",value:function(){return Object(m.c)("div",null,Object(m.c)("div",{ref:this.contentRef,style:this.props.contentHidden?{display:"none"}:void 0},this.props.children),Object(m.c)("form",{action:u.a,method:"POST",target:"_blank"},Object(m.c)("input",{type:"hidden",name:"platform",value:this.props.defaultPlatform||"android"}),Object(m.c)("input",{type:"hidden",name:"name",value:this.props.label||"Example"}),Object(m.c)("input",{type:"hidden",name:"dependencies",value:this.getDependencies()}),Object(m.c)("input",{type:"hidden",name:"sdkVersion",value:this.getSnackSdkVersion()}),this.props.platforms&&Object(m.c)("input",{type:"hidden",name:"supportedPlatforms",value:this.props.platforms.join(",")}),this.state.ready&&Object(m.c)("input",{type:"hidden",name:"files",value:JSON.stringify(Object(u.b)({templateId:this.props.templateId,code:this.getCode(),files:this.props.files,baseURL:this.getExamplesPath()}))}),Object(m.c)("button",{className:"snack-inline-example-button",disabled:!this.state.ready},Object(m.c)(h,{size:16})," ",this.props.buttonTitle||"Try this example on Snack")))}}]),n}(d.Component);Object(l.a)(g,"contextType",f.a),Object(l.a)(g,"defaultProps",{dependencies:[]})},ftjn:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v45.0.0/sdk/task-manager",function(){return n("2Gni")}])},ufKf:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var a="https://snack.expo.dev";function o(e){var t=e.templateId,n=e.code,a=e.files,o=e.baseURL,r={};return a&&Object.keys(a).forEach((function(e){var t=a[e],n=/\.(jsx?|tsx?|json|md)$/i.test(e);r[e]=n?{type:"CODE",url:t.match(/^https?:\/\//)?t:"".concat(o,"/").concat(t)}:{type:"ASSET",contents:t}})),t?r["App.js"]={type:"CODE",url:"".concat(o,"/").concat(t,".js")}:n&&(r["App.js"]={type:"CODE",contents:n}),r}}},[["ftjn",1,0,2,3,4,5,6,7,8,9,10,11,12,13,14]]]);