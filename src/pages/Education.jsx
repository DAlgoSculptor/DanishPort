import { EDUCATION } from "../constants"
import { Link } from "react-router-dom"
import { RiExternalLinkLine, RiArrowLeftLine } from "@remixicon/react"

const Education = () => {
  return (
    <section className="pt-28 pb-20 bg-zinc-950 text-zinc-100 min-h-screen relative grid-pattern-dev font-sans">
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-display font-black mb-4 text-white">
            Academic Credentials
          </h1>
          <p className="text-sm md:text-base text-zinc-400 max-w-xl mx-auto font-light leading-relaxed">
            Academic training in systems engineering, algorithm design, and core programming paradigms.
          </p>
        </div>

        {/* Academic Cards */}
        <div className="max-w-3xl mx-auto space-y-6">
          {EDUCATION.map((edu, index) => (
            <div 
              key={edu.id || index} 
              className="p-6 md:p-8 bg-zinc-900/40 border border-zinc-800/80 rounded-2xl flex flex-col justify-between hover:border-zinc-750 transition-colors duration-150 group"
            >
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg font-display font-bold text-white group-hover:text-indigo-400 transition-colors duration-150">
                    {edu.degree}
                  </h3>
                  
                  <h4 className="text-xs font-mono text-zinc-400 mt-1">
                    <a 
                      href={edu.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:underline inline-flex items-center gap-1"
                    >
                      {edu.institution.toLowerCase().replace(" ", "_")}
                      <RiExternalLinkLine className="w-3 h-3 text-zinc-650" />
                    </a>
                  </h4>
                </div>
                
                <span className="inline-block px-2.5 py-0.5 rounded font-mono text-[10px] bg-zinc-950 border border-zinc-850 text-zinc-400 self-start sm:self-auto">
                  {edu.duration.toLowerCase()}
                </span>
              </div>
              
              <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-light mb-6">
                {edu.description}
              </p>
              
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-900/80">
                {["computer_science", "systems_engineering", "ai_architectures"].map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="px-2 py-0.5 rounded font-mono text-[10px] bg-zinc-950 border border-zinc-850 text-zinc-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Back Link */}
        <div className="mt-16 text-center">
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

export default Education