_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[1135],{I0q5:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var c=n("z7pX"),a=n("H+61"),o=n("UlJF"),r=n("+Css"),s=n("7LId"),i=n("VIvw"),p=n("iHvq"),d=n("cpVT"),l=n("q1tI"),u=n("ufKf"),b=n("3zh3"),f=n("AeFk"),h=function(e){var t=e.size,n=void 0===t?24:t,c=e.stroke,a=void 0===c?b.palette.dark.white:c;return Object(f.c)("svg",{"aria-label":"check",width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(f.c)("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))},m=n("5BX9");function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,c=Object(p.a)(e);if(t){var a=Object(p.a)(this).constructor;n=Reflect.construct(c,arguments,a)}else n=c.apply(this,arguments);return Object(i.a)(this,n)}}var O="v".concat(n("kiQV").version),g=function(e){Object(s.a)(n,e);var t=j(n);function n(){var e;Object(a.a)(this,n);for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return e=t.call.apply(t,[this].concat(s)),Object(d.a)(Object(r.a)(e),"contentRef",l.createRef()),Object(d.a)(Object(r.a)(e),"state",{ready:!1}),Object(d.a)(Object(r.a)(e),"getSelectedDocsVersion",(function(){var t=e.context.version;return"latest"===t?O:t})),Object(d.a)(Object(r.a)(e),"getSnackSdkVersion",(function(){var t=e.getSelectedDocsVersion();return"unversioned"===t&&(t=O),t.replace("v","")})),Object(d.a)(Object(r.a)(e),"getExamplesPath",(function(){return"".concat(document.location.origin,"/static/examples/").concat(e.getSelectedDocsVersion())})),Object(d.a)(Object(r.a)(e),"getDependencies",(function(){return Object(c.a)(e.props.dependencies).join(",")})),Object(d.a)(Object(r.a)(e),"getCode",(function(){return(e.contentRef.current&&e.contentRef.current.textContent||"").replace(/%%placeholder-start%%.*%%placeholder-end%%/g,"")})),e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.setState({ready:!0})}},{key:"render",value:function(){return Object(f.c)("div",null,Object(f.c)("div",{ref:this.contentRef,style:this.props.contentHidden?{display:"none"}:void 0},this.props.children),Object(f.c)("form",{action:u.a,method:"POST",target:"_blank"},Object(f.c)("input",{type:"hidden",name:"platform",value:this.props.defaultPlatform||"android"}),Object(f.c)("input",{type:"hidden",name:"name",value:this.props.label||"Example"}),Object(f.c)("input",{type:"hidden",name:"dependencies",value:this.getDependencies()}),Object(f.c)("input",{type:"hidden",name:"sdkVersion",value:this.getSnackSdkVersion()}),this.props.platforms&&Object(f.c)("input",{type:"hidden",name:"supportedPlatforms",value:this.props.platforms.join(",")}),this.state.ready&&Object(f.c)("input",{type:"hidden",name:"files",value:JSON.stringify(Object(u.b)({templateId:this.props.templateId,code:this.getCode(),files:this.props.files,baseURL:this.getExamplesPath()}))}),Object(f.c)("button",{className:"snack-inline-example-button",disabled:!this.state.ready},Object(f.c)(h,{size:16})," ",this.props.buttonTitle||"Try this example on Snack")))}}]),n}(l.Component);Object(d.a)(g,"contextType",m.a),Object(d.a)(g,"defaultProps",{dependencies:[]})},ufKf:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return a}));var c="https://snack.expo.dev";function a(e){var t=e.templateId,n=e.code,c=e.files,a=e.baseURL,o={};return c&&Object.keys(c).forEach((function(e){var t=c[e],n=/\.(jsx?|tsx?|json|md)$/i.test(e);o[e]=n?{type:"CODE",url:t.match(/^https?:\/\//)?t:"".concat(a,"/").concat(t)}:{type:"ASSET",contents:t}})),t?o["App.js"]={type:"CODE",url:"".concat(a,"/").concat(t,".js")}:n&&(o["App.js"]={type:"CODE",contents:n}),o}},"ysj+":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v43.0.0/sdk/facedetector",function(){return n("zQ5e")}])},zQ5e:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return l})),n.d(t,"headings",(function(){return u})),n.d(t,"default",(function(){return f}));var c=n("HALo"),a=n("dhJC"),o=(n("q1tI"),n("7ljp")),r=n("3Ukx"),s=n("HCau"),i=n("hykZ"),p=n("I0q5"),d=["components"],l={title:"FaceDetector",sourceCodeUrl:"https://github.com/expo/expo/tree/sdk-43/packages/expo-face-detector"},u=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"Usage"},{depth:3,type:"text",title:"Known issues"},{depth:3,type:"text",title:"Settings"},{depth:2,type:"text",title:"API"}],b={meta:l,headings:u};function f(e){var t=e.components,n=Object(a.a)(e,d);return Object(o.b)("wrapper",Object(c.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"expo-face-detector"))," lets you use the power of the ",Object(o.b)("a",{parentName:"p",href:"https://developers.google.com/vision/face-detection-concepts"},"Google Mobile Vision")," framework to detect faces on images."),Object(o.b)(i.a,{android:!0,ios:!0,mdxType:"PlatformsSection"}),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)(s.b,{packageName:"expo-face-detector",mdxType:"InstallSection"}),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("h3",{id:"known-issues"},"Known issues"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Android does not recognize faces that aren't aligned with the interface (top of the interface matches top of the head).")),Object(o.b)("h3",{id:"settings"},"Settings"),Object(o.b)("p",null,"In order to configure detector's behavior modules pass a ",Object(o.b)("a",{parentName:"p",href:"/versions/v43.0.0/sdk/facedetector/#detectionoptions"},Object(o.b)("inlineCode",{parentName:"a"},"DetectionOptions"))," object which is then interpreted by this module."),Object(o.b)("p",null,"Eg. you could use the following snippet to detect faces in fast mode without detecting landmarks or whether face is smiling:"),Object(o.b)(p.a,{dependencies:["expo-camera","expo-face-detector"],mdxType:"SnackInline"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { Camera } from 'expo-camera';\nimport * as FaceDetector from 'expo-face-detector';\n\nconst App = () => (\n  <Camera\n    // other props\n    onFacesDetected={handleFacesDetected}\n    faceDetectorSettings={{\n      mode: FaceDetector.FaceDetectorMode.fast,\n      detectLandmarks: FaceDetector.FaceDetectorLandmarks.none,\n      runClassifications: FaceDetector.FaceDetectorClassifications.none,\n      minDetectionInterval: 100,\n      tracking: true,\n    }}\n  />\n);\n\n/* @hide const handleFacesDetected = ({ faces }) => { ... }; */\nconst handleFacesDetected = ({ faces }) => {\n  console.log(faces);\n};\n\nexport default App;\n/* @end */\n"))),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import * as FaceDetector from 'expo-face-detector';\n")),Object(o.b)(r.a,{packageName:"expo-face-detector",apiName:"FaceDetector",mdxType:"APISection"}))}f.isMDXComponent=!0}},[["ysj+",1,0,2,3,4,5,6,7,8,9,10,11,12,13,14]]]);