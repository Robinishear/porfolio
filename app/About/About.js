"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Code2, Database, Figma, Globe, Layout, ShieldCheck, Zap,
  Github, Mail, Server, Cpu, Workflow, Box as LucideBox,
  Layers3, Braces, Rocket, Sparkles, Wind, Palette,
  FileJson, Lock, GitBranch, Leaf,
} from "lucide-react";

// --- Ultra-Modern Skill Card Component ---
const SkillCard = ({ name, icon: Icon, color, glowColor, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5, rotateX: 45 }}
    whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
    whileHover={{ 
      y: -10, 
      scale: 1.05,
      transition: { duration: 0.2 } 
    }}
    transition={{ 
      duration: 0.5, 
      delay: index * 0.03,
      type: "spring",
      stiffness: 100 
    }}
    viewport={{ once: true }}
    className="relative group perspective-1000"
  >
    {/* Animated Border Trail (Neon Effect matched with glowColor) */}
    <div className={`absolute -inset-[1px] bg-gradient-to-r from-transparent via-${glowColor} to-transparent rounded-xl opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_2s_infinite] transition-opacity`} />

    {/* Card Container */}
    <div className="relative flex flex-col items-center p-4 md:p-6 bg-[#0a0a16]/90 backdrop-blur-2xl rounded-xl border border-white/5 group-hover:border-white/20 transition-all duration-500 shadow-2xl overflow-hidden">
      
      {/* Moving Background Glow - Now using dynamic color */}
      <div className={`absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,${glowColor}20,transparent_80%)] opacity-0 group-hover:opacity-100 transition-opacity`} />

      {/* Floating Icon with 3D Rotation */}
      <motion.div
        animate={{ 
          y: [0, -6, 0],
          rotateY: [0, 10, 0] 
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.1,
        }}
        className={`p-3 md:p-4 rounded-2xl bg-gradient-to-b from-white/5 to-transparent mb-3 shadow-2xl ${color} group-hover:scale-110 transition-all duration-500`}
      >
        <Icon className="w-7 h-7 md:w-8 md:h-8 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
      </motion.div>

      {/* Name with Letter Spacing Animation */}
      <span className="text-[10px] md:text-sm font-bold tracking-tighter text-gray-400 group-hover:text-white group-hover:tracking-widest transition-all duration-500 uppercase">
        {name}
      </span>
    </div>
  </motion.div>
);

