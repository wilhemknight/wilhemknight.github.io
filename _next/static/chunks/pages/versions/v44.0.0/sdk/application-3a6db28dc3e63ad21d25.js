_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[1267],{kAf1:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v44.0.0/sdk/application",function(){return n("s1rC")}])},s1rC:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return s})),n.d(t,"headings",(function(){return b})),n.d(t,"default",(function(){return m}));var a=n("HALo"),r=n("dhJC"),o=(n("q1tI"),n("7ljp")),i=n("3Ukx"),l=n("HCau"),c=n("hykZ"),p=["components"],s={title:"Application",sourceCodeUrl:"https://github.com/expo/expo/tree/sdk-44/packages/expo-application"},b=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"API"},{depth:2,type:"text",title:"Error Codes"}],d={meta:s,headings:b};function m(e){var t=e.components,n=Object(r.a)(e,p);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"expo-application"))," provides useful information about the native application, itself, such as the ID, app name, and build version."),Object(o.b)(c.a,{android:!0,emulator:!0,ios:!0,simulator:!0,web:!0,mdxType:"PlatformsSection"}),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)(l.b,{packageName:"expo-application",mdxType:"InstallSection"}),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import * as Application from 'expo-application';\n")),Object(o.b)(i.a,{packageName:"expo-application",apiName:"Application",mdxType:"APISection"}),Object(o.b)("h2",{id:"error-codes"},"Error Codes"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Code"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"ERR_APPLICATION_PACKAGE_NAME_NOT_FOUND"),Object(o.b)("td",{parentName:"tr",align:null},"Error code thrown by ",Object(o.b)("inlineCode",{parentName:"td"},"getInstallationTimeAsync")," and ",Object(o.b)("inlineCode",{parentName:"td"},"getLastUpdateTimeAsync"),". This may be thrown if the package information or package name could not be retrieved.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"ERR_APPLICATION_INSTALL_REFERRER_UNAVAILABLE"),Object(o.b)("td",{parentName:"tr",align:null},"The current Play Store app doesn't provide the installation referrer API, or the Play Store may not be installed. This error code may come up when testing on an AVD that doesn't come with the Play Store pre-installed, such as the Google Pixel 3 and Nexus 6.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"ERR_APPLICATION_INSTALL_REFERRER_CONNECTION"),Object(o.b)("td",{parentName:"tr",align:null},"A connection could not be established to the Google Play Store.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"ERR_APPLICATION_INSTALL_REFERRER_REMOTE_EXCEPTION"),Object(o.b)("td",{parentName:"tr",align:null},"A ",Object(o.b)("inlineCode",{parentName:"td"},"RemoteException")," was thrown after a connection was established to the Play Store. This may happen if the process hosting the remote object is no longer available, which usually means the process crashed. See ",Object(o.b)("a",{parentName:"td",href:"https://stackoverflow.com/questions/3156389/android-remoteexceptions-and-services"},"https://stackoverflow.com/questions/3156389/android-remoteexceptions-and-services"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"ERR_APPLICATION_INSTALL_REFERRER"),Object(o.b)("td",{parentName:"tr",align:null},"General default case error code for the ",Object(o.b)("inlineCode",{parentName:"td"},"getInstallReferrerAsync")," method. This error code will be thrown if an exception occurred when getting the install referrer, but the exception was none of the more precise errors. The ",Object(o.b)("a",{parentName:"td",href:"https://developer.android.com/reference/com/android/installreferrer/api/InstallReferrerClient.InstallReferrerResponse.html"},Object(o.b)("inlineCode",{parentName:"a"},"responseCode"))," is provided along with the error.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"ERR_APPLICATION_INSTALL_REFERRER_SERVICE_DISCONNECTED"),Object(o.b)("td",{parentName:"tr",align:null},"Connection to the install referrer service was lost. This error is thrown when an attempt was made to connect and set up the install referrer service, but the connection was lost. See the ",Object(o.b)("a",{parentName:"td",href:"https://developer.android.com/reference/com/android/installreferrer/api/InstallReferrerStateListener"},"Android documentation")," for more information.")))))}m.isMDXComponent=!0}},[["kAf1",1,0,2,3,4,5,6,7,8,9,10,11,12,13,14]]]);