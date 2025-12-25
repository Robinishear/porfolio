"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaBriefcase, FaArrowRight, FaEnvelope, FaLinkedinIn, 
  FaGithub, FaJs, FaPython, FaDownload, FaBookOpen, FaPlus
} from "react-icons/fa";
import { SiTypescript, SiGo, SiNextdotjs, SiTailwindcss, SiFramer } from "react-icons/si";

const ProfessionalProfile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const techStack = [
    { icon: <FaJs />, name: "JavaScript", color: "text-yellow-400" },
    { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-400" },
    { icon: <SiGo />, name: "Golang", color: "text-cyan-300" },
    { icon: <SiNextdotjs />, name: "Next.js", color: "text-white" },
    { icon: <SiTailwindcss />, name: "Tailwind", color: "text-sky-300" },
    { icon: <FaPython />, name: "Python", color: "text-blue-500" },
    { icon: <SiFramer />, name: "Framer", color: "text-pink-500" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden relative">
      
      {/* --- Noise Texture Overlay --- */}
      <div className="fixed inset-0 z-[99] opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* --- Animated Background Gradient --- */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-cyan-600/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-800/10 blur-[150px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10">
        {/* --- Hero Section --- */}
        <section className="h-screen flex flex-col justify-center items-center px-6 relative">
          
          {/* Floating Badge */}
          <motion.div 
            initial={{ y: -20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            className="mb-8 px-6 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-xl flex items-center gap-3"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-300">Open for Collaborations</span>
          </motion.div>

          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[15vw] leading-[0.75] font-black tracking-tighter uppercase italic mb-8"
            >
              M'R <span className="text-outline-thin text-transparent">ROBIN</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-2xl text-slate-400 font-light tracking-widest uppercase mb-12"
            >
              Full Stack <span className="text-white font-bold">Sorcerer</span> — 2025 Edition
            </motion.p>

            {/* --- UNIQUE EXPANDABLE BUTTON SYSTEM --- */}
            <div className="flex flex-col items-center gap-4 relative">
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-white text-black rounded-2xl font-black uppercase text-[10px] tracking-widest hover:scale-105 transition-transform">
                  CONTACTE
                </button>

                <div className="relative">
                  <motion.button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className={`h-14 w-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${isMenuOpen ? 'bg-cyan-500 rotate-45' : 'bg-white/10 border border-white/20 hover:bg-white/20'}`}
                  >
                    <FaPlus className="text-xl" />
                  </motion.button>

                  {/* Expandable Menu */}
                  <AnimatePresence>
                    {isMenuOpen && (
                      <motion.div 
                        initial={{ opacity: 0, x: 20, scale: 0.8 }}
                        animate={{ opacity: 1, x: 70, scale: 1 }}
                        exit={{ opacity: 0, x: 20, scale: 0.8 }}
                        className="absolute top-0 left-0 flex gap-3 pointer-events-auto"
                      >
                        <button className="whitespace-nowrap flex items-center gap-3 px-6 py-4 bg-cyan-600 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-cyan-500 transition-all shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                          <FaDownload /> DAOWNLODE CV
                        </button>
                        <button className="whitespace-nowrap flex items-center gap-3 px-6 py-4 bg-slate-800 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-700 transition-all">
                          <FaBookOpen /> DOWNLODE RESUMI 
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Skill Marquee (Modern Look) --- */}
        <div className="py-10 bg-white/5 border-y border-white/5 backdrop-blur-md rotate-[-1deg] scale-110">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-20 items-center whitespace-nowrap"
          >
            {[...techStack, ...techStack].map((tech, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="text-2xl text-cyan-500">{tech.icon}</span>
                <span className="text-2xl font-black italic tracking-tighter uppercase opacity-50">{tech.name}</span>
                <span className="w-2 h-2 bg-white/20 rounded-full" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* --- Bento Section with Depth --- */}
        <section className="max-w-7xl mx-auto px-6 py-40">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-7 group relative bg-gradient-to-br from-[#111] to-[#080808] p-12 rounded-[2.5rem] border border-white/5 overflow-hidden">
                <div className="relative z-10">
                   <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-8 border border-cyan-500/20">
                      <FaBriefcase className="text-cyan-500" />
                   </div>
                   <h3 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-6 uppercase">System <br/> Architect</h3>
                   <p className="text-slate-400 text-lg leading-relaxed max-w-md font-light">
                      আমি কোড দিয়ে গল্প বলি। হাই-পারফরম্যান্স স্কেলেবল সিস্টেম থেকে শুরু করে পিক্সেল-পারফেক্ট ফ্রন্টএন্ড ডিজাইন—সবই আমার সিগনেচার স্টাইল।
                   </p>
                </div>
                {/* Visual element */}
                <div className="absolute top-10 right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                   <FaJs className="text-[15rem]" />
                </div>
            </div>

            <div className="md:col-span-5 bg-cyan-600 p-12 rounded-[2.5rem] flex flex-col justify-between group cursor-pointer overflow-hidden relative">
               <div className="relative z-10">
                 <h3 className="text-3xl font-black uppercase italic leading-none">Let's build <br/> something <br/> iconic.</h3>
               </div>
               <div className="relative z-10 mt-20 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest">Start a project</span>
                  <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center group-hover:translate-x-2 transition-transform">
                    <FaArrowRight className="-rotate-45" />
                  </div>
               </div>
               {/* Animated Circle */}
               <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
            </div>
          </div>
        </section>

        {/* --- Works Section --- */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex justify-between items-end mb-20 border-b border-white/10 pb-10">
            <h2 className="text-6xl font-black italic tracking-tighter uppercase">Selected <span className="text-outline-thin text-transparent">Works</span></h2>
            <p className="text-xs font-mono text-cyan-500 pb-2 italic">/ View all 24 projects</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <ProjectCard 
                name="Astro Dashboard" 
                category="Full Stack Application" 
                image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" 
             />
             <ProjectCard 
                name="Titan Commerce" 
                category="E-commerce Engine" 
                image="https://i.ibb.co.com/67PDKBpy/showing-cart-trolley-shopping-online-sign-graphic.jpg" 
             />
             <ProjectCard 
                name="" 
                category="" 
                image="https://i.ibb.co.com/V0S1bwFy/ray-so-export.png" 
             />
             <ProjectCard 
                name="" 
                category="" 
                image="https://i.ibb.co.com/V0S1bwFy/ray-so-export.png" 
             />
          </div>
        </section>

        {/* --- Final Footer --- */}
        <footer className="py-40 text-center relative overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />
           <h2 className="text-[10vw] font-black uppercase italic leading-none mb-12 relative z-10">
             Ready to <span className="text-cyan-500">Scale?</span>
           </h2>
           <div className="flex justify-center gap-6 relative z-10">
             <SocialIcon icon={<FaGithub />} />
             <SocialIcon icon={<FaLinkedinIn />} />
             <SocialIcon icon={<FaEnvelope />} />
           </div>
        </footer>
      </div>

      <style jsx global>{`
        .text-outline-thin { -webkit-text-stroke: 1px rgba(255,255,255,0.3); }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: #222; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #06b6d4; }
      `}</style>
    </div>
  );
};

const ProjectCard = ({ name, category, image }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group cursor-none"
  >
    <div className="relative aspect-video overflow-hidden rounded-[2rem] border border-white/10 mb-6">
      <img src={image} alt={name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-[1s]" />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <div className="px-6 py-3 bg-white text-black rounded-full font-bold text-xs uppercase tracking-widest scale-75 group-hover:scale-100 transition-transform">View Case Study</div>
      </div>
    </div>
    <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-1">{name}</h3>
    <p className="text-cyan-500 font-mono text-[10px] uppercase tracking-widest">{category}</p>
  </motion.div>
);

const SocialIcon = ({ icon }) => (
  <motion.button 
    whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,1)', color: '#000' }}
    className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-lg transition-all"
  >
    {icon}
  </motion.button>
);

export default ProfessionalProfile;