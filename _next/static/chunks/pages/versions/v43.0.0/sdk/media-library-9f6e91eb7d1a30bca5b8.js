_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[1162],{"/j7i":function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v43.0.0/sdk/media-library",function(){return t("ehkK")}])},ehkK:function(e,i,t){"use strict";t.r(i),t.d(i,"meta",(function(){return c})),t.d(i,"headings",(function(){return m})),t.d(i,"default",(function(){return h}));var o=t("HALo"),a=t("dhJC"),n=(t("q1tI"),t("7ljp")),r=t("vFJ3"),s=t("utVh"),p=t("3Ukx"),b=t("HCau"),d=t("hykZ"),l=["components"],c={title:"MediaLibrary",sourceCodeUrl:"https://github.com/expo/expo/tree/sdk-43/packages/expo-media-library"},m=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"Configuration in app.json / app.config.js"},{depth:2,type:"text",title:"API"},{depth:2,type:"text",title:"Permissions"},{depth:3,type:"text",title:"Android"},{depth:3,type:"text",title:"iOS"}],u={meta:c,headings:m};function h(e){var i=e.components,t=Object(a.a)(e,l);return Object(n.b)("wrapper",Object(o.a)({},u,t,{components:i,mdxType:"MDXLayout"}),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("inlineCode",{parentName:"strong"},"expo-media-library"))," provides access to the user's media library, allowing them to access their existing images and videos from your app, as well as save new ones. You can also subscribe to any updates made to the user's media library."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"\u26a0\ufe0f If your Android app created an album using SDK <= 40 and you want to add more assets to this album, you may need to migrate it to the new scoped directory. Otherwise, your app won't have access to the old album directory and expo-media-library won't be able to add new assets to it. However, all other functions will work without problems. You only need to migrate the old album if you want to add something to it. For more information, check out ",Object(n.b)("a",{parentName:"p",href:"https://expo.fyi/android-r"},"Android R changes")," and ",Object(n.b)("a",{parentName:"p",href:"/versions/v43.0.0/sdk/media-library/#medialibrarymigratealbumifneededasyncalbum"},Object(n.b)("inlineCode",{parentName:"a"},"MediaLibrary.migrateAlbumIfNeededAsync")),".")),Object(n.b)(d.a,{android:!0,emulator:!0,ios:!0,simulator:!0,mdxType:"PlatformsSection"}),Object(n.b)("h2",{id:"installation"},"Installation"),Object(n.b)(b.b,{packageName:"expo-media-library",mdxType:"InstallSection"}),Object(n.b)("h2",{id:"configuration-in-appjson--appconfigjs"},"Configuration in app.json / app.config.js"),Object(n.b)("p",null,"You can configure ",Object(n.b)("inlineCode",{parentName:"p"},"expo-media-library")," using its built-in ",Object(n.b)("a",{parentName:"p",href:"/guides/config-plugins/"},"config plugin")," if you use config plugins in your project (",Object(n.b)("a",{parentName:"p",href:"/build/introduction/"},"EAS Build")," or ",Object(n.b)("inlineCode",{parentName:"p"},"expo run:[android|ios]"),"). The plugin allows you to configure various properties that cannot be set at runtime and require building a new app binary to take effect."),Object(n.b)(r.a,{mdxType:"ConfigClassic"},Object(n.b)("p",null,"You can configure ",Object(n.b)("a",{parentName:"p",href:"/versions/v43.0.0/sdk/media-library/#permissions"},"the permissions for this library")," using ",Object(n.b)("a",{parentName:"p",href:"/versions/v43.0.0/config/app/#infoplist"},Object(n.b)("inlineCode",{parentName:"a"},"ios.infoPlist"))," and ",Object(n.b)("a",{parentName:"p",href:"/versions/v43.0.0/config/app/#permissions"},Object(n.b)("inlineCode",{parentName:"a"},"android.permissions")),".")),Object(n.b)(r.d,{mdxType:"ConfigReactNative"},Object(n.b)("p",null,"Learn how to configure the native projects in the ",Object(n.b)("a",{parentName:"p",href:"https://github.com/expo/expo/tree/main/packages/expo-media-library#installation-in-bare-react-native-projects"},"installation instructions in the ",Object(n.b)("inlineCode",{parentName:"a"},"expo-media-library")," repository"),".")),Object(n.b)(r.b,{mdxType:"ConfigPluginExample"},Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-json"},'{\n  "expo": {\n    "plugins": [\n      [\n        "expo-media-library",\n        {\n          "photosPermission": "Allow $(PRODUCT_NAME) to access your photos.",\n          "savePhotosPermission": "Allow $(PRODUCT_NAME) to save photos.",\n          "isAccessMediaLocationEnabled": true\n        }\n      ]\n    ]\n  }\n}\n'))),Object(n.b)(r.c,{properties:[{name:"photosPermission",platform:"ios",description:"Sets the iOS `NSPhotoLibraryUsageDescription` permission message in Info.plist.",default:'"Allow $(PRODUCT_NAME) to access your photos."'},{name:"savePhotosPermission",platform:"ios",description:"Sets the iOS `NSPhotoLibraryAddUsageDescription` permission message in Info.plist.",default:'"Allow $(PRODUCT_NAME) to save photos."'},{name:"isAccessMediaLocationEnabled",platform:"android",description:"Sets whether or not to request the `ACCESS_MEDIA_LOCATION` permission on Android.",default:"false"}],mdxType:"ConfigPluginProperties"}),Object(n.b)("h2",{id:"api"},"API"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},"import * as MediaLibrary from 'expo-media-library';\n")),Object(n.b)(p.a,{packageName:"expo-media-library",apiName:"MediaLibrary",mdxType:"APISection"}),Object(n.b)("h2",{id:"permissions"},"Permissions"),Object(n.b)("h3",{id:"android"},"Android"),Object(n.b)("p",null,"The following permissions are added automatically through this library's ",Object(n.b)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),"."),Object(n.b)(s.a,{permissions:["READ_EXTERNAL_STORAGE","WRITE_EXTERNAL_STORAGE"],mdxType:"AndroidPermissions"}),Object(n.b)("h3",{id:"ios"},"iOS"),Object(n.b)("p",null,"The following usage description keys are used by this library:"),Object(n.b)(s.b,{permissions:["NSPhotoLibraryUsageDescription","NSPhotoLibraryAddUsageDescription"],mdxType:"IOSPermissions"}))}h.isMDXComponent=!0}},[["/j7i",1,0,2,3,4,5,6,7,8,9,10,11,12,13,14,16]]]);