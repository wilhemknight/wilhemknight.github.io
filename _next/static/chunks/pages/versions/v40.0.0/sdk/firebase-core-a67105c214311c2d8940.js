_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[657],{"9FfR":function(e,t,a){"use strict";a.r(t),a.d(t,"meta",(function(){return l})),a.d(t,"headings",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a("HALo"),i=a("dhJC"),o=(a("q1tI"),a("7ljp")),r=a("HCau"),b=a("hykZ"),p=["components"],l={title:"FirebaseCore",sourceCodeUrl:"https://github.com/expo/expo/tree/sdk-40/packages/expo-firebase-core"},s=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"Configuration"},{depth:2,type:"text",title:"Native Firebase packages"},{depth:2,type:"text",title:"API"},{depth:2,type:"text",title:"Constants"},{depth:3,type:"inlineCode",title:"FirebaseCore.DEFAULT_APP_NAME"},{depth:3,type:"inlineCode",title:"FirebaseCore.DEFAULT_APP_OPTIONS"},{depth:4,type:"text",title:"Example"},{depth:3,type:"inlineCode",title:"FirebaseCore.DEFAULT_WEB_APP_OPTIONS"}],c={meta:l,headings:s};function d(e){var t=e.components,a=Object(i.a)(e,p);return Object(o.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"expo-firebase-core"))," provides access to the Firebase configuration and performs initialisation\nof the native Firebase App."),Object(o.b)(b.a,{android:!0,emulator:!0,ios:!0,simulator:!0,web:!0,mdxType:"PlatformsSection"}),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)(r.b,{packageName:"expo-firebase-core",mdxType:"InstallSection"}),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"To use this package, Firebase needs to be configured for your app.\n",Object(o.b)("a",{parentName:"p",href:"/guides/setup-native-firebase/"},"Please follow this guide on how to configure native Firebase.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"No explicit calls to ",Object(o.b)("inlineCode",{parentName:"p"},"expo-firebase-core")," are required to initialize Firebase. This library will auto-initialize the Firebase app when a valid configuration exists.")),Object(o.b)("h2",{id:"native-firebase-packages"},"Native Firebase packages"),Object(o.b)("p",null,"At the moment, only Firebase Analytics is supported natively. We are working on bringing more native Firebase packages to Expo, stay tuned :)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/versions/v40.0.0/sdk/firebase-analytics/"},"expo-firebase-analytics"))),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import * as FirebaseCore from 'expo-firebase-core';\n")),Object(o.b)("h2",{id:"constants"},"Constants"),Object(o.b)("h3",{id:"firebasecoredefault_app_name"},Object(o.b)("inlineCode",{parentName:"h3"},"FirebaseCore.DEFAULT_APP_NAME")),Object(o.b)("p",null,"Name of the default Firebase app (e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"[DEFAULT]"),")."),Object(o.b)("p",null,"In Expo Go, a Firebase App is created for each project that is loaded, and a unique name for each project is returned."),Object(o.b)("h3",{id:"firebasecoredefault_app_options"},Object(o.b)("inlineCode",{parentName:"h3"},"FirebaseCore.DEFAULT_APP_OPTIONS")),Object(o.b)("p",null,"Firebase options with which the default app was initialized. If no Google services configuration was provided, ",Object(o.b)("inlineCode",{parentName:"p"},"undefined")," is returned."),Object(o.b)("p",null,"Depending on the platform, the options are read from the following files and ",Object(o.b)("strong",{parentName:"p"},"app.json")," keys."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Platform"),Object(o.b)("th",{parentName:"tr",align:null},"File"),Object(o.b)("th",{parentName:"tr",align:null},"App.json key"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"iOS"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"GoogleService-Info.plist")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"ios.googleServicesFile"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Android"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"google-services.json")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"android.googleServicesFile"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Web"),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"web.config.firebase"))))),Object(o.b)("h4",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'console.log(FirebaseCore.DEFAULT_APP_OPTIONS);\n// {\n//   appId: "1:1082251606918:ios:a2800bc715889446e24a07",\n//   apiKey: "AIzaXXXXXXXX-xxxxxxxxxxxxxxxxxxx",\n//   clientId: "000000000000-0000000000000.apps.googleusercontent.com",\n//   trackingId: 12345567890,\n//   databaseURL: "https://myexpoapp777.firebaseio.com",\n//   storageBucket:  "myexpoapp777.appspot.com",\n//   projectId: "myexpoapp777",\n//   messagingSenderId:  123454321\n// }\n')),Object(o.b)("h3",{id:"firebasecoredefault_web_app_options"},Object(o.b)("inlineCode",{parentName:"h3"},"FirebaseCore.DEFAULT_WEB_APP_OPTIONS")),Object(o.b)("p",null,"The default Firebase options as defined in ",Object(o.b)("inlineCode",{parentName:"p"},"web.config.firebase")," in ",Object(o.b)("strong",{parentName:"p"},"app.json"),"."),Object(o.b)("p",null,"This constant is useful when you want to use the Firebase JS SDK on native."),Object(o.b)("h1",{id:""}))}d.isMDXComponent=!0},SUgZ:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v40.0.0/sdk/firebase-core",function(){return a("9FfR")}])}},[["SUgZ",1,0,2,3,4,5,6]]]);