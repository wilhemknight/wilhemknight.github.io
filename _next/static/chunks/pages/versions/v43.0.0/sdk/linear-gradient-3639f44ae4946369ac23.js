_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[1152],{DELp:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return d})),n.d(t,"headings",(function(){return u})),n.d(t,"default",(function(){return f}));var a=n("HALo"),r=n("dhJC"),i=(n("q1tI"),n("7ljp")),c=n("3Ukx"),o=n("HCau"),s=n("hykZ"),p=n("I0q5"),l=["components"],d={title:"LinearGradient",sourceCodeUrl:"https://github.com/expo/expo/tree/sdk-43/packages/expo-linear-gradient"},u=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"Usage"},{depth:2,type:"text",title:"API"}],b={meta:d,headings:u};function f(e){var t=e.components,n=Object(r.a)(e,l);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"expo-linear-gradient"))," provides a native React view that transitions between multiple colors in a linear direction."),Object(i.b)(s.a,{android:!0,emulator:!0,ios:!0,simulator:!0,web:!0,mdxType:"PlatformsSection"}),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)(o.b,{packageName:"expo-linear-gradient",mdxType:"InstallSection"}),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)(p.a,{label:"Linear Gradient",dependencies:["expo-linear-gradient"],mdxType:"SnackInline"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react';\nimport { StyleSheet, Text, View } from 'react-native';\nimport { LinearGradient } from 'expo-linear-gradient';\n\nexport default function App() {\n  return (\n    <View style={styles.container}>\n      <LinearGradient\n        // Background Linear Gradient\n        colors={['rgba(0,0,0,0.8)', 'transparent']}\n        style={styles.background}\n      />\n      <LinearGradient\n        // Button Linear Gradient\n        colors={['#4c669f', '#3b5998', '#192f6a']}\n        style={styles.button}>\n        <Text style={styles.text}>Sign in with Facebook</Text>\n      </LinearGradient>\n    </View>\n  );\n}\n\n/* @hide const styles = StyleSheet.create({ ... }); */\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n    backgroundColor: 'orange',\n  },\n  background: {\n    position: 'absolute',\n    left: 0,\n    right: 0,\n    top: 0,\n    height: 300,\n  },\n  button: {\n    padding: 15,\n    alignItems: 'center',\n    borderRadius: 5,\n  },\n  text: {\n    backgroundColor: 'transparent',\n    fontSize: 15,\n    color: '#fff',\n  },\n});\n/* @end */\n"))),Object(i.b)("h2",{id:"api"},"API"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import { LinearGradient } from 'expo-linear-gradient';\n")),Object(i.b)(c.a,{packageName:"expo-linear-gradient",mdxType:"APISection"}))}f.isMDXComponent=!0},I0q5:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n("z7pX"),r=n("H+61"),i=n("UlJF"),c=n("+Css"),o=n("7LId"),s=n("VIvw"),p=n("iHvq"),l=n("cpVT"),d=n("q1tI"),u=n("ufKf"),b=n("3zh3"),f=n("AeFk"),h=function(e){var t=e.size,n=void 0===t?24:t,a=e.stroke,r=void 0===a?b.palette.dark.white:a;return Object(f.c)("svg",{"aria-label":"check",width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(f.c)("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))},m=n("5BX9");function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(p.a)(e);if(t){var r=Object(p.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(s.a)(this,n)}}var O="v".concat(n("kiQV").version),g=function(e){Object(o.a)(n,e);var t=j(n);function n(){var e;Object(r.a)(this,n);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return e=t.call.apply(t,[this].concat(o)),Object(l.a)(Object(c.a)(e),"contentRef",d.createRef()),Object(l.a)(Object(c.a)(e),"state",{ready:!1}),Object(l.a)(Object(c.a)(e),"getSelectedDocsVersion",(function(){var t=e.context.version;return"latest"===t?O:t})),Object(l.a)(Object(c.a)(e),"getSnackSdkVersion",(function(){var t=e.getSelectedDocsVersion();return"unversioned"===t&&(t=O),t.replace("v","")})),Object(l.a)(Object(c.a)(e),"getExamplesPath",(function(){return"".concat(document.location.origin,"/static/examples/").concat(e.getSelectedDocsVersion())})),Object(l.a)(Object(c.a)(e),"getDependencies",(function(){return Object(a.a)(e.props.dependencies).join(",")})),Object(l.a)(Object(c.a)(e),"getCode",(function(){return(e.contentRef.current&&e.contentRef.current.textContent||"").replace(/%%placeholder-start%%.*%%placeholder-end%%/g,"")})),e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.setState({ready:!0})}},{key:"render",value:function(){return Object(f.c)("div",null,Object(f.c)("div",{ref:this.contentRef,style:this.props.contentHidden?{display:"none"}:void 0},this.props.children),Object(f.c)("form",{action:u.a,method:"POST",target:"_blank"},Object(f.c)("input",{type:"hidden",name:"platform",value:this.props.defaultPlatform||"android"}),Object(f.c)("input",{type:"hidden",name:"name",value:this.props.label||"Example"}),Object(f.c)("input",{type:"hidden",name:"dependencies",value:this.getDependencies()}),Object(f.c)("input",{type:"hidden",name:"sdkVersion",value:this.getSnackSdkVersion()}),this.props.platforms&&Object(f.c)("input",{type:"hidden",name:"supportedPlatforms",value:this.props.platforms.join(",")}),this.state.ready&&Object(f.c)("input",{type:"hidden",name:"files",value:JSON.stringify(Object(u.b)({templateId:this.props.templateId,code:this.getCode(),files:this.props.files,baseURL:this.getExamplesPath()}))}),Object(f.c)("button",{className:"snack-inline-example-button",disabled:!this.state.ready},Object(f.c)(h,{size:16})," ",this.props.buttonTitle||"Try this example on Snack")))}}]),n}(d.Component);Object(l.a)(g,"contextType",m.a),Object(l.a)(g,"defaultProps",{dependencies:[]})},P0De:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v43.0.0/sdk/linear-gradient",function(){return n("DELp")}])},ufKf:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var a="https://snack.expo.dev";function r(e){var t=e.templateId,n=e.code,a=e.files,r=e.baseURL,i={};return a&&Object.keys(a).forEach((function(e){var t=a[e],n=/\.(jsx?|tsx?|json|md)$/i.test(e);i[e]=n?{type:"CODE",url:t.match(/^https?:\/\//)?t:"".concat(r,"/").concat(t)}:{type:"ASSET",contents:t}})),t?i["App.js"]={type:"CODE",url:"".concat(r,"/").concat(t,".js")}:n&&(i["App.js"]={type:"CODE",contents:n}),i}}},[["P0De",1,0,2,3,4,5,6,7,8,9,10,11,12,13,14]]]);