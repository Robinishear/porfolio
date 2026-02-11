"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebookF,
  FaEnvelope,
  FaLinkedinIn,
  FaWhatsapp,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaTelegramPlane,
  FaBars,
  FaTimes,
  FaDownload,
  FaFileAlt,
} from "react-icons/fa";

const NavOutline = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileContactOpen, setIsMobileContactOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    {
      id: 1,
      icon: <FaFacebookF />,
      label: "Facebook",
      href: "https://www.facebook.com/md.robin.ahmed.548869",
      color: "hover:border-blue-500 hover:text-blue-500",
    },
    {
      id: 2,
      icon: <FaEnvelope />,
      label: "Email",
      href: "mailto:mdrobinahmed57898@gmail.com",
      color: "hover:border-red-500 hover:text-red-500",
    },
    {
      id: 3,
      icon: <FaLinkedinIn />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/md-robin1/",
      color: "hover:border-blue-700 hover:text-blue-700",
    },
    {
      id: 4,
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      href: "https://wa.me/8801334757898",
      color: "hover:border-green-500 hover:text-green-500",
    },
    {
      id: 5,
      icon: <FaGithub />,
      label: "GitHub",
      href: "https://github.com/Robinishear",
      color: "hover:border-gray-400 hover:text-white",
    },
    {
      id: 6,
      icon: <FaTwitter />,
      label: "Twitter",
      href: "https://x.com/Ro50846Robin",
      color: "hover:border-sky-400 hover:text-sky-400",
    },
    {
      id: 7,
      icon: <FaInstagram />,
      label: "Instagram",
      href: "https://www.instagram.com/47_m2024/",
      color: "hover:border-pink-500 hover:text-pink-500",
    },
    {
      id: 10,
      icon: <FaTelegramPlane />,
      label: "Telegram",
      href: "#",
      color: "hover:border-blue-400 hover:text-blue-400",
    },
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/About" },
    { name: "Contact", href: "/Contact" },
    { name: "Services", href: "/Services" },
    { name: "Projects", href: "/MyPortfolio" },
    { name: "A-Projects", href: "/ProfessionalProfile" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? "bg-black/90 backdrop-blur-xl py-2" : "bg-transparent py-4"}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-20">
          {/* --- LOGO + NAME + CV DROPDOWN (100% Original Design) --- */}
          <div className="relative group">
            <Link href="/" className="block">
              <div className="flex items-center gap-3 md:gap-4 bg-white/[0.03] border border-white/10 px-3 md:px-5 py-2.5 rounded-2xl group-hover:border-sky-500/50 transition-all shadow-2xl">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                  <img
                    src="https://i.ibb.co.com/zV4B3cSR/add.png"
                    className="h-9 md:h-11 relative z-10 rounded-[14px] bg-[#0B0F1A] p-1"
                    alt="Logo"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-black tracking-[0.1em] md:tracking-[0.2em] text-xs md:text-sm uppercase text-white group-hover:text-sky-400 transition-all">
                    Mr Robin
                  </span>
                  <span className="text-[8px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase text-sky-500/60">
                    Ahmed
                  </span>
                </div>
              </div>
            </Link>

            {/* Resume Dropdown */}
            <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 translate-y-4 group-hover:translate-y-0 z-[110]">
              <div className="bg-zinc-900 border border-white/10 w-64 p-5 rounded-[24px] shadow-2xl backdrop-blur-2xl">
                <p className="text-cyan-400 text-[10px] font-bold tracking-[0.2em] mb-4 text-center uppercase">
                  My Documents
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="#"
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all group/item"
                  >
                    <FaDownload className="text-cyan-400" />
                    <span className="text-xs font-semibold text-white/80">
                      Download CV
                    </span>
                  </a>
                  <a
                    href="https://docs.google.com/document/d/1A1wSKuTCIJhsBVNDR4o1FHMBdye6mYnoQfQkynP2xso/edit?usp=sharing"
                    target="_blank"
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-blue-500/10 hover:border-blue-500/30 transition-all group/item"
                  >
                    <FaFileAlt className="text-blue-500" />
                    <span className="text-xs font-semibold text-white/80">
                      View Resume
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* --- DESKTOP MENU (xl screen-e shift hoyeche overlapping rukhte) --- */}
          <div className="hidden xl:flex items-center gap-4 bg-white/5 border border-white/10 p-2 rounded-full backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link key={link.name} href={link.href}>
                  <div className="relative px-5 py-2 rounded-full overflow-hidden group">
                    {isActive && (
                      <div className="absolute inset-0 z-0">
                        <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,#22d3ee_0deg,#22d3ee_20deg,transparent_40deg,transparent_320deg,#22d3ee_340deg,#22d3ee_360deg)] animate-[spin_3s_linear_infinite]" />
                        <div className="absolute inset-[2px] bg-[#0B0F1A] rounded-full z-0" />
                      </div>
                    )}
                    <span
                      className={`relative z-10 text-xs font-bold transition-all duration-300 ${isActive ? "text-cyan-400" : "text-white/70 group-hover:text-white"}`}
                    >
                      {link.name}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* --- CONTACT & HAMBURGER (Balanced for Mobile) --- */}
          <div className="flex items-center gap-2 md:gap-4">
            <div className="relative">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileContactOpen(!isMobileContactOpen)}
                className="px-4 md:px-6 py-2.5 md:py-3 rounded-full bg-[#275efe] text-white font-bold text-xs md:text-sm transition-all border border-white/10 flex items-center gap-2"
              >
                <span className="hidden sm:inline">Contact Us</span>
                <FaEnvelope className="sm:group-hover:rotate-12 transition-transform" />
              </motion.button>

              <AnimatePresence>
                {isMobileContactOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    className="absolute right-0 top-full pt-5 z-[120]"
                  >
                    <div className="bg-[#0c0c0e]/95 border border-white/10 w-[280px] sm:w-[350px] p-6 rounded-[32px] shadow-2xl backdrop-blur-2xl">
                      <div className="grid grid-cols-4 gap-4">
                        {socialLinks.map((link) => (
                          <a
                            key={link.id}
                            href={link.href}
                            target="_blank"
                            className={`w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/5 transition-all ${link.color}`}
                          >
                            <span className="text-xl">{link.icon}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Hamburger button with better spacing */}
            <button
              className="xl:hidden p-2 text-white text-2xl"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE OVERLAY MENU --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed inset-0 top-0 bg-black/95 backdrop-blur-3xl xl:hidden flex flex-col items-center justify-center space-y-8 z-[150]"
          >
            <button
              className="absolute top-8 right-8 text-white text-3xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FaTimes />
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span
                  className={`text-3xl font-black uppercase tracking-widest ${pathname === link.href ? "text-cyan-400 border-b-2 border-cyan-400" : "text-white/60"}`}
                >
                  {link.name}
                </span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </nav>
  );
};

export default NavOutline;
