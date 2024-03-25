_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[621],{N4Qz:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v40.0.0/sdk/app-loading",function(){return t("igkR")}])},igkR:function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return c})),t.d(n,"headings",(function(){return l})),t.d(n,"default",(function(){return b}));var a=t("HALo"),o=t("dhJC"),s=(t("q1tI"),t("7ljp")),i=t("HCau"),r=t("hykZ"),p=["components"],c={title:"AppLoading",sourceCodeUrl:"https://github.com/expo/expo/tree/sdk-40/packages/expo-app-loading"},l=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"Usage"},{depth:2,type:"text",title:"API"},{depth:3,type:"text",title:"props"}],d={meta:c,headings:l};function b(e){var n=e.components,t=Object(o.a)(e,p);return Object(s.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"expo-app-loading"))," tells ",Object(s.b)("inlineCode",{parentName:"p"},"expo-splash-screen")," to keep the splash screen visible while the AppLoading component is mounted."),Object(s.b)("p",null,"This is useful to download and cache fonts, logos, icon images and other assets that you want to be sure the user has on their device for an optimal experience."),Object(s.b)(r.a,{android:!0,emulator:!0,ios:!0,simulator:!0,web:!0,mdxType:"PlatformsSection"}),Object(s.b)("h2",{id:"installation"},"Installation"),Object(s.b)(i.b,{packageName:"expo-app-loading",mdxType:"InstallSection"}),Object(s.b)("h2",{id:"usage"},"Usage"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react';\nimport { Image, Text, View } from 'react-native';\nimport { Asset } from 'expo-asset';\nimport AppLoading from 'expo-app-loading';\n\nexport default class App extends React.Component {\n  state = {\n    isReady: false,\n  };\n\n  render() {\n    if (!this.state.isReady) {\n      /* @info As long as AppLoading is the only leaf/native component that has been mounted, the loading screen will remain visible */\n      return (\n        <AppLoading\n          startAsync={this._cacheResourcesAsync}\n          onFinish={() => this.setState({ isReady: true })}\n          onError={console.warn}\n        />\n      ); /* @end */\n    }\n\n    return (\n      <View style={{ flex: 1 }}>\n        <Image source={require('./assets/snack-icon.png')} />\n      </View>\n    );\n  }\n\n  async _cacheResourcesAsync() {\n    const images = [require('./assets/snack-icon.png')];\n\n    /* @info Read more about <a href='../guides/preloading-and-caching-assets.html'>Preloading and Caching Assets</a> */\n    const cacheImages = images.map(image => {\n      return Asset.fromModule(image).downloadAsync();\n    }); /* @end */\n\n    return Promise.all(cacheImages);\n  }\n}\n")),Object(s.b)("h2",{id:"api"},"API"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"import AppLoading from 'expo-app-loading';\n")),Object(s.b)("h3",{id:"props"},"props"),Object(s.b)("p",null,"The following props are recommended, but optional. If you do not provide any props, you are responsible for coordinating loading assets, handling errors, and updating state to unmount the ",Object(s.b)("inlineCode",{parentName:"p"},"AppLoading")," component."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"startAsync (",Object(s.b)("em",{parentName:"strong"},"function"),")")," -- A ",Object(s.b)("inlineCode",{parentName:"li"},"function")," that returns a ",Object(s.b)("inlineCode",{parentName:"li"},"Promise"),", and the ",Object(s.b)("inlineCode",{parentName:"li"},"Promise")," should resolve when the app is done loading required data and assets."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"onError (",Object(s.b)("em",{parentName:"strong"},"function"),")")," -- If ",Object(s.b)("inlineCode",{parentName:"li"},"startAsync")," throws an error, it is caught and passed into the function provided to ",Object(s.b)("inlineCode",{parentName:"li"},"onError"),"."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"onFinish (",Object(s.b)("em",{parentName:"strong"},"function"),")")," -- ",Object(s.b)("strong",{parentName:"li"},"(Required if you provide ",Object(s.b)("inlineCode",{parentName:"strong"},"startAsync"),")"),". Called when ",Object(s.b)("inlineCode",{parentName:"li"},"startAsync")," resolves or rejects. This should be used to set state and unmount the ",Object(s.b)("inlineCode",{parentName:"li"},"AppLoading")," component."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"autoHideSplash (",Object(s.b)("em",{parentName:"strong"},"boolean"),")")," -- Whether to hide the native splash screen as soon as you unmount the AppLoading component. See ",Object(s.b)("a",{parentName:"li",href:"/versions/v40.0.0/sdk/splash-screen/"},"SplashScreen module")," for an example.")))}b.isMDXComponent=!0}},[["N4Qz",1,0,2,3,4,5,6]]]);