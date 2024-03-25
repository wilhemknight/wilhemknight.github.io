_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[1486],{"7sD1":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v45.0.0/sdk/netinfo",function(){return n("WY0J")}])},WY0J:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return l})),n.d(t,"headings",(function(){return b})),n.d(t,"default",(function(){return u}));var o=n("HALo"),i=n("dhJC"),a=(n("q1tI"),n("7ljp")),c=n("HCau"),s=n("hykZ"),r=["components"],l={title:"NetInfo",sourceCodeUrl:"https://github.com/react-native-community/react-native-netinfo",packageName:"@react-native-community/netinfo"},b=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"API"},{depth:2,type:"text",title:"Accessing the SSID"},{depth:4,type:"text",title:"Android & iOS"},{depth:4,type:"text",title:"iOS only"}],p={meta:l,headings:b};function u(e){var t=e.components,n=Object(i.a)(e,r);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"@react-native-community/netinfo"))," allows you to get information about connection type and connection quality."),Object(a.b)(s.a,{android:!0,emulator:!0,ios:!0,simulator:!0,web:!0,mdxType:"PlatformsSection"}),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)(c.a,{href:"https://github.com/react-native-community/react-native-netinfo#getting-started",mdxType:"APIInstallSection"}),Object(a.b)("h2",{id:"api"},"API"),Object(a.b)("p",null,"To import this library, use:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"import NetInfo from '@react-native-community/netinfo';\n")),Object(a.b)("p",null,"If you want to grab information about the network connection just once, you can use:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"NetInfo.fetch().then(state => {\n  console.log('Connection type', state.type);\n  console.log('Is connected?', state.isConnected);\n});\n")),Object(a.b)("p",null,"Or, if you'd rather subscribe to updates about the network state (which then allows you to run code/perform actions anytime the network state changes) use:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const unsubscribe = NetInfo.addEventListener(state => {\n  console.log('Connection type', state.type);\n  console.log('Is connected?', state.isConnected);\n});\n\n// To unsubscribe to these update, just use:\nunsubscribe();\n")),Object(a.b)("h2",{id:"accessing-the-ssid"},"Accessing the SSID"),Object(a.b)("p",null,"In order to access the ",Object(a.b)("inlineCode",{parentName:"p"},"ssid")," property (available under ",Object(a.b)("inlineCode",{parentName:"p"},"state.details.ssid"),"), there are few additional configuration steps:"),Object(a.b)("h4",{id:"android--ios"},"Android & iOS"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Request location permissions with ",Object(a.b)("a",{parentName:"li",href:"/versions/v45.0.0/sdk/location/#locationrequestpermissionsasync"},Object(a.b)("inlineCode",{parentName:"a"},"Location.requestPermissionsAsync()")))),Object(a.b)("h4",{id:"ios-only"},"iOS only"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Add the ",Object(a.b)("inlineCode",{parentName:"li"},"com.apple.developer.networking.wifi-info")," entitlement to your app.json file under ",Object(a.b)("inlineCode",{parentName:"li"},"ios.entitlements"),":")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'  "ios": {\n    "entitlements": {\n      "com.apple.developer.networking.wifi-info": true\n    }\n  }\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Check the ",Object(a.b)("strong",{parentName:"p"},"Access WiFi Information")," box in your app's App Identifier, ",Object(a.b)("a",{parentName:"p",href:"https://developer.apple.com/account/resources/identifiers/list"},"which can be found here"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Rebuild your app with ",Object(a.b)("inlineCode",{parentName:"p"},"expo build:ios")))),Object(a.b)("p",null,"Read the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-netinfo#react-native-communitynetinfo"},"react-native-netinfo docs")," for more information on the API and usage."))}u.isMDXComponent=!0}},[["7sD1",1,0,2,3,4,5,6]]]);