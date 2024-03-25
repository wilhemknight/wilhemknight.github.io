_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[1171],{"0dU5":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v43.0.0/sdk/register-root-component",function(){return n("he57")}])},he57:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return c})),n.d(t,"headings",(function(){return s})),n.d(t,"default",(function(){return b}));var o=n("HALo"),a=n("dhJC"),r=(n("q1tI"),n("7ljp")),i=n("hykZ"),p=["components"],c={title:"registerRootComponent",sourceCodeUrl:"https://github.com/expo/expo/tree/sdk-43/packages/expo/src/launch"},s=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"API"},{depth:3,type:"inlineCode",title:"registerRootComponent(component)"},{depth:4,type:"text",title:"Arguments"},{depth:4,type:"text",title:"Returns"},{depth:2,type:"text",title:"Common questions"},{depth:3,type:"inlineCode",title:"I created my project before SDK 18 and I want to remove  registerRootComponent , how do I do this?"},{depth:3,type:"text",title:"What if I want to name my main app file something other than App.js?"}],m={meta:c,headings:s};function b(e){var t=e.components,n=Object(a.a)(e,p);return Object(r.b)("wrapper",Object(o.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This function tells Expo what component to use as the root component for your app."),Object(r.b)(i.a,{android:!0,emulator:!0,ios:!0,simulator:!0,web:!0,mdxType:"PlatformsSection"}),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("p",null,"This API is pre-installed in ",Object(r.b)("a",{parentName:"p",href:"/introduction/managed-vs-bare/#managed-workflow"},"managed")," apps. It is not available for ",Object(r.b)("a",{parentName:"p",href:"/introduction/managed-vs-bare/#bare-workflow"},"bare")," React Native apps."),Object(r.b)("h2",{id:"api"},"API"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import { registerRootComponent } from 'expo';\n")),Object(r.b)("h3",{id:"registerrootcomponentcomponent"},Object(r.b)("inlineCode",{parentName:"h3"},"registerRootComponent(component)")),Object(r.b)("p",null,"Sets the main component for Expo to use for your app."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note:")," Prior to SDK 18, it was necessary to use ",Object(r.b)("inlineCode",{parentName:"p"},"registerRootComponent")," directly, but for projects created as of SDK 18 or later, this is handled automatically in the Expo SDK.")),Object(r.b)("h4",{id:"arguments"},"Arguments"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"component (ReactComponent)")," -- The React component class that renders the rest of your app.")),Object(r.b)("h4",{id:"returns"},"Returns"),Object(r.b)("p",null,"No return value."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note:")," ",Object(r.b)("inlineCode",{parentName:"p"},"registerRootComponent")," is roughly equivalent to React Native's ",Object(r.b)("a",{parentName:"p",href:"https://reactnative.dev/docs/appregistry.html"},"AppRegistry.registerComponent"),", with some additional hooks to provide Expo specific functionality.")),Object(r.b)("h2",{id:"common-questions"},"Common questions"),Object(r.b)("h3",{id:"i-created-my-project-before-sdk-18-and-i-want-to-remove-registerrootcomponent-how-do-i-do-this"},"I created my project before SDK 18 and I want to remove ",Object(r.b)("inlineCode",{parentName:"h3"},"registerRootComponent"),", how do I do this?"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Before continuing, make sure your project is running on SDK 18 or later."),Object(r.b)("li",{parentName:"ul"},"Open up ",Object(r.b)("strong",{parentName:"li"},"main.js")," (or if you changed it, whatever your ",Object(r.b)("inlineCode",{parentName:"li"},'"main"')," is in ",Object(r.b)("strong",{parentName:"li"},"package.json"),")."),Object(r.b)("li",{parentName:"ul"},"Set ",Object(r.b)("inlineCode",{parentName:"li"},'"main"')," to ",Object(r.b)("inlineCode",{parentName:"li"},'"node_modules/expo/AppEntry.js"'),"."),Object(r.b)("li",{parentName:"ul"},"Delete the ",Object(r.b)("inlineCode",{parentName:"li"},"registerRootComponent")," call from ",Object(r.b)("strong",{parentName:"li"},"main.js")," and put ",Object(r.b)("inlineCode",{parentName:"li"},"export default")," before your root component's class declaration."),Object(r.b)("li",{parentName:"ul"},"Rename ",Object(r.b)("strong",{parentName:"li"},"main.js")," to ",Object(r.b)("strong",{parentName:"li"},"App.js"),".")),Object(r.b)("h3",{id:"what-if-i-want-to-name-my-main-app-file-something-other-than-appjs"},"What if I want to name my main app file something other than App.js?"),Object(r.b)("p",null,"You can set the ",Object(r.b)("inlineCode",{parentName:"p"},'"main"')," in ",Object(r.b)("strong",{parentName:"p"},"package.json")," to any file within your\nproject. If you do this, then you need to use ",Object(r.b)("inlineCode",{parentName:"p"},"registerRootComponent"),";\n",Object(r.b)("inlineCode",{parentName:"p"},"export default")," will not make this component the root for the Expo app\nif you are using a custom entry file."),Object(r.b)("p",null,"For example, let's say you want to make ",Object(r.b)("inlineCode",{parentName:"p"},'"src/main.js"')," the entry file\nfor your app -- maybe you don't like having JavaScript files in the\nproject root, for example. First, set this in ",Object(r.b)("strong",{parentName:"p"},"package.json"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'{\n  "main": "src/main.js"\n}\n')),Object(r.b)("p",null,"Then in ",Object(r.b)("inlineCode",{parentName:"p"},'"src/main.js"'),", make sure you call ",Object(r.b)("inlineCode",{parentName:"p"},"registerRootComponent")," and\npass in the component you want to render at the root of the app."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"import { registerRootComponent } from 'expo';\nimport React from 'react';\nimport { View } from 'react-native';\n\nclass App extends React.Component {\n  render() {\n    return <View />;\n  }\n}\n\nregisterRootComponent(App);\n")))}b.isMDXComponent=!0}},[["0dU5",1,0,2,3,4,5]]]);