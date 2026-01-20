import React from 'react';

const Section3 = () => {
  const stacks = [
    { name: "React JS", category: "Frontend", color: "text-lime-400", border: "hover:border-lime-400" },
    { name: "Vite", category: "Build Tool", color: "text-pink-500", border: "hover:border-pink-500" },
    { name: "Node JS", category: "Backend", color: "text-lime-400", border: "hover:border-lime-400" },
    { name: "Express", category: "Framework", color: "text-pink-500", border: "hover:border-pink-500" },
    { name: "Laravel", category: "Backend", color: "text-lime-400", border: "hover:border-lime-400" },
    { name: "MySQL", category: "Database", color: "text-pink-500", border: "hover:border-pink-500" },
    { name: "HTML5", category: "Core", color: "text-lime-400", border: "hover:border-lime-400" },
    { name: "CSS3", category: "Style", color: "text-pink-500", border: "hover:border-pink-500" },
    { name: "JavaScript", category: "Language", color: "text-lime-400", border: "hover:border-lime-400" },
    { name: "Tailwind", category: "Style", color: "text-pink-500", border: "hover:border-pink-500" },
  ];

  return (
    <section id="experience" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Subtle background text for "Chaos" vibe */}
      <div className="absolute top-0 right-0 text-[15rem] font-black text-white/[0.02] select-none pointer-events-none tracking-tighter">
        STACKS
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-pink-500 font-mono text-sm tracking-[0.5em] uppercase mb-4">// TECH_CAPABILITIES</h2>
          <h3 className="text-5xl md:text-6xl font-black text-white italic tracking-tighter">
            MY <span className="text-lime-400">ARSENAL.</span>
          </h3>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {stacks.map((stack, index) => (
            <div 
              key={index}
              className={`group p-8 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl transition-all duration-300 ${stack.border} hover:-translate-y-2 hover:shadow-[0_10px_30px_-15px_rgba(163,230,53,0.3)]`}
            >
              <div className="flex flex-col items-center justify-center text-center">
                <span className="text-slate-500 font-mono text-[10px] uppercase tracking-widest mb-4 group-hover:text-white transition-colors">
                  {stack.category}
                </span>
                <h4 className={`text-xl font-black uppercase tracking-tight ${stack.color}`}>
                  {stack.name}
                </h4>
                
                {/* Decorative Dot */}
                <div className={`w-1 h-1 rounded-full mt-4 bg-slate-700 group-hover:bg-white group-hover:scale-150 transition-all shadow-[0_0_10px_rgba(255,255,255,0.5)]`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 font-medium max-w-lg mx-auto">
            Constantly evolving. I prefer building <span className="text-white">robust backends</span> with Laravel and Node, and <span className="text-white">dynamic interfaces</span> with React.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section3;