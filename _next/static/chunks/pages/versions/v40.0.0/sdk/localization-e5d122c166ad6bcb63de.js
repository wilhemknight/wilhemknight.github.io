_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[675],{F4hF:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return s})),n.d(t,"headings",(function(){return p})),n.d(t,"default",(function(){return d}));var a=n("HALo"),i=n("dhJC"),o=(n("q1tI"),n("7ljp")),l=n("HCau"),c=n("hykZ"),r=["components"],s={title:"Localization",sourceCodeUrl:"https://github.com/expo/expo/tree/sdk-40/packages/expo-localization"},p=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"Usage"},{depth:3,type:"text",title:"API Design Tips"},{depth:3,type:"text",title:"Full Demo"},{depth:2,type:"text",title:"API"},{depth:2,type:"text",title:"Constants"},{depth:3,type:"text",title:"Behavior"},{depth:3,type:"inlineCode",title:"Localization.locale"},{depth:3,type:"inlineCode",title:"Localization.locales"},{depth:3,type:"inlineCode",title:"Localization.region"},{depth:3,type:"inlineCode",title:"Localization.isoCurrencyCodes"},{depth:3,type:"inlineCode",title:"Localization.timezone"},{depth:3,type:"inlineCode",title:"Localization.isRTL"},{depth:2,type:"text",title:"Methods"},{depth:3,type:"inlineCode",title:"Localization.getLocalizationAsync()"}],b={meta:s,headings:p};function d(e){var t=e.components,n=Object(i.a)(e,r);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"expo-localization"))," allows you to Localize your app, customizing the experience for specific regions, languages, or cultures. It also provides access to the locale data on the native device.\nUsing the popular library ",Object(o.b)("a",{parentName:"p",href:"https://github.com/fnando/i18n-js"},Object(o.b)("inlineCode",{parentName:"a"},"i18n-js"))," with ",Object(o.b)("inlineCode",{parentName:"p"},"expo-localization")," will enable you to create a very accessible experience for users."),Object(o.b)(c.a,{android:!0,emulator:!0,ios:!0,simulator:!0,web:!0,mdxType:"PlatformsSection"}),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)(l.b,{packageName:"expo-localization",mdxType:"InstallSection"}),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"Let's make our app support English and Japanese."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Install the i18n package ",Object(o.b)("inlineCode",{parentName:"p"},"i18n-js")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-sh"},"yarn add i18n-js\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Configure the languages for your app."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-tsx"},"import * as Localization from 'expo-localization';\nimport i18n from 'i18n-js';\n// Set the key-value pairs for the different languages you want to support.\ni18n.translations = {\n  en: { welcome: 'Hello' },\n  ja: { welcome: '\u3053\u3093\u306b\u3061\u306f' },\n};\n// Set the locale once at the beginning of your app.\ni18n.locale = Localization.locale;\n")))),Object(o.b)("h3",{id:"api-design-tips"},"API Design Tips"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You may want to refrain from localizing text for certain things, like names. In this case you can define them ",Object(o.b)("em",{parentName:"li"},"once")," in your default language and reuse them with ",Object(o.b)("inlineCode",{parentName:"li"},"i18n.fallbacks = true;"),"."),Object(o.b)("li",{parentName:"ul"},"When a user changes the device's language, your app will reset. This means you can set the language once, and don't need to update any of your React components to account for the language changes."),Object(o.b)("li",{parentName:"ul"},"On iOS, you can add ",Object(o.b)("inlineCode",{parentName:"li"},'"CFBundleAllowMixedLocalizations": true')," to your ",Object(o.b)("inlineCode",{parentName:"li"},"ios.infoPlist")," property ",Object(o.b)("a",{parentName:"li",href:"/../../../../../../workflow/configuration/#ios"},"in your app.json")," so that your app supports the retrieval of localized strings from frameworks.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"This will allow you to translate app metadata, including the homescreen display name! Read ",Object(o.b)("a",{parentName:"li",href:"/../../../../../../distribution/app-stores#localizing-your-ios-app"},"here")," for details.")))),Object(o.b)("h3",{id:"full-demo"},"Full Demo"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react';\nimport { Text } from 'react-native';\nimport * as Localization from 'expo-localization';\nimport i18n from 'i18n-js';\n\n// Set the key-value pairs for the different languages you want to support.\ni18n.translations = {\n  en: { welcome: 'Hello', name: 'Charlie' },\n  ja: { welcome: '\u3053\u3093\u306b\u3061\u306f' },\n};\n// Set the locale once at the beginning of your app.\ni18n.locale = Localization.locale;\n// When a value is missing from a language it'll fallback to another language with the key present.\ni18n.fallbacks = true;\n\nfunction App() {\n  return (\n    <Text>\n      {i18n.t('welcome')} {i18n.t('name')}\n    </Text>\n  );\n}\n")),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"import * as Localization from 'expo-localization';\n")),Object(o.b)("h2",{id:"constants"},"Constants"),Object(o.b)("h3",{id:"behavior"},"Behavior"),Object(o.b)("p",null,"This API is mostly synchronous and driven by constants. On iOS the constants will always be correct, on Android you should check if the locale has updated using ",Object(o.b)("inlineCode",{parentName:"p"},"AppState")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Localization.getLocalizationAsync()"),". Initially the constants will be correct on both platforms, but on Android a user can change the language and return, more on this later."),Object(o.b)("h3",{id:"localizationlocale"},Object(o.b)("inlineCode",{parentName:"h3"},"Localization.locale")),Object(o.b)("p",null,"Native device language, returned in standard format. Ex: ",Object(o.b)("inlineCode",{parentName:"p"},"en"),", ",Object(o.b)("inlineCode",{parentName:"p"},"en-US"),", ",Object(o.b)("inlineCode",{parentName:"p"},"es-US"),"."),Object(o.b)("h3",{id:"localizationlocales"},Object(o.b)("inlineCode",{parentName:"h3"},"Localization.locales")),Object(o.b)("p",null,"List of all the native languages provided by the user settings. These are returned in the order the user defines in their native settings."),Object(o.b)("h3",{id:"localizationregion"},Object(o.b)("inlineCode",{parentName:"h3"},"Localization.region")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Available on iOS and Web.")," Region code for your device which came from Region setting in Language & Region. Ex: US, NZ."),Object(o.b)("h3",{id:"localizationisocurrencycodes"},Object(o.b)("inlineCode",{parentName:"h3"},"Localization.isoCurrencyCodes")),Object(o.b)("p",null,"A list of all the supported language ISO codes."),Object(o.b)("h3",{id:"localizationtimezone"},Object(o.b)("inlineCode",{parentName:"h3"},"Localization.timezone")),Object(o.b)("p",null,"The current timezone in display format. ex: ",Object(o.b)("inlineCode",{parentName:"p"},"America/Los_Angeles")),Object(o.b)("p",null,"On Web ",Object(o.b)("inlineCode",{parentName:"p"},"timezone")," is calculated with ",Object(o.b)("inlineCode",{parentName:"p"},"Intl.DateTimeFormat().resolvedOptions().timeZone"),". For a better estimation you could use the ",Object(o.b)("inlineCode",{parentName:"p"},"moment-timezone")," package but it will add significant bloat to your website's bundle size."),Object(o.b)("h3",{id:"localizationisrtl"},Object(o.b)("inlineCode",{parentName:"h3"},"Localization.isRTL")),Object(o.b)("p",null,"Returns if the system's language is written from Right-to-Left. This can be used to build features like ",Object(o.b)("a",{parentName:"p",href:"https://material.io/design/usability/bidirectionality.html"},"bidirectional icons"),"."),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"localizationgetlocalizationasync"},Object(o.b)("inlineCode",{parentName:"h3"},"Localization.getLocalizationAsync()")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Android only, on iOS changing the locale settings will cause all the apps to reset.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"type NativeEvent = {\n  locale: string,\n  locales: Array<string>,\n  timezone: string,\n  isoCurrencyCodes: ?Array<string>,\n  region: ?string,\n  isRTL: boolean,\n};\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"// When the app returns from the background on Android...\n\nconst { locale } = await Localization.getLocalizationAsync();\n")))}d.isMDXComponent=!0},s8li:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v40.0.0/sdk/localization",function(){return n("F4hF")}])}},[["s8li",1,0,2,3,4,5,6]]]);