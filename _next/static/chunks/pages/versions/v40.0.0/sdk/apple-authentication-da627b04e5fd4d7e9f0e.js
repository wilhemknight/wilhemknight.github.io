_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[623],{IUKH:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return s})),n.d(t,"headings",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n("HALo"),i=n("dhJC"),o=(n("q1tI"),n("7ljp")),p=n("HCau"),l=n("hykZ"),r=["components"],s={title:"AppleAuthentication",sourceCodeUrl:"https://github.com/expo/expo/tree/sdk-40/packages/expo-apple-authentication"},c=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"Configuration"},{depth:2,type:"text",title:"Usage"},{depth:2,type:"text",title:"Development and Testing"},{depth:2,type:"text",title:"Verifying the Response from Apple"},{depth:2,type:"text",title:"API"},{depth:2,type:"text",title:"Methods"},{depth:3,type:"inlineCode",title:"AppleAuthentication.isAvailableAsync()"},{depth:4,type:"text",title:"Returns"},{depth:3,type:"inlineCode",title:"AppleAuthentication.signInAsync(options)"},{depth:4,type:"text",title:"Arguments"},{depth:4,type:"text",title:"Returns"},{depth:3,type:"inlineCode",title:"AppleAuthentication.getCredentialStateAsync(user)"},{depth:4,type:"text",title:"Arguments"},{depth:4,type:"text",title:"Returns"},{depth:2,type:"text",title:"Components"},{depth:3,type:"inlineCode",title:"AppleAuthentication.AppleAuthenticationButton"},{depth:4,type:"inlineCode",title:"AppleAuthentication.AppleAuthenticationButtonProps"},{depth:2,type:"text",title:"Enum Types"},{depth:3,type:"inlineCode",title:"AppleAuthentication.AppleAuthenticationButtonStyle"},{depth:3,type:"inlineCode",title:"AppleAuthentication.AppleAuthenticationButtonType"},{depth:3,type:"inlineCode",title:"AppleAuthentication.AppleAuthenticationCredentialState"},{depth:3,type:"inlineCode",title:"AppleAuthentication.AppleAuthenticationScope"},{depth:3,type:"inlineCode",title:"AppleAuthentication.AppleAuthenticationUserDetectionStatus"},{depth:2,type:"text",title:"Object Types"},{depth:3,type:"inlineCode",title:"AppleAuthentication.AppleAuthenticationCredential"},{depth:3,type:"inlineCode",title:"AppleAuthentication.AppleAuthenticationFullName"},{depth:3,type:"inlineCode",title:"AppleAuthentication.AppleAuthenticationSignInOptions"},{depth:2,type:"text",title:"Error Codes"}],b={meta:s,headings:c};function u(e){var t=e.components,n=Object(i.a)(e,r);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"expo-apple-authentication"))," provides Apple authentication for iOS 13+. It does not yet support lower iOS versions, Android, or web."),Object(o.b)("p",null,"Beginning with iOS 13, any app that includes third-party authentication options ",Object(o.b)("strong",{parentName:"p"},"must")," provide Apple authentication as an option in order to comply with App Store Review guidelines. Learn more about Apple authentication on the ",Object(o.b)("a",{parentName:"p",href:"https://developer.apple.com/sign-in-with-apple/"},'"Sign In with Apple" website'),"."),Object(o.b)(l.a,{ios:!0,simulator:!0,mdxType:"PlatformsSection"}),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)(p.b,{packageName:"expo-apple-authentication",mdxType:"InstallSection"}),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},'Enable the "Sign In with Apple" capability in your app. For bare projects, enable the capability in Xcode under "Signing & Capabilities" -- you\'ll need to be on Xcode 11 or later. For managed projects, set ',Object(o.b)("inlineCode",{parentName:"li"},"ios.usesAppleSignIn")," to ",Object(o.b)("inlineCode",{parentName:"li"},"true")," in app.json."),Object(o.b)("li",{parentName:"ol"},'Log into the Apple Developer Console, go to "Certificates, Identifiers, & Profiles" and then "Identifiers".'),Object(o.b)("li",{parentName:"ol"},"You need to choose a primary app for the Apple Sign In configuration. This is the app whose icon will show up in the Apple Sign In system UI. If you have a set of related apps you might choose the \"main\" app as the primary, but most likely you'll want to just use the app you're working on now as the primary."),Object(o.b)("li",{parentName:"ol"},'In the list of identifiers, click on the one corresponding to your primary app. Enable the "Sign In with Apple" capability, click "Edit", and choose the "Enable as a primary App ID" option. Save the new configuration.'),Object(o.b)("li",{parentName:"ol"},'If you chose a different app to be the primary, you\'ll also need to open up the configuration page for your current app, enable the "Sign In with Apple" capability, click "Edit" and choose the "Group with an existing primary App ID" option. Save this configuration as well.'),Object(o.b)("li",{parentName:"ol"},'Next, go to the "Keys" page and register a new key. Add the "Sign In with Apple" capability, and make sure to choose the correct primary app on the configuration screen.'),Object(o.b)("li",{parentName:"ol"},"Finally, when you want to make a standalone build to test with, run ",Object(o.b)("inlineCode",{parentName:"li"},"expo build:ios --clear-provisioning-profile --revoke-credentials")," so that your provisioning profile is regenerated with the new entitlement."),Object(o.b)("li",{parentName:"ol"},"(Optional) If you'd like to localize the button text, you can add ",Object(o.b)("inlineCode",{parentName:"li"},'"CFBundleAllowMixedLocalizations": true')," to your ",Object(o.b)("inlineCode",{parentName:"li"},"ios.infoPlist")," property ",Object(o.b)("a",{parentName:"li",href:"/../../../../../../workflow/configuration/#ios"},"in your app.json"),". Note: The localized value will only appear in your standalone app.")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import * as AppleAuthentication from 'expo-apple-authentication';\n\nfunction YourComponent() {\n  return (\n    <AppleAuthentication.AppleAuthenticationButton\n      buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}\n      buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}\n      cornerRadius={5}\n      style={{ width: 200, height: 44 }}\n      onPress={async () => {\n        try {\n          const credential = await AppleAuthentication.signInAsync({\n            requestedScopes: [\n              AppleAuthentication.AppleAuthenticationScope.FULL_NAME,\n              AppleAuthentication.AppleAuthenticationScope.EMAIL,\n            ],\n          });\n          // signed in\n        } catch (e) {\n          if (e.code === 'ERR_CANCELED') {\n            // handle that the user canceled the sign-in flow\n          } else {\n            // handle other errors\n          }\n        }\n      }}\n    />\n  );\n}\n")),Object(o.b)("h2",{id:"development-and-testing"},"Development and Testing"),Object(o.b)("p",null,"You can test this library in development in the iOS Expo Go without following any of the instructions above; however, you'll need to do this setup in order to use Apple Authentication in your standalone app. When you sign into Expo Go, the identifiers and values you receive will likely be different than what you'll receive in standalone apps."),Object(o.b)("p",null,"You can do limited testing of this library on the iOS simulator. However, not all methods will behave the same as on a device, so we highly recommend testing on a real device when possible while developing."),Object(o.b)("h2",{id:"verifying-the-response-from-apple"},"Verifying the Response from Apple"),Object(o.b)("p",null,"Apple's response includes a signed JWT with information about the user. To ensure that the response came from Apple, you can cryptographically verify the signature with Apple's public key, which is published at ",Object(o.b)("a",{parentName:"p",href:"https://appleid.apple.com/auth/keys"},"https://appleid.apple.com/auth/keys"),". This process is not specific to Expo."),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import * as AppleAuthentication from 'expo-apple-authentication';\n")),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"appleauthenticationisavailableasync"},Object(o.b)("inlineCode",{parentName:"h3"},"AppleAuthentication.isAvailableAsync()")),Object(o.b)("p",null,"Determine if the current device's operating system supports Apple authentication."),Object(o.b)("h4",{id:"returns"},"Returns"),Object(o.b)("p",null,"A promise that resolves to ",Object(o.b)("inlineCode",{parentName:"p"},"true")," if the system supports Apple authentication, and ",Object(o.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(o.b)("h3",{id:"appleauthenticationsigninasyncoptions"},Object(o.b)("inlineCode",{parentName:"h3"},"AppleAuthentication.signInAsync(options)")),Object(o.b)("p",null,"Sends a request to the operating system to initiate the Apple authentication flow, which will present a modal to the user over your app and allow them to sign in."),Object(o.b)("p",null,"You can request access to the user's full name and email address in this method, which allows you to personalize your UI for signed in users. However, users can deny access to either or both of these options at runtime."),Object(o.b)("p",null,"Additionally, you will only receive Apple Authentication Credentials the first time users sign into your app, so ",Object(o.b)("strong",{parentName:"p"},"you must store it for later use"),". It's best to store this information either server-side, or using ",Object(o.b)("a",{parentName:"p",href:"/versions/v40.0.0/sdk/securestore/"},"SecureStore"),", so that the data persists across app installs. You can use ",Object(o.b)("a",{parentName:"p",href:"/versions/v40.0.0/sdk/apple-authentication/#appleauthenticationappleauthenticationcredential"},Object(o.b)("inlineCode",{parentName:"a"},"AppleAuthenticationCredential.user"))," to identify the user, since this remains the same for apps released by the same developer."),Object(o.b)("h4",{id:"arguments"},"Arguments"),Object(o.b)("p",null,"An optional ",Object(o.b)("a",{parentName:"p",href:"/versions/v40.0.0/sdk/apple-authentication/#appleauthenticationappleauthenticationsigninoptions"},Object(o.b)("inlineCode",{parentName:"a"},"AppleAuthenticationSignInOptions"))," object with any of the following keys:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"requestedScopes (",Object(o.b)("em",{parentName:"strong"},Object(o.b)("a",{parentName:"em",href:"/versions/v40.0.0/sdk/apple-authentication/#appleauthenticationappleauthenticationscope"},"AppleAuthenticationScope"),"[]"),")")," (optional) - Array of user information scopes to which your app is requesting access. Note that the user can choose to deny your app access to any scope at the time of logging in. You will still need to handle ",Object(o.b)("inlineCode",{parentName:"li"},"null")," values for any scopes you request. Additionally, note that the requested scopes will only be provided to you ",Object(o.b)("strong",{parentName:"li"},"the first time each user signs into your app"),"; in subsequent requests they will be ",Object(o.b)("inlineCode",{parentName:"li"},"null"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"state (",Object(o.b)("em",{parentName:"strong"},"string"),")")," (optional) - An arbitrary string that is returned unmodified in the corresponding credential after a successful authentication. This can be used to verify that the response was from the request you made and avoid replay attacks. More information on this property is available in the OAuth 2.0 protocol ",Object(o.b)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc6749#section-10.12"},"RFC6749"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"nonce (",Object(o.b)("em",{parentName:"strong"},"string"),")")," (optional) - An arbitrary string that is used to prevent replay attacks. See more information on this in the ",Object(o.b)("a",{parentName:"li",href:"https://openid.net/specs/openid-connect-core-1_0.html#CodeFlowSteps"},"OpenID Connect specification"),".")),Object(o.b)("h4",{id:"returns-1"},"Returns"),Object(o.b)("p",null,"A promise that resolves to an ",Object(o.b)("a",{parentName:"p",href:"/versions/v40.0.0/sdk/apple-authentication/#appleauthenticationappleauthenticationcredential"},Object(o.b)("inlineCode",{parentName:"a"},"AppleAuthenticationCredential"))," object after a successful authentication, and rejects with ",Object(o.b)("inlineCode",{parentName:"p"},"ERR_CANCELED")," if the user cancels the sign-in operation."),Object(o.b)("h3",{id:"appleauthenticationgetcredentialstateasyncuser"},Object(o.b)("inlineCode",{parentName:"h3"},"AppleAuthentication.getCredentialStateAsync(user)")),Object(o.b)("p",null,"Queries the current state of a user credential, to determine if it is still valid or if it has been revoked."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note"),": This method must be tested on a real device. On the iOS simulator it always throws an error.")),Object(o.b)("h4",{id:"arguments-1"},"Arguments"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"user (",Object(o.b)("em",{parentName:"strong"},"string"),")")," - The unique identifier for the user whose credential state you'd like to check. This should come from the ",Object(o.b)("inlineCode",{parentName:"li"},"user")," field of an ",Object(o.b)("a",{parentName:"li",href:"/versions/v40.0.0/sdk/apple-authentication/#appleauthenticationappleauthenticationcredential"},Object(o.b)("inlineCode",{parentName:"a"},"AppleAuthenticationCredential"))," object.")),Object(o.b)("h4",{id:"returns-2"},"Returns"),Object(o.b)("p",null,"A promise that resolves to an ",Object(o.b)("a",{parentName:"p",href:"/versions/v40.0.0/sdk/apple-authentication/#appleauthenticationappleauthenticationcredentialstate"},Object(o.b)("inlineCode",{parentName:"a"},"AppleAuthenticationCredentialState"))," value depending on the state of the credential."),Object(o.b)("h2",{id:"components"},"Components"),Object(o.b)("h3",{id:"appleauthenticationappleauthenticationbutton"},Object(o.b)("inlineCode",{parentName:"h3"},"AppleAuthentication.AppleAuthenticationButton")),Object(o.b)("p",null,'This component displays the proprietary "Sign In with Apple" / "Continue with Apple" button on your screen. The App Store Guidelines require you to use this component to start the authentication process instead of a custom button. Limited customization of the button is available via the provided properties.'),Object(o.b)("p",null,"You should only attempt to render this if ",Object(o.b)("a",{parentName:"p",href:"/versions/v40.0.0/sdk/apple-authentication/#appleauthenticationisavailableasync"},Object(o.b)("inlineCode",{parentName:"a"},"AppleAuthentication.isAvailableAsync()"))," resolves to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),". This component will render nothing if it is not available and you will get a warning in development mode."),Object(o.b)("p",null,"The properties of this component extend from ",Object(o.b)("inlineCode",{parentName:"p"},"View"),"; however, you should not attempt to set ",Object(o.b)("inlineCode",{parentName:"p"},"backgroundColor")," or ",Object(o.b)("inlineCode",{parentName:"p"},"borderRadius")," with the ",Object(o.b)("inlineCode",{parentName:"p"},"style")," property. This will not work and is against the App Store Guidelines. Instead, you should use the ",Object(o.b)("inlineCode",{parentName:"p"},"buttonStyle")," property to choose one of the predefined color styles and the ",Object(o.b)("inlineCode",{parentName:"p"},"cornerRadius")," property to change the border radius of the button."),Object(o.b)("p",null,"Make sure to attach height and width via the style props as without these styles, the button will not appear on the screen."),Object(o.b)("h4",{id:"appleauthenticationappleauthenticationbuttonprops"},Object(o.b)("inlineCode",{parentName:"h4"},"AppleAuthentication.AppleAuthenticationButtonProps")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"onPress (",Object(o.b)("em",{parentName:"strong"},"function"),")")," - The method to call when the user presses the button. You should call ",Object(o.b)("a",{parentName:"li",href:"/versions/v40.0.0/sdk/apple-authentication/#appleauthenticationsigninasyncoptions"},Object(o.b)("inlineCode",{parentName:"a"},"AppleAuthentication.signInAsync"))," in here."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"buttonType (",Object(o.b)("em",{parentName:"strong"},Object(o.b)("a",{parentName:"em",href:"/versions/v40.0.0/sdk/apple-authentication/#appleauthenticationappleauthenticationbuttontype"},"AppleAuthenticationButtonType")),")"),' - The type of button text to display ("Sign In with Apple" vs. "Continue with Apple").'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"buttonStyle (",Object(o.b)("em",{parentName:"strong"},Object(o.b)("a",{parentName:"em",href:"/versions/v40.0.0/sdk/apple-authentication/#appleauthenticationappleauthenticationbuttonstyle"},"AppleAuthenticationButtonStyle")),")")," - The Apple-defined color scheme to use to display the button."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"cornerRadius (",Object(o.b)("em",{parentName:"strong"},"number"),")")," - The border radius to use when rendering the button. This works similarly to ",Object(o.b)("inlineCode",{parentName:"li"},"style.borderRadius")," in other Views.")),Object(o.b)("h2",{id:"enum-types"},"Enum Types"),Object(o.b)("h3",{id:"appleauthenticationappleauthenticationbuttonstyle"},Object(o.b)("inlineCode",{parentName:"h3"},"AppleAuthentication.AppleAuthenticationButtonStyle")),Object(o.b)("p",null,"An enum whose values control which pre-defined color scheme to use when rendering an ",Object(o.b)("a",{parentName:"p",href:"/versions/v40.0.0/sdk/apple-authentication/#appleauthenticationappleauthenticationbutton"},Object(o.b)("inlineCode",{parentName:"a"},"AppleAuthenticationButton")),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"AppleAuthenticationButtonStyle.WHITE"))," - White button with black text"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"AppleAuthenticationButtonStyle.WHITE_OUTLINE"))," - White button with a black outline and black text"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"AppleAuthenticationButtonStyle.BLACK"))," - Black button with white text")),Object(o.b)("h3",{id:"appleauthenticationappleauthenticationbuttontype"},Object(o.b)("inlineCode",{parentName:"h3"},"AppleAuthentication.AppleAuthenticationButtonType")),Object(o.b)("p",null,"An enum whose values control which pre-defined text to use when rendering an ",Object(o.b)("a",{parentName:"p",href:"/versions/v40.0.0/sdk/apple-authentication/#appleauthenticationappleauthenticationbutton"},Object(o.b)("inlineCode",{parentName:"a"},"AppleAuthenticationButton")),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"AppleAuthenticationButtonType.SIGN_IN")),' - "Sign in with Apple"'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"AppleAuthenticationButtonType.CONTINUE")),' - "Continue with Apple"'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"AppleAuthenticationButtonType.SIGN_UP")),' - "Sign up with Apple" ',Object(o.b)("strong",{parentName:"li"},"(requires iOS 13.2 or higher)"))),Object(o.b)("h3",{id:"appleauthenticationappleauthenticationcredentialstate"},Object(o.b)("inlineCode",{parentName:"h3"},"AppleAuthentication.AppleAuthenticationCredentialState")),Object(o.b)("p",null,"An enum whose values specify state of the credential when checked with ",Object(o.b)("a",{parentName:"p",href:"/versions/v40.0.0/sdk/apple-authentication/#appleauthenticationgetcredentialstateasyncuser"},Object(o.b)("inlineCode",{parentName:"a"},"AppleAuthentication.getCredentialStateAsync()")),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"AppleAuthenticationCredentialState.REVOKED"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"AppleAuthenticationCredentialState.AUTHORIZED"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"AppleAuthenticationCredentialState.NOT_FOUND"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"AppleAuthenticationCredentialState.TRANSFERRED")))),Object(o.b)("h3",{id:"appleauthenticationappleauthenticationscope"},Object(o.b)("inlineCode",{parentName:"h3"},"AppleAuthentication.AppleAuthenticationScope")),Object(o.b)("p",null,"An enum whose values specify scopes you can request when calling ",Object(o.b)("a",{parentName:"p",href:"/versions/v40.0.0/sdk/apple-authentication/#appleauthenticationsigninasyncoptions"},Object(o.b)("inlineCode",{parentName:"a"},"AppleAuthentication.signInAsync()")),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"AppleAuthenticationScope.FULL_NAME"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"AppleAuthenticationScope.EMAIL")))),Object(o.b)("h3",{id:"appleauthenticationappleauthenticationuserdetectionstatus"},Object(o.b)("inlineCode",{parentName:"h3"},"AppleAuthentication.AppleAuthenticationUserDetectionStatus")),Object(o.b)("p",null,"An enum whose values specify the system's best guess for how likely the current user is a real person."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"AppleAuthenticationUserDetectionStatus.UNSUPPORTED"))," - The system does not support this determination and there is no data."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"AppleAuthenticationUserDetectionStatus.UNKNOWN"))," - The system has not determined whether the user might be a real person."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"AppleAuthenticationUserDetectionStatus.LIKELY_REAL"))," - The user appears to be a real person.")),Object(o.b)("h2",{id:"object-types"},"Object Types"),Object(o.b)("h3",{id:"appleauthenticationappleauthenticationcredential"},Object(o.b)("inlineCode",{parentName:"h3"},"AppleAuthentication.AppleAuthenticationCredential")),Object(o.b)("p",null,"The object type returned from a successful call to ",Object(o.b)("a",{parentName:"p",href:"/versions/v40.0.0/sdk/apple-authentication/#appleauthenticationsigninasyncoptions"},Object(o.b)("inlineCode",{parentName:"a"},"AppleAuthentication.signInAsync"))," which contains all of the pertinent user and credential information."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"user (",Object(o.b)("em",{parentName:"strong"},"string"),")")," - An identifier associated with the authenticated user. You can use this to check if the user is still authenticated later. This is stable and can be shared across apps released under the same development team. The same user will have a different identifier for apps released by other developers."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"fullName (",Object(o.b)("em",{parentName:"strong"},Object(o.b)("a",{parentName:"em",href:"/versions/v40.0.0/sdk/apple-authentication/#appleauthenticationappleauthenticationfullname"},"AppleAuthenticationFullName")),")")," - The user's name. May be ",Object(o.b)("inlineCode",{parentName:"li"},"null")," or contain ",Object(o.b)("inlineCode",{parentName:"li"},"null")," values if you didn't request the ",Object(o.b)("inlineCode",{parentName:"li"},"FULL_NAME")," scope, if the user denied access, or if this is not the first time the user has signed into your app."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"email (",Object(o.b)("em",{parentName:"strong"},"string"),")")," - The user's email address. Might not be present if you didn't request the ",Object(o.b)("inlineCode",{parentName:"li"},"EMAIL")," scope. May also be null if this is not the first time the user has signed into your app. If the user chose to withhold their email address, this field will instead contain an obscured email address with an Apple domain."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"realUserStatus (",Object(o.b)("em",{parentName:"strong"},Object(o.b)("a",{parentName:"em",href:"/versions/v40.0.0/sdk/apple-authentication/#appleauthenticationappleauthenticationuserdetectionstatus"},"AppleAuthenticationUserDetectionStatus")),")")," - A value that indicates whether the user appears to the system to be a real person."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"state (",Object(o.b)("em",{parentName:"strong"},"string"),")")," - An arbitrary string that your app provided as ",Object(o.b)("inlineCode",{parentName:"li"},"state")," in the request that generated the credential. Used to verify that the response was from the request you made. Can be used to avoid replay attacks. If you did not provide ",Object(o.b)("inlineCode",{parentName:"li"},"state")," when making the sign-in request, this field will be ",Object(o.b)("inlineCode",{parentName:"li"},"null"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"identityToken (",Object(o.b)("em",{parentName:"strong"},"string"),")")," - A JSON Web Token (JWT) that securely communicates information about the user to your app."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"authorizationCode (",Object(o.b)("em",{parentName:"strong"},"string"),")")," - A short-lived session token used by your app for proof of authorization when interacting with the app's server counterpart. Unlike ",Object(o.b)("inlineCode",{parentName:"li"},"user"),", this is ephemeral and will change each session.")),Object(o.b)("h3",{id:"appleauthenticationappleauthenticationfullname"},Object(o.b)("inlineCode",{parentName:"h3"},"AppleAuthentication.AppleAuthenticationFullName")),Object(o.b)("p",null,"An object representing the tokenized portions of the user's full name. Any of all of the fields may be null; only applicable fields that the user has allowed your app to access will be nonnull."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"namePrefix (",Object(o.b)("em",{parentName:"strong"},"string"),")")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"givenName (",Object(o.b)("em",{parentName:"strong"},"string"),")")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"middleName (",Object(o.b)("em",{parentName:"strong"},"string"),")")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"familyName (",Object(o.b)("em",{parentName:"strong"},"string"),")")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"nameSuffix (",Object(o.b)("em",{parentName:"strong"},"string"),")")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"nickname (",Object(o.b)("em",{parentName:"strong"},"string"),")"))),Object(o.b)("h3",{id:"appleauthenticationappleauthenticationsigninoptions"},Object(o.b)("inlineCode",{parentName:"h3"},"AppleAuthentication.AppleAuthenticationSignInOptions")),Object(o.b)("p",null,"The options you can supply when making a call to ",Object(o.b)("a",{parentName:"p",href:"/versions/v40.0.0/sdk/apple-authentication/#appleauthenticationsigninasyncoptions"},Object(o.b)("inlineCode",{parentName:"a"},"AppleAuthentication.signInAsync()")),". None of these options are required."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"requestedScopes (",Object(o.b)("em",{parentName:"strong"},Object(o.b)("a",{parentName:"em",href:"/versions/v40.0.0/sdk/apple-authentication/#appleauthenticationappleauthenticationscope"},"AppleAuthenticationScope"),"[]"),")")," - The scope of personal information to which your app is requesting access. The user can choose to deny your app access to any scope at the time of logging in. Defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"[]")," (no scopes)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"state (",Object(o.b)("em",{parentName:"strong"},"string"),")")," - Data that's returned to you unmodified in the corresponding credential after a successful authentication. Used to verify that the response was from the request you made. Can be used to avoid replay attacks.")),Object(o.b)("h2",{id:"error-codes"},"Error Codes"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Code"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"ERR_APPLE_AUTHENTICATION_CREDENTIAL"),Object(o.b)("td",{parentName:"tr",align:null},"The request to get credential state failed. See the error message for additional specific information.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"ERR_APPLE_AUTHENTICATION_INVALID_SCOPE"),Object(o.b)("td",{parentName:"tr",align:null},"An invalid ",Object(o.b)("a",{parentName:"td",href:"/versions/v40.0.0/sdk/apple-authentication/#appleauthenticationappleauthenticationscope"},Object(o.b)("inlineCode",{parentName:"a"},"AppleAuthenticationScope"))," was passed in.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"ERR_APPLE_AUTHENTICATION_REQUEST_FAILED"),Object(o.b)("td",{parentName:"tr",align:null},"The authentication request failed. See the error message for additional specific information.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"ERR_APPLE_AUTHENTICATION_UNAVAILABLE"),Object(o.b)("td",{parentName:"tr",align:null},"Apple authentication is unavailable on the device.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"ERR_CANCELED"),Object(o.b)("td",{parentName:"tr",align:null},"The user canceled the sign-in request from the system modal.")))))}u.isMDXComponent=!0},nVKU:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v40.0.0/sdk/apple-authentication",function(){return n("IUKH")}])}},[["nVKU",1,0,2,3,4,5,6]]]);