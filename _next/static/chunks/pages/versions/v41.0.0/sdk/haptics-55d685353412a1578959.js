_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[824],{"5BX9":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return o}));var i=n("q1tI"),r=n("AeFk"),a=Object(i.createContext)({version:"latest",hasVersion:!1,setVersion:function(e){throw new Error("PageApiVersionContext not found")}});function s(e){var t=c(e.router.pathname),n=null!==t,s=Object(i.useCallback)((function(t){e.router.push(function(e,t){var n=c(e);return n?e.replace(n,t):e}(e.router.pathname,t))}),[]);return Object(r.c)(a.Provider,{value:{setVersion:s,hasVersion:n,version:t||"latest"}},e.children)}function o(){return Object(i.useContext)(a)}function c(e){return function(e){return e.startsWith("/versions/")}(e)?e.split("/",3).pop():null}},"6FTQ":function(e,t,n){"use strict";function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}n.d(t,"a",(function(){return i}))},"8rE2":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("6FTQ");function r(e,t){if(e){if("string"===typeof e)return Object(i.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(i.a)(e,t):void 0}}},I0q5:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var i=n("z7pX"),r=n("H+61"),a=n("UlJF"),s=n("+Css"),o=n("7LId"),c=n("VIvw"),p=n("iHvq"),l=n("cpVT"),u=n("q1tI"),d=n("ufKf"),b=n("3zh3"),m=n("AeFk"),h=function(e){var t=e.size,n=void 0===t?24:t,i=e.stroke,r=void 0===i?b.palette.dark.white:i;return Object(m.c)("svg",{"aria-label":"check",width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(m.c)("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))},f=n("5BX9");function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=Object(p.a)(e);if(t){var r=Object(p.a)(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return Object(c.a)(this,n)}}var j="v".concat(n("kiQV").version),O=function(e){Object(o.a)(n,e);var t=y(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return e=t.call.apply(t,[this].concat(o)),Object(l.a)(Object(s.a)(e),"contentRef",u.createRef()),Object(l.a)(Object(s.a)(e),"state",{ready:!1}),Object(l.a)(Object(s.a)(e),"getSelectedDocsVersion",(function(){var t=e.context.version;return"latest"===t?j:t})),Object(l.a)(Object(s.a)(e),"getSnackSdkVersion",(function(){var t=e.getSelectedDocsVersion();return"unversioned"===t&&(t=j),t.replace("v","")})),Object(l.a)(Object(s.a)(e),"getExamplesPath",(function(){return"".concat(document.location.origin,"/static/examples/").concat(e.getSelectedDocsVersion())})),Object(l.a)(Object(s.a)(e),"getDependencies",(function(){return Object(i.a)(e.props.dependencies).join(",")})),Object(l.a)(Object(s.a)(e),"getCode",(function(){return(e.contentRef.current&&e.contentRef.current.textContent||"").replace(/%%placeholder-start%%.*%%placeholder-end%%/g,"")})),e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.setState({ready:!0})}},{key:"render",value:function(){return Object(m.c)("div",null,Object(m.c)("div",{ref:this.contentRef,style:this.props.contentHidden?{display:"none"}:void 0},this.props.children),Object(m.c)("form",{action:d.a,method:"POST",target:"_blank"},Object(m.c)("input",{type:"hidden",name:"platform",value:this.props.defaultPlatform||"android"}),Object(m.c)("input",{type:"hidden",name:"name",value:this.props.label||"Example"}),Object(m.c)("input",{type:"hidden",name:"dependencies",value:this.getDependencies()}),Object(m.c)("input",{type:"hidden",name:"sdkVersion",value:this.getSnackSdkVersion()}),this.props.platforms&&Object(m.c)("input",{type:"hidden",name:"supportedPlatforms",value:this.props.platforms.join(",")}),this.state.ready&&Object(m.c)("input",{type:"hidden",name:"files",value:JSON.stringify(Object(d.b)({templateId:this.props.templateId,code:this.getCode(),files:this.props.files,baseURL:this.getExamplesPath()}))}),Object(m.c)("button",{className:"snack-inline-example-button",disabled:!this.state.ready},Object(m.c)(h,{size:16})," ",this.props.buttonTitle||"Try this example on Snack")))}}]),n}(u.Component);Object(l.a)(O,"contextType",f.a),Object(l.a)(O,"defaultProps",{dependencies:[]})},KyRZ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v41.0.0/sdk/haptics",function(){return n("RonF")}])},RonF:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return l})),n.d(t,"headings",(function(){return u})),n.d(t,"default",(function(){return b}));var i=n("HALo"),r=n("dhJC"),a=(n("q1tI"),n("7ljp")),s=n("HCau"),o=n("hykZ"),c=n("I0q5"),p=["components"],l={title:"Haptics",sourceCodeUrl:"https://github.com/expo/expo/tree/sdk-41/packages/expo-haptics"},u=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"Configuration"},{depth:2,type:"text",title:"Usage"},{depth:2,type:"text",title:"API"},{depth:2,type:"text",title:"Methods"},{depth:3,type:"inlineCode",title:"Haptics.selectionAsync()"},{depth:4,type:"text",title:"Returns"},{depth:3,type:"inlineCode",title:"Haptics.notificationAsync(type)"},{depth:4,type:"text",title:"Arguments"},{depth:4,type:"text",title:"Returns"},{depth:3,type:"inlineCode",title:"Haptics.impactAsync(style)"},{depth:4,type:"text",title:"Arguments"},{depth:4,type:"text",title:"Returns"}],d={meta:l,headings:u};function b(e){var t=e.components,n=Object(r.a)(e,p);return Object(a.b)("wrapper",Object(i.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"expo-haptics"))," provides haptic (touch) feedback for"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"iOS 10+ devices using the Taptic Engine"),Object(a.b)("li",{parentName:"ul"},"Android devices using Vibrator system service.")),Object(a.b)("p",null,"On iOS, ",Object(a.b)("em",{parentName:"p"},"the Taptic engine will do nothing if any of the following conditions are true on a user's device:")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Low Power Mode is enabled (",Object(a.b)("a",{parentName:"li",href:"https://expo.canny.io/feature-requests/p/expose-low-power-mode-ios-battery-saver-android"},"Feature Request"),")"),Object(a.b)("li",{parentName:"ul"},"User disabled the Taptic Engine in settings (",Object(a.b)("a",{parentName:"li",href:"https://expo.canny.io/feature-requests/p/react-native-settings"},"Feature Request"),")"),Object(a.b)("li",{parentName:"ul"},"Haptic engine generation is too low (less than 2nd gen) - Private API",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Using private API will get your app rejected: ",Object(a.b)("inlineCode",{parentName:"li"},'[[UIDevice currentDevice] valueForKey: @"_feedbackSupportLevel"]')," so this is not added in Expo"))),Object(a.b)("li",{parentName:"ul"},"iOS version is less than 10 (iPhone 7 is the first phone to support this)",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"This could be found through: ",Object(a.b)("inlineCode",{parentName:"li"},"Constants.platform.ios.systemVersion")," or ",Object(a.b)("inlineCode",{parentName:"li"},"Constants.platform.ios.platform"))))),Object(a.b)(o.a,{android:!0,emulator:!0,ios:!0,simulator:!0,mdxType:"PlatformsSection"}),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)(s.b,{packageName:"expo-haptics",mdxType:"InstallSection"}),Object(a.b)("h2",{id:"configuration"},"Configuration"),Object(a.b)("p",null,"On Android, this module requires permission to control vibration on the device. The ",Object(a.b)("inlineCode",{parentName:"p"},"VIBRATE")," permission is added automatically."),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)(c.a,{label:"Haptics usage",dependencies:["expo-haptics"],mdxType:"SnackInline"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import * as React from 'react';\nimport { StyleSheet, View, Text, Button } from 'react-native';\nimport * as Haptics from 'expo-haptics';\n\nexport default function App() {\n  return (\n    <View style={styles.container}>\n      <Text style={styles.text}>Haptics.selectionAsync</Text>\n      <View style={styles.buttonContainer}>\n        <Button title='Selection' onPress={() => /* @info */ Haptics.selectionAsync() /* @end */} />\n      </View>\n      <Text style={styles.text}>Haptics.notificationAsync</Text>\n      <View style={styles.buttonContainer}>\n        <Button title='Success' onPress={() => /* @info */ Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success) /* @end */} />\n        <Button title='Error' onPress={() => /* @info */ Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error) /* @end */} />\n        <Button title='Warning' onPress={() => /* @info */ Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning) /* @end */} />\n      </View>\n      <Text style={styles.text}>Haptics.impactAsync</Text>\n      <View style={styles.buttonContainer}>\n        <Button title='Light' onPress={() => /* @info */ Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light) /* @end */} />\n        <Button title='Medium' onPress={() => /* @info */ Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium) /* @end */} />\n        <Button title='Heavy' onPress={() => /* @info */ Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy) /* @end */} />\n      </View>\n    </View>\n  );\n}\n\n/* @hide const styles = StyleSheet.create({ ... }); */\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    paddingHorizontal: 16,\n  },\n  buttonContainer: {\n    flexDirection: 'row',\n    alignItems: 'stretch',\n    marginTop: 10,\n    marginBottom: 30,\n    justifyContent: 'space-between'\n  },\n});\n/* @end */\n"))),Object(a.b)("h2",{id:"api"},"API"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"import * as Haptics from 'expo-haptics';\n")),Object(a.b)("h2",{id:"methods"},"Methods"),Object(a.b)("h3",{id:"hapticsselectionasync"},Object(a.b)("inlineCode",{parentName:"h3"},"Haptics.selectionAsync()")),Object(a.b)("p",null,"Used to let a user know when a selection change has been registered"),Object(a.b)("h4",{id:"returns"},"Returns"),Object(a.b)("p",null,"A ",Object(a.b)("inlineCode",{parentName:"p"},"Promise")," resolving once native size haptics functionality is triggered."),Object(a.b)("h3",{id:"hapticsnotificationasynctype"},Object(a.b)("inlineCode",{parentName:"h3"},"Haptics.notificationAsync(type)")),Object(a.b)("p",null,"The kind of notification response used in the feedback"),Object(a.b)("h4",{id:"arguments"},"Arguments"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"type: ",Object(a.b)("inlineCode",{parentName:"strong"},"NotificationFeedbackType"))," -- A notification feedback type that on ",Object(a.b)("inlineCode",{parentName:"li"},"iOS")," is directly mapped to ",Object(a.b)("a",{parentName:"li",href:"https://developer.apple.com/documentation/uikit/uinotificationfeedbacktype"},"UINotificationFeedbackType"),", while on ",Object(a.b)("inlineCode",{parentName:"li"},"Android")," these are simulated using ",Object(a.b)("a",{parentName:"li",href:"https://developer.android.com/reference/android/os/Vibrator"},"Vibrator"),". You can use one of ",Object(a.b)("inlineCode",{parentName:"li"},"Haptics.NotificationFeedbackType.{Success, Warning, Error}"),".")),Object(a.b)("h4",{id:"returns-1"},"Returns"),Object(a.b)("p",null,"A ",Object(a.b)("inlineCode",{parentName:"p"},"Promise")," resolving once native size haptics functionality is triggered."),Object(a.b)("h3",{id:"hapticsimpactasyncstyle"},Object(a.b)("inlineCode",{parentName:"h3"},"Haptics.impactAsync(style)")),Object(a.b)("h4",{id:"arguments-1"},"Arguments"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"style: ",Object(a.b)("inlineCode",{parentName:"strong"},"ImpactFeedbackStyle"))," -- A collision indicator that on ",Object(a.b)("inlineCode",{parentName:"li"},"iOS")," is directly mapped to ",Object(a.b)("a",{parentName:"li",href:"https://developer.apple.com/documentation/uikit/uiimpactfeedbackstyle"},"UIImpactFeedbackStyle"),", while on ",Object(a.b)("inlineCode",{parentName:"li"},"Android")," these are simulated using ",Object(a.b)("a",{parentName:"li",href:"https://developer.android.com/reference/android/os/Vibrator"},"Vibrator"),". You can use one of ",Object(a.b)("inlineCode",{parentName:"li"},"Haptics.ImpactFeedbackStyle.{Light, Medium, Heavy}"),".")),Object(a.b)("h4",{id:"returns-2"},"Returns"),Object(a.b)("p",null,"A ",Object(a.b)("inlineCode",{parentName:"p"},"Promise")," resolving once native size haptics functionality is triggered."))}b.isMDXComponent=!0},cpVT:function(e,t,n){"use strict";function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return i}))},kiQV:function(e){e.exports=JSON.parse('{"name":"expo-docs","version":"44.0.0","private":true,"scripts":{"dev":"rimraf .next/preval && next dev -p 3002","build":"cross-env NODE_OPTIONS=--max-old-space-size=8192 next build","export":"yarn run build && next export && yarn run export-issue-404","export-issue-404":"echo \\"\ud83d\udee0  Patching https://github.com/vercel/next.js/issues/16528\\"; cp out/404/index.html out/404.html","export-server":"http-server out -p 8000","import-react-native-docs":"node ./scripts/import-react-native-docs.js","test-links":"node --async-stack-traces --unhandled-rejections=strict ./scripts/test-links.js","prettier":"prettier --write \'**/*.{js,ts,tsx,md}\'","lint":"tsc --noEmit && eslint .","lint-links":"remark -u validate-links ./pages","watch":"tsc --noEmit -w","test":"jest","schema-sync":"node --async-stack-traces --unhandled-rejections=strict ./scripts/schema-sync.js","remove-version":"node --unhandled-rejections=strict ./scripts/remove-version.js"},"resolutions":{"webpack":"^5.28.0"},"dependencies":{"@emotion/react":"^11.4.0","@expo/spawn-async":"^1.5.0","@expo/styleguide":"^4.0.1","@mdx-js/loader":"^1.6.22","@mdx-js/mdx":"^1.6.22","@mdx-js/react":"^1.6.22","@mdx-js/runtime":"^1.6.22","@reach/tabs":"^0.15.0","@sentry/browser":"^5.6.1","date-fns":"^2.28.0","docsearch.js":"^2.5.2","emoji-regex":"^9.2.2","front-matter":"^2.3.0","fs-extra":"^6.0.1","github-slugger":"^1.3.0","hotshot":"^1.0.5","lodash":"^4.17.20","next":"^11.1.4","nprogress":"0.2.0","path-browserify":"^1.0.1","prism-react-renderer":"1.0.2","prop-types":"15.7.2","react":"^17.0.2","react-diff-view":"^2.4.7","react-dom":"^17.0.2","react-feather":"^2.0.9","react-markdown":"^6.0.3","react-player":"^1.11.1","react-visibility-sensor":"^5.1.1","remark-gfm":"^1.0.0","tippy.js":"^6.3.1"},"devDependencies":{"@apidevtools/json-schema-ref-parser":"^9.0.9","@babel/core":"^7.13.14","@emotion/babel-preset-css-prop":"^11.2.0","@emotion/jest":"^11.7.1","@testing-library/jest-dom":"5.11.0","@testing-library/react":"10.4.3","@testing-library/react-hooks":"^7.0.2","@types/cacache":"^15.0.1","@types/fs-extra":"^9.0.11","@types/github-slugger":"^1.3.0","@types/google.analytics":"^0.0.41","@types/gtag.js":"^0.0.6","@types/lodash":"^4.14.161","@types/long":"^4.0.1","@types/mdx-js__react":"^1.5.3","@types/node":"^14.11.2","@types/nprogress":"^0.2.0","@types/react":"^17.0.11","axios":"^0.21.2","babel-plugin-module-resolver":"3.1.1","babel-plugin-preval":"^3.0.1","cross-env":"^5.2.0","danger":"^9.2.10","esbuild-loader":"^2.13.1","eslint":"^8.6.0","eslint-config-next":"^10.2.3","eslint-config-universe":"^10.0.0","eslint-plugin-lodash":"^7.3.0","http-server":"^0.12.3","jest":"^27.4.7","js-yaml":"^4.1.0","prettier":"^2.3.1","puppeteer":"^10.2.0","react-test-renderer":"^17.0.2","rehype-slug":"^4.0.1","remark-cli":"^9.0.0","remark-frontmatter":"^2.0.0","remark-validate-links":"^10.0.4","rimraf":"^3.0.2","semver":"^7.3.5","sitemap":"^6.3.0","typescript":"^4.5.4","unist-builder":"^2.0.0","unist-util-visit":"^2.0.3"}}')},ufKf:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r}));var i="https://snack.expo.dev";function r(e){var t=e.templateId,n=e.code,i=e.files,r=e.baseURL,a={};return i&&Object.keys(i).forEach((function(e){var t=i[e],n=/\.(jsx?|tsx?|json|md)$/i.test(e);a[e]=n?{type:"CODE",url:t.match(/^https?:\/\//)?t:"".concat(r,"/").concat(t)}:{type:"ASSET",contents:t}})),t?a["App.js"]={type:"CODE",url:"".concat(r,"/").concat(t,".js")}:n&&(a["App.js"]={type:"CODE",contents:n}),a}},z7pX:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("6FTQ");var r=n("8rE2");function a(e){return function(e){if(Array.isArray(e))return Object(i.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},[["KyRZ",1,0,2,3,4,5,6]]]);