_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[619],{"7EnC":function(e,t,a){"use strict";a.r(t),a.d(t,"meta",(function(){return b})),a.d(t,"headings",(function(){return o})),a.d(t,"default",(function(){return d}));var n=a("HALo"),r=a("dhJC"),i=(a("q1tI"),a("7ljp")),p=a("HCau"),l=a("hykZ"),s=["components"],b={title:"Amplitude",sourceCodeUrl:"https://github.com/expo/expo/tree/sdk-40/packages/expo-analytics-amplitude"},o=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"API"},{depth:2,type:"text",title:"Methods"},{depth:3,type:"inlineCode",title:"Amplitude.initializeAsync(apiKey)"},{depth:4,type:"text",title:"Arguments"},{depth:3,type:"inlineCode",title:"Amplitude.setUserIdAsync(userId)"},{depth:4,type:"text",title:"Arguments"},{depth:3,type:"inlineCode",title:"Amplitude.setUserPropertiesAsync(userProperties)"},{depth:4,type:"text",title:"Arguments"},{depth:3,type:"inlineCode",title:"Amplitude.clearUserPropertiesAsync()"},{depth:3,type:"inlineCode",title:"Amplitude.logEventAsync(eventName)"},{depth:4,type:"text",title:"Arguments"},{depth:3,type:"inlineCode",title:"Amplitude.logEventWithPropertiesAsync(eventName, properties)"},{depth:4,type:"text",title:"Arguments"},{depth:3,type:"inlineCode",title:"Amplitude.setGroupAsync(groupType, groupNames)"},{depth:4,type:"text",title:"Arguments"},{depth:3,type:"inlineCode",title:"Amplitude.setTrackingOptionsAsync(trackingOptions)"},{depth:4,type:"text",title:"Arguments"}],c={meta:b,headings:o};function d(e){var t=e.components,a=Object(r.a)(e,s);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"expo-analytics-amplitude"))," provides access to ",Object(i.b)("a",{parentName:"p",href:"https://amplitude.com/"},"Amplitude")," mobile analytics which allows you track and log various events and data. This module wraps Amplitude's ",Object(i.b)("a",{parentName:"p",href:"https://github.com/amplitude/Amplitude-iOS"},"iOS")," and ",Object(i.b)("a",{parentName:"p",href:"https://github.com/amplitude/Amplitude-Android"},"Android")," SDKs. For a great example of usage, see the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/expo/expo/tree/main/home/api/Analytics.ts"},"Expo app source code"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Please note:")," Session tracking may not work correctly when running Experiences in the main Expo app. It will work correctly if you create a standalone app. For example, the version logged when running experiences in the Expo app will be the ",Object(i.b)("a",{parentName:"p",href:"/versions/v40.0.0/sdk/constants/#constantsexpoversion"},"Expo app version"),". Whereas in standalone apps, the version set in ",Object(i.b)("strong",{parentName:"p"},"app.json")," is used. For more information see ",Object(i.b)("a",{parentName:"p",href:"https://github.com/expo/expo/issues/4720"},"this issue on GitHub"),"."),Object(i.b)(l.a,{android:!0,emulator:!0,ios:!0,simulator:!0,mdxType:"PlatformsSection"}),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)(p.b,{packageName:"expo-analytics-amplitude",mdxType:"InstallSection"}),Object(i.b)("h2",{id:"api"},"API"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import * as Amplitude from 'expo-analytics-amplitude';\n")),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"amplitudeinitializeasyncapikey"},Object(i.b)("inlineCode",{parentName:"h3"},"Amplitude.initializeAsync(apiKey)")),Object(i.b)("p",null,"Initializes Amplitude with your Amplitude API key. If you're having trouble finding your API key, see ",Object(i.b)("a",{parentName:"p",href:"https://amplitude.zendesk.com/hc/en-us/articles/207108137-Introduction-Getting-Started#getting-started"},"step 4 of these instructions"),"."),Object(i.b)("h4",{id:"arguments"},"Arguments"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"apiKey (",Object(i.b)("em",{parentName:"strong"},"string"),")")," -- Your Amplitude application's API key.")),Object(i.b)("h3",{id:"amplitudesetuseridasyncuserid"},Object(i.b)("inlineCode",{parentName:"h3"},"Amplitude.setUserIdAsync(userId)")),Object(i.b)("p",null,"Assign a user ID to the current user. If you don't have a system for user IDs you don't need to call this. See ",Object(i.b)("a",{parentName:"p",href:"https://amplitude.zendesk.com/hc/en-us/articles/206404628-Step-2-Assign-User-IDs-and-Identify-your-Users"},"this page")," for details."),Object(i.b)("h4",{id:"arguments-1"},"Arguments"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"userId (",Object(i.b)("em",{parentName:"strong"},"string"),")")," -- User ID for the current user.")),Object(i.b)("h3",{id:"amplitudesetuserpropertiesasyncuserproperties"},Object(i.b)("inlineCode",{parentName:"h3"},"Amplitude.setUserPropertiesAsync(userProperties)")),Object(i.b)("p",null,"Set properties for the current user. See ",Object(i.b)("a",{parentName:"p",href:"https://amplitude.zendesk.com/hc/en-us/articles/207108327-Step-4-Set-User-Properties-and-Event-Properties"},"here for details"),"."),Object(i.b)("h4",{id:"arguments-2"},"Arguments"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"userProperties (",Object(i.b)("em",{parentName:"strong"},"object"),")")," -- A map of custom properties.")),Object(i.b)("h3",{id:"amplitudeclearuserpropertiesasync"},Object(i.b)("inlineCode",{parentName:"h3"},"Amplitude.clearUserPropertiesAsync()")),Object(i.b)("p",null,"Clear properties set by ",Object(i.b)("a",{parentName:"p",href:"/versions/v40.0.0/sdk/amplitude/#expoamplitudesetuserproperties",title:"Amplitude.setUserProperties"},Object(i.b)("inlineCode",{parentName:"a"},"Amplitude.setUserProperties()")),"."),Object(i.b)("h3",{id:"amplitudelogeventasynceventname"},Object(i.b)("inlineCode",{parentName:"h3"},"Amplitude.logEventAsync(eventName)")),Object(i.b)("p",null,"Log an event to Amplitude. For more information about what kind of events to track, ",Object(i.b)("a",{parentName:"p",href:"https://amplitude.zendesk.com/hc/en-us/articles/206404698-Step-3-Track-Events-and-Understand-the-Actions-Users-Take"},"see here"),"."),Object(i.b)("h4",{id:"arguments-3"},"Arguments"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"eventName (",Object(i.b)("em",{parentName:"strong"},"string"),")")," -- The event name.")),Object(i.b)("h3",{id:"amplitudelogeventwithpropertiesasynceventname-properties"},Object(i.b)("inlineCode",{parentName:"h3"},"Amplitude.logEventWithPropertiesAsync(eventName, properties)")),Object(i.b)("p",null,"Log an event to Amplitude with custom properties. For more information about what kind of events to track, ",Object(i.b)("a",{parentName:"p",href:"https://amplitude.zendesk.com/hc/en-us/articles/206404698-Step-3-Track-Events-and-Understand-the-Actions-Users-Take"},"see here"),"."),Object(i.b)("h4",{id:"arguments-4"},"Arguments"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"eventName (",Object(i.b)("em",{parentName:"strong"},"string"),")")," -- The event name."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"properties (",Object(i.b)("em",{parentName:"strong"},"object"),")")," -- A map of custom properties.")),Object(i.b)("h3",{id:"amplitudesetgroupasyncgrouptype-groupnames"},Object(i.b)("inlineCode",{parentName:"h3"},"Amplitude.setGroupAsync(groupType, groupNames)")),Object(i.b)("p",null,"Add the current user to a group. For more information, see here for ",Object(i.b)("a",{parentName:"p",href:"https://github.com/amplitude/Amplitude-iOS#setting-groups"},"iOS")," and see here for ",Object(i.b)("a",{parentName:"p",href:"https://github.com/amplitude/Amplitude-Android#setting-groups"},"Android"),"."),Object(i.b)("h4",{id:"arguments-5"},"Arguments"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"groupType (",Object(i.b)("em",{parentName:"strong"},"string"),")"),' -- The group name, e.g. "sports".'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"groupNames (",Object(i.b)("em",{parentName:"strong"},"object"),")")," -- An array of group names, e.g. ","[",'"tennis", "soccer"]. Note: the iOS and Android Amplitude SDKs allow you to use a string or an array of strings. We only support an array of strings. Just use an array with one element if you only want one group name.')),Object(i.b)("h3",{id:"amplitudesettrackingoptionsasynctrackingoptions"},Object(i.b)("inlineCode",{parentName:"h3"},"Amplitude.setTrackingOptionsAsync(trackingOptions)")),Object(i.b)("p",null,"By default the Amplitude SDK will track several user properties such as carrier and city. You can use this method to customize and disable individual fields."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note:")," These configurations will prevent default properties from being tracked on newly created projects, where data has not yet been sent. Please contact ",Object(i.b)("a",{parentName:"p",href:"mailto:platform@amplitude.com"},"platform@amplitude.com")," if you would like default properties blocked (moving forward) on projects with existing data.")),Object(i.b)("h4",{id:"arguments-6"},"Arguments"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"trackingOptions (object)")," -- Options object for what should not be tracked. The table below describes what properties the object may contain. All properties are expected to be booleans. For example, passing ",Object(i.b)("inlineCode",{parentName:"li"},"disableCarrier: true")," disables tracking the device's carrier.")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Property"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"disableCarrier")),Object(i.b)("td",{parentName:"tr",align:null},"Disable tracking of the device's carrier.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"disableCity")),Object(i.b)("td",{parentName:"tr",align:null},"Disable tracking of the user's city.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"disableCountry")),Object(i.b)("td",{parentName:"tr",align:null},"Disable tracking of the user's country.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"disableDeviceManufacturer")),Object(i.b)("td",{parentName:"tr",align:null},"Disable tracking of the device manufacturer.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"disableDeviceModel")),Object(i.b)("td",{parentName:"tr",align:null},"Disable tracking of the device model.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"disableDMA")),Object(i.b)("td",{parentName:"tr",align:null},"Disable tracking of the user's DMA.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"disableIDFV")),Object(i.b)("td",{parentName:"tr",align:null},"Disable tracking of the user's IDFV.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"disableIPAddress")),Object(i.b)("td",{parentName:"tr",align:null},"Disable tracking of the user's IP address.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"disableLanguage")),Object(i.b)("td",{parentName:"tr",align:null},"Disable tracking of the device's language.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"disableLatLng")),Object(i.b)("td",{parentName:"tr",align:null},"Disable tracking of the user's current latitude and longitude coordinates.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"disableOSName")),Object(i.b)("td",{parentName:"tr",align:null},"Disable tracking of the device's OS name.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"disableOSVersion")),Object(i.b)("td",{parentName:"tr",align:null},"Disable tracking of the device's OS version.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"disablePlatform")),Object(i.b)("td",{parentName:"tr",align:null},"Disable tracking of the device's platform.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"disableRegion")),Object(i.b)("td",{parentName:"tr",align:null},"Disable tracking of the user's region.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"disableVersionName")),Object(i.b)("td",{parentName:"tr",align:null},"Disable tracking of the app version the user is on for your app.")))))}d.isMDXComponent=!0},h1ll:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v40.0.0/sdk/amplitude",function(){return a("7EnC")}])}},[["h1ll",1,0,2,3,4,5,6]]]);