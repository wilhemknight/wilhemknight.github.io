_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[1504],{fUID:function(e,t,a){"use strict";a.r(t),a.d(t,"meta",(function(){return h})),a.d(t,"headings",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a("HALo"),o=a("dhJC"),i=(a("q1tI"),a("7ljp")),r=a("3Ukx"),p=a("HCau"),s=a("hykZ"),l=a("3iwL"),b=["components"],h={title:"Sharing",sourceCodeUrl:"https://github.com/expo/expo/tree/sdk-45/packages/expo-sharing",packageName:"expo-sharing"},c=[{depth:4,type:"text",title:"Sharing limitations on web"},{depth:4,type:"text",title:"Sharing to your app from other apps"},{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"API"}],u={meta:h,headings:c};function d(e){var t=e.components,a=Object(o.a)(e,b);return Object(i.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"expo-sharing"))," allows you to share files directly with other compatible applications."),Object(i.b)(l.a,{file:"sdk/sharing.mp4",loop:!1,mdxType:"Video"}),Object(i.b)(s.a,{android:!0,emulator:!0,ios:!0,simulator:!0,web:!0,mdxType:"PlatformsSection"}),Object(i.b)("h4",{id:"sharing-limitations-on-web"},"Sharing limitations on web"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"expo-sharing")," for web is built on top of the Web Share API, which still has ",Object(i.b)("a",{parentName:"li",href:"https://caniuse.com/#feat=web-share"},"very limited browser support"),". Be sure to check that the API can be used before calling it by using ",Object(i.b)("inlineCode",{parentName:"li"},"Sharing.isAvailableAsync()"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"HTTPS required on web"),": The Web Share API is only available on web when the page is served over https. Run your app with ",Object(i.b)("inlineCode",{parentName:"li"},"expo start --https")," to enable it."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"No local file sharing on web"),": Sharing local files by URI works on iOS and Android, but not on web. You cannot share local files on web by URI ","\u2014"," you will need to upload them somewhere and share that URI.")),Object(i.b)("h4",{id:"sharing-to-your-app-from-other-apps"},"Sharing to your app from other apps"),Object(i.b)("p",null,"Currently ",Object(i.b)("inlineCode",{parentName:"p"},"expo-sharing")," only supports sharing ",Object(i.b)("em",{parentName:"p"},"from your app to other apps")," and you cannot register to your app to have content shared to it through the native share dialog on native platforms. You can read more ",Object(i.b)("a",{parentName:"p",href:"https://expo.canny.io/feature-requests/p/share-extension-ios-share-intent-android"},"in the related feature request"),". If you are using the bare workflow you can build this functionality on your own, but it is not available in the managed workflow."),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)(p.a,{mdxType:"APIInstallSection"}),Object(i.b)("h2",{id:"api"},"API"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import * as Sharing from 'expo-sharing';\n")),Object(i.b)(r.a,{packageName:"expo-sharing",apiName:"Sharing",mdxType:"APISection"}))}d.isMDXComponent=!0},tYj0:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v45.0.0/sdk/sharing",function(){return a("fUID")}])}},[["tYj0",1,0,2,3,4,5,6,7,8,9,10,11,12,13,14,15]]]);