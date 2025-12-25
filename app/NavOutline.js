"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { 
  FaFacebookF, FaEnvelope, FaLinkedinIn, FaWhatsapp, FaUsers, FaFlag, 
  FaBars, FaTimes, FaGithub, FaTwitter, FaInstagram, FaYoutube, 
  FaDiscord, FaSkype, FaTelegramPlane, FaSnapchatGhost, FaTiktok, FaRedditAlien,
  FaPinterestP, FaMediumM, FaSlack, FaVimeoV, FaBehance, FaDribbble
} from "react-icons/fa";

const NavOutline = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ২৪টি সোশ্যাল বা কন্টাক্ট লিংক
  const socialLinks = [
    { id: 1, icon: <FaFacebookF />, label: "Facebook", href: "https://www.facebook.com/md.robin.ahmed.548869", color: "hover:text-blue-500" },
    { id: 2, icon: <FaEnvelope />, label: "Email", href: "https://mail.google.com/mail/u/0/#inbox", color: "hover:text-red-500" },
    { id: 3, icon: <FaLinkedinIn />, label: "LinkedIn", href: "https://www.linkedin.com/in/md-robin1/", color: "hover:text-blue-700" },
    { id: 4, icon: <FaWhatsapp />, label: "WhatsApp", href: "https://web.whatsapp.com/", color: "hover:text-green-500" },
    { id: 5, icon: <FaGithub />, label: "GitHub", href: "https://github.com/Robinishear", color: "hover:text-gray-400" },
    { id: 6, icon: <FaTwitter />, label: "Twitter", href: "https://x.com/Ro50846Robin", color: "hover:text-sky-400" },
    { id: 7, icon: <FaInstagram />, label: "Instagram", href: "https://www.instagram.com/47_m2024/", color: "hover:text-pink-500" },
    // { id: 8, icon: <FaYoutube />, label: "YouTube", href: "#", color: "hover:text-red-600" },
    // { id: 9, icon: <FaDiscord />, label: "Discord", href: "#", color: "hover:text-indigo-500" },
    { id: 10, icon: <FaTelegramPlane />, label: "Telegram", href: "#", color: "hover:text-blue-400" },
    // { id: 13, icon: <FaTiktok />, label: "TikTok", href: "#", color: "hover:text-gray-200" },
    // { id: 11, icon: <FaSkype />, label: "Skype", href: "#", color: "hover:text-cyan-500" },
    // { id: 12, icon: <FaSnapchatGhost />, label: "Snapchat", href: "#", color: "hover:text-yellow-400" },
    // { id: 14, icon: <FaRedditAlien />, label: "Reddit", href: "#", color: "hover:text-orange-600" },
    // { id: 15, icon: <FaPinterestP />, label: "Pinterest", href: "#", color: "hover:text-red-500" },
    // { id: 16, icon: <FaMediumM />, label: "Medium", href: "#", color: "hover:text-white" },
    // { id: 17, icon: <FaSlack />, label: "Slack", href: "#", color: "hover:text-purple-500" },
    // { id: 18, icon: <FaVimeoV />, label: "Vimeo", href: "#", color: "hover:text-blue-400" },
    // { id: 19, icon: <FaBehance />, label: "Behance", href: "#", color: "hover:text-blue-600" },
    // { id: 20, icon: <FaDribbble />, label: "Dribbble", href: "#", color: "hover:text-pink-400" },
    // { id: 21, icon: <FaUsers />, label: "FB Group", href: "#", color: "hover:text-blue-400" },
    // { id: 22, icon: <FaFlag />, label: "FB Page", href: "#", color: "hover:text-blue-500" },
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/About" },
    { name: "Contact", href: "/Contact" },
    { name: "Services", href: "/Services" },
    { name: "My Projects", href: "/MyPortfolio" },
    { name: "Professional Profile", href: "/ProfessionalProfile" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? "bg-black/90 backdrop-blur-xl border-b border-white/10 py-2" : "bg-transparent py-4"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          
          {/* --- LOGO --- */}
          <Link href="/" className="group relative">
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-2xl group-hover:border-cyan-500/50 transition-all shadow-xl">
              <img src="https://i.ibb.co.com/N6tM0LQJ/robiniamge.png" className="h-10 sm:h-12 w-auto object-contain" alt="Logo" />
              <span className="hidden md:block font-bold text-white tracking-widest text-sm italic uppercase">Mr Robin Ahmed</span>
            </div>
          </Link>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden lg:flex items-center space-x-2 bg-white/5 border border-white/10 p-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <button className="relative px-6 py-2.5 text-sm font-semibold text-white/70 hover:text-white transition-all group overflow-hidden">
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-1/2"></span>
                </button>
              </Link>
            ))}
          </div>

          {/* --- CONTACT HOVER MODAL (Desktop) --- */}
          <div className="hidden lg:block relative group">
            {/* Main Button */}
            <button className="px-8 py-3.5 rounded-full bg-[#275efe] text-white font-bold transition-all hover:shadow-[0_0_20px_rgba(39,94,254,0.4)] active:scale-95 flex items-center gap-2">
              <span>Contact Us</span>
              <FaEnvelope className="group-hover:rotate-12 transition-transform" />
            </button>

            {/* The "Hover Modal" Content */}
            <div className="absolute right-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 translate-y-4 group-hover:translate-y-0">
              <div className="bg-zinc-900 border border-white/10 w-[450px] p-6 rounded-[32px] shadow-2xl backdrop-blur-2xl bg-opacity-95">
                <p className="text-white/50 text-xs font-bold tracking-[0.2em] mb-4 text-center">GET IN TOUCH</p>
                
                <div className="grid grid-cols-4 gap-4">
                  {socialLinks.map((link) => (
                    <a 
                      key={link.id} 
                      href={link.href} 
                      target="_blank" 
                      className={`flex flex-col items-center gap-2 p-3 rounded-2xl bg-white/5 border border-white/5 transition-all duration-300 ${link.color} hover:bg-white/10 hover:border-white/20`}
                    >
                      <span className="text-2xl transition-transform duration-300 hover:scale-110">
                        {link.icon}
                      </span>
                      <span className="text-[10px] font-medium text-white/40 uppercase tracking-tighter">
                        {link.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* --- MOBILE TOGGLE --- */}
          <button className="lg:hidden p-3 text-white text-2xl" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU --- */}
      <div className={`fixed inset-0 top-24 bg-black/95 backdrop-blur-2xl transition-all duration-500 lg:hidden ${mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
        <div className="flex flex-col items-center justify-start pt-10 space-y-6 overflow-y-auto h-full pb-32">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)}>
              <span className="text-2xl font-bold text-white/80 hover:text-cyan-400 transition-colors uppercase tracking-widest">{link.name}</span>
            </Link>
          ))}
          <div className="grid grid-cols-3 gap-6 px-10 pt-6">
            {socialLinks.map((link) => (
              <a key={link.id} href={link.href} target="_blank" className="w-14 h-14 rounded-2xl bg-white/10 flex flex-col items-center justify-center text-white text-xl hover:bg-cyan-500 transition-all">
                {link.icon}
                <span className="text-[8px] mt-1">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavOutline;