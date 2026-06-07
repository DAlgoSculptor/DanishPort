import { RiGithubLine, RiLinkedinLine, RiTwitterXLine, RiMailLine } from "@remixicon/react";
import animatedPerson from "../assets/Animated person.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative mt-auto pt-12 pb-8 bg-gradient-to-t from-slate-100 to-white dark:from-slate-900 dark:to-slate-800 border-t border-white/30 dark:border-slate-700/50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Top border decoration */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
        
        <div className="flex flex-col items-center gap-6">
          {/* Animated Person Image in center */}
          <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
            <img 
              src={animatedPerson} 
              alt="Animated Person" 
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Logo/Name */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600">
              Danish Nawaz
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
              Full-Stack Developer
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4">
            <a 
              href="https://github.com/DAlgoSculptor" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-xl border border-white/30 dark:border-slate-700/50 shadow-neumorphism-card hover:shadow-neumorphism-card-hover transition-all duration-300 text-slate-700 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transform hover:-translate-y-1"
              aria-label="GitHub Profile"
            >
              <RiGithubLine className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/danish-techy/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-xl border border-white/30 dark:border-slate-700/50 shadow-neumorphism-card hover:shadow-neumorphism-card-hover transition-all duration-300 text-slate-700 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transform hover:-translate-y-1"
              aria-label="LinkedIn Profile"
            >
              <RiLinkedinLine className="w-5 h-5" />
            </a>
            <a 
              href="https://twitter.com/DanishNawaz0009" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-xl border border-white/30 dark:border-slate-700/50 shadow-neumorphism-card hover:shadow-neumorphism-card-hover transition-all duration-300 text-slate-700 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transform hover:-translate-y-1"
              aria-label="Twitter Profile"
            >
              <RiTwitterXLine className="w-5 h-5" />
            </a>
            <a 
              href="mailto:danish0edu@gmail.com" 
              className="p-3 bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-xl border border-white/30 dark:border-slate-700/50 shadow-neumorphism-card hover:shadow-neumorphism-card-hover transition-all duration-300 text-slate-700 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transform hover:-translate-y-1"
              aria-label="Email"
            >
              <RiMailLine className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent"></div>
        
        {/* Copyright and Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            © {currentYear} Danish Nawaz. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a 
              href="/privacy-policy" 
              className="text-slate-600 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 text-sm transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a 
              href="/terms-of-service" 
              className="text-slate-600 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 text-sm transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
      
      {/* Neumorphism styles */}
      <style>{`
        .shadow-neumorphism-card {
          box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.1), 
                      -6px -6px 12px rgba(255, 255, 255, 0.7);
        }
        
        .dark .shadow-neumorphism-card {
          box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.3), 
                      -6px -6px 12px rgba(255, 255, 255, 0.05);
        }
        
        .shadow-neumorphism-card-hover {
          box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1), 
                      -4px -4px 8px rgba(255, 255, 255, 0.7);
        }
        
        .dark .shadow-neumorphism-card-hover {
          box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3), 
                      -4px -4px 8px rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </footer>
  );
};

export default Footer;