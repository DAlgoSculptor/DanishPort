import { PROJECTS } from "../constants"
import { Link } from "react-router-dom"
import { RiExternalLinkLine } from "@remixicon/react"
import Tilt from 'react-parallax-tilt';

const Projects = () => {
    return (
        <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-green-50 to-emerald-100 dark:from-slate-900 dark:via-slate-800 dark:to-emerald-950 min-h-screen">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 animate-fade-in">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                        My Projects
                    </h1>
                    <p className="text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
                        Here are some of my recent projects. Each one represents a unique challenge and solution.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {PROJECTS.map((project, index) => (
                        <Tilt
                            key={project.id}
                            tiltMaxAngleX={5}
                            tiltMaxAngleY={5}
                            perspective={1000}
                            scale={1.02}
                            transitionSpeed={1000}
                            gyroscope={true}
                            className="flex flex-col animate-fade-in"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="project-card flex-grow overflow-hidden rounded-2xl border border-green-400/20 transition-all duration-500 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg hover:shadow-2xl group relative transform">
                                {/* Gradient overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 rounded-2xl"></div>
                                
                                <div className="relative overflow-hidden z-20">
                                    <img
                                        src={project.imgSrc}
                                        alt={project.title}
                                        className="h-40 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                                        <a 
                                            href={project.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg text-sm font-medium hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                                        >
                                            View Project
                                            <RiExternalLinkLine className="ml-1 w-3 h-3" />
                                        </a>
                                    </div>
                                </div>
                                
                                {/* Floating tag for featured projects */}
                                {index < 2 && (
                                    <div className="absolute top-3 right-3 z-20">
                                        <span className="px-2 py-1 text-xs font-bold text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-full shadow-lg">
                                            FEATURED
                                        </span>
                                    </div>
                                )}
                                
                                <div className="p-4 relative z-20">
                                    <h3 className="project-title mb-1.5 text-lg font-bold text-slate-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="project-desc mb-3 text-slate-700 dark:text-slate-300 text-sm line-clamp-3">
                                        {project.description}
                                    </p>
                                    <div className="mb-3">
                                        <strong className="project-stack text-slate-800 dark:text-slate-200 block mb-1.5 text-sm">Tech Stack:</strong>
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.techStack.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="project-tech inline-block rounded-full border border-green-500/30 px-2 py-0.5 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white/50 dark:bg-slate-700/50 hover:bg-gradient-to-r hover:from-green-100 hover:to-emerald-100 dark:hover:from-green-900/30 dark:hover:to-emerald-900/30 transition-all duration-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tilt>
                    ))}
                </div>
                
                <div className="mt-12 text-center animate-fade-in animation-delay-500">
                    <Link 
                        to="/" 
                        className="inline-block px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg transform hover:-translate-y-1"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </div>

            {/* Custom styles */}
            <style>{`
                .project-card {
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
                }

                .project-card:hover {
                    transform: translateY(-10px) scale(1.02);
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
                }

                .project-card:hover .project-title {
                    color: #10b981; /* green-500 */
                }

                .project-card:hover .project-desc,
                .project-card:hover .project-stack,
                .project-card:hover .project-tech {
                    color: #34d399; /* green-400 */
                }
                
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
                
                @keyframes float {
                    0% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                    100% {
                        transform: translateY(0px);
                    }
                }
                
                .floating-card {
                    animation: float 3s ease-in-out infinite;
                }
                
                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                
                /* Enhanced gradient borders */
                .project-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: -1;
                    border-radius: 16px;
                    padding: 1px;
                    background: linear-gradient(135deg, #10b981, #06b6d4, #8b5cf6);
                    -webkit-mask: 
                        linear-gradient(#fff 0 0) content-box, 
                        linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                
                .project-card:hover::before {
                    opacity: 1;
                }
            `}</style>
        </section>
    )
}

export default Projects