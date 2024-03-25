_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[1121],{at2B:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v43.0.0/sdk/captureRef",function(){return n("h1oh")}])},h1oh:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return s})),n.d(t,"headings",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n("HALo"),i=n("dhJC"),o=(n("q1tI"),n("7ljp")),r=n("HCau"),l=n("hykZ"),p=["components"],s={title:"captureRef",sourceCodeUrl:"https://github.com/gre/react-native-view-shot"},b=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"API"},{depth:3,type:"inlineCode",title:"captureRef(view, options)"},{depth:4,type:"text",title:"Arguments"},{depth:4,type:"text",title:"Returns"},{depth:5,type:"text",title:"Note on pixel values"}],c={meta:s,headings:b};function u(e){var t=e.components,n=Object(i.a)(e,p);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Given a view, ",Object(o.b)("inlineCode",{parentName:"p"},"captureRef")," will essentially screenshot that view and return an image for you. This is very useful for things like signature pads, where the user draws something and then you want to save an image from it."),Object(o.b)("p",null,"If you're interested in taking snapshots from the GLView, we recommend you use ",Object(o.b)("a",{parentName:"p",href:"/versions/v43.0.0/sdk/gl-view/#takesnapshotasyncoptions"},"GLView's takeSnapshotAsync")," instead."),Object(o.b)(l.a,{android:!0,emulator:!0,ios:!0,simulator:!0,mdxType:"PlatformsSection"}),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)(r.b,{packageName:"react-native-view-shot",href:"https://github.com/gre/react-native-view-shot",mdxType:"InstallSection"}),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { captureRef } from 'react-native-view-shot';\n")),Object(o.b)("h3",{id:"capturerefview-options"},Object(o.b)("inlineCode",{parentName:"h3"},"captureRef(view, options)")),Object(o.b)("p",null,"Snapshots the given view."),Object(o.b)("h4",{id:"arguments"},"Arguments"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"view (",Object(o.b)("em",{parentName:"strong"},"number|ReactElement"),")")," -- The ",Object(o.b)("inlineCode",{parentName:"p"},"ref")," or ",Object(o.b)("inlineCode",{parentName:"p"},"reactTag")," (also known as node handle) for the view to snapshot.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"options (",Object(o.b)("em",{parentName:"strong"},"object"),")")," --"),Object(o.b)("p",{parentName:"li"},"An optional map of optional options"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"format (",Object(o.b)("em",{parentName:"strong"},"string"),")")," -- ",Object(o.b)("inlineCode",{parentName:"li"},'"png" | "jpg" | "webm"'),", defaults to ",Object(o.b)("inlineCode",{parentName:"li"},'"png"'),", ",Object(o.b)("inlineCode",{parentName:"li"},'"webm"')," supported only on Android."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"quality (",Object(o.b)("em",{parentName:"strong"},"number"),")")," -- Number between 0 and 1 where 0 is worst quality and 1 is best, defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"1")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"result (",Object(o.b)("em",{parentName:"strong"},"string"),")")," -- The type for the resulting image.\n","-"," ",Object(o.b)("inlineCode",{parentName:"li"},"'tmpfile'")," -- (default) Return a temporary file uri.\n","-"," ",Object(o.b)("inlineCode",{parentName:"li"},"'base64'")," -- base64 encoded image.\n","-"," ",Object(o.b)("inlineCode",{parentName:"li"},"'data-uri'")," -- base64 encoded image with data-uri prefix."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"height (",Object(o.b)("em",{parentName:"strong"},"number"),")")," -- Height of result in pixels"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"width (",Object(o.b)("em",{parentName:"strong"},"number"),")")," -- Width of result in pixels"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"snapshotContentContainer (",Object(o.b)("em",{parentName:"strong"},"bool"),")"),' -- if true and when view is a ScrollView, the "content container" height will be evaluated instead of the container height')))),Object(o.b)("h4",{id:"returns"},"Returns"),Object(o.b)("p",null,"An image of the format specified in the options parameter."),Object(o.b)("h5",{id:"note-on-pixel-values"},"Note on pixel values"),Object(o.b)("p",null,"Remember to take the device ",Object(o.b)("inlineCode",{parentName:"p"},"PixelRatio"),' into account. When you work with pixel values in a UI, most of the time those units are "logical pixels" or "device-independent pixels". With images like PNG files, you often work with "physical pixels". You can get the ',Object(o.b)("inlineCode",{parentName:"p"},"PixelRatio")," of the device using the React Native API: ",Object(o.b)("inlineCode",{parentName:"p"},"PixelRatio.get()")),Object(o.b)("p",null,"For example, to save a 'FullHD' picture of ",Object(o.b)("inlineCode",{parentName:"p"},"1080x1080"),", you would do something like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const targetPixelCount = 1080; // If you want full HD pictures\nconst pixelRatio = PixelRatio.get(); // The pixel ratio of the device\n// pixels * pixelratio = targetPixelCount, so pixels = targetPixelCount / pixelRatio\nconst pixels = targetPixelCount / pixelRatio;\n\nconst result = await captureRef(this.imageContainer, {\n  result: 'tmpfile',\n  height: pixels,\n  width: pixels,\n  quality: 1,\n  format: 'png',\n});\n")))}u.isMDXComponent=!0}},[["at2B",1,0,2,3,4,5,6]]]);