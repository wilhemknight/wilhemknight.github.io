_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[807],{ZUQg:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/versions/v41.0.0/sdk/device",function(){return n("mxHz")}])},mxHz:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return s})),n.d(t,"headings",(function(){return b})),n.d(t,"default",(function(){return p}));var i=n("HALo"),a=n("dhJC"),r=(n("q1tI"),n("7ljp")),l=n("HCau"),c=n("hykZ"),o=["components"],s={title:"Device",sourceCodeUrl:"https://github.com/expo/expo/tree/sdk-41/packages/expo-device"},b=[{depth:2,type:"text",title:"Installation"},{depth:2,type:"text",title:"API"},{depth:2,type:"text",title:"Constants"},{depth:3,type:"inlineCode",title:"Device.isDevice"},{depth:3,type:"inlineCode",title:"Device.brand"},{depth:4,type:"text",title:"Examples"},{depth:3,type:"inlineCode",title:"Device.manufacturer"},{depth:4,type:"text",title:"Examples"},{depth:3,type:"inlineCode",title:"Device.modelName"},{depth:4,type:"text",title:"Examples"},{depth:3,type:"inlineCode",title:"Device.modelId"},{depth:4,type:"text",title:"Examples"},{depth:3,type:"inlineCode",title:"Device.designName"},{depth:4,type:"text",title:"Examples"},{depth:3,type:"inlineCode",title:"Device.productName"},{depth:4,type:"text",title:"Examples"},{depth:3,type:"inlineCode",title:"Device.deviceYearClass"},{depth:3,type:"inlineCode",title:"Device.totalMemory"},{depth:4,type:"text",title:"Examples"},{depth:3,type:"inlineCode",title:"Device.supportedCpuArchitectures"},{depth:4,type:"text",title:"Examples"},{depth:3,type:"inlineCode",title:"Device.osName"},{depth:4,type:"text",title:"Examples"},{depth:3,type:"inlineCode",title:"Device.osVersion"},{depth:4,type:"text",title:"Examples"},{depth:3,type:"inlineCode",title:"Device.osBuildId"},{depth:4,type:"text",title:"Examples"},{depth:3,type:"inlineCode",title:"Device.osInternalBuildId"},{depth:4,type:"text",title:"Examples"},{depth:3,type:"inlineCode",title:"Device.osBuildFingerprint"},{depth:4,type:"text",title:"Examples"},{depth:3,type:"inlineCode",title:"Device.platformApiLevel"},{depth:4,type:"text",title:"Examples"},{depth:3,type:"inlineCode",title:"Device.deviceName"},{depth:4,type:"text",title:"Examples"},{depth:2,type:"text",title:"Methods"},{depth:3,type:"inlineCode",title:"Device.getDeviceTypeAsync()"},{depth:4,type:"text",title:"Returns"},{depth:3,type:"inlineCode",title:"Device.getUptimeAsync()"},{depth:4,type:"text",title:"Returns"},{depth:3,type:"inlineCode",title:"Device.getMaxMemoryAsync()"},{depth:4,type:"text",title:"Returns"},{depth:3,type:"inlineCode",title:"Device.isRootedExperimentalAsync()"},{depth:4,type:"text",title:"Returns"},{depth:3,type:"inlineCode",title:"Device.isSideLoadingEnabledAsync()"},{depth:4,type:"text",title:"Returns"},{depth:3,type:"inlineCode",title:"Device.getPlatformFeaturesAsync()"},{depth:4,type:"text",title:"Returns"},{depth:3,type:"inlineCode",title:"Device.hasPlatformFeatureAsync(feature)"},{depth:4,type:"text",title:"Arguments"},{depth:4,type:"text",title:"Returns"},{depth:2,type:"text",title:"Enums"},{depth:3,type:"inlineCode",title:"Device.DeviceType"},{depth:2,type:"text",title:"Error Codes"}],d={meta:s,headings:b};function p(e){var t=e.components,n=Object(a.a)(e,o);return Object(r.b)("wrapper",Object(i.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"expo-device"))," provides access to system information about the physical device, such as its manufacturer and model."),Object(r.b)(c.a,{android:!0,emulator:!0,ios:!0,simulator:!0,web:!0,mdxType:"PlatformsSection"}),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)(l.b,{packageName:"expo-device",mdxType:"InstallSection"}),Object(r.b)("h2",{id:"api"},"API"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import * as Device from 'expo-device';\n")),Object(r.b)("h2",{id:"constants"},"Constants"),Object(r.b)("h3",{id:"deviceisdevice"},Object(r.b)("inlineCode",{parentName:"h3"},"Device.isDevice")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"true")," if the app is running on a real device and ",Object(r.b)("inlineCode",{parentName:"p"},"false")," if running in a simulator or emulator. On web, this always returns ",Object(r.b)("inlineCode",{parentName:"p"},"true"),"."),Object(r.b)("h3",{id:"devicebrand"},Object(r.b)("inlineCode",{parentName:"h3"},"Device.brand")),Object(r.b)("p",null,"The device brand. The consumer-visible brand of the product/hardware. On web, this value is ",Object(r.b)("inlineCode",{parentName:"p"},"null"),"."),Object(r.b)("h4",{id:"examples"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'Device.brand; // Android: "google", "xiaomi"; iOS: "Apple"; web: null\n')),Object(r.b)("h3",{id:"devicemanufacturer"},Object(r.b)("inlineCode",{parentName:"h3"},"Device.manufacturer")),Object(r.b)("p",null,"The actual device manufacturer of the product or hardware. This value of this field may be ",Object(r.b)("inlineCode",{parentName:"p"},"null")," if it cannot be determined."),Object(r.b)("h4",{id:"examples-1"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'Device.manufacturer; // Android: "Google", "xiaomi"; iOS: "Apple"; web: "Google", null\n')),Object(r.b)("p",null,"Click ",Object(r.b)("a",{parentName:"p",href:"https://developer.android.com/reference/android/os/Build"},"here")," to view the Android documentation about the difference between ",Object(r.b)("inlineCode",{parentName:"p"},"brand")," and ",Object(r.b)("inlineCode",{parentName:"p"},"manufacturer"),"."),Object(r.b)("h3",{id:"devicemodelname"},Object(r.b)("inlineCode",{parentName:"h3"},"Device.modelName")),Object(r.b)("p",null,"The human-friendly name of the device model. This is the name that people would typically use to refer to the device rather than a programmatic model identifier. This value of this field may be ",Object(r.b)("inlineCode",{parentName:"p"},"null")," if it cannot be determined."),Object(r.b)("h4",{id:"examples-2"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'Device.modelName; // Android: "Pixel 2"; iOS: "iPhone XS Max"; web: "iPhone", null\n')),Object(r.b)("h3",{id:"devicemodelid"},Object(r.b)("inlineCode",{parentName:"h3"},"Device.modelId")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"iOS only.")," The internal model ID of the device. This is useful for programmatically identifying the type of device and is not a human-friendly string. On web and Android, this value is ",Object(r.b)("inlineCode",{parentName:"p"},"null"),"."),Object(r.b)("h4",{id:"examples-3"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'Device.modelId; // iOS: "iPhone7,2"; Android: null; web: null\n')),Object(r.b)("h3",{id:"devicedesignname"},Object(r.b)("inlineCode",{parentName:"h3"},"Device.designName")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Android only.")," The specific configuration or name of the industrial design. It represents the device's name when it was designed during manufacturing into mass production. On Android, it corresponds to ",Object(r.b)("a",{parentName:"p",href:"https://developer.android.com/reference/android/os/Build#DEVICE"},Object(r.b)("inlineCode",{parentName:"a"},"Build.DEVICE")),". On web and iOS, this value is ",Object(r.b)("inlineCode",{parentName:"p"},"null"),"."),Object(r.b)("h4",{id:"examples-4"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'Device.designName; // Android: "kminilte"; iOS: null; web: null\n')),Object(r.b)("h3",{id:"deviceproductname"},Object(r.b)("inlineCode",{parentName:"h3"},"Device.productName")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Android only.")," The device's overall product name chosen by the device implementer containing the development name or code name of the device. Corresponds to ",Object(r.b)("a",{parentName:"p",href:"https://developer.android.com/reference/android/os/Build#PRODUCT"},Object(r.b)("inlineCode",{parentName:"a"},"Build.PRODUCT")),". On web and iOS, this value is ",Object(r.b)("inlineCode",{parentName:"p"},"null"),"."),Object(r.b)("h4",{id:"examples-5"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'Device.productName; // Android: "kminiltexx"; iOS: null; web: null\n')),Object(r.b)("h3",{id:"devicedeviceyearclass"},Object(r.b)("inlineCode",{parentName:"h3"},"Device.deviceYearClass")),Object(r.b)("p",null,"The ",Object(r.b)("a",{parentName:"p",href:"https://github.com/facebook/device-year-class"},"device year class")," of this device. On web, this value is ",Object(r.b)("inlineCode",{parentName:"p"},"null"),"."),Object(r.b)("h3",{id:"devicetotalmemory"},Object(r.b)("inlineCode",{parentName:"h3"},"Device.totalMemory")),Object(r.b)("p",null,"The device's total memory, in bytes. This is the total memory accessible to the kernel, but not necessarily to a single app. This is basically the amount of RAM the device has, not including below-kernel fixed allocations like DMA buffers, RAM for the baseband CPU, etc\u2026 On web, this value is ",Object(r.b)("inlineCode",{parentName:"p"},"null"),"."),Object(r.b)("h4",{id:"examples-6"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"Device.totalMemory; // 17179869184\n")),Object(r.b)("h3",{id:"devicesupportedcpuarchitectures"},Object(r.b)("inlineCode",{parentName:"h3"},"Device.supportedCpuArchitectures")),Object(r.b)("p",null,"A list of supported processor architecture versions. The device expects the binaries it runs to be compiled for one of these architectures. This value is ",Object(r.b)("inlineCode",{parentName:"p"},"null")," if the supported architectures could not be determined, particularly on web."),Object(r.b)("h4",{id:"examples-7"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"Device.supportedCpuArchitectures; // ['arm64 v8', 'Intel x86-64h Haswell', 'arm64-v8a', 'armeabi-v7a\", 'armeabi']\n")),Object(r.b)("h3",{id:"deviceosname"},Object(r.b)("inlineCode",{parentName:"h3"},"Device.osName")),Object(r.b)("p",null,"The name of the OS running on the device."),Object(r.b)("h4",{id:"examples-8"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'Device.osName; // Android: "Android"; iOS: "iOS" or "iPadOS"; web: "iOS", "Android", "Windows"\n')),Object(r.b)("h3",{id:"deviceosversion"},Object(r.b)("inlineCode",{parentName:"h3"},"Device.osVersion")),Object(r.b)("p",null,"The human-readable OS version string. Note that the version string may not always contain three numbers separated by dots."),Object(r.b)("h4",{id:"examples-9"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'Device.osVersion; // Android: "4.0.3"; iOS: "12.3.1"; web: "11.0", "8.1.0"\n')),Object(r.b)("h3",{id:"deviceosbuildid"},Object(r.b)("inlineCode",{parentName:"h3"},"Device.osBuildId")),Object(r.b)("p",null,"The build ID of the OS that more precisely identifies the version of the OS. On Android, this corresponds to ",Object(r.b)("inlineCode",{parentName:"p"},"Build.DISPLAY")," (not ",Object(r.b)("inlineCode",{parentName:"p"},"Build.ID"),") and currently is a string as described ",Object(r.b)("a",{parentName:"p",href:"https://source.android.com/setup/start/build-numbers"},"here"),". On iOS, this corresponds to ",Object(r.b)("inlineCode",{parentName:"p"},"kern.osversion")," and is the detailed OS version sometimes displayed next to the more human-readable version. On web, this value is ",Object(r.b)("inlineCode",{parentName:"p"},"null"),"."),Object(r.b)("h4",{id:"examples-10"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'Device.osBuildId; // Android: "PSR1.180720.075"; iOS: "16F203"; web: null\n')),Object(r.b)("h3",{id:"deviceosinternalbuildid"},Object(r.b)("inlineCode",{parentName:"h3"},"Device.osInternalBuildId")),Object(r.b)("p",null,"The internal build ID of the OS running on the device. On Android, this corresponds to ",Object(r.b)("inlineCode",{parentName:"p"},"Build.ID"),". On iOS, this is the same value as ",Object(r.b)("a",{parentName:"p",href:"/versions/v41.0.0/sdk/device/#deviceosbuildid"},Object(r.b)("inlineCode",{parentName:"a"},"Device.osBuildId")),". On web, this value is ",Object(r.b)("inlineCode",{parentName:"p"},"null"),"."),Object(r.b)("h4",{id:"examples-11"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'Device.osInternalBuildId; // Android: "MMB29K"; iOS: "16F203"; web: null,\n')),Object(r.b)("h3",{id:"deviceosbuildfingerprint"},Object(r.b)("inlineCode",{parentName:"h3"},"Device.osBuildFingerprint")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Android only.")," A string that uniquely identifies the build of the currently running system OS. On web and iOS, this value is ",Object(r.b)("inlineCode",{parentName:"p"},"null"),". On Android, it follows this template:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"$(BRAND)/$(PRODUCT)/$(DEVICE)/$(BOARD):$(VERSION.RELEASE)/$(ID)/$(VERSION.INCREMENTAL):$(TYPE)/\\$(TAGS)")),Object(r.b)("h4",{id:"examples-12"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'Device.osBuildFingerprint;\n// Android: "google/sdk_gphone_x86/generic_x86:9/PSR1.180720.075/5124027:user/release-keys";\n// iOS: null; web: null\n')),Object(r.b)("h3",{id:"deviceplatformapilevel"},Object(r.b)("inlineCode",{parentName:"h3"},"Device.platformApiLevel")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Android only.")," The Android SDK version of the software currently running on this hardware device. This value never changes while a device is booted, but it may increase when the hardware manufacturer provides an OS update. See ",Object(r.b)("a",{parentName:"p",href:"https://developer.android.com/reference/android/os/Build.VERSION_CODES.html"},"here")," to see all possible version codes and corresponding versions. On web and iOS, this value is ",Object(r.b)("inlineCode",{parentName:"p"},"null"),"."),Object(r.b)("h4",{id:"examples-13"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"Device.platformApiLevel; // Android: 19; iOS: null; web: null\n")),Object(r.b)("h3",{id:"devicedevicename"},Object(r.b)("inlineCode",{parentName:"h3"},"Device.deviceName")),Object(r.b)("p",null,"The human-readable name of the device, which may be set by the device's user. If the device name is unavailable, particularly on web, this value is ",Object(r.b)("inlineCode",{parentName:"p"},"null"),"."),Object(r.b)("h4",{id:"examples-14"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'Device.deviceName; // "Vivian\'s iPhone XS"\n')),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"devicegetdevicetypeasync"},Object(r.b)("inlineCode",{parentName:"h3"},"Device.getDeviceTypeAsync()")),Object(r.b)("p",null,"Checks the type of the device as a ",Object(r.b)("a",{parentName:"p",href:"/versions/v41.0.0/sdk/device/#devicedevicetype"},Object(r.b)("inlineCode",{parentName:"a"},"Device.DeviceType"))," enum value."),Object(r.b)("p",null,'On Android, for devices other than TVs, the device type is determined by the screen resolution (screen diagonal size), so the result may not be completely accurate. If the screen diagonal length is between 3" and 6.9", the method returns ',Object(r.b)("inlineCode",{parentName:"p"},"DeviceType.PHONE"),'. For lengths between 7" and 18", the method returns ',Object(r.b)("inlineCode",{parentName:"p"},"DeviceType.TABLET"),". Otherwise, the method returns ",Object(r.b)("inlineCode",{parentName:"p"},"DeviceType.UNKNOWN"),"."),Object(r.b)("h4",{id:"returns"},"Returns"),Object(r.b)("p",null,"Returns a promise that resolves to a ",Object(r.b)("a",{parentName:"p",href:"/versions/v41.0.0/sdk/device/#devicedevicetype"},Object(r.b)("inlineCode",{parentName:"a"},"Device.DeviceType"))," enum value."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Examples")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"await Device.getDeviceTypeAsync();\n// DeviceType.PHONE\n")),Object(r.b)("h3",{id:"devicegetuptimeasync"},Object(r.b)("inlineCode",{parentName:"h3"},"Device.getUptimeAsync()")),Object(r.b)("p",null,"Gets the uptime since the last reboot of the device, in milliseconds."),Object(r.b)("h4",{id:"returns-1"},"Returns"),Object(r.b)("p",null,"Returns a promise that resolves to a ",Object(r.b)("inlineCode",{parentName:"p"},"number")," that represents the milliseconds since last reboot. Android devices dp not count time spent in deep sleep. On web, this throws an ",Object(r.b)("inlineCode",{parentName:"p"},"UnavailabilityError"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Examples")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"await Device.getUptimeAsync();\n// 4371054\n")),Object(r.b)("h3",{id:"devicegetmaxmemoryasync"},Object(r.b)("inlineCode",{parentName:"h3"},"Device.getMaxMemoryAsync()")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Android only.")," Returns the maximum amount of memory that the Java VM will attempt to use. If there is no inherent limit then ",Object(r.b)("inlineCode",{parentName:"p"},"Number.MAX_SAFE_INTEGER")," is returned."),Object(r.b)("h4",{id:"returns-2"},"Returns"),Object(r.b)("p",null,"Returns a promise that resolves to the maximum available memory that the Java vm will use, in bytes. On iOS and web, this throws an ",Object(r.b)("inlineCode",{parentName:"p"},"UnavailabilityError"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Examples")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"await Device.getMaxMemoryAsync();\n// 402653184\n")),Object(r.b)("h3",{id:"deviceisrootedexperimentalasync"},Object(r.b)("inlineCode",{parentName:"h3"},"Device.isRootedExperimentalAsync()")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"WARNING:")," This method is experimental and is not completely reliable. See description below."),Object(r.b)("p",null,"Checks whether the device has been rooted (Android) or jailbroken (iOS). This is not completely reliable because there exist solutions to bypass root-detection on both ",Object(r.b)("a",{parentName:"p",href:"https://www.theiphonewiki.com/wiki/XCon"},"iOS")," and ",Object(r.b)("a",{parentName:"p",href:"https://tweakerlinks.com/how-to-bypass-apps-root-detection-in-android-device/"},"Android"),". Further, many root-detection checks can be bypassed via reverse engineering."),Object(r.b)("p",null,"On Android, it's implemented in a way to find all possible files paths that contain the ",Object(r.b)("inlineCode",{parentName:"p"},'"su"')," executable but some devices that are not rooted may also have this executable. Therefore, there's no guarantee that this method will always return correctly."),Object(r.b)("p",null,"On iOS, ",Object(r.b)("a",{parentName:"p",href:"https://www.theiphonewiki.com/wiki/Bypassing_Jailbreak_Detection"},"these jailbreak checks")," are used to detect if a device is rooted/jailbroken. However, since there are closed-sourced solutions such as ",Object(r.b)("a",{parentName:"p",href:"https://www.theiphonewiki.com/wiki/XCon"},"xCon")," that aim to hook every known method and function responsible for informing an application of a jailbroken device, this method may not reliably detect devices that have xCon or similar packages installed."),Object(r.b)("p",null,"On web, this always resolves to ",Object(r.b)("inlineCode",{parentName:"p"},"false")," even if the device is rooted."),Object(r.b)("h4",{id:"returns-3"},"Returns"),Object(r.b)("p",null,"Returns a promise that resolves to a ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")," that specifies whether this device is rooted.\n",Object(r.b)("strong",{parentName:"p"},"Examples")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"await Device.isRootedExperimentalAsync();\n// true or false\n")),Object(r.b)("h3",{id:"deviceissideloadingenabledasync"},Object(r.b)("inlineCode",{parentName:"h3"},"Device.isSideLoadingEnabledAsync()")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Android only. Using this method requires you to ",Object(r.b)("a",{parentName:"strong",href:"/versions/v41.0.0/config/app/#permissions"},"add the ",Object(r.b)("inlineCode",{parentName:"a"},"REQUEST_INSTALL_PACKAGES")," permission"),".")),Object(r.b)("p",null,"Returns whether applications can be installed for this user via the system's ",Object(r.b)("a",{parentName:"p",href:"https://developer.android.com/reference/android/content/Intent.html#ACTION_INSTALL_PACKAGE"},"Intent#ACTION_INSTALL_PACKAGE")," mechanism rather than through the OS's default app store, like Google Play."),Object(r.b)("h4",{id:"returns-4"},"Returns"),Object(r.b)("p",null,"Returns a promise that resolves to a ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")," that represents whether the calling package is allowed to request package installation. On iOS and web, this throws an ",Object(r.b)("inlineCode",{parentName:"p"},"UnavailabilityError"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Examples")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"await Device.isSideLoadingEnabledAsync();\n// true or false\n")),Object(r.b)("h3",{id:"devicegetplatformfeaturesasync"},Object(r.b)("inlineCode",{parentName:"h3"},"Device.getPlatformFeaturesAsync()")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Android only.")," Gets a list of features that are available on the system. The feature names are platform-specific. See ",Object(r.b)("a",{parentName:"p",href:"https://developer.android.com/reference/android/content/pm/PackageManager#getSystemAvailableFeatures()"},"here")," to view Android official docs about this implementation."),Object(r.b)("h4",{id:"returns-5"},"Returns"),Object(r.b)("p",null,"Returns a promise that resolves to an array of strings, each of which is a platform-specific name of a feature available on the current device. On iOS and web, this always resolves to an empty array."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Examples")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"await Device.getPlatformFeaturesAsync();\n// [\n//   'android.software.adoptable_storage',\n//   'android.hardware.sensor.accelerometer',\n//   'android.software.backup',\n//   'android.hardware.touchscreen',\n// ]\n")),Object(r.b)("h3",{id:"devicehasplatformfeatureasyncfeature"},Object(r.b)("inlineCode",{parentName:"h3"},"Device.hasPlatformFeatureAsync(feature)")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Android only.")," Tells if the device has a specific system feature."),Object(r.b)("h4",{id:"arguments"},"Arguments"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"feature (",Object(r.b)("em",{parentName:"strong"},"string"),")")," -- The platform-specific name of the feature to check for on the device. You can get all available system features with ",Object(r.b)("inlineCode",{parentName:"li"},"Device.getSystemFeatureAsync()"),". See ",Object(r.b)("a",{parentName:"li",href:"https://developer.android.com/reference/android/content/pm/PackageManager#hasSystemFeature(java.lang.String)"},"here")," to view acceptable feature strings.")),Object(r.b)("h4",{id:"returns-6"},"Returns"),Object(r.b)("p",null,"Returns a promise that resolves to a boolean value indicating whether the device has the specified system feature. On iOS and web, this always resolves to ",Object(r.b)("inlineCode",{parentName:"p"},"false"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Examples")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"await Device.hasPlatformFeatureAsync('amazon.hardware.fire_tv');\n// true or false\n")),Object(r.b)("h2",{id:"enums"},"Enums"),Object(r.b)("h3",{id:"devicedevicetype"},Object(r.b)("inlineCode",{parentName:"h3"},"Device.DeviceType")),Object(r.b)("p",null,"An enum of the different types of devices supported by Expo, with these values:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"UNKNOWN"))," -- An unrecognized device type"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"PHONE"))," -- Mobile phone handsets, typically with a touch screen and held in one hand"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"TABLET"))," -- Tablet computers, typically with a touch screen that is larger than a phone's"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"DESKTOP"))," -- Desktop or laptop computers, typically with a keyboard and mouse"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"TV"))," -- TV-based interfaces")),Object(r.b)("h2",{id:"error-codes"},"Error Codes"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Code"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"ERR_DEVICE_ROOT_DETECTION"),Object(r.b)("td",{parentName:"tr",align:null},"Error code thrown for ",Object(r.b)("inlineCode",{parentName:"td"},"isRootedExperimentalAsync"),". This may be thrown if there's no read access to certain system files.")))))}p.isMDXComponent=!0}},[["ZUQg",1,0,2,3,4,5,6]]]);