_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[1453],{AcJI:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v45.0.0/sdk/devicemotion",function(){return n("NOUB")}])},NOUB:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return c})),n.d(t,"headings",(function(){return l})),n.d(t,"default",(function(){return m}));var i=n("HALo"),a=n("dhJC"),o=(n("q1tI"),n("7ljp")),r=n("HCau"),b=n("hykZ"),s=["components"],c={title:"DeviceMotion",sourceCodeUrl:"https://github.com/expo/expo/tree/sdk-45/packages/expo-sensors",packageName:"expo-sensors"},l=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"API"},{depth:2,type:"text",title:"Methods"},{depth:3,type:"inlineCode",title:"DeviceMotion.isAvailableAsync()"},{depth:4,type:"text",title:"Returns"},{depth:3,type:"inlineCode",title:"DeviceMotion.addListener(listener)"},{depth:4,type:"text",title:"Arguments"},{depth:4,type:"text",title:"Returns"},{depth:3,type:"inlineCode",title:"DeviceMotion.removeAllListeners()"},{depth:3,type:"inlineCode",title:"DeviceMotion.setUpdateInterval(intervalMs)"},{depth:4,type:"text",title:"Arguments"}],p={meta:c,headings:l};function m(e){var t=e.components,n=Object(a.a)(e,s);return Object(o.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"DeviceMotion")," from ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"expo-sensors"))," provides access to the device motion and orientation sensors. All data is presented in terms of three axes that run through a device. According to portrait orientation: X runs from left to right, Y from bottom to top and Z perpendicularly through the screen from back to front."),Object(o.b)(b.a,{android:!0,emulator:!0,ios:!0,simulator:!0,web:!0,mdxType:"PlatformsSection"}),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)(r.a,{mdxType:"APIInstallSection"}),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { DeviceMotion } from 'expo-sensors';\n")),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"devicemotionisavailableasync"},Object(o.b)("inlineCode",{parentName:"h3"},"DeviceMotion.isAvailableAsync()")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You should always check the sensor availability before attempting to use it.")),Object(o.b)("p",null,"Returns whether the ",Object(o.b)("inlineCode",{parentName:"p"},"DeviceMotion")," API is enabled on the device."),Object(o.b)("p",null,"On mobile web, you must first invoke ",Object(o.b)("inlineCode",{parentName:"p"},"Permissions.askAsync(Permissions.MOTION)")," in a user interaction (i.e. touch event) before you can use this module. If the ",Object(o.b)("inlineCode",{parentName:"p"},"status")," is not equal to ",Object(o.b)("inlineCode",{parentName:"p"},"granted")," then you should inform the end user that they may have to open settings."),Object(o.b)("p",null,"On ",Object(o.b)("strong",{parentName:"p"},"web")," this starts a timer and waits to see if an event is fired. This should predict if the iOS device has the ",Object(o.b)("strong",{parentName:"p"},"device orientation")," API disabled in ",Object(o.b)("inlineCode",{parentName:"p"},"Settings > Safari > Motion & Orientation Access"),". Some devices will also not fire if the site isn't hosted with ",Object(o.b)("strong",{parentName:"p"},"HTTPS")," as ",Object(o.b)("inlineCode",{parentName:"p"},"DeviceMotion")," is now considered a secure API. There is no formal API for detecting the status of ",Object(o.b)("inlineCode",{parentName:"p"},"DeviceMotion")," so this API can sometimes be unreliable on web."),Object(o.b)("h4",{id:"returns"},"Returns"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A promise that resolves to a ",Object(o.b)("inlineCode",{parentName:"li"},"boolean")," denoting the availability of the sensor.")),Object(o.b)("h3",{id:"devicemotionaddlistenerlistener"},Object(o.b)("inlineCode",{parentName:"h3"},"DeviceMotion.addListener(listener)")),Object(o.b)("p",null,"Subscribe for updates to DeviceMotion."),Object(o.b)("h4",{id:"arguments"},"Arguments"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"listener (",Object(o.b)("em",{parentName:"strong"},"function"),")")," -- A callback that is invoked when a\nDeviceMotion update is available. When invoked, the listener is\nprovided a single argument that is an object containing following fields:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"interval (",Object(o.b)("em",{parentName:"strong"},"number"),")")," -- Interval at which data is obtained from the native platform. Expressed in ",Object(o.b)("strong",{parentName:"p"},"milliseconds"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"acceleration (",Object(o.b)("em",{parentName:"strong"},"object"),")")," -- Device acceleration on the three axis as an object with x, y, z keys. Expressed in m/s",Object(o.b)("sup",null,"2"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"accelerationIncludingGravity (",Object(o.b)("em",{parentName:"strong"},"object"),")")," -- Device acceleration with the effect of gravity on the three axis as an object with x, y, z keys. Expressed in m/s",Object(o.b)("sup",null,"2"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"rotation (",Object(o.b)("em",{parentName:"strong"},"object"),")")," -- Device's orientation in space as an object with alpha, beta, gamma keys where alpha is for rotation around Z axis, beta for X axis rotation and gamma for Y axis rotation.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"rotationRate (",Object(o.b)("em",{parentName:"strong"},"object"),")")," -- Device's rate of rotation in space expressed in degrees per second (deg/s)."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"alpha (",Object(o.b)("em",{parentName:"strong"},"number"),")"),": X axis rotation."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"beta (",Object(o.b)("em",{parentName:"strong"},"number"),")"),": Y axis rotation."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"gamma (",Object(o.b)("em",{parentName:"strong"},"number"),")"),": Z axis rotation."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"orientation (",Object(o.b)("em",{parentName:"strong"},"number"),")")," -- Device orientation based on screen rotation. Value is on of ",Object(o.b)("inlineCode",{parentName:"p"},"0")," (portrait), ",Object(o.b)("inlineCode",{parentName:"p"},"90")," (right landscape), ",Object(o.b)("inlineCode",{parentName:"p"},"180")," (upside down), ",Object(o.b)("inlineCode",{parentName:"p"},"-90")," (left landscape)."))))),Object(o.b)("h4",{id:"returns-1"},"Returns"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A subscription that you can call ",Object(o.b)("inlineCode",{parentName:"li"},"remove()")," on when you\nwould like to unsubscribe the listener.")),Object(o.b)("h3",{id:"devicemotionremovealllisteners"},Object(o.b)("inlineCode",{parentName:"h3"},"DeviceMotion.removeAllListeners()")),Object(o.b)("p",null,"Remove all listeners."),Object(o.b)("h3",{id:"devicemotionsetupdateintervalintervalms"},Object(o.b)("inlineCode",{parentName:"h3"},"DeviceMotion.setUpdateInterval(intervalMs)")),Object(o.b)("p",null,"Subscribe for updates to DeviceMotion."),Object(o.b)("h4",{id:"arguments-1"},"Arguments"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"intervalMs (",Object(o.b)("em",{parentName:"strong"},"number"),")")," Desired interval in milliseconds between\nDeviceMotion updates.")))}m.isMDXComponent=!0}},[["AcJI",1,0,2,3,4,5,6]]]);