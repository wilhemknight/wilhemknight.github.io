_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[670],{"5BX9":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s}));var a=n("q1tI"),r=n("AeFk"),i=Object(a.createContext)({version:"latest",hasVersion:!1,setVersion:function(e){throw new Error("PageApiVersionContext not found")}});function o(e){var t=c(e.router.pathname),n=null!==t,o=Object(a.useCallback)((function(t){e.router.push(function(e,t){var n=c(e);return n?e.replace(n,t):e}(e.router.pathname,t))}),[]);return Object(r.c)(i.Provider,{value:{setVersion:o,hasVersion:n,version:t||"latest"}},e.children)}function s(){return Object(a.useContext)(i)}function c(e){return function(e){return e.startsWith("/versions/")}(e)?e.split("/",3).pop():null}},"6FTQ":function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}n.d(t,"a",(function(){return a}))},"8rE2":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("6FTQ");function r(e,t){if(e){if("string"===typeof e)return Object(a.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(a.a)(e,t):void 0}}},I0q5:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n("z7pX"),r=n("H+61"),i=n("UlJF"),o=n("+Css"),s=n("7LId"),c=n("VIvw"),p=n("iHvq"),l=n("cpVT"),u=n("q1tI"),d=n("ufKf"),b=n("3zh3"),m=n("AeFk"),h=function(e){var t=e.size,n=void 0===t?24:t,a=e.stroke,r=void 0===a?b.palette.dark.white:a;return Object(m.c)("svg",{"aria-label":"check",width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(m.c)("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))},f=n("5BX9");function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(p.a)(e);if(t){var r=Object(p.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(c.a)(this,n)}}var v="v".concat(n("kiQV").version),g=function(e){Object(s.a)(n,e);var t=j(n);function n(){var e;Object(r.a)(this,n);for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return e=t.call.apply(t,[this].concat(s)),Object(l.a)(Object(o.a)(e),"contentRef",u.createRef()),Object(l.a)(Object(o.a)(e),"state",{ready:!1}),Object(l.a)(Object(o.a)(e),"getSelectedDocsVersion",(function(){var t=e.context.version;return"latest"===t?v:t})),Object(l.a)(Object(o.a)(e),"getSnackSdkVersion",(function(){var t=e.getSelectedDocsVersion();return"unversioned"===t&&(t=v),t.replace("v","")})),Object(l.a)(Object(o.a)(e),"getExamplesPath",(function(){return"".concat(document.location.origin,"/static/examples/").concat(e.getSelectedDocsVersion())})),Object(l.a)(Object(o.a)(e),"getDependencies",(function(){return Object(a.a)(e.props.dependencies).join(",")})),Object(l.a)(Object(o.a)(e),"getCode",(function(){return(e.contentRef.current&&e.contentRef.current.textContent||"").replace(/%%placeholder-start%%.*%%placeholder-end%%/g,"")})),e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.setState({ready:!0})}},{key:"render",value:function(){return Object(m.c)("div",null,Object(m.c)("div",{ref:this.contentRef,style:this.props.contentHidden?{display:"none"}:void 0},this.props.children),Object(m.c)("form",{action:d.a,method:"POST",target:"_blank"},Object(m.c)("input",{type:"hidden",name:"platform",value:this.props.defaultPlatform||"android"}),Object(m.c)("input",{type:"hidden",name:"name",value:this.props.label||"Example"}),Object(m.c)("input",{type:"hidden",name:"dependencies",value:this.getDependencies()}),Object(m.c)("input",{type:"hidden",name:"sdkVersion",value:this.getSnackSdkVersion()}),this.props.platforms&&Object(m.c)("input",{type:"hidden",name:"supportedPlatforms",value:this.props.platforms.join(",")}),this.state.ready&&Object(m.c)("input",{type:"hidden",name:"files",value:JSON.stringify(Object(d.b)({templateId:this.props.templateId,code:this.getCode(),files:this.props.files,baseURL:this.getExamplesPath()}))}),Object(m.c)("button",{className:"snack-inline-example-button",disabled:!this.state.ready},Object(m.c)(h,{size:16})," ",this.props.buttonTitle||"Try this example on Snack")))}}]),n}(u.Component);Object(l.a)(g,"contextType",f.a),Object(l.a)(g,"defaultProps",{dependencies:[]})},U1Iw:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v40.0.0/sdk/keep-awake",function(){return n("haln")}])},cpVT:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))},haln:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return l})),n.d(t,"headings",(function(){return u})),n.d(t,"default",(function(){return b}));var a=n("HALo"),r=n("dhJC"),i=(n("q1tI"),n("7ljp")),o=n("HCau"),s=n("hykZ"),c=n("I0q5"),p=["components"],l={title:"KeepAwake",sourceCodeUrl:"https://github.com/expo/expo/tree/sdk-40/packages/expo-keep-awake"},u=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"Usage"},{depth:3,type:"text",title:"Example: hook"},{depth:3,type:"text",title:"Example: functions"},{depth:2,type:"text",title:"API"},{depth:2,type:"text",title:"Methods"},{depth:3,type:"inlineCode",title:"useKeepAwake(tag?)"},{depth:3,type:"inlineCode",title:"activateKeepAwake(tag?)"},{depth:4,type:"text",title:"Arguments"},{depth:3,type:"inlineCode",title:"deactivateKeepAwake(tag?)"},{depth:4,type:"text",title:"Arguments"}],d={meta:l,headings:u};function b(e){var t=e.components,n=Object(r.a)(e,p);return Object(i.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"expo-keep-awake"))," provides a React hook that prevents the screen from sleeping and a pair of functions to enable this behavior imperatively."),Object(i.b)(s.a,{android:!0,emulator:!0,ios:!0,simulator:!0,web:{pending:"https://github.com/expo/expo/issues/6889"},mdxType:"PlatformsSection"}),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)(o.b,{packageName:"expo-keep-awake",mdxType:"InstallSection"}),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("h3",{id:"example-hook"},"Example: hook"),Object(i.b)(c.a,{label:"Keep Awake hook",dependencies:["expo-keep-awake"],mdxType:"SnackInline"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"import { useKeepAwake } from 'expo-keep-awake';\nimport React from 'react';\nimport { Text, View } from 'react-native';\n\nexport default function KeepAwakeExample() {\n  /* @info As long as this component is mounted, the screen will not turn off from being idle. */\n  useKeepAwake();\n  /* @end */\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>This screen will never sleep!</Text>\n    </View>\n  );\n}\n"))),Object(i.b)("h3",{id:"example-functions"},"Example: functions"),Object(i.b)(c.a,{label:"Keep Awake functions",dependencies:["expo-keep-awake"],mdxType:"SnackInline"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"import { activateKeepAwake, deactivateKeepAwake } from 'expo-keep-awake';\nimport React from 'react';\nimport { Button, View } from 'react-native';\n\nexport default class KeepAwakeExample extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n        <Button onPress={this._activate} title=\"Activate\" />\n        <Button onPress={this._deactivate} title=\"Deactivate\" />\n      </View>\n    );\n  }\n\n  _activate = () => {\n    /* @info Screen will remain on after called until <strong>deactivateKeepAwake()</strong> is called. */ activateKeepAwake(); /* @end */\n\n    alert('Activated!');\n  };\n\n  _deactivate = () => {\n    /* @info Deactivates KeepAwake, or does nothing if it was never activated. */ deactivateKeepAwake(); /* @end */\n\n    alert('Deactivated!');\n  };\n}\n"))),Object(i.b)("h2",{id:"api"},"API"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import KeepAwake from 'expo-keep-awake';\n")),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"usekeepawaketag"},Object(i.b)("inlineCode",{parentName:"h3"},"useKeepAwake(tag?)")),Object(i.b)("p",null,"A React hook to keep the screen awake for as long as the owner component is mounted. The optionally provided ",Object(i.b)("inlineCode",{parentName:"p"},"tag")," argument is used when activating and deactivating the keep-awake feature. If unspecified, the default tag is used. See the documentation for ",Object(i.b)("inlineCode",{parentName:"p"},"activateKeepAwake")," below to learn more about the ",Object(i.b)("inlineCode",{parentName:"p"},"tag")," argument."),Object(i.b)("h3",{id:"activatekeepawaketag"},Object(i.b)("inlineCode",{parentName:"h3"},"activateKeepAwake(tag?)")),Object(i.b)("p",null,"Prevents the screen from sleeping until ",Object(i.b)("inlineCode",{parentName:"p"},"deactivateKeepAwake")," is called with the same ",Object(i.b)("inlineCode",{parentName:"p"},"tag")," value."),Object(i.b)("p",null,"If the ",Object(i.b)("inlineCode",{parentName:"p"},"tag")," argument is specified, the screen will not sleep until you call ",Object(i.b)("inlineCode",{parentName:"p"},"deactivateKeepAwake")," with the same ",Object(i.b)("inlineCode",{parentName:"p"},"tag")," argument. When using multiple ",Object(i.b)("inlineCode",{parentName:"p"},"tags")," for activation you'll have to deactivate each one in order to re-enable screen sleep. If ",Object(i.b)("inlineCode",{parentName:"p"},"tag")," is unspecified, the default tag is used."),Object(i.b)("h4",{id:"arguments"},"Arguments"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"tag (",Object(i.b)("em",{parentName:"strong"},"string"),")")," -- ",Object(i.b)("strong",{parentName:"li"},"optional")," -- Tag to lock screen sleep prevention. If not provided, the default tag is used.")),Object(i.b)("h3",{id:"deactivatekeepawaketag"},Object(i.b)("inlineCode",{parentName:"h3"},"deactivateKeepAwake(tag?)")),Object(i.b)("p",null,"Releases the lock on screen-sleep prevention associated with the given ",Object(i.b)("inlineCode",{parentName:"p"},"tag")," value. If ",Object(i.b)("inlineCode",{parentName:"p"},"tag")," is unspecified, it defaults to the same default tag that ",Object(i.b)("inlineCode",{parentName:"p"},"activateKeepAwake")," uses."),Object(i.b)("h4",{id:"arguments-1"},"Arguments"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"tag (",Object(i.b)("em",{parentName:"strong"},"string"),")")," -- ",Object(i.b)("strong",{parentName:"li"},"optional")," -- Tag to release the lock on screen sleep prevention. If not provided, the default tag is used.")))}b.isMDXComponent=!0},kiQV:function(e){e.exports=JSON.parse('{"name":"expo-docs","version":"44.0.0","private":true,"scripts":{"dev":"rimraf .next/preval && next dev -p 3002","build":"cross-env NODE_OPTIONS=--max-old-space-size=8192 next build","export":"yarn run build && next export && yarn run export-issue-404","export-issue-404":"echo \\"\ud83d\udee0  Patching https://github.com/vercel/next.js/issues/16528\\"; cp out/404/index.html out/404.html","export-server":"http-server out -p 8000","import-react-native-docs":"node ./scripts/import-react-native-docs.js","test-links":"node --async-stack-traces --unhandled-rejections=strict ./scripts/test-links.js","prettier":"prettier --write \'**/*.{js,ts,tsx,md}\'","lint":"tsc --noEmit && eslint .","lint-links":"remark -u validate-links ./pages","watch":"tsc --noEmit -w","test":"jest","schema-sync":"node --async-stack-traces --unhandled-rejections=strict ./scripts/schema-sync.js","remove-version":"node --unhandled-rejections=strict ./scripts/remove-version.js"},"resolutions":{"webpack":"^5.28.0"},"dependencies":{"@emotion/react":"^11.4.0","@expo/spawn-async":"^1.5.0","@expo/styleguide":"^4.0.1","@mdx-js/loader":"^1.6.22","@mdx-js/mdx":"^1.6.22","@mdx-js/react":"^1.6.22","@mdx-js/runtime":"^1.6.22","@reach/tabs":"^0.15.0","@sentry/browser":"^5.6.1","date-fns":"^2.28.0","docsearch.js":"^2.5.2","emoji-regex":"^9.2.2","front-matter":"^2.3.0","fs-extra":"^6.0.1","github-slugger":"^1.3.0","hotshot":"^1.0.5","lodash":"^4.17.20","next":"^11.1.4","nprogress":"0.2.0","path-browserify":"^1.0.1","prism-react-renderer":"1.0.2","prop-types":"15.7.2","react":"^17.0.2","react-diff-view":"^2.4.7","react-dom":"^17.0.2","react-feather":"^2.0.9","react-markdown":"^6.0.3","react-player":"^1.11.1","react-visibility-sensor":"^5.1.1","remark-gfm":"^1.0.0","tippy.js":"^6.3.1"},"devDependencies":{"@apidevtools/json-schema-ref-parser":"^9.0.9","@babel/core":"^7.13.14","@emotion/babel-preset-css-prop":"^11.2.0","@emotion/jest":"^11.7.1","@testing-library/jest-dom":"5.11.0","@testing-library/react":"10.4.3","@testing-library/react-hooks":"^7.0.2","@types/cacache":"^15.0.1","@types/fs-extra":"^9.0.11","@types/github-slugger":"^1.3.0","@types/google.analytics":"^0.0.41","@types/gtag.js":"^0.0.6","@types/lodash":"^4.14.161","@types/long":"^4.0.1","@types/mdx-js__react":"^1.5.3","@types/node":"^14.11.2","@types/nprogress":"^0.2.0","@types/react":"^17.0.11","axios":"^0.21.2","babel-plugin-module-resolver":"3.1.1","babel-plugin-preval":"^3.0.1","cross-env":"^5.2.0","danger":"^9.2.10","esbuild-loader":"^2.13.1","eslint":"^8.6.0","eslint-config-next":"^10.2.3","eslint-config-universe":"^10.0.0","eslint-plugin-lodash":"^7.3.0","http-server":"^0.12.3","jest":"^27.4.7","js-yaml":"^4.1.0","prettier":"^2.3.1","puppeteer":"^10.2.0","react-test-renderer":"^17.0.2","rehype-slug":"^4.0.1","remark-cli":"^9.0.0","remark-frontmatter":"^2.0.0","remark-validate-links":"^10.0.4","rimraf":"^3.0.2","semver":"^7.3.5","sitemap":"^6.3.0","typescript":"^4.5.4","unist-builder":"^2.0.0","unist-util-visit":"^2.0.3"}}')},ufKf:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var a="https://snack.expo.dev";function r(e){var t=e.templateId,n=e.code,a=e.files,r=e.baseURL,i={};return a&&Object.keys(a).forEach((function(e){var t=a[e],n=/\.(jsx?|tsx?|json|md)$/i.test(e);i[e]=n?{type:"CODE",url:t.match(/^https?:\/\//)?t:"".concat(r,"/").concat(t)}:{type:"ASSET",contents:t}})),t?i["App.js"]={type:"CODE",url:"".concat(r,"/").concat(t,".js")}:n&&(i["App.js"]={type:"CODE",contents:n}),i}},z7pX:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("6FTQ");var r=n("8rE2");function i(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},[["U1Iw",1,0,2,3,4,5,6]]]);