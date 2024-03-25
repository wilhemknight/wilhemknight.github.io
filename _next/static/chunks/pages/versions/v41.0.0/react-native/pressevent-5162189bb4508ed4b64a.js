_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[752],{"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return j}));var a=n("q1tI"),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,j=u["".concat(l,".").concat(d)]||u[d]||O[d]||b;return n?r.a.createElement(j,i(i({ref:t},o),{},{components:n})):r.a.createElement(j,i({ref:t},o))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var b=n.length,l=new Array(b);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"===typeof e?e:a,l[1]=i;for(var o=2;o<b;o++)l[o]=n[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},D2oD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v41.0.0/react-native/pressevent",function(){return n("vxse")}])},HALo:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},Qetd:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},dhJC:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,"a",(function(){return a}))},vxse:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return i})),n.d(t,"headings",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n("HALo"),r=n("dhJC"),b=(n("q1tI"),n("7ljp")),l=["components"],i={id:"pressevent",title:"PressEvent"},c=[{depth:2,type:"text",title:"Example"},{depth:2,type:"text",title:"Keys and values"},{depth:3,type:"inlineCode",title:"changedTouches"},{depth:3,type:"inlineCode",title:"force   "},{depth:3,type:"inlineCode",title:"identifier"},{depth:3,type:"inlineCode",title:"locationX"},{depth:3,type:"inlineCode",title:"locationY"},{depth:3,type:"inlineCode",title:"pageX"},{depth:3,type:"inlineCode",title:"pageY"},{depth:3,type:"inlineCode",title:"target"},{depth:3,type:"inlineCode",title:"timestamp"},{depth:3,type:"inlineCode",title:"touches"},{depth:2,type:"text",title:"Used by"}],o={meta:i,headings:c};function p(e){var t=e.components,n=Object(r.a)(e,l);return Object(b.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"PressEvent")," object is returned in the callback as a result of user press interaction, for example ",Object(b.b)("inlineCode",{parentName:"p"},"onPress")," in ",Object(b.b)("a",{parentName:"p",href:"/versions/v41.0.0/react-native/button/"},"Button")," component."),Object(b.b)("h2",{id:"example"},"Example"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-js"},"{\n    changedTouches: [PressEvent],\n    identifier: 1,\n    locationX: 8,\n    locationY: 4.5,\n    pageX: 24,\n    pageY: 49.5,\n    target: 1127,\n    timestamp: 85131876.58868201,\n    touches: []\n}\n")),Object(b.b)("h2",{id:"keys-and-values"},"Keys and values"),Object(b.b)("h3",{id:"changedtouches"},Object(b.b)("inlineCode",{parentName:"h3"},"changedTouches")),Object(b.b)("p",null,"Array of all PressEvents that have changed since the last event."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Optional"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"array of PressEvents"),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("h3",{id:"force-ios"},Object(b.b)("inlineCode",{parentName:"h3"},"force")," ",Object(b.b)("strong",{parentName:"h3"},"(iOS)")),Object(b.b)("p",null,"Amount of force used during the 3D Touch press. Returns the float value in range from ",Object(b.b)("inlineCode",{parentName:"p"},"0.0")," to ",Object(b.b)("inlineCode",{parentName:"p"},"1.0"),"."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Optional"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"number"),Object(b.b)("td",{parentName:"tr",align:null},"Yes")))),Object(b.b)("h3",{id:"identifier"},Object(b.b)("inlineCode",{parentName:"h3"},"identifier")),Object(b.b)("p",null,"Unique numeric identifier assigned to the event."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Optional"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"number"),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("h3",{id:"locationx"},Object(b.b)("inlineCode",{parentName:"h3"},"locationX")),Object(b.b)("p",null,"Touch origin X coordinate inside touchable area (relative to the element)."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Optional"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"number"),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("h3",{id:"locationy"},Object(b.b)("inlineCode",{parentName:"h3"},"locationY")),Object(b.b)("p",null,"Touch origin Y coordinate inside touchable area (relative to the element)."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Optional"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"number"),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("h3",{id:"pagex"},Object(b.b)("inlineCode",{parentName:"h3"},"pageX")),Object(b.b)("p",null,"Touch origin X coordinate on the screen (relative to the root view)."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Optional"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"number"),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("h3",{id:"pagey"},Object(b.b)("inlineCode",{parentName:"h3"},"pageY")),Object(b.b)("p",null,"Touch origin Y coordinate on the screen (relative to the root view)."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Optional"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"number"),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("h3",{id:"target"},Object(b.b)("inlineCode",{parentName:"h3"},"target")),Object(b.b)("p",null,"The node id of the element receiving the PressEvent."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Optional"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"number, ",Object(b.b)("inlineCode",{parentName:"td"},"null"),", ",Object(b.b)("inlineCode",{parentName:"td"},"undefined")),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("h3",{id:"timestamp"},Object(b.b)("inlineCode",{parentName:"h3"},"timestamp")),Object(b.b)("p",null,"Timestamp value when a PressEvent occurred. Value is represented in milliseconds."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Optional"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"number"),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("h3",{id:"touches"},Object(b.b)("inlineCode",{parentName:"h3"},"touches")),Object(b.b)("p",null,"Array of all current PressEvents on the screen."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Optional"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"array of PressEvents"),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("h2",{id:"used-by"},"Used by"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/versions/v41.0.0/react-native/button/"},Object(b.b)("inlineCode",{parentName:"a"},"Button"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/versions/v41.0.0/react-native/panresponder/"},Object(b.b)("inlineCode",{parentName:"a"},"PanResponder"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/versions/v41.0.0/react-native/pressable/"},Object(b.b)("inlineCode",{parentName:"a"},"Pressable"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/versions/v41.0.0/react-native/scrollview/"},Object(b.b)("inlineCode",{parentName:"a"},"ScrollView"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/versions/v41.0.0/react-native/text/"},Object(b.b)("inlineCode",{parentName:"a"},"Text"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/versions/v41.0.0/react-native/textinput/"},Object(b.b)("inlineCode",{parentName:"a"},"TextInput"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/versions/v41.0.0/react-native/touchablenativefeedback/"},Object(b.b)("inlineCode",{parentName:"a"},"TouchableHighlight"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/versions/v41.0.0/react-native/touchablewithoutfeedback/"},Object(b.b)("inlineCode",{parentName:"a"},"TouchableOpacity"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/versions/v41.0.0/react-native/touchablenativefeedback/"},Object(b.b)("inlineCode",{parentName:"a"},"TouchableNativeFeedback"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/versions/v41.0.0/react-native/touchablewithoutfeedback/"},Object(b.b)("inlineCode",{parentName:"a"},"TouchableWithoutFeedback"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/versions/v41.0.0/react-native/view/"},Object(b.b)("inlineCode",{parentName:"a"},"View")))))}p.isMDXComponent=!0}},[["D2oD",1,0]]]);