export default function About() {
  // Added glowColor to each skill for variety
  const skills = [
    { name: "HTML", icon: Code2, color: "text-orange-500", glowColor: "rgb(249,115,22)" },
    { name: "CSS", icon: Palette, color: "text-blue-500", glowColor: "rgb(59,130,246)" },
    { name: "Tailwind", icon: Wind, color: "text-sky-400", glowColor: "rgb(56,189,248)" },
    { name: "Shadcn UI", icon: Layout, color: "text-white", glowColor: "rgb(255,255,255)" },
    { name: "Next.js", icon: Globe, color: "text-white", glowColor: "rgb(200,200,200)" },
    { name: "React.js", icon: Zap, color: "text-sky-400", glowColor: "rgb(14,165,233)" },
    { name: "JS/TS", icon: FileJson, color: "text-yellow-300", glowColor: "rgb(253,224,71)" },
    { name: "Node.js", icon: Server, color: "text-green-500", glowColor: "rgb(34,197,94)" },
    { name: "Express", icon: Braces, color: "text-yellow-400", glowColor: "rgb(250,204,21)" },
    { name: "Golang", icon: Cpu, color: "text-cyan-400", glowColor: "rgb(34,211,238)" },
    { name: "PostgreSQL", icon: Database, color: "text-blue-400", glowColor: "rgb(96,165,250)" },
    { name: "MongoDB", icon: Leaf, color: "text-emerald-500", glowColor: "rgb(16,185,129)" },
    { name: "Mongoose", icon: Workflow, color: "text-red-500", glowColor: "rgb(239,68,68)" },
    { name: "MySQL", icon: Database, color: "text-blue-500", glowColor: "rgb(59,130,246)" },
    { name: "SQL Server", icon: Layers3, color: "text-blue-600", glowColor: "rgb(37,99,235)" },
    { name: "Prisma", icon: LucideBox, color: "text-indigo-400", glowColor: "rgb(129,140,248)" },
    { name: "Supabase", icon: Zap, color: "text-emerald-400", glowColor: "rgb(52,211,153)" },
    { name: "Firebase", icon: ShieldCheck, color: "text-orange-400", glowColor: "rgb(251,146,60)" },
    { name: "Auth", icon: Lock, color: "text-yellow-500", glowColor: "rgb(234,179,8)" },
    { name: "Figma", icon: Figma, color: "text-pink-500", glowColor: "rgb(236,72,153)" },
    { name: "Git", icon: GitBranch, color: "text-orange-600", glowColor: "rgb(234,88,12)" },
    { name: "GitHub", icon: Github, color: "text-white", glowColor: "rgb(255,255,255)" },
  ];

  return (
    <main className="text-white min-h-screen overflow-hidden selection:bg-cyan-500/30 ">
      
      {/* Cinematic Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-900/20 blur-[120px] rounded-full animate-pulse" />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 md:pt-32 pb-16 px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-[32px] md:text-8xl font-black tracking-tighter leading-[0.9] mb-8 uppercase italic">
            FULL <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-500 animate-gradient-x">
              Stack Developers
            </span>
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.5 }}
          className="max-w-xl mx-auto text-gray-400 text-[12px] md:text-xl mb-12 px-6 italic"
        >
          Architecting digital ecosystems with Next.js and high-performance database logic
        </motion.p>

        {/* Fixed Responsive Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 px-4 w-full max-w-md mx-auto">
            <button className="w-full md:w-auto relative group px-10 py-4 rounded-2xl bg-white text-black font-black text-xs md:text-sm overflow-hidden transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                <span className="relative z-10 uppercase tracking-widest">Hire Me Now</span>
                <div className="absolute inset-0 bg-cyan-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <button className="w-full md:w-auto px-10 py-4 rounded-2xl border border-white/20 font-black text-xs md:text-sm uppercase tracking-widest hover:bg-white/5 transition-all">
                Resume
            </button>
        </div>
      </section>

      {/* --- SKILLS GRID (Fixed for Mobile 2-Card) --- */}
      <section className="py-10 md:py-20 px-4 md:px-20 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-4">
            <h2 className="text-3xl md:text-7xl font-black italic uppercase text-white tracking-tighter">
              The <span className="text-cyan-500 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">Skills?</span>
            </h2>
            <p className="text-gray-500 font-mono text-[10px] md:text-sm uppercase tracking-[0.3em]">
               Expertise Level: Advanced
            </p>
          </div>

          {/* grid-cols-2 for Phone! */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-6">
            {skills.map((skill, i) => (
              <SkillCard key={i} {...skill} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* --- REVOLUTIONARY PROJECT BANNER --- */}
      <section className="py-20 md:py-28 px-4">
        <motion.div 
           whileHover={{ scale: 0.98 }}
           className="max-w-6xl mx-auto bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-20 relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 p-10 opacity-10">
                <Sparkles size={100} className="md:w-[200px] md:h-[200px]" />
            </div>
            
            <div className="flex flex-col items-center text-center">
                <motion.div 
                   animate={{ 
                     y: [0, -15, 0],
                     rotate: [0, 5, -5, 0]
                   }}
                   transition={{ duration: 6, repeat: Infinity }}
                   className="mb-8 p-6 rounded-3xl bg-cyan-500 shadow-[0_0_50px_rgba(6,182,212,0.4)]"
                >
                    <Rocket className="w-8 h-8 md:w-12 md:h-12 text-black" />
                </motion.div>
                <h2 className="text-3xl md:text-7xl font-black mb-6 tracking-tighter uppercase leading-none">
                    Building the <span className="text-pink-500">Future</span>
                </h2>
                <div className="h-1 w-24 bg-cyan-500 rounded-full mb-8" />
                <p className="text-gray-400 max-w-2xl text-[12px] md:text-lg font-light leading-relaxed italic">
                    Pushing the boundaries of web development through clean code and scalable architecture.
                </p>
            </div>
        </motion.div>
      </section>

      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-move 5s ease infinite;
        }
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </main>
  );
}