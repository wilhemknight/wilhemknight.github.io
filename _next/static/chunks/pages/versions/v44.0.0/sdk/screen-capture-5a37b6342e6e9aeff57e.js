_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[1335],{I0q5:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var a=n("z7pX"),r=n("H+61"),c=n("UlJF"),o=n("+Css"),i=n("7LId"),s=n("VIvw"),p=n("iHvq"),u=n("cpVT"),l=n("q1tI"),d=n("ufKf"),b=n("3zh3"),m=n("AeFk"),f=function(e){var t=e.size,n=void 0===t?24:t,a=e.stroke,r=void 0===a?b.palette.dark.white:a;return Object(m.c)("svg",{"aria-label":"check",width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(m.c)("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))},h=n("5BX9");function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(p.a)(e);if(t){var r=Object(p.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(s.a)(this,n)}}var O="v".concat(n("kiQV").version),y=function(e){Object(i.a)(n,e);var t=j(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,i=new Array(c),s=0;s<c;s++)i[s]=arguments[s];return e=t.call.apply(t,[this].concat(i)),Object(u.a)(Object(o.a)(e),"contentRef",l.createRef()),Object(u.a)(Object(o.a)(e),"state",{ready:!1}),Object(u.a)(Object(o.a)(e),"getSelectedDocsVersion",(function(){var t=e.context.version;return"latest"===t?O:t})),Object(u.a)(Object(o.a)(e),"getSnackSdkVersion",(function(){var t=e.getSelectedDocsVersion();return"unversioned"===t&&(t=O),t.replace("v","")})),Object(u.a)(Object(o.a)(e),"getExamplesPath",(function(){return"".concat(document.location.origin,"/static/examples/").concat(e.getSelectedDocsVersion())})),Object(u.a)(Object(o.a)(e),"getDependencies",(function(){return Object(a.a)(e.props.dependencies).join(",")})),Object(u.a)(Object(o.a)(e),"getCode",(function(){return(e.contentRef.current&&e.contentRef.current.textContent||"").replace(/%%placeholder-start%%.*%%placeholder-end%%/g,"")})),e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.setState({ready:!0})}},{key:"render",value:function(){return Object(m.c)("div",null,Object(m.c)("div",{ref:this.contentRef,style:this.props.contentHidden?{display:"none"}:void 0},this.props.children),Object(m.c)("form",{action:d.a,method:"POST",target:"_blank"},Object(m.c)("input",{type:"hidden",name:"platform",value:this.props.defaultPlatform||"android"}),Object(m.c)("input",{type:"hidden",name:"name",value:this.props.label||"Example"}),Object(m.c)("input",{type:"hidden",name:"dependencies",value:this.getDependencies()}),Object(m.c)("input",{type:"hidden",name:"sdkVersion",value:this.getSnackSdkVersion()}),this.props.platforms&&Object(m.c)("input",{type:"hidden",name:"supportedPlatforms",value:this.props.platforms.join(",")}),this.state.ready&&Object(m.c)("input",{type:"hidden",name:"files",value:JSON.stringify(Object(d.b)({templateId:this.props.templateId,code:this.getCode(),files:this.props.files,baseURL:this.getExamplesPath()}))}),Object(m.c)("button",{className:"snack-inline-example-button",disabled:!this.state.ready},Object(m.c)(f,{size:16})," ",this.props.buttonTitle||"Try this example on Snack")))}}]),n}(l.Component);Object(u.a)(y,"contextType",h.a),Object(u.a)(y,"defaultProps",{dependencies:[]})},dL6d:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v44.0.0/sdk/screen-capture",function(){return n("sCJ8")}])},sCJ8:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return l})),n.d(t,"headings",(function(){return d})),n.d(t,"default",(function(){return m}));var a=n("HALo"),r=n("dhJC"),c=(n("q1tI"),n("7ljp")),o=n("3Ukx"),i=n("HCau"),s=n("hykZ"),p=n("I0q5"),u=["components"],l={title:"ScreenCapture",sourceCodeUrl:"https://github.com/expo/expo/tree/sdk-44/packages/expo-screen-capture"},d=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"Usage"},{depth:3,type:"text",title:"Example: hook"},{depth:3,type:"text",title:"Example: functions"},{depth:2,type:"text",title:"API"}],b={meta:l,headings:d};function m(e){var t=e.components,n=Object(r.a)(e,u);return Object(c.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"expo-screen-capture"))," allows you to protect screens in your app from being captured or recorded, as well as be notified if a screenshot is taken while your app is foregrounded. The two most common reasons you may want to prevent screen capture are:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"If a screen is displaying sensitive information (password, credit card data, etc.)"),Object(c.b)("li",{parentName:"ul"},"You are displaying paid content that you don't want recorded and shared")),Object(c.b)("p",null,"This is especially important on Android, since the ",Object(c.b)("a",{parentName:"p",href:"https://developer.android.com/about/versions/android-5.0.html#ScreenCapture"},Object(c.b)("inlineCode",{parentName:"a"},"android.media.projection"))," API allows third-party apps to perform screen capture or screen sharing (even if the app is backgrounded)."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Currently, taking screenshots on iOS cannot be prevented. This is due to underlying OS limitations.")),Object(c.b)(s.a,{android:!0,emulator:!0,ios:!0,simulator:!0,mdxType:"PlatformsSection"}),Object(c.b)("h2",{id:"installation"},"Installation"),Object(c.b)(i.b,{packageName:"expo-screen-capture",mdxType:"InstallSection"}),Object(c.b)("h2",{id:"usage"},"Usage"),Object(c.b)("h3",{id:"example-hook"},"Example: hook"),Object(c.b)(p.a,{label:"Screen Capture hook",dependencies:["expo-screen-capture"],mdxType:"SnackInline"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"import { usePreventScreenCapture } from 'expo-screen-capture';\nimport React from 'react';\nimport { Text, View } from 'react-native';\n\nexport default function ScreenCaptureExample() {\n  usePreventScreenCapture();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>As long as this component is mounted, this screen is unrecordable!</Text>\n    </View>\n  );\n}\n"))),Object(c.b)("h3",{id:"example-functions"},"Example: functions"),Object(c.b)(p.a,{label:"Screen Capture functions",dependencies:["expo-screen-capture","expo-media-library"],mdxType:"SnackInline"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { Button, View, Platform } from 'react-native';\nimport * as ScreenCapture from 'expo-screen-capture';\nimport * as MediaLibrary from 'expo-media-library';\n\nexport default class ScreenCaptureExample extends React.Component {\n  async componentDidMount() {\n    // This permission is only required on Android\n    const { status } = await MediaLibrary.requestPermissionsAsync();\n    if (status === 'granted') {\n      ScreenCapture.addScreenshotListener(() => {\n        alert('Thanks for screenshotting my beautiful app \ud83d\ude0a');\n      });\n    }\n  }\n\n  render() {\n    return (\n      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>\n        <Button title=\"Activate\" onPress={this._activate} />\n        <Button title=\"Deactivate\" onPress={this._deactivate} />\n      </View>\n    );\n  }\n\n  _activate = async () => {\n    await ScreenCapture.preventScreenCaptureAsync();\n  };\n\n  _deactivate = async () => {\n    await ScreenCapture.allowScreenCaptureAsync();\n  };\n}\n"))),Object(c.b)("h2",{id:"api"},"API"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"import * as ScreenCapture from 'expo-screen-capture';\n")),Object(c.b)(o.a,{packageName:"expo-screen-capture",apiName:"ScreenCapture",mdxType:"APISection"}))}m.isMDXComponent=!0},ufKf:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var a="https://snack.expo.dev";function r(e){var t=e.templateId,n=e.code,a=e.files,r=e.baseURL,c={};return a&&Object.keys(a).forEach((function(e){var t=a[e],n=/\.(jsx?|tsx?|json|md)$/i.test(e);c[e]=n?{type:"CODE",url:t.match(/^https?:\/\//)?t:"".concat(r,"/").concat(t)}:{type:"ASSET",contents:t}})),t?c["App.js"]={type:"CODE",url:"".concat(r,"/").concat(t,".js")}:n&&(c["App.js"]={type:"CODE",contents:n}),c}}},[["dL6d",1,0,2,3,4,5,6,7,8,9,10,11,12,13,14]]]);