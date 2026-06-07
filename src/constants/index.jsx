import NotesApp from "../assets/NotesApp.webp";
import project3 from "../assets/project3.webp";
import Meme from "../assets/Meme.webp";
import project0 from '../assets/project0.webp';
// import bg2 from "../assets/bg2.webp";
import Chatty from "../assets/Chatty.webp";
import project6 from "../assets/project6.webp";
import project7 from "../assets/project7.webp";
import GoatNotes from "../assets/Goat-Notes.png"; // Added for Goat Notes project
import CareerHub from "../assets/CareerHub.png"
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
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Experience", href: "/experience" },
  { label: "Education", href: "/education" },
  { label: "Contact", href: "/contact" },
];

export const PROFILE = {
  name: "Danish Nawaz",
  role: "Full-Stack Developer",
  subheading:
    "Experienced Full-Stack Developer with expertise in building scalable web and mobile applications. Proficient in React, Node.js, and modern development practices. Passionate about creating intuitive user experiences and robust backend systems.",
};

export const PROJECTS = [

   {
  id: 1,
  title: "CareerHub - Career Management & Job Portal Platform",
  description:
    "CareerHub is a full-stack career management platform designed to help users explore opportunities, manage professional profiles, and streamline job-related activities. Built with React.js, TypeScript, PostgreSQL, and AWS, it features responsive UI, REST API integration, cross-browser compatibility, and scalable cloud deployment. The platform emphasizes performance, accessibility, and seamless user experience across devices.",
  techStack: [
    "React.js",
    "TypeScript",
    "JavaScript",
    "TailwindCSS",
    "PostgreSQL",
    "REST APIs",
    "AWS",
    "HTML5",
    "CSS3"
  ],
  imgSrc: CareerHub,
  link: "https://www.careerhubs.info/",
},
  
  {
    id: 2,
    title: "NutriScan",
    description:
      "NutriScan is an AI-powered food analysis Android application that allows users to scan packaged food items and instantly detect harmful ingredients. It features real-time image processing, user authentication, and a clean, responsive interface for a seamless experience. Built using Kotlin, Firebase, and Material Design.",
    techStack: ["Kotlin", "Firebase", "Material Design", "Android"],
    imgSrc: project0,
    link: "https://nutri-scan-ai-phi.vercel.app/",
  },
  {
    id: 3,
    title: "Goat Notes - AI-Powered Note Taking Platform",
    description:
      "Goat Notes is an intelligent note-taking platform that leverages AI to enhance productivity and organization. With features like smart categorization, automatic summarization, and contextual suggestions, it transforms how users capture and manage information. Built with Next.js, Supabase, and integrated with AI APIs for an intelligent user experience.",
    techStack: ["Next.js", "Supabase", "AI APIs", "TailwindCSS", "JavaScript"],
    imgSrc: GoatNotes,
    link: "https://goat-notes-sepia.vercel.app/",
  },
  // {
  //   id: 2,
  //   title: "NotesApp – Smart Note-Taking Application",
  //   description:
  //     "NotesApp is a sleek and intuitive note-taking Android application designed for quick writing, organizing, and managing tasks or ideas. Featuring real-time updates, customizable note colors, and a modern UI, it provides users with a clutter-free and efficient way to stay productive.",
  //   techStack: ["Kotlin", "Android", "Room Database", "Material Design"],
  //   imgSrc: NotesApp,
  //   link: "https://github.com/DAlgoSculptor/NotesApp",
  // },
  // {
  //   id: 3,
  //   title: "Meme Generator App",
  //   description:
  //     "A fun Flutter-based meme app that fetches trending memes from APIs, displays them with a smooth UI, and allows users to share their favorites. Built with performance and responsiveness in mind.",
  //   techStack: ["Flutter", "Dart", "REST API"],
  //   imgSrc: Meme,
  //   link: "https://github.com/DAlgoSculptor/MemeApp",
  // },
  // {
  //   id: 4,
  //   title: "CodeSwap",
  //   description:
  //     "CodeSwap is a collaborative platform for developers to share, discover, and discuss code snippets. Features syntax highlighting, real-time collaboration, search functionality, and user authentication. Built with a modern full-stack architecture using React for the frontend and Node.js with MongoDB for the backend, supporting WebSockets for real-time updates.",
  //   techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "TailwindCSS"],
  //   imgSrc: project3,
  //   link: "https://codeswap-example.com",
  // },
  // {
  //   id: 5,
  //   title: "Chatty – Real-Time Chat Application",
  //   description:
  //     "Chatty is a feature-rich and secure chat application built for seamless real-time communication. With an intuitive interface and powerful backend, it enables users to connect instantly, whether for personal or professional conversations",
  //   techStack: ["React", "Node.js", "Express", "MongoDB", "Daisy Ui", "TailwindCSS", "Shadcn"],
  //   imgSrc: Chatty,
  //   link: "https://chatty-kappa-ten.vercel.app/login",
  // },
  {
    id: 4,
    title: "Coding Tracker",
    description:
      "Coding Tracker is a personal portfolio tool that automatically syncs solved coding problems from platforms like LeetCode and Codeforces. It features real-time API integration, automated data synchronization, and a clean, searchable interface to browse problems, view solution code, and track progress seamlessly",
    techStack: ["React.js", "Node.js", "Typescript", "Supabase", "LeetCode GraphQL API", "Codeforces API"],
    imgSrc: project3,
    link: "https://code-tracker-rose.vercel.app/",
  },
  {
    id: 5,
    title: "CodeAnalyzer",
    description:
      "CodeAnalyzer is an AI-powered code analysis tool that helps developers detect bugs, measure code quality, and visualize complexity in real time. It features interactive dashboards, advanced code metrics, and a clean, responsive interface designed to improve developer productivity and software reliability. Built with a focus on efficiency, scalability, and seamless user experience",
    techStack: ["React", "Node.js", "Typescript", "Supabase"],
    imgSrc: project6,
    link: "https://code-analyzer-swart.vercel.app/",
  },
  // {
  //   id: 8,
  //   title: "LernoVate",
  //   description:
  //     "LERNOVATE is a modern, responsive learning platform landing page designed to showcase educational services in an engaging and professional manner. It features an elegant UI with smooth navigation, animated components, and a well-structured layout to highlight core offerings, testimonials, and key statistics. The platform emphasizes accessibility, performance optimization, and a mobile-friendly design to ensure a seamless user experience across all devices",
  //   techStack: ["Next.js", "React", "Typescript", "TailwindCSS", "Shadcn", "Framer Motion", "Supabase"],
  //   imgSrc: project7,
  //   link: "https://lernovate-nepal.vercel.app/",
  // },
 
  
];

