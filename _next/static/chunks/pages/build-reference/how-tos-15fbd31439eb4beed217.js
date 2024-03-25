_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[63],{"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n("q1tI"),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"===typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(a,".").concat(d)]||u[d]||b[d]||i;return n?o.a.createElement(m,s(s({ref:t},c),{},{components:n})):o.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"===typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},KiYJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("cpVT"),o=n("3zh3"),i=(n("q1tI"),n("AeFk"));function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e){var t=e.alt,n=e.src,r=e.style,a=e.containerStyle;return Object(i.c)("div",{style:s({textAlign:"center",backgroundColor:o.theme.background.secondary,paddingTop:10,paddingBottom:10,marginTop:20,marginBottom:20},a)},Object(i.c)("img",{src:n,alt:t,style:r}))}},RUYS:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/build-reference/how-tos",function(){return n("ZvGk")}])},ZvGk:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return s})),n.d(t,"headings",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n("HALo"),o=n("dhJC"),i=(n("q1tI"),n("7ljp")),a=(n("KiYJ"),["components"]),s={title:"Integrating with third-party tooling"},l=[{depth:2,type:"text",title:"EAS Build-specific npm hooks"},{depth:2,type:"text",title:"How to set up EAS Build with a monorepo"},{depth:2,type:"text",title:"How to use private package repositories"},{depth:2,type:"text",title:"Using npm cache with yarn v1"},{depth:2,type:"text",title:"How to use git submodules"}],c={meta:s,headings:l};function p(e){var t=e.components,n=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This document outlines how to configure EAS Build for some common scenarios, such as monorepos and repositories with private dependencies. The examples described here do not provide step-by-step instructions to set up EAS Build from scratch. Instead, they explain the changes from the standard process that are necessary to accommodate the given scenario."),Object(i.b)("h2",{id:"eas-build-specific-npm-hooks"},"EAS Build-specific npm hooks"),Object(i.b)("p",null,"There are three EAS Build-specific npm hooks that you can set in your package.json. See the ",Object(i.b)("a",{parentName:"p",href:"/build-reference/android-builds/"},"Android build process")," and ",Object(i.b)("a",{parentName:"p",href:"/build-reference/ios-builds/"},"iOS build process")," docs to get a better understanding about the internals of the build process."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"eas-build-pre-install")," - executed before EAS Build runs ",Object(i.b)("inlineCode",{parentName:"li"},"yarn install")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"eas-build-post-install")," - the behavior depends on the platform:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"for Android, after ",Object(i.b)("inlineCode",{parentName:"li"},"yarn install")," has completed"),Object(i.b)("li",{parentName:"ul"},"for iOS, after ",Object(i.b)("inlineCode",{parentName:"li"},"yarn install")," and ",Object(i.b)("inlineCode",{parentName:"li"},"pod install")," have completed"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"eas-build-pre-upload-artifacts")," - this hook is triggered almost at the end of the build process, just before EAS Build uploads the build artifacts to AWS S3")),Object(i.b)("p",null,"This is an example of how your package.json might look like:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "main": "index.js",\n  "scripts": {\n    "eas-build-pre-install": "echo 123",\n    "eas-build-post-install": "echo 456",\n    "eas-build-pre-upload-artifacts": "echo 789",\n    "android": "expo run:android",\n    "ios": "expo run:ios",\n    "web": "expo start --web",\n    "start": "react-native start",\n    "test": "jest"\n  },\n  "dependencies": {\n    "expo": "~40.0.0"\n    // ...\n  },\n  "devDependencies": {\n    // ...\n  },\n  "jest": {\n    "preset": "react-native"\n  },\n  "private": true\n}\n')),Object(i.b)("h2",{id:"how-to-set-up-eas-build-with-a-monorepo"},"How to set up EAS Build with a monorepo"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Run all EAS CLI commands from the root of the app directory. For example: if your project exists inside of your git repository at ",Object(i.b)("inlineCode",{parentName:"li"},"apps/my-app"),", then run ",Object(i.b)("inlineCode",{parentName:"li"},"eas build")," from there."),Object(i.b)("li",{parentName:"ul"},"All files related to EAS Build, such as ",Object(i.b)("strong",{parentName:"li"},"eas.json")," and ",Object(i.b)("strong",{parentName:"li"},"credentials.json"),", should be in the root of the app directory. If you have multiple apps that use EAS Build in your monorepo, each app directory will have its own copy of these files."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"If you are building a managed project in a monorepo"),", please refer to the ",Object(i.b)("a",{parentName:"li",href:"/../../../../../../guides/monorepos/"},'"Working with Monorepos" guide'),"."),Object(i.b)("li",{parentName:"ul"},"If your project needs additional setup beyond what is provided, add a ",Object(i.b)("inlineCode",{parentName:"li"},"postinstall")," step to ",Object(i.b)("strong",{parentName:"li"},"package.json")," in your project that builds all necessary dependencies in other workspaces. For example:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "postinstall": "cd ../.. && yarn build"\n  }\n}\n')),Object(i.b)("h2",{id:"how-to-use-private-package-repositories"},"How to use private package repositories"),Object(i.b)("p",null,"See ",Object(i.b)("a",{parentName:"p",href:"/../../../../../../build-reference/private-npm-packages"},"Using private npm packages")," to learn more."),Object(i.b)("h2",{id:"using-npm-cache-with-yarn-v1"},"Using npm cache with yarn v1"),Object(i.b)("p",null,"By default the EAS npm cache won't work with yarn v1, because ",Object(i.b)("inlineCode",{parentName:"p"},"yarn.lock")," files contain URLs to registries for every package and yarn does not provide any way to override it. The issue is fixed in yarn v2, but the yarn team does not plan to backport it to yarn v1. If you want to take advantage of the npm cache, you can use the ",Object(i.b)("inlineCode",{parentName:"p"},"eas-build-pre-install")," script to override the registry in your ",Object(i.b)("inlineCode",{parentName:"p"},"yarn.lock"),"."),Object(i.b)("p",null,"e.g."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'{\n "scripts": {\n    "eas-build-pre-install": "bash -c \\"[ ! -z \\\\\\"$EAS_BUILD_NPM_CACHE_URL\\\\\\" ] && sed -i -e \\\\\\"s#https://registry.yarnpkg.com#$EAS_BUILD_NPM_CACHE_URL#g\\\\\\" yarn.lock\\" || true"\n  }\n}\n')),Object(i.b)("h2",{id:"how-to-use-git-submodules"},"How to use git submodules"),Object(i.b)("p",null,"If you are using the default VCS workflow, the content of your working directory will be uploaded to EAS Build as it is, including the content of Git submodules. If you are building on CI you will need to initialize them, otherwise, empty directories will be uploaded."),Object(i.b)("p",null,"If you have ",Object(i.b)("inlineCode",{parentName:"p"},"cli.requireCommit")," set to ",Object(i.b)("inlineCode",{parentName:"p"},"true")," in ",Object(i.b)("strong",{parentName:"p"},"eas.json")," you will need to initialize your submodules on EAS Build worker.\nFirst, create a ",Object(i.b)("a",{parentName:"p",href:"/../../../../../../build-reference/variables/#using-secrets-in-environment-variables"},"secret")," with a base64 encoded private SSH key that has permission to access submodule repositories. Next, add an ",Object(i.b)("inlineCode",{parentName:"p"},"eas-build-pre-install")," npm hook to check out those submodules, for example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'#!/usr/bin/env bash\n\nmkdir -p ~/.ssh\n\n# Real origin URl is lost during the packaging process, so if your\n# submodules are defined using relative urls in .gitmodules then\n# you need to restore it with:\n#\n# git remote set-url origin git@github.com:example/repo.git\n\n# restore private key from env variable and generate public key\necho "$SSH_KEY_BASE64" | base64 -d > ~/.ssh/id_rsa\nchmod 0600 ~/.ssh/id_rsa\nssh-keygen -y -f ~/.ssh/id_rsa > ~/.ssh/id_rsa.pub\n\n# add your git provider to the list of known hosts\nssh-keyscan github.com >> ~/.ssh/known_hosts\n\ngit submodule update --init\n')))}p.isMDXComponent=!0},cpVT:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}},[["RUYS",1,0,2,3]]]);