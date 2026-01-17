'use client';

import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navlinks = [
        { href: "/#home", text: "Home" },
         
        { href: "/#creations", text: "Industry" },
       { href: "/#about", text: "About" },
        { href: "/#testimonials", text: "Testimonial" },
      
    ];
    const serviceItems = [
        { href: "/services/digital", text: "Digital Consulting Services" },
        { href: "/services/uiux", text: "UI/UX & Product Design" },
        { href: "/services/softwaredesign", text: "Software Development Services" },
        { href: "/services/softwaretesting", text: "Quality Assurance & Testing" },
        { href: "/services/hostinganddomain", text: "Hosting , Domain & Cloud Services" },
        { href: "/services/aipowered", text: "AI-Powered Solutions" },
    ];
    return (
        <>
            <style>{`
                @keyframes rotate {
                    100% { transform: rotate(1turn); }
                }
                .rainbow::before {
                    content: '';
                    position: absolute;
                    z-index: -2;
                    left: -50%;
                    top: -50%;
                    width: 200%;
                    height: 200%;
                    background-position: 100% 50%;
                    background-repeat: no-repeat;
                    background-size: 50% 30%;
                    filter: blur(6px);
                    background-image: linear-gradient(#F58B3A);
                    animation: rotate 4s linear infinite ;
                }
            `}</style>
            <motion.nav className="sticky top-0 z-50 flex items-center justify-between w-full h-18 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >
                <a href="/#home">
                    <Image className="h-40 w-auto" src="/assets/logo.svg" width={138} height={36} alt="logo" />
                </a>

                <div className="hidden lg:flex items-center gap-8 transition duration-500">
                    <Link href="/#home" className="hover:text-slate-300 transition">
                        Home
                    </Link>
                    <div className="relative group">
                        <Link href="/services" className="hover:text-slate-300 transition">
                            Services
                        </Link>
                        <div className="absolute left-0 top-full mt-2 w-80 bg-black/70 backdrop-blur border border-slate-700 rounded-md shadow-lg py-2 opacity-0 pointer-events-none translate-y-2 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0">
                            {serviceItems.map((item) => (
                                <Link key={item.href} href={item.href} className="block px-4 py-2 text-sm hover:bg-white/10">
                                    {item.text}
                                </Link>
                            ))}
                        </div>
                    </div>
                    {navlinks.slice(1).map((link) => (
                        <Link key={link.href} href={link.href} className="hover:text-slate-300 transition">
                            {link.text}
                        </Link>
                    ))}
                </div>

                <div className="hidden lg:block space-x-3">
                    <Link href="/portfolio" className="rainbow relative z-0 bg-white/15 overflow-hidden p-0.5 inline-flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100">
                        <span className="px-6 text-sm py-2 text-white rounded-full font-medium bg-gray-900/80 backdrop-blur">Portfolio</span>
                    </Link>
                    <Link href="/#contact" className="rainbow-pink relative z-0 bg-white/15 overflow-hidden p-0.5 inline-flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100">
                        <span className="px-6 py-2 text-white rounded-full font-medium bg-gray-900/80 backdrop-blur ">Get in Touch</span>
                    </Link>
                </div>
                <button onClick={() => setIsMenuOpen(true)} className="lg:hidden active:scale-90 transition">
                    <MenuIcon className="size-6.5" />
                </button>
            </motion.nav>
            <div className={`fixed inset-0 z-[100] bg-black/60 backdrop-blur flex flex-col items-center justify-center text-lg gap-8 lg:hidden transition-transform duration-400 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <Link href="/#home" onClick={() => setIsMenuOpen(false)}>
                    Home
                </Link>
                <div className="flex flex-col items-center w-full">
                    <Link href="/services" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 mb-4">
                        Services
                    </Link>
                    {/* Mobile Service Dropdown Items */}
                  
                </div>
                {navlinks.slice(1).map((link) => (
                    <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}>
                        {link.text}
                    </Link>
                ))}
                <button onClick={() => setIsMenuOpen(false)} className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-slate-100 hover:bg-slate-200 transition text-black rounded-md flex">
                    <XIcon />
                </button>
            </div>
        </>
    );
}
