_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[340],{"5BX9":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a}));var r=n("q1tI"),s=n("AeFk"),o=Object(r.createContext)({version:"latest",hasVersion:!1,setVersion:function(e){throw new Error("PageApiVersionContext not found")}});function i(e){var t=c(e.router.pathname),n=null!==t,i=Object(r.useCallback)((function(t){e.router.push(function(e,t){var n=c(e);return n?e.replace(n,t):e}(e.router.pathname,t))}),[]);return Object(s.c)(o.Provider,{value:{setVersion:i,hasVersion:n,version:t||"latest"}},e.children)}function a(){return Object(r.useContext)(o)}function c(e){return function(e){return e.startsWith("/versions/")}(e)?e.split("/",3).pop():null}},"6FTQ":function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},"8rE2":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("6FTQ");function s(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},I0q5:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var r=n("z7pX"),s=n("H+61"),o=n("UlJF"),i=n("+Css"),a=n("7LId"),c=n("VIvw"),l=n("iHvq"),p=n("cpVT"),u=n("q1tI"),b=n("ufKf"),d=n("3zh3"),h=n("AeFk"),m=function(e){var t=e.size,n=void 0===t?24:t,r=e.stroke,s=void 0===r?d.palette.dark.white:r;return Object(h.c)("svg",{"aria-label":"check",width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(h.c)("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))},y=n("5BX9");function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(l.a)(e);if(t){var s=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var j="v".concat(n("kiQV").version),O=function(e){Object(a.a)(n,e);var t=f(n);function n(){var e;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return e=t.call.apply(t,[this].concat(a)),Object(p.a)(Object(i.a)(e),"contentRef",u.createRef()),Object(p.a)(Object(i.a)(e),"state",{ready:!1}),Object(p.a)(Object(i.a)(e),"getSelectedDocsVersion",(function(){var t=e.context.version;return"latest"===t?j:t})),Object(p.a)(Object(i.a)(e),"getSnackSdkVersion",(function(){var t=e.getSelectedDocsVersion();return"unversioned"===t&&(t=j),t.replace("v","")})),Object(p.a)(Object(i.a)(e),"getExamplesPath",(function(){return"".concat(document.location.origin,"/static/examples/").concat(e.getSelectedDocsVersion())})),Object(p.a)(Object(i.a)(e),"getDependencies",(function(){return Object(r.a)(e.props.dependencies).join(",")})),Object(p.a)(Object(i.a)(e),"getCode",(function(){return(e.contentRef.current&&e.contentRef.current.textContent||"").replace(/%%placeholder-start%%.*%%placeholder-end%%/g,"")})),e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.setState({ready:!0})}},{key:"render",value:function(){return Object(h.c)("div",null,Object(h.c)("div",{ref:this.contentRef,style:this.props.contentHidden?{display:"none"}:void 0},this.props.children),Object(h.c)("form",{action:b.a,method:"POST",target:"_blank"},Object(h.c)("input",{type:"hidden",name:"platform",value:this.props.defaultPlatform||"android"}),Object(h.c)("input",{type:"hidden",name:"name",value:this.props.label||"Example"}),Object(h.c)("input",{type:"hidden",name:"dependencies",value:this.getDependencies()}),Object(h.c)("input",{type:"hidden",name:"sdkVersion",value:this.getSnackSdkVersion()}),this.props.platforms&&Object(h.c)("input",{type:"hidden",name:"supportedPlatforms",value:this.props.platforms.join(",")}),this.state.ready&&Object(h.c)("input",{type:"hidden",name:"files",value:JSON.stringify(Object(b.b)({templateId:this.props.templateId,code:this.getCode(),files:this.props.files,baseURL:this.getExamplesPath()}))}),Object(h.c)("button",{className:"snack-inline-example-button",disabled:!this.state.ready},Object(h.c)(m,{size:16})," ",this.props.buttonTitle||"Try this example on Snack")))}}]),n}(u.Component);Object(p.a)(O,"contextType",y.a),Object(p.a)(O,"defaultProps",{dependencies:[]})},NZ0P:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/latest/sdk/gyroscope",function(){return n("i4/o")}])},cpVT:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},"i4/o":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return p})),n.d(t,"headings",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n("HALo"),s=n("dhJC"),o=(n("q1tI"),n("7ljp")),i=n("HCau"),a=n("hykZ"),c=n("I0q5"),l=["components"],p={title:"Gyroscope",sourceCodeUrl:"https://github.com/expo/expo/tree/sdk-44/packages/expo-sensors"},u=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"Usage"},{depth:2,type:"text",title:"API"},{depth:2,type:"text",title:"Methods"},{depth:3,type:"inlineCode",title:"Gyroscope.isAvailableAsync()"},{depth:4,type:"text",title:"Returns"},{depth:3,type:"inlineCode",title:"Gyroscope.addListener(listener)"},{depth:4,type:"text",title:"Arguments"},{depth:4,type:"text",title:"Returns"},{depth:3,type:"inlineCode",title:"Gyroscope.removeAllListeners()"},{depth:3,type:"inlineCode",title:"Gyroscope.setUpdateInterval(intervalMs)"},{depth:4,type:"text",title:"Arguments"}],b={meta:p,headings:u};function d(e){var t=e.components,n=Object(s.a)(e,l);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Gyroscope")," from ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"expo-sensors"))," provides access to the device's gyroscope sensor to respond to changes in rotation in 3D space."),Object(o.b)(a.a,{android:!0,emulator:!0,ios:!0,web:!0,mdxType:"PlatformsSection"}),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)(i.b,{packageName:"expo-sensors",mdxType:"InstallSection"}),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)(c.a,{label:"Basic Gyroscope usage",dependencies:["expo-sensors"],mdxType:"SnackInline"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState, useEffect } from 'react';\nimport { StyleSheet, Text, TouchableOpacity, View } from 'react-native';\nimport { Gyroscope } from 'expo-sensors';\n\nexport default function App() {\n  const [data, setData] = useState({\n    x: 0,\n    y: 0,\n    z: 0,\n  });\n  const [subscription, setSubscription] = useState(null);\n\n  const _slow = () => {\n    Gyroscope.setUpdateInterval(1000);\n  };\n\n  const _fast = () => {\n    Gyroscope.setUpdateInterval(16);\n  };\n\n  const _subscribe = () => {\n    setSubscription(\n      Gyroscope.addListener(gyroscopeData => {\n        setData(gyroscopeData);\n      })\n    );\n  };\n\n  const _unsubscribe = () => {\n    subscription && subscription.remove();\n    setSubscription(null);\n  };\n\n  useEffect(() => {\n    _subscribe();\n    return () => _unsubscribe();\n  }, []);\n\n  const { x, y, z } = data;\n  return (\n    <View style={styles.container}>\n      <Text style={styles.text}>Gyroscope:</Text>\n      <Text style={styles.text}>\n        x: {round(x)} y: {round(y)} z: {round(z)}\n      </Text>\n      <View style={styles.buttonContainer}>\n        <TouchableOpacity onPress={subscription ? _unsubscribe : _subscribe} style={styles.button}>\n          <Text>{subscription ? 'On' : 'Off'}</Text>\n        </TouchableOpacity>\n        <TouchableOpacity onPress={_slow} style={[styles.button, styles.middleButton]}>\n          <Text>Slow</Text>\n        </TouchableOpacity>\n        <TouchableOpacity onPress={_fast} style={styles.button}>\n          <Text>Fast</Text>\n        </TouchableOpacity>\n      </View>\n    </View>\n  );\n}\n\n/* @hide function round() { ... } */\nfunction round(n) {\n  if (!n) {\n    return 0;\n  }\n  return Math.floor(n * 100) / 100;\n}\n/* @end */\n\n/* @hide const styles = StyleSheet.create({ ... }); */\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    paddingHorizontal: 10,\n  },\n  text: {\n    textAlign: 'center',\n  },\n  buttonContainer: {\n    flexDirection: 'row',\n    alignItems: 'stretch',\n    marginTop: 15,\n  },\n  button: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center',\n    backgroundColor: '#eee',\n    padding: 10,\n  },\n  middleButton: {\n    borderLeftWidth: 1,\n    borderRightWidth: 1,\n    borderColor: '#ccc',\n  },\n});\n/* @end */\n"))),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { Gyroscope } from 'expo-sensors';\n")),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"gyroscopeisavailableasync"},Object(o.b)("inlineCode",{parentName:"h3"},"Gyroscope.isAvailableAsync()")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You should always check the sensor availability before attempting to use it.")),Object(o.b)("p",null,"Returns whether the gyroscope is enabled on the device."),Object(o.b)("p",null,"On mobile web, you must first invoke ",Object(o.b)("inlineCode",{parentName:"p"},"Permissions.askAsync(Permissions.MOTION)")," in a user interaction (i.e. touch event) before you can use this module. If the ",Object(o.b)("inlineCode",{parentName:"p"},"status")," is not equal to ",Object(o.b)("inlineCode",{parentName:"p"},"granted")," then you should inform the end user that they may have to open settings."),Object(o.b)("p",null,"On ",Object(o.b)("strong",{parentName:"p"},"web")," this starts a timer and waits to see if an event is fired. This should predict if the iOS device has the ",Object(o.b)("strong",{parentName:"p"},"device orientation")," API disabled in ",Object(o.b)("inlineCode",{parentName:"p"},"Settings > Safari > Motion & Orientation Access"),". Some devices will also not fire if the site isn't hosted with ",Object(o.b)("strong",{parentName:"p"},"HTTPS")," as ",Object(o.b)("inlineCode",{parentName:"p"},"DeviceMotion")," is now considered a secure API. There is no formal API for detecting the status of ",Object(o.b)("inlineCode",{parentName:"p"},"DeviceMotion")," so this API can sometimes be unreliable on web."),Object(o.b)("h4",{id:"returns"},"Returns"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A promise that resolves to a ",Object(o.b)("inlineCode",{parentName:"li"},"boolean")," denoting the availability of the sensor.")),Object(o.b)("h3",{id:"gyroscopeaddlistenerlistener"},Object(o.b)("inlineCode",{parentName:"h3"},"Gyroscope.addListener(listener)")),Object(o.b)("p",null,"Subscribe for updates to the gyroscope."),Object(o.b)("h4",{id:"arguments"},"Arguments"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"listener (",Object(o.b)("em",{parentName:"strong"},"function"),")")," -- A callback that is invoked when an gyroscope update is available. When invoked, the listener is provided a single argument that is an object containing keys x, y, z.")),Object(o.b)("h4",{id:"returns-1"},"Returns"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"An EventSubscription object that you can call ",Object(o.b)("inlineCode",{parentName:"li"},"remove()")," on when you would like to unsubscribe the listener.")),Object(o.b)("h3",{id:"gyroscoperemovealllisteners"},Object(o.b)("inlineCode",{parentName:"h3"},"Gyroscope.removeAllListeners()")),Object(o.b)("p",null,"Remove all listeners."),Object(o.b)("h3",{id:"gyroscopesetupdateintervalintervalms"},Object(o.b)("inlineCode",{parentName:"h3"},"Gyroscope.setUpdateInterval(intervalMs)")),Object(o.b)("p",null,"Subscribe for updates to the gyroscope."),Object(o.b)("h4",{id:"arguments-1"},"Arguments"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"intervalMs (",Object(o.b)("em",{parentName:"strong"},"number"),")")," -- Desired interval in milliseconds between gyroscope updates.")))}d.isMDXComponent=!0},kiQV:function(e){e.exports=JSON.parse('{"name":"expo-docs","version":"44.0.0","private":true,"scripts":{"dev":"rimraf .next/preval && next dev -p 3002","build":"cross-env NODE_OPTIONS=--max-old-space-size=8192 next build","export":"yarn run build && next export && yarn run export-issue-404","export-issue-404":"echo \\"\ud83d\udee0  Patching https://github.com/vercel/next.js/issues/16528\\"; cp out/404/index.html out/404.html","export-server":"http-server out -p 8000","import-react-native-docs":"node ./scripts/import-react-native-docs.js","test-links":"node --async-stack-traces --unhandled-rejections=strict ./scripts/test-links.js","prettier":"prettier --write \'**/*.{js,ts,tsx,md}\'","lint":"tsc --noEmit && eslint .","lint-links":"remark -u validate-links ./pages","watch":"tsc --noEmit -w","test":"jest","schema-sync":"node --async-stack-traces --unhandled-rejections=strict ./scripts/schema-sync.js","remove-version":"node --unhandled-rejections=strict ./scripts/remove-version.js"},"resolutions":{"webpack":"^5.28.0"},"dependencies":{"@emotion/react":"^11.4.0","@expo/spawn-async":"^1.5.0","@expo/styleguide":"^4.0.1","@mdx-js/loader":"^1.6.22","@mdx-js/mdx":"^1.6.22","@mdx-js/react":"^1.6.22","@mdx-js/runtime":"^1.6.22","@reach/tabs":"^0.15.0","@sentry/browser":"^5.6.1","date-fns":"^2.28.0","docsearch.js":"^2.5.2","emoji-regex":"^9.2.2","front-matter":"^2.3.0","fs-extra":"^6.0.1","github-slugger":"^1.3.0","hotshot":"^1.0.5","lodash":"^4.17.20","next":"^11.1.4","nprogress":"0.2.0","path-browserify":"^1.0.1","prism-react-renderer":"1.0.2","prop-types":"15.7.2","react":"^17.0.2","react-diff-view":"^2.4.7","react-dom":"^17.0.2","react-feather":"^2.0.9","react-markdown":"^6.0.3","react-player":"^1.11.1","react-visibility-sensor":"^5.1.1","remark-gfm":"^1.0.0","tippy.js":"^6.3.1"},"devDependencies":{"@apidevtools/json-schema-ref-parser":"^9.0.9","@babel/core":"^7.13.14","@emotion/babel-preset-css-prop":"^11.2.0","@emotion/jest":"^11.7.1","@testing-library/jest-dom":"5.11.0","@testing-library/react":"10.4.3","@testing-library/react-hooks":"^7.0.2","@types/cacache":"^15.0.1","@types/fs-extra":"^9.0.11","@types/github-slugger":"^1.3.0","@types/google.analytics":"^0.0.41","@types/gtag.js":"^0.0.6","@types/lodash":"^4.14.161","@types/long":"^4.0.1","@types/mdx-js__react":"^1.5.3","@types/node":"^14.11.2","@types/nprogress":"^0.2.0","@types/react":"^17.0.11","axios":"^0.21.2","babel-plugin-module-resolver":"3.1.1","babel-plugin-preval":"^3.0.1","cross-env":"^5.2.0","danger":"^9.2.10","esbuild-loader":"^2.13.1","eslint":"^8.6.0","eslint-config-next":"^10.2.3","eslint-config-universe":"^10.0.0","eslint-plugin-lodash":"^7.3.0","http-server":"^0.12.3","jest":"^27.4.7","js-yaml":"^4.1.0","prettier":"^2.3.1","puppeteer":"^10.2.0","react-test-renderer":"^17.0.2","rehype-slug":"^4.0.1","remark-cli":"^9.0.0","remark-frontmatter":"^2.0.0","remark-validate-links":"^10.0.4","rimraf":"^3.0.2","semver":"^7.3.5","sitemap":"^6.3.0","typescript":"^4.5.4","unist-builder":"^2.0.0","unist-util-visit":"^2.0.3"}}')},ufKf:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s}));var r="https://snack.expo.dev";function s(e){var t=e.templateId,n=e.code,r=e.files,s=e.baseURL,o={};return r&&Object.keys(r).forEach((function(e){var t=r[e],n=/\.(jsx?|tsx?|json|md)$/i.test(e);o[e]=n?{type:"CODE",url:t.match(/^https?:\/\//)?t:"".concat(s,"/").concat(t)}:{type:"ASSET",contents:t}})),t?o["App.js"]={type:"CODE",url:"".concat(s,"/").concat(t,".js")}:n&&(o["App.js"]={type:"CODE",contents:n}),o}},z7pX:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("6FTQ");var s=n("8rE2");function o(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Object(s.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},[["NZ0P",1,0,2,3,4,5,6]]]);