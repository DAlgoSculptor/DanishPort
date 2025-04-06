import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";
import personImage from "../assets/testimonial.webp";

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
  role: "Full Stack Developer",
  subheading:
    "With 1 years of full-stack development experience, I build efficient, scalable web applications. Not on the job hunt, but always curious about interesting projects.",
};

export const PROJECTS = [
  {
    id: 1,
    title: "Chatty – Real-Time Chat Application",
    description:
      "Chatty is a feature-rich and secure chat application built for seamless real-time communication. With an intuitive interface and powerful backend, it enables users to connect instantly, whether for personal or professional conversations",
    techStack: ["React", "Node.js", "Express", "MongoDB" , "Daisy Ui" ,"TailwindCSS" , "Shadcn"],
    imgSrc: project1,
    link: "https://chatty-kappa-ten.vercel.app/login",
  },
  {
    id: 2,
    title: "Social Media App",
    description:
      "A real-time social media app with chat, notifications, and a customizable profile page. Built with React, Firebase, and Redux for state management.",
    techStack: ["React", "Firebase", "Redux"],
    imgSrc: project2,
    link: "https://example-socialapp.com",
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
    id: 4,
    title: "Blog Platform",
    description:
      "A blogging platform with a content management system, user authentication, and an intuitive editor.",
    techStack: ["Ruby on Rails", "PostgreSQL", "Tailwind CSS"],
    imgSrc: project4,
    link: "https://example-blogplatform.com",
  },
  {
    id: 5,
    title: "Task Management App",
    description:
      "A task management tool with user authentication, reminders, and collaboration features.",
    techStack: ["Angular", "Firebase", "Material UI"],
    imgSrc: project5,
    link: "https://example-taskapp.com",
  },
  {
    id: 6,
    title: "Online Learning Platform",
    description:
      "An e-learning platform offering video courses, quizzes, and progress tracking for students.",
    techStack: ["Vue.js", "Node.js", "MongoDB", "Express"],
    imgSrc: project6,
    link: "https://example-learningplatform.com",
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
    name:"Git",
    icon:<RiGitBranchLine className="text-orange-400" />
  },
  { name: "Bootstrap", icon: <RiCodeSSlashLine className="text-purple-600" /> 

  },




];

export const EXPERIENCES = [
  {
    yearRange: "2023 - Present",
    role: "Full Stack Developer",
    company: "Infotech Solutions",
    description:
      "Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.",
    techStack: ["Javascript", "React.js", "Next.js", "MongoDB"],
  },
  {
    yearRange: "2022 - 2023",
    role: "Frontend Developer",
    company: "TechNova Solutions",
    description:
      "Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.",
    techStack: ["HTML", "CSS", "Vue.js", "MySQL"],
  },
  {
    yearRange: "2021 - 2022",
    role: "Full Stack Developer",
    company: "SkyTech Solutions",
    description:
      "Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.",
    techStack: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    yearRange: "2020 - 2021",
    role: "Software Engineer",
    company: "NeoSoft Technologies",
    description:
      "Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.",
    techStack: ["Ruby", "Rails", "PHP", "SQLite"],
  },
  {
    yearRange: "2019 - 2020",
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
    },
    
  
 
  {
    id: 2,
    degree: "Certified React Developer",
    institution: "Udacity Nanodegree",
    duration: "2024",
    description:
      "Earned a certification in advanced React.js development, including hooks, context API, and performance optimization.",
  },

  {
    id: 3,
    degree: "Certified Machine Learning Engineer",
    institution: "Google AI",
    duration: "2023",
    description:
      "Completed a rigorous program on machine learning concepts, deep learning, and model deployment using TensorFlow.",
  },
  {
    id: 4,
    degree: "Certified Full-Stack Developer",
    institution: "Coursera (Meta)",
    duration: "2023",
    description:
      "Gained expertise in MERN stack development, RESTful APIs, and best practices for scalable web applications.",
  },
];

export const TESTIMONIAL = {
  name: "Hania Qureshi",
  title: "CEO, TechCorp",
  quote:
    "Working with Danish was a game-changer. His expertise in full-stack development helped us scale our product with ease. His attention to detail and passion for quality are unmatched.",
  image: personImage,
};
