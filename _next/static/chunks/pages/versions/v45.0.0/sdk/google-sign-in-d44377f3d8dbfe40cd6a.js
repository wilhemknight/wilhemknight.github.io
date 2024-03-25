_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[1466],{"6H2O":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v45.0.0/sdk/google-sign-in",function(){return t("vWKw")}])},vWKw:function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return s})),t.d(n,"headings",(function(){return b})),t.d(n,"default",(function(){return p}));var i=t("HALo"),o=t("dhJC"),a=(t("q1tI"),t("7ljp")),l=t("hykZ"),r=["components"],s={title:"GoogleSignIn",sourceCodeUrl:"https://github.com/expo/expo/tree/sdk-45/packages/expo-google-sign-in",packageName:"expo-google-sign-in"},b=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"Configuration"},{depth:3,type:"text",title:"Usage with Firebase"},{depth:2,type:"text",title:"Usage"},{depth:3,type:"text",title:"Initialization"},{depth:2,type:"text",title:"API"},{depth:2,type:"text",title:"Methods"},{depth:3,type:"inlineCode",title:"GoogleSignIn.getPlayServiceAvailability(shouldAsk)"},{depth:3,type:"inlineCode",title:"GoogleSignIn.askForPlayServicesAsync()"},{depth:3,type:"inlineCode",title:"GoogleSignIn.initAsync(options)"},{depth:3,type:"inlineCode",title:"GoogleSignIn.isSignedInAsync()"},{depth:3,type:"inlineCode",title:"GoogleSignIn.signInSilentlyAsync()"},{depth:3,type:"inlineCode",title:"GoogleSignIn.signInAsync()"},{depth:3,type:"inlineCode",title:"GoogleSignIn.signOutAsync()"},{depth:3,type:"inlineCode",title:"GoogleSignIn.isConnectedAsync()"},{depth:3,type:"inlineCode",title:"GoogleSignIn.disconnectAsync()"},{depth:3,type:"inlineCode",title:"GoogleSignIn.getCurrentUserAsync()"},{depth:3,type:"inlineCode",title:"GoogleSignIn.getCurrentUser()"},{depth:3,type:"inlineCode",title:"GoogleSignIn.getPhotoAsync(size)"},{depth:2,type:"text",title:"Types"},{depth:2,type:"text",title:"Classes"},{depth:3,type:"inlineCode",title:"GoogleAuthData"},{depth:4,type:"text",title:"Methods"},{depth:3,type:"inlineCode",title:"GoogleIdentity"},{depth:4,type:"text",title:"Variables"},{depth:3,type:"inlineCode",title:"GoogleUser"},{depth:4,type:"text",title:"Variables"},{depth:4,type:"text",title:"Methods"},{depth:3,type:"inlineCode",title:"GoogleAuthentication"},{depth:4,type:"text",title:"Variables"},{depth:2,type:"text",title:"Constants"},{depth:3,type:"inlineCode",title:"GoogleSignIn.ERRORS"},{depth:3,type:"inlineCode",title:"GoogleSignIn.SCOPES"},{depth:3,type:"inlineCode",title:"GoogleSignIn.TYPES"}],c={meta:s,headings:b};function p(e){var n=e.components,t=Object(o.a)(e,r);return Object(a.b)("wrapper",Object(i.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Deprecated.")," This package has been deprecated in favor of ",Object(a.b)("a",{parentName:"p",href:"/versions/v45.0.0/sdk/auth-session/"},Object(a.b)("inlineCode",{parentName:"a"},"expo-auth-session")),"'s Google provider (for web-browser based authentication) and ",Object(a.b)("a",{parentName:"p",href:"https://github.com/react-native-google-signin/google-signin#expo-installation"},"@react-native-google-signin/google-signin")," for authentication using Google's native APIs.")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"expo-google-sign-in")," provides native Google authentication for ",Object(a.b)("strong",{parentName:"p"},"standalone")," Expo apps or bare React Native apps. It cannot be used in Expo Go as the native ",Object(a.b)("inlineCode",{parentName:"p"},"GoogleSignIn")," library expects your ",Object(a.b)("inlineCode",{parentName:"p"},"REVERSED_CLIENT_ID")," in the ",Object(a.b)("strong",{parentName:"p"},"Info.plist")," at build-time. To use Google authentication in the Expo Go, and on web, check out ",Object(a.b)("a",{parentName:"p",href:"/guides/authentication/#google"},Object(a.b)("inlineCode",{parentName:"a"},"expo-auth-session")),"."),Object(a.b)(l.a,{android:!0,emulator:!0,ios:!0,simulator:!0,mdxType:"PlatformsSection"}),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("p",null,"For ",Object(a.b)("a",{parentName:"p",href:"/introduction/managed-vs-bare/#managed-workflow"},"managed")," apps, you'll need to run ",Object(a.b)("inlineCode",{parentName:"p"},"expo install expo-google-sign-in"),". To use it in a ",Object(a.b)("a",{parentName:"p",href:"/introduction/managed-vs-bare/#bare-workflow"},"bare")," React Native app, follow its ",Object(a.b)("a",{parentName:"p",href:"https://github.com/expo/expo/tree/main/packages/expo-google-sign-in"},"installation instructions"),"."),Object(a.b)("h2",{id:"configuration"},"Configuration"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Go to your ",Object(a.b)("strong",{parentName:"li"},"app.json")," and make sure you define your ",Object(a.b)("inlineCode",{parentName:"li"},"ios.bundleIdentifier")," and the ",Object(a.b)("inlineCode",{parentName:"li"},"android.package")," you want to use."),Object(a.b)("li",{parentName:"ol"},"For iOS, also set ",Object(a.b)("inlineCode",{parentName:"li"},"expo.ios.config.googleSignIn.reservedClientId")," to your reversed client ID.")),Object(a.b)("h3",{id:"usage-with-firebase"},"Usage with Firebase"),Object(a.b)("p",null,"When using Firebase, also configure the Google-services configuration files:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Open up ",Object(a.b)("a",{parentName:"li",href:"https://console.firebase.google.com"},"the Firebase Console")," and setup a new project, or use an existing one."),Object(a.b)("li",{parentName:"ol"},"Create a native iOS app using the ",Object(a.b)("inlineCode",{parentName:"li"},"ios.bundleIdentifier")," you defined earlier, and an Android app using the ",Object(a.b)("inlineCode",{parentName:"li"},"android.package"),"."),Object(a.b)("li",{parentName:"ol"},"(",Object(a.b)("strong",{parentName:"li"},"Android only"),') Go to your Firebase project\'s settings, scroll down to "Your apps" and select your Android app. Under ',Object(a.b)("inlineCode",{parentName:"li"},"SHA certificate fingerprints"),", click ",Object(a.b)("inlineCode",{parentName:"li"},"Add fingerprint"),", and paste the value of you get for ",Object(a.b)("inlineCode",{parentName:"li"},"Google Certificate Fingerprint")," when running ",Object(a.b)("inlineCode",{parentName:"li"},"expo fetch:android:hashes"),".",Object(a.b)("blockquote",{parentName:"li"},Object(a.b)("p",{parentName:"blockquote"},"If you haven't already run ",Object(a.b)("inlineCode",{parentName:"p"},"expo build:android")," for this project, you'll need to do that first before getting the Google Certificate Fingerprint."))),Object(a.b)("li",{parentName:"ol"},"Download the ",Object(a.b)("inlineCode",{parentName:"li"},"GoogleService-Info.plist")," (iOS) & the ",Object(a.b)("inlineCode",{parentName:"li"},"google-services.json")," (Android) from your Firebase project settings page. Move them to your Expo project."),Object(a.b)("li",{parentName:"ol"},"Modify ",Object(a.b)("strong",{parentName:"li"},"app.json"),":",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"For iOS",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Set your ",Object(a.b)("inlineCode",{parentName:"li"},"expo.ios.config.googleSignIn.reservedClientId")," to the value of ",Object(a.b)("inlineCode",{parentName:"li"},"REVERSED_CLIENT_ID")," in the ",Object(a.b)("inlineCode",{parentName:"li"},"GoogleService-Info.plist"),"."),Object(a.b)("li",{parentName:"ul"},"Set ",Object(a.b)("inlineCode",{parentName:"li"},"expo.ios.googleServicesFile")," to the relative path of your ",Object(a.b)("inlineCode",{parentName:"li"},"GoogleService-Info.plist"),". Make sure the file is located somewhere in your Expo project."))),Object(a.b)("li",{parentName:"ul"},"For Android",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Set ",Object(a.b)("inlineCode",{parentName:"li"},"expo.android.googleServicesFile")," to the relative path of your ",Object(a.b)("inlineCode",{parentName:"li"},"google-services.json"),". Make sure the file is located somewhere in your Expo project.")))))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},' // app.json\n{\n  "expo": {\n    "ios": {\n      // The bundle ID you used with your Firebase app\n      "bundleIdentifier": "example.expo.googlesignin",\n      "config": {\n        "googleSignIn": {\n          // Your REVERSED_CLIENT_ID from the GoogleService-Info.plist\n          "reservedClientId": "<YOUR_REVERSED_IOS_CLIENT_ID>"\n        }\n      },\n      // Optional path to the iOS file generated by Firebase\n      "googleServicesFile": "./GoogleService-Info.plist"\n    },\n    "android": {\n      // The package you used with your Firebase app\n      "package": "example.expo.googlesignin",\n      // Optional path to the Android file generated by Firebase\n      "googleServicesFile": "./google-services.json"\n    }\n  }\n}\n')),Object(a.b)("p",null,"At this point you can build your project and upload it to the App Store or the Google Play Store."),Object(a.b)("p",null,"When your app is built you can verify that the iOS URL Scheme is properly set up by reading it using the ",Object(a.b)("inlineCode",{parentName:"p"},"expo-app-auth")," module in a standalone app."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"import * as AppAuth from 'expo-app-auth';\n\n// When configured correctly, URLSchemes should contain your REVERSED_CLIENT_ID\nconst { URLSchemes } = AppAuth;\n")),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { Text } from 'react-native';\nimport * as GoogleSignIn from 'expo-google-sign-in';\n\nexport default class AuthScreen extends React.Component {\n  state = { user: null };\n\n  componentDidMount() {\n    this.initAsync();\n  }\n\n  initAsync = async () => {\n    await GoogleSignIn.initAsync({\n      // You may ommit the clientId when the firebase `googleServicesFile` is configured\n      clientId: '<YOUR_IOS_CLIENT_ID>',\n    });\n    this._syncUserWithStateAsync();\n  };\n\n  _syncUserWithStateAsync = async () => {\n    const user = await GoogleSignIn.signInSilentlyAsync();\n    this.setState({ user });\n  };\n\n  signOutAsync = async () => {\n    await GoogleSignIn.signOutAsync();\n    this.setState({ user: null });\n  };\n\n  signInAsync = async () => {\n    try {\n      await GoogleSignIn.askForPlayServicesAsync();\n      const { type, user } = await GoogleSignIn.signInAsync();\n      if (type === 'success') {\n        this._syncUserWithStateAsync();\n      }\n    } catch ({ message }) {\n      alert('login: Error:' + message);\n    }\n  };\n\n  onPress = () => {\n    if (this.state.user) {\n      this.signOutAsync();\n    } else {\n      this.signInAsync();\n    }\n  };\n\n  render() {\n    return <Text onPress={this.onPress}>Toggle Auth</Text>;\n  }\n}\n")),Object(a.b)("h3",{id:"initialization"},"Initialization"),Object(a.b)("p",null,"Before using the API we first need to call ",Object(a.b)("inlineCode",{parentName:"p"},"GoogleSignIn.initAsync({ ... })")," which configures how sign in functionality will work."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"try {\n  await GoogleSignIn.initAsync({\n    // You may ommit the clientId when the firebase `googleServicesFile` is configured\n    clientId: '<YOUR_IOS_CLIENT_ID>',\n    // Provide other custom options...\n  });\n} catch ({ message }) {\n  alert('GoogleSignIn.initAsync(): ' + message);\n}\n")),Object(a.b)("h2",{id:"api"},"API"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"import * as GoogleSignIn from 'expo-google-sign-in';\n")),Object(a.b)("h2",{id:"methods"},"Methods"),Object(a.b)("h3",{id:"googlesigningetplayserviceavailabilityshouldask"},Object(a.b)("inlineCode",{parentName:"h3"},"GoogleSignIn.getPlayServiceAvailability(shouldAsk)")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Android Only, this method always returns true on iOS")),Object(a.b)("p",null,"Use this method to determine if a user's device can utilize Google Sign-In functionality.\nBy default this method will assume the option is ",Object(a.b)("inlineCode",{parentName:"p"},"false")," and silently check for Play Services, whereas passing ",Object(a.b)("inlineCode",{parentName:"p"},"true")," will present a modal if the Play Services aren't available, prompting the user to update Play Services."),Object(a.b)("h3",{id:"googlesigninaskforplayservicesasync"},Object(a.b)("inlineCode",{parentName:"h3"},"GoogleSignIn.askForPlayServicesAsync()")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Android Only, this method always returns true on iOS")),Object(a.b)("p",null,"A convenience wrapper for ",Object(a.b)("inlineCode",{parentName:"p"},"GoogleSignIn.getPlayServiceAvailability(true)"),", this method will present a modal for the user to update Play Services if they aren't already up-to-date."),Object(a.b)("p",null,"Returns true after the user successfully updates."),Object(a.b)("h3",{id:"googlesignininitasyncoptions"},Object(a.b)("inlineCode",{parentName:"h3"},"GoogleSignIn.initAsync(options)")),Object(a.b)("p",null,"Configures how the ",Object(a.b)("inlineCode",{parentName:"p"},"GoogleSignIn")," module will attempt to sign in. You can call this method multiple times."),Object(a.b)("p",null,"See all the available options under the ",Object(a.b)("a",{parentName:"p",href:"/versions/v45.0.0/sdk/google-sign-in/#googlesigninoptions"},Object(a.b)("inlineCode",{parentName:"a"},"GoogleSignInOptions"))," type."),Object(a.b)("h3",{id:"googlesigninissignedinasync"},Object(a.b)("inlineCode",{parentName:"h3"},"GoogleSignIn.isSignedInAsync()")),Object(a.b)("p",null,"Asynchronously returns a boolean representing the user's authentication status."),Object(a.b)("h3",{id:"googlesigninsigninsilentlyasync"},Object(a.b)("inlineCode",{parentName:"h3"},"GoogleSignIn.signInSilentlyAsync()")),Object(a.b)("p",null,"This method will attempt to reauthenticate the user without initializing the authentication flow. If the method is successful, the currently authenticated ",Object(a.b)("inlineCode",{parentName:"p"},"GoogleUser")," will be returned, otherwise the method will return ",Object(a.b)("inlineCode",{parentName:"p"},"null"),"."),Object(a.b)("p",null,"On Android, the returned ",Object(a.b)("inlineCode",{parentName:"p"},"GoogleUser")," object may have a nonnull ",Object(a.b)("inlineCode",{parentName:"p"},"serverAuthCode")," rather than a ",Object(a.b)("inlineCode",{parentName:"p"},"refreshToken"),". If you need a refresh token, you can call Google's API directly to exchange the authorization code for a token. Instructions for how to perform this request can be found ",Object(a.b)("a",{parentName:"p",href:"https://developers.google.com/identity/protocols/OAuth2InstalledApp#exchange-authorization-code"},"in Google's documentation"),' ("Step 5: Exchange authorization code for refresh and access tokens"). The ',Object(a.b)("inlineCode",{parentName:"p"},"clientId")," in these requests is the ",Object(a.b)("strong",{parentName:"p"},"Web Client ID")," from the Google API Console."),Object(a.b)("h3",{id:"googlesigninsigninasync"},Object(a.b)("inlineCode",{parentName:"h3"},"GoogleSignIn.signInAsync()")),Object(a.b)("p",null,"Starts the native authentication flow with the information provided in ",Object(a.b)("inlineCode",{parentName:"p"},"GoogleSignIn.initAsync()"),".\nIf a user cancels, the method will return ",Object(a.b)("inlineCode",{parentName:"p"},"{ type: 'cancel', user: null }"),". However if a user successfully finishes the authentication flow, the returned value will be: ",Object(a.b)("inlineCode",{parentName:"p"},"{ type: 'success', user: GoogleUser }"),"."),Object(a.b)("p",null,"There are some errors that can be thrown while authenticating, check ",Object(a.b)("a",{parentName:"p",href:"/versions/v45.0.0/sdk/google-sign-in/#googlesigninerrors"},Object(a.b)("inlineCode",{parentName:"a"},"GoogleSignIn.ERRORS"))," for available error codes."),Object(a.b)("h3",{id:"googlesigninsignoutasync"},Object(a.b)("inlineCode",{parentName:"h3"},"GoogleSignIn.signOutAsync()")),Object(a.b)("p",null,"Signs out the currently authenticated user. Unlike ",Object(a.b)("inlineCode",{parentName:"p"},"GoogleSignIn.disconnectAsync()"),", this method will not revoke the access token. This means you can specify the ",Object(a.b)("inlineCode",{parentName:"p"},"accountName")," and reauthenticate without extra user approval."),Object(a.b)("h3",{id:"googlesigninisconnectedasync"},Object(a.b)("inlineCode",{parentName:"h3"},"GoogleSignIn.isConnectedAsync()")),Object(a.b)("p",null,"Returns true if a user is authenticated and the access token has not been invalidated."),Object(a.b)("h3",{id:"googlesignindisconnectasync"},Object(a.b)("inlineCode",{parentName:"h3"},"GoogleSignIn.disconnectAsync()")),Object(a.b)("p",null,"Signs out the current user and revokes the access tokens associated with the account. This will prevent reauthentication, whereas ",Object(a.b)("inlineCode",{parentName:"p"},"GoogleSignIn.signOutAsync()")," will not."),Object(a.b)("h3",{id:"googlesigningetcurrentuserasync"},Object(a.b)("inlineCode",{parentName:"h3"},"GoogleSignIn.getCurrentUserAsync()")),Object(a.b)("p",null,"If a user is authenticated, this method will return all the basic profile information in the form of a ",Object(a.b)("a",{parentName:"p",href:"/versions/v45.0.0/sdk/google-sign-in/#googleuser"},Object(a.b)("inlineCode",{parentName:"a"},"GoogleUser")),"."),Object(a.b)("h3",{id:"googlesigningetcurrentuser"},Object(a.b)("inlineCode",{parentName:"h3"},"GoogleSignIn.getCurrentUser()")),Object(a.b)("p",null,"Get the most recent instance of the authenticated ",Object(a.b)("a",{parentName:"p",href:"/versions/v45.0.0/sdk/google-sign-in/#googleuser"},Object(a.b)("inlineCode",{parentName:"a"},"GoogleUser")),"."),Object(a.b)("h3",{id:"googlesigningetphotoasyncsize"},Object(a.b)("inlineCode",{parentName:"h3"},"GoogleSignIn.getPhotoAsync(size)")),Object(a.b)("p",null,"Returns an image URI for the currently authenticated user. This method will return ",Object(a.b)("inlineCode",{parentName:"p"},"null")," if no user is signed in, or if the current user doesn't have a profile image on Google.\nThe default size is ",Object(a.b)("inlineCode",{parentName:"p"},"128px"),", if the requested image size is larger than the original image size, the full sized image will be returned."),Object(a.b)("h2",{id:"types"},"Types"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"/* Android Only */\ntype GoogleSignInType = 'default' | 'games';\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'type GoogleSignInOptions = {\n  /*\n   * [iOS][Android][optional]: `accountName: ?string`\n   * [default]: `[GoogleSignIn.SCOPES.PROFILE, GoogleSignIn.SCOPES.EMAIL]`\n   * Pass the scopes you wish to have access to.\n   */\n  scopes: ?Array<string>,\n\n  /*\n   * [iOS][Android][optional]: `webClientId: ?string`\n   * [default]: `undefined`\n   * The client ID of the home web server.  This will be returned as the |audience| property of the\n   * OpenID Connect ID token.  For more info on the ID token:\n   * https://developers.google.com/identity/sign-in/ios/backend-auth\n   */\n  webClientId: ?string,\n\n  /*\n   * [iOS][Android][optional]: `hostedDomain: ?string`\n   * [default]: `undefined`\n   * The hosted G Suite domain of the user. Provided only if the user belongs to a hosted domain.\n   */\n  hostedDomain: ?string,\n\n  /*\n   * [iOS][Android][optional]: `accountName: ?string`\n   * [default]: `undefined`\n   * If you know the user\'s email address ahead of time, you can add it here and it will be the default option\n   * if the user has approved access for this app, the Auth will return instantly.\n   */\n  accountName: ?string,\n\n  /*\n   * [Android][optional]: `signInType?: GoogleSignIn.TYPES.DEFAULT | GoogleSignIn.TYPES.GAMES`\n   * [default]: `undefined`\n   * The service you wish to sign in to\n   * GoogleSignIn.TYPES.DEFAULT | GoogleSignIn.TYPES.GAMES\n   */\n  signInType: ?GoogleSignInType,\n\n  /*\n   * [Android][optional]: `isOfflineEnabled: ?boolean`\n   * [default]: `undefined`\n   * If true, the server will return refresh tokens that can be used to access data when the user has unauthenticated.\n   * 1. Safely secure the refresh token as you can only get one during the initial auth flow.\n   * 2. There are only so many refresh tokens that are issued, limit per user/app, you can also get one for a single user across all clients in an app. If you requests too many tokens, older tokens will begin to be invalidated.\n   */\n  isOfflineEnabled: ?boolean,\n\n  /*\n   * [Android][optional]: `isPromptEnabled: ?boolean`\n   * [default]: false\n   * Forces the consent prompt to be shown everytime a user authenticates. Enable this only when necessary.\n   */\n  isPromptEnabled: ?boolean,\n\n  /*\n   * [iOS][optional]: `clientId: ?string`\n   * [default]: Read from GoogleService-Info.plist `CLIENT_ID` on iOS, and google-services.json `oauth_client.client_id` on Android.\n   * The client ID of the app from the Google APIs (or Firebase) console, this must be set for sign in to work.\n   * This value must be defined in the google-services.json on Android, you can define your custom google-services.json\n   */\n  clientId: ?string,\n\n  /*\n   * [iOS][optional]: `language: ?string`\n   * [default]: `undefined`\n   * The language for sign in, in the form of ISO 639-1 language code optionally followed by a dash\n   * and ISO 3166-1 alpha-2 region code, such as |@"it"| or |@"pt-PT"|. Only set if different from\n   * system default.\n   */\n  language: ?string,\n\n  /*\n   * [iOS][optional]: `openIdRealm?: ?string`\n   * [default]: `undefined`\n   * The OpenID2 realm of the home web server. This allows Google to include the user\'s OpenID\n   * Identifier in the OpenID Connect ID token..\n   */\n  openIdRealm: ?string,\n};\n')),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"type GoogleSignInAuthResultType = 'success' | 'cancel';\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"type GoogleSignInAuthResult = {\n  type: GoogleSignInAuthResultType,\n  user: ?User,\n};\n")),Object(a.b)("h2",{id:"classes"},"Classes"),Object(a.b)("h3",{id:"googleauthdata"},Object(a.b)("inlineCode",{parentName:"h3"},"GoogleAuthData")),Object(a.b)("p",null,"The base class for ",Object(a.b)("inlineCode",{parentName:"p"},"GoogleSignIn")," authentication data. This method enables you to compare and serialize objects."),Object(a.b)("h4",{id:"methods-1"},"Methods"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"equals(other: ?any): boolean")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"toJSON(): object"))),Object(a.b)("h3",{id:"googleidentity"},Object(a.b)("inlineCode",{parentName:"h3"},"GoogleIdentity")),Object(a.b)("p",null,"Extends ",Object(a.b)("a",{parentName:"p",href:"/versions/v45.0.0/sdk/google-sign-in/#googleauthdata"},Object(a.b)("inlineCode",{parentName:"a"},"GoogleAuthData")),", core management of user data."),Object(a.b)("h4",{id:"variables"},"Variables"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"uid: string;")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"email: string;")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"displayName: ?string;")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"photoURL: ?string;")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"firstName: ?string;")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"lastName: ?string;"))),Object(a.b)("h3",{id:"googleuser"},Object(a.b)("inlineCode",{parentName:"h3"},"GoogleUser")),Object(a.b)("p",null,"Extends ",Object(a.b)("a",{parentName:"p",href:"/versions/v45.0.0/sdk/google-sign-in/#googleidentity"},Object(a.b)("inlineCode",{parentName:"a"},"GoogleIdentity")),", manages all data regarding an authenticated user."),Object(a.b)("h4",{id:"variables-1"},"Variables"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"auth: ?GoogleAuthentication;")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"scopes: Array<string>;")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"hostedDomain: ?string;")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"serverAuthCode: ?string;"))),Object(a.b)("h4",{id:"methods-2"},"Methods"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"clearCache(): void")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"getHeaders(): Promise<{ [string]: string }>")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"refreshAuth(): Promise<?GoogleAuthentication>"))),Object(a.b)("h3",{id:"googleauthentication"},Object(a.b)("inlineCode",{parentName:"h3"},"GoogleAuthentication")),Object(a.b)("p",null,"Extends ",Object(a.b)("a",{parentName:"p",href:"/versions/v45.0.0/sdk/google-sign-in/#googleauthdata"},Object(a.b)("inlineCode",{parentName:"a"},"GoogleAuthData")),", manages the user tokens."),Object(a.b)("h4",{id:"variables-2"},"Variables"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"clientId: ?string;")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"accessToken: ?string;")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"accessTokenExpirationDate: ?number;")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"refreshToken: ?string;")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"idToken: ?string;")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"idTokenExpirationDate: ?number;")," | UNIX time in milliseconds")),Object(a.b)("h2",{id:"constants"},"Constants"),Object(a.b)("h3",{id:"googlesigninerrors"},Object(a.b)("inlineCode",{parentName:"h3"},"GoogleSignIn.ERRORS")),Object(a.b)("p",null,"All of the available authentication error codes."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GoogleSignIn.ERRORS.SIGN_IN_CANCELLED")," The user has cancelled the auth flow"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GoogleSignIn.ERRORS.SIGN_IN_REQUIRED")," Attempting to access user data before any user has been authenticated"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GoogleSignIn.ERRORS.TASK_IN_PROGRESS")," An existing auth task is already running."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GoogleSignIn.ERRORS.SIGN_IN_EXCEPTION")," A general error has occurred"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GoogleSignIn.ERRORS.SIGN_IN_FAILED")," A Play Services error has occurred (Android only)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GoogleSignIn.ERRORS.INVALID_ACCOUNT")," An invalid account has been provided with ",Object(a.b)("inlineCode",{parentName:"li"},"accountName")," (Android only)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GoogleSignIn.ERRORS.SIGN_IN_NETWORK_ERROR")," An issue with the internet connection has caused the auth task to fail (Android only)")),Object(a.b)("h3",{id:"googlesigninscopes"},Object(a.b)("inlineCode",{parentName:"h3"},"GoogleSignIn.SCOPES")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GoogleSignIn.SCOPES.PROFILE")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GoogleSignIn.SCOPES.EMAIL")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GoogleSignIn.SCOPES.OPEN_ID")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GoogleSignIn.SCOPES.PLUS_ME")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GoogleSignIn.SCOPES.GAMES")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GoogleSignIn.SCOPES.GAMES_LITE")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GoogleSignIn.SCOPES.CLOUD_SAVE")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GoogleSignIn.SCOPES.APP_STATE")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GoogleSignIn.SCOPES.DRIVE_FILE")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GoogleSignIn.SCOPES.DRIVE_APPFOLDER")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GoogleSignIn.SCOPES.DRIVE_FULL")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GoogleSignIn.SCOPES.DRIVE_APPS")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GoogleSignIn.SCOPES.FITNESS_ACTIVITY_READ")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GoogleSignIn.SCOPES.FITNESS_ACTIVITY_READ_WRITE")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GoogleSignIn.SCOPES.FITNESS_LOCATION_READ")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GoogleSignIn.SCOPES.FITNESS_LOCATION_READ_WRITE")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GoogleSignIn.SCOPES.FITNESS_BODY_READ")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GoogleSignIn.SCOPES.FITNESS_BODY_READ_WRITE")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GoogleSignIn.SCOPES.FITNESS_NUTRITION_READ")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GoogleSignIn.SCOPES.FITNESS_NUTRITION_READ_WRITE")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GoogleSignIn.SCOPES.FITNESS_BLOOD_PRESSURE_READ")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GoogleSignIn.SCOPES.FITNESS_BLOOD_PRESSURE_READ_WRITE")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GoogleSignIn.SCOPES.FITNESS_BLOOD_GLUCOSE_READ")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GoogleSignIn.SCOPES.FITNESS_BLOOD_GLUCOSE_READ_WRITE")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GoogleSignIn.SCOPES.FITNESS_OXYGEN_SATURATION_READ")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GoogleSignIn.SCOPES.FITNESS_OXYGEN_SATURATION_READ_WRITE")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GoogleSignIn.SCOPES.FITNESS_BODY_TEMPERATURE_READ")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GoogleSignIn.SCOPES.FITNESS_BODY_TEMPERATURE_READ_WRITE")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GoogleSignIn.SCOPES.FITNESS_REPRODUCTIVE_HEALTH_READ")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GoogleSignIn.SCOPES.FITNESS_REPRODUCTIVE_HEALTH_READ_WRITE"))),Object(a.b)("h3",{id:"googlesignintypes"},Object(a.b)("inlineCode",{parentName:"h3"},"GoogleSignIn.TYPES")),Object(a.b)("p",null,"All of the available sign in types."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GoogleSignIn.TYPES.DEFAULT")," The standard login method."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GoogleSignIn.TYPES.GAMES")," Sign in to Google Play Games (Android only)")))}p.isMDXComponent=!0}},[["6H2O",1,0,2,3,4,5]]]);