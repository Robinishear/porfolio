"use client";

import React from "react";
import Head from "next/head";

// --- Shimmer Card Component ---
const AnimatedCard = ({ children }) => {
    return (
        <div className="relative p-[1px] rounded-2xl overflow-hidden bg-white/10 transition-all duration-500 hover:scale-[1.02]">
            {/* Shimmering Border */}
            <div className="absolute inset-0 bg-border-gradient bg-[length:200%_auto] animate-shimmer opacity-70"></div>
            
            {/* Content Container */}
            <div className="relative bg-[#0b0e29] p-8 rounded-[15px] h-full">
                {children}
            </div>
        </div>
    );
};

// --- Hover-Fill Button Component ---
const AnimatedButton = ({ children, className = '', type = "button" }) => {
    return (
        <button 
            type={type}
            className={`group relative overflow-hidden text-lg rounded-full py-4 px-10 font-bold text-white bg-white/5 border border-white/10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(217,70,239,0.4)] active:scale-95 ${className}`}
        >
            <span className="absolute inset-0 z-0 bg-gradient-to-r from-cyan-500 to-fuchsia-600 origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"></span>
            <span className="relative z-10">{children}</span>
        </button>
    );
};

export default function Page() {
  const DUAL_GRADIENT_TEXT = "bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white to-fuchsia-500";
  const CYAN_GLOW = "shadow-[0_0_40px_rgba(6,182,212,0.2)]"; 

  return (
    <>
      <Head>
        <title>NexaCode Studio Flux | Next-Gen AI Experiences</title>
      </Head>

      <div className="min-h-screen bg-[#050616] text-white font-sans selection:bg-fuchsia-500/30">
        
        {/* ================= HERO SECTION ================= */}
        <section className="relative pt-32 pb-48 px-6 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent blur-3xl"></div>
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 backdrop-blur-md animate-bounce">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span className="text-sm font-medium text-cyan-200">AI-Powered Developer Platform v2.0</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-[1.1] mb-8">
              AI-powered digital <br />
              <span className={`${DUAL_GRADIENT_TEXT} animate-text-glitch`}>
                experiences
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed mb-10">
Create stunning websites quickly, customize with precision, and elevate your brand using cutting-edge web development techniques.            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <AnimatedButton>Start Accelerating</AnimatedButton>
                <button className="px-8 py-4 rounded-full font-semibold border border-white/10 hover:bg-white/5 transition-colors">
                    Watch Demo
                </button>
            </div>
          </div>
        </section>

        {/* ================= PRODUCT SHOWCASE ================= */}
        <section className="relative z-20 -mt-20 px-6 max-w-7xl mx-auto">
            <AnimatedCard>
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-1">
                        <h2 className="text-4xl font-bold mb-4 italic uppercase">Set it. Work hard. Launch it.</h2>
                        <p className="text-gray-400 text-lg mb-8">
My system automatically handles the complex and time-consuming tasks, so you can focus entirely on your ideas and creative vision. Show me what you’re building.                        </p>
                        <AnimatedButton className="text-sm py-3 px-6">Explore Features</AnimatedButton>
                    </div>
                    <div className="flex-1 relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                        <img
                            src="https://i.ibb.co.com/zV4B3cSR/add.png"
                            className={`relative rounded-lg w-full ${CYAN_GLOW}`}
                            alt="Dashboard Preview"
                        />
                    </div>
                </div>
            </AnimatedCard>
        </section>

        {/* ================= CONTACT SECTION ================= */}
        <section className="py-40 px-6 relative">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-5xl font-bold mb-6">
            Let’s Build a Powerful & Extraordinary<br />
                <span className="text-cyan-400"> Website Together</span>
              </h2>
              <p className="text-gray-400 text-lg mb-12">
           If you have any questions or need more information, feel free to message me in the inbox. I’ll reply to you personally.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-2xl border border-white/10 group-hover:border-cyan-500/50 transition-colors">📍</div>
                  <div><h4 className="font-bold text-xl text-white">Dhaka, Bangladesh</h4><p className="text-gray-500">Available Globally</p></div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-2xl border border-white/10 group-hover:border-fuchsia-500/50 transition-colors">📧</div>
                  <div><h4 className="font-bold text-xl text-white">mdrobinahmed57898@gmail.com</h4><p className="text-gray-500">Fast Response</p></div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/10 to-fuchsia-500/10 blur-2xl rounded-[40px]"></div>
              <div className="relative bg-white/5 backdrop-blur-3xl p-10 rounded-[32px] border border-white/10 shadow-2xl">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-gray-400 ml-1">Name</label>
                      <input type="text" className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-cyan-500/50 outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-gray-400 ml-1">Email</label>
                      <input type="email" className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-cyan-500/50 outline-none transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-gray-400 ml-1">Message</label>
                    <textarea rows="4" className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-cyan-500/50 outline-none transition-all"></textarea>
                  </div>
                  <AnimatedButton type="submit" className="w-full">Send Message</AnimatedButton>
                </form>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}