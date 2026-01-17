'use client';

import SectionTitle from "@/components/section-title";

export default function PortfolioMobileAppPage() {
    return (
        <main className="px-6 md:px-16 lg:px-24 xl:px-32">
            <SectionTitle title="Mobile App" description="Demo cross-platform app with smooth UX and offline support." />
            <section className="max-w-4xl mx-auto mt-16 text-slate-300">
                <h3 className="text-2xl font-semibold text-white">Overview</h3>
                <p className="mt-3">Feature-rich app foundation with navigation, state, and sync.</p>
            </section>
        </main>
    );
}

