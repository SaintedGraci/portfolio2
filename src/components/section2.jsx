import React, { useState } from 'react';
import barangayImage from '../assets/barangay.png';
import recipe from '../assets/recipe.png';
import resta from '../assets/resta.avif';
import catering from '../assets/catering-02.jpg';
import traffisight from '../assets/traffisightai.jpg';
const Section2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Barangay Smart System",
      tags: ["React", "Node.js", "Mysql", "Tailwind"],
      image: barangayImage,
      color: "border-lime-400",
      github: [
        { label: "Client", url: "https://github.com/SaintedGraci/BARANGAY-SMART-SYSTEM-CLIENT.git" },
        { label: "Server", url: "https://github.com/SaintedGraci/BARANGAY-BAKILID-SERVER.git" }
      ]
    },
    {
      title: "SMART Recipe App",
      tags: ["React", "Node.js", "Mysql", "Tailwind", "API"],
      image: recipe,
      color: "border-pink-500",
      github: [
        { label: "Repository", url: "https://github.com/SaintedGraci/Recipe-Finder-Web.git" }
      ]
    },
    {
      title: "Aling Dadai Restaurant",
      tags: ["Laravel", "PHP", "Mysql", "Bootstrap", "tailwind"],
      image: resta,
      color: "border-lime-400",
      github: [
        { label: "Repository", url: "https://github.com/SaintedGraci/RestaurantSystem.git" }
      ]
    },
    {
      title: "Catering Smart System",
      tags: ["React", "Node.js", "Mysql", "Tailwind"],
      image: catering,
      color: "border-pink-500",
      github: [
        { label: "UI", url: "https://github.com/SaintedGraci/catering-ui.git" },
        { label: "Server", url: "https://github.com/SaintedGraci/Catering-Server.git" }
      ]
    },
    {
      title: "TraffiSight",
      tags: ["Python", "AI", "Computer Vision", "OpenCV"],
      image: traffisight,
      color: "border-lime-400",
      github: [
        { label: "Repository", url: "https://github.com/SaintedGraci/TraffiSight.git" }
      ],
      description: "AI-powered system that detects common stoplight violations such as beating the red light"
    }
  ];

  const nextSlide = () => {
    // Limits the index so you don't scroll into empty space
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section id="projects" className="py-24 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h2 className="text-lime-400 font-mono text-sm tracking-widest mb-2">// SELECTED_WORKS</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white italic uppercase">Project Repository</h3>
          </div>
          
          <div className="flex gap-4">
            <button onClick={prevSlide} className="p-4 border border-slate-700 rounded-full hover:border-lime-400 text-white transition-all active:scale-90">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button onClick={nextSlide} className="p-4 border border-slate-700 rounded-full hover:border-pink-500 text-white transition-all active:scale-90">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        {/* Outer container to hide overflow */}
        <div className="relative">
          <div 
            className="flex transition-transform duration-500 ease-out gap-6"
            // FIX: On mobile it moves 100%, on desktop we move by the card width percentage
            style={{ transform: `translateX(-${currentIndex * (window.innerWidth < 768 ? 100 : 33.33)}%)` }}
          >
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="min-w-full md:min-w-[48%] lg:min-w-[31%] group"
              >
                <div className={`relative aspect-[16/10] rounded-3xl overflow-hidden border-2 ${project.color} bg-slate-800 transition-all duration-500 group-hover:shadow-[0_0_30px_-10px_rgba(163,230,53,0.5)]`}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
                  />
                  
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-bold uppercase tracking-widest bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-white/90">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h4 className="text-2xl md:text-3xl font-black text-white group-hover:text-lime-400 transition-colors uppercase italic mb-3">
                      {project.title}
                    </h4>
                    {project.description && (
                      <p className="text-sm text-slate-400 mb-3 line-clamp-2">
                        {project.description}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {project.github.map((repo, idx) => (
                        <a 
                          key={idx}
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-lime-400/10 hover:bg-lime-400 text-lime-400 hover:text-slate-950 border border-lime-400/30 hover:border-lime-400 px-3 py-1.5 rounded-lg transition-all duration-300"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                            <path d="M9 18c-4.51 2-5-2-7-2"/>
                          </svg>
                          {repo.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;