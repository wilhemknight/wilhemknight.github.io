_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[921],{"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n("q1tI"),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"===typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=p(n),s=a,h=u["".concat(b,".").concat(s)]||u[s]||d[s]||l;return n?r.a.createElement(h,o(o({ref:t},i),{},{components:n})):r.a.createElement(h,o({ref:t},i))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var l=n.length,b=new Array(l);b[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"===typeof e?e:a,b[1]=o;for(var i=2;i<l;i++)b[i]=n[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},HALo:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},PTda:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return o})),n.d(t,"headings",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n("HALo"),r=n("dhJC"),l=(n("q1tI"),n("7ljp")),b=["components"],o={id:"switch",title:"Switch"},c=[{depth:2,type:"text",title:"Example"},{depth:1,type:"text",title:"Reference"},{depth:2,type:"text",title:"Props"},{depth:3,type:"inlineCode",title:"disabled"},{depth:3,type:"inlineCode",title:"ios_backgroundColor"},{depth:3,type:"inlineCode",title:"onChange"},{depth:3,type:"inlineCode",title:"onValueChange"},{depth:3,type:"inlineCode",title:"thumbColor"},{depth:3,type:"inlineCode",title:"trackColor"},{depth:3,type:"inlineCode",title:"value"}],i={meta:o,headings:c};function p(e){var t=e.components,n=Object(r.a)(e,b);return Object(l.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Renders a boolean input."),Object(l.b)("p",null,"This is a controlled component that requires an ",Object(l.b)("inlineCode",{parentName:"p"},"onValueChange")," callback that updates the ",Object(l.b)("inlineCode",{parentName:"p"},"value")," prop in order for the component to reflect user actions. If the ",Object(l.b)("inlineCode",{parentName:"p"},"value")," prop is not updated, the component will continue to render the supplied ",Object(l.b)("inlineCode",{parentName:"p"},"value")," prop instead of the expected result of any user actions."),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"import React, { useState } from 'react';\nimport { View, Switch, StyleSheet } from 'react-native';\n\nexport default function App() {\n  const [isEnabled, setIsEnabled] = useState(false);\n  const toggleSwitch = () => setIsEnabled(previousState => !previousState);\n\n  return (\n    <View style={styles.container}>\n      <Switch\n        trackColor={{ false: '#767577', true: '#81b0ff' }}\n        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}\n        ios_backgroundColor=\"#3e3e3e\"\n        onValueChange={toggleSwitch}\n        value={isEnabled}\n      />\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n});\n")),Object(l.b)("hr",null),Object(l.b)("h1",{id:"reference"},"Reference"),Object(l.b)("h2",{id:"props"},"Props"),Object(l.b)("p",null,"Inherits ",Object(l.b)("a",{parentName:"p",href:"/versions/v42.0.0/react-native/view/#props"},"View Props"),"."),Object(l.b)("h3",{id:"disabled"},Object(l.b)("inlineCode",{parentName:"h3"},"disabled")),Object(l.b)("p",null,"If true the user won't be able to toggle the switch. Default value is false."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"ios_backgroundcolor"},Object(l.b)("inlineCode",{parentName:"h3"},"ios_backgroundColor")),Object(l.b)("p",null,"On iOS, custom color for the background. This background color can be seen either when the switch value is false or when the switch is disabled (and the switch is translucent)."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://reactnative.dev/docs/colors"},"color")),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onchange"},Object(l.b)("inlineCode",{parentName:"h3"},"onChange")),Object(l.b)("p",null,"Invoked when the user tries to change the value of the switch. Receives the change event as an argument. If you want to only receive the new value, use ",Object(l.b)("inlineCode",{parentName:"p"},"onValueChange")," instead."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onvaluechange"},Object(l.b)("inlineCode",{parentName:"h3"},"onValueChange")),Object(l.b)("p",null,"Invoked when the user tries to change the value of the switch. Receives the new value as an argument. If you want to instead receive an event, use ",Object(l.b)("inlineCode",{parentName:"p"},"onChange"),"."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"thumbcolor"},Object(l.b)("inlineCode",{parentName:"h3"},"thumbColor")),Object(l.b)("p",null,"Color of the foreground switch grip. If this is set on iOS, the switch grip will lose its drop shadow."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://reactnative.dev/docs/colors"},"color")),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"trackcolor"},Object(l.b)("inlineCode",{parentName:"h3"},"trackColor")),Object(l.b)("p",null,"Custom colors for the switch track."),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"iOS"),": When the switch value is false, the track shrinks into the border. If you want to change the color of the background exposed by the shrunken track, use ",Object(l.b)("a",{parentName:"p",href:"/versions/v42.0.0/react-native/switch/#ios_backgroundColor"},Object(l.b)("inlineCode",{parentName:"a"},"ios_backgroundColor")),"."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"object: {false: ",Object(l.b)("a",{parentName:"td",href:"https://reactnative.dev/docs/colors"},"color"),", true: ",Object(l.b)("a",{parentName:"td",href:"https://reactnative.dev/docs/colors"},"color"),"}"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"value"},Object(l.b)("inlineCode",{parentName:"h3"},"value")),Object(l.b)("p",null,"The value of the switch. If true the switch will be turned on. Default value is false."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null},"No")))))}p.isMDXComponent=!0},Qetd:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},dhJC:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,"a",(function(){return a}))},iauM:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v42.0.0/react-native/switch",function(){return n("PTda")}])}},[["iauM",1,0]]]);