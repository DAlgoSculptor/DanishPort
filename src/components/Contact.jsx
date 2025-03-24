import { RiGithubFill, RiLinkedinBoxFill, RiTwitterFill } from "@remixicon/react"
import { useRef , useEffect} from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)
const Contact = () => {
    const contactRef=useRef(null)
    useEffect(() =>{
        const ctx=gsap.context(() => {
           gsap.from(".contact-text" ,{
            opacity:0,
            y:30,
            duration:1,
            ease:"power3.out",
            scrollTrigger:{
                trigger:contactRef.current,
                start:"top 80%",
                toggleActions:"play none none none",

            }
           }) 

           gsap.from(".contact-icon", {
            opacity:0,
            y:20,
            duration:1,
            ease:"power3.out",
            stagger:0.4,
            scrollTrigger:{
                trigger:contactRef.current,
                start:"top 80%",
                toggleActions:"play none none none",
            }
           })
        }, contactRef)
        return () => ctx.revert();
    }, [])
  return (
   <section className="py-16" id="contact" ref={contactRef}>
        <div className="px-4 text-center">
            <h2 className="contact-text mb-8 text-3xl font-medium lg:text-4xl">Contact</h2>
            <p className="contact-text mb-4 text-lg lg:text-xl">
                Feel free to reach out to me via email:{" "}
                <a href="mailto:danish@gmail.com" className="border-b">
                    danish@gmail.com
                </a>
            </p>
            <div className="mt-8 flex justify-center space-x-6">
                <a href="https://github.com/DAlgoSculptor" target="_blank" rel="noopener noreferrer" className="contact-icon" aria-label="Visit my GitHub profile">
                 <RiGithubFill className="text-3xl" />
                </a>

                <a href="https://www.linkedin.com/in/danish-nawaz-86154028a/" target="_blank" rel="noopener noreferrer" className="contact-icon" aria-label="Visit my LinkedIn profile">
                 <RiLinkedinBoxFill className="text-3xl" />
                </a>
                <a href="https://x.com/DNawaz65591" target="_blank" rel="noopener noreferrer" className="contact-icon" aria-label="Visit my X profile">
                 <RiTwitterFill className="text-3xl" />
                </a>
                
            </div>
        </div>
   </section>
  )
}

export default Contact
