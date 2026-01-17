(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/portfolio/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Portfolio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
function Card({ title, image, author, href, description }) {
    _s();
    const [position, setPosition] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState({
        x: 0,
        y: 0
    });
    const [tooltipVisible, setTooltipVisible] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const divRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const handleMouseMove = (e)=>{
        const bounds = divRef.current.getBoundingClientRect();
        setPosition({
            x: e.clientX - bounds.left,
            y: e.clientY - bounds.top
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: divRef,
        onMouseMove: handleMouseMove,
        onMouseEnter: ()=>setTooltipVisible(true),
        onMouseLeave: ()=>setTooltipVisible(false),
        className: "relative bg-slate-900 border border-slate-800 rounded-lg shadow-sm overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: href,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    className: "w-full h-56 object-cover object-top",
                    src: image,
                    alt: ""
                }, void 0, false, {
                    fileName: "[project]/app/portfolio/page.jsx",
                    lineNumber: 27,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/portfolio/page.jsx",
                lineNumber: 26,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: href,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                            className: "mb-2 text-2xl font-bold tracking-tight text-white",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/app/portfolio/page.jsx",
                            lineNumber: 31,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/portfolio/page.jsx",
                        lineNumber: 30,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-3 text-slate-300",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/app/portfolio/page.jsx",
                        lineNumber: 33,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: href,
                        className: "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300",
                        children: [
                            "Read more",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "rtl:rotate-180 w-3.5 h-3.5 ms-2",
                                "aria-hidden": "true",
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 14 10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    stroke: "currentColor",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M1 5h12m0 0L9 1m4 4L9 9"
                                }, void 0, false, {
                                    fileName: "[project]/app/portfolio/page.jsx",
                                    lineNumber: 37,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/portfolio/page.jsx",
                                lineNumber: 36,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/portfolio/page.jsx",
                        lineNumber: 34,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/portfolio/page.jsx",
                lineNumber: 29,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/portfolio/page.jsx",
        lineNumber: 17,
        columnNumber: 9
    }, this);
}
_s(Card, "+VGU5henZxuBeDk7sGRdz0+0yrs=");
_c = Card;
function MarqueeCard({ title, image }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-slate-900 border border-slate-800 rounded-2xl p-3 w-64 sm:w-72 shrink-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: image,
                    alt: title,
                    className: "w-full h-40 sm:h-44 object-cover"
                }, void 0, false, {
                    fileName: "[project]/app/portfolio/page.jsx",
                    lineNumber: 49,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/portfolio/page.jsx",
                lineNumber: 48,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 text-center text-white font-medium",
                children: title
            }, void 0, false, {
                fileName: "[project]/app/portfolio/page.jsx",
                lineNumber: 51,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/portfolio/page.jsx",
        lineNumber: 47,
        columnNumber: 9
    }, this);
}
_c1 = MarqueeCard;
function Portfolio() {
    _s1();
    const sliderRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const [paused, setPaused] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Portfolio.useEffect": ()=>{
            const el = sliderRef.current;
            if (!el) return;
            let raf;
            const speed = 0.6;
            const step = {
                "Portfolio.useEffect.step": ()=>{
                    if (!paused) {
                        el.scrollLeft += speed;
                        const max = el.scrollWidth / 2;
                        if (el.scrollLeft >= max) el.scrollLeft = 0;
                    }
                    raf = requestAnimationFrame(step);
                }
            }["Portfolio.useEffect.step"];
            raf = requestAnimationFrame(step);
            return ({
                "Portfolio.useEffect": ()=>cancelAnimationFrame(raf)
            })["Portfolio.useEffect"];
        }
    }["Portfolio.useEffect"], [
        paused
    ]);
    const cards = [
        {
            title: "SEO Platform",
            image: "https://images.unsplash.com/photo-1560264418-c4445382edbc?q=80&w=800",
            href: "/portfolio/seo",
            description: "Keyword insights, technical audits, and growth experiments."
        },
        {
            title: "CRM Application",
            image: "https://images.unsplash.com/photo-1543269865-0a740d43b90c?q=80&w=800",
            href: "/portfolio/crm",
            description: "Pipeline tracking, contacts, automation, and reporting."
        },
        {
            title: "HRMS Suite",
            image: "https://images.unsplash.com/photo-1714976326351-0ecf0244f0fc?q=80&w=800",
            href: "/portfolio/hrms",
            description: "Hiring, onboarding, payroll, and performance management."
        },
        {
            title: "E-commerce Storefront",
            image: "https://images.unsplash.com/photo-1519336555923-59661f41bb4d?q=80&w=800",
            href: "/portfolio/ecommerce",
            description: "Fast catalog, payments, and personalized shopping."
        },
        {
            title: "Analytics Dashboard",
            image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800",
            href: "/portfolio/analytics",
            description: "Metrics, cohorts, and actionable data visualization."
        },
        {
            title: "Mobile App",
            image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=800",
            href: "/portfolio/mobile-app",
            description: "Cross-platform experience with native performance."
        },
        {
            title: "CMS Platform",
            image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800",
            href: "/portfolio/cms",
            description: "Structured content, workflows, and multi-channel delivery."
        },
        {
            title: "ERP System",
            image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800",
            href: "/portfolio/erp",
            description: "Operations, supply chain, and financial visibility."
        },
        {
            title: "Marketing Automation",
            image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=800",
            href: "/portfolio/marketing-automation",
            description: "Journeys, segmentation, and omni-channel campaigns."
        }
    ];
    const marqueeCards = [
        {
            title: " CRM Software",
            image: "/products/CRM.png"
        },
        {
            title: " ERP Solutions ",
            image: "/products/erp.png"
        },
        {
            title: "HR & Payroll Management",
            image: "/products/hr.jpg"
        },
        {
            title: "Inventory & Billing System",
            image: "/products/inventory.png"
        },
        {
            title: " Learning Management System (LMS)",
            image: "/products/learning.png"
        },
        {
            title: " Analytics & Business Intelligence",
            image: "/products/analytics.png"
        },
        {
            title: "  SaaS Web & Mobile Applications",
            image: "/products/saas.png"
        },
        {
            title: "  Cloud & DevOps Solutions",
            image: "/products/cloud.png"
        },
        {
            title: "  Cybersecurity Solutions",
            image: "/products/cybersecurity.jpg"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "px-6 md:px-16 lg:px-24 xl:px-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mt-24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[580px] flex flex-col items-center justify-center px-4 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center justify-center gap-2.5 mb-6 border border-slate-700 rounded-full bg-white/10 pl-4 p-1 text-sm text-white max-w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Launching our new platform update."
                                }, void 0, false, {
                                    fileName: "[project]/app/portfolio/page.jsx",
                                    lineNumber: 184,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center cursor-pointer gap-2 bg-white/10 border border-slate-700 rounded-2xl px-3 py-1 whitespace-nowrap",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Explore"
                                        }, void 0, false, {
                                            fileName: "[project]/app/portfolio/page.jsx",
                                            lineNumber: 186,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "12",
                                            height: "9",
                                            viewBox: "0 0 12 9",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "text-slate-400",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M1 4.5h10.182m-4-3.5 4 3.5-4 3.5",
                                                stroke: "currentColor",
                                                strokeWidth: "1.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/app/portfolio/page.jsx",
                                                lineNumber: 188,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/portfolio/page.jsx",
                                            lineNumber: 187,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/portfolio/page.jsx",
                                    lineNumber: 185,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/portfolio/page.jsx",
                            lineNumber: 183,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl sm:text-5xl md:text-6xl font-bold max-w-4xl text-white",
                            children: "Solutions to Elevate Your Business Growth"
                        }, void 0, false, {
                            fileName: "[project]/app/portfolio/page.jsx",
                            lineNumber: 192,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "max-w-xl text-center mt-6 px-4 text-slate-300",
                            children: "Unlock potential with tailored strategies designed for success. Simplify challenges, maximize results, and stay ahead in the competitive market."
                        }, void 0, false, {
                            fileName: "[project]/app/portfolio/page.jsx",
                            lineNumber: 193,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row items-center justify-center gap-4 pt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "px-7 py-3 rounded bg-indigo-600 hover:bg-indigo-700 text-white font-medium",
                                    children: "Get Started Now"
                                }, void 0, false, {
                                    fileName: "[project]/app/portfolio/page.jsx",
                                    lineNumber: 195,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "group px-7 py-2.5 flex items-center gap-2 font-medium text-white",
                                    children: [
                                        "Learn more",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "group-hover:translate-x-1 transition pt-0.5 text-slate-400",
                                            width: "12",
                                            height: "9",
                                            viewBox: "0 0 12 9",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M1 4.5h10.182m-4-3.5 4 3.5-4 3.5",
                                                stroke: "currentColor",
                                                strokeWidth: "1.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/app/portfolio/page.jsx",
                                                lineNumber: 199,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/portfolio/page.jsx",
                                            lineNumber: 198,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/portfolio/page.jsx",
                                    lineNumber: 196,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/portfolio/page.jsx",
                            lineNumber: 194,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/portfolio/page.jsx",
                    lineNumber: 182,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/portfolio/page.jsx",
                lineNumber: 181,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mt-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: sliderRef,
                    onMouseEnter: ()=>setPaused(true),
                    onMouseLeave: ()=>setPaused(false),
                    className: "overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-6 py-2",
                        children: [
                            ...marqueeCards,
                            ...marqueeCards
                        ].map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MarqueeCard, {
                                title: c.title,
                                image: c.image
                            }, c.title + i, false, {
                                fileName: "[project]/app/portfolio/page.jsx",
                                lineNumber: 214,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/portfolio/page.jsx",
                        lineNumber: 212,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/portfolio/page.jsx",
                    lineNumber: 206,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/portfolio/page.jsx",
                lineNumber: 205,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl sm:text-5xl md:text-6xl font-bold max-w-4xl text-white text-center mt-25",
                children: "Explore Our Solutions"
            }, void 0, false, {
                fileName: "[project]/app/portfolio/page.jsx",
                lineNumber: 220,
                columnNumber: 14
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mt-25",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: cards.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                            ...card
                        }, card.title, false, {
                            fileName: "[project]/app/portfolio/page.jsx",
                            lineNumber: 225,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/portfolio/page.jsx",
                    lineNumber: 223,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/portfolio/page.jsx",
                lineNumber: 221,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/portfolio/page.jsx",
        lineNumber: 180,
        columnNumber: 9
    }, this);
}
_s1(Portfolio, "UaqOOv/55DBcDA58ou56NN/vKVM=");
_c2 = Portfolio;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "MarqueeCard");
__turbopack_context__.k.register(_c2, "Portfolio");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_portfolio_page_jsx_df4ffe79._.js.map