_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[166],{"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n("q1tI"),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"===typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=u(n),g=r,d=l["".concat(i,".").concat(g)]||l[g]||b[g]||o;return n?a.a.createElement(d,p(p({ref:t},s),{},{components:n})):a.a.createElement(d,p({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"===typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},HALo:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},dhJC:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return r}))},eTok:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/using-bugsnag",function(){return n("jqQL")}])},jqQL:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return p})),n.d(t,"headings",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n("HALo"),a=n("dhJC"),o=(n("q1tI"),n("7ljp")),i=["components"],p={title:"Using Bugsnag"},c=[{depth:3,type:"text",title:"Get Started"},{depth:2,type:"text",title:"Add Bugsnag to your Expo project"},{depth:3,type:"text",title:"Installation and configuration"},{depth:4,type:"text",title:"Capturing React render errors"},{depth:4,type:"text",title:"TypeScript support"},{depth:3,type:"text",title:"Next steps"}],s={meta:p,headings:c};function u(e){var t=e.components,n=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://www.bugsnag.com"},"Bugsnag")," is a stability monitoring solution which provides rich, end-to-end error reporting and analytics to reproduce and fix errors with speed and precision. Bugsnag supports the full stack with open source libraries for ",Object(o.b)("a",{parentName:"p",href:"https://www.bugsnag.com/platforms"},"50+ platforms"),", including ",Object(o.b)("a",{parentName:"p",href:"https://docs.bugsnag.com/platforms/react-native/react-native/"},"React Native"),"."),Object(o.b)("p",null,"With Bugsnag, developers and engineering organizations can:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Stabilize"),": Innovate faster by knowing when to build new features vs. fix bugs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Release health dashboard"),Object(o.b)("li",{parentName:"ul"},"Stability scores and targets"),Object(o.b)("li",{parentName:"ul"},"Built-in alerts via email, Slack, PagerDuty, and more")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Prioritize"),": Improve customer experience by identifying and prioritizing bugs that have the greatest impact on app stability"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Issues grouped by root cause and sorted by business impact"),Object(o.b)("li",{parentName:"ul"},"Customer segmentation"),Object(o.b)("li",{parentName:"ul"},"A/B testing and experiment analysis")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Fix"),": Increase productivity by spending less time on reproducing and fixing bugs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Powerful diagnostic data"),Object(o.b)("li",{parentName:"ul"},"Full stacktraces"),Object(o.b)("li",{parentName:"ul"},"Automatic breadcrumbs")),Object(o.b)("h3",{id:"get-started"},"Get Started"),Object(o.b)("p",null,"Add Bugsnag to your Expo apps to automatically capture and report JavaScript errors. Follow the guide below and read the ",Object(o.b)("a",{parentName:"p",href:"https://www.bugsnag.com/blog/build-apps-in-expo-with-bugsnag"},"blog post")," announcing Bugsnag\u2019s Expo integration. If you\u2019re new to Bugsnag, you can ",Object(o.b)("a",{parentName:"p",href:"https://app.bugsnag.com/user/new/"},"create an account")," or ",Object(o.b)("a",{parentName:"p",href:"https://www.bugsnag.com/demo-request"},"request a demo"),"."),Object(o.b)("h2",{id:"add-bugsnag-to-your-expo-project"},"Add Bugsnag to your Expo project"),Object(o.b)("h3",{id:"installation-and-configuration"},"Installation and configuration"),Object(o.b)("p",null,"The easiest way to add Bugsnag to your Expo project is to use our CLI. Alternatively you can follow the ",Object(o.b)("a",{parentName:"p",href:"https://docs.bugsnag.com/platforms/react-native/expo/manual-setup"},"manual setup guide"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"# using npx (recommended)\nnpx bugsnag-expo-cli init\n\n# using npm (if npx isn't available)\nnpm install --global bugsnag-expo-cli\nbugsnag-expo-cli init\n")),Object(o.b)("p",null,"Note: ",Object(o.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},Object(o.b)("inlineCode",{parentName:"a"},"npx"))," (included with npm 5.2+) is a tool that lets you invoke command line tools from npm without installing them first."),Object(o.b)("p",null,"This will install the ",Object(o.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/@bugsnag/expo"},Object(o.b)("inlineCode",{parentName:"a"},"@bugsnag/expo"))," notifier, add some configuration to ",Object(o.b)("strong",{parentName:"p"},"app.json")," and initialize Bugsnag in your application."),Object(o.b)("h4",{id:"capturing-react-render-errors"},"Capturing React render errors"),Object(o.b)("p",null,"An ",Object(o.b)("a",{parentName:"p",href:"https://reactjs.org/docs/error-boundaries.html"},"error boundary")," component is included which you can use to wrap your application. When render errors happen, they will be reported to Bugsnag along with any React-specific info that was available at the time."),Object(o.b)("p",null,"To catch all render errors in your application and show a custom error screen to your users, follow this example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const ErrorBoundary = Bugsnag.getPlugin('react');\n\nexport default () => (\n  <ErrorBoundary FallbackComponent={ErrorView}>\n    <App />\n  </ErrorBoundary>\n);\n\nclass App extends React.Component {\n  // Your main app component\n}\n\nclass ErrorView extends React.Component {\n  // This component will be displayed when an error boundary catches an error\n}\n")),Object(o.b)("p",null,"See ",Object(o.b)("a",{parentName:"p",href:"https://reactjs.org/docs/error-boundaries.html"},"React\u2019s documentation on Error Boundaries")," to find out more."),Object(o.b)("h4",{id:"typescript-support"},"TypeScript support"),Object(o.b)("p",null,"Type definitions provided and will be picked up automatically by the TypeScript compiler when you import ",Object(o.b)("inlineCode",{parentName:"p"},"@bugsnag/expo"),"."),Object(o.b)("h3",{id:"next-steps"},"Next steps"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Read the ",Object(o.b)("a",{parentName:"li",href:"https://docs.bugsnag.com/platforms/react-native/expo/"},"full integration guide")),Object(o.b)("li",{parentName:"ul"},"View ",Object(o.b)("a",{parentName:"li",href:"https://github.com/bugsnag/bugsnag-js"},Object(o.b)("inlineCode",{parentName:"a"},"@bugsnag/js")),", the library powering Bugsnag\u2019s JavaScript error reporting, on GitHub"),Object(o.b)("li",{parentName:"ul"},"Explore ",Object(o.b)("a",{parentName:"li",href:"https://github.com/bugsnag/bugsnag-js/tree/next/examples/js/expo"},"the example project")),Object(o.b)("li",{parentName:"ul"},"Get ",Object(o.b)("a",{parentName:"li",href:"https://docs.bugsnag.com/#support"},"support")," for your questions and feature requests")))}u.isMDXComponent=!0}},[["eTok",1,0]]]);