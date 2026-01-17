'use client';

import SectionTitle from "@/components/section-title";

export default function PortfolioCrmPage() {
    return (
        <main className="px-6 md:px-16 lg:px-24 xl:px-32">
            <SectionTitle title="CRM Application" description="Demo CRM with pipelines, automation, and reporting." />
            <section className="max-w-4xl mx-auto mt-16 text-slate-300">
                <h3 className="text-2xl font-semibold text-white">Overview</h3>
                <p className="mt-3">Contacts, deals, email sequences, and activity timelines across teams.</p>
            </section>
        </main>
    );
}

