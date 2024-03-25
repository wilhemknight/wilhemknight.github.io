_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[1225],{"0fF0":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v44.0.0/react-native/layoutanimation",function(){return n("iwtJ")}])},"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n("q1tI"),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),c=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"===typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,d=s["".concat(o,".").concat(m)]||s[m]||u[m]||r;return n?i.a.createElement(d,l(l({ref:t},p),{},{components:n})):i.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"===typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},HALo:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},Qetd:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},dhJC:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}n.d(t,"a",(function(){return a}))},iwtJ:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return l})),n.d(t,"headings",(function(){return b})),n.d(t,"default",(function(){return c}));var a=n("HALo"),i=n("dhJC"),r=(n("q1tI"),n("7ljp")),o=["components"],l={id:"layoutanimation",title:"LayoutAnimation"},b=[{depth:2,type:"text",title:"Example"},{depth:1,type:"text",title:"Reference"},{depth:2,type:"text",title:"Methods"},{depth:3,type:"inlineCode",title:"configureNext()"},{depth:4,type:"text",title:"Parameters:"},{depth:3,type:"inlineCode",title:"create()"},{depth:2,type:"text",title:"Properties"},{depth:3,type:"text",title:"Types"},{depth:3,type:"text",title:"Properties"},{depth:3,type:"text",title:"Presets"},{depth:3,type:"inlineCode",title:"easeInEaseOut"},{depth:3,type:"inlineCode",title:"linear"},{depth:3,type:"inlineCode",title:"spring"}],p={meta:l,headings:b};function c(e){var t=e.components,n=Object(i.a)(e,o);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Automatically animates views to their new positions when the next layout happens."),Object(r.b)("p",null,"A common way to use this API is to call it before updating the state hook in functional components and calling ",Object(r.b)("inlineCode",{parentName:"p"},"setState")," in class components."),Object(r.b)("p",null,"Note that in order to get this to work on ",Object(r.b)("strong",{parentName:"p"},"Android")," you need to set the following flags via ",Object(r.b)("inlineCode",{parentName:"p"},"UIManager"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"if (Platform.OS === 'android') {\n  if (UIManager.setLayoutAnimationEnabledExperimental) {\n    UIManager.setLayoutAnimationEnabledExperimental(true);\n  }\n}\n")),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import React, { useState } from 'react';\nimport {\n  LayoutAnimation,\n  Platform,\n  StyleSheet,\n  Text,\n  TouchableOpacity,\n  UIManager,\n  View,\n} from 'react-native';\n\nif (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {\n  UIManager.setLayoutAnimationEnabledExperimental(true);\n}\nconst App = () => {\n  const [expanded, setExpanded] = useState(false);\n\n  return (\n    <View style={style.container}>\n      <TouchableOpacity\n        onPress={() => {\n          LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);\n          setExpanded(!expanded);\n        }}>\n        <Text>Press me to {expanded ? 'collapse' : 'expand'}!</Text>\n      </TouchableOpacity>\n      {expanded && (\n        <View style={style.tile}>\n          <Text>I disappear sometimes!</Text>\n        </View>\n      )}\n    </View>\n  );\n};\n\nconst style = StyleSheet.create({\n  tile: {\n    backgroundColor: 'lightgrey',\n    borderWidth: 0.5,\n    borderColor: '#d6d7da',\n  },\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center',\n    overflow: 'hidden',\n  },\n});\n\nexport default App;\n")),Object(r.b)("hr",null),Object(r.b)("h1",{id:"reference"},"Reference"),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"configurenext"},Object(r.b)("inlineCode",{parentName:"h3"},"configureNext()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"static configureNext(config, onAnimationDidEnd?, onAnimationDidFail?)\n")),Object(r.b)("p",null,"Schedules an animation to happen on the next layout."),Object(r.b)("h4",{id:"parameters"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"config"),Object(r.b)("td",{parentName:"tr",align:null},"object"),Object(r.b)("td",{parentName:"tr",align:null},"Yes"),Object(r.b)("td",{parentName:"tr",align:null},"See config description below.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"onAnimationDidEnd"),Object(r.b)("td",{parentName:"tr",align:null},"function"),Object(r.b)("td",{parentName:"tr",align:null},"No"),Object(r.b)("td",{parentName:"tr",align:null},"Called when the animation finished.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"onAnimationDidFail"),Object(r.b)("td",{parentName:"tr",align:null},"function"),Object(r.b)("td",{parentName:"tr",align:null},"No"),Object(r.b)("td",{parentName:"tr",align:null},"Called when the animation failed.")))),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"config")," parameter is an object with the keys below. ",Object(r.b)("a",{parentName:"p",href:"/versions/v44.0.0/react-native/layoutanimation/#create"},Object(r.b)("inlineCode",{parentName:"a"},"create"))," returns a valid object for ",Object(r.b)("inlineCode",{parentName:"p"},"config"),", and the ",Object(r.b)("a",{parentName:"p",href:"/versions/v44.0.0/react-native/layoutanimation/#presets"},Object(r.b)("inlineCode",{parentName:"a"},"Presets"))," objects can also all be passed as the ",Object(r.b)("inlineCode",{parentName:"p"},"config"),"."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"duration")," in milliseconds"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"create"),", optional config for animating in new views"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"update"),", optional config for animating views that have been updated"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"delete"),", optional config for animating views as they are removed")),Object(r.b)("p",null,"The config that's passed to ",Object(r.b)("inlineCode",{parentName:"p"},"create"),", ",Object(r.b)("inlineCode",{parentName:"p"},"update"),", or ",Object(r.b)("inlineCode",{parentName:"p"},"delete")," has the following keys:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"type"),", the ",Object(r.b)("a",{parentName:"li",href:"/versions/v44.0.0/react-native/layoutanimation/#types"},"animation type")," to use"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"property"),", the ",Object(r.b)("a",{parentName:"li",href:"/versions/v44.0.0/react-native/layoutanimation/#properties"},"layout property")," to animate (optional, but recommended for ",Object(r.b)("inlineCode",{parentName:"li"},"create")," and ",Object(r.b)("inlineCode",{parentName:"li"},"delete"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"springDamping")," (number, optional and only for use with ",Object(r.b)("inlineCode",{parentName:"li"},"type: Type.spring"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"initialVelocity")," (number, optional)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"delay")," (number, optional)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"duration")," (number, optional)")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"create"},Object(r.b)("inlineCode",{parentName:"h3"},"create()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"static create(duration, type, creationProp)\n")),Object(r.b)("p",null,"Helper that creates an object (with ",Object(r.b)("inlineCode",{parentName:"p"},"create"),", ",Object(r.b)("inlineCode",{parentName:"p"},"update"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"delete")," fields) to pass into ",Object(r.b)("a",{parentName:"p",href:"/versions/v44.0.0/react-native/layoutanimation/#configurenext"},Object(r.b)("inlineCode",{parentName:"a"},"configureNext")),". The ",Object(r.b)("inlineCode",{parentName:"p"},"type")," parameter is an ",Object(r.b)("a",{parentName:"p",href:"/versions/v44.0.0/react-native/layoutanimation/#types"},"animation type"),", and the ",Object(r.b)("inlineCode",{parentName:"p"},"creationProp")," parameter is a ",Object(r.b)("a",{parentName:"p",href:"/versions/v44.0.0/react-native/layoutanimation/#properties"},"layout property"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import React, { useState } from 'react';\nimport { View, Platform, UIManager, LayoutAnimation, StyleSheet, Button } from 'react-native';\n\nif (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {\n  UIManager.setLayoutAnimationEnabledExperimental(true);\n}\n\nconst App = () => {\n  const [boxPosition, setBoxPosition] = useState('left');\n\n  const toggleBox = () => {\n    LayoutAnimation.configureNext(\n      LayoutAnimation.create(500, LayoutAnimation.Types.spring, LayoutAnimation.Properties.scaleXY)\n    );\n    setBoxPosition(boxPosition === 'left' ? 'right' : 'left');\n  };\n\n  return (\n    <View style={styles.container}>\n      <View style={styles.buttonContainer}>\n        <Button title=\"Toggle Layout\" onPress={toggleBox} />\n      </View>\n      <View style={[styles.box, boxPosition === 'left' ? null : styles.moveRight]} />\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'flex-start',\n    justifyContent: 'center',\n  },\n  box: {\n    height: 100,\n    width: 100,\n    borderRadius: 5,\n    margin: 8,\n    backgroundColor: 'blue',\n  },\n  moveRight: {\n    alignSelf: 'flex-end',\n    height: 200,\n    width: 200,\n  },\n  buttonContainer: {\n    alignSelf: 'center',\n  },\n});\n\nexport default App;\n")),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)("h3",{id:"types"},"Types"),Object(r.b)("p",null,"An enumeration of animation types to be used in the ",Object(r.b)("a",{parentName:"p",href:"/versions/v44.0.0/react-native/layoutanimation/#create"},Object(r.b)("inlineCode",{parentName:"a"},"create"))," method, or in the ",Object(r.b)("inlineCode",{parentName:"p"},"create"),"/",Object(r.b)("inlineCode",{parentName:"p"},"update"),"/",Object(r.b)("inlineCode",{parentName:"p"},"delete")," configs for ",Object(r.b)("a",{parentName:"p",href:"/versions/v44.0.0/react-native/layoutanimation/#configurenext"},Object(r.b)("inlineCode",{parentName:"a"},"configureNext")),". (example usage: ",Object(r.b)("inlineCode",{parentName:"p"},"LayoutAnimation.Types.easeIn"),")"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Types"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"spring")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"linear")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"easeInEaseOut")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"easeIn")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"easeOut")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"keyboard")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"properties-1"},"Properties"),Object(r.b)("p",null,"An enumeration of layout properties to be animated to be used in the ",Object(r.b)("a",{parentName:"p",href:"/versions/v44.0.0/react-native/layoutanimation/#create"},Object(r.b)("inlineCode",{parentName:"a"},"create"))," method, or in the ",Object(r.b)("inlineCode",{parentName:"p"},"create"),"/",Object(r.b)("inlineCode",{parentName:"p"},"update"),"/",Object(r.b)("inlineCode",{parentName:"p"},"delete")," configs for ",Object(r.b)("a",{parentName:"p",href:"/versions/v44.0.0/react-native/layoutanimation/#configurenext"},Object(r.b)("inlineCode",{parentName:"a"},"configureNext")),". (example usage: ",Object(r.b)("inlineCode",{parentName:"p"},"LayoutAnimation.Properties.opacity"),")"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Properties"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"opacity")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"scaleX")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"scaleY")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"scaleXY")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"presets"},"Presets"),Object(r.b)("p",null,"A set of predefined animation configs to pass into ",Object(r.b)("a",{parentName:"p",href:"/versions/v44.0.0/react-native/layoutanimation/#configurenext"},Object(r.b)("inlineCode",{parentName:"a"},"configureNext")),"."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Presets"),Object(r.b)("th",{parentName:"tr",align:null},"Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"easeInEaseOut"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"create(300, 'easeInEaseOut', 'opacity')"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"linear"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"create(500, 'linear', 'opacity')"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"spring"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"{ duration: 700, create: { type: 'linear', property: 'opacity' }, update: { type: 'spring', springDamping: 0.4 }, delete: { type: 'linear', property: 'opacity' } }"))))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"easeineaseout"},Object(r.b)("inlineCode",{parentName:"h3"},"easeInEaseOut")),Object(r.b)("p",null,"Calls ",Object(r.b)("inlineCode",{parentName:"p"},"configureNext()")," with ",Object(r.b)("inlineCode",{parentName:"p"},"Presets.easeInEaseOut"),"."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"linear"},Object(r.b)("inlineCode",{parentName:"h3"},"linear")),Object(r.b)("p",null,"Calls ",Object(r.b)("inlineCode",{parentName:"p"},"configureNext()")," with ",Object(r.b)("inlineCode",{parentName:"p"},"Presets.linear"),"."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"spring"},Object(r.b)("inlineCode",{parentName:"h3"},"spring")),Object(r.b)("p",null,"Calls ",Object(r.b)("inlineCode",{parentName:"p"},"configureNext()")," with ",Object(r.b)("inlineCode",{parentName:"p"},"Presets.spring"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import React, { useState } from 'react';\nimport { View, Platform, UIManager, LayoutAnimation, StyleSheet, Button } from 'react-native';\n\nif (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {\n  UIManager.setLayoutAnimationEnabledExperimental(true);\n}\n\nconst App = () => {\n  const [firstBoxPosition, setFirstBoxPosition] = useState('left');\n  const [secondBoxPosition, setSecondBoxPosition] = useState('left');\n  const [thirdBoxPosition, setThirdBoxPosition] = useState('left');\n\n  const toggleFirstBox = () => {\n    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);\n    setFirstBoxPosition(firstBoxPosition === 'left' ? 'right' : 'left');\n  };\n\n  const toggleSecondBox = () => {\n    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);\n    setSecondBoxPosition(secondBoxPosition === 'left' ? 'right' : 'left');\n  };\n\n  const toggleThirdBox = () => {\n    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);\n    setThirdBoxPosition(thirdBoxPosition === 'left' ? 'right' : 'left');\n  };\n\n  return (\n    <View style={styles.container}>\n      <View style={styles.buttonContainer}>\n        <Button title=\"EaseInEaseOut\" onPress={toggleFirstBox} />\n      </View>\n      <View style={[styles.box, firstBoxPosition === 'left' ? null : styles.moveRight]} />\n      <View style={styles.buttonContainer}>\n        <Button title=\"Linear\" onPress={toggleSecondBox} />\n      </View>\n      <View style={[styles.box, secondBoxPosition === 'left' ? null : styles.moveRight]} />\n      <View style={styles.buttonContainer}>\n        <Button title=\"Spring\" onPress={toggleThirdBox} />\n      </View>\n      <View style={[styles.box, thirdBoxPosition === 'left' ? null : styles.moveRight]} />\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'flex-start',\n    justifyContent: 'center',\n  },\n  box: {\n    height: 100,\n    width: 100,\n    borderRadius: 5,\n    margin: 8,\n    backgroundColor: 'blue',\n  },\n  moveRight: {\n    alignSelf: 'flex-end',\n  },\n  buttonContainer: {\n    alignSelf: 'center',\n  },\n});\n\nexport default App;\n")))}c.isMDXComponent=!0}},[["0fF0",1,0]]]);