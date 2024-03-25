_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[174],{"73AI":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/using-nextjs",function(){return n("QUnc")}])},"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return j}));var a=n("q1tI"),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),c=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"===typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,j=s["".concat(i,".").concat(m)]||s[m]||u[m]||r;return n?o.a.createElement(j,l(l({ref:t},b),{},{components:n})):o.a.createElement(j,l({ref:t},b))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"===typeof e?e:a,i[1]=l;for(var b=2;b<r;b++)i[b]=n[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},HALo:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},QUnc:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return l})),n.d(t,"headings",(function(){return p})),n.d(t,"default",(function(){return c}));var a=n("HALo"),o=n("dhJC"),r=(n("q1tI"),n("7ljp")),i=["components"],l={title:"Using Next.js with Expo for Web",sidebar_title:"Using Next.js"},p=[{depth:2,type:"text",title:"TL;DR:"},{depth:2,type:"text",title:"\ud83c\udfc1 Setup"},{depth:3,type:"text",title:"Add Next.js to Expo projects"},{depth:3,type:"text",title:"Add Expo to Next.js projects"},{depth:3,type:"text",title:"Manual setup"},{depth:2,type:"text",title:"Guides"},{depth:3,type:"text",title:"Deploy to Vercel"},{depth:3,type:"text",title:"Polyfill setImmediate"},{depth:3,type:"text",title:"Image support"},{depth:3,type:"text",title:"Font support"},{depth:2,type:"text",title:"API"},{depth:3,type:"text",title:"CLI"},{depth:4,type:"text",title:"\u2699\ufe0f CLI Options"},{depth:3,type:"text",title:"Babel"},{depth:3,type:"text",title:"Config"},{depth:4,type:"inlineCode",title:"withExpo"},{depth:3,type:"text",title:"Document"},{depth:4,type:"text",title:"Customizing the Document"},{depth:2,type:"text",title:"Limitations or differences comparing to the default Expo for Web"},{depth:2,type:"text",title:"Contributing"}],b={meta:l,headings:p};function c(e){var t=e.components,n=Object(o.a)(e,i);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Please open any issues related to Next.js with Expo at ",Object(r.b)("a",{parentName:"p",href:"https://github.com/expo/expo-cli/issues"},"expo-cli/issues"),".")),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://nextjs.org/"},"Next.js")," is a React framework that provides simple page-based routing as well as server-side rendering. To use Next.js with Expo for web we recommend that you use a library called ",Object(r.b)("a",{parentName:"p",href:"https://github.com/expo/expo-cli/tree/main/packages/next-adapter"},Object(r.b)("inlineCode",{parentName:"a"},"@expo/next-adapter"))," to handle the configuration and integration of the tools."),Object(r.b)("p",null,"Using Expo with Next.js means you can share all of your existing components and APIs across your mobile and web. Next.js has it's own Webpack config so ",Object(r.b)("strong",{parentName:"p"},"you'll need to start your web projects with the ",Object(r.b)("inlineCode",{parentName:"strong"},"next-cli")," and not with ",Object(r.b)("inlineCode",{parentName:"strong"},"expo start:web"),".")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\ud83d\udca1 Next.js can only be used with Expo for web, this doesn't provide Server-Side Rendering (SSR) for native apps.")),Object(r.b)("h2",{id:"tldr"},"TL;DR:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Init: ",Object(r.b)("inlineCode",{parentName:"li"},"npx create-react-native-app -t with-nextjs")," (or ",Object(r.b)("inlineCode",{parentName:"li"},"npx create-next-app -e with-expo"),")"),Object(r.b)("li",{parentName:"ul"},"Start: ",Object(r.b)("inlineCode",{parentName:"li"},"yarn next dev")),Object(r.b)("li",{parentName:"ul"},"Open: ",Object(r.b)("inlineCode",{parentName:"li"},"http://localhost:3000/"))),Object(r.b)("h2",{id:"-setup"},"\ud83c\udfc1 Setup"),Object(r.b)("p",null,"To get started, create a new project with ",Object(r.b)("a",{parentName:"p",href:"https://github.com/expo/examples/tree/master/with-nextjs"},"the template"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"npx create-react-native-app -t with-nextjs\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Web"),": ",Object(r.b)("inlineCode",{parentName:"li"},"yarn next dev")," -- start the Next.js project"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Native"),": ",Object(r.b)("inlineCode",{parentName:"li"},"expo start")," -- start the Expo project")),Object(r.b)("h3",{id:"add-nextjs-to-expo-projects"},"Add Next.js to Expo projects"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This is for already existing Expo projects.")),Object(r.b)("p",null,"In this approach you would be using SSR for web in your universal project. This is the recommended path because it gives you full access to the features of Expo and Next.js."),Object(r.b)("details",null,Object(r.b)("summary",null,"Instructions"),Object(r.b)("p",null,Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Install the adapter:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"yarn:")," ",Object(r.b)("inlineCode",{parentName:"li"},"yarn add -D @expo/next-adapter")),Object(r.b)("li",{parentName:"ul"},"npm: ",Object(r.b)("inlineCode",{parentName:"li"},"npm i --save-dev @expo/next-adapter")))),Object(r.b)("li",{parentName:"ul"},"Add Next.js support: ",Object(r.b)("inlineCode",{parentName:"li"},"yarn next-expo"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Always commit your changes first!"),Object(r.b)("li",{parentName:"ul"},"You can optionally choose which customizations you want to do with ",Object(r.b)("inlineCode",{parentName:"li"},"--customize or -c")),Object(r.b)("li",{parentName:"ul"},"Force reload changes with ",Object(r.b)("inlineCode",{parentName:"li"},"--force or -f")))),Object(r.b)("li",{parentName:"ul"},"Start the project with ",Object(r.b)("inlineCode",{parentName:"li"},"yarn next dev"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Go to ",Object(r.b)("inlineCode",{parentName:"li"},"http://localhost:3000/")," to see your project!")))))),Object(r.b)("h3",{id:"add-expo-to-nextjs-projects"},"Add Expo to Next.js projects"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This is for already existing Next.js projects.")),Object(r.b)("p",null,"This approach is useful if you only want to use Expo components in your web-only project."),Object(r.b)("details",null,Object(r.b)("summary",null,"Instructions"),Object(r.b)("p",null,Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Install the adapter:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"yarn:")," ",Object(r.b)("inlineCode",{parentName:"li"},"yarn add -D @expo/next-adapter")),Object(r.b)("li",{parentName:"ul"},"npm: ",Object(r.b)("inlineCode",{parentName:"li"},"npm i --save-dev @expo/next-adapter")))),Object(r.b)("li",{parentName:"ul"},"Add Next.js support: ",Object(r.b)("inlineCode",{parentName:"li"},"yarn next-expo"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Always commit your changes first!"),Object(r.b)("li",{parentName:"ul"},"You can optionally choose which customizations you want to do with ",Object(r.b)("inlineCode",{parentName:"li"},"--customize or -c")),Object(r.b)("li",{parentName:"ul"},"Force reload changes with ",Object(r.b)("inlineCode",{parentName:"li"},"--force or -f")))),Object(r.b)("li",{parentName:"ul"},"Start the project with ",Object(r.b)("inlineCode",{parentName:"li"},"yarn next dev"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Go to ",Object(r.b)("inlineCode",{parentName:"li"},"http://localhost:3000/")," to see your project!")))))),Object(r.b)("h3",{id:"manual-setup"},"Manual setup"),Object(r.b)("p",null,"Optionally you can set the project up manually (not recommended)."),Object(r.b)("details",null,Object(r.b)("summary",null,"Instructions"),Object(r.b)("p",null,Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Re-export the custom ",Object(r.b)("inlineCode",{parentName:"p"},"Document")," component in the ",Object(r.b)("strong",{parentName:"p"},"pages/_document.js")," file of your Next.js project."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"This will ensure ",Object(r.b)("inlineCode",{parentName:"li"},"react-native-web")," styling works."),Object(r.b)("li",{parentName:"ul"},"You can run ",Object(r.b)("inlineCode",{parentName:"li"},"yarn next-expo -c")," then select ",Object(r.b)("strong",{parentName:"li"},"pages/_document.js")),Object(r.b)("li",{parentName:"ul"},"Or you can create the file - ",Object(r.b)("inlineCode",{parentName:"li"},"mkdir pages; touch pages/_document.js"))),Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"pages/_document.js")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-js"},"export { default } from '@expo/next-adapter/document';\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Create a ",Object(r.b)("strong",{parentName:"p"},"babel.config.js")," and use ",Object(r.b)("a",{parentName:"p",href:"https://github.com/expo/expo/tree/main/packages/babel-preset-expo"},Object(r.b)("inlineCode",{parentName:"a"},"babel-preset-expo")),"."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"You can run ",Object(r.b)("inlineCode",{parentName:"li"},"yarn next-expo -c")," then select ",Object(r.b)("strong",{parentName:"li"},"babel.config.js")),Object(r.b)("li",{parentName:"ul"},"Or you can You may have installed this earlier with ",Object(r.b)("inlineCode",{parentName:"li"},"yarn add -D babel-preset-expo"))),Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"babel.config.js")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  presets: ['@expo/next-adapter/babel'],\n};\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Update the Next.js ",Object(r.b)("strong",{parentName:"p"},"next.config.js")," file to support loading React Native and Expo packages:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"yarn add -D next-compose-plugins next-transpile-modules")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"touch next.config.js")))),Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"next.config.js")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-js"},"const { withExpo } = require('@expo/next-adapter');\nconst withPlugins = require('next-compose-plugins');\nconst withTM = require('next-transpile-modules')(['react-native-web']);\n\nconst nextConfig = {};\n\nmodule.exports = withPlugins(\n  [withTM, [withExpo, { projectRoot: __dirname }]],\n  nextConfig\n);\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You can now start your Expo web + Next.js project with ",Object(r.b)("inlineCode",{parentName:"p"},"yarn next dev")," \ud83c\udf89"))))),Object(r.b)("h2",{id:"guides"},"Guides"),Object(r.b)("h3",{id:"deploy-to-vercel"},"Deploy to Vercel"),Object(r.b)("p",null,"(Formerly ZEIT Now)"),Object(r.b)("p",null,"This is Vercel's preferred method for deploying Next.js projects to production."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Add a ",Object(r.b)("strong",{parentName:"li"},"build")," script to your ",Object(r.b)("strong",{parentName:"li"},"package.json"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "build": "next build"\n  }\n}\n'))),Object(r.b)("li",{parentName:"ul"},"Install the Vercel CLI: ",Object(r.b)("inlineCode",{parentName:"li"},"npm i -g vercel")),Object(r.b)("li",{parentName:"ul"},"Deploy to Vercel: ",Object(r.b)("inlineCode",{parentName:"li"},"vercel"))),Object(r.b)("h3",{id:"polyfill-setimmediate"},"Polyfill setImmediate"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\ud83d\udca1 Fixes ",Object(r.b)("inlineCode",{parentName:"p"},"setImmediate is not defined")," error.")),Object(r.b)("p",null,"A lot of libraries in the React ecosystem use the ",Object(r.b)("inlineCode",{parentName:"p"},"setImmediate()")," API (like ",Object(r.b)("inlineCode",{parentName:"p"},"react-native-reanimated"),"), which Next.js doesn't polyfill by default. To fix this you can polyfill it yourself."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Install: ",Object(r.b)("inlineCode",{parentName:"li"},"yarn add setimmediate")),Object(r.b)("li",{parentName:"ul"},"Import in ",Object(r.b)("strong",{parentName:"li"},"pages/_app.js"),", at the top of the file:",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-js"},"import 'setimmediate';\n")))),Object(r.b)("p",null,"If you restart the server this error should go away."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/expo/expo/issues/7996"},"Related issue and solution"),".")),Object(r.b)("h3",{id:"image-support"},"Image support"),Object(r.b)("p",null,"By default Next.js won't load your statically imported images (images that you include in your project with ",Object(r.b)("inlineCode",{parentName:"p"},"require('./path/to/image.png')"),") like an Expo project will. If you want to load static images into your ",Object(r.b)("inlineCode",{parentName:"p"},"<Image />")," components or use ",Object(r.b)("inlineCode",{parentName:"p"},"react-native-svg")," then you can do the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Install the plugin - ",Object(r.b)("inlineCode",{parentName:"p"},"yarn add next-images")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/twopluszero/next-images"},Object(r.b)("inlineCode",{parentName:"a"},"next-images"))," injects a Webpack loader to handle images."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/cyrilwanner/next-optimized-images"},Object(r.b)("inlineCode",{parentName:"a"},"next-optimized-images"))," is another good solution that you could check out."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Wrap your Next.js configuration object with the the image method and the Expo method in your ",Object(r.b)("strong",{parentName:"p"},"next.config.js"),":"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-js"},"const { withExpo } = require('@expo/next-adapter');\nconst withImages = require('next-images');\n\nmodule.exports = withExpo(\n  withImages({\n    projectRoot: __dirname,\n  })\n);\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Now restart your project and you should be able to load images!"))),Object(r.b)("p",null,"You can test your config with the following example:"),Object(r.b)("details",null,Object(r.b)("summary",null,"Show Example"),Object(r.b)("p",null,Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { Image } from 'react-native';\n\nexport default function ImageDemo() {\n  return <Image source={require('./assets/image.png')} style={{ flex: 1 }} />;\n}\n")))),Object(r.b)("h3",{id:"font-support"},"Font support"),Object(r.b)("p",null,"By default Next.js doesn't support static assets like an Expo project. Because this is the intended functionality of Next.js, ",Object(r.b)("inlineCode",{parentName:"p"},"@expo/next-adapter")," doesn't add font support by default. If you want to use libraries like ",Object(r.b)("inlineCode",{parentName:"p"},"expo-font"),", ",Object(r.b)("inlineCode",{parentName:"p"},"@expo/vector-icons"),", or ",Object(r.b)("inlineCode",{parentName:"p"},"react-native-vector-icons")," you'll need to change a few things."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Install the plugin - ",Object(r.b)("inlineCode",{parentName:"p"},"yarn add next-fonts")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/rohanray/next-fonts"},Object(r.b)("inlineCode",{parentName:"a"},"next-fonts"))," injects a Webpack loader to handle fonts."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Wrap the font method with the Expo method in your ",Object(r.b)("strong",{parentName:"p"},"next.config.js"),":"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"The order is important because Expo can mix in the location of vector icons to the existing font loader.")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-js"},"const { withExpo } = require('@expo/next-adapter');\nconst withFonts = require('next-fonts');\n\nmodule.exports = withExpo(\n  withFonts({\n    projectRoot: __dirname,\n  })\n);\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Now restart your project and you should be able to load fonts!"))),Object(r.b)("p",null,"You can test your config with the following example:"),Object(r.b)("details",null,Object(r.b)("summary",null,"Show Example"),Object(r.b)("p",null,Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import React, { useEffect, useState } from 'react';\nimport * as Font from 'expo-font';\nimport { Text } from 'react-native';\n\nexport default function FontDemo() {\n  const [loaded, setLoaded] = useState(false);\n\n  useEffect(() => {\n    (async () => {\n      try {\n        await Font.loadAsync({\n          // You can get this font on GitHub: https://shorturl.at/chEHS\n          'space-mono': require('./assets/SpaceMono-Regular.ttf'),\n        });\n      } catch ({ message }) {\n        // This will be called if something is broken\n        console.log(`Error loading font: ${message}`);\n      } finally {\n        setLoaded(true);\n      }\n    })();\n  }, []);\n\n  if (!loaded) return <Text>Loading fonts...</Text>;\n\n  return <Text style={{ fontFamily: 'space-mono' }}>Hello from Space Mono</Text>;\n}\n")))),Object(r.b)("h2",{id:"api"},"API"),Object(r.b)("h3",{id:"cli"},"CLI"),Object(r.b)("p",null,"Generate static Next.js files into your project."),Object(r.b)("h4",{id:"\ufe0f-cli-options"},"\u2699\ufe0f CLI Options"),Object(r.b)("p",null,"For more information run ",Object(r.b)("inlineCode",{parentName:"p"},"yarn next-expo --help")," (or ",Object(r.b)("inlineCode",{parentName:"p"},"-h"),")"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Shortcut"),Object(r.b)("th",{parentName:"tr",align:null},"Flag"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"-f")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"--force")),Object(r.b)("td",{parentName:"tr",align:null},"Allows replacing existing files")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"-c")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"--customize")),Object(r.b)("td",{parentName:"tr",align:null},"Select template files you want to add to your project")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"-V")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"--version")),Object(r.b)("td",{parentName:"tr",align:null},"output the version number")))),Object(r.b)("h3",{id:"babel"},"Babel"),Object(r.b)("p",null,"The adapter provides a Babel config ",Object(r.b)("a",{parentName:"p",href:"https://github.com/expo/expo-cli/blob/master/packages/next-adapter/src/babel.ts"},Object(r.b)("inlineCode",{parentName:"a"},"@expo/next-adapter/babel"))," to simplify setup."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Always use the universal ",Object(r.b)("a",{parentName:"li",href:"https://github.com/expo/expo/tree/main/packages/babel-preset-expo"},Object(r.b)("inlineCode",{parentName:"a"},"babel-preset-expo")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Provides React Native support for all platforms that Expo supports (web, iOS, Android)"))),Object(r.b)("li",{parentName:"ul"},"When running in the browser, also use ",Object(r.b)("inlineCode",{parentName:"li"},"next/babel")," preset.")),Object(r.b)("h3",{id:"config"},"Config"),Object(r.b)("h4",{id:"withexpo"},Object(r.b)("inlineCode",{parentName:"h4"},"withExpo")),Object(r.b)("p",null,"Wraps your ",Object(r.b)("a",{parentName:"p",href:"https://nextjs.org/docs#custom-configuration"},Object(r.b)("strong",{parentName:"a"},"next.config.js"))," and adds universal platform support."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Defines a custom ",Object(r.b)("inlineCode",{parentName:"li"},"pageExtensions")," which makes Webpack resolve ",Object(r.b)("strong",{parentName:"li"},".web.js")," before ",Object(r.b)("strong",{parentName:"li"},".js"),', we call this feature "platform extensions".'),Object(r.b)("li",{parentName:"ul"},"Wraps the Webpack config in ",Object(r.b)("inlineCode",{parentName:"li"},"withUnimodules")," from ",Object(r.b)("inlineCode",{parentName:"li"},"@expo/webpack-config"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Makes Babel target all Expo, and React Native packages that you've installed"),Object(r.b)("li",{parentName:"ul"},"Aliases ",Object(r.b)("inlineCode",{parentName:"li"},"react-native")," to ",Object(r.b)("inlineCode",{parentName:"li"},"react-native-web")," in the browser"),Object(r.b)("li",{parentName:"ul"},"Defines the platform constants you get in React Native like ",Object(r.b)("inlineCode",{parentName:"li"},"__DEV__"))))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const { withExpo } = require('@expo/next-adapter');\n\nmodule.exports = withExpo({\n  /* next.config.js code */\n});\n")),Object(r.b)("h3",{id:"document"},"Document"),Object(r.b)("p",null,"Next.js uses the ",Object(r.b)("strong",{parentName:"p"},"pages/_document.js")," file to augment your app's ",Object(r.b)("inlineCode",{parentName:"p"},"<html>")," and ",Object(r.b)("inlineCode",{parentName:"p"},"<body>")," tags. Learn more ",Object(r.b)("a",{parentName:"p",href:"https://nextjs.org/docs#custom-document"},"here"),"."),Object(r.b)("p",null,"This adapter provides a default ",Object(r.b)("inlineCode",{parentName:"p"},"Document")," (extended from Next.js's Document) that you can use to skip all of the React Native setup."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Registers your app with ",Object(r.b)("inlineCode",{parentName:"li"},"AppRegistry")," from ",Object(r.b)("inlineCode",{parentName:"li"},"react-native-web")," to start your project."),Object(r.b)("li",{parentName:"ul"},"Implements the ",Object(r.b)("inlineCode",{parentName:"li"},"react-native-web")," CSS reset.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import Document, { style, getInitialProps } from '@expo/next-adapter/document';\n")),Object(r.b)("h4",{id:"customizing-the-document"},"Customizing the Document"),Object(r.b)("p",null,"If you need more control you can import then recompose the ",Object(r.b)("inlineCode",{parentName:"p"},"Document")," how you like. This is good for augmenting the ",Object(r.b)("inlineCode",{parentName:"p"},"<head />")," element or mixing your own styles."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},"import { getInitialProps } from '@expo/next-adapter/document';\nimport Document, { Head, Main, NextScript } from 'next/document';\nimport React from 'react';\n\nclass CustomDocument extends Document {\n  render() {\n    return (\n      <html>\n        <Head>\n          <meta httpEquiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n        </Head>\n        <body>\n          <Main />\n          <NextScript />\n        </body>\n      </html>\n    );\n  }\n}\n\n// Import the getInitialProps method and assign it to your component to ensure the react-native-web styles are used.\nCustomDocument.getInitialProps = getInitialProps;\n\n// OR...\n\nCustomDocument.getInitialProps = async props => {\n  const result = await getInitialProps(props);\n  // Mutate result...\n  return result;\n};\n\nexport default CustomDocument;\n")),Object(r.b)("h2",{id:"limitations-or-differences-comparing-to-the-default-expo-for-web"},"Limitations or differences comparing to the default Expo for Web"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"To get PWA support, use Next.js plugins such as ",Object(r.b)("a",{parentName:"li",href:"https://github.com/hanford/next-offline"},"next-offline")," instead. Learn more ",Object(r.b)("a",{parentName:"li",href:"https://nextjs.org/features/progressive-web-apps"},"here"),"."),Object(r.b)("li",{parentName:"ul"},"You might need to use the ",Object(r.b)("a",{parentName:"li",href:"https://github.com/martpie/next-transpile-modules"},"next-transpile-modules")," plugin to transpile certain third-party modules in order for them to work (such as Emotion)."),Object(r.b)("li",{parentName:"ul"},"Only the Next.js default page-based routing is supported. You'll need to use a completely different routing solution to do native navigation. We strongly recommend ",Object(r.b)("a",{parentName:"li",href:"https://reactnavigation.org/"},"react-navigation")," for this.")),Object(r.b)("h2",{id:"contributing"},"Contributing"),Object(r.b)("p",null,"If you would like to help make Next.js support in Expo better, please feel free to open a PR or submit an issue:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/expo/expo-cli/tree/main/packages/next-adapter"},"@expo/next-adapter"))),Object(r.b)("p",null,"If you have any problems rendering a certain component with SSR then you can submit fixes to the expo/expo repo:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/expo/expo/tree/main/packages"},"Expo SDK packages"))),Object(r.b)("p",null,"Thanks so much \ud83d\udc4b"))}c.isMDXComponent=!0},Qetd:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},dhJC:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return a}))}},[["73AI",1,0]]]);