_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[653],{"72Up":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v40.0.0/sdk/facebook-ads",function(){return n("bCTy")}])},bCTy:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return l})),n.d(t,"headings",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n("HALo"),o=n("dhJC"),i=(n("q1tI"),n("7ljp")),r=n("HCau"),d=n("hykZ"),s=["components"],l={title:"FacebookAds",sourceCodeUrl:"https://github.com/expo/expo/tree/sdk-40/packages/expo-ads-facebook"},c=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"Configuration"},{depth:3,type:"text",title:"Creating the placement ID"},{depth:3,type:"text",title:"Configuring app.json"},{depth:3,type:"text",title:"Development vs Production"},{depth:2,type:"text",title:"Usage"},{depth:3,type:"text",title:"Interstitial Ads"},{depth:3,type:"text",title:"Native Ads"},{depth:4,type:"text",title:"1. Create NativeAdsManager instance"},{depth:4,type:"inlineCode",title:"2. Wrap your component with  withNativeAd  HOC"},{depth:4,type:"inlineCode",title:"3. Add  AdMediaView  and  AdIconView  components"},{depth:4,type:"text",title:"4. Mark which components trigger the ad"},{depth:4,type:"text",title:"5. Render the ad component"},{depth:3,type:"text",title:"BannerAd"},{depth:4,type:"text",title:"1. Showing ad"},{depth:2,type:"text",title:"API"},{depth:3,type:"text",title:"NativeAdsManager"},{depth:4,type:"text",title:"disableAutoRefresh"},{depth:4,type:"text",title:"setMediaCachePolicy (iOS)"},{depth:3,type:"text",title:"InterstitialAdManager"},{depth:4,type:"text",title:"showAd"},{depth:3,type:"text",title:"AdSettings"},{depth:4,type:"text",title:"currentDeviceHash"},{depth:4,type:"text",title:"addTestDevice"},{depth:4,type:"text",title:"clearTestDevices"},{depth:4,type:"text",title:"setLogLevel (iOS)"},{depth:4,type:"text",title:"setIsChildDirected"},{depth:4,type:"text",title:"setMediationService"},{depth:4,type:"text",title:"setUrlPrefix"},{depth:2,type:"text",title:"Troubleshooting"}],b={meta:l,headings:c};function p(e){var t=e.components,n=Object(o.a)(e,s);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"expo-ads-facebook"))," provides access to the Facebook Audience SDK, allowing you to monetize your app with targeted ads."),Object(i.b)(d.a,{android:!0,ios:!0,mdxType:"PlatformsSection"}),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)(r.b,{packageName:"expo-ads-facebook",mdxType:"InstallSection"}),Object(i.b)("p",null,"For bare apps, you will also need to follow ",Object(i.b)("a",{parentName:"p",href:"https://developers.facebook.com/docs/audience-network/get-started"},"Facebook's Get Started guide"),"."),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("h3",{id:"creating-the-placement-id"},"Creating the placement ID"),Object(i.b)("p",null,"You need to create a placement ID to display ads. Follow steps 1 and 3 from the ",Object(i.b)("a",{parentName:"p",href:"https://developers.facebook.com/docs/audience-network/getting-started"},"Getting Started Guide for Facebook Audience")," to create the placement ID."),Object(i.b)("h3",{id:"configuring-appjson"},"Configuring app.json"),Object(i.b)("p",null,"In your project's ",Object(i.b)("a",{parentName:"p",href:"/workflow/configuration/"},"app.json"),", add your ",Object(i.b)("a",{parentName:"p",href:"https://developers.facebook.com/docs/facebook-login/ios"},"Facebook App ID and Facebook Display Name")," under the ",Object(i.b)("inlineCode",{parentName:"p"},"facebookAppId")," and ",Object(i.b)("inlineCode",{parentName:"p"},"facebookDisplayName")," keys."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"In the Expo Go app, all of your Facebook API calls will be made with Expo's Facebook App ID. This means you will not see any related ad info in your Facebook developer page while running your project in Expo Go."),Object(i.b)("li",{parentName:"ul"},"To use your app's own Facebook App ID (and thus see any related ad info in your Facebook developer page), you'll need to ",Object(i.b)("a",{parentName:"li",href:"/distribution/building-standalone-apps/"},"build a standalone app"),".")),Object(i.b)("h3",{id:"development-vs-production"},"Development vs Production"),Object(i.b)("p",null,"When using Facebook Ads in development, you can use Facebook's test ad IDs so that there's minimal setup needed on your part. Wherever a ",Object(i.b)("inlineCode",{parentName:"p"},"placementId")," is required, simply provide ",Object(i.b)("inlineCode",{parentName:"p"},"DEMO_AD_TYPE#YOUR_PLACEMENT_ID")," where ",Object(i.b)("inlineCode",{parentName:"p"},"DEMO_AD_TYPE")," is one of the values ",Object(i.b)("a",{parentName:"p",href:"https://developers.facebook.com/docs/audience-network/overview/in-house-mediation/server-to-server/testing/"},'shown here in the "Demo Ad Type Table"'),"."),Object(i.b)("p",null,"Another option is to add the following at the top of your file to register your device:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import * as FacebookAds from 'expo-ads-facebook';\n\nFacebookAds.AdSettings.addTestDevice(FacebookAds.AdSettings.currentDeviceHash);\n")),Object(i.b)("p",null,"You should see fake ads after you add this snippet."),Object(i.b)("p",null,"To use Facebook Ads in production with real ads, you need to publish your app on Play Store or App Store and add your app in the Facebook console. Refer the ",Object(i.b)("a",{parentName:"p",href:"https://developers.facebook.com/docs/audience-network/getting-started#onboarding"},"Submit Your App for Review section in the Getting Started Guide")," for more details."),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("h3",{id:"interstitial-ads"},"Interstitial Ads"),Object(i.b)("p",null,"Interstitial Ad is a type of ad that displays a full-screen modal dialog with media content. It has a dismiss button as well as a touchable area that takes the user outside of your app to the advertised content."),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import * as FacebookAds from 'expo-ads-facebook';\n\nFacebookAds.InterstitialAdManager.showAd(placementId)\n  .then(didClick => {})\n  .catch(error => {});\n")),Object(i.b)("p",null,"The method returns a promise that will be rejected when an error occurs during a call (e.g. no fill from ad server or network error) and resolved when the user either dismisses or interacts with the displayed ad."),Object(i.b)("h3",{id:"native-ads"},"Native Ads"),Object(i.b)("p",null,"Native ads can be customized to match the design of your app. To display a native ad, you need to:"),Object(i.b)("h4",{id:"1-create-nativeadsmanager-instance"},"1. Create NativeAdsManager instance"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"NativeAdManager")," is responsible for fetching and caching ads as you request them."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import * as FacebookAds from 'expo-ads-facebook';\n\nconst adsManager = new FacebookAds.NativeAdsManager(placementId, numberOfAdsToRequest);\n")),Object(i.b)("p",null,"The constructor accepts two parameters:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"placementId")," - which is a unique identifier describing your ad units"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"numberOfAdsToRequest")," - which is a number of ads to request by ads manager at a time")),Object(i.b)("h4",{id:"2-wrap-your-component-with-withnativead-hoc"},"2. Wrap your component with ",Object(i.b)("inlineCode",{parentName:"h4"},"withNativeAd")," HOC"),Object(i.b)("p",null,"Next, you need to wrap the component you want to use to show your add with the ",Object(i.b)("inlineCode",{parentName:"p"},"withNativeAd")," higher-order component. The wrapped component will receive a prop named ",Object(i.b)("inlineCode",{parentName:"p"},"nativeAd"),", which you can use to render an ad."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import * as FacebookAds from 'expo-ads-facebook';\n\nclass AdComponent extends React.Component {\n  render() {\n    return (\n      <View>\n        <Text>{this.props.nativeAd.bodyText}</Text>\n      </View>\n    );\n  }\n}\n\nexport default FacebookAds.withNativeAd(AdComponent);\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"nativeAd")," object can contain the following properties:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"advertiserName")," - The name of the Facebook Page or mobile app that represents the business running each ad."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"headline")," - The headline that the advertiser entered when they created their ad. This is usually the ad's main title."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"linkDescription")," - Additional information that the advertiser may have entered."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"adTranslation")," - The word 'ad', translated into the language based upon Facebook app language setting."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"promotedTranslation")," - The word 'promoted', translated into the language based upon Facebook app language setting."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sponsoredTranslation")," - The word 'sponsored', translated into the language based upon Facebook app language setting."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"bodyText")," - Ad body"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"callToActionText"),' - Call to action phrase, e.g. - "Install Now"'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"socialContext"),' - social context for the Ad, for example "Over half a million users"')),Object(i.b)("p",null,"More information on how the properties correspond to an exemplary ad can be found in the official Facebook documentation for ",Object(i.b)("a",{parentName:"p",href:"https://developers.facebook.com/docs/audience-network/android-native"},"Android")," and for ",Object(i.b)("a",{parentName:"p",href:"https://developers.facebook.com/docs/audience-network/ios-native"},"iOS"),"."),Object(i.b)("h4",{id:"3-add-admediaview-and-adiconview-components"},"3. Add ",Object(i.b)("inlineCode",{parentName:"h4"},"AdMediaView")," and ",Object(i.b)("inlineCode",{parentName:"h4"},"AdIconView")," components"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"AdMediaView")," displays native ad media content whereas ",Object(i.b)("inlineCode",{parentName:"p"},"AdIconView")," is responsible for displaying an ad icon."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"}," Note: ")," Don't use more than one ",Object(i.b)("inlineCode",{parentName:"p"},"AdMediaView")," and ",Object(i.b)("inlineCode",{parentName:"p"},"AdIconView")," component (each) within one native ad. If you use more, only the last mounted one will be populated with ad content.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import * as FacebookAds from 'expo-ads-facebook';\nconst { AdIconView, AdMediaView } = FacebookAds;\n\nclass AdComponent extends React.Component {\n  render() {\n    return (\n      <View>\n        <AdMediaView />\n        <AdIconView />\n      </View>\n    );\n  }\n}\n\nexport default FacebookAds.withNativeAd(AdComponent);\n")),Object(i.b)("h4",{id:"4-mark-which-components-trigger-the-ad"},"4. Mark which components trigger the ad"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"}," Note:")," In order for elements wrapped with ",Object(i.b)("inlineCode",{parentName:"p"},"AdTriggerView")," to trigger the ad, you also must include ",Object(i.b)("inlineCode",{parentName:"p"},"AdMediaView")," in the children tree.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import * as FacebookAds from 'expo-ads-facebook';\nconst { AdTriggerView, AdMediaView } = FacebookAds;\n\nclass AdComponent extends React.Component {\n  render() {\n    return (\n      <View>\n        <AdMediaView />\n        <AdTriggerView>\n          <Text>{this.props.nativeAd.bodyText}</Text>\n        </AdTriggerView>\n      </View>\n    );\n  }\n}\n\nexport default FacebookAds.withNativeAd(AdComponent);\n")),Object(i.b)("h4",{id:"5-render-the-ad-component"},"5. Render the ad component"),Object(i.b)("p",null,"Now you can render the wrapped component and pass the ",Object(i.b)("inlineCode",{parentName:"p"},"adsManager")," instance you created earlier."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"class MyApp extends React.Component {\n  render() {\n    return (\n      <View>\n        <AdComponent adsManager={adsManager} />\n      </View>\n    );\n  }\n}\n")),Object(i.b)("p",null,"If you want, you can optionally pass two other callback properties \u2014 ",Object(i.b)("inlineCode",{parentName:"p"},"onAdLoaded")," and ",Object(i.b)("inlineCode",{parentName:"p"},"onError"),"."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onAdLoaded")," will be called once an ad is fetched and provided to your component (the ",Object(i.b)("inlineCode",{parentName:"li"},"nativeAd")," property introduced in step 2.) The one and only argument with which the function will be called will be the native ad object."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onError")," will be called if the Audience framework encounters an error while fetching the ad. The one and only argument with which the function will be called will be an instance of ",Object(i.b)("inlineCode",{parentName:"li"},"Error"),".")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"class MyApp extends React.Component {\n  render() {\n    return (\n      <View>\n        <AdComponent\n          adsManager={adsManager}\n          onAdLoaded={ad => console.log(ad)}\n          onError={error => console.warn(error)}\n        />\n      </View>\n    );\n  }\n}\n")),Object(i.b)("h3",{id:"bannerad"},"BannerAd"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"BannerAd")," component allows you to display native as banners (known as ",Object(i.b)("em",{parentName:"p"},"AdView"),")."),Object(i.b)("p",null,"Banners are available in 3 sizes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"standard")," (BANNER_HEIGHT_50)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"large")," (BANNER_HEIGHT_90)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"rectangle")," (RECTANGLE_HEIGHT_250)")),Object(i.b)("h4",{id:"1-showing-ad"},"1. Showing ad"),Object(i.b)("p",null,"In order to show an ad, you first have to import ",Object(i.b)("inlineCode",{parentName:"p"},"BannerAd")," from the package:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import * as FacebookAds from 'expo-ads-facebook';\n\nfunction ViewWithBanner(props) {\n  return (\n    <View>\n      <FacebookAds.BannerAd\n        placementId=\"YOUR_BANNER_PLACEMENT_ID\"\n        type=\"standard\"\n        onPress={() => console.log('click')}\n        onError={error => console.log('error', error)}\n      />\n    </View>\n  );\n}\n")),Object(i.b)("h2",{id:"api"},"API"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import * as FacebookAds from 'expo-ads-facebook';\n")),Object(i.b)("h3",{id:"nativeadsmanager"},"NativeAdsManager"),Object(i.b)("p",null,"A wrapper for ",Object(i.b)("a",{parentName:"p",href:"https://developers.facebook.com/docs/reference/ios/current/class/FBNativeAdsManager/"},Object(i.b)("inlineCode",{parentName:"a"},"FBNativeAdsManager")),". It provides a mechanism to fetch a set of ads and use them."),Object(i.b)("h4",{id:"disableautorefresh"},"disableAutoRefresh"),Object(i.b)("p",null,"By default the native ads manager will refresh its ads periodically. This does not mean that any ads which are shown in the application's UI will be refreshed, but requesting next native ads to render may return new ads at different times."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"adsManager.disableAutoRefresh();\n")),Object(i.b)("h4",{id:"setmediacachepolicy-ios"},"setMediaCachePolicy (iOS)"),Object(i.b)("p",null,"This controls which media from the native ads are cached before being displayed. The default is to not block on caching."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"adsManager.setMediaCachePolicy('none' | 'icon' | 'image' | 'all');\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," This method is a no-op on Android"),Object(i.b)("h3",{id:"interstitialadmanager"},"InterstitialAdManager"),Object(i.b)("p",null,"InterstitialAdManager is a manager that allows you to display interstitial ads within your app."),Object(i.b)("h4",{id:"showad"},"showAd"),Object(i.b)("p",null,"Shows a fullscreen interstitial ad asynchronously."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"InterstitialAdManager.showAd('placementId')\n  .then(...)\n  .catch(...);\n")),Object(i.b)("p",null,"Promise will be rejected when there's an error loading ads from Facebook Audience network. It will resolve with a\n",Object(i.b)("inlineCode",{parentName:"p"},"boolean")," indicating whether user didClick an ad or not."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," There can be only one ",Object(i.b)("inlineCode",{parentName:"p"},"showAd")," call being performed at a time. Otherwise, an error will be thrown."),Object(i.b)("h3",{id:"adsettings"},"AdSettings"),Object(i.b)("p",null,"AdSettings contains global settings for all ad controls."),Object(i.b)("h4",{id:"currentdevicehash"},"currentDeviceHash"),Object(i.b)("p",null,"Constant which contains current device's hash."),Object(i.b)("h4",{id:"addtestdevice"},"addTestDevice"),Object(i.b)("p",null,"Registers given device to receive test ads. When you run app on simulator, it should automatically get added. Use it\nto receive test ads in development mode on a standalone phone."),Object(i.b)("p",null,"All devices should be specified before any other action takes place, like ",Object(i.b)("a",{parentName:"p",href:"/versions/v40.0.0/sdk/facebook-ads/#nativeadsmanager"},Object(i.b)("inlineCode",{parentName:"a"},"AdsManager"))," gets created."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"FacebookAds.AdSettings.addTestDevice('hash');\n")),Object(i.b)("h4",{id:"cleartestdevices"},"clearTestDevices"),Object(i.b)("p",null,"Clears all previously set test devices. If you want your ads to respect newly set config, you'll have to destroy and create\nan instance of AdsManager once again."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"FacebookAds.AdSettings.clearTestDevices();\n")),Object(i.b)("h4",{id:"setloglevel-ios"},"setLogLevel (iOS)"),Object(i.b)("p",null,"Sets current SDK log level."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"FacebookAds.AdSettings.setLogLevel(\n  'none' | 'debug' | 'verbose' | 'warning' | 'error' | 'notification'\n);\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," This method is a no-op on Android."),Object(i.b)("h4",{id:"setischilddirected"},"setIsChildDirected"),Object(i.b)("p",null,"Configures the ad control for treatment as child-directed."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"FacebookAds.AdSettings.setIsChildDirected(true | false);\n")),Object(i.b)("h4",{id:"setmediationservice"},"setMediationService"),Object(i.b)("p",null,"If an ad provided service is mediating Audience Network in their SDK, it is required to set the name of the mediation service"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"FacebookAds.AdSettings.setMediationService('foobar');\n")),Object(i.b)("h4",{id:"seturlprefix"},"setUrlPrefix"),Object(i.b)("p",null,"Sets the URL prefix to use when making ad requests."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"FacebookAds.AdSettings.setUrlPrefix('...');\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," This method should never be used in production"),Object(i.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(i.b)("p",null,"Facebook provides a ",Object(i.b)("a",{parentName:"p",href:"https://developers.facebook.com/docs/audience-network/guides/test/checklist-errors/"},"table of common errors")," when attempting to serve ads, this should be your first reference if you run into any issues."),Object(i.b)("p",null,"There are also some changes with iOS 14 that impact the Audience Network's ability to serve ads. According to facebook, ",Object(i.b)("em",{parentName:"p"},Object(i.b)("a",{parentName:"em",href:"https://www.facebook.com/audiencenetwork/news-and-insights/preparing-audience-network-for-ios14"},'"some iOS 14 users may not see any ads from Audience Network, while others may still see ads from us, but they\'ll be less relevant"')),"."))}p.isMDXComponent=!0}},[["72Up",1,0,2,3,4,5,6]]]);