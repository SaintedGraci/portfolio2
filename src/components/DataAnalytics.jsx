import React from 'react';

const DataAnalytics = () => {
  const analyticsProjects = [
    // Placeholder for future projects
    {
      title: "Coming Soon",
      tags: ["Python", "Pandas", "Data Visualization", "Power BI"],
      description: "Exciting data analytics and business analytics projects in development",
      color: "border-pink-500",
      isPlaceholder: true
    }
  ];

  return (
    <section id="analytics" className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h2 className="text-pink-500 font-mono text-sm tracking-widest mb-2">// DATA_INSIGHTS</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white italic uppercase">
              Data & Business Analytics
            </h3>
            <p className="text-slate-400 mt-4 max-w-2xl">
              Exploring the world of data-driven decision making. Projects showcasing data analysis, 
              visualization, and business intelligence coming soon.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {analyticsProjects.map((project, index) => (
            <div 
              key={index} 
              className="group"
            >
              <div className={`relative aspect-[16/10] rounded-3xl overflow-hidden border-2 ${project.color} bg-slate-900 transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(236,72,153,0.5)] flex items-center justify-center`}>
                {project.isPlaceholder ? (
                  <div className="p-8 text-center">
                    <div className="mb-6">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="w-20 h-20 mx-auto text-pink-500/30"
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        strokeWidth="1.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h4 className="text-2xl font-black text-white mb-3 uppercase italic">
                      {project.title}
                    </h4>
                    <p className="text-sm text-slate-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-bold uppercase tracking-widest bg-pink-500/10 border border-pink-500/30 px-3 py-1 rounded-full text-pink-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
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
                      <h4 className="text-2xl md:text-3xl font-black text-white group-hover:text-pink-500 transition-colors uppercase italic mb-3">
                        {project.title}
                      </h4>
                      {project.description && (
                        <p className="text-sm text-slate-400 mb-3 line-clamp-2">
                          {project.description}
                        </p>
                      )}
                      {project.github && (
                        <div className="flex flex-wrap gap-2">
                          {project.github.map((repo, idx) => (
                            <a 
                              key={idx}
                              href={repo.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-pink-500/10 hover:bg-pink-500 text-pink-500 hover:text-white border border-pink-500/30 hover:border-pink-500 px-3 py-1.5 rounded-lg transition-all duration-300"
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
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataAnalytics;
