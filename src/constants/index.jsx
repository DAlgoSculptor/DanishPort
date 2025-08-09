import project1 from "../assets/project1.webp";
import NotesApp from "../assets/NotesApp.webp";
import project3 from "../assets/project3.webp";
import Meme from "../assets/Meme.webp";
import project0 from '../assets/project0.webp';
import project5 from "../assets/project5.webp";
// import bg2 from "../assets/bg2.webp";
import Chatty from "../assets/Chatty.webp";
import project6 from "../assets/project6.webp";
import personImage from "../assets/testimonial.webp";
import { SiFlutter, SiDart } from "react-icons/si";


import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNodeTree,
  RiServerLine,

} from "@remixicon/react";
import {
  RiDatabaseLine,
  RiCodeSSlashLine,
  RiGitBranchLine,
  
} from "@remixicon/react";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Danish Nawaz",
  role: "Flutter Developer",
  subheading:
    "With 1 years of full-stack development experience, I build efficient, scalable web applications. Not on the job hunt, but always curious about interesting projects.",
};

export const PROJECTS = [


   {
  id: 5,
  title: "NutriScan",
  description:
    "NutriScan is an AI-powered food analysis tool that allows users to scan packaged food items and instantly detect harmful ingredients. It features real-time image processing, user authentication, and a clean, responsive interface for a seamless experience. Built using Angular, Firebase, and Material UI.",
  techStack: ["Angular", "Firebase", "Material UI"],
  imgSrc:project0 ,
  link: "https://nutri-scan-ai-phi.vercel.app/",
  },

  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects and skills. Fully responsive and optimized for performance.",
    techStack: ["React.js", "Tailwind CSS","Gsap"],
    imgSrc: project3,
    link: "https://danish-port.vercel.app/",
  },

  
  {
    id: 1,
    title: "Chatty – Real-Time Chat Application",
    description:
      "Chatty is a feature-rich and secure chat application built for seamless real-time communication. With an intuitive interface and powerful backend, it enables users to connect instantly, whether for personal or professional conversations",
    techStack: ["React", "Node.js", "Express", "MongoDB" , "Daisy Ui" ,"TailwindCSS" , "Shadcn"],
    imgSrc: Chatty,
    link: "https://chatty-kappa-ten.vercel.app/login",
  },

  {
  id: 2,
  title: "NotesApp – Smart Note-Taking Application",
  description:
    "NotesApp is a sleek and intuitive note-taking application designed for quick writing, organizing, and managing tasks or ideas. Featuring real-time updates, customizable note colors, and a modern UI, it provides users with a clutter-free and efficient way to stay productive.",
  techStack: ["Flutter", "Dart", "Firebase"],
  imgSrc: NotesApp,
  link: "https://github.com/DAlgoSculptor/NotesApp", // Replace with your actual link
},
{
  id: 4,
  title: "Meme Generator App",
  description:
    "A fun Flutter-based meme app that fetches trending memes from APIs, displays them with a smooth UI, and allows users to share their favorites. Built with performance and responsiveness in mind.",
  techStack: ["Flutter", "Dart", "REST API"],
  imgSrc: Meme,
  link: "https://github.com/DAlgoSculptor/MemeApp",
},


  
  
  
];

export const SKILLS = [
  {
    name: "HTML5",
    icon: <RiHtml5Line className="text-orange-600" />,
  },
  {
    name: "CSS3",
    icon: <RiCss3Line className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-yellow-500" />,

  },
  { name: "Python", icon: <RiCodeSSlashLine className="text-blue-500 dark:text-yellow-400" /> },
  { name: "Django", icon: <RiServerLine className="text-green-700" /> },

  {
    name: "React",
    icon: <RiReactjsLine className="text-blue-400" />,
  },
  {
    name: "Node.js",
    icon: <RiNodeTree className="text-green-500" />,
  },
  {
    name: "MongoDB",
    icon: <RiDatabaseLine className="text-green-600" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="text-teal-400" />,
  },
  {
    name: "GraphQL",
    icon: <RiGitBranchLine className="text-pink-400" />,
  },
  {
    name: "Flutter",
    icon: <SiFlutter className="text-sky-500" />,
  },
  {
    name: "Dart",
    icon: <SiDart className="text-cyan-600" />,
  },
  
  {
    name:"Git",
    icon:<RiGitBranchLine className="text-orange-400" />
  },
  { name: "Bootstrap", icon: <RiCodeSSlashLine className="text-purple-600" /> 

  },




];

export const EXPERIENCES = [
  
  {
    yearRange: "2023 - 2024",
    role: "Junior Software Developer",
    company: "CodSoft",
    description:
      "Worked on developing small-scale web applications and internal tools. Assisted in debugging and optimizing front-end performance. Gained hands-on experience with JavaScript, React, and MySQL databases.",
    techStack: ["JavaScript", "React", "Bootstrap", "MySQL"],
  },
];

export const EDUCATION = [
  {
      id: 1,
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "MM(DU), Mullana, Ambala, Haryana",
      link: "https://www.mmumullana.org/",
      duration: "2022 - Present",
      description:
        "Pursuing a B.Tech in Computer Science and Engineering with a focus on system design, AI technologies, and software development. Working on projects related to data recovery, real-time collaborative visualization, and chatbot development.",
    }
      
];

export const TESTIMONIAL = {
  name: "Hania Qureshi",
  title: "CEO, TechCorp",
  quote:
    "Working with Danish was a game-changer. His expertise in full-stack development helped us scale our product with ease. His attention to detail and passion for quality are unmatched.",
  image: personImage,
};
