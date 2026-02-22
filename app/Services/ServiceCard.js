/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Link from "next/link";
import {
  FaTerminal, FaLayerGroup, FaDatabase, FaCubes, FaMobileAlt,
  FaFileImage, FaServer, FaChartLine, FaArrowRight, FaGem
} from "react-icons/fa";

const services = [
  { icon: <FaTerminal />, title: "MERN Mastery", desc: "Crafting robust full-stack applications with MongoDB, Express, React, and Node.", color: "#06b6d4" },
  { icon: <FaLayerGroup />, title: "Next.js Elite", desc: "Blazing fast, SEO-optimized server-side rendered web experiences.", color: "#a855f7" },
  { icon: <FaDatabase />, title: "Data Systems", desc: "Expert database architecture using PostgreSQL, Mongoose & SQL Server.", color: "#10b981" },
  { icon: <FaCubes />, title: "Golang Backend", desc: "High-concurrency microservices and performance-driven backend logic.", color: "#3b82f6" },
  { icon: <FaFileImage />, title: "Figma to Life", desc: "Converting complex designs into pixel-perfect, fluid-motion web interfaces.", color: "#ec4899" },
  { icon: <FaMobileAlt />, title: "Hybrid Apps", desc: "Progressive Web Apps that look and feel native on every mobile device.", color: "#f59e0b" },
  { icon: <FaServer />, title: "Cloud & DevOps", desc: "Seamless deployment with Docker, AWS, and CI/CD automation.", color: "#6366f1" },
  { icon: <FaChartLine />, title: "Performance", desc: "Maximizing speed and Core Web Vitals for ultimate user retention.", color: "#ef4444" },
];

// --- Magnetic & 3D Tilt Card Component ---
const ServiceCard = ({ service, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative h-[320px] w-full rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-md group cursor-pointer"
    >
      <div 
        style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
        className="absolute inset-0 flex flex-col p-8 justify-between"
      >
        {/* Animated Icon Icon */}
        <div 
          className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-2xl transition-all duration-500 group-hover:scale-110"
          style={{ background: service.color, boxShadow: `0 0 30px ${service.color}44` }}
        >
          <div className="text-white drop-shadow-md">{service.icon}</div>
        </div>

        <div>
          <h3 className="text-2xl font-black text-white mb-2 tracking-tight group-hover:translate-x-2 transition-transform duration-300">
            {service.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
            {service.desc}
          </p>
        </div>

        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
          Discovery Session <FaArrowRight />
        </div>
      </div>

      {/* Glow Effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-[2.5rem]"
        style={{ background: `radial-gradient(circle at center, ${service.color}, transparent)` }}
      />
    </motion.div>
  );
};

export default function PortfolioServices() {
  return (
    <section className="relative min-h-screen w-full  py-32 px-6 overflow-hidden flex flex-col items-center">
      
      {/* --- BACKGROUND AURORA --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-600/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-cyan-600/20 rounded-full blur-[150px] animate-pulse delay-700" />
      </div>

      {/* --- CONTENT --- */}
      <div className="max-w-7xl w-full relative z-10">
        
        {/* Heading Section */}
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <FaGem className="text-cyan-400 animate-spin-slow" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-cyan-400">Premium Solutions</span>
          </motion.div>
          
          <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none mb-6">
            MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">EXPERTISE.</span>
          </h2>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto font-medium">
            I don't just write code, I create digital legacies. Every pixel and every logic is designed to perfection.
          </p>
        </div>

        {/* Services Grid with 3D Interaction */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Bottom Giant CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-40 text-center relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[200px] bg-cyan-500/10 blur-[120px] -z-10" />
          <h3 className="text-5xl md:text-8xl font-black text-white/20 uppercase tracking-tighter mb-[-40px] md:mb-[-60px]">Ready to Scale?</h3>
          <Link href="/Contact">
            <motion.button
              whileHover={{ scale: 1.05, letterSpacing: "2px" }}
              whileTap={{ scale: 0.95 }}
              className="relative px-16 py-8 bg-white text-black font-black text-2xl rounded-full shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:shadow-cyan-500/50 transition-all"
            >
              HIRE ME NOW
            </motion.button>
          </Link>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
}