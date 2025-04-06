import { useEffect, useRef } from "react"
import { PROJECTS } from "../constants"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
    const projectsRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".project-card", {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power3.out",
                stagger: 0.3,
                scrollTrigger: {
                    trigger: projectsRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                }
            })
        }, projectsRef)
        return () => ctx.revert()
    }, [])

    return (
        <section className="pt-16" id="projects" ref={projectsRef}>
            <div className="px-4">
                <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl">
                    Projects
                </h2>
                <div className="flex flex-wrap justify-center">
                    {PROJECTS.map((project) => (
                        <div key={project.id} className="project-card flex w-full flex-col p-4 md:w-1/2 lg:w-1/3">
                            <div className="project-hover flex-grow overflow-hidden rounded-lg border border-green-400/20 transition-all duration-300">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <img
                                        src={project.imgSrc}
                                        alt={project.title}
                                        className="h-60 w-full object-cover"
                                    />
                                </a>
                                <div className="p-6">
                                    <h3 className="project-title mb-2 text-lg font-medium lg:text-2xl">
                                        {project.title}
                                    </h3>
                                    <p className="project-desc mb-4">
                                        {project.description}
                                    </p>
                                    <div className="mb-4">
                                        <strong className="project-stack">Tech Stack:</strong>
                                        <ul>
                                            {project.techStack.map((tech, index) => (
                                                <li
                                                    key={index}
                                                    className="project-tech mb-1 mr-2 inline-block rounded-full border-2 border-pink-500/30 px-3 py-1 text-sm font-semibold"
                                                >
                                                    {tech}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 👇 Custom hover styles */}
            <style>{`
                .project-hover {
                    transition: transform 0.4s ease, box-shadow 0.4s ease, color 0.4s ease;
                }

                .project-hover:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 0 12px 3px rgba(34, 197, 94, 0.5); /* green glow */
                    border-color: rgba(34, 197, 94, 0.8);
                }

                .project-hover:hover .project-title {
                    color: #22c55e; /* green-500 */
                }

                .project-hover:hover .project-desc,
                .project-hover:hover .project-stack,
                .project-hover:hover .project-tech {
                    color:rgb(179, 222, 8); /* green-400 */
                }
            `}</style>
        </section>
    )
}

export default Projects
