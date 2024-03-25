_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[461],{"10wb":function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return l})),t.d(n,"headings",(function(){return d})),t.d(n,"default",(function(){return b}));var a=t("HALo"),o=t("dhJC"),s=(t("q1tI"),t("7ljp")),p=t("3Ukx"),i=t("HCau"),r=t("hykZ"),c=["components"],l={title:"AppLoading",sourceCodeUrl:"https://github.com/expo/expo/tree/main/packages/expo-app-loading",packageName:"expo-app-loading"},d=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"Usage"},{depth:2,type:"text",title:"API"}],m={meta:l,headings:d};function b(e){var n=e.components,t=Object(o.a)(e,c);return Object(s.b)("wrapper",Object(a.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},Object(s.b)("strong",{parentName:"p"},"Deprecated.")," Use ",Object(s.b)("strong",{parentName:"p"},"expo-splash-screen")," directly instead: ",Object(s.b)("inlineCode",{parentName:"p"},"SplashScreen.preventAutoHideAsync()")," and ",Object(s.b)("inlineCode",{parentName:"p"},"SplashScren.hideAsync()"),". ",Object(s.b)("a",{parentName:"p",href:"/../../../../../../versions/latest/sdk/splash-screen"},"Learn more"),".")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"expo-app-loading"))," tells ",Object(s.b)("inlineCode",{parentName:"p"},"expo-splash-screen")," to keep the splash screen visible while the AppLoading component is mounted."),Object(s.b)("p",null,"This is useful to download and cache fonts, logos, icon images and other assets that you want to be sure the user has on their device for an optimal experience."),Object(s.b)(r.a,{android:!0,emulator:!0,ios:!0,simulator:!0,web:!0,mdxType:"PlatformsSection"}),Object(s.b)("h2",{id:"installation"},"Installation"),Object(s.b)(i.a,{mdxType:"APIInstallSection"}),Object(s.b)("h2",{id:"usage"},"Usage"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react';\nimport { Image, Text, View } from 'react-native';\nimport { Asset } from 'expo-asset';\nimport AppLoading from 'expo-app-loading';\n\nexport default class App extends React.Component {\n  state = {\n    isReady: false,\n  };\n\n  render() {\n    if (!this.state.isReady) {\n      /* @info As long as AppLoading is the only leaf/native component that has been mounted, the loading screen will remain visible */\n      return (\n        <AppLoading\n          startAsync={this._cacheResourcesAsync}\n          onFinish={() => this.setState({ isReady: true })}\n          onError={console.warn}\n        />\n      ); /* @end */\n    }\n\n    return (\n      <View style={{ flex: 1 }}>\n        <Image source={require('./assets/snack-icon.png')} />\n      </View>\n    );\n  }\n\n  async _cacheResourcesAsync() {\n    const images = [require('./assets/snack-icon.png')];\n\n    /* @info Read more about <a href='../guides/preloading-and-caching-assets.html'>Preloading and Caching Assets</a> */\n    const cacheImages = images.map(image => {\n      return Asset.fromModule(image).downloadAsync();\n    }); /* @end */\n\n    return Promise.all(cacheImages);\n  }\n}\n")),Object(s.b)("h2",{id:"api"},"API"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"import AppLoading from 'expo-app-loading';\n")),Object(s.b)(p.a,{packageName:"expo-app-loading",apiName:"AppLoading",mdxType:"APISection"}))}b.isMDXComponent=!0},q44G:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/unversioned/sdk/app-loading",function(){return t("10wb")}])}},[["q44G",1,0,2,3,4,5,6,7,8,9,10,11,12,13,14]]]);