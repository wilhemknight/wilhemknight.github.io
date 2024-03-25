_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[197],{"+dVY":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return c})),n.d(t,"headings",(function(){return u})),n.d(t,"default",(function(){return l}));var o=n("HALo"),i=n("dhJC"),a=(n("q1tI"),n("7ljp")),s=n("zokH"),r=["components"],c={title:"Push Notifications Setup",sidebar_title:"Setup"},u=[{depth:2,type:"text",title:"Credentials"},{depth:2,type:"text",title:"Next steps"},{depth:2,type:"text",title:"See also"}],p={meta:c,headings:u};function l(e){var t=e.components,n=Object(i.a)(e,r);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"To get the client-side ready for push notifications, the 2 main things we need are:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The user's permission to send them push notifications"),Object(a.b)("li",{parentName:"ul"},"The user's ExpoPushToken- if push notifications are mail, then the ExpoPushToken is the user's address.")),Object(a.b)("p",null,"We can easily grab both of these using the ",Object(a.b)("inlineCode",{parentName:"p"},"expo-notifications")," library. For permissions, use ",Object(a.b)("a",{parentName:"p",href:"/versions/latest/sdk/notifications/#requestpermissionsasyncrequest-notificationpermissionsrequest-promisenotificationpermissionsstatus"},Object(a.b)("inlineCode",{parentName:"a"},"requestPermissionsAsync")),", and for the ExpoPushToken, use ",Object(a.b)("a",{parentName:"p",href:"/versions/latest/sdk/notifications/#getexpopushtokenasyncoptions-expotokenoptions-expopushtoken"},Object(a.b)("inlineCode",{parentName:"a"},"getExpoPushTokenAsync")),"."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: in the managed workflow, you don't need to pass any additional options to ",Object(a.b)("inlineCode",{parentName:"p"},"getExpoPushTokenAsync"),". In the bare workflow, you'll need to pass your ",Object(a.b)("inlineCode",{parentName:"p"},"experienceId"),". Make sure you read the documentation for more information.")),Object(a.b)("p",null,"The following method takes care of all this for you, so feel free to copy/paste it."),Object(a.b)(s.b,{mdxType:"Tabs"},Object(a.b)(s.a,{label:"New notifications",mdxType:"Tab"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"registerForPushNotificationsAsync = async () => {\n  /* @info We should also make sure the app is running on a physical device, since push notifications won't work on a simulator. */\n  if (Device.isDevice) {\n    /* @end */\n    const { status: existingStatus } = await Notifications.getPermissionsAsync();\n    let finalStatus = existingStatus;\n    if (existingStatus !== 'granted') {\n      const { status } = await Notifications.requestPermissionsAsync();\n      finalStatus = status;\n    }\n    if (finalStatus !== 'granted') {\n      alert('Failed to get push token for push notification!');\n      return;\n    }\n    /* @info Alright, we got our token! */\n    const token = (await Notifications.getExpoPushTokenAsync()).data;\n    /* @end */\n    console.log(token);\n    this.setState({ expoPushToken: token });\n  } else {\n    alert('Must use physical device for Push Notifications');\n  }\n\n  /* @info On Android, we need to specify a channel. Find out more specifics in the expo-notifications documentation. */\n  if (Platform.OS === 'android') {\n    Notifications.setNotificationChannelAsync('default', {\n      name: 'default',\n      importance: Notifications.AndroidImportance.MAX,\n      vibrationPattern: [0, 250, 250, 250],\n      lightColor: '#FF231F7C',\n    });\n  }\n  /* @end */\n};\n"))),Object(a.b)(s.a,{label:"Legacy notifications",mdxType:"Tab"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"registerForPushNotificationsAsync = async () => {\n  /* @info We should also make sure the app is running on a physical device, since push notifications won't work on a simulator. */\n  if (Device.isDevice) {\n    /* @end */\n    const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);\n    let finalStatus = existingStatus;\n    if (existingStatus !== 'granted') {\n      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);\n      finalStatus = status;\n    }\n    if (finalStatus !== 'granted') {\n      alert('Failed to get push token for push notification!');\n      return;\n    }\n    /* @info Alright, we got our token! */\n    const token = await Notifications.getExpoPushTokenAsync();\n    /* @end */\n    console.log(token);\n    this.setState({ expoPushToken: token });\n  } else {\n    alert('Must use physical device for Push Notifications');\n  }\n\n  /* @info On Android, we need to specify a channel. Find out more specifics in the expo-notifications documentation. */\n  if (Platform.OS === 'android') {\n    Notifications.createChannelAndroidAsync('default', {\n      name: 'default',\n      sound: true,\n      priority: 'max',\n      vibrate: [0, 250, 250, 250],\n    });\n  }\n  /* @end */\n};\n")))),Object(a.b)("h2",{id:"credentials"},"Credentials"),Object(a.b)("p",null,"If you're using the bare workflow, or building a standalone app with ",Object(a.b)("inlineCode",{parentName:"p"},"expo build:ios")," or ",Object(a.b)("inlineCode",{parentName:"p"},"expo build:android"),", you'll also need to configure the necessary push credentials."),Object(a.b)("p",null,"For Android, both managed and bare workflow users need to follow our ",Object(a.b)("a",{parentName:"p",href:"/push-notifications/using-fcm/"},"FCM setup guide"),", it should only take about 5 minutes."),Object(a.b)("p",null,"For iOS, the Classic ",Object(a.b)("inlineCode",{parentName:"p"},"expo build")," service takes care of push notification credentials automatically when you run ",Object(a.b)("inlineCode",{parentName:"p"},"expo build:ios"),". But when using ",Object(a.b)("a",{parentName:"p",href:"/../../../../../../build/introduction/"},"EAS Build")," or the bare workflow, you'll need to use the ",Object(a.b)("inlineCode",{parentName:"p"},"expo credentials:manager")," command to upload your push notification credentials to Expo's servers. You can find more detailed instructions ",Object(a.b)("a",{parentName:"p",href:"/../../../../../../app-signing/managed-credentials/#ios"},"here"),"."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: A paid Apple Developer Account is ",Object(a.b)("strong",{parentName:"p"},"required")," to generate credentials.")),Object(a.b)("h2",{id:"next-steps"},"Next steps"),Object(a.b)("p",null,"Try out ",Object(a.b)("a",{parentName:"p",href:"/push-notifications/sending-notifications/"},"sending a notification with Expo"),"!"),Object(a.b)("h2",{id:"see-also"},"See also"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Having trouble? Visit ",Object(a.b)("a",{parentName:"li",href:"/push-notifications/faq/"},"Expo's notification FAQ page"))))}l.isMDXComponent=!0},"2xpV":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/push-notifications/push-notifications-setup",function(){return n("+dVY")}])},"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var o=n("q1tI"),i=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),p=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"===typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=p(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(n),f=o,b=l["".concat(s,".").concat(f)]||l[f]||d[f]||a;return n?i.a.createElement(b,r(r({ref:t},u),{},{components:n})):i.a.createElement(b,r({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"===typeof e||o){var a=n.length,s=new Array(a);s[0]=f;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"===typeof e?e:o,s[1]=r;for(var u=2;u<a;u++)s[u]=n[u];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}},[["2xpV",1,0,2,3,23]]]);