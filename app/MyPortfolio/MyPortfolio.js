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

        {/* --- High-End Animated Modal --- */}
        {isModalOpen && selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/90 backdrop-blur-md animate-in fade-in duration-500"
              onClick={closeModal}
            ></div>

            {/* Modal Box */}
            <div className="bg-[#0f172a] w-full max-w-2xl rounded-[2.5rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] relative flex flex-col max-h-[85vh] overflow-hidden border border-white/10 animate-in slide-in-from-bottom-10 zoom-in-95 duration-500 ease-out">
              <div className="relative h-64 flex-shrink-0">
                <img
                  src={selectedProject.image_url}
                  className="w-full h-full object-cover"
                  alt="Banner"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0f172a]"></div>
                <button
                  onClick={closeModal}
                  className="absolute top-6 right-6 bg-black/50 backdrop-blur-md text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-500 hover:rotate-90 transition-all duration-300"
                >
                  ✕
                </button>
              </div>

              <div className="p-8 overflow-y-auto custom-scrollbar">
                <h2 className="text-4xl font-black text-white mb-6 tracking-tight animate-in fade-in slide-in-from-left duration-700 delay-200">
                  {selectedProject.title}
                </h2>

                <div className="mb-10 space-y-4 animate-in fade-in duration-1000 delay-300">
                  <span className="text-blue-500 font-bold text-xs uppercase tracking-[0.2em]">
                    About Project
                  </span>
                  <p className="text-slate-300 leading-relaxed text-base font-light">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-400">
                  <span className="text-emerald-500 py-5 font-bold text-xs uppercase tracking-[0.2em]">
                    **“Which technologies have been used in the project”**
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedProject.features?.map((feat, index) => (
                      <div
                        key={index}
                        className="flex flex-col bg-white/5 p-5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors group"
                      >
                        <span className="text-[10px] font-bold text-slate-500 uppercase mb-1">
                          {feat.label}
                        </span>
                        <span className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                          {feat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 bg-black/20 border-t border-white/5 flex-shrink-0">
                <button
                  onClick={closeModal}
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-black hover:bg-blue-500 transition-all duration-300 uppercase tracking-widest text-xs"
                >
                  Return to Gallery
                </button>
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
