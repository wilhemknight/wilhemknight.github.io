_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[47],{"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n("q1tI"),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return n?r.a.createElement(m,p(p({ref:t},l),{},{components:n})):r.a.createElement(m,p({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"===typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"===typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},CMWn:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bare/hello-world",function(){return n("XWwA")}])},FhZx:function(e,t,n){"use strict";var o=n("AeFk"),r=n("3zh3"),a=(n("q1tI"),Object(o.b)("background-color:",r.palette.light.black,";border-radius:4px;padding:24px;display:flex;flex-direction:column;overflow-x:auto;margin-bottom:1rem;","")),i=Object(o.b)("white-space:nowrap;font-family:",r.typography.fontFaces.mono,";font-size:13px;color:",r.palette.dark.gray[900],";line-height:160%;::before{content:'$ ';color:",r.palette.dark.primary[700],";}",""),p=Object(o.b)("user-select:none;white-space:nowrap;font-family:",r.typography.fontFaces.mono,";font-size:13px;color:",r.palette.dark.gray[600],";line-height:150%;",""),c=function(e){var t=e.children;return Object(o.c)("code",{unselectable:"on",css:p},t)};t.a=function(e){var t=e.cmd;return Object(o.c)("div",{css:a},t.map((function(e,t){var n="line-".concat(t);return e.startsWith("#")?Object(o.c)(c,{key:n},e):""===e.trim()?Object(o.c)("br",{key:n}):Object(o.c)("code",{key:n,css:i},e)})))}},XWwA:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return c})),n.d(t,"headings",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n("HALo"),r=n("dhJC"),a=(n("q1tI"),n("7ljp")),i=n("FhZx"),p=["components"],c={title:"Up and Running",sidebar_label:"Up and Running"},l=[{depth:2,type:"text",title:"Using Expo modules"},{depth:2,type:"text",title:"Install an Expo SDK package"},{depth:3,type:"text",title:"iOS configuration"},{depth:3,type:"text",title:"Android configuration"},{depth:2,type:"text",title:"What now?"}],s={meta:c,headings:l};function u(e){var t=e.components,n=Object(r.a)(e,p);return Object(a.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"This guide assumes that you have Xcode and/or Android Studio installed and working. It also assumes that you want to create a new project. If you have an existing app that you would like to integrate the Expo SDK in an existing app, read the ",Object(a.b)("a",{parentName:"p",href:"/bare/existing-apps/"},"existing apps guide"),".")),Object(a.b)("p",null,"Before you get started with a bare React Native project, make sure you set up your environment for ",Object(a.b)("a",{parentName:"p",href:"https://reactnative.dev/docs/environment-setup"},"React Native CLI"),"."),Object(a.b)("p",null,"After this, let's get started with a bare project. Run ",Object(a.b)("inlineCode",{parentName:"p"},"expo init")," and choose one of the bare templates. We'll use the minimum template here."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"# If you don't have expo-cli yet, get it\nnpm i -g expo-cli\n# This is a shortcut to skip the UI for picking the template\nexpo init --template bare-minimum\n")),Object(a.b)("p",null,"Next, let's get the project running. Go into your project directory and run ",Object(a.b)("inlineCode",{parentName:"p"},"expo run:ios")," or ",Object(a.b)("inlineCode",{parentName:"p"},"expo run:android")," ","\u2014"," hurray! Your project is working."),Object(a.b)("h2",{id:"using-expo-modules"},"Using Expo modules"),Object(a.b)("p",null,"Bare template projects come with ",Object(a.b)("inlineCode",{parentName:"p"},"expo")," installed and configured, so you're ready to install and use any package from the Expo SDK."),Object(a.b)("h2",{id:"install-an-expo-sdk-package"},"Install an Expo SDK package"),Object(a.b)("p",null,"We're going to install ",Object(a.b)("a",{parentName:"p",href:"https://github.com/expo/expo/tree/main/packages/expo-web-browser"},Object(a.b)("inlineCode",{parentName:"a"},"expo-web-browser")),", it's a useful little package for showing a modal web browser using the appropriate native APIs on each platform."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"expo install expo-web-browser\n")),Object(a.b)("p",null,"Open up ",Object(a.b)("strong",{parentName:"p"},"App.js")," and add a button that, when pressed, opens up a web browser. Here's some code for you."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react';\nimport { Button, View } from 'react-native';\nimport * as WebBrowser from 'expo-web-browser';\n\nexport default function App() {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Button\n        title=\"Open a web browser\"\n        onPress={() => {\n          WebBrowser.openBrowserAsync('https://expo.dev');\n        }}\n      />\n    </View>\n  );\n}\n")),Object(a.b)("p",null,"This will not yet work because we haven't linked the native code that powers it. To do this, we need to follow the instructions in the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/expo/expo/tree/main/packages/expo-web-browser"},Object(a.b)("inlineCode",{parentName:"a"},"expo-web-browser")," README")," to configure it for iOS and Android. Let's do it."),Object(a.b)("h3",{id:"ios-configuration"},"iOS configuration"),Object(a.b)(i.a,{cmd:["# Build your native iOS project","expo run:ios"],mdxType:"TerminalBlock"}),Object(a.b)("p",null,"You may need to run ",Object(a.b)("inlineCode",{parentName:"p"},"npx pod-install")," to link the native iOS packages using ",Object(a.b)("a",{parentName:"p",href:"https://cocoapods.org/"},"CocoaPods"),", this is like running ",Object(a.b)("inlineCode",{parentName:"p"},"yarn")," or ",Object(a.b)("inlineCode",{parentName:"p"},"npm install")," in an Expo project. ",Object(a.b)("inlineCode",{parentName:"p"},"expo run:ios")," does this automatically when the ",Object(a.b)("strong",{parentName:"p"},"package.json")," changes."),Object(a.b)("h3",{id:"android-configuration"},"Android configuration"),Object(a.b)(i.a,{cmd:["# Build your native Android project","expo run:android"],mdxType:"TerminalBlock"}),Object(a.b)("p",null,'Once the app is built, press the "Open a web browser" button and watch the browser open. Success! Happy times.'),Object(a.b)("h2",{id:"what-now"},"What now?"),Object(a.b)("p",null,"Most of the Expo SDKs APIs are available in bare React Native projects and can be installed using a process very similar to the above. You can see which are supported and which aren't in the ",Object(a.b)("a",{parentName:"p",href:"/bare/unimodules-full-list/"},"Supported Expo SDK Packages")," section, or just go ahead and browse the ",Object(a.b)("inlineCode",{parentName:"p"},"API Reference")," section and follow the installation instructions linked there, read the API documentation, and enjoy. Good luck building your app!"))}u.isMDXComponent=!0}},[["CMWn",1,0,2,3]]]);