_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[654],{I5eT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v40.0.0/sdk/facedetector",function(){return n("qWBj")}])},qWBj:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return s})),n.d(t,"headings",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n("HALo"),i=n("dhJC"),o=(n("q1tI"),n("7ljp")),r=n("HCau"),b=n("hykZ"),c=["components"],s={title:"FaceDetector",sourceCodeUrl:"https://github.com/expo/expo/tree/sdk-40/packages/expo-face-detector"},l=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"Usage"},{depth:3,type:"text",title:"Known issues"},{depth:2,type:"text",title:"API"},{depth:3,type:"text",title:"Settings"},{depth:3,type:"text",title:"Event shape"},{depth:2,type:"text",title:"Methods"},{depth:3,type:"inlineCode",title:"FaceDetector.detectFacesAsync(uri, options)"},{depth:4,type:"text",title:"Arguments"},{depth:4,type:"text",title:"Returns"},{depth:4,type:"text",title:"Detected face schema"}],m={meta:s,headings:l};function p(e){var t=e.components,n=Object(i.a)(e,c);return Object(o.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"expo-face-detector"))," lets you use the power of the ",Object(o.b)("a",{parentName:"p",href:"https://developers.google.com/vision/face-detection-concepts"},"Google Mobile Vision")," framework to detect faces on images."),Object(o.b)(b.a,{android:!0,ios:!0,mdxType:"PlatformsSection"}),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)(r.b,{packageName:"expo-face-detector",mdxType:"InstallSection"}),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("h3",{id:"known-issues"},"Known issues"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Android does not recognize faces that aren't aligned with the interface (top of the interface matches top of the head).")),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import * as FaceDetector from 'expo-face-detector';\n")),Object(o.b)("h3",{id:"settings"},"Settings"),Object(o.b)("p",null,"In order to configure detector's behavior modules pass a settings object which is then interpreted by this module. The shape of the object should be as follows:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"mode? (",Object(o.b)("em",{parentName:"strong"},"FaceDetector.Constants.Mode"),")")," -- Whether to detect faces in fast or accurate mode. Use ",Object(o.b)("inlineCode",{parentName:"li"},"FaceDetector.Constants.Mode.{fast, accurate}"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"detectLandmarks? (",Object(o.b)("em",{parentName:"strong"},"FaceDetector.Constants.Landmarks"),")")," -- Whether to detect and return landmarks positions on the face (ears, eyes, mouth, cheeks, nose). Use ",Object(o.b)("inlineCode",{parentName:"li"},"FaceDetector.Constants.Landmarks.{all, none}"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"runClassifications? (",Object(o.b)("em",{parentName:"strong"},"FaceDetector.Constants.Classifications"),")")," -- Whether to run additional classifications on detected faces (smiling probability, open eye probabilities). Use ",Object(o.b)("inlineCode",{parentName:"li"},"FaceDetector.Constants.Classifications.{all, none}"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"minDetectionInterval? (",Object(o.b)("em",{parentName:"strong"},"long"),")")," -- Minimal interval in milliseconds between two face detection events being submitted to JS. Defaults to 0. Use, when you expect lots of faces for long time and are afraid of JS Bridge being overloaded."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"tracking? (",Object(o.b)("em",{parentName:"strong"},"boolean"),")")," - Flag to enable tracking of faces between frames. If true, each face will be returned with ",Object(o.b)("inlineCode",{parentName:"li"},"faceID")," attribute which should be consistent across frames. Defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"false"),";")),Object(o.b)("p",null,"Eg. you could use the following snippet to detect faces in fast mode without detecting landmarks or whether face is smiling:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import * as FaceDetector from 'expo-face-detector';\n\n<Camera\n  // ... other props\n  onFacesDetected={this.handleFacesDetected}\n  faceDetectorSettings={{\n    mode: FaceDetector.Constants.Mode.fast,\n    detectLandmarks: FaceDetector.Constants.Landmarks.none,\n    runClassifications: FaceDetector.Constants.Classifications.none,\n    minDetectionInterval: 100,\n    tracking: true,\n  }}\n/>;\n")),Object(o.b)("h3",{id:"event-shape"},"Event shape"),Object(o.b)("p",null,"While detecting faces, ",Object(o.b)("inlineCode",{parentName:"p"},"FaceDetector")," will emit object events of the following shape:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"faces")," (",Object(o.b)("em",{parentName:"li"},"array"),") - array of faces objects:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"faceID (",Object(o.b)("em",{parentName:"strong"},"number"),")")," -- a face identifier (used for tracking, if the same face appears on consecutive frames it will have the same ",Object(o.b)("inlineCode",{parentName:"li"},"faceID"),")."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"bounds (",Object(o.b)("em",{parentName:"strong"},"object"),")")," -- an object containing:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"origin (",Object(o.b)("inlineCode",{parentName:"strong"},"{ x: number, y: number }"),")")," -- position of the top left corner of a square containing the face in view coordinates,"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"size (",Object(o.b)("inlineCode",{parentName:"strong"},"{ width: number, height: number }"),")")," -- size of the square containing the face in view coordinates,"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"rollAngle (",Object(o.b)("em",{parentName:"strong"},"number"),")")," -- roll angle of the face (bank),"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"yawAngle (",Object(o.b)("em",{parentName:"strong"},"number"),")")," -- yaw angle of the face (heading, turning head left or right),"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"smilingProbability (",Object(o.b)("em",{parentName:"strong"},"number"),")")," -- probability that the face is smiling,"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"leftEarPosition (",Object(o.b)("inlineCode",{parentName:"strong"},"{ x: number, y: number}"),")")," -- position of the left ear in view coordinates,"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"rightEarPosition (",Object(o.b)("inlineCode",{parentName:"strong"},"{ x: number, y: number}"),")")," -- position of the right ear in view coordinates,"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"leftEyePosition (",Object(o.b)("inlineCode",{parentName:"strong"},"{ x: number, y: number}"),")")," -- position of the left eye in view coordinates,"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"leftEyeOpenProbability (",Object(o.b)("em",{parentName:"strong"},"number"),")")," -- probability that the left eye is open,"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"rightEyePosition (",Object(o.b)("inlineCode",{parentName:"strong"},"{ x: number, y: number}"),")")," -- position of the right eye in view coordinates,"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"rightEyeOpenProbability (",Object(o.b)("em",{parentName:"strong"},"number"),")")," -- probability that the right eye is open,"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"leftCheekPosition (",Object(o.b)("inlineCode",{parentName:"strong"},"{ x: number, y: number}"),")")," -- position of the left cheek in view coordinates,"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"rightCheekPosition (",Object(o.b)("inlineCode",{parentName:"strong"},"{ x: number, y: number}"),")")," -- position of the right cheek in view coordinates,"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"mouthPosition (",Object(o.b)("inlineCode",{parentName:"strong"},"{ x: number, y: number}"),")")," -- position of the center of the mouth in view coordinates,"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"leftMouthPosition (",Object(o.b)("inlineCode",{parentName:"strong"},"{ x: number, y: number}"),")")," -- position of the left edge of the mouth in view coordinates,"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"rightMouthPosition (",Object(o.b)("inlineCode",{parentName:"strong"},"{ x: number, y: number}"),")")," -- position of the right edge of the mouth in view coordinates,"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"noseBasePosition (",Object(o.b)("inlineCode",{parentName:"strong"},"{ x: number, y: number}"),")")," -- position of the nose base in view coordinates.")))),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"smilingProbability"),", ",Object(o.b)("inlineCode",{parentName:"p"},"leftEyeOpenProbability")," and ",Object(o.b)("inlineCode",{parentName:"p"},"rightEyeOpenProbability")," are returned only if ",Object(o.b)("inlineCode",{parentName:"p"},"faceDetectionClassifications")," property is set to ",Object(o.b)("inlineCode",{parentName:"p"},".all"),"."),Object(o.b)("p",null,"Positions of face landmarks are returned only if ",Object(o.b)("inlineCode",{parentName:"p"},"faceDetectionLandmarks")," property is set to ",Object(o.b)("inlineCode",{parentName:"p"},".all"),"."),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("p",null,"To use methods that ",Object(o.b)("inlineCode",{parentName:"p"},"FaceDetector")," exposes one just has to import the module. (In ejected apps on iOS face detection will be supported only if you add the ",Object(o.b)("inlineCode",{parentName:"p"},"FaceDetector")," subspec to your project. Refer to ",Object(o.b)("a",{parentName:"p",href:"/versions/v40.0.0/sdk/payments/#adding-the-payments-module-on-ios"},"Adding the Payments Module on iOS")," for an example of adding a subspec to your ejected project.)"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"import * as FaceDetector from 'expo-face-detector';\n\n// ...\ndetectFaces = async imageUri => {\n  const options = { mode: FaceDetector.Constants.Mode.fast };\n  return await FaceDetector.detectFacesAsync(imageUri, options);\n};\n// ...\n")),Object(o.b)("h3",{id:"facedetectordetectfacesasyncuri-options"},Object(o.b)("inlineCode",{parentName:"h3"},"FaceDetector.detectFacesAsync(uri, options)")),Object(o.b)("p",null,"Detect faces on a picture."),Object(o.b)("h4",{id:"arguments"},"Arguments"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"uri (",Object(o.b)("em",{parentName:"strong"},"string"),")")," -- ",Object(o.b)("inlineCode",{parentName:"li"},"file://")," URI to the image."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"options? (",Object(o.b)("em",{parentName:"strong"},"object"),")")," -- A map of options:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"mode? (",Object(o.b)("em",{parentName:"strong"},"FaceDetector.Constants.Mode"),")")," -- Whether to detect faces in fast or accurate mode. Use ",Object(o.b)("inlineCode",{parentName:"li"},"FaceDetector.Constants.Mode.{fast, accurate}"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"detectLandmarks? (",Object(o.b)("em",{parentName:"strong"},"FaceDetector.Constants.Landmarks"),")")," -- Whether to detect and return landmarks positions on the face (ears, eyes, mouth, cheeks, nose). Use ",Object(o.b)("inlineCode",{parentName:"li"},"FaceDetector.Constants.Landmarks.{all, none}"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"runClassifications? (",Object(o.b)("em",{parentName:"strong"},"FaceDetector.Constants.Classifications"),")")," -- Whether to run additional classifications on detected faces (smiling probability, open eye probabilities). Use ",Object(o.b)("inlineCode",{parentName:"li"},"FaceDetector.Constants.Classifications.{all, none}"),".")))),Object(o.b)("h4",{id:"returns"},"Returns"),Object(o.b)("p",null,"Returns a Promise that resolves to an object: ",Object(o.b)("inlineCode",{parentName:"p"},"{ faces, image }")," where ",Object(o.b)("inlineCode",{parentName:"p"},"faces")," is an array of the detected faces and ",Object(o.b)("inlineCode",{parentName:"p"},"image")," is an object containing ",Object(o.b)("inlineCode",{parentName:"p"},"uri: string")," of the image, ",Object(o.b)("inlineCode",{parentName:"p"},"width: number")," of the image in pixels, ",Object(o.b)("inlineCode",{parentName:"p"},"height: number")," of the image in pixels and ",Object(o.b)("inlineCode",{parentName:"p"},"orientation: number")," of the image (value conforms to the EXIF orientation tag standard)."),Object(o.b)("h4",{id:"detected-face-schema"},"Detected face schema"),Object(o.b)("p",null,"A detected face is an object containing at most following fields:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"bounds (",Object(o.b)("em",{parentName:"strong"},"object"),")")," -- an object containing:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"origin (",Object(o.b)("inlineCode",{parentName:"strong"},"{ x: number, y: number }"),")")," -- position of the top left corner of a square containing the face in image coordinates,"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"size (",Object(o.b)("inlineCode",{parentName:"strong"},"{ width: number, height: number }"),")")," -- size of the square containing the face in image coordinates,"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"rollAngle (",Object(o.b)("em",{parentName:"strong"},"number"),")")," -- roll angle of the face (bank),"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"yawAngle (",Object(o.b)("em",{parentName:"strong"},"number"),")")," -- yaw angle of the face (heading, turning head left or right),"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"smilingProbability (",Object(o.b)("em",{parentName:"strong"},"number"),")")," -- probability that the face is smiling,"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"leftEarPosition (",Object(o.b)("inlineCode",{parentName:"strong"},"{ x: number, y: number}"),")")," -- position of the left ear in image coordinates,"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"rightEarPosition (",Object(o.b)("inlineCode",{parentName:"strong"},"{ x: number, y: number}"),")")," -- position of the right ear in image coordinates,"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"leftEyePosition (",Object(o.b)("inlineCode",{parentName:"strong"},"{ x: number, y: number}"),")")," -- position of the left eye in image coordinates,"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"leftEyeOpenProbability (",Object(o.b)("em",{parentName:"strong"},"number"),")")," -- probability that the left eye is open,"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"rightEyePosition (",Object(o.b)("inlineCode",{parentName:"strong"},"{ x: number, y: number}"),")")," -- position of the right eye in image coordinates,"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"rightEyeOpenProbability (",Object(o.b)("em",{parentName:"strong"},"number"),")")," -- probability that the right eye is open,"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"leftCheekPosition (",Object(o.b)("inlineCode",{parentName:"strong"},"{ x: number, y: number}"),")")," -- position of the left cheek in image coordinates,"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"rightCheekPosition (",Object(o.b)("inlineCode",{parentName:"strong"},"{ x: number, y: number}"),")")," -- position of the right cheek in image coordinates,"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"mouthPosition (",Object(o.b)("inlineCode",{parentName:"strong"},"{ x: number, y: number}"),")")," -- position of the center of the mouth in image coordinates,"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"leftMouthPosition (",Object(o.b)("inlineCode",{parentName:"strong"},"{ x: number, y: number}"),")")," -- position of the left edge of the mouth in image coordinates,"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"rightMouthPosition (",Object(o.b)("inlineCode",{parentName:"strong"},"{ x: number, y: number}"),")")," -- position of the right edge of the mouth in image coordinates,"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"noseBasePosition (",Object(o.b)("inlineCode",{parentName:"strong"},"{ x: number, y: number}"),")")," -- position of the nose base in image coordinates.")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"smilingProbability"),", ",Object(o.b)("inlineCode",{parentName:"p"},"leftEyeOpenProbability")," and ",Object(o.b)("inlineCode",{parentName:"p"},"rightEyeOpenProbability")," are returned only if ",Object(o.b)("inlineCode",{parentName:"p"},"runClassifications")," option is set to ",Object(o.b)("inlineCode",{parentName:"p"},".all"),"."),Object(o.b)("p",null,"Positions of face landmarks are returned only if ",Object(o.b)("inlineCode",{parentName:"p"},"detectLandmarks")," option is set to ",Object(o.b)("inlineCode",{parentName:"p"},".all"),"."),Object(o.b)("h1",{id:""}))}p.isMDXComponent=!0}},[["I5eT",1,0,2,3,4,5,6]]]);