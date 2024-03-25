_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[296],{XH43:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return p})),n.d(t,"headings",(function(){return c})),n.d(t,"default",(function(){return j}));var a=n("HALo"),i=n("dhJC"),r=(n("q1tI"),n("7ljp")),b=n("vFJ3"),o=n("utVh"),l=(n("3Ukx"),n("HCau")),d=n("hykZ"),s=["components"],p={title:"Admob",sourceCodeUrl:"https://github.com/expo/expo/tree/sdk-44/packages/expo-ads-admob"},c=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"Configuration in app.json / app.config.js"},{depth:2,type:"text",title:"Usage"},{depth:3,type:"text",title:"Testing"},{depth:2,type:"text",title:"Methods"},{depth:3,type:"inlineCode",title:"isAvailableAsync()"},{depth:4,type:"text",title:"Returns"},{depth:3,type:"inlineCode",title:"requestPermissionsAsync()"},{depth:4,type:"text",title:"Returns"},{depth:3,type:"inlineCode",title:"getPermissionsAsync()"},{depth:4,type:"text",title:"Returns"},{depth:3,type:"text",title:"setTestDeviceIDAsync(testDeviceID)"},{depth:4,type:"text",title:"Arguments"},{depth:3,type:"text",title:"AdMobBanner"},{depth:4,type:"text",title:"servePersonalizedAds property"},{depth:4,type:"text",title:"bannerSize property"},{depth:4,type:"text",title:"Events as function props"},{depth:4,type:"text",title:"Test ID"},{depth:3,type:"text",title:"AdMobInterstitials"},{depth:4,type:"text",title:"Methods"},{depth:4,type:"text",title:"Events"},{depth:4,type:"text",title:"Test ID"},{depth:3,type:"text",title:"AdMobRewarded"},{depth:4,type:"text",title:"Methods"},{depth:4,type:"text",title:"Events"},{depth:4,type:"text",title:"Test ID"},{depth:2,type:"text",title:"Permissions"},{depth:3,type:"text",title:"Android"},{depth:3,type:"text",title:"iOS"}],m={meta:p,headings:c};function j(e){var t=e.components,n=Object(i.a)(e,s);return Object(r.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Expo includes support for the ",Object(r.b)("a",{parentName:"p",href:"https://www.google.com/admob/"},"Google AdMob SDK")," for mobile advertising, including components for banner ads and imperative APIs for interstitial and rewarded video ads. ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"expo-ads-admob"))," is largely based of the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/sbugert/react-native-admob"},"react-native-admob")," module, as the documentation and questions surrounding that module may prove helpful. A simple example implementing AdMob SDK can be found ",Object(r.b)("a",{parentName:"p",href:"https://github.com/deadcoder0904/expo-google-admob"},"here"),"."),Object(r.b)(d.a,{android:!0,emulator:!0,ios:!0,simulator:!0,mdxType:"PlatformsSection"}),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)(l.b,{packageName:"expo-ads-admob",mdxType:"InstallSection"}),Object(r.b)("h2",{id:"configuration-in-appjson--appconfigjs"},"Configuration in app.json / app.config.js"),Object(r.b)("p",null,"You can configure ",Object(r.b)("inlineCode",{parentName:"p"},"expo-ads-admob")," using its built-in ",Object(r.b)("a",{parentName:"p",href:"/guides/config-plugins/"},"config plugin")," if you use config plugins in your project (",Object(r.b)("a",{parentName:"p",href:"/build/introduction/"},"EAS Build")," or ",Object(r.b)("inlineCode",{parentName:"p"},"expo run:[android|ios]"),"). The plugin allows you to configure various properties that cannot be set at runtime and require building a new app binary to take effect."),Object(r.b)("p",null,"For the module to attribute interactions with ads to your AdMob app properly you will need to add a ",Object(r.b)("inlineCode",{parentName:"p"},"googleMobileAdsAppId")," property to ",Object(r.b)("strong",{parentName:"p"},"app.json")," under ",Object(r.b)("inlineCode",{parentName:"p"},"[platform].config"),". More info on where to find the app ID can be found in ",Object(r.b)("a",{parentName:"p",href:"https://support.google.com/admob/answer/6232340"},"this Google Support answer"),". A sample valid ",Object(r.b)("strong",{parentName:"p"},"app.json")," would look like:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "expo": {\n    "name": "Ads Showcase",\n    // ...\n    "android": {\n      // ...\n      "config": {\n        // ...\n        "googleMobileAdsAppId": "ca-app-pub-3940256099942544~3347511713" // sample id, replace with your own\n      }\n    },\n    "ios": {\n      // ...\n      "config": {\n        // ...\n        "googleMobileAdsAppId": "ca-app-pub-3940256099942544~1458002511" // sample id, replace with your own\n      }\n    }\n  }\n}\n')),Object(r.b)(b.a,{mdxType:"ConfigClassic"},Object(r.b)("p",null,"You can configure ",Object(r.b)("a",{parentName:"p",href:"/versions/latest/sdk/admob/#permissions"},"the permissions for this library")," using ",Object(r.b)("a",{parentName:"p",href:"/versions/latest/config/app/#infoplist"},Object(r.b)("inlineCode",{parentName:"a"},"ios.infoPlist"))," and ",Object(r.b)("a",{parentName:"p",href:"/versions/latest/config/app/#permissions"},Object(r.b)("inlineCode",{parentName:"a"},"android.permissions")),".")),Object(r.b)(b.d,{mdxType:"ConfigReactNative"},Object(r.b)("p",null,"Learn how to configure the native projects in the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/expo/expo/tree/main/packages/expo-ads-admob#installation-in-bare-react-native-projects"},"installation instructions in the ",Object(r.b)("inlineCode",{parentName:"a"},"expo-ads-admob")," repository"),".")),Object(r.b)(b.b,{mdxType:"ConfigPluginExample"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "expo": {\n    "plugins": [\n      [\n        "expo-ads-admob",\n        {\n          "userTrackingPermission": "This identifier will be used to deliver personalized ads to you."\n        }\n      ]\n    ]\n  }\n}\n'))),Object(r.b)(b.c,{properties:[{name:"userTrackingPermission",platform:"ios",description:"Sets the iOS `NSUserTrackingUsageDescription` permission message in Info.plist.",default:'"This identifier will be used to deliver personalized ads to you."'}],mdxType:"ConfigPluginProperties"}),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},"import {\n  AdMobBanner,\n  AdMobInterstitial,\n  PublisherBanner,\n  AdMobRewarded,\n  setTestDeviceIDAsync,\n} from 'expo-ads-admob';\n\n// Set global test device ID\nawait setTestDeviceIDAsync('EMULATOR');\n\n// Display a banner\n<AdMobBanner\n  bannerSize=\"fullBanner\"\n  adUnitID=\"ca-app-pub-3940256099942544/6300978111\" // Test ID, Replace with your-admob-unit-id\n  servePersonalizedAds // true or false\n  onDidFailToReceiveAdWithError={this.bannerError} />\n\n// Display a DFP Publisher banner\n<PublisherBanner\n  bannerSize=\"fullBanner\"\n  adUnitID=\"ca-app-pub-3940256099942544/6300978111\" // Test ID, Replace with your-admob-unit-id\n  onDidFailToReceiveAdWithError={this.bannerError}\n  onAdMobDispatchAppEvent={this.adMobEvent} />\n\n// Display an interstitial\nawait AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712'); // Test ID, Replace with your-admob-unit-id\nawait AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});\nawait AdMobInterstitial.showAdAsync();\n\n// Display a rewarded ad\nawait AdMobRewarded.setAdUnitID('ca-app-pub-3940256099942544/5224354917'); // Test ID, Replace with your-admob-unit-id\nawait AdMobRewarded.requestAdAsync();\nawait AdMobRewarded.showAdAsync();\n")),Object(r.b)("h3",{id:"testing"},"Testing"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Here is the full list of Test IDs",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://developers.google.com/admob/ios/test-ads"},"iOS Test IDs")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://developers.google.com/admob/android/test-ads"},"Android Test IDs")))),Object(r.b)("li",{parentName:"ul"},"Ensure you ",Object(r.b)("strong",{parentName:"li"},"never")," load a real production ad in an Android Emulator or iOS Simulator. Failure to do this can result in a ban from the AdMob program.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},"import Constants from 'expo-constants';\n\nconst testID = 'google-test-id';\nconst productionID = 'my-id';\n// Is a real device and running in production.\nconst adUnitID = Constants.isDevice && !__DEV__ ? productionID : testID;\n")),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"isavailableasync"},Object(r.b)("inlineCode",{parentName:"h3"},"isAvailableAsync()")),Object(r.b)("p",null,"Returns whether the AdMob API is enabled on the current device. This does not check the native configuration."),Object(r.b)("h4",{id:"returns"},"Returns"),Object(r.b)("p",null,"Async ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),", indicating whether the AdMob API is available on the current device. Currently this resolves ",Object(r.b)("inlineCode",{parentName:"p"},"true")," on iOS and Android only."),Object(r.b)("h3",{id:"requestpermissionsasync"},Object(r.b)("inlineCode",{parentName:"h3"},"requestPermissionsAsync()")),Object(r.b)("p",null,"Asks for permissions to use data for tracking the user or the device."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"iOS: it requires the ",Object(r.b)("inlineCode",{parentName:"p"},"NSUserTrackingUsageDescription")," message added to the ",Object(r.b)("strong",{parentName:"p"},"Info.plist"),".")),Object(r.b)("h4",{id:"returns-1"},"Returns"),Object(r.b)("p",null,"A promise that resolves to an object of type ",Object(r.b)("a",{parentName:"p",href:"/versions/latest/sdk/permissions/#permissionresponse"},"PermissionResponse"),"."),Object(r.b)("h3",{id:"getpermissionsasync"},Object(r.b)("inlineCode",{parentName:"h3"},"getPermissionsAsync()")),Object(r.b)("p",null,"Checks application's permissions for using data for tracking the user or the device."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"iOS: it requires the ",Object(r.b)("inlineCode",{parentName:"p"},"NSUserTrackingUsageDescription")," message added to the ",Object(r.b)("strong",{parentName:"p"},"Info.plist"),".")),Object(r.b)("h4",{id:"returns-2"},"Returns"),Object(r.b)("p",null,"A promise that resolves to an object of type ",Object(r.b)("a",{parentName:"p",href:"/versions/latest/sdk/permissions/#permissionresponse"},"PermissionResponse"),"."),Object(r.b)("h3",{id:"settestdeviceidasynctestdeviceid"},"setTestDeviceIDAsync(testDeviceID)"),Object(r.b)("p",null,"Sets the test device ID. For simulators/emulators you can use ",Object(r.b)("inlineCode",{parentName:"p"},"'EMULATOR'")," for the test device ID."),Object(r.b)("h4",{id:"arguments"},"Arguments"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"testDeviceID (",Object(r.b)("em",{parentName:"strong"},"string"),")")," -- Test device ID.")),Object(r.b)("h3",{id:"admobbanner"},"AdMobBanner"),Object(r.b)("h4",{id:"servepersonalizedads-property"},"servePersonalizedAds property"),Object(r.b)("p",null,"The default behavior of the Google Mobile Ads SDK is to serve personalized ads. If a user has consented to receive only non-personalized ads, you can configure the view to specify that only non-personalized ads should be requested. Adding ",Object(r.b)("inlineCode",{parentName:"p"},"servePersonalizedAds")," property causes non-personalized ads to be requested regardless of whether or not the user is in the EEA. The default is ",Object(r.b)("inlineCode",{parentName:"p"},"false")," \u2014 ads won't be personalized."),Object(r.b)("h4",{id:"bannersize-property"},"bannerSize property"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Corresponding to ",Object(r.b)("a",{parentName:"em",href:"https://developers.google.com/admob/ios/banner"},"iOS framework banner size constants"))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Prop value"),Object(r.b)("th",{parentName:"tr",align:null},"Description"),Object(r.b)("th",{parentName:"tr",align:null},"Size"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"banner")),Object(r.b)("td",{parentName:"tr",align:null},"Standard Banner for Phones and Tablets"),Object(r.b)("td",{parentName:"tr",align:null},"320x50")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"largeBanner")),Object(r.b)("td",{parentName:"tr",align:null},"Large Banner for Phones and Tablets"),Object(r.b)("td",{parentName:"tr",align:null},"320x100")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"mediumRectangle")),Object(r.b)("td",{parentName:"tr",align:null},"IAB Medium Rectangle for Phones and Tablets"),Object(r.b)("td",{parentName:"tr",align:null},"300x250")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"fullBanner")),Object(r.b)("td",{parentName:"tr",align:null},"IAB Full-Size Banner for Tablet"),Object(r.b)("td",{parentName:"tr",align:null},"468x60")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"leaderboard")),Object(r.b)("td",{parentName:"tr",align:null},"IAB Leaderboard for Tablets"),Object(r.b)("td",{parentName:"tr",align:null},"728x90")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"strong"},"smartBannerPortrait"))),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Smart Banner for Phones and Tablets (default)")),Object(r.b)("td",{parentName:"tr",align:null},"Screen width x 32")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"smartBannerLandscape")),Object(r.b)("td",{parentName:"tr",align:null},"Smart Banner for Phones and Tablets"),Object(r.b)("td",{parentName:"tr",align:null},"Screen width x 32")))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Note: There is no ",Object(r.b)("inlineCode",{parentName:"em"},"smartBannerPortrait")," and ",Object(r.b)("inlineCode",{parentName:"em"},"smartBannerLandscape")," on Android. Both prop values will map to ",Object(r.b)("inlineCode",{parentName:"em"},"smartBanner"))),Object(r.b)("h4",{id:"events-as-function-props"},"Events as function props"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Corresponding to ",Object(r.b)("a",{parentName:"em",href:"https://developers.google.com/admob/ios/banner"},"Ad lifecycle event callbacks"))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Prop"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"onAdViewDidReceiveAd()"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"onDidFailToReceiveAdWithError(errorDescription: string)"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"onAdViewWillPresentScreen()"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"onAdViewWillDismissScreen()"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"onAdViewDidDismissScreen()"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"onAdViewWillLeaveApplication()"))))),Object(r.b)("h4",{id:"test-id"},"Test ID"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},"const adUnitID = Platform.select({\n  // https://developers.google.com/admob/ios/test-ads\n  ios: 'ca-app-pub-3940256099942544/2934735716',\n  // https://developers.google.com/admob/android/test-ads\n  android: 'ca-app-pub-3940256099942544/6300978111',\n});\n")),Object(r.b)("h3",{id:"admobinterstitials"},"AdMobInterstitials"),Object(r.b)("h4",{id:"methods-1"},"Methods"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"setAdUnitID(adUnitID)")),Object(r.b)("td",{parentName:"tr",align:null},"sets the AdUnit ID for all future ad requests.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"requestAdAsync(options)")),Object(r.b)("td",{parentName:"tr",align:null},"requests an interstitial and resolves when ",Object(r.b)("inlineCode",{parentName:"td"},"interstitialDidLoad")," or ",Object(r.b)("inlineCode",{parentName:"td"},"interstitialDidFailToLoad")," event fires. An optional ",Object(r.b)("inlineCode",{parentName:"td"},"options")," object argument may specify ",Object(r.b)("inlineCode",{parentName:"td"},"servePersonalizedAds: true")," value \u2014 then ads will be personalized.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"showAdAsync()")),Object(r.b)("td",{parentName:"tr",align:null},"shows an interstitial if it is ready and resolves when ",Object(r.b)("inlineCode",{parentName:"td"},"interstitialDidOpen")," event fires")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"getIsReadyAsync()")),Object(r.b)("td",{parentName:"tr",align:null},"resolves with boolean whether interstitial is ready to be shown")))),Object(r.b)("h4",{id:"events"},"Events"),Object(r.b)("p",null,"Unfortunately, events are not consistent across iOS and Android. To have one unified API, new event names are introduced for pairs that are roughly equivalent."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"iOS"),Object(r.b)("th",{parentName:"tr",align:null},Object(r.b)("em",{parentName:"th"},"this library")),Object(r.b)("th",{parentName:"tr",align:null},"Android"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"interstitialDidReceiveAd")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"interstitialDidLoad")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"onAdLoaded"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"interstitial:didFailToReceiveAdWithError")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"interstitialDidFailToLoad")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"onAdFailedToLoad"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"interstitialWillPresentScreen")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"interstitialDidOpen")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"onAdOpened"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"interstitialDidFailToPresentScreen")),Object(r.b)("td",{parentName:"tr",align:null}),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"interstitialWillDismissScreen")),Object(r.b)("td",{parentName:"tr",align:null}),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"interstitialDidDismissScreen")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"interstitialDidClose")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"onAdClosed"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"interstitialWillLeaveApplication")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"interstitialWillLeaveApplication")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"onAdLeftApplication"))))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Note that ",Object(r.b)("inlineCode",{parentName:"em"},"interstitialWillLeaveApplication")," and ",Object(r.b)("inlineCode",{parentName:"em"},"onAdLeftApplication")," are not exactly the same but share one event in this library.")),Object(r.b)("h4",{id:"test-id-1"},"Test ID"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},"const adUnitID = Platform.select({\n  // https://developers.google.com/admob/ios/test-ads\n  ios: 'ca-app-pub-3940256099942544/4411468910',\n  // https://developers.google.com/admob/android/test-ads\n  android: 'ca-app-pub-3940256099942544/1033173712',\n});\n")),Object(r.b)("h3",{id:"admobrewarded"},"AdMobRewarded"),Object(r.b)("p",null,"Opens a rewarded AdMob ad."),Object(r.b)("h4",{id:"methods-2"},"Methods"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"setAdUnitID(adUnitID: string)")),Object(r.b)("td",{parentName:"tr",align:null},"sets the AdUnit ID for all future ad requests.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"requestAdAsync(options)")),Object(r.b)("td",{parentName:"tr",align:null},"(async) requests a rewarded ad. An optional ",Object(r.b)("inlineCode",{parentName:"td"},"options")," object argument may specify ",Object(r.b)("inlineCode",{parentName:"td"},"servePersonalizedAds: true")," value \u2014 then ad will be personalized.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"showAdAsync()")),Object(r.b)("td",{parentName:"tr",align:null},"(async) shows a rewarded if it is ready (async)")))),Object(r.b)("h4",{id:"events-1"},"Events"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Events are based on native ad lifecycle"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"rewardedVideoUserDidEarnReward"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"rewardedVideoDidLoad"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"rewardedVideoDidFailToLoad"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"rewardedVideoDidPresent"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"rewardedVideoDidFailToPresent"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"rewardedVideoDidDismiss"))))),Object(r.b)("h4",{id:"test-id-2"},"Test ID"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},"const adUnitID = Platform.select({\n  // https://developers.google.com/admob/ios/test-ads\n  ios: 'ca-app-pub-3940256099942544/1712485313',\n  // https://developers.google.com/admob/android/test-ads\n  android: 'ca-app-pub-3940256099942544/5224354917',\n});\n")),Object(r.b)("h2",{id:"permissions"},"Permissions"),Object(r.b)("h3",{id:"android"},"Android"),Object(r.b)("p",null,"The following permissions are added automatically through this library's ",Object(r.b)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),"."),Object(r.b)(o.a,{permissions:["INTERNET"],mdxType:"AndroidPermissions"}),Object(r.b)("h3",{id:"ios"},"iOS"),Object(r.b)("p",null,"The following usage description keys are used by this library:"),Object(r.b)(o.b,{permissions:["NSUserTrackingUsageDescription"],mdxType:"IOSPermissions"}))}j.isMDXComponent=!0},lRqB:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/latest/sdk/admob",function(){return n("XH43")}])}},[["lRqB",1,0,2,3,4,5,6,7,8,9,10,11,12,13,14,16]]]);