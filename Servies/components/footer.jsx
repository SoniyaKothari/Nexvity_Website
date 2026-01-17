"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram, Facebook, Youtube, MapPin } from "lucide-react";
import { useState } from "react";

export default function Footer() {
   
  
    return (
        <motion.footer className="px-6 md:px-16 lg:px-24 xl:px-32 w-full text-sm text-slate-400 mt-40"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
          
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
                <div className="sm:col-span-2 lg:col-span-1">
                    <a href="#" className="mt-[-40px]">
                        <Image className="h-30 w-auto ml-[-10px]" src="/assets/logo.svg" width={138} height={36} alt="logo" />
                    </a>
                    <p className="text-sm/7 mt-[-20px]"> 📍 NEXVITY INFOTECH, Office No. 1024, 10th Floor, The Spire 2, Sheetal Park, 150 Feet Ring Rd, Rajkot, Gujarat, 360007 <br></br> 📞 +91 96648 18130 <br></br> 📧 hr@nexvityinfotech.com</p>
                </div>
                <div className="flex flex-col lg:items-center lg:justify-center">
                    <div className="flex flex-col text-sm space-y-2.5">
                        <h2 className="font-semibold mb-5 text-white">Company</h2>
                        <a className="hover:text-slate-500 transition" href="/#home">Home</a>
                        <a className="hover:text-slate-500 transition" href="#">Careers</a>
                        <a className="hover:text-slate-500 transition" href="/#contact">Contact us</a>
                        <a className="hover:text-slate-500 transition" href="/portfolio">Portfolio</a>
                    </div>
                </div>
                <div className="md:mt-0 lg:mt-10 sm:mt-0">
                    <h2 className="font-semibold text-white mb-5"> Excellence in Every Click.</h2>
                    <div className="text-sm space-y-6 max-w-sm">
                        <p>Connect with us! Explore the latest insights, expert tips, and valuable resources designed to help your business grow, innovate, and succeed in the digital world.</p>
                        <div className="flex items-center justify-center gap-3 p-2 rounded-md bg-slate-900">
                            <a href="https://x.com/NexvityL77136" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="p-2 rounded bg-white/10 border border-slate-700 hover:bg-white/20">
                                <Twitter className="size-4 text-white" />
                            </a>
                            <a href="https://linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="p-2 rounded bg-white/10 border border-slate-700 hover:bg-white/20">
                                <Linkedin className="size-4 text-white" />
                            </a> 
                            <a href="https://www.google.com/maps/search/?api=1&query=NEXVITY+INFOTECH,+Office+No.+1024,+10th+Floor,+The+Spire+2,+Sheetal+Park,+150+Feet+Ring+Rd,+Rajkot,+Gujarat,+360007" target="_blank" rel="noopener noreferrer" className="p-2 rounded bg-white/10 border border-slate-700 hover:bg-white/20">
                                <MapPin className="size-4 text-white" />
                            </a>
                            <a href="https://www.instagram.com/nexvity.infotech/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="p-2 rounded bg-white/10 border border-slate-700 hover:bg-white/20">
                                <Instagram className="size-4 text-white" />
                            </a>
                            <a href="https://facebook.com/" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="p-2 rounded bg-white/10 border border-slate-700 hover:bg-white/20">
                                <Facebook className="size-4 text-white" />
                            </a>
                          
                
                        </div>
                    </div>
                </div>
            </div>
            <p className="py-4 text-center border-t mt-6 border-slate-700">
                Copyright 2026 ©Nextvity Infotech All Right Reserved.
            </p>
        </motion.footer>
    );
};
