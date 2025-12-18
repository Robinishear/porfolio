"use client";

import React from "react";
import Head from "next/head";

const AnimatedCard = ({ children }) => {
    return (
        <div className="relative p-0.5 rounded-xl overflow-hidden bg-black transition-all duration-300 transform hover:scale-[1.03] hover:shadow-2xl hover:shadow-cyan-500/30">
            {/* The Shimmering Border Layer */}
            <div className="absolute inset-0 bg-border-gradient bg-[length:200%_auto] rounded-[11px] animate-shimmer opacity-50"></div>
            
            {/* The Content Layer */}
            <div className="relative bg-[#1a1e3d] p-6 rounded-xl h-full shadow-lg">
                {children}
            </div>
        </div>
    );
};

// --- Custom Component for Hover-Fill Button ---
// Uses the 'wave-fill' concept to create a glowing overlay on hover
const AnimatedButton = ({ children, className = '' }) => {
    const DARK_BUTTON_GRADIENT = "bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950";
    const FUCHSIA_COLOR = "bg-fuchsia-500/70";

    return (
        <button className={`group relative overflow-hidden text-lg rounded-full py-3 px-8 font-semibold text-white ${DARK_BUTTON_GRADIENT} transition-transform hover:scale-105 ${className}`}>
            {/* Hover Fill Effect (Hidden by default) */}
            <span className={`absolute inset-0 z-0 ${FUCHSIA_COLOR} origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100`}></span>
            
            {/* Text Layer (ensures text stays visible and slightly glows) */}
            <span className="relative z-10 transition-colors duration-500 group-hover:text-white/90 group-hover:shadow-lg">
                {children}
            </span>
        </button>
    );
};


