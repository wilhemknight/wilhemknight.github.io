_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[508],{"4xW6":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/unversioned/sdk/keep-awake",function(){return n("ZUmA")}])},I0q5:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var a=n("z7pX"),c=n("H+61"),o=n("UlJF"),i=n("+Css"),r=n("7LId"),p=n("VIvw"),s=n("iHvq"),l=n("cpVT"),d=n("q1tI"),u=n("ufKf"),b=n("3zh3"),f=n("AeFk"),m=function(e){var t=e.size,n=void 0===t?24:t,a=e.stroke,c=void 0===a?b.palette.dark.white:a;return Object(f.c)("svg",{"aria-label":"check",width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(f.c)("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3",stroke:c,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))},h=n("5BX9");function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(s.a)(e);if(t){var c=Object(s.a)(this).constructor;n=Reflect.construct(a,arguments,c)}else n=a.apply(this,arguments);return Object(p.a)(this,n)}}var k="v".concat(n("kiQV").version),v=function(e){Object(r.a)(n,e);var t=j(n);function n(){var e;Object(c.a)(this,n);for(var o=arguments.length,r=new Array(o),p=0;p<o;p++)r[p]=arguments[p];return e=t.call.apply(t,[this].concat(r)),Object(l.a)(Object(i.a)(e),"contentRef",d.createRef()),Object(l.a)(Object(i.a)(e),"state",{ready:!1}),Object(l.a)(Object(i.a)(e),"getSelectedDocsVersion",(function(){var t=e.context.version;return"latest"===t?k:t})),Object(l.a)(Object(i.a)(e),"getSnackSdkVersion",(function(){var t=e.getSelectedDocsVersion();return"unversioned"===t&&(t=k),t.replace("v","")})),Object(l.a)(Object(i.a)(e),"getExamplesPath",(function(){return"".concat(document.location.origin,"/static/examples/").concat(e.getSelectedDocsVersion())})),Object(l.a)(Object(i.a)(e),"getDependencies",(function(){return Object(a.a)(e.props.dependencies).join(",")})),Object(l.a)(Object(i.a)(e),"getCode",(function(){return(e.contentRef.current&&e.contentRef.current.textContent||"").replace(/%%placeholder-start%%.*%%placeholder-end%%/g,"")})),e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.setState({ready:!0})}},{key:"render",value:function(){return Object(f.c)("div",null,Object(f.c)("div",{ref:this.contentRef,style:this.props.contentHidden?{display:"none"}:void 0},this.props.children),Object(f.c)("form",{action:u.a,method:"POST",target:"_blank"},Object(f.c)("input",{type:"hidden",name:"platform",value:this.props.defaultPlatform||"android"}),Object(f.c)("input",{type:"hidden",name:"name",value:this.props.label||"Example"}),Object(f.c)("input",{type:"hidden",name:"dependencies",value:this.getDependencies()}),Object(f.c)("input",{type:"hidden",name:"sdkVersion",value:this.getSnackSdkVersion()}),this.props.platforms&&Object(f.c)("input",{type:"hidden",name:"supportedPlatforms",value:this.props.platforms.join(",")}),this.state.ready&&Object(f.c)("input",{type:"hidden",name:"files",value:JSON.stringify(Object(u.b)({templateId:this.props.templateId,code:this.getCode(),files:this.props.files,baseURL:this.getExamplesPath()}))}),Object(f.c)("button",{className:"snack-inline-example-button",disabled:!this.state.ready},Object(f.c)(m,{size:16})," ",this.props.buttonTitle||"Try this example on Snack")))}}]),n}(d.Component);Object(l.a)(v,"contextType",h.a),Object(l.a)(v,"defaultProps",{dependencies:[]})},ZUmA:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return d})),n.d(t,"headings",(function(){return u})),n.d(t,"default",(function(){return f}));var a=n("HALo"),c=n("dhJC"),o=(n("q1tI"),n("7ljp")),i=n("3Ukx"),r=n("HCau"),p=n("hykZ"),s=n("I0q5"),l=["components"],d={title:"KeepAwake",sourceCodeUrl:"https://github.com/expo/expo/tree/main/packages/expo-keep-awake",packageName:"expo-keep-awake"},u=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"Usage"},{depth:3,type:"text",title:"Example: hook"},{depth:3,type:"text",title:"Example: functions"},{depth:2,type:"text",title:"API"}],b={meta:d,headings:u};function f(e){var t=e.components,n=Object(c.a)(e,l);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"expo-keep-awake"))," provides a React hook that prevents the screen from sleeping and a pair of functions to enable this behavior imperatively."),Object(o.b)(p.a,{android:!0,emulator:!0,ios:!0,simulator:!0,web:{pending:"https://github.com/expo/expo/issues/6889"},mdxType:"PlatformsSection"}),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)(r.a,{mdxType:"APIInstallSection"}),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("h3",{id:"example-hook"},"Example: hook"),Object(o.b)(s.a,{label:"Keep Awake hook",dependencies:["expo-keep-awake"],mdxType:"SnackInline"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"import { useKeepAwake } from 'expo-keep-awake';\nimport React from 'react';\nimport { Text, View } from 'react-native';\n\nexport default function KeepAwakeExample() {\n  /* @info As long as this component is mounted, the screen will not turn off from being idle. */\n  useKeepAwake();\n  /* @end */\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>This screen will never sleep!</Text>\n    </View>\n  );\n}\n"))),Object(o.b)("h3",{id:"example-functions"},"Example: functions"),Object(o.b)(s.a,{label:"Keep Awake functions",dependencies:["expo-keep-awake"],mdxType:"SnackInline"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"import { activateKeepAwake, deactivateKeepAwake } from 'expo-keep-awake';\nimport React from 'react';\nimport { Button, View } from 'react-native';\n\nexport default class KeepAwakeExample extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n        <Button onPress={this._activate} title=\"Activate\" />\n        <Button onPress={this._deactivate} title=\"Deactivate\" />\n      </View>\n    );\n  }\n\n  _activate = () => {\n    /* @info Screen will remain on after called until <strong>deactivateKeepAwake()</strong> is called. */ activateKeepAwake(); /* @end */\n\n    alert('Activated!');\n  };\n\n  _deactivate = () => {\n    /* @info Deactivates KeepAwake, or does nothing if it was never activated. */ deactivateKeepAwake(); /* @end */\n\n    alert('Deactivated!');\n  };\n}\n"))),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import KeepAwake from 'expo-keep-awake';\n")),Object(o.b)(i.a,{packageName:"expo-keep-awake",apiName:"KeepAwake",mdxType:"APISection"}))}f.isMDXComponent=!0},ufKf:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var a="https://snack.expo.dev";function c(e){var t=e.templateId,n=e.code,a=e.files,c=e.baseURL,o={};return a&&Object.keys(a).forEach((function(e){var t=a[e],n=/\.(jsx?|tsx?|json|md)$/i.test(e);o[e]=n?{type:"CODE",url:t.match(/^https?:\/\//)?t:"".concat(c,"/").concat(t)}:{type:"ASSET",contents:t}})),t?o["App.js"]={type:"CODE",url:"".concat(c,"/").concat(t,".js")}:n&&(o["App.js"]={type:"CODE",contents:n}),o}}},[["4xW6",1,0,2,3,4,5,6,7,8,9,10,11,12,13,14]]]);