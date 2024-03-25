_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[1351],{"5BX9":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s}));var r=n("q1tI"),a=n("AeFk"),i=Object(r.createContext)({version:"latest",hasVersion:!1,setVersion:function(e){throw new Error("PageApiVersionContext not found")}});function o(e){var t=p(e.router.pathname),n=null!==t,o=Object(r.useCallback)((function(t){e.router.push(function(e,t){var n=p(e);return n?e.replace(n,t):e}(e.router.pathname,t))}),[]);return Object(a.c)(i.Provider,{value:{setVersion:o,hasVersion:n,version:t||"latest"}},e.children)}function s(){return Object(r.useContext)(i)}function p(e){return function(e){return e.startsWith("/versions/")}(e)?e.split("/",3).pop():null}},"6FTQ":function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},"8rE2":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("6FTQ");function a(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},DR14:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return c})),n.d(t,"headings",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n("HALo"),a=n("dhJC"),i=(n("q1tI"),n("7ljp")),o=n("HCau"),s=n("hykZ"),p=(n("I0q5"),["components"]),c={title:"Stripe",sourceCodeUrl:"https://github.com/stripe/stripe-react-native"},l=[{depth:2,type:"text",title:"Installation"},{depth:3,type:"text",title:"Config plugin setup (optional)"},{depth:2,type:"text",title:"Example"},{depth:2,type:"text",title:"Usage"},{depth:3,type:"text",title:"Common issues"},{depth:4,type:"text",title:"Browser pop-ups are not redirecting back to my app"},{depth:2,type:"text",title:"Limitations"},{depth:3,type:"text",title:"Standalone apps"},{depth:3,type:"text",title:"Apple Pay"},{depth:3,type:"text",title:"Google Pay"}],u={meta:c,headings:l};function b(e){var t=e.components,n=Object(a.a)(e,p);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Expo includes support for ",Object(i.b)("a",{parentName:"p",href:"https://github.com/stripe/stripe-react-native"},Object(i.b)("inlineCode",{parentName:"a"},"@stripe/stripe-react-native")),", which allows you to build delightful payment experiences in your native Android and iOS apps using React Native & Expo. This library provides powerful and customizable UI screens and elements that can be used out-of-the-box to collect your users' payment details."),Object(i.b)("p",null,"If you're looking for a quick example, check out ",Object(i.b)("a",{parentName:"p",href:"https://snack.expo.dev/@charliecruzan/stripe-react-native-example?platform=mydevice"},"this Snack"),"!"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Migrating from Expo's ",Object(i.b)("inlineCode",{parentName:"p"},"expo-payments-stripe")," module? ",Object(i.b)("a",{parentName:"p",href:"https://github.com/expo/fyi/blob/master/payments-migration-guide.md#how-to-migrate-from-expo-payments-stripe-to-the-new-stripestripe-react-native-library"},"Learn more about how to transition to this new library"),".")),Object(i.b)(s.a,{android:!0,emulator:!0,ios:!0,simulator:!0,mdxType:"PlatformsSection"}),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"Each Expo SDK version requires a specific ",Object(i.b)("inlineCode",{parentName:"p"},"@stripe/stripe-react-native")," version. See the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/stripe/stripe-react-native/blob/master/CHANGELOG.md"},"Stripe CHANGELOG")," for a mapping of versions. To automatically install the correct version for your Expo SDK version, run:"),Object(i.b)(o.b,{packageName:"@stripe/stripe-react-native",href:"https://github.com/stripe/stripe-react-native",mdxType:"InstallSection"}),Object(i.b)("h3",{id:"config-plugin-setup-optional"},"Config plugin setup (optional)"),Object(i.b)("p",null,"If you're using EAS Build, you can do most of your Stripe setup using the ",Object(i.b)("inlineCode",{parentName:"p"},"@stripe/stripe-react-native")," config plugin (",Object(i.b)("a",{parentName:"p",href:"/../../../../../../guides/config-plugins/"},"what's a config plugin?"),"). To setup, just add the config plugin to the ",Object(i.b)("inlineCode",{parentName:"p"},"plugins")," array of your ",Object(i.b)("strong",{parentName:"p"},"app.json")," or ",Object(i.b)("strong",{parentName:"p"},"app.config.js")," as shown below, then rebuild the app."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "expo": {\n    ...\n    "plugins": [\n      [\n        "@stripe/stripe-react-native",\n        {\n          "merchantIdentifier": string | string [],\n          "enableGooglePay": boolean\n        }\n      ]\n    ],\n  }\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"merchantIdentifier"),": iOS only. This is the Apple merchant ID obtained ",Object(i.b)("a",{parentName:"li",href:"https://stripe.com/docs/apple-pay?platform=react-native"},"here"),". Otherwise, Apple Pay will not work as expected. If you have multiple merchantIdentifiers, you can set them in an array."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"enableGooglePay"),": Android only. Boolean indicating whether or not Google Pay is enabled. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"false"),".")),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"Trying out Stripe takes just a few seconds. First, connect to ",Object(i.b)("a",{parentName:"p",href:"https://snack.expo.dev/@charliecruzan/stripe-react-native-example?platform=mydevice"},"this Snack")," on your device."),Object(i.b)("p",null,"Under the hood, that example connects to ",Object(i.b)("a",{parentName:"p",href:"https://glitch.com/edit/#!/expo-stripe-server-example"},"this Glitch server code"),", so you'll need to open that page to spin up the server. Feel free to run your own Glitch server and copy that code!"),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"For usage information and detailed documentation, please refer to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://stripe.dev/stripe-react-native/api-reference/index.html"},"Stripe's React Native SDK reference")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/stripe/stripe-react-native"},"Stripe's React Native GitHub repo")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/stripe/stripe-react-native/tree/master/example"},"Stripe's example React Native app"))),Object(i.b)("h3",{id:"common-issues"},"Common issues"),Object(i.b)("h4",{id:"browser-pop-ups-are-not-redirecting-back-to-my-app"},"Browser pop-ups are not redirecting back to my app"),Object(i.b)("p",null,"If you're relying on redirects, you'll need to pass in a ",Object(i.b)("inlineCode",{parentName:"p"},"urlScheme")," to ",Object(i.b)("inlineCode",{parentName:"p"},"initStripe"),". To make sure you always use the proper ",Object(i.b)("inlineCode",{parentName:"p"},"urlScheme"),", pass in:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import * as Linking from 'expo-linking';\nimport Constants from 'expo-constants';\n\nurlScheme:\n  Constants.appOwnership === 'expo'\n    ? Linking.createURL('/--/')\n    : Linking.createURL(''),\n")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/../../../../../../versions/latest/sdk/linking/#linkingcreateurlpath-options"},"Linking.createURL")," will ensure you're using the proper scheme, whether you're running in Expo Go or your production app. ",Object(i.b)("inlineCode",{parentName:"p"},"'/--/'")," is necessary in Expo Go because it indicates that the substring after it corresponds to the deep link path, and is not part of the path to the app itself."),Object(i.b)("h2",{id:"limitations"},"Limitations"),Object(i.b)("h3",{id:"standalone-apps"},"Standalone apps"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"@stripe/stripe-react-native")," is supported in Expo Go on Android and iOS out of the box, ",Object(i.b)("strong",{parentName:"p"},"however"),", for iOS, it is only available for standalone apps built with ",Object(i.b)("a",{parentName:"p",href:"/../../../../../../build/introduction/"},"EAS Build"),", and not for apps built on the classic build system- ",Object(i.b)("inlineCode",{parentName:"p"},"expo build:ios"),". Android apps built with ",Object(i.b)("inlineCode",{parentName:"p"},"expo build:android")," ",Object(i.b)("em",{parentName:"p"},"will")," have access to the ",Object(i.b)("inlineCode",{parentName:"p"},"@stripe/stripe-react-native")," library."),Object(i.b)("h3",{id:"apple-pay"},"Apple Pay"),Object(i.b)("p",null,"Apple Pay ",Object(i.b)("strong",{parentName:"p"},"is not")," supported in Expo Go. To use Apple Pay, you must use either ",Object(i.b)("a",{parentName:"p",href:"/../../../../../../build/introduction/"},"EAS Build"),", or run ",Object(i.b)("inlineCode",{parentName:"p"},"expo run:ios")," in your project directory."),Object(i.b)("h3",{id:"google-pay"},"Google Pay"),Object(i.b)("p",null,"Google Pay ",Object(i.b)("strong",{parentName:"p"},"is not")," supported in Expo Go. To use Google Pay, you must use either ",Object(i.b)("a",{parentName:"p",href:"/../../../../../../build/introduction/"},"EAS Build"),", or run ",Object(i.b)("inlineCode",{parentName:"p"},"expo run:android")," in your project directory."))}b.isMDXComponent=!0},I0q5:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var r=n("z7pX"),a=n("H+61"),i=n("UlJF"),o=n("+Css"),s=n("7LId"),p=n("VIvw"),c=n("iHvq"),l=n("cpVT"),u=n("q1tI"),b=n("ufKf"),d=n("3zh3"),m=n("AeFk"),h=function(e){var t=e.size,n=void 0===t?24:t,r=e.stroke,a=void 0===r?d.palette.dark.white:r;return Object(m.c)("svg",{"aria-label":"check",width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(m.c)("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))},f=n("5BX9");function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(c.a)(e);if(t){var a=Object(c.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(p.a)(this,n)}}var y="v".concat(n("kiQV").version),O=function(e){Object(s.a)(n,e);var t=j(n);function n(){var e;Object(a.a)(this,n);for(var i=arguments.length,s=new Array(i),p=0;p<i;p++)s[p]=arguments[p];return e=t.call.apply(t,[this].concat(s)),Object(l.a)(Object(o.a)(e),"contentRef",u.createRef()),Object(l.a)(Object(o.a)(e),"state",{ready:!1}),Object(l.a)(Object(o.a)(e),"getSelectedDocsVersion",(function(){var t=e.context.version;return"latest"===t?y:t})),Object(l.a)(Object(o.a)(e),"getSnackSdkVersion",(function(){var t=e.getSelectedDocsVersion();return"unversioned"===t&&(t=y),t.replace("v","")})),Object(l.a)(Object(o.a)(e),"getExamplesPath",(function(){return"".concat(document.location.origin,"/static/examples/").concat(e.getSelectedDocsVersion())})),Object(l.a)(Object(o.a)(e),"getDependencies",(function(){return Object(r.a)(e.props.dependencies).join(",")})),Object(l.a)(Object(o.a)(e),"getCode",(function(){return(e.contentRef.current&&e.contentRef.current.textContent||"").replace(/%%placeholder-start%%.*%%placeholder-end%%/g,"")})),e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.setState({ready:!0})}},{key:"render",value:function(){return Object(m.c)("div",null,Object(m.c)("div",{ref:this.contentRef,style:this.props.contentHidden?{display:"none"}:void 0},this.props.children),Object(m.c)("form",{action:b.a,method:"POST",target:"_blank"},Object(m.c)("input",{type:"hidden",name:"platform",value:this.props.defaultPlatform||"android"}),Object(m.c)("input",{type:"hidden",name:"name",value:this.props.label||"Example"}),Object(m.c)("input",{type:"hidden",name:"dependencies",value:this.getDependencies()}),Object(m.c)("input",{type:"hidden",name:"sdkVersion",value:this.getSnackSdkVersion()}),this.props.platforms&&Object(m.c)("input",{type:"hidden",name:"supportedPlatforms",value:this.props.platforms.join(",")}),this.state.ready&&Object(m.c)("input",{type:"hidden",name:"files",value:JSON.stringify(Object(b.b)({templateId:this.props.templateId,code:this.getCode(),files:this.props.files,baseURL:this.getExamplesPath()}))}),Object(m.c)("button",{className:"snack-inline-example-button",disabled:!this.state.ready},Object(m.c)(h,{size:16})," ",this.props.buttonTitle||"Try this example on Snack")))}}]),n}(u.Component);Object(l.a)(O,"contextType",f.a),Object(l.a)(O,"defaultProps",{dependencies:[]})},cpVT:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},d9IO:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v44.0.0/sdk/stripe",function(){return n("DR14")}])},kiQV:function(e){e.exports=JSON.parse('{"name":"expo-docs","version":"44.0.0","private":true,"scripts":{"dev":"rimraf .next/preval && next dev -p 3002","build":"cross-env NODE_OPTIONS=--max-old-space-size=8192 next build","export":"yarn run build && next export && yarn run export-issue-404","export-issue-404":"echo \\"\ud83d\udee0  Patching https://github.com/vercel/next.js/issues/16528\\"; cp out/404/index.html out/404.html","export-server":"http-server out -p 8000","import-react-native-docs":"node ./scripts/import-react-native-docs.js","test-links":"node --async-stack-traces --unhandled-rejections=strict ./scripts/test-links.js","prettier":"prettier --write \'**/*.{js,ts,tsx,md}\'","lint":"tsc --noEmit && eslint .","lint-links":"remark -u validate-links ./pages","watch":"tsc --noEmit -w","test":"jest","schema-sync":"node --async-stack-traces --unhandled-rejections=strict ./scripts/schema-sync.js","remove-version":"node --unhandled-rejections=strict ./scripts/remove-version.js"},"resolutions":{"webpack":"^5.28.0"},"dependencies":{"@emotion/react":"^11.4.0","@expo/spawn-async":"^1.5.0","@expo/styleguide":"^4.0.1","@mdx-js/loader":"^1.6.22","@mdx-js/mdx":"^1.6.22","@mdx-js/react":"^1.6.22","@mdx-js/runtime":"^1.6.22","@reach/tabs":"^0.15.0","@sentry/browser":"^5.6.1","date-fns":"^2.28.0","docsearch.js":"^2.5.2","emoji-regex":"^9.2.2","front-matter":"^2.3.0","fs-extra":"^6.0.1","github-slugger":"^1.3.0","hotshot":"^1.0.5","lodash":"^4.17.20","next":"^11.1.4","nprogress":"0.2.0","path-browserify":"^1.0.1","prism-react-renderer":"1.0.2","prop-types":"15.7.2","react":"^17.0.2","react-diff-view":"^2.4.7","react-dom":"^17.0.2","react-feather":"^2.0.9","react-markdown":"^6.0.3","react-player":"^1.11.1","react-visibility-sensor":"^5.1.1","remark-gfm":"^1.0.0","tippy.js":"^6.3.1"},"devDependencies":{"@apidevtools/json-schema-ref-parser":"^9.0.9","@babel/core":"^7.13.14","@emotion/babel-preset-css-prop":"^11.2.0","@emotion/jest":"^11.7.1","@testing-library/jest-dom":"5.11.0","@testing-library/react":"10.4.3","@testing-library/react-hooks":"^7.0.2","@types/cacache":"^15.0.1","@types/fs-extra":"^9.0.11","@types/github-slugger":"^1.3.0","@types/google.analytics":"^0.0.41","@types/gtag.js":"^0.0.6","@types/lodash":"^4.14.161","@types/long":"^4.0.1","@types/mdx-js__react":"^1.5.3","@types/node":"^14.11.2","@types/nprogress":"^0.2.0","@types/react":"^17.0.11","axios":"^0.21.2","babel-plugin-module-resolver":"3.1.1","babel-plugin-preval":"^3.0.1","cross-env":"^5.2.0","danger":"^9.2.10","esbuild-loader":"^2.13.1","eslint":"^8.6.0","eslint-config-next":"^10.2.3","eslint-config-universe":"^10.0.0","eslint-plugin-lodash":"^7.3.0","http-server":"^0.12.3","jest":"^27.4.7","js-yaml":"^4.1.0","prettier":"^2.3.1","puppeteer":"^10.2.0","react-test-renderer":"^17.0.2","rehype-slug":"^4.0.1","remark-cli":"^9.0.0","remark-frontmatter":"^2.0.0","remark-validate-links":"^10.0.4","rimraf":"^3.0.2","semver":"^7.3.5","sitemap":"^6.3.0","typescript":"^4.5.4","unist-builder":"^2.0.0","unist-util-visit":"^2.0.3"}}')},ufKf:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r="https://snack.expo.dev";function a(e){var t=e.templateId,n=e.code,r=e.files,a=e.baseURL,i={};return r&&Object.keys(r).forEach((function(e){var t=r[e],n=/\.(jsx?|tsx?|json|md)$/i.test(e);i[e]=n?{type:"CODE",url:t.match(/^https?:\/\//)?t:"".concat(a,"/").concat(t)}:{type:"ASSET",contents:t}})),t?i["App.js"]={type:"CODE",url:"".concat(a,"/").concat(t,".js")}:n&&(i["App.js"]={type:"CODE",contents:n}),i}},z7pX:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("6FTQ");var a=n("8rE2");function i(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},[["d9IO",1,0,2,3,4,5,6]]]);