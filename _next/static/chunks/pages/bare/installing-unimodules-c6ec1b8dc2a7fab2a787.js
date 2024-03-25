_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[49],{OsKr:function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return u})),t.d(n,"headings",(function(){return d})),t.d(n,"default",(function(){return p}));var a=t("HALo"),o=t("dhJC"),i=(t("q1tI"),t("7ljp")),l=t("HCau"),s=t("5tZt"),c=["components"],u={title:"Installing react-native-unimodules",hidden:!0},d=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"Configuration for iOS"},{depth:2,type:"text",title:"Configuration for Android"},{depth:2,type:"text",title:"Usage"}],r={meta:u,headings:d};function p(e){var n=e.components,t=Object(o.a)(e,c);return Object(i.b)("wrapper",Object(a.a)({},r,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\ud83d\udea8 ",Object(i.b)("strong",{parentName:"p"},"This library is deprecated!")),Object(i.b)("p",{parentName:"blockquote"},"As of Expo SDK 43, ",Object(i.b)("a",{parentName:"p",href:"https://blog.expo.dev/whats-new-in-expo-modules-infrastructure-7a7cdda81ebc"},"react-native-unimodules is deprecated in favor of the expo package"),". Please refer to the ",Object(i.b)("a",{parentName:"p",href:"/bare/installing-expo-modules"},"Installing Expo modules guide"),".")),Object(i.b)("p",null,"This library contains infrastructure and a small set of foundational libraries and interfaces that are commonly depended on by other modules. You can install react-native-unimodules in any react-native app, and once it is installed you can use most of the libraries from the Expo SDK, like expo-camera, expo-media-library and many more."),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The following instructions for installing ",Object(i.b)("inlineCode",{parentName:"p"},"react-native-unimodules")," are present only for archival purposes, we advise that you do not install the library in any new projects and that you ",Object(i.b)("a",{parentName:"p",href:"/bare/installing-expo-modules/"},"use Expo modules instead"),".")),Object(i.b)(l.b,{packageName:"react-native-unimodules",cmd:["npm install react-native-unimodules","npx pod-install"],hideBareInstructions:!0,mdxType:"InstallSection"}),Object(i.b)("br",null),Object(i.b)("p",null,"Once installation is complete, apply the changes from the following diffs to configure react-native-unimodules in your project. This is expected to take about five minutes, and you may need to adapt it slightly depending on how customized your project is."),Object(i.b)("h2",{id:"configuration-for-ios"},"Configuration for iOS"),Object(i.b)(s.a,{source:"/static/diffs/react-native-unimodules-ios.diff",mdxType:"ConfigurationDiff"}),Object(i.b)("details",null,Object(i.b)("summary",null,Object(i.b)("h4",null,"\ud83d\udca1 Need to customize node_modules path?")),Object(i.b)("p",null,Object(i.b)("p",null,"If you need to customize the path to node_modules, for example because you are using yarn workspaces, then you can pass in a param for this: ",Object(i.b)("inlineCode",{parentName:"p"},"use_unimodules!(modules_paths: ['./path/to/node_modules'])"),". Alternatively, you can configure this in ",Object(i.b)("strong",{parentName:"p"},"package.json"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "...",\n  "dependencies": {},\n  "react-native-unimodules": {\n    "ios": {\n      "modulesPaths": [\n        "./path/to/node_modules"\n      ]\n    }\n  }\n}\n')))),Object(i.b)("div",{style:{marginTop:-10}}),Object(i.b)("details",null,Object(i.b)("summary",null,Object(i.b)("h4",null,"\ud83d\udca1 Need to exclude some unimodules that are being automatically linked?")),Object(i.b)("p",null,Object(i.b)("p",null,"If you need to exclude some of the unimodules that you are not using but they got installed by your other dependencies (like ",Object(i.b)("inlineCode",{parentName:"p"},"expo"),"), then you can pass in ",Object(i.b)("inlineCode",{parentName:"p"},"exclude")," param for this. For example, if you want to exclude ",Object(i.b)("inlineCode",{parentName:"p"},"expo-face-detector"),", you may want to use this: ",Object(i.b)("inlineCode",{parentName:"p"},"use_unimodules!(exclude: ['expo-face-detector'])"),". Alternatively, you can configure this in ",Object(i.b)("strong",{parentName:"p"},"package.json"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "...",\n  "dependencies": {},\n  "react-native-unimodules": {\n    "ios": {\n      "exclude": [\n        "expo-face-detector"\n      ]\n    }\n  }\n}\n')))),Object(i.b)("br",null),Object(i.b)("p",null,"Save all of your changes. In Xcode, update the iOS Deployment Target under ",Object(i.b)("inlineCode",{parentName:"p"},"Target \u2192 Build Settings \u2192 Deployment")," to ",Object(i.b)("inlineCode",{parentName:"p"},"iOS 11.0"),". The last step is to install the project's CocoaPods again in order to pull in unimodules that are detected by ",Object(i.b)("inlineCode",{parentName:"p"},"use_unimodules!")," directive that we added to the ",Object(i.b)("inlineCode",{parentName:"p"},"Podfile"),":"),Object(i.b)(l.b,{packageName:"react-native-unimodules",cmd:["npx pod-install"],hideBareInstructions:!0,mdxType:"InstallSection"}),Object(i.b)("div",{style:{marginTop:50}}),Object(i.b)("h2",{id:"configuration-for-android"},"Configuration for Android"),Object(i.b)(s.a,{source:"/static/diffs/react-native-unimodules-android.diff",mdxType:"ConfigurationDiff"}),Object(i.b)("details",null,Object(i.b)("summary",null,Object(i.b)("h4",null,"\ud83d\udca1 Need to customize node_modules path?")),Object(i.b)("p",null,Object(i.b)("p",null,"If you need to customize the path to node_modules, for example because you are using yarn workspaces, then you can pass in a param ",Object(i.b)("inlineCode",{parentName:"p"},"modulesPaths")," for both of these functions: ",Object(i.b)("inlineCode",{parentName:"p"},"includeUnimodulesProjects([modulesPaths: ['./path/to/node_modules']])"),", ",Object(i.b)("inlineCode",{parentName:"p"},"addUnimodulesDependencies([modulesPaths: ['./path/to/node_modules']])"),". Alternatively, you can configure this in ",Object(i.b)("strong",{parentName:"p"},"package.json"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "...",\n  "dependencies": {},\n  "react-native-unimodules": {\n    "android": {\n      "modulesPaths": [\n        "./path/to/node_modules"\n      ]\n    }\n  }\n}\n')))),Object(i.b)("div",{style:{marginTop:-10}}),Object(i.b)("details",null,Object(i.b)("summary",null,Object(i.b)("h4",null,"\ud83d\udca1 Need to exclude some unimodules that are being automatically linked?")),Object(i.b)("p",null,Object(i.b)("p",null,"If you need to exclude some of the unimodules that you are not using but they got installed by your other dependencies (like ",Object(i.b)("inlineCode",{parentName:"p"},"expo"),"), then you can pass in ",Object(i.b)("inlineCode",{parentName:"p"},"exclude")," param for this. For example, if you want to exclude ",Object(i.b)("inlineCode",{parentName:"p"},"expo-face-detector"),", you may want to use this: ",Object(i.b)("inlineCode",{parentName:"p"},"addUnimodulesDependencies([exclude: ['expo-face-detector']])")," and ",Object(i.b)("inlineCode",{parentName:"p"},"includeUnimodulesDependencies([exclude: ['expo-face-detector']])"),". Alternatively, you can configure this in ",Object(i.b)("strong",{parentName:"p"},"package.json"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "...",\n  "dependencies": {},\n  "react-native-unimodules": {\n    "android": {\n      "exclude": [\n        "expo-face-detector"\n      ]\n    }\n  }\n}\n')))),Object(i.b)("div",{style:{marginTop:-10}}),Object(i.b)("details",null,Object(i.b)("summary",null,Object(i.b)("h4",null,"\ud83d\udca1 Need to customize configuration of unimodule dependencies?")),Object(i.b)("p",null,Object(i.b)("p",null,"You can also customize the configuration of the unimodules dependencies (the default is ",Object(i.b)("inlineCode",{parentName:"p"},"implementation"),", if you're using Gradle older than 3.0, you will need to set ",Object(i.b)("inlineCode",{parentName:"p"},'configuration: "compile"')," in ",Object(i.b)("inlineCode",{parentName:"p"},"addUnimodulesDependencies"),", like: ",Object(i.b)("inlineCode",{parentName:"p"},'addUnimodulesDependencies([configuration: "compile"])'),"). Alternatively, you can configure this in ",Object(i.b)("strong",{parentName:"p"},"package.json"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "...",\n  "dependencies": {},\n  "react-native-unimodules": {\n    "android": {\n      "configuration": "compile"\n    }\n  }\n}\n')))),Object(i.b)("div",{style:{marginTop:50}}),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"An easy way to verify installation is successful is to log a value from ",Object(i.b)("a",{parentName:"p",href:"/../../../../../../versions/latest/sdk/constants"},"Constants"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import { Constants } from 'react-native-unimodules';\nconsole.log(Constants.systemFonts);\n")),Object(i.b)("p",null,"It's possible that you will not have to use any of the code provided by this package directly, it may be used only by other Expo modules that you install. You will likely want to use something like ",Object(i.b)("a",{parentName:"p",href:"/../../../../../../versions/latest/sdk/filesystem"},"FileSystem"),", and to do that you can import the following modules like so:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import { Asset, Constants, FileSystem } from 'react-native-unimodules';\n")))}p.isMDXComponent=!0},P9aO:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bare/installing-unimodules",function(){return t("OsKr")}])}},[["P9aO",1,0,2,3,6,9,24]]]);