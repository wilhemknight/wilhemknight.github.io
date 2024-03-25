_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[1133],{bc07:function(e,t,o){"use strict";o.r(t),o.d(t,"meta",(function(){return b})),o.d(t,"headings",(function(){return d})),o.d(t,"default",(function(){return h}));var a=o("HALo"),n=o("dhJC"),i=(o("q1tI"),o("7ljp")),s=o("vFJ3"),r=(o("utVh"),o("3Ukx")),p=o("HCau"),c=o("hykZ"),l=["components"],b={title:"Facebook",sourceCodeUrl:"https://github.com/expo/expo/tree/sdk-43/packages/expo-facebook"},d=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"Registering your app with Facebook"},{depth:3,type:"text",title:"iOS standalone app"},{depth:3,type:"text",title:"Android standalone app"},{depth:2,type:"text",title:"Configuration in app.json / app.config.js"},{depth:2,type:"text",title:"Example"},{depth:2,type:"text",title:"API"},{depth:2,type:"text",title:"Error Codes"},{depth:3,type:"inlineCode",title:"ERR_FACEBOOK_UNINITIALIZED"},{depth:3,type:"inlineCode",title:"ERR_FACEBOOK_MISCONFIGURED"},{depth:3,type:"inlineCode",title:"ERR_FACEBOOK_LOGIN"},{depth:2,type:"text",title:"Guide"}],u={meta:b,headings:d};function h(e){var t=e.components,o=Object(n.a)(e,l);return Object(i.b)("wrapper",Object(a.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"expo-facebook"))," provides Facebook integration, such as logging in through Facebook, for React Native apps. Expo exposes a minimal native API since you can access Facebook's ",Object(i.b)("a",{parentName:"p",href:"https://developers.facebook.com/docs/graph-api"},"Graph API")," directly through HTTP (using ",Object(i.b)("a",{parentName:"p",href:"https://reactnative.dev/docs/network.html#fetch"},"fetch"),", for example)."),Object(i.b)(c.a,{android:!0,emulator:!0,ios:!0,simulator:!0,mdxType:"PlatformsSection"}),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)(p.b,{packageName:"expo-facebook",mdxType:"InstallSection"}),Object(i.b)("p",null,"For bare apps, here are links to the ",Object(i.b)("a",{parentName:"p",href:"https://developers.facebook.com/docs/ios/getting-started/#step-3---configure-your-project"},"iOS Installation Walkthrough")," and the ",Object(i.b)("a",{parentName:"p",href:"https://developers.facebook.com/docs/android/getting-started#app_id"},"Android Installation Walkthrough"),"."),Object(i.b)("h2",{id:"registering-your-app-with-facebook"},"Registering your app with Facebook"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\ud83d\udca1 When following these steps you will find on the Facebook Developer site that there are many fields and steps that you don't actually care about. Just look for the information that we ask you for and you will be OK!")),Object(i.b)("p",null,"Follow ",Object(i.b)("a",{parentName:"p",href:"https://developers.facebook.com/docs/apps/register"},"Facebook's developer documentation")," to register an application with Facebook's API and get an application ID. Take note of this application ID because it will be used as the ",Object(i.b)("inlineCode",{parentName:"p"},"appId")," option in your ",Object(i.b)("a",{parentName:"p",href:"/versions/v43.0.0/sdk/facebook/#expofacebookloginwithreadpermissionsasync",title:"Facebook.logInWithReadPermissionsAsync"},Object(i.b)("inlineCode",{parentName:"a"},"Facebook.logInWithReadPermissionsAsync"))," call."),Object(i.b)("p",null,"Then follow these steps based on the platforms you're targeting. This will need to be done from the ",Object(i.b)("a",{parentName:"p",href:"https://developers.facebook.com/"},"Facebook developer site"),"."),Object(i.b)("p",null,"Expo Go from the Android Play Store will use the Facebook App ID that you provide, however, all Facebook API calls in the ",Object(i.b)("strong",{parentName:"p"},"Expo Go from the iOS App Store will use Expo's own Facebook App ID"),". This is due to underlying configuration limitations, but the good news is it means less setup for you! The downside to this is that you can't customize which permissions your app requests from Facebook (like ",Object(i.b)("inlineCode",{parentName:"p"},"user_photos")," or ",Object(i.b)("inlineCode",{parentName:"p"},"user_friends"),"), or integrate Facebook login with other services like Firebase auth. If you need that functionality on iOS, you can build a standalone app. An easy way to test this is to ",Object(i.b)("a",{parentName:"p",href:"/../../../../../../build-reference/simulators/"},"run a simulator build")," and install the app in your simulator, or use ",Object(i.b)("a",{parentName:"p",href:"/../../../../../../development/introduction/"},"expo-dev-client"),"."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You may have to switch the app from 'development mode' to 'public mode' on the Facebook developer page before other users can log in. This requires adding a privacy policy URL, which can be as simple as a GitHub Gist.")),Object(i.b)("h3",{id:"ios-standalone-app"},"iOS standalone app"),Object(i.b)("p",null,"Add your app's Bundle ID as a ",Object(i.b)("em",{parentName:"p"},"Bundle ID")," in the app settings page pictured below. An easy way to test that this is set up correctly is to ",Object(i.b)("a",{parentName:"p",href:"/../../../../../../build-reference/simulators/"},"run a simulator build"),"."),Object(i.b)("div",{style:{marginTop:-10}}),Object(i.b)("details",null,Object(i.b)("summary",null,Object(i.b)("strong",null,"Screenshot of the Facebook developer page"))," ",Object(i.b)("p",null,Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"/static/images/facebook-app-settings.png",alt:null})))),Object(i.b)("h3",{id:"android-standalone-app"},"Android standalone app"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/distribution/building-standalone-apps/#building-standalone-apps"},"Build your standalone app")," for Android."),Object(i.b)("li",{parentName:"ul"},"Run ",Object(i.b)("inlineCode",{parentName:"li"},"eas credentials"),", select the profile that you would like to generate the SHA-1 Fingerprint for, and press return."),Object(i.b)("li",{parentName:"ul"},"Take the resulting SHA1 Fingerprint and convert it to base64 (for example, ",Object(i.b)("a",{parentName:"li",href:"https://base64.guru/converter/encode/hex"},"using base64.guru"),'). The resulting base64 string is your "Facebook Key Hash".'),Object(i.b)("li",{parentName:"ul"},"Configure the Facebook Key Hash on the Facebook developer page pictured below.")),Object(i.b)("div",{style:{marginTop:-10}}),Object(i.b)("details",null,Object(i.b)("summary",null,Object(i.b)("strong",null,"Screenshot of the Facebook developer page"))," ",Object(i.b)("p",null,Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"/static/images/facebook-app-settings.png",alt:null})))),Object(i.b)("h2",{id:"configuration-in-appjson--appconfigjs"},"Configuration in app.json / app.config.js"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Add the field ",Object(i.b)("inlineCode",{parentName:"li"},"facebookScheme")," with your Facebook login redirect URL scheme found ",Object(i.b)("a",{parentName:"li",href:"https://developers.facebook.com/docs/facebook-login/ios"},"on the Facebook Developer website"),' under "',Object(i.b)("em",{parentName:"li"},"4. Configure Your info.plist"),'." It should look like ',Object(i.b)("inlineCode",{parentName:"li"},'"fb123456"'),". If you do not do this, Facebook will not be able to redirect to your app after logging in."),Object(i.b)("li",{parentName:"ul"},"Add the fields ",Object(i.b)("inlineCode",{parentName:"li"},"facebookAppId")," and ",Object(i.b)("inlineCode",{parentName:"li"},"facebookDisplayName"),", using your ",Object(i.b)("a",{parentName:"li",href:"https://developers.facebook.com/docs/facebook-login/ios"},"Facebook App ID and Facebook Display Name"),", respectively."),Object(i.b)("li",{parentName:"ul"},"Optionally, add the following fields:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"facebookAutoLogAppEventsEnabled"),", defaults to Facebook's default policy (Only applies to standalone apps)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"facebookAdvertiserIDCollectionEnabled"),", defaults to Facebook's default policy (Only applies to standalone apps)")))),Object(i.b)("p",null,"You can also configure ",Object(i.b)("inlineCode",{parentName:"p"},"expo-facebook")," using its built-in ",Object(i.b)("a",{parentName:"p",href:"/guides/config-plugins/"},"config plugin")," if you use config plugins in your project (",Object(i.b)("a",{parentName:"p",href:"/build/introduction/"},"EAS Build")," or ",Object(i.b)("inlineCode",{parentName:"p"},"expo run:[android|ios]"),"). The plugin allows you to configure various properties that cannot be set at runtime and require building a new app binary to take effect."),Object(i.b)(s.a,{mdxType:"ConfigClassic"},Object(i.b)("p",null,"You can configure ",Object(i.b)("a",{parentName:"p",href:"/versions/v43.0.0/sdk/facebook/#permissions"},"the permissions for this library")," using ",Object(i.b)("a",{parentName:"p",href:"/versions/v43.0.0/config/app/#infoplist"},Object(i.b)("inlineCode",{parentName:"a"},"ios.infoPlist"))," and ",Object(i.b)("a",{parentName:"p",href:"/versions/v43.0.0/config/app/#permissions"},Object(i.b)("inlineCode",{parentName:"a"},"android.permissions")),".")),Object(i.b)(s.d,{mdxType:"ConfigReactNative"},Object(i.b)("p",null,"Learn how to configure the native projects in the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/expo/expo/tree/main/packages/expo-facebook#installation-in-bare-react-native-projects"},"installation instructions in the ",Object(i.b)("inlineCode",{parentName:"a"},"expo-facebook")," repository"),".")),Object(i.b)(s.b,{mdxType:"ConfigPluginExample"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "expo": {\n    "plugins": [\n      [\n        "expo-facebook",\n        {\n          "userTrackingPermission": false\n        }\n      ]\n    ]\n  }\n}\n'))),Object(i.b)(s.c,{properties:[{name:"userTrackingPermission",platform:"ios",description:"A string to set the NSUserTrackingUsageDescription permission message, or set to the boolean value false to omit the field entirely.",default:'"This identifier will be used to deliver personalized ads to you."'}],mdxType:"ConfigPluginProperties"}),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"async function logIn() {\n  try {\n    await Facebook.initializeAsync({\n      appId: '<APP_ID>',\n    });\n    const { type, token, expirationDate, permissions, declinedPermissions } =\n      await Facebook.logInWithReadPermissionsAsync({\n        permissions: ['public_profile'],\n      });\n    if (type === 'success') {\n      // Get the user's name using Facebook's Graph API\n      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);\n      Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);\n    } else {\n      // type === 'cancel'\n    }\n  } catch ({ message }) {\n    alert(`Facebook Login Error: ${message}`);\n  }\n}\n")),Object(i.b)("h2",{id:"api"},"API"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import * as Facebook from 'expo-facebook';\n")),Object(i.b)(r.a,{packageName:"expo-facebook",mdxType:"APISection"}),Object(i.b)("h2",{id:"error-codes"},"Error Codes"),Object(i.b)("h3",{id:"err_facebook_uninitialized"},Object(i.b)("inlineCode",{parentName:"h3"},"ERR_FACEBOOK_UNINITIALIZED")),Object(i.b)("p",null,"Attempted to use the Facebook SDK before it was initialized. Ensure ",Object(i.b)("inlineCode",{parentName:"p"},"initializeAsync")," has successfully resolved before attempting to use the Facebook SDK."),Object(i.b)("h3",{id:"err_facebook_misconfigured"},Object(i.b)("inlineCode",{parentName:"h3"},"ERR_FACEBOOK_MISCONFIGURED")),Object(i.b)("p",null,"Failed to initialize the Facebook SDK app because the ",Object(i.b)("inlineCode",{parentName:"p"},"appId")," option wasn't provided and the ",Object(i.b)("inlineCode",{parentName:"p"},"appId")," couldn't be resolved automatically from the native configuration files."),Object(i.b)("h3",{id:"err_facebook_login"},Object(i.b)("inlineCode",{parentName:"h3"},"ERR_FACEBOOK_LOGIN")),Object(i.b)("p",null,"An error occurred while trying to log in to Facebook."),Object(i.b)("h2",{id:"guide"},"Guide"),Object(i.b)("p",null,"You can use the ",Object(i.b)("inlineCode",{parentName:"p"},"fetch")," API to get info about the user from the ",Object(i.b)("a",{parentName:"p",href:"https://developers.facebook.com/docs/graph-api/using-graph-api/"},"Facebook Graph API"),". Here are some helper methods you can use to make data access easier."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"// Get default info about the currently authenticated user.\nasync function getUserAsync() {\n  const { name } = await requestAsync('me');\n  console.log(`Hello ${name} \ud83d\udc4b`);\n}\n\n// Request data from the Facebook Graph API.\n// Learn more https://developers.facebook.com/docs/graph-api/using-graph-api/\nasync function requestAsync(path: string, token?: string): Promise<any> {\n  let resolvedToken = token;\n  if (!token) {\n    const auth = await Facebook.getAuthenticationCredentialAsync();\n    if (!auth) {\n      throw new Error(\n        'User is not authenticated. Ensure `logInWithReadPermissionsAsync` has successfully resolved before attempting to use the FBSDK Graph API.'\n      );\n    }\n    resolvedToken = auth.token;\n  }\n  const response = await fetch(\n    `https://graph.facebook.com/${path}?access_token=${encodeURIComponent(resolvedToken)}`\n  );\n  const body = await response.json();\n  return body;\n}\n")))}h.isMDXComponent=!0},etCM:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v43.0.0/sdk/facebook",function(){return o("bc07")}])}},[["etCM",1,0,2,3,4,5,6,7,8,9,10,11,12,13,14,16]]]);