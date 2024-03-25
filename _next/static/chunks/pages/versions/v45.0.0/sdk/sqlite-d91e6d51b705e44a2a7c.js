_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[1509],{"1pVn":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v45.0.0/sdk/sqlite",function(){return a("Se3W")}])},Se3W:function(e,t,a){"use strict";a.r(t),a.d(t,"meta",(function(){return b})),a.d(t,"headings",(function(){return p})),a.d(t,"default",(function(){return d}));var n=a("HALo"),i=a("dhJC"),o=(a("q1tI"),a("7ljp")),s=a("3Ukx"),r=a("HCau"),l=a("hykZ"),c=["components"],b={title:"SQLite",sourceCodeUrl:"https://github.com/expo/expo/tree/sdk-45/packages/expo-sqlite",packageName:"expo-sqlite"},p=[{depth:2,type:"text",title:"Guides"},{depth:3,type:"text",title:"Importing an existing database"},{depth:3,type:"text",title:"Executing statements outside of a transaction"},{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"API"}],u={meta:b,headings:p};function d(e){var t=e.components,a=Object(i.a)(e,c);return Object(o.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"expo-sqlite"))," gives your app access to a database that can be queried through a ",Object(o.b)("a",{parentName:"p",href:"https://www.w3.org/TR/webdatabase/"},"WebSQL"),"-like API. The database is persisted across restarts of your app."),Object(o.b)("p",null,"An ",Object(o.b)("a",{parentName:"p",href:"https://github.com/expo/examples/tree/master/with-sqlite"},"example to do list app")," is available that uses this module for storage."),Object(o.b)(l.a,{android:!0,emulator:!0,ios:!0,simulator:!0,mdxType:"PlatformsSection"}),Object(o.b)("h2",{id:"guides"},"Guides"),Object(o.b)("h3",{id:"importing-an-existing-database"},"Importing an existing database"),Object(o.b)("p",null,"In order to open a new SQLite database using an existing ",Object(o.b)("inlineCode",{parentName:"p"},".db")," file you already have, you need to do three things:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"expo install expo-file-system expo-asset")),Object(o.b)("li",{parentName:"ul"},"create a ",Object(o.b)("strong",{parentName:"li"},"metro.config.js")," file in the root of your project with the following contents (",Object(o.b)("a",{parentName:"li",href:"/guides/customizing-metro/#adding-more-file-extensions-to--assetexts"},"curious why? read here"),"):")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"const { getDefaultConfig } = require('expo/metro-config');\n\nconst defaultConfig = getDefaultConfig(__dirname);\n\ndefaultConfig.resolver.assetExts.push('db');\n\nmodule.exports = defaultConfig;\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Use the following function (or similar) to open your database:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"async function openDatabase(pathToDatabaseFile: string): Promise<SQLite.WebSQLDatabase> {\n  if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {\n    await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');\n  }\n  await FileSystem.downloadAsync(\n    Asset.fromModule(require(pathToDatabaseFile)).uri,\n    FileSystem.documentDirectory + 'SQLite/myDatabaseName.db'\n  );\n  return SQLite.openDatabase('myDatabaseName.db');\n}\n")),Object(o.b)("h3",{id:"executing-statements-outside-of-a-transaction"},"Executing statements outside of a transaction"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Please note that you should use this kind of execution only when it is necessary. For instance, when code is a no-op within transactions (like eg. ",Object(o.b)("inlineCode",{parentName:"p"},"PRAGMA foreign_keys = ON;"),").")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const db = SQLite.openDatabase('dbName', version);\n\ndb.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>\n  console.log('Foreign keys turned on')\n);\n")),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)(r.a,{mdxType:"APIInstallSection"}),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import * as SQLite from 'expo-sqlite';\n")),Object(o.b)(s.a,{packageName:"expo-sqlite",apiName:"SQLite",mdxType:"APISection"}))}d.isMDXComponent=!0}},[["1pVn",1,0,2,3,4,5,6,7,8,9,10,11,12,13,14]]]);