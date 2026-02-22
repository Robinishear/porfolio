"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Code2, Database, Figma, Globe, Layout, ShieldCheck, Zap,
  Github, Mail, Server, Cpu, Workflow, Box as LucideBox,
  Layers3, Braces, Rocket, Sparkles, Wind, Palette,
  FileJson, Lock, GitBranch, Leaf,
} from "lucide-react";
import { 
  FaFileAlt, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJsSquare 
} from "react-icons/fa";
import { 
  SiTailwindcss, SiNextdotjs, SiTypescript, SiExpress, 
  SiPostgresql, SiMongodb, SiPrisma, SiSupabase, SiFirebase, SiGo 
} from "react-icons/si";

// ---  Cinematic Skill Card ---
const SkillCard = ({ name, icon: Icon, glowColor, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 30 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ 
      duration: 0.6, 
      delay: index * 0.04,
      type: "spring",
      stiffness: 120
    }}
    whileHover={{ y: -12, transition: { duration: 0.2 } }}
    className="relative group perspective-1000"
  >
    {/* 🌀 Rotating Neon Ring (4-side animation) */}
    <div 
      className="absolute inset-[-2px] animate-[spin_6s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
      style={{
        background: `conic-gradient(from 0deg, transparent, ${glowColor}, transparent 40%)`
      }}
    />

    {/* Card Main Body */}
    <div className="relative flex flex-col items-center justify-center p-6 md:p-8 bg-[#050510]/80 backdrop-blur-3xl rounded-2xl h-full w-full border border-white/5 group-hover:border-white/20 transition-all duration-500 overflow-hidden">
      
      {/* ⚡ Electric Background Pulse */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 80%)` }}
      />

      {/* 🎨 Floating Icon with Dynamic Glow */}
      <motion.div
        animate={{ 
          y: [0, -8, 0],
          rotateZ: [0, 5, -5, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="text-4xl md:text-5xl mb-5 z-10 transition-transform duration-500 group-hover:scale-125"
        style={{ 
          color: glowColor,
          filter: `drop-shadow(0 0 15px ${glowColor}77)` 
        }}
      >
        <Icon />
      </motion.div>

      {/* 🏷️ Name with Glow Text */}
      <span className="relative z-10 text-[10px] md:text-[12px] font-black tracking-[0.25em] text-gray-400 group-hover:text-white group-hover:drop-shadow-[0_0_8px_#fff] transition-all duration-300 uppercase">
        {name}
      </span>

      {/* Card Bottom Light Strip */}
      <div 
        className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 opacity-80"
        style={{ backgroundColor: glowColor, boxShadow: `0 0 15px ${glowColor}` }}
      />
    </div>
  </motion.div>
);

export default function About() {
  const skills = [
   { name: "HTML", icon: FaHtml5, glowColor: "#E34F26" },
    { name: "CSS", icon: FaCss3Alt, glowColor: "#1572B6" },
    { name: "Tailwind", icon: SiTailwindcss, glowColor: "#06B6D4" },
    { name: "Shadcn UI", icon: Layout, glowColor: "#FFFFFF" },
    { name: "Next.js", icon: SiNextdotjs, glowColor: "#FFFFFF" },
    { name: "React.js", icon: FaReact, glowColor: "#61DAFB" },
    { name: "JS/TS", icon: SiTypescript, glowColor: "#3178C6" },
    { name: "Node.js", icon: FaNodeJs, glowColor: "#339933" },
    { name: "Express", icon: SiExpress, glowColor: "#828282" },
    { name: "Golang", icon: SiGo, glowColor: "#00ADD8" },
    { name: "PostgreSQL", icon: SiPostgresql, glowColor: "#4169E1" },
    { name: "MongoDB", icon: SiMongodb, glowColor: "#47A248" },
    { name: "Mongoose", icon: Workflow, glowColor: "#880000" },
    { name: "MySQL", icon: Database, glowColor: "#4479A1" },
    { name: "SQL Server", icon: Layers3, glowColor: "#CC2927" },
    { name: "Prisma", icon: SiPrisma, glowColor: "#2D3748" },
    { name: "Supabase", icon: SiSupabase, glowColor: "#3ECF8E" },
    { name: "Firebase", icon: SiFirebase, glowColor: "#FFCA28" },
    { name: "Better-Auth", icon: ShieldCheck, glowColor: "#F59E0B" },
    { name: "Auth", icon: Lock, glowColor: "#EAB308" },
    { name: "Figma", icon: Figma, glowColor: "#F24E1E" },
    { name: "Git", icon: GitBranch, glowColor: "#F05032" },
    { name: "GitHub", icon: Github, glowColor: "#FFFFFF" },
  ];

  return (
    <main className="min-h-screen  text-white selection:bg-cyan-500/40 overflow-x-hidden">
      
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-900/50 blur-[180px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-900/50 blur-[150px] rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-24 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative inline-block"
        >
          <div className="absolute -inset-4 bg-cyan-500/10 blur-3xl rounded-full" />
          <h1 className="relative text-[42px] md:text-[120px] font-black italic tracking-tighter leading-none mb-6">
            THE <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-500 drop-shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              SKILLS!
            </span>
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.5 }}
          className="max-w-xl mx-auto text-gray-400 text-xs md:text-xl font-light tracking-[0.3em] uppercase mb-12 italic"
        >
          Expertise Level: Master of Modern Stacks
        </motion.p>
      </section>

      {/* ---  SKILLS GRID --- */}
      <section className="py-10 px-4 md:px-20 lg:px-32 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 md:gap-8">
          {skills.map((skill, i) => (
            <SkillCard key={i} {...skill} index={i} />
          ))}
        </div>
      </section>

   
      <style jsx global>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        body { background-color: #010108; }
      `}</style>
    </main>
  );
}