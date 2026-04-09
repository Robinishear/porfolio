"use client";

import React from "react";

// --- Shimmer Card Component ---
const AnimatedCard = ({ children }) => {
    return (
        <div className="relative p-px bg-white/3 rounded-xl overflow-hidden transition-all duration-500">
            <div className="absolute inset-0 bg-linear-to-r bg-size-[200%_auto] animate-[shimmer_4s_linear_infinite] opacity-70"></div>
            <div className="relative p-4 md:p-12 rounded-[14px] h-full  backdrop-blur-xl border border-white/5">
                {children}
            </div>
        </div>
    );
};

// --- Hover-Fill Button Component hi---
const AnimatedButton = ({ children, className = '', type = "button" }) => {
    return (
        <button 
            type={type}
            className={`group relative overflow-hidden text-[10px] md:text-lg rounded-full py-2.5 md:py-4 px-4 md:px-10 font-bold text-white bg-white/5 border border-white/10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(217,70,239,0.4)] active:scale-95 whitespace-nowrap ${className}`}
        >
            <span className="absolute inset-0 z-0 bg-linear-to-r from-cyan-500 to-fuchsia-600 origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"></span>
            <span className="relative z-10">{children}</span>
        </button>
    );
};

export default function Home() {
  const DUAL_GRADIENT_TEXT = "bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white to-fuchsia-500";
  const CYAN_GLOW = "shadow-[0_0_40px_rgba(6,182,212,0.2)]"; 

  return (
    <div className="min-h-screen  text-white selection:bg-cyan-500/30 overflow-x-hidden">
        
        {/* ================= HERO SECTION ================= */}
        <section className="relative pt-20 pb-24 px-2 md:px-6 overflow-hidden">
          <div className="relative z-10 max-w-full mx-auto text-center">
            
            <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/10 px-3 py-1.5 rounded-full mb-6 backdrop-blur-md">
                <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500"></span>
                </span>
                <span className="text-[9px] md:text-sm font-medium text-cyan-200 whitespace-nowrap tracking-tighter uppercase">AI-Powered Developer</span>
            </div>

            <h1 className="w-full text-[18px] sm:text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6 whitespace-nowrap">
              AI-powered digital <span className={DUAL_GRADIENT_TEXT}>experiences</span>
            </h1>

            <p className="max-w-full mx-auto text-gray-400 text-[10px] md:text-xl leading-relaxed mb-8 px-2">
              Create stunning websites quickly, customize with precision, and elevate your brand.
            </p>

            <div className="flex flex-row items-center justify-center gap-2 md:gap-6">
                <AnimatedButton>Start Accelerating</AnimatedButton>
                <button className="px-4 md:px-8 py-2.5 md:py-4 rounded-full text-[10px] md:text-base font-semibold border border-white/10 hover:bg-white/5 transition-colors whitespace-nowrap">
                    Watch Demo
                </button>
            </div>
          </div>
        </section>

        {/* ================= PRODUCT SHOWCASE ================= */}
        <section className="relative z-20 px-2 md:px-6 max-w-7xl mx-auto pb-16">
            <AnimatedCard>
                <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-16">
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-[16px] md:text-5xl font-black mb-3 italic uppercase tracking-tighter whitespace-nowrap">
                          Set it. Work hard. Launch it.
                        </h2>
                        <p className="text-gray-400 text-[9px] md:text-lg mb-6 leading-tight max-w-full">
                          My system automatically handles complex tasks, so you can focus on your vision.
                        </p>
                        <AnimatedButton className="text-[9px] md:text-sm py-2 px-4 w-auto">Explore Features</AnimatedButton>
                    </div>
                    
                    <div className="flex-1 relative group w-full">
                        <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 to-fuchsia-500 rounded-lg blur opacity-10"></div>
                        <img
                            src="https://i.ibb.co.com/zV4B3cSR/add.png"
                            className={`relative rounded-lg w-full h-auto ${CYAN_GLOW}`}
                            alt="Dashboard"
                        />
                    </div>
                </div>
            </AnimatedCard>
        </section>

        <style jsx global>{`
            @keyframes shimmer {
                0% { background-position: -200% 0; }
                100% { background-position: 200% 0; }
            }
        `}</style>
    </div>
  );
}