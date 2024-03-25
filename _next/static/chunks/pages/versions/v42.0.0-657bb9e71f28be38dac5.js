_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[878],{"2adE":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v42.0.0",function(){return a("kvWt")}])},FhZx:function(e,t,a){"use strict";var n=a("AeFk"),o=a("3zh3"),r=(a("q1tI"),Object(n.b)("background-color:",o.palette.light.black,";border-radius:4px;padding:24px;display:flex;flex-direction:column;overflow-x:auto;margin-bottom:1rem;","")),c=Object(n.b)("white-space:nowrap;font-family:",o.typography.fontFaces.mono,";font-size:13px;color:",o.palette.dark.gray[900],";line-height:160%;::before{content:'$ ';color:",o.palette.dark.primary[700],";}",""),i=Object(n.b)("user-select:none;white-space:nowrap;font-family:",o.typography.fontFaces.mono,";font-size:13px;color:",o.palette.dark.gray[600],";line-height:150%;",""),p=function(e){var t=e.children;return Object(n.c)("code",{unselectable:"on",css:i},t)};t.a=function(e){var t=e.cmd;return Object(n.c)("div",{css:r},t.map((function(e,t){var a="line-".concat(t);return e.startsWith("#")?Object(n.c)(p,{key:a},e):""===e.trim()?Object(n.c)("br",{key:a}):Object(n.c)("code",{key:a,css:c},e)})))}},kvWt:function(e,t,a){"use strict";a.r(t),a.d(t,"meta",(function(){return s})),a.d(t,"headings",(function(){return b})),a.d(t,"default",(function(){return d}));var n=a("HALo"),o=a("dhJC"),r=(a("q1tI"),a("7ljp")),c=a("itSf"),i=a("FhZx"),p=["components"],s={title:"API Reference",hideTOC:!0},b=[{depth:2,type:"text",title:"These packages work in bare React Native apps too"},{depth:2,type:"text",title:"Each Expo SDK version depends on a React Native version"}],l={meta:s,headings:b};function d(e){var t=e.components,a=Object(o.a)(e,p);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(c.b,{mdxType:"VersionedRedirectNotification"}),Object(r.b)("p",null,"The Expo SDK provides access to device and system functionality such as contacts, camera, and GPS location. You install modules from the Expo SDK using ",Object(r.b)("inlineCode",{parentName:"p"},"expo-cli")," with the ",Object(r.b)("inlineCode",{parentName:"p"},"expo install")," command:"),Object(r.b)(i.a,{cmd:["expo install expo-camera expo-contacts expo-sensors"],mdxType:"TerminalBlock"}),Object(r.b)("br",null),Object(r.b)("p",null,"You can import modules from it in your JavaScript code as follows:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"import { Camera } from 'expo-camera';\nimport * as Contacts from 'expo-contacts';\nimport { Gyroscope } from 'expo-sensors';\n")),Object(r.b)("p",null,"This allows you to write ",Object(r.b)("a",{parentName:"p",href:"/versions/v42.0.0/sdk/contacts/#contactsgetcontactsasynccontactquery"},Object(r.b)("inlineCode",{parentName:"a"},"Contacts.getContactsAsync()"))," and read the contacts from the device, read the gyroscope sensor to detect device movement, or render a Camera view and take photos."),Object(r.b)("h2",{id:"these-packages-work-in-bare-react-native-apps-too"},"These packages work in bare React Native apps too"),Object(r.b)("p",null,"The easiest way to create a bare React Native app with support for the Expo SDK is ",Object(r.b)("inlineCode",{parentName:"p"},"npx create-react-native-app myapp"),". If you have an existing app that you would like to add Expo SDK packages to, read about ",Object(r.b)("a",{parentName:"p",href:"/bare/existing-apps/"},"integrating into existing apps"),"."),Object(r.b)("h2",{id:"each-expo-sdk-version-depends-on-a-react-native-version"},"Each Expo SDK version depends on a React Native version"),Object(r.b)("p",null,"Every quarter there is a new Expo SDK release that typically updates to the latest stable version of React Native and includes a variety of bugfixes, features and improvements to the Expo SDK. It's often useful to know what version of React Native your Expo project is running on, so the following table maps Expo SDK versions to their included React Native version."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Expo SDK Version"),Object(r.b)("th",{parentName:"tr",align:"center"},"React Native Version"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"42.0.0"),Object(r.b)("td",{parentName:"tr",align:"center"},"0.63.3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"41.0.0"),Object(r.b)("td",{parentName:"tr",align:"center"},"0.63.3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"40.0.0"),Object(r.b)("td",{parentName:"tr",align:"center"},"0.63.3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"39.0.0"),Object(r.b)("td",{parentName:"tr",align:"center"},"0.63.2")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"38.0.0"),Object(r.b)("td",{parentName:"tr",align:"center"},"0.62.2")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"37.0.0"),Object(r.b)("td",{parentName:"tr",align:"center"},"0.61.4")))))}d.isMDXComponent=!0}},[["2adE",1,0,2,3,8,9,11,21]]]);