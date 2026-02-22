"use client";
import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useSpring,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";

// --- 🚀 Rocket Item Component ---
const RocketItem = ({ id, onExplode }) => {
  const [exploded, setExploded] = useState(false);
  const randomX = useRef(Math.random() * 80 + 10);
  const speed = useRef(Math.random() * 3 + 20);

  const handleClick = (e) => {
    e.stopPropagation();
    setExploded(true);
    setTimeout(() => onExplode(id), 600);
  };

  return (
    <motion.div
      initial={{ y: "110vh", opacity: 0, scale: 0.8 }}
      animate={
        exploded
          ? {
              scale: [1, 2.5, 0],
              opacity: 0,
              filter: "blur(15px) brightness(2)",
            }
          : { y: "-80vh", opacity: 1, scale: 1 }
      }
      transition={{
        duration: exploded ? 0.4 : speed.current,
        ease: exploded ? "easeOut" : "linear",
      }}
      onAnimationComplete={() => !exploded && onExplode(id)}
      onClick={handleClick}
      className="absolute z-[70] cursor-pointer pointer-events-auto flex flex-col items-center"
      style={{ left: `${randomX.current}%` }}
    >
      {exploded ? (
        <div className="relative">
          <span className="text-6xl">💥</span>
          <div className="absolute inset-0 bg-cyan-500 blur-3xl rounded-full opacity-60 animate-ping"></div>
        </div>
      ) : (
        <div className="flex flex-col items-center group relative">
          <div className="text-4xl font-bold transition-transform group-hover:scale-110 drop-shadow-[0_0_20px_rgba(163,230,53,0.9)]">
            Robin
          </div>
          <div className="absolute top-10 w-28 h-28 bg-lime-500/40 blur-[40px] rounded-full -z-10 animate-pulse"></div>
          <motion.div
            animate={{
              height: [30, 70, 30],
              opacity: [0.7, 1, 0.7],
              scaleX: [1, 2, 1],
              filter: [
                "blur(1px) brightness(1)",
                "blur(2px) brightness(2)",
                "blur(1px) brightness(1)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 0.15, ease: "easeInOut" }}
            className="w-3 bg-gradient-to-t from-transparent via-[#3a5dce] to-yellow-300 rounded-full mt-[-5px] shadow-[0_0_25px_#a3e635, 0_0_50px_#facc15]"
          />
        </div>
      )}
    </motion.div>
  );
};

// --- 🎨 Main Design Section Component ---
const DesignSection = ({ children }) => {
  const sectionRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [rockets, setRockets] = useState([]);

  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 16 });
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 16 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);

      if (sectionRef.current) {
        sectionRef.current.style.setProperty("--x", `${clientX}px`);
        sectionRef.current.style.setProperty("--y", `${clientY}px`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const interval = setInterval(() => {
      setRockets((prev) => [...prev.slice(-4), Date.now()]);
    }, 4500);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, [mouseX, mouseY]);

  const handleRemove = (id) =>
    setRockets((prev) => prev.filter((r) => r !== id));

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#01030a] overflow-hidden select-none text-white"
      style={{ cursor: "auto" }} 
    >
      {/* --- Background Effects --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#01030a]" />
        <div
          className="absolute inset-0 z-[1] opacity-40"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, rgba(0, 255, 128, 0.1) 0, rgba(0, 255, 128, 0.1) 1px, transparent 1px, transparent 25px), repeating-linear-gradient(-45deg, rgba(0, 255, 128, 0.1) 0, rgba(0, 255, 128, 0.1) 1px, transparent 1px, transparent 25px)`,
            backgroundSize: "50px 50px",
            maskImage: `radial-gradient(500px circle at var(--x) var(--y), black 30%, transparent 100%)`,
          }}
        />
        <div
          className="absolute inset-0 z-[2] bg-cover bg-center bg-no-repeat opacity-[0.2] mix-blend-screen"
          style={{
            backgroundImage: `url('https://i.ibb.co.com/chn3p0VZ/5570215.jpg')`,
            filter: "hue-rotate(190deg) brightness(1.1)",
          }}
        />
      </div>

      {/* --- Rocket Layer --- */}
      <div className="fixed inset-0 z-[65] pointer-events-none">
        <AnimatePresence>
          {rockets.map((id) => (
            <RocketItem key={id} id={id} onExplode={handleRemove} />
          ))}
        </AnimatePresence>
      </div>

      {/* --- 🖱️ ADVANCED CYBER CURSOR (Visible with default mouse) --- */}
      <motion.div
        className="fixed top-0 left-0 z-[100] pointer-events-none hidden lg:flex flex-col items-center justify-center"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div className="relative flex items-center justify-center w-24 h-24">
          {/* Rotating Outer Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            className="absolute inset-0 border border-cyan-500 bg-gradient-to-t from-transparent bg-amber-500/10 via-[#293766]/20 to-[#023f08]/20 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.2)]"
            style={{
              borderStyle: "double",
              borderWidth: "2px",
              maskImage: "conic-gradient(from 0deg, black, transparent 70%, black)",
            }}
          />

          {/* Dotted Inner Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute w-12 h-12 border-2 border-dashed border-cyan-400/40 rounded-full"
          />

          {/* Center Point */}
          <div className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_8px_#fff]"></div>
          
          {/* Corner Brackets */}
          <div className="absolute -inset-1 border-t-2 border-l-2 border-cyan-400/50 w-3 h-3 top-0 left-0"></div>
          <div className="absolute -inset-1 border-b-2 border-r-2 border-cyan-400/50 w-3 h-3 bottom-0 right-0"></div>
        </div>

        {/* Tail Flame Effect */}
        <div className="flex flex-col items-center mt-1">
          <motion.div
            animate={{ height: [10, 30, 10], opacity: [0.3, 0.8, 0.3] }}
            transition={{ repeat: Infinity, duration: 0.3 }}
            className="w-1.5 bg-cyan-400 blur-[2px] rounded-full shadow-[0_0_12px_#22d3ee]"
          />
        </div>
      </motion.div>

      {/* --- Content Container --- */}
      <div className="relative z-10 w-full pt-20">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
          {children}
        </div>
      </div>

      {/* --- Global Style --- */}
      <style jsx global>{`
        :root {
          --x: 0px;
          --y: 0px;
        }
        body {
          cursor: auto !important;
          background-color: #01030a;
          margin: 0;
          overflow-x: hidden;
        }
        a, button {
          cursor: pointer !important;
        }
      `}</style>
    </section>
  );
};

export default DesignSection;