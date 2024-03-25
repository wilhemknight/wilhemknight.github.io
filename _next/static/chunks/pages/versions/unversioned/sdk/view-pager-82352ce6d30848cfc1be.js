_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[555],{L5iI:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return l})),n.d(t,"headings",(function(){return g})),n.d(t,"default",(function(){return w}));var a=n("HALo"),i=n("dhJC"),r=(n("q1tI"),n("7ljp")),s=n("HCau"),c=n("hykZ"),o=n("3iwL"),p=["components"],l={title:"ViewPager",sourceCodeUrl:"https://github.com/callstack/react-native-pager-view",packageName:"react-native-pager-view"},g=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"Usage"},{depth:2,type:"text",title:"Basic Example"}],u={meta:l,headings:g};function w(e){var t=e.components,n=Object(i.a)(e,p);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"react-native-pager-view"))," exposes a component that provides the layout and gestures to scroll between pages of content, like a carousel."),Object(r.b)(o.a,{file:"sdk/viewpager.mp4",loop:!1,mdxType:"Video"}),Object(r.b)(c.a,{android:!0,emulator:!0,ios:!0,simulator:!0,mdxType:"PlatformsSection"}),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)(s.a,{href:"https://github.com/callstack/react-native-pager-view#linking",mdxType:"APIInstallSection"}),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("p",null,"See full documentation at ",Object(r.b)("a",{parentName:"p",href:"https://github.com/callstack/react-native-pager-view"},"callstack/react-native-pager-view"),"."),Object(r.b)("h2",{id:"basic-example"},"Basic Example"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { StyleSheet, View, Text } from 'react-native';\nimport PagerView from 'react-native-pager-view';\n\nconst MyPager = () => {\n  return (\n    <View style={{ flex: 1 }}>\n      <PagerView style={styles.viewPager} initialPage={0}>\n        <View style={styles.page} key=\"1\">\n          <Text>First page</Text>\n          <Text>Swipe \u27a1\ufe0f</Text>\n        </View>\n        <View style={styles.page} key=\"2\">\n          <Text>Second page</Text>\n        </View>\n        <View style={styles.page} key=\"3\">\n          <Text>Third page</Text>\n        </View>\n      </PagerView>\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  viewPager: {\n    flex: 1,\n  },\n  page: {\n    justifyContent: 'center',\n    alignItems: 'center',\n  },\n});\n\nexport default MyPager;\n")))}w.isMDXComponent=!0},UYS0:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/unversioned/sdk/view-pager",function(){return n("L5iI")}])}},[["UYS0",1,0,2,3,4,5,6,15]]]);