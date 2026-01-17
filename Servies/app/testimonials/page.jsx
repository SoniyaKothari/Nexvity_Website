
'use client';

import React from 'react';
import SectionTitle from "@/components/section-title";
import { motion } from "framer-motion";
const testimonials = [
  {
    name: 'Jane Doe',
    initialImage: 'assets/dd_5.jpeg',
    review:
      'NEXVITY transformed our online presence! Their team is innovative,responsive, and truly understood our needs. Highly recommended!',
    // Replace the company letter with a company logo URL
    companyImage: '/assets/logo.svg',
    companyInitial: 'N',
    companyName: 'NEXVITY',
    reply:
      'Thank you so much, Jane! We loved working with you and appreciate your partnership.',
  },
  {
    name: 'Adam Smith',
    initialImage: 'https://example.com/avatars/adam.png',
    initial: 'A',
    review:
      'Incredible results and smooth execution. The project was delivered on time and exceeded expectations.',
    companyImage: 'https://example.com/logos/nexvity.png',
    companyInitial: 'N',
    companyName: 'NEXVITY',
    reply:
      'Thanks Adam! We’re thrilled you’re happy with the outcome and timeline.',
  },
  {
    name: 'Priya Patel',
    initial: 'P',
    review:
      'Great attention to detail and excellent communication throughout the engagement.',
    companyInitial: 'N',
    companyName: 'NEXVITY',
    reply:
      'We appreciate the feedback, Priya. It was a pleasure collaborating with you.',
  },
  {
    name: 'Liam Johnson',
    initial: 'L',
    review:
      'Their design and development team brought our product vision to life in record time.',
    companyInitial: 'N',
    companyName: 'NEXVITY',
    reply:
      'Thank you, Liam! Your vision made this project truly exciting.',
  },
  {
    name: 'Sophia Williams',
    initial: 'S',
    review:
      'Professional, creative, and results-driven. Couldn’t ask for a better partner.',
    companyInitial: 'N',
    companyName: 'NEXVITY',
    reply:
      'Thanks Sophia! We’re grateful for the opportunity to work together.',
  },
  {
    name: 'Noah Davis',
    initial: 'N',
    review:
      'We saw measurable growth after launch. The team was proactive and supportive.',
    companyInitial: 'N',
    companyName: 'NEXVITY',
    reply:
      'Amazing to hear, Noah! We’re glad the results reflect the effort.',
  },
  {
    name: 'Ava Martinez',
    initial: 'A',
    review:
      'Clear process, great deliverables, and outstanding post-launch support.',
    companyInitial: 'N',
    companyName: 'NEXVITY',
    reply:
      'Thank you, Ava! We’re here to support you as you grow.',
  },
  {
    name: 'Ethan Brown',
    initial: 'E',
    review:
      'They provided actionable insights and a polished product. Highly recommend.',
    companyInitial: 'N',
    companyName: 'NEXVITY',
    reply:
      'Thanks Ethan! Your feedback means a lot to the team.',
  },
  {
    name: 'Mia Wilson',
    initial: 'M',
    review:
      'Loved the collaboration. The quality and speed were exactly what we needed.',
    companyInitial: 'N',
    companyName: 'NEXVITY',
    reply:
      'We appreciate it, Mia! Excited to see your continued success.',
  },
  {
    name: 'Oliver Garcia',
    initial: 'O',
    review:
      'They understood our goals and delivered a beautiful, scalable solution.',
    companyInitial: 'N',
    companyName: 'NEXVITY',
    reply:
      'Thank you, Oliver! We’re proud of what we built together.',
  },
];

