_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[1140],{I0q5:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var a=n("z7pX"),o=n("H+61"),r=n("UlJF"),s=n("+Css"),c=n("7LId"),i=n("VIvw"),l=n("iHvq"),d=n("cpVT"),p=n("q1tI"),b=n("ufKf"),u=n("3zh3"),f=n("AeFk"),m=function(e){var t=e.size,n=void 0===t?24:t,a=e.stroke,o=void 0===a?u.palette.dark.white:a;return Object(f.c)("svg",{"aria-label":"check",width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(f.c)("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))},h=n("5BX9");function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(l.a)(e);if(t){var o=Object(l.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return Object(i.a)(this,n)}}var O="v".concat(n("kiQV").version),y=function(e){Object(c.a)(n,e);var t=j(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return e=t.call.apply(t,[this].concat(c)),Object(d.a)(Object(s.a)(e),"contentRef",p.createRef()),Object(d.a)(Object(s.a)(e),"state",{ready:!1}),Object(d.a)(Object(s.a)(e),"getSelectedDocsVersion",(function(){var t=e.context.version;return"latest"===t?O:t})),Object(d.a)(Object(s.a)(e),"getSnackSdkVersion",(function(){var t=e.getSelectedDocsVersion();return"unversioned"===t&&(t=O),t.replace("v","")})),Object(d.a)(Object(s.a)(e),"getExamplesPath",(function(){return"".concat(document.location.origin,"/static/examples/").concat(e.getSelectedDocsVersion())})),Object(d.a)(Object(s.a)(e),"getDependencies",(function(){return Object(a.a)(e.props.dependencies).join(",")})),Object(d.a)(Object(s.a)(e),"getCode",(function(){return(e.contentRef.current&&e.contentRef.current.textContent||"").replace(/%%placeholder-start%%.*%%placeholder-end%%/g,"")})),e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.setState({ready:!0})}},{key:"render",value:function(){return Object(f.c)("div",null,Object(f.c)("div",{ref:this.contentRef,style:this.props.contentHidden?{display:"none"}:void 0},this.props.children),Object(f.c)("form",{action:b.a,method:"POST",target:"_blank"},Object(f.c)("input",{type:"hidden",name:"platform",value:this.props.defaultPlatform||"android"}),Object(f.c)("input",{type:"hidden",name:"name",value:this.props.label||"Example"}),Object(f.c)("input",{type:"hidden",name:"dependencies",value:this.getDependencies()}),Object(f.c)("input",{type:"hidden",name:"sdkVersion",value:this.getSnackSdkVersion()}),this.props.platforms&&Object(f.c)("input",{type:"hidden",name:"supportedPlatforms",value:this.props.platforms.join(",")}),this.state.ready&&Object(f.c)("input",{type:"hidden",name:"files",value:JSON.stringify(Object(b.b)({templateId:this.props.templateId,code:this.getCode(),files:this.props.files,baseURL:this.getExamplesPath()}))}),Object(f.c)("button",{className:"snack-inline-example-button",disabled:!this.state.ready},Object(f.c)(m,{size:16})," ",this.props.buttonTitle||"Try this example on Snack")))}}]),n}(p.Component);Object(d.a)(y,"contextType",h.a),Object(d.a)(y,"defaultProps",{dependencies:[]})},i19H:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v43.0.0/sdk/font",function(){return n("rnhd")}])},rnhd:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return p})),n.d(t,"headings",(function(){return b})),n.d(t,"default",(function(){return f}));var a=n("HALo"),o=n("dhJC"),r=(n("q1tI"),n("7ljp")),s=n("3Ukx"),c=n("HCau"),i=n("hykZ"),l=n("I0q5"),d=["components"],p={title:"Font",sourceCodeUrl:"https://github.com/expo/expo/tree/sdk-43/packages/expo-font"},b=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"Usage"},{depth:3,type:"text",title:"Example: hook"},{depth:3,type:"text",title:"Example: functions"},{depth:2,type:"text",title:"API"},{depth:2,type:"text",title:"Error Codes"}],u={meta:p,headings:b};function f(e){var t=e.components,n=Object(o.a)(e,d);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"expo-font"))," allows loading fonts from the web and using them in React Native components. See more detailed usage information in the ",Object(r.b)("a",{parentName:"p",href:"/guides/using-custom-fonts/"},"Fonts")," guide."),Object(r.b)(i.a,{android:!0,emulator:!0,ios:!0,simulator:!0,web:!0,mdxType:"PlatformsSection"}),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)(c.b,{packageName:"expo-font",mdxType:"InstallSection"}),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("h3",{id:"example-hook"},"Example: hook"),Object(r.b)(l.a,{label:"useFonts",dependencies:["expo-font"],files:{"assets/fonts/Montserrat.ttf":"https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/ee6539921d713482b8ccd4d0d23961bb"},mdxType:"SnackInline"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react';\nimport { View, Text, StyleSheet } from 'react-native';\nimport { useFonts } from 'expo-font';\n\nexport default function App() {\n  /* @info */ const [loaded] = useFonts({\n    Montserrat: require('./assets/fonts/Montserrat.ttf'),\n  });\n  /* @end */\n\n  if (!loaded) {\n    return null;\n  }\n\n  return (\n    <View style={styles.container}>\n      <Text style={{ fontFamily: 'Montserrat', fontSize: 30 }}>Montserrat</Text>\n    </View>\n  );\n}\n\n/* @hide const styles = StyleSheet.create({ ... }); */\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: '#fff',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n});\n/* @end */\n"))),Object(r.b)("h3",{id:"example-functions"},"Example: functions"),Object(r.b)(l.a,{label:"Font.loadAsync",dependencies:["expo-font"],files:{"assets/fonts/Montserrat.ttf":"https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/ee6539921d713482b8ccd4d0d23961bb","assets/fonts/Montserrat-SemiBold.ttf":"https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/c641dbee1d75892e4d88bdc31560c91b"},mdxType:"SnackInline"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react';\nimport { Text, View, StyleSheet } from 'react-native';\nimport * as Font from 'expo-font';\n\nexport default class App extends React.Component {\n  state = {\n    fontsLoaded: false,\n  };\n\n  async loadFonts() {\n    /* @info */ await Font.loadAsync({\n      // Load a font `Montserrat` from a static resource\n      Montserrat: require('./assets/fonts/Montserrat.ttf'),\n\n      // Any string can be used as the fontFamily name. Here we use an object to provide more control\n      'Montserrat-SemiBold': {\n        uri: require('./assets/fonts/Montserrat-SemiBold.ttf'),\n        display: Font.FontDisplay.FALLBACK,\n      },\n    });\n    /* @end */\n    this.setState({ fontsLoaded: true });\n  }\n\n  componentDidMount() {\n    this.loadFonts();\n  }\n\n  render() {\n    // Use the font with the fontFamily property after loading\n    if (this.state.fontsLoaded) {\n      return (\n        <View style={styles.container}>\n          <Text style={{ fontSize: 20 }}>Default Font</Text>\n          <Text style={{ fontFamily: 'Montserrat', fontSize: 20 }}>Montserrat</Text>\n          <Text style={{ fontFamily: 'Montserrat-SemiBold', fontSize: 20 }}>\n            Montserrat-SemiBold\n          </Text>\n        </View>\n      );\n    } else {\n      return null;\n    }\n  }\n}\n\n/* @hide const styles = StyleSheet.create({ ... }); */\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: '#fff',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n});\n/* @end */\n"))),Object(r.b)("h2",{id:"api"},"API"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import * as Font from 'expo-font';\n")),Object(r.b)(s.a,{packageName:"expo-font",mdxType:"APISection"}),Object(r.b)("h2",{id:"error-codes"},"Error Codes"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Code"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"ERR_FONT_API"),Object(r.b)("td",{parentName:"tr",align:null},"If the arguments passed to ",Object(r.b)("inlineCode",{parentName:"td"},"loadAsync")," are invalid.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"ERR_FONT_SOURCE"),Object(r.b)("td",{parentName:"tr",align:null},"The provided resource was of an incorrect type.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"ERR_WEB_ENVIRONMENT"),Object(r.b)("td",{parentName:"tr",align:null},"The browser's ",Object(r.b)("inlineCode",{parentName:"td"},"document")," element doesn't support injecting fonts.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"ERR_DOWNLOAD"),Object(r.b)("td",{parentName:"tr",align:null},"Failed to download the provided resource.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"ERR_FONT_FAMILY"),Object(r.b)("td",{parentName:"tr",align:null},"Invalid font family name was provided.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"ERR_UNLOAD"),Object(r.b)("td",{parentName:"tr",align:null},"Attempting to unload fonts that haven't finished loading yet.")))))}f.isMDXComponent=!0},ufKf:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var a="https://snack.expo.dev";function o(e){var t=e.templateId,n=e.code,a=e.files,o=e.baseURL,r={};return a&&Object.keys(a).forEach((function(e){var t=a[e],n=/\.(jsx?|tsx?|json|md)$/i.test(e);r[e]=n?{type:"CODE",url:t.match(/^https?:\/\//)?t:"".concat(o,"/").concat(t)}:{type:"ASSET",contents:t}})),t?r["App.js"]={type:"CODE",url:"".concat(o,"/").concat(t,".js")}:n&&(r["App.js"]={type:"CODE",contents:n}),r}}},[["i19H",1,0,2,3,4,5,6,7,8,9,10,11,12,13,14]]]);