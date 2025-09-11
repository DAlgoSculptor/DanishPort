import { RiMenu3Line, RiCloseLine, RiSunLine, RiMoonLine } from "@remixicon/react";
import { useState, useCallback } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { Link, useLocation } from "react-router-dom";

const NAVIGATION_LINKS = [
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Experience", href: "/experience" },
  { label: "Education", href: "/education" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      <div className="mx-auto hidden max-w-4xl items-center justify-between rounded-2xl border border-white/30 py-3 px-8 backdrop-blur-lg lg:flex bg-white/80 dark:bg-slate-900/90 shadow-lg">
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
              className="p-2 rounded-full bg-white/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 hover:bg-white/70 dark:hover:bg-slate-700/50 transition-all duration-300 shadow-neumorphism"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <RiSunLine className="w-5 h-5" />
              ) : (
                <RiMoonLine className="w-5 h-5" />
              )}
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
      `}</style>
    </nav>
  );
};

export default Navbar;