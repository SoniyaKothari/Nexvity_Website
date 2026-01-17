'use client';

// Updated imports to match the new workflow design and theme
import { motion } from "framer-motion";
import SectionTitle from "@/components/section-title";
import { ExternalLinkIcon, Link } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { useState ,useEffect} from "react";


// Removed: useRef, BotIcon, BrainIcon, ZapIcon

export default function ServicesPage() {
    const services = [
        "Digital Consulting Services",
        "UI/UX & Product Design",
        "Software Development Services",
        "Quality Assurance & Testing",
        "Hosting , Domain & Cloud Services",
        "AI-Powered Solutions"
    ];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % services.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);
   
    return (<>
     <style>
       @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
   </style>
              <section id="home" className="flex flex-col items-center -mt-18 px-4 sm:px-6 lg:px-8">
            <motion.svg className="absolute -z-10 w-full -mt-40 md:mt-0" width="1440" height="676" viewBox="0 0 1440 676" fill="none" xmlns="http://www.w3.org/2000/svg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5}}
            >
                <rect x="-92" y="-948" width="1624" height="1624" rx="812" fill="url(#a)" />
                <defs>
                    <radialGradient id="a" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 428 292)scale(812)">
                        <stop offset=".63" stopColor="#FCE4EC" stopOpacity="0" />
                        <stop offset="1" stopColor="#e9b2b2ff" />
                    </radialGradient>
                </defs>
            </motion.svg>
            <motion.a className="flex items-center mt-36 sm:mt-40 md:mt-48 gap-2 border border-slate-600 text-gray-50 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                 href="/#contact"
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <div className="size-2 sm:size-2.5 bg-green-500 rounded-full animate-pulse"></div>
                <span>Start the Conversation</span>
            </motion.a>
            <motion.h1 className="text-center text-3xl leading-tight sm:text-4xl sm:leading-[50px] md:text-5xl md:leading-[68px] lg:text-6xl lg:leading-[70px] mt-3 sm:mt-4 font-semibold max-w-2xl"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
            >
               Your Partner for Digital, Engineering & AI Success
            </motion.h1>
            <motion.p className="text-center text-sm sm:text-base max-w-xs sm:max-w-md md:max-w-lg mt-2 sm:mt-3 leading-relaxed"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                We deliver secure, scalable AI solutions that automate critical workflows and support long-term business growth.
            </motion.p>
           
            <motion.div className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
            </motion.div>
           
        </section>
        <section className="mt-16 sm:mt-20 md:mt-24 lg:mt-32 relative px-4 sm:px-6 lg:px-8">
            <SectionTitle
                title="Our services."
            />

            <motion.div
                className="relative space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24 mt-8 sm:mt-10 md:mt-12 lg:mt-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {/* Responsive timeline that adapts to steps length (hidden on mobile) */}
                <div className="hidden lg:flex flex-col items-center absolute left-1/2 -translate-x-1/2">
                    {steps.map((_, i) => (
                        <div key={`marker-${i}`} className="flex flex-col items-center">
                            <p className="flex items-center justify-center font-medium my-6 aspect-square w-10 h-10 bg-slate-900/10 dark:bg-white/10 text-slate-900 dark:text-white rounded-full">
                                {String(i + 1).padStart(2, "0")}
                            </p>
                            {i <= steps.length -1 && (
                                <div className="h-75 w-0.5 bg-gradient-to-b from-transparent via-slate-300 dark:via-slate-700 to-transparent" />
        
                           )}
                        </div>
                    ))}
                </div>

                {steps.map((step, index) => (
                    <motion.div
                        key={step.id}
                        className={`flex items-center justify-center gap-4 sm:gap-6 md:gap-10 lg:gap-16 ${
                            index % 2 !== 0 ? "flex-col lg:flex-row-reverse" : "flex-col lg:flex-row"
                        }`}
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <img
                            src={step.image}
                            alt={`workflow-step-${step.id}`}
                            className="flex-1 h-auto w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl sm:rounded-3xl shadow-lg"
                        />
                        <div className="flex-1 flex flex-col gap-3 sm:gap-4 px-2 sm:px-4 lg:px-6 max-w-md">
                            {/* Mobile number indicator (visible only on mobile) */}
                            <span className="lg:hidden inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 bg-slate-900/10 dark:bg-white/10 text-slate-900 dark:text-white rounded-full font-medium text-sm sm:text-base mb-2">
                                {String(step.id).padStart(2, "0")}
                            </span>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-slate-900 dark:text-white">
                                {step.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                                {step.description}
                            </p>
                            <a
                                href={step.link}
                                className="flex items-center gap-2 text-indigo-600 dark:text-indigo-300 hover:underline text-sm sm:text-base font-medium"
                            >
                                Learn More
                                <ExternalLinkIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
      </>
    );

   
}

// New workflow steps with 3 additional details
const steps = [
    {
        id: 1,
        title: "Digital Consulting Services",
        description:
            "We help you define, plan, and execute digital and AI transformation initiatives that align technology, processes, and growth objectives.",
        link: "/services/digital",
        image: "/assets/digital.png",
    },
    {
        id: 2,
        title: "UI/UX & Product Design",
        description:
            " We design intuitive, user-centric experiences that drive engagement, usability, and customer satisfaction across web and mobile platforms.",
        link: "/services/uiux",
        image: "/assets/newuiux.jpeg",
    },
    {
        id: 3,
        title: "Software Development Services",
        description:
            " We build secure, high-performance web and mobile applications engineered for growth, automation, and AI integration.",
        link: "/services/softwaredesign",
        image: "/assets/newsoftware.jpeg",
    },
    // Extra 3 details (responsive-friendly, same styling/theme)
    {
        id: 4,
        title: "Quality Assurance & Testing",
        description:
            "Connect APIs, databases, and knowledge bases so your agent can reference up-to-date information and perform richer tasks.",
        link: "/services/softwaretesting",
        image: "/assets/newtest.png",
    },
    {
        id: 5,
        title: " Hosting , Domain & Cloud Services",
        description:
            "Fast, secure, and dependable hosting ,domain and cloud solutions for modern digital platforms.",
        link: "/services/hostinganddomain",
        image: "/assets/hosting.jpeg",
    },
    {
        id: 6,
        title: "AI-Powered Solutions",
        description:
            "Share agents, set permissions, and collaborate. Roll out automations safely across teams and environments.",
        link: "/services/aipowered",
        image: "/assets/newai.jpeg",
    },
   
];