export const SKILLS = [
  {
    name: "React",
    icon: <RiReactjsLine className="text-blue-400" />,
  },
  {
    name: "Node.js",
    icon: <RiNodeTree className="text-green-500" />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-yellow-500" />,
  },
  {
    name: "TypeScript",
    icon: <RiCodeSSlashLine className="text-blue-600" />,
  },
  {
    name: "HTML5",
    icon: <RiHtml5Line className="text-orange-600" />,
  },
  {
    name: "CSS3",
    icon: <RiCss3Line className="text-blue-500" />,
  },
  {
    name: "MongoDB",
    icon: <RiDatabaseLine className="text-green-600" />,
  },
  {
    name: "Express.js",
    icon: <RiServerLine className="text-gray-700" />,
  },
  {
    name: "Next.js",
    icon: <RiCodeSSlashLine className="text-black dark:text-white" />,
  },
  {
    name: "REST API",
    icon: <RiGitBranchLine className="text-blue-500" />,
  },
  {
    name: "GraphQL",
    icon: <RiGitBranchLine className="text-pink-400" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="text-teal-400" />,
  },
  {
    name: "PostgreSQL",
    icon: <RiDatabaseLine className="text-blue-700" />,
  },
  {
    name: "Supabase",
    icon: <RiDatabaseLine className="text-green-500" />,
  },
  {
    name: "Firebase",
    icon: <RiDatabaseLine className="text-orange-500" />,
  },
  {
    name: "Git",
    icon: <RiGitBranchLine className="text-orange-400" />,
  },
  {
    name: "Framer Motion",
    icon: <RiCodeSSlashLine className="text-purple-500" />,
  },
  {
    name: "Socket.io",
    icon: <RiServerLine className="text-blue-600" />,
  },
  {
    name: "Shadcn",
    icon: <RiCodeSSlashLine className="text-slate-600" />,
  },
  {
    name: "Daisy UI",
    icon: <RiCodeSSlashLine className="text-yellow-600" />,
  },
  { 
    name: "Python", 
    icon: <RiCodeSSlashLine className="text-blue-500 dark:text-yellow-400" /> 
  },
  { 
    name: "Django", 
    icon: <RiServerLine className="text-green-700" /> 
  },
];

export const EXPERIENCES = [
  {
    yearRange: "2023 - 2024",
    role: "Junior Full-Stack Developer",
    company: "CodSoft",
    description:
      "Developed and maintained full-stack applications using React, Node.js, and MongoDB. Implemented RESTful APIs, optimized database queries, and collaborated with cross-functional teams. Gained hands-on experience in frontend development, backend architecture, and API design. Worked on multiple projects including collaborative platforms and real-time applications.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "REST API", "Firebase"],
  },
  {
    yearRange: "2025 - Present",
    role: "Full-Stack Developer",
    company: "Petuk Ji Private Limited",
    description:
      "Developing full-stack applications with modern technologies including React, Next.js, and Node.js. Architecting scalable backend systems, implementing real-time features, and optimizing frontend performance. Integrated multiple APIs and databases, implementing authentication systems, and ensuring code quality through testing and deployment pipelines.",
    techStack: ["Next.js", "React", "Node.js", "TypeScript", "Supabase", "TailwindCSS"],
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