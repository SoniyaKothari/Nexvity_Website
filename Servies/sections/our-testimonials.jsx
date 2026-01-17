import SectionTitle from "@/components/section-title";
import { motion } from "framer-motion";

export default function OurTestimonials() {
    const testimonials = [
        {
    name: 'Rakesh Verma',
    initialImage: '/testimonial/rakeshverma.jpeg',
    review:
      'We are very satisfied with the work Nexvity provided.',
    // Replace the company letter with a company logo URL
  companyImage: 'icon1.png',
  
    companyName: 'NEXVITY Reply',
    reply:
      'Your satisfaction motivates us! We are committed to consistently delivering solutions that meet and exceed expectations.',
  },
  {
    name: 'Amit Patel',
    initialImage: '/testimonial/amitpatel.jpeg',
    initial: 'A',
    review:
      'Nexvity exceeded our expectations with their innovative solutions and attention to detail.',
    companyImage: 'icon1.png',
    companyInitial: 'N',
    companyName: 'NEXVITY Reply',
    reply:
      'Thank you for your kind words! We are committed to delivering innovative, high-quality results that truly add value to our clients’ businesses.',
  },
  {
    name: 'Kavita Joshi',
      initialImage: '/testimonial/kavitajoshi.jpeg',
    initial: 'P',
    review:
      'The project turned out great, but the service felt a bit slow at times.',
   companyImage: 'icon1.png',
    companyName: 'NEXVITY Reply',
    reply:
      'We prioritize quality over speed. Every project is crafted with care to ensure the highest standards, and we appreciate your patience as we focus on delivering excellence.',
  },
  {
    name: 'Dr.Suresh lyer',
      initialImage: '/testimonial/sureshlyer.jpeg',
    initial: 'L',
    review:
      'The project outcome is good, but the initial communication was a bit unclear.',
  companyImage: 'icon1.png',
    companyName: 'NEXVITY Reply',
    reply:
      'We appreciate your feedback. At Nexvity, we focus on delivering precise, high-quality solutions, and we always strive to make the process smoother for our clients.',
  },
  
    ];
 const firstRow = testimonials.slice(0, 4);
    return (
        <section className="flex flex-col items-center" id="testimonials">
            <SectionTitle title="Testimonials That Speak" description="Authentic feedback from clients that reflects the real value, impact, and results we deliver every day." />
             <section className="w-full min-h-screen bg-black px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 mt-10">
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
    );
}
function TestimonialCard({ name, initial, initialImage, review, companyInitial, companyImage, companyName, reply }) {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 border border-gray-700 rounded-xl shadow-xl overflow-hidden h-full min-h-full p-4 sm:p-5 md:p-6 flex flex-col">
      <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-semibold text-sm sm:text-base overflow-hidden flex-shrink-0">
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
          <div className="font-bold text-white text-sm sm:text-base md:text-lg truncate">{name}</div>
          <div className="flex items-center text-yellow-400 text-xs sm:text-sm" aria-label="5 star rating">
           
          </div>
        </div>
      </div>
      <div className="relative mt-3 sm:mt-4 rounded-xl p-3 sm:p-4 leading-relaxed text-xs sm:text-sm md:text-base bg-gray-800/50 border border-gray-700 text-gray-200 flex-grow shadow-sm">
        <p className="m-0">{review}</p>
        <span aria-hidden="true" className="absolute left-3 sm:left-4 -bottom-2 w-3 h-3 rotate-45 bg-gray-800 border-l border-b border-gray-700"></span>
      </div>
      <div className="my-3 sm:my-4 border-t border-gray-700 flex-shrink-0" aria-hidden="true"></div>
      <div className="relative rounded-xl p-3 sm:p-4 text-white bg-gradient-to-br from-indigo-600 to-purple-600 shadow-lg flex-shrink-0">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-white/20 backdrop-blur-sm flex items-center justify-center font-extrabold text-sm sm:text-base overflow-hidden flex-shrink-0">
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
        <div className="mt-2 sm:mt-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/20 backdrop-blur-sm">
          <p className="m-0 text-white text-xs sm:text-sm md:text-base">{reply}</p>
        </div>
        <span aria-hidden="true" className="absolute left-3 sm:left-4 -top-2 w-3 h-3 rotate-45 bg-indigo-600"></span>
      </div>
    </div>
  );
}
