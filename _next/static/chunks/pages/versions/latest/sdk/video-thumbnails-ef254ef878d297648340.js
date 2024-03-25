_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[392],{I0q5:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var a=n("z7pX"),o=n("H+61"),c=n("UlJF"),i=n("+Css"),s=n("7LId"),r=n("VIvw"),l=n("iHvq"),u=n("cpVT"),p=n("q1tI"),d=n("ufKf"),b=n("3zh3"),m=n("AeFk"),h=function(e){var t=e.size,n=void 0===t?24:t,a=e.stroke,o=void 0===a?b.palette.dark.white:a;return Object(m.c)("svg",{"aria-label":"check",width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(m.c)("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))},f=n("5BX9");function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(l.a)(e);if(t){var o=Object(l.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return Object(r.a)(this,n)}}var O="v".concat(n("kiQV").version),v=function(e){Object(s.a)(n,e);var t=j(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return e=t.call.apply(t,[this].concat(s)),Object(u.a)(Object(i.a)(e),"contentRef",p.createRef()),Object(u.a)(Object(i.a)(e),"state",{ready:!1}),Object(u.a)(Object(i.a)(e),"getSelectedDocsVersion",(function(){var t=e.context.version;return"latest"===t?O:t})),Object(u.a)(Object(i.a)(e),"getSnackSdkVersion",(function(){var t=e.getSelectedDocsVersion();return"unversioned"===t&&(t=O),t.replace("v","")})),Object(u.a)(Object(i.a)(e),"getExamplesPath",(function(){return"".concat(document.location.origin,"/static/examples/").concat(e.getSelectedDocsVersion())})),Object(u.a)(Object(i.a)(e),"getDependencies",(function(){return Object(a.a)(e.props.dependencies).join(",")})),Object(u.a)(Object(i.a)(e),"getCode",(function(){return(e.contentRef.current&&e.contentRef.current.textContent||"").replace(/%%placeholder-start%%.*%%placeholder-end%%/g,"")})),e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.setState({ready:!0})}},{key:"render",value:function(){return Object(m.c)("div",null,Object(m.c)("div",{ref:this.contentRef,style:this.props.contentHidden?{display:"none"}:void 0},this.props.children),Object(m.c)("form",{action:d.a,method:"POST",target:"_blank"},Object(m.c)("input",{type:"hidden",name:"platform",value:this.props.defaultPlatform||"android"}),Object(m.c)("input",{type:"hidden",name:"name",value:this.props.label||"Example"}),Object(m.c)("input",{type:"hidden",name:"dependencies",value:this.getDependencies()}),Object(m.c)("input",{type:"hidden",name:"sdkVersion",value:this.getSnackSdkVersion()}),this.props.platforms&&Object(m.c)("input",{type:"hidden",name:"supportedPlatforms",value:this.props.platforms.join(",")}),this.state.ready&&Object(m.c)("input",{type:"hidden",name:"files",value:JSON.stringify(Object(d.b)({templateId:this.props.templateId,code:this.getCode(),files:this.props.files,baseURL:this.getExamplesPath()}))}),Object(m.c)("button",{className:"snack-inline-example-button",disabled:!this.state.ready},Object(m.c)(h,{size:16})," ",this.props.buttonTitle||"Try this example on Snack")))}}]),n}(p.Component);Object(u.a)(v,"contextType",f.a),Object(u.a)(v,"defaultProps",{dependencies:[]})},SmHQ:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return p})),n.d(t,"headings",(function(){return d})),n.d(t,"default",(function(){return m}));var a=n("HALo"),o=n("dhJC"),c=(n("q1tI"),n("7ljp")),i=n("3Ukx"),s=n("HCau"),r=n("hykZ"),l=n("I0q5"),u=["components"],p={title:"VideoThumbnails",sourceCodeUrl:"https://github.com/expo/expo/tree/sdk-44/packages/expo-video-thumbnails"},d=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"Usage"},{depth:2,type:"text",title:"API"}],b={meta:p,headings:d};function m(e){var t=e.components,n=Object(o.a)(e,u);return Object(c.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"expo-video-thumbnails"))," allows you to generate an image to serve as a thumbnail from a video file."),Object(c.b)(r.a,{android:!0,emulator:!0,ios:!0,simulator:!0,mdxType:"PlatformsSection"}),Object(c.b)("h2",{id:"installation"},"Installation"),Object(c.b)(s.b,{packageName:"expo-video-thumbnails",mdxType:"InstallSection"}),Object(c.b)("h2",{id:"usage"},"Usage"),Object(c.b)(l.a,{label:"Video Thumbnails",dependencies:["expo-video-thumbnails"],mdxType:"SnackInline"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport { StyleSheet, Button, View, Image, Text } from 'react-native';\nimport * as VideoThumbnails from 'expo-video-thumbnails';\n\nexport default function App() {\n  const [image, setImage] = useState(null);\n\n  const generateThumbnail = async () => {\n    try {\n      const { uri } = await VideoThumbnails.getThumbnailAsync(\n        'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',\n        {\n          time: 15000,\n        }\n      );\n      setImage(uri);\n    } catch (e) {\n      console.warn(e);\n    }\n  };\n\n  return (\n    <View style={styles.container}>\n      <Button onPress={generateThumbnail} title=\"Generate thumbnail\" />\n      {image && <Image source={{ uri: image }} style={styles.image} />}\n      <Text>{image}</Text>\n    </View>\n  );\n}\n\n/* @hide const styles = StyleSheet.create({ ... }); */\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center',\n    backgroundColor: '#F5FCFF',\n  },\n  image: {\n    width: 200,\n    height: 200,\n  },\n});\n/* @end */\n"))),Object(c.b)("h2",{id:"api"},"API"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"import * as VideoThumbnails from 'expo-video-thumbnails';\n")),Object(c.b)(i.a,{packageName:"expo-video-thumbnails",apiName:"VideoThumbnails",mdxType:"APISection"}))}m.isMDXComponent=!0},sE24:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/latest/sdk/video-thumbnails",function(){return n("SmHQ")}])},ufKf:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var a="https://snack.expo.dev";function o(e){var t=e.templateId,n=e.code,a=e.files,o=e.baseURL,c={};return a&&Object.keys(a).forEach((function(e){var t=a[e],n=/\.(jsx?|tsx?|json|md)$/i.test(e);c[e]=n?{type:"CODE",url:t.match(/^https?:\/\//)?t:"".concat(o,"/").concat(t)}:{type:"ASSET",contents:t}})),t?c["App.js"]={type:"CODE",url:"".concat(o,"/").concat(t,".js")}:n&&(c["App.js"]={type:"CODE",contents:n}),c}}},[["sE24",1,0,2,3,4,5,6,7,8,9,10,11,12,13,14]]]);