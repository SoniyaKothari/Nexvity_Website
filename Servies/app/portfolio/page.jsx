"use client";

import React from "react";
import Link from "next/link";

function Card({ title, image, author, href, description }) {
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
    const [tooltipVisible, setTooltipVisible] = React.useState(false);
    const divRef = React.useRef(null);

    const handleMouseMove = (e) => {
        const bounds = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setTooltipVisible(true)}
            onMouseLeave={() => setTooltipVisible(false)}
            className="relative bg-slate-900 border border-slate-800 rounded-lg shadow-sm overflow-hidden"
        >
           

            <Link href={href}>
                <img className="w-full h-56 object-cover object-top" src={image} alt="" />
            </Link>
            <div className="p-5">
                <Link href={href}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{title}</h5>
                </Link>
                <p className="mb-3 text-slate-300">{description}</p>
                <Link href={href} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}

function MarqueeCard({ title, image }) {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3 w-64 sm:w-72 shrink-0">
            <div className="rounded-xl overflow-hidden">
                <img src={image} alt={title} className="w-full h-40 sm:h-44 object-cover" />
            </div>
            <div className="mt-3 text-center text-white font-medium">{title}</div>
        </div>
    );
}

export default function Portfolio() {
    const sliderRef = React.useRef(null);
    const [paused, setPaused] = React.useState(false);
    React.useEffect(() => {
        const el = sliderRef.current;
        if (!el) return;
        let raf;
        const speed = 0.6;
        const step = () => {
            if (!paused) {
                el.scrollLeft += speed;
                const max = el.scrollWidth / 2;
                if (el.scrollLeft >= max) el.scrollLeft = 0;
            }
            raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
        return () => cancelAnimationFrame(raf);
    }, [paused]);
    const cards = [
        {
            title: "SEO Platform",
            image: "https://images.unsplash.com/photo-1560264418-c4445382edbc?q=80&w=800",
            
            href: "/portfolio/seo",
            description: "Keyword insights, technical audits, and growth experiments.",
        },
        {
            title: "CRM Application",
            image: "https://images.unsplash.com/photo-1543269865-0a740d43b90c?q=80&w=800",
           
            href: "/portfolio/crm",
            description: "Pipeline tracking, contacts, automation, and reporting.",
        },
        {
            title: "HRMS Suite",
            image: "https://images.unsplash.com/photo-1714976326351-0ecf0244f0fc?q=80&w=800",
           
            href: "/portfolio/hrms",
            description: "Hiring, onboarding, payroll, and performance management.",
        },
        {
            title: "E-commerce Storefront",
            image: "https://images.unsplash.com/photo-1519336555923-59661f41bb4d?q=80&w=800",
           
            href: "/portfolio/ecommerce",
            description: "Fast catalog, payments, and personalized shopping.",
        },
        {
            title: "Analytics Dashboard",
            image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800",
         
            href: "/portfolio/analytics",
            description: "Metrics, cohorts, and actionable data visualization.",
        },
        {
            title: "Mobile App",
            image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=800",
           
            href: "/portfolio/mobile-app",
            description: "Cross-platform experience with native performance.",
        },
        {
            title: "CMS Platform",
            image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800",
           
            href: "/portfolio/cms",
            description: "Structured content, workflows, and multi-channel delivery.",
        },
        {
            title: "ERP System",
            image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800",
          
            href: "/portfolio/erp",
            description: "Operations, supply chain, and financial visibility.",
        },
        {
            title: "Marketing Automation",
            image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=800",
          
            href: "/portfolio/marketing-automation",
            description: "Journeys, segmentation, and omni-channel campaigns.",
        },
    ];
    const marqueeCards = [
        {
            title: " CRM Software",
            image: "/products/CRM.png",
        },
        {
            title: " ERP Solutions ",
            image: "/products/erp.png",
        },
        {
            title: "HR & Payroll Management",
            image: "/products/hr.jpg",
        },
        {
            title: "Inventory & Billing System",
            image: "/products/inventory.png",
        },
        {
            title: " Learning Management System (LMS)",
            image: "/products/learning.png",
        },
        {
            title: " Analytics & Business Intelligence",
            image: "/products/analytics.png",
        },
        {
            title: "  SaaS Web & Mobile Applications",
            image: "/products/saas.png",
        },
        {
            title: "  Cloud & DevOps Solutions",
            image: "/products/cloud.png",
        },
        {
            title: "  Cybersecurity Solutions",
            image: "/products/cybersecurity.jpg",
        },
    ];

    return (
        <main className="px-6 md:px-16 lg:px-24 xl:px-32">
            <section className="mt-24">
                <div className="h-[580px] flex flex-col items-center justify-center px-4 text-center">
                    <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6 border border-slate-700 rounded-full bg-white/10 pl-4 p-1 text-sm text-white max-w-full">
                        <p>Launching our new platform update.</p>
                        <div className="flex items-center cursor-pointer gap-2 bg-white/10 border border-slate-700 rounded-2xl px-3 py-1 whitespace-nowrap">
                            <p>Explore</p>
                            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-slate-400">
                                <path d="M1 4.5h10.182m-4-3.5 4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold max-w-4xl text-white">Solutions to Elevate Your Business Growth</h1>
                    <p className="max-w-xl text-center mt-6 px-4 text-slate-300">Unlock potential with tailored strategies designed for success. Simplify challenges, maximize results, and stay ahead in the competitive market.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                        <button className="px-7 py-3 rounded bg-indigo-600 hover:bg-indigo-700 text-white font-medium">Get Started Now</button>
                        <button className="group px-7 py-2.5 flex items-center gap-2 font-medium text-white">
                            Learn more
                            <svg className="group-hover:translate-x-1 transition pt-0.5 text-slate-400" width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 4.5h10.182m-4-3.5 4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
            <section className="mt-10">
                <div
                    ref={sliderRef}
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                    className="overflow-hidden"
                >
                    <div className="flex items-center gap-6 py-2">
                        {[...marqueeCards, ...marqueeCards].map((c, i) => (
                            <MarqueeCard key={c.title + i} title={c.title} image={c.image} />
                        ))}
                    </div>
                </div>
            </section>

             <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold max-w-4xl text-white text-center mt-25">Explore Our Solutions</h2>
            <section className="mt-25">
               
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cards.map((card) => (
                        <Card key={card.title} {...card} />
                    ))}
                </div>
            </section>
        </main>
    );
}
