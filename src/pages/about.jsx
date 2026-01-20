import React from 'react';
import Header from '../components/header.jsx';

const About = () => {
  const stats = [
    { label: "Level", value: "3rd Year BSIT" },
    { label: "Status", value: "Active Student" },
    { label: "Focus", value: "Full Stack" },
    { label: "Role", value: "Capstone Lead" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-lime-400">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header Title */}
          <div className="mb-16">
            <h2 className="text-lime-400 font-mono text-sm tracking-[0.5em] uppercase mb-4">// USER_PROFILE</h2>
            <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter">
              WHO IS <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-pink-500">SaintedGraci</span>
            </h1>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Story */}
            <div className="lg:col-span-7 space-y-8">
              <div className="p-8 border border-slate-800 bg-slate-900/40 rounded-3xl backdrop-blur-md">
                <p className="text-xl leading-relaxed text-slate-300">
                  I am a <span className="text-white font-bold italic">3rd Year BSIT student</span> with a passion for architecting digital solutions from the ground up. 
                  My journey in tech is driven by a curiosity for how complex systems interact, leading me to become an 
                  <span className="text-lime-400 font-bold"> aspiring Full Stack Developer</span>.
                </p>
                
                <p className="mt-6 text-slate-400 leading-relaxed">
                  Currently, I am stepping into a leadership role as the <span className="text-pink-500 font-bold uppercase tracking-tight">Capstone Lead</span> for a Robotics Project. 
                  This experience is sharpening my ability to bridge the gap between hardware logic and software precision, 
                  all while managing a team to deliver high-impact results.
                </p>
              </div>

              {/* Personal Mission Bento Box */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 border border-slate-800 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950">
                  <h4 className="text-lime-400 font-bold mb-2 uppercase text-xs tracking-widest">Core Mission</h4>
                  <p className="text-sm text-slate-400">To build scalable, efficient, and visually electrifying web applications that solve real-world problems.</p>
                </div>
                <div className="p-6 border border-slate-800 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950">
                  <h4 className="text-pink-500 font-bold mb-2 uppercase text-xs tracking-widest">Leadership</h4>
                  <p className="text-sm text-slate-400">Leading the robotics capstone to ensure seamless integration between embedded systems and user interfaces.</p>
                </div>
              </div>
            </div>

            {/* Right Column: System Specs / Stats */}
            <div className="lg:col-span-5 space-y-6">
              <div className="border border-lime-400/20 bg-lime-400/5 p-8 rounded-3xl sticky top-32">
                <h3 className="text-white font-black text-2xl mb-8 uppercase italic tracking-tight">System_Stats.exe</h3>
                
                <div className="space-y-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex justify-between items-end border-b border-slate-800 pb-2">
                      <span className="text-slate-500 font-mono text-xs uppercase tracking-widest">{stat.label}</span>
                      <span className="text-lime-400 font-bold text-lg uppercase tracking-tighter">{stat.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                   <div className="text-[10px] text-slate-600 font-mono uppercase tracking-[0.2em] mb-4">Current_Progress</div>
                   <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="w-[75%] h-full bg-gradient-to-r from-lime-400 to-pink-500 animate-pulse"></div>
                   </div>
                   <div className="flex justify-between mt-2 text-[10px] text-slate-500 font-mono">
                      <span>BSIT DEGREE</span>
                      <span>75% COMPLETE</span>
                   </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default About;