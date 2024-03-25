_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[1285],{"4BhB":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v44.0.0/sdk/clipboard",function(){return n("JGhP")}])},I0q5:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var o=n("z7pX"),c=n("H+61"),a=n("UlJF"),i=n("+Css"),r=n("7LId"),s=n("VIvw"),p=n("iHvq"),d=n("cpVT"),l=n("q1tI"),u=n("ufKf"),b=n("3zh3"),f=n("AeFk"),h=function(e){var t=e.size,n=void 0===t?24:t,o=e.stroke,c=void 0===o?b.palette.dark.white:o;return Object(f.c)("svg",{"aria-label":"check",width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(f.c)("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3",stroke:c,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))},j=n("5BX9");function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(p.a)(e);if(t){var c=Object(p.a)(this).constructor;n=Reflect.construct(o,arguments,c)}else n=o.apply(this,arguments);return Object(s.a)(this,n)}}var O="v".concat(n("kiQV").version),y=function(e){Object(r.a)(n,e);var t=m(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return e=t.call.apply(t,[this].concat(r)),Object(d.a)(Object(i.a)(e),"contentRef",l.createRef()),Object(d.a)(Object(i.a)(e),"state",{ready:!1}),Object(d.a)(Object(i.a)(e),"getSelectedDocsVersion",(function(){var t=e.context.version;return"latest"===t?O:t})),Object(d.a)(Object(i.a)(e),"getSnackSdkVersion",(function(){var t=e.getSelectedDocsVersion();return"unversioned"===t&&(t=O),t.replace("v","")})),Object(d.a)(Object(i.a)(e),"getExamplesPath",(function(){return"".concat(document.location.origin,"/static/examples/").concat(e.getSelectedDocsVersion())})),Object(d.a)(Object(i.a)(e),"getDependencies",(function(){return Object(o.a)(e.props.dependencies).join(",")})),Object(d.a)(Object(i.a)(e),"getCode",(function(){return(e.contentRef.current&&e.contentRef.current.textContent||"").replace(/%%placeholder-start%%.*%%placeholder-end%%/g,"")})),e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.setState({ready:!0})}},{key:"render",value:function(){return Object(f.c)("div",null,Object(f.c)("div",{ref:this.contentRef,style:this.props.contentHidden?{display:"none"}:void 0},this.props.children),Object(f.c)("form",{action:u.a,method:"POST",target:"_blank"},Object(f.c)("input",{type:"hidden",name:"platform",value:this.props.defaultPlatform||"android"}),Object(f.c)("input",{type:"hidden",name:"name",value:this.props.label||"Example"}),Object(f.c)("input",{type:"hidden",name:"dependencies",value:this.getDependencies()}),Object(f.c)("input",{type:"hidden",name:"sdkVersion",value:this.getSnackSdkVersion()}),this.props.platforms&&Object(f.c)("input",{type:"hidden",name:"supportedPlatforms",value:this.props.platforms.join(",")}),this.state.ready&&Object(f.c)("input",{type:"hidden",name:"files",value:JSON.stringify(Object(u.b)({templateId:this.props.templateId,code:this.getCode(),files:this.props.files,baseURL:this.getExamplesPath()}))}),Object(f.c)("button",{className:"snack-inline-example-button",disabled:!this.state.ready},Object(f.c)(h,{size:16})," ",this.props.buttonTitle||"Try this example on Snack")))}}]),n}(l.Component);Object(d.a)(y,"contextType",j.a),Object(d.a)(y,"defaultProps",{dependencies:[]})},JGhP:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return l})),n.d(t,"headings",(function(){return u})),n.d(t,"default",(function(){return f}));var o=n("HALo"),c=n("dhJC"),a=(n("q1tI"),n("7ljp")),i=n("3Ukx"),r=n("HCau"),s=n("hykZ"),p=n("I0q5"),d=["components"],l={title:"Clipboard",sourceCodeUrl:"https://github.com/expo/expo/tree/sdk-44/packages/expo-clipboard"},u=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"Usage"},{depth:2,type:"text",title:"API"}],b={meta:l,headings:u};function f(e){var t=e.components,n=Object(c.a)(e,d);return Object(a.b)("wrapper",Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"expo-clipboard"))," provides an interface for getting and setting Clipboard content on Android, iOS, and Web."),Object(a.b)(s.a,{android:!0,emulator:!0,ios:!0,simulator:!0,web:!0,mdxType:"PlatformsSection"}),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)(r.b,{packageName:"expo-clipboard",mdxType:"InstallSection"}),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)(p.a,{label:"Clipboard",dependencies:["expo-clipboard"],platforms:["ios","android"],mdxType:"SnackInline"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import * as React from 'react';\nimport { View, Text, Button, StyleSheet } from 'react-native';\nimport * as Clipboard from 'expo-clipboard';\n\nexport default function App() {\n  const [copiedText, setCopiedText] = React.useState('');\n\n  const copyToClipboard = () => {\n    /* @info */ Clipboard.setString('hello world');/* @end */\n\n  };\n\n  const fetchCopiedText = async () => {\n    const text = /* @info */ await Clipboard.getStringAsync();\n    /* @end */\n    setCopiedText(text);\n  };\n\n  return (\n    <View style={styles.container}>\n      <Button title=\"Click here to copy to Clipboard\" onPress={copyToClipboard} />\n      <Button title=\"View copied text\" onPress={fetchCopiedText} />\n      <Text style={styles.copiedText}>{copiedText}</Text>\n    </View>\n  );\n}\n\n/* @hide const styles = StyleSheet.create({ ... }); */\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center',\n  },\n  copiedText: {\n    marginTop: 10,\n    color: 'red',\n  },\n});\n/* @end */\n"))),Object(a.b)("h2",{id:"api"},"API"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"import * as Clipboard from 'expo-clipboard';\n")),Object(a.b)(i.a,{packageName:"expo-clipboard",mdxType:"APISection"}))}f.isMDXComponent=!0},ufKf:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c}));var o="https://snack.expo.dev";function c(e){var t=e.templateId,n=e.code,o=e.files,c=e.baseURL,a={};return o&&Object.keys(o).forEach((function(e){var t=o[e],n=/\.(jsx?|tsx?|json|md)$/i.test(e);a[e]=n?{type:"CODE",url:t.match(/^https?:\/\//)?t:"".concat(c,"/").concat(t)}:{type:"ASSET",contents:t}})),t?a["App.js"]={type:"CODE",url:"".concat(c,"/").concat(t,".js")}:n&&(a["App.js"]={type:"CODE",contents:n}),a}}},[["4BhB",1,0,2,3,4,5,6,7,8,9,10,11,12,13,14]]]);