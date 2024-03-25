_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[74],{"7ljp":function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var a=t("q1tI"),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),b=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"===typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=b(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=b(t),u=a,m=s["".concat(i,".").concat(u)]||s[u]||d[u]||o;return t?r.a.createElement(m,p(p({ref:n},c),{},{components:t})):r.a.createElement(m,p({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"===typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"===typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},GF2L:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/build-reference/variants",function(){return t("YKtR")}])},KiYJ:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var a=t("cpVT"),r=t("3zh3"),o=(t("q1tI"),t("AeFk"));function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){Object(a.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e){var n=e.alt,t=e.src,a=e.style,i=e.containerStyle;return Object(o.c)("div",{style:p({textAlign:"center",backgroundColor:r.theme.background.secondary,paddingTop:10,paddingBottom:10,marginTop:20,marginBottom:20},i)},Object(o.c)("img",{src:t,alt:n,style:a}))}},YKtR:function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return l})),t.d(n,"headings",(function(){return c})),t.d(n,"default",(function(){return s}));var a=t("HALo"),r=t("dhJC"),o=(t("q1tI"),t("7ljp")),i=t("KiYJ"),p=["components"],l={title:"Installing app variants on the same device"},c=[{depth:2,type:"text",title:"Example: configuring development and production variants in a managed project"},{depth:2,type:"text",title:"Example: configuring development and production variants in a bare project"},{depth:3,type:"text",title:"Android"},{depth:3,type:"text",title:"iOS"}],b={meta:l,headings:c};function s(e){var n=e.components,t=Object(r.a)(e,p);return Object(o.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"When creating ",Object(o.b)("a",{parentName:"p",href:"/eas-json/#common-use-cases"},"development, preview, and production builds"),", it's common to want to install one of each build on your device at the same time. This allows you to do development work, preview the next version of your app, and run the production version all on the same device, without needing to uninstall and reinstall the app."),Object(o.b)("p",null,"In order to be able to have multiple instances of an app installed on your device, each instance must have a unique Application ID (Android) or Bundle Identifier (iOS)."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"If you have a bare project"),", you can accomplish this using flavors (Android) and targets (iOS). To configure which flavor is used, use the ",Object(o.b)("inlineCode",{parentName:"p"},"gradleCommand")," field on your build profile; to configure which target is used, use the ",Object(o.b)("inlineCode",{parentName:"p"},"scheme")," field for iOS."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"If you have a managed project"),", this can be accomplished by using ",Object(o.b)("strong",{parentName:"p"},"app.config.js")," and environment variables in ",Object(o.b)("strong",{parentName:"p"},"eas.json"),"."),Object(o.b)("h2",{id:"example-configuring-development-and-production-variants-in-a-managed-project"},"Example: configuring development and production variants in a managed project"),Object(o.b)("p",null,"Let's say we wanted a development build and production build of our managed Expo project. Your ",Object(o.b)("strong",{parentName:"p"},"eas.json")," might look like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "build": {\n    "development": {\n      "developmentClient": true\n    },\n    "production": {}\n  }\n}\n')),Object(o.b)("p",null,"And your ",Object(o.b)("strong",{parentName:"p"},"app.json")," might look like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "expo": {\n    "name": "MyApp",\n    "slug": "my-app",\n    "ios": {\n      "bundleIdentifier": "com.myapp"\n    },\n    "android": {\n      "package": "com.myapp"\n    }\n  }\n}\n')),Object(o.b)("p",null,"Let's convert this to ",Object(o.b)("strong",{parentName:"p"},"app.config.js")," so we can make it more dynamic:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'export default {\n  name: "MyApp",\n  slug: "my-app",\n  ios: {\n    bundleIdentifier: "com.myapp",\n  },\n  android: {\n    package: "com.myapp",\n  },\n};\n')),Object(o.b)("p",null,"Now let's switch out the iOS ",Object(o.b)("inlineCode",{parentName:"p"},"bundleIdentifier")," and Android ",Object(o.b)("inlineCode",{parentName:"p"},"package")," (which becomes the Application ID) based on the presence of an environment variable in ",Object(o.b)("strong",{parentName:"p"},"app.config.js"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'const IS_DEV = process.env.APP_VARIANT === "development";\n\nexport default {\n  // You can also switch out the app icon and other properties to further\n  // differentiate the app on your device.\n  name: IS_DEV ? "MyApp (Dev)" : "MyApp",\n  slug: "my-app",\n  ios: {\n    bundleIdentifier: IS_DEV ? "com.myapp.dev" : "com.myapp",\n  },\n  android: {\n    package: IS_DEV ? "com.myapp.dev" : "com.myapp",\n  },\n};\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note"),": if you are using any libraries that require you to register your application identifier with an external service to use the SDK, such as Google Maps, you will need to have a separate configuration for that API for the iOS Bundle Identifier and Android Package. You can also swap this configuration in using the same approach as above.")),Object(o.b)("p",null,"To automatically set the ",Object(o.b)("inlineCode",{parentName:"p"},"APP_VARIANT"),' environment variable when running builds with the "development" profile, we can use ',Object(o.b)("inlineCode",{parentName:"p"},"env")," in ",Object(o.b)("strong",{parentName:"p"},"eas.json"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "build": {\n    "development": {\n      "developmentClient": true,\n      "env": {\n        "APP_VARIANT": "development"\n      }\n    },\n    "production": {}\n  }\n}\n')),Object(o.b)("p",null,"Now when you run ",Object(o.b)("inlineCode",{parentName:"p"},"eas build --profile development"),", the environment variable ",Object(o.b)("inlineCode",{parentName:"p"},"APP_VARIANT")," will be set to ",Object(o.b)("inlineCode",{parentName:"p"},'"development"')," when evaluating ",Object(o.b)("strong",{parentName:"p"},"app.config.js")," both locally and on the EAS Build worker. When you start your development server, you will need to run ",Object(o.b)("inlineCode",{parentName:"p"},"APP_VARIANT=development expo start")," (or the platform equivalent if you use Windows); a shortcut for this could be to add a script to your ",Object(o.b)("strong",{parentName:"p"},"package.json")," such as ",Object(o.b)("inlineCode",{parentName:"p"},'"dev": "APP_VARIANT=development expo start"'),"."),Object(o.b)("p",null,"When you run ",Object(o.b)("inlineCode",{parentName:"p"},"eas build --profile production")," the ",Object(o.b)("inlineCode",{parentName:"p"},"APP_VARIANT")," variable environment will not be set, and the build will run as the production variant."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note"),": if you use ",Object(o.b)("inlineCode",{parentName:"p"},"expo-updates")," to publish JavaScript updates to your app, you should be cautious to set the correct environment variables for the app variant that you are publishing for when you run the ",Object(o.b)("inlineCode",{parentName:"p"},"expo publish")," command. Refer to the EAS Build ",Object(o.b)("a",{parentName:"p",href:"/../../../../../../build/updates/"},'"Environment variables and secrets" guide')," for more information.")),Object(o.b)("h2",{id:"example-configuring-development-and-production-variants-in-a-bare-project"},"Example: configuring development and production variants in a bare project"),Object(o.b)("h3",{id:"android"},"Android"),Object(o.b)("p",null,"In ",Object(o.b)("strong",{parentName:"p"},"android/app/build.gradle"),", create a separate flavor for every build profile from ",Object(o.b)("strong",{parentName:"p"},"eas.json")," that you want to build."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-groovy"},'android {\n    ...\n    flavorDimensions "env"\n    productFlavors {\n        production {\n            dimension "env"\n            applicationId \'com.myapp\'\n        }\n        development {\n            dimension "env"\n            applicationId \'com.myapp.dev\'\n        }\n    }\n    ...\n}\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note"),": Currently, EAS CLI supports only the ",Object(o.b)("inlineCode",{parentName:"p"},"applicationId")," field. If you use ",Object(o.b)("inlineCode",{parentName:"p"},"applicationIdSuffix")," inside ",Object(o.b)("inlineCode",{parentName:"p"},"productFlavors")," or ",Object(o.b)("inlineCode",{parentName:"p"},"buildTypes")," sections then this value will not be detected correctly.")),Object(o.b)("p",null,"Assign Android flavors to EAS build profiles by specifying a ",Object(o.b)("inlineCode",{parentName:"p"},"gradleCommand")," in the ",Object(o.b)("strong",{parentName:"p"},"eas.json"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "build": {\n    "development": {\n      "android": {\n        "gradleCommand": ":app:assembleDevelopmentDebug"\n      }\n    },\n    "production": {\n      "android": {\n        "gradleCommand": ":app:bundleProductionRelease"\n      }\n    }\n  }\n}\n')),Object(o.b)("p",null,"By default, every flavor can be built in either debug or release mode. If you want to restrict some flavor to a specific mode, see the snippet below, and modify ",Object(o.b)("strong",{parentName:"p"},"build.gradle"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-groovy"},'android {\n    ...\n    variantFilter { variant ->\n        def validVariants = [\n                ["production", "release"],\n                ["development", "debug"],\n        ]\n        def buildTypeName = variant.buildType*.name\n        def flavorName = variant.flavors*.name\n\n        def isValid = validVariants.any { flavorName.contains(it[0]) && buildTypeName.contains(it[1]) }\n        if (!isValid) {\n            setIgnore(true)\n        }\n    }\n    ...\n}\n')),Object(o.b)("p",null,"The rest of the configuration at this point is not specific to EAS, it's the same as it would be for any Android project with flavors. There are a few common configurations that you might want to apply to your project:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"To change the name of the app built with the development profile, create a ",Object(o.b)("strong",{parentName:"li"},"android/app/src/development/res/value/strings.xml")," file.",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-xml"},'<resources>\n    <string name="app_name">MyApp - Dev</string>\n</resources>\n'))),Object(o.b)("li",{parentName:"ul"},"To change the icon of the app built with the development profile, create ",Object(o.b)("inlineCode",{parentName:"li"},"android/app/src/development/res/mipmap-*")," directories with appropriate assets (you can copy them from ",Object(o.b)("strong",{parentName:"li"},"android/app/src/main/res")," and replace the icon files)."),Object(o.b)("li",{parentName:"ul"},"To specify ",Object(o.b)("strong",{parentName:"li"},"google-services.json")," for a specific flavor put it in a ",Object(o.b)("strong",{parentName:"li"},"android/app/src/{flavor}/google-services.json")," file."),Object(o.b)("li",{parentName:"ul"},"To configure sentry, add ",Object(o.b)("inlineCode",{parentName:"li"},"project.ext.sentryCli = [ flavorAware: true ]")," to ",Object(o.b)("strong",{parentName:"li"},"android/app/build.gradle")," and name your properties file ",Object(o.b)("inlineCode",{parentName:"li"},"android/sentry-{flavor}-{buildType}.properties")," (e.g. ",Object(o.b)("strong",{parentName:"li"},"android/sentry-production-release.properties"),")")),Object(o.b)("h3",{id:"ios"},"iOS"),Object(o.b)("p",null,"Assign a distinct scheme to every build profile in ",Object(o.b)("strong",{parentName:"p"},"eas.json"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "build": {\n    "development": {\n      "ios": {\n        "buildConfiguration": "Debug",\n        "scheme": "myapp-dev"\n      }\n    },\n    "production": {\n      "ios": {\n        "buildConfiguration": "Release",\n        "scheme": "myapp"\n      }\n    }\n  }\n}\n')),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Podfile")," should have a target defined like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ruby"},"target 'myapp' do\n    ...\nend\n")),Object(o.b)("p",null,"Replace it with an abstract target, where common configuration can be copied from the old target."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ruby"},"abstract_target 'common' do\n  # put common target configuration here\n\n  target 'myapp' do\n  end\n\n  target 'myapp-dev' do\n  end\nend\n")),Object(o.b)("p",null,'Open project in Xcode, click on the project name in the navigation panel, right click on the existing target, and click "Duplicate":'),Object(o.b)(i.a,{alt:"Duplicate Xcode target",src:"/static/images/eas-build/variants/1-ios-duplicate-target.png",style:{maxWidth:720},mdxType:"ImageSpotlight"}),Object(o.b)("p",null,"Rename the target to something more meaningful, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"myapp copy")," -> ",Object(o.b)("inlineCode",{parentName:"p"},"myapp-dev"),"."),Object(o.b)("p",null,"Configure a scheme for the new target:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Go to ",Object(o.b)("inlineCode",{parentName:"li"},"Product")," -> ",Object(o.b)("inlineCode",{parentName:"li"},"Scheme")," -> ",Object(o.b)("inlineCode",{parentName:"li"},"Manage schemes"),"."),Object(o.b)("li",{parentName:"ul"},"Find scheme ",Object(o.b)("inlineCode",{parentName:"li"},"myapp copy")," on the list."),Object(o.b)("li",{parentName:"ul"},"Change scheme name ",Object(o.b)("inlineCode",{parentName:"li"},"myapp copy")," -> ",Object(o.b)("inlineCode",{parentName:"li"},"myapp-dev"),"."),Object(o.b)("li",{parentName:"ul"},"By default, the new scheme should be marked as shared, but Xcode does not create ",Object(o.b)("inlineCode",{parentName:"li"},".xcscheme"),' files. To fix that, uncheck the "Shared" checkbox and check it again, after that new ',Object(o.b)("inlineCode",{parentName:"li"},".xcscheme")," file should show up in the ",Object(o.b)("strong",{parentName:"li"},"ios/myapp.xcodeproj/xcshareddata/xcschemes")," directory.")),Object(o.b)(i.a,{alt:"Xcode scheme list",src:"/static/images/eas-build/variants/2-scheme-list.png",style:{maxWidth:720},mdxType:"ImageSpotlight"}),Object(o.b)("p",null,"By default, the newly created target has separate ",Object(o.b)("strong",{parentName:"p"},"Info.plist")," file (in our case it's ",Object(o.b)("strong",{parentName:"p"},"ios/myapp copy-Info.plist"),"). To simplify your project we recommend using the same file for all targets:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Delete ",Object(o.b)("strong",{parentName:"li"},"./ios/myapp copy-Info.plist"),"."),Object(o.b)("li",{parentName:"ul"},"Click on the new target."),Object(o.b)("li",{parentName:"ul"},"Go to ",Object(o.b)("inlineCode",{parentName:"li"},"Build Settings")," tab."),Object(o.b)("li",{parentName:"ul"},"Find ",Object(o.b)("inlineCode",{parentName:"li"},"Packaging")," section."),Object(o.b)("li",{parentName:"ul"},"Change ",Object(o.b)("strong",{parentName:"li"},"Info.plist")," value - ",Object(o.b)("strong",{parentName:"li"},"myapp copy-Info.plist")," -> ",Object(o.b)("strong",{parentName:"li"},"myapp/Info.plist"),"."),Object(o.b)("li",{parentName:"ul"},"Change ",Object(o.b)("inlineCode",{parentName:"li"},"Product Bundle Identifier"),".")),Object(o.b)(i.a,{alt:"Xcode build settings",src:"/static/images/eas-build/variants/3-target-build-settings.png",style:{maxWidth:720},mdxType:"ImageSpotlight"}),Object(o.b)("p",null,"To change the display name:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Open ",Object(o.b)("strong",{parentName:"li"},"Info.plist")," and add key ",Object(o.b)("inlineCode",{parentName:"li"},"Bundle display name")," with value ",Object(o.b)("inlineCode",{parentName:"li"},"$(DISPLAY_NAME)"),"."),Object(o.b)("li",{parentName:"ul"},"Open ",Object(o.b)("inlineCode",{parentName:"li"},"Build Settings")," for both targets and find ",Object(o.b)("inlineCode",{parentName:"li"},"User-Defined")," section."),Object(o.b)("li",{parentName:"ul"},"Add key ",Object(o.b)("inlineCode",{parentName:"li"},"DISPLAY_NAME")," with the name you want to use for that target.")),Object(o.b)("p",null,"To change the app icon:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create a new image set (you can create it from the existing image set for the current icon, it's usually named ",Object(o.b)("inlineCode",{parentName:"li"},"AppIcon"),")"),Object(o.b)("li",{parentName:"ul"},"Open ",Object(o.b)("inlineCode",{parentName:"li"},"Build Settings")," for the target that you want to change icon."),Object(o.b)("li",{parentName:"ul"},"Find ",Object(o.b)("inlineCode",{parentName:"li"},"Asset Catalog Compiler - Options")," section."),Object(o.b)("li",{parentName:"ul"},"Change ",Object(o.b)("inlineCode",{parentName:"li"},"Primary App Icon Set Name")," to the name of the new image set.")))}s.isMDXComponent=!0},cpVT:function(e,n,t){"use strict";function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,"a",(function(){return a}))}},[["GF2L",1,0,2,3]]]);