import React from 'react';
import Header from '../components/header.jsx';
import Section2 from '../components/section2.jsx';
import Section3 from '../components/section3.jsx';
import profImage from '../assets/prof.jpg'; 

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-lime-400 selection:text-slate-950 scroll-smooth">
      <Header />

      <main>
        {/* --- SECTION 1: HERO --- */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
          
          {/* Neon Background Ambience */}
          <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-lime-400 rounded-full mix-blend-screen filter blur-[150px] opacity-[0.07] animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-pink-500 rounded-full mix-blend-screen filter blur-[150px] opacity-[0.07] animate-pulse transition-delay-2000"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
              
              {/* LEFT SIDE: Typography */}
              <div className="w-full lg:w-3/5 order-2 lg:order-1 text-center lg:text-left">
                <div className="inline-block mb-6 px-4 py-1 rounded-full border border-lime-400/30 bg-lime-400/5">
                   <span className="text-lime-400 font-mono text-xs uppercase tracking-[0.3em]">
                    // Innovation Engine Active
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-6xl xl:text-7xl font-black tracking-tight mb-8 leading-[1.1]">
                  Breaking complex <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-pink-500 to-pink-600">
                    problems into elegant,
                  </span> <br className="hidden md:block" />
                  scalable code.
                </h1>

                <p className="text-base md:text-lg text-slate-400 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium italic">
                  "I thrive in the space where logic meets raw creativity. My goal is to push the boundaries of the web, turning static layouts into living, breathing digital products."
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                  <a href="#projects" className="px-8 py-4 bg-lime-400 text-slate-950 rounded-xl font-bold uppercase text-sm tracking-widest hover:translate-y-[-4px] transition-all duration-300 shadow-[0_10px_20px_rgba(163,230,53,0.3)]">
                    View Projects
                  </a>
                  <a href="#contact" className="px-8 py-4 border border-slate-700 hover:border-pink-500 text-white rounded-xl font-bold uppercase text-sm tracking-widest hover:bg-pink-500/5 transition-all duration-300">
                    Get In Touch
                  </a>
                </div>
              </div>

              {/* RIGHT SIDE: Profile Image */}
              <div className="w-full max-w-[450px] lg:w-2/5 order-1 lg:order-2">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-lime-400 to-pink-600 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-700"></div>
                  
                  <div className="relative aspect-[4/5] w-full bg-slate-900 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                    <img 
                      src={profImage} 
                      alt="Profile"
                      className="w-full h-full object-cover grayscale hover:grayscale-0 scale-105 hover:scale-100 transition-all duration-700 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60"></div>
                  </div>

                  <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-lime-400 opacity-50"></div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-pink-500 opacity-50"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: PROJECT CAROUSEL --- */}
        <Section2 />

        {/* --- SECTION 3: TECH STACK GRID --- */}
        <Section3 />

        {/* --- FOOTER / CONTACT SECTION --- */}
        <footer id="contact" className="py-24 border-t border-slate-900 bg-slate-950">
          <div className="container mx-auto px-6 text-center">
            <h4 className="text-3xl font-black mb-6 uppercase tracking-tighter">
              Let's build something <span className="text-lime-400 italic">insane.</span>
            </h4>
            <a href="mailto:your-email@example.com" className="text-slate-400 hover:text-pink-500 transition-colors font-mono tracking-widest">
              CONTACT@DEVELOPER.EXE
            </a>
            <div className="mt-12 opacity-50">
               <p className="text-slate-500 font-mono text-xs tracking-[0.3em] uppercase">
                Designed & Built by <span className="text-white">Saintedgraci</span> — 2026
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Home;