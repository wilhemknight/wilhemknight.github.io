_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[847],{"0HGL":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return l})),n.d(t,"headings",(function(){return s})),n.d(t,"default",(function(){return m}));var i=n("HALo"),a=n("dhJC"),r=(n("q1tI"),n("7ljp")),o=n("HCau"),b=n("hykZ"),p=["components"],l={title:"Print",sourceCodeUrl:"https://github.com/expo/expo/tree/sdk-41/packages/expo-print"},s=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"API"},{depth:3,type:"inlineCode",title:"Print.printAsync(options)"},{depth:4,type:"text",title:"Arguments"},{depth:4,type:"text",title:"Returns"},{depth:3,type:"inlineCode",title:"Print.printToFileAsync(options)"},{depth:4,type:"text",title:"Arguments"},{depth:4,type:"text",title:"Returns"},{depth:3,type:"inlineCode",title:"Print.selectPrinterAsync()"},{depth:4,type:"text",title:"Returns"},{depth:2,type:"text",title:"Page margins"}],c={meta:l,headings:s};function m(e){var t=e.components,n=Object(a.a)(e,p);return Object(r.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"expo-print"))," provides an API for iOS (AirPrint) and Android printing functionality."),Object(r.b)(b.a,{android:!0,emulator:!0,ios:!0,simulator:!0,web:!0,mdxType:"PlatformsSection"}),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)(o.b,{packageName:"expo-print",mdxType:"InstallSection"}),Object(r.b)("h2",{id:"api"},"API"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import * as Print from 'expo-print';\n")),Object(r.b)("h3",{id:"printprintasyncoptions"},Object(r.b)("inlineCode",{parentName:"h3"},"Print.printAsync(options)")),Object(r.b)("p",null,"Prints a document or HTML, on web this prints the HTML from the page."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note"),": On iOS, printing from HTML source ",Object(r.b)("strong",{parentName:"p"},"doesn't")," support local asset URLs (due to ",Object(r.b)("inlineCode",{parentName:"p"},"WKWebView")," limitations). As a workaround you can use inlined base64-encoded strings. See ",Object(r.b)("a",{parentName:"p",href:"https://github.com/expo/expo/issues/7940#issuecomment-657111033"},"this comment")," for more details.")),Object(r.b)("h4",{id:"arguments"},"Arguments"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"options (",Object(r.b)("em",{parentName:"strong"},"object"),")")," -- A map defining what should be printed:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"uri (",Object(r.b)("em",{parentName:"strong"},"string"),")")," -- URI of a PDF file to print. Remote, local (ex. selected via ",Object(r.b)("inlineCode",{parentName:"li"},"DocumentPicker"),") or base64 data URI starting with ",Object(r.b)("inlineCode",{parentName:"li"},"data:application/pdf;base64,"),". This only supports PDF, not other types of document (e.g. images). ",Object(r.b)("strong",{parentName:"li"},"Available on Android and iOS only.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"html (",Object(r.b)("em",{parentName:"strong"},"string"),")")," -- HTML string to print. ",Object(r.b)("strong",{parentName:"li"},"Available on Android and iOS only.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"width (",Object(r.b)("em",{parentName:"strong"},"number"),")")," -- Width of the single page in pixels. Defaults to ",Object(r.b)("inlineCode",{parentName:"li"},"612")," which is a width of US Letter paper format with 72 PPI. ",Object(r.b)("strong",{parentName:"li"},"Available only with ",Object(r.b)("inlineCode",{parentName:"strong"},"html")," option.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"height (",Object(r.b)("em",{parentName:"strong"},"number"),")")," -- Height of the single page in pixels. Defaults to ",Object(r.b)("inlineCode",{parentName:"li"},"792")," which is a height of US Letter paper format with 72 PPI. ",Object(r.b)("strong",{parentName:"li"},"Available only with ",Object(r.b)("inlineCode",{parentName:"strong"},"html")," option.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"markupFormatterIOS (",Object(r.b)("em",{parentName:"strong"},"string"),")")," -- ",Object(r.b)("strong",{parentName:"li"},"Available on iOS only.")," Alternative to ",Object(r.b)("inlineCode",{parentName:"li"},"html")," option that uses ",Object(r.b)("a",{parentName:"li",href:"https://developer.apple.com/documentation/uikit/uimarkuptextprintformatter"},"UIMarkupTextPrintFormatter")," instead of WebView. Might be removed in the future releases."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"printerUrl (",Object(r.b)("em",{parentName:"strong"},"string"),")")," -- ",Object(r.b)("strong",{parentName:"li"},"Available on iOS only.")," URL of the printer to use. Returned from ",Object(r.b)("inlineCode",{parentName:"li"},"selectPrinterAsync"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"orientation (",Object(r.b)("em",{parentName:"strong"},"string"),")")," -- ",Object(r.b)("strong",{parentName:"li"},"Available on iOS only.")," The orientation of the printed content, ",Object(r.b)("inlineCode",{parentName:"li"},"Print.Orientation.portrait")," or ",Object(r.b)("inlineCode",{parentName:"li"},"Print.Orientation.landscape"),".")))),Object(r.b)("h4",{id:"returns"},"Returns"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Resolves to an empty promise if printing started.")),Object(r.b)("h3",{id:"printprinttofileasyncoptions"},Object(r.b)("inlineCode",{parentName:"h3"},"Print.printToFileAsync(options)")),Object(r.b)("p",null,"Prints HTML to PDF file and saves it to ",Object(r.b)("a",{parentName:"p",href:"/versions/v41.0.0/sdk/filesystem/#expofilesystemcachedirectory"},"app's cache directory"),". On web this method opens the print dialog."),Object(r.b)("h4",{id:"arguments-1"},"Arguments"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"options (",Object(r.b)("em",{parentName:"strong"},"object"),")")," -- A map of options:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"html (",Object(r.b)("em",{parentName:"strong"},"string"),")")," -- HTML string to print into PDF file."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"width (",Object(r.b)("em",{parentName:"strong"},"number"),")")," -- Width of the single page in pixels. Defaults to ",Object(r.b)("inlineCode",{parentName:"li"},"612")," which is a width of US Letter paper format with 72 PPI."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"height (",Object(r.b)("em",{parentName:"strong"},"number"),")")," -- Height of the single page in pixels. Defaults to ",Object(r.b)("inlineCode",{parentName:"li"},"792")," which is a height of US Letter paper format with 72 PPI."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"base64 (",Object(r.b)("em",{parentName:"strong"},"boolean"),")")," -- Whether to include base64 encoded string of the file in the returned object.")))),Object(r.b)("h4",{id:"returns-1"},"Returns"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Resolves to an object with following keys:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"uri (",Object(r.b)("em",{parentName:"strong"},"string"),")")," -- A URI to the printed PDF file."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"numberOfPages (",Object(r.b)("em",{parentName:"strong"},"number"),")")," -- Number of pages that were needed to render given content."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"base64 (",Object(r.b)("em",{parentName:"strong"},"string"),")")," -- Base64 encoded string containing the data of the PDF file. ",Object(r.b)("strong",{parentName:"li"},"Available only if ",Object(r.b)("inlineCode",{parentName:"strong"},"base64")," option is truthy.")," It doesn't include data URI prefix ",Object(r.b)("inlineCode",{parentName:"li"},"data:application/pdf;base64,"),".")))),Object(r.b)("h3",{id:"printselectprinterasync"},Object(r.b)("inlineCode",{parentName:"h3"},"Print.selectPrinterAsync()")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Available on iOS only.")," Chooses a printer that can be later used in ",Object(r.b)("inlineCode",{parentName:"p"},"printAsync"),"."),Object(r.b)("h4",{id:"returns-2"},"Returns"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Resolves to an object containing ",Object(r.b)("inlineCode",{parentName:"li"},"name")," and ",Object(r.b)("inlineCode",{parentName:"li"},"url")," of the selected printer.")),Object(r.b)("h2",{id:"page-margins"},"Page margins"),Object(r.b)("p",null,"If you're using ",Object(r.b)("inlineCode",{parentName:"p"},"html")," option in ",Object(r.b)("inlineCode",{parentName:"p"},"printAsync")," or ",Object(r.b)("inlineCode",{parentName:"p"},"printToFileAsync"),", the resulting print might contain page margins (it depends on WebView engine).\nThey are set by ",Object(r.b)("inlineCode",{parentName:"p"},"@page")," style block and you can override them in your HTML code:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html"},"<style>\n  @page {\n    margin: 20px;\n  }\n</style>\n")),Object(r.b)("p",null,"See ",Object(r.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@page"},"@page docs on MDN")," for more details."))}m.isMDXComponent=!0},"6hSt":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v41.0.0/sdk/print",function(){return n("0HGL")}])}},[["6hSt",1,0,2,3,4,5,6]]]);