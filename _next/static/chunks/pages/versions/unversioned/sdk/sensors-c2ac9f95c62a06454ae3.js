_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[537],{dcS7:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return c})),n.d(t,"headings",(function(){return d})),n.d(t,"default",(function(){return l}));var o=n("HALo"),r=n("dhJC"),s=(n("q1tI"),n("7ljp")),a=n("HCau"),i=n("hykZ"),p=["components"],c={title:"Sensors",sourceCodeUrl:"https://github.com/expo/expo/tree/main/packages/expo-sensors",packageName:"expo-sensors"},d=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"Configuration"},{depth:2,type:"text",title:"API"}],m={meta:c,headings:d};function l(e){var t=e.components,n=Object(r.a)(e,p);return Object(s.b)("wrapper",Object(o.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"expo-sensors"))," provides various APIs for accessing device sensors to measure motion, orientation, pressure, magnetic fields, and step count."),Object(s.b)(i.a,{android:!0,emulator:!0,ios:!0,simulator:!0,web:!0,mdxType:"PlatformsSection"}),Object(s.b)("h2",{id:"installation"},"Installation"),Object(s.b)(a.a,{mdxType:"APIInstallSection"}),Object(s.b)("h2",{id:"configuration"},"Configuration"),Object(s.b)("p",null,"Starting in Android 12 (API level 31), the system has a 200ms limit for each sensor updates. If you need a update interval less than 200ms, you should add ",Object(s.b)("inlineCode",{parentName:"p"},'<uses-permission android:name="android.permission.HIGH_SAMPLING_RATE_SENSORS"/>')," to ",Object(s.b)("strong",{parentName:"p"},"AndroidManifest.xml"),"."),Object(s.b)("h2",{id:"api"},"API"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"import * as Sensors from 'expo-sensors';\n// OR\nimport {\n  Accelerometer,\n  Barometer,\n  Gyroscope,\n  Magnetometer,\n  MagnetometerUncalibrated,\n  Pedometer,\n} from 'expo-sensors';\n")),Object(s.b)("p",null,"For more information, please see the documentation for the sensor you are interested in:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"/versions/unversioned/sdk/accelerometer/"},"Accelerometer")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"/versions/unversioned/sdk/barometer/"},"Barometer")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"/versions/unversioned/sdk/gyroscope/"},"Gyroscope")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"/versions/unversioned/sdk/magnetometer/"},"Magnetometer")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"/versions/unversioned/sdk/pedometer/"},"Pedometer"))))}l.isMDXComponent=!0},rV2d:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/unversioned/sdk/sensors",function(){return n("dcS7")}])}},[["rV2d",1,0,2,3,4,5,6]]]);