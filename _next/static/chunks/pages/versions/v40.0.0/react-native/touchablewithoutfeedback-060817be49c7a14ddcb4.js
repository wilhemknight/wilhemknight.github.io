_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[609],{"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n("q1tI"),b=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,b=function(e,t){if(null==e)return{};var n,a,b={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}var o=b.a.createContext({}),p=function(e){var t=b.a.useContext(o),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},u=b.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,m=s["".concat(r,".").concat(u)]||s[u]||d[u]||l;return n?b.a.createElement(m,i(i({ref:t},o),{},{components:n})):b.a.createElement(m,i({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var l=n.length,r=new Array(l);r[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"===typeof e?e:a,r[1]=i;for(var o=2;o<l;o++)r[o]=n[o];return b.a.createElement.apply(null,r)}return b.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},HALo:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},KfLn:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return i})),n.d(t,"headings",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n("HALo"),b=n("dhJC"),l=(n("q1tI"),n("7ljp")),r=["components"],i={id:"touchablewithoutfeedback",title:"TouchableWithoutFeedback"},c=[{depth:2,type:"text",title:"Usage Pattern"},{depth:2,type:"text",title:"Example"},{depth:1,type:"text",title:"Reference"},{depth:2,type:"text",title:"Props"},{depth:3,type:"inlineCode",title:"accessibilityIgnoresInvertColors"},{depth:3,type:"inlineCode",title:"accessible"},{depth:3,type:"inlineCode",title:"accessibilityLabel"},{depth:3,type:"inlineCode",title:"accessibilityHint"},{depth:3,type:"inlineCode",title:"accessibilityRole"},{depth:3,type:"inlineCode",title:"accessibilityState"},{depth:3,type:"inlineCode",title:"accessibilityActions"},{depth:3,type:"inlineCode",title:"onAccessibilityAction"},{depth:3,type:"inlineCode",title:"accessibilityValue"},{depth:3,type:"inlineCode",title:"delayLongPress"},{depth:3,type:"inlineCode",title:"delayPressIn"},{depth:3,type:"inlineCode",title:"delayPressOut"},{depth:3,type:"inlineCode",title:"disabled"},{depth:3,type:"inlineCode",title:"hitSlop"},{depth:3,type:"inlineCode",title:"onBlur"},{depth:3,type:"inlineCode",title:"onFocus"},{depth:3,type:"inlineCode",title:"onLayout"},{depth:3,type:"inlineCode",title:"onLongPress"},{depth:3,type:"inlineCode",title:"onPress"},{depth:3,type:"inlineCode",title:"onPressIn"},{depth:3,type:"inlineCode",title:"onPressOut"},{depth:3,type:"inlineCode",title:"pressRetentionOffset"},{depth:3,type:"inlineCode",title:"nativeID"},{depth:3,type:"inlineCode",title:"testID"},{depth:3,type:"inlineCode",title:"touchSoundDisabled"}],o={meta:i,headings:c};function p(e){var t=e.components,n=Object(b.a)(e,r);return Object(l.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"If you're looking for a more extensive and future-proof way to handle touch-based input, check out the ",Object(l.b)("a",{parentName:"p",href:"/versions/v40.0.0/react-native/pressable/"},"Pressable")," API.")),Object(l.b)("p",null,"Do not use unless you have a very good reason. All elements that respond to press should have a visual feedback when touched."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"TouchableWithoutFeedback")," supports only one child. If you wish to have several child components, wrap them in a View. Importantly, ",Object(l.b)("inlineCode",{parentName:"p"},"TouchableWithoutFeedback")," works by cloning its child and applying responder props to it. It is therefore required that any intermediary components pass through those props to the underlying React Native component."),Object(l.b)("h2",{id:"usage-pattern"},"Usage Pattern"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"function MyComponent(props) {\n  return (\n    <View {...props} style={{ flex: 1, backgroundColor: '#fff' }}>\n      <Text>My Component</Text>\n    </View>\n  );\n}\n\n<TouchableWithoutFeedback onPress={() => alert('Pressed!')}>\n  <MyComponent />\n</TouchableWithoutFeedback>;\n")),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"import React, { useState } from 'react';\nimport { StyleSheet, TouchableWithoutFeedback, Text, View } from 'react-native';\n\nconst TouchableWithoutFeedbackExample = () => {\n  const [count, setCount] = useState(0);\n\n  const onPress = () => {\n    setCount(count + 1);\n  };\n\n  return (\n    <View style={styles.container}>\n      <View style={styles.countContainer}>\n        <Text style={styles.countText}>Count: {count}</Text>\n      </View>\n      <TouchableWithoutFeedback onPress={onPress}>\n        <View style={styles.button}>\n          <Text>Touch Here</Text>\n        </View>\n      </TouchableWithoutFeedback>\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    paddingHorizontal: 10,\n  },\n  button: {\n    alignItems: 'center',\n    backgroundColor: '#DDDDDD',\n    padding: 10,\n  },\n  countContainer: {\n    alignItems: 'center',\n    padding: 10,\n  },\n  countText: {\n    color: '#FF00FF',\n  },\n});\n\nexport default TouchableWithoutFeedbackExample;\n")),Object(l.b)("hr",null),Object(l.b)("h1",{id:"reference"},"Reference"),Object(l.b)("h2",{id:"props"},"Props"),Object(l.b)("h3",{id:"accessibilityignoresinvertcolors"},Object(l.b)("inlineCode",{parentName:"h3"},"accessibilityIgnoresInvertColors")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Boolean"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"accessible"},Object(l.b)("inlineCode",{parentName:"h3"},"accessible")),Object(l.b)("p",null,"When ",Object(l.b)("inlineCode",{parentName:"p"},"true"),", indicates that the view is an accessibility element. By default, all the touchable elements are accessible."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"accessibilitylabel"},Object(l.b)("inlineCode",{parentName:"h3"},"accessibilityLabel")),Object(l.b)("p",null,"Overrides the text that's read by the screen reader when the user interacts with the element. By default, the label is constructed by traversing all the children and accumulating all the ",Object(l.b)("inlineCode",{parentName:"p"},"Text")," nodes separated by space."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"accessibilityhint"},Object(l.b)("inlineCode",{parentName:"h3"},"accessibilityHint")),Object(l.b)("p",null,"An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not clear from the accessibility label."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"accessibilityrole"},Object(l.b)("inlineCode",{parentName:"h3"},"accessibilityRole")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"accessibilityRole")," communicates the purpose of a component to the user of an assistive technology."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"accessibilityRole")," can be one of the following:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'none'")," - Used when the element has no role."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'button'")," - Used when the element should be treated as a button."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'link'")," - Used when the element should be treated as a link."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'search'")," - Used when the text field element should also be treated as a search field."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'image'")," - Used when the element should be treated as an image. Can be combined with button or link, for example."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'keyboardkey'")," - Used when the element acts as a keyboard key."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'text'")," - Used when the element should be treated as static text that cannot change."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'adjustable'"),' - Used when an element can be "adjusted" (e.g. a slider).'),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'imagebutton'")," - Used when the element should be treated as a button and is also an image."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'header'")," - Used when an element acts as a header for a content section (e.g. the title of a navigation bar)."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'summary'")," - Used when an element can be used to provide a quick summary of current conditions in the app when the app first launches."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'alert'")," - Used when an element contains important text to be presented to the user."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'checkbox'")," - Used when an element represents a checkbox which can be checked, unchecked, or have mixed checked state."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'combobox'")," - Used when an element represents a combo box, which allows the user to select among several choices."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'menu'")," - Used when the component is a menu of choices."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'menubar'")," - Used when a component is a container of multiple menus."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'menuitem'")," - Used to represent an item within a menu."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'progressbar'")," - Used to represent a component which indicates progress of a task."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'radio'")," - Used to represent a radio button."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'radiogroup'")," - Used to represent a group of radio buttons."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'scrollbar'")," - Used to represent a scroll bar."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'spinbutton'")," - Used to represent a button which opens a list of choices."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'switch'")," - Used to represent a switch which can be turned on and off."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'tab'")," - Used to represent a tab."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'tablist'")," - Used to represent a list of tabs."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'timer'")," - Used to represent a timer."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'toolbar'")," - Used to represent a tool bar (a container of action buttons or components).")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"accessibilitystate"},Object(l.b)("inlineCode",{parentName:"h3"},"accessibilityState")),Object(l.b)("p",null,"Describes the current state of a component to the user of an assistive technology."),Object(l.b)("p",null,"See the ",Object(l.b)("a",{parentName:"p",href:"https://reactnative.dev/docs/accessibility#accessibilitystate-ios-android"},"Accessibility guide")," for more information."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"object: {disabled: bool, selected: bool, checked: bool or 'mixed', busy: bool, expanded: bool}"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"accessibilityactions"},Object(l.b)("inlineCode",{parentName:"h3"},"accessibilityActions")),Object(l.b)("p",null,"Accessibility actions allow an assistive technology to programmatically invoke the actions of a component. The ",Object(l.b)("inlineCode",{parentName:"p"},"accessibilityActions")," property should contain a list of action objects. Each action object should contain the field name and label."),Object(l.b)("p",null,"See the ",Object(l.b)("a",{parentName:"p",href:"https://reactnative.dev/docs/accessibility#accessibility-actions"},"Accessibility guide")," for more information."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"array"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onaccessibilityaction"},Object(l.b)("inlineCode",{parentName:"h3"},"onAccessibilityAction")),Object(l.b)("p",null,"Invoked when the user performs the accessibility actions. The only argument to this function is an event containing the name of the action to perform."),Object(l.b)("p",null,"See the ",Object(l.b)("a",{parentName:"p",href:"https://reactnative.dev/docs/accessibility#accessibility-actions"},"Accessibility guide")," for more information."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"accessibilityvalue"},Object(l.b)("inlineCode",{parentName:"h3"},"accessibilityValue")),Object(l.b)("p",null,"Represents the current value of a component. It can be a textual description of a component's value, or for range-based components, such as sliders and progress bars, it contains range information (minimum, current, and maximum)."),Object(l.b)("p",null,"See the ",Object(l.b)("a",{parentName:"p",href:"https://reactnative.dev/docs/accessibility#accessibilityvalue-ios-android"},"Accessibility guide")," for more information."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"object: {min: number, max: number, now: number, text: string}"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"delaylongpress"},Object(l.b)("inlineCode",{parentName:"h3"},"delayLongPress")),Object(l.b)("p",null,"Duration (in milliseconds) from ",Object(l.b)("inlineCode",{parentName:"p"},"onPressIn")," before ",Object(l.b)("inlineCode",{parentName:"p"},"onLongPress")," is called."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"delaypressin"},Object(l.b)("inlineCode",{parentName:"h3"},"delayPressIn")),Object(l.b)("p",null,"Duration (in milliseconds), from the start of the touch, before ",Object(l.b)("inlineCode",{parentName:"p"},"onPressIn")," is called."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"delaypressout"},Object(l.b)("inlineCode",{parentName:"h3"},"delayPressOut")),Object(l.b)("p",null,"Duration (in milliseconds), from the release of the touch, before ",Object(l.b)("inlineCode",{parentName:"p"},"onPressOut")," is called."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"disabled"},Object(l.b)("inlineCode",{parentName:"h3"},"disabled")),Object(l.b)("p",null,"If true, disable all interactions for this component."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"hitslop"},Object(l.b)("inlineCode",{parentName:"h3"},"hitSlop")),Object(l.b)("p",null,"This defines how far your touch can start away from the button. This is added to ",Object(l.b)("inlineCode",{parentName:"p"},"pressRetentionOffset")," when moving off of the button."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"The touch area never extends past the parent view bounds and the Z-index of sibling views always takes precedence if a touch hits two overlapping views.")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://reactnative.dev/docs/rect"},"Rect")," or number"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("h3",{id:"onblur"},Object(l.b)("inlineCode",{parentName:"h3"},"onBlur")),Object(l.b)("p",null,"Invoked when the item loses focus."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onfocus"},Object(l.b)("inlineCode",{parentName:"h3"},"onFocus")),Object(l.b)("p",null,"Invoked when the item receives focus."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onlayout"},Object(l.b)("inlineCode",{parentName:"h3"},"onLayout")),Object(l.b)("p",null,"Invoked on mount and layout changes with"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"{nativeEvent: {layout: {x, y, width, height}}}")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onlongpress"},Object(l.b)("inlineCode",{parentName:"h3"},"onLongPress")),Object(l.b)("p",null,"Called if the time after ",Object(l.b)("inlineCode",{parentName:"p"},"onPressIn")," lasts longer than 370 milliseconds. This time period can be customized with ",Object(l.b)("a",{parentName:"p",href:"/versions/v40.0.0/react-native/touchablewithoutfeedback/#delaylongpress"},Object(l.b)("inlineCode",{parentName:"a"},"delayLongPress")),"."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onpress"},Object(l.b)("inlineCode",{parentName:"h3"},"onPress")),Object(l.b)("p",null,"Called when the touch is released, but not if cancelled (e.g. by a scroll that steals the responder lock). The first function argument is an event in form of ",Object(l.b)("a",{parentName:"p",href:"https://reactnative.dev/docs/pressevent"},"PressEvent"),"."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onpressin"},Object(l.b)("inlineCode",{parentName:"h3"},"onPressIn")),Object(l.b)("p",null,"Called as soon as the touchable element is pressed and invoked even before onPress. This can be useful when making network requests. The first function argument is an event in form of ",Object(l.b)("a",{parentName:"p",href:"https://reactnative.dev/docs/pressevent"},"PressEvent"),"tive.dev/docs/pressevent)."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onpressout"},Object(l.b)("inlineCode",{parentName:"h3"},"onPressOut")),Object(l.b)("p",null,"Called as soon as the touch is released even before onPress. The first function argument is an event in form of ",Object(l.b)("a",{parentName:"p",href:"https://reactnative.dev/docs/pressevent"},"PressEvent"),"tive.dev/docs/pressevent)."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"pressretentionoffset"},Object(l.b)("inlineCode",{parentName:"h3"},"pressRetentionOffset")),Object(l.b)("p",null,"When the scroll view is disabled, this defines how far your touch may move off of the button, before deactivating the button. Once deactivated, try moving it back and you'll see that the button is once again reactivated! Move it back and forth several times while the scroll view is disabled. Ensure you pass in a constant to reduce memory allocations."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://reactnative.dev/docs/rect"},"Rect")," or number"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"nativeid"},Object(l.b)("inlineCode",{parentName:"h3"},"nativeID")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"testid"},Object(l.b)("inlineCode",{parentName:"h3"},"testID")),Object(l.b)("p",null,"Used to locate this view in end-to-end tests."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"touchsounddisabled"},Object(l.b)("inlineCode",{parentName:"h3"},"touchSoundDisabled")),Object(l.b)("p",null,"If true, doesn't play a system sound on touch."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Boolean"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Android")))))}p.isMDXComponent=!0},Qetd:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},dFSw:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v40.0.0/react-native/touchablewithoutfeedback",function(){return n("KfLn")}])},dhJC:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,b=function(e,t){if(null==e)return{};var n,a,b={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}n.d(t,"a",(function(){return a}))}},[["dFSw",1,0]]]);