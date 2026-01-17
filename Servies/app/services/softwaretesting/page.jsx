'use client';

"use client";
import SectionTitle from "@/components/section-title";
import { motion } from "framer-motion";
import { ArrowRight, ClipboardList, PencilRuler, Code2, CheckCircle2, Rocket } from "lucide-react";
import { useState } from "react";

export default function SoftwareTestingServices() {
     // tilt state/handlers for inline cards
                const [tiltA, setTiltA] = useState({ x: 0, y: 0 });
                const [tiltB, setTiltB] = useState({ x: 0, y: 0 });
                const threshold = 12;
                const handleMoveA = (e) => {
                    const { left, width, top, height } = e.currentTarget.getBoundingClientRect();
                    const x = (e.clientX - left) / width - 0.5;
                    const y = (e.clientY - top) / height - 0.5;
                    setTiltA({ x: y * -threshold, y: x * threshold });
                };
                const handleMoveB = (e) => {
                    const { left, width, top, height } = e.currentTarget.getBoundingClientRect();
                    const x = (e.clientX - left) / width - 0.5;
                    const y = (e.clientY - top) / height - 0.5;
                    setTiltB({ x: y * -threshold, y: x * threshold });
                };
                
                // Flip card state for touch/click
                const [flippedCards, setFlippedCards] = useState({});
                
                const toggleFlip = (cardId) => {
                    setFlippedCards(prev => ({
                        ...prev,
                        [cardId]: !prev[cardId]
                    }));
                };
         const [stopScroll, setStopScroll] = useState(false);
    
  const sectionData = [
                 {
                   title: "Tested for Real Users",
                   description: " We validate workflows, edge cases, and usability from the perspective of real user behavior.",
                   image:"/assets/t_abt_1.png",
                   className:
                     "py-10 border-b border-slate-700 md:border-r md:border-b md:px-10 lg:border-b-0",
                 },
                 {
                   title: "Launch With Confidence",
                   description:
                     "Each release is production-ready, secure, and tested to scale from day one.",
                   image: "/assets/t_abt_2.png",
                   className:
                     "py-10 border-b border-slate-700 md:border-b md:px-10 lg:border-r lg:border-b-0",
                 },
                 {
                   title: "Performance & Security Assured",
                   description:
                     "We ensure your product remains fast, stable, and secure as users and demand grow.",
                   image: "/assets/t_abt_3.png",
                   className:
                     "py-10 border-b border-slate-700 md:border-r md:border-b-0 md:px-10 lg:border-b-0",
                 },
               ];
           return (
             <>
  
             
          
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
                          <stop offset=".63" stopColor="#e8d077ff" stopOpacity="0" />
                          <stop offset="1" stopColor="#e8d077ff" />
                      </radialGradient>
                  </defs>
              </motion.svg>
              <motion.a className="flex items-center mt-36 sm:mt-40 md:mt-48 gap-2 border border-slate-600 text-gray-50 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm"
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
                Quality Assurance & Testing
  
              </motion.h1>
              <motion.p className="text-center text-xs sm:text-sm md:text-base leading-relaxed max-w-lg mt-2 px-2"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
              >
                 {/* sub heading */}
                We ensure reliability, security, and performance through rigorous testing frameworks that support enterprise-grade and AI-powered systems.
               
              </motion.p>
              
              <motion.div className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
              >
              </motion.div>
           
          </section>
  
  
           <section className="mt-16 sm:mt-20 md:mt-24 lg:mt-50 relative px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center mx-auto">Overview</h1>
              <p className="text-xs sm:text-sm md:text-base leading-relaxed text-white text-center mt-2 max-w-md mx-auto px-2">
                  {/* sub heading */}
                 Quality Assurance and Testing Designed to Eliminate Risk and Elevate Product Confidence.

              
              </p>
              <section className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10 mt-10 sm:mt-12 md:mt-15">
                  <div className="relative shadow-xl sm:shadow-2xl shadow-indigo-600/40 rounded-2xl sm:rounded-3xl overflow-hidden shrink-0 order-2 lg:order-1">
                      <img className="max-w-xs sm:max-w-sm md:max-w-md w-full object-cover rounded-2xl sm:rounded-3xl"
                          src="/assets/qat_3.jpeg"
                          alt="" />
                  
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 max-w-lg order-1 lg:order-2">
                      <h1 className="text-lg sm:text-xl md:text-2xl uppercase font-semibold text-white leading-relaxed">Our Testing Philosophy</h1>
                      <div className="w-32 sm:w-36 md:w-40 h-[2px] sm:h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]"></div>
                      <p className="mt-4 sm:mt-6 md:mt-8 text-white leading-relaxed">At Nexvity, quality is not a final checkpoint.It is an embedded intelligence layer. Our Assurance Intelligence™ Workflow ensures that every release is stable, secure, and confidently scalable, long before it reaches your users</p>
                      <p className="mt-3 sm:mt-4 text-white leading-relaxed">Every feature is tested. Every interaction is validated. Our QA & Testing ensures your product delivers consistent performance without compromise.</p>
                      <p className="mt-3 sm:mt-4 text-white leading-relaxed">Our QA framework ensures that each product is:</p>
                       <ul className="list-disc list-inside mt-2 text-white leading-relaxed space-y-1">
                          <li>Accurate in behavior and logic</li>
                          <li>Stable as usage and scale increase</li>
                          <li>Performance-tested for real-world demands</li>
                          <li>Verified across devices, platforms, and environments</li>
                       </ul>
                       <p className="mt-3 sm:mt-4 text-white leading-relaxed">Quality assurance, to us, is the difference between launching and leading.</p>
                           <div className="w-full max-w-[130px] h-1 sm:h-[5px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF] mt-4 sm:mt-6 md:mt-8"></div>
                     
                  </div>
              </section>
  
             <section>
                                      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-0 mt-8 sm:mt-10 md:mt-12">
                                         <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center mx-auto">Our services</h1>
                                         {/* Two large inline tilt cards (no separate function) */}
                                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-10 lg:mt-12">
                                             <div
                                                 className="rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer bg-white/5 h-full min-h-[320px] sm:min-h-[360px] border border-indigo-400/40"
                                                 onMouseMove={handleMoveA}
                                                 onMouseLeave={() => setTiltA({ x: 0, y: 0 })}
                                                 style={{ transform: `perspective(1000px) rotateX(${tiltA.x}deg) rotateY(${tiltA.y}deg)` }}
                                             >
                                                 <img
                                                     src="/assets/qat_1.jpeg"
                                                     alt="City skyline"
                                                     className="w-full h-56 sm:h-64 md:h-80 object-cover"
                                                 />
                                                 <h3 className="mt-3 sm:mt-4 px-4 sm:px-5 md:px-6 pt-3 sm:pt-4 mb-1 text-lg sm:text-xl md:text-2xl font-semibold text-white">
                                                        Manual Testing
                                             
                                                 </h3>
                                                 <p className="text-xs sm:text-sm md:text-base leading-relaxed px-4 sm:px-5 md:px-6 pb-6 sm:pb-7 md:pb-8 text-slate-300">
                                                                                               
                                                    Our manual testing ensures every feature works exactly as intended through detailed, human-led validation. We test user flows, edge cases, and real-world scenarios that automation often misses. This helps deliver intuitive, error-free user experiences.
                                             
                                                 </p>
                                             </div>
                      
                                             <div
                                                 className="rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer bg-white/5 h-full min-h-[320px] sm:min-h-[360px] border border-indigo-400/40"
                                                 onMouseMove={handleMoveB}
                                                 onMouseLeave={() => setTiltB({ x: 0, y: 0 })}
                                                 style={{ transform: `perspective(1000px) rotateX(${tiltB.x}deg) rotateY(${tiltB.y}deg)` }}
                                             >
                                                 <img
                                                     src="/assets/qat_2.jpeg"
                                                     alt="Landscape"
                                                     className="w-full h-56 sm:h-64 md:h-80 object-cover"
                                                 />
                                                 <h3 className="mt-3 sm:mt-4 px-4 sm:px-5 md:px-6 pt-3 sm:pt-4 mb-1 text-lg sm:text-xl md:text-2xl font-semibold text-white">
                                                  Automated Testing
                                             
                                                 </h3>
                                                 <p className="text-xs sm:text-sm md:text-base leading-relaxed px-4 sm:px-5 md:px-6 pb-6 sm:pb-7 md:pb-8 text-slate-300">
                                                   We implement scalable automation frameworks to speed up testing without compromising quality. Automated tests ensure consistent performance across releases, reduce regression issues, and support faster development cycles with reliable results.
                                             
                                                 </p>
                                             </div>
             
                                             <div
                                                 className="rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer bg-white/5 h-full min-h-[320px] sm:min-h-[360px] border border-indigo-400/40"
                                                 onMouseMove={handleMoveA}
                                                 onMouseLeave={() => setTiltA({ x: 0, y: 0 })}
                                                 style={{ transform: `perspective(1000px) rotateX(${tiltA.x}deg) rotateY(${tiltA.y}deg)` }}
                                             >
                                                 <img
                                                     src="/assets/qat.jpeg"
                                                     alt="City skyline"
                                                     className="w-full h-56 sm:h-64 md:h-80 object-cover"
                                                 />
                                                 <h3 className="mt-3 sm:mt-4 px-4 sm:px-5 md:px-6 pt-3 sm:pt-4 mb-1 text-lg sm:text-xl md:text-2xl font-semibold text-white">
                                                   QA Strategy & Consulting
                                             
                                                 </h3>
                                                 <p className="text-xs sm:text-sm md:text-base leading-relaxed px-4 sm:px-5 md:px-6 pb-6 sm:pb-7 md:pb-8 text-slate-300">
                                                    Our QA strategy and consulting services align testing processes with your product goals and development workflow. We design tailored QA roadmaps, tools, and best practices that improve quality, efficiency, and release confidence.
                                             
                                                 </p>
                                             </div>
                                             <div
                                                 className="rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer bg-white/5 h-full min-h-[320px] sm:min-h-[360px] border border-indigo-400/40"
                                                 onMouseMove={handleMoveA}
                                                 onMouseLeave={() => setTiltA({ x: 0, y: 0 })}
                                                 style={{ transform: `perspective(1000px) rotateX(${tiltA.x}deg) rotateY(${tiltA.y}deg)` }}
                                             >
                                                 <img
                                                     src="/assets/qat_4.jpeg"
                                                     alt="City skyline"
                                                     className="w-full h-56 sm:h-64 md:h-80 object-cover"
                                                 />
                                                 <h3 className="mt-3 sm:mt-4 px-4 sm:px-5 md:px-6 pt-3 sm:pt-4 mb-1 text-lg sm:text-xl md:text-2xl font-semibold text-white">
                                                   Mobile App Testing (Android & iOS)
                                             
                                                 </h3>
                                                 <p className="text-xs sm:text-sm md:text-base leading-relaxed px-4 sm:px-5 md:px-6 pb-6 sm:pb-7 md:pb-8 text-slate-300">
                                                    We test mobile applications across devices, screen sizes, and operating system versions to ensure seamless performance. From functionality and usability to performance and security, we ensure your app delivers a consistent experience on both Android and iOS platforms.
                                             
                                                 </p>
                                             </div>
                                         </div>
                                     </div>
                                     </section>
                                    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-0 mt-12 sm:mt-16 md:mt-20 relative">
                                        <SectionTitle title="Workflow of STLC" />
                                     <div className="hidden lg:block absolute left-0 right-0 top-20 sm:top-22 md:top-24 h-px bg-gradient-to-r from-transparent via-slate-700/70 to-transparent"></div>
                                    <div className="mt-8 sm:mt-10 md:mt-12">
                                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-2">
                                        <motion.div
                                          className="group w-full h-56 sm:h-60 md:h-64 [perspective:1000px] cursor-pointer"
                                          initial={{ y: 40, opacity: 0 }}
                                          whileInView={{ y: 0, opacity: 1 }}
                                          viewport={{ once: true }}
                                          transition={{ type: "spring", stiffness: 240, damping: 60, mass: 1 }}
                                          onClick={() => toggleFlip('discovery')}
                                        >
                                          <div className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-2xl sm:rounded-3xl ${
                                            flippedCards['discovery'] ? '[transform:rotateY(180deg)]' : ''
                                          }`}>
                                            <div className="absolute w-full h-full [backface-visibility:hidden] flex flex-col items-center justify-center rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur border border-white/10 p-4 sm:p-5 md:p-6">
                                              <div className="mx-auto size-12 sm:size-14 md:size-16 rounded-full bg-gradient-to-br from-indigo-600 to-violet-500 p-0.5">
                                                <div className="size-full rounded-full bg-slate-900 text-white flex items-center justify-center">
                                                  <ClipboardList className="size-6 sm:size-6 md:size-7" />
                                                </div>
                                              </div>
                                              <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-center text-white leading-relaxed">Discovery & Analysis</h3>
                                              <p className="mt-1.5 sm:mt-2 text-slate-300 text-xs sm:text-sm max-w-xs mx-auto text-center leading-relaxed">Understanding every requirement to build a solid QA foundation.</p>
                                            </div>
                                            <div className="absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center rounded-2xl sm:rounded-3xl bg-indigo-600 text-white [transform:rotateY(180deg)] p-3 sm:p-4 text-center">
                                              <p className="text-xs sm:text-sm text-left leading-relaxed"> We thoroughly analyze product requirements, business goals, and user expectations, identifying risks and quality benchmarks to lay a strong foundation for QA.</p>
                                            </div>
                                          </div>
                                        </motion.div>
                                        <motion.div
                                          className="group w-full h-56 sm:h-60 md:h-64 [perspective:1000px] cursor-pointer"
                                          initial={{ y: 40, opacity: 0 }}
                                          whileInView={{ y: 0, opacity: 1 }}
                                          viewport={{ once: true }}
                                          transition={{ delay: 0.05, type: "spring", stiffness: 240, damping: 60, mass: 1 }}
                                          onClick={() => toggleFlip('blueprint')}
                                        >
                                          <div className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-2xl sm:rounded-3xl ${
                                            flippedCards['blueprint'] ? '[transform:rotateY(180deg)]' : ''
                                          }`}>
                                            <div className="absolute w-full h-full [backface-visibility:hidden] flex flex-col items-center justify-center rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur border border-white/10 p-4 sm:p-5 md:p-6">
                                              <div className="mx-auto size-12 sm:size-14 md:size-16 rounded-full bg-gradient-to-br from-indigo-600 to-violet-500 p-0.5">
                                                <div className="size-full rounded-full bg-slate-900 text-white flex items-center justify-center">
                                                  <PencilRuler className="size-6 sm:size-6 md:size-7" />
                                                </div>
                                              </div>
                                              <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-white text-center leading-relaxed">Quality Blueprint</h3>
                                              <p className="mt-1.5 sm:mt-2 text-slate-300 text-xs sm:text-sm max-w-xs mx-auto text-center leading-relaxed">Designing a roadmap to catch every issue before it happens.</p>
                                            </div>
                                            <div className="absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center rounded-2xl sm:rounded-3xl bg-indigo-600 text-white [transform:rotateY(180deg)] p-3 sm:p-4 text-center">
                                              <p className="text-xs sm:text-sm text-left leading-relaxed"> A comprehensive QA plan is created with strategies, test cases, and priorities to ensure every aspect of functionality, performance, and security is covered.</p>
                                            </div>
                                          </div>
                                        </motion.div>
                                        <motion.div
                                          className="group w-full h-56 sm:h-60 md:h-64 [perspective:1000px] cursor-pointer"
                                          initial={{ y: 40, opacity: 0 }}
                                          whileInView={{ y: 0, opacity: 1 }}
                                          viewport={{ once: true }}
                                          transition={{ delay: 0.1, type: "spring", stiffness: 240, damping: 60, mass: 1 }}
                                          onClick={() => toggleFlip('verification')}
                                        >
                                          <div className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-2xl sm:rounded-3xl ${
                                            flippedCards['verification'] ? '[transform:rotateY(180deg)]' : ''
                                          }`}>
                                            <div className="absolute w-full h-full [backface-visibility:hidden] flex flex-col items-center justify-center rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur border border-white/10 p-4 sm:p-5 md:p-6">
                                              <div className="mx-auto size-12 sm:size-14 md:size-16 rounded-full bg-gradient-to-br from-indigo-600 to-violet-500 p-0.5">
                                                <div className="size-full rounded-full bg-slate-900 text-white flex items-center justify-center">
                                                  <Code2 className="size-6 sm:size-6 md:size-7" />
                                                </div>
                                              </div>
                                              <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-white text-center leading-relaxed"> Product Verification</h3>
                                              <p className="mt-1.5 sm:mt-2 text-slate-300 text-xs sm:text-sm max-w-xs mx-auto text-center leading-relaxed">Ensuring your product works perfectly in real-world conditions.</p>
                                            </div>
                                            <div className="absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center rounded-2xl sm:rounded-3xl bg-indigo-600 text-white [transform:rotateY(180deg)] p-3 sm:p-4 text-center">
                                              <p className="text-xs sm:text-sm text-left leading-relaxed"> Rigorous manual and automated testing validates features, workflows, and integrations, ensuring the product behaves as intended in real-world scenarios.</p>
                                            </div>
                                          </div>
                                        </motion.div>
                                        <motion.div
                                          className="group w-full h-56 sm:h-60 md:h-64 [perspective:1000px] cursor-pointer"
                                          initial={{ y: 40, opacity: 0 }}
                                          whileInView={{ y: 0, opacity: 1 }}
                                          viewport={{ once: true }}
                                          transition={{ delay: 0.15, type: "spring", stiffness: 240, damping: 60, mass: 1 }}
                                          onClick={() => toggleFlip('stability')}
                                        >
                                          <div className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-2xl sm:rounded-3xl ${
                                            flippedCards['stability'] ? '[transform:rotateY(180deg)]' : ''
                                          }`}>
                                            <div className="absolute w-full h-full [backface-visibility:hidden] flex flex-col items-center justify-center rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur border border-white/10 p-4 sm:p-5 md:p-6">
                                              <div className="mx-auto size-12 sm:size-14 md:size-16 rounded-full bg-gradient-to-br from-indigo-600 to-violet-500 p-0.5">
                                                <div className="size-full rounded-full bg-slate-900 text-white flex items-center justify-center">
                                                  <CheckCircle2 className="size-6 sm:size-6 md:size-7" />
                                                </div>
                                              </div>
                                              <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-white text-center leading-relaxed">Stability Assurance</h3>
                                              <p className="mt-1.5 sm:mt-2 text-slate-300 text-xs sm:text-sm max-w-xs mx-auto text-center leading-relaxed">Testing under stress to guarantee reliability and resilience.</p>
                                            </div>
                                            <div className="absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center rounded-2xl sm:rounded-3xl bg-indigo-600 text-white [transform:rotateY(180deg)] p-3 sm:p-4 text-center">
                                              <p className="text-xs sm:text-sm text-left leading-relaxed"> Extensive load, performance, and regression testing confirm product stability and reliability, while security and compatibility checks mitigate potential issues.</p>
                                            </div>
                                          </div>
                                        </motion.div>
                                                         <motion.div
                                          className="group w-full h-56 sm:h-60 md:h-64 [perspective:1000px] cursor-pointer"
                                          initial={{ y: 40, opacity: 0 }}
                                          whileInView={{ y: 0, opacity: 1 }}
                                          viewport={{ once: true }}
                                          transition={{ delay: 0.15, type: "spring", stiffness: 240, damping: 60, mass: 1 }}
                                          onClick={() => toggleFlip('launch')}
                                        >
                                          <div className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-2xl sm:rounded-3xl ${
                                            flippedCards['launch'] ? '[transform:rotateY(180deg)]' : ''
                                          }`}>
                                            <div className="absolute w-full h-full [backface-visibility:hidden] flex flex-col items-center justify-center rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur border border-white/10 p-4 sm:p-5 md:p-6">
                                              <div className="mx-auto size-12 sm:size-14 md:size-16 rounded-full bg-gradient-to-br from-indigo-600 to-violet-500 p-0.5">
                                                <div className="size-full rounded-full bg-slate-900 text-white flex items-center justify-center">
                                                  <CheckCircle2 className="size-6 sm:size-6 md:size-7" />
                                                </div>
                                              </div>
                                              <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-white text-center leading-relaxed">Final Approval & Launch</h3>
                                              <p className="mt-1.5 sm:mt-2 text-slate-300 text-xs sm:text-sm max-w-xs mx-auto text-center leading-relaxed">Launching with confidence and ongoing quality assurance.</p>
                                            </div>
                                            <div className="absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center rounded-2xl sm:rounded-3xl bg-indigo-600 text-white [transform:rotateY(180deg)] p-3 sm:p-4 text-center">
                                              <p className="text-xs sm:text-sm text-left leading-relaxed"> After resolving defects and securing stakeholder approvals, the product is deployed with confidence, backed by post-launch quality monitoring.</p>
                                            </div>
                                          </div>
                                        </motion.div>
                                      </div>
                                       <div className="hidden lg:flex items-stretch gap-2">
                                           </div>
                                         </div>
                                     </div>
                                             
                         </section>
                                 
             {/* Next about */}
  
          
                 <section className="flex flex-col items-center px-4 sm:px-6 lg:px-8" id="about">
                   <SectionTitle
                     title="Why choose Nexvity?"
                     description="Your partner in AI driven innovation, Software development, and UX design for modern businesses."
                   />
                   <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 sm:mt-14 md:mt-16 lg:mt-18 gap-3 sm:gap-4 md:gap-2">
                     {sectionData.map((data, index) => (
                       <motion.div
                         key={index}
                         className={`flex flex-col ${data.className}`}
                         initial={{ y: 150, opacity: 0 }}
                         whileInView={{ y: 0, opacity: 1 }}
                         viewport={{ once: true }}
                         transition={{
                           delay: index * 0.1,
                           type: "spring",
                           stiffness: 320,
                           damping: 70,
                           mass: 1,
                         }}
                       >
                         <div className="size-16 sm:size-18 md:size-20 p-2 rounded">
                           <img src={data.image} alt="" />
                                           
                         </div>
                         <div className="mt-4 sm:mt-5 space-y-1.5 sm:space-y-2">
                           <h3 className="text-sm sm:text-base font-medium text-slate-200 leading-relaxed">
                             {data.title}
                           </h3>
                           <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                             {data.description}
                           </p>
                         </div>
                       </motion.div>
                     ))}
                   </div>
                 </section>
             </>
             )
  
  }
  
  