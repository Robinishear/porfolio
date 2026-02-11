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
        const response = await fetch(
          "https://mr-robin-forfolio-server.vercel.app/api/get-projects",
        );
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
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-blue-500/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white overflow-x-hidden ">
      <div className="relative z-10 p-2 md:p-12 max-w-7xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-[28px] md:text-7xl font-black mb-4 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500 uppercase whitespace-nowrap">
            Client Projects
          </h1>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full opacity-50"></div>
        </header>

        {/* --- Responsive Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id || index}
              className="group relative  backdrop-blur-xl rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-500 flex flex-col shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Image Section */}
              <div className="relative h-48 md:h-64 overflow-hidden">
                <img
                  src={
                    project.image_url || "https://via.placeholder.com/400x300"
                  }
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
              </div>

              {/* Content Section */}
              <div className="p-5 md:p-8 flex flex-col flex-grow relative">
                <h2 className="text-lg md:text-2xl font-bold text-white mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
                  {project.title}
                </h2>
                <p className="text-slate-400 text-[10px] md:text-sm mb-6 line-clamp-2 font-light leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-auto flex gap-2 md:gap-4">
                  <button
                    onClick={() => openModal(project)}
                    className="flex-1  text-white py-3 md:py-4 rounded-xl text-[10px] md:text-sm font-bold hover:bg-white hover:text-black transition-all border border-white/10"
                  >
                    Details
                  </button>
                  <a
                    href={project.external_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-5 md:px-8 py-3 md:py-4 rounded-xl text-[10px] md:text-sm font-bold hover:bg-blue-500 transition-all shadow-lg"
                  >
                    Live 🚀
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- Full Responsive Modal --- */}
        {isModalOpen && selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-6">
            <div
              className="absolute inset-0 bg-black/90 backdrop-blur-xl animate-in fade-in duration-500"
              onClick={closeModal}
            ></div>

            <div className="bg-[#0f172a] w-full max-w-5xl rounded-3xl shadow-2xl relative flex flex-col md:flex-row max-h-[90vh] overflow-hidden border border-white/10 animate-in zoom-in-95 duration-300">
              {/* Modal Image */}
              <div className="md:w-[45%] h-48 md:h-auto overflow-hidden">
                <img
                  src={selectedProject.image_url}
                  className="w-full h-full object-cover"
                  alt="Project"
                />
              </div>

              {/* Modal Content */}
              <div className="md:w-[55%] flex flex-col p-6 md:p-12 overflow-y-auto custom-scrollbar">
                <p className="text-blue-500 font-bold text-[9px] uppercase tracking-widest mb-2">
                  Showcase
                </p>
                <h2 className="text-2xl md:text-5xl font-black text-white leading-none mb-6 tracking-tighter">
                  {selectedProject.title}
                </h2>

                <div className="space-y-6">
                  <p className="text-slate-400 text-xs md:text-lg italic font-light">
                    "{selectedProject.description}"
                  </p>

                  {/* Tech Stack - Mobile-e choto choto box */}
                  <div className="grid grid-cols-2 gap-2 md:gap-4">
                    {selectedProject.features?.map((feat, index) => (
                      <div
                        key={index}
                        className="p-3 rounded-xl bg-white/5 border border-white/5"
                      >
                        <p className="text-[8px] text-blue-500 font-bold uppercase">
                          {feat.label}
                        </p>
                        <p className="text-white text-[10px] md:text-sm truncate">
                          {feat.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <footer className="mt-8 flex flex-row items-center gap-3">
                  <a
                    href={selectedProject.external_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-4 bg-white text-black text-[10px] md:text-xs font-black uppercase tracking-widest rounded-xl text-center"
                  >
                    Live Preview 🚀
                  </a>
                  <button
                    onClick={closeModal}
                    className="px-4 py-4 bg-white/5 text-white text-[10px] md:text-xs font-black uppercase tracking-widest rounded-xl border border-white/10"
                  >
                    Close
                  </button>
                </footer>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #3b82f6;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default MyPortfolio;
