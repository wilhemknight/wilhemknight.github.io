_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[1328],{I0q5:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var o=n("z7pX"),a=n("H+61"),s=n("UlJF"),r=n("+Css"),c=n("7LId"),i=n("VIvw"),p=n("iHvq"),l=n("cpVT"),d=n("q1tI"),u=n("ufKf"),b=n("3zh3"),h=n("AeFk"),m=function(e){var t=e.size,n=void 0===t?24:t,o=e.stroke,a=void 0===o?b.palette.dark.white:o;return Object(h.c)("svg",{"aria-label":"check",width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(h.c)("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))},f=n("5BX9");function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(p.a)(e);if(t){var a=Object(p.a)(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return Object(i.a)(this,n)}}var O="v".concat(n("kiQV").version),y=function(e){Object(c.a)(n,e);var t=j(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return e=t.call.apply(t,[this].concat(c)),Object(l.a)(Object(r.a)(e),"contentRef",d.createRef()),Object(l.a)(Object(r.a)(e),"state",{ready:!1}),Object(l.a)(Object(r.a)(e),"getSelectedDocsVersion",(function(){var t=e.context.version;return"latest"===t?O:t})),Object(l.a)(Object(r.a)(e),"getSnackSdkVersion",(function(){var t=e.getSelectedDocsVersion();return"unversioned"===t&&(t=O),t.replace("v","")})),Object(l.a)(Object(r.a)(e),"getExamplesPath",(function(){return"".concat(document.location.origin,"/static/examples/").concat(e.getSelectedDocsVersion())})),Object(l.a)(Object(r.a)(e),"getDependencies",(function(){return Object(o.a)(e.props.dependencies).join(",")})),Object(l.a)(Object(r.a)(e),"getCode",(function(){return(e.contentRef.current&&e.contentRef.current.textContent||"").replace(/%%placeholder-start%%.*%%placeholder-end%%/g,"")})),e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.setState({ready:!0})}},{key:"render",value:function(){return Object(h.c)("div",null,Object(h.c)("div",{ref:this.contentRef,style:this.props.contentHidden?{display:"none"}:void 0},this.props.children),Object(h.c)("form",{action:u.a,method:"POST",target:"_blank"},Object(h.c)("input",{type:"hidden",name:"platform",value:this.props.defaultPlatform||"android"}),Object(h.c)("input",{type:"hidden",name:"name",value:this.props.label||"Example"}),Object(h.c)("input",{type:"hidden",name:"dependencies",value:this.getDependencies()}),Object(h.c)("input",{type:"hidden",name:"sdkVersion",value:this.getSnackSdkVersion()}),this.props.platforms&&Object(h.c)("input",{type:"hidden",name:"supportedPlatforms",value:this.props.platforms.join(",")}),this.state.ready&&Object(h.c)("input",{type:"hidden",name:"files",value:JSON.stringify(Object(u.b)({templateId:this.props.templateId,code:this.getCode(),files:this.props.files,baseURL:this.getExamplesPath()}))}),Object(h.c)("button",{className:"snack-inline-example-button",disabled:!this.state.ready},Object(h.c)(m,{size:16})," ",this.props.buttonTitle||"Try this example on Snack")))}}]),n}(d.Component);Object(l.a)(y,"contextType",f.a),Object(l.a)(y,"defaultProps",{dependencies:[]})},Ttax:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v44.0.0/sdk/pedometer",function(){return n("dX4G")}])},dX4G:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return d})),n.d(t,"headings",(function(){return u})),n.d(t,"default",(function(){return h}));var o=n("HALo"),a=n("dhJC"),s=(n("q1tI"),n("7ljp")),r=n("3Ukx"),c=n("HCau"),i=n("hykZ"),p=n("I0q5"),l=["components"],d={title:"Pedometer",sourceCodeUrl:"https://github.com/expo/expo/tree/sdk-44/packages/expo-sensors"},u=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"Usage"},{depth:2,type:"text",title:"API"},{depth:2,type:"text",title:"Standalone Applications"}],b={meta:d,headings:u};function h(e){var t=e.components,n=Object(a.a)(e,l);return Object(s.b)("wrapper",Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"Pedometer")," from ",Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"expo-sensors"))," uses Core Motion on iOS and the system ",Object(s.b)("inlineCode",{parentName:"p"},"hardware.Sensor")," on Android to get the user's step count, and also allows you to subscribe to pedometer updates."),Object(s.b)(i.a,{android:!0,emulator:!0,ios:!0,simulator:!0,mdxType:"PlatformsSection"}),Object(s.b)("h2",{id:"installation"},"Installation"),Object(s.b)(c.b,{packageName:"expo-sensors",mdxType:"InstallSection"}),Object(s.b)("h2",{id:"usage"},"Usage"),Object(s.b)(p.a,{label:"Pedometer",dependencies:["expo-sensors"],mdxType:"SnackInline"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { StyleSheet, Text, View } from 'react-native';\nimport { Pedometer } from 'expo-sensors';\n\nexport default class App extends React.Component {\n  state = {\n    isPedometerAvailable: 'checking',\n    pastStepCount: 0,\n    currentStepCount: 0,\n  };\n\n  componentDidMount() {\n    this._subscribe();\n  }\n\n  componentWillUnmount() {\n    this._unsubscribe();\n  }\n\n  _subscribe = () => {\n    this._subscription = Pedometer.watchStepCount(result => {\n      this.setState({\n        currentStepCount: result.steps,\n      });\n    });\n\n    Pedometer.isAvailableAsync().then(\n      result => {\n        this.setState({\n          isPedometerAvailable: String(result),\n        });\n      },\n      error => {\n        this.setState({\n          isPedometerAvailable: 'Could not get isPedometerAvailable: ' + error,\n        });\n      }\n    );\n\n    const end = new Date();\n    const start = new Date();\n    start.setDate(end.getDate() - 1);\n    Pedometer.getStepCountAsync(start, end).then(\n      result => {\n        this.setState({ pastStepCount: result.steps });\n      },\n      error => {\n        this.setState({\n          pastStepCount: 'Could not get stepCount: ' + error,\n        });\n      }\n    );\n  };\n\n  _unsubscribe = () => {\n    this._subscription && this._subscription.remove();\n    this._subscription = null;\n  };\n\n  render() {\n    return (\n      <View style={styles.container}>\n        <Text>Pedometer.isAvailableAsync(): {this.state.isPedometerAvailable}</Text>\n        <Text>Steps taken in the last 24 hours: {this.state.pastStepCount}</Text>\n        <Text>Walk! And watch this go up: {this.state.currentStepCount}</Text>\n      </View>\n    );\n  }\n}\n\n/* @hide const styles = StyleSheet.create({ ... }); */\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    marginTop: 15,\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n});\n/* @end */\n"))),Object(s.b)("h2",{id:"api"},"API"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"import { Pedometer } from 'expo-sensors';\n")),Object(s.b)(r.a,{packageName:"expo-pedometer",apiName:"Pedometer",mdxType:"APISection"}),Object(s.b)("h2",{id:"standalone-applications"},"Standalone Applications"),Object(s.b)("p",null,"You'll need to configure an Android OAuth client for your app on the Google Play console for it to work as a standalone application on the Android platform. See ",Object(s.b)("a",{parentName:"p",href:"https://developers.google.com/fit/android/get-api-key"},"https://developers.google.com/fit/android/get-api-key")))}h.isMDXComponent=!0},ufKf:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a}));var o="https://snack.expo.dev";function a(e){var t=e.templateId,n=e.code,o=e.files,a=e.baseURL,s={};return o&&Object.keys(o).forEach((function(e){var t=o[e],n=/\.(jsx?|tsx?|json|md)$/i.test(e);s[e]=n?{type:"CODE",url:t.match(/^https?:\/\//)?t:"".concat(a,"/").concat(t)}:{type:"ASSET",contents:t}})),t?s["App.js"]={type:"CODE",url:"".concat(a,"/").concat(t,".js")}:n&&(s["App.js"]={type:"CODE",contents:n}),s}}},[["Ttax",1,0,2,3,4,5,6,7,8,9,10,11,12,13,14]]]);