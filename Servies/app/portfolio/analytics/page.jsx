'use client';

import SectionTitle from "@/components/section-title";

export default function PortfolioAnalyticsPage() {
    return (
        <main className="px-6 md:px-16 lg:px-24 xl:px-32">
            <SectionTitle title="Analytics Dashboard" description="Demo analytics with cohorts, funnels, and custom reports." />
            <section className="max-w-4xl mx-auto mt-16 text-slate-300">
                <h3 className="text-2xl font-semibold text-white">Overview</h3>
                <p className="mt-3">Event tracking, user journeys, and KPIs for data-driven decisions.</p>
            </section>
        </main>
    );
}

