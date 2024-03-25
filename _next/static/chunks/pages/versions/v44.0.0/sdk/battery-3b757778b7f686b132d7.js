_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[1276],{FAUf:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v44.0.0/sdk/battery",function(){return n("kjdk")}])},I0q5:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var a=n("z7pX"),c=n("H+61"),r=n("UlJF"),o=n("+Css"),s=n("7LId"),i=n("VIvw"),p=n("iHvq"),l=n("cpVT"),u=n("q1tI"),d=n("ufKf"),b=n("3zh3"),h=n("AeFk"),f=function(e){var t=e.size,n=void 0===t?24:t,a=e.stroke,c=void 0===a?b.palette.dark.white:a;return Object(h.c)("svg",{"aria-label":"check",width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(h.c)("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3",stroke:c,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))},y=n("5BX9");function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(p.a)(e);if(t){var c=Object(p.a)(this).constructor;n=Reflect.construct(a,arguments,c)}else n=a.apply(this,arguments);return Object(i.a)(this,n)}}var j="v".concat(n("kiQV").version),v=function(e){Object(s.a)(n,e);var t=m(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return e=t.call.apply(t,[this].concat(s)),Object(l.a)(Object(o.a)(e),"contentRef",u.createRef()),Object(l.a)(Object(o.a)(e),"state",{ready:!1}),Object(l.a)(Object(o.a)(e),"getSelectedDocsVersion",(function(){var t=e.context.version;return"latest"===t?j:t})),Object(l.a)(Object(o.a)(e),"getSnackSdkVersion",(function(){var t=e.getSelectedDocsVersion();return"unversioned"===t&&(t=j),t.replace("v","")})),Object(l.a)(Object(o.a)(e),"getExamplesPath",(function(){return"".concat(document.location.origin,"/static/examples/").concat(e.getSelectedDocsVersion())})),Object(l.a)(Object(o.a)(e),"getDependencies",(function(){return Object(a.a)(e.props.dependencies).join(",")})),Object(l.a)(Object(o.a)(e),"getCode",(function(){return(e.contentRef.current&&e.contentRef.current.textContent||"").replace(/%%placeholder-start%%.*%%placeholder-end%%/g,"")})),e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.setState({ready:!0})}},{key:"render",value:function(){return Object(h.c)("div",null,Object(h.c)("div",{ref:this.contentRef,style:this.props.contentHidden?{display:"none"}:void 0},this.props.children),Object(h.c)("form",{action:d.a,method:"POST",target:"_blank"},Object(h.c)("input",{type:"hidden",name:"platform",value:this.props.defaultPlatform||"android"}),Object(h.c)("input",{type:"hidden",name:"name",value:this.props.label||"Example"}),Object(h.c)("input",{type:"hidden",name:"dependencies",value:this.getDependencies()}),Object(h.c)("input",{type:"hidden",name:"sdkVersion",value:this.getSnackSdkVersion()}),this.props.platforms&&Object(h.c)("input",{type:"hidden",name:"supportedPlatforms",value:this.props.platforms.join(",")}),this.state.ready&&Object(h.c)("input",{type:"hidden",name:"files",value:JSON.stringify(Object(d.b)({templateId:this.props.templateId,code:this.getCode(),files:this.props.files,baseURL:this.getExamplesPath()}))}),Object(h.c)("button",{className:"snack-inline-example-button",disabled:!this.state.ready},Object(h.c)(f,{size:16})," ",this.props.buttonTitle||"Try this example on Snack")))}}]),n}(u.Component);Object(l.a)(v,"contextType",y.a),Object(l.a)(v,"defaultProps",{dependencies:[]})},kjdk:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return u})),n.d(t,"headings",(function(){return d})),n.d(t,"default",(function(){return h}));var a=n("HALo"),c=n("dhJC"),r=(n("q1tI"),n("7ljp")),o=n("3Ukx"),s=n("HCau"),i=n("hykZ"),p=n("I0q5"),l=["components"],u={title:"Battery",sourceCodeUrl:"https://github.com/expo/expo/tree/sdk-44/packages/expo-battery"},d=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"Usage"},{depth:2,type:"text",title:"API"}],b={meta:u,headings:d};function h(e){var t=e.components,n=Object(c.a)(e,l);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"expo-battery"))," provides battery information for the physical device (such as battery level, whether or not the device is charging, and more) as well as corresponding event listeners."),Object(r.b)(i.a,{android:!0,emulator:!0,ios:!0,web:!0,mdxType:"PlatformsSection"}),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)(s.b,{packageName:"expo-battery",mdxType:"InstallSection"}),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)(p.a,{label:"Basic Battery Usage",dependencies:["expo-battery"],mdxType:"SnackInline"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"import * as React from 'react';\nimport * as Battery from 'expo-battery';\nimport { StyleSheet, Text, View } from 'react-native';\n\nexport default class App extends React.Component {\n  state = {\n    batteryLevel: null,\n  };\n\n  componentDidMount() {\n    this._subscribe();\n  }\n\n  componentWillUnmount() {\n    this._unsubscribe();\n  }\n\n  async _subscribe() {\n    const batteryLevel = await Battery.getBatteryLevelAsync();\n    this.setState({ batteryLevel });\n    this._subscription = Battery.addBatteryLevelListener(({ batteryLevel }) => {\n      this.setState({ batteryLevel });\n      console.log('batteryLevel changed!', batteryLevel);\n    });\n  }\n\n  _unsubscribe() {\n    this._subscription && this._subscription.remove();\n    this._subscription = null;\n  }\n\n  render() {\n    return (\n      <View style={styles.container}>\n        <Text>Current Battery Level: {this.state.batteryLevel}</Text>\n      </View>\n    );\n  }\n}\n\n/* @hide const styles = StyleSheet.create({ ... }); */\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    marginTop: 15,\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n});\n/* @end */\n"))),Object(r.b)("h2",{id:"api"},"API"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import * as Battery from 'expo-battery';\n")),Object(r.b)(o.a,{packageName:"expo-battery",mdxType:"APISection"}))}h.isMDXComponent=!0},ufKf:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var a="https://snack.expo.dev";function c(e){var t=e.templateId,n=e.code,a=e.files,c=e.baseURL,r={};return a&&Object.keys(a).forEach((function(e){var t=a[e],n=/\.(jsx?|tsx?|json|md)$/i.test(e);r[e]=n?{type:"CODE",url:t.match(/^https?:\/\//)?t:"".concat(c,"/").concat(t)}:{type:"ASSET",contents:t}})),t?r["App.js"]={type:"CODE",url:"".concat(c,"/").concat(t,".js")}:n&&(r["App.js"]={type:"CODE",contents:n}),r}}},[["FAUf",1,0,2,3,4,5,6,7,8,9,10,11,12,13,14]]]);