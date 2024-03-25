_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[423],{"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n("q1tI"),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||O[d]||b;return n?r.a.createElement(m,i(i({ref:t},o),{},{components:n})):r.a.createElement(m,i({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var b=n.length,l=new Array(b);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"===typeof e?e:a,l[1]=i;for(var o=2;o<b;o++)l[o]=n[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},HALo:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},"J+HN":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/unversioned/react-native/layoutevent",function(){return n("RTEl")}])},Qetd:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},RTEl:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return i})),n.d(t,"headings",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n("HALo"),r=n("dhJC"),b=(n("q1tI"),n("7ljp")),l=["components"],i={id:"layoutevent",title:"LayoutEvent Object Type"},c=[{depth:2,type:"text",title:"Example"},{depth:2,type:"text",title:"Keys and values"},{depth:3,type:"inlineCode",title:"height"},{depth:3,type:"inlineCode",title:"width"},{depth:3,type:"inlineCode",title:"x"},{depth:3,type:"inlineCode",title:"y"},{depth:3,type:"inlineCode",title:"target"},{depth:2,type:"text",title:"Used by"}],o={meta:i,headings:c};function p(e){var t=e.components,n=Object(r.a)(e,l);return Object(b.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"LayoutEvent")," object is returned in the callback as a result of component layout change, for example ",Object(b.b)("inlineCode",{parentName:"p"},"onLayout")," in ",Object(b.b)("a",{parentName:"p",href:"/versions/unversioned/react-native/view/"},"View")," component."),Object(b.b)("h2",{id:"example"},"Example"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-js"},"{\n  layout: {\n    width: 520,\n    height: 70.5,\n    x: 0,\n    y: 42.5\n  },\n  target: 1127\n}\n")),Object(b.b)("h2",{id:"keys-and-values"},"Keys and values"),Object(b.b)("h3",{id:"height"},Object(b.b)("inlineCode",{parentName:"h3"},"height")),Object(b.b)("p",null,"Height of the component after the layout changes."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Optional"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"number"),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("h3",{id:"width"},Object(b.b)("inlineCode",{parentName:"h3"},"width")),Object(b.b)("p",null,"Width of the component after the layout changes."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Optional"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"number"),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("h3",{id:"x"},Object(b.b)("inlineCode",{parentName:"h3"},"x")),Object(b.b)("p",null,"Component X coordinate inside the parent component."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Optional"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"number"),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("h3",{id:"y"},Object(b.b)("inlineCode",{parentName:"h3"},"y")),Object(b.b)("p",null,"Component Y coordinate inside the parent component."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Optional"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"number"),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("h3",{id:"target"},Object(b.b)("inlineCode",{parentName:"h3"},"target")),Object(b.b)("p",null,"The node id of the element receiving the PressEvent."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Optional"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"number, ",Object(b.b)("inlineCode",{parentName:"td"},"null"),", ",Object(b.b)("inlineCode",{parentName:"td"},"undefined")),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("h2",{id:"used-by"},"Used by"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/versions/unversioned/react-native/image/"},Object(b.b)("inlineCode",{parentName:"a"},"Image"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/versions/unversioned/react-native/pressable/"},Object(b.b)("inlineCode",{parentName:"a"},"Pressable"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/versions/unversioned/react-native/scrollview/"},Object(b.b)("inlineCode",{parentName:"a"},"ScrollView"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/versions/unversioned/react-native/text/"},Object(b.b)("inlineCode",{parentName:"a"},"Text"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/versions/unversioned/react-native/textinput/"},Object(b.b)("inlineCode",{parentName:"a"},"TextInput"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/versions/unversioned/react-native/touchablewithoutfeedback/"},Object(b.b)("inlineCode",{parentName:"a"},"TouchableWithoutFeedback"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/versions/unversioned/react-native/view/"},Object(b.b)("inlineCode",{parentName:"a"},"View")))))}p.isMDXComponent=!0},dhJC:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,"a",(function(){return a}))}},[["J+HN",1,0]]]);