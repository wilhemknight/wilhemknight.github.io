_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[1155],{"5X57":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return u})),n.d(t,"headings",(function(){return b})),n.d(t,"default",(function(){return h}));var a=n("HALo"),o=n("dhJC"),i=(n("q1tI"),n("7ljp")),c=n("3Ukx"),r=n("HCau"),l=n("hykZ"),s=n("I0q5"),p=["components"],u={title:"Localization",sourceCodeUrl:"https://github.com/expo/expo/tree/sdk-43/packages/expo-localization"},b=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"Usage"},{depth:3,type:"text",title:"API Design Tips"},{depth:3,type:"text",title:"Full Demo"},{depth:2,type:"text",title:"API"},{depth:3,type:"text",title:"Behavior"}],d={meta:u,headings:b};function h(e){var t=e.components,n=Object(o.a)(e,p);return Object(i.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"expo-localization"))," allows you to Localize your app, customizing the experience for specific regions, languages, or cultures. It also provides access to the locale data on the native device.\nUsing the popular library ",Object(i.b)("a",{parentName:"p",href:"https://github.com/fnando/i18n-js"},Object(i.b)("inlineCode",{parentName:"a"},"i18n-js"))," with ",Object(i.b)("inlineCode",{parentName:"p"},"expo-localization")," will enable you to create a very accessible experience for users."),Object(i.b)(l.a,{android:!0,emulator:!0,ios:!0,simulator:!0,web:!0,mdxType:"PlatformsSection"}),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)(r.b,{packageName:"expo-localization",mdxType:"InstallSection"}),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"Let's make our app support English and Japanese."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Install the i18n package ",Object(i.b)("inlineCode",{parentName:"p"},"i18n-js")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-sh"},"yarn add i18n-js\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Configure the languages for your app."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-tsx"},"import * as Localization from 'expo-localization';\nimport i18n from 'i18n-js';\n// Set the key-value pairs for the different languages you want to support.\ni18n.translations = {\n  en: { welcome: 'Hello' },\n  ja: { welcome: '\u3053\u3093\u306b\u3061\u306f' },\n};\n// Set the locale once at the beginning of your app.\ni18n.locale = Localization.locale;\n")))),Object(i.b)("h3",{id:"api-design-tips"},"API Design Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You may want to refrain from localizing text for certain things, like names. In this case you can define them ",Object(i.b)("em",{parentName:"li"},"once")," in your default language and reuse them with ",Object(i.b)("inlineCode",{parentName:"li"},"i18n.fallbacks = true;"),"."),Object(i.b)("li",{parentName:"ul"},"When a user changes the device's language, your app will reset. This means you can set the language once, and don't need to update any of your React components to account for the language changes."),Object(i.b)("li",{parentName:"ul"},"On iOS, you can add ",Object(i.b)("inlineCode",{parentName:"li"},'"CFBundleAllowMixedLocalizations": true')," to your ",Object(i.b)("inlineCode",{parentName:"li"},"ios.infoPlist")," property ",Object(i.b)("a",{parentName:"li",href:"/../../../../../../workflow/configuration/#ios"},"in your app.json")," so that your app supports the retrieval of localized strings from frameworks.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This will allow you to translate app metadata, including the homescreen display name! Read ",Object(i.b)("a",{parentName:"li",href:"/../../../../../../distribution/app-stores#localizing-your-ios-app"},"here")," for details.")))),Object(i.b)("h3",{id:"full-demo"},"Full Demo"),Object(i.b)(s.a,{label:"Localization",dependencies:["expo-localization","i18n-js"],mdxType:"SnackInline"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react';\nimport { View, StyleSheet, Text } from 'react-native';\nimport * as Localization from 'expo-localization';\nimport i18n from 'i18n-js';\n\n// Set the key-value pairs for the different languages you want to support.\ni18n.translations = {\n  en: { welcome: 'Hello', name: 'Charlie' },\n  ja: { welcome: '\u3053\u3093\u306b\u3061\u306f' },\n};\n// Set the locale once at the beginning of your app.\ni18n.locale = Localization.locale;\n// When a value is missing from a language it'll fallback to another language with the key present.\ni18n.fallbacks = true;\n\nexport default App => {\n  return (\n    <View style={styles.container}>\n      <Text style={styles.text}>\n        {i18n.t('welcome')} {i18n.t('name')}\n      </Text>\n    </View>\n  );\n};\n\n/* @hide const styles = StyleSheet.create({ ... }); */\nconst styles = StyleSheet.create({\n  container: {\n    backgroundColor: '#fff',\n    alignItems: 'center',\n    justifyContent: 'center',\n    flex: 1,\n  },\n  text: {\n    fontSize: 20,\n  },\n});\n/* @end */\n"))),Object(i.b)("h2",{id:"api"},"API"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"import * as Localization from 'expo-localization';\n")),Object(i.b)("h3",{id:"behavior"},"Behavior"),Object(i.b)("p",null,"This API is mostly synchronous and driven by constants. On iOS the constants will always be correct, on Android you should check if the locale has updated using ",Object(i.b)("inlineCode",{parentName:"p"},"AppState")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Localization.getLocalizationAsync()"),". Initially the constants will be correct on both platforms, but on Android a user can change the language and return, more on this later."),Object(i.b)(c.a,{packageName:"expo-localization",apiName:"Localization",mdxType:"APISection"}))}h.isMDXComponent=!0},I0q5:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n("z7pX"),o=n("H+61"),i=n("UlJF"),c=n("+Css"),r=n("7LId"),l=n("VIvw"),s=n("iHvq"),p=n("cpVT"),u=n("q1tI"),b=n("ufKf"),d=n("3zh3"),h=n("AeFk"),m=function(e){var t=e.size,n=void 0===t?24:t,a=e.stroke,o=void 0===a?d.palette.dark.white:a;return Object(h.c)("svg",{"aria-label":"check",width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(h.c)("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))},f=n("5BX9");function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(s.a)(e);if(t){var o=Object(s.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return Object(l.a)(this,n)}}var O="v".concat(n("kiQV").version),g=function(e){Object(r.a)(n,e);var t=j(n);function n(){var e;Object(o.a)(this,n);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return e=t.call.apply(t,[this].concat(r)),Object(p.a)(Object(c.a)(e),"contentRef",u.createRef()),Object(p.a)(Object(c.a)(e),"state",{ready:!1}),Object(p.a)(Object(c.a)(e),"getSelectedDocsVersion",(function(){var t=e.context.version;return"latest"===t?O:t})),Object(p.a)(Object(c.a)(e),"getSnackSdkVersion",(function(){var t=e.getSelectedDocsVersion();return"unversioned"===t&&(t=O),t.replace("v","")})),Object(p.a)(Object(c.a)(e),"getExamplesPath",(function(){return"".concat(document.location.origin,"/static/examples/").concat(e.getSelectedDocsVersion())})),Object(p.a)(Object(c.a)(e),"getDependencies",(function(){return Object(a.a)(e.props.dependencies).join(",")})),Object(p.a)(Object(c.a)(e),"getCode",(function(){return(e.contentRef.current&&e.contentRef.current.textContent||"").replace(/%%placeholder-start%%.*%%placeholder-end%%/g,"")})),e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.setState({ready:!0})}},{key:"render",value:function(){return Object(h.c)("div",null,Object(h.c)("div",{ref:this.contentRef,style:this.props.contentHidden?{display:"none"}:void 0},this.props.children),Object(h.c)("form",{action:b.a,method:"POST",target:"_blank"},Object(h.c)("input",{type:"hidden",name:"platform",value:this.props.defaultPlatform||"android"}),Object(h.c)("input",{type:"hidden",name:"name",value:this.props.label||"Example"}),Object(h.c)("input",{type:"hidden",name:"dependencies",value:this.getDependencies()}),Object(h.c)("input",{type:"hidden",name:"sdkVersion",value:this.getSnackSdkVersion()}),this.props.platforms&&Object(h.c)("input",{type:"hidden",name:"supportedPlatforms",value:this.props.platforms.join(",")}),this.state.ready&&Object(h.c)("input",{type:"hidden",name:"files",value:JSON.stringify(Object(b.b)({templateId:this.props.templateId,code:this.getCode(),files:this.props.files,baseURL:this.getExamplesPath()}))}),Object(h.c)("button",{className:"snack-inline-example-button",disabled:!this.state.ready},Object(h.c)(m,{size:16})," ",this.props.buttonTitle||"Try this example on Snack")))}}]),n}(u.Component);Object(p.a)(g,"contextType",f.a),Object(p.a)(g,"defaultProps",{dependencies:[]})},LM4X:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v43.0.0/sdk/localization",function(){return n("5X57")}])},ufKf:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var a="https://snack.expo.dev";function o(e){var t=e.templateId,n=e.code,a=e.files,o=e.baseURL,i={};return a&&Object.keys(a).forEach((function(e){var t=a[e],n=/\.(jsx?|tsx?|json|md)$/i.test(e);i[e]=n?{type:"CODE",url:t.match(/^https?:\/\//)?t:"".concat(o,"/").concat(t)}:{type:"ASSET",contents:t}})),t?i["App.js"]={type:"CODE",url:"".concat(o,"/").concat(t,".js")}:n&&(i["App.js"]={type:"CODE",contents:n}),i}}},[["LM4X",1,0,2,3,4,5,6,7,8,9,10,11,12,13,14]]]);