_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[659],{"2poD":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return d})),n.d(t,"headings",(function(){return p})),n.d(t,"default",(function(){return u}));var a=n("HALo"),o=n("dhJC"),r=(n("q1tI"),n("7ljp")),s=n("HCau"),i=n("hykZ"),l=n("I0q5"),c=["components"],d={title:"Font",sourceCodeUrl:"https://github.com/expo/expo/tree/sdk-40/packages/expo-font"},p=[{depth:2,type:"text",title:"Installation"},{depth:1,type:"text",title:"API"},{depth:2,type:"text",title:"Hooks"},{depth:3,type:"inlineCode",title:"useFonts"},{depth:4,type:"text",title:"Arguments"},{depth:4,type:"text",title:"Returns"},{depth:4,type:"text",title:"Example: hook"},{depth:2,type:"text",title:"Methods"},{depth:3,type:"inlineCode",title:"Font.loadAsync(object)"},{depth:4,type:"text",title:"Arguments"},{depth:4,type:"text",title:"Example: functions"},{depth:4,type:"text",title:"Returns"},{depth:3,type:"inlineCode",title:"Font.isLoaded(fontFamily)"},{depth:4,type:"text",title:"Arguments"},{depth:4,type:"text",title:"Returns"},{depth:3,type:"inlineCode",title:"Font.isLoading(fontFamily)"},{depth:4,type:"text",title:"Arguments"},{depth:4,type:"text",title:"Returns"},{depth:2,type:"text",title:"Types"},{depth:3,type:"inlineCode",title:"FontDisplay"},{depth:3,type:"inlineCode",title:"FontResource"},{depth:3,type:"inlineCode",title:"FontSource"},{depth:2,type:"text",title:"Error Codes"}],b={meta:d,headings:p};function u(e){var t=e.components,n=Object(o.a)(e,c);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"expo-font"))," allows loading fonts from the web and using them in React Native components. See more detailed usage information in the ",Object(r.b)("a",{parentName:"p",href:"/guides/using-custom-fonts/"},"Fonts")," guide."),Object(r.b)(i.a,{android:!0,emulator:!0,ios:!0,simulator:!0,web:!0,mdxType:"PlatformsSection"}),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)(s.b,{packageName:"expo-font",mdxType:"InstallSection"}),Object(r.b)("h1",{id:"api"},"API"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import * as Font from 'expo-font';\n")),Object(r.b)("h2",{id:"hooks"},"Hooks"),Object(r.b)("h3",{id:"usefonts"},Object(r.b)("inlineCode",{parentName:"h3"},"useFonts")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import { useFonts } from 'expo-font';\n\nconst [loaded, error] = useFonts({ ... });\n")),Object(r.b)("p",null,"Load a map of fonts with ",Object(r.b)("a",{parentName:"p",href:"/versions/v40.0.0/sdk/font/#fontloadasyncobject"},Object(r.b)("inlineCode",{parentName:"a"},"loadAsync")),". This returns a boolean if the fonts are loaded and ready to use. It also returns an error if something went wrong, to use in development."),Object(r.b)("h4",{id:"arguments"},"Arguments"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"fonts (",Object(r.b)("em",{parentName:"strong"},"{ ","[fontFamily: string]",": FontSource }"),")")," -- A map of ",Object(r.b)("inlineCode",{parentName:"li"},"fontFamily"),"s to ",Object(r.b)("a",{parentName:"li",href:"/versions/v40.0.0/sdk/font/#fontsource"},Object(r.b)("inlineCode",{parentName:"a"},"FontSource")),"s. After loading the font you can use the ",Object(r.b)("strong",{parentName:"li"},"key")," in the ",Object(r.b)("inlineCode",{parentName:"li"},"fontFamily")," style prop of a ",Object(r.b)("inlineCode",{parentName:"li"},"Text")," element.")),Object(r.b)("h4",{id:"returns"},"Returns"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"loaded (",Object(r.b)("em",{parentName:"strong"},"boolean"),")")," -- A boolean to detect if the font for ",Object(r.b)("inlineCode",{parentName:"li"},"fontFamily")," has finished loading."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"error (",Object(r.b)("em",{parentName:"strong"},"Error | null"),")")," -- An error encountered when loading the fonts.")),Object(r.b)("h4",{id:"example-hook"},"Example: hook"),Object(r.b)(l.a,{label:"useFonts",dependencies:["expo-font"],files:{"assets/fonts/Montserrat.ttf":"https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/ee6539921d713482b8ccd4d0d23961bb"},mdxType:"SnackInline"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react';\nimport { View, Text, StyleSheet } from 'react-native';\nimport { useFonts } from 'expo-font';\n\nexport default function App() {\n  /* @info */ const [loaded] = useFonts({\n    Montserrat: require('./assets/fonts/Montserrat.ttf'),\n  });\n  /* @end */\n\n  if (!loaded) {\n    return null;\n  }\n\n  return (\n    <View style={styles.container}>\n      <Text style={{ fontFamily: 'Montserrat', fontSize: 30 }}>Montserrat</Text>\n    </View>\n  );\n}\n\n/* @hide const styles = StyleSheet.create({ ... }); */\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: '#fff',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n});\n/* @end */\n"))),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"fontloadasyncobject"},Object(r.b)("inlineCode",{parentName:"h3"},"Font.loadAsync(object)")),Object(r.b)("p",null,"Highly efficient method for loading fonts from static or remote resources which can then be used with the platform's native text elements. In the browser this generates a ",Object(r.b)("inlineCode",{parentName:"p"},"@font-face")," block in a shared style sheet for fonts. No CSS is needed to use this method."),Object(r.b)("h4",{id:"arguments-1"},"Arguments"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"{ ","[fontFamily: string]",": FontSource }")," -- A map of ",Object(r.b)("inlineCode",{parentName:"li"},"fontFamily"),"s to ",Object(r.b)("a",{parentName:"li",href:"/versions/v40.0.0/sdk/font/#fontsource"},Object(r.b)("inlineCode",{parentName:"a"},"FontSource")),"s. After loading the font you can use the ",Object(r.b)("strong",{parentName:"li"},"key")," in the ",Object(r.b)("inlineCode",{parentName:"li"},"fontFamily")," style prop of a ",Object(r.b)("inlineCode",{parentName:"li"},"Text")," element.")),Object(r.b)("h4",{id:"example-functions"},"Example: functions"),Object(r.b)(l.a,{label:"Font.loadAsync",dependencies:["expo-font"],files:{"assets/fonts/Montserrat.ttf":"https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/ee6539921d713482b8ccd4d0d23961bb","assets/fonts/Montserrat-SemiBold.ttf":"https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/c641dbee1d75892e4d88bdc31560c91b"},mdxType:"SnackInline"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react';\nimport { Text, View, StyleSheet } from 'react-native';\nimport * as Font from 'expo-font';\n\nexport default class App extends React.Component {\n  state = {\n    fontsLoaded: false,\n  };\n\n  async loadFonts() {\n    /* @info */ await Font.loadAsync({\n      // Load a font `Montserrat` from a static resource\n      Montserrat: require('./assets/fonts/Montserrat.ttf'),\n\n      // Any string can be used as the fontFamily name. Here we use an object to provide more control\n      'Montserrat-SemiBold': {\n        uri: require('./assets/fonts/Montserrat-SemiBold.ttf'),\n        display: Font.FontDisplay.FALLBACK,\n      },\n    });\n    /* @end */\n    this.setState({ fontsLoaded: true });\n  }\n\n  componentDidMount() {\n    this.loadFonts();\n  }\n\n  render() {\n    // Use the font with the fontFamily property after loading\n    if (this.state.fontsLoaded) {\n      return (\n        <View style={styles.container}>\n          <Text style={{ fontSize: 20 }}>Default Font</Text>\n          <Text style={{ fontFamily: 'Montserrat', fontSize: 20 }}>Montserrat</Text>\n          <Text style={{ fontFamily: 'Montserrat-SemiBold', fontSize: 20 }}>\n            Montserrat-SemiBold\n          </Text>\n        </View>\n      );\n    } else {\n      return null;\n    }\n  }\n}\n\n/* @hide const styles = StyleSheet.create({ ... }); */\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: '#fff',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n});\n/* @end */\n"))),Object(r.b)("h4",{id:"returns-1"},"Returns"),Object(r.b)("p",null,"Returns a promise that resolves when the font has loaded. Often you may want to wrap the method in a ",Object(r.b)("inlineCode",{parentName:"p"},"try/catch/finally")," to ensure the app continues if the font fails to load."),Object(r.b)("h3",{id:"fontisloadedfontfamily"},Object(r.b)("inlineCode",{parentName:"h3"},"Font.isLoaded(fontFamily)")),Object(r.b)("p",null,"Synchronously detect if the font for ",Object(r.b)("inlineCode",{parentName:"p"},"fontFamily")," has finished loading."),Object(r.b)("h4",{id:"arguments-2"},"Arguments"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"fontFamily: ",Object(r.b)("em",{parentName:"strong"},"string"))," -- name used to load the ",Object(r.b)("a",{parentName:"li",href:"/versions/v40.0.0/sdk/font/#fontresource"},"FontResource"))),Object(r.b)("h4",{id:"returns-2"},"Returns"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"true")," if the the font has fully loaded."),Object(r.b)("h3",{id:"fontisloadingfontfamily"},Object(r.b)("inlineCode",{parentName:"h3"},"Font.isLoading(fontFamily)")),Object(r.b)("p",null,"Synchronously detect if the font for ",Object(r.b)("inlineCode",{parentName:"p"},"fontFamily")," is still being loaded"),Object(r.b)("h4",{id:"arguments-3"},"Arguments"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"fontFamily: ",Object(r.b)("em",{parentName:"strong"},"string"))," -- name used to load the ",Object(r.b)("a",{parentName:"li",href:"/versions/v40.0.0/sdk/font/#fontresource"},"FontResource"))),Object(r.b)("h4",{id:"returns-3"},"Returns"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"true")," if the the font is still loading."),Object(r.b)("h2",{id:"types"},"Types"),Object(r.b)("h3",{id:"fontdisplay"},Object(r.b)("inlineCode",{parentName:"h3"},"FontDisplay")),Object(r.b)("p",null,"Sets the ",Object(r.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display"},"font-display")," for a given typeface. This currently ",Object(r.b)("strong",{parentName:"p"},"only works on web")," (support is limited so remember to ",Object(r.b)("a",{parentName:"p",href:"https://caniuse.com/#search=font-display"},"check the coverage"),"). The default font value on web is ",Object(r.b)("inlineCode",{parentName:"p"},"FontDisplay.AUTO"),". Even though setting the ",Object(r.b)("inlineCode",{parentName:"p"},"fontDisplay")," does nothing on native platforms, the default behavior emulates ",Object(r.b)("inlineCode",{parentName:"p"},"FontDisplay.SWAP")," on flagship devices like iOS, Samsung, Pixel, etc. Default functionality varies on One Plus devices. In the browser this value is set in the generated ",Object(r.b)("inlineCode",{parentName:"p"},"@font-face")," CSS block and not as a style property meaning you cannot dynamically change this value based on the element it's used in."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"AUTO"),": (Default on web) The font display strategy is defined by the user agent or platform. This generally defaults to the text being invisible until the font is loaded. Good for buttons or banners that require a specific treatment."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"SWAP"),": Fallback text is rendered immediately with a default font while the desired font is loaded. This is good for making the content appear to load instantly and is usually preferred."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"BLOCK"),": The text will be invisible until the font has loaded. If the font fails to load then nothing will appear - it's best to turn this off when debugging missing text."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"FALLBACK"),": Splits the behavior between ",Object(r.b)("inlineCode",{parentName:"li"},"SWAP")," and ",Object(r.b)("inlineCode",{parentName:"li"},"BLOCK"),". There will be a ",Object(r.b)("a",{parentName:"li",href:"https://developers.google.com/web/updates/2016/02/font-display?hl=en"},"100ms timeout")," where the text with a custom font is invisible, after that the text will either swap to the styled text or it'll show the unstyled text and continue to load the custom font. This is good for buttons that need a custom font but should also be quickly available to screen-readers."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"OPTIONAL"),": This works almost identically to ",Object(r.b)("inlineCode",{parentName:"li"},"FALLBACK"),", the only difference is that the browser will decide to load the font based on slow connection speed or critical resource demand.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"enum FontDisplay {\n  AUTO = 'auto',\n  BLOCK = 'block',\n  SWAP = 'swap',\n  FALLBACK = 'fallback',\n  OPTIONAL = 'optional',\n}\n\nawait Font.loadAsync({\n  roboto: {\n    uri: require('./roboto.ttf'),\n    // Only effects web\n    display: FontDisplay.SWAP,\n  },\n});\n")),Object(r.b)("h3",{id:"fontresource"},Object(r.b)("inlineCode",{parentName:"h3"},"FontResource")),Object(r.b)("p",null,"Used to dictate the resource that is loaded into the provided font namespace when used with ",Object(r.b)("a",{parentName:"p",href:"/versions/v40.0.0/sdk/font/#fontloadasyncobject"},Object(r.b)("inlineCode",{parentName:"a"},"loadAsync")),". Optionally on web you can define a ",Object(r.b)("inlineCode",{parentName:"p"},"display")," value which sets the ",Object(r.b)("a",{parentName:"p",href:"/versions/v40.0.0/sdk/font/#fontdisplay"},Object(r.b)("inlineCode",{parentName:"a"},"font-display"))," property for a given typeface in the browser."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"type FontResource = {\n  uri: string | number;\n  display?: FontDisplay;\n};\n")),Object(r.b)("h3",{id:"fontsource"},Object(r.b)("inlineCode",{parentName:"h3"},"FontSource")),Object(r.b)("p",null,"The different types of assets you can provide to the ",Object(r.b)("a",{parentName:"p",href:"/versions/v40.0.0/sdk/font/#fontloadasyncobject"},Object(r.b)("inlineCode",{parentName:"a"},"loadAsync()"))," function. A font source can be a URI, a module ID, or an Expo Asset."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"type FontSource = string | number | Asset | FontResource;\n")),Object(r.b)("h2",{id:"error-codes"},"Error Codes"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Code"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"ERR_FONT_API"),Object(r.b)("td",{parentName:"tr",align:null},"If the arguments passed to ",Object(r.b)("inlineCode",{parentName:"td"},"loadAsync")," are invalid.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"ERR_FONT_SOURCE"),Object(r.b)("td",{parentName:"tr",align:null},"The provided resource was of an incorrect type.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"ERR_WEB_ENVIRONMENT"),Object(r.b)("td",{parentName:"tr",align:null},"The browser's ",Object(r.b)("inlineCode",{parentName:"td"},"document")," element doesn't support injecting fonts.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"ERR_DOWNLOAD"),Object(r.b)("td",{parentName:"tr",align:null},"Failed to download the provided resource.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"ERR_FONT_FAMILY"),Object(r.b)("td",{parentName:"tr",align:null},"Invalid font family name was provided.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"ERR_UNLOAD"),Object(r.b)("td",{parentName:"tr",align:null},"Attempting to unload fonts that haven't finished loading yet.")))))}u.isMDXComponent=!0},"5BX9":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return i}));var a=n("q1tI"),o=n("AeFk"),r=Object(a.createContext)({version:"latest",hasVersion:!1,setVersion:function(e){throw new Error("PageApiVersionContext not found")}});function s(e){var t=l(e.router.pathname),n=null!==t,s=Object(a.useCallback)((function(t){e.router.push(function(e,t){var n=l(e);return n?e.replace(n,t):e}(e.router.pathname,t))}),[]);return Object(o.c)(r.Provider,{value:{setVersion:s,hasVersion:n,version:t||"latest"}},e.children)}function i(){return Object(a.useContext)(r)}function l(e){return function(e){return e.startsWith("/versions/")}(e)?e.split("/",3).pop():null}},"6FTQ":function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}n.d(t,"a",(function(){return a}))},"8rE2":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("6FTQ");function o(e,t){if(e){if("string"===typeof e)return Object(a.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(a.a)(e,t):void 0}}},I0q5:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var a=n("z7pX"),o=n("H+61"),r=n("UlJF"),s=n("+Css"),i=n("7LId"),l=n("VIvw"),c=n("iHvq"),d=n("cpVT"),p=n("q1tI"),b=n("ufKf"),u=n("3zh3"),f=n("AeFk"),m=function(e){var t=e.size,n=void 0===t?24:t,a=e.stroke,o=void 0===a?u.palette.dark.white:a;return Object(f.c)("svg",{"aria-label":"check",width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(f.c)("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))},h=n("5BX9");function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(c.a)(e);if(t){var o=Object(c.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return Object(l.a)(this,n)}}var O="v".concat(n("kiQV").version),y=function(e){Object(i.a)(n,e);var t=j(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return e=t.call.apply(t,[this].concat(i)),Object(d.a)(Object(s.a)(e),"contentRef",p.createRef()),Object(d.a)(Object(s.a)(e),"state",{ready:!1}),Object(d.a)(Object(s.a)(e),"getSelectedDocsVersion",(function(){var t=e.context.version;return"latest"===t?O:t})),Object(d.a)(Object(s.a)(e),"getSnackSdkVersion",(function(){var t=e.getSelectedDocsVersion();return"unversioned"===t&&(t=O),t.replace("v","")})),Object(d.a)(Object(s.a)(e),"getExamplesPath",(function(){return"".concat(document.location.origin,"/static/examples/").concat(e.getSelectedDocsVersion())})),Object(d.a)(Object(s.a)(e),"getDependencies",(function(){return Object(a.a)(e.props.dependencies).join(",")})),Object(d.a)(Object(s.a)(e),"getCode",(function(){return(e.contentRef.current&&e.contentRef.current.textContent||"").replace(/%%placeholder-start%%.*%%placeholder-end%%/g,"")})),e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.setState({ready:!0})}},{key:"render",value:function(){return Object(f.c)("div",null,Object(f.c)("div",{ref:this.contentRef,style:this.props.contentHidden?{display:"none"}:void 0},this.props.children),Object(f.c)("form",{action:b.a,method:"POST",target:"_blank"},Object(f.c)("input",{type:"hidden",name:"platform",value:this.props.defaultPlatform||"android"}),Object(f.c)("input",{type:"hidden",name:"name",value:this.props.label||"Example"}),Object(f.c)("input",{type:"hidden",name:"dependencies",value:this.getDependencies()}),Object(f.c)("input",{type:"hidden",name:"sdkVersion",value:this.getSnackSdkVersion()}),this.props.platforms&&Object(f.c)("input",{type:"hidden",name:"supportedPlatforms",value:this.props.platforms.join(",")}),this.state.ready&&Object(f.c)("input",{type:"hidden",name:"files",value:JSON.stringify(Object(b.b)({templateId:this.props.templateId,code:this.getCode(),files:this.props.files,baseURL:this.getExamplesPath()}))}),Object(f.c)("button",{className:"snack-inline-example-button",disabled:!this.state.ready},Object(f.c)(m,{size:16})," ",this.props.buttonTitle||"Try this example on Snack")))}}]),n}(p.Component);Object(d.a)(y,"contextType",h.a),Object(d.a)(y,"defaultProps",{dependencies:[]})},YOrI:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v40.0.0/sdk/font",function(){return n("2poD")}])},cpVT:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))},kiQV:function(e){e.exports=JSON.parse('{"name":"expo-docs","version":"44.0.0","private":true,"scripts":{"dev":"rimraf .next/preval && next dev -p 3002","build":"cross-env NODE_OPTIONS=--max-old-space-size=8192 next build","export":"yarn run build && next export && yarn run export-issue-404","export-issue-404":"echo \\"\ud83d\udee0  Patching https://github.com/vercel/next.js/issues/16528\\"; cp out/404/index.html out/404.html","export-server":"http-server out -p 8000","import-react-native-docs":"node ./scripts/import-react-native-docs.js","test-links":"node --async-stack-traces --unhandled-rejections=strict ./scripts/test-links.js","prettier":"prettier --write \'**/*.{js,ts,tsx,md}\'","lint":"tsc --noEmit && eslint .","lint-links":"remark -u validate-links ./pages","watch":"tsc --noEmit -w","test":"jest","schema-sync":"node --async-stack-traces --unhandled-rejections=strict ./scripts/schema-sync.js","remove-version":"node --unhandled-rejections=strict ./scripts/remove-version.js"},"resolutions":{"webpack":"^5.28.0"},"dependencies":{"@emotion/react":"^11.4.0","@expo/spawn-async":"^1.5.0","@expo/styleguide":"^4.0.1","@mdx-js/loader":"^1.6.22","@mdx-js/mdx":"^1.6.22","@mdx-js/react":"^1.6.22","@mdx-js/runtime":"^1.6.22","@reach/tabs":"^0.15.0","@sentry/browser":"^5.6.1","date-fns":"^2.28.0","docsearch.js":"^2.5.2","emoji-regex":"^9.2.2","front-matter":"^2.3.0","fs-extra":"^6.0.1","github-slugger":"^1.3.0","hotshot":"^1.0.5","lodash":"^4.17.20","next":"^11.1.4","nprogress":"0.2.0","path-browserify":"^1.0.1","prism-react-renderer":"1.0.2","prop-types":"15.7.2","react":"^17.0.2","react-diff-view":"^2.4.7","react-dom":"^17.0.2","react-feather":"^2.0.9","react-markdown":"^6.0.3","react-player":"^1.11.1","react-visibility-sensor":"^5.1.1","remark-gfm":"^1.0.0","tippy.js":"^6.3.1"},"devDependencies":{"@apidevtools/json-schema-ref-parser":"^9.0.9","@babel/core":"^7.13.14","@emotion/babel-preset-css-prop":"^11.2.0","@emotion/jest":"^11.7.1","@testing-library/jest-dom":"5.11.0","@testing-library/react":"10.4.3","@testing-library/react-hooks":"^7.0.2","@types/cacache":"^15.0.1","@types/fs-extra":"^9.0.11","@types/github-slugger":"^1.3.0","@types/google.analytics":"^0.0.41","@types/gtag.js":"^0.0.6","@types/lodash":"^4.14.161","@types/long":"^4.0.1","@types/mdx-js__react":"^1.5.3","@types/node":"^14.11.2","@types/nprogress":"^0.2.0","@types/react":"^17.0.11","axios":"^0.21.2","babel-plugin-module-resolver":"3.1.1","babel-plugin-preval":"^3.0.1","cross-env":"^5.2.0","danger":"^9.2.10","esbuild-loader":"^2.13.1","eslint":"^8.6.0","eslint-config-next":"^10.2.3","eslint-config-universe":"^10.0.0","eslint-plugin-lodash":"^7.3.0","http-server":"^0.12.3","jest":"^27.4.7","js-yaml":"^4.1.0","prettier":"^2.3.1","puppeteer":"^10.2.0","react-test-renderer":"^17.0.2","rehype-slug":"^4.0.1","remark-cli":"^9.0.0","remark-frontmatter":"^2.0.0","remark-validate-links":"^10.0.4","rimraf":"^3.0.2","semver":"^7.3.5","sitemap":"^6.3.0","typescript":"^4.5.4","unist-builder":"^2.0.0","unist-util-visit":"^2.0.3"}}')},ufKf:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var a="https://snack.expo.dev";function o(e){var t=e.templateId,n=e.code,a=e.files,o=e.baseURL,r={};return a&&Object.keys(a).forEach((function(e){var t=a[e],n=/\.(jsx?|tsx?|json|md)$/i.test(e);r[e]=n?{type:"CODE",url:t.match(/^https?:\/\//)?t:"".concat(o,"/").concat(t)}:{type:"ASSET",contents:t}})),t?r["App.js"]={type:"CODE",url:"".concat(o,"/").concat(t,".js")}:n&&(r["App.js"]={type:"CODE",contents:n}),r}},z7pX:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("6FTQ");var o=n("8rE2");function r(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},[["YOrI",1,0,2,3,4,5,6]]]);