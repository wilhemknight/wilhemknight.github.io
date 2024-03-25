_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[546],{KiYJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n("cpVT"),r=n("3zh3"),o=(n("q1tI"),n("AeFk"));function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e){var t=e.alt,n=e.src,i=e.style,a=e.containerStyle;return Object(o.c)("div",{style:p({textAlign:"center",backgroundColor:r.theme.background.secondary,paddingTop:10,paddingBottom:10,marginTop:20,marginBottom:20},a)},Object(o.c)("img",{src:n,alt:t,style:i}))}},egj0:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/unversioned/sdk/storereview",function(){return n("yFkN")}])},yFkN:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return d})),n.d(t,"headings",(function(){return b})),n.d(t,"default",(function(){return m}));var i=n("HALo"),r=n("dhJC"),o=(n("q1tI"),n("7ljp")),a=n("3Ukx"),p=n("KiYJ"),s=n("HCau"),c=n("hykZ"),l=["components"],d={title:"StoreReview",sourceCodeUrl:"https://github.com/expo/expo/tree/main/packages/expo-store-review",packageName:"expo-store-review"},b=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"Usage"},{depth:3,type:"text",title:"Write Reviews"},{depth:4,type:"text",title:"iOS"},{depth:4,type:"text",title:"Android"},{depth:2,type:"text",title:"API"},{depth:2,type:"text",title:"Error Codes"},{depth:3,type:"inlineCode",title:"E_STORE_REVIEW_UNSUPPORTED"}],u={meta:d,headings:b};function m(e){var t=e.components,n=Object(r.a)(e,l);return Object(o.b)("wrapper",Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"expo-store-review"))," provides access to the ",Object(o.b)("inlineCode",{parentName:"p"},"SKStoreReviewController")," API in iOS 10.3+ devices, and ",Object(o.b)("inlineCode",{parentName:"p"},"ReviewManager")," API in Android 5.0+ allowing you to ask the user to rate your app without ever having to leave the app itself."),Object(o.b)(p.a,{src:"/static/images/store-review.png",alt:"Screenshots of the store review API in action on iOS",mdxType:"ImageSpotlight"}),Object(o.b)(c.a,{android:!0,emulator:!0,ios:!0,simulator:!0,mdxType:"PlatformsSection"}),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"expo-linking")," is a peer dependency and must be installed alongside ",Object(o.b)("inlineCode",{parentName:"p"},"expo-store-review"),".")),Object(o.b)(s.a,{packageName:"expo-store-review expo-linking",mdxType:"APIInstallSection"}),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"It is important that you follow the ",Object(o.b)("a",{parentName:"p",href:"https://developer.apple.com/ios/human-interface-guidelines/system-capabilities/ratings-and-reviews/"},"Human Interface Guidelines")," for iOS and ",Object(o.b)("a",{parentName:"p",href:"https://developer.android.com/guide/playcore/in-app-review#when-to-request"},"Guidelines")," for Android when using this API."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Specifically:")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Don't call ",Object(o.b)("inlineCode",{parentName:"li"},"StoreReview.requestReview()")," from a button - instead try calling it after the user has finished some signature interaction in the app."),Object(o.b)("li",{parentName:"ul"},"Don't spam the user."),Object(o.b)("li",{parentName:"ul"},"Don't request a review when the user is doing something time sensitive like navigating."),Object(o.b)("li",{parentName:"ul"},"Don't ask the user any questions before or while presenting the rating button or card.")),Object(o.b)("h3",{id:"write-reviews"},"Write Reviews"),Object(o.b)("h4",{id:"ios"},"iOS"),Object(o.b)("p",null,'You can redirect someone to the "Write a Review" screen for an app in the iOS App Store by using the query parameter ',Object(o.b)("inlineCode",{parentName:"p"},"action=write-review"),". For example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"const itunesItemId = 982107779;\n// Open the iOS App Store in the browser -> redirects to App Store on iOS\nLinking.openURL(`https://apps.apple.com/app/apple-store/id${itunesItemId}?action=write-review`);\n// Open the iOS App Store directly\nLinking.openURL(\n  `itms-apps://itunes.apple.com/app/viewContentsUserReviews/id${itunesItemId}?action=write-review`\n);\n")),Object(o.b)("h4",{id:"android"},"Android"),Object(o.b)("p",null,"There is no equivalent redirect on Android, you can still open the Play Store to the reviews sections using the query parameter ",Object(o.b)("inlineCode",{parentName:"p"},"showAllReviews=true")," like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"const androidPackageName = 'host.exp.exponent';\n// Open the Android Play Store in the browser -> redirects to Play Store on Android\nLinking.openURL(\n  `https://play.google.com/store/apps/details?id=${androidPackageName}&showAllReviews=true`\n);\n// Open the Android Play Store directly\nLinking.openURL(`market://details?id=${androidPackageName}&showAllReviews=true`);\n")),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import * as StoreReview from 'expo-store-review';\n")),Object(o.b)(a.a,{packageName:"expo-store-review",apiName:"StoreReview",mdxType:"APISection"}),Object(o.b)("h2",{id:"error-codes"},"Error Codes"),Object(o.b)("h3",{id:"e_store_review_unsupported"},Object(o.b)("inlineCode",{parentName:"h3"},"E_STORE_REVIEW_UNSUPPORTED")),Object(o.b)("p",null,"Requesting an App Store review is not supported on this device. The device must be iOS 10.3 or greater. Android and web are not supported. Be sure to check for support with ",Object(o.b)("inlineCode",{parentName:"p"},"isAvailableAsync()")," to avoid this error."))}m.isMDXComponent=!0}},[["egj0",1,0,2,3,4,5,6,7,8,9,10,11,12,13,14]]]);