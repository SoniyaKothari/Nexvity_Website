"use client";
import SectionTitle from "@/components/section-title";
import { motion } from "framer-motion";
import { ArrowRight, ClipboardList, PencilRuler, Code2, CheckCircle2, Rocket } from "lucide-react";
import { useState } from "react";

export default function DigitalDetails() {

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
                 title: "Stay Ahead in the Digital Race",
                 description: "  Agile strategies and modern technologies help your business adapt faster and lead confidently.",
                 image:"/assets/d_abt_1.png",
                 className:
                   "py-10 border-b border-slate-700 md:border-r md:border-b md:px-10 lg:border-b-0",
               },
               {
                 title: "Your Digital Journey, Perfectly Guided",
                 description:
                   " From ideation to execution, we ensure a smooth, scalable, and result-driven digital transformation.",
                 image: "/assets/d_abt_2.png",
                 className:
                   "py-10 border-b border-slate-700 md:border-b md:px-10 lg:border-r lg:border-b-0",
               },
               {
                 title: "Your Partner in Digital Excellence",
                 description:
                   " A trusted consulting partner focused on aligning technology with your business goals.",
                 image: "/assets/d.png",
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
                        <stop offset=".63" stopColor="#e7c0dbff" stopOpacity="0" />
                        <stop offset="1" stopColor="#e7c0dbff" />
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
              Digital Consulting Services

            </motion.h1>
            <motion.p className="text-center text-sm sm:text-base max-w-xs sm:max-w-md md:max-w-lg mt-2 sm:mt-3 leading-relaxed"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
               {/* sub heading */}
               We help you define a clear digital vision, align technology with business goals, and plan scalable solutions that deliver long-term value.

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
              Digital Consulting Focused on Clarity, Performance, and Long Term Competitive Advantage.
            
            </p>
            <section className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10 mt-8 sm:mt-10 md:mt-12 lg:mt-15">
                <div className="relative shadow-xl sm:shadow-2xl shadow-indigo-600/40 rounded-2xl sm:rounded-3xl overflow-hidden shrink-0">
                    <img className="w-full max-w-xs sm:max-w-sm md:max-w-md object-cover rounded-2xl sm:rounded-3xl"
                        src="/assets/digitaldetails.jpeg"
                        alt="" />
                
                </div>
                <div className="text-xs sm:text-sm text-slate-600 max-w-xs sm:max-w-md lg:max-w-lg">
                    <h1 className="text-xl sm:text-2xl uppercase font-semibold text-white">Our Digital Consulting </h1>
                    <div className="w-32 sm:w-40 h-[2px] sm:h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]"></div>
                    <p className="mt-4 sm:mt-6 md:mt-8 text-white leading-relaxed">At NEXVITY, we simplify digital complexity by aligning strategy, technology, and user needs. Our Digital Consulting Services help businesses make informed decisions and drive measurable outcomes.</p>
                    <p className="mt-3 sm:mt-4 text-white leading-relaxed">We assess your digital ecosystem, identify opportunities, and deliver tailored roadmaps that support growth, transformation, and long-term scalability.</p>
                    <p className="mt-3 sm:mt-4 text-white leading-relaxed">Our approach ensures that every digital decision is:</p>
                     <ul className="list-disc list-inside mt-2 text-white space-y-1">
                        <li>Purpose-driven and goal oriented</li>
                        <li>Strategically focused on business outcomes</li>
                        <li>Flexible and future-ready</li>
                        <li>Built to scale with evolving needs</li>
                     </ul>
                     <p className="mt-3 sm:mt-4 text-white leading-relaxed">We believe digital consulting is the foundation of confident, forward-looking transformation.</p>
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
                               src="/assets/dd_1.jpeg"
                               alt="City skyline"
                               className="w-full h-48 sm:h-56 md:h-70 object-cover"
                           />
                           <h3 className="mt-3 sm:mt-4 px-4 sm:px-5 md:px-6 pt-3 sm:pt-4 mb-1 text-lg sm:text-xl md:text-2xl font-semibold text-white">
                              Digital Transformation Strategy
                           </h3>
                           <p className="text-sm sm:text-base px-4 sm:px-5 md:px-6 pb-6 sm:pb-8 text-slate-300 leading-relaxed">
                                We help businesses embrace digital innovation by creating a comprehensive transformation roadmap. From integrating cutting-edge technologies to reimagining customer experiences, our strategy ensures efficiency, scalability, and long-term growth. We guide organizations to adapt seamlessly in a rapidly evolving digital landscape.

                           </p>
                       </div>

                       <div
                           className="rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer bg-white/5 h-full min-h-[320px] sm:min-h-[360px] border border-indigo-400/40"
                           onMouseMove={handleMoveB}
                           onMouseLeave={() => setTiltB({ x: 0, y: 0 })}
                           style={{ transform: `perspective(1000px) rotateX(${tiltB.x}deg) rotateY(${tiltB.y}deg)` }}
                       >
                           <img
                               src="/assets/dd_2.jpeg"
                               alt="Landscape"
                               className="w-full h-48 sm:h-56 md:h-70 object-cover"
                           />
                           <h3 className="mt-3 sm:mt-4 px-4 sm:px-5 md:px-6 pt-3 sm:pt-4 mb-1 text-lg sm:text-xl md:text-2xl font-semibold text-white">
                              Market & Competitor Analysis

                           </h3>
                           <p className="text-sm sm:text-base px-4 sm:px-5 md:px-6 pb-6 sm:pb-8 text-slate-300 leading-relaxed">
                                Gain a competitive edge with our in-depth market and competitor analysis. We study industry trends, consumer behavior, and competitor strategies to uncover opportunities and threats. Our insights empower informed decision-making, helping you position your brand effectively and capture market share.

                           </p>
                       </div>
                       
                       <div
                           className="rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer bg-white/5 h-full min-h-[320px] sm:min-h-[360px] border border-indigo-400/40"
                           onMouseMove={handleMoveB}
                           onMouseLeave={() => setTiltB({ x: 0, y: 0 })}
                           style={{ transform: `perspective(1000px) rotateX(${tiltB.x}deg) rotateY(${tiltB.y}deg)` }}
                       >
                           <img
                               src="/assets/dd_3.jpeg"
                               alt="Landscape"
                               className="w-full h-56 sm:h-64 md:h-80 object-cover"
                           />
                           <h3 className="mt-3 sm:mt-4 px-4 sm:px-5 md:px-6 pt-3 sm:pt-4 mb-1 text-lg sm:text-xl md:text-2xl font-semibold text-white">
                               Digital Marketing Strategy

                           </h3>
                           <p className="text-sm sm:text-base px-4 sm:px-5 md:px-6 pb-6 sm:pb-8 text-slate-300 leading-relaxed">
                               Our digital marketing strategy focuses on driving traffic, engagement, and conversions across all online channels. From optimizing search engine visibility to managing paid campaigns and social media presence, we ensure your brand reaches the right audience at the right time. Data-driven tactics deliver measurable results and ROI.

                           </p>
                       </div>
                        
                       <div
                           className="rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer bg-white/5 h-full min-h-[320px] sm:min-h-[360px] border border-indigo-400/40"
                           onMouseMove={handleMoveB}
                           onMouseLeave={() => setTiltB({ x: 0, y: 0 })}
                           style={{ transform: `perspective(1000px) rotateX(${tiltB.x}deg) rotateY(${tiltB.y}deg)` }}
                       >
                           <img
                               src="/assets/dd_4.jpeg"
                               alt="Landscape"
                               className="w-full h-56 sm:h-64 md:h-80 object-cover"
                           />
                           <h3 className="mt-3 sm:mt-4 px-4 sm:px-5 md:px-6 pt-3 sm:pt-4 mb-1 text-lg sm:text-xl md:text-2xl font-semibold text-white">
                                Marketing Automation Advisory

                           </h3>
                           <p className="text-sm sm:text-base px-4 sm:px-5 md:px-6 pb-6 sm:pb-8 text-slate-300 leading-relaxed">
                               Streamline your marketing processes and enhance customer engagement through automation. We help identify opportunities, implement smart tools, and design workflows that save time while nurturing leads effectively. Automation allows for personalized communication and optimized campaign performance.

                           </p>
                       </div>
                      
                       
                       <div
                           className="rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer bg-white/5 h-full min-h-[320px] sm:min-h-[360px] border border-indigo-400/40"
                           onMouseMove={handleMoveB}
                           onMouseLeave={() => setTiltB({ x: 0, y: 0 })}
                           style={{ transform: `perspective(1000px) rotateX(${tiltB.x}deg) rotateY(${tiltB.y}deg)` }}
                       >
                           <img
                               src="/assets/dd_5.jpeg"
                               alt="Landscape"
                               className="w-full h-56 sm:h-64 md:h-80 object-cover"
                           />
                           <h3 className="mt-3 sm:mt-4 px-4 sm:px-5 md:px-6 pt-3 sm:pt-4 mb-1 text-lg sm:text-xl md:text-2xl font-semibold text-white">
                             IT & Technology Roadmap Consulting

                           </h3>
                           <p className="text-sm sm:text-base px-4 sm:px-5 md:px-6 pb-6 sm:pb-8 text-slate-300 leading-relaxed">
                               We provide expert guidance to align your IT infrastructure with business goals. Our consultants design technology roadmaps that optimize operations, reduce costs, and enable innovation. From cloud adoption to system integration, we ensure your IT strategy supports sustainable growth.

                           </p>
                       </div>
                      
                       
                       <div
                           className="rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer bg-white/5 h-full min-h-[320px] sm:min-h-[360px] border border-indigo-400/40"
                           onMouseMove={handleMoveB}
                           onMouseLeave={() => setTiltB({ x: 0, y: 0 })}
                           style={{ transform: `perspective(1000px) rotateX(${tiltB.x}deg) rotateY(${tiltB.y}deg)` }}
                       >
                           <img
                               src="/assets/dd_6.jpeg"
                               alt="Landscape"
                               className="w-full h-56 sm:h-64 md:h-80 object-cover"
                           />
                           <h3 className="mt-3 sm:mt-4 px-4 sm:px-5 md:px-6 pt-3 sm:pt-4 mb-1 text-lg sm:text-xl md:text-2xl font-semibold text-white">
                               Business Analysis & Optimization
                           </h3>
                           <p className="text-sm sm:text-base px-4 sm:px-5 md:px-6 pb-6 sm:pb-8 text-slate-300 leading-relaxed">
                              Our team evaluates your current workflows to identify bottlenecks and inefficiencies. Through process mapping, reengineering, and technology adoption, we enhance productivity, reduce costs, and improve customer satisfaction. Optimized processes drive agility and long-term competitiveness.
                           </p>
                       </div>
                   </div>
               </div>
               </section>
      {/*  SDLC workflow */}
     <section>
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
                    onClick={() => toggleFlip('explore')}
                  >
                    <div className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-2xl sm:rounded-3xl ${
                      flippedCards['explore'] ? '[transform:rotateY(180deg)]' : ''
                    }`}>
                      <div className="absolute w-full h-full [backface-visibility:hidden] flex flex-col items-center justify-center rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur border border-white/10 p-4 sm:p-5 md:p-6">
                        <div className="mx-auto size-12 sm:size-14 md:size-16 rounded-full bg-gradient-to-br from-indigo-600 to-violet-500 p-0.5">
                          <div className="size-full rounded-full bg-slate-900 text-white flex items-center justify-center">
                            <ClipboardList className="size-5 sm:size-6 md:size-7" />
                          </div>
                        </div>
                        <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-center text-white">Explore</h3>
                        <p className="mt-2 text-slate-300 text-xs sm:text-sm max-w-xs mx-auto text-center leading-relaxed">Conduct deep research into business needs, users, and competitors.</p>
                      </div>
                      <div className="absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center rounded-2xl sm:rounded-3xl bg-[#2A5298] text-white [transform:rotateY(180deg)] p-3 sm:p-4 text-center">
                        <p className="text-xs sm:text-sm text-left leading-relaxed"> We deeply analyze your business goals, market landscape, and existing digital capabilities to uncover challenges and opportunities. This discovery phase builds a strong foundation for informed decision-making and strategic direction.</p>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    className="group w-full h-56 sm:h-60 md:h-64 [perspective:1000px] cursor-pointer"
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05, type: "spring", stiffness: 240, damping: 60, mass: 1 }}
                    onClick={() => toggleFlip('align')}
                  >
                    <div className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-2xl sm:rounded-3xl ${
                      flippedCards['align'] ? '[transform:rotateY(180deg)]' : ''
                    }`}>
                      <div className="absolute w-full h-full [backface-visibility:hidden] flex flex-col items-center justify-center rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur border border-white/10 p-4 sm:p-5 md:p-6">
                        <div className="mx-auto size-12 sm:size-14 md:size-16 rounded-full bg-gradient-to-br from-indigo-600 to-violet-500 p-0.5">
                          <div className="size-full rounded-full bg-slate-900 text-white flex items-center justify-center">
                            <PencilRuler className="size-5 sm:size-6 md:size-7" />
                          </div>
                        </div>
                        <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-white text-center">Align</h3>
                        <p className="mt-2 text-slate-300 text-xs sm:text-sm max-w-xs mx-auto text-center leading-relaxed">Align digital strategy with business objectives and growth priorities.</p>
                      </div>
                      <div className="absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center rounded-2xl sm:rounded-3xl bg-[#7C397D] text-white [transform:rotateY(180deg)] p-3 sm:p-4 text-center">
                        <p className="text-xs sm:text-sm text-left leading-relaxed">Our experts align digital strategies with your business objectives, ensuring technology, processes, and people work together seamlessly. We define a clear roadmap that balances innovation, feasibility, and long-term value.</p>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    className="group w-full h-56 sm:h-60 md:h-64 [perspective:1000px] cursor-pointer"
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, type: "spring", stiffness: 240, damping: 60, mass: 1 }}
                    onClick={() => toggleFlip('enable')}
                  >
                    <div className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-2xl sm:rounded-3xl ${
                      flippedCards['enable'] ? '[transform:rotateY(180deg)]' : ''
                    }`}>
                      <div className="absolute w-full h-full [backface-visibility:hidden] flex flex-col items-center justify-center rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur border border-white/10 p-4 sm:p-5 md:p-6">
                        <div className="mx-auto size-12 sm:size-14 md:size-16 rounded-full bg-gradient-to-br from-indigo-600 to-violet-500 p-0.5">
                          <div className="size-full rounded-full bg-slate-900 text-white flex items-center justify-center">
                            <Code2 className="size-5 sm:size-6 md:size-7" />
                          </div>
                        </div>
                        <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-white text-center"> Enable </h3>
                        <p className="mt-2 text-slate-300 text-xs sm:text-sm max-w-xs mx-auto text-center leading-relaxed">Prepare teams and platforms with the right tools and frameworks.</p>
                      </div>
                      <div className="absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center rounded-2xl sm:rounded-3xl bg-[#CC4771] text-white [transform:rotateY(180deg)] p-3 sm:p-4 text-center">
                        <p className="text-xs sm:text-sm text-left leading-relaxed"> We activate your digital vision by integrating intelligent technologies, automation, and data-driven systems. Our approach ensures your teams are equipped with smart, future-ready solutions that enhance productivity and decision-making.</p>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    className="group w-full h-56 sm:h-60 md:h-64 [perspective:1000px] cursor-pointer"
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15, type: "spring", stiffness: 240, damping: 60, mass: 1 }}
                    onClick={() => toggleFlip('grow')}
                  >
                    <div className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-2xl sm:rounded-3xl ${
                      flippedCards['grow'] ? '[transform:rotateY(180deg)]' : ''
                    }`}>
                      <div className="absolute w-full h-full [backface-visibility:hidden] flex flex-col items-center justify-center rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur border border-white/10 p-4 sm:p-5 md:p-6">
                        <div className="mx-auto size-12 sm:size-14 md:size-16 rounded-full bg-gradient-to-br from-indigo-600 to-violet-500 p-0.5">
                          <div className="size-full rounded-full bg-slate-900 text-white flex items-center justify-center">
                            <CheckCircle2 className="size-5 sm:size-6 md:size-7" />
                          </div>
                        </div>
                        <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-white text-center">Grow</h3>
                        <p className="mt-2 text-slate-300 text-xs sm:text-sm max-w-xs mx-auto text-center leading-relaxed"> Improve performance and scale with continuous optimization.</p>
                      </div>
                      <div className="absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center rounded-2xl sm:rounded-3xl bg-[#EEA552] text-white [transform:rotateY(180deg)] p-3 sm:p-4 text-center">
                        <p className="text-xs sm:text-sm text-left leading-relaxed"> By leveraging AI insights, predictive analytics, and continuous innovation, we help your business evolve and scale sustainably. This phase focuses on maximizing impact, accelerating growth, and future-proofing your digital ecosystem.</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
            </div>
            </div>
            </section>
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

