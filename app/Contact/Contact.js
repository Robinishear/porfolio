"use client";
import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  FaWhatsapp,
  FaTelegramPlane,
  FaEnvelope,
  FaClock,
  FaHeadset,
  FaMagic,
  FaArrowRight,
} from "react-icons/fa";

// --- Variants for Entrance ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Robin bro, message pathano hoyeche! Ami khub shiggori jogajog korbo.");
  };

  return (
    <section className="min-h-screen py-16 md:py-28 px-2 md:px-6 relative overflow-hidden text-white " id="contact">
      
      {/* --- Heartbeat Glow Background --- */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-0 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-500 blur-[120px] rounded-full pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- Header Section --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-black tracking-[0.4em] uppercase text-cyan-400 mb-6 flex items-center gap-2">
            <FaHeadset className="animate-bounce" /> Get In Touch
          </div>
          <h2 className="text-[36px] md:text-8xl font-black italic tracking-tighter uppercase leading-none">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">Connect</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12"
        >
          {/* --- Left Side: Floating Social Cards --- */}
          <div className="lg:col-span-5 space-y-3 md:space-y-6">
            <MagneticCard
              link="https://wa.me/8801334757898"
              icon={<FaWhatsapp />}
              title="WhatsApp"
              value="Quick Message"
              color="text-green-400"
              index={0}
            />
            <MagneticCard
              link="https://t.me/yourusername"
              icon={<FaTelegramPlane />}
              title="Telegram"
              value="Secure Inquiry"
              color="text-blue-400"
              index={1}
            />
            <MagneticCard
              link="mailto:mdrobinahmed57898@gmail.com"
              icon={<FaEnvelope />}
              title="Email"
              value="mdrobinahmed@gmail.com"
              color="text-cyan-400"
              index={2}
            />

            {/* Availability Card with Glow Pulse */}
            <motion.div 
              variants={itemVariants}
              className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl relative overflow-hidden"
            >
              <div className="flex justify-between items-center mb-4">
                <FaClock className="text-cyan-500 text-xl animate-pulse" />
                <span className="flex items-center gap-2 text-[8px] font-black uppercase text-cyan-500">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full animate-ping" /> Online Now
                </span>
              </div>
              <h4 className="text-2xl font-black italic uppercase tracking-tighter">Available 24/7</h4>
            </motion.div>
          </div>

          {/* --- Right Side: Form with Entrance --- */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-7 bg-white/[0.01] border border-white/5 rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-12 shadow-2xl relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ModernInput label="Full Name" placeholder="Robin Ahmed" onChange={(v) => {}} />
                <ModernInput label="Email" type="email" placeholder="robin@example.com" onChange={(v) => {}} />
              </div>
              <ModernInput label="Subject" placeholder="Project Discussion" onChange={(v) => {}} />
              
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-500 ml-4">Message</label>
                <textarea 
                  rows="4"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-[1.5rem] p-5 focus:border-cyan-500/50 transition-all outline-none text-sm placeholder:text-slate-800"
                  placeholder="Tell me about your idea..."
                />
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-white text-black font-black uppercase tracking-[0.2em] text-[11px] rounded-xl flex items-center justify-center gap-3 group transition-all hover:bg-cyan-500 hover:text-white"
              >
                Send Message <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// --- Magnetic + Continuous Floating Card ---
const MagneticCard = ({ icon, title, value, link, color, index }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    x.set((clientX - (left + width / 2)) * 0.25);
    y.set((clientY - (top + height / 2)) * 0.25);
  };

  return (
    <motion.a
      ref={ref}
      href={link}
      target="_blank"
      variants={itemVariants}
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ x: springX, y: springY }}
      // Continuous Floating Animation
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
      className="group flex items-center justify-between p-5 md:p-6 rounded-[1.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-md hover:bg-white/[0.05] hover:border-cyan-500/30 transition-all"
    >
      <div className="flex items-center gap-4">
        <motion.div 
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8 }}
          className={`w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-xl border border-white/5 ${color}`}
        >
          {icon}
        </motion.div>
        <div>
          <p className="text-[8px] uppercase tracking-widest text-slate-500 font-black italic">{title}</p>
          <p className="text-sm md:text-base font-bold text-slate-200">{value}</p>
        </div>
      </div>
      <FaMagic className="opacity-0 group-hover:opacity-100 text-cyan-500 transition-opacity duration-300" />
    </motion.a>
  );
};

const ModernInput = ({ label, placeholder, type = "text", onChange }) => (
  <div className="flex flex-col gap-2 group/input">
    <label className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-500 ml-4 transition-colors group-focus-within/input:text-cyan-500">{label}</label>
    <input 
      type={type}
      placeholder={placeholder}
      className="w-full bg-white/[0.03] border border-white/10 rounded-full py-4 px-6 focus:border-cyan-500/50 transition-all outline-none text-sm placeholder:text-slate-800"
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default Contact;