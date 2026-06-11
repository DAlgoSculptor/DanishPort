import { SKILLS } from "../constants"
import { Link } from "react-router-dom"
import { RiArrowLeftLine, RiCodeLine, RiServerLine, RiDatabaseLine, RiToolsLine, RiTerminalLine } from "@remixicon/react"

const Skills = () => {
  // Categorize skills based on names
  const frontendSkills = ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion", "Shadcn", "Daisy UI"];
  const backendSkills = ["Node.js", "Express.js", "Python", "Django", "REST API", "GraphQL", "Socket.io"];
  const databaseSkills = ["Supabase", "Firebase", "PostgreSQL", "MongoDB"];

  const getSkillCategory = (skillName) => {
    if (frontendSkills.includes(skillName)) return "Frontend";
    if (backendSkills.includes(skillName)) return "Backend";
    if (databaseSkills.includes(skillName)) return "Database";
    return "Tools";
  };

  const categorized = {
    Frontend: {
      title: "Frontend Engineering",
      command: "cat frontend.json",
      icon: <RiCodeLine className="w-4 h-4 text-zinc-400" />,
      items: SKILLS.filter(s => getSkillCategory(s.name) === "Frontend")
    },
    Backend: {
      title: "Backend & Distributed Systems",
      command: "cat backend.json",
      icon: <RiServerLine className="w-4 h-4 text-zinc-400" />,
      items: SKILLS.filter(s => getSkillCategory(s.name) === "Backend")
    },
    Database: {
      title: "Databases & Storage",
      command: "cat databases.json",
      icon: <RiDatabaseLine className="w-4 h-4 text-zinc-400" />,
      items: SKILLS.filter(s => getSkillCategory(s.name) === "Database")
    },
    Tools: {
      title: "DevOps & Core Tools",
      command: "cat tools.json",
      icon: <RiToolsLine className="w-4 h-4 text-zinc-400" />,
      items: SKILLS.filter(s => getSkillCategory(s.name) === "Tools")
    }
  };

  return (
    <section className="pt-28 pb-20 bg-zinc-950 text-zinc-100 min-h-screen relative grid-pattern-dev font-sans">
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-display font-black mb-4 text-white">
            Technical Stack
          </h1>
          <p className="text-sm md:text-base text-zinc-400 max-w-xl mx-auto font-light leading-relaxed">
            A precise inventory of programming languages, state managers, relational query layers, and developer tooling.
          </p>
        </div>

        {/* Technical Philosophy Row */}
        <div className="mb-16 p-6 border border-zinc-800 bg-zinc-900/20 rounded-2xl font-mono-dev max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-3 border-b border-zinc-850 pb-2">
            <RiTerminalLine className="w-4 h-4 text-zinc-500" />
            <span className="text-[10px] text-zinc-500 uppercase tracking-wider">engineering_philosophy.md</span>
          </div>
          <p className="text-xs md:text-sm text-zinc-300 font-mono leading-relaxed">
            "I write clean, type-safe APIs and component layers with a focus on performant rendering and low network overhead. By avoiding unnecessary abstraction client-side and designing indexes properly database-side, I build web software that stands up under production load."
          </p>
        </div>

        {/* Categories Grid */}
        <div className="space-y-12 mb-20">
          {Object.entries(categorized).map(([key, category]) => (
            <div key={key} className="space-y-4">
              
              {/* Category Header (Terminal-style) */}
              <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
                <div className="flex items-center gap-2.5">
                  {category.icon}
                  <h2 className="text-sm font-mono font-semibold tracking-wider text-zinc-200">
                    {category.title}
                  </h2>
                </div>
                <div className="font-mono text-[10px] text-zinc-600">
                  $ {category.command}
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {category.items.map((skill, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-3 bg-zinc-900/30 border border-zinc-850 hover:border-zinc-800 hover:bg-zinc-900/60 rounded-xl transition-all duration-150 group"
                  >
                    <div className="text-lg text-zinc-500 filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-200">
                      {skill.icon}
                    </div>
                    <span className="font-mono text-xs text-zinc-400 group-hover:text-zinc-200 transition-colors">
                      {skill.name.toLowerCase().replace(" ", "_")}
                    </span>
                  </div>
                ))}
              </div>
              
            </div>
          ))}
        </div>

        {/* Understated Systems Architecture Section */}
        <div className="border-t border-zinc-900 pt-16">
          <h2 className="text-lg font-mono font-bold text-white mb-8 text-center uppercase tracking-wider">
            Systems Engineering Focus
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            
            <div className="p-6 border border-zinc-900 bg-zinc-900/10 rounded-xl space-y-3">
              <h3 className="text-sm font-mono font-semibold text-zinc-200 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                UI Systems & State
              </h3>
              <p className="text-xs text-zinc-500 leading-relaxed font-light">
                Creating responsive interfaces. Prioritizing modular layout structures, strict type validation, clean state tracking, and layout animations.
              </p>
            </div>
            
            <div className="p-6 border border-zinc-900 bg-zinc-900/10 rounded-xl space-y-3">
              <h3 className="text-sm font-mono font-semibold text-zinc-200 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                APIs & Edge Runtimes
              </h3>
              <p className="text-xs text-zinc-500 leading-relaxed font-light">
                Constructing backend endpoints and edge middleware route controls. Configuring token authentication, websocket channels, and server caching strategies.
              </p>
            </div>
            
            <div className="p-6 border border-zinc-900 bg-zinc-900/10 rounded-xl space-y-3">
              <h3 className="text-sm font-mono font-semibold text-zinc-200 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                Data & Storage Engines
              </h3>
              <p className="text-xs text-zinc-500 leading-relaxed font-light">
                Structuring database schemas, indexing tables for lookup performance, setting up realtime replication pipes, and linking secure asset CDN pipelines.
              </p>
            </div>
            
          </div>
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

export default Skills