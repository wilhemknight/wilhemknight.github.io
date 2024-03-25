_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[126],{"7ljp":function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t("q1tI"),o=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),d=function(e){var n=o.a.useContext(c),t=n;return e&&(t="function"===typeof e?e(n):p(p({},n),e)),t},b=function(e){var n=d(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=d(t),u=a,m=b["".concat(r,".").concat(u)]||b[u]||s[u]||i;return t?o.a.createElement(m,p(p({ref:n},c),{},{components:t})):o.a.createElement(m,p({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"===typeof e||a){var i=t.length,r=new Array(i);r[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"===typeof e?e:a,r[1]=p;for(var c=2;c<i;c++)r[c]=t[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},HALo:function(e,n,t){"use strict";function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return a}))},Qetd:function(e,n,t){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},dhJC:function(e,n,t){"use strict";function a(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}t.d(n,"a",(function(){return a}))},kF2Y:function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return p})),t.d(n,"headings",(function(){return l})),t.d(n,"default",(function(){return d}));var a=t("HALo"),o=t("dhJC"),i=(t("q1tI"),t("7ljp")),r=["components"],p={title:"Developing With ExpoKit"},l=[{depth:2,type:"text",title:"Before you read this guide"},{depth:2,type:"text",title:"Setting up your project"},{depth:3,type:"text",title:"1. Check JS dependencies"},{depth:3,type:"text",title:"2. Run the project with Expo CLI"},{depth:3,type:"text",title:"3. iOS: Configure, build and run"},{depth:3,type:"text",title:"4. Android: Build and run"},{depth:2,type:"text",title:"Continuing with development"},{depth:2,type:"text",title:"Changing Native Dependencies"},{depth:3,type:"text",title:"iOS"},{depth:3,type:"text",title:"Android"},{depth:2,type:"text",title:"Upgrading ExpoKit"},{depth:3,type:"text",title:"iOS"},{depth:3,type:"text",title:"Android"}],c={meta:p,headings:l};function d(e){var n=e.components,t=Object(o.a)(e,r);return Object(i.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\ud83d\udeab ExpoKit is deprecated and is no longer supported after SDK 38. If you need to make customizations to your Expo project, we recommend using the ",Object(i.b)("a",{parentName:"p",href:"/workflow/customizing/"},"bare workflow")," instead.")),Object(i.b)("p",null,"ExpoKit is an Objective-C and Java library that allows you to use the Expo platform with a\nnative iOS/Android project."),Object(i.b)("h2",{id:"before-you-read-this-guide"},"Before you read this guide"),Object(i.b)("p",null,"To create an ExpoKit project:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Create a pure-JS project with Expo CLI (also projects that were created with exp, XDE or create-react-native-app will work)"),Object(i.b)("li",{parentName:"ol"},"Then use ",Object(i.b)("a",{parentName:"li",href:"/expokit/eject/"},Object(i.b)("inlineCode",{parentName:"a"},"expo eject")),' to add ExpoKit (choose the "ExpoKit" option).')),Object(i.b)("p",null,"Make sure to perform these steps before continuing in this guide. The remainder of the guide will assume you have created an ExpoKit project."),Object(i.b)("h2",{id:"setting-up-your-project"},"Setting up your project"),Object(i.b)("p",null,"By this point you should have a JS app which additionally contains ",Object(i.b)("inlineCode",{parentName:"p"},"ios")," and ",Object(i.b)("inlineCode",{parentName:"p"},"android")," directories."),Object(i.b)("h3",{id:"1-check-js-dependencies"},"1. Check JS dependencies"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Your project's ",Object(i.b)("strong",{parentName:"li"},"package.json")," should contain a ",Object(i.b)("inlineCode",{parentName:"li"},"react-native")," dependency pointing at Expo's fork of React Native. This should already be configured for you."),Object(i.b)("li",{parentName:"ul"},"Your JS dependencies should already be installed (via ",Object(i.b)("inlineCode",{parentName:"li"},"npm install")," or ",Object(i.b)("inlineCode",{parentName:"li"},"yarn"),").")),Object(i.b)("h3",{id:"2-run-the-project-with-expo-cli"},"2. Run the project with Expo CLI"),Object(i.b)("p",null,"Run ",Object(i.b)("inlineCode",{parentName:"p"},"expo start")," from the project directory."),Object(i.b)("p",null,"This step ensures that the Metro bundler is running and serving your app's JS bundle for development. Leave this running and continue with the following steps."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: Before building for release, you ",Object(i.b)("strong",{parentName:"p"},"must")," run ",Object(i.b)("inlineCode",{parentName:"p"},"expo publish")," to serve your app's JS bundle in TestFlight and production.")),Object(i.b)("h3",{id:"3-ios-configure-build-and-run"},"3. iOS: Configure, build and run"),Object(i.b)("p",null,"This step ensures the native iOS project is correctly configured and ready for development."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Make sure you have the latest Xcode."),Object(i.b)("li",{parentName:"ul"},"Run ",Object(i.b)("inlineCode",{parentName:"li"},"npx pod-install")," to link the native iOS packages"),Object(i.b)("li",{parentName:"ul"},"Open your project's ",Object(i.b)("inlineCode",{parentName:"li"},"xcworkspace")," file in Xcode."),Object(i.b)("li",{parentName:"ul"},'Use Xcode to build, install and run the project on your test device or simulator. (this will happen by default if you click the big "Play" button in Xcode.)')),Object(i.b)("p",null,"Once it's running, the iOS app should automatically request your JS bundle from the project you're serving from Expo CLI."),Object(i.b)("h3",{id:"4-android-build-and-run"},"4. Android: Build and run"),Object(i.b)("p",null,"Open the ",Object(i.b)("strong",{parentName:"p"},"android")," directory in Android Studio, then build and run the project on an Android device or emulator."),Object(i.b)("p",null,"When opening the project, Android Studio may prompt you to upgrade the version of Gradle or other build tools, but don't do this as you may get unexpected results. ExpoKit always ships with the latest supported versions of all build tools."),Object(i.b)("p",null,"If you prefer to use the command line, you can run ",Object(i.b)("inlineCode",{parentName:"p"},"./gradlew installDebug")," from inside the ",Object(i.b)("strong",{parentName:"p"},"android")," directory to build the project and install it on the running device/emulator."),Object(i.b)("p",null,"Once the Android project is running, it should automatically request your development url from Expo CLI. You can develop your project normally from here."),Object(i.b)("h2",{id:"continuing-with-development"},"Continuing with development"),Object(i.b)("p",null,"Every time you want to develop, ensure your project's JS is being served by Expo CLI (step 2), then run the native code from Xcode or Android Studio respectively."),Object(i.b)("p",null,"Your ExpoKit project is configured to load your app's published url when you build it for release. So when you want to release it, don't forget to publish, like with any normal (non-ExpoKit) project."),Object(i.b)("h2",{id:"changing-native-dependencies"},"Changing Native Dependencies"),Object(i.b)("h3",{id:"ios"},"iOS"),Object(i.b)("p",null,"Your ExpoKit project manages its dependencies with ",Object(i.b)("a",{parentName:"p",href:"https://cocoapods.org"},"CocoaPods"),"."),Object(i.b)("p",null,"Many libraries in the React Native ecosystem include instructions to run ",Object(i.b)("inlineCode",{parentName:"p"},"react-native link"),". These are supported with ExpoKit for iOS."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If the library supports CocoaPods (has a .podspec file), just follow the normal instructions and run ",Object(i.b)("inlineCode",{parentName:"li"},"react-native link"),"."),Object(i.b)("li",{parentName:"ul"},"If the library doesn't support CocoaPods, ",Object(i.b)("inlineCode",{parentName:"li"},"react-native link")," may fail to include the library's header files. If you encounter build issues locating the ",Object(i.b)("inlineCode",{parentName:"li"},"<React/*>")," headers, you may need to manually add ",Object(i.b)("inlineCode",{parentName:"li"},"Pods/Headers/Public")," to the ",Object(i.b)("strong",{parentName:"li"},"Header Search Paths"),' configuration for your native dependency in Xcode. If you\'re not familiar with Xcode, search Xcode help for "configure build settings" to get an idea of how those work. ',Object(i.b)("strong",{parentName:"li"},"Header Search Paths")," is one such build setting. The target you care to configure is the one created by ",Object(i.b)("inlineCode",{parentName:"li"},"react-native link")," inside your Xcode project. You'll want to determine the relative path from your library to ",Object(i.b)("inlineCode",{parentName:"li"},"Pods/Headers/Public"),".")),Object(i.b)("h3",{id:"android"},"Android"),Object(i.b)("p",null,"Many libraries in the React Native ecosystem include instructions to run ",Object(i.b)("inlineCode",{parentName:"p"},"react-native link"),". These are supported with ExpoKit for Android."),Object(i.b)("h2",{id:"upgrading-expokit"},"Upgrading ExpoKit"),Object(i.b)("p",null,"ExpoKit's release cycle follows the Expo SDK release cycle. When a new version of the Expo SDK comes out, the release notes include upgrade instructions for the normal, JS-only part of your project. Additionally, you'll need to update the native ExpoKit code."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note:")," Please make sure you've already updated your JS dependencies before proceeding with the following instructions. Additionally, there may be version-specific breaking changes not covered here.")),Object(i.b)("h3",{id:"ios-1"},"iOS"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Open up ",Object(i.b)("inlineCode",{parentName:"li"},"ios/Podfile")," in your project, and update the ",Object(i.b)("inlineCode",{parentName:"li"},"ExpoKit")," tag to point at the ",Object(i.b)("a",{parentName:"li",href:"https://github.com/expo/expo/releases"},"release")," corresponding to your SDK version. Run ",Object(i.b)("inlineCode",{parentName:"li"},"pod update")," then ",Object(i.b)("inlineCode",{parentName:"li"},"pod install"),"."),Object(i.b)("li",{parentName:"ul"},"Open ",Object(i.b)("inlineCode",{parentName:"li"},"ios/your-project/Supporting/EXSDKVersions.plist")," in your project and change all the values to the new SDK version."),Object(i.b)("li",{parentName:"ul"},"Install or upgrade ",Object(i.b)("inlineCode",{parentName:"li"},"react-native-unimodules@^0.7.0")," in your project (",Object(i.b)("inlineCode",{parentName:"li"},"yarn add -D react-native-unimodules@^0.7.0")," or ",Object(i.b)("inlineCode",{parentName:"li"},"npm install --save-dev react-native-unimodules@^0.7.0")," if you prefer npm over Yarn).")),Object(i.b)("p",null,"Additionally, if upgrading from SDK 35 or below:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Replace")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ruby"},"pod 'React',\n(...)\n  pod 'glog',\n    :podspec => \"#{react_native_path}/third-party-podspecs/glog.podspec\",\n    :inhibit_warnings => true\n")),Object(i.b)("p",null,"with"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ruby"}," # Install React Native and its dependencies\n require_relative '../node_modules/react-native/scripts/autolink-ios.rb'\n use_react_native!\n")),Object(i.b)("p",null,"If upgrading from SDK 32 or below:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"If you haven't already done so install ",Object(i.b)("inlineCode",{parentName:"p"},"react-native-unimodules@^0.7.0")," in your project (",Object(i.b)("inlineCode",{parentName:"p"},"yarn add -D react-native-unimodules@^0.7.0")," or ",Object(i.b)("inlineCode",{parentName:"p"},"npm install --save-dev react-native-unimodules@^0.7.0")," if you prefer npm over Yarn).")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Remove the list of unimodules' dependencies:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-ruby"},"  pod 'EXAdsAdMob',\n    :path => \"../node_modules/expo-ads-admob/ios\"\n  pod 'EXSegment',\n    :path => \"../node_modules/expo-analytics-segment/ios\"\n  pod 'EXAppAuth',\n    :path => \"../node_modules/expo-app-auth/ios\"\n  # and so on...\n")),Object(i.b)("p",{parentName:"li"},"and instead add:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-ruby"},"  # Install unimodules\n  require_relative '../node_modules/react-native-unimodules/cocoapods.rb'\n  use_unimodules!\n")),Object(i.b)("p",{parentName:"li"},"This will introduce your project to autoinstallable unimodules. More information can be found on the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/expo/expo/tree/main/packages/react-native-unimodules"},Object(i.b)("inlineCode",{parentName:"a"},"react-native-unimodules")," repository"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Upgrade CocoaPods to some version higher or equal 1.6. (At the moment of writing the latest version is 1.7.1, we have tested it works. You will probably need to run ",Object(i.b)("inlineCode",{parentName:"p"},"gem update cocoapods"),", but the exact command will depend on your setup.)")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Change the whole ",Object(i.b)("inlineCode",{parentName:"p"},"post_install")," block at the bottom of the ",Object(i.b)("inlineCode",{parentName:"p"},"Podfile")," to"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-ruby"},"post_install do |installer|\n  installer.pods_project.main_group.tab_width = '2';\n  installer.pods_project.main_group.indent_width = '2';\n\n  installer.target_installation_results.pod_target_installation_results\n    .each do |pod_name, target_installation_result|\n\n    if pod_name == 'ExpoKit'\n      target_installation_result.native_target.build_configurations.each do |config|\n        config.build_settings['GCC_PREPROCESSOR_DEFINITIONS'] ||= ['$(inherited)']\n        config.build_settings['GCC_PREPROCESSOR_DEFINITIONS'] << 'EX_DETACHED=1'\n\n        # Enable Google Maps support\n        config.build_settings['GCC_PREPROCESSOR_DEFINITIONS'] << 'HAVE_GOOGLE_MAPS=1'\n        config.build_settings['GCC_PREPROCESSOR_DEFINITIONS'] << 'HAVE_GOOGLE_MAPS_UTILS=1'\n      end\n    end\n")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"    if ['Amplitude','Analytics','AppAuth','Branch','CocoaLumberjack','FBSDKCoreKit','FBSDKLoginKit','FBSDKShareKit','GPUImage','JKBigInteger2'].include? pod_name\n      target_installation_result.native_target.build_configurations.each do |config|\n        config.build_settings['IPHONEOS_DEPLOYMENT_TARGET'] = '10.0'\n      end\n    end\n\n    # Can't specify this in the React podspec because we need to use those podspecs for detached\n    # projects which don't reference ExponentCPP.\n    if pod_name.start_with?('React')\n      target_installation_result.native_target.build_configurations.each do |config|\n        config.build_settings['IPHONEOS_DEPLOYMENT_TARGET'] = '10.0'\n        config.build_settings['HEADER_SEARCH_PATHS'] ||= ['$(inherited)']\n      end\n    end\n\n    # Build React Native with RCT_DEV enabled and RCT_ENABLE_INSPECTOR and\n    # RCT_ENABLE_PACKAGER_CONNECTION disabled\n    next unless pod_name == 'React'\n    target_installation_result.native_target.build_configurations.each do |config|\n      config.build_settings['GCC_PREPROCESSOR_DEFINITIONS'] ||= ['$(inherited)']\n      config.build_settings['GCC_PREPROCESSOR_DEFINITIONS'] << 'RCT_DEV=1'\n      config.build_settings['GCC_PREPROCESSOR_DEFINITIONS'] << 'RCT_ENABLE_INSPECTOR=0'\n      config.build_settings['GCC_PREPROCESSOR_DEFINITIONS'] << 'ENABLE_PACKAGER_CONNECTION=0'\n    end\n  end\nend\n```\n")),Object(i.b)("p",null,"If upgrading from SDK 31 or below, you'll need to refactor your ",Object(i.b)("inlineCode",{parentName:"p"},"AppDelegate")," class as we moved its Expo-related part to a separate ",Object(i.b)("inlineCode",{parentName:"p"},"EXStandaloneAppDelegate")," class owned by ",Object(i.b)("inlineCode",{parentName:"p"},"ExpoKit")," to simplify future upgrade processes as much as possible. As of SDK 32, your ",Object(i.b)("inlineCode",{parentName:"p"},"AppDelegate")," class needs to subclass ",Object(i.b)("inlineCode",{parentName:"p"},"EXStandaloneAppDelegate"),"."),Object(i.b)("p",null,"If you have never made any edits to your Expo-generated ",Object(i.b)("inlineCode",{parentName:"p"},"AppDelegate")," files, then you can just replace them with these new template files:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/expo/expo/tree/main/exponent-view-template/ios/exponent-view-template/AppDelegate.h"},"AppDelegate.h")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/expo/expo/tree/main/exponent-view-template/ios/exponent-view-template/AppDelegate.m"},"AppDelegate.m"))),Object(i.b)("p",null,"If you override any ",Object(i.b)("inlineCode",{parentName:"p"},"AppDelegate")," methods to add custom behavior, you'll need to either refactor your ",Object(i.b)("inlineCode",{parentName:"p"},"AppDelegate")," to subclass ",Object(i.b)("inlineCode",{parentName:"p"},"EXStandaloneAppDelegate")," and call ",Object(i.b)("inlineCode",{parentName:"p"},"super")," methods when necessary, or start with the new template files above and add your custom logic again (be sure to keep the calls to ",Object(i.b)("inlineCode",{parentName:"p"},"super")," methods)."),Object(i.b)("p",null,"If upgrading from SDK 30 or below, you'll also need to change ",Object(i.b)("inlineCode",{parentName:"p"},"platform :ios, '9.0'")," to ",Object(i.b)("inlineCode",{parentName:"p"},"platform :ios, '10.0'")," in ",Object(i.b)("inlineCode",{parentName:"p"},"ios/Podfile"),"."),Object(i.b)("h3",{id:"android-1"},"Android"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Go to ",Object(i.b)("a",{parentName:"li",href:"https://expo.dev/--/api/v2/versions"},"https://expo.dev/--/api/v2/versions")," and find the ",Object(i.b)("inlineCode",{parentName:"li"},"expokitNpmPackage")," key under ",Object(i.b)("inlineCode",{parentName:"li"},"sdkVersions.[NEW SDK VERSION]"),"."),Object(i.b)("li",{parentName:"ul"},"Update your version of expokit in ",Object(i.b)("strong",{parentName:"li"},"package.json")," to the version in ",Object(i.b)("inlineCode",{parentName:"li"},"expokitNpmPackage")," and yarn/npm install."),Object(i.b)("li",{parentName:"ul"},"If upgrading to SDK 31 or below, go to ",Object(i.b)("strong",{parentName:"li"},"MainActivity.java")," and replace ",Object(i.b)("inlineCode",{parentName:"li"},'Arrays.asList("[OLD SDK VERSION]")')," with ",Object(i.b)("inlineCode",{parentName:"li"},'Arrays.asList("[NEW SDK VERSION]")'),". If upgrading to SDK 32 or above, simply remove the entire ",Object(i.b)("inlineCode",{parentName:"li"},"public List<String> sdkVersions()")," method from ",Object(i.b)("strong",{parentName:"li"},"MainActivity.java"),"."),Object(i.b)("li",{parentName:"ul"},"Go to ",Object(i.b)("inlineCode",{parentName:"li"},"android/app/build.gradle")," and replace ",Object(i.b)("inlineCode",{parentName:"li"},"compile('host.exp.exponent:expoview:[OLD SDK VERSION]@aar') {")," with ",Object(i.b)("inlineCode",{parentName:"li"},"compile('host.exp.exponent:expoview:[NEW SDK VERSION]@aar') {"),"."),Object(i.b)("li",{parentName:"ul"},"Go to ",Object(i.b)("inlineCode",{parentName:"li"},"android/app/build.gradle")," (same file) and replace ",Object(i.b)("inlineCode",{parentName:"li"},"api 'com.facebook.react:react-native:[OLD SDK VERSION]'")," with ",Object(i.b)("inlineCode",{parentName:"li"},"api 'com.facebook.react:react-native:[NEW SDK VERSION]'"),"."),Object(i.b)("li",{parentName:"ul"},"Go to ",Object(i.b)("inlineCode",{parentName:"li"},"android/app/build.gradle")," (same file) and upgrade JSC version by replacing ",Object(i.b)("inlineCode",{parentName:"li"},"api 'org.webkit:android-jsc:[OLD JSC VERSION]'")," with ",Object(i.b)("inlineCode",{parentName:"li"},"api 'org.webkit:android-jsc:r245459'")," and ",Object(i.b)("inlineCode",{parentName:"li"},"force 'org.webkit:android-jsc:[OLD JSC VERSION]'")," with ",Object(i.b)("inlineCode",{parentName:"li"},"force 'org.webkit:android-jsc:r245459'"),".")),Object(i.b)("p",null,"If upgrading from SDK34:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Remove or comment out the following three lines in android/app/build.gradle as they are no longer used:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},' annotationProcessor \'com.raizlabs.android:DBFlow-Compiler:2.2.1\'\n implementation "com.raizlabs.android:DBFlow-Core:2.2.1"\n implementation "com.raizlabs.android:DBFlow:2.2.1"\n')),Object(i.b)("p",null,"If upgrading from SDK32 or below:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"If you haven't already done so when upgrading your iOS project, install ",Object(i.b)("inlineCode",{parentName:"p"},"react-native-unimodules@^0.7.0")," in your project (",Object(i.b)("inlineCode",{parentName:"p"},"yarn add -D react-native-unimodules@^0.7.0")," or ",Object(i.b)("inlineCode",{parentName:"p"},"npm install --save-dev react-native-unimodules@^0.7.0")," if you prefer npm over Yarn).")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In ",Object(i.b)("inlineCode",{parentName:"p"},"android/settings.gradle")," add to the bottom of the file:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-groovy"},"apply from: '../node_modules/react-native-unimodules/gradle.groovy'\n\n// Include unimodules.\nincludeUnimodulesProjects()\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In ",Object(i.b)("inlineCode",{parentName:"p"},"android/app/build.gradle")," remove an explicit list of ",Object(i.b)("inlineCode",{parentName:"p"},"host.exp.exponent:\u2026")," dependencies with"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-groovy"},"addUnimodulesDependencies([\n  modulesPaths : [\n    '../../node_modules'\n  ],\n  configuration: 'api',\n  target       : 'react-native',\n  exclude      : [\n    // You can exclude unneeded modules here, e.g.,\n    // 'unimodules-face-detector-interface',\n    // 'expo-face-detector'\n\n    // Adding a name here will also remove the package\n    // from auto-generated BasePackageList.java\n  ]\n])\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In ",Object(i.b)("inlineCode",{parentName:"p"},"android/app/build.gradle")," (same file) add the following line above ",Object(i.b)("inlineCode",{parentName:"p"},"dependencies {")," line"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-groovy"},'apply from: "../../node_modules/react-native-unimodules/gradle.groovy"\n'))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In ",Object(i.b)("inlineCode",{parentName:"p"},"android/app/build.gradle")," (same file) replace all occurrences of ",Object(i.b)("inlineCode",{parentName:"p"},"27.1.1")," with ",Object(i.b)("inlineCode",{parentName:"p"},"28.0.0"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In ",Object(i.b)("inlineCode",{parentName:"p"},"android/app/build.gradle")," (same file) replace ",Object(i.b)("inlineCode",{parentName:"p"},"compileSdkVersion 27")," with ",Object(i.b)("inlineCode",{parentName:"p"},"compileSdkVersion 28"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In ",Object(i.b)("inlineCode",{parentName:"p"},"android/app/build.gradle")," (same file) if you have the line:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-groovy"},"implementation 'expolib_v1.com.google.android.exoplayer:expolib_v1-extension-okhttp:2.6.1@aar'\n")),Object(i.b)("p",{parentName:"li"},"change it to"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-groovy"},"implementation 'com.google.android.exoplayer:extension-okhttp:2.6.1'\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In ",Object(i.b)("inlineCode",{parentName:"p"},"android/app/build.gradle")," (same file) add the following block to the end of ",Object(i.b)("inlineCode",{parentName:"p"},"android { \u2026 <add here> }"),":"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-groovy"},"compileOptions {\n  sourceCompatibility 1.8\n  targetCompatibility 1.8\n}\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In ",Object(i.b)("inlineCode",{parentName:"p"},"android/app/src/main/java/host/exp/exponent/MainApplication.java")," change"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},"import expolib_v1.okhttp3.OkHttpClient;\n")),Object(i.b)("p",{parentName:"li"},"to"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},"import okhttp3.OkHttpClient;\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In both ",Object(i.b)("inlineCode",{parentName:"p"},"android/app/src/main/java/host/exp/exponent/MainApplication.java")," and ",Object(i.b)("inlineCode",{parentName:"p"},"android/app/src/main/java/host/exp/exponent/MainActivity.java")," change"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},"import expo.core.interfaces.Package;\n")),Object(i.b)("p",{parentName:"li"},"to"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},"import org.unimodules.core.interfaces.Package;\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In ",Object(i.b)("inlineCode",{parentName:"p"},"android/app/src/main/java/host/exp/exponent/MainApplication.java")," change:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},"// only expo.modules!\nimport expo.modules.ads.admob.AdMobPackage;\nimport expo.modules.analytics.segment.SegmentPackage;\nimport expo.modules.appauth.AppAuthPackage;\nimport expo.modules.backgroundfetch.BackgroundFetchPackage;\n")),Object(i.b)("p",{parentName:"li"},"to"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},"import host.exp.exponent.generated.BasePackageList;\n")),Object(i.b)("p",{parentName:"li"},"and"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},"public List<Package> getExpoPackages() {\n  return Arrays.<Package>asList(\n      // ... package\n  );\n}\n")),Object(i.b)("p",{parentName:"li"},"to"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},"public List<Package> getExpoPackages() {\n  return new BasePackageList().getPackageList();\n}\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"From ",Object(i.b)("inlineCode",{parentName:"p"},"android/app/src/main/java/host/exp/exponent/MainApplication.java")," remove the following method:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},"@Override\npublic boolean shouldUseInternetKernel() {\n  return BuildVariantConstants.USE_INTERNET_KERNEL;\n}\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Remove ",Object(i.b)("inlineCode",{parentName:"p"},"android/app/src/devKernel")," and ",Object(i.b)("inlineCode",{parentName:"p"},"android/app/src/prodKernel")," directories.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"From ",Object(i.b)("inlineCode",{parentName:"p"},"android/app/build.gradle")," remove:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-groovy"},"flavorDimensions 'remoteKernel'\nproductFlavors {\n  devKernel {\n    dimension 'remoteKernel'\n  }\n  prodKernel {\n    dimension 'remoteKernel'\n  }\n}\n")),Object(i.b)("p",{parentName:"li"},"If you used Gradle tasks anywhere in your custom code you'll need to remove ",Object(i.b)("inlineCode",{parentName:"p"},"DevKernel")," and ",Object(i.b)("inlineCode",{parentName:"p"},"ProdKernel")," parts of task names, so e.g., ",Object(i.b)("inlineCode",{parentName:"p"},":app:installDevKernelDebug")," becomes ",Object(i.b)("inlineCode",{parentName:"p"},":app:installDebug"),"."))),Object(i.b)("p",null,"If upgrading from SDK31 or below:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"add the following lines to ",Object(i.b)("inlineCode",{parentName:"p"},"android/app/build.gradle"),":"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-groovy"},"api 'host.exp.exponent:expo-app-loader-provider:+'\napi 'org.unimodules:core:+'\napi 'org.unimodules:unimodules-constants-interface:+'\napi 'host.exp.exponent:expo-constants:+'\napi 'org.unimodules:unimodules-file-system-interface:+'\napi 'host.exp.exponent:expo-file-system:+'\napi 'org.unimodules:unimodules-image-loader-interface:+'\napi 'host.exp.exponent:expo-permissions:+'\napi 'org.unimodules:unimodules-permissions-interface:+'\napi 'org.unimodules:unimodules-sensors-interface:+'\napi 'host.exp.exponent:expo-react-native-adapter:+'\napi 'host.exp.exponent:expo-task-manager:+'\napi 'org.unimodules:unimodules-task-manager-interface:+'\n\n// Optional universal modules, could be removed\n// along with references in MainActivity\napi 'host.exp.exponent:expo-ads-admob:+'\napi 'host.exp.exponent:expo-app-auth:+'\napi 'host.exp.exponent:expo-analytics-segment:+'\napi 'org.unimodules:unimodules-barcode-scanner-interface:+'\napi 'host.exp.exponent:expo-barcode-scanner:+'\napi 'org.unimodules:unimodules-camera-interface:+'\napi 'host.exp.exponent:expo-camera:+'\napi 'host.exp.exponent:expo-contacts:+'\napi 'host.exp.exponent:expo-face-detector:+'\napi 'org.unimodules:unimodules-face-detector-interface:+'\napi 'host.exp.exponent:expo-font:+'\napi 'host.exp.exponent:expo-gl-cpp:+'\napi 'host.exp.exponent:expo-gl:+'\napi 'host.exp.exponent:expo-google-sign-in:+'\napi 'host.exp.exponent:expo-local-authentication:+'\napi 'host.exp.exponent:expo-localization:+'\napi 'host.exp.exponent:expo-location:+'\napi 'host.exp.exponent:expo-media-library:+'\napi 'host.exp.exponent:expo-print:+'\napi 'host.exp.exponent:expo-sensors:+'\napi 'host.exp.exponent:expo-sms:+'\napi 'host.exp.exponent:expo-background-fetch:+'\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Ensure that in ",Object(i.b)("strong",{parentName:"p"},"MainActivity.java"),", ",Object(i.b)("inlineCode",{parentName:"p"},"expoPackages")," method looks like this:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},"@Override\npublic List<Package> expoPackages() {\n  return ((MainApplication) getApplication()).getExpoPackages();\n}\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In ",Object(i.b)("strong",{parentName:"p"},"MainApplication.java"),", replace"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},"public class MainApplication extends ExpoApplication {\n")),Object(i.b)("p",{parentName:"li"},"with"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},"public class MainApplication extends ExpoApplication implements AppLoaderPackagesProviderInterface<ReactPackage> {\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Add the following lines in ",Object(i.b)("strong",{parentName:"p"},"MainApplication.java"),":"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},"import org.unimodules.core.interfaces.Package;\nimport expo.loaders.provider.interfaces.AppLoaderPackagesProviderInterface;\nimport expo.modules.ads.admob.AdMobPackage;\nimport expo.modules.analytics.segment.SegmentPackage;\nimport expo.modules.appauth.AppAuthPackage;\nimport expo.modules.backgroundfetch.BackgroundFetchPackage;\nimport expo.modules.barcodescanner.BarCodeScannerPackage;\nimport expo.modules.camera.CameraPackage;\nimport expo.modules.constants.ConstantsPackage;\nimport expo.modules.contacts.ContactsPackage;\nimport expo.modules.facedetector.FaceDetectorPackage;\nimport expo.modules.filesystem.FileSystemPackage;\nimport expo.modules.font.FontLoaderPackage;\nimport expo.modules.gl.GLPackage;\nimport expo.modules.google.signin.GoogleSignInPackage;\nimport expo.modules.localauthentication.LocalAuthenticationPackage;\nimport expo.modules.localization.LocalizationPackage;\nimport expo.modules.location.LocationPackage;\nimport expo.modules.medialibrary.MediaLibraryPackage;\nimport expo.modules.permissions.PermissionsPackage;\nimport expo.modules.print.PrintPackage;\nimport expo.modules.sensors.SensorsPackage;\nimport expo.modules.sms.SMSPackage;\nimport expo.modules.taskManager.TaskManagerPackage;\n\n...\n\npublic List<Package> getExpoPackages() {\n  return Arrays.<Package>asList(\n      new CameraPackage(),\n      new ConstantsPackage(),\n      new SensorsPackage(),\n      new FileSystemPackage(),\n      new FaceDetectorPackage(),\n      new GLPackage(),\n      new GoogleSignInPackage(),\n      new PermissionsPackage(),\n      new SMSPackage(),\n      new PrintPackage(),\n      new MediaLibraryPackage(),\n      new SegmentPackage(),\n      new FontLoaderPackage(),\n      new LocationPackage(),\n      new ContactsPackage(),\n      new BarCodeScannerPackage(),\n      new AdMobPackage(),\n      new LocalAuthenticationPackage(),\n      new LocalizationPackage(),\n      new AppAuthPackage(),\n      new TaskManagerPackage(),\n      new BackgroundFetchPackage()\n  );\n}\n")))),Object(i.b)("p",null,"If upgrading from SDK 30 or below, remove the following lines from ",Object(i.b)("inlineCode",{parentName:"p"},"android/app/build.gradle"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-groovy"},"implementation 'com.squareup.okhttp3:okhttp:3.4.1'\nimplementation 'com.squareup.okhttp3:okhttp-urlconnection:3.4.1'\nimplementation 'com.squareup.okhttp3:okhttp-ws:3.4.1'\n")),Object(i.b)("p",null,"If upgrading from SDK 28 or below, you'll also need to follow these instructions:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Change all instances of ",Object(i.b)("inlineCode",{parentName:"li"},"android\\\\detach-scripts")," and ",Object(i.b)("inlineCode",{parentName:"li"},"android/detach-scripts")," to ",Object(i.b)("inlineCode",{parentName:"li"},"node_modules\\\\expokit\\\\detach-scripts")," and ",Object(i.b)("inlineCode",{parentName:"li"},"node_modules/expokit/detach-scripts")," respectively in ",Object(i.b)("inlineCode",{parentName:"li"},"android/app/expo.gradle"),"."),Object(i.b)("li",{parentName:"ul"},"Add ",Object(i.b)("inlineCode",{parentName:"li"},'maven { url "$rootDir/../node_modules/expokit/maven" }')," under ",Object(i.b)("inlineCode",{parentName:"li"},"allprojects.repositories")," in ",Object(i.b)("inlineCode",{parentName:"li"},"android/build.gradle"),"."),Object(i.b)("li",{parentName:"ul"},"In ",Object(i.b)("inlineCode",{parentName:"li"},"android/app/build.gradle"),", replace")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-groovy"},"compile('host.exp.exponent:expoview:[SDK VERSION]@aar') {\n  transitive = true\n}\n")),Object(i.b)("p",null,"with"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-groovy"},"compile('host.exp.exponent:expoview:[SDK VERSION]@aar') {\n  transitive = true\n  exclude group: 'com.squareup.okhttp3', module: 'okhttp'\n  exclude group: 'com.squareup.okhttp3', module: 'okhttp-urlconnection'\n}\n")))}d.isMDXComponent=!0},wqUt:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/expokit/expokit",function(){return t("kF2Y")}])}},[["wqUt",1,0]]]);