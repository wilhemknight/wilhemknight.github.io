_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[1024],{"00Qu":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v42.0.0/sdk/splash-screen",function(){return n("omS9")}])},omS9:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return c})),n.d(t,"headings",(function(){return h})),n.d(t,"default",(function(){return u}));var a=n("HALo"),s=n("dhJC"),o=(n("q1tI"),n("7ljp")),i=n("3Ukx"),p=n("HCau"),r=n("hykZ"),l=["components"],c={title:"SplashScreen",sourceCodeUrl:"https://github.com/expo/expo/tree/sdk-42/packages/expo-splash-screen"},h=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"Usage"},{depth:3,type:"text",title:"Animating the splash screen"},{depth:2,type:"text",title:"API"}],d={meta:c,headings:h};function u(e){var t=e.components,n=Object(s.a)(e,l);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"SplashScreen")," module tells the splash screen to remain visible until it has been explicitly told to hide. This is useful to do some work behind the scenes before displaying your app (eg: make API calls) and to animated your splash screen (eg: fade out or slide away, or switch from a static splash screen to an animated splash screen)."),Object(o.b)("p",null,"Read more about ",Object(o.b)("a",{parentName:"p",href:"/guides/splash-screens/"},"creating a splash screen image"),", or ",Object(o.b)("a",{parentName:"p",href:"https://buildicon.netlify.app/"},"quickly generate an icon and splash screen on the web")),Object(o.b)(r.a,{android:!0,emulator:!0,ios:!0,simulator:!0,mdxType:"PlatformsSection"}),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)(p.b,{packageName:"expo-splash-screen",mdxType:"InstallSection"}),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"This example shows how to keep the splash screen visible while loading app resources and then hide the splash screen when the app has rendered some initial content."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import React, { useCallback, useEffect, useState } from 'react';\nimport { StyleSheet, Text, View } from 'react-native';\nimport Entypo from '@expo/vector-icons';\nimport * as SplashScreen from 'expo-splash-screen';\nimport * as Font from 'expo-font';\n\nexport default function App() {\n  const [appIsReady, setAppIsReady] = useState(false);\n\n  useEffect(() => {\n    async function prepare() {\n      try {\n        // Keep the splash screen visible while we fetch resources\n        await SplashScreen.preventAutoHideAsync();\n        // Pre-load fonts, make any API calls you need to do here\n        await Font.loadAsync(Entypo.font);\n        // Artificially delay for two seconds to simulate a slow loading\n        // experience. Please remove this if you copy and paste the code!\n        await new Promise(resolve => setTimeout(resolve, 2000));\n      } catch (e) {\n        console.warn(e);\n      } finally {\n        // Tell the application to render\n        setAppIsReady(true);\n      }\n    }\n\n    prepare();\n  }, []);\n\n  const onLayoutRootView = useCallback(async () => {\n    if (appIsReady) {\n      // This tells the splash screen to hide immediately! If we call this after\n      // `setAppIsReady`, then we may see a blank screen while the app is\n      // loading its initial state and rendering its first pixels. So instead,\n      // we hide the splash screen once we know the root view has already\n      // performed layout.\n      await SplashScreen.hideAsync();\n    }\n  }, [appIsReady]);\n\n  if (!appIsReady) {\n    return null;\n  }\n\n  return (\n    <View\n      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}\n      onLayout={onLayoutRootView}>\n      <Text>SplashScreen Demo! \ud83d\udc4b</Text>\n      <Entypo name=\"rocket\" size={30} />\n    </View>\n  );\n}\n")),Object(o.b)("h3",{id:"animating-the-splash-screen"},"Animating the splash screen"),Object(o.b)("p",null,"Refer to the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/expo/examples/tree/master/with-splash-screen"},"with-splash-screen example")," to see how to apply any arbitrary animations to your splash screen, such as a fade out. You can initialize a new project from this example by running ",Object(o.b)("inlineCode",{parentName:"p"},"npx create-react-native-app -t with-splash-screen"),"."),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import * as SplashScreen from 'expo-splash-screen';\n")),Object(o.b)(i.a,{packageName:"expo-splash-screen",apiName:"SplashScreen",mdxType:"APISection"}))}u.isMDXComponent=!0}},[["00Qu",1,0,2,3,4,5,6,7,8,9,10,11,12,13,14]]]);