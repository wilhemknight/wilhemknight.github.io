_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[241],{"4jqA":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return i})),n.d(t,"headings",(function(){return c})),n.d(t,"default",(function(){return o}));var a=n("HALo"),l=n("dhJC"),r=(n("q1tI"),n("7ljp")),b=["components"],i={id:"animatedvalue",title:"Animated.Value"},c=[{depth:1,type:"text",title:"Reference"},{depth:2,type:"text",title:"Methods"},{depth:3,type:"inlineCode",title:"setValue()"},{depth:3,type:"inlineCode",title:"setOffset()"},{depth:3,type:"inlineCode",title:"flattenOffset()"},{depth:3,type:"inlineCode",title:"extractOffset()"},{depth:3,type:"inlineCode",title:"addListener()"},{depth:3,type:"inlineCode",title:"removeListener()"},{depth:3,type:"inlineCode",title:"removeAllListeners()"},{depth:3,type:"inlineCode",title:"stopAnimation()"},{depth:3,type:"inlineCode",title:"resetAnimation()"},{depth:3,type:"inlineCode",title:"interpolate()"},{depth:3,type:"inlineCode",title:"animate()"},{depth:3,type:"inlineCode",title:"stopTracking()"},{depth:3,type:"inlineCode",title:"track()"}],p={meta:i,headings:c};function o(e){var t=e.components,n=Object(l.a)(e,b);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Standard value for driving animations. One ",Object(r.b)("inlineCode",{parentName:"p"},"Animated.Value")," can drive multiple properties in a synchronized fashion, but can only be driven by one mechanism at a time. Using a new mechanism (e.g. starting a new animation, or calling ",Object(r.b)("inlineCode",{parentName:"p"},"setValue"),") will stop any previous ones."),Object(r.b)("p",null,"Typically initialized with ",Object(r.b)("inlineCode",{parentName:"p"},"new Animated.Value(0);")),Object(r.b)("hr",null),Object(r.b)("h1",{id:"reference"},"Reference"),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"setvalue"},Object(r.b)("inlineCode",{parentName:"h3"},"setValue()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"setValue(value);\n")),Object(r.b)("p",null,"Directly set the value. This will stop any animations running on the value and update all the bound properties."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"value"),Object(r.b)("td",{parentName:"tr",align:null},"number"),Object(r.b)("td",{parentName:"tr",align:null},"Yes"),Object(r.b)("td",{parentName:"tr",align:null},"Value")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setoffset"},Object(r.b)("inlineCode",{parentName:"h3"},"setOffset()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"setOffset(offset);\n")),Object(r.b)("p",null,"Sets an offset that is applied on top of whatever value is set, whether via ",Object(r.b)("inlineCode",{parentName:"p"},"setValue"),", an animation, or ",Object(r.b)("inlineCode",{parentName:"p"},"Animated.event"),". Useful for compensating things like the start of a pan gesture."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"offset"),Object(r.b)("td",{parentName:"tr",align:null},"number"),Object(r.b)("td",{parentName:"tr",align:null},"Yes"),Object(r.b)("td",{parentName:"tr",align:null},"Offset value")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"flattenoffset"},Object(r.b)("inlineCode",{parentName:"h3"},"flattenOffset()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"flattenOffset();\n")),Object(r.b)("p",null,"Merges the offset value into the base value and resets the offset to zero. The final output of the value is unchanged."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"extractoffset"},Object(r.b)("inlineCode",{parentName:"h3"},"extractOffset()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"extractOffset();\n")),Object(r.b)("p",null,"Sets the offset value to the base value, and resets the base value to zero. The final output of the value is unchanged."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"addlistener"},Object(r.b)("inlineCode",{parentName:"h3"},"addListener()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"addListener(callback);\n")),Object(r.b)("p",null,"Adds an asynchronous listener to the value so you can observe updates from animations. This is useful because there is no way to synchronously read the value because it might be driven natively."),Object(r.b)("p",null,"Returns a string that serves as an identifier for the listener."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"callback"),Object(r.b)("td",{parentName:"tr",align:null},"function"),Object(r.b)("td",{parentName:"tr",align:null},"Yes"),Object(r.b)("td",{parentName:"tr",align:null},"The callback function which will receive an object with a ",Object(r.b)("inlineCode",{parentName:"td"},"value")," key set to the new value.")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"removelistener"},Object(r.b)("inlineCode",{parentName:"h3"},"removeListener()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"removeListener(id);\n")),Object(r.b)("p",null,"Unregister a listener. The ",Object(r.b)("inlineCode",{parentName:"p"},"id")," param shall match the identifier previously returned by ",Object(r.b)("inlineCode",{parentName:"p"},"addListener()"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"id"),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Yes"),Object(r.b)("td",{parentName:"tr",align:null},"Id for the listener being removed.")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"removealllisteners"},Object(r.b)("inlineCode",{parentName:"h3"},"removeAllListeners()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"removeAllListeners();\n")),Object(r.b)("p",null,"Remove all registered listeners."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"stopanimation"},Object(r.b)("inlineCode",{parentName:"h3"},"stopAnimation()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"stopAnimation([callback]);\n")),Object(r.b)("p",null,"Stops any running animation or tracking. ",Object(r.b)("inlineCode",{parentName:"p"},"callback")," is invoked with the final value after stopping the animation, which is useful for updating state to match the animation position with layout."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"callback"),Object(r.b)("td",{parentName:"tr",align:null},"function"),Object(r.b)("td",{parentName:"tr",align:null},"No"),Object(r.b)("td",{parentName:"tr",align:null},"A function that will receive the final value.")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"resetanimation"},Object(r.b)("inlineCode",{parentName:"h3"},"resetAnimation()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"resetAnimation([callback]);\n")),Object(r.b)("p",null,"Stops any animation and resets the value to its original."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"callback"),Object(r.b)("td",{parentName:"tr",align:null},"function"),Object(r.b)("td",{parentName:"tr",align:null},"No"),Object(r.b)("td",{parentName:"tr",align:null},"A function that will receive the original value.")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"interpolate"},Object(r.b)("inlineCode",{parentName:"h3"},"interpolate()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"interpolate(config);\n")),Object(r.b)("p",null,"Interpolates the value before updating the property, e.g. mapping 0-1 to 0-10."),Object(r.b)("p",null,"See ",Object(r.b)("strong",{parentName:"p"},"AnimatedInterpolation.js")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"config"),Object(r.b)("td",{parentName:"tr",align:null},"object"),Object(r.b)("td",{parentName:"tr",align:null},"Yes"),Object(r.b)("td",{parentName:"tr",align:null},"See below.")))),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"config")," object is composed of the following keys:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"inputRange"),": an array of numbers"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"outputRange"),": an array of numbers or strings"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"easing")," (optional): a function that returns a number, given an input number"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"extrapolate")," (optional): a string such as 'extend', 'identity', or 'clamp'"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"extrapolateLeft")," (optional): a string such as 'extend', 'identity', or 'clamp'"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"extrapolateRight")," (optional): a string such as 'extend', 'identity', or 'clamp'")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"animate"},Object(r.b)("inlineCode",{parentName:"h3"},"animate()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"animate(animation, callback);\n")),Object(r.b)("p",null,"Typically only used internally, but could be used by a custom Animation class."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"animation"),Object(r.b)("td",{parentName:"tr",align:null},"Animation"),Object(r.b)("td",{parentName:"tr",align:null},"Yes"),Object(r.b)("td",{parentName:"tr",align:null},"See ",Object(r.b)("strong",{parentName:"td"},"Animation.js"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"callback"),Object(r.b)("td",{parentName:"tr",align:null},"function"),Object(r.b)("td",{parentName:"tr",align:null},"Yes"),Object(r.b)("td",{parentName:"tr",align:null},"Callback function.")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"stoptracking"},Object(r.b)("inlineCode",{parentName:"h3"},"stopTracking()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"stopTracking();\n")),Object(r.b)("p",null,"Typically only used internally."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"track"},Object(r.b)("inlineCode",{parentName:"h3"},"track()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"track(tracking);\n")),Object(r.b)("p",null,"Typically only used internally."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"tracking"),Object(r.b)("td",{parentName:"tr",align:null},"AnimatedNode"),Object(r.b)("td",{parentName:"tr",align:null},"Yes"),Object(r.b)("td",{parentName:"tr",align:null},"See ",Object(r.b)("strong",{parentName:"td"},"AnimatedNode.js"))))))}o.isMDXComponent=!0},"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var a=n("q1tI"),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=l.a.createContext({}),o=function(e){var t=l.a.useContext(p),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=o(e.components);return l.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},O=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,b=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=o(n),O=a,s=u["".concat(b,".").concat(O)]||u[O]||m[O]||r;return n?l.a.createElement(s,i(i({ref:t},p),{},{components:n})):l.a.createElement(s,i({ref:t},p))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var r=n.length,b=new Array(r);b[0]=O;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"===typeof e?e:a,b[1]=i;for(var p=2;p<r;p++)b[p]=n[p];return l.a.createElement.apply(null,b)}return l.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},GqyO:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/latest/react-native/animatedvalue",function(){return n("4jqA")}])},HALo:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},Qetd:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},dhJC:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}n.d(t,"a",(function(){return a}))}},[["GqyO",1,0]]]);