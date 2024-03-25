_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[80],{"2eH7":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return u})),n.d(t,"headings",(function(){return p})),n.d(t,"default",(function(){return c}));var i=n("HALo"),r=n("dhJC"),o=(n("q1tI"),n("7ljp")),a=n("KiYJ"),l=["components"],u={title:"Creating your first build"},p=[{depth:2,type:"text",title:"Prerequisites"},{depth:2,type:"text",title:"1. Install the latest EAS CLI"},{depth:2,type:"text",title:"2. Log in to your Expo account"},{depth:2,type:"text",title:"3. Configure the project"},{depth:2,type:"text",title:"4. Run a build"},{depth:3,type:"text",title:"Build for Android device/emulator or iOS simulator"},{depth:3,type:"text",title:"Build for app stores"},{depth:4,type:"text",title:"Android app signing credentials"},{depth:4,type:"text",title:"iOS app signing credentials"},{depth:2,type:"text",title:"5. Wait for the build to complete"},{depth:2,type:"text",title:"6. Deploy the build"},{depth:3,type:"text",title:"Distribute your app to an app store"},{depth:3,type:"text",title:"Install and run the app"},{depth:2,type:"text",title:"Next steps"}],b={meta:u,headings:p};function c(e){var t=e.components,n=Object(r.a)(e,l);return Object(o.b)("wrapper",Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this guide, you'll learn how to build a ready-to-submit binary for the Apple App Store and Google Play Store using EAS Build."),Object(o.b)("p",null,"Alternatively, if you prefer to install the app directly to your Android device / emulator or install it in the iOS simulator, we'll point you towards resources that explain how to do that."),Object(o.b)("p",null,"For a small app, you should expect to have kicked off your builds for Android and iOS within a few minutes. If you encounter any issues along the way, you can reach out on the ",Object(o.b)("a",{parentName:"p",href:"https://forums.expo.dev/"},"Expo forums")," or ",Object(o.b)("a",{parentName:"p",href:"https://chat.expo.dev/"},"Discord"),"."),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("p",null,"EAS Build is a new and rapidly evolving service; before you set out to create a build for your project we recommend consulting the ",Object(o.b)("a",{parentName:"p",href:"/../../../../../../build-reference/limitations/"},"limitations")," page and the other prerequisites below."),Object(o.b)("details",null,Object(o.b)("summary",null,Object(o.b)("h4",null,"\ud83d\udce6 A React Native iOS and/or Android project that you want to build.")),Object(o.b)("p",null,Object(o.b)("p",null,"Don't have a project yet? No problem: it's quick and easy to create a \"Hello world\" app that you can use with this guide."),Object(o.b)("div",{style:{marginTop:-10}}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Install Expo CLI by running ",Object(o.b)("inlineCode",{parentName:"li"},"npm install -g expo-cli"),"."),Object(o.b)("li",{parentName:"ul"},"Run ",Object(o.b)("inlineCode",{parentName:"li"},"expo init PROJECT_NAME"),". Choose the project template that best suits you."),Object(o.b)("li",{parentName:"ul"},"EAS Build also works well with projects created by ",Object(o.b)("inlineCode",{parentName:"li"},"npx create-react-native-app"),", ",Object(o.b)("inlineCode",{parentName:"li"},"npx react-native"),", ",Object(o.b)("inlineCode",{parentName:"li"},"ignite-cli"),", and other project bootstrapping tools.")),Object(o.b)(a.a,{alt:"Terminal running expo init, with minimal (TypeScript) selected",src:"/static/images/eas-build/expo-init.png",mdxType:"ImageSpotlight"}))),Object(o.b)("details",null,Object(o.b)("summary",null,Object(o.b)("h4",null,"\ud83d\ude4b An Expo user account.")),Object(o.b)("p",null,Object(o.b)("p",null,"EAS Build is available to everybody with an Expo account; you can sign up at ",Object(o.b)("a",{parentName:"p",href:"https://expo.dev/signup"},"https://expo.dev/signup"),". You can use EAS Build for free, and paid subscriptions provide service quality improvements such as additional build concurrencies, priority access to minimize time your builds spend queueing, and increased limits on build timeouts. ",Object(o.b)("a",{parentName:"p",href:"https://expo.dev/pricing"},"Read more"),"."))),Object(o.b)("h2",{id:"1-install-the-latest-eas-cli"},"1. Install the latest EAS CLI"),Object(o.b)("p",null,"EAS CLI is the program that you will use to interact with EAS services from your terminal. Install EAS CLI by running ",Object(o.b)("inlineCode",{parentName:"p"},"npm install -g eas-cli"),". It will notify you when a new version is available (we encourage you to always stay up to date with the latest version)."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"We recommend using ",Object(o.b)("inlineCode",{parentName:"p"},"npm")," instead of ",Object(o.b)("inlineCode",{parentName:"p"},"yarn")," for global package installations. You may alternatively use ",Object(o.b)("inlineCode",{parentName:"p"},"npx eas-cli"),", just remember to use that instead of ",Object(o.b)("inlineCode",{parentName:"p"},"eas")," whenever it's called for in the documentation.")),Object(o.b)("h2",{id:"2-log-in-to-your-expo-account"},"2. Log in to your Expo account"),Object(o.b)("p",null,"If you are already signed in through Expo CLI, you don't need to do anything. Otherwise, log in with ",Object(o.b)("inlineCode",{parentName:"p"},"eas login"),". You can check whether you're logged in by running ",Object(o.b)("inlineCode",{parentName:"p"},"eas whoami"),"."),Object(o.b)("h2",{id:"3-configure-the-project"},"3. Configure the project"),Object(o.b)("p",null,"Run ",Object(o.b)("inlineCode",{parentName:"p"},"eas build:configure")," to configure your iOS and Android projects to run on EAS Build. If you'd like to learn more about what happens behind the scenes, you can read the ",Object(o.b)("a",{parentName:"p",href:"/../../../../../../build-reference/build-configuration/"},"build configuration process reference"),"."),Object(o.b)("p",null,"Additional configuration may be required for some scenarios:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Are you migrating an Expo managed app from ",Object(o.b)("inlineCode",{parentName:"li"},'"expo build"'),"? ",Object(o.b)("a",{parentName:"li",href:"/../../../../../../build-reference/migrating/"},"Learn about the differences"),"."),Object(o.b)("li",{parentName:"ul"},"Does your app code depend on environment variables? ",Object(o.b)("a",{parentName:"li",href:"/../../../../../../build-reference/variables/"},"Add them to your build configuration"),"."),Object(o.b)("li",{parentName:"ul"},"Is your project inside of a monorepo? ",Object(o.b)("a",{parentName:"li",href:"/../../../../../../build-reference/how-tos/#how-to-set-up-eas-build-with"},"Follow these instructions"),"."),Object(o.b)("li",{parentName:"ul"},"Do you use private npm packages? ",Object(o.b)("a",{parentName:"li",href:"/../../../../../../build-reference/private-npm-packages"},"Add your npm token"),"."),Object(o.b)("li",{parentName:"ul"},"Does your app depend on specific versions of tools like Node, Yarn, npm, Cocoapods, or Xcode? ",Object(o.b)("a",{parentName:"li",href:"/../../../../../../build/eas-json/"},"Specify these versions in your build configuration"),".")),Object(o.b)("h2",{id:"4-run-a-build"},"4. Run a build"),Object(o.b)("h3",{id:"build-for-android-deviceemulator-or-ios-simulator"},"Build for Android device/emulator or iOS simulator"),Object(o.b)("p",null,"The easiest way to try out EAS Build is to create a build that you can run on your Android device/emulator or iOS simulator. It's quicker than uploading it to a store, and you don't need any store developer membership accounts. If you'd like to try this, read about ",Object(o.b)("a",{parentName:"p",href:"/../../../../../../build-reference/apk/"},"creating an installable APK for Android")," and ",Object(o.b)("a",{parentName:"p",href:"/../../../../../../build-reference/simulators/"},"creating a simulator build for iOS"),"."),Object(o.b)("h3",{id:"build-for-app-stores"},"Build for app stores"),Object(o.b)("div",{style:{marginTop:-10}}),Object(o.b)("details",null,Object(o.b)("summary",null,Object(o.b)("h4",null,"\ud83c\udf4e Apple Developer Program membership is required to build for the App Store.")),Object(o.b)("p",null,Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If you are going to use EAS Build to create release builds for the Apple App Store, this requires access to an account with a $99 USD ",Object(o.b)("a",{parentName:"li",href:"https://developer.apple.com/programs"},"Apple Developer Program")," membership.")))),Object(o.b)("div",{style:{marginTop:-10}}),Object(o.b)("details",null,Object(o.b)("summary",null,Object(o.b)("h4",null,"\ud83e\udd16 Google Play Developer membership is required to distribute to the Play Store.")),Object(o.b)("p",null,Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You can build and sign your app using EAS Build, but you can't upload it to the Google Play Store unless you have a membership, a one-time $25 USD fee.")))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Run ",Object(o.b)("inlineCode",{parentName:"p"},"eas build --platform android")," to build for Android.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Run ",Object(o.b)("inlineCode",{parentName:"p"},"eas build --platform ios")," to build for iOS.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Alternatively, you can run ",Object(o.b)("inlineCode",{parentName:"p"},"eas build --platform all")," to build for Android and iOS at the same time."))),Object(o.b)("p",null,"Before the build can start, we'll need to generate or provide app signing credentials. If you have no experience with this, don't worry ","\u2014"," no knowledge is required, you will be guided through the process and EAS CLI will do the heavy lifting."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"If you have released your app to stores previously and have existing ",Object(o.b)("a",{parentName:"p",href:"/../../../../../../distribution/app-signing/"},"app signing credentials")," that you would like to use, ",Object(o.b)("a",{parentName:"p",href:"/../../../../../../app-signing/existing-credentials/"},"follow these instructions to configure them"),".")),Object(o.b)("h4",{id:"android-app-signing-credentials"},"Android app signing credentials"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If you have not yet generated a keystore for your app, you can let EAS CLI take care of that for you by selecting ",Object(o.b)("inlineCode",{parentName:"li"},"Generate new keystore"),", and then you're done. The keystore will be stored securely on EAS servers."),Object(o.b)("li",{parentName:"ul"},"If you have previously built your app with ",Object(o.b)("inlineCode",{parentName:"li"},"expo build:android"),", then the same credentials will be used here."),Object(o.b)("li",{parentName:"ul"},"If you would rather manually generate your keystore, please see the ",Object(o.b)("a",{parentName:"li",href:"/../../../../../../app-signing/local-credentials/#android-credentials"},"manual Android credentials guide")," for more information.")),Object(o.b)("h4",{id:"ios-app-signing-credentials"},"iOS app signing credentials"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If you have not generated a provisioning profile and/or distribution certificate yet, you can let EAS CLI take care of that for you by signing into your Apple Developer Program account and following the prompts."),Object(o.b)("li",{parentName:"ul"},"If you have already built your app with ",Object(o.b)("inlineCode",{parentName:"li"},"expo build:ios"),", then the same credentials will be used here."),Object(o.b)("li",{parentName:"ul"},"If you would rather manually generate your credentials, refer to the ",Object(o.b)("a",{parentName:"li",href:"/../../../../../../app-signing/local-credentials/#ios-credentials"},"manual iOS credentials guide")," for more information.")),Object(o.b)("h2",{id:"5-wait-for-the-build-to-complete"},"5. Wait for the build to complete"),Object(o.b)("p",null,"By default, the ",Object(o.b)("inlineCode",{parentName:"p"},"eas build")," command will wait for your build to complete; but, you can interrupt it if you prefer not to wait. Monitor the progress and read the logs by following the link to the build details page. You can also find this page by visting ",Object(o.b)("a",{parentName:"p",href:"https://expo.dev/builds"},"your build dashboard")," or running the ",Object(o.b)("inlineCode",{parentName:"p"},"eas build:list")," command. If your build is on behalf of an organization that you are a member of, you will find the build details on ",Object(o.b)("a",{parentName:"p",href:"https://expo.dev/accounts/%5Baccount%5D/builds"},"the build dashboard for that account"),"."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Did your build fail?")," Double check that you followed any applicable instructions in the ",Object(o.b)("a",{parentName:"p",href:"/build/setup/#3-configure-the-project"},"the configuration step")," and the refer to the ",Object(o.b)("a",{parentName:"p",href:"/../../../../../../build-reference/troubleshooting/"},"troubleshooting guide")," if needed.")),Object(o.b)("h2",{id:"6-deploy-the-build"},"6. Deploy the build"),Object(o.b)("p",null,"If you have made it to this step, congratulations! Depending on which path you chose, you now either have a build that is ready to upload to an app store, or you have a build that you can install directly on an Android device / iOS simulator."),Object(o.b)("h3",{id:"distribute-your-app-to-an-app-store"},"Distribute your app to an app store"),Object(o.b)("p",null,"You will only be able to submit to an app store if you built specifically for this purpose. If you created a build for a store, ",Object(o.b)("a",{parentName:"p",href:"/../../../../../../submit/introduction/"},"learn how to submit your app to app stores with EAS Submit"),"."),Object(o.b)("h3",{id:"install-and-run-the-app"},"Install and run the app"),Object(o.b)("p",null,"You will only be able to install the app directly to your Android device / iOS simulator if you explicitly built it for purpose; if you built for app store distribution, you will need to upload to an app store and then install it from there (for example, from Apple's TestFlight app)."),Object(o.b)("p",null,"To learn how to install the app directly to your Android device / iOS simulator, navigate to your build details page from ",Object(o.b)("a",{parentName:"p",href:"https://expo.dev/accounts/%5Baccount%5D/builds"},"your build dashboard"),' and click the "Install" button.'),Object(o.b)("h2",{id:"next-steps"},"Next steps"),Object(o.b)("p",null,"In this guide we walked through the steps for creating your first build with EAS Build, without going into too much depth on any particular part of the process."),Object(o.b)("p",null,'When you are ready to learn more, we recommend proceeding through the "Start Building" section of this documentation to learn about topics like ',Object(o.b)("a",{parentName:"p",href:"/../../../../../../build/eas-json/"},"configuration with eas.json"),", ",Object(o.b)("a",{parentName:"p",href:"/../../../../../../build/internal-distribution/"},"internal distribution"),", ",Object(o.b)("a",{parentName:"p",href:"/../../../../../../build/updates/"},"updates"),", ",Object(o.b)("a",{parentName:"p",href:"/../../../../../../build/automating-submissions/"},"automating submissions"),", and ",Object(o.b)("a",{parentName:"p",href:"/../../../../../../build/building-on-ci/"},"triggering builds from CI"),"."),Object(o.b)("p",null,"You may also want to dig through the reference section to learn more about the topics that interest you most, such as ",Object(o.b)("a",{parentName:"p",href:"/../../../../../../eas/webhooks/"},"build webhooks"),", ",Object(o.b)("a",{parentName:"p",href:"/../../../../../../build-reference/infrastructure/"},"build server infrastructure"),", and how the ",Object(o.b)("a",{parentName:"p",href:"/../../../../../../build-reference/android-builds/"},"Android")," and ",Object(o.b)("a",{parentName:"p",href:"/../../../../../../build-reference/ios-builds/"},"iOS")," build processes work. Enjoy!"))}c.isMDXComponent=!0},"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return h}));var i=n("q1tI"),r=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"===typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=b(n),d=i,h=c["".concat(a,".").concat(d)]||c[d]||s[d]||o;return n?r.a.createElement(h,l(l({ref:t},p),{},{components:n})):r.a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"===typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"===typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},KiYJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var i=n("cpVT"),r=n("3zh3"),o=(n("q1tI"),n("AeFk"));function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e){var t=e.alt,n=e.src,i=e.style,a=e.containerStyle;return Object(o.c)("div",{style:l({textAlign:"center",backgroundColor:r.theme.background.secondary,paddingTop:10,paddingBottom:10,marginTop:20,marginBottom:20},a)},Object(o.c)("img",{src:n,alt:t,style:i}))}},LTRv:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/build/setup",function(){return n("2eH7")}])},cpVT:function(e,t,n){"use strict";function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return i}))}},[["LTRv",1,0,2,3]]]);