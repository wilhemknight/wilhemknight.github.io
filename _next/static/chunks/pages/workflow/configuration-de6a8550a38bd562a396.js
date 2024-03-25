_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[1526],{"c+Mm":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/workflow/configuration",function(){return n("lLK7")}])},lLK7:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return f})),n.d(t,"headings",(function(){return m})),n.d(t,"default",(function(){return d}));var o=n("HALo"),a=n("dhJC"),i=n("q1tI"),p=n("7ljp"),r=n("xvhg"),s=n("8jhV"),c=n("itSf"),l=n("AeFk"),b=function(e){var t=e.newUrl,n=i.useState(null),o=Object(r.a)(n,2),a=o[0],p=o[1];return i.useEffect((function(){var e=window.location.hash,t=e?e.replace("#",""):null;e&&!document.getElementById(t)&&p(t)}),[]),a?Object(l.c)("div",{css:c.a},Object(l.c)(s.b,null,"\u26a0\ufe0f The information you are looking for (addressed by ",Object(l.c)("em",null,'"',a,'"'),") has moved."," ",Object(l.c)("a",{href:"".concat(t,"#").concat(a)},"Continue to the new location."))):null},u=["components"],f={title:"Configuration with app.json / app.config.js"},m=[{depth:2,type:"text",title:"Properties"},{depth:2,type:"text",title:"Dynamic configuration with app.config.js"},{depth:3,type:"text",title:"Switching configuration based on the environment"},{depth:3,type:"text",title:"Using TypeScript for configuration: app.config.ts instead of app.config.js"},{depth:3,type:"text",title:"Configuration Resolution Rules"}],g={meta:f,headings:m};function d(e){var t=e.components,n=Object(a.a)(e,u);return Object(p.b)("wrapper",Object(o.a)({},g,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)(b,{newUrl:"/versions/latest/config/app/",mdxType:"PossibleRedirectNotification"}),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"app.json")," is your go-to place for configuring parts of your app that don't belong in code. It is located at the root of your project next to your ",Object(p.b)("strong",{parentName:"p"},"package.json"),". It looks something like this:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-javascript"},'{\n  "expo": {\n    "name": "My app",\n    "slug": "my-app"\n  }\n}\n')),Object(p.b)("p",null,"Most configuration from ",Object(p.b)("strong",{parentName:"p"},"app.json")," is accessible at runtime from your JavaScript code via ",Object(p.b)("a",{parentName:"p",href:"/../../../../../../versions/latest/sdk/constants/#expoconstantsmanifest"},Object(p.b)("inlineCode",{parentName:"a"},"Constants.manifest")),". Sensitive information such as secret keys are removed. See the ",Object(p.b)("inlineCode",{parentName:"p"},'"extra"')," key below for information about how to pass arbitrary configuration data to your app."),Object(p.b)("h2",{id:"properties"},"Properties"),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"app.json")," configures many things, from your app name to icon to splash screen and even deep linking scheme and API keys to use for some services. To see a full list of available properties, please refer to the ",Object(p.b)("a",{parentName:"p",href:"/../../../../../../versions/latest/config/app"},"app.json / app.config.js reference"),"."),Object(p.b)("blockquote",null,Object(p.b)("p",{parentName:"blockquote"},"\ud83d\udca1 Do you use Visual Studio Code? If so, we recommend that you install the ",Object(p.b)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=byCedric.vscode-expo"},"vscode-expo")," extension to get auto-completion of properties in ",Object(p.b)("strong",{parentName:"p"},"app.json")," files.")),Object(p.b)("h2",{id:"dynamic-configuration-with-appconfigjs"},"Dynamic configuration with app.config.js"),Object(p.b)("p",null,"For more customization you can use the JavaScript and TypeScript ",Object(p.b)("strong",{parentName:"p"},"app.config.js"),", or ",Object(p.b)("strong",{parentName:"p"},"app.config.ts"),". These configs have the following properties:"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"Comments, variables, and single quotes!"),Object(p.b)("li",{parentName:"ul"},"Importing/requiring other JavaScript files. Using import/export syntax in external files is not supported. All imported files must be transpiled to support your current version of Node.js. "),Object(p.b)("li",{parentName:"ul"},"TypeScript support with nullish coalescing and optional chaining."),Object(p.b)("li",{parentName:"ul"},"Updated whenever Metro bundler reloads."),Object(p.b)("li",{parentName:"ul"},"Provide environment information to your app."),Object(p.b)("li",{parentName:"ul"},"Does not support Promises.")),Object(p.b)("p",null,"For example, you can export an object as default to define your config in ",Object(p.b)("strong",{parentName:"p"},"app.config.js"),":"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-js"},"const myValue = 'My App';\n\nexport default {\n  name: myValue,\n  version: process.env.MY_CUSTOM_PROJECT_VERSION || '1.0.0',\n  // All values in extra will be passed to your app.\n  extra: {\n    fact: 'kittens are cool',\n  },\n};\n")),Object(p.b)("p",null,"Extras can be accessed via ",Object(p.b)("inlineCode",{parentName:"p"},"expo-constants"),":"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-ts"},"// App.js\nimport Constants from 'expo-constants';\n\nConstants.manifest.extra.fact === 'kittens are cool';\n")),Object(p.b)("p",null,"You can access and modify incoming config values by exporting a function that returns an object. This is useful if your project also has an ",Object(p.b)("strong",{parentName:"p"},"app.json"),". By default, Expo CLI will read the ",Object(p.b)("strong",{parentName:"p"},"app.json")," first and send the normalized results to the ",Object(p.b)("strong",{parentName:"p"},"app.config.js"),". This functionality is disabled when the ",Object(p.b)("inlineCode",{parentName:"p"},"--config")," is used to specify a custom config (also note that the ",Object(p.b)("a",{parentName:"p",href:"https://expo.fyi/config-flag-migration"},Object(p.b)("inlineCode",{parentName:"a"},"--config")," flag is deprecated"),")."),Object(p.b)("p",null,"For example, your ",Object(p.b)("strong",{parentName:"p"},"app.json")," could look like this:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-json"},'{\n  "expo": {\n    "name": "My App"\n  }\n}\n')),Object(p.b)("p",null,"And in your ",Object(p.b)("strong",{parentName:"p"},"app.config.js"),", you are provided with that configuration in the arguments to the exported function:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-js"},"export default ({ config }) => {\n  console.log(config.name); // prints 'My App'\n  return {\n    ...config,\n  };\n};\n")),Object(p.b)("h3",{id:"switching-configuration-based-on-the-environment"},"Switching configuration based on the environment"),Object(p.b)("p",null,"It's common to have some different configuration in development, staging, and production environments, or to swap out configuration entirely in order to white label an app. To accomplish this, you can use ",Object(p.b)("strong",{parentName:"p"},"app.config.js")," along with environment variables."),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-js"},"module.exports = () => {\n  if (process.env.MY_ENVIRONMENT === 'production') {\n    return {\n      /* your production config */\n    };\n  } else {\n    return {\n      /* your development config */\n    };\n  }\n};\n")),Object(p.b)("p",null,"To use this configuration with Expo CLI commands, set the environment variable either for specific commands or in your shell profile. To set environment variables for specific commands, prefix the command with the variables and values, for example: ",Object(p.b)("inlineCode",{parentName:"p"},"MY_ENVIRONMENT=production expo publish")," (this is not anything unique to Expo CLI). On Windows you can approximate this with ",Object(p.b)("inlineCode",{parentName:"p"},"npx cross-env MY_ENVIRONMENT=production expo publish"),", or use whichever other mechanism that you are comfortable with for environment variables."),Object(p.b)("h3",{id:"using-typescript-for-configuration-appconfigts-instead-of-appconfigjs"},"Using TypeScript for configuration: app.config.ts instead of app.config.js"),Object(p.b)("blockquote",null,Object(p.b)("p",{parentName:"blockquote"},"\u26a0\ufe0f This is experimental and subject to breaking changes.")),Object(p.b)("p",null,"You can use autocomplete and doc-blocks with a TypeScript config ",Object(p.b)("strong",{parentName:"p"},"app.config.ts"),". Install the unversioned typings for Expo config with ",Object(p.b)("inlineCode",{parentName:"p"},"yarn add -D @expo/config")," and create an ",Object(p.b)("strong",{parentName:"p"},"app.config.ts")," with the following contents:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-ts"},"// WARNING THIS ISN'T VERSIONED\nimport { ExpoConfig, ConfigContext } from '@expo/config';\n\nexport default ({ config }: ConfigContext): ExpoConfig => ({\n  ...config,\n  name: 'My App',\n});\n")),Object(p.b)("h3",{id:"configuration-resolution-rules"},"Configuration Resolution Rules"),Object(p.b)("p",null,"There are two different types of configs: static (",Object(p.b)("strong",{parentName:"p"},"app.config.json"),", ",Object(p.b)("strong",{parentName:"p"},"app.json"),"), and dynamic (",Object(p.b)("strong",{parentName:"p"},"app.config.js"),", ",Object(p.b)("strong",{parentName:"p"},"app.config.ts"),"). Static configs can be automatically updated with CLI tools, whereas dynamic configs must be manually updated by the developer."),Object(p.b)("ol",null,Object(p.b)("li",{parentName:"ol"},"The static config is read if ",Object(p.b)("strong",{parentName:"li"},"app.config.json")," exists (falls back to ",Object(p.b)("strong",{parentName:"li"},"app.json"),"). If no static config exists, then default values are inferred from the ",Object(p.b)("strong",{parentName:"li"},"package.json")," and your dependencies."),Object(p.b)("li",{parentName:"ol"},"The dynamic config is read if either ",Object(p.b)("strong",{parentName:"li"},"app.config.ts")," or ",Object(p.b)("strong",{parentName:"li"},"app.config.js")," exist. If both exist, then the TypeScript config is used."),Object(p.b)("li",{parentName:"ol"},"If the dynamic config returns a function, then the static config is passed to the function with ",Object(p.b)("inlineCode",{parentName:"li"},"({ config }) => ({})"),". This function can then mutate the static config values."),Object(p.b)("li",{parentName:"ol"},"The return value from the dynamic config is used as the final config. It cannot have any promises."),Object(p.b)("li",{parentName:"ol"},"All functions in the config are evaluated and serialized before any tool in the Expo ecosystem uses it. The config must be a JSON manifest when it is hosted.")))}d.isMDXComponent=!0}},[["c+Mm",1,0,2,3,8,9,11,21]]]);