_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[852],{"5BX9":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return o}));var r=n("q1tI"),a=n("AeFk"),i=Object(r.createContext)({version:"latest",hasVersion:!1,setVersion:function(e){throw new Error("PageApiVersionContext not found")}});function s(e){var t=c(e.router.pathname),n=null!==t,s=Object(r.useCallback)((function(t){e.router.push(function(e,t){var n=c(e);return n?e.replace(n,t):e}(e.router.pathname,t))}),[]);return Object(a.c)(i.Provider,{value:{setVersion:s,hasVersion:n,version:t||"latest"}},e.children)}function o(){return Object(r.useContext)(i)}function c(e){return function(e){return e.startsWith("/versions/")}(e)?e.split("/",3).pop():null}},"6FTQ":function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},"8rE2":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("6FTQ");function a(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},GJNN:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return p})),n.d(t,"headings",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n("HALo"),a=n("dhJC"),i=(n("q1tI"),n("7ljp")),s=n("HCau"),o=n("hykZ"),c=n("I0q5"),l=["components"],p={title:"ScreenCapture",sourceCodeUrl:"https://github.com/expo/expo/tree/sdk-41/packages/expo-screen-capture"},u=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"Usage"},{depth:3,type:"text",title:"Example: hook"},{depth:3,type:"text",title:"Example: functions"},{depth:2,type:"text",title:"API"},{depth:2,type:"text",title:"Methods"},{depth:3,type:"inlineCode",title:"isAvailableAsync()"},{depth:4,type:"text",title:"Returns"},{depth:3,type:"inlineCode",title:"usePreventScreenCapture(key)"},{depth:4,type:"text",title:"Arguments"},{depth:3,type:"inlineCode",title:"preventScreenCaptureAsync(key)"},{depth:4,type:"text",title:"Arguments"},{depth:3,type:"inlineCode",title:"allowScreenCaptureAsync(key)"},{depth:4,type:"text",title:"Arguments"},{depth:3,type:"inlineCode",title:"addScreenshotListener(listener)"},{depth:4,type:"text",title:"Arguments"},{depth:4,type:"text",title:"Returns"},{depth:3,type:"inlineCode",title:"removeScreenshotListener(subscription)"},{depth:4,type:"text",title:"Arguments"}],d={meta:p,headings:u};function b(e){var t=e.components,n=Object(a.a)(e,l);return Object(i.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"expo-screen-capture"))," allows you to protect screens in your app from being captured or recorded, as well as be notified if a screenshot is taken while your app is foregrounded. The two most common reasons you may want to prevent screen capture are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If a screen is displaying sensitive information (password, credit card data, etc.)"),Object(i.b)("li",{parentName:"ul"},"You are displaying paid content that you don't want recorded and shared")),Object(i.b)("p",null,"This is especially important on Android, since the ",Object(i.b)("a",{parentName:"p",href:"https://developer.android.com/about/versions/android-5.0.html#ScreenCapture"},Object(i.b)("inlineCode",{parentName:"a"},"android.media.projection"))," API allows third-party apps to perform screen capture or screen sharing (even if the app is backgrounded)."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Currently, taking screenshots on iOS cannot be prevented. This is due to underlying OS limitations.")),Object(i.b)(o.a,{android:!0,emulator:!0,ios:!0,simulator:!0,mdxType:"PlatformsSection"}),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)(s.b,{packageName:"expo-screen-capture",mdxType:"InstallSection"}),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("h3",{id:"example-hook"},"Example: hook"),Object(i.b)(c.a,{label:"Screen Capture hook",dependencies:["expo-screen-capture"],mdxType:"SnackInline"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"import { usePreventScreenCapture } from 'expo-screen-capture';\nimport React from 'react';\nimport { Text, View } from 'react-native';\n\nexport default function ScreenCaptureExample() {\n  usePreventScreenCapture();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>As long as this component is mounted, this screen is unrecordable!</Text>\n    </View>\n  );\n}\n"))),Object(i.b)("h3",{id:"example-functions"},"Example: functions"),Object(i.b)(c.a,{label:"Screen Capture functions",dependencies:["expo-screen-capture","expo-media-library"],mdxType:"SnackInline"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { Button, View, Platform } from 'react-native';\nimport * as ScreenCapture from 'expo-screen-capture';\nimport * as MediaLibrary from 'expo-media-library';\n\nexport default class ScreenCaptureExample extends React.Component {\n  async componentDidMount() {\n    // This permission is only required on Android\n    const { status } = await MediaLibrary.requestPermissionsAsync();\n    if (status === 'granted') {\n      ScreenCapture.addScreenshotListener(() => {\n        alert('Thanks for screenshotting my beautiful app \ud83d\ude0a');\n      });\n    }\n  }\n\n  render() {\n    return (\n      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>\n        <Button title=\"Activate\" onPress={this._activate} />\n        <Button title=\"Deactivate\" onPress={this._deactivate} />\n      </View>\n    );\n  }\n\n  _activate = async () => {\n    await ScreenCapture.preventScreenCaptureAsync();\n  };\n\n  _deactivate = async () => {\n    await ScreenCapture.allowScreenCaptureAsync();\n  };\n}\n"))),Object(i.b)("h2",{id:"api"},"API"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import * as ScreenCapture from 'expo-screen-capture';\n")),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"isavailableasync"},Object(i.b)("inlineCode",{parentName:"h3"},"isAvailableAsync()")),Object(i.b)("p",null,"Returns whether the Screen Capture API is available on the current device."),Object(i.b)("h4",{id:"returns"},"Returns"),Object(i.b)("p",null,"Async ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),", indicating whether the Screen Capture API is available on the current device. Currently this resolves ",Object(i.b)("inlineCode",{parentName:"p"},"true")," on iOS and Android only."),Object(i.b)("h3",{id:"usepreventscreencapturekey"},Object(i.b)("inlineCode",{parentName:"h3"},"usePreventScreenCapture(key)")),Object(i.b)("p",null,"A React hook to prevent screen capturing for as long as the owner component is mounted."),Object(i.b)("h4",{id:"arguments"},"Arguments"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"key (string)")," ","[Optional]"," If provided, this will prevent multiple instances of this hook or the ",Object(i.b)("inlineCode",{parentName:"li"},"preventScreenCaptureAsync")," and ",Object(i.b)("inlineCode",{parentName:"li"},"allowScreenCaptureAsync")," methods from conflicting with each other. This argument is useful if you have multiple active components using the ",Object(i.b)("inlineCode",{parentName:"li"},"allowScreenCaptureAsync")," hook. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"default"),".")),Object(i.b)("h3",{id:"preventscreencaptureasynckey"},Object(i.b)("inlineCode",{parentName:"h3"},"preventScreenCaptureAsync(key)")),Object(i.b)("p",null,"Prevents screenshots and screen recordings until ",Object(i.b)("inlineCode",{parentName:"p"},"allowScreenCaptureAsync")," is called. If you are already preventing screen capture, this method does nothing (unless you pass a new and unique ",Object(i.b)("inlineCode",{parentName:"p"},"key"),")."),Object(i.b)("p",null,"Please note that on iOS, this will only prevent screen recordings, and is only available on iOS 11 and newer. On older iOS versions, this method does nothing."),Object(i.b)("h4",{id:"arguments-1"},"Arguments"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"key (string)")," ","[Optional]"," If provided, this will help prevent multiple instances of the ",Object(i.b)("inlineCode",{parentName:"li"},"preventScreenCaptureAsync")," and ",Object(i.b)("inlineCode",{parentName:"li"},"allowScreenCaptureAsync")," methods (and ",Object(i.b)("inlineCode",{parentName:"li"},"usePreventScreenCapture")," hook) from conflicting with each other. When using multiple keys, you'll have to re-allow each one in order to re-enable screen capturing. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"default"),".")),Object(i.b)("h3",{id:"allowscreencaptureasynckey"},Object(i.b)("inlineCode",{parentName:"h3"},"allowScreenCaptureAsync(key)")),Object(i.b)("p",null,"Re-allows the user to screen record or screenshot your app. If you haven't called ",Object(i.b)("inlineCode",{parentName:"p"},"preventScreenCaptureAsync()")," yet, this method does nothing"),Object(i.b)("h4",{id:"arguments-2"},"Arguments"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"key (string)")," ","[Optional]"," The value must be the same as the ",Object(i.b)("inlineCode",{parentName:"li"},"key")," passed to ",Object(i.b)("inlineCode",{parentName:"li"},"preventScreenCaptureAsync")," in order to re-enable screen capturing.")),Object(i.b)("h3",{id:"addscreenshotlistenerlistener"},Object(i.b)("inlineCode",{parentName:"h3"},"addScreenshotListener(listener)")),Object(i.b)("p",null,"Adds a listener that will fire whenever the user takes a screenshot while the app is foregrounded. On Android, this method requires the ",Object(i.b)("inlineCode",{parentName:"p"},"READ_EXTERNAL_STORAGE")," permission. You can request this with ",Object(i.b)("a",{parentName:"p",href:"/versions/v41.0.0/sdk/media-library/#medialibraryrequestpermissionsasync"},"MediaLibrary.requestPermissionsAsync()"),"."),Object(i.b)("h4",{id:"arguments-3"},"Arguments"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"listener (function)")," The function that will be executed when the user takes a screenshot. This function accepts no arguments.")),Object(i.b)("h4",{id:"returns-1"},"Returns"),Object(i.b)("p",null,"A ",Object(i.b)("inlineCode",{parentName:"p"},"Subscription")," object that you can use to unregister the listener, either by calling ",Object(i.b)("inlineCode",{parentName:"p"},".remove()")," or passing it to ",Object(i.b)("inlineCode",{parentName:"p"},"removeScreenshotListener"),"."),Object(i.b)("h3",{id:"removescreenshotlistenersubscription"},Object(i.b)("inlineCode",{parentName:"h3"},"removeScreenshotListener(subscription)")),Object(i.b)("p",null,"Removes the subscription you provide, so that you are no longer listening for screen shots."),Object(i.b)("h4",{id:"arguments-4"},"Arguments"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"subscription (Subscription)")," ",Object(i.b)("inlineCode",{parentName:"li"},"Subscription")," returned by ",Object(i.b)("inlineCode",{parentName:"li"},"addScreenshotListener"),". If you prefer, you can also call ",Object(i.b)("inlineCode",{parentName:"li"},".remove")," on that ",Object(i.b)("inlineCode",{parentName:"li"},"Subscription")," object, e.g.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'let mySubscription = addScreenshotListener(() => {\n  console.log("You took a screenshot!");\n})\n...\nmySubscription.remove();\n// OR\nremoveScreenshotListener(mySubscription);\n')))}b.isMDXComponent=!0},I0q5:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var r=n("z7pX"),a=n("H+61"),i=n("UlJF"),s=n("+Css"),o=n("7LId"),c=n("VIvw"),l=n("iHvq"),p=n("cpVT"),u=n("q1tI"),d=n("ufKf"),b=n("3zh3"),h=n("AeFk"),m=function(e){var t=e.size,n=void 0===t?24:t,r=e.stroke,a=void 0===r?b.palette.dark.white:r;return Object(h.c)("svg",{"aria-label":"check",width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(h.c)("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))},j=n("5BX9");function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(l.a)(e);if(t){var a=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var f="v".concat(n("kiQV").version),O=function(e){Object(o.a)(n,e);var t=y(n);function n(){var e;Object(a.a)(this,n);for(var i=arguments.length,o=new Array(i),c=0;c<i;c++)o[c]=arguments[c];return e=t.call.apply(t,[this].concat(o)),Object(p.a)(Object(s.a)(e),"contentRef",u.createRef()),Object(p.a)(Object(s.a)(e),"state",{ready:!1}),Object(p.a)(Object(s.a)(e),"getSelectedDocsVersion",(function(){var t=e.context.version;return"latest"===t?f:t})),Object(p.a)(Object(s.a)(e),"getSnackSdkVersion",(function(){var t=e.getSelectedDocsVersion();return"unversioned"===t&&(t=f),t.replace("v","")})),Object(p.a)(Object(s.a)(e),"getExamplesPath",(function(){return"".concat(document.location.origin,"/static/examples/").concat(e.getSelectedDocsVersion())})),Object(p.a)(Object(s.a)(e),"getDependencies",(function(){return Object(r.a)(e.props.dependencies).join(",")})),Object(p.a)(Object(s.a)(e),"getCode",(function(){return(e.contentRef.current&&e.contentRef.current.textContent||"").replace(/%%placeholder-start%%.*%%placeholder-end%%/g,"")})),e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.setState({ready:!0})}},{key:"render",value:function(){return Object(h.c)("div",null,Object(h.c)("div",{ref:this.contentRef,style:this.props.contentHidden?{display:"none"}:void 0},this.props.children),Object(h.c)("form",{action:d.a,method:"POST",target:"_blank"},Object(h.c)("input",{type:"hidden",name:"platform",value:this.props.defaultPlatform||"android"}),Object(h.c)("input",{type:"hidden",name:"name",value:this.props.label||"Example"}),Object(h.c)("input",{type:"hidden",name:"dependencies",value:this.getDependencies()}),Object(h.c)("input",{type:"hidden",name:"sdkVersion",value:this.getSnackSdkVersion()}),this.props.platforms&&Object(h.c)("input",{type:"hidden",name:"supportedPlatforms",value:this.props.platforms.join(",")}),this.state.ready&&Object(h.c)("input",{type:"hidden",name:"files",value:JSON.stringify(Object(d.b)({templateId:this.props.templateId,code:this.getCode(),files:this.props.files,baseURL:this.getExamplesPath()}))}),Object(h.c)("button",{className:"snack-inline-example-button",disabled:!this.state.ready},Object(h.c)(m,{size:16})," ",this.props.buttonTitle||"Try this example on Snack")))}}]),n}(u.Component);Object(p.a)(O,"contextType",j.a),Object(p.a)(O,"defaultProps",{dependencies:[]})},cpVT:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},kiQV:function(e){e.exports=JSON.parse('{"name":"expo-docs","version":"44.0.0","private":true,"scripts":{"dev":"rimraf .next/preval && next dev -p 3002","build":"cross-env NODE_OPTIONS=--max-old-space-size=8192 next build","export":"yarn run build && next export && yarn run export-issue-404","export-issue-404":"echo \\"\ud83d\udee0  Patching https://github.com/vercel/next.js/issues/16528\\"; cp out/404/index.html out/404.html","export-server":"http-server out -p 8000","import-react-native-docs":"node ./scripts/import-react-native-docs.js","test-links":"node --async-stack-traces --unhandled-rejections=strict ./scripts/test-links.js","prettier":"prettier --write \'**/*.{js,ts,tsx,md}\'","lint":"tsc --noEmit && eslint .","lint-links":"remark -u validate-links ./pages","watch":"tsc --noEmit -w","test":"jest","schema-sync":"node --async-stack-traces --unhandled-rejections=strict ./scripts/schema-sync.js","remove-version":"node --unhandled-rejections=strict ./scripts/remove-version.js"},"resolutions":{"webpack":"^5.28.0"},"dependencies":{"@emotion/react":"^11.4.0","@expo/spawn-async":"^1.5.0","@expo/styleguide":"^4.0.1","@mdx-js/loader":"^1.6.22","@mdx-js/mdx":"^1.6.22","@mdx-js/react":"^1.6.22","@mdx-js/runtime":"^1.6.22","@reach/tabs":"^0.15.0","@sentry/browser":"^5.6.1","date-fns":"^2.28.0","docsearch.js":"^2.5.2","emoji-regex":"^9.2.2","front-matter":"^2.3.0","fs-extra":"^6.0.1","github-slugger":"^1.3.0","hotshot":"^1.0.5","lodash":"^4.17.20","next":"^11.1.4","nprogress":"0.2.0","path-browserify":"^1.0.1","prism-react-renderer":"1.0.2","prop-types":"15.7.2","react":"^17.0.2","react-diff-view":"^2.4.7","react-dom":"^17.0.2","react-feather":"^2.0.9","react-markdown":"^6.0.3","react-player":"^1.11.1","react-visibility-sensor":"^5.1.1","remark-gfm":"^1.0.0","tippy.js":"^6.3.1"},"devDependencies":{"@apidevtools/json-schema-ref-parser":"^9.0.9","@babel/core":"^7.13.14","@emotion/babel-preset-css-prop":"^11.2.0","@emotion/jest":"^11.7.1","@testing-library/jest-dom":"5.11.0","@testing-library/react":"10.4.3","@testing-library/react-hooks":"^7.0.2","@types/cacache":"^15.0.1","@types/fs-extra":"^9.0.11","@types/github-slugger":"^1.3.0","@types/google.analytics":"^0.0.41","@types/gtag.js":"^0.0.6","@types/lodash":"^4.14.161","@types/long":"^4.0.1","@types/mdx-js__react":"^1.5.3","@types/node":"^14.11.2","@types/nprogress":"^0.2.0","@types/react":"^17.0.11","axios":"^0.21.2","babel-plugin-module-resolver":"3.1.1","babel-plugin-preval":"^3.0.1","cross-env":"^5.2.0","danger":"^9.2.10","esbuild-loader":"^2.13.1","eslint":"^8.6.0","eslint-config-next":"^10.2.3","eslint-config-universe":"^10.0.0","eslint-plugin-lodash":"^7.3.0","http-server":"^0.12.3","jest":"^27.4.7","js-yaml":"^4.1.0","prettier":"^2.3.1","puppeteer":"^10.2.0","react-test-renderer":"^17.0.2","rehype-slug":"^4.0.1","remark-cli":"^9.0.0","remark-frontmatter":"^2.0.0","remark-validate-links":"^10.0.4","rimraf":"^3.0.2","semver":"^7.3.5","sitemap":"^6.3.0","typescript":"^4.5.4","unist-builder":"^2.0.0","unist-util-visit":"^2.0.3"}}')},smMj:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v41.0.0/sdk/screen-capture",function(){return n("GJNN")}])},ufKf:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r="https://snack.expo.dev";function a(e){var t=e.templateId,n=e.code,r=e.files,a=e.baseURL,i={};return r&&Object.keys(r).forEach((function(e){var t=r[e],n=/\.(jsx?|tsx?|json|md)$/i.test(e);i[e]=n?{type:"CODE",url:t.match(/^https?:\/\//)?t:"".concat(a,"/").concat(t)}:{type:"ASSET",contents:t}})),t?i["App.js"]={type:"CODE",url:"".concat(a,"/").concat(t,".js")}:n&&(i["App.js"]={type:"CODE",contents:n}),i}},z7pX:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("6FTQ");var a=n("8rE2");function i(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},[["smMj",1,0,2,3,4,5,6]]]);