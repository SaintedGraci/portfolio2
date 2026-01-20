import React, { useState } from 'react';
import barangayImage from '../assets/barangay.png';
import recipe from '../assets/recipe.png';
import resta from '../assets/resta.avif';
const Section2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Barangay Smart System",
      tags: ["React", "Node.js", "Mysql", "Tailwind"],
      image: barangayImage,
      color: "border-lime-400"
    },
    {
      title: "SMART Recipe App",
      tags: ["React", "Node.js", "Mysql", "Tailwind", "API"],
      image: recipe,
      color: "border-pink-500"
    },
    {
      title: "Aling Dadai Restaurant",
      tags: ["Laravel", "PHP", "Mysql", "Bootstrap", "tailwind"],
      image: resta,
      color: "border-lime-400"
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
                    <h4 className="text-2xl md:text-3xl font-black text-white group-hover:text-lime-400 transition-colors uppercase italic">
                      {project.title}
                    </h4>
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