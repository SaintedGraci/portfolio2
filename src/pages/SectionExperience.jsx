import React from 'react';
import Header from '../components/header'; // Ensure path is correct

const SectionExperience = () => {
  
  const experiences = [
    {
      year: "2025 - Present",
      title: "Capstone Project Lead",
      company: "Robotics Research Group",
      description: "Leading a team of BSIT students in developing an autonomous robotics system. Responsible for software-hardware integration and project roadmap.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800", 
      color: "border-lime-400"
    },
    {
      year: "2023 - 2026",
      title: "BSIT Student",
      company: "University Degree",
      description: "Focusing on Full-Stack development and Database Management. Consistently exploring modern frameworks like React and Laravel.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800",
      color: "border-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* 1. Header is now included */}
      <Header />

      {/* 2. Added pt-32 to prevent content hiding under fixed header */}
      <main className="pt-32 pb-24">
        <section id="experience" className="relative">
          <div className="container mx-auto px-6">
            
            <div className="mb-16">
              <h2 className="text-lime-400 font-mono text-sm tracking-[0.5em] uppercase mb-4">// MISSION_LOG</h2>
              <h3 className="text-5xl font-black text-white italic">EXPERIENCE</h3>
            </div>

            <div className="space-y-24">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                >
                  {/* Text Side */}
                  <div className="w-full lg:w-1/2">
                    <span className="text-pink-500 font-mono font-bold tracking-widest">{exp.year}</span>
                    <h4 className="text-3xl font-black text-white mt-2 uppercase">{exp.title}</h4>
                    <p className="text-lime-400 font-mono text-sm mb-6 uppercase tracking-tighter">{exp.company}</p>
                    <p className="text-slate-400 leading-relaxed text-lg max-w-xl">
                      {exp.description}
                    </p>
                  </div>

                  {/* Picture Side */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative group">
                      {/* Glow Effect behind image */}
                      <div className={`absolute -inset-2 border-2 ${exp.color} opacity-20 rounded-2xl group-hover:opacity-100 transition-opacity duration-500`}></div>
                      
                      <div className="relative overflow-hidden rounded-xl border border-white/10 aspect-video bg-slate-900 shadow-2xl">
                        <img 
                          src={exp.image} 
                          alt={exp.title} 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                        />
                        
                        {/* Technical Overlay */}
                        <div className="absolute top-4 right-4 flex gap-2 items-center bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                           <div className="w-2 h-2 rounded-full bg-lime-400 animate-ping"></div>
                           <span className="text-[10px] font-mono text-white/70">LIVE_DATA_FEED</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SectionExperience;