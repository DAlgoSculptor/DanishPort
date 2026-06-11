import { RiGithubLine, RiLinkedinLine, RiTwitterXLine, RiMailLine } from "@remixicon/react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative mt-auto py-8 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Brand Info */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="font-mono text-sm tracking-wider font-semibold text-zinc-900 dark:text-zinc-50">
              danish_nawaz
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-mono">
              Full-Stack System Engineer
            </p>
          </div>
          
          {/* Plain Social Links */}
          <div className="flex gap-4 text-zinc-500 dark:text-zinc-400">
            <a 
              href="https://github.com/DAlgoSculptor" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-150"
              aria-label="GitHub"
            >
              <RiGithubLine className="w-4 h-4" />
            </a>
            <a 
              href="https://www.linkedin.com/in/danish-techy/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-150"
              aria-label="LinkedIn"
            >
              <RiLinkedinLine className="w-4 h-4" />
            </a>
            <a 
              href="https://twitter.com/DanishNawaz0009" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-150"
              aria-label="Twitter"
            >
              <RiTwitterXLine className="w-4 h-4" />
            </a>
            <a 
              href="mailto:danish0edu@gmail.com" 
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-150"
              aria-label="Email"
            >
              <RiMailLine className="w-4 h-4" />
            </a>
          </div>
        </div>
        
        {/* Divider line */}
        <div className="my-6 h-px bg-zinc-200 dark:bg-zinc-900"></div>
        
        {/* Legal links */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left text-xs font-mono text-zinc-500">
          <p>
            © {currentYear} Danish Nawaz. Compiled successfully.
          </p>
          
          <div className="flex gap-4">
            <Link 
              to="/privacy-policy" 
              className="hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
            >
              privacy_policy
            </Link>
            <span className="text-zinc-300 dark:text-zinc-800">/</span>
            <Link 
              to="/terms-of-service" 
              className="hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
            >
              terms_of_service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;