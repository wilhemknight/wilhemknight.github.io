_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[965],{"5BX9":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return b}));var a=n("q1tI"),r=n("AeFk"),i=Object(a.createContext)({version:"latest",hasVersion:!1,setVersion:function(t){throw new Error("PageApiVersionContext not found")}});function l(t){var e=c(t.router.pathname),n=null!==e,l=Object(a.useCallback)((function(e){t.router.push(function(t,e){var n=c(t);return n?t.replace(n,e):t}(t.router.pathname,e))}),[]);return Object(r.c)(i.Provider,{value:{setVersion:l,hasVersion:n,version:e||"latest"}},t.children)}function b(){return Object(a.useContext)(i)}function c(t){return function(t){return t.startsWith("/versions/")}(t)?t.split("/",3).pop():null}},"6FTQ":function(t,e,n){"use strict";function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}n.d(e,"a",(function(){return a}))},"8rE2":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n("6FTQ");function r(t,e){if(t){if("string"===typeof t)return Object(a.a)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(a.a)(t,e):void 0}}},I0q5:function(t,e,n){"use strict";n.d(e,"a",(function(){return N}));var a=n("z7pX"),r=n("H+61"),i=n("UlJF"),l=n("+Css"),b=n("7LId"),c=n("VIvw"),o=n("iHvq"),p=n("cpVT"),s=n("q1tI"),d=n("ufKf"),u=n("3zh3"),m=n("AeFk"),j=function(t){var e=t.size,n=void 0===e?24:e,a=t.stroke,r=void 0===a?u.palette.dark.white:a;return Object(m.c)("svg",{"aria-label":"check",width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(m.c)("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))},O=n("5BX9");function g(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=Object(o.a)(t);if(e){var r=Object(o.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(c.a)(this,n)}}var h="v".concat(n("kiQV").version),N=function(t){Object(b.a)(n,t);var e=g(n);function n(){var t;Object(r.a)(this,n);for(var i=arguments.length,b=new Array(i),c=0;c<i;c++)b[c]=arguments[c];return t=e.call.apply(e,[this].concat(b)),Object(p.a)(Object(l.a)(t),"contentRef",s.createRef()),Object(p.a)(Object(l.a)(t),"state",{ready:!1}),Object(p.a)(Object(l.a)(t),"getSelectedDocsVersion",(function(){var e=t.context.version;return"latest"===e?h:e})),Object(p.a)(Object(l.a)(t),"getSnackSdkVersion",(function(){var e=t.getSelectedDocsVersion();return"unversioned"===e&&(e=h),e.replace("v","")})),Object(p.a)(Object(l.a)(t),"getExamplesPath",(function(){return"".concat(document.location.origin,"/static/examples/").concat(t.getSelectedDocsVersion())})),Object(p.a)(Object(l.a)(t),"getDependencies",(function(){return Object(a.a)(t.props.dependencies).join(",")})),Object(p.a)(Object(l.a)(t),"getCode",(function(){return(t.contentRef.current&&t.contentRef.current.textContent||"").replace(/%%placeholder-start%%.*%%placeholder-end%%/g,"")})),t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.setState({ready:!0})}},{key:"render",value:function(){return Object(m.c)("div",null,Object(m.c)("div",{ref:this.contentRef,style:this.props.contentHidden?{display:"none"}:void 0},this.props.children),Object(m.c)("form",{action:d.a,method:"POST",target:"_blank"},Object(m.c)("input",{type:"hidden",name:"platform",value:this.props.defaultPlatform||"android"}),Object(m.c)("input",{type:"hidden",name:"name",value:this.props.label||"Example"}),Object(m.c)("input",{type:"hidden",name:"dependencies",value:this.getDependencies()}),Object(m.c)("input",{type:"hidden",name:"sdkVersion",value:this.getSnackSdkVersion()}),this.props.platforms&&Object(m.c)("input",{type:"hidden",name:"supportedPlatforms",value:this.props.platforms.join(",")}),this.state.ready&&Object(m.c)("input",{type:"hidden",name:"files",value:JSON.stringify(Object(d.b)({templateId:this.props.templateId,code:this.getCode(),files:this.props.files,baseURL:this.getExamplesPath()}))}),Object(m.c)("button",{className:"snack-inline-example-button",disabled:!this.state.ready},Object(m.c)(j,{size:16})," ",this.props.buttonTitle||"Try this example on Snack")))}}]),n}(s.Component);Object(p.a)(N,"contextType",O.a),Object(p.a)(N,"defaultProps",{dependencies:[]})},"S+Uc":function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return p})),n.d(e,"headings",(function(){return s})),n.d(e,"default",(function(){return u}));var a=n("HALo"),r=n("dhJC"),i=(n("q1tI"),n("7ljp")),l=n("HCau"),b=n("hykZ"),c=n("I0q5"),o=["components"],p={title:"Crypto",sourceCodeUrl:"https://github.com/expo/expo/tree/sdk-42/packages/expo-crypto"},s=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"Usage"},{depth:2,type:"text",title:"API"},{depth:3,type:"inlineCode",title:"Crypto.digestStringAsync(algorithm, data, options)"},{depth:4,type:"text",title:"Error Codes"},{depth:2,type:"text",title:"Types"},{depth:3,type:"inlineCode",title:"CryptoDigestAlgorithm"},{depth:3,type:"inlineCode",title:"CryptoEncoding"},{depth:3,type:"inlineCode",title:"CryptoDigestOptions"},{depth:2,type:"text",title:"Error Codes"}],d={meta:p,headings:s};function u(t){var e=t.components,n=Object(r.a)(t,o);return Object(i.b)("wrapper",Object(a.a)({},d,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"expo-crypto")," enables you to hash (encrypt) data in an equivalent manner to the Node.js core ",Object(i.b)("inlineCode",{parentName:"p"},"crypto")," API."),Object(i.b)(b.a,{android:!0,emulator:!0,ios:!0,simulator:!0,web:!0,mdxType:"PlatformsSection"}),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)(l.b,{packageName:"expo-crypto",mdxType:"InstallSection"}),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)(c.a,{label:"Basic Crypto usage",dependencies:["expo-crypto"],mdxType:"SnackInline"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"import React, { useEffect } from 'react';\nimport { StyleSheet, View, Text } from 'react-native';\nimport * as Crypto from 'expo-crypto';\n\nexport default function App() {\n  useEffect(() => {\n    (async () => {\n      const digest = await Crypto.digestStringAsync(\n        Crypto.CryptoDigestAlgorithm.SHA256,\n        'GitHub stars are neat \ud83c\udf1f'\n      );\n      console.log('Digest: ', digest);\n      /* Some crypto operation... */\n    })();\n  }, []);\n\n  return (\n    <View style={styles.container}>\n      <Text>Crypto Module Example</Text>\n    </View>\n  );\n}\n\n/* @hide const styles = StyleSheet.create({ ... }); */\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: '#fff',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n});\n/* @end */\n"))),Object(i.b)("h2",{id:"api"},"API"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import * as Crypto from 'expo-crypto';\n")),Object(i.b)("h3",{id:"cryptodigeststringasyncalgorithm-data-options"},Object(i.b)("inlineCode",{parentName:"h3"},"Crypto.digestStringAsync(algorithm, data, options)")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"digestStringAsync(\n  algorithm: CryptoDigestAlgorithm,\n  data: string,\n  options: CryptoDigestOptions = { encoding: CryptoEncoding.HEX }\n): Promise<string>\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"digestStringAsync()")," method of ",Object(i.b)("inlineCode",{parentName:"p"},"Crypto")," generates a digest of the supplied ",Object(i.b)("inlineCode",{parentName:"p"},"data")," string with the provided digest ",Object(i.b)("inlineCode",{parentName:"p"},"algorithm"),".\nA digest is a short fixed-length value derived from some variable-length input. ",Object(i.b)("strong",{parentName:"p"},"Cryptographic digests")," should exhibit ",Object(i.b)("em",{parentName:"p"},"collision-resistance"),", meaning that it's very difficult to generate multiple inputs that have equal digest values.\nYou can specify the returned string format as one of ",Object(i.b)("inlineCode",{parentName:"p"},"CryptoEncoding"),". By default the resolved value will be formatted as a ",Object(i.b)("inlineCode",{parentName:"p"},"HEX")," string. On web, this method can only be called from a secure origin (https) otherwise an error will be thrown."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"\ud83c\udf4e iOS"),Object(i.b)("th",{parentName:"tr",align:null},"\ud83d\udc9a Android"),Object(i.b)("th",{parentName:"tr",align:null},"\ud83d\udcbb Web"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"\u2705"),Object(i.b)("td",{parentName:"tr",align:null},"\u2705"),Object(i.b)("td",{parentName:"tr",align:null},"\u2705")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"algorithm"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Glossary/Cryptographic_hash_function"},Object(i.b)("inlineCode",{parentName:"a"},"CryptoDigestAlgorithm"))),Object(i.b)("td",{parentName:"tr",align:null},"Transforms a value into a fixed-size hash (usually shorter than the initial value).")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"data"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",{parentName:"tr",align:null},"The value that will be used to generate a digest.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"options"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"CryptoDigestOptions")),Object(i.b)("td",{parentName:"tr",align:null},"Format of the digest string. Defaults to: ",Object(i.b)("inlineCode",{parentName:"td"},"CryptoDigestOptions.HEX"))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"digest"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"Promise<string>")),Object(i.b)("td",{parentName:"tr",align:null},"Resolves into a value representing the hashed input.")))),Object(i.b)("h4",{id:"error-codes"},"Error Codes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ERR_CRYPTO_UNAVAILABLE")," - (Web only) Access to the WebCrypto API is restricted to secure origins (https). You can run your web project from a secure origin with ",Object(i.b)("inlineCode",{parentName:"li"},"expo start --https"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ERR_CRYPTO_DIGEST")," - An invalid encoding type provided.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"const digest = await Crypto.digestStringAsync(\n  Crypto.CryptoDigestAlgorithm.SHA512,\n  '\ud83e\udd53 Easy to Digest! \ud83d\udc99'\n);\n")),Object(i.b)("h2",{id:"types"},"Types"),Object(i.b)("h3",{id:"cryptodigestalgorithm"},Object(i.b)("inlineCode",{parentName:"h3"},"CryptoDigestAlgorithm")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/Cryptographic_hash_function"},Object(i.b)("inlineCode",{parentName:"a"},"Cryptographic hash function"))," is an algorithm that can be used to generate a checksum value. They have a variety of applications in cryptography."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Cryptographic hash functions like ",Object(i.b)("inlineCode",{parentName:"p"},"SHA1"),", ",Object(i.b)("inlineCode",{parentName:"p"},"MD5")," are ",Object(i.b)("strong",{parentName:"p"},"vulnerable"),"! Attacks have been proven to significantly reduce their collision resistance.")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:null},"Collision Resistant"),Object(i.b)("th",{parentName:"tr",align:null},"\ud83c\udf4e iOS"),Object(i.b)("th",{parentName:"tr",align:null},"\ud83d\udc9a Android"),Object(i.b)("th",{parentName:"tr",align:null},"\ud83d\udcbb Web"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf"},"SHA1")),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"160")," bits"),Object(i.b)("td",{parentName:"tr",align:null},"\u274c"),Object(i.b)("td",{parentName:"tr",align:null},"\u2705"),Object(i.b)("td",{parentName:"tr",align:null},"\u2705"),Object(i.b)("td",{parentName:"tr",align:null},"\u2705")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf"},"SHA256")),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"256")," bits"),Object(i.b)("td",{parentName:"tr",align:null},"\u2705"),Object(i.b)("td",{parentName:"tr",align:null},"\u2705"),Object(i.b)("td",{parentName:"tr",align:null},"\u2705"),Object(i.b)("td",{parentName:"tr",align:null},"\u2705")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf"},"SHA384")),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"384")," bits"),Object(i.b)("td",{parentName:"tr",align:null},"\u2705"),Object(i.b)("td",{parentName:"tr",align:null},"\u2705"),Object(i.b)("td",{parentName:"tr",align:null},"\u2705"),Object(i.b)("td",{parentName:"tr",align:null},"\u2705")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf"},"SHA512")),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"512")," bits"),Object(i.b)("td",{parentName:"tr",align:null},"\u2705"),Object(i.b)("td",{parentName:"tr",align:null},"\u2705"),Object(i.b)("td",{parentName:"tr",align:null},"\u2705"),Object(i.b)("td",{parentName:"tr",align:null},"\u2705")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"MD2"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"128")," bits"),Object(i.b)("td",{parentName:"tr",align:null},"\u274c"),Object(i.b)("td",{parentName:"tr",align:null},"\u2705"),Object(i.b)("td",{parentName:"tr",align:null},"\u274c"),Object(i.b)("td",{parentName:"tr",align:null},"\u274c")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"MD4"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"128")," bits"),Object(i.b)("td",{parentName:"tr",align:null},"\u274c"),Object(i.b)("td",{parentName:"tr",align:null},"\u2705"),Object(i.b)("td",{parentName:"tr",align:null},"\u274c"),Object(i.b)("td",{parentName:"tr",align:null},"\u274c")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"MD5"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"128")," bits"),Object(i.b)("td",{parentName:"tr",align:null},"\u274c"),Object(i.b)("td",{parentName:"tr",align:null},"\u2705"),Object(i.b)("td",{parentName:"tr",align:null},"\u2705"),Object(i.b)("td",{parentName:"tr",align:null},"\u274c")))),Object(i.b)("h3",{id:"cryptoencoding"},Object(i.b)("inlineCode",{parentName:"h3"},"CryptoEncoding")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"\ud83c\udf4e iOS"),Object(i.b)("th",{parentName:"tr",align:null},"\ud83d\udc9a Android"),Object(i.b)("th",{parentName:"tr",align:null},"\ud83d\udcbb Web"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"HEX"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"'hex'")),Object(i.b)("td",{parentName:"tr",align:null},"\u2705"),Object(i.b)("td",{parentName:"tr",align:null},"\u2705"),Object(i.b)("td",{parentName:"tr",align:null},"\u2705")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"BASE64"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"'base64'")),Object(i.b)("td",{parentName:"tr",align:null},"\u2705"),Object(i.b)("td",{parentName:"tr",align:null},"\u2705"),Object(i.b)("td",{parentName:"tr",align:null},"\u2705")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Base64 Format")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Has trailing padding."),Object(i.b)("li",{parentName:"ul"},"Does not wrap lines."),Object(i.b)("li",{parentName:"ul"},"Does not have a trailing newline.")),Object(i.b)("h3",{id:"cryptodigestoptions"},Object(i.b)("inlineCode",{parentName:"h3"},"CryptoDigestOptions")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:null},"\ud83c\udf4e iOS"),Object(i.b)("th",{parentName:"tr",align:null},"\ud83d\udc9a Android"),Object(i.b)("th",{parentName:"tr",align:null},"\ud83d\udcbb Web"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"encoding"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"CryptoEncoding")),Object(i.b)("td",{parentName:"tr",align:null},"Format the digest is returned in"),Object(i.b)("td",{parentName:"tr",align:null},"\u2705"),Object(i.b)("td",{parentName:"tr",align:null},"\u2705"),Object(i.b)("td",{parentName:"tr",align:null},"\u2705")))),Object(i.b)("h2",{id:"error-codes-1"},"Error Codes"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Code"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"ERR_CRYPTO_UNAVAILABLE"),Object(i.b)("td",{parentName:"tr",align:null},"(Web only) Access to the WebCrypto API is restricted to secure origins (https).")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"ERR_CRYPTO_DIGEST"),Object(i.b)("td",{parentName:"tr",align:null},"An invalid encoding type provided.")))))}u.isMDXComponent=!0},cpVT:function(t,e,n){"use strict";function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return a}))},e3nw:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v42.0.0/sdk/crypto",function(){return n("S+Uc")}])},kiQV:function(t){t.exports=JSON.parse('{"name":"expo-docs","version":"44.0.0","private":true,"scripts":{"dev":"rimraf .next/preval && next dev -p 3002","build":"cross-env NODE_OPTIONS=--max-old-space-size=8192 next build","export":"yarn run build && next export && yarn run export-issue-404","export-issue-404":"echo \\"\ud83d\udee0  Patching https://github.com/vercel/next.js/issues/16528\\"; cp out/404/index.html out/404.html","export-server":"http-server out -p 8000","import-react-native-docs":"node ./scripts/import-react-native-docs.js","test-links":"node --async-stack-traces --unhandled-rejections=strict ./scripts/test-links.js","prettier":"prettier --write \'**/*.{js,ts,tsx,md}\'","lint":"tsc --noEmit && eslint .","lint-links":"remark -u validate-links ./pages","watch":"tsc --noEmit -w","test":"jest","schema-sync":"node --async-stack-traces --unhandled-rejections=strict ./scripts/schema-sync.js","remove-version":"node --unhandled-rejections=strict ./scripts/remove-version.js"},"resolutions":{"webpack":"^5.28.0"},"dependencies":{"@emotion/react":"^11.4.0","@expo/spawn-async":"^1.5.0","@expo/styleguide":"^4.0.1","@mdx-js/loader":"^1.6.22","@mdx-js/mdx":"^1.6.22","@mdx-js/react":"^1.6.22","@mdx-js/runtime":"^1.6.22","@reach/tabs":"^0.15.0","@sentry/browser":"^5.6.1","date-fns":"^2.28.0","docsearch.js":"^2.5.2","emoji-regex":"^9.2.2","front-matter":"^2.3.0","fs-extra":"^6.0.1","github-slugger":"^1.3.0","hotshot":"^1.0.5","lodash":"^4.17.20","next":"^11.1.4","nprogress":"0.2.0","path-browserify":"^1.0.1","prism-react-renderer":"1.0.2","prop-types":"15.7.2","react":"^17.0.2","react-diff-view":"^2.4.7","react-dom":"^17.0.2","react-feather":"^2.0.9","react-markdown":"^6.0.3","react-player":"^1.11.1","react-visibility-sensor":"^5.1.1","remark-gfm":"^1.0.0","tippy.js":"^6.3.1"},"devDependencies":{"@apidevtools/json-schema-ref-parser":"^9.0.9","@babel/core":"^7.13.14","@emotion/babel-preset-css-prop":"^11.2.0","@emotion/jest":"^11.7.1","@testing-library/jest-dom":"5.11.0","@testing-library/react":"10.4.3","@testing-library/react-hooks":"^7.0.2","@types/cacache":"^15.0.1","@types/fs-extra":"^9.0.11","@types/github-slugger":"^1.3.0","@types/google.analytics":"^0.0.41","@types/gtag.js":"^0.0.6","@types/lodash":"^4.14.161","@types/long":"^4.0.1","@types/mdx-js__react":"^1.5.3","@types/node":"^14.11.2","@types/nprogress":"^0.2.0","@types/react":"^17.0.11","axios":"^0.21.2","babel-plugin-module-resolver":"3.1.1","babel-plugin-preval":"^3.0.1","cross-env":"^5.2.0","danger":"^9.2.10","esbuild-loader":"^2.13.1","eslint":"^8.6.0","eslint-config-next":"^10.2.3","eslint-config-universe":"^10.0.0","eslint-plugin-lodash":"^7.3.0","http-server":"^0.12.3","jest":"^27.4.7","js-yaml":"^4.1.0","prettier":"^2.3.1","puppeteer":"^10.2.0","react-test-renderer":"^17.0.2","rehype-slug":"^4.0.1","remark-cli":"^9.0.0","remark-frontmatter":"^2.0.0","remark-validate-links":"^10.0.4","rimraf":"^3.0.2","semver":"^7.3.5","sitemap":"^6.3.0","typescript":"^4.5.4","unist-builder":"^2.0.0","unist-util-visit":"^2.0.3"}}')},ufKf:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r}));var a="https://snack.expo.dev";function r(t){var e=t.templateId,n=t.code,a=t.files,r=t.baseURL,i={};return a&&Object.keys(a).forEach((function(t){var e=a[t],n=/\.(jsx?|tsx?|json|md)$/i.test(t);i[t]=n?{type:"CODE",url:e.match(/^https?:\/\//)?e:"".concat(r,"/").concat(e)}:{type:"ASSET",contents:e}})),e?i["App.js"]={type:"CODE",url:"".concat(r,"/").concat(e,".js")}:n&&(i["App.js"]={type:"CODE",contents:n}),i}},z7pX:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n("6FTQ");var r=n("8rE2");function i(t){return function(t){if(Array.isArray(t))return Object(a.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||Object(r.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},[["e3nw",1,0,2,3,4,5,6]]]);