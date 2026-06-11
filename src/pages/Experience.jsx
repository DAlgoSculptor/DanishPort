import { EXPERIENCES } from "../constants"
import { Link } from "react-router-dom"
import { RiArrowLeftLine, RiTerminalLine } from "@remixicon/react"

const Experience = () => {
  return (
    <section className="pt-28 pb-20 bg-zinc-950 text-zinc-100 min-h-screen relative grid-pattern-dev font-sans">
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-display font-black mb-4 text-white">
            Professional History
          </h1>
          <p className="text-sm md:text-base text-zinc-400 max-w-xl mx-auto font-light leading-relaxed">
            A chronological timeline of engineering roles, software delivery, and operational infrastructure builds.
          </p>
        </div>

        {/* Timeline Block */}
        <div className="relative border-l border-zinc-850 pl-6 md:pl-10 ml-4 md:ml-10 space-y-12">
          
          {EXPERIENCES.map((experience, index) => (
            <div 
              key={index} 
              className="relative group transition-all duration-150"
            >
              
              {/* Flat coordinate node */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-3 h-3 rounded-full bg-zinc-950 border border-zinc-700 group-hover:border-indigo-500 transition-colors duration-150 flex items-center justify-center">
                <span className="w-1 h-1 bg-zinc-700 group-hover:bg-indigo-500 rounded-full"></span>
              </div>

              {/* Console card */}
              <div className="p-6 md:p-8 bg-zinc-900/40 border border-zinc-800/80 rounded-2xl flex flex-col justify-between hover:border-zinc-750 transition-colors duration-150">
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-display font-bold text-white group-hover:text-indigo-400 transition-colors duration-150">
                      {experience.role}
                    </h3>
                    <span className="font-mono text-xs text-zinc-400">
                      @{experience.company.toLowerCase().replace(" ", "_")}
                    </span>
                  </div>
                  
                  <span className="inline-block px-2.5 py-0.5 rounded font-mono text-[10px] bg-zinc-950 border border-zinc-850 text-zinc-400 self-start sm:self-auto">
                    {experience.yearRange.toLowerCase()}
                  </span>
                </div>
                
                <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-light mb-6">
                  {experience.description}
                </p>
                
                <div className="border-t border-zinc-900/80 pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {experience.techStack.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-2 py-0.5 rounded font-mono text-[10px] bg-zinc-950 border border-zinc-850 text-zinc-500"
                      >
                        {tech.toLowerCase().replace(".js", "").replace(" ", "_")}
                      </span>
                    ))}
                  </div>
                </div>
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

export default Experience