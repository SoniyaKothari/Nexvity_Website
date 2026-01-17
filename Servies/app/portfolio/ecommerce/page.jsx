'use client';

import SectionTitle from "@/components/section-title";

export default function PortfolioEcommercePage() {
    return (
        <main className="px-6 md:px-16 lg:px-24 xl:px-32">
            <SectionTitle title="E-commerce Storefront" description="Demo storefront with fast catalog, checkout, and personalization." />
            <section className="max-w-4xl mx-auto mt-16 text-slate-300">
                <h3 className="text-2xl font-semibold text-white">Overview</h3>
                <p className="mt-3">Product pages, cart, payments, and recommendations for higher conversion.</p>
            </section>
        </main>
    );
}

