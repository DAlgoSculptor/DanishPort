import { EDUCATION } from "../constants"
import { Link } from "react-router-dom"
import { RiExternalLinkLine } from "@remixicon/react"

const Education = () => {
    return (
        <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-green-50 to-emerald-100 dark:from-slate-900 dark:via-slate-800 dark:to-emerald-950 min-h-screen">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 animate-fade-in">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                        Education
                    </h1>
                    <p className="text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
                        My academic journey and the knowledge I've gained along the way.
                    </p>
                </div>
                
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-8">
                        {EDUCATION.map((edu, index) => (
                            <div 
                                key={edu.id || index} 
                                className="p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 md:mb-0">
                                        {edu.degree}
                                    </h3>
                                    <span className="inline-block px-4 py-2 text-sm font-semibold text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-300 rounded-full">
                                        {edu.duration}
                                    </span>
                                </div>
                                
                                <h4 className="text-xl font-semibold text-slate-700 dark:text-slate-300 mb-6">
                                    <a 
                                        href={edu.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200 flex items-center"
                                    >
                                        {edu.institution}
                                        <RiExternalLinkLine className="ml-2 w-4 h-4" />
                                    </a>
                                </h4>
                                
                                <p className="text-slate-600 dark:text-slate-400 mb-8">
                                    {edu.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-3">
                                    <span className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/50 rounded-full">
                                        Computer Science
                                    </span>
                                    <span className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/50 rounded-full">
                                        Software Engineering
                                    </span>
                                    <span className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/50 rounded-full">
                                        AI Technologies
                                    </span>
                                </div>
                            </div>
                        ))}
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

export default Education