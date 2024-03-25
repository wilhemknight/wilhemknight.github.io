_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[152],{"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var o=n("q1tI"),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),c=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,b=d["".concat(a,".").concat(m)]||d[m]||u[m]||i;return n?r.a.createElement(b,s(s({ref:t},l),{},{components:n})):r.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"===typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"===typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},HALo:function(e,t,n){"use strict";function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return o}))},MFiz:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/permissions",function(){return n("tXan")}])},Qetd:function(e,t,n){"use strict";var o=Object.assign.bind(Object);e.exports=o,e.exports.default=e.exports},dhJC:function(e,t,n){"use strict";function o(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,"a",(function(){return o}))},tXan:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return s})),n.d(t,"headings",(function(){return p})),n.d(t,"default",(function(){return c}));var o=n("HALo"),r=n("dhJC"),i=(n("q1tI"),n("7ljp")),a=["components"],s={title:"Permissions"},p=[{depth:2,type:"text",title:"iOS"},{depth:3,type:"text",title:"Managed workflow"},{depth:3,type:"text",title:"Bare workflow"},{depth:2,type:"text",title:"Android"},{depth:3,type:"text",title:"Managed workflow"},{depth:3,type:"text",title:"Bare workflow"},{depth:4,type:"text",title:"Excluding Android permissions"},{depth:2,type:"text",title:"Permissions on Web"},{depth:2,type:"text",title:"Manually testing permissions"}],l={meta:s,headings:p};function c(e){var t=e.components,n=Object(r.a)(e,a);return Object(i.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"When you are creating an app that requires access to potentially sensitive information on a user's device, such as their location or contacts, you need to ask for the user's permission first. For example, to access the user's media library, you will need to use ",Object(i.b)("a",{parentName:"p",href:"/../versions/latest/sdk/media-library/#medialibraryrequestpermissionsasync"},"MediaLibrary.requestPermissionsAsync()"),"."),Object(i.b)("p",null,"In Expo Go, there isn't much you need to think about to interact with permissions beyond requesting permissions before using certain APIs. This changes when you want to deploy your app to an app store. Please read the ",Object(i.b)("a",{parentName:"p",href:"/guides/permissions/#ios"},"permissions on iOS")," and ",Object(i.b)("a",{parentName:"p",href:"/guides/permissions/#android"},"permissions on Android")," sections carefully before deploying your app to stores. If you don't configure or explain the permissions properly ",Object(i.b)("strong",{parentName:"p"},"it may result in your app getting rejected or pulled from the stores"),". Read more about deploying to the stores in the ",Object(i.b)("a",{parentName:"p",href:"/../../distribution/app-stores/#system-permissions-dialogs-on-ios"},"App Store Deployment Guide"),"."),Object(i.b)("h2",{id:"ios"},"iOS"),Object(i.b)("h3",{id:"managed-workflow"},"Managed workflow"),Object(i.b)("p",null,"To request permissions on iOS, you have to describe why the permissions are requested and ",Object(i.b)("a",{parentName:"p",href:"/guides/permissions/#permissions-and-required-packages-on-ios"},"install the library")," that can request this permission. In the managed workflow, you can do that by customizing the ",Object(i.b)("inlineCode",{parentName:"p"},"ios.infoPlist")," property in your ",Object(i.b)("a",{parentName:"p",href:"/../../workflow/configuration/#ios"},Object(i.b)("strong",{parentName:"a"},"app.json")," file"),"."),Object(i.b)("p",null,"You can find the full list of available properties in ",Object(i.b)("a",{parentName:"p",href:"https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW1"},"Apple's InfoPlistKeyReference"),". Apple also documents the basic guidelines for the structure of the message in the ",Object(i.b)("a",{parentName:"p",href:"https://developer.apple.com/design/human-interface-guidelines/ios/app-architecture/requesting-permission/"},"Human Interface Guidelines"),"."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note:")," apps using permissions without descriptions ",Object(i.b)("em",{parentName:"p"},"may be rejected from the App Store"),". (see the ",Object(i.b)("a",{parentName:"p",href:"/../../distribution/app-stores/#system-permissions-dialogs-on-ios"},"App Store Deployment Guide"),")")),Object(i.b)("h3",{id:"bare-workflow"},"Bare workflow"),Object(i.b)("p",null,"To request permissions on iOS, you have to describe why the permissions are requested and install the library that requests and uses the permission. When using the bare workflow, you have to edit the project ",Object(i.b)("strong",{parentName:"p"},"Info.plist"),"."),Object(i.b)("p",null,"You can find the full list of available properties in ",Object(i.b)("a",{parentName:"p",href:"https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW1"},"Apple's InfoPlistKeyReference"),". Apple also documents the basic guidelines for the structure of the message in the ",Object(i.b)("a",{parentName:"p",href:"https://developer.apple.com/design/human-interface-guidelines/ios/app-architecture/requesting-permission/"},"Human Interface Guidelines"),"."),Object(i.b)("h2",{id:"android"},"Android"),Object(i.b)("h3",{id:"managed-workflow-1"},"Managed workflow"),Object(i.b)("p",null,"On Android, permissions are little bit simpler than iOS. In the managed workflow, permissions are controlled via the ",Object(i.b)("inlineCode",{parentName:"p"},"android.permissions")," property in your ",Object(i.b)("a",{parentName:"p",href:"/../workflow/configuration/#android"},Object(i.b)("strong",{parentName:"a"},"app.json")," file"),". In the bare workflow, they have to be defined in your ",Object(i.b)("strong",{parentName:"p"},"AndroidManifest.xml"),"."),Object(i.b)("p",null,"Some Expo and React Native modules include permissions by default. If you use ",Object(i.b)("inlineCode",{parentName:"p"},"expo-location"),", for example, both the ",Object(i.b)("inlineCode",{parentName:"p"},"ACCESS_COARSE_LOCATION")," and ",Object(i.b)("inlineCode",{parentName:"p"},"ACCESS_FINE_LOCATION")," are implied and added to your app's permissions automatically."),Object(i.b)("p",null,"To limit the permissions your managed workflow app requires, set the ",Object(i.b)("inlineCode",{parentName:"p"},"android.permissions")," property in your ",Object(i.b)("a",{parentName:"p",href:"/../workflow/configuration/#android"},Object(i.b)("strong",{parentName:"a"},"app.json")," file")," to list only the permissions you need, and Expo will also include the minimum permissions it requires to run. See the ",Object(i.b)("a",{parentName:"p",href:"/guides/permissions/#permission-types"},Object(i.b)("inlineCode",{parentName:"a"},"Permission types"))," below to learn about which Android permissions are added. You can find a full list of all available permissions in the ",Object(i.b)("a",{parentName:"p",href:"https://developer.android.com/reference/android/Manifest.permission"},"Android Manifest.permissions reference"),"."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/../../../../../../versions/latest/config/app/#permissions"},"See the ",Object(i.b)("inlineCode",{parentName:"a"},"android.permissions")," documentation")," to learn about which permissions are always included."),Object(i.b)("li",{parentName:"ul"},"Apps using dangerous or signature permissions without valid reasons ",Object(i.b)("em",{parentName:"li"},"may be rejected by Google"),". Make sure you follow the ",Object(i.b)("a",{parentName:"li",href:"https://developer.android.com/training/permissions/usage-notes"},"Android permissions best practices")," when submitting your app."),Object(i.b)("li",{parentName:"ul"},"By default, the permissions implied by the modules you installed are added to the ",Object(i.b)("strong",{parentName:"li"},"AndroidManifest.xml")," at build time. To exclude permissions, you have to define the ",Object(i.b)("inlineCode",{parentName:"li"},"android.permissions")," manifest property.")),Object(i.b)("h3",{id:"bare-workflow-1"},"Bare workflow"),Object(i.b)("p",null,"In the bare workflow, permissions are controlled in your project ",Object(i.b)("strong",{parentName:"p"},"AndroidManifest.xml"),"."),Object(i.b)("p",null,"Some Expo and React Native modules include permissions by default. If you use ",Object(i.b)("inlineCode",{parentName:"p"},"expo-location"),", for example, both the ",Object(i.b)("inlineCode",{parentName:"p"},"ACCESS_COARSE_LOCATION")," and ",Object(i.b)("inlineCode",{parentName:"p"},"ACCESS_FINE_LOCATION")," are implied and added to your app's permissions automatically. To limit the permissions your managed workflow app requires, add them them to a ",Object(i.b)("a",{parentName:"p",href:"/guides/permissions/#excluding-android-permissions"},"list of explicitly excluded permissions"),"."),Object(i.b)("p",null,"Apps using dangerous or signature permissions without valid reasons ",Object(i.b)("em",{parentName:"p"},"may be rejected by Google"),". Make sure you follow the ",Object(i.b)("a",{parentName:"p",href:"https://developer.android.com/training/permissions/usage-notes"},"Android permissions best practices")," when submitting your app."),Object(i.b)("h4",{id:"excluding-android-permissions"},"Excluding Android permissions"),Object(i.b)("p",null,"When adding Expo and other React Native modules to your project, certain Android permissions might be implied automatically. The modules should only add relevant permissions ",Object(i.b)("strong",{parentName:"p"},"required")," to use the module, however, sometimes you may want to remove some of these permissions."),Object(i.b)("p",null,"Since the ",Object(i.b)("inlineCode",{parentName:"p"},"android.permissions")," manifest property doesn't work in the bare workflow, you'll need to edit ",Object(i.b)("strong",{parentName:"p"},"AndroidManifest.xml")," to exclude specific permissions from the build. You can do that with the ",Object(i.b)("inlineCode",{parentName:"p"},'tools:node="remove"')," attribute on the ",Object(i.b)("inlineCode",{parentName:"p"},"<use-permission>")," tag."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},'<manifest xmlns:tools="http://schemas.android.com/tools">\n  <uses-permission tools:node="remove" android:name="android.permission.ACCESS_FINE_LOCATION" />\n</manifest>\n')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note:")," you have to define the ",Object(i.b)("inlineCode",{parentName:"p"},"xmlns:tools")," attribute on ",Object(i.b)("inlineCode",{parentName:"p"},"<manifest>")," before you can use the ",Object(i.b)("inlineCode",{parentName:"p"},"tools:node")," attribute on permissions.")),Object(i.b)("h2",{id:"permissions-on-web"},"Permissions on Web"),Object(i.b)("p",null,"On web permissions like the ",Object(i.b)("inlineCode",{parentName:"p"},"Camera")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Location")," can only be requested from a ",Object(i.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts#When_is_a_context_considered_secure"},"secure context"),", e.g. using ",Object(i.b)("inlineCode",{parentName:"p"},"https://")," or ",Object(i.b)("inlineCode",{parentName:"p"},"http://localhost"),". This limitation is similar to Android's manifest permissions and iOS's infoPlist usage messages and enforced to increase privacy."),Object(i.b)("h2",{id:"manually-testing-permissions"},"Manually testing permissions"),Object(i.b)("p",null,"Often you want to be able to test what happens when a user rejects a permission, to ensure that it has the desired behavior. An operating-system level restriction on both iOS and Android prohibits an app from asking for the same permission more than once (you can imagine how this could be annoying for the user to be repeatedly prompted for permissions). So in order to test different flows involving permissions in development, you may need to uninstall and reinstall the Expo Go app. In the simulator this is as easy as deleting the app, and ",Object(i.b)("inlineCode",{parentName:"p"},"expo-cli")," will automatically install it again next time you launch the project."))}c.isMDXComponent=!0}},[["MFiz",1,0]]]);