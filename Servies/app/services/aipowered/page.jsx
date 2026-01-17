'use client';
import SectionTitle from "@/components/section-title";
import { motion } from "framer-motion";
import { ArrowRight, ClipboardList, PencilRuler, Code2, CheckCircle2, Rocket } from "lucide-react";
import { useState } from "react";

export default function AiPoweredSolutions() {

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
   const sectionData = [
                  {
                    title: "Advanced AI Expertise",
                    description: " We leverage modern AI and data technologies to build intelligent, adaptive systems.",
                    image:"/assets/a_abt_1.png",
                    className:
                      "py-10 border-b border-slate-700 md:border-r md:border-b md:px-10 lg:border-b-0",
                  },
                  {
                    title: "Strong Data Foundations",
                    description:
                      " Clean, structured, and reliable data powers every solution we deliver.",
                    image: "/assets/a_abt_2.png",
                    className:
                      "py-10 border-b border-slate-700 md:border-b md:px-10 lg:border-r lg:border-b-0",
                  },
                  {
                    title: "Continuous Model Evolution",
                    description:
                      " We refine and enhance models to maintain accuracy and performance in real-world conditions.",
                    image: "/assets/a_abt_3.png",
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
                           <stop offset=".63" stopColor="#e49393ff" stopOpacity="0" />
                           <stop offset="1" stopColor="#e49393ff" />
                       </radialGradient>
                   </defs>
               </motion.svg>
               <motion.a className="flex items-center mt-36 sm:mt-40 md:mt-48 gap-2 border border-slate-600 text-gray-50 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base"
                   initial={{ y: -20, opacity: 0 }}
                   whileInView={{ y: 0, opacity: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                   href="/#contact"
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
                AI-Powered Solutions
      
               </motion.h1>
               <motion.p className="text-center text-sm sm:text-base max-w-xs sm:max-w-md md:max-w-lg mt-2 sm:mt-3 leading-relaxed"
                   initial={{ y: 50, opacity: 0 }}
                   whileInView={{ y: 0, opacity: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
               >
                  {/* sub heading */}
                 We build AI driven solutions that automate workflows, enhance decision making, and unlock new efficiencies across your organization.
               </motion.p>
               <motion.div className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8"
                   initial={{ y: 50, opacity: 0 }}
                   whileInView={{ y: 0, opacity: 1 }}
                   viewport={{ once: true }}
                   transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
               >
               </motion.div>
               
           </section>
   
   <section className="mt-16 sm:mt-20 md:mt-24 lg:mt-52 relative px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center mx-auto">Overview</h1>
                  <p className="text-xs sm:text-sm text-white text-center mt-2 max-w-xs sm:max-w-md mx-auto leading-relaxed">
                      {/* sub heading */}
                  Unlocking Smarter Decisions and Automation Through AI Innovation
   
                  </p>
                  <section className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10 mt-8 sm:mt-10 md:mt-12 lg:mt-15">
                      <div className="relative shadow-xl sm:shadow-2xl shadow-indigo-600/40 rounded-2xl sm:rounded-3xl overflow-hidden shrink-0">
                          <img className="w-full max-w-xs sm:max-w-sm md:max-w-md object-cover rounded-2xl sm:rounded-3xl"
                              src="/assets/aps.jpeg"
                              alt="" />
                        
                      </div>
                      <div className="text-xs sm:text-sm text-slate-600 max-w-xs sm:max-w-md lg:max-w-lg">
                          <h1 className="text-xl sm:text-2xl uppercase font-semibold text-white">Our AI Solutions</h1>
                          <div className="w-32 sm:w-40 h-[2px] sm:h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]"></div>
                          <p className="mt-4 sm:mt-6 md:mt-8 text-white leading-relaxed">At Nexvity, we deliver AI-powered solutions that help businesses automate processes, analyze data intelligently, and make faster, smarter decisions. Our tailored AI technologies enhance efficiency, accuracy, and overall performance across operations.</p>
                          <p className="mt-3 sm:mt-4 text-white leading-relaxed">This philosophy results in products that are aesthetically refined, functionally robust, and perfectly in tune with your brand and market, creating experiences users trust and enjoy.</p>
                          <p className="mt-3 sm:mt-4 text-white leading-relaxed">We ensure that every AI-driven solution we deliver is:</p>
                           <ul className="list-disc list-inside mt-2 text-white space-y-1">
                              <li>Powered by advanced analytics and learning models</li>
                              <li>Designed for accuracy, security, and performance</li>
                              <li>Built to scale with evolving business needs</li>
                              <li>Integrated smoothly into existing digital ecosystems</li>
                           </ul>
                           <p className="mt-3 sm:mt-4 text-white leading-relaxed">We see AI as a tool that transforms data into smarter decisions and outcomes.</p>
                               <div className="w-full max-w-[130px] h-[3px] sm:h-[5px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF] mt-6 sm:mt-8"></div>
                           
                      </div>
                  </section>
      
              <section>
                   <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 mt-8 sm:mt-10 md:mt-12">
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
                                  src="/assets/aps_1.jpeg"
                                  alt="City skyline"
                                  className="w-full h-56 sm:h-64 md:h-80 object-cover"
                              />
                              <h3 className="mt-3 sm:mt-4 px-4 sm:px-5 md:px-6 pt-3 sm:pt-4 mb-1 text-lg sm:text-xl md:text-2xl font-semibold text-white">
                                 AI Strategy & UseCase Design
                              </h3>
                              <p className="text-sm sm:text-base px-4 sm:px-5 md:px-6 pb-6 sm:pb-8 text-slate-300 leading-relaxed">
                                 We identify high-impact opportunities where AI can solve real business challenges. Each use case is carefully designed around your goals, data readiness, and operational needs. This ensures AI initiatives are practical, measurable, and scalable.
   
                              </p>
                          </div>
     
                          <div
                              className="rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer bg-white/5 h-full min-h-[320px] sm:min-h-[360px] border border-indigo-400/40"
                              onMouseMove={handleMoveB}
                              onMouseLeave={() => setTiltB({ x: 0, y: 0 })}
                              style={{ transform: `perspective(1000px) rotateX(${tiltB.x}deg) rotateY(${tiltB.y}deg)` }}
                          >
                              <img
                                  src="/assets/aps_2.jpeg"
                                  alt="Landscape"
                                  className="w-full h-56 sm:h-64 md:h-80 object-cover"
                              />
                              <h3 className="mt-3 sm:mt-4 px-4 sm:px-5 md:px-6 pt-3 sm:pt-4 mb-1 text-lg sm:text-xl md:text-2xl font-semibold text-white">
                                  Data Driven Intelligence Models
                              </h3>
                              <p className="text-sm sm:text-base px-4 sm:px-5 md:px-6 pb-6 sm:pb-8 text-slate-300 leading-relaxed">
                                 We build intelligent models powered by clean, structured, and meaningful data. Our approach focuses on accuracy, adaptability, and performance across real-world scenarios. This enables smarter insights and reliable decision-making.
                              </p>
                          </div>
                          <div
                              className="rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer bg-white/5 h-full min-h-[320px] sm:min-h-[360px] border border-indigo-400/40"
                              onMouseMove={handleMoveA}
                              onMouseLeave={() => setTiltA({ x: 0, y: 0 })}
                              style={{ transform: `perspective(1000px) rotateX(${tiltA.x}deg) rotateY(${tiltA.y}deg)` }}
                          >
                              <img
                                  src="/assets/aps_3.jpeg"
                                  alt="City skyline"
                                  className="w-full h-56 sm:h-64 md:h-80 object-cover"
                              />
                              <h3 className="mt-3 sm:mt-4 px-4 sm:px-5 md:px-6 pt-3 sm:pt-4 mb-1 text-lg sm:text-xl md:text-2xl font-semibold text-white">
                                Predictive Analytics & Automation
   
                              </h3>
                              <p className="text-sm sm:text-base px-4 sm:px-5 md:px-6 pb-6 sm:pb-8 text-slate-300 leading-relaxed">
                               We leverage predictive models to forecast trends, reduce risks, and automate critical processes. These insights help businesses act proactively, improve efficiency, and stay ahead of change. Automation is designed to enhance speed without sacrificing control.
   
                              </p>
                          </div>
   <div
                              className="rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer bg-white/5 h-full min-h-[320px] sm:min-h-[360px] border border-indigo-400/40"
                              onMouseMove={handleMoveA}
                              onMouseLeave={() => setTiltA({ x: 0, y: 0 })}
                              style={{ transform: `perspective(1000px) rotateX(${tiltA.x}deg) rotateY(${tiltA.y}deg)` }}
                          >
                              <img
                                  src="/assets/aps_4.jpeg"
                                  alt="City skyline"
                                  className="w-full h-56 sm:h-64 md:h-80 object-cover"
                              />
                              <h3 className="mt-3 sm:mt-4 px-4 sm:px-5 md:px-6 pt-3 sm:pt-4 mb-1 text-lg sm:text-xl md:text-2xl font-semibold text-white">
                               Human Centered AI Integration
   
   
                              </h3>
                              <p className="text-sm sm:text-base px-4 sm:px-5 md:px-6 pb-6 sm:pb-8 text-slate-300 leading-relaxed">
                                Our AI solutions are built with users in mind, ensuring clarity, trust, and ease of adoption. We design AI to support human decision-making, not replace it. This results in intuitive systems that fit seamlessly into everyday workflows.
   
                              </p>
                          </div>
     
                      </div>
                  </div>
                  </section>
                 <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 mt-12 sm:mt-16 md:mt-20 relative">
                     <SectionTitle title="Workflow of SDLC" />
                  <div className="hidden lg:block absolute left-0 right-0 top-24 h-px bg-gradient-to-r from-transparent via-slate-700/70 to-transparent"></div>
                 <div className="mt-8 sm:mt-10 md:mt-12">
                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
                     <motion.div
                       className="group w-full h-56 sm:h-60 md:h-64 [perspective:1000px] cursor-pointer"
                       initial={{ y: 40, opacity: 0 }}
                       whileInView={{ y: 0, opacity: 1 }}
                       viewport={{ once: true }}
                       transition={{ type: "spring", stiffness: 240, damping: 60, mass: 1 }}
                       onClick={() => toggleFlip('vision')}
                     >
                       <div className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-2xl sm:rounded-3xl ${
                         flippedCards['vision'] ? '[transform:rotateY(180deg)]' : ''
                       }`}>
                         <div className="absolute w-full h-full [backface-visibility:hidden] flex flex-col items-center justify-center rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur border border-white/10 p-4 sm:p-5 md:p-6">
                           <div className="mx-auto size-12 sm:size-14 md:size-16 rounded-full bg-gradient-to-br from-indigo-600 to-violet-500 p-0.5">
                             <div className="size-full rounded-full bg-slate-900 text-white flex items-center justify-center">
                               <ClipboardList className="size-5 sm:size-6 md:size-7" />
                             </div>
                           </div>
                           <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-center text-white">Vision</h3>
                           <p className="mt-2 text-slate-300 text-xs sm:text-sm max-w-xs mx-auto text-center leading-relaxed"> Shaping a Clear AI Vision Aligned with Real Business Goals</p>
                         </div>
                         <div className="absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center rounded-2xl sm:rounded-3xl bg-indigo-600 text-white [transform:rotateY(180deg)] p-3 sm:p-4 text-center">
                           <p className="text-xs sm:text-sm text-left leading-relaxed"> We identify business goals, challenges, and opportunities where AI can create real value. This step ensures clarity, alignment, and a focused roadmap before development begins.</p>
                         </div>
                       </div>
                     </motion.div>
                     <motion.div
                       className="group w-full h-56 sm:h-60 md:h-64 [perspective:1000px] cursor-pointer"
                       initial={{ y: 40, opacity: 0 }}
                       whileInView={{ y: 0, opacity: 1 }}
                       viewport={{ once: true }}
                       transition={{ delay: 0.05, type: "spring", stiffness: 240, damping: 60, mass: 1 }}
                       onClick={() => toggleFlip('data')}
                     >
                       <div className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-2xl sm:rounded-3xl ${
                         flippedCards['data'] ? '[transform:rotateY(180deg)]' : ''
                       }`}>
                         <div className="absolute w-full h-full [backface-visibility:hidden] flex flex-col items-center justify-center rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur border border-white/10 p-4 sm:p-5 md:p-6">
                           <div className="mx-auto size-12 sm:size-14 md:size-16 rounded-full bg-gradient-to-br from-indigo-600 to-violet-500 p-0.5">
                             <div className="size-full rounded-full bg-slate-900 text-white flex items-center justify-center">
                               <PencilRuler className="size-5 sm:size-6 md:size-7" />
                             </div>
                           </div>
                           <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-white text-center">Data Engineering</h3>
                           <p className="mt-2 text-slate-300 text-xs sm:text-sm max-w-xs mx-auto text-center leading-relaxed">Building a Reliable Data Foundation That Powers Intelligent Decisions</p>
                         </div>
                         <div className="absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center rounded-2xl sm:rounded-3xl bg-indigo-600 text-white [transform:rotateY(180deg)] p-3 sm:p-4 text-center">
                           <p className="text-xs sm:text-sm text-left leading-relaxed"> We collect, clean, and structure data to ensure accuracy and reliability. A solid data foundation enables smarter models, better predictions, and consistent performance.</p>
                         </div>
                       </div>
                     </motion.div>
                     <motion.div
                       className="group w-full h-56 sm:h-60 md:h-64 [perspective:1000px] cursor-pointer"
                       initial={{ y: 40, opacity: 0 }}
                       whileInView={{ y: 0, opacity: 1 }}
                       viewport={{ once: true }}
                       transition={{ delay: 0.1, type: "spring", stiffness: 240, damping: 60, mass: 1 }}
                       onClick={() => toggleFlip('modeling')}
                     >
                       <div className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-2xl sm:rounded-3xl ${
                         flippedCards['modeling'] ? '[transform:rotateY(180deg)]' : ''
                       }`}>
                         <div className="absolute w-full h-full [backface-visibility:hidden] flex flex-col items-center justify-center rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur border border-white/10 p-4 sm:p-5 md:p-6">
                           <div className="mx-auto size-12 sm:size-14 md:size-16 rounded-full bg-gradient-to-br from-indigo-600 to-violet-500 p-0.5">
                             <div className="size-full rounded-full bg-slate-900 text-white flex items-center justify-center">
                               <Code2 className="size-5 sm:size-6 md:size-7" />
                             </div>
                           </div>
                           <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-white text-center"> AI Modeling</h3>
                           <p className="mt-2 text-slate-300 text-xs sm:text-sm max-w-xs mx-auto text-center leading-relaxed"> Designing Intelligent AI Models Tailored to Your Unique Use Cases</p>
                         </div>
                         <div className="absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center rounded-2xl sm:rounded-3xl bg-indigo-600 text-white [transform:rotateY(180deg)] p-3 sm:p-4 text-center">
                           <p className="text-xs sm:text-sm text-left leading-relaxed"> We design and train AI models tailored to your specific use cases. Each model is optimized for scalability, accuracy, and seamless integration into your systems.</p>
                         </div>
                       </div>
                     </motion.div>
                     <motion.div
                       className="group w-full h-56 sm:h-60 md:h-64 [perspective:1000px] cursor-pointer"
                       initial={{ y: 40, opacity: 0 }}
                       whileInView={{ y: 0, opacity: 1 }}
                       viewport={{ once: true }}
                       transition={{ delay: 0.15, type: "spring", stiffness: 240, damping: 60, mass: 1 }}
                       onClick={() => toggleFlip('optimize')}
                     >
                       <div className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-2xl sm:rounded-3xl ${
                         flippedCards['optimize'] ? '[transform:rotateY(180deg)]' : ''
                       }`}>
                         <div className="absolute w-full h-full [backface-visibility:hidden] flex flex-col items-center justify-center rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur border border-white/10 p-4 sm:p-5 md:p-6">
                           <div className="mx-auto size-12 sm:size-14 md:size-16 rounded-full bg-gradient-to-br from-indigo-600 to-violet-500 p-0.5">
                             <div className="size-full rounded-full bg-slate-900 text-white flex items-center justify-center">
                               <CheckCircle2 className="size-5 sm:size-6 md:size-7" />
                             </div>
                           </div>
                           <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-white text-center">Optimize Continuously</h3>
                           <p className="mt-2 text-slate-300 text-xs sm:text-sm max-w-xs mx-auto text-center leading-relaxed">Continuously Improving AI Performance to Maximize Long-Term Impact</p>
                         </div>
                         <div className="absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center rounded-2xl sm:rounded-3xl bg-indigo-600 text-white [transform:rotateY(180deg)] p-3 sm:p-4 text-center">
                           <p className="text-xs sm:text-sm text-left leading-relaxed"> We monitor, test, and refine AI models using real-world data and feedback. Continuous optimization ensures your AI evolves with changing business needs.</p>
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
                       <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 sm:mt-16 md:mt-18 gap-3 sm:gap-4 md:gap-5">
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
                               <img src={data.image} alt="" className="w-full h-full object-contain" />
                                                   
                             </div>
                             <div className="mt-4 sm:mt-5 space-y-2">
                               <h3 className="text-sm sm:text-base font-medium text-slate-200">
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
   
   