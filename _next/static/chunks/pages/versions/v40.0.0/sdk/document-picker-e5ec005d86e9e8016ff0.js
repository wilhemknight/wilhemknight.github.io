_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[650],{"Qth/":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return s})),n.d(t,"headings",(function(){return b})),n.d(t,"default",(function(){return u}));var o=n("HALo"),i=n("dhJC"),a=(n("q1tI"),n("7ljp")),r=n("HCau"),l=n("hykZ"),c=n("3iwL"),p=["components"],s={title:"DocumentPicker",sourceCodeUrl:"https://github.com/expo/expo/tree/sdk-40/packages/expo-document-picker"},b=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"Configuration"},{depth:3,type:"text",title:"Managed workflow"},{depth:3,type:"text",title:"Bare workflow"},{depth:2,type:"text",title:"API"},{depth:3,type:"inlineCode",title:"DocumentPicker.getDocumentAsync(options)"},{depth:4,type:"text",title:"Arguments"},{depth:4,type:"text",title:"Returns"}],d={meta:s,headings:b};function u(e){var t=e.components,n=Object(i.a)(e,p);return Object(a.b)("wrapper",Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Provides access to the system's UI for selecting documents from the available providers on the user's device."),Object(a.b)(c.a,{file:"sdk/documentpicker.mp4",loop:!1,mdxType:"Video"}),Object(a.b)(l.a,{android:!0,emulator:!0,ios:!0,simulator:!0,web:!0,mdxType:"PlatformsSection"}),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)(r.b,{packageName:"expo-document-picker",mdxType:"InstallSection"}),Object(a.b)("h2",{id:"configuration"},"Configuration"),Object(a.b)("h3",{id:"managed-workflow"},"Managed workflow"),Object(a.b)("p",null,"For iOS, outside of the Expo Go app, the DocumentPicker module requires the iCloud entitlement to work properly. You need to set the ",Object(a.b)("inlineCode",{parentName:"p"},"usesIcloudStorage")," key to ",Object(a.b)("inlineCode",{parentName:"p"},"true")," in your ",Object(a.b)("strong",{parentName:"p"},"app.json")," file as specified ",Object(a.b)("a",{parentName:"p",href:"/workflow/configuration/#ios"},"here"),"."),Object(a.b)("p",null,"In addition, you'll also need to enable the iCloud Application Service in your App identifier. This can be done in the detail of your ",Object(a.b)("a",{parentName:"p",href:"https://developer.apple.com/account/ios/identifier/bundle"},"App ID in the Apple developer interface"),"."),Object(a.b)("p",null,"Enable iCloud service with CloudKit support, create one iCloud Container, and name it ",Object(a.b)("inlineCode",{parentName:"p"},"iCloud.<your_bundle_identifier>"),"."),Object(a.b)("p",null,"And finally, to apply those changes, you'll need to revoke your existing provisioning profile and run ",Object(a.b)("inlineCode",{parentName:"p"},"expo build:ios -c")),Object(a.b)("h3",{id:"bare-workflow"},"Bare workflow"),Object(a.b)("p",null,"For iOS bare projects, the ",Object(a.b)("inlineCode",{parentName:"p"},"DocumentPicker")," module requires the iCloud entitlement to work properly. If your app doesn't have it already, you can add it by opening the project in Xcode and following these steps:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"In the project, go to the ",Object(a.b)("inlineCode",{parentName:"li"},"Capabilities")," tab"),Object(a.b)("li",{parentName:"ul"},"Set the iCloud switch to ",Object(a.b)("inlineCode",{parentName:"li"},"on")),Object(a.b)("li",{parentName:"ul"},"Check the ",Object(a.b)("inlineCode",{parentName:"li"},"iCloud Documents")," checkbox")),Object(a.b)("h2",{id:"api"},"API"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"import * as DocumentPicker from 'expo-document-picker';\n")),Object(a.b)("h3",{id:"documentpickergetdocumentasyncoptions"},Object(a.b)("inlineCode",{parentName:"h3"},"DocumentPicker.getDocumentAsync(options)")),Object(a.b)("p",null,"Display the system UI for choosing a document. By default, the chosen file is copied to ",Object(a.b)("a",{parentName:"p",href:"/versions/v40.0.0/sdk/filesystem/#expofilesystemcachedirectory"},"the app's internal cache directory"),"."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Notes for Web:")," The system UI can only be shown after user activation (e.g. a ",Object(a.b)("inlineCode",{parentName:"p"},"Button")," press). Therefore, calling ",Object(a.b)("inlineCode",{parentName:"p"},"getDocumentAsync")," in ",Object(a.b)("inlineCode",{parentName:"p"},"componentDidMount"),", for example, will ",Object(a.b)("strong",{parentName:"p"},"not")," work as intended. The ",Object(a.b)("inlineCode",{parentName:"p"},"cancel")," event will not be returned in the browser due to platform restrictions and inconsistencies across browsers.")),Object(a.b)("h4",{id:"arguments"},"Arguments"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"options (",Object(a.b)("em",{parentName:"strong"},"object"),")")," --"),Object(a.b)("p",{parentName:"li"},"A map of options:"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"type (",Object(a.b)("em",{parentName:"strong"},"string"),")")," -- The ",Object(a.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Media_type"},"MIME type")," of the documents that are available to be picked. Is also supports wildcards like ",Object(a.b)("inlineCode",{parentName:"li"},"image/*")," to choose any image. To allow any type of document you can use ",Object(a.b)("inlineCode",{parentName:"li"},"*/*"),". Defaults to ",Object(a.b)("inlineCode",{parentName:"li"},"*/*"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"copyToCacheDirectory (",Object(a.b)("em",{parentName:"strong"},"boolean"),")")," -- If ",Object(a.b)("inlineCode",{parentName:"li"},"true"),", the picked file is copied to ",Object(a.b)("a",{parentName:"li",href:"/versions/v40.0.0/sdk/filesystem/#expofilesystemcachedirectory"},Object(a.b)("inlineCode",{parentName:"a"},"FileSystem.CacheDirectory")),", which allows other Expo APIs to read the file immediately. Defaults to ",Object(a.b)("inlineCode",{parentName:"li"},"true"),". This may impact performance for large files, so you should consider setting this to ",Object(a.b)("inlineCode",{parentName:"li"},"false")," if you expect users to pick particularly large files and your app does not need immediate read access."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"multiple (",Object(a.b)("em",{parentName:"strong"},"boolean"),")")," -- (Web Only) Allows multiple files to be selected from the system UI. Defaults to ",Object(a.b)("inlineCode",{parentName:"li"},"false"),".")))),Object(a.b)("h4",{id:"returns"},"Returns"),Object(a.b)("p",null,"On success returns a promise that resolves to an object containing ",Object(a.b)("inlineCode",{parentName:"p"},"{ type: 'success', uri, name, size }")," where ",Object(a.b)("inlineCode",{parentName:"p"},"uri")," is a URI to the local document file, ",Object(a.b)("inlineCode",{parentName:"p"},"name")," is its original name and ",Object(a.b)("inlineCode",{parentName:"p"},"size")," is its size in bytes.\nIf the user cancelled the document picking, the promise resolves to ",Object(a.b)("inlineCode",{parentName:"p"},"{ type: 'cancel' }"),"."))}u.isMDXComponent=!0},w2Ah:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v40.0.0/sdk/document-picker",function(){return n("Qth/")}])}},[["w2Ah",1,0,2,3,4,5,6,15]]]);