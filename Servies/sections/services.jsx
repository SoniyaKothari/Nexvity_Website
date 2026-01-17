'use client';

// Updated imports to match the new workflow design and theme
import { motion } from "framer-motion";
import SectionTitle from "@/components/section-title";
import { ExternalLinkIcon } from "lucide-react";
// Removed: useRef, BotIcon, BrainIcon, ZapIcon

export default function Services() {
    return (
        <section className="mt-24 md:mt-32 relative">
            <SectionTitle
                title="From idea to autonomous agent quickly and effortlessly."
                description="Empower your business with AI agents that optimize processes and accelerate performance."
            />

            <motion.div
                className="relative space-y-16 md:space-y-24 mt-10 md:mt-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {/* Responsive timeline that adapts to steps length (hidden on mobile) */}
                <div className="hidden md:flex flex-col items-center absolute left-1/2 -translate-x-1/2">
                    {steps.map((_, i) => (
                        <div key={`marker-${i}`} className="flex flex-col items-center">
                            <p className="flex items-center justify-center font-medium my-6 aspect-square w-10 h-10 bg-slate-900/10 dark:bg-white/10 text-slate-900 dark:text-white rounded-full">
                                {String(i + 1).padStart(2, "0")}
                            </p>
                            {i < steps.length - 1 && (
                                <div className="h-32 w-0.5 bg-gradient-to-b from-transparent via-slate-300 dark:via-slate-700 to-transparent" />
                            )}
                        </div>
                    ))}
                </div>

                {steps.map((step, index) => (
                    <motion.div
                        key={step.id}
                        className={`flex items-center justify-center gap-6 md:gap-16 ${
                            index % 2 !== 0 ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row"
                        }`}
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <img
                            src={step.image}
                            alt={`workflow-step-${step.id}`}
                            className="flex-1 h-auto w-full max-w-sm md:max-w-md rounded-2xl"
                        />
                        <div className="flex-1 flex flex-col gap-4 md:px-6 max-w-md">
                            <h3 className="text-xl md:text-2xl font-medium text-slate-900 dark:text-white">
                                {step.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed line-clamp-4">
                                {step.description}
                            </p>
                            <a
                                href={step.link}
                                className="flex items-center gap-2 text-indigo-600 dark:text-indigo-300 hover:underline"
                            >
                                Learn More
                                <ExternalLinkIcon className="size-4" />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

// New workflow steps with 3 additional details
const steps = [
    {
        id: 1,
        title: "Start with a prompt",
        description:
            "Start with a simple prompt describing what you want your agent to do. Our builder interprets your idea and creates the structure for you in seconds.",
        link: "https://prebuiltui.com/tailwind-templates",
        image: "/assets/workflow1.png",
    },
    {
        id: 2,
        title: "Adjust and personalize",
        description:
            "Adjust tasks, actions and integrations. Add personality, rules and data sources to make the agent work exactly the way you want.",
        link: "https://prebuiltui.com/tailwind-templates",
        image: "/assets/workflow2.png",
    },
    {
        id: 3,
        title: "Launch & Automate",
        description:
            "Deploy your agent and let it run. It executes tasks autonomously, reports results, and continues working in the background.",
        link: "https://prebuiltui.com/tailwind-templates",
        image: "/assets/workflow3.png",
    },
    // Extra 3 details (responsive-friendly, same styling/theme)
    {
        id: 4,
        title: "Integrate data sources",
        description:
            "Connect APIs, databases, and knowledge bases so your agent can reference up-to-date information and perform richer tasks.",
        link: "https://prebuiltui.com/tailwind-templates",
        image: "/assets/workflow4.png",
    },
    {
        id: 5,
        title: "Monitor & iterate",
        description:
            "Review logs, optimize prompts, and refine behaviors. Continuously improve performance with feedback loops.",
        link: "https://prebuiltui.com/tailwind-templates",
        image: "/assets/workflow5.png",
    },
    {
        id: 6,
        title: "Scale across teams",
        description:
            "Share agents, set permissions, and collaborate. Roll out automations safely across teams and environments.",
        link: "https://prebuiltui.com/tailwind-templates",
        image: "/assets/workflow6.png",
    },
];