_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[132],{"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n("q1tI"),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"===typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=s(n),d=o,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||r;return n?a.a.createElement(m,l(l({ref:t},c),{},{components:n})):a.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"===typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"===typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},FhZx:function(e,t,n){"use strict";var o=n("AeFk"),a=n("3zh3"),r=(n("q1tI"),Object(o.b)("background-color:",a.palette.light.black,";border-radius:4px;padding:24px;display:flex;flex-direction:column;overflow-x:auto;margin-bottom:1rem;","")),i=Object(o.b)("white-space:nowrap;font-family:",a.typography.fontFaces.mono,";font-size:13px;color:",a.palette.dark.gray[900],";line-height:160%;::before{content:'$ ';color:",a.palette.dark.primary[700],";}",""),l=Object(o.b)("user-select:none;white-space:nowrap;font-family:",a.typography.fontFaces.mono,";font-size:13px;color:",a.palette.dark.gray[600],";line-height:150%;",""),p=function(e){var t=e.children;return Object(o.c)("code",{unselectable:"on",css:l},t)};t.a=function(e){var t=e.cmd;return Object(o.c)("div",{css:r},t.map((function(e,t){var n="line-".concat(t);return e.startsWith("#")?Object(o.c)(p,{key:n},e):""===e.trim()?Object(o.c)("br",{key:n}):Object(o.c)("code",{key:n,css:i},e)})))}},jkb9:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return p})),n.d(t,"headings",(function(){return c})),n.d(t,"default",(function(){return b}));var o=n("HALo"),a=n("dhJC"),r=(n("q1tI"),n("7ljp")),i=n("FhZx"),l=["components"],p={title:"Installation"},c=[{depth:2,type:"text",title:"1. Expo CLI"},{depth:3,type:"text",title:"Requirements"},{depth:3,type:"text",title:"Recommended Tools"},{depth:3,type:"text",title:"Installing Expo CLI"},{depth:2,type:"text",title:"2. Expo Go app for iOS and Android"},{depth:2,type:"text",title:"Up next"}],s={meta:p,headings:c};function b(e){var t=e.components,n=Object(a.a)(e,l);return Object(r.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"There are two tools that you need to develop apps with Expo: a command line app called Expo CLI to initialize and serve your project and a mobile client app called Expo Go to open it on iOS and Android. Any web browser will work for opening the project on the web."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\ud83d\udca1 You don't need macOS to build an iOS app with Expo, you only need an iOS device to run the Expo Go app. For your development machine, Windows, Linux, and macOS are all supported.")),Object(r.b)("h2",{id:"1-expo-cli"},"1. Expo CLI"),Object(r.b)("p",null,"Expo CLI is a command line app that is the main interface between a developer and Expo tools. Expo CLI also has a web-based GUI that pops up in your web browser when you start your project ","\u2014"," you can use the GUI instead of the command line interface if you're not yet comfortable using a terminal or prefer GUIs, both have similar capabilities."),Object(r.b)("h3",{id:"requirements"},"Requirements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js LTS release")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://git-scm.com"},"Git")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://facebook.github.io/watchman/docs/install#buildinstall"},"Watchman")," for macOS or Linux users")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Only Node.js LTS releases (even-numbered) are recommended. As Node.js ",Object(r.b)("a",{parentName:"p",href:"https://nodejs.org/en/about/releases/"},"officially states"),', "Production applications should only use Active LTS or Maintenance LTS releases."')),Object(r.b)("h3",{id:"recommended-tools"},"Recommended Tools"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://code.visualstudio.com/download"},"VSCode Editor"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=byCedric.vscode-expo"},"VSCode Expo Extension")," for ",Object(r.b)("strong",{parentName:"li"},"app.json")," debugging and autocomplete."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://classic.yarnpkg.com/en/docs/install"},"Yarn")),Object(r.b)("li",{parentName:"ul"},"Windows users: ",Object(r.b)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-core-on-windows"},"PowerShell"),", Bash via WSL, or the VSCode terminal.")),Object(r.b)("h3",{id:"installing-expo-cli"},"Installing Expo CLI"),Object(r.b)(i.a,{cmd:["# Install the command line tools","npm install --global expo-cli"],mdxType:"TerminalBlock"}),Object(r.b)("p",null,"Verify that the installation was successful by running ",Object(r.b)("inlineCode",{parentName:"p"},"expo whoami"),'. You\'re not logged in yet, so you will see "Not logged in". You can create an account by running ',Object(r.b)("inlineCode",{parentName:"p"},"expo register")," if you like, or if you have one already run ",Object(r.b)("inlineCode",{parentName:"p"},"expo login"),", but you also don't need an account to get started."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\ud83d\ude33 ",Object(r.b)("strong",{parentName:"p"},"Need help?")," Try searching the ",Object(r.b)("a",{parentName:"p",href:"https://forums.expo.dev"},"forums")," ","\u2014"," which are a great resource for troubleshooting.")),Object(r.b)("h2",{id:"2-expo-go-app-for-ios-and-android"},"2. Expo Go app for iOS and Android"),Object(r.b)("p",null,"The fastest way to get up and running is to use the Expo Go app on your iOS or Android device. Expo Go allows you to open up apps that are being served through Expo CLI."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ud83e\udd16 ",Object(r.b)("a",{parentName:"li",href:"https://play.google.com/store/apps/details?id=host.exp.exponent"},"Android Play Store")," - Android Lollipop (5) and greater."),Object(r.b)("li",{parentName:"ul"},"\ud83c\udf4e ",Object(r.b)("a",{parentName:"li",href:"https://apps.apple.com/app/expo-go/id982107779"},"iOS App Store")," - iOS 11 and greater.")),Object(r.b)("p",null,"When the Expo Go app is finished installing, open it up. If you created an account with ",Object(r.b)("inlineCode",{parentName:"p"},"expo-cli"),' then you can sign in here on the "Profile" tab. This will make it easier for you to open projects in the client when you have them open in development ',"\u2014",' they will appear automatically in the "Projects" tab of the client app.'),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\ud83d\udc49 It's often useful to be able to run your app directly on your computer instead of on a separate physical device. If you would like to set this up, you can learn more about ",Object(r.b)("a",{parentName:"p",href:"/workflow/ios-simulator/"},"installing the iOS Simulator (macOS only)")," and ",Object(r.b)("a",{parentName:"p",href:"/workflow/android-studio-emulator/"},"installing an Android emulator"),".")),Object(r.b)("h2",{id:"up-next"},"Up next"),Object(r.b)("p",null,"Now that ",Object(r.b)("inlineCode",{parentName:"p"},"expo-cli")," and the Expo Go app are installed, ",Object(r.b)("a",{parentName:"p",href:"/get-started/create-a-new-app/"},"let's create a new app and write some code"),"."))}b.isMDXComponent=!0},xoh5:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/get-started/installation",function(){return n("jkb9")}])}},[["xoh5",1,0,2,3]]]);