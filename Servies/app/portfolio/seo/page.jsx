'use client';

import SectionTitle from "@/components/section-title";

export default function PortfolioSeoPage() {
    const qaBlocks = [
        {
            q: "How did we improve crawlability?",
            a: "We streamlined sitemaps, refined robots rules, and fixed canonical tags to ensure important collections and products were discovered and indexed efficiently.",
            before: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=900",
            after: "https://images.unsplash.com/photo-1519336555923-59661f41bb4d?q=80&w=900",
        },
        {
            q: "How did content changes impact ranking?",
            a: "We built topic clusters and upgraded product copy with schema, FAQs, and internal links, improving relevance for transactional queries and long‑tail coverage.",
            before: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=900",
            after: "https://images.unsplash.com/photo-1714976326351-0ecf0244f0fc?q=80&w=900",
        },
        {
            q: "How did architecture changes affect indexation?",
            a: "We reduced parameter duplication, consolidated variants, and established clean URL patterns to improve crawl efficiency and indexation rates across categories.",
            before: "https://images.unsplash.com/photo-1543269865-0a740d43b90c?q=80&w=900",
            after: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=900",
        },
    ];
    return (
        <main className="px-6 md:px-16 lg:px-24 xl:px-32">
            <SectionTitle title="SEO Case Study" description="From crawlability fixes to content expansion, measurable gains in 12 weeks." />
            <section className="max-w-5xl mx-auto mt-16 text-slate-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-xl border border-slate-700 bg-white/5">
                    <div>
                        <h3 className="text-white text-xl font-semibold">Demo Company</h3>
                        <p className="mt-2">Acme Retail Co.</p>
                        <p className="mt-1">Industry: E‑commerce</p>
                        <p className="mt-1">Size: 200+ employees</p>
                        <p className="mt-1">Website: acmeretail.example</p>
                    </div>
                    <div>
                        <h3 className="text-white text-xl font-semibold">Summary</h3>
                        <p className="mt-2">Acme sought to lift organic traffic and product rankings. We executed a technical and content program improving crawl efficiency, site architecture, and topical depth.</p>
                        <p className="mt-2">Within 12 weeks, organic sessions and rankings rose while Core Web Vitals improved, setting a foundation for compounding gains.</p>
                    </div>
                </div>

                <div className="mt-12 space-y-10">
                    {qaBlocks.map((b) => (
                        <div key={b.q} className="space-y-6 p-6 rounded-xl border border-slate-700 bg-white/5">
                            <h4 className="text-white text-lg font-semibold">{b.q}</h4>
                            <p className="mt-3">{b.a}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="rounded-xl overflow-hidden border border-slate-700 bg-slate-900">
                                    <div className="flex items-center justify-between px-4 py-2 border-b border-slate-700">
                                        <span className="text-sm text-slate-300">Before</span>
                                    </div>
                                    <img className="w-full h-64 object-cover" src={b.before} alt="Before" />
                                </div>
                                <div className="rounded-xl overflow-hidden border border-slate-700 bg-slate-900">
                                    <div className="flex items-center justify-between px-4 py-2 border-b border-slate-700">
                                        <span className="text-sm text-slate-300">After</span>
                                    </div>
                                    <img className="w-full h-64 object-cover" src={b.after} alt="After" />
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="p-6 rounded-xl border border-slate-700 bg-white/5">
                        <h4 className="text-white text-lg font-semibold">Benefits</h4>
                        <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-300 list-disc list-inside">
                            <li>+35% organic sessions in 12 weeks</li>
                            <li>+120 Top 10 keywords across core categories</li>
                            <li>Improved Core Web Vitals, lower CLS and FID</li>
                            <li>Higher indexation and crawl efficiency</li>
                            <li>+18% CTR on high‑intent queries</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}