export default function Page() {
  // --- Theme Utility Classes for Consistency ---
  const DUAL_GRADIENT_TEXT = "bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500";
  const CYAN_GLOW = "shadow-[0_0_20px_rgba(6,182,212,0.8)]"; 
  const FUCHSIA_GLOW = "shadow-[0_0_20px_rgba(236,72,153,0.8)]"; 


  return (
    <>
      <Head>
        <title>NexaCode Studio Flux - AI-powered digital experiences</title>
      </Head>

      <div className="min-h-screen bg-[#050616] text-white font-sans">
        {/* ================= HERO SECTION ================= */}
        <section className="relative pt-32 pb-40 px-6 md:px-20 overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a38] via-[#0d0922] to-[#050616] opacity-90"></div>

          {/* Top Small Banner (Subtle Pulse Motion) */}
          <div className="relative z-10 text-center mb-6">
            <span className={`bg-white/10 px-4 py-1 rounded-full text-sm ${DUAL_GRADIENT_TEXT} border border-cyan-500/30 animate-pulse duration-[4000ms]`}>
              Introducing, the Agent Orchestration Platform for Marketing →
            </span>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-7xl font-extrabold leading-snug">
              AI-powered digital <br />
              {/* 🟢 CHANGE 1: H1 Text with Subtle Glitch Animation */}
              <span className={`${DUAL_GRADIENT_TEXT} inline-block animate-text-glitch`}>
                experiences that
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-300">
              Create content fast. Personalize with ease. Test, analyze,
              <br />
              and repeat. Then scale it all with AI and see what your team is
              capable of.
            </p>

            {/* 🟢 CHANGE 2: Hero Button using AnimatedButton component */}
            <AnimatedButton className="mt-8">
              Start accelerating
            </AnimatedButton>
          </div>

          {/* Big Circle Glow adjusted to Cyan/Fuchsia */}
          <div className="absolute w-[900px] h-[900px] bg-gradient-to-t from-fuchsia-800/40 via-cyan-800/40 to-transparent rounded-full bottom-[-350px] left-1/2 -translate-x-1/2 blur-3xl"></div>
        </section>

        {/* ================= PRODUCT BANNER (STRIDE LIKE IMAGE) ================= */}
        <section className="relative z-20 -mt-28 px-6 md:px-20">
          <div className="max-w-6xl mx-auto bg-[#0e0f2a] rounded-2xl border border-cyan-500/20 shadow-2xl overflow-hidden">
            <div className="p-4 md:p-10 flex flex-col lg:flex-row items-center justify-between">
              <div className="w-full lg:w-1/2">
                <h2 className="text-4xl font-bold mb-3">
                  Set it. Sweat it. Send it.
                </h2>
                <p className="text-gray-300 mb-6">
                  Let the streets, and the world know.
                </p>
                {/* 🟢 CHANGE 3: CTA Button using AnimatedButton component */}
                <AnimatedButton>
                  Get Started
                </AnimatedButton>
              </div>

              <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
                <img
                  src="https://i.ibb.co.com/3ySnHjhQ/100.png"
                  className={`rounded-lg shadow-lg ${CYAN_GLOW}`}
                  alt="Stride Mockup"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= TRUST BAR =================
        <section className="py-16 px-6 md:px-20">
          <div className="max-w-6xl mx-auto flex justify-center items-center space-x-12 opacity-80 border-t border-b border-cyan-500/10 py-4">
            <img src="https://i.ibb.co.com/5xnLVVH0/Macbook-Air-localhost-3.png" className="h-6 opacity-60 hover:opacity-100 transition duration-300 hover:scale-110" alt="Trust Bar Logo" />
            <img src="https://i.ibb.co.com/jZ1bqHps/download-4.png" className="h-6 opacity-60 hover:opacity-100 transition duration-300 hover:scale-110" alt="Trust Bar Logo" />
            <img src="https://i.ibb.co.com/jZ1bqHps/download-4.png" className="h-6 opacity-60 hover:opacity-100 transition duration-300 hover:scale-110" alt="Trust Bar Logo" />
            <img src="https://i.ibb.co.com/jZ1bqHps/download-4.png" className="h-6 opacity-60 hover:opacity-100 transition duration-300 hover:scale-110" alt="Trust Bar Logo" />
            <img src="https://i.ibb.co.com/jZ1bqHps/download-4.png" className="h-6 opacity-60 hover:opacity-100 transition duration-300 hover:scale-110" alt="Trust Bar Logo" />
          </div>
        </section> */}

        {/* ================= TITLE SECTION ================= */}
        <section className="py-20 px-6 md:px-20 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-4xl mx-auto">
            Everything you need to run <br /> marketing, all in{" "}
            <span className={DUAL_GRADIENT_TEXT + " font-black"}>
              One
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            AI-powered and best-in-class (12x and counting)
          </p>
        </section>

        {/* ================= AI SECTION ================= */}
        <section className="py-32 px-6 md:px-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* LEFT TEXT */}
            <div className="lg:pr-10">
              <h3 className="text-5xl font-extrabold mb-6">
                Did we mention AI?
              </h3>
              <p className="text-gray-300 text-lg mb-6 max-w-lg">
                Meet Optimizely Opal: your infinite workforce powered by
                specialized AI agents, always consistent with your brand,
                connected across your workflows.
              </p>

              <button className={`font-medium ${DUAL_GRADIENT_TEXT} hover:opacity-80 transition duration-300`}>
                Discover how to make your “wow” →
              </button>
            </div>

            {/* 🟢 CHANGE 4: RIGHT CARDS using AnimatedCard component */}
            <div className="grid grid-cols-2 gap-6">
              <AnimatedCard>
                <p className="text-gray-300 text-sm">Content creator agent</p>
              </AnimatedCard>

              <AnimatedCard>
                <p className="text-gray-300 text-sm">Experiment ideas agent</p>
              </AnimatedCard>

              <AnimatedCard>
                <p className="text-gray-300 text-sm">External comms agent</p>
              </AnimatedCard>
              
               <AnimatedCard>
                <p className="text-gray-300 text-sm">Deployment agent</p>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* ================= CONTACT SECTION ================= */}
        <section className="py-32 px-6 md:px-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* LEFT - Contact Info */}
            <div className={`bg-[#0c1029] p-10 rounded-xl border border-cyan-500/20 shadow-xl transition-shadow hover:${FUCHSIA_GLOW}`}>
              <h3 className="text-3xl font-bold mb-6">Get in touch</h3>
              <p className="text-gray-300 mb-6">
                But you probably have a ton of questions. How can this ingenious
                solution supercharge your business?
              </p>

              <ul className="text-gray-300 space-y-4">
                <li className="text-cyan-400">
                  <span className="text-white">➤ Technical essentials to make everything work seamlessly</span>
                </li>
                <li className="text-cyan-400">
                  <span className="text-white">➤ Tailored demos designed just for your unique needs</span>
                </li>
                <li className="text-cyan-400">
                  <span className="text-white">➤ Pricing to suit your budget</span>
                </li>
              </ul>
            </div>

            {/* RIGHT - Form */}
            <div>
              <h3 className="text-xl font-medium mb-4">
                Just a few details first
              </h3>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="john.doe@optimizely.com"
                  className="w-full bg-[#1d2247] text-white p-3 rounded border border-transparent focus:ring-1 focus:ring-cyan-500"
                />

                {/* 🟢 CHANGE 5: Form Button using AnimatedButton component */}
                <AnimatedButton>
                  Next
                </AnimatedButton>
              </form>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}