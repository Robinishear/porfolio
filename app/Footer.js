"use client";

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#0b0f1a] pt-20 pb-10 overflow-hidden font-sans">
      {/* 1. Neon Top Divider (Image-er moto) */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"></div>

      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-cyan-600/10 blur-[100px] rounded-full -z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1: Branding (White Glass Effect) */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-[2rem] hover:border-cyan-500/30 transition-all group">
            <h2 className="text-2xl font-black italic tracking-tighter bg-gradient-to-r from-white via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              MR-ROBIN-AHMED
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              © 2025 All rights reserved. <br />
              Building digital experiences with modern aesthetics and high performance.
            </p>
          </div>

          {/* Card 2: Social Icons (Glass Container) */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-[2rem] flex flex-col items-center justify-center gap-6">
            <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Connect With Me</p>
            <div className="flex gap-4">
              <SocialIcon href="#" icon={<FaFacebookF />} color="hover:bg-blue-600 hover:shadow-[0_0_15px_rgba(37,99,235,0.5)]" delay="0s" />
              <SocialIcon href="#" icon={<FaTwitter />} color="hover:bg-sky-500 hover:shadow-[0_0_15px_rgba(14,165,233,0.5)]" delay="0.2s" />
              <SocialIcon href="#" icon={<FaInstagram />} color="hover:bg-pink-600 hover:shadow-[0_0_15px_rgba(219,39,119,0.5)]" delay="0.4s" />
              <SocialIcon href="#" icon={<FaLinkedinIn />} color="hover:bg-blue-700 hover:shadow-[0_0_15px_rgba(29,78,216,0.5)]" delay="0.6s" />
            </div>
          </div>

          {/* Card 3: Call to Action (Newsletter/Email style) */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-[2rem] flex flex-col justify-between">
            <div>
              <h4 className="text-white font-bold mb-2">Subscribe to Newsletter</h4>
              <div className="h-10 w-full bg-white/5 border border-white/10 rounded-lg mb-4 flex items-center px-4">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse mr-2"></div>
                <span className="text-gray-500 text-xs italic">Enter your email...</span>
              </div>
            </div>
            <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center text-sm font-extrabold rounded-xl transition-all hover:brightness-110 active:scale-95 shadow-lg shadow-cyan-900/20">
              SUBSCRIBE NOW
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
             <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-cyan-500/50 animate-bounce" style={{animationDelay: `${i * 0.2}s`}}></div>
                ))}
             </div>
             <p className="text-gray-500 text-[10px] uppercase tracking-[0.3em] font-medium">Designed with ❤️ by Robin</p>
          </div>

          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all text-xs font-bold uppercase tracking-widest"
          >
            Back to top <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Floating Animation Global Style */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

// Helper Component for Social Icons with Animation
const SocialIcon = ({ href, icon, color, delay }) => (
  <a 
    href={href} 
    target="_blank" 
    style={{ animationDelay: delay }}
    className={`w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white text-xl transition-all duration-300 hover:-rotate-12 animate-float ${color}`}
  >
    {icon}
  </a>
);

export default Footer;