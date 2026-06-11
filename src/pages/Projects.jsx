import { PROJECTS } from "../constants"
import { Link } from "react-router-dom"
import { RiExternalLinkLine, RiArrowLeftLine } from "@remixicon/react"
import { useState } from "react"

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filterCategory = (project) => {
    if (activeFilter === "All") return true;
    const stack = project.techStack.map(t => t.toLowerCase());
    
    if (activeFilter === "Full Stack") {
      return stack.includes("next.js") || stack.includes("postgresql") || stack.includes("node.js");
    }
    if (activeFilter === "Mobile") {
      return stack.includes("android") || stack.includes("kotlin") || stack.includes("flutter");
    }
    if (activeFilter === "AI & Tools") {
      return stack.includes("ai apis") || stack.includes("leetcode graphql api") || project.title.toLowerCase().includes("analyzer") || project.title.toLowerCase().includes("notes");
    }
    return true;
  };

  const filteredProjects = PROJECTS.filter(filterCategory);
  const filters = ["All", "Full Stack", "Mobile", "AI & Tools"];

  return (
    <section className="pt-28 pb-20 bg-zinc-950 text-zinc-100 min-h-screen relative grid-pattern-dev font-sans">
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-display font-black mb-4 text-white">
            Projects Catalog
          </h1>
          <p className="text-sm md:text-base text-zinc-400 max-w-xl mx-auto font-light leading-relaxed">
            Index of active deployments, developer tools, and API architectures. Toggle filters to browse by layer.
          </p>
        </div>

        {/* Filters - Monospace Console Style */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16 animate-fade-in">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-lg font-mono text-xs transition-all duration-150 border ${
                activeFilter === filter
                  ? "bg-zinc-50 border-zinc-200 text-zinc-950 font-semibold"
                  : "bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800/40"
              }`}
            >
              {filter.toLowerCase().replace(" ", "_")}.sh
            </button>
          ))}
        </div>

        {/* Clean Project Rows */}
        <div className="space-y-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="p-6 md:p-8 bg-zinc-900/40 border border-zinc-800/80 rounded-2xl flex flex-col md:flex-row gap-8 items-start md:items-stretch hover:border-zinc-750 transition-all duration-150 group animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              
              {/* Image Container - clean flat frame */}
              <div className="w-full md:w-56 h-36 rounded-xl border border-zinc-800 bg-zinc-950 overflow-hidden relative flex-shrink-0">
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 contrast-110 transition-all duration-300"
                />
              </div>

              {/* Text Description */}
              <div className="flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg md:text-xl font-display font-bold text-white group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    {project.id <= 2 && (
                      <span className="px-2 py-0.5 text-[9px] font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded">
                        featured
                      </span>
                    )}
                  </div>
                  <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-zinc-900">
                  {/* Tech Stack - Monospaced Tag items */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded font-mono text-[10px] bg-zinc-950 border border-zinc-850 text-zinc-500"
                      >
                        {tech.toLowerCase().replace(".js", "").replace(" ", "_")}
                      </span>
                    ))}
                  </div>

                  {/* External Project links */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-[11px] text-indigo-400 hover:text-indigo-300 tracking-wide"
                  >
                    launch_app →
                  </a>
                </div>
              </div>
              
            </div>
          ))}
        </div>

        {/* Empty Search indicator */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 font-mono text-xs text-zinc-500">
            // search completed. 0 records matches the query.
          </div>
        )}

        {/* Back Link */}
        <div className="mt-16 text-center animate-fade-in">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-400 font-mono text-xs transition-all duration-150"
          >
            <RiArrowLeftLine className="w-3.5 h-3.5" />
            cd ..
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Projects