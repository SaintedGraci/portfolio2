import React from 'react';
import Header from '../components/header.jsx';
import Section2 from '../components/section2.jsx';
import Section3 from '../components/section3.jsx';
import DataAnalytics from '../components/DataAnalytics.jsx';
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

        {/* --- DATA ANALYTICS SECTION --- */}
        <DataAnalytics />

        {/* --- SECTION 3: TECH STACK GRID --- */}
        <Section3 />

        {/* --- FOOTER / CONTACT SECTION --- */}
        <footer id="contact" className="py-32 border-t border-slate-900 bg-slate-950 relative overflow-hidden">
          {/* Background Glow Effects */}
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-lime-400 rounded-full mix-blend-screen filter blur-[150px] opacity-[0.05]"></div>
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-pink-500 rounded-full mix-blend-screen filter blur-[150px] opacity-[0.05]"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-lime-400 font-mono text-sm tracking-[0.5em] uppercase mb-4">// GET_IN_TOUCH</h2>
              <h3 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter">
                Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-pink-500 italic">insane.</span>
              </h3>
              
              <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                Got a project in mind? Want to collaborate? Or just want to chat about tech? 
                I'm always open to new opportunities and interesting conversations.
              </p>

              {/* Contact Options */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <a 
                  href="mailto:vinnylucci01@gmail.com"
                  className="p-6 border border-slate-800 rounded-2xl bg-slate-900/40 hover:border-lime-400/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-lime-400/10 flex items-center justify-center group-hover:bg-lime-400/20 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-lime-400">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </div>
                  <h4 className="text-white font-bold mb-2 uppercase text-sm tracking-wider">Email</h4>
                  <p className="text-slate-500 text-xs font-mono">vinnylucci01@gmail.com</p>
                </a>

                <a 
                  href="https://github.com/SaintedGraci"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 border border-slate-800 rounded-2xl bg-slate-900/40 hover:border-pink-500/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-pink-500/10 flex items-center justify-center group-hover:bg-pink-500/20 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                      <path d="M9 18c-4.51 2-5-2-7-2"/>
                    </svg>
                  </div>
                  <h4 className="text-white font-bold mb-2 uppercase text-sm tracking-wider">GitHub</h4>
                  <p className="text-slate-500 text-xs font-mono">@SaintedGraci</p>
                </a>

                <a 
                  href="https://www.linkedin.com/in/john-marvin-salazar-896a29434"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 border border-slate-800 rounded-2xl bg-slate-900/40 hover:border-lime-400/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-lime-400/10 flex items-center justify-center group-hover:bg-lime-400/20 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-lime-400">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect width="4" height="12" x="2" y="9"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  </div>
                  <h4 className="text-white font-bold mb-2 uppercase text-sm tracking-wider">LinkedIn</h4>
                  <p className="text-slate-500 text-xs font-mono">John Marvin Salazar</p>
                </a>
              </div>

              {/* CTA Button */}
              <a 
                href="mailto:vinnylucci01@gmail.com" 
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-lime-400 to-pink-500 text-slate-950 rounded-xl font-bold uppercase text-sm tracking-widest hover:translate-y-[-4px] transition-all duration-300 shadow-[0_20px_40px_rgba(163,230,53,0.3)]"
              >
                <span>Start a conversation</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </a>

              {/* Footer Credits */}
              <div className="mt-20 pt-8 border-t border-slate-900">
                <p className="text-slate-500 font-mono text-xs tracking-[0.3em] uppercase">
                  Designed & Built by <span className="text-lime-400">Saintedgraci</span> — 2026
                </p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Home;