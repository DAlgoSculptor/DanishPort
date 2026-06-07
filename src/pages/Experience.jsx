import { EXPERIENCES } from "../constants"
import { Link } from "react-router-dom"

const Experience = () => {
    return (
        <section className="pt-24 pb-16 bg-gradient-to-br from-gray-950 via-slate-900 to-black min-h-screen">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 animate-fade-in">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-100 via-slate-200 to-gray-300 bg-clip-text text-transparent">
                        Work Experience
                    </h1>
                    <p className="text-xl text-gray-200 dark:text-slate-100 max-w-3xl mx-auto">
                        Full-stack development journey showcasing expertise in building scalable web applications, backend systems, and modern development practices.
                    </p>
                </div>
                
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-emerald-500"></div>
                        
                        <div className="space-y-8">
                            {EXPERIENCES.map((experience, index) => (
                                <div 
                                    key={index} 
                                    className="relative pl-16 animate-fade-in"
                                    style={{ animationDelay: `${index * 0.2}s` }}
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 border-4 border-white dark:border-slate-900 z-10"></div>
                                    
                                    {/* Content */}
                                    <div className="p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                        <span className="inline-block px-3 py-1 text-sm font-semibold text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-300 rounded-full mb-3">
                                            {experience.yearRange}
                                        </span>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                                            {experience.role}
                                        </h3>
                                        <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-3">
                                            {experience.company}
                                        </h4>
                                        <p className="text-slate-600 dark:text-slate-400 mb-4">
                                            {experience.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {experience.techStack.map((tech, techIndex) => (
                                                <span 
                                                    key={techIndex} 
                                                    className="px-2 py-1 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/50 rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="mt-16 text-center animate-fade-in animation-delay-500">
                    <Link 
                        to="/" 
                        className="inline-block px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200 shadow-md transform hover:-translate-y-1"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </div>
            
            {/* Custom styles */}
            <style>{`
                .animate-fade-in {
                    animation: fadeInUp 0.6s ease-out forwards;
                    opacity: 0;
                    transform: translateY(20px);
                }
                
                .animation-delay-500 {
                    animation-delay: 0.5s;
                }
                
                @keyframes fadeInUp {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    )
}

export default Experience