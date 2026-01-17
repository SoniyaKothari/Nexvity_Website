(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/section-title.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
;
function SectionTitle({ title, description }) {
    const words = title.split(" ");
    const lastWord = words.pop();
    const firstPart = words.join(" ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center mt-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
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
_c = SectionTitle;
var _c;
__turbopack_context__.k.register(_c, "SectionTitle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sections/about-our-apps.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutOurApps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$section$2d$title$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/section-title.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
;
/**
 * CountUp Component for animated numbers
 */ const CountUp = ({ end, duration = 2000, isPercentage = false, suffix = '', start = false })=>{
    _s();
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const countRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const startTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Easing function for smooth animation
    const easeOutExpo = (t)=>{
        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CountUp.useEffect": ()=>{
            if (!start) return;
            countRef.current = 0;
            startTimeRef.current = null;
            const animate = {
                "CountUp.useEffect.animate": (currentTime)=>{
                    if (!startTimeRef.current) {
                        startTimeRef.current = currentTime;
                    }
                    const elapsed = currentTime - startTimeRef.current;
                    const progress = Math.min(elapsed / duration, 1);
                    const easedProgress = easeOutExpo(progress);
                    const currentCount = Math.floor(easedProgress * end);
                    countRef.current = currentCount;
                    setCount(currentCount);
                    if (progress < 1) {
                        animationFrameRef.current = requestAnimationFrame(animate);
                    } else {
                        setCount(end);
                    }
                }
            }["CountUp.useEffect.animate"];
            animationFrameRef.current = requestAnimationFrame(animate);
            return ({
                "CountUp.useEffect": ()=>{
                    if (animationFrameRef.current) {
                        cancelAnimationFrame(animationFrameRef.current);
                    }
                }
            })["CountUp.useEffect"];
        }
    }["CountUp.useEffect"], [
        end,
        duration,
        start
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "tabular-nums",
        children: [
            count,
            suffix,
            isPercentage && '%'
        ]
    }, void 0, true, {
        fileName: "[project]/sections/about-our-apps.jsx",
        lineNumber: 55,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CountUp, "C65OVVYYee+/GDGno8taFlAQkbI=");
_c = CountUp;
function AboutOurApps() {
    _s1();
    const [startCounting, setStartCounting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const statsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sectionData = [
        {
            title: "Systems Over Shortcuts",
            description: "We architect digital solutions with long-term performance in mind.Every decision is made to support scalability, security, and future adaptability    not temporary wins",
            image: "/assets/bolt.svg",
            className: "py-10 border-b border-slate-700 md:border-r md:border-b md:px-10 lg:border-b-0"
        },
        {
            title: "Insight-Led Solutions",
            description: "Every project begins with deep analysis, not assumptions.We uncover risks, opportunities, and hidden potential before shaping a solution that truly fits your business.",
            image: "/assets/abt_2.jpeg",
            className: "py-10 border-b border-slate-700 md:border-b md:px-10 lg:border-r lg:border-b-0"
        },
        {
            title: "Data-Informed Decisions",
            description: "Every recommendation is backed by insight, not instinct.We use analytics, benchmarks, and performance signals to guide smarter digital outcomes.",
            image: "/assets/abt_3.jpeg",
            className: "py-10 border-b border-slate-700 md:border-r md:border-b-0 md:px-10 lg:border-b-0"
        },
        {
            title: "Clarity Through Strategy",
            description: "We simplify complex digital challenges through structured thinking. Our strategic approach ensures every solution is purposeful, measurable, and aligned with your goals..",
            image: "/assets/abt_4.jpeg",
            className: "py-10 border-b border-slate-700 md:border-r md:border-b md:px-10 lg:border-b-0"
        },
        {
            title: "Measured Innovation",
            description: "Innovation is only valuable when it delivers results.We balance creativity with practicality to ensure every idea translates into real business impact.",
            image: "assets/dm.png",
            className: "py-10 border-b border-slate-700 md:border-r md:border-b md:px-10 lg:border-b-0"
        }
    ];
    const sliderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const totalSlides = sectionData.length;
    const [stopScroll, setStopScroll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const cardData = sectionData; // alias for clarity with the provided snippet
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AboutOurApps.useEffect": ()=>{
            const el = sliderRef.current;
            if (!el) return;
            const id = setInterval({
                "AboutOurApps.useEffect.id": ()=>{
                    setCurrentSlide({
                        "AboutOurApps.useEffect.id": (s)=>(s + 1) % totalSlides
                    }["AboutOurApps.useEffect.id"]);
                }
            }["AboutOurApps.useEffect.id"], 3000);
            return ({
                "AboutOurApps.useEffect": ()=>clearInterval(id)
            })["AboutOurApps.useEffect"];
        }
    }["AboutOurApps.useEffect"], [
        totalSlides
    ]);
    // Intersection Observer for stats animation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AboutOurApps.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "AboutOurApps.useEffect": (entries)=>{
                    entries.forEach({
                        "AboutOurApps.useEffect": (entry)=>{
                            if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
                                setStartCounting(true);
                                observer.disconnect();
                            }
                        }
                    }["AboutOurApps.useEffect"]);
                }
            }["AboutOurApps.useEffect"], {
                threshold: [
                    0,
                    0.2,
                    0.5,
                    1
                ],
                rootMargin: '0px'
            });
            if (statsRef.current) {
                observer.observe(statsRef.current);
            }
            return ({
                "AboutOurApps.useEffect": ()=>{
                    if (statsRef.current) {
                        observer.unobserve(statsRef.current);
                    }
                }
            })["AboutOurApps.useEffect"];
        }
    }["AboutOurApps.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "flex flex-col items-center",
        id: "about",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$section$2d$title$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "About Nexvity",
                description: "Your partner in AI driven innovation, Software development, and UX design for modern businesses."
            }, void 0, false, {
                fileName: "[project]/sections/about-our-apps.jsx",
                lineNumber: 148,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-3xl overflow-hidden relative my-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: sliderRef,
                            className: "flex transition-transform duration-500 ease-in-out",
                            style: {
                                transform: `translateX(-${currentSlide * 100}%)`
                            },
                            children: sectionData.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full flex-shrink-0 px-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full min-h-[14rem] md:min-h-[16rem] lg:min-h-[18rem] p-6 rounded-lg bg-gradient-to-r from-white/5 to-transparent border border-white/5 flex flex-col items-center text-center justify-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: item.image,
                                                alt: "",
                                                className: "w-20 h-20 md:w-24 md:h-24 object-cover rounded mb-2"
                                            }, void 0, false, {
                                                fileName: "[project]/sections/about-our-apps.jsx",
                                                lineNumber: 162,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-lg md:text-xl font-semibold text-slate-200 mb-2",
                                                        children: item.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/sections/about-our-apps.jsx",
                                                        lineNumber: 164,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm md:text-base text-slate-400 whitespace-normal leading-relaxed",
                                                        children: item.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/sections/about-our-apps.jsx",
                                                        lineNumber: 165,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sections/about-our-apps.jsx",
                                                lineNumber: 163,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sections/about-our-apps.jsx",
                                        lineNumber: 161,
                                        columnNumber: 33
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/sections/about-our-apps.jsx",
                                    lineNumber: 160,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/sections/about-our-apps.jsx",
                            lineNumber: 152,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/sections/about-our-apps.jsx",
                        lineNumber: 151,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center mt-3 space-x-2",
                        role: "tablist",
                        "aria-label": "Slider indicators",
                        children: sectionData.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setCurrentSlide(i),
                                "aria-label": `Go to slide ${i + 1}`,
                                className: `w-3 h-3 rounded-full ${currentSlide === i ? 'bg-white' : 'bg-black/20'}`
                            }, i, false, {
                                fileName: "[project]/sections/about-our-apps.jsx",
                                lineNumber: 175,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/sections/about-our-apps.jsx",
                        lineNumber: 173,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/sections/about-our-apps.jsx",
                lineNumber: 150,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "flex flex-col items-center mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 md:px-0 mt-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "w-full",
                            initial: {
                                x: -40,
                                opacity: 0
                            },
                            whileInView: {
                                x: 0,
                                opacity: 1
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                type: "spring",
                                stiffness: 280,
                                damping: 60
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                loop: true,
                                autoPlay: true,
                                muted: true,
                                src: "/assets/video.mp4 ",
                                className: "w-full h-auto object-contain rounded-3xl "
                            }, void 0, false, {
                                fileName: "[project]/sections/about-our-apps.jsx",
                                lineNumber: 195,
                                columnNumber: 27
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/sections/about-our-apps.jsx",
                            lineNumber: 187,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "w-full",
                            initial: {
                                x: 40,
                                opacity: 0
                            },
                            whileInView: {
                                x: 0,
                                opacity: 1
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                type: "spring",
                                stiffness: 280,
                                damping: 60
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-5xl font-semibold text-slate-900 dark:text-white",
                                    children: "We’re Here to Support You"
                                }, void 0, false, {
                                    fileName: "[project]/sections/about-our-apps.jsx",
                                    lineNumber: 208,
                                    columnNumber: 27
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-slate-600 dark:text-slate-300 text-sm md:text-base",
                                    children: "Our team is ready to guide you with the right solutions, insights, and expertise. We turn ideas into intelligent, scalable solutions designed for long term success."
                                }, void 0, false, {
                                    fileName: "[project]/sections/about-our-apps.jsx",
                                    lineNumber: 209,
                                    columnNumber: 27
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8",
                                    ref: statsRef,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "rounded-3xl bg-gradient-to-b from-indigo-100 to-white border border-indigo-200 p-6",
                                            initial: {
                                                opacity: 0,
                                                scale: 0.9
                                            },
                                            whileInView: {
                                                opacity: 1,
                                                scale: 1
                                            },
                                            viewport: {
                                                once: true
                                            },
                                            transition: {
                                                duration: 0.5,
                                                delay: 0
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-4xl md:text-5xl font-bold text-indigo-900",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CountUp, {
                                                        end: 113,
                                                        duration: 2500,
                                                        start: startCounting,
                                                        suffix: "+"
                                                    }, void 0, false, {
                                                        fileName: "[project]/sections/about-our-apps.jsx",
                                                        lineNumber: 223,
                                                        columnNumber: 33
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/sections/about-our-apps.jsx",
                                                    lineNumber: 222,
                                                    columnNumber: 31
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 text-base md:text-lg font-semibold text-indigo-900",
                                                    children: "Projects"
                                                }, void 0, false, {
                                                    fileName: "[project]/sections/about-our-apps.jsx",
                                                    lineNumber: 226,
                                                    columnNumber: 31
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sections/about-our-apps.jsx",
                                            lineNumber: 215,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "rounded-3xl bg-gradient-to-b from-indigo-100 to-white border border-indigo-200 p-6",
                                            initial: {
                                                opacity: 0,
                                                scale: 0.9
                                            },
                                            whileInView: {
                                                opacity: 1,
                                                scale: 1
                                            },
                                            viewport: {
                                                once: true
                                            },
                                            transition: {
                                                duration: 0.5,
                                                delay: 0.1
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-4xl md:text-5xl font-bold text-indigo-900",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CountUp, {
                                                        end: 100,
                                                        duration: 2500,
                                                        start: startCounting,
                                                        suffix: "+"
                                                    }, void 0, false, {
                                                        fileName: "[project]/sections/about-our-apps.jsx",
                                                        lineNumber: 236,
                                                        columnNumber: 33
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/sections/about-our-apps.jsx",
                                                    lineNumber: 235,
                                                    columnNumber: 31
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 text-base md:text-lg font-semibold text-indigo-900",
                                                    children: "Clients"
                                                }, void 0, false, {
                                                    fileName: "[project]/sections/about-our-apps.jsx",
                                                    lineNumber: 238,
                                                    columnNumber: 31
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sections/about-our-apps.jsx",
                                            lineNumber: 228,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "rounded-3xl bg-gradient-to-b from-indigo-100 to-white border border-indigo-200 p-6",
                                            initial: {
                                                opacity: 0,
                                                scale: 0.9
                                            },
                                            whileInView: {
                                                opacity: 1,
                                                scale: 1
                                            },
                                            viewport: {
                                                once: true
                                            },
                                            transition: {
                                                duration: 0.5,
                                                delay: 0.2
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-4xl md:text-5xl font-bold text-indigo-900",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CountUp, {
                                                        end: 2.5,
                                                        duration: 2500,
                                                        start: startCounting,
                                                        suffix: "+"
                                                    }, void 0, false, {
                                                        fileName: "[project]/sections/about-our-apps.jsx",
                                                        lineNumber: 248,
                                                        columnNumber: 33
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/sections/about-our-apps.jsx",
                                                    lineNumber: 247,
                                                    columnNumber: 31
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-base md:text-lg font-semibold text-indigo-900",
                                                    children: "Years"
                                                }, void 0, false, {
                                                    fileName: "[project]/sections/about-our-apps.jsx",
                                                    lineNumber: 250,
                                                    columnNumber: 31
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: " text-base md:text-lg font-semibold text-indigo-900",
                                                    children: "Experience"
                                                }, void 0, false, {
                                                    fileName: "[project]/sections/about-our-apps.jsx",
                                                    lineNumber: 251,
                                                    columnNumber: 31
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sections/about-our-apps.jsx",
                                            lineNumber: 240,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "rounded-3xl bg-gradient-to-b from-indigo-100 to-white border border-indigo-200 p-6",
                                            initial: {
                                                opacity: 0,
                                                scale: 0.9
                                            },
                                            whileInView: {
                                                opacity: 1,
                                                scale: 1
                                            },
                                            viewport: {
                                                once: true
                                            },
                                            transition: {
                                                duration: 0.5,
                                                delay: 0.3
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-4xl md:text-5xl font-bold text-indigo-900",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CountUp, {
                                                        end: 96,
                                                        duration: 2500,
                                                        isPercentage: true,
                                                        start: startCounting
                                                    }, void 0, false, {
                                                        fileName: "[project]/sections/about-our-apps.jsx",
                                                        lineNumber: 261,
                                                        columnNumber: 33
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/sections/about-our-apps.jsx",
                                                    lineNumber: 260,
                                                    columnNumber: 31
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 text-base md:text-lg font-semibold text-indigo-900",
                                                    children: "Success Rate"
                                                }, void 0, false, {
                                                    fileName: "[project]/sections/about-our-apps.jsx",
                                                    lineNumber: 263,
                                                    columnNumber: 31
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sections/about-our-apps.jsx",
                                            lineNumber: 253,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sections/about-our-apps.jsx",
                                    lineNumber: 214,
                                    columnNumber: 27
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sections/about-our-apps.jsx",
                            lineNumber: 201,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/sections/about-our-apps.jsx",
                    lineNumber: 186,
                    columnNumber: 23
                }, this)
            }, void 0, false, {
                fileName: "[project]/sections/about-our-apps.jsx",
                lineNumber: 184,
                columnNumber: 14
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/sections/about-our-apps.jsx",
        lineNumber: 147,
        columnNumber: 9
    }, this);
}
_s1(AboutOurApps, "ZYiDgF0wzbnRikXwYFg4MXbakew=");
_c1 = AboutOurApps;
// Styles: hide default scrollbar for a clean, sliding look + marquee
/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
    id: "ebf11ba3c6fb5bb5",
    children: ".no-scrollbar.jsx-ebf11ba3c6fb5bb5{-ms-overflow-style:none;scrollbar-width:none}.no-scrollbar.jsx-ebf11ba3c6fb5bb5::-webkit-scrollbar{display:none}.marquee-inner.jsx-ebf11ba3c6fb5bb5{white-space:nowrap;align-items:center;gap:1rem;animation:linear infinite marqueeScroll;display:flex}.marquee-inner.jsx-ebf11ba3c6fb5bb5:hover{animation-play-state:paused}@keyframes marqueeScroll{0%{transform:translate(0%)}to{transform:translate(-50%)}}"
}, void 0, false, void 0, ("TURBOPACK compile-time value", void 0));
var _c, _c1;
__turbopack_context__.k.register(_c, "CountUp");
__turbopack_context__.k.register(_c1, "AboutOurApps");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sections/get-in-touch.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GetInTouch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$section$2d$title$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/section-title.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function GetInTouch() {
    _s();
    const [showMessage, setShowMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messageContent, setMessageContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GetInTouch.useEffect": ()=>{
            setIsClient(true);
        }
    }["GetInTouch.useEffect"], []);
    const sendEmail = (e)=>{
        e.preventDefault();
        // Get form data
        const form = e.target;
        const templateParams = {
            from_name: form.name.value,
            from_email: form.email.value,
            message: form.message.value
        };
        // Initialize EmailJS with your public key
        emailjs.init(("TURBOPACK compile-time value", "qHOUei930wgjUgXqI"));
        // Send email using EmailJS
        emailjs.send(("TURBOPACK compile-time value", "service_4f4c6mp"), ("TURBOPACK compile-time value", "template_gyzwqqs"), templateParams, ("TURBOPACK compile-time value", "qHOUei930wgjUgXqI")).then((result)=>{
            console.log(result.text);
            setMessageContent({
                title: 'Message Sent Successfully!',
                description: 'Thank you for contacting us. We will get back to you soon.',
                type: 'success',
                userName: form.name.value,
                userEmail: form.email.value,
                userMessage: form.message.value
            });
            setShowMessage(true);
            form.reset(); // Reset form after successful submission
        }, (error)=>{
            console.log(error.text);
            setMessageContent({
                title: 'Failed to Send Message',
                description: 'Please try again later.',
                type: 'error',
                userName: form.name.value,
                userEmail: form.email.value,
                userMessage: form.message.value
            });
            setShowMessage(true);
        });
    };
    const closeMessage = ()=>{
        setShowMessage(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "flex flex-col items-center",
        id: "contact",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$section$2d$title$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Get in touch",
                description: "A visual collection of our most recent works - each piece crafted with intention, emotion, and style."
            }, void 0, false, {
                fileName: "[project]/sections/get-in-touch.jsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-16 w-full max-w-6xl mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border border-slate-700 rounded-2xl p-6 md:p-10 bg-slate-900/50 backdrop-blur-sm",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col lg:flex-row gap-16 items-center w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 max-w-2xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: sendEmail,
                                    className: "grid sm:grid-cols-2 gap-3 sm:gap-5 text-slate-400 w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                                type: "spring",
                                                stiffness: 320,
                                                damping: 70,
                                                mass: 1
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "font-medium text-slate-200",
                                                    children: "Your name"
                                                }, void 0, false, {
                                                    fileName: "[project]/sections/get-in-touch.jsx",
                                                    lineNumber: 85,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    name: "name",
                                                    type: "text",
                                                    placeholder: "Enter your name",
                                                    className: "w-full mt-2 p-3 outline-none border border-slate-700 rounded-lg focus-within:ring-1 transition focus:ring-indigo-600 bg-transparent",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/sections/get-in-touch.jsx",
                                                    lineNumber: 86,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sections/get-in-touch.jsx",
                                            lineNumber: 79,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                                type: "spring",
                                                stiffness: 280,
                                                damping: 70,
                                                mass: 1
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "font-medium text-slate-200",
                                                    children: "Email id"
                                                }, void 0, false, {
                                                    fileName: "[project]/sections/get-in-touch.jsx",
                                                    lineNumber: 95,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    name: "email",
                                                    type: "email",
                                                    placeholder: "Enter your email",
                                                    className: "w-full mt-2 p-3 outline-none border border-slate-700 rounded-lg focus-within:ring-1 transition focus:ring-indigo-600 bg-transparent",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/sections/get-in-touch.jsx",
                                                    lineNumber: 96,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sections/get-in-touch.jsx",
                                            lineNumber: 89,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "sm:col-span-2",
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
                                                type: "spring",
                                                stiffness: 240,
                                                damping: 70,
                                                mass: 1
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "font-medium text-slate-200",
                                                    children: "Message"
                                                }, void 0, false, {
                                                    fileName: "[project]/sections/get-in-touch.jsx",
                                                    lineNumber: 105,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    name: "message",
                                                    rows: 8,
                                                    placeholder: "Enter your message",
                                                    className: "resize-none w-full mt-2 p-3 outline-none rounded-lg focus-within:ring-1 transition focus:ring-indigo-600 border border-slate-700 bg-transparent",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/sections/get-in-touch.jsx",
                                                    lineNumber: 106,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sections/get-in-touch.jsx",
                                            lineNumber: 99,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                            type: "submit",
                                            className: "w-max flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full",
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
                                                type: "spring",
                                                stiffness: 280,
                                                damping: 70,
                                                mass: 1
                                            },
                                            children: [
                                                "Submit",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                    className: "size-4.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/sections/get-in-touch.jsx",
                                                    lineNumber: 116,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sections/get-in-touch.jsx",
                                            lineNumber: 109,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sections/get-in-touch.jsx",
                                    lineNumber: 78,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/sections/get-in-touch.jsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 flex justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PremiumClock, {}, void 0, false, {
                                    fileName: "[project]/sections/get-in-touch.jsx",
                                    lineNumber: 122,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/sections/get-in-touch.jsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sections/get-in-touch.jsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/sections/get-in-touch.jsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/sections/get-in-touch.jsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            isClient && showMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        scale: 0.8,
                        opacity: 0
                    },
                    animate: {
                        scale: 1,
                        opacity: 1
                    },
                    className: `max-w-md w-full rounded-2xl p-8 text-center ${messageContent.type === 'success' ? 'bg-emerald-500/20 border border-emerald-500/30' : 'bg-rose-500/20 border border-rose-500/30'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-5xl mb-4",
                            children: messageContent.type === 'success' ? '✓' : '✗'
                        }, void 0, false, {
                            fileName: "[project]/sections/get-in-touch.jsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-bold mb-2 text-white",
                            children: messageContent.title
                        }, void 0, false, {
                            fileName: "[project]/sections/get-in-touch.jsx",
                            lineNumber: 137,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-300 mb-6",
                            children: messageContent.description
                        }, void 0, false, {
                            fileName: "[project]/sections/get-in-touch.jsx",
                            lineNumber: 138,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6 text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-semibold text-slate-200 text-sm mb-1",
                                            children: "Name:"
                                        }, void 0, false, {
                                            fileName: "[project]/sections/get-in-touch.jsx",
                                            lineNumber: 141,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-300 bg-slate-800/50 p-2 rounded-lg",
                                            children: messageContent.userName
                                        }, void 0, false, {
                                            fileName: "[project]/sections/get-in-touch.jsx",
                                            lineNumber: 142,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sections/get-in-touch.jsx",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-semibold text-slate-200 text-sm mb-1",
                                            children: "Email:"
                                        }, void 0, false, {
                                            fileName: "[project]/sections/get-in-touch.jsx",
                                            lineNumber: 145,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-300 bg-slate-800/50 p-2 rounded-lg",
                                            children: messageContent.userEmail
                                        }, void 0, false, {
                                            fileName: "[project]/sections/get-in-touch.jsx",
                                            lineNumber: 146,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sections/get-in-touch.jsx",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-semibold text-slate-200 text-sm mb-1",
                                            children: "Message:"
                                        }, void 0, false, {
                                            fileName: "[project]/sections/get-in-touch.jsx",
                                            lineNumber: 149,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-300 bg-slate-800/50 p-2 rounded-lg",
                                            children: messageContent.userMessage
                                        }, void 0, false, {
                                            fileName: "[project]/sections/get-in-touch.jsx",
                                            lineNumber: 150,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sections/get-in-touch.jsx",
                                    lineNumber: 148,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sections/get-in-touch.jsx",
                            lineNumber: 139,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: closeMessage,
                            className: "px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition",
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/sections/get-in-touch.jsx",
                            lineNumber: 153,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/sections/get-in-touch.jsx",
                    lineNumber: 130,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/sections/get-in-touch.jsx",
                lineNumber: 129,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/sections/get-in-touch.jsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_s(GetInTouch, "5Zmqlf4oqy9RWmaTWgJhsgejPyU=");
_c = GetInTouch;
function PremiumClock() {
    _s1();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PremiumClock.useEffect": ()=>{
            const createMarkers = {
                "PremiumClock.useEffect.createMarkers": ()=>{
                    const hourMarkers = document.getElementById("hourMarkers");
                    const minuteMarkers = document.getElementById("minuteMarkers");
                    const hourNumbers = document.getElementById("hourNumbers");
                    if (!hourMarkers || !minuteMarkers || !hourNumbers) return;
                    // Hour markers
                    for(let i = 0; i < 12; i++){
                        const angle = i * 30 * Math.PI / 180;
                        const x1 = 200 + Math.sin(angle) * 170;
                        const y1 = 200 - Math.cos(angle) * 170;
                        const x2 = 200 + Math.sin(angle) * 155;
                        const y2 = 200 - Math.cos(angle) * 155;
                        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
                        line.setAttribute("x1", `${x1}`);
                        line.setAttribute("y1", `${y1}`);
                        line.setAttribute("x2", `${x2}`);
                        line.setAttribute("y2", `${y2}`);
                        line.setAttribute("stroke-width", "3");
                        line.setAttribute("stroke", "#ffffff");
                        hourMarkers.appendChild(line);
                    }
                    // Hour numbers
                    for(let i = 0; i < 12; i++){
                        const hour = i === 0 ? 12 : i;
                        const angle = i * 30 * Math.PI / 180;
                        const x = 200 + Math.sin(angle) * 135;
                        const y = 200 - Math.cos(angle) * 135;
                        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
                        text.setAttribute("x", `${x}`);
                        text.setAttribute("y", `${y + 6}`);
                        text.setAttribute("text-anchor", "middle");
                        text.setAttribute("font-size", "26");
                        text.setAttribute("font-weight", "600");
                        text.setAttribute("fill", "#00d4ff");
                        text.setAttribute("opacity", "0");
                        text.textContent = `${hour}`;
                        hourNumbers.appendChild(text);
                    }
                    // Minute markers
                    for(let i = 0; i < 60; i++){
                        if (i % 5 === 0) continue;
                        const angle = i * 6 * Math.PI / 180;
                        const x1 = 200 + Math.sin(angle) * 170;
                        const y1 = 200 - Math.cos(angle) * 170;
                        const x2 = 200 + Math.sin(angle) * 162;
                        const y2 = 200 - Math.cos(angle) * 162;
                        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
                        line.setAttribute("x1", `${x1}`);
                        line.setAttribute("y1", `${y1}`);
                        line.setAttribute("x2", `${x2}`);
                        line.setAttribute("y2", `${y2}`);
                        line.setAttribute("stroke-width", "1");
                        line.setAttribute("stroke", "#4b5563");
                        minuteMarkers.appendChild(line);
                    }
                }
            }["PremiumClock.useEffect.createMarkers"];
            const updateClock = {
                "PremiumClock.useEffect.updateClock": ()=>{
                    const now = new Date();
                    const hours = now.getHours() % 12;
                    const minutes = now.getMinutes();
                    const seconds = now.getSeconds();
                    const milliseconds = now.getMilliseconds();
                    const hourAngle = (hours + minutes / 60) * 30;
                    const minuteAngle = (minutes + seconds / 60) * 6;
                    const secondAngle = (seconds + milliseconds / 1000) * 6; // Include milliseconds for smooth movement
                    const hourHand = document.getElementById("hourHand");
                    const minuteHand = document.getElementById("minuteHand");
                    const secondHand = document.getElementById("secondHandGroup");
                    const digital = document.getElementById("digitalTime");
                    if (hourHand) hourHand.style.transform = `rotate(${hourAngle}deg)`;
                    if (minuteHand) minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
                    if (secondHand) secondHand.style.transform = `rotate(${secondAngle}deg)`;
                    if (digital) {
                        digital.textContent = `${now.getHours().toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
                    }
                    requestAnimationFrame(updateClock);
                }
            }["PremiumClock.useEffect.updateClock"];
            createMarkers();
            updateClock();
        }
    }["PremiumClock.useEffect"], []);
    const [isAnimating, setIsAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleClick = ()=>{
        setIsAnimating(true);
        setTimeout(()=>setIsAnimating(false), 300); // Reset animation state after 300ms
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-bold mb-2",
                children: "Future-Ready"
            }, void 0, false, {
                fileName: "[project]/sections/get-in-touch.jsx",
                lineNumber: 281,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-lg mb-6 opacity-90",
                children: [
                    "Websites designed to be scalable and future-ready,",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/sections/get-in-touch.jsx",
                        lineNumber: 284,
                        columnNumber: 9
                    }, this),
                    "adapting as your business grows."
                ]
            }, void 0, true, {
                fileName: "[project]/sections/get-in-touch.jsx",
                lineNumber: 282,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative w-[320px] h-[320px] ${isAnimating ? 'scale-105' : 'scale-100'} transition-transform duration-300`,
                onClick: handleClick,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 400 400",
                        className: "w-full h-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "200",
                                cy: "200",
                                r: "190",
                                fill: "#1a1a1a"
                            }, void 0, false, {
                                fileName: "[project]/sections/get-in-touch.jsx",
                                lineNumber: 293,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                id: "hourMarkers"
                            }, void 0, false, {
                                fileName: "[project]/sections/get-in-touch.jsx",
                                lineNumber: 294,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                id: "minuteMarkers"
                            }, void 0, false, {
                                fileName: "[project]/sections/get-in-touch.jsx",
                                lineNumber: 295,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                id: "hourNumbers"
                            }, void 0, false, {
                                fileName: "[project]/sections/get-in-touch.jsx",
                                lineNumber: 296,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "200",
                                y: "170",
                                textAnchor: "middle",
                                className: "fill-white text-xl tracking-widest",
                                children: "NEXVITY"
                            }, void 0, false, {
                                fileName: "[project]/sections/get-in-touch.jsx",
                                lineNumber: 298,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "200",
                                cy: "200",
                                r: "8",
                                fill: "white"
                            }, void 0, false, {
                                fileName: "[project]/sections/get-in-touch.jsx",
                                lineNumber: 307,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                id: "hourHand",
                                x1: "200",
                                y1: "200",
                                x2: "200",
                                y2: "120",
                                stroke: "white",
                                strokeWidth: "8",
                                strokeLinecap: "round",
                                style: {
                                    transformOrigin: "200px 200px"
                                }
                            }, void 0, false, {
                                fileName: "[project]/sections/get-in-touch.jsx",
                                lineNumber: 309,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                id: "minuteHand",
                                x1: "200",
                                y1: "200",
                                x2: "200",
                                y2: "90",
                                stroke: "white",
                                strokeWidth: "6",
                                strokeLinecap: "round",
                                style: {
                                    transformOrigin: "200px 200px"
                                }
                            }, void 0, false, {
                                fileName: "[project]/sections/get-in-touch.jsx",
                                lineNumber: 321,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                id: "secondHandGroup",
                                style: {
                                    transformOrigin: "200px 200px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "200",
                                        y1: "220",
                                        x2: "200",
                                        y2: "60",
                                        stroke: "#ef4444",
                                        strokeWidth: "2"
                                    }, void 0, false, {
                                        fileName: "[project]/sections/get-in-touch.jsx",
                                        lineNumber: 337,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "200",
                                        cy: "200",
                                        r: "6",
                                        fill: "#ef4444"
                                    }, void 0, false, {
                                        fileName: "[project]/sections/get-in-touch.jsx",
                                        lineNumber: 345,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sections/get-in-touch.jsx",
                                lineNumber: 333,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sections/get-in-touch.jsx",
                        lineNumber: 292,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "digitalTime",
                        className: "absolute bottom-8 left-1/2 -translate-x-1/2 text-lg font-light"
                    }, void 0, false, {
                        fileName: "[project]/sections/get-in-touch.jsx",
                        lineNumber: 349,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/sections/get-in-touch.jsx",
                lineNumber: 288,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/sections/get-in-touch.jsx",
        lineNumber: 280,
        columnNumber: 5
    }, this);
}
_s1(PremiumClock, "lNEoSPGVhFrLz6TM9B7PYHK7glw=");
_c1 = PremiumClock;
var _c, _c1;
__turbopack_context__.k.register(_c, "GetInTouch");
__turbopack_context__.k.register(_c1, "PremiumClock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/tilt-image.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TiltedImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const springValues = {
    damping: 30,
    stiffness: 100,
    mass: 2
};
function TiltedImage({ rotateAmplitude = 3 }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const rotateX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0), springValues);
    const rotateY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0), springValues);
    const rotateFigcaption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(0, {
        stiffness: 350,
        damping: 30,
        mass: 1
    });
    const [lastY, setLastY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    function handleMouse(e) {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;
        const rotationX = offsetY / (rect.height / 2) * -rotateAmplitude;
        const rotationY = offsetX / (rect.width / 2) * rotateAmplitude;
        rotateX.set(rotationX);
        rotateY.set(rotationY);
        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);
        const velocityY = offsetY - lastY;
        rotateFigcaption.set(-velocityY * 0.6);
        setLastY(offsetY);
    }
    function handleMouseLeave() {
        rotateX.set(0);
        rotateY.set(0);
        rotateFigcaption.set(0);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].figure, {
        ref: ref,
        className: "relative w-full h-full [perspective:800px] mt-16 max-w-4xl mx-auto flex flex-col items-center justify-center",
        onMouseMove: handleMouse,
        onMouseLeave: handleMouseLeave,
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
            type: "spring",
            stiffness: 320,
            damping: 70,
            mass: 1
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "relative [transform-style:preserve-3d] w-full max-w-4xl",
            style: {
                rotateX,
                rotateY
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "assets/",
                className: "w-full rounded-[15px] will-change-transform [transform:translateZ(0)]",
                alt: "hero section showcase"
            }, void 0, false, {
                fileName: "[project]/components/tilt-image.jsx",
                lineNumber: 57,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/tilt-image.jsx",
            lineNumber: 56,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/tilt-image.jsx",
        lineNumber: 50,
        columnNumber: 9
    }, this);
}
_s(TiltedImage, "wlPcIBDWfFdER/vf4GfVj+stRw0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c = TiltedImage;
var _c;
__turbopack_context__.k.register(_c, "TiltedImage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/game.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Home() {
    _s();
    const [currentSection, setCurrentSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('default');
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [level, setLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [isPaused, setIsPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Snake game refs
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const snakeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([
        {
            x: 10,
            y: 10
        }
    ]);
    const foodRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 15,
        y: 15
    });
    const dxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const dyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const gameSpeedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(150);
    const lastUpdateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const contentData = {
        services: {
            title: 'Our Services',
            body: 'We provide comprehensive IT solutions including web development, mobile app development, cloud infrastructure, cybersecurity, and AI integration. Our team delivers cutting-edge technology tailored to your business needs.'
        },
        about: {
            title: 'About Us',
            body: 'We are a team of passionate innovators dedicated to transforming ideas into reality. Founded with a vision to push technological boundaries.'
        },
        portfolio: {
            title: 'Our Portfolio',
            body: 'Explore our diverse range of successful projects across multiple industries. From startups to enterprise solutions.'
        }
    };
    const resetGame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[resetGame]": ()=>{
            snakeRef.current = [
                {
                    x: 10,
                    y: 10
                }
            ];
            dxRef.current = 0;
            dyRef.current = 0;
            lastUpdateRef.current = 0;
            foodRef.current = {
                x: 15,
                y: 15
            };
            setScore(0);
            setLevel(1);
            gameSpeedRef.current = 150;
        }
    }["Home.useCallback[resetGame]"], []);
    const drawGame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[drawGame]": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            ctx.fillStyle = '#000000';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            // Draw snake
            snakeRef.current.forEach({
                "Home.useCallback[drawGame]": (segment, index)=>{
                    ctx.fillStyle = '#00ff9d';
                    if (index === 0) {
                        ctx.shadowBlur = 15;
                        ctx.shadowColor = '#00ff9d';
                    }
                    ctx.fillRect(segment.x * 20, segment.y * 20, 18, 18);
                    ctx.shadowBlur = 0;
                }
            }["Home.useCallback[drawGame]"]);
            // Draw food
            ctx.fillStyle = '#ff006e';
            ctx.shadowBlur = 20;
            ctx.shadowColor = '#ff006e';
            ctx.fillRect(foodRef.current.x * 20, foodRef.current.y * 20, 18, 18);
            ctx.shadowBlur = 0;
        }
    }["Home.useCallback[drawGame]"], []);
    const gameLoop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[gameLoop]": (timestamp)=>{
            if (isPaused || dxRef.current === 0 && dyRef.current === 0) {
                animationRef.current = requestAnimationFrame(gameLoop);
                return;
            }
            if (timestamp - lastUpdateRef.current < gameSpeedRef.current) {
                animationRef.current = requestAnimationFrame(gameLoop);
                return;
            }
            lastUpdateRef.current = timestamp;
            const head = {
                x: snakeRef.current[0].x + dxRef.current,
                y: snakeRef.current[0].y + dyRef.current
            };
            const canvas = canvasRef.current;
            if (!canvas) return;
            // Wall collision
            if (head.x < 0 || head.x >= 20 || head.y < 0 || head.y >= 20) {
                resetGame();
                animationRef.current = requestAnimationFrame(gameLoop);
                return;
            }
            // Self collision
            if (snakeRef.current.some({
                "Home.useCallback[gameLoop]": (segment)=>segment.x === head.x && segment.y === head.y
            }["Home.useCallback[gameLoop]"])) {
                resetGame();
                animationRef.current = requestAnimationFrame(gameLoop);
                return;
            }
            snakeRef.current.unshift(head);
            // Food collision
            if (head.x === foodRef.current.x && head.y === foodRef.current.y) {
                const newScore = score + 10;
                setScore(newScore);
                const newLevel = Math.floor(newScore / 50) + 1;
                setLevel(newLevel);
                gameSpeedRef.current = Math.max(50, 150 - newLevel * 10);
                foodRef.current = {
                    x: Math.floor(Math.random() * 20),
                    y: Math.floor(Math.random() * 20)
                };
            } else {
                snakeRef.current.pop();
            }
            // draw the updated state
            drawGame();
            animationRef.current = requestAnimationFrame(gameLoop);
        }
    }["Home.useCallback[gameLoop]"], [
        isPaused,
        score,
        resetGame
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (currentSection === 'game') {
                drawGame();
                animationRef.current = requestAnimationFrame(gameLoop);
            }
            return ({
                "Home.useEffect": ()=>{
                    if (animationRef.current) {
                        cancelAnimationFrame(animationRef.current);
                    }
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        currentSection,
        gameLoop,
        drawGame
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const handleKeyDown = {
                "Home.useEffect.handleKeyDown": (e)=>{
                    if (currentSection !== 'game') return;
                    if ((e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') && dyRef.current !== 1) {
                        dxRef.current = 0;
                        dyRef.current = -1;
                    } else if ((e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') && dyRef.current !== -1) {
                        dxRef.current = 0;
                        dyRef.current = 1;
                    } else if ((e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') && dxRef.current !== 1) {
                        dxRef.current = -1;
                        dyRef.current = 0;
                    } else if ((e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') && dxRef.current !== -1) {
                        dxRef.current = 1;
                        dyRef.current = 0;
                    }
                }
            }["Home.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "Home.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        currentSection
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-be768ded0b735dad" + " " + "w-full overflow-hidden bg-black text-white border border-[#00ff9d]/30 rounded-xl pt-10 pb-10",
        children: [
            currentSection === 'game' ? // Game layout: canvas on left, controls on right
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-be768ded0b735dad" + " " + "flex flex-col lg:flex-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "jsx-be768ded0b735dad" + " " + "lg:w-1/2 flex items-center justify-center p-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-be768ded0b735dad" + " " + "w-full max-w-md p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                ref: canvasRef,
                                width: 400,
                                height: 400,
                                className: "jsx-be768ded0b735dad" + " " + "w-full h-auto max-w-[400px] border border-[#00ff9d]/30 rounded-lg shadow-[0 0 20px_rgba(0,255,157,0.2)] block mx-auto"
                            }, void 0, false, {
                                fileName: "[project]/components/game.jsx",
                                lineNumber: 164,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/game.jsx",
                            lineNumber: 163,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/game.jsx",
                        lineNumber: 162,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-be768ded0b735dad" + " " + "h-px lg:h-full lg:w-px w-full lg:w-auto bg-gradient-to-r lg:bg-gradient-to-b from-transparent via-[#00ff9d]/30 to-transparent lg:via-[#00ff9d]/30"
                    }, void 0, false, {
                        fileName: "[project]/components/game.jsx",
                        lineNumber: 173,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "jsx-be768ded0b735dad" + " " + "lg:w-1/2 flex items-center justify-center p-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-be768ded0b735dad" + " " + "w-full max-w-sm space-y-6 mx-auto p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-be768ded0b735dad" + " " + "space-y-3 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                color: '#00ff9d'
                                            },
                                            className: "jsx-be768ded0b735dad" + " " + "text-3xl font-light",
                                            children: "Snake Game"
                                        }, void 0, false, {
                                            fileName: "[project]/components/game.jsx",
                                            lineNumber: 178,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: '#a0a0a0'
                                            },
                                            className: "jsx-be768ded0b735dad" + " " + "text-base",
                                            children: "Arrow keys or WASD to play"
                                        }, void 0, false, {
                                            fileName: "[project]/components/game.jsx",
                                            lineNumber: 179,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/game.jsx",
                                    lineNumber: 177,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-be768ded0b735dad" + " " + "flex justify-between gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-be768ded0b735dad" + " " + "text-center flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: '#a0a0a0'
                                                    },
                                                    className: "jsx-be768ded0b735dad" + " " + "text-sm block",
                                                    children: "Score"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/game.jsx",
                                                    lineNumber: 182,
                                                    columnNumber: 53
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: '#00ff9d'
                                                    },
                                                    className: "jsx-be768ded0b735dad" + " " + "text-2xl font-bold block",
                                                    children: score
                                                }, void 0, false, {
                                                    fileName: "[project]/components/game.jsx",
                                                    lineNumber: 182,
                                                    columnNumber: 124
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/game.jsx",
                                            lineNumber: 182,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-be768ded0b735dad" + " " + "text-center flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: '#a0a0a0'
                                                    },
                                                    className: "jsx-be768ded0b735dad" + " " + "text-sm block",
                                                    children: "Level"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/game.jsx",
                                                    lineNumber: 183,
                                                    columnNumber: 53
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: '#00ff9d'
                                                    },
                                                    className: "jsx-be768ded0b735dad" + " " + "text-2xl font-bold block",
                                                    children: level
                                                }, void 0, false, {
                                                    fileName: "[project]/components/game.jsx",
                                                    lineNumber: 183,
                                                    columnNumber: 124
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/game.jsx",
                                            lineNumber: 183,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/game.jsx",
                                    lineNumber: 181,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-be768ded0b735dad" + " " + "flex flex-col gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                resetGame();
                                                dxRef.current = 1;
                                                dyRef.current = 0;
                                                setIsPaused(false);
                                                lastUpdateRef.current = 0;
                                                animationRef.current = requestAnimationFrame(gameLoop);
                                            },
                                            className: "jsx-be768ded0b735dad" + " " + "w-full px-6 py-3 rounded-full font-medium text-base bg-[#00ff9d] text-black",
                                            children: "Start Game"
                                        }, void 0, false, {
                                            fileName: "[project]/components/game.jsx",
                                            lineNumber: 186,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setIsPaused((prev)=>{
                                                    const next = !prev;
                                                    if (next) {
                                                        if (animationRef.current) cancelAnimationFrame(animationRef.current);
                                                    } else {
                                                        lastUpdateRef.current = 0;
                                                        animationRef.current = requestAnimationFrame(gameLoop);
                                                    }
                                                    return next;
                                                });
                                            },
                                            className: "jsx-be768ded0b735dad" + " " + "w-full px-6 py-3 rounded-full font-medium text-base border border-[#00ff9d]/30 bg-[rgba(255,255,255,0.05)] text-white backdrop-blur-sm",
                                            children: isPaused ? 'Resume' : 'Pause'
                                        }, void 0, false, {
                                            fileName: "[project]/components/game.jsx",
                                            lineNumber: 200,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setCurrentSection('default');
                                            },
                                            className: "jsx-be768ded0b735dad" + " " + "w-full px-6 py-3 rounded-full font-medium text-base border border-[#ff006e]/30 bg-[rgba(255,255,255,0.05)] text-white backdrop-blur-sm",
                                            children: "Back"
                                        }, void 0, false, {
                                            fileName: "[project]/components/game.jsx",
                                            lineNumber: 218,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/game.jsx",
                                    lineNumber: 185,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/game.jsx",
                            lineNumber: 176,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/game.jsx",
                        lineNumber: 175,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/game.jsx",
                lineNumber: 161,
                columnNumber: 9
            }, this) : // Normal layout
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-be768ded0b735dad" + " " + "flex flex-col lg:flex-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "jsx-be768ded0b735dad" + " " + "flex-1 flex items-center justify-center p-0 order-2 lg:order-1",
                        children: [
                            currentSection === 'default' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-be768ded0b735dad" + " " + "max-w-lg w-full space-y-4 sm:space-y-6 p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-be768ded0b735dad" + " " + "space-y-3 sm:space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            style: {
                                                color: '#e0e0e0'
                                            },
                                            className: "jsx-be768ded0b735dad" + " " + "text-2xl sm:text-3xl lg:text-4xl font-light leading-tight",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    animationDelay: '0.1s'
                                                },
                                                className: "jsx-be768ded0b735dad" + " " + "text-animate inline-block",
                                                children: "Why are you visiting our website?"
                                            }, void 0, false, {
                                                fileName: "[project]/components/game.jsx",
                                                lineNumber: 239,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/game.jsx",
                                            lineNumber: 238,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: '#e0e0e0'
                                            },
                                            className: "jsx-be768ded0b735dad" + " " + "text-lg sm:text-xl lg:text-2xl font-light leading-relaxed",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        animationDelay: '0.3s'
                                                    },
                                                    className: "jsx-be768ded0b735dad" + " " + "text-animate inline-block",
                                                    children: "Is it just for "
                                                }, void 0, false, {
                                                    fileName: "[project]/components/game.jsx",
                                                    lineNumber: 242,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: '#ff006e',
                                                        textShadow: '0 0 15px rgba(255, 0, 110, 0.5)',
                                                        animationDelay: '0.4s'
                                                    },
                                                    className: "jsx-be768ded0b735dad" + " " + "text-animate inline-block font-semibold",
                                                    children: "time pass"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/game.jsx",
                                                    lineNumber: 243,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        animationDelay: '0.5s'
                                                    },
                                                    className: "jsx-be768ded0b735dad" + " " + "text-animate inline-block",
                                                    children: " - or are you here to "
                                                }, void 0, false, {
                                                    fileName: "[project]/components/game.jsx",
                                                    lineNumber: 244,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: '#00ff9d',
                                                        textShadow: '0 0 15px rgba(0, 255, 157, 0.5)',
                                                        animationDelay: '0.6s'
                                                    },
                                                    className: "jsx-be768ded0b735dad" + " " + "text-animate inline-block font-semibold",
                                                    children: "grow?"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/game.jsx",
                                                    lineNumber: 245,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/game.jsx",
                                            lineNumber: 241,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-be768ded0b735dad" + " " + "h-px w-16 sm:w-20 bg-[#00ff9d]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/game.jsx",
                                            lineNumber: 247,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/game.jsx",
                                    lineNumber: 237,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/game.jsx",
                                lineNumber: 236,
                                columnNumber: 15
                            }, this),
                            currentSection !== 'default' && currentSection !== 'game' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-be768ded0b735dad" + " " + "max-w-sm sm:max-w-lg w-full space-y-4 sm:space-y-6 mx-auto p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-be768ded0b735dad" + " " + "space-y-2 sm:space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                style: {
                                                    color: '#00ff9d'
                                                },
                                                className: "jsx-be768ded0b735dad" + " " + "text-2xl sm:text-3xl lg:text-4xl font-light text-center sm:text-left",
                                                children: contentData[currentSection]?.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/game.jsx",
                                                lineNumber: 255,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-be768ded0b735dad" + " " + "h-px w-16 sm:w-20 bg-[#00ff9d] mx-auto sm:mx-0"
                                            }, void 0, false, {
                                                fileName: "[project]/components/game.jsx",
                                                lineNumber: 258,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/game.jsx",
                                        lineNumber: 254,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-be768ded0b735dad" + " " + "space-y-3 sm:space-y-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: '#e0e0e0'
                                            },
                                            className: "jsx-be768ded0b735dad" + " " + "text-sm sm:text-base lg:text-lg leading-relaxed text-center sm:text-left",
                                            children: contentData[currentSection]?.body
                                        }, void 0, false, {
                                            fileName: "[project]/components/game.jsx",
                                            lineNumber: 261,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/game.jsx",
                                        lineNumber: 260,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/game.jsx",
                                lineNumber: 253,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/game.jsx",
                        lineNumber: 234,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-be768ded0b735dad" + " " + "h-px lg:h-full lg:w-px w-full lg:w-auto order-2 lg:order-2 bg-gradient-to-r lg:bg-gradient-to-b from-transparent via-[#00ff9d]/30 to-transparent lg:via-[#00ff9d]/30"
                    }, void 0, false, {
                        fileName: "[project]/components/game.jsx",
                        lineNumber: 270,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "jsx-be768ded0b735dad" + " " + "flex-1 flex items-center justify-center p-0 order-1 lg:order-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                animationDelay: '0.2s'
                            },
                            className: "jsx-be768ded0b735dad" + " " + "w-full max-w-md fade-in-up p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-be768ded0b735dad" + " " + "grid grid-cols-1 sm:grid-cols-2 gap-3 w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-section": "game",
                                        onClick: ()=>setCurrentSection('game'),
                                        className: "jsx-be768ded0b735dad" + " " + `card-node rounded-lg p-3 text-center cursor-pointer transition-all duration-300 icon-card bg-gradient-to-br from-[#8B4513]/20 to-[#654521]/30 border border-[#D4A574]/50 backdrop-blur-sm shadow-lg ${currentSection === 'game' ? 'active' : ''}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-be768ded0b735dad" + " " + "text-xl sm:text-2xl lg:text-3xl mb-1",
                                                children: "🎮"
                                            }, void 0, false, {
                                                fileName: "[project]/components/game.jsx",
                                                lineNumber: 283,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-be768ded0b735dad" + " " + "text-xs sm:text-sm font-medium",
                                                children: "Game"
                                            }, void 0, false, {
                                                fileName: "[project]/components/game.jsx",
                                                lineNumber: 284,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/game.jsx",
                                        lineNumber: 278,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-section": "services",
                                        onClick: ()=>setCurrentSection('services'),
                                        className: "jsx-be768ded0b735dad" + " " + `card-node rounded-lg p-3 text-center cursor-pointer transition-all duration-300 icon-card bg-gradient-to-br from-[#8B4513]/20 to-[#654521]/30 border border-[#D4A574]/50 backdrop-blur-sm shadow-lg ${currentSection === 'services' ? 'active' : ''}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-be768ded0b735dad" + " " + "text-xl sm:text-2xl lg:text-3xl mb-1",
                                                children: "⚙️"
                                            }, void 0, false, {
                                                fileName: "[project]/components/game.jsx",
                                                lineNumber: 293,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-be768ded0b735dad" + " " + "text-xs sm:text-sm font-medium",
                                                children: "Services"
                                            }, void 0, false, {
                                                fileName: "[project]/components/game.jsx",
                                                lineNumber: 294,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/game.jsx",
                                        lineNumber: 288,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-section": "about",
                                        onClick: ()=>setCurrentSection('about'),
                                        className: "jsx-be768ded0b735dad" + " " + `card-node rounded-lg p-3 text-center cursor-pointer transition-all duration-300 icon-card bg-gradient-to-br from-[#8B4513]/20 to-[#654521]/30 border border-[#D4A574]/50 backdrop-blur-sm shadow-lg ${currentSection === 'about' ? 'active' : ''}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-be768ded0b735dad" + " " + "text-xl sm:text-2xl lg:text-3xl mb-1",
                                                children: "👥"
                                            }, void 0, false, {
                                                fileName: "[project]/components/game.jsx",
                                                lineNumber: 303,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-be768ded0b735dad" + " " + "text-xs sm:text-sm font-medium",
                                                children: "About"
                                            }, void 0, false, {
                                                fileName: "[project]/components/game.jsx",
                                                lineNumber: 304,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/game.jsx",
                                        lineNumber: 298,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-section": "portfolio",
                                        onClick: ()=>setCurrentSection('portfolio'),
                                        className: "jsx-be768ded0b735dad" + " " + `card-node rounded-lg p-3 text-center cursor-pointer transition-all duration-300 icon-card bg-gradient-to-br from-[#8B4513]/20 to-[#654521]/30 border border-[#D4A574]/50 backdrop-blur-sm shadow-lg ${currentSection === 'portfolio' ? 'active' : ''}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-be768ded0b735dad" + " " + "text-xl sm:text-2xl lg:text-3xl mb-1",
                                                children: "💼"
                                            }, void 0, false, {
                                                fileName: "[project]/components/game.jsx",
                                                lineNumber: 313,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-be768ded0b735dad" + " " + "text-xs sm:text-sm font-medium",
                                                children: "Portfolio"
                                            }, void 0, false, {
                                                fileName: "[project]/components/game.jsx",
                                                lineNumber: 314,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/game.jsx",
                                        lineNumber: 308,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/game.jsx",
                                lineNumber: 275,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/game.jsx",
                            lineNumber: 274,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/game.jsx",
                        lineNumber: 273,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/game.jsx",
                lineNumber: 232,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "63701d8e48c1995a",
                children: '@keyframes fadeInUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes textSlideIn{0%{opacity:0;transform:translate(-30px)}to{opacity:1;transform:translate(0)}}.text-animate.jsx-be768ded0b735dad{opacity:0;animation:.8s cubic-bezier(.16,1,.3,1) forwards textSlideIn;display:inline-block}.fade-in-up.jsx-be768ded0b735dad{animation:.8s cubic-bezier(.16,1,.3,1) forwards fadeInUp}.icon-card.jsx-be768ded0b735dad{cursor:pointer;transition:all .3s cubic-bezier(.16,1,.3,1)}.icon-card.jsx-be768ded0b735dad:hover{background:linear-gradient(135deg,#8b451366,#65432180)!important;border-color:#d4a574e6!important;transform:translateY(-4px)scale(1.05)!important;box-shadow:0 12px 35px #d4a57466!important}.map-panel.jsx-be768ded0b735dad{--node-size:clamp(80px,12vw,120px);background:linear-gradient(135deg,#140f0af2,#281e14e6);border:2px solid #8b451366;border-radius:1rem;padding:max(12px,min(3vw,32px));position:relative;overflow:visible;box-shadow:inset 0 0 50px #00000080}.map-node.jsx-be768ded0b735dad{-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);color:#d4a574;z-index:5;width:var(--node-size);height:var(--node-size);background:#412d1e73;border:2px solid #d4a57440;border-radius:12px;flex-direction:column;justify-content:center;align-items:center;transition:transform .22s cubic-bezier(.16,1,.3,1),box-shadow .22s,border-color .22s;display:flex}.map-node.jsx-be768ded0b735dad h3.jsx-be768ded0b735dad{color:#d4a574;margin:6px 0 0}.map-node.jsx-be768ded0b735dad .text-2xl.jsx-be768ded0b735dad{filter:drop-shadow(0 6px 18px #0006)}.map-node.jsx-be768ded0b735dad:hover{transform:translateY(-6px)scale(1.03);box-shadow:0 18px 40px #0009}.map-node.active.jsx-be768ded0b735dad{z-index:20;border:3px solid #ffc83cf2;transform:translateY(-8px)scale(1.08);box-shadow:0 8px 40px #ffc83c1f,inset 0 0 36px #ffc83c59,0 0 30px #ffc83c1f}.map-node[data-section=game].active.jsx-be768ded0b735dad:after{content:"";filter:blur(2px);z-index:10;pointer-events:none;border:4px solid #ffc83cf2;border-radius:14px;position:absolute;inset:-10px;box-shadow:0 18px 40px #ffc83c40,inset 0 0 40px #ffc83c40}.map-node[data-section=portfolio].jsx-be768ded0b735dad{width:var(--node-size);height:var(--node-size);z-index:30;background:linear-gradient(#3c281eb8,#241a1499);border:2px solid #d4a574b3;border-radius:18px;flex-direction:column;justify-content:center;align-items:center;padding:12px;display:flex;position:absolute;overflow:visible}.map-node[data-section=portfolio].jsx-be768ded0b735dad .text-3xl.jsx-be768ded0b735dad,.map-node[data-section=portfolio].jsx-be768ded0b735dad .text-4xl.jsx-be768ded0b735dad,.map-node[data-section=portfolio].jsx-be768ded0b735dad .text-6xl.jsx-be768ded0b735dad{filter:drop-shadow(0 10px 30px #ffc83c1f)}.map-node[data-section=portfolio].jsx-be768ded0b735dad:before{content:"";pointer-events:none;border:1px solid #d4a57440;border-radius:12px;position:absolute;inset:8px}.map-node[data-section=portfolio].active.jsx-be768ded0b735dad{z-index:40}.portfolio-node.jsx-be768ded0b735dad{z-index:60;top:max(6px,min(4%,40px));right:max(6px,min(4%,40px));transform:translateZ(0)}.map-node[data-section=about].jsx-be768ded0b735dad{z-index:10}@media (width>=640px){.map-panel.jsx-be768ded0b735dad{--node-size:clamp(90px,10vw,120px)}.map-node.jsx-be768ded0b735dad h3.jsx-be768ded0b735dad{font-size:1rem}.portfolio-node.jsx-be768ded0b735dad{top:max(8px,min(5%,48px));right:max(8px,min(5%,48px))}.map-panel.jsx-be768ded0b735dad{overflow:visible}}@media (width>=1024px){.map-panel.jsx-be768ded0b735dad{--node-size:120px;padding:2rem;overflow:visible}.portfolio-node.jsx-be768ded0b735dad{top:max(12px,min(6%,64px));right:max(12px,min(6%,64px))}}'
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "2594797ec84dfe82",
                children: ".card-node{-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);color:#d4a574;z-index:5;background:#412d1e73;border:2px solid #d4a57440;border-radius:12px;flex-direction:column;justify-content:center;align-items:center;height:120px;transition:transform .22s cubic-bezier(.16,1,.3,1),box-shadow .22s,border-color .22s;display:flex}.card-node h3{color:#d4a574;margin:4px 0 0}.card-node .text-xl{filter:drop-shadow(0 6px 18px #0006)}.card-node:hover{transform:translateY(-6px)scale(1.03);box-shadow:0 18px 40px #0009}.card-node.active{z-index:20;border:3px solid #ffc83cf2;transform:translateY(-8px)scale(1.08);box-shadow:0 8px 40px #ffc83c1f,inset 0 0 36px #ffc83c59,0 0 30px #ffc83c1f}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/game.jsx",
        lineNumber: 158,
        columnNumber: 5
    }, this);
}
_s(Home, "XgOg5Uw5AaJ37iOpQu5mlys2ORo=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sections/hero-section.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tilt$2d$image$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/tilt-image.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$game$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/game.jsx [app-client] (ecmascript)");
;
;
;
;
;
;
function HeroSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "home",
        className: "flex flex-col items-center -mt-18",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].svg, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "-92",
                        y: "-948",
                        width: "1624",
                        height: "1624",
                        rx: "812",
                        fill: "url(#a)"
                    }, void 0, false, {
                        fileName: "[project]/sections/hero-section.jsx",
                        lineNumber: 16,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                            id: "a",
                            cx: "0",
                            cy: "0",
                            r: "1",
                            gradientUnits: "userSpaceOnUse",
                            gradientTransform: "rotate(90 428 292)scale(812)",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: ".63",
                                    stopColor: "#f4f4eaff",
                                    stopOpacity: "0"
                                }, void 0, false, {
                                    fileName: "[project]/sections/hero-section.jsx",
                                    lineNumber: 19,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#f4f4eaff"
                                }, void 0, false, {
                                    fileName: "[project]/sections/hero-section.jsx",
                                    lineNumber: 20,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sections/hero-section.jsx",
                            lineNumber: 18,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/sections/hero-section.jsx",
                        lineNumber: 17,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/sections/hero-section.jsx",
                lineNumber: 10,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                className: "flex items-center mt-48 gap-2 border border-slate-600 text-gray-50 rounded-full px-4 py-2",
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
                transition: {
                    delay: 0.2,
                    type: "spring",
                    stiffness: 320,
                    damping: 70,
                    mass: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "size-2.5 bg-green-500 rounded-full animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/sections/hero-section.jsx",
                        lineNumber: 30,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Book a live demo today"
                    }, void 0, false, {
                        fileName: "[project]/sections/hero-section.jsx",
                        lineNumber: 31,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/sections/hero-section.jsx",
                lineNumber: 24,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                className: "text-center text-5xl leading-[68px] md:text-6xl md:leading-[70px] mt-4 font-semibold max-w-2xl",
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
                children: "Turn Ideas into Intelligent AI Products"
            }, void 0, false, {
                fileName: "[project]/sections/hero-section.jsx",
                lineNumber: 33,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                className: "text-center text-base max-w-lg mt-2",
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
                children: "We deliver consulting, design, software, AI, and marketing services that scale with your business."
            }, void 0, false, {
                fileName: "[project]/sections/hero-section.jsx",
                lineNumber: 42,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "flex items-center gap-4 mt-8",
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
                fileName: "[project]/sections/hero-section.jsx",
                lineNumber: 51,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/sections/hero-section.jsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sections/our-latest-creation.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OurLatestCreation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$section$2d$title$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/section-title.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function OurLatestCreation() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [paused, setPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const items = [
        {
            image: "/assets/healthcare.jpeg",
            text: " Healthcare & Medical"
        },
        {
            image: "/assets/fintech&banking.jpeg",
            text: "Fintech & Banking"
        },
        {
            image: "/assets/ecommerce.jpeg",
            text: " E-Commerce & Retail "
        },
        {
            image: "/assets/elarning.jpeg",
            text: " Education & E-Learning"
        },
        {
            image: "/assets/construction.jpeg",
            text: " Real Estate & Construction "
        },
        {
            image: "/assets/industry.jpeg",
            text: " Manufacturing & Industrial "
        },
        {
            image: "/assets/logistics.jpeg",
            text: " Logistics & Transporta on "
        },
        {
            image: "/assets/travel.jpeg",
            text: " Travel & Hospitality "
        },
        {
            image: "/assets/gaming.jpeg",
            text: " Media, Entertainment & Gaming "
        },
        {
            image: "/assets/saas.jpeg",
            text: " Startups & SaaS Companies"
        }
    ];
    const loopItems = [
        ...items,
        ...items
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OurLatestCreation.useEffect": ()=>{
            let raf;
            const step = {
                "OurLatestCreation.useEffect.step": ()=>{
                    const el = containerRef.current;
                    const track = trackRef.current;
                    if (el && track && !paused) {
                        el.scrollLeft += 1.2;
                        const half = track.scrollWidth / 2;
                        if (el.scrollLeft >= half) el.scrollLeft = 0;
                    }
                    raf = requestAnimationFrame(step);
                }
            }["OurLatestCreation.useEffect.step"];
            raf = requestAnimationFrame(step);
            return ({
                "OurLatestCreation.useEffect": ()=>cancelAnimationFrame(raf)
            })["OurLatestCreation.useEffect"];
        }
    }["OurLatestCreation.useEffect"], [
        paused
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "flex flex-col items-center",
        id: "creations",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$section$2d$title$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Who We Serve",
                description: "Built for leaders who demand clarity, control, and measurable results from every digital investment."
            }, void 0, false, {
                fileName: "[project]/sections/our-latest-creation.jsx",
                lineNumber: 41,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-a7ba593cae1a0541" + " " + "mt-8 w-full max-w-6xl px-4 md:px-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        id: "a7ba593cae1a0541",
                        children: ".no-scrollbar.jsx-a7ba593cae1a0541::-webkit-scrollbar{display:none}.no-scrollbar.jsx-a7ba593cae1a0541{-ms-overflow-style:none;scrollbar-width:none}"
                    }, void 0, false, void 0, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: containerRef,
                        onMouseEnter: ()=>setPaused(true),
                        onMouseLeave: ()=>setPaused(false),
                        onTouchStart: ()=>setPaused(true),
                        onTouchEnd: ()=>setPaused(false),
                        className: "jsx-a7ba593cae1a0541" + " " + "no-scrollbar overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: trackRef,
                            className: "jsx-a7ba593cae1a0541" + " " + "flex gap-6 py-2",
                            children: loopItems.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "snap-center flex-none w-64 sm:w-72 lg:w-80 relative p-4 rounded-3xl bg-slate-900/40 ring-1 ring-white/10",
                                    initial: {
                                        opacity: 0,
                                        y: 24
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true,
                                        amount: 0.2
                                    },
                                    transition: {
                                        duration: 0.4,
                                        delay: idx * 0.03
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                transform: `rotate(${[
                                                    -6,
                                                    0,
                                                    6
                                                ][idx % 3]}deg)`
                                            },
                                            className: "jsx-a7ba593cae1a0541" + " " + "overflow-hidden rounded-2xl shadow-xl",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: item.image,
                                                alt: item.text,
                                                className: "jsx-a7ba593cae1a0541" + " " + "w-full h-56 md:h-64 object-cover "
                                            }, void 0, false, {
                                                fileName: "[project]/sections/our-latest-creation.jsx",
                                                lineNumber: 72,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/sections/our-latest-creation.jsx",
                                            lineNumber: 68,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                transform: `rotate(${[
                                                    -3,
                                                    0,
                                                    3
                                                ][idx % 3] / 2}deg)`
                                            },
                                            className: "jsx-a7ba593cae1a0541" + " " + "mt-3 text-center text-white text-sm md:text-base",
                                            children: item.text
                                        }, void 0, false, {
                                            fileName: "[project]/sections/our-latest-creation.jsx",
                                            lineNumber: 78,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/sections/our-latest-creation.jsx",
                                    lineNumber: 60,
                                    columnNumber: 11
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/sections/our-latest-creation.jsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/sections/our-latest-creation.jsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/sections/our-latest-creation.jsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/sections/our-latest-creation.jsx",
        lineNumber: 40,
        columnNumber: 9
    }, this);
}
_s(OurLatestCreation, "nQb0jlnrDibgZlnNoAHGUs/bxq4=");
_c = OurLatestCreation;
function debounce(func, wait) {
    let timeout;
    return (...args)=>{
        clearTimeout(timeout);
        timeout = setTimeout(()=>func.apply(null, args), wait);
    };
}
function lerp(p1, p2, t) {
    return p1 + (p2 - p1) * t;
}
function autoBind(instance) {
    const proto = Object.getPrototypeOf(instance);
    Object.getOwnPropertyNames(proto).forEach((key)=>{
        if (key !== 'constructor' && typeof instance[key] === 'function') {
            instance[key] = instance[key].bind(instance);
        }
    });
}
function createTextTexture(gl, text, font = 'bold 30px monospace', color = 'black') {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = font;
    const metrics = context.measureText(text);
    const textWidth = Math.ceil(metrics.width);
    const textHeight = Math.ceil(parseInt(font, 10) * 1.2);
    canvas.width = textWidth + 20;
    canvas.height = textHeight + 20;
    context.font = font;
    context.fillStyle = color;
    context.textBaseline = 'middle';
    context.textAlign = 'center';
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillText(text, canvas.width / 2, canvas.height / 2);
    const texture = new Texture(gl, {
        generateMipmaps: false
    });
    texture.image = canvas;
    return {
        texture,
        width: canvas.width,
        height: canvas.height
    };
}
class Title {
    constructor({ gl, plane, renderer, text, textColor = '#545050', font = '30px sans-serif' }){
        autoBind(this);
        this.gl = gl;
        this.plane = plane;
        this.renderer = renderer;
        this.text = text;
        this.textColor = textColor;
        this.font = font;
        this.createMesh();
    }
    createMesh() {
        const { texture, width, height } = createTextTexture(this.gl, this.text, this.font, this.textColor);
        const geometry = new Plane(this.gl);
        const program = new Program(this.gl, {
            vertex: `
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
            fragment: `
        precision highp float;
        uniform sampler2D tMap;
        varying vec2 vUv;
        void main() {
          vec4 color = texture2D(tMap, vUv);
          if (color.a < 0.1) discard;
          gl_FragColor = color;
        }
      `,
            uniforms: {
                tMap: {
                    value: texture
                }
            },
            transparent: true
        });
        this.mesh = new Mesh(this.gl, {
            geometry,
            program
        });
        const aspect = width / height;
        const textHeight = this.plane.scale.y * 0.15;
        const textWidth = textHeight * aspect;
        this.mesh.scale.set(textWidth, textHeight, 1);
        this.mesh.position.y = -this.plane.scale.y * 0.5 - textHeight * 0.5 - 0.05;
        this.mesh.setParent(this.plane);
    }
}
class Media {
    constructor({ geometry, gl, image, index, length, renderer, scene, screen, text, viewport, bend, textColor, borderRadius = 0, font }){
        this.extra = 0;
        this.geometry = geometry;
        this.gl = gl;
        this.image = image;
        this.index = index;
        this.length = length;
        this.renderer = renderer;
        this.scene = scene;
        this.screen = screen;
        this.text = text;
        this.viewport = viewport;
        this.bend = bend;
        this.textColor = textColor;
        this.borderRadius = borderRadius;
        this.font = font;
        this.createShader();
        this.createMesh();
        this.createTitle();
        this.onResize();
    }
    createShader() {
        const texture = new Texture(this.gl, {
            generateMipmaps: true
        });
        this.program = new Program(this.gl, {
            depthTest: false,
            depthWrite: false,
            vertex: `
        precision highp float;
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        uniform float uTime;
        uniform float uSpeed;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec3 p = position;
          p.z = (sin(p.x * 4.0 + uTime) * 1.5 + cos(p.y * 2.0 + uTime) * 1.5) * (0.1 + uSpeed * 0.5);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,
            fragment: `
        precision highp float;
        uniform vec2 uImageSizes;
        uniform vec2 uPlaneSizes;
        uniform sampler2D tMap;
        uniform float uBorderRadius;
        varying vec2 vUv;
        
        float roundedBoxSDF(vec2 p, vec2 b, float r) {
          vec2 d = abs(p) - b;
          return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r;
        }
        
        void main() {
          vec2 ratio = vec2(
            min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
            min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
          );
          vec2 uv = vec2(
            vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
            vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
          );
          vec4 color = texture2D(tMap, uv);
          
          float d = roundedBoxSDF(vUv - 0.5, vec2(0.5 - uBorderRadius), uBorderRadius);
          
          // Smooth antialiasing for edges
          float edgeSmooth = 0.002;
          float alpha = 1.0 - smoothstep(-edgeSmooth, edgeSmooth, d);
          
          gl_FragColor = vec4(color.rgb, alpha);
        }
      `,
            uniforms: {
                tMap: {
                    value: texture
                },
                uPlaneSizes: {
                    value: [
                        0,
                        0
                    ]
                },
                uImageSizes: {
                    value: [
                        0,
                        0
                    ]
                },
                uSpeed: {
                    value: 0
                },
                uTime: {
                    value: 100 * Math.random()
                },
                uBorderRadius: {
                    value: this.borderRadius
                }
            },
            transparent: true
        });
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = this.image;
        img.onload = ()=>{
            texture.image = img;
            this.program.uniforms.uImageSizes.value = [
                img.naturalWidth,
                img.naturalHeight
            ];
        };
    }
    createMesh() {
        this.plane = new Mesh(this.gl, {
            geometry: this.geometry,
            program: this.program
        });
        this.plane.setParent(this.scene);
    }
    createTitle() {
        this.title = new Title({
            gl: this.gl,
            plane: this.plane,
            renderer: this.renderer,
            text: this.text,
            textColor: this.textColor,
            fontFamily: this.font
        });
    }
    update(scroll, direction) {
        this.plane.position.x = this.x - scroll.current - this.extra;
        const x = this.plane.position.x;
        const H = this.viewport.width / 2;
        if (this.bend === 0) {
            this.plane.position.y = 0;
            this.plane.rotation.z = 0;
        } else {
            const B_abs = Math.abs(this.bend);
            const R = (H * H + B_abs * B_abs) / (2 * B_abs);
            const effectiveX = Math.min(Math.abs(x), H);
            const arc = R - Math.sqrt(R * R - effectiveX * effectiveX);
            if (this.bend > 0) {
                this.plane.position.y = -arc;
                this.plane.rotation.z = -Math.sign(x) * Math.asin(effectiveX / R);
            } else {
                this.plane.position.y = arc;
                this.plane.rotation.z = Math.sign(x) * Math.asin(effectiveX / R);
            }
        }
        this.speed = scroll.current - scroll.last;
        this.program.uniforms.uTime.value += 0.04;
        this.program.uniforms.uSpeed.value = this.speed;
        const planeOffset = this.plane.scale.x / 2;
        const viewportOffset = this.viewport.width / 2;
        this.isBefore = this.plane.position.x + planeOffset < -viewportOffset;
        this.isAfter = this.plane.position.x - planeOffset > viewportOffset;
        if (direction === 'right' && this.isBefore) {
            this.extra -= this.widthTotal;
            this.isBefore = this.isAfter = false;
        }
        if (direction === 'left' && this.isAfter) {
            this.extra += this.widthTotal;
            this.isBefore = this.isAfter = false;
        }
    }
    onResize({ screen, viewport } = {}) {
        if (screen) this.screen = screen;
        if (viewport) {
            this.viewport = viewport;
            if (this.plane.program.uniforms.uViewportSizes) {
                this.plane.program.uniforms.uViewportSizes.value = [
                    this.viewport.width,
                    this.viewport.height
                ];
            }
        }
        this.scale = this.screen.height / 1500;
        this.plane.scale.y = this.viewport.height * (900 * this.scale) / this.screen.height;
        this.plane.scale.x = this.viewport.width * (700 * this.scale) / this.screen.width;
        this.plane.program.uniforms.uPlaneSizes.value = [
            this.plane.scale.x,
            this.plane.scale.y
        ];
        this.padding = 2;
        this.width = this.plane.scale.x + this.padding;
        this.widthTotal = this.width * this.length;
        this.x = this.width * this.index;
    }
}
class App {
    constructor(container, { items, bend, textColor = '#ffffff', borderRadius = 0, font = 'bold 30px Figtree', scrollSpeed = 2, scrollEase = 0.05 } = {}){
        document.documentElement.classList.remove('no-js');
        this.container = container;
        this.scrollSpeed = scrollSpeed;
        this.scroll = {
            ease: scrollEase,
            current: 0,
            target: 0,
            last: 0
        };
        this.onCheckDebounce = debounce(this.onCheck, 200);
        this.createRenderer();
        this.createCamera();
        this.createScene();
        this.onResize();
        this.createGeometry();
        this.createMedias(items, bend, textColor, borderRadius, font);
        this.update();
        this.addEventListeners();
    }
    createRenderer() {
        this.renderer = new Renderer({
            alpha: true,
            antialias: true,
            dpr: Math.min(window.devicePixelRatio || 1, 2)
        });
        this.gl = this.renderer.gl;
        this.gl.clearColor(0, 0, 0, 0);
        this.container.appendChild(this.gl.canvas);
    }
    createCamera() {
        this.camera = new Camera(this.gl);
        this.camera.fov = 45;
        this.camera.position.z = 20;
    }
    createScene() {
        this.scene = new Transform();
    }
    createGeometry() {
        this.planeGeometry = new Plane(this.gl, {
            heightSegments: 50,
            widthSegments: 100
        });
    }
    createMedias(items, bend = 1, textColor, borderRadius, font) {
        const defaultItems = [
            {
                image: `https://picsum.photos/seed/1/800/600?grayscale`,
                text: 'Bridge'
            },
            {
                image: `https://picsum.photos/seed/2/800/600?grayscale`,
                text: 'Desk Setup'
            },
            {
                image: `https://picsum.photos/seed/3/800/600?grayscale`,
                text: 'Waterfall'
            },
            {
                image: `https://picsum.photos/seed/4/800/600?grayscale`,
                text: 'Strawberries'
            },
            {
                image: `https://picsum.photos/seed/5/800/600?grayscale`,
                text: 'Deep Diving'
            },
            {
                image: `https://picsum.photos/seed/16/800/600?grayscale`,
                text: 'Train Track'
            },
            {
                image: `https://picsum.photos/seed/17/800/600?grayscale`,
                text: 'Santorini'
            },
            {
                image: `https://picsum.photos/seed/8/800/600?grayscale`,
                text: 'Blurry Lights'
            },
            {
                image: `https://picsum.photos/seed/9/800/600?grayscale`,
                text: 'New York'
            },
            {
                image: `https://picsum.photos/seed/10/800/600?grayscale`,
                text: 'Good Boy'
            },
            {
                image: `https://picsum.photos/seed/21/800/600?grayscale`,
                text: 'Coastline'
            },
            {
                image: `https://picsum.photos/seed/12/800/600?grayscale`,
                text: 'Palm Trees'
            }
        ];
        const galleryItems = items && items.length ? items : defaultItems;
        this.mediasImages = galleryItems.concat(galleryItems);
        this.medias = this.mediasImages.map((data, index)=>{
            return new Media({
                geometry: this.planeGeometry,
                gl: this.gl,
                image: data.image,
                index,
                length: this.mediasImages.length,
                renderer: this.renderer,
                scene: this.scene,
                screen: this.screen,
                text: data.text,
                viewport: this.viewport,
                bend,
                textColor,
                borderRadius,
                font
            });
        });
    }
    onTouchDown(e) {
        this.isDown = true;
        this.scroll.position = this.scroll.current;
        this.start = e.touches ? e.touches[0].clientX : e.clientX;
    }
    onTouchMove(e) {
        if (!this.isDown) return;
        const x = e.touches ? e.touches[0].clientX : e.clientX;
        const distance = (this.start - x) * (this.scrollSpeed * 0.025);
        this.scroll.target = this.scroll.position + distance;
    }
    onTouchUp() {
        this.isDown = false;
        this.onCheck();
    }
    onWheel(e) {
        const delta = e.deltaY || e.wheelDelta || e.detail;
        this.scroll.target += (delta > 0 ? this.scrollSpeed : -this.scrollSpeed) * 0.2;
        this.onCheckDebounce();
    }
    onCheck() {
        if (!this.medias || !this.medias[0]) return;
        const width = this.medias[0].width;
        const itemIndex = Math.round(Math.abs(this.scroll.target) / width);
        const item = width * itemIndex;
        this.scroll.target = this.scroll.target < 0 ? -item : item;
    }
    onResize() {
        this.screen = {
            width: this.container.clientWidth,
            height: this.container.clientHeight
        };
        this.renderer.setSize(this.screen.width, this.screen.height);
        this.camera.perspective({
            aspect: this.screen.width / this.screen.height
        });
        const fov = this.camera.fov * Math.PI / 180;
        const height = 2 * Math.tan(fov / 2) * this.camera.position.z;
        const width = height * this.camera.aspect;
        this.viewport = {
            width,
            height
        };
        if (this.medias) {
            this.medias.forEach((media)=>media.onResize({
                    screen: this.screen,
                    viewport: this.viewport
                }));
        }
    }
    update() {
        this.scroll.current = lerp(this.scroll.current, this.scroll.target, this.scroll.ease);
        const direction = this.scroll.current > this.scroll.last ? 'right' : 'left';
        if (this.medias) {
            this.medias.forEach((media)=>media.update(this.scroll, direction));
        }
        this.renderer.render({
            scene: this.scene,
            camera: this.camera
        });
        this.scroll.last = this.scroll.current;
        this.raf = window.requestAnimationFrame(this.update.bind(this));
    }
    addEventListeners() {
        this.boundOnResize = this.onResize.bind(this);
        this.boundOnWheel = this.onWheel.bind(this);
        this.boundOnTouchDown = this.onTouchDown.bind(this);
        this.boundOnTouchMove = this.onTouchMove.bind(this);
        this.boundOnTouchUp = this.onTouchUp.bind(this);
        window.addEventListener('resize', this.boundOnResize);
        window.addEventListener('mousewheel', this.boundOnWheel);
        window.addEventListener('wheel', this.boundOnWheel);
        window.addEventListener('mousedown', this.boundOnTouchDown);
        window.addEventListener('mousemove', this.boundOnTouchMove);
        window.addEventListener('mouseup', this.boundOnTouchUp);
        window.addEventListener('touchstart', this.boundOnTouchDown);
        window.addEventListener('touchmove', this.boundOnTouchMove);
        window.addEventListener('touchend', this.boundOnTouchUp);
    }
    destroy() {
        window.cancelAnimationFrame(this.raf);
        window.removeEventListener('resize', this.boundOnResize);
        window.removeEventListener('mousewheel', this.boundOnWheel);
        window.removeEventListener('wheel', this.boundOnWheel);
        window.removeEventListener('mousedown', this.boundOnTouchDown);
        window.removeEventListener('mousemove', this.boundOnTouchMove);
        window.removeEventListener('mouseup', this.boundOnTouchUp);
        window.removeEventListener('touchstart', this.boundOnTouchDown);
        window.removeEventListener('touchmove', this.boundOnTouchMove);
        window.removeEventListener('touchend', this.boundOnTouchUp);
        if (this.renderer && this.renderer.gl && this.renderer.gl.canvas.parentNode) {
            this.renderer.gl.canvas.parentNode.removeChild(this.renderer.gl.canvas);
        }
    }
}
var _c;
__turbopack_context__.k.register(_c, "OurLatestCreation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sections/our-testimonials.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OurTestimonials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$section$2d$title$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/section-title.jsx [app-client] (ecmascript)");
;
;
;
function OurTestimonials() {
    const testimonials = [
        {
            name: 'Jane Doe',
            initialImage: 'assets/dd_5.jpeg',
            review: 'NEXVITY transformed our online presence! Their team is innovative,responsive, and truly understood our needs. Highly recommended!',
            // Replace the company letter with a company logo URL
            companyImage: '/assets/logo.svg',
            companyInitial: 'N',
            companyName: 'NEXVITY',
            reply: 'Thank you so much, Jane! We loved working with you and appreciate your partnership.'
        },
        {
            name: 'Adam Smith',
            initialImage: 'https://example.com/avatars/adam.png',
            initial: 'A',
            review: 'Incredible results and smooth execution. The project was delivered on time and exceeded expectations.',
            companyImage: 'https://example.com/logos/nexvity.png',
            companyInitial: 'N',
            companyName: 'NEXVITY',
            reply: 'Thanks Adam! We’re thrilled you’re happy with the outcome and timeline.'
        },
        {
            name: 'Priya Patel',
            initial: 'P',
            review: 'Great attention to detail and excellent communication throughout the engagement.',
            companyInitial: 'N',
            companyName: 'NEXVITY reply',
            reply: 'We appreciate the feedback, Priya. It was a pleasure collaborating with you.'
        },
        {
            name: 'Liam Johnson',
            initial: 'L',
            review: 'Their design and development team brought our product vision to life in record time.',
            companyInitial: 'N',
            companyName: 'NEXVITY',
            reply: 'Thank you, Liam! Your vision made this project truly exciting.'
        }
    ];
    const firstRow = testimonials.slice(0, 4);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "flex flex-col items-center",
        id: "testimonials",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$section$2d$title$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Testimonials That Speak",
                description: "Authentic feedback from clients that reflects the real value, impact, and results we deliver every day."
            }, void 0, false, {
                fileName: "[project]/sections/our-testimonials.jsx",
                lineNumber: 55,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full min-h-screen bg-black px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 mt-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6 auto-rows-fr",
                        children: firstRow.map((t, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TestimonialCard, {
                                name: t.name,
                                initial: t.initial,
                                initialImage: t.initialImage,
                                review: t.review,
                                companyInitial: t.companyInitial,
                                companyImage: t.companyImage,
                                companyName: t.companyName,
                                reply: t.reply
                            }, `first-${idx}`, false, {
                                fileName: "[project]/sections/our-testimonials.jsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/sections/our-testimonials.jsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/sections/our-testimonials.jsx",
                    lineNumber: 57,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/sections/our-testimonials.jsx",
                lineNumber: 56,
                columnNumber: 14
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/sections/our-testimonials.jsx",
        lineNumber: 54,
        columnNumber: 9
    }, this);
}
_c = OurTestimonials;
function TestimonialCard({ name, initial, initialImage, review, companyInitial, companyImage, companyName, reply }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gradient-to-b from-gray-900 to-gray-800 border border-gray-700 rounded-xl shadow-xl overflow-hidden h-full min-h-full p-4 sm:p-5 md:p-6 flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 sm:gap-3 flex-shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-semibold text-sm sm:text-base overflow-hidden flex-shrink-0",
                        children: initialImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: initialImage,
                            alt: `${name} avatar`,
                            className: "w-full h-full object-cover rounded-full"
                        }, void 0, false, {
                            fileName: "[project]/sections/our-testimonials.jsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, this) : initial
                    }, void 0, false, {
                        fileName: "[project]/sections/our-testimonials.jsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-bold text-white text-sm sm:text-base md:text-lg truncate",
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/sections/our-testimonials.jsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center text-yellow-400 text-xs sm:text-sm",
                                "aria-label": "5 star rating"
                            }, void 0, false, {
                                fileName: "[project]/sections/our-testimonials.jsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sections/our-testimonials.jsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/sections/our-testimonials.jsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mt-3 sm:mt-4 rounded-xl p-3 sm:p-4 leading-relaxed text-xs sm:text-sm md:text-base bg-gray-800/50 border border-gray-700 text-gray-200 flex-grow shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "m-0",
                        children: review
                    }, void 0, false, {
                        fileName: "[project]/sections/our-testimonials.jsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        className: "absolute left-3 sm:left-4 -bottom-2 w-3 h-3 rotate-45 bg-gray-800 border-l border-b border-gray-700"
                    }, void 0, false, {
                        fileName: "[project]/sections/our-testimonials.jsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/sections/our-testimonials.jsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "my-3 sm:my-4 border-t border-gray-700 flex-shrink-0",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/sections/our-testimonials.jsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative rounded-xl p-3 sm:p-4 text-white bg-gradient-to-br from-indigo-600 to-purple-600 shadow-lg flex-shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 sm:gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-white/20 backdrop-blur-sm flex items-center justify-center font-extrabold text-sm sm:text-base overflow-hidden flex-shrink-0",
                                children: companyImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: companyImage,
                                    alt: `${companyName} logo`,
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/sections/our-testimonials.jsx",
                                    lineNumber: 111,
                                    columnNumber: 15
                                }, this) : companyInitial
                            }, void 0, false, {
                                fileName: "[project]/sections/our-testimonials.jsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-bold text-sm sm:text-base md:text-lg truncate",
                                children: companyName
                            }, void 0, false, {
                                fileName: "[project]/sections/our-testimonials.jsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sections/our-testimonials.jsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 sm:mt-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/20 backdrop-blur-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "m-0 text-white text-xs sm:text-sm md:text-base",
                            children: reply
                        }, void 0, false, {
                            fileName: "[project]/sections/our-testimonials.jsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/sections/our-testimonials.jsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        className: "absolute left-3 sm:left-4 -top-2 w-3 h-3 rotate-45 bg-indigo-600"
                    }, void 0, false, {
                        fileName: "[project]/sections/our-testimonials.jsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/sections/our-testimonials.jsx",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/sections/our-testimonials.jsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
_c1 = TestimonialCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "OurTestimonials");
__turbopack_context__.k.register(_c1, "TestimonialCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sections/vision_mission.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VisionMission
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$section$2d$title$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/section-title.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
;
;
;
;
function VisionMission() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "flex flex-col items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$section$2d$title$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "A Clear Vision, A Stronger Mission.",
                description: "Driven by clarity of vision and strength of mission, we transform complex challenges into reliable digital success stories."
            }, void 0, false, {
                fileName: "[project]/sections/vision_mission.jsx",
                lineNumber: 8,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "relative max-w-5xl py-10 md:py-16 mt-12 md:w-full overflow-hidden mx-2 md:mx-auto border border-indigo-900 bg-gradient-to-br from-[#401B98]/5 to-[#180027]/10 rounded-3xl p-5 md:p-8 text-white",
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
                    type: "spring",
                    stiffness: 320,
                    damping: 70,
                    mass: 1
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 place-items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full max-w-md rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "size-10 rounded-full bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                className: "size-5 text-indigo-300"
                                            }, void 0, false, {
                                                fileName: "[project]/sections/vision_mission.jsx",
                                                lineNumber: 19,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/sections/vision_mission.jsx",
                                            lineNumber: 18,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-semibold text-indigo-200",
                                            children: "Vision"
                                        }, void 0, false, {
                                            fileName: "[project]/sections/vision_mission.jsx",
                                            lineNumber: 21,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sections/vision_mission.jsx",
                                    lineNumber: 17,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "mt-3 space-y-2 text-slate-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mt-1 mr-2 size-2 rounded-full bg-indigo-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/sections/vision_mission.jsx",
                                                    lineNumber: 25,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Building technology that enables businesses to grow, adapt, and lead."
                                                }, void 0, false, {
                                                    fileName: "[project]/sections/vision_mission.jsx",
                                                    lineNumber: 26,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sections/vision_mission.jsx",
                                            lineNumber: 24,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mt-1 mr-2 size-2 rounded-full bg-indigo-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/sections/vision_mission.jsx",
                                                    lineNumber: 29,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "To become a trusted global partner for digital and AI-driven transformation."
                                                }, void 0, false, {
                                                    fileName: "[project]/sections/vision_mission.jsx",
                                                    lineNumber: 30,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sections/vision_mission.jsx",
                                            lineNumber: 28,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mt-1 mr-2 size-2 rounded-full bg-indigo-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/sections/vision_mission.jsx",
                                                    lineNumber: 33,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "To create meaningful impact by combining strategy, design, and technology."
                                                }, void 0, false, {
                                                    fileName: "[project]/sections/vision_mission.jsx",
                                                    lineNumber: 34,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sections/vision_mission.jsx",
                                            lineNumber: 32,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mt-1 mr-2 size-2 rounded-full bg-indigo-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/sections/vision_mission.jsx",
                                                    lineNumber: 37,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Where strategy meets intelligent technology."
                                                }, void 0, false, {
                                                    fileName: "[project]/sections/vision_mission.jsx",
                                                    lineNumber: 38,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sections/vision_mission.jsx",
                                            lineNumber: 36,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mt-1 mr-2 size-2 rounded-full bg-indigo-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/sections/vision_mission.jsx",
                                                    lineNumber: 41,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "To shape industries through thoughtful engineering and strategic innovation."
                                                }, void 0, false, {
                                                    fileName: "[project]/sections/vision_mission.jsx",
                                                    lineNumber: 42,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sections/vision_mission.jsx",
                                            lineNumber: 40,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sections/vision_mission.jsx",
                                    lineNumber: 23,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sections/vision_mission.jsx",
                            lineNumber: 16,
                            columnNumber: 19
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full max-w-md rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "size-10 rounded-full bg-pink-600/20 border border-pink-500/40 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                                className: "size-5 text-pink-300"
                                            }, void 0, false, {
                                                fileName: "[project]/sections/vision_mission.jsx",
                                                lineNumber: 50,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/sections/vision_mission.jsx",
                                            lineNumber: 49,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-semibold text-pink-200",
                                            children: "Mission"
                                        }, void 0, false, {
                                            fileName: "[project]/sections/vision_mission.jsx",
                                            lineNumber: 52,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sections/vision_mission.jsx",
                                    lineNumber: 48,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "mt-3 space-y-2 text-slate-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mt-1 mr-2 size-2 rounded-full bg-pink-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/sections/vision_mission.jsx",
                                                    lineNumber: 56,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Creating reliable, scalable, and intelligent digital solutions for real-world impact."
                                                }, void 0, false, {
                                                    fileName: "[project]/sections/vision_mission.jsx",
                                                    lineNumber: 57,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sections/vision_mission.jsx",
                                            lineNumber: 55,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mt-1 mr-2 size-2 rounded-full bg-pink-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/sections/vision_mission.jsx",
                                                    lineNumber: 60,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "To solve complex business challenges through smart, AI-powered technology."
                                                }, void 0, false, {
                                                    fileName: "[project]/sections/vision_mission.jsx",
                                                    lineNumber: 61,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sections/vision_mission.jsx",
                                            lineNumber: 59,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mt-1 mr-2 size-2 rounded-full bg-pink-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/sections/vision_mission.jsx",
                                                    lineNumber: 64,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "To continuously innovate while ensuring excellence, transparency, and trust."
                                                }, void 0, false, {
                                                    fileName: "[project]/sections/vision_mission.jsx",
                                                    lineNumber: 65,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sections/vision_mission.jsx",
                                            lineNumber: 63,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mt-1 mr-2 size-2 rounded-full bg-pink-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/sections/vision_mission.jsx",
                                                    lineNumber: 68,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Delivering technology that scales with ambition."
                                                }, void 0, false, {
                                                    fileName: "[project]/sections/vision_mission.jsx",
                                                    lineNumber: 69,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sections/vision_mission.jsx",
                                            lineNumber: 67,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mt-1 mr-2 size-2 rounded-full bg-pink-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/sections/vision_mission.jsx",
                                                    lineNumber: 72,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "To help organizations innovate faster while maintaining quality and trust."
                                                }, void 0, false, {
                                                    fileName: "[project]/sections/vision_mission.jsx",
                                                    lineNumber: 73,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sections/vision_mission.jsx",
                                            lineNumber: 71,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sections/vision_mission.jsx",
                                    lineNumber: 54,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sections/vision_mission.jsx",
                            lineNumber: 47,
                            columnNumber: 19
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10"
                        }, void 0, false, {
                            fileName: "[project]/sections/vision_mission.jsx",
                            lineNumber: 78,
                            columnNumber: 19
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/sections/vision_mission.jsx",
                    lineNumber: 15,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/sections/vision_mission.jsx",
                lineNumber: 9,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/sections/vision_mission.jsx",
        lineNumber: 7,
        columnNumber: 9
    }, this);
}
_c = VisionMission;
var _c;
__turbopack_context__.k.register(_c, "VisionMission");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sections/trusted-companies.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TrustedCompanies
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$section$2d$title$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/section-title.jsx [app-client] (ecmascript)");
;
;
;
;
function TrustedCompanies() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
}
_c = TrustedCompanies;
var _c;
__turbopack_context__.k.register(_c, "TrustedCompanies");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sections$2f$about$2d$our$2d$apps$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sections/about-our-apps.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sections$2f$get$2d$in$2d$touch$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sections/get-in-touch.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sections$2f$hero$2d$section$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sections/hero-section.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sections$2f$our$2d$latest$2d$creation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sections/our-latest-creation.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sections$2f$our$2d$testimonials$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sections/our-testimonials.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sections$2f$vision_mission$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sections/vision_mission.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sections$2f$trusted$2d$companies$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sections/trusted-companies.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$game$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/game.jsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "px-6 md:px-16 lg:px-24 xl:px-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sections$2f$hero$2d$section$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 14,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$game$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 15,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sections$2f$our$2d$latest$2d$creation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 16,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sections$2f$about$2d$our$2d$apps$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 17,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sections$2f$vision_mission$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 18,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sections$2f$our$2d$testimonials$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 19,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sections$2f$trusted$2d$companies$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 20,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sections$2f$get$2d$in$2d$touch$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 21,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.jsx",
        lineNumber: 13,
        columnNumber: 9
    }, this);
}
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_71466014._.js.map