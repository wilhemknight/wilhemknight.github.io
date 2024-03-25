_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[173],{"4DkH":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return p})),n.d(t,"headings",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n("HALo"),o=n("dhJC"),a=(n("q1tI"),n("7ljp")),i=["components"],p={title:"Using Hermes Engine",sidebar_title:"Using Hermes"},s=[{depth:2,type:"text",title:"Android setup"},{depth:2,type:"text",title:"iOS setup"},{depth:2,type:"text",title:"Advanced setup"},{depth:3,type:"text",title:"Switch JavaScript engine on a specific platform"},{depth:2,type:"text",title:"Publish updates"},{depth:2,type:"text",title:"JavaScript inspector for Hermes"},{depth:2,type:"text",title:"Limitations"},{depth:3,type:"inlineCode",title:"Standalone apps created with  expo build  are not supported"}],c={meta:p,headings:s};function l(e){var t=e.components,n=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Hermes is supported for apps built with ",Object(a.b)("a",{parentName:"p",href:"/../../../../../../build/introduction"},"EAS Build"),". There are no plans to backport support to ",Object(a.b)("inlineCode",{parentName:"p"},"expo build"),". ",Object(a.b)("a",{parentName:"p",href:"/guides/using-hermes/#limitations"},'Jump to "Limitations"'),".")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://hermesengine.dev/"},"Hermes")," is a JavaScript engine optimized for React Native. By compiling JavaScript into bytecode ahead of time, Hermes can improve your app start-up time. The binary size of Hermes is also smaller than other JavaScript engines, such as JavaScriptCore (JSC). It also uses less memory at runtime, which is particularly valuable on lower-end Android devices."),Object(a.b)("p",null,"A limitation with JavaScriptCore is that the debugger does not work with modules built on top of ",Object(a.b)("a",{parentName:"p",href:"https://github.com/react-native-community/discussions-and-proposals/issues/91"},"JSI"),". If your app uses ",Object(a.b)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated"},"react-native-reanimated")," version 2, for example, ",Object(a.b)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-reanimated/docs/#known-problems-and-limitations"},"remote JS debugging will not work"),". Hermes makes it possible to debug your app even when using JSI modules."),Object(a.b)("h2",{id:"android-setup"},"Android setup"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Hermes for Android is supported from SDK 42 and above in Expo Go, ",Object(a.b)("a",{parentName:"p",href:"/../../../../../../development/introduction/"},"development builds")," built with ",Object(a.b)("inlineCode",{parentName:"p"},"expo-dev-client")," and standalone apps built with EAS Build. For bare apps created before SDK 42, ",Object(a.b)("a",{parentName:"p",href:"https://expo.fyi/hermes-android-config"},"follow these instructions to update your project configuration"),".")),Object(a.b)("p",null,"To get started, open your ",Object(a.b)("strong",{parentName:"p"},"app.json")," and add ",Object(a.b)("inlineCode",{parentName:"p"},"jsEngine")," field:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'{\n  "expo": {\n    /* @info Add the "jsEngine" field here. Supported values are "hermes" or "jsc" */\n    "jsEngine": "hermes"\n   /* @end */\n  }\n}\n')),Object(a.b)("p",null,"Now you can build an APK or AAB through ",Object(a.b)("inlineCode",{parentName:"p"},"eas build")," and your app will run with Hermes instead of JavaScriptCore."),Object(a.b)("h2",{id:"ios-setup"},"iOS setup"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Hermes for iOS is supported from SDK 43 and above in ",Object(a.b)("a",{parentName:"p",href:"/../../../../../../development/introduction/"},"development builds")," using ",Object(a.b)("inlineCode",{parentName:"p"},"expo-dev-client")," and standalone apps built with EAS Build. Hermes is not supported in Expo Go for iOS. For bare apps created before SDK 43, ",Object(a.b)("a",{parentName:"p",href:"https://expo.fyi/hermes-ios-config"},"follow these instructions to update your project configuration"),".")),Object(a.b)("p",null,"To get started, open your ",Object(a.b)("strong",{parentName:"p"},"app.json")," and add ",Object(a.b)("inlineCode",{parentName:"p"},"jsEngine")," field:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'{\n  "expo": {\n    /* @info Add the "jsEngine" field here. Supported values are "hermes" or "jsc" */\n    "jsEngine": "hermes"\n  /* @end */\n  }\n}\n')),Object(a.b)("p",null,"Now you can build your app through ",Object(a.b)("inlineCode",{parentName:"p"},"eas build")," and your app will run with Hermes instead of JavaScriptCore."),Object(a.b)("details",null,Object(a.b)("summary",null,Object(a.b)("h4",null,"Are you using an M1 Mac?")),Object(a.b)("p",null,Object(a.b)("p",null,"When using Hermes for iOS, you may encounter the following error when building for the simulator:"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u274c ",Object(a.b)("inlineCode",{parentName:"p"},"ld: building for iOS Simulator, but linking in dylib built for iOS, file '/path/to/projectName/ios/Pods/hermes-engine/destroot/Library/Frameworks/iphoneos/hermes.framework/hermes' for architecture arm64"))),Object(a.b)("p",null,"This is ",Object(a.b)("a",{parentName:"p",href:"https://github.com/facebook/hermes/issues/468"},"a known issue for React Native 0.64"),"; to workaround it, you can add the following patch to your ",Object(a.b)("inlineCode",{parentName:"p"},"ios/Podfile"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-diff"},"--- a/ios/Podfile\n+++ b/ios/Podfile\n@@ -25,6 +25,22 @@ target 'HelloWorld' do\n   post_install do |installer|\n     react_native_post_install(installer)\n\n+    # Workaround simulator build error for hermes with react-native 0.64 on mac m1 devices\n+    arm_value = `/usr/sbin/sysctl -n hw.optional.arm64 2>&1`.to_i\n+    has_hermes = has_pod(installer, 'hermes-engine')\n+    if arm_value == 1 && has_hermes\n+      projects = installer.aggregate_targets\n+        .map{ |t| t.user_project }\n+        .uniq{ |p| p.path }\n+        .push(installer.pods_project)\n+      projects.each do |project|\n+        project.build_configurations.each do |config|\n+          config.build_settings[\"EXCLUDED_ARCHS[sdk=iphonesimulator*]\"] = config.build_settings[\"EXCLUDED_ARCHS[sdk=iphonesimulator*]\"] + ' arm64'\n+        end\n+        project.save()\n+      end\n+    end\n+\n     # Workaround `Cycle inside FBReactNativeSpec` error for react-native 0.64\n     # Reference: https://github.com/software-mansion/react-native-screens/issues/842#issuecomment-812543933\n     installer.pods_project.targets.each do |target|\n")),Object(a.b)("p",null,"Reinstall Pods and clean Xcode build cache:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"$ npx pod-install\n$ xcodebuild clean -workspace ios/{projectName}.xcworkspace -scheme {projectName}\n")))),Object(a.b)("h2",{id:"advanced-setup"},"Advanced setup"),Object(a.b)("h3",{id:"switch-javascript-engine-on-a-specific-platform"},"Switch JavaScript engine on a specific platform"),Object(a.b)("p",null,"You may want to use Hermes on one platform and JSC on another. One way to do this is to set the ",Object(a.b)("inlineCode",{parentName:"p"},'"jsEngine"')," to ",Object(a.b)("inlineCode",{parentName:"p"},'"hermes"')," at the top level and then override it with ",Object(a.b)("inlineCode",{parentName:"p"},'"jsc"')," under the ",Object(a.b)("inlineCode",{parentName:"p"},'"ios"')," key. You may alternatively prefer to explicitly set ",Object(a.b)("inlineCode",{parentName:"p"},'"hermes"')," on just the ",Object(a.b)("inlineCode",{parentName:"p"},'"android"')," key in this case."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'{\n  "expo": {\n    "jsEngine": "hermes",\n    "ios": {\n      /* @info jsEngine inside platform section will take precedence over the common field */\n      "jsEngine": "jsc"\n    /* @end */\n    }\n  }\n}\n')),Object(a.b)("h2",{id:"publish-updates"},"Publish updates"),Object(a.b)("p",null,"Publishing updates with ",Object(a.b)("inlineCode",{parentName:"p"},"expo publish")," and ",Object(a.b)("inlineCode",{parentName:"p"},"expo export")," will generate Hermes bytecode bundles and their source maps."),Object(a.b)("p",null,"Please note that the Hermes bytecode format may change between different versions of ",Object(a.b)("inlineCode",{parentName:"p"},"hermes-engine")," \u2014 an update produced for a specific version of Hermes will not run on a different version of Hermes. Updating the Hermes version can be thought of in the same way as updating any other native module, and so if you update the ",Object(a.b)("inlineCode",{parentName:"p"},"hermes-engine")," version you should also update the ",Object(a.b)("inlineCode",{parentName:"p"},"runtimeVersion")," in ",Object(a.b)("strong",{parentName:"p"},"app.json"),". If you don't do this, your app may crash on launch because the update may be loaded by an existing binary that uses an older version of ",Object(a.b)("inlineCode",{parentName:"p"},"hermes-engine")," that is incompatible with the updated bytecode format. See ",Object(a.b)("a",{parentName:"p",href:"/../../../../../../bare/updating-your-app/#update-compatibility"},'"Update Compatibility"')," for more information."),Object(a.b)("h2",{id:"javascript-inspector-for-hermes"},"JavaScript inspector for Hermes"),Object(a.b)("p",null,"To debug JavaScript code running with Hermes, you can start your project with ",Object(a.b)("inlineCode",{parentName:"p"},"expo start")," then press ",Object(a.b)("inlineCode",{parentName:"p"},"j")," to open the JavaScript inspector in Google Chrome or Microsoft Edge. ",Object(a.b)("em",{parentName:"p"},"This is only supported for debug builds.")),Object(a.b)("p",null,"Alternatively, you can use the JavaScript inspector from the following tools:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://reactnative.dev/docs/hermes#debugging-js-on-hermes-using-google-chromes-devtools"},"Open Google Chrome DevTools manually")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://fbflipper.com/"},"Flipper"))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\ud83d\udca1 ",Object(a.b)("a",{parentName:"p",href:"/../../../../../../development/introduction/"},"Development builds")," built with ",Object(a.b)("inlineCode",{parentName:"p"},"expo-dev-client")," simplify this process by integrating directly with the JavaScript inspector in Hermes.")),Object(a.b)("h2",{id:"limitations"},"Limitations"),Object(a.b)("h3",{id:"standalone-apps-created-with-expo-build-are-not-supported"},"Standalone apps created with ",Object(a.b)("inlineCode",{parentName:"h3"},"expo build")," are not supported"),Object(a.b)("p",null,"The classic build system ",Object(a.b)("a",{parentName:"p",href:"https://blog.expo.dev/expo-managed-workflow-in-2021-5b887bbf7dbb"},"isn't flexible enough")," to support using Hermes for some apps and not for others. You will need to use the new build system, ",Object(a.b)("a",{parentName:"p",href:"/../../../../../../build/introduction"},"EAS Build"),", to use Hermes in your standalone apps."))}l.isMDXComponent=!0},"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n("q1tI"),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),l=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"===typeof e?e(t):p(p({},t),e)),n},b=function(e){var t=l(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||a;return n?o.a.createElement(m,p(p({ref:t},c),{},{components:n})):o.a.createElement(m,p({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"===typeof e?e:r,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},HALo:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},dhJC:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))},tQEp:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/using-hermes",function(){return n("4DkH")}])}},[["tQEp",1,0]]]);