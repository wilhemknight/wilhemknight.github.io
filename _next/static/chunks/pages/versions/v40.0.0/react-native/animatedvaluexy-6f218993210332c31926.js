_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[567],{"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n("q1tI"),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,d=s["".concat(b,".").concat(m)]||s[m]||u[m]||l;return n?r.a.createElement(d,i(i({ref:t},o),{},{components:n})):r.a.createElement(d,i({ref:t},o))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var l=n.length,b=new Array(l);b[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"===typeof e?e:a,b[1]=i;for(var o=2;o<l;o++)b[o]=n[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},B3GQ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v40.0.0/react-native/animatedvaluexy",function(){return n("ulfs")}])},HALo:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},Qetd:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},dhJC:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,"a",(function(){return a}))},ulfs:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return i})),n.d(t,"headings",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n("HALo"),r=n("dhJC"),l=(n("q1tI"),n("7ljp")),b=["components"],i={id:"animatedvaluexy",title:"Animated.ValueXY"},c=[{depth:2,type:"text",title:"Example"},{depth:1,type:"text",title:"Reference"},{depth:2,type:"text",title:"Methods"},{depth:3,type:"inlineCode",title:"setValue()"},{depth:3,type:"inlineCode",title:"setOffset()"},{depth:3,type:"inlineCode",title:"flattenOffset()"},{depth:3,type:"inlineCode",title:"extractOffset()"},{depth:3,type:"inlineCode",title:"addListener()"},{depth:3,type:"inlineCode",title:"removeListener()"},{depth:3,type:"inlineCode",title:"removeAllListeners()"},{depth:3,type:"inlineCode",title:"stopAnimation()"},{depth:3,type:"inlineCode",title:"resetAnimation()"},{depth:3,type:"inlineCode",title:"getLayout()"},{depth:3,type:"inlineCode",title:"getTranslateTransform()"}],o={meta:i,headings:c};function p(e){var t=e.components,n=Object(r.a)(e,b);return Object(l.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"2D Value for driving 2D animations, such as pan gestures. Almost identical API to normal ",Object(l.b)("a",{parentName:"p",href:"/versions/v40.0.0/react-native/animatedvalue/"},Object(l.b)("inlineCode",{parentName:"a"},"Animated.Value")),", but multiplexed. Contains two regular ",Object(l.b)("inlineCode",{parentName:"p"},"Animated.Value"),"s under the hood."),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"import React, { useRef } from 'react';\nimport { Animated, PanResponder, StyleSheet, View } from 'react-native';\n\nconst DraggableView = () => {\n  const pan = useRef(new Animated.ValueXY()).current;\n\n  const panResponder = PanResponder.create({\n    onStartShouldSetPanResponder: () => true,\n    onPanResponderMove: Animated.event([\n      null,\n      {\n        dx: pan.x, // x,y are Animated.Value\n        dy: pan.y,\n      },\n    ]),\n    onPanResponderRelease: () => {\n      Animated.spring(\n        pan, // Auto-multiplexed\n        { toValue: { x: 0, y: 0 } } // Back to zero\n      ).start();\n    },\n  });\n\n  return (\n    <View style={styles.container}>\n      <Animated.View {...panResponder.panHandlers} style={[pan.getLayout(), styles.box]} />\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center',\n  },\n  box: {\n    backgroundColor: '#61dafb',\n    width: 80,\n    height: 80,\n    borderRadius: 4,\n  },\n});\n\nexport default DraggableView;\n")),Object(l.b)("hr",null),Object(l.b)("h1",{id:"reference"},"Reference"),Object(l.b)("h2",{id:"methods"},"Methods"),Object(l.b)("h3",{id:"setvalue"},Object(l.b)("inlineCode",{parentName:"h3"},"setValue()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"setValue(value);\n")),Object(l.b)("p",null,"Directly set the value. This will stop any animations running on the value and update all the bound properties."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"value"),Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"Value")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"setoffset"},Object(l.b)("inlineCode",{parentName:"h3"},"setOffset()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"setOffset(offset);\n")),Object(l.b)("p",null,"Sets an offset that is applied on top of whatever value is set, whether via ",Object(l.b)("inlineCode",{parentName:"p"},"setValue"),", an animation, or ",Object(l.b)("inlineCode",{parentName:"p"},"Animated.event"),". Useful for compensating things like the start of a pan gesture."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"offset"),Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"Offset value")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"flattenoffset"},Object(l.b)("inlineCode",{parentName:"h3"},"flattenOffset()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"flattenOffset();\n")),Object(l.b)("p",null,"Merges the offset value into the base value and resets the offset to zero. The final output of the value is unchanged."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"extractoffset"},Object(l.b)("inlineCode",{parentName:"h3"},"extractOffset()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"extractOffset();\n")),Object(l.b)("p",null,"Sets the offset value to the base value, and resets the base value to zero. The final output of the value is unchanged."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"addlistener"},Object(l.b)("inlineCode",{parentName:"h3"},"addListener()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"addListener(callback);\n")),Object(l.b)("p",null,"Adds an asynchronous listener to the value so you can observe updates from animations. This is useful because there is no way to synchronously read the value because it might be driven natively."),Object(l.b)("p",null,"Returns a string that serves as an identifier for the listener."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"callback"),Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"The callback function which will receive an object with a ",Object(l.b)("inlineCode",{parentName:"td"},"value")," key set to the new value.")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"removelistener"},Object(l.b)("inlineCode",{parentName:"h3"},"removeListener()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"removeListener(id);\n")),Object(l.b)("p",null,"Unregister a listener. The ",Object(l.b)("inlineCode",{parentName:"p"},"id")," param shall match the identifier previously returned by ",Object(l.b)("inlineCode",{parentName:"p"},"addListener()"),"."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"id"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"Id for the listener being removed.")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"removealllisteners"},Object(l.b)("inlineCode",{parentName:"h3"},"removeAllListeners()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"removeAllListeners();\n")),Object(l.b)("p",null,"Remove all registered listeners."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"stopanimation"},Object(l.b)("inlineCode",{parentName:"h3"},"stopAnimation()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"stopAnimation([callback]);\n")),Object(l.b)("p",null,"Stops any running animation or tracking. ",Object(l.b)("inlineCode",{parentName:"p"},"callback")," is invoked with the final value after stopping the animation, which is useful for updating state to match the animation position with layout."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"callback"),Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"A function that will receive the final value.")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"resetanimation"},Object(l.b)("inlineCode",{parentName:"h3"},"resetAnimation()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"resetAnimation([callback]);\n")),Object(l.b)("p",null,"Stops any animation and resets the value to its original."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"callback"),Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"A function that will receive the original value.")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"getlayout"},Object(l.b)("inlineCode",{parentName:"h3"},"getLayout()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"getLayout();\n")),Object(l.b)("p",null,"Converts ",Object(l.b)("inlineCode",{parentName:"p"},"{x, y}")," into ",Object(l.b)("inlineCode",{parentName:"p"},"{left, top}")," for use in style, e.g."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"style={this.state.anim.getLayout()}\n")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"gettranslatetransform"},Object(l.b)("inlineCode",{parentName:"h3"},"getTranslateTransform()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"getTranslateTransform();\n")),Object(l.b)("p",null,"Converts ",Object(l.b)("inlineCode",{parentName:"p"},"{x, y}")," into a useable translation transform, e.g."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"style={{\n  transform: this.state.anim.getTranslateTransform()\n}}\n")))}p.isMDXComponent=!0}},[["B3GQ",1,0]]]);