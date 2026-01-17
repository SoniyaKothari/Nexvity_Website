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
"[project]/app/services/uiux/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UiUxDesignServices
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
;
;
;
;
;
;
function UiUxDesignServices() {
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
    const sectionData = [
        {
            title: "Traditional firms focus on aesthetics ",
            description: "Many agencies chase beauty over purpose, delivering designs that look good but fail to drive results.",
            image: "/assets/u_abt_1.png",
            className: "py-10 border-b border-slate-700 md:border-r md:border-b md:px-10 lg:border-b-0"
        },
        {
            title: "Nexvity engineers behavioral conversion",
            description: " We craft designs that actively guide user actions, turning interactions into measurable results.",
            image: "/assets/u_abt2.png",
            className: "py-10 border-b border-slate-700 md:border-b md:px-10 lg:border-r lg:border-b-0"
        },
        {
            title: "Through adaptive design ecosystems",
            description: "  Our solutions evolve with your audience, creating seamless, data-driven experiences that grow over time.",
            image: "/assets/u_abt_3.png",
            className: "py-10 border-b border-slate-700 md:border-r md:border-b-0 md:px-10 lg:border-b-0"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: "@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');"
            }, void 0, false, {
                fileName: "[project]/app/services/uiux/page.jsx",
                lineNumber: 86,
                columnNumber: 2
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
                                fileName: "[project]/app/services/uiux/page.jsx",
                                lineNumber: 97,
                                columnNumber: 17
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
                                            stopColor: "#d0bae9ff",
                                            stopOpacity: "0"
                                        }, void 0, false, {
                                            fileName: "[project]/app/services/uiux/page.jsx",
                                            lineNumber: 100,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "1",
                                            stopColor: "#d0bae9ff"
                                        }, void 0, false, {
                                            fileName: "[project]/app/services/uiux/page.jsx",
                                            lineNumber: 101,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/services/uiux/page.jsx",
                                    lineNumber: 99,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/services/uiux/page.jsx",
                                lineNumber: 98,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/services/uiux/page.jsx",
                        lineNumber: 91,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].a, {
                        className: "flex items-center mt-36 sm:mt-40 md:mt-48 gap-2 border border-slate-600 text-gray-50 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm",
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
                                fileName: "[project]/app/services/uiux/page.jsx",
                                lineNumber: 112,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Start the Conversation"
                            }, void 0, false, {
                                fileName: "[project]/app/services/uiux/page.jsx",
                                lineNumber: 113,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/services/uiux/page.jsx",
                        lineNumber: 105,
                        columnNumber: 13
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
                        children: "UI/UX & Product Design"
                    }, void 0, false, {
                        fileName: "[project]/app/services/uiux/page.jsx",
                        lineNumber: 115,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                        className: "text-center text-xs sm:text-sm md:text-base leading-relaxed max-w-lg mt-2 px-2",
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
                        children: "Our UI/UX and product design services create intuitive, scalable digital experiences.Designed for usability, consistency, and long-term growth."
                    }, void 0, false, {
                        fileName: "[project]/app/services/uiux/page.jsx",
                        lineNumber: 124,
                        columnNumber: 13
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
                        fileName: "[project]/app/services/uiux/page.jsx",
                        lineNumber: 134,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/services/uiux/page.jsx",
                lineNumber: 90,
                columnNumber: 2
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mt-16 sm:mt-20 md:mt-24 lg:mt-50 relative px-4 sm:px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center mx-auto",
                        children: "Overview"
                    }, void 0, false, {
                        fileName: "[project]/app/services/uiux/page.jsx",
                        lineNumber: 146,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs sm:text-sm md:text-base leading-relaxed text-white text-center mt-2 max-w-md mx-auto px-2",
                        children: "We design intuitive, user centric experiences that drive engagement, usability, and customer satisfaction across web and mobile platforms."
                    }, void 0, false, {
                        fileName: "[project]/app/services/uiux/page.jsx",
                        lineNumber: 147,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10 mt-10 sm:mt-12 md:mt-15",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative shadow-xl sm:shadow-2xl shadow-indigo-600/40 rounded-2xl sm:rounded-3xl overflow-hidden shrink-0 order-2 lg:order-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    className: "max-w-xs sm:max-w-sm md:max-w-md w-full object-cover rounded-2xl sm:rounded-3xl",
                                    src: "/assets/ud.jpeg",
                                    alt: "img"
                                }, void 0, false, {
                                    fileName: "[project]/app/services/uiux/page.jsx",
                                    lineNumber: 154,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/services/uiux/page.jsx",
                                lineNumber: 153,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs sm:text-sm text-slate-600 max-w-lg order-1 lg:order-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-lg sm:text-xl md:text-2xl uppercase font-semibold text-white leading-relaxed",
                                        children: "Our Design Philosophy"
                                    }, void 0, false, {
                                        fileName: "[project]/app/services/uiux/page.jsx",
                                        lineNumber: 160,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-32 sm:w-36 md:w-40 h-[2px] sm:h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/services/uiux/page.jsx",
                                        lineNumber: 161,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-4 sm:mt-6 md:mt-8 text-white leading-relaxed",
                                        children: "Designing systems that think, adapt, and convert."
                                    }, void 0, false, {
                                        fileName: "[project]/app/services/uiux/page.jsx",
                                        lineNumber: 162,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 sm:mt-4 text-white leading-relaxed",
                                        children: "At Nexvity, we don't design screens ,We architect intelligent ecosystems. Our Circular Intelligence Workflow ensures that every pixel has intent and every interaction feels instinctive."
                                    }, void 0, false, {
                                        fileName: "[project]/app/services/uiux/page.jsx",
                                        lineNumber: 163,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 sm:mt-4 text-white leading-relaxed",
                                        children: "Our process ensures that each product is:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/services/uiux/page.jsx",
                                        lineNumber: 164,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "list-disc list-inside mt-2 text-white leading-relaxed space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Effortless to use"
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/uiux/page.jsx",
                                                lineNumber: 166,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Visually distinctive"
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/uiux/page.jsx",
                                                lineNumber: 167,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Functionally scalable"
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/uiux/page.jsx",
                                                lineNumber: 168,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Aligned with your brand and market"
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/uiux/page.jsx",
                                                lineNumber: 169,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/services/uiux/page.jsx",
                                        lineNumber: 165,
                                        columnNumber: 34
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 sm:mt-4 text-white leading-relaxed",
                                        children: "To us, design is the process of making innovation usable."
                                    }, void 0, false, {
                                        fileName: "[project]/app/services/uiux/page.jsx",
                                        lineNumber: 171,
                                        columnNumber: 34
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full max-w-[130px] h-1 sm:h-[5px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF] mt-4 sm:mt-6 md:mt-8"
                                    }, void 0, false, {
                                        fileName: "[project]/app/services/uiux/page.jsx",
                                        lineNumber: 172,
                                        columnNumber: 38
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/services/uiux/page.jsx",
                                lineNumber: 159,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/services/uiux/page.jsx",
                        lineNumber: 152,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-0 mt-8 sm:mt-10 md:mt-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center mx-auto",
                                    children: "Our services"
                                }, void 0, false, {
                                    fileName: "[project]/app/services/uiux/page.jsx",
                                    lineNumber: 179,
                                    columnNumber: 29
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
                                                    src: "/assets/ud_1.jpeg",
                                                    alt: "City skyline",
                                                    className: "w-full h-56 sm:h-64 md:h-80 object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/services/uiux/page.jsx",
                                                    lineNumber: 188,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "mt-3 sm:mt-4 px-4 sm:px-5 md:px-6 pt-3 sm:pt-4 mb-1 text-lg sm:text-xl md:text-2xl font-semibold text-white",
                                                    children: "Prototyping & Wireframing"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/services/uiux/page.jsx",
                                                    lineNumber: 193,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs sm:text-sm md:text-base leading-relaxed px-4 sm:px-5 md:px-6 pb-6 sm:pb-7 md:pb-8 text-slate-300",
                                                    children: "Bring your ideas to life with precise prototypes and wireframes that define the structure, flow, and functionality of your digital product. We help visualize concepts early, enabling faster feedback, smarter iterations, and a seamless development process."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/services/uiux/page.jsx",
                                                    lineNumber: 196,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/services/uiux/page.jsx",
                                            lineNumber: 182,
                                            columnNumber: 33
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
                                                    src: "/assets/ud_2.jpeg",
                                                    alt: "Landscape",
                                                    className: "w-full h-56 sm:h-64 md:h-80 object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/services/uiux/page.jsx",
                                                    lineNumber: 207,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "mt-3 sm:mt-4 px-4 sm:px-5 md:px-6 pt-3 sm:pt-4 mb-1 text-lg sm:text-xl md:text-2xl font-semibold text-white",
                                                    children: "Web App & Website Design"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/services/uiux/page.jsx",
                                                    lineNumber: 212,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs sm:text-sm md:text-base leading-relaxed px-4 sm:px-5 md:px-6 pb-6 sm:pb-7 md:pb-8 text-slate-300",
                                                    children: "We craft responsive, user-friendly web apps and websites that combine functionality with stunning design. Every interface is tailored to engage your audience, enhance usability, and drive business growth."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/services/uiux/page.jsx",
                                                    lineNumber: 215,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/services/uiux/page.jsx",
                                            lineNumber: 201,
                                            columnNumber: 33
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
                                                    src: "/assets/ud_3.jpeg",
                                                    alt: "City skyline",
                                                    className: "w-full h-56 sm:h-64 md:h-80 object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/services/uiux/page.jsx",
                                                    lineNumber: 226,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "mt-3 sm:mt-4 px-4 sm:px-5 md:px-6 pt-3 sm:pt-4 mb-1 text-lg sm:text-xl md:text-2xl font-semibold text-white",
                                                    children: "Mobile App Design"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/services/uiux/page.jsx",
                                                    lineNumber: 231,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs sm:text-sm md:text-base leading-relaxed px-4 sm:px-5 md:px-6 pb-6 sm:pb-7 md:pb-8 text-slate-300",
                                                    children: "Our mobile app designs prioritize intuitive experiences, smooth navigation, and adaptive layouts. We create visually compelling apps that work seamlessly across iOS and Android, keeping your users engaged and satisfied."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/services/uiux/page.jsx",
                                                    lineNumber: 234,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/services/uiux/page.jsx",
                                            lineNumber: 220,
                                            columnNumber: 33
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
                                                    src: "/assets/ud_4.jpeg",
                                                    alt: "City skyline",
                                                    className: "w-full h-56 sm:h-64 md:h-80 object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/services/uiux/page.jsx",
                                                    lineNumber: 244,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "mt-3 sm:mt-4 px-4 sm:px-5 md:px-6 pt-3 sm:pt-4 mb-1 text-lg sm:text-xl md:text-2xl font-semibold text-white",
                                                    children: "Brand Identity & Creative Services"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/services/uiux/page.jsx",
                                                    lineNumber: 249,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs sm:text-sm md:text-base leading-relaxed px-4 sm:px-5 md:px-6 pb-6 sm:pb-7 md:pb-8 text-slate-300",
                                                    children: "Elevate your brand with cohesive identity design and creative services that resonate. From logos and visual assets to design systems, we ensure your brand communicates your values with clarity, consistency, and style."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/services/uiux/page.jsx",
                                                    lineNumber: 252,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/services/uiux/page.jsx",
                                            lineNumber: 238,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/services/uiux/page.jsx",
                                    lineNumber: 181,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/services/uiux/page.jsx",
                            lineNumber: 178,
                            columnNumber: 26
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/services/uiux/page.jsx",
                        lineNumber: 177,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-0 mt-12 sm:mt-16 md:mt-20 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$section$2d$title$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                title: "Workflow of SDLC"
                            }, void 0, false, {
                                fileName: "[project]/app/services/uiux/page.jsx",
                                lineNumber: 260,
                                columnNumber: 28
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden lg:block absolute left-0 right-0 top-20 sm:top-22 md:top-24 h-px bg-gradient-to-r from-transparent via-slate-700/70 to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/app/services/uiux/page.jsx",
                                lineNumber: 261,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 sm:mt-10 md:mt-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-2",
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
                                                onClick: ()=>toggleFlip('discovery'),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-2xl sm:rounded-3xl ${flippedCards['discovery'] ? '[transform:rotateY(180deg)]' : ''}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute w-full h-full [backface-visibility:hidden] flex flex-col items-center justify-center rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur border border-white/10 p-4 sm:p-5 md:p-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mx-auto size-12 sm:size-14 md:size-16 rounded-full bg-gradient-to-br from-indigo-600 to-violet-500 p-0.5",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "size-full rounded-full bg-slate-900 text-white flex items-center justify-center",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"], {
                                                                            className: "size-6 sm:size-6 md:size-7"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/services/uiux/page.jsx",
                                                                            lineNumber: 278,
                                                                            columnNumber: 38
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/uiux/page.jsx",
                                                                        lineNumber: 277,
                                                                        columnNumber: 36
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/uiux/page.jsx",
                                                                    lineNumber: 276,
                                                                    columnNumber: 34
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-center text-white leading-relaxed",
                                                                    children: "Cognitive Discovery & Data Intelligence"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/uiux/page.jsx",
                                                                    lineNumber: 281,
                                                                    columnNumber: 34
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "mt-1.5 sm:mt-2 text-slate-300 text-xs sm:text-sm max-w-xs mx-auto text-center leading-relaxed",
                                                                    children: "Most agencies begin with inspiration.We begin with behavioral truth."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/uiux/page.jsx",
                                                                    lineNumber: 282,
                                                                    columnNumber: 34
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/services/uiux/page.jsx",
                                                            lineNumber: 275,
                                                            columnNumber: 32
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center rounded-2xl sm:rounded-3xl bg-indigo-600 text-white [transform:rotateY(180deg)] p-3 sm:p-4 text-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs sm:text-sm text-left leading-relaxed",
                                                                children: "Through advanced psychological profiling and data mining, we uncover User Shadows the unspoken motivations, frictions, and decision triggers that traditional research misses. These insights allow us to map interface behavior directly to your business KPIs."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/uiux/page.jsx",
                                                                lineNumber: 285,
                                                                columnNumber: 34
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/services/uiux/page.jsx",
                                                            lineNumber: 284,
                                                            columnNumber: 32
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/services/uiux/page.jsx",
                                                    lineNumber: 272,
                                                    columnNumber: 30
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/uiux/page.jsx",
                                                lineNumber: 264,
                                                columnNumber: 28
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
                                                onClick: ()=>toggleFlip('wireframe'),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-2xl sm:rounded-3xl ${flippedCards['wireframe'] ? '[transform:rotateY(180deg)]' : ''}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute w-full h-full [backface-visibility:hidden] flex flex-col items-center justify-center rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur border border-white/10 p-4 sm:p-5 md:p-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mx-auto size-12 sm:size-14 md:size-16 rounded-full bg-gradient-to-br from-indigo-600 to-violet-500 p-0.5",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "size-full rounded-full bg-slate-900 text-white flex items-center justify-center",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2d$ruler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PencilRuler$3e$__["PencilRuler"], {
                                                                            className: "size-6 sm:size-6 md:size-7"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/services/uiux/page.jsx",
                                                                            lineNumber: 303,
                                                                            columnNumber: 38
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/uiux/page.jsx",
                                                                        lineNumber: 302,
                                                                        columnNumber: 36
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/uiux/page.jsx",
                                                                    lineNumber: 301,
                                                                    columnNumber: 34
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-white text-center leading-relaxed",
                                                                    children: "Narrative Wireframing"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/uiux/page.jsx",
                                                                    lineNumber: 306,
                                                                    columnNumber: 34
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "mt-1.5 sm:mt-2 text-slate-300 text-xs sm:text-sm max-w-xs mx-auto text-center leading-relaxed",
                                                                    children: "Navigation should never feel like a task it should feel inevitable."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/uiux/page.jsx",
                                                                    lineNumber: 307,
                                                                    columnNumber: 34
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/services/uiux/page.jsx",
                                                            lineNumber: 300,
                                                            columnNumber: 32
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center rounded-2xl sm:rounded-3xl bg-indigo-600 text-white [transform:rotateY(180deg)] p-3 sm:p-4 text-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs sm:text-sm text-left leading-relaxed",
                                                                children: "We approach wireframes as structural narratives, guiding users through a carefully engineered journey. Using Interaction Math, we design micro moments transitions, pauses, and visual cues—that subtly lead attention toward the Success Path."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/uiux/page.jsx",
                                                                lineNumber: 310,
                                                                columnNumber: 34
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/services/uiux/page.jsx",
                                                            lineNumber: 309,
                                                            columnNumber: 32
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/services/uiux/page.jsx",
                                                    lineNumber: 297,
                                                    columnNumber: 30
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/uiux/page.jsx",
                                                lineNumber: 289,
                                                columnNumber: 28
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
                                                onClick: ()=>toggleFlip('design'),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-2xl sm:rounded-3xl ${flippedCards['design'] ? '[transform:rotateY(180deg)]' : ''}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute w-full h-full [backface-visibility:hidden] flex flex-col items-center justify-center rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur border border-white/10 p-4 sm:p-5 md:p-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mx-auto size-12 sm:size-14 md:size-16 rounded-full bg-gradient-to-br from-indigo-600 to-violet-500 p-0.5",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "size-full rounded-full bg-slate-900 text-white flex items-center justify-center",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"], {
                                                                            className: "size-6 sm:size-6 md:size-7"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/services/uiux/page.jsx",
                                                                            lineNumber: 328,
                                                                            columnNumber: 38
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/uiux/page.jsx",
                                                                        lineNumber: 327,
                                                                        columnNumber: 36
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/uiux/page.jsx",
                                                                    lineNumber: 326,
                                                                    columnNumber: 34
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-white text-center leading-relaxed",
                                                                    children: " High-Fidelity Design Systems"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/uiux/page.jsx",
                                                                    lineNumber: 331,
                                                                    columnNumber: 34
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "mt-1.5 sm:mt-2 text-slate-300 text-xs sm:text-sm max-w-xs mx-auto text-center leading-relaxed",
                                                                    children: "We don't create static interfaces.We build living systems."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/uiux/page.jsx",
                                                                    lineNumber: 332,
                                                                    columnNumber: 34
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/services/uiux/page.jsx",
                                                            lineNumber: 325,
                                                            columnNumber: 32
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center rounded-2xl sm:rounded-3xl bg-indigo-600 text-white [transform:rotateY(180deg)] p-3 sm:p-4 text-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs sm:text-sm text-left leading-relaxed",
                                                                children: "By combining Atomic Design principles, Figma variables, and a centralized Design Language including our signature Sky Blue Neon accents we ensure your product scales seamlessly across devices, teams, and future iterations."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/uiux/page.jsx",
                                                                lineNumber: 335,
                                                                columnNumber: 34
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/services/uiux/page.jsx",
                                                            lineNumber: 334,
                                                            columnNumber: 32
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/services/uiux/page.jsx",
                                                    lineNumber: 322,
                                                    columnNumber: 30
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/uiux/page.jsx",
                                                lineNumber: 314,
                                                columnNumber: 28
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
                                                onClick: ()=>toggleFlip('testing'),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-2xl sm:rounded-3xl ${flippedCards['testing'] ? '[transform:rotateY(180deg)]' : ''}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute w-full h-full [backface-visibility:hidden] flex flex-col items-center justify-center rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur border border-white/10 p-4 sm:p-5 md:p-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mx-auto size-12 sm:size-14 md:size-16 rounded-full bg-gradient-to-br from-indigo-600 to-violet-500 p-0.5",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "size-full rounded-full bg-slate-900 text-white flex items-center justify-center",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                            className: "size-6 sm:size-6 md:size-7"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/services/uiux/page.jsx",
                                                                            lineNumber: 353,
                                                                            columnNumber: 38
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/uiux/page.jsx",
                                                                        lineNumber: 352,
                                                                        columnNumber: 36
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/uiux/page.jsx",
                                                                    lineNumber: 351,
                                                                    columnNumber: 34
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-white text-center leading-relaxed",
                                                                    children: "Stress Testing & Precision Handoff"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/uiux/page.jsx",
                                                                    lineNumber: 356,
                                                                    columnNumber: 34
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "mt-1.5 sm:mt-2 text-slate-300 text-xs sm:text-sm max-w-xs mx-auto text-center leading-relaxed",
                                                                    children: "Design is only successful when it survives reality."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/uiux/page.jsx",
                                                                    lineNumber: 357,
                                                                    columnNumber: 34
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/services/uiux/page.jsx",
                                                            lineNumber: 350,
                                                            columnNumber: 32
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center rounded-2xl sm:rounded-3xl bg-indigo-600 text-white [transform:rotateY(180deg)] p-3 sm:p-4 text-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs sm:text-sm text-left leading-relaxed",
                                                                children: "We simulate real world conditions poor lighting, low battery, slow networks to test resilience and clarity. Our developer handoff is engineered for precision, delivering design tokens, animation timings, and system logic that translate the vision into a flawless build."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/uiux/page.jsx",
                                                                lineNumber: 360,
                                                                columnNumber: 34
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/services/uiux/page.jsx",
                                                            lineNumber: 359,
                                                            columnNumber: 32
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/services/uiux/page.jsx",
                                                    lineNumber: 347,
                                                    columnNumber: 30
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/uiux/page.jsx",
                                                lineNumber: 339,
                                                columnNumber: 28
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/services/uiux/page.jsx",
                                        lineNumber: 263,
                                        columnNumber: 26
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden lg:flex items-stretch gap-2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/services/uiux/page.jsx",
                                        lineNumber: 365,
                                        columnNumber: 27
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/services/uiux/page.jsx",
                                lineNumber: 262,
                                columnNumber: 24
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/services/uiux/page.jsx",
                        lineNumber: 259,
                        columnNumber: 24
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/services/uiux/page.jsx",
                lineNumber: 145,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "flex flex-col items-center px-4 sm:px-6 lg:px-8",
                id: "about",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$section$2d$title$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        title: "Why choose Nexvity?",
                        description: "Your partner in AI driven innovation, Software development, and UX design for modern businesses."
                    }, void 0, false, {
                        fileName: "[project]/app/services/uiux/page.jsx",
                        lineNumber: 378,
                        columnNumber: 30
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 sm:mt-14 md:mt-16 lg:mt-18 gap-3 sm:gap-4 md:gap-2",
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
                                            alt: ""
                                        }, void 0, false, {
                                            fileName: "[project]/app/services/uiux/page.jsx",
                                            lineNumber: 399,
                                            columnNumber: 38
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/services/uiux/page.jsx",
                                        lineNumber: 398,
                                        columnNumber: 36
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 sm:mt-5 space-y-1.5 sm:space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm sm:text-base font-medium text-slate-200 leading-relaxed",
                                                children: data.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/uiux/page.jsx",
                                                lineNumber: 403,
                                                columnNumber: 38
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs sm:text-sm text-slate-400 leading-relaxed",
                                                children: data.description
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/uiux/page.jsx",
                                                lineNumber: 406,
                                                columnNumber: 38
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/services/uiux/page.jsx",
                                        lineNumber: 402,
                                        columnNumber: 36
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/app/services/uiux/page.jsx",
                                lineNumber: 384,
                                columnNumber: 34
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/services/uiux/page.jsx",
                        lineNumber: 382,
                        columnNumber: 30
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/services/uiux/page.jsx",
                lineNumber: 377,
                columnNumber: 28
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-ab5a976a289630c2" + " " + "w-full mb-6 sm:mb-8 mt-12 sm:mt-16 md:mt-20 px-4 sm:px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        id: "ab5a976a289630c2",
                        children: ".marquee-inner.jsx-ab5a976a289630c2{white-space:nowrap;align-items:center;gap:1rem;animation:linear infinite marqueeScroll;display:flex}@keyframes marqueeScroll{0%{transform:translate(0%)}to{transform:translate(-50%)}}"
                    }, void 0, false, void 0, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "jsx-ab5a976a289630c2" + " " + "text-xl sm:text-2xl md:text-3xl font-semibold text-center text-amber-50 mb-4 sm:mb-6",
                        children: "Technologies We Work With"
                    }, void 0, false, {
                        fileName: "[project]/app/services/uiux/page.jsx",
                        lineNumber: 421,
                        columnNumber: 46
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onMouseEnter: ()=>setStopScroll(true),
                        onMouseLeave: ()=>setStopScroll(false),
                        className: "jsx-ab5a976a289630c2" + " " + "overflow-hidden w-full relative max-w-6xl mx-auto mt-8 sm:mt-12 md:mt-15",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                animationPlayState: stopScroll ? 'paused' : 'running',
                                animationDuration: cardData.length * 2000 + 'ms'
                            },
                            className: "jsx-ab5a976a289630c2" + " " + "marquee-inner",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-ab5a976a289630c2" + " " + "flex",
                                children: [
                                    ...cardData,
                                    ...cardData
                                ].map((card, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-ab5a976a289630c2" + " " + "w-36 sm:w-40 md:w-44 mx-2 sm:mx-3 p-2 sm:p-3 bg-slate-900/40 rounded-lg flex flex-col items-center text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: card.image,
                                                alt: card.title,
                                                className: "jsx-ab5a976a289630c2" + " " + "w-10 h-10 sm:w-12 sm:h-12 object-contain mb-1.5 sm:mb-2"
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/uiux/page.jsx",
                                                lineNumber: 427,
                                                columnNumber: 66
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-ab5a976a289630c2" + " " + "text-white text-xs sm:text-sm font-medium",
                                                children: card.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/uiux/page.jsx",
                                                lineNumber: 428,
                                                columnNumber: 66
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/app/services/uiux/page.jsx",
                                        lineNumber: 426,
                                        columnNumber: 62
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/services/uiux/page.jsx",
                                lineNumber: 424,
                                columnNumber: 54
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/services/uiux/page.jsx",
                            lineNumber: 423,
                            columnNumber: 50
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/services/uiux/page.jsx",
                        lineNumber: 422,
                        columnNumber: 46
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/services/uiux/page.jsx",
                lineNumber: 416,
                columnNumber: 42
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=_ef7cf77a._.js.map