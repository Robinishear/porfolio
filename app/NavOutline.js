"use client";

import Link from "next/link";
import React, { useState } from "react";
// import { RxDragHandleHorizontal } from "react-icons/rx";
import { 
  FaFacebookF, 
  FaEnvelope, 
  FaLinkedinIn, 
  FaWhatsapp, 
  FaUsers, 
  FaFlag 
} from "react-icons/fa";

const NavOutline = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
const socialLinks = [
    { id: 1, icon: <FaFacebookF />, href: "https://www.facebook.com/md.robin.ahmed.548869", delay: "delay-[100ms]", label: "Facebook" },
    { id: 2, icon: <FaEnvelope />, href: "https://mail.google.com/mail/u/0/#inbox", delay: "delay-[150ms]", label: "Email" },
    { id: 3, icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/md-robin1/", delay: "delay-[200ms]", label: "LinkedIn" },
    { id: 4, icon: <FaWhatsapp />, href: "https://web.whatsapp.com/", delay: "delay-[250ms]", label: "WhatsApp" },
    { id: 5, icon: <FaUsers />, href: "https://www.facebook.com/groups/1558294782180175/", delay: "delay-[300ms]", label: "FB Group" },
    { id: 6, icon: <FaFlag />, href: "https://www.facebook.com/profile.php?id=61584955424556", delay: "delay-[350ms]", label: "FB Page" },
  ];

  // --- Theme Colors ---
  const CYAN_GLOW = "shadow-[0_0_15px_rgba(6,182,212,0.7)]"; 
  const FUCHSIA_GLOW = "shadow-[0_0_15px_rgba(236,72,153,0.7)]"; 
  const BUTTON_GRADIENT = "bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950";

  const btnClass =
    "relative text-lg rounded-3xl px-4 sm:px-5 py-2 text-white/90 " +
    `hover:${CYAN_GLOW} hover:text-white transition duration-500 ` +
    `animate-border-glow ` + 
    `${BUTTON_GRADIENT} group`; 
  
  const activeBtnClass =
    "relative text-lg ml-25 rounded-3xl px-4 sm:px-5 py-2 text-white " +
    `${CYAN_GLOW} ` + 
    `animate-border-glow ` + 
    `transition duration-500 ${BUTTON_GRADIENT} group`;

  const hoverUnderline =
    "absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left";
  
  const activeUnderline = 
    "absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 transform scale-x-100";

  
  const logoContainerClass = "relative text-xl sm:text-2xl rounded-3xl px-4 sm:px-5 py-2 shadow-lg bg-black " + 
                             `animate-border-glow hover:${CYAN_GLOW} transition duration-500 group`; 

  const logoImageClass = "h-12 sm:h-20 opacity-100 rounded-3xl"; 

  return (
    <nav className="py-3 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <a
            href="#"
            className="flex items-center gap-2 text-center sm:text-left"
          >
            <span className={logoContainerClass}> 
              <img
                src="https://i.ibb.co.com/3ySnHjhQ/100.png"
                className={logoImageClass} // Clear, large logo
                alt="NexaCode Studio Flux Logo"
              />
            </span>
          </a>

          <div className="hidden sm:flex sm:space-x-4 ml-6 sm:ml-20 justify-center flex-1">
            <Link href="/">
              <button className={activeBtnClass}>
                Home <span className={activeUnderline}></span>
              </button>
            </Link>

            <Link href="/About">
              <button className={btnClass}>
                About <span className={hoverUnderline}></span>
              </button>
            </Link>

            <Link href="/Services">
              <button className={btnClass}>
                Services <span className={hoverUnderline}></span>
              </button>
            </Link>

            <Link href="/MyPortfolio">
              <button className={btnClass}>
                Portfolio <span className={hoverUnderline}></span>
              </button>
            </Link>

            {/* <Link href="/Contact">
             <button className={btnClass}>
                Contact <span className={hoverUnderline}></span>
              </button>
            </Link> */}
          </div>

    <button className="relative group min-w-[220px] px-6 py-4 font-medium text-base text-white bg-transparent border-none outline-none overflow-hidden cursor-pointer drop-shadow-[0_2px_8px_rgba(39,94,254,0.32)] transition-all duration-300 ease-[cubic-bezier(0.215,0.61,0.355,1)]">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-[-1] bg-[#275efe] rounded-[24px] transition-transform duration-300 ease-[cubic-bezier(0.215,0.61,0.355,1)] group-hover:scale-[1.2]"></div>

      {/* Main Label: "Contact Us" */}
      <span className="inline-flex items-center transition-all duration-300 delay-[0.05s] ease-[cubic-bezier(0.215,0.61,0.355,1)] group-hover:-translate-y-[60px]">
        <span className="pr-2">Contact Us</span>
        <svg height="18" width="18" viewBox="0 0 1024 1024" className="fill-white">
          <path d="M767.99994 585.142857q75.995429 0 129.462857 53.394286t53.394286 129.462857-53.394286 129.462857-129.462857 53.394286-129.462857-53.394286-53.394286-129.462857q0-6.875429 1.170286-19.456l-205.677714-102.838857q-52.589714 49.152-124.562286 49.152-75.995429 0-129.462857-53.394286t-53.394286-129.462857 53.394286-129.462857 129.462857-53.394286q71.972571 0 124.562286 49.152l205.677714-102.838857q-1.170286-12.580571-1.170286-19.456 0-75.995429 53.394286-129.462857t129.462857-53.394286 129.462857 53.394286 53.394286 129.462857-53.394286 129.462857-129.462857 53.394286q-71.972571 0-124.562286-49.152l-205.677714 102.838857q1.170286 12.580571 1.170286 19.456t-1.170286 19.456l205.677714 102.838857q52.589714-49.152 124.562286-49.152z"></path>
        </svg>
      </span>

      {/* Social Links Icons */}
      <ul className="absolute inset-0 flex items-center justify-center gap-3 m-0 p-0 list-none">
        {socialLinks.map((link) => (
          <li key={link.id} className="block">
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              title={link.label}
              className={`inline-flex text-white text-lg translate-y-[60px] transition-all duration-300 ease-[cubic-bezier(0.215,0.61,0.355,1)] hover:scale-125 hover:text-cyan-300 group-hover:translate-y-0 ${link.delay}`}
            >
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
    </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-black" id="mobile-menu">
          <div className="pt-2 pb-3 space-y-1 text-center">
<Link href="/">
              <button className={activeBtnClass + " w-11/12"}>
                Home <span className={activeUnderline}></span>
              </button>
            </Link>

            <Link href="/About">
              <button className={btnClass + " w-11/12"}>
                About <span className={hoverUnderline}></span>
              </button>
            </Link>

            <Link href="/Services">
              <button className={btnClass + " w-11/12"}>
                Services <span className={hoverUnderline}></span>
              </button>
            </Link>

            <Link href="/MyPortfolio">
              <button className={btnClass + " w-11/12"}>
                Portfolio <span className={hoverUnderline}></span>
              </button>
            </Link>
{/* 
            <Link href="/Contact">
              <button className={btnClass + " w-11/12"}>
                Contact <span className={hoverUnderline}></span>
              </button>
            </Link> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavOutline;