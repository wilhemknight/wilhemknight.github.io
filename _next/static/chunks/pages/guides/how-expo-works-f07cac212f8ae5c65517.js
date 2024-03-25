_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[147],{"3WE3":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/how-expo-works",function(){return n("Qgs+")}])},"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var o=n("q1tI"),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),c=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=c(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,h=u["".concat(i,".").concat(d)]||u[d]||b[d]||r;return n?a.a.createElement(h,p(p({ref:t},l),{},{components:n})):a.a.createElement(h,p({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"===typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"===typeof e?e:o,i[1]=p;for(var l=2;l<r;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},HALo:function(e,t,n){"use strict";function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return o}))},Qetd:function(e,t,n){"use strict";var o=Object.assign.bind(Object);e.exports=o,e.exports.default=e.exports},"Qgs+":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return p})),n.d(t,"headings",(function(){return s})),n.d(t,"default",(function(){return c}));var o=n("HALo"),a=n("dhJC"),r=(n("q1tI"),n("7ljp")),i=["components"],p={title:"How Expo Works"},s=[{depth:2,type:"text",title:"Serving an Expo project for local development"},{depth:3,type:"inlineCode",title:"Expo Development Server"},{depth:4,type:"inlineCode",title:"Expo Manifest"},{depth:3,type:"text",title:"Metro bundler"},{depth:2,type:"text",title:"Publishing/Deploying an Expo app in Production"},{depth:2,type:"text",title:"SDK Versions"},{depth:2,type:"text",title:"Opening a deployed Expo app"},{depth:2,type:"text",title:"Opening Expo Apps Offline"},{depth:2,type:"text",title:"Standalone Apps"}],l={meta:p,headings:s};function c(e){var t=e.components,n=Object(a.a)(e,i);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"While it's certainly not necessary to know any of this to use Expo, many engineers like to know how their tools work. We'll walk through a few key concepts here, including:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Local development of your app"),Object(r.b)("li",{parentName:"ul"},"Publishing/deploying a production version of your app"),Object(r.b)("li",{parentName:"ul"},"How Expo manages changes to its SDK"),Object(r.b)("li",{parentName:"ul"},"Opening Expo apps offline")),Object(r.b)("p",null,"You can also browse the source, fork, hack on and contribute to the Expo tooling on ",Object(r.b)("a",{parentName:"p",href:"https://github.com/expo"},"github/expo"),"."),Object(r.b)("h2",{id:"serving-an-expo-project-for-local-development"},"Serving an Expo project for local development"),Object(r.b)("p",null,"There are two pieces here: the Expo app and Expo CLI. When you start an app with Expo CLI, you're running the Expo Development Server and Metro bundler."),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"/static/images/fetch-app-development.png",alt:null})),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note:")," Expo CLI also spawns a tunnel process, which allows devices outside of your LAN to access the above servers without you needing to change your firewall settings. If you want to learn more, see ",Object(r.b)("a",{parentName:"p",href:"https://ngrok.com/"},"ngrok"),".")),Object(r.b)("h3",{id:"expo-development-server"},Object(r.b)("inlineCode",{parentName:"h3"},"Expo Development Server")),Object(r.b)("p",null,"This server is the endpoint that you hit first when you type the URL into the Expo app. Its purpose is to serve the ",Object(r.b)("strong",{parentName:"p"},"Expo Manifest")," and provide a communication layer between Expo CLI and the Expo app on your phone or simulator."),Object(r.b)("h4",{id:"expo-manifest"},Object(r.b)("inlineCode",{parentName:"h4"},"Expo Manifest")),Object(r.b)("p",null,"The following is an example of a manifest being served through Expo CLI. The first thing that you should notice is there are a lot of identical fields to ",Object(r.b)("strong",{parentName:"p"},"app.json")," (see the ",Object(r.b)("a",{parentName:"p",href:"/guides/configuration/#exp"},"Configuration with app.json / app.config.js")," section if you haven't read it yet). These fields are taken directly from that file -- this is how the Expo app accesses your configuration."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'{\n  "name":"My New Project",\n  "description":"A starter template",\n  "slug":"my-new-project",\n  "sdkVersion":"18.0.0",\n  "version":"1.0.0",\n  "revisionId": "1.0.0-r.Qbp327ENxe",\n  "orientation":"portrait",\n  "primaryColor":"#cccccc",\n  "icon":"https://s3.amazonaws.com/exp-brand-assets/ExponentEmptyManifest_192.png",\n  "notification":{\n    "icon":"https://s3.amazonaws.com/exp-us-standard/placeholder-push-icon.png",\n    "color":"#000000"\n  },\n  "loading":{\n    "icon":"https://s3.amazonaws.com/exp-brand-assets/ExponentEmptyManifest_192.png"\n  },\n  "entryPoint": "node_modules/expo/AppEntry.js",\n  "packagerOpts":{\n    "hostType":"tunnel",\n    "dev":false,\n    "strict":false,\n    "minify":false,\n    "urlType":"exp",\n    "urlRandomness":"2v-w3z",\n    "lanType":"ip"\n  },\n  "developer":{\n    "tool":"expo-cli"\n  },\n  "bundleUrl":"http://packager.2v-w3z.notbrent.internal.exp.direct:80/apps/new-project-template/main.bundle?platform=ios&dev=false&strict=false&minify=false&hot=false&includeAssetFileHashes=true",\n  "debuggerHost":"packager.2v-w3z.notbrent.internal.exp.direct:80",\n  "mainModuleName":"main",\n  "logUrl":"http://2v-w3z.notbrent.internal.exp.direct:80/logs"\n}\n')),Object(r.b)("p",null,"Every field in the manifest is some configuration option that tells Expo what it needs to know to run your app. The app fetches the manifest first and uses it to show your app's loading icon that you specified in ",Object(r.b)("strong",{parentName:"p"},"app.json"),", then proceeds to fetch your app's JavaScript at the given ",Object(r.b)("inlineCode",{parentName:"p"},"bundleUrl")," -- this URL points to a local development server which you can use to interact with the Metro bundler."),Object(r.b)("p",null,"In order to stream logs to Expo CLI, the Expo SDK intercepts calls to ",Object(r.b)("inlineCode",{parentName:"p"},"console.log"),", ",Object(r.b)("inlineCode",{parentName:"p"},"console.warn"),", etc. and posts them to the ",Object(r.b)("inlineCode",{parentName:"p"},"logUrl")," specified in the manifest. This endpoint is on the Expo Development Server."),Object(r.b)("h3",{id:"metro-bundler"},"Metro bundler"),Object(r.b)("p",null,"If you use React Native without Expo, you would start the Metro bundler server by running ",Object(r.b)("inlineCode",{parentName:"p"},"react-native start")," in your project directory. Expo starts this up for you and configures it using ",Object(r.b)("a",{parentName:"p",href:"/../guides/customizing-metro/"},"@expo/metro-config"),". This server has two purposes."),Object(r.b)("p",null,"The first is to serve your app JavaScript compiled into a single file and translating any JavaScript code that you wrote which isn't compatible with your phone's JavaScript engine. JSX, for example, is not valid JavaScript -- it is a language extension that makes working with React components more pleasant and it compiles down into plain function calls -- so ",Object(r.b)("inlineCode",{parentName:"p"},"<HelloWorld />")," would become ",Object(r.b)("inlineCode",{parentName:"p"},"React.createElement(HelloWorld, {}, null)")," (see ",Object(r.b)("a",{parentName:"p",href:"https://facebook.github.io/react/docs/jsx-in-depth.html"},"JSX in Depth")," for more information). Other language features like ",Object(r.b)("a",{parentName:"p",href:"https://blog.expo.dev/react-native-meets-async-functions-3e6f81111173#.4c2517o5m"},"async/await")," are not yet available in most engines and so they need to be compiled down into JavaScript code that will run on your phone's JavaScript engine, JavaScriptCore."),Object(r.b)("p",null,"The second purpose is to serve assets. When you include an image in your app, you will use syntax like ",Object(r.b)("inlineCode",{parentName:"p"},"<Image source={require('./assets/example.png')} />"),", and unless you have already cached that asset the app the import will be resolved to a URL that points to your Metro server."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Expo CLI will also start Webpack to serve your project on the web, if you are using that feature. It's behavior is very similar to what is described above for Metro bundler.")),Object(r.b)("h2",{id:"publishingdeploying-an-expo-app-in-production"},"Publishing/Deploying an Expo app in Production"),Object(r.b)("p",null,"When you publish an Expo app, we compile it into a JavaScript bundle with production flags enabled. That is, we minify the source and we tell Metro to build in production mode (which in turn sets ",Object(r.b)("a",{parentName:"p",href:"https://reactnative.dev/docs/javascript-environment.html#polyfills"},Object(r.b)("inlineCode",{parentName:"a"},"__DEV__"))," to ",Object(r.b)("inlineCode",{parentName:"p"},"false")," amongst other things). After compilation, we upload that bundle, along with any assets that it requires (see ",Object(r.b)("a",{parentName:"p",href:"/guides/assets/"},"Assets"),") to CloudFront. We also upload your ",Object(r.b)("a",{parentName:"p",href:"/guides/how-expo-works/#expo-manifest"},"Manifest")," (including most of your ",Object(r.b)("strong",{parentName:"p"},"app.json")," configuration) to our server. This manifest will include a ",Object(r.b)("inlineCode",{parentName:"p"},"revisionId")," key which is a unique string (generated by Expo) you can use to identify a specific release of your app, just in case you didn't increment your app's ",Object(r.b)("inlineCode",{parentName:"p"},"version")," key. When publishing is complete, we'll give you a URL to your app which you can send to anybody who has the Expo Go app."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note:")," By default, all Expo projects are ",Object(r.b)("inlineCode",{parentName:"p"},"unlisted"),", which means that publishing does not make it publicly searchable or discoverable anywhere. It is up to you to share the link. You can change this setting in ",Object(r.b)("a",{parentName:"p",href:"/guides/configuration/"},"app.json"),".")),Object(r.b)("p",null,"As soon as the publish is complete, the new version of your code is available to all your existing users. They'll download the updated version next time they open the app or refresh it, provided that they have a version of the Expo Go app that supports the ",Object(r.b)("inlineCode",{parentName:"p"},"sdkVersion")," specified in your ",Object(r.b)("strong",{parentName:"p"},"app.json"),"."),Object(r.b)("p",null,"Updates are handled differently on iOS and Android. On Android, updates\nare downloaded in the background. This means that the first time a user opens\nyour app after an update they will get the old version while the new version\nis downloaded in the background. The second time they open the app they'll get\nthe new version. On iOS, updates are downloaded synchronously, so users will\nget the new version the first time they open your app after an update."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note:")," To package your app for deployment on the Apple App Store or Google Play Store, see ",Object(r.b)("a",{parentName:"p",href:"/../../../../../../build/setup/"},"Creating your first build"),". Each time you update the SDK version you will need to rebuild your binary.")),Object(r.b)("h2",{id:"sdk-versions"},"SDK Versions"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"sdkVersion")," of an Expo app indicates what version of the compiled ObjC/Java/C layer of Expo to use. Each ",Object(r.b)("inlineCode",{parentName:"p"},"sdkVersion")," roughly corresponds to a release of React Native plus the Expo libraries in the SDK section of these docs."),Object(r.b)("p",null,"Expo Go supports many versions of the Expo SDK, but a project can only use one at a time. This allows you to publish your project today and still have it work a year from now without any changes, even if we have completely revamped or removed an API your project depends on in a new version. This is possible because your project will always be running against the same compiled code as the day that you published it."),Object(r.b)("p",null,"If you publish an update to your app with a new ",Object(r.b)("inlineCode",{parentName:"p"},"sdkVersion"),", if a user has yet to update to the latest version of Expo Go then they will still be able to use the previous ",Object(r.b)("inlineCode",{parentName:"p"},"sdkVersion"),"."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note:")," It's likely that eventually we will formulate a policy for how long we want to keep around sdkVersions and begin pruning very old versions of the sdk from the client, but until we do that, everything will remain backwards compatible.")),Object(r.b)("h2",{id:"opening-a-deployed-expo-app"},"Opening a deployed Expo app"),Object(r.b)("p",null,"The process is essentially the same as opening an Expo app in development, only now we hit an Expo server to get the manifest, and manifest points us to CloudFront to retrieve your app's JavaScript."),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"/static/images/fetch-app-production.png",alt:null})),Object(r.b)("h2",{id:"opening-expo-apps-offline"},"Opening Expo Apps Offline"),Object(r.b)("p",null,"Expo Go will automatically cache the most recent update of every project it has opened. When you try to open an Expo project, it will always try and fetch the latest update, but if that fails for whatever reason (including being totally offline) then it will load the most recent cached update."),Object(r.b)("p",null,'If you build a standalone app with Expo, that standalone binary will also ship with a "pre-cached" version of your JavaScript so that it can cold launch the very first time with no internet. Continue reading for more information about standalone apps.'),Object(r.b)("h2",{id:"standalone-apps"},"Standalone Apps"),Object(r.b)("p",null,"You can also package your Expo app into a standalone binary for submission to the Apple iTunes Store or Google Play."),Object(r.b)("p",null,"There are two options to choose from when it comes to building your Expo app:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"(",Object(r.b)("strong",{parentName:"li"},"Recommended"),") The new EAS Build system, which has support for any 3rd party library. For more information, see ",Object(r.b)("a",{parentName:"li",href:"/../../../../../../build/setup/"},"Creating your first build"),"."),Object(r.b)("li",{parentName:"ul"},"The classic ",Object(r.b)("inlineCode",{parentName:"li"},"expo build")," system, which only supports native libraries included in the Expo SDK. For more information on classic builds, see ",Object(r.b)("a",{parentName:"li",href:"/../../../../../../classic/building-standalone-apps/"},"here"),".")))}c.isMDXComponent=!0},dhJC:function(e,t,n){"use strict";function o(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return o}))}},[["3WE3",1,0]]]);