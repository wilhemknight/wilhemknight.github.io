_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[1321],{"5BX9":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s}));var a=n("q1tI"),o=n("AeFk"),r=Object(a.createContext)({version:"latest",hasVersion:!1,setVersion:function(e){throw new Error("PageApiVersionContext not found")}});function i(e){var t=c(e.router.pathname),n=null!==t,i=Object(a.useCallback)((function(t){e.router.push(function(e,t){var n=c(e);return n?e.replace(n,t):e}(e.router.pathname,t))}),[]);return Object(o.c)(r.Provider,{value:{setVersion:i,hasVersion:n,version:t||"latest"}},e.children)}function s(){return Object(a.useContext)(r)}function c(e){return function(e){return e.startsWith("/versions/")}(e)?e.split("/",3).pop():null}},"6FTQ":function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}n.d(t,"a",(function(){return a}))},"8rE2":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("6FTQ");function o(e,t){if(e){if("string"===typeof e)return Object(a.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(a.a)(e,t):void 0}}},"93Ys":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v44.0.0/sdk/map-view",function(){return n("Uitd")}])},I0q5:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n("z7pX"),o=n("H+61"),r=n("UlJF"),i=n("+Css"),s=n("7LId"),c=n("VIvw"),p=n("iHvq"),l=n("cpVT"),d=n("q1tI"),b=n("ufKf"),u=n("3zh3"),m=n("AeFk"),h=function(e){var t=e.size,n=void 0===t?24:t,a=e.stroke,o=void 0===a?u.palette.dark.white:a;return Object(m.c)("svg",{"aria-label":"check",width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(m.c)("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))},g=n("5BX9");function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(p.a)(e);if(t){var o=Object(p.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return Object(c.a)(this,n)}}var j="v".concat(n("kiQV").version),f=function(e){Object(s.a)(n,e);var t=y(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return e=t.call.apply(t,[this].concat(s)),Object(l.a)(Object(i.a)(e),"contentRef",d.createRef()),Object(l.a)(Object(i.a)(e),"state",{ready:!1}),Object(l.a)(Object(i.a)(e),"getSelectedDocsVersion",(function(){var t=e.context.version;return"latest"===t?j:t})),Object(l.a)(Object(i.a)(e),"getSnackSdkVersion",(function(){var t=e.getSelectedDocsVersion();return"unversioned"===t&&(t=j),t.replace("v","")})),Object(l.a)(Object(i.a)(e),"getExamplesPath",(function(){return"".concat(document.location.origin,"/static/examples/").concat(e.getSelectedDocsVersion())})),Object(l.a)(Object(i.a)(e),"getDependencies",(function(){return Object(a.a)(e.props.dependencies).join(",")})),Object(l.a)(Object(i.a)(e),"getCode",(function(){return(e.contentRef.current&&e.contentRef.current.textContent||"").replace(/%%placeholder-start%%.*%%placeholder-end%%/g,"")})),e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.setState({ready:!0})}},{key:"render",value:function(){return Object(m.c)("div",null,Object(m.c)("div",{ref:this.contentRef,style:this.props.contentHidden?{display:"none"}:void 0},this.props.children),Object(m.c)("form",{action:b.a,method:"POST",target:"_blank"},Object(m.c)("input",{type:"hidden",name:"platform",value:this.props.defaultPlatform||"android"}),Object(m.c)("input",{type:"hidden",name:"name",value:this.props.label||"Example"}),Object(m.c)("input",{type:"hidden",name:"dependencies",value:this.getDependencies()}),Object(m.c)("input",{type:"hidden",name:"sdkVersion",value:this.getSnackSdkVersion()}),this.props.platforms&&Object(m.c)("input",{type:"hidden",name:"supportedPlatforms",value:this.props.platforms.join(",")}),this.state.ready&&Object(m.c)("input",{type:"hidden",name:"files",value:JSON.stringify(Object(b.b)({templateId:this.props.templateId,code:this.getCode(),files:this.props.files,baseURL:this.getExamplesPath()}))}),Object(m.c)("button",{className:"snack-inline-example-button",disabled:!this.state.ready},Object(m.c)(h,{size:16})," ",this.props.buttonTitle||"Try this example on Snack")))}}]),n}(d.Component);Object(l.a)(f,"contextType",g.a),Object(l.a)(f,"defaultProps",{dependencies:[]})},Uitd:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return l})),n.d(t,"headings",(function(){return d})),n.d(t,"default",(function(){return u}));var a=n("HALo"),o=n("dhJC"),r=(n("q1tI"),n("7ljp")),i=n("HCau"),s=n("hykZ"),c=n("I0q5"),p=["components"],l={title:"MapView",sourceCodeUrl:"https://github.com/react-native-community/react-native-maps"},d=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"Usage"},{depth:2,type:"text",title:"Configuration"},{depth:2,type:"text",title:"Deploying Google Maps to an Android standalone app"},{depth:4,type:"text",title:"1. Register a Google Cloud API project and enable the Maps SDK for Android"},{depth:4,type:"text",title:"2. Have your app's SHA-1 certificate fingerprint ready"},{depth:4,type:"text",title:"3. Create an API key"},{depth:4,type:"text",title:"4. Add the API key to your project"},{depth:2,type:"text",title:"Deploying Google Maps to an iOS standalone app"},{depth:4,type:"text",title:"1. Register a Google Cloud API project and enable the Maps SDK for iOS"},{depth:4,type:"text",title:"2. Create an API key"},{depth:4,type:"text",title:"3. Add the API key to your project"},{depth:2,type:"text",title:"Configuring for web"},{depth:2,type:"text",title:"How to retrieve your debug keystore fingerprint (Android only)"}],b={meta:l,headings:d};function u(e){var t=e.components,n=Object(o.a)(e,p);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"react-native-maps"))," provides a Map component that uses Apple Maps or Google Maps on iOS and Google Maps on Android. Expo uses react-native-maps at ",Object(r.b)("a",{parentName:"p",href:"https://github.com/react-community/react-native-maps"},"react-community/react-native-maps"),". No setup required for use within the Expo Go app. See below for instructions on how to configure for deployment as a standalone app on Android and iOS."),Object(r.b)(s.a,{android:!0,emulator:!0,ios:!0,simulator:!0,mdxType:"PlatformsSection"}),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)(i.b,{packageName:"react-native-maps",href:"https://github.com/react-native-maps/react-native-maps/blob/master/docs/installation.md",mdxType:"InstallSection"}),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("p",null,"See full documentation at ",Object(r.b)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-maps"},"react-native-community/react-native-maps"),"."),Object(r.b)(c.a,{label:"MapView",dependencies:["react-native-maps"],mdxType:"SnackInline"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"import * as React from 'react';\nimport MapView from 'react-native-maps';\nimport { StyleSheet, Text, View, Dimensions } from 'react-native';\n\nexport default function App() {\n  return (\n    <View style={styles.container}>\n      <MapView style={styles.map} />\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: '#fff',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  map: {\n    width: Dimensions.get('window').width,\n    height: Dimensions.get('window').height,\n  },\n});\n"))),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"No additional configuration is necessary to use ",Object(r.b)("inlineCode",{parentName:"p"},"react-native-maps")," in Expo Go. However, once you want to deploy your standalone app you should follow instructions below."),Object(r.b)("h2",{id:"deploying-google-maps-to-an-android-standalone-app"},"Deploying Google Maps to an Android standalone app"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"If you've already registered a project for another Google service on Android, such as Google Sign In, you enable the ",Object(r.b)("strong",{parentName:"p"},"Maps SDK for Android")," on your project and jump to step 4.")),Object(r.b)("h4",{id:"1-register-a-google-cloud-api-project-and-enable-the-maps-sdk-for-android"},"1. Register a Google Cloud API project and enable the Maps SDK for Android"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Open your browser to the ",Object(r.b)("a",{parentName:"li",href:"https://console.developers.google.com/apis"},"Google API Manager")," and create a project."),Object(r.b)("li",{parentName:"ul"},"Once it's created, go to the project and enable the ",Object(r.b)("strong",{parentName:"li"},"Maps SDK for Android"))),Object(r.b)("h4",{id:"2-have-your-apps-sha-1-certificate-fingerprint-ready"},"2. Have your app's SHA-1 certificate fingerprint ready"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"If you are deploying your app to the Google Play Store"),", you will need to have ",Object(r.b)("a",{parentName:"li",href:"/distribution/building-standalone-apps/"},"created a standalone app")," and ",Object(r.b)("a",{parentName:"li",href:"/distribution/app-stores/"},"uploaded it to Google Play")," at least once in order to have Google generate your app signing credentials.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Go to the ",Object(r.b)("a",{parentName:"li",href:"https://play.google.com/console"},"Google Play Console")," \u2192 (your app) \u2192 Setup \u2192 App Integrity"),Object(r.b)("li",{parentName:"ul"},"Copy the value of ",Object(r.b)("em",{parentName:"li"},"SHA-1 certificate fingerprint")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"If you are sideloading your APK or deploying it to another store"),", you will need to have ",Object(r.b)("a",{parentName:"li",href:"/distribution/building-standalone-apps/"},"created a standalone app"),", then run ",Object(r.b)("inlineCode",{parentName:"li"},"expo fetch:android:hashes")," and copy the ",Object(r.b)("em",{parentName:"li"},"Google Certificate Fingerprint"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"If you are running a ",Object(r.b)("em",{parentName:"strong"},"debug")," build (development client or local debug build)"),", your Android app will be signed using the debug keystore. See the instructions ",Object(r.b)("a",{parentName:"li",href:"/versions/v44.0.0/sdk/map-view/#how-to-retrieve-your-debug-keystore-fingerprint-android-only"},"below")," on how to retrieve your fingerprint.")),Object(r.b)("h4",{id:"3-create-an-api-key"},"3. Create an API key"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Go to ",Object(r.b)("a",{parentName:"li",href:"https://console.cloud.google.com/apis/credentials"},"Google Cloud Credential manager")," and click ",Object(r.b)("strong",{parentName:"li"},"Create Credentials"),", then ",Object(r.b)("strong",{parentName:"li"},"API Key"),"."),Object(r.b)("li",{parentName:"ul"},"In the modal, click ",Object(r.b)("strong",{parentName:"li"},"Restrict Key"),"."),Object(r.b)("li",{parentName:"ul"},"Under ",Object(r.b)("strong",{parentName:"li"},"Key restrictions")," \u2192 ",Object(r.b)("strong",{parentName:"li"},"Application restrictions"),", ensure that the ",Object(r.b)("strong",{parentName:"li"},"Android apps")," radio button is chosen."),Object(r.b)("li",{parentName:"ul"},"Click the ",Object(r.b)("strong",{parentName:"li"},"+ Add package name and fingerprint")," button."),Object(r.b)("li",{parentName:"ul"},"Add your Android package name from ",Object(r.b)("strong",{parentName:"li"},"app.json")," to the package name field."),Object(r.b)("li",{parentName:"ul"},"Add or replace the ",Object(r.b)("strong",{parentName:"li"},"SHA-1 certificate fingerprint")," with the value from step 2."),Object(r.b)("li",{parentName:"ul"},"Click ",Object(r.b)("strong",{parentName:"li"},"Done")," and then click ",Object(r.b)("strong",{parentName:"li"},"Save"))),Object(r.b)("h4",{id:"4-add-the-api-key-to-your-project"},"4. Add the API key to your project"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Copy your ",Object(r.b)("strong",{parentName:"li"},"API Key")," into your ",Object(r.b)("strong",{parentName:"li"},"app.json")," under the ",Object(r.b)("inlineCode",{parentName:"li"},"android.config.googleMaps.apiKey")," field."),Object(r.b)("li",{parentName:"ul"},"Rebuild the app binary and re-submit to Google Play or sideload it (depending on how you configured your API key) to test that the configuration was successful.")),Object(r.b)("h2",{id:"deploying-google-maps-to-an-ios-standalone-app"},"Deploying Google Maps to an iOS standalone app"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"If you've already registered a project for another Google service on iOS, such as Google Sign In, you enable the ",Object(r.b)("strong",{parentName:"p"},"Maps SDK for iOS")," on your project and jump to step 3.")),Object(r.b)("h4",{id:"1-register-a-google-cloud-api-project-and-enable-the-maps-sdk-for-ios"},"1. Register a Google Cloud API project and enable the Maps SDK for iOS"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Open your browser to the ",Object(r.b)("a",{parentName:"li",href:"https://console.developers.google.com/apis"},"Google API Manager")," and create a project."),Object(r.b)("li",{parentName:"ul"},"Once it's created, go to the project and enable the ",Object(r.b)("strong",{parentName:"li"},"Maps SDK for iOS"))),Object(r.b)("h4",{id:"2-create-an-api-key"},"2. Create an API key"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Go to ",Object(r.b)("a",{parentName:"li",href:"https://console.cloud.google.com/apis/credentials"},"Google Cloud Credential manager")," and click ",Object(r.b)("strong",{parentName:"li"},"Create Credentials"),", then ",Object(r.b)("strong",{parentName:"li"},"API Key"),"."),Object(r.b)("li",{parentName:"ul"},"In the modal, click ",Object(r.b)("strong",{parentName:"li"},"Restrict Key"),"."),Object(r.b)("li",{parentName:"ul"},"Choose the ",Object(r.b)("strong",{parentName:"li"},"iOS apps")," radio button under ",Object(r.b)("strong",{parentName:"li"},"Key restriction"),"."),Object(r.b)("li",{parentName:"ul"},"Under ",Object(r.b)("strong",{parentName:"li"},"Accept requests from an iOS application with one of these bundle identifiers"),", click the ",Object(r.b)("strong",{parentName:"li"},"Add an item")," button."),Object(r.b)("li",{parentName:"ul"},"Add your ",Object(r.b)("inlineCode",{parentName:"li"},"ios.bundleIdentifier")," from ",Object(r.b)("strong",{parentName:"li"},"app.json")," eg: ",Object(r.b)("inlineCode",{parentName:"li"},"com.company.myapp"),") to the bundle ID field."),Object(r.b)("li",{parentName:"ul"},"Click ",Object(r.b)("strong",{parentName:"li"},"Done")," and then click ",Object(r.b)("strong",{parentName:"li"},"Save"))),Object(r.b)("h4",{id:"3-add-the-api-key-to-your-project"},"3. Add the API key to your project"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Copy your API key into ",Object(r.b)("strong",{parentName:"li"},"app.json")," under the ",Object(r.b)("inlineCode",{parentName:"li"},"ios.config.googleMapsApiKey")," field."),Object(r.b)("li",{parentName:"ul"},"In your code, import ",Object(r.b)("inlineCode",{parentName:"li"},"{ PROVIDER_GOOGLE }")," from ",Object(r.b)("inlineCode",{parentName:"li"},"react-native-maps")," and add the property ",Object(r.b)("inlineCode",{parentName:"li"},"provider=PROVIDER_GOOGLE")," to your ",Object(r.b)("inlineCode",{parentName:"li"},"<MapView>"),". This property works on both iOS and Android."),Object(r.b)("li",{parentName:"ul"},"Rebuild the app binary. An easy way to test that the configuration was successful is to do a simulator build.")),Object(r.b)("h2",{id:"configuring-for-web"},"Configuring for web"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Web is experimental! We do not recommend using this library on web yet.")),Object(r.b)("p",null,"To use this in web, add the following script to your ",Object(r.b)("strong",{parentName:"p"},"web/index.html"),". This script may already be present, if this is the case, just replace the ",Object(r.b)("inlineCode",{parentName:"p"},"API_KEY")," with your Google Maps API key which you can obtain here: ",Object(r.b)("a",{parentName:"p",href:"https://developers.google.com/maps/documentation/javascript/get-api-key"},"Google Maps: Get API key")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    \x3c!-- At the end of the <head/> element... --\x3e\n\n    <script\n      async\n      defer\n      src="https://maps.googleapis.com/maps/api/js?key=API_KEY"\n      type="text/javascript"\n    ><\/script>\n\n    \x3c!-- Use your web API Key in place of API_KEY: https://developers.google.com/maps/documentation/javascript/get-api-key --\x3e\n  </head>\n\n  \x3c!-- <body /> --\x3e\n</html>\n')),Object(r.b)("h2",{id:"how-to-retrieve-your-debug-keystore-fingerprint-android-only"},"How to retrieve your debug keystore fingerprint (Android only)"),Object(r.b)("p",null,"When building a debug version of your application outside of Expo Go (for example, when using a ",Object(r.b)("a",{parentName:"p",href:"/../../../../../../development/introduction"},"development client")," or a standalone debug build), your app will be signed with the debug keystore on Android."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"All standard Expo templates use a debug keystore with fingerprint ",Object(r.b)("inlineCode",{parentName:"p"},"5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25"),", that you can enter directly in the Google Cloud Credential Manager. So if you are using one of the standard Expo templates, you don't need to perform the steps below.\nThe debug keystore location and password is defined in your ",Object(r.b)("inlineCode",{parentName:"p"},"android/app/build.gradle")," file like this:"),Object(r.b)("pre",{parentName:"blockquote"},Object(r.b)("code",{parentName:"pre",className:"language-groovy"},"signingConfigs {\n    debug {\n        storeFile file('debug.keystore')\n        storePassword 'android'\n        keyAlias 'androiddebugkey'\n        keyPassword 'android'\n    }\n}\n")),Object(r.b)("p",{parentName:"blockquote"},"You can view the fingerprint for this keystore using the ",Object(r.b)("inlineCode",{parentName:"p"},"keytool")," command, and entering the storePassword. Copy the value shown after ",Object(r.b)("inlineCode",{parentName:"p"},"SHA1:")),Object(r.b)("pre",{parentName:"blockquote"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},"\u276f keytool -list -v -keystore ./android/app/debug.keystore\nEnter keystore password: \n"))))}u.isMDXComponent=!0},cpVT:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))},kiQV:function(e){e.exports=JSON.parse('{"name":"expo-docs","version":"44.0.0","private":true,"scripts":{"dev":"rimraf .next/preval && next dev -p 3002","build":"cross-env NODE_OPTIONS=--max-old-space-size=8192 next build","export":"yarn run build && next export && yarn run export-issue-404","export-issue-404":"echo \\"\ud83d\udee0  Patching https://github.com/vercel/next.js/issues/16528\\"; cp out/404/index.html out/404.html","export-server":"http-server out -p 8000","import-react-native-docs":"node ./scripts/import-react-native-docs.js","test-links":"node --async-stack-traces --unhandled-rejections=strict ./scripts/test-links.js","prettier":"prettier --write \'**/*.{js,ts,tsx,md}\'","lint":"tsc --noEmit && eslint .","lint-links":"remark -u validate-links ./pages","watch":"tsc --noEmit -w","test":"jest","schema-sync":"node --async-stack-traces --unhandled-rejections=strict ./scripts/schema-sync.js","remove-version":"node --unhandled-rejections=strict ./scripts/remove-version.js"},"resolutions":{"webpack":"^5.28.0"},"dependencies":{"@emotion/react":"^11.4.0","@expo/spawn-async":"^1.5.0","@expo/styleguide":"^4.0.1","@mdx-js/loader":"^1.6.22","@mdx-js/mdx":"^1.6.22","@mdx-js/react":"^1.6.22","@mdx-js/runtime":"^1.6.22","@reach/tabs":"^0.15.0","@sentry/browser":"^5.6.1","date-fns":"^2.28.0","docsearch.js":"^2.5.2","emoji-regex":"^9.2.2","front-matter":"^2.3.0","fs-extra":"^6.0.1","github-slugger":"^1.3.0","hotshot":"^1.0.5","lodash":"^4.17.20","next":"^11.1.4","nprogress":"0.2.0","path-browserify":"^1.0.1","prism-react-renderer":"1.0.2","prop-types":"15.7.2","react":"^17.0.2","react-diff-view":"^2.4.7","react-dom":"^17.0.2","react-feather":"^2.0.9","react-markdown":"^6.0.3","react-player":"^1.11.1","react-visibility-sensor":"^5.1.1","remark-gfm":"^1.0.0","tippy.js":"^6.3.1"},"devDependencies":{"@apidevtools/json-schema-ref-parser":"^9.0.9","@babel/core":"^7.13.14","@emotion/babel-preset-css-prop":"^11.2.0","@emotion/jest":"^11.7.1","@testing-library/jest-dom":"5.11.0","@testing-library/react":"10.4.3","@testing-library/react-hooks":"^7.0.2","@types/cacache":"^15.0.1","@types/fs-extra":"^9.0.11","@types/github-slugger":"^1.3.0","@types/google.analytics":"^0.0.41","@types/gtag.js":"^0.0.6","@types/lodash":"^4.14.161","@types/long":"^4.0.1","@types/mdx-js__react":"^1.5.3","@types/node":"^14.11.2","@types/nprogress":"^0.2.0","@types/react":"^17.0.11","axios":"^0.21.2","babel-plugin-module-resolver":"3.1.1","babel-plugin-preval":"^3.0.1","cross-env":"^5.2.0","danger":"^9.2.10","esbuild-loader":"^2.13.1","eslint":"^8.6.0","eslint-config-next":"^10.2.3","eslint-config-universe":"^10.0.0","eslint-plugin-lodash":"^7.3.0","http-server":"^0.12.3","jest":"^27.4.7","js-yaml":"^4.1.0","prettier":"^2.3.1","puppeteer":"^10.2.0","react-test-renderer":"^17.0.2","rehype-slug":"^4.0.1","remark-cli":"^9.0.0","remark-frontmatter":"^2.0.0","remark-validate-links":"^10.0.4","rimraf":"^3.0.2","semver":"^7.3.5","sitemap":"^6.3.0","typescript":"^4.5.4","unist-builder":"^2.0.0","unist-util-visit":"^2.0.3"}}')},ufKf:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var a="https://snack.expo.dev";function o(e){var t=e.templateId,n=e.code,a=e.files,o=e.baseURL,r={};return a&&Object.keys(a).forEach((function(e){var t=a[e],n=/\.(jsx?|tsx?|json|md)$/i.test(e);r[e]=n?{type:"CODE",url:t.match(/^https?:\/\//)?t:"".concat(o,"/").concat(t)}:{type:"ASSET",contents:t}})),t?r["App.js"]={type:"CODE",url:"".concat(o,"/").concat(t,".js")}:n&&(r["App.js"]={type:"CODE",contents:n}),r}},z7pX:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("6FTQ");var o=n("8rE2");function r(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},[["93Ys",1,0,2,3,4,5,6]]]);