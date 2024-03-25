_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[1116],{I0q5:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var a=n("z7pX"),r=n("H+61"),i=n("UlJF"),c=n("+Css"),o=n("7LId"),s=n("VIvw"),l=n("iHvq"),u=n("cpVT"),p=n("q1tI"),d=n("ufKf"),b=n("3zh3"),f=n("AeFk"),h=function(e){var t=e.size,n=void 0===t?24:t,a=e.stroke,r=void 0===a?b.palette.dark.white:a;return Object(f.c)("svg",{"aria-label":"check",width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(f.c)("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))},m=n("5BX9");function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(l.a)(e);if(t){var r=Object(l.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(s.a)(this,n)}}var j="v".concat(n("kiQV").version),O=function(e){Object(o.a)(n,e);var t=y(n);function n(){var e;Object(r.a)(this,n);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return e=t.call.apply(t,[this].concat(o)),Object(u.a)(Object(c.a)(e),"contentRef",p.createRef()),Object(u.a)(Object(c.a)(e),"state",{ready:!1}),Object(u.a)(Object(c.a)(e),"getSelectedDocsVersion",(function(){var t=e.context.version;return"latest"===t?j:t})),Object(u.a)(Object(c.a)(e),"getSnackSdkVersion",(function(){var t=e.getSelectedDocsVersion();return"unversioned"===t&&(t=j),t.replace("v","")})),Object(u.a)(Object(c.a)(e),"getExamplesPath",(function(){return"".concat(document.location.origin,"/static/examples/").concat(e.getSelectedDocsVersion())})),Object(u.a)(Object(c.a)(e),"getDependencies",(function(){return Object(a.a)(e.props.dependencies).join(",")})),Object(u.a)(Object(c.a)(e),"getCode",(function(){return(e.contentRef.current&&e.contentRef.current.textContent||"").replace(/%%placeholder-start%%.*%%placeholder-end%%/g,"")})),e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.setState({ready:!0})}},{key:"render",value:function(){return Object(f.c)("div",null,Object(f.c)("div",{ref:this.contentRef,style:this.props.contentHidden?{display:"none"}:void 0},this.props.children),Object(f.c)("form",{action:d.a,method:"POST",target:"_blank"},Object(f.c)("input",{type:"hidden",name:"platform",value:this.props.defaultPlatform||"android"}),Object(f.c)("input",{type:"hidden",name:"name",value:this.props.label||"Example"}),Object(f.c)("input",{type:"hidden",name:"dependencies",value:this.getDependencies()}),Object(f.c)("input",{type:"hidden",name:"sdkVersion",value:this.getSnackSdkVersion()}),this.props.platforms&&Object(f.c)("input",{type:"hidden",name:"supportedPlatforms",value:this.props.platforms.join(",")}),this.state.ready&&Object(f.c)("input",{type:"hidden",name:"files",value:JSON.stringify(Object(d.b)({templateId:this.props.templateId,code:this.getCode(),files:this.props.files,baseURL:this.getExamplesPath()}))}),Object(f.c)("button",{className:"snack-inline-example-button",disabled:!this.state.ready},Object(f.c)(h,{size:16})," ",this.props.buttonTitle||"Try this example on Snack")))}}]),n}(p.Component);Object(u.a)(O,"contextType",m.a),Object(u.a)(O,"defaultProps",{dependencies:[]})},QIVq:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return p})),n.d(t,"headings",(function(){return d})),n.d(t,"default",(function(){return f}));var a=n("HALo"),r=n("dhJC"),i=(n("q1tI"),n("7ljp")),c=n("3Ukx"),o=n("HCau"),s=n("hykZ"),l=n("I0q5"),u=["components"],p={title:"BlurView",sourceCodeUrl:"https://github.com/expo/expo/tree/sdk-43/packages/expo-blur"},d=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"Usage"},{depth:2,type:"text",title:"API"}],b={meta:p,headings:d};function f(e){var t=e.components,n=Object(r.a)(e,u);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A React component that blurs everything underneath the view. On iOS, it renders a native blur view. On Android, it falls back to a semi-transparent view. Common usage of this is for navigation bars, tab bars, and modals."),Object(i.b)(s.a,{android:!0,emulator:!0,ios:!0,simulator:!0,web:!0,mdxType:"PlatformsSection"}),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)(o.b,{packageName:"expo-blur",mdxType:"InstallSection"}),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)(l.a,{label:"Basic BlurView usage",dependencies:["expo-blur"],mdxType:"SnackInline"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { Image, Text, StyleSheet, View } from 'react-native';\nimport { BlurView } from 'expo-blur';\n\nconst uri = 'https://s3.amazonaws.com/exp-icon-assets/ExpoEmptyManifest_192.png';\n\nexport default function App() {\n  const text = 'Hello, my container is blurring contents underneath!';\n  return (\n    <View style={styles.container}>\n      <Image style={[StyleSheet.absoluteFill, styles.image]} source={{ uri }} />\n      <BlurView intensity={100} style={styles.blurContainer}>\n        <Text style={styles.text}>{text}</Text>\n      </BlurView>\n      <BlurView intensity={80} tint=\"light\" style={styles.blurContainer}>\n        <Text style={styles.text}>{text}</Text>\n      </BlurView>\n      <BlurView intensity={90} tint=\"dark\" style={styles.blurContainer}>\n        <Text style={[styles.text, { color: '#fff' }]}>{text}</Text>\n      </BlurView>\n    </View>\n  );\n}\n\n/* @hide const styles = StyleSheet.create({ ... }); */\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1\n  },\n  image: {\n    width: '100%',\n    height: '100%',\n    resizeMode: 'cover',\n  },\n  blurContainer: {\n    flex: 1,\n    padding: 20,\n    justifyContent: 'center',\n  },\n  text: {\n    fontSize: 24,\n    fontWeight: '600'\n  },\n});\n/* @end */\n"))),Object(i.b)("h2",{id:"api"},"API"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import { BlurView } from 'expo-blur';\n")),Object(i.b)(c.a,{packageName:"expo-blur",mdxType:"APISection"}))}f.isMDXComponent=!0},W9xb:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v43.0.0/sdk/blur-view",function(){return n("QIVq")}])},ufKf:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var a="https://snack.expo.dev";function r(e){var t=e.templateId,n=e.code,a=e.files,r=e.baseURL,i={};return a&&Object.keys(a).forEach((function(e){var t=a[e],n=/\.(jsx?|tsx?|json|md)$/i.test(e);i[e]=n?{type:"CODE",url:t.match(/^https?:\/\//)?t:"".concat(r,"/").concat(t)}:{type:"ASSET",contents:t}})),t?i["App.js"]={type:"CODE",url:"".concat(r,"/").concat(t,".js")}:n&&(i["App.js"]={type:"CODE",contents:n}),i}}},[["W9xb",1,0,2,3,4,5,6,7,8,9,10,11,12,13,14]]]);