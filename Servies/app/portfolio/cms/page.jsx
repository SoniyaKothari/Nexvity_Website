'use client';

import SectionTitle from "@/components/section-title";

export default function PortfolioCmsPage() {
    return (
        <main className="px-6 md:px-16 lg:px-24 xl:px-32">
            <SectionTitle title="CMS Platform" description="Demo headless CMS with structured content and workflows." />
            <section className="max-w-4xl mx-auto mt-16 text-slate-300">
                <h3 className="text-2xl font-semibold text-white">Overview</h3>
                <p className="mt-3">Schemas, roles, publishing flows, and multi-channel delivery.</p>
            </section>
        </main>
    );
}

