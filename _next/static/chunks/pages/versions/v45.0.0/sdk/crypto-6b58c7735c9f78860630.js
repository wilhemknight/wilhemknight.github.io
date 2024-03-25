_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[1450],{"8cQj":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v45.0.0/sdk/crypto",function(){return n("By4p")}])},By4p:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return d})),n.d(t,"headings",(function(){return u})),n.d(t,"default",(function(){return j}));var a=n("HALo"),c=n("dhJC"),r=(n("q1tI"),n("7ljp")),o=n("3Ukx"),i=n("HCau"),s=n("hykZ"),p=n("I0q5"),l=["components"],d={title:"Crypto",sourceCodeUrl:"https://github.com/expo/expo/tree/sdk-45/packages/expo-crypto",packageName:"expo-crypto"},u=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"Usage"},{depth:2,type:"text",title:"API"},{depth:2,type:"text",title:"Error Codes"}],b={meta:d,headings:u};function j(e){var t=e.components,n=Object(c.a)(e,l);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"expo-crypto")," enables you to hash data in an equivalent manner to the Node.js core ",Object(r.b)("inlineCode",{parentName:"p"},"crypto")," API."),Object(r.b)(s.a,{android:!0,emulator:!0,ios:!0,simulator:!0,web:!0,mdxType:"PlatformsSection"}),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)(i.a,{mdxType:"APIInstallSection"}),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)(p.a,{label:"Basic Crypto usage",dependencies:["expo-crypto"],mdxType:"SnackInline"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"import React, { useEffect } from 'react';\nimport { StyleSheet, View, Text } from 'react-native';\nimport * as Crypto from 'expo-crypto';\n\nexport default function App() {\n  useEffect(() => {\n    (async () => {\n      const digest = await Crypto.digestStringAsync(\n        Crypto.CryptoDigestAlgorithm.SHA256,\n        'GitHub stars are neat \ud83c\udf1f'\n      );\n      console.log('Digest: ', digest);\n      /* Some crypto operation... */\n    })();\n  }, []);\n\n  return (\n    <View style={styles.container}>\n      <Text>Crypto Module Example</Text>\n    </View>\n  );\n}\n\n/* @hide const styles = StyleSheet.create({ ... }); */\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: '#fff',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n});\n/* @end */\n"))),Object(r.b)("h2",{id:"api"},"API"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import * as Crypto from 'expo-crypto';\n")),Object(r.b)(o.a,{packageName:"expo-crypto",apiName:"Crypto",mdxType:"APISection"}),Object(r.b)("h2",{id:"error-codes"},"Error Codes"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Code"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"ERR_CRYPTO_UNAVAILABLE")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Web Only.")," Access to the WebCrypto API is restricted to secure origins (https). ",Object(r.b)("br",null),"You can run your web project from a secure origin with ",Object(r.b)("inlineCode",{parentName:"td"},"expo start --https"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"ERR_CRYPTO_DIGEST")),Object(r.b)("td",{parentName:"tr",align:null},"An invalid encoding type provided.")))))}j.isMDXComponent=!0},I0q5:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var a=n("z7pX"),c=n("H+61"),r=n("UlJF"),o=n("+Css"),i=n("7LId"),s=n("VIvw"),p=n("iHvq"),l=n("cpVT"),d=n("q1tI"),u=n("ufKf"),b=n("3zh3"),j=n("AeFk"),f=function(e){var t=e.size,n=void 0===t?24:t,a=e.stroke,c=void 0===a?b.palette.dark.white:a;return Object(j.c)("svg",{"aria-label":"check",width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(j.c)("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3",stroke:c,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))},m=n("5BX9");function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(p.a)(e);if(t){var c=Object(p.a)(this).constructor;n=Reflect.construct(a,arguments,c)}else n=a.apply(this,arguments);return Object(s.a)(this,n)}}var O="v".concat(n("kiQV").version),y=function(e){Object(i.a)(n,e);var t=h(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return e=t.call.apply(t,[this].concat(i)),Object(l.a)(Object(o.a)(e),"contentRef",d.createRef()),Object(l.a)(Object(o.a)(e),"state",{ready:!1}),Object(l.a)(Object(o.a)(e),"getSelectedDocsVersion",(function(){var t=e.context.version;return"latest"===t?O:t})),Object(l.a)(Object(o.a)(e),"getSnackSdkVersion",(function(){var t=e.getSelectedDocsVersion();return"unversioned"===t&&(t=O),t.replace("v","")})),Object(l.a)(Object(o.a)(e),"getExamplesPath",(function(){return"".concat(document.location.origin,"/static/examples/").concat(e.getSelectedDocsVersion())})),Object(l.a)(Object(o.a)(e),"getDependencies",(function(){return Object(a.a)(e.props.dependencies).join(",")})),Object(l.a)(Object(o.a)(e),"getCode",(function(){return(e.contentRef.current&&e.contentRef.current.textContent||"").replace(/%%placeholder-start%%.*%%placeholder-end%%/g,"")})),e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.setState({ready:!0})}},{key:"render",value:function(){return Object(j.c)("div",null,Object(j.c)("div",{ref:this.contentRef,style:this.props.contentHidden?{display:"none"}:void 0},this.props.children),Object(j.c)("form",{action:u.a,method:"POST",target:"_blank"},Object(j.c)("input",{type:"hidden",name:"platform",value:this.props.defaultPlatform||"android"}),Object(j.c)("input",{type:"hidden",name:"name",value:this.props.label||"Example"}),Object(j.c)("input",{type:"hidden",name:"dependencies",value:this.getDependencies()}),Object(j.c)("input",{type:"hidden",name:"sdkVersion",value:this.getSnackSdkVersion()}),this.props.platforms&&Object(j.c)("input",{type:"hidden",name:"supportedPlatforms",value:this.props.platforms.join(",")}),this.state.ready&&Object(j.c)("input",{type:"hidden",name:"files",value:JSON.stringify(Object(u.b)({templateId:this.props.templateId,code:this.getCode(),files:this.props.files,baseURL:this.getExamplesPath()}))}),Object(j.c)("button",{className:"snack-inline-example-button",disabled:!this.state.ready},Object(j.c)(f,{size:16})," ",this.props.buttonTitle||"Try this example on Snack")))}}]),n}(d.Component);Object(l.a)(y,"contextType",m.a),Object(l.a)(y,"defaultProps",{dependencies:[]})},ufKf:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var a="https://snack.expo.dev";function c(e){var t=e.templateId,n=e.code,a=e.files,c=e.baseURL,r={};return a&&Object.keys(a).forEach((function(e){var t=a[e],n=/\.(jsx?|tsx?|json|md)$/i.test(e);r[e]=n?{type:"CODE",url:t.match(/^https?:\/\//)?t:"".concat(c,"/").concat(t)}:{type:"ASSET",contents:t}})),t?r["App.js"]={type:"CODE",url:"".concat(c,"/").concat(t,".js")}:n&&(r["App.js"]={type:"CODE",contents:n}),r}}},[["8cQj",1,0,2,3,4,5,6,7,8,9,10,11,12,13,14]]]);