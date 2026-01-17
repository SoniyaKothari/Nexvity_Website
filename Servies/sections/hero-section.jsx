import TiltedImage from "@/components/tilt-image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";


export default function HeroSection() {
    return (
        <section id="home" className="flex flex-col items-center -mt-18">
            <motion.svg className="absolute -z-10 w-full -mt-40 md:mt-0" width="1440" height="676" viewBox="0 0 1440 676" fill="none" xmlns="http://www.w3.org/2000/svg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5}}
            >
                <rect x="-92" y="-948" width="1624" height="1624" rx="812" fill="url(#a)" />
                <defs>
                    <radialGradient id="a" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 428 292)scale(812)">
                        <stop offset=".63" stopColor="#f4f4eaff" stopOpacity="0" />
                        <stop offset="1" stopColor="#f4f4eaff" />
                    </radialGradient>
                </defs>
            </motion.svg>
            <motion.a className="flex items-center mt-48 gap-2 border border-slate-600 text-gray-50 rounded-full px-4 py-2"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <div className="size-2.5 bg-green-500 rounded-full animate-pulse"></div>
                <span>Book a live demo today</span>
            </motion.a>
            <motion.h1 className="text-center text-5xl leading-[68px] md:text-6xl md:leading-[70px] mt-4 font-semibold max-w-2xl"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
            >
              Turn Ideas into Intelligent AI Products

            </motion.h1>
            <motion.p className="text-center text-base max-w-lg mt-2"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                We deliver consulting, design, software, AI, and marketing services that scale with your business.
            </motion.p>

            <motion.div className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <Link 
                    href="/portfolio" 
                    className="group flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                    <span> Portfolio</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
            </motion.div>

            <motion.div className="flex items-center gap-4 mt-48 sm:mt-52 md:mt-60"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                
            </motion.div>

        </section>
    );
}
