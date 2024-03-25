_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[195],{"7cWm":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/push-notifications/faq",function(){return n("y/kV")}])},"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var o=n("q1tI"),i=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"===typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,b=u["".concat(r,".").concat(d)]||u[d]||h[d]||a;return n?i.a.createElement(b,s(s({ref:t},p),{},{components:n})):i.a.createElement(b,s({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"===typeof e||o){var a=n.length,r=new Array(a);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"===typeof e?e:o,r[1]=s;for(var p=2;p<a;p++)r[p]=n[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},HALo:function(e,t,n){"use strict";function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return o}))},Qetd:function(e,t,n){"use strict";var o=Object.assign.bind(Object);e.exports=o,e.exports.default=e.exports},dhJC:function(e,t,n){"use strict";function o(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}n.d(t,"a",(function(){return o}))},"y/kV":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return s})),n.d(t,"headings",(function(){return c})),n.d(t,"default",(function(){return l}));var o=n("HALo"),i=n("dhJC"),a=(n("q1tI"),n("7ljp")),r=["components"],s={title:"Push Notifications Troubleshooting & FAQ",sidebar_title:"Troubleshooting and FAQ"},c=[{depth:3,type:"text",title:"How much does Expo's push notification service cost?"},{depth:3,type:"text",title:"How many notifications can I send through Expo?"},{depth:3,type:"text",title:"How do I set up push notifications?"},{depth:3,type:"text",title:"Do I have to use Expo's push notification service?"},{depth:3,type:"text",title:"My push notifications aren't working"},{depth:3,type:"inlineCode",title:"How often does the  ExpoPushToken  change?"},{depth:3,type:"text",title:"Push notifications work in development, but not after I build the app"},{depth:3,type:"emphasis",title:"Push notifications    stop coming through on Android"},{depth:3,type:"text",title:"Does Expo store the contents of push notifications?"},{depth:3,type:"text",title:"Does Expo read or share the contents of push notifications?"},{depth:3,type:"text",title:"How does Expo encrypt connections to push notification services, like Apple's and Google's?"},{depth:3,type:"text",title:"How do I handle expired push notification credentials?"},{depth:3,type:"text",title:"What delivery guarantees are there for push notifications?"},{depth:3,type:"text",title:"My notification icon on Android is a grey or white square"},{depth:3,type:"text",title:"I'm getting back an error message when I send a notification"},{depth:3,type:"text",title:"I want to play a custom sound when I send a notification"}],p={meta:s,headings:c};function l(e){var t=e.components,n=Object(i.a)(e,r);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This is a collection of FAQs and common issues when setting up push notifications with Expo. This document covers the ",Object(a.b)("inlineCode",{parentName:"p"},"expo-notifications")," client-side library, as well as Expo's push notification service."),Object(a.b)("h3",{id:"how-much-does-expos-push-notification-service-cost"},"How much does Expo's push notification service cost?"),Object(a.b)("p",null,"There is no cost associated with sending notifications through Expo's classic push notification service. EAS Notify, an upcoming iteration of Expo's push notification service, will be a part of EAS's pricing plans."),Object(a.b)("h3",{id:"how-many-notifications-can-i-send-through-expo"},"How many notifications can I send through Expo?"),Object(a.b)("p",null,"We don't impose any limit on the number of push notifications you can send. For best results, we do recommend you add throttling (handled automatically in the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/expo/expo-server-sdk-node"},Object(a.b)("inlineCode",{parentName:"a"},"expo-server-sdk-node")),") and retry logic to your server."),Object(a.b)("p",null,"Total notifications is much less important than your maximum notification throughput\u2014how many notifications you send per second at peak. If this number is more than a couple hundred, reach out to us because we'd love to hear about what you're working on!"),Object(a.b)("h3",{id:"how-do-i-set-up-push-notifications"},"How do I set up push notifications?"),Object(a.b)("p",null,"You should read ",Object(a.b)("strong",{parentName:"p"},"all")," the relevant guides (this won't take longer than 10 minutes):"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/../../../../../../push-notifications/push-notifications-setup/"},"Initial Setup"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/../../../../../../push-notifications/using-fcm/"},"Android-specific setup")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/../../../../../../push-notifications/receiving-notifications/"},"Receiving notifications in your app")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/../../../../../../push-notifications/sending-notifications/"},"Sending notifications")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/../../../../../../versions/latest/sdk/notifications/"},Object(a.b)("inlineCode",{parentName:"a"},"expo-notifications")," client-side library documentation"))),Object(a.b)("h3",{id:"do-i-have-to-use-expos-push-notification-service"},"Do I have to use Expo's push notification service?"),Object(a.b)("p",null,"No, you can use any push notification service for both managed and bare workflow apps. The ",Object(a.b)("a",{parentName:"p",href:"/../../../../../../versions/v40.0.0/sdk/notifications/#getdevicepushtokenasync-devicepushtoken"},Object(a.b)("inlineCode",{parentName:"a"},"getDevicePushTokenAsync")," method from ",Object(a.b)("inlineCode",{parentName:"a"},"expo-notifications"))," allows you to get the native device push token, which you can then use with other services, or even ",Object(a.b)("a",{parentName:"p",href:"/../../../../../../push-notifications/sending-notifications-custom/"},"send your notifications through APNs and FCM directly"),"."),Object(a.b)("p",null,"That being said, we think sending notifications through Expo is the fastest and easiest way to do it, and millions of notifications are sent through Expo every day."),Object(a.b)("h3",{id:"my-push-notifications-arent-working"},"My push notifications aren't working"),Object(a.b)("p",null,"Push notifications have a lot of moving parts, so this can be due to a wide variety of reasons. To narrow things down, check the ",Object(a.b)("a",{parentName:"p",href:"/../../../../../../push-notifications/sending-notifications/#push-tickets"},"push ticket")," and ",Object(a.b)("a",{parentName:"p",href:"/../../../../../../push-notifications/sending-notifications/#push-receipts"},"push receipt")," for error messages. This information (and maybe a little bit of Googling) will help narrow down the problem so that you can solve it."),Object(a.b)("p",null,"You can also narrow things even further by testing ",Object(a.b)("a",{parentName:"p",href:"/../../../../../../versions/v40.0.0/sdk/notifications/#schedulenotificationasyncnotificationrequest-notificationrequestinput-promisestring"},"local notifications")," in your app. This will ensure all of your client-side logic is correct, and narrow things down to the server side or app credentials."),Object(a.b)("details",null,Object(a.b)("summary",null,Object(a.b)("h4",null,"See here for some quick terminal commands you can use to get the push receipt.")),Object(a.b)("p",null,"1. Send a notification:",Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},'curl -H "Content-Type: application/json" -X POST "https://exp.host/--/api/v2/push/send" -d \'{\n  "to": "ExponentPushToken[xxxxxxxxxxxxxxxxxxxxxx]",\n  "title":"hello",\n  "body": "world"\n}\'\n')),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Use the resulting ticket ",Object(a.b)("inlineCode",{parentName:"li"},"id")," to request the push receipt:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},'curl -H "Content-Type: application/json" -X POST "https://exp.host/--/api/v2/push/getReceipts" -d \'{\n  "ids": [\n    "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"\n  ]\n}\'\n')))),Object(a.b)("h3",{id:"how-often-does-the-expopushtoken-change"},"How often does the ",Object(a.b)("inlineCode",{parentName:"h3"},"ExpoPushToken")," change?"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"ExpoPushToken")," will remain the same across app upgrades, and ",Object(a.b)("inlineCode",{parentName:"p"},"eject"),"ing to the bare workflow. On iOS, it will also remain the same even after uninstalling the app and reinstalling (on Android, this results in the push token changing). It will also change if you change your ",Object(a.b)("a",{parentName:"p",href:"/../../../../../../versions/latest/sdk/application/#applicationapplicationid"},Object(a.b)("inlineCode",{parentName:"a"},"applicationId"))," or ",Object(a.b)("inlineCode",{parentName:"p"},"experienceId")," (usually ",Object(a.b)("inlineCode",{parentName:"p"},"@expoUsername/projectSlug"),")."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"ExpoPushToken"),' will never "expire" but if one of your users uninstalls the app, you\'ll receive a ',Object(a.b)("inlineCode",{parentName:"p"},"DeviceNotRegistered")," error back from Expo's servers, meaning you should stop sending notifications to this app."),Object(a.b)("h3",{id:"push-notifications-work-in-development-but-not-after-i-build-the-app"},"Push notifications work in development, but not after I build the app"),Object(a.b)("p",null,"This strongly indicates that you have either misconfigured your credentials, or didn't configure them at all. In the Expo Go app, you rely on Expo's credentials so that you don't need to worry about it, and setup is as easy as possible. But when you build your own app for the stores, you need to use your own credentials. On iOS, this is handled via your ",Object(a.b)("a",{parentName:"p",href:"/../../../../../../app-signing/app-credentials/#push-notification-keys"},"push key")," (revoking the push key associated with your app ",Object(a.b)("strong",{parentName:"p"},"will result in your notifications failing to be delivered"),". To fix that, add a new push key with ",Object(a.b)("inlineCode",{parentName:"p"},"expo credentials:manager"),"). On Android, all you need to do is follow ",Object(a.b)("a",{parentName:"p",href:"/../../../../../../push-notifications/using-fcm/"},"this guide"),". ",Object(a.b)("strong",{parentName:"p"},"Please note")," that after setting up Android FCM credentials, you will need to rebuild your app."),Object(a.b)("p",null,"Expo abstracts the majority of credential management away so that you can focus on building your app, but if you want to understand it on a deeper level, read our ",Object(a.b)("a",{parentName:"p",href:"/../../../../../../app-signing/app-credentials/"},"guide to app signing"),"."),Object(a.b)("h3",{id:"push-notifications-occasionally-stop-coming-through-on-android"},"Push notifications ",Object(a.b)("em",{parentName:"h3"},"occasionally")," stop coming through on Android"),Object(a.b)("p",null,"This is likely due to the ",Object(a.b)("inlineCode",{parentName:"p"},"priority")," level of the notifications you're sending. You can learn more about Android priority ",Object(a.b)("a",{parentName:"p",href:"https://firebase.google.com/docs/cloud-messaging/http-server-ref#downstream-http-messages-json"},"here"),", but as for how it relates to Expo- ",Object(a.b)("a",{parentName:"p",href:"/../../../../../../push-notifications/sending-notifications/#message-request-format"},"Expo accepts four priorities"),":"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"default"),": manually mapped to the default priority documented by Apple and Google"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"high"),": mapped to the high priority level documented by Apple and Google"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"normal"),": mapped to the normal priority level documented by Apple and Google"),Object(a.b)("li",{parentName:"ul"},"(priority omitted): treated exactly as if ",Object(a.b)("inlineCode",{parentName:"li"},"default")," were specified")),Object(a.b)("p",null,"And setting the priority to ",Object(a.b)("inlineCode",{parentName:"p"},"high")," gives your notification the greatest likelihood that the Android OS will display the notification."),Object(a.b)("h3",{id:"does-expo-store-the-contents-of-push-notifications"},"Does Expo store the contents of push notifications?"),Object(a.b)("p",null,"Expo does not store the contents of push notifications any longer than it takes to deliver the notifications to the push notification services operated by Apple, Google, etc... Push notifications are stored only in memory and in message queues and ",Object(a.b)("strong",{parentName:"p"},"not")," stored in databases."),Object(a.b)("h3",{id:"does-expo-read-or-share-the-contents-of-push-notifications"},"Does Expo read or share the contents of push notifications?"),Object(a.b)("p",null,"Expo does not read or share the contents of push notifications and our services keep push notifications only as long as needed to deliver them to push notification services run by Apple and Google. If the Expo team is actively debugging the push notifications service, we may see notification contents (ex: at a breakpoint) but Expo cannot see push notification contents otherwise."),Object(a.b)("h3",{id:"how-does-expo-encrypt-connections-to-push-notification-services-like-apples-and-googles"},"How does Expo encrypt connections to push notification services, like Apple's and Google's?"),Object(a.b)("p",null,"Expo's connections to Apple and Google are encrypted and use HTTPS."),Object(a.b)("h3",{id:"how-do-i-handle-expired-push-notification-credentials"},"How do I handle expired push notification credentials?"),Object(a.b)("p",null,"When your push notification credentials have expired, run ",Object(a.b)("inlineCode",{parentName:"p"},"expo credentials:manager -p ios"),' which will provide a list of actions to choose from. Select the removal of your expired credentials and then select "Add new Push Notifications Key".'),Object(a.b)("h3",{id:"what-delivery-guarantees-are-there-for-push-notifications"},"What delivery guarantees are there for push notifications?"),Object(a.b)("p",null,"Expo makes a best effort to deliver notifications to the push notification services operated by Apple and Google. Expo's infrastructure is designed for at-least-once delivery to the underlying push notification services; it is more likely for a notification to be delivered to Apple or Google more than once rather than not at all, though both are uncommon but possible."),Object(a.b)("p",null,'After a notification has been handed off to an underlying push notification service, Expo creates a "push receipt" that records whether the handoff was successful; a push receipt denotes whether the underlying push notification service received the notification.'),Object(a.b)("p",null,"Finally, the push notification services from Apple, Google, etc... make a best effort to deliver the notification to the device according to their own policies."),Object(a.b)("h3",{id:"my-notification-icon-on-android-is-a-grey-or-white-square"},"My notification icon on Android is a grey or white square"),Object(a.b)("p",null,"This indicates an issue with the image asset you're providing. The image should be all white with a transparent background (this is required and enforced by Google, not Expo). ",Object(a.b)("a",{parentName:"p",href:"https://clevertap.com/blog/fixing-notification-icon-for-android-lollipop-and-above/"},"See here for more information"),"."),Object(a.b)("h3",{id:"im-getting-back-an-error-message-when-i-send-a-notification"},"I'm getting back an error message when I send a notification"),Object(a.b)("p",null,"Check the ",Object(a.b)("inlineCode",{parentName:"p"},"details")," property of the returned push ticket or receipt for more information which you can use to debug further. ",Object(a.b)("a",{parentName:"p",href:"/../../../../../../push-notifications/sending-notifications/#errors"},"Read here for common error code responses and their associated solutions"),"."),Object(a.b)("h3",{id:"i-want-to-play-a-custom-sound-when-i-send-a-notification"},"I want to play a custom sound when I send a notification"),Object(a.b)("p",null,"The Expo push notification service currently doesn't support custom sounds. You will need to use APNs and FCM directly with the native device tokens received from ",Object(a.b)("inlineCode",{parentName:"p"},"expo-notifications")," in standalone apps."))}l.isMDXComponent=!0}},[["7cWm",1,0]]]);