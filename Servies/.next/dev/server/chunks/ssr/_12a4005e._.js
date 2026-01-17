module.exports = [
"[project]/components/section-title.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
;
;
function SectionTitle({ title, description }) {
    const words = title.split(" ");
    const lastWord = words.pop();
    const firstPart = words.join(" ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center mt-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h2, {
                className: "text-center text-4xl font-semibold max-w-2xl",
                initial: {
                    y: 80,
                    opacity: 0
                },
                whileInView: {
                    y: 0,
                    opacity: 1
                },
                viewport: {
                    once: true
                },
                transition: {
                    type: "spring",
                    stiffness: 320,
                    damping: 70,
                    mass: 1
                },
                children: [
                    firstPart,
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                        className: "bg-gradient-to-t from-indigo-600 to-black p-1 bg-left inline-block bg-no-repeat",
                        initial: {
                            backgroundSize: "0% 100%"
                        },
                        whileInView: {
                            backgroundSize: "100% 100%"
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            delay: 0.3,
                            duration: 0.7,
                            ease: "easeInOut"
                        },
                        children: lastWord
                    }, void 0, false, {
                        fileName: "[project]/components/section-title.jsx",
                        lineNumber: 16,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/section-title.jsx",
                lineNumber: 9,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                className: "text-center text-slate-400 max-w-lg mt-3",
                initial: {
                    y: 120,
                    opacity: 0
                },
                whileInView: {
                    y: 0,
                    opacity: 1
                },
                viewport: {
                    once: true
                },
                transition: {
                    type: "spring",
                    stiffness: 240,
                    damping: 70,
                    mass: 1
                },
                children: description
            }, void 0, false, {
                fileName: "[project]/components/section-title.jsx",
                lineNumber: 26,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/section-title.jsx",
        lineNumber: 8,
        columnNumber: 9
    }, this);
}
}),
"[project]/app/services/hostinganddomain/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HostingAndDomainServices
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$section$2d$title$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/section-title.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-list.js [app-ssr] (ecmascript) <export default as ClipboardList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2d$ruler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PencilRuler$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil-ruler.js [app-ssr] (ecmascript) <export default as PencilRuler>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-ssr] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
"use client";
;
;
;
;
;
;
function HostingAndDomainServices() {
    const [stopScroll, setStopScroll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const cardData = [
        {
            title: 'React',
            image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg'
        },
        {
            title: 'PHP',
            image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg'
        },
        {
            title: 'Next.js',
            image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original-wordmark.svg'
        },
        {
            title: 'Python',
            image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg'
        },
        {
            title: 'Flutter',
            image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg'
        },
        {
            title: 'Android',
            image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original.svg'
        },
        {
            title: 'iOS',
            image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/apple/apple-original.svg'
        },
        {
            title: 'Kotlin',
            image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original.svg'
        },
        {
            title: 'Xamarin',
            image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/xamarin/xamarin-original.svg'
        },
        {
            title: 'React Native',
            image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg'
        },
        {
            title: 'Ionic',
            image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/ionic/ionic-original.svg'
        },
        {
            title: 'Firebase',
            image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg'
        },
        {
            title: 'AWS',
            image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg'
        }
    ];
    // tilt state/handlers for inline cards
    const [tiltA, setTiltA] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [tiltB, setTiltB] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const threshold = 12;
    const handleMoveA = (e)=>{
        const { left, width, top, height } = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        setTiltA({
            x: y * -threshold,
            y: x * threshold
        });
    };
    const handleMoveB = (e)=>{
        const { left, width, top, height } = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        setTiltB({
            x: y * -threshold,
            y: x * threshold
        });
    };
    // Flip card state for touch/click
    const [flippedCards, setFlippedCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const toggleFlip = (cardId)=>{
        setFlippedCards((prev)=>({
                ...prev,
                [cardId]: !prev[cardId]
            }));
    };
    const sectionData = [
        {
            title: "Data Security & Backups",
            description: " Protect critical data with encryption, backups, and disaster recovery.",
            image: "/assets/h_abt_1.png",
            className: "py-10 border-b border-slate-700 md:border-r md:border-b md:px-10 lg:border-b-0"
        },
        {
            title: "24/7 Monitoring & Support",
            description: "Expert support to quickly resolve any technical issues.",
            image: "/assets/h_abt_2.png",
            className: "py-10 border-b border-slate-700 md:border-b md:px-10 lg:border-r lg:border-b-0"
        },
        {
            title: "Flexible Extensions",
            description: "Choose from a wide range of domain extensions to fit your brand.",
            image: "/assets/h_abt_3.png",
            className: "py-10 border-b border-slate-700 md:border-r md:border-b-0 md:px-10 lg:border-b-0"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: "@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');"
            }, void 0, false, {
                fileName: "[project]/app/services/hostinganddomain/page.jsx",
                lineNumber: 81,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "home",
                className: "flex flex-col items-center -mt-18 px-4 sm:px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].svg, {
                        className: "absolute -z-10 w-full -mt-40 md:mt-0",
                        width: "1440",
                        height: "676",
                        viewBox: "0 0 1440 676",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        initial: {
                            opacity: 0
                        },
                        whileInView: {
                            opacity: 1
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.5
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "-92",
                                y: "-948",
                                width: "1624",
                                height: "1624",
                                rx: "812",
                                fill: "url(#a)"
                            }, void 0, false, {
                                fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                lineNumber: 92,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                                    id: "a",
                                    cx: "0",
                                    cy: "0",
                                    r: "1",
                                    gradientUnits: "userSpaceOnUse",
                                    gradientTransform: "rotate(90 428 292)scale(812)",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: ".63",
                                            stopColor: "#f3ddb7ff",
                                            stopOpacity: "0"
                                        }, void 0, false, {
                                            fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                            lineNumber: 95,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "1",
                                            stopColor: "#f3ddb7ff"
                                        }, void 0, false, {
                                            fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                            lineNumber: 96,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                    lineNumber: 94,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                lineNumber: 93,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/services/hostinganddomain/page.jsx",
                        lineNumber: 86,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].a, {
                        className: "flex items-center mt-36 sm:mt-40 md:mt-48 gap-2 border border-slate-600 text-gray-50 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base",
                        initial: {
                            y: -20,
                            opacity: 0
                        },
                        whileInView: {
                            y: 0,
                            opacity: 1
                        },
                        viewport: {
                            once: true
                        },
                        href: "/#contact",
                        transition: {
                            delay: 0.2,
                            type: "spring",
                            stiffness: 320,
                            damping: 70,
                            mass: 1
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "size-2 sm:size-2.5 bg-green-500 rounded-full animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                lineNumber: 107,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Start the Conversation"
                            }, void 0, false, {
                                fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                lineNumber: 108,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/services/hostinganddomain/page.jsx",
                        lineNumber: 100,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
                        className: "text-center text-3xl leading-tight sm:text-4xl sm:leading-[50px] md:text-5xl md:leading-[68px] lg:text-6xl lg:leading-[70px] mt-3 sm:mt-4 font-semibold max-w-2xl",
                        initial: {
                            y: 50,
                            opacity: 0
                        },
                        whileInView: {
                            y: 0,
                            opacity: 1
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            type: "spring",
                            stiffness: 240,
                            damping: 70,
                            mass: 1
                        },
                        children: "Hosting , Domain & Cloud Services"
                    }, void 0, false, {
                        fileName: "[project]/app/services/hostinganddomain/page.jsx",
                        lineNumber: 110,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                        className: "text-center text-sm sm:text-base max-w-xs sm:max-w-md md:max-w-lg mt-2 sm:mt-3 leading-relaxed",
                        initial: {
                            y: 50,
                            opacity: 0
                        },
                        whileInView: {
                            y: 0,
                            opacity: 1
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            delay: 0.2,
                            type: "spring",
                            stiffness: 320,
                            damping: 70,
                            mass: 1
                        },
                        children: "Unlock Unmatched Speed, Security, and Scalability with Our Comprehensive Hosting and Cloud Services."
                    }, void 0, false, {
                        fileName: "[project]/app/services/hostinganddomain/page.jsx",
                        lineNumber: 119,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8",
                        initial: {
                            y: 50,
                            opacity: 0
                        },
                        whileInView: {
                            y: 0,
                            opacity: 1
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            type: "spring",
                            stiffness: 320,
                            damping: 70,
                            mass: 1
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/services/hostinganddomain/page.jsx",
                        lineNumber: 128,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/services/hostinganddomain/page.jsx",
                lineNumber: 85,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mt-16 sm:mt-20 md:mt-24 lg:mt-52 relative px-4 sm:px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center mx-auto",
                        children: "Overview"
                    }, void 0, false, {
                        fileName: "[project]/app/services/hostinganddomain/page.jsx",
                        lineNumber: 140,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs sm:text-sm text-white text-center mt-2 max-w-xs sm:max-w-md mx-auto leading-relaxed",
                        children: "Our Digital Foundation: Domains, Hosting, and Cloud, Perfectly Managed."
                    }, void 0, false, {
                        fileName: "[project]/app/services/hostinganddomain/page.jsx",
                        lineNumber: 141,
                        columnNumber: 29
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10 mt-8 sm:mt-10 md:mt-12 lg:mt-15",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative shadow-xl sm:shadow-2xl shadow-indigo-600/40 rounded-2xl sm:rounded-3xl overflow-hidden shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    className: "w-full max-w-xs sm:max-w-sm md:max-w-md object-cover rounded-2xl sm:rounded-3xl",
                                    src: "/assets/hdc.jpeg",
                                    alt: ""
                                }, void 0, false, {
                                    fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                    lineNumber: 148,
                                    columnNumber: 37
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                lineNumber: 147,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs sm:text-sm text-slate-600 max-w-xs sm:max-w-md lg:max-w-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-xl sm:text-2xl uppercase font-semibold text-white",
                                        children: "DomainHost CloudWorks"
                                    }, void 0, false, {
                                        fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                        lineNumber: 154,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-32 sm:w-40 h-[2px] sm:h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                        lineNumber: 155,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-4 sm:mt-6 md:mt-8 text-white leading-relaxed",
                                        children: "We offer complete solutions to establish and grow your online presence. From securing the right domain to reliable web hosting and scalable cloud services, we ensure your websites and applications run smoothly with maximum uptime."
                                    }, void 0, false, {
                                        fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                        lineNumber: 156,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 sm:mt-4 text-white leading-relaxed",
                                        children: "Our secure, high-performance cloud solutions help your business adapt to growing demands effortlessly, keeping your digital assets fast, accessible, and protected at all times."
                                    }, void 0, false, {
                                        fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                        lineNumber: 157,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 sm:mt-4 text-white leading-relaxed",
                                        children: "Our system ensures that all services are:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                        lineNumber: 158,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "list-disc list-inside mt-2 text-white space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Flexible, scaling easily as your business evolves"
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                lineNumber: 160,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "In perfect harmony with your brand and digital strategy"
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                lineNumber: 161,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Protected with robust security and privacy measures"
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                lineNumber: 162,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Consistently available, maximizing uptime for your online assets"
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                lineNumber: 163,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                        lineNumber: 159,
                                        columnNumber: 38
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 sm:mt-4 text-white leading-relaxed",
                                        children: "We transform hosting, cloud, and domain services into a foundation you can trust."
                                    }, void 0, false, {
                                        fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                        lineNumber: 165,
                                        columnNumber: 38
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full max-w-[130px] h-[3px] sm:h-[5px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF] mt-6 sm:mt-8"
                                    }, void 0, false, {
                                        fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                        lineNumber: 166,
                                        columnNumber: 42
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                lineNumber: 153,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/services/hostinganddomain/page.jsx",
                        lineNumber: 146,
                        columnNumber: 29
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-5xl mx-auto px-4 sm:px-6 md:px-8 mt-8 sm:mt-10 md:mt-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center mx-auto",
                                    children: "Our services"
                                }, void 0, false, {
                                    fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                    lineNumber: 173,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-10 lg:mt-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer bg-white/5 h-full min-h-[320px] sm:min-h-[360px] border border-indigo-400/40",
                                            onMouseMove: handleMoveA,
                                            onMouseLeave: ()=>setTiltA({
                                                    x: 0,
                                                    y: 0
                                                }),
                                            style: {
                                                transform: `perspective(1000px) rotateX(${tiltA.x}deg) rotateY(${tiltA.y}deg)`
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "/assets/hdc_1.jpeg",
                                                    alt: "City skyline",
                                                    className: "w-full h-56 sm:h-64 md:h-80 object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                    lineNumber: 182,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "mt-3 sm:mt-4 px-4 sm:px-5 md:px-6 pt-3 sm:pt-4 mb-1 text-lg sm:text-xl md:text-2xl font-semibold text-white",
                                                    children: "Domain Registration & Management"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                    lineNumber: 187,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm sm:text-base px-4 sm:px-5 md:px-6 pb-6 sm:pb-8 text-slate-300 leading-relaxed",
                                                    children: "Secure the perfect domain name for your brand with ease. Our services include registration, renewal, DNS management, and privacy protection, ensuring your online identity is safe, accessible, and always under your control."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                    lineNumber: 190,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                            lineNumber: 176,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer bg-white/5 h-full min-h-[320px] sm:min-h-[360px] border border-indigo-400/40",
                                            onMouseMove: handleMoveB,
                                            onMouseLeave: ()=>setTiltB({
                                                    x: 0,
                                                    y: 0
                                                }),
                                            style: {
                                                transform: `perspective(1000px) rotateX(${tiltB.x}deg) rotateY(${tiltB.y}deg)`
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "/assets/hdc_2.jpeg",
                                                    alt: "Landscape",
                                                    className: "w-full h-56 sm:h-64 md:h-80 object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                    lineNumber: 202,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "mt-3 sm:mt-4 px-4 sm:px-5 md:px-6 pt-3 sm:pt-4 mb-1 text-lg sm:text-xl md:text-2xl font-semibold text-white",
                                                    children: "Web Hosting Services"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                    lineNumber: 207,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm sm:text-base px-4 sm:px-5 md:px-6 pb-6 sm:pb-8 text-slate-300 leading-relaxed",
                                                    children: "Experience reliable and high-performance hosting tailored to your website's needs. From shared hosting to dedicated servers, we ensure fast load times, maximum uptime, and seamless website management."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                    lineNumber: 211,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                            lineNumber: 196,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer bg-white/5 h-full min-h-[320px] sm:min-h-[360px] border border-indigo-400/40",
                                            onMouseMove: handleMoveA,
                                            onMouseLeave: ()=>setTiltA({
                                                    x: 0,
                                                    y: 0
                                                }),
                                            style: {
                                                transform: `perspective(1000px) rotateX(${tiltA.x}deg) rotateY(${tiltA.y}deg)`
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "/assets/hdc_3.jpeg",
                                                    alt: "City skyline",
                                                    className: "w-full h-56 sm:h-64 md:h-80 object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                    lineNumber: 222,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "mt-3 sm:mt-4 px-4 sm:px-5 md:px-6 pt-3 sm:pt-4 mb-1 text-lg sm:text-xl md:text-2xl font-semibold text-white",
                                                    children: "Cloud Hosting & Infrastructure"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                    lineNumber: 227,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm sm:text-base px-4 sm:px-5 md:px-6 pb-6 sm:pb-8 text-slate-300 leading-relaxed",
                                                    children: "Scale your business effortlessly with our flexible cloud hosting solutions. Enjoy secure, high-availability infrastructure, automated backups, and performance optimization designed to support growth and adapt to changing demands."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                    lineNumber: 231,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                            lineNumber: 216,
                                            columnNumber: 38
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer bg-white/5 h-full min-h-[320px] sm:min-h-[360px] border border-indigo-400/40",
                                            onMouseMove: handleMoveA,
                                            onMouseLeave: ()=>setTiltA({
                                                    x: 0,
                                                    y: 0
                                                }),
                                            style: {
                                                transform: `perspective(1000px) rotateX(${tiltA.x}deg) rotateY(${tiltA.y}deg)`
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "/assets/hdc_4.jpeg",
                                                    alt: "City skyline",
                                                    className: "w-full h-56 sm:h-64 md:h-80 object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                    lineNumber: 242,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "mt-3 sm:mt-4 px-4 sm:px-5 md:px-6 pt-3 sm:pt-4 mb-1 text-lg sm:text-xl md:text-2xl font-semibold text-white",
                                                    children: "Cloud & Server Monitoring"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                    lineNumber: 247,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm sm:text-base px-4 sm:px-5 md:px-6 pb-6 sm:pb-8 text-slate-300 leading-relaxed",
                                                    children: "Keep your servers and cloud infrastructure running smoothly with real-time monitoring and management. We proactively track performance, detect issues before they impact your business, and ensure uptime, security, and reliability around the clock."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                    lineNumber: 250,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                            lineNumber: 236,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                    lineNumber: 175,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/services/hostinganddomain/page.jsx",
                            lineNumber: 172,
                            columnNumber: 30
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/services/hostinganddomain/page.jsx",
                        lineNumber: 171,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-6xl mx-auto px-4 sm:px-6 md:px-8 mt-12 sm:mt-16 md:mt-20 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$section$2d$title$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                title: "Workflow of SDLC"
                            }, void 0, false, {
                                fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                lineNumber: 259,
                                columnNumber: 32
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden lg:block absolute left-0 right-0 top-24 h-px bg-gradient-to-r from-transparent via-slate-700/70 to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                lineNumber: 260,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 sm:mt-10 md:mt-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: "group w-full h-56 sm:h-60 md:h-64 [perspective:1000px] cursor-pointer",
                                                initial: {
                                                    y: 40,
                                                    opacity: 0
                                                },
                                                whileInView: {
                                                    y: 0,
                                                    opacity: 1
                                                },
                                                viewport: {
                                                    once: true
                                                },
                                                transition: {
                                                    type: "spring",
                                                    stiffness: 240,
                                                    damping: 60,
                                                    mass: 1
                                                },
                                                onClick: ()=>toggleFlip('performance'),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-2xl sm:rounded-3xl ${flippedCards['performance'] ? '[transform:rotateY(180deg)]' : ''}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute w-full h-full [backface-visibility:hidden] flex flex-col items-center justify-center rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur border border-white/10 p-4 sm:p-5 md:p-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mx-auto size-12 sm:size-14 md:size-16 rounded-full bg-gradient-to-br from-indigo-600 to-violet-500 p-0.5",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "size-full rounded-full bg-slate-900 text-white flex items-center justify-center",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"], {
                                                                            className: "size-5 sm:size-6 md:size-7"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                                            lineNumber: 277,
                                                                            columnNumber: 42
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                                        lineNumber: 276,
                                                                        columnNumber: 40
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                                    lineNumber: 275,
                                                                    columnNumber: 38
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-center text-white",
                                                                    children: "Performance & Monitoring"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                                    lineNumber: 280,
                                                                    columnNumber: 38
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "mt-2 text-slate-300 text-xs sm:text-sm max-w-xs mx-auto text-center leading-relaxed",
                                                                    children: "Optimize every moment with intelligent monitoring."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                                    lineNumber: 281,
                                                                    columnNumber: 38
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                            lineNumber: 274,
                                                            columnNumber: 36
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center rounded-2xl sm:rounded-3xl bg-indigo-600 text-white [transform:rotateY(180deg)] p-3 sm:p-4 text-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs sm:text-sm text-left leading-relaxed",
                                                                children: " We continuously track and analyze your systems to ensure optimal performance. From server speed to application efficiency, our monitoring tools proactively detect issues before they impact your business. Real-time insights keep your operations smooth and reliable."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                                lineNumber: 284,
                                                                columnNumber: 38
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                            lineNumber: 283,
                                                            columnNumber: 36
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                    lineNumber: 271,
                                                    columnNumber: 34
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                lineNumber: 263,
                                                columnNumber: 32
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: "group w-full h-56 sm:h-60 md:h-64 [perspective:1000px] cursor-pointer",
                                                initial: {
                                                    y: 40,
                                                    opacity: 0
                                                },
                                                whileInView: {
                                                    y: 0,
                                                    opacity: 1
                                                },
                                                viewport: {
                                                    once: true
                                                },
                                                transition: {
                                                    delay: 0.05,
                                                    type: "spring",
                                                    stiffness: 240,
                                                    damping: 60,
                                                    mass: 1
                                                },
                                                onClick: ()=>toggleFlip('setup'),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-2xl sm:rounded-3xl ${flippedCards['setup'] ? '[transform:rotateY(180deg)]' : ''}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute w-full h-full [backface-visibility:hidden] flex flex-col items-center justify-center rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur border border-white/10 p-4 sm:p-5 md:p-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mx-auto size-12 sm:size-14 md:size-16 rounded-full bg-gradient-to-br from-indigo-600 to-violet-500 p-0.5",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "size-full rounded-full bg-slate-900 text-white flex items-center justify-center",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2d$ruler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PencilRuler$3e$__["PencilRuler"], {
                                                                            className: "size-5 sm:size-6 md:size-7"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                                            lineNumber: 302,
                                                                            columnNumber: 42
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                                        lineNumber: 301,
                                                                        columnNumber: 40
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                                    lineNumber: 300,
                                                                    columnNumber: 38
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-white text-center",
                                                                    children: "Web & Cloud Setup"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                                    lineNumber: 305,
                                                                    columnNumber: 38
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "mt-2 text-slate-300 text-xs sm:text-sm max-w-xs mx-auto text-center leading-relaxed",
                                                                    children: "Effortless web and cloud deployment at your fingertips."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                                    lineNumber: 306,
                                                                    columnNumber: 38
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                            lineNumber: 299,
                                                            columnNumber: 36
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center rounded-2xl sm:rounded-3xl bg-indigo-600 text-white [transform:rotateY(180deg)] p-3 sm:p-4 text-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs sm:text-sm text-left leading-relaxed",
                                                                children: " Our experts design and implement secure web and cloud infrastructures tailored to your needs. We handle everything from initial setup to seamless deployment, ensuring scalability, flexibility, and uninterrupted access for your users."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                                lineNumber: 309,
                                                                columnNumber: 38
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                            lineNumber: 308,
                                                            columnNumber: 36
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                    lineNumber: 296,
                                                    columnNumber: 34
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                lineNumber: 288,
                                                columnNumber: 32
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: "group w-full h-56 sm:h-60 md:h-64 [perspective:1000px] cursor-pointer",
                                                initial: {
                                                    y: 40,
                                                    opacity: 0
                                                },
                                                whileInView: {
                                                    y: 0,
                                                    opacity: 1
                                                },
                                                viewport: {
                                                    once: true
                                                },
                                                transition: {
                                                    delay: 0.1,
                                                    type: "spring",
                                                    stiffness: 240,
                                                    damping: 60,
                                                    mass: 1
                                                },
                                                onClick: ()=>toggleFlip('backup'),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-2xl sm:rounded-3xl ${flippedCards['backup'] ? '[transform:rotateY(180deg)]' : ''}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute w-full h-full [backface-visibility:hidden] flex flex-col items-center justify-center rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur border border-white/10 p-4 sm:p-5 md:p-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mx-auto size-12 sm:size-14 md:size-16 rounded-full bg-gradient-to-br from-indigo-600 to-violet-500 p-0.5",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "size-full rounded-full bg-slate-900 text-white flex items-center justify-center",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"], {
                                                                            className: "size-5 sm:size-6 md:size-7"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                                            lineNumber: 327,
                                                                            columnNumber: 42
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                                        lineNumber: 326,
                                                                        columnNumber: 40
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                                    lineNumber: 325,
                                                                    columnNumber: 38
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-white text-center",
                                                                    children: " Backup & Safety Management"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                                    lineNumber: 330,
                                                                    columnNumber: 38
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "mt-2 text-slate-300 text-xs sm:text-sm max-w-xs mx-auto text-center leading-relaxed",
                                                                    children: "Protect your data with reliable backups and airtight security."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                                    lineNumber: 331,
                                                                    columnNumber: 38
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                            lineNumber: 324,
                                                            columnNumber: 36
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center rounded-2xl sm:rounded-3xl bg-indigo-600 text-white [transform:rotateY(180deg)] p-3 sm:p-4 text-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs sm:text-sm text-left leading-relaxed",
                                                                children: "  Protect your critical data with our comprehensive backup and safety strategies. Regular backups, disaster recovery planning, and robust security measures guarantee that your information is always safe and recoverable when needed."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                                lineNumber: 334,
                                                                columnNumber: 38
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                            lineNumber: 333,
                                                            columnNumber: 36
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                    lineNumber: 321,
                                                    columnNumber: 34
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                lineNumber: 313,
                                                columnNumber: 32
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: "group w-full h-56 sm:h-60 md:h-64 [perspective:1000px] cursor-pointer",
                                                initial: {
                                                    y: 40,
                                                    opacity: 0
                                                },
                                                whileInView: {
                                                    y: 0,
                                                    opacity: 1
                                                },
                                                viewport: {
                                                    once: true
                                                },
                                                transition: {
                                                    delay: 0.15,
                                                    type: "spring",
                                                    stiffness: 240,
                                                    damping: 60,
                                                    mass: 1
                                                },
                                                onClick: ()=>toggleFlip('hosting'),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-2xl sm:rounded-3xl ${flippedCards['hosting'] ? '[transform:rotateY(180deg)]' : ''}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute w-full h-full [backface-visibility:hidden] flex flex-col items-center justify-center rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur border border-white/10 p-4 sm:p-5 md:p-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mx-auto size-12 sm:size-14 md:size-16 rounded-full bg-gradient-to-br from-indigo-600 to-violet-500 p-0.5",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "size-full rounded-full bg-slate-900 text-white flex items-center justify-center",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                            className: "size-5 sm:size-6 md:size-7"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                                            lineNumber: 352,
                                                                            columnNumber: 42
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                                        lineNumber: 351,
                                                                        columnNumber: 40
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                                    lineNumber: 350,
                                                                    columnNumber: 38
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-white text-center",
                                                                    children: "Hosting & System Design"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                                    lineNumber: 355,
                                                                    columnNumber: 38
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "mt-2 text-slate-300 text-xs sm:text-sm max-w-xs mx-auto text-center leading-relaxed",
                                                                    children: "Powerful hosting solutions built on smart, scalable system design."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                                    lineNumber: 356,
                                                                    columnNumber: 38
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                            lineNumber: 349,
                                                            columnNumber: 36
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center rounded-2xl sm:rounded-3xl bg-indigo-600 text-white [transform:rotateY(180deg)] p-3 sm:p-4 text-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs sm:text-sm text-left leading-relaxed",
                                                                children: " We build high-performance hosting environments and system architectures that align with your business goals. Our solutions focus on speed, reliability, and scalability, ensuring your digital presence is always efficient and future-ready."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                                lineNumber: 359,
                                                                columnNumber: 38
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                            lineNumber: 358,
                                                            columnNumber: 36
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                    lineNumber: 346,
                                                    columnNumber: 34
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                lineNumber: 338,
                                                columnNumber: 32
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                        lineNumber: 262,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden lg:flex items-stretch gap-2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                        lineNumber: 364,
                                        columnNumber: 31
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                lineNumber: 261,
                                columnNumber: 28
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/services/hostinganddomain/page.jsx",
                        lineNumber: 258,
                        columnNumber: 28
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/services/hostinganddomain/page.jsx",
                lineNumber: 139,
                columnNumber: 15
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "flex flex-col items-center px-4 sm:px-6 lg:px-8",
                id: "about",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$section$2d$title$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        title: "Why choose Nexvity?",
                        description: "Empowering Your Business with Fast, Secure, and Scalable Hosting, Domain, and Cloud Solutions That Grow with You."
                    }, void 0, false, {
                        fileName: "[project]/app/services/hostinganddomain/page.jsx",
                        lineNumber: 378,
                        columnNumber: 34
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 sm:mt-16 md:mt-18 gap-3 sm:gap-4 md:gap-5",
                        children: sectionData.map((data, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: `flex flex-col ${data.className}`,
                                initial: {
                                    y: 150,
                                    opacity: 0
                                },
                                whileInView: {
                                    y: 0,
                                    opacity: 1
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 320,
                                    damping: 70,
                                    mass: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "size-16 sm:size-18 md:size-20 p-2 rounded",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: data.image,
                                            alt: "",
                                            className: "w-full h-full object-contain"
                                        }, void 0, false, {
                                            fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                            lineNumber: 399,
                                            columnNumber: 42
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                        lineNumber: 398,
                                        columnNumber: 40
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 sm:mt-5 space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm sm:text-base font-medium text-slate-200",
                                                children: data.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                lineNumber: 403,
                                                columnNumber: 42
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs sm:text-sm text-slate-400 leading-relaxed",
                                                children: data.description
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                lineNumber: 406,
                                                columnNumber: 42
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                        lineNumber: 402,
                                        columnNumber: 40
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                lineNumber: 384,
                                columnNumber: 38
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/services/hostinganddomain/page.jsx",
                        lineNumber: 382,
                        columnNumber: 34
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/services/hostinganddomain/page.jsx",
                lineNumber: 377,
                columnNumber: 32
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-716566f5ab19c33" + " " + "w-full mb-8 mt-12 sm:mt-16 md:mt-20 px-4 sm:px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        id: "716566f5ab19c33",
                        children: ".marquee-inner.jsx-716566f5ab19c33{white-space:nowrap;align-items:center;gap:1rem;animation:linear infinite marqueeScroll;display:flex}@keyframes marqueeScroll{0%{transform:translate(0%)}to{transform:translate(-50%)}}"
                    }, void 0, false, void 0, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "jsx-716566f5ab19c33" + " " + "text-xl sm:text-2xl font-semibold text-center text-amber-50 mb-4 sm:mb-6",
                        children: "Technologies We Work With"
                    }, void 0, false, {
                        fileName: "[project]/app/services/hostinganddomain/page.jsx",
                        lineNumber: 421,
                        columnNumber: 50
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onMouseEnter: ()=>setStopScroll(true),
                        onMouseLeave: ()=>setStopScroll(false),
                        className: "jsx-716566f5ab19c33" + " " + "overflow-hidden w-full relative max-w-6xl mx-auto mt-8 sm:mt-10 md:mt-15",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                animationPlayState: stopScroll ? 'paused' : 'running',
                                animationDuration: cardData.length * 2000 + 'ms'
                            },
                            className: "jsx-716566f5ab19c33" + " " + "marquee-inner",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-716566f5ab19c33" + " " + "flex",
                                children: [
                                    ...cardData,
                                    ...cardData
                                ].map((card, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-716566f5ab19c33" + " " + "w-36 sm:w-40 md:w-44 mx-2 sm:mx-3 p-2 sm:p-3 bg-slate-900/40 rounded-lg flex flex-col items-center text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: card.image,
                                                alt: card.title,
                                                className: "jsx-716566f5ab19c33" + " " + "w-10 h-10 sm:w-12 sm:h-12 object-contain mb-2"
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                lineNumber: 427,
                                                columnNumber: 70
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-716566f5ab19c33" + " " + "text-white text-xs sm:text-sm font-medium",
                                                children: card.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                                lineNumber: 428,
                                                columnNumber: 70
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                        lineNumber: 426,
                                        columnNumber: 66
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/services/hostinganddomain/page.jsx",
                                lineNumber: 424,
                                columnNumber: 58
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/services/hostinganddomain/page.jsx",
                            lineNumber: 423,
                            columnNumber: 54
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/services/hostinganddomain/page.jsx",
                        lineNumber: 422,
                        columnNumber: 50
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/services/hostinganddomain/page.jsx",
                lineNumber: 416,
                columnNumber: 46
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=_12a4005e._.js.map