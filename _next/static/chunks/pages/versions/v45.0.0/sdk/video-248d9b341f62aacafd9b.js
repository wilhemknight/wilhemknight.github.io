_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[1518],{"3mXr":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return b})),n.d(t,"headings",(function(){return d})),n.d(t,"default",(function(){return m}));var a=n("HALo"),i=n("dhJC"),o=(n("q1tI"),n("7ljp")),c=n("3Ukx"),r=n("HCau"),s=n("hykZ"),p=n("I0q5"),l=["components"],b={title:"Video",sourceCodeUrl:"https://github.com/expo/expo/tree/sdk-45/packages/expo-av",packageName:"expo-av"},d=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"Usage"},{depth:2,type:"text",title:"API"},{depth:2,type:"text",title:"Unified API"}],u={meta:b,headings:d};function m(e){var t=e.components,n=Object(i.a)(e,l);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Video")," component from ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"expo-av"))," displays a video inline with the other UI elements in your app."),Object(o.b)("p",null,"Much of Video and Audio have common APIs that are documented in ",Object(o.b)("a",{parentName:"p",href:"/versions/v45.0.0/sdk/av/"},"AV documentation"),". This page covers video-specific props and APIs. We encourage you to skim through this document to get basic video working, and then move on to ",Object(o.b)("a",{parentName:"p",href:"/versions/v45.0.0/sdk/av/"},"AV documentation")," for more advanced functionality. The audio experience of video (such as whether to interrupt music already playing in another app, or whether to play sound while the phone is on silent mode) can be customized using the ",Object(o.b)("a",{parentName:"p",href:"/versions/v45.0.0/sdk/audio/"},"Audio API"),"."),Object(o.b)(s.a,{android:!0,emulator:!0,ios:!0,simulator:!0,web:!0,mdxType:"PlatformsSection"}),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)(r.a,{mdxType:"APIInstallSection"}),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"Here's a simple example of a video with a play/pause button."),Object(o.b)(p.a,{label:"Video",dependencies:["expo-av","expo-asset"],mdxType:"SnackInline"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"import * as React from 'react';\nimport { View, StyleSheet, Button } from 'react-native';\nimport { Video, AVPlaybackStatus } from 'expo-av';\n\nexport default function App() {\n  const video = React.useRef(null);\n  const [status, setStatus] = React.useState({});\n  return (\n    <View style={styles.container}>\n      <Video\n        ref={video}\n        style={styles.video}\n        source={{\n          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',\n        }}\n        useNativeControls\n        resizeMode=\"contain\"\n        isLooping\n        onPlaybackStatusUpdate={status => setStatus(() => status)}\n      />\n      <View style={styles.buttons}>\n        <Button\n          title={status.isPlaying ? 'Pause' : 'Play'}\n          onPress={() =>\n            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()\n          }\n        />\n      </View>\n    </View>\n  );\n}\n\n/* @hide const styles = StyleSheet.create({ ... }); */\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    backgroundColor: '#ecf0f1',\n  },\n  video: {\n    alignSelf: 'center',\n    width: 320,\n    height: 200,\n  },\n  buttons: {\n    flexDirection: 'row',\n    justifyContent: 'center',\n    alignItems: 'center',\n  },\n});\n/* @end */\n"))),Object(o.b)("p",null,"For more advanced examples, check out the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/expo/playlist-example/blob/master/App.js"},"Playlist example"),", and the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ihmpavel/expo-video-player/blob/master/lib/index.tsx"},"custom ",Object(o.b)("inlineCode",{parentName:"a"},"VideoPlayer")," controls component")," that wraps ",Object(o.b)("inlineCode",{parentName:"p"},"<Video>"),", adds custom controls and use the ",Object(o.b)("inlineCode",{parentName:"p"},"<Video>")," API extensively. The ",Object(o.b)("inlineCode",{parentName:"p"},"VideoPlayer")," controls is used in ",Object(o.b)("a",{parentName:"p",href:"https://github.com/expo/harvard-cs50-app"},"this app"),"."),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { Video } from 'expo-av';\n")),Object(o.b)(c.a,{packageName:"expo-video",apiName:"Video",strictTypes:!0,mdxType:"APISection"}),Object(o.b)("h2",{id:"unified-api"},"Unified API"),Object(o.b)("p",null,"The rest of the API on the ",Object(o.b)("inlineCode",{parentName:"p"},"Video")," component ",Object(o.b)("inlineCode",{parentName:"p"},"ref")," is the same as the API for ",Object(o.b)("inlineCode",{parentName:"p"},"Audio.Sound")," - see the ",Object(o.b)("a",{parentName:"p",href:"/versions/v45.0.0/sdk/av/#playback-api"},"AV documentation")," for further information:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"videoRef.loadAsync(source, initialStatus = {}, downloadFirst = true)"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"videoRef.unloadAsync()"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"videoRef.getStatusAsync()"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"videoRef.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate)"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"videoRef.setStatusAsync(statusToSet)"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"videoRef.playAsync()"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"videoRef.replayAsync()"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"videoRef.pauseAsync()"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"videoRef.stopAsync()"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"videoRef.setPositionAsync(millis)"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"videoRef.setRateAsync(value, shouldCorrectPitch, pitchCorrectionQuality)"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"videoRef.setVolumeAsync(value)"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"videoRef.setIsMutedAsync(value)"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"videoRef.setIsLoopingAsync(value)"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"videoRef.setProgressUpdateIntervalAsync(millis)")))))}m.isMDXComponent=!0},I0q5:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var a=n("z7pX"),i=n("H+61"),o=n("UlJF"),c=n("+Css"),r=n("7LId"),s=n("VIvw"),p=n("iHvq"),l=n("cpVT"),b=n("q1tI"),d=n("ufKf"),u=n("3zh3"),m=n("AeFk"),j=function(e){var t=e.size,n=void 0===t?24:t,a=e.stroke,i=void 0===a?u.palette.dark.white:a;return Object(m.c)("svg",{"aria-label":"check",width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(m.c)("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))},h=n("5BX9");function O(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(p.a)(e);if(t){var i=Object(p.a)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return Object(s.a)(this,n)}}var f="v".concat(n("kiQV").version),v=function(e){Object(r.a)(n,e);var t=O(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return e=t.call.apply(t,[this].concat(r)),Object(l.a)(Object(c.a)(e),"contentRef",b.createRef()),Object(l.a)(Object(c.a)(e),"state",{ready:!1}),Object(l.a)(Object(c.a)(e),"getSelectedDocsVersion",(function(){var t=e.context.version;return"latest"===t?f:t})),Object(l.a)(Object(c.a)(e),"getSnackSdkVersion",(function(){var t=e.getSelectedDocsVersion();return"unversioned"===t&&(t=f),t.replace("v","")})),Object(l.a)(Object(c.a)(e),"getExamplesPath",(function(){return"".concat(document.location.origin,"/static/examples/").concat(e.getSelectedDocsVersion())})),Object(l.a)(Object(c.a)(e),"getDependencies",(function(){return Object(a.a)(e.props.dependencies).join(",")})),Object(l.a)(Object(c.a)(e),"getCode",(function(){return(e.contentRef.current&&e.contentRef.current.textContent||"").replace(/%%placeholder-start%%.*%%placeholder-end%%/g,"")})),e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.setState({ready:!0})}},{key:"render",value:function(){return Object(m.c)("div",null,Object(m.c)("div",{ref:this.contentRef,style:this.props.contentHidden?{display:"none"}:void 0},this.props.children),Object(m.c)("form",{action:d.a,method:"POST",target:"_blank"},Object(m.c)("input",{type:"hidden",name:"platform",value:this.props.defaultPlatform||"android"}),Object(m.c)("input",{type:"hidden",name:"name",value:this.props.label||"Example"}),Object(m.c)("input",{type:"hidden",name:"dependencies",value:this.getDependencies()}),Object(m.c)("input",{type:"hidden",name:"sdkVersion",value:this.getSnackSdkVersion()}),this.props.platforms&&Object(m.c)("input",{type:"hidden",name:"supportedPlatforms",value:this.props.platforms.join(",")}),this.state.ready&&Object(m.c)("input",{type:"hidden",name:"files",value:JSON.stringify(Object(d.b)({templateId:this.props.templateId,code:this.getCode(),files:this.props.files,baseURL:this.getExamplesPath()}))}),Object(m.c)("button",{className:"snack-inline-example-button",disabled:!this.state.ready},Object(m.c)(j,{size:16})," ",this.props.buttonTitle||"Try this example on Snack")))}}]),n}(b.Component);Object(l.a)(v,"contextType",h.a),Object(l.a)(v,"defaultProps",{dependencies:[]})},Ku24:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v45.0.0/sdk/video",function(){return n("3mXr")}])},ufKf:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));var a="https://snack.expo.dev";function i(e){var t=e.templateId,n=e.code,a=e.files,i=e.baseURL,o={};return a&&Object.keys(a).forEach((function(e){var t=a[e],n=/\.(jsx?|tsx?|json|md)$/i.test(e);o[e]=n?{type:"CODE",url:t.match(/^https?:\/\//)?t:"".concat(i,"/").concat(t)}:{type:"ASSET",contents:t}})),t?o["App.js"]={type:"CODE",url:"".concat(i,"/").concat(t,".js")}:n&&(o["App.js"]={type:"CODE",contents:n}),o}}},[["Ku24",1,0,2,3,4,5,6,7,8,9,10,11,12,13,14]]]);