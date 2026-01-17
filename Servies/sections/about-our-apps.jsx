import SectionTitle from "@/components/section-title";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * CountUp Component for animated numbers
 */
const CountUp = ({ end, duration = 2000, isPercentage = false, suffix = '', start = false }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const startTimeRef = useRef(null);
  const animationFrameRef = useRef(null);

  // Easing function for smooth animation
  const easeOutExpo = (t) => {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  };

  useEffect(() => {
    if (!start) return;

    countRef.current = 0;
    startTimeRef.current = null;

    const animate = (currentTime) => {
      if (!startTimeRef.current) {
        startTimeRef.current = currentTime;
      }

      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);
      const currentCount = Math.floor(easedProgress * end);
      
      countRef.current = currentCount;
      setCount(currentCount);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [end, duration, start]);

  return (
    <span className="tabular-nums">
      {count}
      {suffix}
      {isPercentage && '%'}
    </span>
  );
};


export default function AboutOurApps() {
    const [startCounting, setStartCounting] = useState(false);
    const statsRef = useRef(null);
    
    const sectionData = [
        {
            title: "Systems Over Shortcuts",
            description: "We architect digital solutions with long-term performance in mind.Every decision is made to support scalability, security, and future adaptability    not temporary wins",
            image: "/assets/abt_01.png",
            className: "py-10 border-b border-slate-700 md:border-r md:border-b md:px-10 lg:border-b-0"
        },
        {
            title: "Insight-Led Solutions",
            description: "Every project begins with deep analysis, not assumptions.We uncover risks, opportunities, and hidden potential before shaping a solution that truly fits your business.",
            image: "/assets/abt_2.jpeg",
            className: "py-10 border-b border-slate-700 md:border-b md:px-10 lg:border-r lg:border-b-0"
        },
        {
            title: "Data-Informed Decisions",
            description: "Every recommendation is backed by insight, not instinct.We use analytics, benchmarks, and performance signals to guide smarter digital outcomes.",
            image: "/assets/abt_3.png",
            className: "py-10 border-b border-slate-700 md:border-r md:border-b-0 md:px-10 lg:border-b-0"
        },
       {
            title: "Clarity Through Strategy",
            description: "We simplify complex digital challenges through structured thinking. Our strategic approach ensures every solution is purposeful, measurable, and aligned with your goals..",
            image: "/assets/abt_4.png",
            className: "py-10 border-b border-slate-700 md:border-r md:border-b md:px-10 lg:border-b-0"
        },
         {
            title: "Measured Innovation",
            description: "Innovation is only valuable when it delivers results.We balance creativity with practicality to ensure every idea translates into real business impact.",
            image: "assets/dm.png",
            className: "py-10 border-b border-slate-700 md:border-r md:border-b md:px-10 lg:border-b-0"
        },
   
       
    ];
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = sectionData.length;
    const [isTransitioning, setIsTransitioning] = useState(true);
    const cardData = sectionData; // alias for clarity with the provided snippet

    // Auto-advance slider with infinite loop effect
    useEffect(() => {
        const id = setInterval(() => {
            setCurrentSlide((prev) => prev + 1);
        }, 3000);

        return () => clearInterval(id);
    }, []);

    // Handle the infinite loop: when reaching the cloned slide, reset to first without animation
    useEffect(() => {
        if (currentSlide === totalSlides) {
            // We're on the cloned first slide
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentSlide(0);
            }, 500); // Wait for transition to complete
        } else if (currentSlide === 0 && !isTransitioning) {
            // Re-enable transitions after instant reset
            setTimeout(() => {
                setIsTransitioning(true);
            }, 50);
        }
    }, [currentSlide, totalSlides, isTransitioning]);
    
    // Intersection Observer for stats animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
                        setStartCounting(true);
                        observer.disconnect();
                    }
                });
            },
            {
                threshold: [0, 0.2, 0.5, 1],
                rootMargin: '0px'
            }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, []);
    return (
        <section className="flex flex-col items-center" id="about">
            <SectionTitle title="About Nexvity" description="Your partner in AI driven innovation, Software development, and UX design for modern businesses." />
            {/* Auto-playing card slider (single-slide viewport, transform-based) */}
            <div className="flex flex-col items-center w-full">
                <div className="w-full max-w-3xl overflow-hidden relative my-8">
                    <div
                        ref={sliderRef}
                        className="flex"
                        style={{ 
                            transform: `translateX(-${currentSlide * 100}%)`,
                            transition: isTransitioning ? 'transform 500ms ease-in-out' : 'none'
                        }}
                    >
                        {/* Render all slides + clone of first slide at the end */}
                        {[...sectionData, sectionData[0]].map((item, i) => (
                            <div className="w-full flex-shrink-0 px-4" key={i}>
                                <div className="w-full min-h-[14rem] md:min-h-[16rem] lg:min-h-[18rem] p-6 rounded-lg bg-gradient-to-r from-white/5 to-transparent border border-white/5 flex flex-col items-center text-center justify-center gap-4">
                                    <img src={item.image} alt="" className="w-20 h-20 md:w-24 md:h-24 object-cover rounded mb-2" />
                                    <div className="">
                                        <h4 className="text-lg md:text-xl font-semibold text-slate-200 mb-2">{item.title}</h4>
                                        <p className="text-sm md:text-base text-slate-400 whitespace-normal leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* dot indicators */}
                <div className="flex items-center mt-3 space-x-2" role="tablist" aria-label="Slider indicators">
                    {sectionData.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                setIsTransitioning(true);
                                setCurrentSlide(i);
                            }}
                            aria-label={`Go to slide ${i + 1}`}
                            className={`w-3 h-3 rounded-full ${(currentSlide % totalSlides) === i ? 'bg-white' : 'bg-black/20'}`}
                        />
                    ))}
                </div>
            </div>   
             <section className="flex flex-col items-center mt-12">
                     <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 dark:text-white">We’re Here to Support You</h2>
                      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 md:px-0 mt-12">
                        <motion.div
                          className="w-full"
                          initial={{ x: -40, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ type: "spring", stiffness: 280, damping: 60 }}
                        >
                        
                          <video  loop autoPlay muted 
                            src="/assets/video.mp4 "    
                            className="w-full h-auto object-contain rounded-3xl ">
                         </video>
                        </motion.div>
            
                        <motion.div
                          className="w-full"
                          initial={{ x: 40, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ type: "spring", stiffness: 280, damping: 60 }}
                        >
                        
                          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm md:text-base">
                            Our team is ready to guide you with the right solutions, insights, and expertise. We turn ideas into intelligent, scalable solutions designed for long term success.

                          </p>
            
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8" ref={statsRef}>
                            <motion.div 
                              className="rounded-3xl bg-gradient-to-b from-indigo-100 to-white border border-indigo-200 p-6"
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: 0 }}
                            >
                              <div className="text-4xl md:text-5xl font-bold text-indigo-900">
                                <CountUp end={113} duration={2500} start={startCounting} suffix="+"/>
                              </div>
                               
                              <div className="mt-4 text-base md:text-lg font-semibold text-indigo-900">Projects</div>
                            </motion.div>
                            <motion.div 
                              className="rounded-3xl bg-gradient-to-b from-indigo-100 to-white border border-indigo-200 p-6"
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: 0.1 }}
                            >
                              <div className="text-4xl md:text-5xl font-bold text-indigo-900">
                                <CountUp end={100} duration={2500} start={startCounting} suffix="+" />
                              </div>
                              <div className="mt-4 text-base md:text-lg font-semibold text-indigo-900">Clients</div>
                            </motion.div>
                            <motion.div 
                              className="rounded-3xl bg-gradient-to-b from-indigo-100 to-white border border-indigo-200 p-6"
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                            >
                              <div className="text-4xl md:text-5xl font-bold text-indigo-900">
                                <CountUp end={2.5} duration={2500} start={startCounting} suffix="+" />
                              </div>
                              <h3 className="text-base md:text-lg font-semibold text-indigo-900">Years</h3>
                              <div className=" text-base md:text-lg font-semibold text-indigo-900">Experience</div>
                            </motion.div>
                            <motion.div 
                              className="rounded-3xl bg-gradient-to-b from-indigo-100 to-white border border-indigo-200 p-6"
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: 0.3 }}
                            >
                              <div className="text-4xl md:text-5xl font-bold text-indigo-900">
                                <CountUp end={96} duration={2500} isPercentage={true} start={startCounting} />
                              </div>
                              <div className="mt-4 text-base md:text-lg font-semibold text-indigo-900">Success Rate</div>
                            </motion.div>
                          </div>
                        </motion.div>
                      </div>
                    </section>
             
                    
        </section>
        
        
    );
}

// Styles: hide default scrollbar for a clean, sliding look + marquee
<style jsx>{`
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
.no-scrollbar::-webkit-scrollbar { display: none; }

.marquee-inner { animation: marqueeScroll linear infinite; animation-direction: normal; display: flex; gap: 1rem; align-items: center; white-space: nowrap; }
.marquee-inner:hover { animation-play-state: paused; }

@keyframes marqueeScroll {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-50%); }
}
`}</style>
