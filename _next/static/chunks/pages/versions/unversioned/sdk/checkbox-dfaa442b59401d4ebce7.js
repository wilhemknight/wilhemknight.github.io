_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[481],{"C+sf":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/unversioned/sdk/checkbox",function(){return n("nUX+")}])},I0q5:function(e,t,n){"use strict";n.d(t,"a",(function(){return k}));var c=n("z7pX"),a=n("H+61"),o=n("UlJF"),s=n("+Css"),i=n("7LId"),r=n("VIvw"),p=n("iHvq"),l=n("cpVT"),u=n("q1tI"),d=n("ufKf"),b=n("3zh3"),h=n("AeFk"),f=function(e){var t=e.size,n=void 0===t?24:t,c=e.stroke,a=void 0===c?b.palette.dark.white:c;return Object(h.c)("svg",{"aria-label":"check",width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(h.c)("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))},m=n("5BX9");function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,c=Object(p.a)(e);if(t){var a=Object(p.a)(this).constructor;n=Reflect.construct(c,arguments,a)}else n=c.apply(this,arguments);return Object(r.a)(this,n)}}var j="v".concat(n("kiQV").version),k=function(e){Object(i.a)(n,e);var t=x(n);function n(){var e;Object(a.a)(this,n);for(var o=arguments.length,i=new Array(o),r=0;r<o;r++)i[r]=arguments[r];return e=t.call.apply(t,[this].concat(i)),Object(l.a)(Object(s.a)(e),"contentRef",u.createRef()),Object(l.a)(Object(s.a)(e),"state",{ready:!1}),Object(l.a)(Object(s.a)(e),"getSelectedDocsVersion",(function(){var t=e.context.version;return"latest"===t?j:t})),Object(l.a)(Object(s.a)(e),"getSnackSdkVersion",(function(){var t=e.getSelectedDocsVersion();return"unversioned"===t&&(t=j),t.replace("v","")})),Object(l.a)(Object(s.a)(e),"getExamplesPath",(function(){return"".concat(document.location.origin,"/static/examples/").concat(e.getSelectedDocsVersion())})),Object(l.a)(Object(s.a)(e),"getDependencies",(function(){return Object(c.a)(e.props.dependencies).join(",")})),Object(l.a)(Object(s.a)(e),"getCode",(function(){return(e.contentRef.current&&e.contentRef.current.textContent||"").replace(/%%placeholder-start%%.*%%placeholder-end%%/g,"")})),e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.setState({ready:!0})}},{key:"render",value:function(){return Object(h.c)("div",null,Object(h.c)("div",{ref:this.contentRef,style:this.props.contentHidden?{display:"none"}:void 0},this.props.children),Object(h.c)("form",{action:d.a,method:"POST",target:"_blank"},Object(h.c)("input",{type:"hidden",name:"platform",value:this.props.defaultPlatform||"android"}),Object(h.c)("input",{type:"hidden",name:"name",value:this.props.label||"Example"}),Object(h.c)("input",{type:"hidden",name:"dependencies",value:this.getDependencies()}),Object(h.c)("input",{type:"hidden",name:"sdkVersion",value:this.getSnackSdkVersion()}),this.props.platforms&&Object(h.c)("input",{type:"hidden",name:"supportedPlatforms",value:this.props.platforms.join(",")}),this.state.ready&&Object(h.c)("input",{type:"hidden",name:"files",value:JSON.stringify(Object(d.b)({templateId:this.props.templateId,code:this.getCode(),files:this.props.files,baseURL:this.getExamplesPath()}))}),Object(h.c)("button",{className:"snack-inline-example-button",disabled:!this.state.ready},Object(h.c)(f,{size:16})," ",this.props.buttonTitle||"Try this example on Snack")))}}]),n}(u.Component);Object(l.a)(k,"contextType",m.a),Object(l.a)(k,"defaultProps",{dependencies:[]})},"nUX+":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return u})),n.d(t,"headings",(function(){return d})),n.d(t,"default",(function(){return h}));var c=n("HALo"),a=n("dhJC"),o=(n("q1tI"),n("7ljp")),s=n("3Ukx"),i=n("HCau"),r=n("hykZ"),p=n("I0q5"),l=["components"],u={title:"Checkbox",sourceCodeUrl:"https://github.com/expo/expo/tree/main/packages/expo-checkbox",packageName:"expo-checkbox"},d=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"Usage"},{depth:2,type:"text",title:"API"}],b={meta:u,headings:d};function h(e){var t=e.components,n=Object(a.a)(e,l);return Object(o.b)("wrapper",Object(c.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"expo-checkbox"))," provides a basic ",Object(o.b)("inlineCode",{parentName:"p"},"boolean")," input element for all platforms. If you are looking for a more flexible checkbox component, please see the ",Object(o.b)("a",{parentName:"p",href:"/../../../../../../ui-programming/implementing-a-checkbox/"},"guide to implementing your own checkbox"),"."),Object(o.b)(r.a,{android:!0,emulator:!0,web:!0,ios:!0,simulator:!0,mdxType:"PlatformsSection"}),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)(i.a,{hideBareInstructions:!0,mdxType:"APIInstallSection"}),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)(p.a,{label:"Basic Checkbox usage",dependencies:["expo-checkbox"],platforms:["android","web"],mdxType:"SnackInline"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import Checkbox from 'expo-checkbox';\nimport React, { useState } from 'react';\nimport { StyleSheet, Text, View } from 'react-native';\n\nexport default function App() {\n  const [isChecked, setChecked] = useState(false);\n\n  return (\n    <View style={styles.container}>\n      <View style={styles.section}>\n        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />\n        <Text style={styles.paragraph}>Normal checkbox</Text>\n      </View>\n      <View style={styles.section}>\n        <Checkbox\n          style={styles.checkbox}\n          value={isChecked}\n          onValueChange={setChecked}\n          color={isChecked ? '#4630EB' : undefined}\n        />\n        <Text style={styles.paragraph}>Custom colored checkbox</Text>\n      </View>\n      <View style={styles.section}>\n        <Checkbox style={styles.checkbox} disabled value={isChecked} onValueChange={setChecked} />\n        <Text style={styles.paragraph}>Disabled checkbox</Text>\n      </View>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    marginHorizontal: 16,\n    marginVertical: 32,\n  },\n  section: {\n    flexDirection: 'row',\n    alignItems: 'center',\n  },\n  paragraph: {\n    fontSize: 15,\n  },\n  checkbox: {\n    margin: 8,\n  },\n});\n"))),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import Checkbox from 'expo-checkbox';\n")),Object(o.b)(s.a,{packageName:"expo-checkbox",apiName:"Checkbox",mdxType:"APISection"}))}h.isMDXComponent=!0},ufKf:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return a}));var c="https://snack.expo.dev";function a(e){var t=e.templateId,n=e.code,c=e.files,a=e.baseURL,o={};return c&&Object.keys(c).forEach((function(e){var t=c[e],n=/\.(jsx?|tsx?|json|md)$/i.test(e);o[e]=n?{type:"CODE",url:t.match(/^https?:\/\//)?t:"".concat(a,"/").concat(t)}:{type:"ASSET",contents:t}})),t?o["App.js"]={type:"CODE",url:"".concat(a,"/").concat(t,".js")}:n&&(o["App.js"]={type:"CODE",contents:n}),o}}},[["C+sf",1,0,2,3,4,5,6,7,8,9,10,11,12,13,14]]]);