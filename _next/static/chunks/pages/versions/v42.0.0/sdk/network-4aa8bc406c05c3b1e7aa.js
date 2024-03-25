_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[1002],{cGb3:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v42.0.0/sdk/network",function(){return n("j2eO")}])},j2eO:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return s})),n.d(t,"headings",(function(){return p})),n.d(t,"default",(function(){return m}));var a=n("HALo"),r=n("dhJC"),i=(n("q1tI"),n("7ljp")),o=n("3Ukx"),b=n("HCau"),d=n("hykZ"),c=["components"],s={title:"Network",sourceCodeUrl:"https://github.com/expo/expo/tree/sdk-42/packages/expo-network"},p=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"Configuration"},{depth:2,type:"text",title:"API"},{depth:2,type:"text",title:"Error Codes"}],l={meta:s,headings:p};function m(e){var t=e.components,n=Object(r.a)(e,c);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"expo-network"))," provides useful information about the device's network such as its IP address, MAC address, and airplane mode status."),Object(i.b)(d.a,{android:!0,emulator:!0,ios:!0,simulator:!0,web:!0,mdxType:"PlatformsSection"}),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)(b.b,{packageName:"expo-network",mdxType:"InstallSection"}),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"On Android, this module requires permissions to access the network and Wi-Fi state. The permissions ",Object(i.b)("inlineCode",{parentName:"p"},"ACCESS_NETWORK_STATE")," and ",Object(i.b)("inlineCode",{parentName:"p"},"ACCESS_WIFI_STATE")," are added automatically."),Object(i.b)("h2",{id:"api"},"API"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import * as Network from 'expo-network';\n")),Object(i.b)(o.a,{packageName:"expo-network",apiName:"Network",mdxType:"APISection"}),Object(i.b)("h2",{id:"error-codes"},"Error Codes"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Code"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"ERR_NETWORK_IP_ADDRESS"),Object(i.b)("td",{parentName:"tr",align:null},"On Android, there may be an unknown Wifi host when trying to access ",Object(i.b)("inlineCode",{parentName:"td"},"WifiManager")," in ",Object(i.b)("inlineCode",{parentName:"td"},"getIpAddressAsync"),". On iOS, no network interfaces could be retrieved.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"ERR_NETWORK_UNDEFINED_INTERFACE"),Object(i.b)("td",{parentName:"tr",align:null},"An undefined ",Object(i.b)("inlineCode",{parentName:"td"},"interfaceName")," was passed as an argument in ",Object(i.b)("inlineCode",{parentName:"td"},"getMacAddressAsync"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"ERR_NETWORK_SOCKET_EXCEPTION"),Object(i.b)("td",{parentName:"tr",align:null},"An error was encountered in creating or accessing the socket in ",Object(i.b)("inlineCode",{parentName:"td"},"getMacAddressAsync"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"ERR_NETWORK_INVALID_PERMISSION_INTERNET"),Object(i.b)("td",{parentName:"tr",align:null},"There are invalid permissions for ",Object(i.b)("a",{parentName:"td",href:"https://developer.android.com/reference/android/Manifest.permission#ACCESS_WIFI_STATE"},Object(i.b)("inlineCode",{parentName:"a"},"android.permission.ACCESS_WIFI_STATE"))," in ",Object(i.b)("inlineCode",{parentName:"td"},"getMacAddressAsync"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"ERR_NETWORK_NO_ACCESS_NETWORKINFO"),Object(i.b)("td",{parentName:"tr",align:null},"Unable to access network information")))))}m.isMDXComponent=!0}},[["cGb3",1,0,2,3,4,5,6,7,8,9,10,11,12,13,14]]]);