"use client";

import SectionTitle from "@/components/section-title";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

export default function GetInTouch() {
  const [showMessage, setShowMessage] = useState(false);
  const [messageContent, setMessageContent] = useState({});
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const sendEmail = (e) => {
    e.preventDefault();
    
    // Get form data
    const form = e.target;
    const templateParams = {
      from_name: form.name.value,
      from_email: form.email.value,
      message: form.message.value,
    };
    
    // Initialize EmailJS with your public key
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    
    // Send email using EmailJS
    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    ).then(
      (result) => {
        console.log(result.text);
        setMessageContent({
          title: 'Message Sent Successfully!',
          description: 'Thank you for contacting us. We will get back to you soon.',
          type: 'success',
          userName: form.name.value,
          userEmail: form.email.value,
          userMessage: form.message.value
        });
        setShowMessage(true);
        form.reset(); // Reset form after successful submission
      },
      (error) => {
        console.log(error.text);
        setMessageContent({
          title: 'Failed to Send Message',
          description: 'Please try again later.',
          type: 'error',
          userName: form.name.value,
          userEmail: form.email.value,
          userMessage: form.message.value
        });
        setShowMessage(true);
      }
    );
  };
  
  const closeMessage = () => {
    setShowMessage(false);
  };
  
  return (
    <section className="flex flex-col items-center" id="contact">
      <SectionTitle title="Get in touch" description="A visual collection of our most recent works - each piece crafted with intention, emotion, and style." />
      <div className="mt-16 w-full max-w-6xl mx-auto">
        <div className="border border-slate-700 rounded-2xl p-6 md:p-10 bg-slate-900/50 backdrop-blur-sm">
          <div className="flex flex-col lg:flex-row gap-16 items-center w-full">
            <div className="flex-1 max-w-2xl">
              <form onSubmit={sendEmail} className='grid sm:grid-cols-2 gap-3 sm:gap-5 text-slate-400 w-full'>
                <motion.div
                  initial={{ y: 150, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                  <label className='font-medium text-slate-200'>Your name</label>
                  <input name='name' type="text" placeholder='Enter your name' className='w-full mt-2 p-3 outline-none border border-slate-700 rounded-lg focus-within:ring-1 transition focus:ring-indigo-600 bg-transparent' required />
                </motion.div>

                <motion.div
                  initial={{ y: 150, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
                >
                  <label className='font-medium text-slate-200'>Email id</label>
                  <input name='email' type="email" placeholder='Enter your email' className='w-full mt-2 p-3 outline-none border border-slate-700 rounded-lg focus-within:ring-1 transition focus:ring-indigo-600 bg-transparent' required />
                </motion.div>

                <motion.div className='sm:col-span-2'
                  initial={{ y: 150, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                >
                  <label className='font-medium text-slate-200'>Message</label>
                  <textarea name='message' rows={8} placeholder='Enter your message' className='resize-none w-full mt-2 p-3 outline-none rounded-lg focus-within:ring-1 transition focus:ring-indigo-600 border border-slate-700 bg-transparent' required />
                </motion.div>

                <motion.button type='submit' className='w-max flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full'
                  initial={{ y: 150, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
                >
                  Submit
                  <ArrowUpRight className="size-4.5" />
                </motion.button>
              </form>
            </div>
            
            <div className="flex-1 flex justify-center">
              <PremiumClock />
            </div>
          </div>
        </div>
      </div>
      
      {isClient && showMessage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={`max-w-md w-full rounded-2xl p-8 text-center ${messageContent.type === 'success' ? 'bg-emerald-500/20 border border-emerald-500/30' : 'bg-rose-500/20 border border-rose-500/30'}`}>
            <div className="text-5xl mb-4">
              {messageContent.type === 'success' ? '✓' : '✗'}
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">{messageContent.title}</h3>
            <p className="text-slate-300 mb-6">{messageContent.description}</p>
            <div className="mb-6 text-left">
              <div className="mb-3">
                <h4 className="font-semibold text-slate-200 text-sm mb-1">Name:</h4>
                <p className="text-slate-300 bg-slate-800/50 p-2 rounded-lg">{messageContent.userName}</p>
              </div>
              <div className="mb-3">
                <h4 className="font-semibold text-slate-200 text-sm mb-1">Email:</h4>
                <p className="text-slate-300 bg-slate-800/50 p-2 rounded-lg">{messageContent.userEmail}</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-200 text-sm mb-1">Message:</h4>
                <p className="text-slate-300 bg-slate-800/50 p-2 rounded-lg">{messageContent.userMessage}</p>
              </div>
            </div>
            <button 
              onClick={closeMessage}
              className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}

function PremiumClock() {
  useEffect(() => {
    const createMarkers = () => {
      const hourMarkers = document.getElementById("hourMarkers");
      const minuteMarkers = document.getElementById("minuteMarkers");
      const hourNumbers = document.getElementById("hourNumbers");

      if (!hourMarkers || !minuteMarkers || !hourNumbers) return;

      // Hour markers
      for (let i = 0; i < 12; i++) {
        const angle = (i * 30 * Math.PI) / 180;
        const x1 = 200 + Math.sin(angle) * 170;
        const y1 = 200 - Math.cos(angle) * 170;
        const x2 = 200 + Math.sin(angle) * 155;
        const y2 = 200 - Math.cos(angle) * 155;

        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", `${x1}`);
        line.setAttribute("y1", `${y1}`);
        line.setAttribute("x2", `${x2}`);
        line.setAttribute("y2", `${y2}`);
        line.setAttribute("stroke-width", "3");
        line.setAttribute("stroke", "#ffffff");

        hourMarkers.appendChild(line);
      }

      // Hour numbers
      for (let i = 0; i < 12; i++) {
        const hour = i === 0 ? 12 : i;
        const angle = (i * 30 * Math.PI) / 180;
        const x = 200 + Math.sin(angle) * 135;
        const y = 200 - Math.cos(angle) * 135;

        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("x", `${x}`);
        text.setAttribute("y", `${y + 6}`);
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("font-size", "26");
        text.setAttribute("font-weight", "600");
        text.setAttribute("fill", "#00d4ff");
        text.setAttribute("opacity", "0");
        text.textContent = `${hour}`;

        hourNumbers.appendChild(text);
      }

      // Minute markers
      for (let i = 0; i < 60; i++) {
        if (i % 5 === 0) continue;

        const angle = (i * 6 * Math.PI) / 180;
        const x1 = 200 + Math.sin(angle) * 170;
        const y1 = 200 - Math.cos(angle) * 170;
        const x2 = 200 + Math.sin(angle) * 162;
        const y2 = 200 - Math.cos(angle) * 162;

        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", `${x1}`);
        line.setAttribute("y1", `${y1}`);
        line.setAttribute("x2", `${x2}`);
        line.setAttribute("y2", `${y2}`);
        line.setAttribute("stroke-width", "1");
        line.setAttribute("stroke", "#4b5563");

        minuteMarkers.appendChild(line);
      }
    };

    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours() % 12;
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const milliseconds = now.getMilliseconds();

      const hourAngle = (hours + minutes / 60) * 30;
      const minuteAngle = (minutes + seconds / 60) * 6;
      const secondAngle = (seconds + milliseconds / 1000) * 6; // Include milliseconds for smooth movement

      const hourHand = document.getElementById("hourHand");
      const minuteHand = document.getElementById("minuteHand");
      const secondHand = document.getElementById("secondHandGroup");
      const digital = document.getElementById("digitalTime");

      if (hourHand) hourHand.style.transform = `rotate(${hourAngle}deg)`;
      if (minuteHand) minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
      if (secondHand) secondHand.style.transform = `rotate(${secondAngle}deg)`;

      if (digital) {
        digital.textContent = `${now
          .getHours()
          .toString()
          .padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
      }

      requestAnimationFrame(updateClock);
    };

    createMarkers();
    updateClock();
  }, []);

  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300); // Reset animation state after 300ms
  };
  
  return (
    <div className="flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-2">Future-Ready</h1>
      <p className="text-center text-lg mb-6 opacity-90">
        Websites designed to be scalable and future-ready,
        <br />
        adapting as your business grows.
      </p>

      <div 
        className={`relative w-[320px] h-[320px] ${isAnimating ? 'scale-105' : 'scale-100'} transition-transform duration-300`}
        onClick={handleClick}
      >
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <circle cx="200" cy="200" r="190" fill="#1a1a1a" />
          <g id="hourMarkers" />
          <g id="minuteMarkers" />
          <g id="hourNumbers" />

          <text
            x="200"
            y="170"
            textAnchor="middle"
            className="fill-white text-xl tracking-widest"
          >
            NEXVITY
          </text>

          <circle cx="200" cy="200" r="8" fill="white" />

          <line
            id="hourHand"
            x1="200"
            y1="200"
            x2="200"
            y2="120"
            stroke="white"
            strokeWidth="8"
            strokeLinecap="round"
            style={{ transformOrigin: "200px 200px" }}
          />

          <line
            id="minuteHand"
            x1="200"
            y1="200"
            x2="200"
            y2="90"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
            style={{ transformOrigin: "200px 200px" }}
          />

          <g
            id="secondHandGroup"
            style={{ transformOrigin: "200px 200px" }}
          >
            <line
              x1="200"
              y1="220"
              x2="200"
              y2="60"
              stroke="#ef4444"
              strokeWidth="2"
            />
            <circle cx="200" cy="200" r="6" fill="#ef4444" />
          </g>
        </svg>

        <div
          id="digitalTime"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-lg font-light"
        />
      </div>
    </div>
  );
}