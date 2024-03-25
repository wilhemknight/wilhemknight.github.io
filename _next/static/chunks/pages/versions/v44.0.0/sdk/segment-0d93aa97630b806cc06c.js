_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[1339],{Njn9:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v44.0.0/sdk/segment",function(){return n("qM4B")}])},qM4B:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return p})),n.d(t,"headings",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n("HALo"),o=n("dhJC"),c=(n("q1tI"),n("7ljp")),s=n("3Ukx"),i=n("HCau"),r=n("hykZ"),l=["components"],p={title:"Segment",sourceCodeUrl:"https://github.com/expo/expo/tree/sdk-44/packages/expo-analytics-segment"},b=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"API"},{depth:2,type:"text",title:"Opting out (enabling/disabling all tracking)"}],m={meta:p,headings:b};function d(e){var t=e.components,n=Object(o.a)(e,l);return Object(c.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"We recommend using the official ",Object(c.b)("a",{parentName:"p",href:"https://github.com/segmentio/analytics-react-native"},"@segment/analytics-react-native")," instead of ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"expo-analytics-segment")),".")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"expo-analytics-segment"))," provides access to ",Object(c.b)("a",{parentName:"p",href:"https://segment.com/"},"https://segment.com/")," mobile analytics. Wraps Segment's ",Object(c.b)("a",{parentName:"p",href:"https://segment.com/docs/sources/mobile/ios/"},"iOS")," and ",Object(c.b)("a",{parentName:"p",href:"https://segment.com/docs/sources/mobile/android/"},"Android")," sources."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"Note:")," Session tracking may not work correctly when running Experiences in the main Expo app. It will work correctly if you create a standalone app.")),Object(c.b)(r.a,{android:!0,emulator:!0,ios:!0,simulator:!0,mdxType:"PlatformsSection"}),Object(c.b)("h2",{id:"installation"},"Installation"),Object(c.b)(i.b,{packageName:"expo-analytics-segment",mdxType:"InstallSection"}),Object(c.b)("h2",{id:"api"},"API"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"import * as Segment from 'expo-analytics-segment';\n")),Object(c.b)(s.a,{packageName:"expo-analytics-segment",apiName:"Segment",mdxType:"APISection"}),Object(c.b)("h2",{id:"opting-out-enablingdisabling-all-tracking"},"Opting out (enabling/disabling all tracking)"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Depending on the audience for your app (e.g. children) or the countries where you sell your app (e.g. the EU), you may need to offer the ability for users to opt-out of analytics data collection inside your app. You can turn off forwarding to ALL destinations including Segment itself:\n(",Object(c.b)("a",{parentName:"p",href:"https://segment.com/docs/sources/mobile/ios/#opt-out"},"Source \u2013 Segment docs"),")")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"import * as Segment from 'expo-analytics-segment';\n\nSegment.setEnabledAsync(false);\n\n// Or if they opt-back-in, you can re-enable data collection:\nSegment.setEnabledAsync(true);\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"Note:")," disabling the Segment SDK ensures that all data collection method invocations (eg. ",Object(c.b)("inlineCode",{parentName:"p"},"track"),", ",Object(c.b)("inlineCode",{parentName:"p"},"identify"),", etc) are ignored.")),Object(c.b)("p",null,"This method is only supported in standalone and detached apps. In Expo Go the promise will reject."),Object(c.b)("p",null,"The setting value will be persisted across restarts, so once you call ",Object(c.b)("inlineCode",{parentName:"p"},"setEnabledAsync(false)"),", Segment won't track the users even when the app restarts. To check whether tracking is enabled, use ",Object(c.b)("inlineCode",{parentName:"p"},"Segment.getEnabledAsync()")," which returns a promise which should resolve to a boolean."))}d.isMDXComponent=!0}},[["Njn9",1,0,2,3,4,5,6,7,8,9,10,11,12,13,14]]]);