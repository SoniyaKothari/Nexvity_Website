import SectionTitle from "@/components/section-title";
import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

export default function VisionMission() {
       return (
        <section className="flex flex-col items-center">
            <SectionTitle title="A Clear Vision, A Stronger Mission." description="Driven by clarity of vision and strength of mission, we transform complex challenges into reliable digital success stories." />
            <motion.div className="relative max-w-5xl py-10 md:py-16 mt-12 md:w-full overflow-hidden mx-2 md:mx-auto border border-indigo-900 bg-gradient-to-br from-[#401B98]/5 to-[#180027]/10 rounded-3xl p-5 md:p-8 text-white"
                initial={{ y: 150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <div className="relative w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 place-items-center">
                  <div className="w-full max-w-md rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-5">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-full bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center">
                        <Eye className="size-5 text-indigo-300" />
                      </div>
                      <h3 className="text-2xl font-semibold text-indigo-200">Vision</h3>
                    </div>
                    <ul className="mt-3 space-y-2 text-slate-200">
                      <li className="flex items-start">
                        <span className="mt-1 mr-2 size-2 rounded-full bg-indigo-400"></span>
                        <span>Building technology that enables businesses to grow, adapt, and lead.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mt-1 mr-2 size-2 rounded-full bg-indigo-400"></span>
                        <span>To become a trusted global partner for digital and AI-driven transformation.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mt-1 mr-2 size-2 rounded-full bg-indigo-400"></span>
                        <span>To create meaningful impact by combining strategy, design, and technology.</span>
                      </li>
                        <li className="flex items-start">
                        <span className="mt-1 mr-2 size-2 rounded-full bg-indigo-400"></span>
                        <span>Where strategy meets intelligent technology.</span>
                      </li>
                        <li className="flex items-start">
                        <span className="mt-1 mr-2 size-2 rounded-full bg-indigo-400"></span>
                        <span>To shape industries through thoughtful engineering and strategic innovation.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="w-full max-w-md rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-5">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-full bg-pink-600/20 border border-pink-500/40 flex items-center justify-center">
                        <Target className="size-5 text-pink-300" />
                      </div>
                      <h3 className="text-2xl font-semibold text-pink-200">Mission</h3>
                    </div>
                    <ul className="mt-3 space-y-2 text-slate-200">
                      <li className="flex items-start">
                        <span className="mt-1 mr-2 size-2 rounded-full bg-pink-400"></span>
                        <span>Creating reliable, scalable, and intelligent digital solutions for real-world impact.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mt-1 mr-2 size-2 rounded-full bg-pink-400"></span>
                        <span>To solve complex business challenges through smart, AI-powered technology.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mt-1 mr-2 size-2 rounded-full bg-pink-400"></span>
                        <span>To continuously innovate while ensuring excellence, transparency, and trust.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mt-1 mr-2 size-2 rounded-full bg-pink-400"></span>
                        <span>Delivering technology that scales with ambition.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mt-1 mr-2 size-2 rounded-full bg-pink-400"></span>
                        <span>To help organizations innovate faster while maintaining quality and trust.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10"></div>
                 
                </div>
           
            </motion.div>
        </section>
    );
}
