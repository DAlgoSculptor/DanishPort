import { RiMenu3Line, RiCloseLine, RiSunLine, RiMoonLine, RiMailLine, RiPhoneLine } from "@remixicon/react";
import { useState, useCallback } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { Link, useLocation } from "react-router-dom";
import { PROJECTS, SKILLS, EXPERIENCES } from "../constants";

const NAVIGATION_LINKS = [
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Experience", href: "/experience" },
  { label: "Education", href: "/education" },
  { label: "Contact", href: "/contact" },
];

// Preview components for each page
const ProjectsPreview = () => (
  <div className="p-4">
    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Featured Projects</h3>
    <div className="space-y-3">
      {PROJECTS.slice(0, 3).map((project) => (
        <div key={project.id} className="flex items-center gap-3 p-2 rounded-lg bg-white/50 dark:bg-slate-800/50">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
            </svg>
          </div>
          <div>
            <h4 className="font-medium text-slate-900 dark:text-white text-sm">{project.title}</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-1">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-3 text-xs text-green-600 dark:text-green-400 font-medium">
      View all {PROJECTS.length} projects →
    </div>
  </div>
);

const SkillsPreview = () => (
  <div className="p-4">
    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Top Skills</h3>
    <div className="grid grid-cols-3 gap-2">
      {SKILLS.slice(0, 6).map((skill, index) => (
        <div key={index} className="flex flex-col items-center p-2 rounded-lg bg-white/50 dark:bg-slate-800/50">
          <div className="text-xl mb-1">{skill.icon}</div>
          <span className="text-xs text-slate-700 dark:text-slate-300 text-center">{skill.name}</span>
        </div>
      ))}
    </div>
    <div className="mt-3 text-xs text-green-600 dark:text-green-400 font-medium">
      View all {SKILLS.length} skills →
    </div>
  </div>
);

const ExperiencePreview = () => (
  <div className="p-4">
    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Work Experience</h3>
    <div className="space-y-3">
      {EXPERIENCES.slice(0, 2).map((exp, index) => (
        <div key={index} className="p-3 rounded-lg bg-white/50 dark:bg-slate-800/50">
          <div className="flex justify-between items-start">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm">{exp.role}</h4>
            <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full">
              {exp.yearRange}
            </span>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">{exp.company}</p>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-2">{exp.description}</p>
        </div>
      ))}
    </div>
    <div className="mt-3 text-xs text-green-600 dark:text-green-400 font-medium">
      View full experience →
    </div>
  </div>
);

const EducationPreview = () => (
  <div className="p-4">
    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Education</h3>
    <div className="p-3 rounded-lg bg-white/50 dark:bg-slate-800/50">
      <h4 className="font-bold text-slate-900 dark:text-white text-sm">Bachelor of Technology</h4>
      <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">Computer Science and Engineering</p>
      <p className="text-sm text-slate-600 dark:text-slate-400">MM(DU), Mullana</p>
      <div className="mt-2 flex flex-wrap gap-1">
        <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 rounded-full">
          AI Technologies
        </span>
        <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 rounded-full">
          Software Engineering
        </span>
      </div>
    </div>
    <div className="mt-3 text-xs text-green-600 dark:text-green-400 font-medium">
      View educational background →
    </div>
  </div>
);

const ContactPreview = () => (
  <div className="p-4">
    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Get In Touch</h3>
    <div className="space-y-3">
      <div className="flex items-center gap-3 p-2 rounded-lg bg-white/50 dark:bg-slate-800/50">
        <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
          <RiMailLine className="w-4 h-4 text-green-600 dark:text-green-400" />
        </div>
        <div>
          <p className="text-sm text-slate-700 dark:text-slate-300">helpbynutriscanai@gmail.com</p>
        </div>
      </div>
      <div className="flex items-center gap-3 p-2 rounded-lg bg-white/50 dark:bg-slate-800/50">
        <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
          <RiPhoneLine className="w-4 h-4 text-green-600 dark:text-green-400" />
        </div>
        <div>
          <p className="text-sm text-slate-700 dark:text-slate-300">+91 98765 43210</p>
        </div>
      </div>
    </div>
    <div className="mt-3 text-xs text-green-600 dark:text-green-400 font-medium">
      Send a message →
    </div>
  </div>
);

const PREVIEW_COMPONENTS = {
  "/projects": <ProjectsPreview />,
  "/skills": <SkillsPreview />,
  "/experience": <ExperiencePreview />,
  "/education": <EducationPreview />,
  "/contact": <ContactPreview />,
};

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed left-0 right-0 z-50 lg:top-4">
      {/* Desktop Menu */}
      <div className="mx-auto hidden max-w-4xl w-full items-center justify-between rounded-2xl border border-white/30 py-3 px-8 backdrop-blur-lg lg:flex bg-white/80 dark:bg-slate-900/90 shadow-lg">
        <Link
          to="/"
          className="uppercase text-lg font-bold text-slate-900 dark:text-white whitespace-nowrap mr-6 tracking-wider"
        >
          Danish Nawaz
        </Link>
        <ul className="flex items-center lg:gap-8">
          {NAVIGATION_LINKS.map(({ label, href }, index) => (
            <li key={index} className="whitespace-nowrap relative">
              <Link
                className={`text-sm transition-all duration-300 font-medium px-3 py-2 rounded-xl ${
                  isActive(href)
                    ? "text-green-600 dark:text-green-400 bg-white/50 dark:bg-slate-800/50"
                    : "text-slate-700 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-white/30 dark:hover:bg-slate-800/30"
                }`}
                to={href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </Link>
              {isActive(href) && (
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full"></span>
              )}
            </li>
          ))}
        </ul>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-white/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 hover:bg-white/70 dark:hover:bg-slate-700/50 transition-all duration-300 ml-4 shadow-neumorphism"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <RiSunLine className="w-5 h-5" />
          ) : (
            <RiMoonLine className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="py-3 px-6 backdrop-blur-md lg:hidden bg-white/90 dark:bg-slate-900/90 shadow-md">
        <div className="flex items-center justify-between w-full">
          <Link
            to="/"
            className="pl-2 uppercase text-lg font-bold text-slate-900 dark:text-white whitespace-nowrap tracking-wider"
            onClick={() => setMobileMenuOpen(false)}
          >
            Danish Nawaz
          </Link>
          <div className="flex items-center gap-2">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 hover:bg-white/70 dark:hover:bg-slate-700/50 transition-all duration-300 shadow-neumorphism transform hover:scale-110"
              aria-label="Toggle theme"
            >
              <div className="relative w-5 h-5">
                <RiSunLine className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${theme === 'dark' ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`} />
                <RiMoonLine className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`} />
              </div>
            </button>

            <button
              className="focus:outline-none lg:hidden ml-auto"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMobileMenuOpen ? (
                <RiCloseLine className="m-2 h-7 w-7 text-slate-900 dark:text-white" />
              ) : (
                <RiMenu3Line className="m-2 h-7 w-7 text-slate-900 dark:text-white" />
              )}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <ul className="my-4 flex flex-col gap-6 pl-2">
            {NAVIGATION_LINKS.map(({ label, href }, index) => (
              <li key={index} className="whitespace-nowrap">
                <Link
                  className={`text-base py-3 transition-all duration-300 rounded-xl px-4 block ${
                    isActive(href)
                      ? "text-green-600 dark:text-green-400 font-semibold bg-white/50 dark:bg-slate-800/50"
                      : "text-slate-700 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-white/30 dark:hover:bg-slate-800/30"
                  }`}
                  to={href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      
      {/* Neumorphism styles */}
      <style>{`
        .shadow-neumorphism {
          box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1), 
                      -5px -5px 10px rgba(255, 255, 255, 0.9);
        }
        
        .dark .shadow-neumorphism {
          box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3), 
                      -5px -5px 10px rgba(255, 255, 255, 0.05);
        }
        
        .animate-fade-in {
          animation: fadeIn 0.2s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
        
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;