function TestimonialCard({ name, initial, initialImage, review, companyInitial, companyImage, companyName, reply }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden h-full min-h-full p-4 sm:p-5 md:p-6 flex flex-col">
      <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-pink-400 to-orange-300 flex items-center justify-center text-white font-semibold text-sm sm:text-base overflow-hidden flex-shrink-0">
          {initialImage ? (
            <img
              src={initialImage}
              alt={`${name} avatar`}
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            initial
          )}
        </div>
        <div className="flex flex-col min-w-0">
          <div className="font-bold text-gray-900 text-sm sm:text-base md:text-lg truncate">{name}</div>
          <div className="flex items-center text-yellow-400 text-xs sm:text-sm" aria-label="5 star rating">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>⭐</span>
            ))}
          </div>
        </div>
      </div>
      <div className="relative mt-3 sm:mt-4 rounded-lg p-3 sm:p-4 leading-relaxed text-xs sm:text-sm md:text-base bg-gray-100 text-gray-700 flex-grow">
        <p className="m-0">{review}</p>
        <span aria-hidden="true" className="absolute left-3 sm:left-4 -bottom-2 w-3 h-3 rotate-45 bg-gray-100"></span>
      </div>
      <div className="my-3 sm:my-4 border-t border-gray-200 flex-shrink-0" aria-hidden="true"></div>
      <div className="relative rounded-xl p-3 sm:p-4 text-white bg-gradient-to-br from-blue-500 to-purple-600 shadow-md flex-shrink-0">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-white/20 flex items-center justify-center font-extrabold text-sm sm:text-base overflow-hidden flex-shrink-0">
            {companyImage ? (
              <img
                src={companyImage}
                alt={`${companyName} logo`}
                className="w-full h-full object-cover"
              />
            ) : (
              companyInitial
            )}
          </div>
          <div className="font-bold text-sm sm:text-base md:text-lg truncate">{companyName}</div>
        </div>
        <div className="mt-2 sm:mt-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/20">
          <p className="m-0 text-gray-100 text-xs sm:text-sm md:text-base">{reply}</p>
        </div>
        <span aria-hidden="true" className="absolute left-3 sm:left-4 -top-2 w-3 h-3 rotate-45 bg-blue-500"></span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const firstRow = testimonials.slice(0, 10);
  
  return (
 <>
   <style>
       @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
   </style>
    <section id="home" className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
               <motion.svg className="absolute -z-10 w-full -mt-20 sm:-mt-32 md:-mt-40 lg:mt-0" width="1440" height="676" viewBox="0 0 1440 676" fill="none" xmlns="http://www.w3.org/2000/svg"
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
               <motion.a className="flex items-center mt-20 sm:mt-32 md:mt-40 lg:mt-48 gap-2 border border-slate-600 text-gray-50 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base"
                   initial={{ y: -20, opacity: 0 }}
                   whileInView={{ y: 0, opacity: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                   href="/#contact"
               >
                   <div className="size-2 sm:size-2.5 bg-green-500 rounded-full animate-pulse"></div>
                   <span>Start the Conversation</span>
                  
               </motion.a>
               <motion.h1 className="text-center text-3xl leading-tight sm:text-4xl sm:leading-snug md:text-5xl md:leading-[68px] lg:text-6xl lg:leading-[70px] mt-4 font-semibold max-w-2xl px-4"
                   initial={{ y: 50, opacity: 0 }}
                   whileInView={{ y: 0, opacity: 1 }}
                   viewport={{ once: true }}
                   transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
               >
            Testimonials That Speak
               </motion.h1>
               <motion.p className="text-center text-sm sm:text-base max-w-xs sm:max-w-md md:max-w-lg mt-2 sm:mt-3 md:mt-4 px-4"
                   initial={{ y: 50, opacity: 0 }}
                   whileInView={{ y: 0, opacity: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
               >
                  {/* sub heading */}
                 Authentic feedback from clients that reflects the real value, impact, and results we deliver every day.

               </motion.p>
               <motion.div className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8"
                   initial={{ y: 50, opacity: 0 }}
                   whileInView={{ y: 0, opacity: 1 }}
                   viewport={{ once: true }}
                   transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
               >
               </motion.div>
            
    <section className="w-full min-h-screen bg-black px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 mt-32 sm:mt-48 md:mt-60 lg:mt-80">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6 auto-rows-fr">
          {firstRow.map((t, idx) => (
            <TestimonialCard
              key={`first-${idx}`}
              name={t.name}
              initial={t.initial}
              initialImage={t.initialImage}
              review={t.review}
              companyInitial={t.companyInitial}
              companyImage={t.companyImage}
              companyName={t.companyName}
              reply={t.reply}
            />
          ))}
        </div>
    
      </div>
    </section>
    </section>
    </>
  );
}
