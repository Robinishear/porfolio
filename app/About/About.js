"use client";

import React from "react";
import { motion } from "framer-motion"; // অ্যানিমেশনের জন্য
import {
  Code2, Database, Figma, Globe, Layers, Layout, ShieldCheck, Zap,
  Github, Linkedin, Mail, ExternalLink, Server, Terminal, Cpu, 
  Workflow, Box, Command, Layers3, Send, Braces, Rocket, Hexagon, Sparkles
} from "lucide-react";

// --- Variants for Animations ---
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

// --- Neon Skill Card Component ---
const SkillCard = ({ name, icon: Icon, color, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    whileHover={{ y: -10, rotate: index % 2 === 0 ? 2 : -2 }}
    transition={{ duration: 0.3 }}
    viewport={{ once: true }}
    className="relative group cursor-pointer"
  >
    <div className={`absolute -inset-1 bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-500 group-hover:duration-200`}></div>
    <div className="relative flex flex-col items-center p-6 bg-[#0B0F1A] rounded-2xl border border-white/10">
      <div className={`p-4 rounded-xl bg-gray-900 shadow-lg mb-3 ${color} group-hover:animate-bounce`}>
        <Icon size={32} />
      </div>
      <span className="text-sm font-black tracking-widest text-white uppercase">{name}</span>
    </div>
  </motion.div>
);

export default function PortfolioPage() {
  const skills = [
    { name: "Next.js", icon: Globe, color: "text-white" },
    { name: "React.js", icon: Zap, color: "text-sky-400" },
    { name: "Express.js", icon: Braces, color: "text-yellow-400" },
    { name: "Node.js", icon: Server, color: "text-green-500" },
    { name: "Golang", icon: Cpu, color: "text-cyan-400" },
    { name: "MongoDB", icon: Database, color: "text-emerald-500" },
    { name: "Mongoose", icon: Workflow, color: "text-red-500" },
    { name: "Firebase", icon: ShieldCheck, color: "text-orange-400" },
    { name: "SQL Server", icon: Layers3, color: "text-blue-600" },
    { name: "MySQL", icon: Database, color: "text-blue-400" },
    { name: "Tailwind", icon: Box, color: "text-sky-300" },
    { name: "Figma", icon: Figma, color: "text-pink-500" },
    { name: "Git", icon: Terminal, color: "text-orange-500" },
    { name: "JS/TS", icon: Code2, color: "text-yellow-300" },
    { name: "GitHub", icon: Github, color: "text-white" },
  ];

  return (
    <main className="bg-[#030712] text-white min-h-screen overflow-hidden selection:bg-pink-500">
      
      {/* --- ANIMATED BACKGROUND --- */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-sky-500/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }} 
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-gradient-to-r from-pink-500/20 to-sky-500/20 border border-white/10 text-pink-400 text-xs font-bold uppercase tracking-[0.3em]"
          >
            <Sparkles size={16} /> Open for Collaborations
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl font-black mb-8 leading-[0.8] tracking-tighter"
          >
            FULL <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500 animate-gradient-x">STACK</span><br />
            <span className="italic">VISIONARY</span>
          </motion.h1>

          <motion.p 
            {...fadeInUp}
            className="max-w-2xl mx-auto text-gray-400 text-xl mb-12"
          >
            Express.js, Next.js এবং আধুনিক ডাটাবেস সলিউশন দিয়ে আমি আপনার আইডিয়াকে বাস্তবে রূপান্তর করি।
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <button className="relative group px-12 py-5 font-black uppercase tracking-widest overflow-hidden rounded-2xl bg-white text-black transition-all hover:scale-105">
              <span className="relative z-10">Hire Me Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-sky-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
            <button className="px-12 py-5 border-2 border-white/10 rounded-2xl font-black uppercase tracking-widest hover:bg-white/5 transition-all">
              My Resume
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- COLORFUL SKILLS GRID --- */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col md:flex-row md:items-center gap-6 mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black italic uppercase">The <span className="text-sky-500">Toolkit</span></h2>
            <div className="h-2 flex-1 bg-gradient-to-r from-sky-500 via-purple-500 to-transparent rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {skills.map((skill, i) => (
              <SkillCard key={i} {...skill} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* --- ANIMATED PROJECT SECTION --- */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="relative aspect-video rounded-[3rem] overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-sky-600 opacity-40 group-hover:opacity-60 transition-opacity"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="bg-white/10 backdrop-blur-md p-10 rounded-full border border-white/20 group-hover:scale-110 transition-transform">
                    <Rocket size={50} className="text-white" />
                 </div>
              </div>
            </motion.div>
            
            <div className="space-y-8">
              <h2 className="text-6xl font-black leading-none">CRAFTING <br/> <span className="text-pink-500">LEGENDS.</span></h2>
              <p className="text-gray-400 text-lg">
                আমি শুধু ওয়েবসাইট বানাই না, আমি ডিজিটাল অভিজ্ঞতা তৈরি করি যা ইউজারদের মনে গেঁথে থাকে। Express.js ব্যাকএন্ড থেকে শুরু করে Next.js ফ্রন্টএন্ড—সবখানেই আমি পারফেকশন খুঁজি।
              </p>
              <div className="flex gap-4">
                <div className="h-1 w-20 bg-sky-500"></div>
                <div className="h-1 w-20 bg-purple-500"></div>
                <div className="h-1 w-20 bg-pink-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- NEON CTA --- */}
      <section className="py-32 px-6">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="max-w-5xl mx-auto bg-[#0F172A] border-2 border-sky-500/30 p-12 md:p-24 rounded-[4rem] text-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter">গল্প শুরু <br/> করা যাক?</h2>
          <button className="px-16 py-6 bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 text-white font-black text-2xl rounded-2xl hover:shadow-[0_0_50px_rgba(14,165,233,0.5)] transition-all">
            GET IN TOUCH
          </button>
        </motion.div>
      </section>

      <footer className="py-10 text-center text-gray-500 font-bold tracking-[0.5em] uppercase text-xs">
        Design and Developed with Passion 2025
      </footer>
    </main>
  );
}