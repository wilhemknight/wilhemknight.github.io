_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[426],{"+GJW":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return o})),n.d(t,"headings",(function(){return c})),n.d(t,"default",(function(){return u}));var i=n("HALo"),a=n("dhJC"),r=(n("q1tI"),n("7ljp")),l=["components"],o={id:"pixelratio",title:"PixelRatio"},c=[{depth:2,type:"text",title:"Fetching a correctly sized image"},{depth:2,type:"text",title:"Pixel grid snapping"},{depth:2,type:"text",title:"Example"},{depth:1,type:"text",title:"Reference"},{depth:2,type:"text",title:"Methods"},{depth:3,type:"inlineCode",title:"get()"},{depth:3,type:"inlineCode",title:"getFontScale()"},{depth:3,type:"inlineCode",title:"getPixelSizeForLayoutSize()"},{depth:3,type:"inlineCode",title:"roundToNearestPixel()"}],s={meta:o,headings:c};function u(e){var t=e.components,n=Object(a.a)(e,l);return Object(r.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"PixelRatio")," gives you access to the device's pixel density and font scale."),Object(r.b)("h2",{id:"fetching-a-correctly-sized-image"},"Fetching a correctly sized image"),Object(r.b)("p",null,"You should get a higher resolution image if you are on a high pixel density device. A good rule of thumb is to multiply the size of the image you display by the pixel ratio."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"var image = getImage({\n  width: PixelRatio.getPixelSizeForLayoutSize(200),\n  height: PixelRatio.getPixelSizeForLayoutSize(100),\n});\n<Image source={image} style={{ width: 200, height: 100 }} />;\n")),Object(r.b)("h2",{id:"pixel-grid-snapping"},"Pixel grid snapping"),Object(r.b)("p",null,"In iOS, you can specify positions and dimensions for elements with arbitrary precision, for example 29.674825. But, ultimately the physical display only have a fixed number of pixels, for example 640\xd71136 for iPhone SE (1st generation) or 828\xd71792 for iPhone 11. iOS tries to be as faithful as possible to the user value by spreading one original pixel into multiple ones to trick the eye. The downside of this technique is that it makes the resulting element look blurry."),Object(r.b)("p",null,"In practice, we found out that developers do not want this feature and they have to work around it by doing manual rounding in order to avoid having blurry elements. In React Native, we are rounding all the pixels automatically."),Object(r.b)("p",null,"We have to be careful when to do this rounding. You never want to work with rounded and unrounded values at the same time as you're going to accumulate rounding errors. Having even one rounding error is deadly because a one pixel border may vanish or be twice as big."),Object(r.b)("p",null,"In React Native, everything in JavaScript and within the layout engine works with arbitrary precision numbers. It's only when we set the position and dimensions of the native element on the main thread that we round. Also, rounding is done relative to the root rather than the parent, again to avoid accumulating rounding errors."),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { Image, PixelRatio, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';\n\nconst size = 50;\nconst cat = {\n  uri: 'https://reactnative.dev/docs/assets/p_cat1.png',\n  width: size,\n  height: size,\n};\n\nconst App = () => (\n  <ScrollView style={styles.scrollContainer}>\n    <View style={styles.container}>\n      <Text>Current Pixel Ratio is:</Text>\n      <Text style={styles.value}>{PixelRatio.get()}</Text>\n    </View>\n    <View style={styles.container}>\n      <Text>Current Font Scale is:</Text>\n      <Text style={styles.value}>{PixelRatio.getFontScale()}</Text>\n    </View>\n    <View style={styles.container}>\n      <Text>On this device images with a layout width of</Text>\n      <Text style={styles.value}>{size} px</Text>\n      <Image source={cat} />\n    </View>\n    <View style={styles.container}>\n      <Text>require images with a pixel width of</Text>\n      <Text style={styles.value}>{PixelRatio.getPixelSizeForLayoutSize(size)} px</Text>\n      <Image\n        source={cat}\n        style={{\n          width: PixelRatio.getPixelSizeForLayoutSize(size),\n          height: PixelRatio.getPixelSizeForLayoutSize(size),\n        }}\n      />\n    </View>\n  </ScrollView>\n);\n\nconst styles = StyleSheet.create({\n  scrollContainer: {\n    flext: 1,\n    marginTop: '2em',\n    justifyContent: 'center',\n  },\n  container: {\n    justifyContent: 'center',\n    alignItems: 'center',\n  },\n  value: {\n    fontSize: 24,\n    marginBottom: 12,\n    marginTop: 4,\n  },\n});\n\nexport default App;\n")),Object(r.b)("hr",null),Object(r.b)("h1",{id:"reference"},"Reference"),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"get"},Object(r.b)("inlineCode",{parentName:"h3"},"get()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"static get()\n")),Object(r.b)("p",null,"Returns the device pixel density. Some examples:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PixelRatio.get() === 1"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://material.io/tools/devices/"},"mdpi Android devices")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PixelRatio.get() === 1.5"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://material.io/tools/devices/"},"hdpi Android devices")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PixelRatio.get() === 2"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"iPhone SE, 6S, 7, 8"),Object(r.b)("li",{parentName:"ul"},"iPhone XR"),Object(r.b)("li",{parentName:"ul"},"iPhone 11"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://material.io/tools/devices/"},"xhdpi Android devices")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PixelRatio.get() === 3"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"iPhone 6S Plus, 7 Plus, 8 Plus"),Object(r.b)("li",{parentName:"ul"},"iPhone X, XS, XS Max"),Object(r.b)("li",{parentName:"ul"},"iPhone 11 Pro, 11 Pro Max"),Object(r.b)("li",{parentName:"ul"},"Pixel, Pixel 2"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://material.io/tools/devices/"},"xxhdpi Android devices")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PixelRatio.get() === 3.5"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Nexus 6"),Object(r.b)("li",{parentName:"ul"},"Pixel XL, Pixel 2 XL"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://material.io/tools/devices/"},"xxxhdpi Android devices"))))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getfontscale"},Object(r.b)("inlineCode",{parentName:"h3"},"getFontScale()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"static getFontScale(): number\n")),Object(r.b)("p",null,"Returns the scaling factor for font sizes. This is the ratio that is used to calculate the absolute font size, so any elements that heavily depend on that should use this to do calculations."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"on Android value reflects the user preference set in ",Object(r.b)("strong",{parentName:"li"},"Settings > Display > Font size")),Object(r.b)("li",{parentName:"ul"},"on iOS value reflects the user preference set in ",Object(r.b)("strong",{parentName:"li"},"Settings > Display & Brightness > Text Size"),", value can also be updated in ",Object(r.b)("strong",{parentName:"li"},"Settings > Accessibility > Display & Text Size > Larger Text"))),Object(r.b)("p",null,"If a font scale is not set, this returns the device pixel ratio."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getpixelsizeforlayoutsize"},Object(r.b)("inlineCode",{parentName:"h3"},"getPixelSizeForLayoutSize()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"static getPixelSizeForLayoutSize(layoutSize: number): number\n")),Object(r.b)("p",null,"Converts a layout size (dp) to pixel size (px)."),Object(r.b)("p",null,"Guaranteed to return an integer number."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"roundtonearestpixel"},Object(r.b)("inlineCode",{parentName:"h3"},"roundToNearestPixel()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"static roundToNearestPixel(layoutSize: number): number\n")),Object(r.b)("p",null,"Rounds a layout size (dp) to the nearest layout size that corresponds to an integer number of pixels. For example, on a device with a PixelRatio of 3, ",Object(r.b)("inlineCode",{parentName:"p"},"PixelRatio.roundToNearestPixel(8.4) = 8.33"),", which corresponds to exactly (8.33 ","*"," 3) = 25 pixels."))}u.isMDXComponent=!0},"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var i=n("q1tI"),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"===typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,h=p["".concat(l,".").concat(d)]||p[d]||b[d]||r;return n?a.a.createElement(h,o(o({ref:t},s),{},{components:n})):a.a.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"===typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"===typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},HALo:function(e,t,n){"use strict";function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return i}))},Qetd:function(e,t,n){"use strict";var i=Object.assign.bind(Object);e.exports=i,e.exports.default=e.exports},RBBd:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/unversioned/react-native/pixelratio",function(){return n("+GJW")}])},dhJC:function(e,t,n){"use strict";function i(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return i}))}},[["RBBd",1,0]]]);