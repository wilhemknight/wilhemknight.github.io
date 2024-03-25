_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[815],{"16zT":function(e,t,a){"use strict";a.r(t),a.d(t,"meta",(function(){return p})),a.d(t,"headings",(function(){return c})),a.d(t,"default",(function(){return m}));var n=a("HALo"),r=a("dhJC"),i=(a("q1tI"),a("7ljp")),l=a("HCau"),b=a("hykZ"),o=a("3WCi"),s=["components"],p={title:"FirebaseAnalytics",sourceCodeUrl:"https://github.com/expo/expo/tree/sdk-41/packages/expo-firebase-analytics"},c=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"Configuration"},{depth:2,type:"text",title:"Expo Go: Limitations & configuration"},{depth:2,type:"text",title:"Optional: Enable AdSupport in Bare Workflow"},{depth:2,type:"text",title:"API"},{depth:2,type:"text",title:"Methods"},{depth:3,type:"text",title:"logEvent"},{depth:4,type:"text",title:"Parameters"},{depth:4,type:"text",title:"Example"},{depth:3,type:"text",title:"setAnalyticsCollectionEnabled"},{depth:4,type:"text",title:"Parameters"},{depth:4,type:"text",title:"Example"},{depth:3,type:"text",title:"setCurrentScreen"},{depth:4,type:"text",title:"Parameters"},{depth:4,type:"text",title:"Example"},{depth:3,type:"text",title:"setSessionTimeoutDuration"},{depth:4,type:"text",title:"Parameters"},{depth:4,type:"text",title:"Example"},{depth:3,type:"text",title:"setUserId"},{depth:4,type:"text",title:"Parameters"},{depth:4,type:"text",title:"Example"},{depth:3,type:"text",title:"setUserProperty"},{depth:4,type:"text",title:"Parameters"},{depth:4,type:"text",title:"Example"},{depth:3,type:"text",title:"resetAnalyticsData"},{depth:4,type:"text",title:"Example"},{depth:3,type:"text",title:"setUserProperties"},{depth:4,type:"text",title:"Parameters"},{depth:4,type:"text",title:"Example"},{depth:3,type:"text",title:"setUnavailabilityLogging"},{depth:4,type:"text",title:"Parameters"},{depth:4,type:"text",title:"Example"},{depth:3,type:"text",title:"setClientId"},{depth:4,type:"text",title:"Parameters"},{depth:3,type:"text",title:"setDebugModeEnabled"},{depth:1,type:"text",title:"Examples"},{depth:2,type:"text",title:"How do people use my app?"},{depth:2,type:"text",title:"React Navigation"}],d={meta:p,headings:c};function m(e){var t=e.components,a=Object(r.a)(e,s);return Object(i.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"This is the only Firebase Analytics package for React Native that has universal platform support (iOS, Android, Web, and Electron)."))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"expo-firebase-analytics"))," enables the use of native Google Analytics for Firebase. Google Analytics for Firebase is a free app measurement solution that provides insight on app usage and user engagement.\nLearn more in the official ",Object(i.b)("a",{parentName:"p",href:"https://firebase.google.com/docs/analytics/"},"Firebase Docs"),"."),Object(i.b)(b.a,{android:!0,emulator:!0,ios:!0,simulator:!0,web:!0,mdxType:"PlatformsSection"}),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)(l.b,{packageName:"expo-firebase-analytics",mdxType:"InstallSection"}),Object(i.b)("p",null,"When using the web-platform, you'll also need to run ",Object(i.b)("inlineCode",{parentName:"p"},"expo install firebase"),", which install the Firebase JS SDK."),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"To use this package, the native Firebase configurations need to be added to your app.\n",Object(i.b)("a",{parentName:"p",href:"/../../../../../../guides/setup-native-firebase"},"Please follow this guide on how to set up native Firebase.")),Object(i.b)("h2",{id:"expo-go-limitations--configuration"},"Expo Go: Limitations & configuration"),Object(i.b)("p",null,"The use of Native Firebase Analytics requires that the google-services configuration is bundled and linked into your app. Since Expo Go loads projects on demand, it does not have the google-services configuration linked into its app-bundle."),Object(i.b)("p",null,"Instead, Expo Go relies on a JavaScript-based implementation of Firebase Analytics to log events. This means that certain native life-cycle events are not recorded in the standard client, but you can still use ",Object(i.b)("inlineCode",{parentName:"p"},"logEvent")," to record events."),Object(i.b)("p",null,"You may want to use Firebase Analytics in Expo Go to verify that you are logging events at the time you intend to and with the data that you want to attach without having to do a standalone app build. To set this up, ensure that the Firebase web configuration is set in ",Object(i.b)("strong",{parentName:"p"},"app.json")," and that ",Object(i.b)("inlineCode",{parentName:"p"},"measurementId")," exists in your firebase config. If ",Object(i.b)("inlineCode",{parentName:"p"},"measurementId")," doesn't exist, then you need to enable or update Google Analytics in your Firebase project."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"app.json")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "expo": {\n    "web": {\n      "config": {\n        "firebase": {\n          "apiKey": "AIzaXXXXXXXX-xxxxxxxxxxxxxxxxxxx",\n          ...\n          "measurementId": "G-XXXXXXXXX"\n        }\n      }\n    }\n  }\n}\n')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"This limitation only applies to the Expo Go app in the App and Play stores; standalone builds, custom clients & bare apps support the full native Firebase Analytics experience.")),Object(i.b)("h2",{id:"optional-enable-adsupport-in-bare-workflow"},"Optional: Enable AdSupport in Bare Workflow"),Object(i.b)("p",null,"To get extra features like ",Object(i.b)("inlineCode",{parentName:"p"},"audiences"),", ",Object(i.b)("inlineCode",{parentName:"p"},"campaign attribution"),", and some ",Object(i.b)("inlineCode",{parentName:"p"},"user properties"),", such as ",Object(i.b)("inlineCode",{parentName:"p"},"Age")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Interests"),", you will need to include AdSupport. This is currently only possible in the Bare Workflow and not enabled by default because Apple & Google are strict with allowing apps to use this library."),Object(i.b)("p",null,"To enable the AdSupport framework:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"In your Xcode project, select your project's target"),Object(i.b)("li",{parentName:"ul"},"Select the General tab for your target"),Object(i.b)("li",{parentName:"ul"},"Expand the Linked Frameworks and Libraries section"),Object(i.b)("li",{parentName:"ul"},"Click ",Object(i.b)("inlineCode",{parentName:"li"},"+")," to add a framework"),Object(i.b)("li",{parentName:"ul"},"Select ",Object(i.b)("inlineCode",{parentName:"li"},"AdSupport.framework"))),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://firebase.google.com/support/guides/analytics-adsupport"},"Learn more in the Firebase Docs")),Object(i.b)("h2",{id:"api"},"API"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import * as Analytics from 'expo-firebase-analytics';\n")),Object(i.b)("p",null,"To use web analytics, you'll also need to install the peer dependency ",Object(i.b)("strong",{parentName:"p"},"firebase")," with ",Object(i.b)("inlineCode",{parentName:"p"},"expo install firebase"),"."),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"logevent"},"logEvent"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"logEvent(name: string, properties?: { [key: string]: any }): Promise<void>\n")),Object(i.b)("p",null,"Logs an app event. The event can have up to 25 parameters. Events with the same name must have\nthe same parameters. Up to 500 event names are supported. Using predefined events and/or\nparameters is recommended for optimal reporting."),Object(i.b)("p",null,"The following event names are reserved and cannot be used:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ad_activeview")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ad_click")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ad_exposure")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ad_impression")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ad_query")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"adunit_exposure")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"app_clear_data")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"app_remove")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"app_update")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"error")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"first_open")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"in_app_purchase")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"notification_dismiss")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"notification_foreground")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"notification_open")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"notification_receive")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"os_update")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"screen_view")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"session_start")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"user_engagement"))),Object(i.b)("h4",{id:"parameters"},"Parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"name"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"The name of the event. Should contain 1 to 40 alphanumeric characters or underscores. The name must start with an alphabetic character. Some event names are reserved. The ",Object(i.b)("inlineCode",{parentName:"td"},"firebase_"),", ",Object(i.b)("inlineCode",{parentName:"td"},"google_"),", and ",Object(i.b)("inlineCode",{parentName:"td"},"ga_")," prefixes are reserved and should not be used. Note that event names are case-sensitive and that logging two events whose names differ only in case will result in two distinct events.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"properties"),Object(i.b)("td",{parentName:"tr",align:null},"Object"),Object(i.b)("td",{parentName:"tr",align:null},"The dictionary of event parameters. Passing ",Object(i.b)("inlineCode",{parentName:"td"},"undefined")," indicates that the event has no parameters. Parameter names can be up to 40 characters long and must start with an alphabetic character and contain only alphanumeric characters and underscores. Only ",Object(i.b)("inlineCode",{parentName:"td"},"String")," and ",Object(i.b)("inlineCode",{parentName:"td"},"Number")," (signed 64-bit integer and 64-bit floating-point number) parameter types are supported. ",Object(i.b)("inlineCode",{parentName:"td"},"String")," parameter values can be up to 100 characters long. The ",Object(i.b)("inlineCode",{parentName:"td"},"firebase_"),", ",Object(i.b)("inlineCode",{parentName:"td"},"google_"),", and ",Object(i.b)("inlineCode",{parentName:"td"},"ga_")," prefixes are reserved and should not be used for parameter names.")))),Object(i.b)("h4",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"await Analytics.logEvent('ButtonTapped', {\n  name: 'settings',\n  screen: 'profile',\n  purpose: 'Opens the internal settings',\n});\n")),Object(i.b)("h3",{id:"setanalyticscollectionenabled"},"setAnalyticsCollectionEnabled"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"setAnalyticsCollectionEnabled(isEnabled: boolean): Promise<void>\n")),Object(i.b)("p",null,"Sets whether analytics collection is enabled for this app on this device. This setting is persisted across app sessions. ",Object(i.b)("strong",{parentName:"p"},"By default it is enabled.")),Object(i.b)("h4",{id:"parameters-1"},"Parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"isEnabled"),Object(i.b)("td",{parentName:"tr",align:null},"boolean"),Object(i.b)("td",{parentName:"tr",align:null},"A flag that enables or disables Analytics collection.")))),Object(i.b)("h4",{id:"example-1"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"await Analytics.setAnalyticsCollectionEnabled(false);\n")),Object(i.b)("h3",{id:"setcurrentscreen"},"setCurrentScreen"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"setCurrentScreen(screenName: string, screenClassOverride?: string): Promise<void>\n")),Object(i.b)("p",null,"Sets the current screen name, which specifies the current visual context in your app. This helps\nidentify the areas in your app where users spend their time and how they interact with your app."),Object(i.b)("h4",{id:"parameters-2"},"Parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"screenName"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"The name of the current screen. Should contain 1 to 100 characters. Set to ",Object(i.b)("inlineCode",{parentName:"td"},"undefined")," to clear the current screen name.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"screenClassOverride"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"The name of the screen class. Should contain 1 to 100 characters. By default this is the class name of the current screen (UIViewController on iOS). Set to ",Object(i.b)("inlineCode",{parentName:"td"},"undefined")," to revert to the default class name.")))),Object(i.b)("h4",{id:"example-2"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"await Analytics.setCurrentScreen('GiveGitHubStarsScreen');\n")),Object(i.b)("h3",{id:"setsessiontimeoutduration"},"setSessionTimeoutDuration"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"setSessionTimeoutDuration(milliseconds: number): Promise<void>\n")),Object(i.b)("p",null,"Sets the interval of inactivity in seconds that terminates the current session. The default value is 1800000 milliseconds (30 minutes)."),Object(i.b)("h4",{id:"parameters-3"},"Parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:null},"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"milliseconds"),Object(i.b)("td",{parentName:"tr",align:null},"number"),Object(i.b)("td",{parentName:"tr",align:null},"The custom time of inactivity in milliseconds before the current session terminates."),Object(i.b)("td",{parentName:"tr",align:null},"1800000")))),Object(i.b)("h4",{id:"example-3"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"// 15 mins\nawait Analytics.setSessionTimeoutDuration(900000);\n")),Object(i.b)("h3",{id:"setuserid"},"setUserId"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"setUserId(userId: string | null): Promise<void>\n")),Object(i.b)("p",null,"Sets the user ID property. This feature must be used in accordance with ",Object(i.b)("a",{parentName:"p",href:"https://www.google.com/policies/privacy"},"Google's Privacy Policy")),Object(i.b)("h4",{id:"parameters-4"},"Parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"userId"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)(o.b,{mdxType:"InlineCode"},"string ","|"," null")),Object(i.b)("td",{parentName:"tr",align:null},"The user ID to ascribe to the user of this app on this device, which must be non-empty and no more than 256 characters long. Setting userID to null removes the user ID.")))),Object(i.b)("h4",{id:"example-4"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"await Analytics.setUserId('my_user_uid');\n")),Object(i.b)("h3",{id:"setuserproperty"},"setUserProperty"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"setUserProperty(name: string, value: string | null): Promise<void>\n")),Object(i.b)("p",null,"Sets a user property to a given value. Up to 25 user property names are supported. Once set,\nuser property values persist throughout the app life-cycle and across sessions."),Object(i.b)("p",null,"The following user property names are reserved and cannot be used:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"first_open_time")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"last_deep_link_referrer")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"user_id"))),Object(i.b)("h4",{id:"parameters-5"},"Parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"name"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",{parentName:"tr",align:null},"The name of the user property to set. Should contain 1 to 24 alphanumeric characters or underscores and must start with an alphabetic character. The ",Object(i.b)("inlineCode",{parentName:"td"},"firebase_"),", ",Object(i.b)("inlineCode",{parentName:"td"},"google_"),", and ",Object(i.b)("inlineCode",{parentName:"td"},"ga_")," prefixes are reserved and should not be used for user property names.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"value"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)(o.b,{mdxType:"InlineCode"},"string ","|"," null")),Object(i.b)("td",{parentName:"tr",align:null},"The value of the user property. Values can be up to 36 characters long. Setting the value to null removes the user property.")))),Object(i.b)("h4",{id:"example-5"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"await Analytics.setUserProperty('favorite_batmobile', '1989 Burton-mobile');\n")),Object(i.b)("h3",{id:"resetanalyticsdata"},"resetAnalyticsData"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"resetAnalyticsData(): Promise<void>\n")),Object(i.b)("p",null,"Clears all analytics data for this instance from the device and resets the app instance ID."),Object(i.b)("h4",{id:"example-6"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"await Analytics.resetAnalyticsData();\n")),Object(i.b)("h3",{id:"setuserproperties"},"setUserProperties"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"setUserProperties(properties: { [key: string]: string }): Promise<void>\n")),Object(i.b)("p",null,"Sets multiple user properties to the supplied values."),Object(i.b)("h4",{id:"parameters-6"},"Parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"properties"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"Object")),Object(i.b)("td",{parentName:"tr",align:null},"key/value set of user properties")))),Object(i.b)("h4",{id:"example-7"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"await Analytics.setUserProperties({\n  loves_expo: 'a lot',\n});\n")),Object(i.b)("h3",{id:"setunavailabilitylogging"},"setUnavailabilityLogging"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"setUnavailabilityLogging(isEnabled: boolean): void\n")),Object(i.b)("p",null,"Enables or disables the warning and log messages when using Firebase Analytics on the Expo Go app."),Object(i.b)("p",null,"Firebase Analytics is not available on the Expo Go app and therefore logs the requests to the console\nfor development purposes. To test Firebase Analytics, create a stand-alone build or custom client.\nThis function can be called to disable the warning and log messages when using Firebase Analytics\non Expo Go."),Object(i.b)("h4",{id:"parameters-7"},"Parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"isEnabled"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"boolean")),Object(i.b)("td",{parentName:"tr",align:null},"Enable or disable logging")))),Object(i.b)("h4",{id:"example-8"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"// Disable the warning & log messages on Expo Go\nAnalytics.setUnavailabilityLogging(false);\n")),Object(i.b)("h3",{id:"setclientid"},"setClientId"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},"setClientId(clientId: string): void\n")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"(Expo Go only)")," Sets the clientId to the given value. For best results, set this value before calling any other functions on this module."),Object(i.b)("p",null,"By default, the clientId is set to ",Object(i.b)("inlineCode",{parentName:"p"},"Constants.installationId")," in Expo Go, which is deprecated and will be removed in SDK 44. At that time, you'll need to use this method to set your own ",Object(i.b)("inlineCode",{parentName:"p"},"clientId")," when using Expo Go."),Object(i.b)("h4",{id:"parameters-8"},"Parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"clientId"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",{parentName:"tr",align:null},"UUIDv4 string value to set for the current session in Expo Go")))),Object(i.b)("h3",{id:"setdebugmodeenabled"},"setDebugModeEnabled"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},"setDebugModeEnabled(isEnabled: boolean): Promise<void>\n")),Object(i.b)("p",null,"Enables debug mode ",Object(i.b)("em",{parentName:"p"},"(Expo Go only)")," so events can be tracked using the ",Object(i.b)("a",{parentName:"p",href:"https://firebase.google.com/docs/analytics/debugview#reporting"},"DebugView in the Analytics dashboard"),"."),Object(i.b)("p",null,"This option is ",Object(i.b)("strong",{parentName:"p"},"only available in Expo Go"),". When using a standalone build, the bare workflow, or web, use the ",Object(i.b)("a",{parentName:"p",href:"https://firebase.google.com/docs/analytics/debugview"},"natively available options"),"."),Object(i.b)("h1",{id:"examples"},"Examples"),Object(i.b)("h2",{id:"how-do-people-use-my-app"},"How do people use my app?"),Object(i.b)("p",null,"You can gain deeper insight into what works and what doesn't by using the ",Object(i.b)("inlineCode",{parentName:"p"},"logEvent")," property. Also it's just a lot of fun to see that people actually use the features you work hard on! \ud83d\ude0d"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"/*\n * Say we are in a tinder clone, and a user presses the card to view more\n * information on a user. We should track this event so we can see if people\n * are even using it.\n *\n * If lots of users are opening the card then swiping through photos, just\n * to dismiss again, then we should consider making it possible to look\n * through photos without having to enter the profile.\n */\nonPressProfileButton = uid => {\n  Analytics.logEvent('ExpandProfile', {\n    /*\n     * We want to know if the user came from from the swipe card as\n     * opposed to from chat or a deep link.\n     */\n    sender: 'card',\n    /*\n     * This may be too specific and not very useful, but maybe down the line * we could investigate why a certain user is more popular than others.\n     */\n    user: uid,\n    /*\n     * We can use this information later to compare against other events.\n     */\n    screen: 'profile',\n    purpose: 'Viewing more info on a user',\n  });\n};\n")),Object(i.b)("h2",{id:"react-navigation"},"React Navigation"),Object(i.b)("p",null,"You can track the screens your users are interacting with by integrating the best navigation library: ",Object(i.b)("inlineCode",{parentName:"p"},"react-navigation")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://reactnavigation.org/docs/en/screen-tracking.html"},"Read more about how this works")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\n// Import Navigation\nimport { createBottomTabNavigator } from 'react-navigation';\n// Import Firebase\nimport * as Analytics from 'expo-firebase-analytics';\n// Import some screens\nimport HomeScreen from '../screens/HomeScreen';\nimport ProfileScreen from '../screens/ProfileScreen';\n// Create a generic Navigator\nconst AppNavigator = createBottomTabNavigator({\n  // The name `Profile` or `Home` are what will appear in Firebase Analytics.\n  Profile: ProfileScreen,\n  Home: HomeScreen,\n});\n// Get the current screen from the navigation state\nfunction getActiveRouteName(navigationState) {\n  if (!navigationState) return null;\n  const route = navigationState.routes[navigationState.index];\n  // Parse the nested navigators\n  if (route.routes) return getActiveRouteName(route);\n  return route.routeName;\n}\n\nexport default () => (\n  <AppNavigator\n    onNavigationStateChange={(prevState, currentState) => {\n      const currentScreen = getActiveRouteName(currentState);\n      const prevScreen = getActiveRouteName(prevState);\n      if (prevScreen !== currentScreen) {\n        // Update Firebase with the name of your screen\n        Analytics.setCurrentScreen(currentScreen);\n      }\n    }}\n  />\n);\n")))}m.isMDXComponent=!0},r1OJ:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v41.0.0/sdk/firebase-analytics",function(){return a("16zT")}])}},[["r1OJ",1,0,2,3,4,5,6,7]]]);