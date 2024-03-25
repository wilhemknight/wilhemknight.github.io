_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[176],{"2anV":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return s})),n.d(t,"headings",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n("HALo"),o=n("dhJC"),i=(n("q1tI"),n("7ljp")),r=n("hykZ"),l=n("FhZx"),p=["components"],s={title:"Using Sentry"},b=[{depth:2,type:"inlineCode",title:"Why  sentry-expo ?"},{depth:2,type:"text",title:"How to add Sentry to your Expo project"},{depth:3,type:"text",title:"Step 0: Sign up for a Sentry account and create a project"},{depth:3,type:"text",title:"Step 1: Installation"},{depth:3,type:"text",title:"Step 2: Code"},{depth:3,type:"text",title:"Step 3: App Config"},{depth:4,type:"inlineCode",title:"Configure your  postPublish  hook"},{depth:4,type:"text",title:"Add the Config Plugin"},{depth:2,type:"text",title:"Sourcemaps"},{depth:3,type:"text",title:'"No publish builds"'},{depth:3,type:"text",title:"Self-hosting updates?"},{depth:3,type:"text",title:"Testing Sentry"},{depth:2,type:"text",title:"Error reporting semantics"},{depth:2,type:"text",title:"Disabled by default in dev"},{depth:2,type:"text",title:"Learn more about Sentry"}],c={meta:s,headings:b};function u(e){var t=e.components,n=Object(o.a)(e,p);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"http://getsentry.com/"},"Sentry"),' is a crash reporting platform that provides you with "real-time insight into production deployments with info to reproduce and fix crashes".'),Object(i.b)("p",null,"It notifies you of exceptions or errors that your users run into while using your app, and organizes them for you on a web dashboard. Reported exceptions include stacktraces, device info, version, and other relevant context automatically; you can also provide additional context that is specific to your application, like the current route and user id."),Object(i.b)("h2",{id:"why-sentry-expo"},"Why ",Object(i.b)("inlineCode",{parentName:"h2"},"sentry-expo"),"?"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Sentry treats React Native as a first-class citizen and we have collaborated with Sentry to make sure Expo is, too."),Object(i.b)("li",{parentName:"ul"},"It's very easy to set up and use"),Object(i.b)("li",{parentName:"ul"},"It scales to meet the demands of even the largest projects."),Object(i.b)("li",{parentName:"ul"},"We trust it for our projects at Expo."),Object(i.b)("li",{parentName:"ul"},"It is free for up to 5,000 events per month."),Object(i.b)("li",{parentName:"ul"},"It streamlines your error-reporting code across iOS, Android, and web")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: Native crash reporting is not available with the classic build system (",Object(i.b)("inlineCode",{parentName:"p"},"expo build:[ios|android]"),"), but is available via EAS Build.")),Object(i.b)(r.a,{title:"Platform compatibility",android:!0,emulator:!0,ios:!0,simulator:!0,web:!0,mdxType:"PlatformsSection"}),Object(i.b)("h2",{id:"how-to-add-sentry-to-your-expo-project"},"How to add Sentry to your Expo project"),Object(i.b)("h3",{id:"step-0-sign-up-for-a-sentry-account-and-create-a-project"},"Step 0: Sign up for a Sentry account and create a project"),Object(i.b)("p",null,"Before getting real-time updates on errors and making your app generally incredible, you'll need to make sure you've created a Sentry project. Here's how to do that:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"https://sentry.io/signup/"},"Sign up for Sentry")," (it's free), and create a project in your Dashboard. Take note of your ",Object(i.b)("strong",{parentName:"p"},"organization name"),", ",Object(i.b)("strong",{parentName:"p"},"project name"),", and ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"DSN")),"; you'll need them later."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"organization name")," is available in your ",Object(i.b)("inlineCode",{parentName:"li"},"Organization settings")," tab"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"project name")," is available in your project's ",Object(i.b)("inlineCode",{parentName:"li"},"Settings")," > ",Object(i.b)("inlineCode",{parentName:"li"},"Projects")," tab (find it in the list)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"DSN"))," is avalable in your project's ",Object(i.b)("inlineCode",{parentName:"li"},"Settings")," > ",Object(i.b)("inlineCode",{parentName:"li"},"Projects")," > ",Object(i.b)("strong",{parentName:"li"},"Project name")," > ",Object(i.b)("inlineCode",{parentName:"li"},"Client Keys (DSN)")," tab"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Go to the ",Object(i.b)("a",{parentName:"p",href:"https://sentry.io/settings/account/api/auth-tokens/"},"Sentry API section"),", and create an ",Object(i.b)("strong",{parentName:"p"},"auth token"),". The token requires the scopes: ",Object(i.b)("inlineCode",{parentName:"p"},"org:read"),", ",Object(i.b)("inlineCode",{parentName:"p"},"project:releases"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"project:write"),". Save this, too."))),Object(i.b)("p",null,"Once you have each of these: organization name, project name, DSN, and auth token, you're all set!"),Object(i.b)("h3",{id:"step-1-installation"},"Step 1: Installation"),Object(i.b)("p",null,"In your project directory, run:"),Object(i.b)(l.a,{cmd:["expo install sentry-expo"],mdxType:"TerminalBlock"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"If you're using SDK 39 or lower, run ",Object(i.b)("inlineCode",{parentName:"p"},"yarn add sentry-expo@~3.0.0"))),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"sentry-expo")," also requires some additional dependencies, otherwise it won't work properly. To install them, run:"),Object(i.b)(l.a,{cmd:["expo install expo-application expo-constants expo-device expo-updates @sentry/react-native"],mdxType:"TerminalBlock"}),Object(i.b)("h3",{id:"step-2-code"},"Step 2: Code"),Object(i.b)("p",null,"Add the following to your app's main file (usually ",Object(i.b)("inlineCode",{parentName:"p"},"App.js"),"):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import * as Sentry from 'sentry-expo';\n\nSentry.init({\n  dsn: 'YOUR DSN HERE',\n  enableInExpoDevelopment: true,\n  debug: true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production\n});\n\n// Access any @sentry/react-native exports via:\nSentry.Native.*\n\n// Access any @sentry/browser exports via:\nSentry.Browser.*\n")),Object(i.b)("h3",{id:"step-3-app-config"},"Step 3: App Config"),Object(i.b)("h4",{id:"configure-your-postpublish-hook"},"Configure your ",Object(i.b)("inlineCode",{parentName:"h4"},"postPublish")," hook"),Object(i.b)("p",null,"Add ",Object(i.b)("inlineCode",{parentName:"p"},"expo.hooks")," to your project's ",Object(i.b)("inlineCode",{parentName:"p"},"app.json")," (or ",Object(i.b)("inlineCode",{parentName:"p"},"app.config.js"),") file:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "expo": {\n    // ... your existing configuration\n    "hooks": {\n      "postPublish": [\n        {\n          "file": "sentry-expo/upload-sourcemaps",\n          "config": {\n            "organization": "your sentry organization\'s short name here",\n            "project": "your sentry project\'s name here",\n            "authToken": "your auth token here"\n          }\n        }\n      ]\n    }\n  }\n}\n')),Object(i.b)("p",null,"The correct ",Object(i.b)("inlineCode",{parentName:"p"},"authToken")," value can be generated from the ",Object(i.b)("a",{parentName:"p",href:"https://sentry.io/settings/account/api/"},"Sentry API page "),"."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You can also use environment variables for your config, if you prefer:"),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"organization = SENTRY_ORG"),Object(i.b)("li",{parentName:"ul"},"project = SENTRY_PROJECT"),Object(i.b)("li",{parentName:"ul"},"authToken = SENTRY_AUTH_TOKEN")),Object(i.b)("p",{parentName:"blockquote"},"You can pass them in directly like this:"),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",{parentName:"pre"},"SENTRY_PROJECT=myCoolProject expo publish\n"))),Object(i.b)("details",null,Object(i.b)("summary",null,Object(i.b)("h4",null,"Additional configuration options")),Object(i.b)("p",null,Object(i.b)("p",null,"In addition to the required config fields above, you can also provide these ",Object(i.b)("strong",{parentName:"p"},"optional")," fields:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"setCommits")," : boolean value indicating whether or not to tell Sentry about which commits are associated with a new release. This allows Sentry to pinpoint which commits likely caused an issue."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"deployEnv")," : string indicating the deploy environment. This will automatically send an email to Sentry users who have committed to the release that is being deployed."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"distribution")," : The name/value to give your distribution (you can think of this as a sub-release). Expo defaults to using your ",Object(i.b)("inlineCode",{parentName:"li"},"version")," from app.json. ",Object(i.b)("strong",{parentName:"li"},"If you provide a custom ",Object(i.b)("inlineCode",{parentName:"strong"},"distribution"),", you must pass the same value to ",Object(i.b)("inlineCode",{parentName:"strong"},"dist")," in your call to ",Object(i.b)("inlineCode",{parentName:"strong"},"Sentry.init()"),", otherwise you will not see stacktraces in your error reports.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"release")," : The name you'd like to give your release (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"release-feature-ABC"),"). This defaults to a unique ",Object(i.b)("inlineCode",{parentName:"li"},"revisionId")," of your JS bundle. ",Object(i.b)("strong",{parentName:"li"},"If you provide a custom ",Object(i.b)("inlineCode",{parentName:"strong"},"release"),", you must pass in the same ",Object(i.b)("inlineCode",{parentName:"strong"},"release")," value to ",Object(i.b)("inlineCode",{parentName:"strong"},"Sentry.init()"),", otherwise you will not see stacktraces in your error reports.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"url")," : your Sentry URL, only necessary when self-hosting Sentry.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You can also use environment variables for your config, if you prefer:"),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"setCommits = SENTRY_SET_COMMITS"),Object(i.b)("li",{parentName:"ul"},"deployEnv = SENTRY_DEPLOY_ENV"),Object(i.b)("li",{parentName:"ul"},"distribution = SENTRY_DIST"),Object(i.b)("li",{parentName:"ul"},"release = SENTRY_RELEASE"),Object(i.b)("li",{parentName:"ul"},"url = SENTRY_URL"))))),Object(i.b)("h4",{id:"add-the-config-plugin"},"Add the Config Plugin"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: Disregard the following if you're using the classic build system (",Object(i.b)("inlineCode",{parentName:"p"},"expo build:[android|ios]"),").")),Object(i.b)("p",null,"Add ",Object(i.b)("inlineCode",{parentName:"p"},"expo.plugins")," to your project's ",Object(i.b)("inlineCode",{parentName:"p"},"app.json")," (or ",Object(i.b)("inlineCode",{parentName:"p"},"app.config.js"),") file:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "expo": {\n    // ... your existing configuration\n    "plugins": ["sentry-expo"]\n  }\n}\n')),Object(i.b)("p",null,"If you directly edit your native ",Object(i.b)("inlineCode",{parentName:"p"},"ios/")," and ",Object(i.b)("inlineCode",{parentName:"p"},"android/")," directories (i.e. you have ejected your project, or have a bare workflow project), ",Object(i.b)("strong",{parentName:"p"},"you should not use the above ",Object(i.b)("inlineCode",{parentName:"strong"},"plugins")," property"),". Instead, use ",Object(i.b)("inlineCode",{parentName:"p"},"yarn sentry-wizard -i reactNative -p ios android")," to configure your native projects. This ",Object(i.b)("inlineCode",{parentName:"p"},"sentry-wizard")," command will add an extra:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import * as Sentry from '@sentry/react-native';\n\nSentry.init({\n  dsn: 'YOUR DSN',\n});\n")),Object(i.b)("p",null,"to your root project file (usually ",Object(i.b)("strong",{parentName:"p"},"App.js"),"), so make sure you remove it (but keep the ",Object(i.b)("inlineCode",{parentName:"p"},"sentry-expo")," import and original ",Object(i.b)("inlineCode",{parentName:"p"},"Sentry.init")," call!)"),Object(i.b)("h2",{id:"sourcemaps"},"Sourcemaps"),Object(i.b)("p",null,"With the ",Object(i.b)("inlineCode",{parentName:"p"},"postPublish")," hook in place, now all you need to do is run ",Object(i.b)("inlineCode",{parentName:"p"},"expo publish")," and the sourcemaps will be uploaded automatically. We automatically assign a unique release version for Sentry each time you hit publish, based on the version you specify in ",Object(i.b)("strong",{parentName:"p"},"app.json")," and a release id on our backend -- this means that if you forget to update the version but hit publish, you will still get a unique Sentry release. If you're not familiar with publishing on Expo, you can ",Object(i.b)("a",{parentName:"p",href:"/workflow/publishing/"},"read more about it here"),"."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"This hook can also be used as a ",Object(i.b)("inlineCode",{parentName:"p"},"postExport")," hook if you're ",Object(i.b)("a",{parentName:"p",href:"/distribution/hosting-your-app/"},"self-hosting your updates"),".")),Object(i.b)("h3",{id:"no-publish-builds"},'"No publish builds"'),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: Disregard the following if you're using the classic build system (",Object(i.b)("inlineCode",{parentName:"p"},"expo build:[android|ios]"),").")),Object(i.b)("p",null,"With ",Object(i.b)("inlineCode",{parentName:"p"},"expo-updates"),", release builds of both iOS and Android apps will create and embed a new update from your JavaScript source at build-time. ",Object(i.b)("strong",{parentName:"p"},"This new update will not be published automatically")," and will exist only in the binary with which it was bundled. Since it isn't published, the sourcemaps aren't uploaded in the usual way like they are when you run ",Object(i.b)("inlineCode",{parentName:"p"},"expo publish")," (actually, we are relying on Sentry's native scripts to handle that). Because of this you have some extra things to be aware of:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Your ",Object(i.b)("inlineCode",{parentName:"li"},"release")," will automatically be set to Sentry's expected value- ",Object(i.b)("inlineCode",{parentName:"li"},"${bundleIdentifier}@${version}+${buildNumber}")," (iOS) or ",Object(i.b)("inlineCode",{parentName:"li"},"${androidPackage}@${version}+${versionCode}")," (Android)."),Object(i.b)("li",{parentName:"ul"},"Your ",Object(i.b)("inlineCode",{parentName:"li"},"dist")," will automatically be set to Sentry's expected value- ",Object(i.b)("inlineCode",{parentName:"li"},"${buildNumber}")," (iOS) or ",Object(i.b)("inlineCode",{parentName:"li"},"${versionCode}")," (Android)."),Object(i.b)("li",{parentName:"ul"},"The configuration for build time sourcemaps comes from the ",Object(i.b)("inlineCode",{parentName:"li"},"ios/sentry.properties")," and ",Object(i.b)("inlineCode",{parentName:"li"},"android/sentry.properties")," files. For more information, refer to ",Object(i.b)("a",{parentName:"li",href:"https://docs.sentry.io/clients/java/config/#configuration-via-properties-file"},"Sentry's documentation"),". If you're using the managed workflow, then we handle all of this setup for you via the ",Object(i.b)("a",{parentName:"li",href:"/guides/using-sentry/#add-the-config-plugin"},Object(i.b)("inlineCode",{parentName:"a"},"plugin")," you added above"),".")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Please note that configuration for ",Object(i.b)("inlineCode",{parentName:"p"},"expo publish")," and ",Object(i.b)("inlineCode",{parentName:"p"},"expo export")," in bare and managed is still done via ",Object(i.b)("inlineCode",{parentName:"p"},"app.json"),".")),Object(i.b)("p",null,"Skipping or misconfiguring either of these will result in sourcemaps not working, and thus you won't see proper stacktraces in your errors."),Object(i.b)("h3",{id:"self-hosting-updates"},"Self-hosting updates?"),Object(i.b)("p",null,"If you're self-hosting your updates (this means you run ",Object(i.b)("inlineCode",{parentName:"p"},"expo export")," instead of ",Object(i.b)("inlineCode",{parentName:"p"},"expo publish"),"), you need to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"replace ",Object(i.b)("inlineCode",{parentName:"li"},"hooks.postPublish")," in your ",Object(i.b)("strong",{parentName:"li"},"app.json")," file with ",Object(i.b)("inlineCode",{parentName:"li"},"hooks.postExport")," (everything else stays the same)"),Object(i.b)("li",{parentName:"ul"},"add the ",Object(i.b)("inlineCode",{parentName:"li"},"RewriteFrames")," integration to your ",Object(i.b)("inlineCode",{parentName:"li"},"Sentry.init")," call like so:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"Sentry.init({\n  dsn: SENTRY_DSN,\n  enableInExpoDevelopment: true,\n  integrations: [\n    new RewriteFrames({\n      iteratee: frame => {\n        if (frame.filename) {\n          // the values depend on what names you give the bundle files you are uploading to Sentry\n          frame.filename =\n            Platform.OS === 'android' ? 'app:///index.android.bundle' : 'app:///main.jsbundle';\n        }\n        return frame;\n      },\n    }),\n  ],\n});\n")),Object(i.b)("h3",{id:"testing-sentry"},"Testing Sentry"),Object(i.b)("p",null,"When building tests for your application, you want to assert that the right flow-tracking or error is being sent to Sentry, but without really sending it to Sentry servers. This way you won't swamp Sentry with false reports during test running and other CI operations."),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://wix.github.io/sentry-testkit"},Object(i.b)("inlineCode",{parentName:"a"},"sentry-testkit"))," enables Sentry to work natively in your application, and by overriding the default Sentry transport mechanism, the report is not really sent but rather logged locally into memory. In this way, the logged reports can be fetched later for your own usage, verification, or any other use you may have in your local developing/testing environment."),Object(i.b)("p",null,"See how to get started with ",Object(i.b)("inlineCode",{parentName:"p"},"sentry-testkit")," in their ",Object(i.b)("a",{parentName:"p",href:"https://wix.github.io/sentry-testkit/"},"documentation site here")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"If you're using ",Object(i.b)("inlineCode",{parentName:"p"},"Jest"),", make sure to add ",Object(i.b)("inlineCode",{parentName:"p"},"@sentry/.*")," and ",Object(i.b)("inlineCode",{parentName:"p"},"sentry-expo")," to your ",Object(i.b)("inlineCode",{parentName:"p"},"transformIgnorePatterns"),".")),Object(i.b)("h2",{id:"error-reporting-semantics"},"Error reporting semantics"),Object(i.b)("p",null,"In order to ensure that errors are reported reliably, Sentry defers reporting the data to their backend until the next time you load the app after a fatal error rather than trying to report it upon catching the exception. It saves the stacktrace and other metadata to ",Object(i.b)("inlineCode",{parentName:"p"},"AsyncStorage")," and sends it immediately when the app starts."),Object(i.b)("h2",{id:"disabled-by-default-in-dev"},"Disabled by default in dev"),Object(i.b)("p",null,"Unless ",Object(i.b)("inlineCode",{parentName:"p"},"enableInExpoDevelopment: true")," is set, all your dev/local errors will be ignored and only app releases will report errors to Sentry. You can call methods like ",Object(i.b)("inlineCode",{parentName:"p"},"Sentry.Native.captureException(new Error('Oops!'))")," but these methods will be no-op."),Object(i.b)("h2",{id:"learn-more-about-sentry"},"Learn more about Sentry"),Object(i.b)("p",null,"Sentry does more than just catch fatal errors, learn more about how to use Sentry from their ",Object(i.b)("a",{parentName:"p",href:"https://docs.sentry.io/platforms/javascript/"},"JavaScript usage docs"),"."))}u.isMDXComponent=!0},FhZx:function(e,t,n){"use strict";var a=n("AeFk"),o=n("3zh3"),i=(n("q1tI"),Object(a.b)("background-color:",o.palette.light.black,";border-radius:4px;padding:24px;display:flex;flex-direction:column;overflow-x:auto;margin-bottom:1rem;","")),r=Object(a.b)("white-space:nowrap;font-family:",o.typography.fontFaces.mono,";font-size:13px;color:",o.palette.dark.gray[900],";line-height:160%;::before{content:'$ ';color:",o.palette.dark.primary[700],";}",""),l=Object(a.b)("user-select:none;white-space:nowrap;font-family:",o.typography.fontFaces.mono,";font-size:13px;color:",o.palette.dark.gray[600],";line-height:150%;",""),p=function(e){var t=e.children;return Object(a.c)("code",{unselectable:"on",css:l},t)};t.a=function(e){var t=e.cmd;return Object(a.c)("div",{css:i},t.map((function(e,t){var n="line-".concat(t);return e.startsWith("#")?Object(a.c)(p,{key:n},e):""===e.trim()?Object(a.c)("br",{key:n}):Object(a.c)("code",{key:n,css:r},e)})))}},lsAj:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/using-sentry",function(){return n("2anV")}])}},[["lsAj",1,0,2,3,4,5]]]);