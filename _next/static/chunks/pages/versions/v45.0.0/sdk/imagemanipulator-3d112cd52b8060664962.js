_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[1469],{"0atU":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v45.0.0/sdk/imagemanipulator",function(){return n("at5g")}])},I0q5:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var a=n("z7pX"),i=n("H+61"),o=n("UlJF"),c=n("+Css"),s=n("7LId"),r=n("VIvw"),p=n("iHvq"),l=n("cpVT"),u=n("q1tI"),d=n("ufKf"),m=n("3zh3"),f=n("AeFk"),b=function(e){var t=e.size,n=void 0===t?24:t,a=e.stroke,i=void 0===a?m.palette.dark.white:a;return Object(f.c)("svg",{"aria-label":"check",width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(f.c)("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))},h=n("5BX9");function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(p.a)(e);if(t){var i=Object(p.a)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return Object(r.a)(this,n)}}var j="v".concat(n("kiQV").version),y=function(e){Object(s.a)(n,e);var t=g(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,s=new Array(o),r=0;r<o;r++)s[r]=arguments[r];return e=t.call.apply(t,[this].concat(s)),Object(l.a)(Object(c.a)(e),"contentRef",u.createRef()),Object(l.a)(Object(c.a)(e),"state",{ready:!1}),Object(l.a)(Object(c.a)(e),"getSelectedDocsVersion",(function(){var t=e.context.version;return"latest"===t?j:t})),Object(l.a)(Object(c.a)(e),"getSnackSdkVersion",(function(){var t=e.getSelectedDocsVersion();return"unversioned"===t&&(t=j),t.replace("v","")})),Object(l.a)(Object(c.a)(e),"getExamplesPath",(function(){return"".concat(document.location.origin,"/static/examples/").concat(e.getSelectedDocsVersion())})),Object(l.a)(Object(c.a)(e),"getDependencies",(function(){return Object(a.a)(e.props.dependencies).join(",")})),Object(l.a)(Object(c.a)(e),"getCode",(function(){return(e.contentRef.current&&e.contentRef.current.textContent||"").replace(/%%placeholder-start%%.*%%placeholder-end%%/g,"")})),e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.setState({ready:!0})}},{key:"render",value:function(){return Object(f.c)("div",null,Object(f.c)("div",{ref:this.contentRef,style:this.props.contentHidden?{display:"none"}:void 0},this.props.children),Object(f.c)("form",{action:d.a,method:"POST",target:"_blank"},Object(f.c)("input",{type:"hidden",name:"platform",value:this.props.defaultPlatform||"android"}),Object(f.c)("input",{type:"hidden",name:"name",value:this.props.label||"Example"}),Object(f.c)("input",{type:"hidden",name:"dependencies",value:this.getDependencies()}),Object(f.c)("input",{type:"hidden",name:"sdkVersion",value:this.getSnackSdkVersion()}),this.props.platforms&&Object(f.c)("input",{type:"hidden",name:"supportedPlatforms",value:this.props.platforms.join(",")}),this.state.ready&&Object(f.c)("input",{type:"hidden",name:"files",value:JSON.stringify(Object(d.b)({templateId:this.props.templateId,code:this.getCode(),files:this.props.files,baseURL:this.getExamplesPath()}))}),Object(f.c)("button",{className:"snack-inline-example-button",disabled:!this.state.ready},Object(f.c)(b,{size:16})," ",this.props.buttonTitle||"Try this example on Snack")))}}]),n}(u.Component);Object(l.a)(y,"contextType",h.a),Object(l.a)(y,"defaultProps",{dependencies:[]})},at5g:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return u})),n.d(t,"headings",(function(){return d})),n.d(t,"default",(function(){return f}));var a=n("HALo"),i=n("dhJC"),o=(n("q1tI"),n("7ljp")),c=n("3Ukx"),s=n("HCau"),r=n("hykZ"),p=n("I0q5"),l=["components"],u={title:"ImageManipulator",sourceCodeUrl:"https://github.com/expo/expo/tree/sdk-45/packages/expo-image-manipulator",packageName:"expo-image-manipulator"},d=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"Usage"},{depth:2,type:"text",title:"API"}],m={meta:u,headings:d};function f(e){var t=e.components,n=Object(i.a)(e,l);return Object(o.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"expo-image-manipulator"))," provides an API to modify images stored on the local file system."),Object(o.b)(r.a,{android:!0,emulator:!0,ios:!0,simulator:!0,web:!0,mdxType:"PlatformsSection"}),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)(s.a,{mdxType:"APIInstallSection"}),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"This will first rotate the image 90 degrees clockwise, then flip the rotated image vertically and save it as a PNG."),Object(o.b)(p.a,{label:"Basic ImageManipulator usage",files:{"assets/snack-icon.png":"https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/2f7d32b1787708aba49b3586082d327b"},dependencies:["expo-asset","expo-image-manipulator"],mdxType:"SnackInline"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import React, { useState, useEffect } from 'react';\nimport { Button, Image, StyleSheet, View } from 'react-native';\nimport { Asset } from 'expo-asset';\nimport { manipulateAsync, FlipType, SaveFormat } from 'expo-image-manipulator';\n\nexport default function App() {\n  const [ready, setReady] = useState(false);\n  const [image, setImage] = useState(null);\n\n  useEffect(() => {\n    (async () => {\n      const image = Asset.fromModule(require('./assets/snack-icon.png'));\n      await image.downloadAsync();\n      setImage(image);\n      setReady(true);\n    })();\n  }, []);\n\n  const _rotate90andFlip = async () => {\n    const manipResult = await manipulateAsync(\n      image.localUri || image.uri,\n      [\n        { rotate: 90 },\n        { flip: FlipType.Vertical },\n      ],\n      { compress: 1, format: SaveFormat.PNG }\n    );\n    setImage(manipResult);\n  };\n\n  const _renderImage = () => (\n    <View style={styles.imageContainer}>\n      <Image\n        source={{ uri: image.localUri || image.uri }}\n        style={styles.image}\n      />\n    </View>\n  );\n\n  return (\n    <View style={styles.container}>\n      {ready && image && _renderImage()}\n      <Button title=\"Rotate and Flip\" onPress={_rotate90andFlip} />\n    </View>\n  );\n}\n\n/* @hide const styles = StyleSheet.create({ ... }); */\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n  },\n  imageContainer: {\n    marginVertical: 20,\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  image: {\n    width: 300,\n    height: 300,\n    resizeMode: 'contain',\n  },\n});\n"))),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import * as ImageManipulator from 'expo-image-manipulator';\n")),Object(o.b)(c.a,{packageName:"expo-image-manipulator",apiName:"ImageManipulator",mdxType:"APISection"}))}f.isMDXComponent=!0},ufKf:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));var a="https://snack.expo.dev";function i(e){var t=e.templateId,n=e.code,a=e.files,i=e.baseURL,o={};return a&&Object.keys(a).forEach((function(e){var t=a[e],n=/\.(jsx?|tsx?|json|md)$/i.test(e);o[e]=n?{type:"CODE",url:t.match(/^https?:\/\//)?t:"".concat(i,"/").concat(t)}:{type:"ASSET",contents:t}})),t?o["App.js"]={type:"CODE",url:"".concat(i,"/").concat(t,".js")}:n&&(o["App.js"]={type:"CODE",contents:n}),o}}},[["0atU",1,0,2,3,4,5,6,7,8,9,10,11,12,13,14]]]);