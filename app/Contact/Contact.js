"use client";

import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { 
  FaWhatsapp, 
  FaTelegramPlane, 
  FaEnvelope, 
  FaPaperPlane, 
  FaClock, 
  FaHeadset,
  FaMagic,
  FaArrowRight
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", subject: "", message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("ধন্যবাদ! আপনার মেসেজটি সফলভাবে পাঠানো হয়েছে।");
  };

  return (
    <section className="min-h-screen  py-28 px-6 relative overflow-hidden text-white" id="contact">
      
      {/* --- Cinematic Background Glows --- */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- Section Header --- */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-[0.4em] uppercase text-cyan-500 mb-6 flex items-center gap-2"
          >
            <FaHeadset className="animate-bounce" /> Connectivity
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase leading-tight mb-6"
          >
            Ready to <span className="text-outline-thin text-transparent">Collaborate?</span>
          </motion.h2>
          
          <p className="max-w-xl text-slate-400 font-light text-lg italic">
            নতুন কোনো প্রজেক্ট নিয়ে আলোচনা করতে চান? আমি মাত্র একটি মেসেজ দূরে!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* --- Left Side: Interactive Contact Cards --- */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xs font-black uppercase tracking-[0.5em] text-slate-500 mb-6 ml-2 italic">Connect via</h3>
            
            <MagneticCard 
              link="https://wa.me/8801334757898" 
              icon={<FaWhatsapp />} 
              title="WhatsApp" 
              value="Quick Response" 
              color="text-green-400" 
            />
            <MagneticCard 
              link="https://t.me/yourusername" 
              icon={<FaTelegramPlane />} 
              title="Telegram" 
              value="Secure Inquiry" 
              color="text-blue-400" 
            />
            <MagneticCard 
              link="https://mail.google.com/mail/?view=cm&fs=1&to=mdrobinahmed57898@gmail.com" 
              icon={<FaEnvelope />} 
              title="Email" 
              value="mdrobinahmed57898@gmail.com" 
              color="text-cyan-400" 
            />

            {/* Availability Card */}
            <div className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl relative overflow-hidden group mt-10">
               <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center border border-cyan-500/20">
                     <FaClock className="text-cyan-500 animate-pulse" />
                  </div>
                  <span className="px-3 py-1 bg-cyan-500 text-black text-[8px] font-black rounded-full uppercase">Active Now</span>
               </div>
               <h4 className="text-3xl font-black italic uppercase tracking-tighter">Dhaka, GMT+6</h4>
               <p className="text-slate-500 font-mono text-[10px] tracking-widest uppercase mt-2">Available: 10 AM - 12 PM</p>
            </div>
          </div>

          {/* --- Right Side: High-End Form --- */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-7  border border-white/5 rounded-[3.5rem] p-8 md:p-14 shadow-2xl relative group"
          >
            <div className="absolute -inset-[1px]  rounded-[3.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <form onSubmit={handleSubmit} className="space-y-10 relative z-10 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <ModernInput 
                  label="Full Name" 
                  placeholder="Robin Hood" 
                  value={formData.name} 
                  onChange={(val) => setFormData({...formData, name: val})} 
                />
                <ModernInput 
                  label="Email Address" 
                  type="email" 
                  placeholder="robin@example.com" 
                  value={formData.email} 
                  onChange={(val) => setFormData({...formData, email: val})} 
                />
              </div>

              <ModernInput 
                label="Project Subject" 
                placeholder="E-commerce Application" 
                value={formData.subject} 
                onChange={(val) => setFormData({...formData, subject: val})} 
              />

              <div className="flex flex-col gap-3 text-left">
                <label className="text-[10px] uppercase tracking-[0.4em] font-black text-slate-500 ml-4 italic">Message Details</label>
                <textarea 
                  rows="4" required
                  placeholder="Tell me about your project goals..."
                  className="w-full bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.05] transition-all text-slate-200 resize-none font-medium placeholder:text-slate-800"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-6 bg-white text-black font-black uppercase tracking-[0.3em] text-[10px] rounded-[1.5rem] hover:bg-cyan-500 hover:text-white transition-all duration-500 flex items-center justify-center gap-4 group"
              >
                Send Message <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-500" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        .text-outline-thin { -webkit-text-stroke: 1.5px rgba(255,255,255,0.2); }
      `}</style>
    </section>
  );
};

// --- Magnetic Component Logic ---
const MagneticCard = ({ icon, title, value, link, color }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set(clientX - centerX);
    y.set(clientY - centerY);
  };

  const mouseLeave = () => { x.set(0); y.set(0); };

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  return (
    <motion.a 
      ref={ref} href={link} target="_blank"
      onMouseMove={mouseMove} onMouseLeave={mouseLeave}
      style={{ x: springX, y: springY }}
      className="group flex items-center justify-between p-7 rounded-[2.5rem] bg-white/[0.02] border border-white/5 transition-all backdrop-blur-md"
    >
      <div className="flex items-center gap-6 text-left">
        <div className={`w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-2xl border border-white/10 transition-colors ${color}`}>
          {icon}
        </div>
        <div>
          <p className="text-[9px] uppercase tracking-widest text-slate-500 font-black mb-1 italic">{title}</p>
          <p className="text-lg font-bold italic text-slate-200 tracking-tight">{value}</p>
        </div>
      </div>
      <div className="opacity-0 group-hover:opacity-100 transition-opacity mr-4 text-cyan-500">
         <FaMagic />
      </div>
    </motion.a>
  );
};

// --- Input Component ---
const ModernInput = ({ label, type = "text", placeholder, value, onChange }) => (
  <div className="flex flex-col gap-3 text-left group/input">
    <label className="text-[10px] uppercase tracking-[0.4em] font-black text-slate-500 ml-4 italic group-focus-within/input:text-cyan-500 transition-colors">
      {label}
    </label>
    <input 
      required type={type} placeholder={placeholder}
      className="w-full bg-white/[0.03] border border-white/10 rounded-full py-5 px-8 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.05] transition-all text-slate-200 font-medium placeholder:text-slate-800"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default Contact;