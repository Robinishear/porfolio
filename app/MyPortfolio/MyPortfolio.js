"use client";
import React, { useEffect, useState } from "react";

const MyPortfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("https://mr-robin-forfolio-server.vercel.app/api/get-projects");
        const result = await response.json();
        if (result.success) setProjects(result.data);
      } catch (error) {
        console.error("ডাটা আনতে সমস্যা হচ্ছে:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen ">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 border-4 border-blue-500/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen  text-white overflow-x-hidden">
      <div className="relative z-10 p-6 md:p-12 max-w-7xl mx-auto">
        <header className="text-center mb-10 animate-in fade-in slide-in-from-top duration-1000">
        
        </header>
          <h1 className="text-6xl text-center font-black mb-17 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">

         CLINTE PROJECTS

          </h1>

        {/* --- Card Grid with Floating Animation --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{ animationDelay: `${index * 100}ms` }}
              className="group relative  backdrop-blur-xl rounded-[2rem] overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-500 flex flex-col shadow-2xl hover:shadow-blue-500/10 animate-in fade-in zoom-in duration-700"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={
                    project.image_url || "https://via.placeholder.com/400x300"
                  }
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0"></div>
              </div>

              <div className="p-8 flex flex-col flex-grow relative">
                {/* কার্ডের ভেতর গ্লো ইফেক্ট */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-blue-600/10 blur-3xl group-hover:bg-blue-600/20 transition-all"></div>

                <h2 className="text-2xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform">
                  {project.title}
                </h2>
                <p className="text-slate-400 text-sm mb-8 line-clamp-2 leading-relaxed font-light">
                  {project.description}
                </p>

                <div className="mt-auto flex gap-4">
                  <button
                    onClick={() => openModal(project)}
                    className="flex-1 bg-white/5 text-white py-4 rounded-xl font-bold hover:bg-white hover:text-black transition-all duration-300 border border-white/10"
                  >
                    Details
                  </button>
                  <a
                    href={project.external_link}
                    target="_blank"
                    className="bg-blue-600 text-white px-6 py-4 rounded-xl font-bold hover:bg-blue-500 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-blue-600/20"
                  >
                    🚀
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>




{/* --- Ultra-Modern Professional Modal --- */}

{/* --- Ultra-Premium Modal with Side-by-Side Buttons --- */}
{isModalOpen && selectedProject && (
  <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6">
    {/* Cinematic Overlay */}
    <div
      className="absolute inset-0 bg-[#020617]/98 backdrop-blur-2xl animate-in fade-in duration-700"
      onClick={closeModal}
    ></div>

    {/* Main Modal Card */}
    <div className="bg-[#0f172a] w-full max-w-5xl rounded-none md:rounded-[3rem] shadow-2xl relative flex flex-col md:flex-row max-h-screen md:max-h-[85vh] overflow-hidden border-0 md:border border-white/10 animate-in zoom-in-95 duration-500">
      
      {/* 1. Image Section */}
      <div className="md:w-[45%] relative h-[250px] md:h-auto overflow-hidden">
        <img
          src={selectedProject.image_url}
          className="w-full h-full object-cover animate-in fade-in zoom-in-110 duration-1000"
          alt="Project"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent"></div>
      </div>

      {/* 2. Content Section */}
      <div className="md:w-[55%] flex flex-col p-8 md:p-14 overflow-y-auto custom-scrollbar relative">
        
        {/* Small Label */}
        <p className="text-blue-500 font-bold text-[10px] uppercase tracking-[0.5em] mb-4 animate-in fade-in slide-in-from-bottom-2 duration-700 delay-150">
          Project Showcase
        </p>

        {/* Title Animation */}
        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tighter mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          {selectedProject.title}
        </h2>

        {/* Description & Tech Stack */}
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-500">
          <section className="relative pl-6 border-l-2 border-blue-500/30">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Overview</h3>
            <p className="text-slate-300 text-lg leading-relaxed font-light italic">
              "{selectedProject.description}"
            </p>
          </section>

          <section className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Technologies Used</h3>
            <div className="grid grid-cols-2 gap-4">
              {selectedProject.features?.map((feat, index) => (
                <div
                  key={index}
                  className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:border-blue-500/30 transition-all group"
                >
                  <p className="text-[9px] text-blue-500 font-black uppercase mb-1 tracking-tighter">{feat.label}</p>
                  <p className="text-white font-medium text-sm">{feat.value}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* --- Multi-Button Footer --- */}
        <footer className="mt-12 flex flex-col sm:flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-1000">
          {/* Live Preview Button */}
          <a
            href={selectedProject.external_link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 px-8 py-5 bg-white text-black text-[12px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-500 text-center shadow-lg active:scale-95"
          >
            Live Preview 🚀
          </a>

          {/* Close Button Beside Live Preview */}
          <button
            onClick={closeModal}
            className="w-full sm:w-auto px-8 py-5 bg-white/5 text-white text-[12px] font-black uppercase tracking-[0.2em] rounded-2xl border border-white/10 hover:bg-red-500/10 hover:border-red-500/50 transition-all duration-500 active:scale-95"
          >
            Close Project
          </button>
        </footer>
      </div>
    </div>
  </div>
)}






      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #334155;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #3b82f6;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default MyPortfolio;
