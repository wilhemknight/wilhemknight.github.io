_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[497],{"5BX9":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s}));var i=n("q1tI"),r=n("AeFk"),a=Object(i.createContext)({version:"latest",hasVersion:!1,setVersion:function(e){throw new Error("PageApiVersionContext not found")}});function o(e){var t=c(e.router.pathname),n=null!==t,o=Object(i.useCallback)((function(t){e.router.push(function(e,t){var n=c(e);return n?e.replace(n,t):e}(e.router.pathname,t))}),[]);return Object(r.c)(a.Provider,{value:{setVersion:o,hasVersion:n,version:t||"latest"}},e.children)}function s(){return Object(i.useContext)(a)}function c(e){return function(e){return e.startsWith("/versions/")}(e)?e.split("/",3).pop():null}},"6FTQ":function(e,t,n){"use strict";function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}n.d(t,"a",(function(){return i}))},"8rE2":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("6FTQ");function r(e,t){if(e){if("string"===typeof e)return Object(i.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(i.a)(e,t):void 0}}},I0q5:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var i=n("z7pX"),r=n("H+61"),a=n("UlJF"),o=n("+Css"),s=n("7LId"),c=n("VIvw"),l=n("iHvq"),p=n("cpVT"),b=n("q1tI"),u=n("ufKf"),d=n("3zh3"),h=n("AeFk"),f=function(e){var t=e.size,n=void 0===t?24:t,i=e.stroke,r=void 0===i?d.palette.dark.white:i;return Object(h.c)("svg",{"aria-label":"check",width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(h.c)("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))},m=n("5BX9");function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=Object(l.a)(e);if(t){var r=Object(l.a)(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return Object(c.a)(this,n)}}var y="v".concat(n("kiQV").version),j=function(e){Object(s.a)(n,e);var t=g(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return e=t.call.apply(t,[this].concat(s)),Object(p.a)(Object(o.a)(e),"contentRef",b.createRef()),Object(p.a)(Object(o.a)(e),"state",{ready:!1}),Object(p.a)(Object(o.a)(e),"getSelectedDocsVersion",(function(){var t=e.context.version;return"latest"===t?y:t})),Object(p.a)(Object(o.a)(e),"getSnackSdkVersion",(function(){var t=e.getSelectedDocsVersion();return"unversioned"===t&&(t=y),t.replace("v","")})),Object(p.a)(Object(o.a)(e),"getExamplesPath",(function(){return"".concat(document.location.origin,"/static/examples/").concat(e.getSelectedDocsVersion())})),Object(p.a)(Object(o.a)(e),"getDependencies",(function(){return Object(i.a)(e.props.dependencies).join(",")})),Object(p.a)(Object(o.a)(e),"getCode",(function(){return(e.contentRef.current&&e.contentRef.current.textContent||"").replace(/%%placeholder-start%%.*%%placeholder-end%%/g,"")})),e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.setState({ready:!0})}},{key:"render",value:function(){return Object(h.c)("div",null,Object(h.c)("div",{ref:this.contentRef,style:this.props.contentHidden?{display:"none"}:void 0},this.props.children),Object(h.c)("form",{action:u.a,method:"POST",target:"_blank"},Object(h.c)("input",{type:"hidden",name:"platform",value:this.props.defaultPlatform||"android"}),Object(h.c)("input",{type:"hidden",name:"name",value:this.props.label||"Example"}),Object(h.c)("input",{type:"hidden",name:"dependencies",value:this.getDependencies()}),Object(h.c)("input",{type:"hidden",name:"sdkVersion",value:this.getSnackSdkVersion()}),this.props.platforms&&Object(h.c)("input",{type:"hidden",name:"supportedPlatforms",value:this.props.platforms.join(",")}),this.state.ready&&Object(h.c)("input",{type:"hidden",name:"files",value:JSON.stringify(Object(u.b)({templateId:this.props.templateId,code:this.getCode(),files:this.props.files,baseURL:this.getExamplesPath()}))}),Object(h.c)("button",{className:"snack-inline-example-button",disabled:!this.state.ready},Object(h.c)(f,{size:16})," ",this.props.buttonTitle||"Try this example on Snack")))}}]),n}(b.Component);Object(p.a)(j,"contextType",m.a),Object(p.a)(j,"defaultProps",{dependencies:[]})},JMMG:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return p})),n.d(t,"headings",(function(){return b})),n.d(t,"default",(function(){return d}));var i=n("HALo"),r=n("dhJC"),a=(n("q1tI"),n("7ljp")),o=n("HCau"),s=n("hykZ"),c=n("I0q5"),l=["components"],p={title:"FirebaseRecaptcha",sourceCodeUrl:"https://github.com/expo/expo/tree/main/packages/expo-firebase-recaptcha",packageName:"expo-firebase-recaptcha"},b=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"Basic usage"},{depth:2,type:"text",title:"Example usage"},{depth:2,type:"text",title:"Customizing the appearance"},{depth:2,type:"text",title:"API"},{depth:3,type:"inlineCode",title:"<FirebaseRecaptchaVerifierModal>"},{depth:4,type:"text",title:"Props"},{depth:3,type:"inlineCode",title:"<FirebaseRecaptcha>"},{depth:4,type:"text",title:"Props"},{depth:3,type:"inlineCode",title:"<FirebaseRecaptchaBanner>"},{depth:4,type:"text",title:"Props"},{depth:4,type:"text",title:"Example"},{depth:3,type:"inlineCode",title:"FirebaseAuthApplicationVerifier"},{depth:3,type:"inlineCode",title:"FirebaseRecaptchaVerifier"},{depth:4,type:"text",title:"Example"}],u={meta:p,headings:b};function d(e){var t=e.components,n=Object(r.a)(e,l);return Object(a.b)("wrapper",Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"expo-firebase-recaptcha"))," provides a set of building blocks for creating a reCAPTCHA verifier and using that with your Firebase Phone authentication workflow."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Firebase phone authentication is not possible out of the box using the Firebase JS SDK. This because an Application Verifier object (reCAPTCHA) is needed as an additional security measure to verify that the user is real and not a bot.")),Object(a.b)(s.a,{android:!0,emulator:!0,ios:!0,simulator:!0,web:!0,mdxType:"PlatformsSection"}),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)(o.a,{mdxType:"APIInstallSection"}),Object(a.b)("p",null,"Additionally, you'll also need to install the webview using ",Object(a.b)("inlineCode",{parentName:"p"},"expo install react-native-webview")),Object(a.b)("h2",{id:"basic-usage"},"Basic usage"),Object(a.b)("p",null,"To get started, ",Object(a.b)("a",{parentName:"p",href:"https://firebase.google.com/docs/auth/web/phone-auth"},"read the official Firebase phone-auth guide and ",Object(a.b)("strong",{parentName:"a"},"ignore all steps")," that cover the reCAPTCHA configuration.")),Object(a.b)("p",null,"Instead of using the standard ",Object(a.b)("inlineCode",{parentName:"p"},"firebase.auth.RecaptchaVerifier")," class, we will be using our own verifier which creates a reCAPTCHA widget inside a web-browser."),Object(a.b)("p",null,"Add the ",Object(a.b)("inlineCode",{parentName:"p"},"<FirebaseRecaptchaVerifierModal>")," component to your screen and store its ref for later use. Also pass in the Firebase web configuration using the ",Object(a.b)("inlineCode",{parentName:"p"},"firebaseConfig")," prop."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\ud83d\udea8 Optionally you can turn on ",Object(a.b)("strong",{parentName:"p"},"experimental invisible reCAPTCHA")," using ",Object(a.b)("inlineCode",{parentName:"p"},"attemptInvisibleVerification"),". This feature is experimental and attempts to complete the verification process without showing any UI to the user. When invisible verification fails, the full reCATPCHA challenge UI is shown. The Google terms for invisible reCAPTCHA apply - use ",Object(a.b)("inlineCode",{parentName:"p"},"<FirebaseRecaptchaBanner>")," to show the Google terms when using invisible reCAPTCHA.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},"<FirebaseRecaptchaVerifierModal\n  ref={/* store ref for later use */}\n  firebaseConfig={/* firebase web config */}\n  attemptInvisibleVerification={true | false /* experimental */}\n/>\n")),Object(a.b)("p",null,"Pass in the ",Object(a.b)("inlineCode",{parentName:"p"},"recaptchaVerifier")," ref to ",Object(a.b)("inlineCode",{parentName:"p"},"verifyPhoneNumber"),". This will automatically show the reCAPTCHA modal when calling ",Object(a.b)("inlineCode",{parentName:"p"},"verifyPhoneNumber"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const phoneProvider = new firebase.auth.PhoneAuthProvider();\nconst verificationId = await phoneProvider.verifyPhoneNumber('+0123456789', recaptchaVerifierRef);\n")),Object(a.b)("p",null,"You should now receive an SMS message on your phone. Create a text-input field and let the user enter the verification code.\nThe ",Object(a.b)("inlineCode",{parentName:"p"},"verificationId")," and the ",Object(a.b)("inlineCode",{parentName:"p"},"verificationCode")," can now be used to create a phone auth credential. Use that to sign in to firebase using ",Object(a.b)("inlineCode",{parentName:"p"},"signInWithCredential"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, verificationCode);\nconst authResult = await firebase.auth().signInWithCredential(credential);\n")),Object(a.b)("h2",{id:"example-usage"},"Example usage"),Object(a.b)("p",null,"The examples below assumes that you are using ",Object(a.b)("inlineCode",{parentName:"p"},"firebase@9.x.x"),"."),Object(a.b)(c.a,{label:"Firebase Phone Auth",dependencies:["expo-firebase-recaptcha","firebase","react-native-webview"],mdxType:"SnackInline"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport {\n  Text,\n  View,\n  TextInput,\n  Button,\n  StyleSheet,\n  TouchableOpacity,\n  Platform,\n} from 'react-native';\nimport { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from 'expo-firebase-recaptcha';\nimport { initializeApp, getApp } from 'firebase/app';\nimport { getAuth, PhoneAuthProvider, signInWithCredential } from 'firebase/auth';\n\n// Initialize Firebase JS SDK >=9.x.x\n// https://firebase.google.com/docs/web/setup\n/*try {\n  initializeApp({\n    ...\n  });\n} catch (err) {\n  // ignore app already initialized error in snack\n}*/\n\n// Firebase references\nconst app = getApp();\nconst auth = getAuth();\n\n// Double-check that we can run the example\nif (!app?.options || Platform.OS === 'web') {\n  throw new Error('This example only works on Android or iOS, and requires a valid Firebase config.');\n}\n\nexport default function App() {\n  // Ref or state management hooks\n  const recaptchaVerifier = React.useRef(null);\n  const [phoneNumber, setPhoneNumber] = React.useState();\n  const [verificationId, setVerificationId] = React.useState();\n  const [verificationCode, setVerificationCode] = React.useState();\n\n  const firebaseConfig = app ? app.options : undefined;\n  const [message, showMessage] = React.useState();\n  const attemptInvisibleVerification = false;\n\n  return (\n    <View style={{ padding: 20, marginTop: 50 }}>\n      <FirebaseRecaptchaVerifierModal\n        ref={recaptchaVerifier}\n        firebaseConfig={app.options}\n        // attemptInvisibleVerification\n      />\n      <Text style={{ marginTop: 20 }}>Enter phone number</Text>\n      <TextInput\n        style={{ marginVertical: 10, fontSize: 17 }}\n        placeholder=\"+1 999 999 9999\"\n        autoFocus\n        autoCompleteType=\"tel\"\n        keyboardType=\"phone-pad\"\n        textContentType=\"telephoneNumber\"\n        onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}\n      />\n      <Button\n        title=\"Send Verification Code\"\n        disabled={!phoneNumber}\n        onPress={async () => {\n          // The FirebaseRecaptchaVerifierModal ref implements the\n          // FirebaseAuthApplicationVerifier interface and can be\n          // passed directly to `verifyPhoneNumber`.\n          try {\n            const phoneProvider = new PhoneAuthProvider(auth);\n            const verificationId = await phoneProvider.verifyPhoneNumber(\n              phoneNumber,\n              recaptchaVerifier.current\n            );\n            setVerificationId(verificationId);\n            showMessage({\n              text: 'Verification code has been sent to your phone.',\n            });\n          } catch (err) {\n            showMessage({ text: `Error: ${err.message}`, color: 'red' });\n          }\n        }}\n      />\n      <Text style={{ marginTop: 20 }}>Enter Verification code</Text>\n      <TextInput\n        style={{ marginVertical: 10, fontSize: 17 }}\n        editable={!!verificationId}\n        placeholder=\"123456\"\n        onChangeText={setVerificationCode}\n      />\n      <Button\n        title=\"Confirm Verification Code\"\n        disabled={!verificationId}\n        onPress={async () => {\n          try {\n            const credential = PhoneAuthProvider.credential(\n              verificationId,\n              verificationCode\n            );\n            await signInWithCredential(auth, credential);\n            showMessage({ text: 'Phone authentication successful \ud83d\udc4d' });\n          } catch (err) {\n            showMessage({ text: `Error: ${err.message}`, color: 'red' });\n          }\n        }}\n      />\n      {message ? (\n        <TouchableOpacity\n          style={[\n            StyleSheet.absoluteFill,\n            { backgroundColor: 0xffffffee, justifyContent: 'center' },\n          ]}\n          onPress={() => showMessage(undefined)}>\n          <Text\n            style={{\n              color: message.color || 'blue',\n              fontSize: 17,\n              textAlign: 'center',\n              margin: 20,\n            }}>\n            {message.text}\n          </Text>\n        </TouchableOpacity>\n      ) : (\n        undefined\n      )}\n      {attemptInvisibleVerification && <FirebaseRecaptchaBanner />}\n    </View>\n  );\n}\n"))),Object(a.b)(c.a,{contentHidden:!0,buttonTitle:"Or try the Full Phone Authentication on Snack",label:"Firebase Full Phone Auth",dependencies:["expo-firebase-recaptcha","firebase","react-native-webview"],mdxType:"SnackInline"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react';\nimport {\n  Text,\n  View,\n  StyleSheet,\n  TextInput,\n  Button,\n  Alert,\n  ActivityIndicator,\n  Platform,\n} from 'react-native';\nimport * as FirebaseRecaptcha from 'expo-firebase-recaptcha';\nimport { initializeApp } from 'firebase/app';\nimport { getAuth, PhoneAuthProvider, signInWithCredential } from 'firebase/auth';\n\n// PROVIDE VALID FIREBASE >=9.x.x CONFIG HERE\n// https://firebase.google.com/docs/web/setup\nconst FIREBASE_CONFIG: any = {\n  /*apiKey: \"api-key\",\n  authDomain: \"project-id.firebaseapp.com\",\n  databaseURL: \"https://project-id.firebaseio.com\",\n  projectId: \"project-id\",\n  storageBucket: \"project-id.appspot.com\",\n  messagingSenderId: \"sender-id\",\n  appId: \"app-id\",\n  measurementId: \"G-measurement-id\",*/\n};\n\ntry {\n  if (FIREBASE_CONFIG.apiKey) {\n    initializeApp(FIREBASE_CONFIG);\n  }\n} catch (err) {\n  // ignore app already initialized error on snack\n}\n\n// Firebase references\nconst auth = getAuth();\n\nexport default function PhoneAuthScreen() {\n  const recaptchaVerifier = React.useRef(null);\n  const verificationCodeTextInput = React.useRef(null);\n  const [phoneNumber, setPhoneNumber] = React.useState('');\n  const [verificationId, setVerificationId] = React.useState('');\n  const [verifyError, setVerifyError] = React.useState();\n  const [verifyInProgress, setVerifyInProgress] = React.useState(false);\n  const [verificationCode, setVerificationCode] = React.useState('');\n  const [confirmError, setConfirmError] = React.useState();\n  const [confirmInProgress, setConfirmInProgress] = React.useState(false);\n  const isConfigValid = !!FIREBASE_CONFIG.apiKey;\n\n  return (\n    <View style={styles.container}>\n      <View style={styles.content}>\n        <FirebaseRecaptcha.FirebaseRecaptchaVerifierModal\n          ref={recaptchaVerifier}\n          firebaseConfig={FIREBASE_CONFIG}\n        />\n        <Text style={styles.title}>Firebase Phone Auth</Text>\n        <Text style={styles.subtitle}>using expo-firebase-recaptcha</Text>\n        <Text style={styles.text}>Enter phone number</Text>\n        <TextInput\n          style={styles.textInput}\n          autoFocus={isConfigValid}\n          autoCompleteType=\"tel\"\n          keyboardType=\"phone-pad\"\n          textContentType=\"telephoneNumber\"\n          placeholder=\"+1 999 999 9999\"\n          editable={!verificationId}\n          onChangeText={(phoneNumber: string) => setPhoneNumber(phoneNumber)}\n        />\n        <Button\n          title={`${verificationId ? 'Resend' : 'Send'} Verification Code`}\n          disabled={!phoneNumber}\n          onPress={async () => {\n            const phoneProvider = new PhoneAuthProvider(auth);\n            try {\n              setVerifyError(undefined);\n              setVerifyInProgress(true);\n              setVerificationId('');\n              const verificationId = await phoneProvider.verifyPhoneNumber(\n                phoneNumber,\n                // @ts-ignore\n                recaptchaVerifier.current\n              );\n              setVerifyInProgress(false);\n              setVerificationId(verificationId);\n              verificationCodeTextInput.current?.focus();\n            } catch (err) {\n              setVerifyError(err);\n              setVerifyInProgress(false);\n            }\n          }}\n        />\n        {verifyError && <Text style={styles.error}>{`Error: ${verifyError.message}`}</Text>}\n        {verifyInProgress && <ActivityIndicator style={styles.loader} />}\n        {verificationId ? (\n          <Text style={styles.success}>A verification code has been sent to your phone</Text>\n        ) : (\n          undefined\n        )}\n        <Text style={styles.text}>Enter verification code</Text>\n        <TextInput\n          ref={verificationCodeTextInput}\n          style={styles.textInput}\n          editable={!!verificationId}\n          placeholder=\"123456\"\n          onChangeText={(verificationCode: string) => setVerificationCode(verificationCode)}\n        />\n        <Button\n          title=\"Confirm Verification Code\"\n          disabled={!verificationCode}\n          onPress={async () => {\n            try {\n              setConfirmError(undefined);\n              setConfirmInProgress(true);\n              const credential = PhoneAuthProvider.credential(\n                verificationId,\n                verificationCode\n              );\n              const authResult = await signInWithCredential(auth, credential);\n              setConfirmInProgress(false);\n              setVerificationId('');\n              setVerificationCode('');\n              verificationCodeTextInput.current?.clear();\n              Alert.alert('Phone authentication successful!');\n            } catch (err) {\n              setConfirmError(err);\n              setConfirmInProgress(false);\n            }\n          }}\n        />\n        {confirmError && <Text style={styles.error}>{`Error: ${confirmError.message}`}</Text>}\n        {confirmInProgress && <ActivityIndicator style={styles.loader} />}\n      </View>\n      {!isConfigValid && (\n        <View style={styles.overlay} pointerEvents=\"none\">\n          <Text style={styles.overlayText}>\n            To get started, set a valid FIREBASE_CONFIG in App.tsx.\n          </Text>\n        </View>\n      )}\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    padding: 20,\n  },\n  content: {\n    marginTop: 50,\n  },\n  title: {\n    marginBottom: 2,\n    fontSize: 29,\n    fontWeight: 'bold',\n  },\n  subtitle: {\n    marginBottom: 10,\n    opacity: 0.35,\n    fontWeight: 'bold',\n  },\n  text: {\n    marginTop: 30,\n    marginBottom: 4,\n  },\n  textInput: {\n    marginBottom: 8,\n    fontSize: 17,\n    fontWeight: 'bold',\n  },\n  error: {\n    marginTop: 10,\n    fontWeight: 'bold',\n    color: 'red',\n  },\n  success: {\n    marginTop: 10,\n    fontWeight: 'bold',\n    color: 'blue',\n  },\n  loader: {\n    marginTop: 10,\n  },\n  overlay: {\n    ...StyleSheet.absoluteFillObject,\n    backgroundColor: '#FFFFFFC0',\n    justifyContent: 'center',\n    alignItems: 'center',\n  },\n  overlayText: {\n    fontWeight: 'bold',\n  },\n});\n"))),Object(a.b)("h2",{id:"customizing-the-appearance"},"Customizing the appearance"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"<FirebaseRecaptchaVerifierModal>")," has limited customisation options. You cannot change its appearance, but you can change the ",Object(a.b)("strong",{parentName:"p"},"title")," and the ",Object(a.b)("strong",{parentName:"p"},"cancel-label"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"<FirebaseRecaptchaVerifierModal\n  ref={...}\n  firebaseConfig={...}\n  title='Prove you are human!'\n  cancelLabel='Close'\n/>\n")),Object(a.b)("p",null,"If you want a custom look & feel, then create your own ",Object(a.b)("inlineCode",{parentName:"p"},"<Modal>")," or display the ",Object(a.b)("inlineCode",{parentName:"p"},"<FirebaseRecaptcha>"),' component inline in your screen. Make sure to reserve enough space for the widget as it can not only display the compact "I\'m not a robot" UI but also the ',Object(a.b)("strong",{parentName:"p"},"full verification UI requiring users to select images"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},"import { FirebaseRecaptchaVerifier } from 'expo-firebase-recaptcha';\n\nclass CustomPhoneAuthScreen extends React.Component {\n  state = {\n    recaptchaToken: ''\n  };\n\n  onPressSendVerificationCode = async () => {\n\n    // Create an application verifier from the reCAPTCHA token\n    const { recaptchaToken } = this.state;\n    if (!recaptchaToken) return;\n    const applicationVerifier = new FirebaseRecaptchaVerifier(recaptchaToken);\n\n    // Start phone autenthication\n    const phoneProvider = new PhoneAuthProvider();\n    const verificationId = await phoneProvider.verifyPhoneNumber(\n      '+0123456789',\n      applicationVerifier\n    );\n  };\n\n  render() {\n    return (\n      <FirebaseRecaptchaVerifier\n        style={...}\n        firebaseConfig={...}\n\n        // Store the reCAPTCHA token when it has been verified\n        onVerify={recaptchaToken => this.setState({\n          recaptchaToken\n        })} />\n    );\n  }\n}\n")),Object(a.b)("h2",{id:"api"},"API"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"import {\n  FirebaseRecaptcha,\n  FirebaseRecaptchaBanner,\n  FirebaseRecaptchaVerifier,\n  FirebaseRecaptchaVerifierModal,\n  FirebaseAuthApplicationVerifier,\n} from 'expo-firebase-recaptcha';\n")),Object(a.b)("h3",{id:"firebaserecaptchaverifiermodal"},Object(a.b)("inlineCode",{parentName:"h3"},"<FirebaseRecaptchaVerifierModal>")),Object(a.b)("p",null,"Modal screen that is automatically shown and displays a reCAPTCHA widget. The ref to the component implements the ",Object(a.b)("inlineCode",{parentName:"p"},"FirebaseAuthApplicationVerifier")," interface and can be used directly in the ",Object(a.b)("inlineCode",{parentName:"p"},"verifyPhoneNumber")," function."),Object(a.b)("h4",{id:"props"},"Props"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"firebaseConfig (IFirebaseOptions)")," -- Firebase web configuration."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"firebaseVersion (string)")," -- Optional version of the Firebase JavaScript SDK to load in the web-view. You can use this to load a custom or newer version. For example ",Object(a.b)("inlineCode",{parentName:"li"},'version="7.9.0"'),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"attemptInvisibleVerification (boolean)")," -- Attempts to verify without showing the reCAPTCHA workflow. The default is ",Object(a.b)("inlineCode",{parentName:"li"},"false"),". (Google terms apply - use ",Object(a.b)("inlineCode",{parentName:"li"},"FirebaseRecaptchaBanner")," to show te Google terms & policy)."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"appVerificationDisabledForTesting (boolean)")," -- When set, disables app verification for the purpose of testing phone authentication. When this prop is ",Object(a.b)("inlineCode",{parentName:"li"},"true"),", a mock reCAPTCHA is rendered. This is useful for manual testing during development or for automated integration tests. See ",Object(a.b)("a",{parentName:"li",href:"https://firebase.google.com/docs/auth/web/phone-auth#integration-testing"},"Firebase Phone Auth")," for more info."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"languageCode (string)")," -- Language to display the reCAPTCHA challenge in. For a list of possible languages, see ",Object(a.b)("a",{parentName:"li",href:"https://developers.google.com/recaptcha/docs/language"},"reCAPTCHA Language Codes"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"title (string)"),' -- Title that is displayed on the top of the modal. The default is "reCAPTCHA".'),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"cancelLabel (string)"),' -- Label of the cancel button. The default is "Cancel".')),Object(a.b)("h3",{id:"firebaserecaptcha"},Object(a.b)("inlineCode",{parentName:"h3"},"<FirebaseRecaptcha>")),Object(a.b)("p",null,"The reCAPTCHA v3 widget displayed inside a web-view."),Object(a.b)("h4",{id:"props-1"},"Props"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"firebaseConfig (IFirebaseOptions)")," -- Firebase web configuration."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"firebaseVersion (string)")," -- Optional version of the Firebase JavaScript SDK to load in the web-view. You can use this to load a custom or newer version. For example ",Object(a.b)("inlineCode",{parentName:"li"},'version="7.9.0"'),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"appVerificationDisabledForTesting (boolean)")," -- When set, disables app verification for the purpose of testing phone authentication. When this prop is ",Object(a.b)("inlineCode",{parentName:"li"},"true"),", a mock reCAPTCHA is rendered. This is useful for manual testing during development or for automated integration tests. See ",Object(a.b)("a",{parentName:"li",href:"https://firebase.google.com/docs/auth/web/phone-auth#integration-testing"},"Firebase Phone Auth")," for more info."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"languageCode (string)")," -- Language to display the reCAPTCHA challenge in. For a list of possible languages, see ",Object(a.b)("a",{parentName:"li",href:"https://developers.google.com/recaptcha/docs/language"},"reCAPTCHA Language Codes"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onLoad (function)")," -- A callback that is invoked when the widget has been loaded."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onError (function)")," -- A callback that is invoked when the widget failed to load."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onVerify (function)")," -- A callback that is invoked when reCAPTCHA has verified that the user is not a bot. The callback is provided with the reCAPTCHA token string. Example ",Object(a.b)("inlineCode",{parentName:"li"},"onVerify={(recaptchaToken: string) => this.setState({recaptchaToken})}"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onFullChallenge (function)")," -- A callback that is invoked when reCAPTCHA shows the full challenge experience."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"invisible (boolean)")," -- When ",Object(a.b)("inlineCode",{parentName:"li"},"true")," renders an ",Object(a.b)("inlineCode",{parentName:"li"},"invisible")," reCAPTCHA widget. The widget can then be triggered to verify invisibly by setting the ",Object(a.b)("inlineCode",{parentName:"li"},"verify")," prop to ",Object(a.b)("inlineCode",{parentName:"li"},"true"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"verify (boolean)")," -- Use this in combination with ",Object(a.b)("inlineCode",{parentName:"li"},"invisible=true")," so start the verification process.")),Object(a.b)("h3",{id:"firebaserecaptchabanner"},Object(a.b)("inlineCode",{parentName:"h3"},"<FirebaseRecaptchaBanner>")),Object(a.b)("p",null,"Renders a banner referring to the Google ",Object(a.b)("a",{parentName:"p",href:"https://policies.google.com/privacy"},"Privacy Policy")," and ",Object(a.b)("a",{parentName:"p",href:"https://policies.google.com/terms"},"Terms or Service"),". You can use this component to show the Google terms when using invisible reCAPTCHA."),Object(a.b)("h4",{id:"props-2"},"Props"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"textStyle (object)")," -- Style used for the reCAPTCHA banner text."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"linkStyle (object)")," -- Style used for the privacy and terms links text.")),Object(a.b)("h4",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"<FirebaseRecaptchaBanner\n  textStyle={{ fontSize: 14, opacity: 1 }}\n  linkStyle={{ fontWeight: 'bold' }}\n/>\n")),Object(a.b)("h3",{id:"firebaseauthapplicationverifier"},Object(a.b)("inlineCode",{parentName:"h3"},"FirebaseAuthApplicationVerifier")),Object(a.b)("p",null,"Interface describing a domain verification and abuse prevention verifier."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},'interface FirebaseAuthApplicationVerifier {\n  readonly type: string; // Identifies the type of application verifier (e.g. "recaptcha").\n  verify(): Promise<string>; // Returns a token that can be used to assert the validity of a request.\n}\n')),Object(a.b)("h3",{id:"firebaserecaptchaverifier"},Object(a.b)("inlineCode",{parentName:"h3"},"FirebaseRecaptchaVerifier")),Object(a.b)("p",null,"A helper class implementing the ",Object(a.b)("inlineCode",{parentName:"p"},"FirebaseAuthApplicationVerifier")," interface, which can be used when creating a customized reCAPTCHA workflow. The class takes a single ",Object(a.b)("inlineCode",{parentName:"p"},"string")," argument in the constructor which should be a valid reCAPTCHA token."),Object(a.b)("h4",{id:"example-1"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const applicationVerifier = new FirebaseRecaptchaVerifier(recaptchaToken);\n\nconst phoneProvider = new PhoneAuthProvider();\nconst verificationId = await phoneProvider.verifyPhoneNumber('+0123456789', applicationVerifier);\n")))}d.isMDXComponent=!0},cpVT:function(e,t,n){"use strict";function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return i}))},kiQV:function(e){e.exports=JSON.parse('{"name":"expo-docs","version":"44.0.0","private":true,"scripts":{"dev":"rimraf .next/preval && next dev -p 3002","build":"cross-env NODE_OPTIONS=--max-old-space-size=8192 next build","export":"yarn run build && next export && yarn run export-issue-404","export-issue-404":"echo \\"\ud83d\udee0  Patching https://github.com/vercel/next.js/issues/16528\\"; cp out/404/index.html out/404.html","export-server":"http-server out -p 8000","import-react-native-docs":"node ./scripts/import-react-native-docs.js","test-links":"node --async-stack-traces --unhandled-rejections=strict ./scripts/test-links.js","prettier":"prettier --write \'**/*.{js,ts,tsx,md}\'","lint":"tsc --noEmit && eslint .","lint-links":"remark -u validate-links ./pages","watch":"tsc --noEmit -w","test":"jest","schema-sync":"node --async-stack-traces --unhandled-rejections=strict ./scripts/schema-sync.js","remove-version":"node --unhandled-rejections=strict ./scripts/remove-version.js"},"resolutions":{"webpack":"^5.28.0"},"dependencies":{"@emotion/react":"^11.4.0","@expo/spawn-async":"^1.5.0","@expo/styleguide":"^4.0.1","@mdx-js/loader":"^1.6.22","@mdx-js/mdx":"^1.6.22","@mdx-js/react":"^1.6.22","@mdx-js/runtime":"^1.6.22","@reach/tabs":"^0.15.0","@sentry/browser":"^5.6.1","date-fns":"^2.28.0","docsearch.js":"^2.5.2","emoji-regex":"^9.2.2","front-matter":"^2.3.0","fs-extra":"^6.0.1","github-slugger":"^1.3.0","hotshot":"^1.0.5","lodash":"^4.17.20","next":"^11.1.4","nprogress":"0.2.0","path-browserify":"^1.0.1","prism-react-renderer":"1.0.2","prop-types":"15.7.2","react":"^17.0.2","react-diff-view":"^2.4.7","react-dom":"^17.0.2","react-feather":"^2.0.9","react-markdown":"^6.0.3","react-player":"^1.11.1","react-visibility-sensor":"^5.1.1","remark-gfm":"^1.0.0","tippy.js":"^6.3.1"},"devDependencies":{"@apidevtools/json-schema-ref-parser":"^9.0.9","@babel/core":"^7.13.14","@emotion/babel-preset-css-prop":"^11.2.0","@emotion/jest":"^11.7.1","@testing-library/jest-dom":"5.11.0","@testing-library/react":"10.4.3","@testing-library/react-hooks":"^7.0.2","@types/cacache":"^15.0.1","@types/fs-extra":"^9.0.11","@types/github-slugger":"^1.3.0","@types/google.analytics":"^0.0.41","@types/gtag.js":"^0.0.6","@types/lodash":"^4.14.161","@types/long":"^4.0.1","@types/mdx-js__react":"^1.5.3","@types/node":"^14.11.2","@types/nprogress":"^0.2.0","@types/react":"^17.0.11","axios":"^0.21.2","babel-plugin-module-resolver":"3.1.1","babel-plugin-preval":"^3.0.1","cross-env":"^5.2.0","danger":"^9.2.10","esbuild-loader":"^2.13.1","eslint":"^8.6.0","eslint-config-next":"^10.2.3","eslint-config-universe":"^10.0.0","eslint-plugin-lodash":"^7.3.0","http-server":"^0.12.3","jest":"^27.4.7","js-yaml":"^4.1.0","prettier":"^2.3.1","puppeteer":"^10.2.0","react-test-renderer":"^17.0.2","rehype-slug":"^4.0.1","remark-cli":"^9.0.0","remark-frontmatter":"^2.0.0","remark-validate-links":"^10.0.4","rimraf":"^3.0.2","semver":"^7.3.5","sitemap":"^6.3.0","typescript":"^4.5.4","unist-builder":"^2.0.0","unist-util-visit":"^2.0.3"}}')},r4AL:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/unversioned/sdk/firebase-recaptcha",function(){return n("JMMG")}])},ufKf:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r}));var i="https://snack.expo.dev";function r(e){var t=e.templateId,n=e.code,i=e.files,r=e.baseURL,a={};return i&&Object.keys(i).forEach((function(e){var t=i[e],n=/\.(jsx?|tsx?|json|md)$/i.test(e);a[e]=n?{type:"CODE",url:t.match(/^https?:\/\//)?t:"".concat(r,"/").concat(t)}:{type:"ASSET",contents:t}})),t?a["App.js"]={type:"CODE",url:"".concat(r,"/").concat(t,".js")}:n&&(a["App.js"]={type:"CODE",contents:n}),a}},z7pX:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("6FTQ");var r=n("8rE2");function a(e){return function(e){if(Array.isArray(e))return Object(i.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},[["r4AL",1,0,2,3,4,5,6]]]);