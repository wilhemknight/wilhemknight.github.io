_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[695],{HxkW:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v40.0.0/sdk/screen-orientation",function(){return n("h31M")}])},KiYJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var i=n("cpVT"),r=n("3zh3"),a=(n("q1tI"),n("AeFk"));function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e){var t=e.alt,n=e.src,i=e.style,o=e.containerStyle;return Object(a.c)("div",{style:c({textAlign:"center",backgroundColor:r.theme.background.secondary,paddingTop:10,paddingBottom:10,marginTop:20,marginBottom:20},o)},Object(a.c)("img",{src:n,alt:t,style:i}))}},cpVT:function(e,t,n){"use strict";function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return i}))},h31M:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return s})),n.d(t,"headings",(function(){return O})),n.d(t,"default",(function(){return m}));var i=n("HALo"),r=n("dhJC"),a=(n("q1tI"),n("7ljp")),o=n("3zh3"),c=n("KiYJ"),b=n("HCau"),l=n("hykZ"),p=["components"],s={title:"ScreenOrientation",sourceCodeUrl:"https://github.com/expo/expo/tree/sdk-40/packages/expo-screen-orientation"},O=[{depth:2,type:"text",title:"Installation"},{depth:3,type:"text",title:"Warning"},{depth:4,type:"text",title:"Managed workflow"},{depth:4,type:"text",title:"Bare workflow"},{depth:2,type:"text",title:"API"},{depth:2,type:"text",title:"Methods"},{depth:3,type:"inlineCode",title:"ScreenOrientation.lockAsync(orientationLock)"},{depth:4,type:"text",title:"Arguments"},{depth:4,type:"text",title:"Returns"},{depth:4,type:"text",title:"Error Codes"},{depth:4,type:"text",title:"Example"},{depth:3,type:"inlineCode",title:"ScreenOrientation.lockPlatformAsync(platformInfo)"},{depth:4,type:"text",title:"Arguments"},{depth:4,type:"text",title:"Returns"},{depth:4,type:"text",title:"Error Codes"},{depth:3,type:"inlineCode",title:"ScreenOrientation.unlockAsync()"},{depth:4,type:"text",title:"Error Codes"},{depth:4,type:"text",title:"Returns"},{depth:3,type:"inlineCode",title:"ScreenOrientation.getOrientationAsync()"},{depth:4,type:"text",title:"Returns"},{depth:4,type:"text",title:"Error Codes"},{depth:3,type:"inlineCode",title:"ScreenOrientation.getOrientationLockAsync()"},{depth:4,type:"text",title:"Returns"},{depth:4,type:"text",title:"Error Codes"},{depth:3,type:"inlineCode",title:"ScreenOrientation.getPlatformOrientationLockAsync()"},{depth:4,type:"text",title:"Returns"},{depth:4,type:"text",title:"Error Codes"},{depth:3,type:"inlineCode",title:"ScreenOrientation.supportsOrientationLockAsync(orientationLock)"},{depth:4,type:"text",title:"Returns"},{depth:3,type:"inlineCode",title:"ScreenOrientation.addOrientationChangeListener(listener)"},{depth:4,type:"text",title:"Arguments"},{depth:4,type:"text",title:"Returns"},{depth:3,type:"inlineCode",title:"ScreenOrientation.removeOrientationChangeListeners()"},{depth:3,type:"inlineCode",title:"ScreenOrientation.removeOrientationChangeListener(subscription)"},{depth:4,type:"text",title:"Arguments"},{depth:2,type:"text",title:"Enum types"},{depth:3,type:"inlineCode",title:"ScreenOrientation.Orientation"},{depth:3,type:"inlineCode",title:"ScreenOrientation.OrientationLock"},{depth:3,type:"inlineCode",title:"ScreenOrientation.SizeClassIOS"},{depth:3,type:"inlineCode",title:"ScreenOrientation.WebOrientationLock"},{depth:2,type:"text",title:"Object Types"},{depth:3,type:"inlineCode",title:"ScreenOrientation.PlatformOrientationInfo"},{depth:3,type:"inlineCode",title:"ScreenOrientation.ScreenOrientationInfo"},{depth:3,type:"inlineCode",title:"ScreenOrientation.OrientationChangeEvent"},{depth:3,type:"inlineCode",title:"Subscription"},{depth:2,type:"text",title:"Function Types"},{depth:3,type:"inlineCode",title:"ScreenOrientation.OrientationChangeListener"},{depth:4,type:"text",title:"Args"},{depth:4,type:"text",title:"Returns"},{depth:2,type:"text",title:"Error Codes"}],d={meta:s,headings:O};function m(e){var t=e.components,n=Object(r.a)(e,p);return Object(a.b)("wrapper",Object(i.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Screen Orientation is defined as the orientation in which graphics are painted on the device. For example, the figure below has a device in a vertical and horizontal physical orientation, but a portrait screen orientation. For physical device orientation, see the orientation section of ",Object(a.b)("a",{parentName:"p",href:"/versions/v40.0.0/sdk/devicemotion/"},"Device Motion"),"."),Object(a.b)(c.a,{alt:"Portrait orientation in different physical orientations",src:"/static/images/screen-orientation-portrait.png",containerStyle:{backgroundColor:o.palette.light.gray[300]},mdxType:"ImageSpotlight"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"ScreenOrientation")," from ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"expo"))," allows changing supported screen orientations at runtime, and subscribing to orientation changes. This will take priority over the ",Object(a.b)("inlineCode",{parentName:"p"},"orientation")," key in ",Object(a.b)("strong",{parentName:"p"},"app.json"),"."),Object(a.b)("p",null,"On both iOS and Android platforms, changes to the screen orientation will override any system settings or user preferences. On Android, it is possible to change the screen orientation while taking the user's preferred orientation into account. On iOS, user and system settings are not accessible by the application and any changes to the screen orientation will override existing settings."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Web support has ",Object(a.b)("a",{parentName:"p",href:"https://caniuse.com/#feat=deviceorientation"},"limited support"),". For improved resize detection on mobile Safari, check out the docs on using ",Object(a.b)("a",{parentName:"p",href:"/guides/customizing-webpack/#resizeobserver"},"Resize Observer in Expo web"),".")),Object(a.b)(l.a,{android:!0,emulator:!0,ios:!0,simulator:!0,web:!0,mdxType:"PlatformsSection"}),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)(b.b,{packageName:"expo-screen-orientation",mdxType:"InstallSection"}),Object(a.b)("h3",{id:"warning"},"Warning"),Object(a.b)("p",null,"Apple added support for ",Object(a.b)("em",{parentName:"p"},"split view")," mode to iPads in iOS 9. This changed how the screen orientation is handled by the system. To put the matter shortly, for the iOS, your iPad is always in the landscape mode unless you open two applications side by side. In order to be able to lock screen orientation using this module you will need to disable support for this feature. For more information about the ",Object(a.b)("em",{parentName:"p"},"split view")," mode, check out ",Object(a.b)("a",{parentName:"p",href:"https://support.apple.com/en-us/HT207582"},"the official Apple documentation"),"."),Object(a.b)("h4",{id:"managed-workflow"},"Managed workflow"),Object(a.b)("p",null,"Open your ",Object(a.b)("strong",{parentName:"p"},"app.json")," and add the following inside of the ",Object(a.b)("inlineCode",{parentName:"p"},'"expo"')," field:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  "expo": {\n    ...\n    "ios": {\n      ...\n      "requireFullScreen": true,\n    }\n  }\n}\n')),Object(a.b)("h4",{id:"bare-workflow"},"Bare workflow"),Object(a.b)("p",null,"Tick the ",Object(a.b)("inlineCode",{parentName:"p"},"Requires Full Screen")," checkbox in Xcode. It should be located under ",Object(a.b)("inlineCode",{parentName:"p"},"Project Target > General > Deployment Info"),"."),Object(a.b)("h2",{id:"api"},"API"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"import * as ScreenOrientation from 'expo-screen-orientation';\n")),Object(a.b)("h2",{id:"methods"},"Methods"),Object(a.b)("h3",{id:"screenorientationlockasyncorientationlock"},Object(a.b)("inlineCode",{parentName:"h3"},"ScreenOrientation.lockAsync(orientationLock)")),Object(a.b)("p",null,"Lock the screen orientation to a particular OrientationLock."),Object(a.b)("h4",{id:"arguments"},"Arguments"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"orientationLock (",Object(a.b)("em",{parentName:"strong"},"OrientationLock"),")")," -- The orientation lock to apply. See the ",Object(a.b)("a",{parentName:"li",href:"/versions/v40.0.0/sdk/screen-orientation/#screenorientationorientationlock"},Object(a.b)("inlineCode",{parentName:"a"},"OrientationLock"))," enum for possible values.")),Object(a.b)("h4",{id:"returns"},"Returns"),Object(a.b)("p",null,"Returns a promise with ",Object(a.b)("inlineCode",{parentName:"p"},"void")," value, resolving when the orientation is set."),Object(a.b)("h4",{id:"error-codes"},"Error Codes"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ERR_SCREEN_ORIENTATION_INVALID_ORIENTATION_LOCK")," - an invalid ",Object(a.b)("a",{parentName:"li",href:"/versions/v40.0.0/sdk/screen-orientation/#screenorientationorientationlock"},Object(a.b)("inlineCode",{parentName:"a"},"OrientationLock"))," was passed in."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ERR_SCREEN_ORIENTATION_UNSUPPORTED_ORIENTATION_LOCK")," - the platform does not support the orientation lock policy."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ERR_SCREEN_ORIENTATION_MISSING_ACTIVITY")," - could not get the current activity (",Object(a.b)("strong",{parentName:"li"},"Android only"),").")),Object(a.b)("h4",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"async function changeScreenOrientation() {\n  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);\n}\n")),Object(a.b)("h3",{id:"screenorientationlockplatformasyncplatforminfo"},Object(a.b)("inlineCode",{parentName:"h3"},"ScreenOrientation.lockPlatformAsync(platformInfo)")),Object(a.b)("h4",{id:"arguments-1"},"Arguments"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"platformInfo (",Object(a.b)("em",{parentName:"strong"},"PlatformOrientationInfo"),")")," -- The platform specific lock to apply. See the ",Object(a.b)("a",{parentName:"li",href:"/versions/v40.0.0/sdk/screen-orientation/#screenorientationplatformorientationinfo"},Object(a.b)("inlineCode",{parentName:"a"},"PlatformOrientationInfo"))," object type for the different platform formats.")),Object(a.b)("h4",{id:"returns-1"},"Returns"),Object(a.b)("p",null,"Returns a promise with ",Object(a.b)("inlineCode",{parentName:"p"},"void")," value, resolving when the orientation is set and rejecting if an invalid option or value is passed."),Object(a.b)("h4",{id:"error-codes-1"},"Error Codes"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ERR_SCREEN_ORIENTATION_INVALID_ORIENTATION_LOCK")," - an invalid ",Object(a.b)("a",{parentName:"li",href:"/versions/v40.0.0/sdk/screen-orientation/#screenorientationorientationlock"},Object(a.b)("inlineCode",{parentName:"a"},"OrientationLock"))," was passed in (",Object(a.b)("strong",{parentName:"li"},"iOS only"),")."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ERR_SCREEN_ORIENTATION_UNSUPPORTED_ORIENTATION_LOCK")," - the platform does not support the orientation lock policy."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ERR_SCREEN_ORIENTATION_MISSING_ACTIVITY")," - could not get the current activity (",Object(a.b)("strong",{parentName:"li"},"Android only"),").")),Object(a.b)("h3",{id:"screenorientationunlockasync"},Object(a.b)("inlineCode",{parentName:"h3"},"ScreenOrientation.unlockAsync()")),Object(a.b)("p",null,"Sets the screen orientation back to the ",Object(a.b)("inlineCode",{parentName:"p"},"OrientationLock.DEFAULT")," policy."),Object(a.b)("h4",{id:"error-codes-2"},"Error Codes"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ERR_SCREEN_ORIENTATION_MISSING_ACTIVITY")," - could not get the current activity (",Object(a.b)("strong",{parentName:"li"},"Android only"),").")),Object(a.b)("h4",{id:"returns-2"},"Returns"),Object(a.b)("p",null,"Returns a promise with ",Object(a.b)("inlineCode",{parentName:"p"},"void")," value, resolving when the orientation is set."),Object(a.b)("h3",{id:"screenorientationgetorientationasync"},Object(a.b)("inlineCode",{parentName:"h3"},"ScreenOrientation.getOrientationAsync()")),Object(a.b)("p",null,"Gets the current screen orientation."),Object(a.b)("h4",{id:"returns-3"},"Returns"),Object(a.b)("p",null,"Returns a promise that resolves to an ",Object(a.b)("a",{parentName:"p",href:"/versions/v40.0.0/sdk/screen-orientation/#screenorientationorientation"},Object(a.b)("inlineCode",{parentName:"a"},"Orientation"))," value that reflects the current screen orientation."),Object(a.b)("h4",{id:"error-codes-3"},"Error Codes"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ERR_SCREEN_ORIENTATION_GET_ORIENTATION_LOCK")," - An unknown error occurred when trying to get the system lock. (",Object(a.b)("strong",{parentName:"li"},"Android only"),")"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ERR_SCREEN_ORIENTATION_MISSING_ACTIVITY")," - could not get the current activity (",Object(a.b)("strong",{parentName:"li"},"Android only"),").")),Object(a.b)("h3",{id:"screenorientationgetorientationlockasync"},Object(a.b)("inlineCode",{parentName:"h3"},"ScreenOrientation.getOrientationLockAsync()")),Object(a.b)("p",null,"Gets the current screen orientation lock type."),Object(a.b)("h4",{id:"returns-4"},"Returns"),Object(a.b)("p",null,"Returns a promise with an ",Object(a.b)("a",{parentName:"p",href:"/versions/v40.0.0/sdk/screen-orientation/#screenorientationorientationlock"},Object(a.b)("inlineCode",{parentName:"a"},"OrientationLock"))," value."),Object(a.b)("h4",{id:"error-codes-4"},"Error Codes"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ERR_SCREEN_ORIENTATION_MISSING_ACTIVITY")," - could not get the current activity (",Object(a.b)("strong",{parentName:"li"},"Android only"),").")),Object(a.b)("h3",{id:"screenorientationgetplatformorientationlockasync"},Object(a.b)("inlineCode",{parentName:"h3"},"ScreenOrientation.getPlatformOrientationLockAsync()")),Object(a.b)("p",null,"Gets the platform specific screen orientation lock type."),Object(a.b)("h4",{id:"returns-5"},"Returns"),Object(a.b)("p",null,"Returns a promise with a ",Object(a.b)("a",{parentName:"p",href:"/versions/v40.0.0/sdk/screen-orientation/#screenorientationplatformorientationinfo"},Object(a.b)("inlineCode",{parentName:"a"},"PlatformOrientationInfo"))," value."),Object(a.b)("h4",{id:"error-codes-5"},"Error Codes"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ERR_SCREEN_ORIENTATION_GET_PLATFORM_ORIENTATION_LOCK")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ERR_SCREEN_ORIENTATION_MISSING_ACTIVITY")," - could not get the current activity (",Object(a.b)("strong",{parentName:"li"},"Android only"),").")),Object(a.b)("h3",{id:"screenorientationsupportsorientationlockasyncorientationlock"},Object(a.b)("inlineCode",{parentName:"h3"},"ScreenOrientation.supportsOrientationLockAsync(orientationLock)")),Object(a.b)("p",null,"Returns whether the ",Object(a.b)("a",{parentName:"p",href:"/versions/v40.0.0/sdk/screen-orientation/#screenorientationorientationlock"},Object(a.b)("inlineCode",{parentName:"a"},"OrientationLock"))," policy is supported on the device."),Object(a.b)("h4",{id:"returns-6"},"Returns"),Object(a.b)("p",null,"Returns a promise that resolves to a ",Object(a.b)("inlineCode",{parentName:"p"},"boolean")," value that reflects whether or not the orientationLock is supported."),Object(a.b)("h3",{id:"screenorientationaddorientationchangelistenerlistener"},Object(a.b)("inlineCode",{parentName:"h3"},"ScreenOrientation.addOrientationChangeListener(listener)")),Object(a.b)("p",null,"Invokes the ",Object(a.b)("inlineCode",{parentName:"p"},"listener")," function when the screen orientation changes from ",Object(a.b)("inlineCode",{parentName:"p"},"portrait")," to ",Object(a.b)("inlineCode",{parentName:"p"},"landscape")," or from ",Object(a.b)("inlineCode",{parentName:"p"},"landscape")," to ",Object(a.b)("inlineCode",{parentName:"p"},"portrait"),". For example, it won't be invoked when screen orientation change from ",Object(a.b)("inlineCode",{parentName:"p"},"portrait up")," to ",Object(a.b)("inlineCode",{parentName:"p"},"portrait down"),", but it will be called when there was a change from ",Object(a.b)("inlineCode",{parentName:"p"},"portrait up")," to ",Object(a.b)("inlineCode",{parentName:"p"},"landscape left"),"."),Object(a.b)("h4",{id:"arguments-2"},"Arguments"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"listener (",Object(a.b)("em",{parentName:"strong"},"OrientationChangeListener"),")"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Each orientation update will pass an object with the new ",Object(a.b)("a",{parentName:"li",href:"/versions/v40.0.0/sdk/screen-orientation/#screenorientationorientationchangeevent"},Object(a.b)("inlineCode",{parentName:"a"},"OrientationChangeEvent"))," to the listener.")))),Object(a.b)("h4",{id:"returns-7"},"Returns"),Object(a.b)("p",null,"Returns an ",Object(a.b)("a",{parentName:"p",href:"/versions/v40.0.0/sdk/screen-orientation/#subscription"},Object(a.b)("inlineCode",{parentName:"a"},"Subscription"))," object that can later be used to unsuscribe updates to the listener."),Object(a.b)("h3",{id:"screenorientationremoveorientationchangelisteners"},Object(a.b)("inlineCode",{parentName:"h3"},"ScreenOrientation.removeOrientationChangeListeners()")),Object(a.b)("p",null,"Removes all listeners subscribed to orientation change updates."),Object(a.b)("h3",{id:"screenorientationremoveorientationchangelistenersubscription"},Object(a.b)("inlineCode",{parentName:"h3"},"ScreenOrientation.removeOrientationChangeListener(subscription)")),Object(a.b)("p",null,"Unsubscribes the listener associated with the ",Object(a.b)("inlineCode",{parentName:"p"},"subscription")," object from all orientation change updates."),Object(a.b)("h4",{id:"arguments-3"},"Arguments"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"subscription (",Object(a.b)("em",{parentName:"strong"},"Subscription"),")"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"A subscription object that manages the updates passed to a listener function on an orientation change.")))),Object(a.b)("h2",{id:"enum-types"},"Enum types"),Object(a.b)("h3",{id:"screenorientationorientation"},Object(a.b)("inlineCode",{parentName:"h3"},"ScreenOrientation.Orientation")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"Orientation.UNKNOWN"))," - An unknown screen orientation. For example, the device is flat, perhaps on a table."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"Orientation.PORTRAIT_UP"))," - Right-side up portrait interface orientation."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"Orientation.PORTRAIT_DOWN"))," - Upside down portrait interface orientation."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"Orientation.LANDSCAPE_LEFT"))," - Left landscape interface orientation."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"Orientation.LANDSCAPE_RIGHT"))," - Right landscape interface orientation.")),Object(a.b)("h3",{id:"screenorientationorientationlock"},Object(a.b)("inlineCode",{parentName:"h3"},"ScreenOrientation.OrientationLock")),Object(a.b)("p",null,"An enum whose values can be passed to the ",Object(a.b)("a",{parentName:"p",href:"/versions/v40.0.0/sdk/screen-orientation/#screenorientationlockasyncorientationlock"},Object(a.b)("inlineCode",{parentName:"a"},"lockAsync"))," method."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"OrientationLock.DEFAULT"))," -- The default orientation. On iOS, this will allow all orientations except ",Object(a.b)("inlineCode",{parentName:"li"},"Orientation.PORTRAIT_DOWN"),". On Android, this lets the system decide the best orientation."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"OrientationLock.ALL"))," -- All four possible orientations"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"OrientationLock.PORTRAIT"))," -- Any portrait orientation."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"OrientationLock.PORTRAIT_UP"))," -- Right-side up portrait only."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"OrientationLock.PORTRAIT_DOWN"))," -- Upside down portrait only."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"OrientationLock.LANDSCAPE"))," -- Any landscape orientation."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"OrientationLock.LANDSCAPE_LEFT"))," -- Left landscape only."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"OrientationLock.LANDSCAPE_RIGHT"))," -- Right landscape only."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"OrientationLock.OTHER"))," -- A platform specific orientation. This is not a valid policy that can be applied in ",Object(a.b)("a",{parentName:"li",href:"/versions/v40.0.0/sdk/screen-orientation/#screenorientationlockasyncorientationlock"},Object(a.b)("inlineCode",{parentName:"a"},"lockAsync")),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"OrientationLock.UNKNOWN"))," -- An unknown screen orientation lock. This is not a valid policy that can be applied in ",Object(a.b)("a",{parentName:"li",href:"/versions/v40.0.0/sdk/screen-orientation/#screenorientationlockasyncorientationlock"},Object(a.b)("inlineCode",{parentName:"a"},"lockAsync")),".")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note")," ",Object(a.b)("inlineCode",{parentName:"p"},"OrientationLock.ALL")," and ",Object(a.b)("inlineCode",{parentName:"p"},"OrientationLock.PORTRAIT")," are invalid on devices which don't support ",Object(a.b)("inlineCode",{parentName:"p"},"OrientationLock.PORTRAIT_DOWN"),".")),Object(a.b)("h3",{id:"screenorientationsizeclassios"},Object(a.b)("inlineCode",{parentName:"h3"},"ScreenOrientation.SizeClassIOS")),Object(a.b)("p",null,"Each iOS device has a default set of ",Object(a.b)("a",{parentName:"p",href:"https://developer.apple.com/library/archive/featuredarticles/ViewControllerPGforiPhoneOS/TheAdaptiveModel.html"},"size classes")," that you can use as a guide when designing your interface."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"SizeClassIOS.REGULAR"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"SizeClassIOS.COMPACT"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"SizeClassIOS.UNKNOWN")))),Object(a.b)("h3",{id:"screenorientationweborientationlock"},Object(a.b)("inlineCode",{parentName:"h3"},"ScreenOrientation.WebOrientationLock")),Object(a.b)("p",null,"An enum representing the lock policies that can be applied on the web platform, modelled after the ",Object(a.b)("a",{parentName:"p",href:"https://w3c.github.io/screen-orientation/#dom-orientationlocktype"},"W3C specification"),". These values can be applied through the ",Object(a.b)("a",{parentName:"p",href:"/versions/v40.0.0/sdk/screen-orientation/#screenorientationlockplatformasyncplatforminfo"},Object(a.b)("inlineCode",{parentName:"a"},"lockPlatformAsync"))," method."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"PORTRAIT_PRIMARY"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"PORTRAIT_SECONDARY"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"PORTRAIT"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"LANDSCAPE_PRIMARY"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"LANDSCAPE_SECONDARY"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"LANDSCAPE"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"ANY"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"NATURAL"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"UNKNOWN")))),Object(a.b)("h2",{id:"object-types"},"Object Types"),Object(a.b)("h3",{id:"screenorientationplatformorientationinfo"},Object(a.b)("inlineCode",{parentName:"h3"},"ScreenOrientation.PlatformOrientationInfo")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"screenOrientationConstantAndroid (",Object(a.b)("em",{parentName:"strong"},"integer"),")"),": A constant to set using the Android native ",Object(a.b)("a",{parentName:"li",href:"https://developer.android.com/reference/android/R.attr.html#screenOrientation"},"API"),". For example, in order to set the lock policy to ",Object(a.b)("a",{parentName:"li",href:"https://developer.android.com/reference/android/content/pm/ActivityInfo.html#SCREEN_ORIENTATION_UNSPECIFIED"},"unspecified"),", -1 should be passed in. (",Object(a.b)("strong",{parentName:"li"},"Android only"),")"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"screenOrientationArrayIOS (Array","[Orientation]",")"),": An array of orientations to allow on the iOS platform (",Object(a.b)("strong",{parentName:"li"},"iOS only"),")"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"screenOrientationLockWeb (",Object(a.b)("em",{parentName:"strong"},"WebOrientationLock"),")"),": A web orientation lock to apply in the browser (",Object(a.b)("strong",{parentName:"li"},"web only"),")")),Object(a.b)("h3",{id:"screenorientationscreenorientationinfo"},Object(a.b)("inlineCode",{parentName:"h3"},"ScreenOrientation.ScreenOrientationInfo")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"orientation (",Object(a.b)("em",{parentName:"strong"},"Orientation"),")"),": The current orientation of the device"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"verticalSizeClass (",Object(a.b)("em",{parentName:"strong"},"SizeClassIOS"),")"),": The ",Object(a.b)("a",{parentName:"li",href:"https://developer.apple.com/library/archive/featuredarticles/ViewControllerPGforiPhoneOS/TheAdaptiveModel.html"},"vertical size class")," of the device (",Object(a.b)("strong",{parentName:"li"},"iOS only"),")"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"horizontalSizeClass (",Object(a.b)("em",{parentName:"strong"},"SizeClassIOS"),")"),": The ",Object(a.b)("a",{parentName:"li",href:"https://developer.apple.com/library/archive/featuredarticles/ViewControllerPGforiPhoneOS/TheAdaptiveModel.html"},"horizontal size class")," of the device (",Object(a.b)("strong",{parentName:"li"},"iOS only"),")")),Object(a.b)("h3",{id:"screenorientationorientationchangeevent"},Object(a.b)("inlineCode",{parentName:"h3"},"ScreenOrientation.OrientationChangeEvent")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"orientationLock (",Object(a.b)("em",{parentName:"strong"},"OrientationLock"),")"),": The current OrientationLock of the device."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"orientationInfo (",Object(a.b)("em",{parentName:"strong"},"ScreenOrientationInfo"),")"),": The current ScreenOrientationInfo of the device.")),Object(a.b)("h3",{id:"subscription"},Object(a.b)("inlineCode",{parentName:"h3"},"Subscription")),Object(a.b)("p",null,"A ",Object(a.b)("a",{parentName:"p",href:"https://github.com/expo/expo/tree/main/packages/expo-react-native-adapter/src/EventEmitter.ts#L16"},"subscription object"),"."),Object(a.b)("h2",{id:"function-types"},"Function Types"),Object(a.b)("h3",{id:"screenorientationorientationchangelistener"},Object(a.b)("inlineCode",{parentName:"h3"},"ScreenOrientation.OrientationChangeListener")),Object(a.b)("h4",{id:"args"},"Args"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"event (",Object(a.b)("em",{parentName:"strong"},"OrientationChangeEvent"),")"),": An update with the most recent OrientationChangeEvent.")),Object(a.b)("h4",{id:"returns-8"},"Returns"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"void")),Object(a.b)("h2",{id:"error-codes-6"},"Error Codes"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Code"),Object(a.b)("th",{parentName:"tr",align:null},"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"ERR_SCREEN_ORIENTATION_UNSUPPORTED_ORIENTATION_LOCK"),Object(a.b)("td",{parentName:"tr",align:null},"The platform does not support the ",Object(a.b)("a",{parentName:"td",href:"/versions/v40.0.0/sdk/screen-orientation/#screenorientationorientationlock"},Object(a.b)("inlineCode",{parentName:"a"},"OrientationLock"))," policy.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"ERR_SCREEN_ORIENTATION_INVALID_ORIENTATION_LOCK"),Object(a.b)("td",{parentName:"tr",align:null},"An invalid ",Object(a.b)("a",{parentName:"td",href:"/versions/v40.0.0/sdk/screen-orientation/#screenorientationorientationlock"},Object(a.b)("inlineCode",{parentName:"a"},"OrientationLock"))," was passed in.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"ERR_SCREEN_ORIENTATION_GET_ORIENTATION_LOCK"),Object(a.b)("td",{parentName:"tr",align:null},"An unknown error occurred when trying to get the system lock. (",Object(a.b)("strong",{parentName:"td"},"Android only"),")")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"ERR_SCREEN_ORIENTATION_GET_PLATFORM_ORIENTATION_LOCK"),Object(a.b)("td",{parentName:"tr",align:null},"An unknown error occurred when trying to get the system lock. (",Object(a.b)("strong",{parentName:"td"},"Android only"),")")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"ERR_SCREEN_ORIENTATION_MISSING_ACTIVITY"),Object(a.b)("td",{parentName:"tr",align:null},"Could not get the current activity. (",Object(a.b)("strong",{parentName:"td"},"Android only"),")")))))}m.isMDXComponent=!0}},[["HxkW",1,0,2,3,4,5,6]]]);