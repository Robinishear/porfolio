"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaEnvelope,
  FaLinkedinIn,
  FaWhatsapp,
  FaUsers,
  FaFlag,
  FaBars,
  FaTimes,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaDiscord,
  FaSkype,
  FaTelegramPlane,
  FaSnapchatGhost,
  FaTiktok,
  FaRedditAlien,
  FaPinterestP,
  FaMediumM,
  FaSlack,
  FaVimeoV,
  FaBehance,
  FaDribbble,
  FaDownload,
  FaFileAlt,
} from "react-icons/fa";

const NavOutline = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileContactOpen, setIsMobileContactOpen] = useState(false);

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
      color: "hover:text-blue-500",
    },
    {
      id: 2,
      icon: <FaEnvelope />,
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=mdrobinahmed57898@gmail.com",
      color: "hover:text-red-500",
    },
    {
      id: 3,
      icon: <FaLinkedinIn />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/md-robin1/",
      color: "hover:text-blue-700",
    },
    {
      id: 4,
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      href: "https://wa.me/8801334757898",
      color: "hover:text-green-500",
    },
    {
      id: 5,
      icon: <FaGithub />,
      label: "GitHub",
      href: "https://github.com/Robinishear",
      color: "hover:text-gray-400",
    },
    {
      id: 6,
      icon: <FaTwitter />,
      label: "Twitter",
      href: "https://x.com/Ro50846Robin",
      color: "hover:text-sky-400",
    },
    {
      id: 7,
      icon: <FaInstagram />,
      label: "Instagram",
      href: "https://www.instagram.com/47_m2024/",
      color: "hover:text-pink-500",
    },
    {
      id: 10,
      icon: <FaTelegramPlane />,
      label: "Telegram",
      href: "#",
      color: "hover:text-blue-400",
    },
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
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-white/10 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* --- LOGO WITH HOVER MODAL --- */}
          <div className="relative group">
            <Link href="/" className="block">
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-2xl group-hover:border-cyan-500/50 transition-all shadow-xl">
                <div className="p-[2px] rounded-2xl bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 inline-block">
                  <img
                    src="https://i.ibb.co.com/zV4B3cSR/add.png"
                    className="h-10 sm:h-12 rounded-2xl w-auto object-contain bg-white"
                    alt="Logo"
                  />
                </div>{" "}
                <span className="hidden md:block font-bold tracking-widest text-sm italic uppercase">
                  <span className="text-red-500">M</span>
                  <span className="text-yellow-500">r</span>
                  <span className="text-green-500"> </span>
                  <span className="text-blue-500">R</span>
                  <span className="text-purple-500">o</span>
                  <span className="text-pink-500">b</span>
                  <span className="text-red-500">i</span>
                  <span className="text-yellow-500">n</span>
                  <span className="text-green-500"> </span>
                  <span className="text-blue-500">A</span>
                  <span className="text-purple-500">h</span>
                  <span className="text-pink-500">m</span>
                  <span className="text-red-500">e</span>
                  <span className="text-yellow-500">d</span>
                </span>
              </div>
            </Link>

            {/* Logo Hover Modal (Desktop) */}
            <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 translate-y-4 group-hover:translate-y-0 z-[110]">
              <div className="bg-zinc-900 border border-white/10 w-64 p-5 rounded-[24px] shadow-2xl backdrop-blur-2xl bg-opacity-95">
                <p className="text-cyan-400 text-[10px] font-bold tracking-[0.2em] mb-4 text-center uppercase">
                  My Documents
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="#"
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all group/item"
                  >
                    <FaDownload className="text-cyan-500 group-hover/item:scale-110 transition-transform" />
                    <span className="text-xs font-semibold text-white/80">
                      Download CV
                    </span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-blue-500/10 hover:border-blue-500/30 transition-all group/item"
                  >
                    <FaFileAlt className="text-blue-500 group-hover/item:scale-110 transition-transform" />
                    <span className="text-xs font-semibold text-white/80">
                      Download Resume
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden lg:flex items-center space-x-0 bg-white/5 border border-white/10 p-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <button className="relative px-6 py-2.5 text-sm font-semibold text-white/70 hover:text-white transition-all group overflow-hidden">
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-1/2"></span>
                </button>
              </Link>
            ))}
          </div>

          {/* --- CONTACT BUTTON (Desktop Hover + Mobile Click) --- */}
          <div className="relative group">
            <button
              onClick={() => setIsMobileContactOpen(!isMobileContactOpen)}
              className="px-6 py-3 md:px-8 md:py-3.5 rounded-full bg-[#275efe] text-white font-bold transition-all hover:shadow-[0_0_20px_rgba(39,94,254,0.4)] active:scale-95 flex items-center gap-2"
            >
              <span className="text-sm md:text-base">Contact Us</span>
              <FaEnvelope className="group-hover:rotate-12 transition-transform" />
            </button>

            {/* Desktop Modal (Hover) & Mobile Modal (Click) */}
            <div
              className={`
              absolute right-0 top-full pt-4 transition-all duration-500 z-[120]
              ${
                isMobileContactOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible translate-y-4"
              }
              lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:translate-y-0
            `}
            >
              <div className="bg-zinc-900 border border-white/10 w-[280px] sm:w-[350px] md:w-[450px] p-4 md:p-6 rounded-[24px] md:rounded-[32px] shadow-2xl backdrop-blur-2xl bg-opacity-95">
                <div className="flex justify-between items-center mb-4 lg:block">
                  <p className="text-white/50 text-[10px] md:text-xs font-bold tracking-[0.2em] text-center w-full">
                    GET IN TOUCH
                  </p>
                  {/* মোবাইল ক্লোজ বাটন */}
                  <button
                    onClick={() => setIsMobileContactOpen(false)}
                    className="lg:hidden text-white/50 hover:text-white"
                  >
                    <FaTimes />
                  </button>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 md:gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      target="_blank"
                      className={`flex flex-col items-center gap-2 p-3 rounded-2xl bg-white/5 border border-white/5 transition-all duration-300 ${link.color} hover:bg-white/10 hover:border-white/20`}
                    >
                      <span className="text-xl md:text-2xl transition-transform duration-300 hover:scale-110">
                        {link.icon}
                      </span>
                      <span className="text-[8px] md:text-[10px] font-medium text-white/40 uppercase tracking-tighter">
                        {link.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* --- MOBILE MENU TOGGLE --- */}
          <button
            className="lg:hidden p-3 text-white text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU --- */}
      <div
        className={`fixed inset-0 top-24 bg-black/95 backdrop-blur-2xl transition-all duration-500 lg:hidden ${
          mobileMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex flex-col items-center justify-start pt-10 space-y-6 overflow-y-auto h-full pb-32">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="text-2xl font-bold bg-blue-800/50 text-white/80 hover:text-cyan-400 transition-colors uppercase tracking-widest">
                {link.name}
              </span>
            </Link>
          ))}
          {/* সোশ্যাল আইকনগুলো এখানেও আছে আপনার আগের কোড অনুযায়ী */}
          {/* <div className="grid grid-cols-3 gap-6 px-10 pt-6">
            {socialLinks.map((link) => (
              <a key={link.id} href={link.href} target="_blank" className="w-14 h-14 rounded-2xl bg-white/10 flex flex-col items-center justify-center text-white text-xl hover:bg-cyan-500 transition-all">
                {link.icon}
                <span className="text-[8px] mt-1">{link.label}</span>
              </a>
            ))}
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default NavOutline;
