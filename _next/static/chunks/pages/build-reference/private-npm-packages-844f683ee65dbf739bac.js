_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[70],{"7ljp":function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r("q1tI"),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"===typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,m=u["".concat(a,".").concat(d)]||u[d]||b[d]||i;return r?o.a.createElement(m,c(c({ref:t},s),{},{components:r})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"===typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"===typeof e?e:n,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},JEIG:function(e,t,r){"use strict";r.r(t),r.d(t,"meta",(function(){return p})),r.d(t,"headings",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r("HALo"),o=r("dhJC"),i=(r("q1tI"),r("7ljp")),a=r("KiYJ"),c=["components"],p={title:"Using private npm packages"},s=[{depth:2,type:"text",title:"Default npm configuration"},{depth:4,type:"text",title:"Android"},{depth:4,type:"text",title:"iOS"},{depth:2,type:"text",title:"Using private packages published to npm"},{depth:2,type:"text",title:"Using packages published to a private registry"},{depth:2,type:"text",title:"Using both private npm packages and private registry"}],l={meta:p,headings:s};function u(e){var t=e.components,r=Object(o.a)(e,c);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"EAS Build comes with full support for using private npm packages in your project. These can either be published to npm (if you have ",Object(i.b)("a",{parentName:"p",href:"https://www.npmjs.com/products"},"the Pro/Teams plan"),") or to a private registry (e.g. using self-hosted ",Object(i.b)("a",{parentName:"p",href:"https://verdaccio.org/"},"verdaccio"),")."),Object(i.b)("p",null,"You will need to configure your project and/or provide EAS Build with your npm token before you start the build."),Object(i.b)("h2",{id:"default-npm-configuration"},"Default npm configuration"),Object(i.b)("p",null,"By default, EAS Build uses a self-hosted npm cache that speeds up installing dependencies for all builds. Every EAS Build worker is configured with an ",Object(i.b)("inlineCode",{parentName:"p"},"~/.npmrc")," that looks something like this:"),Object(i.b)("h4",{id:"android"},"Android"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"registry=http://npm-cache-service.worker-infra-production.svc.cluster.local:4873\n")),Object(i.b)("h4",{id:"ios"},"iOS"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"registry=http://10.254.24.8:4873\n")),Object(i.b)("h2",{id:"using-private-packages-published-to-npm"},"Using private packages published to npm"),Object(i.b)("p",null,"If your project is using private packages published to npm, you need to provide EAS Build with ",Object(i.b)("a",{parentName:"p",href:"https://docs.npmjs.com/about-access-tokens"},"a read-only npm token")," so we can install your dependencies successfully."),Object(i.b)("p",null,"The recommended way is to add the ",Object(i.b)("inlineCode",{parentName:"p"},"NPM_TOKEN")," secret to your account or project's secrets. See the ",Object(i.b)("a",{parentName:"p",href:"/../../../../../../build-reference/variables/#using-secrets-in-environment-variables"},"secret environment variables")," docs to learn how to do this."),Object(i.b)(a.a,{alt:"Secret creation UI filled",src:"/static/images/eas-build/environment-secrets/secrets-create-filled.png",mdxType:"ImageSpotlight"}),Object(i.b)("p",null,"When EAS detects that the ",Object(i.b)("inlineCode",{parentName:"p"},"NPM_TOKEN")," environment variable is available during a build, it automatically creates the following ",Object(i.b)("inlineCode",{parentName:"p"},".npmrc"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"//registry.npmjs.org/:_authToken=${NPM_TOKEN}\nregistry=https://registry.npmjs.org/\n")),Object(i.b)("p",null,"However, this only happens when you don't already have an ",Object(i.b)("inlineCode",{parentName:"p"},".npmrc")," in your project's root directory. If you do already have this file, you need to update it manually."),Object(i.b)("p",null,"You can verify it worked by viewing build logs and looking for the ",Object(i.b)("inlineCode",{parentName:"p"},"Prepare project")," build phase:"),Object(i.b)(a.a,{alt:".npmrc created",src:"/static/images/eas-build/npmrc.png",mdxType:"ImageSpotlight"}),Object(i.b)("h2",{id:"using-packages-published-to-a-private-registry"},"Using packages published to a private registry"),Object(i.b)("p",null,"If you're using a private npm registry like self-hosted ",Object(i.b)("a",{parentName:"p",href:"https://verdaccio.org/"},"verdaccio"),", you will need to configure the ",Object(i.b)("inlineCode",{parentName:"p"},".npmrc")," file manually."),Object(i.b)("p",null,"Create an ",Object(i.b)("inlineCode",{parentName:"p"},".npmrc")," file in your project's root directory with the following contents:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"registry=__REPLACE_WITH_REGISTRY_URL__\n")),Object(i.b)("p",null,"If your registry requires authentication, you will also need to provide the token. Assuming your registry URL is ",Object(i.b)("inlineCode",{parentName:"p"},"https://registry.johndoe.com/"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"//registry.johndoe.com/:_authToken=${NPM_TOKEN}\nregistry=https://registry.johndoe.com/\n")),Object(i.b)("h2",{id:"using-both-private-npm-packages-and-private-registry"},"Using both private npm packages and private registry"),Object(i.b)("p",null,"This is an advanced example, and you will probably never use it. Private npm packages are always scoped (",Object(i.b)("a",{parentName:"p",href:"https://docs.npmjs.com/about-scopes#scopes-and-package-visibility"},"see npm docs"),"). Let's assume that your npm username is ",Object(i.b)("inlineCode",{parentName:"p"},"johndoe")," and your private self-hosted registry URL is ",Object(i.b)("inlineCode",{parentName:"p"},"https://registry.johndoe.com/"),". If you want to install dependencies from both sources, create the following ",Object(i.b)("inlineCode",{parentName:"p"},".npmrc")," in your project's root directory:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"//registry.npmjs.org/:_authToken=${NPM_TOKEN}\n@johndoe:registry=https://registry.npmjs.org/\nregistry=https://registry.johndoe.com/\n")))}u.isMDXComponent=!0},KiYJ:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var n=r("cpVT"),o=r("3zh3"),i=(r("q1tI"),r("AeFk"));function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e){var t=e.alt,r=e.src,n=e.style,a=e.containerStyle;return Object(i.c)("div",{style:c({textAlign:"center",backgroundColor:o.theme.background.secondary,paddingTop:10,paddingBottom:10,marginTop:20,marginBottom:20},a)},Object(i.c)("img",{src:r,alt:t,style:n}))}},cpVT:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},uubW:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/build-reference/private-npm-packages",function(){return r("JEIG")}])}},[["uubW",1,0,2,3]]]);