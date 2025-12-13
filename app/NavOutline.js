"use client";

import Link from "next/link";
import React, { useState } from "react";
import { RxDragHandleHorizontal } from "react-icons/rx";

const NavOutline = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

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
                src="https://i.ibb.co.com/cXNstw9k/Nexa-Code-Studio-Flux.png"
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

            <Link href="/Contact">
             <button className={btnClass}>
                Contact <span className={hoverUnderline}></span>
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button - Cyan color for visibility */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              onClick={toggleMobileMenu}
              className="inline-flex items-center p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset text-cyan-400"
            >
              <RxDragHandleHorizontal size={24} />
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
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

            <Link href="/Contact">
              <button className={btnClass + " w-11/12"}>
                Contact <span className={hoverUnderline}></span>
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavOutline;