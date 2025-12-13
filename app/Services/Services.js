"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaTerminal, 
  FaLayerGroup, 
  FaCubes, 
  FaCodeBranch,
  FaFileImage,
  FaTabletAlt,
  FaDatabase,       
  FaChartLine,      
  FaServer,         
  FaPalette,        
  FaMobileAlt,      
  FaInfinity,       
} from "react-icons/fa";

// Expanded services array with 12 items
const services = [
  {
    icon: <FaTerminal />,
    title: "MERN Stack Development",
    description:
      "Full-stack web application development using MongoDB, Express, ReactJS, and Node.js to build powerful, scalable digital products.",
    highlight: true, // Main focus
  },
  {
    icon: <FaLayerGroup />,
    title: "Modern Front-End Development",
    description:
      "Expertise in crafting engaging, dynamic user interfaces (UIs) using React, Next.js, and advanced CSS frameworks like Tailwind CSS.",
    highlight: false,
  },
  {
    icon: <FaCubes />,
    title: "Scalable Web Architecture",
    description:
      "Designing robust, full-featured web applications with a focus on clean, maintainable code and optimal performance.",
    highlight: false,
  },
  {
    icon: <FaDatabase />,
    title: "Backend & API Development",
    description:
      "Creating secure, high-performance RESTful APIs and managing complex database structures with MongoDB/PostgreSQL.",
    highlight: false,
  },
  {
    icon: <FaMobileAlt />,
    title: "Progressive Web Apps (PWA)",
    description:
      "Building mobile-first PWAs that offer fast, reliable, and engaging experiences across all devices, even offline.",
    highlight: false,
  },
  {
    icon: <FaFileImage />,
    title: "Figma to Responsive HTML",
    description:
      "Pixel-perfect conversion of designs into clean, semantic, and fully responsive HTML/CSS/JS ensuring 100% design fidelity.",
    highlight: false,
  },
  {
    icon: <FaCodeBranch />,
    title: "Web Performance Optimization",
    description:
      "Improving load times and user experience by optimizing assets, reducing render-blocking resources, and ensuring high Core Web Vitals.",
    highlight: false,
  },
  {
    icon: <FaTabletAlt />,
    title: "Cross-Browser Compatibility",
    description:
      "Rigorous testing and implementation to ensure the website functions flawlessly and looks consistent across all major browsers.",
    highlight: false,
  },
  {
    icon: <FaChartLine />,
    title: "Analytics Integration",
    description:
      "Integrating Google Analytics, Tag Manager, and custom tracking solutions to measure performance and user behavior accurately.",
    highlight: false,
  },
  {
    icon: <FaServer />,
    title: "Deployment & DevOps (Basic)",
    description:
      "Setting up efficient CI/CD pipelines and deploying applications reliably using Vercel, Netlify, or AWS/Digital Ocean.",
    highlight: false,
  },
  {
    icon: <FaPalette />,
    title: "UI/UX Consult & Prototyping",
    description:
      "Consulting on user interface best practices and creating interactive prototypes to visualize the final product flow.",
    highlight: false,
  },
  {
    icon: <FaInfinity />,
    title: "Code Maintenance & Refactoring",
    description:
      "Reviewing and optimizing existing codebases to improve performance, maintainability, and future scalability.",
    highlight: false,
  },
];


// --- Custom Component for Animated Card ---
const AnimatedServiceCard = ({ service, index }) => {
    const NEON_GRADIENT = "conic-gradient(transparent, #06b6d4, transparent, #ec4899, transparent, #06b6d4)";
    const ContactButtonClass = "px-4 py-2 text-sm font-medium rounded-full text-cyan-400 bg-cyan-900/40 border border-cyan-500/50 hover:bg-cyan-800/60 transition-colors flex items-center gap-2";

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: index * 0.1 }} 
            
            // Outer Wrapper: Border Sweep and Hover Translate
            className={`group relative p-px rounded-xl overflow-hidden transition-all duration-500 cursor-pointer shadow-2xl 
                       ${
                          service.highlight 
                            ? "shadow-[0_0_25px_rgba(6,_182,_212,_0.8)] hover:animate-none hover:-translate-y-4" // Main card hover
                            : "shadow-black/70 hover:-translate-y-2 hover:shadow-cyan-700/50"
                       }`}
        >
            {/* The Rotating Border Sweep Element */}
            <div 
                className={`absolute inset-0 transition-opacity duration-300 rounded-xl z-0 
                            ${service.highlight ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                style={{ 
                    backgroundImage: NEON_GRADIENT,
                    animation: 'border-sweep 6s linear infinite',
                    filter: 'blur(10px)', 
                }}
            ></div>

            {/* Inner Content Box (Added conditional glitch effect) */}
            <div className={`relative p-8 rounded-[11px] bg-[#1A1A1A] h-full 
                             transition-all duration-300 hover:bg-[#202020] z-10 
                             ${
                                service.highlight 
                                ? "border-2 border-cyan-500/80 group-hover:animate-glitch-shake-subtle" // 🟢 CHANGE 1: Glitch effect
                                : "border border-gray-700/50"
                             }`}>
                
                {/* Icon */}
                <div className="text-4xl mb-4 text-cyan-400">
                    {service.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold mb-2 text-white">
                    {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    {service.description}
                </p>
                
                {/* Button */}
                <Link href="/Contact">
                    <button className={ContactButtonClass}>
                        Start Project
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </Link>
            </div>
        </motion.div>
    );
};

// --- Custom Component: Grid Background Layer ---
// Creates a simple, reusable background grid pattern
const GridBackground = () => (
    // 🟢 CHANGE 2: Grid Background Layer
    <div className="absolute inset-0 z-0">
        <div 
            className="w-full h-full bg-grid-white/[0.05] relative" 
            style={{ 
                // Custom CSS to create the tiny grid pattern
                backgroundImage: 'linear-gradient(to right, #ffffff0d 1px, transparent 1px), linear-gradient(to bottom, #ffffff0d 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                maskImage: 'radial-gradient(ellipse at 50% 50%, #000000 0%, transparent 80%)', // Fade out towards edges
            }}
        >
            {/* Soft Cyan/Magenta Glow in the Center */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-[120px]"></div>
        </div>
    </div>
);


export default function WhatIDo() {
  return (
    // Main Container: Very dark background, added 'relative' for the absolute grid
    <section className="relative min-h-screen flex justify-center items-center py-24 px-4 bg-[#0A0A0A] text-white overflow-hidden">
      
      <GridBackground />
      
      <div className="max-w-7xl w-full relative z-10"> {/* Ensure content is above the grid */}
        
        {/* Title Section (Improved with Subtle Text Glow) */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-extrabold text-gray-100 drop-shadow-lg [text-shadow:_0_0_15px_rgb(6_182_212_/_0.5)]">
            What I <span className="text-cyan-400">Deliver</span>
          </h2>
          <p className="text-xl text-gray-400 mt-2">
            A full spectrum of modern development capabilities.
          </p>
        </motion.div>

        {/* Services Grid (Now 4x3 on large screens) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <AnimatedServiceCard key={index} service={service} index={index} />
          ))}
        </div>
        
        {/* Call to Action */}
        <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
        >
            <p className="text-gray-500 text-sm italic">
                Ready to transform your idea into a digital reality?
            </p>
            <Link href="/Contact">
                <button 
                    className="mt-4 px-8 py-3 text-lg font-bold rounded-full 
                               text-white bg-cyan-600 hover:bg-cyan-500 transition-all 
                               shadow-[0_0_15px_rgba(6,_182,_212,_0.7)] hover:shadow-[0_0_25px_rgba(6,_182,_212,_1)]"
                >
                    Discuss Your Project Now
                </button>
            </Link>
        </motion.div>
      </div>
    </section>
  );
}