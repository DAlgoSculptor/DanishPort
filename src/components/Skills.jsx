import { useEffect, useRef } from "react"
import { SKILLS } from "../constants"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"


gsap.registerPlugin(ScrollTrigger)

const Skills = () => {
    const skillsRef=useRef(null)

    useEffect (() => {
        const ctx =gsap.context(() => {
            gsap.from(".skill-item" ,{
                opacity:0,
                y:50,
                duration:1,
                ease:"power3.out",
                stagger: 0.2,
                scrollTrigger:{
                    trigger: skillsRef.current,
                    start:"top 80%",
                    toggleActions:"play none none none",
                }

            })
        }, skillsRef)
        return () => ctx.revert()
    }, [])
  return (
    <section className="py-16" id="skills" ref={skillsRef}>
        <div className="px-4">
            <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl">Skills</h2>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">{SKILLS.map((skill , index) => (
                    <div key={index} className="skill-item flex flex-col items-center text-center">
                        <div className="mb-4">
                            {skill.icon}
                        </div>
                        <h3 className="mb-2 text-lg font-medium lg:text-xl">{skill.name}</h3>
                    </div>
                ))}
                
            </div>
        </div>
    </section>
  )
}

export default Skills
