import { SKILLS } from "../constants"
import { Link } from "react-router-dom"
import AnimatedPerson from "../assets/Animated person.png"

const Skills = () => {
    return (
        <section className="pt-24 pb-16 bg-gradient-to-br from-gray-950 via-slate-900 to-black min-h-screen">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 animate-fade-in">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-100 via-slate-200 to-gray-300 bg-clip-text text-transparent">
                        My Skills
                    </h1>
                    <p className="text-xl text-gray-200 dark:text-slate-100 max-w-3xl mx-auto">
                        A comprehensive toolkit of full-stack development technologies and frameworks. Expertise across frontend, backend, databases, and modern development practices.
                    </p>
                </div>
                
                {/* Animated Person with Quote */}
                <div className="flex flex-col md:flex-row items-center justify-center mb-12 gap-8 animate-fade-in">
                    <div className="relative">
                        <div className="w-32 h-32 md:w-40 md:h-40">
                            <img 
                                src={AnimatedPerson} 
                                alt="Animated Person" 
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                    
                    <div className="relative max-w-md">
                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
                            <p className="text-lg text-gray-800 dark:text-slate-200 italic">
                                "Building scalable, maintainable applications across the entire stack - from responsive frontends to robust backend systems. Bridging the gap between user experience and technical excellence."
                            </p>
                        </div>
                        <div className="absolute -left-4 top-8 w-8 h-8 bg-white dark:bg-slate-800 border-t border-l border-slate-200 dark:border-slate-700 transform rotate-45"></div>
                    </div>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                    {SKILLS.map((skill, index) => (
                        <div 
                            key={index} 
                            className="flex flex-col items-center p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group animate-fade-in"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:text-green-500">
                                {skill.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white text-center group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                                {skill.name}
                            </h3>
                        </div>
                    ))}
                </div>
                
                <div className="mt-20 text-center animate-fade-in animation-delay-500">
                    <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-gray-100 to-slate-200 bg-clip-text text-transparent">
                        What I Offer
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="p-8 bg-gray-800/70 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-gray-700/50 dark:border-slate-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-16 h-16 bg-slate-700/50 dark:bg-slate-700/50 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-8 h-8 text-slate-300 dark:text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-100 dark:text-white">Frontend Development</h3>
                            <p className="text-gray-300 dark:text-slate-300">
                                Building responsive, interactive user interfaces with React, Next.js, and modern CSS frameworks. Expertise in performance optimization, accessibility, and user experience design.
                            </p>
                        </div>
                        <div className="p-8 bg-gray-800/70 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-gray-700/50 dark:border-slate-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-16 h-16 bg-slate-700/50 dark:bg-slate-700/50 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-8 h-8 text-slate-300 dark:text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-100 dark:text-white">Backend Development</h3>
                            <p className="text-gray-300 dark:text-slate-300">
                                Developing scalable backend systems with Node.js, Express, and databases like MongoDB and PostgreSQL. Implementing RESTful APIs, authentication, and real-time features with Socket.io.
                            </p>
                        </div>
                        <div className="p-8 bg-gray-800/70 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-gray-700/50 dark:border-slate-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-16 h-16 bg-slate-700/50 dark:bg-slate-700/50 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-8 h-8 text-slate-300 dark:text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-100 dark:text-white">Full-Stack Solutions</h3>
                            <p className="text-gray-300 dark:text-slate-300">
                                Building complete web applications from database design to user interface. End-to-end development with deployment, monitoring, and continuous improvement practices.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="mt-16 text-center animate-fade-in animation-delay-700">
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
                
                .animation-delay-700 {
                    animation-delay: 0.7s;
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

export default Skills