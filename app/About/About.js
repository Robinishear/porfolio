"use client";

import React from "react";

// --- Custom Component: Animated Feature Card ---
const FeatureCard = ({ item, i }) => {
  return (
    <div
      // Added group class for hover effects on children
      className="group relative p-0.5 rounded-xl bg-gradient-to-br from-indigo-700/50 to-sky-700/50 
                 transition-all duration-500 transform hover:scale-[1.03] hover:rotate-[0.5deg] 
                 shadow-lg hover:shadow-2xl hover:shadow-sky-500/30"
    >
        {/* Inner Content Box */}
        <div 
          key={i}
          className="p-6 rounded-xl bg-[#1A2338] h-full 
                     hover:bg-[#25314D] transition-all duration-300"
        >
          <span className="font-semibold text-lg text-indigo-300">
            {/* Added subtle glitch effect on text on hover */}
            <span className="inline-block transition-transform duration-300 group-hover:animate-text-glitch">
                {item}
            </span>
          </span>
        </div>
    </div>
  );
};

// --- Custom Component: Animated Metric Item (Staggered Fade-In) ---
const MetricItem = ({ item, i }) => {
  // Use data-i for staggered animation delay
  const delay = `${i * 0.15 + 0.5}s`; 

  return (
    <div 
      key={i} 
      className="text-center opacity-0" // Start hidden
      style={{ animation: `fade-in-up 0.6s ease-out ${delay} forwards` }}
    >
      {/* Highlighted Numbers with Shadow/Glow */}
      <h2 className="text-5xl font-extrabold text-sky-400 
                     drop-shadow-lg [text-shadow:_0_5px_15px_rgb(56_189_248_/_0.5)]">
        {item.num}
      </h2>
      <p className="text-indigo-300 mt-3 font-medium">{item.label}</p>
    </div>
  );
};

export default function Page() {
  const METRICS_DATA = [
    { num: "4k+", label: "Customers Globally" },
    { num: "31k+", label: "Sites Launched" },
    { num: "8.5k+", label: "Experiments Monthly" },
    { num: "19.7k+", label: "Modules in Use" },
  ];
  
  const FEATURE_CARDS_DATA = [
    "Optimizely One",
    "Optimizely Commerce",
    "Optimizely CMS",
    "Optimizely Experimentation",
    "Optimizely Opal (AI)", // Renamed for emphasis
    "Optimizely Data Platform",
  ];

  return (
    // Main Container: Deep Indigo/Blue Background with Light Text
    <main className="bg-[#0D111A] text-white min-h-screen w-full font-sans overflow-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <section className="px-6 md:px-20 pt-32 pb-24 
                          bg-gradient-to-br from-[#0D111A] via-[#1A2338] to-[#0D111A] 
                          shadow-2xl shadow-black/50">
        
        {/* Main Heading: Added Text Glitch Animation */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight max-w-4xl 
                       text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-sky-300 to-indigo-400
                       inline-block animate-text-glitch">
          Your Optimizely Journey Starts Here
        </h1>
        
        {/* Sub-Text */}
        <p className="text-gray-400 mt-6 max-w-2xl text-xl font-light">
          Explore powerful digital experience tools, AI-driven optimization, CMS, experimentation, and more.
        </p>

        {/* Feature Cards (Using Animated FeatureCard Component) */}
        <div className="grid md:grid-cols-2 gap-6 mt-16 max-w-4xl">
          {FEATURE_CARDS_DATA.map((item, i) => (
            <FeatureCard key={i} item={item} i={i} />
          ))}
        </div>
      </section>

      {/* ================= METRICS SECTION (Staggered Animation) ================= */}
      <section className="px-6 md:px-20 py-24">
        <h2 className="text-center text-3xl font-bold text-gray-300 mb-12">
            Driving Digital Excellence
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {METRICS_DATA.map((item, i) => (
            <MetricItem key={i} item={item} i={i} /> // Use animated component
          ))}
        </div>
      </section>

      {/* ================= BLOG / CARDS SECTION (Added Hover Effect) ================= */}
      <section className="px-6 md:px-20 pb-24">
        <h2 className="text-3xl font-bold text-gray-300 mb-10">
            Latest Insights
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="group bg-[#1A2338] rounded-xl p-6 h-64 flex flex-col justify-end 
                        border border-[#25314D] 
                        shadow-xl shadow-black/40 
                        hover:scale-[1.03] hover:bg-[#25314D] 
                        transition-all duration-300 cursor-pointer 
                        relative overflow-hidden" // Added relative for pseudo-element glow
            >
              {/* Subtle Corner Glow on hover (using ::before/::after concept) */}
              <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                  <div className="absolute -top-10 -left-10 w-20 h-20 bg-sky-500/20 blur-xl"></div>
              </div>

              <div className="relative z-10">
                <span className="text-xs font-semibold uppercase text-sky-400 mb-1 block">
                  News & Updates
                </span>
                <h3 className="font-bold text-xl text-indigo-200">
                  Sample Blog Title {item}
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Short description goes here... Discover the stunning design and layout inspiration.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= COMMUNITY METRICS ================= */}
      <section className="px-6 md:px-20 pb-24 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 bg-[#1A2338] p-10 rounded-2xl border border-indigo-700/50 shadow-2xl shadow-black/50">
          {[
            { num: "9.5k+", label: "Blog posts" },
            { num: "25k+", label: "Forum threads" },
            { num: "10k+", label: "Community members" },
            { num: "100+", label: "OMVPs (Most Valuable Professionals)" },
          ].map((item, i) => (
            <div key={i}>
              <h2 className="text-4xl font-extrabold text-sky-400">
                {item.num}
              </h2>
              <p className="text-gray-400 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= INFO BOX (Pulsing Border) ================= */}
      <section className="px-6 md:px-20 pb-32">
        <div className={`bg-[#1A2338] p-12 rounded-3xl border-l-4 border-l-sky-400 
                       shadow-2xl shadow-black/50 animate-pulse-border`}>
          <h3 className="text-3xl font-extrabold mb-4 text-indigo-300">
            What is OMVP?
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            OMVP stands for **Optimizely Most Valuable Professional**. It is a recognition program for outstanding community members who contribute valuable knowledge, support, and expertise to the Optimizely ecosystem. They are the driving force behind our vibrant developer community.
          </p>
        </div>
      </section>
    </main>
  );
}