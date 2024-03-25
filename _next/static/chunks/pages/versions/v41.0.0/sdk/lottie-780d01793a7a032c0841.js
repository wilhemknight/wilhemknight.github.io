_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[835],{"3zdm":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return u})),n.d(t,"headings",(function(){return p})),n.d(t,"default",(function(){return f}));var r=n("HALo"),a=n("dhJC"),i=(n("q1tI"),n("7ljp")),o=n("HCau"),s=n("hykZ"),c=n("I0q5"),l=["components"],u={title:"Lottie",sourceCodeUrl:"https://github.com/react-native-community/lottie-react-native"},p=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"Usage"},{depth:2,type:"text",title:"API"}],d={meta:u,headings:p};function f(e){var t=e.components,n=Object(a.a)(e,l);return Object(i.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Expo includes support for ",Object(i.b)("a",{parentName:"p",href:"https://airbnb.design/lottie/"},"Lottie"),", the animation library from AirBnB."),Object(i.b)(s.a,{android:!0,emulator:!0,ios:!0,simulator:!0,mdxType:"PlatformsSection"}),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)(o.b,{packageName:"lottie-react-native",href:"https://github.com/react-native-community/lottie-react-native",mdxType:"InstallSection"}),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)(c.a,{label:"Lottie",dependencies:["lottie-react-native"],files:{"assets/gradientBall.json":"assets/gradientBall.json"},mdxType:"SnackInline"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { Button, StyleSheet, View } from 'react-native';\nimport LottieView from 'lottie-react-native';\n\nexport default class App extends React.Component {\n  componentDidMount() {\n    this.animation.play();\n    // Or set a specific startFrame and endFrame with:\n    // this.animation.play(30, 120);\n  }\n\n  resetAnimation = () => {\n    this.animation.reset();\n    this.animation.play();\n  };\n\n  render() {\n    return (\n      <View style={styles.animationContainer}>\n        <LottieView\n          ref={animation => {\n            this.animation = animation;\n          }}\n          style={{\n            width: 400,\n            height: 400,\n            backgroundColor: '#eee',\n          }}\n          source={require('./assets/gradientBall.json')}\n          // OR find more Lottie files @ https://lottiefiles.com/featured\n          // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement\n        />\n        <View style={styles.buttonContainer}>\n          <Button title=\"Restart Animation\" onPress={this.resetAnimation} />\n        </View>\n      </View>\n    );\n  }\n}\n\nconst styles = StyleSheet.create({\n  animationContainer: {\n    backgroundColor: '#fff',\n    alignItems: 'center',\n    justifyContent: 'center',\n    flex: 1,\n  },\n  buttonContainer: {\n    paddingTop: 20,\n  },\n});\n"))),Object(i.b)("h2",{id:"api"},"API"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"import LottieView from 'lottie-react-native';\n")),Object(i.b)("p",null,"Refer to the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/airbnb/lottie-react-native#usage"},"lottie-react-native repository")," for more detailed documentation."))}f.isMDXComponent=!0},"5BX9":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s}));var r=n("q1tI"),a=n("AeFk"),i=Object(r.createContext)({version:"latest",hasVersion:!1,setVersion:function(e){throw new Error("PageApiVersionContext not found")}});function o(e){var t=c(e.router.pathname),n=null!==t,o=Object(r.useCallback)((function(t){e.router.push(function(e,t){var n=c(e);return n?e.replace(n,t):e}(e.router.pathname,t))}),[]);return Object(a.c)(i.Provider,{value:{setVersion:o,hasVersion:n,version:t||"latest"}},e.children)}function s(){return Object(r.useContext)(i)}function c(e){return function(e){return e.startsWith("/versions/")}(e)?e.split("/",3).pop():null}},"6FTQ":function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},"8rE2":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("6FTQ");function a(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},I0q5:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r=n("z7pX"),a=n("H+61"),i=n("UlJF"),o=n("+Css"),s=n("7LId"),c=n("VIvw"),l=n("iHvq"),u=n("cpVT"),p=n("q1tI"),d=n("ufKf"),f=n("3zh3"),m=n("AeFk"),b=function(e){var t=e.size,n=void 0===t?24:t,r=e.stroke,a=void 0===r?f.palette.dark.white:r;return Object(m.c)("svg",{"aria-label":"check",width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(m.c)("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))},h=n("5BX9");function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(l.a)(e);if(t){var a=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var v="v".concat(n("kiQV").version),y=function(e){Object(s.a)(n,e);var t=j(n);function n(){var e;Object(a.a)(this,n);for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return e=t.call.apply(t,[this].concat(s)),Object(u.a)(Object(o.a)(e),"contentRef",p.createRef()),Object(u.a)(Object(o.a)(e),"state",{ready:!1}),Object(u.a)(Object(o.a)(e),"getSelectedDocsVersion",(function(){var t=e.context.version;return"latest"===t?v:t})),Object(u.a)(Object(o.a)(e),"getSnackSdkVersion",(function(){var t=e.getSelectedDocsVersion();return"unversioned"===t&&(t=v),t.replace("v","")})),Object(u.a)(Object(o.a)(e),"getExamplesPath",(function(){return"".concat(document.location.origin,"/static/examples/").concat(e.getSelectedDocsVersion())})),Object(u.a)(Object(o.a)(e),"getDependencies",(function(){return Object(r.a)(e.props.dependencies).join(",")})),Object(u.a)(Object(o.a)(e),"getCode",(function(){return(e.contentRef.current&&e.contentRef.current.textContent||"").replace(/%%placeholder-start%%.*%%placeholder-end%%/g,"")})),e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.setState({ready:!0})}},{key:"render",value:function(){return Object(m.c)("div",null,Object(m.c)("div",{ref:this.contentRef,style:this.props.contentHidden?{display:"none"}:void 0},this.props.children),Object(m.c)("form",{action:d.a,method:"POST",target:"_blank"},Object(m.c)("input",{type:"hidden",name:"platform",value:this.props.defaultPlatform||"android"}),Object(m.c)("input",{type:"hidden",name:"name",value:this.props.label||"Example"}),Object(m.c)("input",{type:"hidden",name:"dependencies",value:this.getDependencies()}),Object(m.c)("input",{type:"hidden",name:"sdkVersion",value:this.getSnackSdkVersion()}),this.props.platforms&&Object(m.c)("input",{type:"hidden",name:"supportedPlatforms",value:this.props.platforms.join(",")}),this.state.ready&&Object(m.c)("input",{type:"hidden",name:"files",value:JSON.stringify(Object(d.b)({templateId:this.props.templateId,code:this.getCode(),files:this.props.files,baseURL:this.getExamplesPath()}))}),Object(m.c)("button",{className:"snack-inline-example-button",disabled:!this.state.ready},Object(m.c)(b,{size:16})," ",this.props.buttonTitle||"Try this example on Snack")))}}]),n}(p.Component);Object(u.a)(y,"contextType",h.a),Object(u.a)(y,"defaultProps",{dependencies:[]})},cpVT:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},kiQV:function(e){e.exports=JSON.parse('{"name":"expo-docs","version":"44.0.0","private":true,"scripts":{"dev":"rimraf .next/preval && next dev -p 3002","build":"cross-env NODE_OPTIONS=--max-old-space-size=8192 next build","export":"yarn run build && next export && yarn run export-issue-404","export-issue-404":"echo \\"\ud83d\udee0  Patching https://github.com/vercel/next.js/issues/16528\\"; cp out/404/index.html out/404.html","export-server":"http-server out -p 8000","import-react-native-docs":"node ./scripts/import-react-native-docs.js","test-links":"node --async-stack-traces --unhandled-rejections=strict ./scripts/test-links.js","prettier":"prettier --write \'**/*.{js,ts,tsx,md}\'","lint":"tsc --noEmit && eslint .","lint-links":"remark -u validate-links ./pages","watch":"tsc --noEmit -w","test":"jest","schema-sync":"node --async-stack-traces --unhandled-rejections=strict ./scripts/schema-sync.js","remove-version":"node --unhandled-rejections=strict ./scripts/remove-version.js"},"resolutions":{"webpack":"^5.28.0"},"dependencies":{"@emotion/react":"^11.4.0","@expo/spawn-async":"^1.5.0","@expo/styleguide":"^4.0.1","@mdx-js/loader":"^1.6.22","@mdx-js/mdx":"^1.6.22","@mdx-js/react":"^1.6.22","@mdx-js/runtime":"^1.6.22","@reach/tabs":"^0.15.0","@sentry/browser":"^5.6.1","date-fns":"^2.28.0","docsearch.js":"^2.5.2","emoji-regex":"^9.2.2","front-matter":"^2.3.0","fs-extra":"^6.0.1","github-slugger":"^1.3.0","hotshot":"^1.0.5","lodash":"^4.17.20","next":"^11.1.4","nprogress":"0.2.0","path-browserify":"^1.0.1","prism-react-renderer":"1.0.2","prop-types":"15.7.2","react":"^17.0.2","react-diff-view":"^2.4.7","react-dom":"^17.0.2","react-feather":"^2.0.9","react-markdown":"^6.0.3","react-player":"^1.11.1","react-visibility-sensor":"^5.1.1","remark-gfm":"^1.0.0","tippy.js":"^6.3.1"},"devDependencies":{"@apidevtools/json-schema-ref-parser":"^9.0.9","@babel/core":"^7.13.14","@emotion/babel-preset-css-prop":"^11.2.0","@emotion/jest":"^11.7.1","@testing-library/jest-dom":"5.11.0","@testing-library/react":"10.4.3","@testing-library/react-hooks":"^7.0.2","@types/cacache":"^15.0.1","@types/fs-extra":"^9.0.11","@types/github-slugger":"^1.3.0","@types/google.analytics":"^0.0.41","@types/gtag.js":"^0.0.6","@types/lodash":"^4.14.161","@types/long":"^4.0.1","@types/mdx-js__react":"^1.5.3","@types/node":"^14.11.2","@types/nprogress":"^0.2.0","@types/react":"^17.0.11","axios":"^0.21.2","babel-plugin-module-resolver":"3.1.1","babel-plugin-preval":"^3.0.1","cross-env":"^5.2.0","danger":"^9.2.10","esbuild-loader":"^2.13.1","eslint":"^8.6.0","eslint-config-next":"^10.2.3","eslint-config-universe":"^10.0.0","eslint-plugin-lodash":"^7.3.0","http-server":"^0.12.3","jest":"^27.4.7","js-yaml":"^4.1.0","prettier":"^2.3.1","puppeteer":"^10.2.0","react-test-renderer":"^17.0.2","rehype-slug":"^4.0.1","remark-cli":"^9.0.0","remark-frontmatter":"^2.0.0","remark-validate-links":"^10.0.4","rimraf":"^3.0.2","semver":"^7.3.5","sitemap":"^6.3.0","typescript":"^4.5.4","unist-builder":"^2.0.0","unist-util-visit":"^2.0.3"}}')},n3x5:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v41.0.0/sdk/lottie",function(){return n("3zdm")}])},ufKf:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r="https://snack.expo.dev";function a(e){var t=e.templateId,n=e.code,r=e.files,a=e.baseURL,i={};return r&&Object.keys(r).forEach((function(e){var t=r[e],n=/\.(jsx?|tsx?|json|md)$/i.test(e);i[e]=n?{type:"CODE",url:t.match(/^https?:\/\//)?t:"".concat(a,"/").concat(t)}:{type:"ASSET",contents:t}})),t?i["App.js"]={type:"CODE",url:"".concat(a,"/").concat(t,".js")}:n&&(i["App.js"]={type:"CODE",contents:n}),i}},z7pX:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("6FTQ");var a=n("8rE2");function i(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},[["n3x5",1,0,2,3,4,5,6]]]);