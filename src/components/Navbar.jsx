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
    <nav className="fixed left-0 right-0 z-50 top-0 lg:top-4 transition-all duration-300">
      {/* Desktop Menu - Minimalist Terminal / Dashboard Border */}
      <div className="mx-auto hidden max-w-4xl items-center justify-between rounded-xl border border-zinc-200 dark:border-zinc-850 py-2.5 px-6 backdrop-blur-md lg:flex bg-white/90 dark:bg-zinc-950/90 shadow-sm">
        <Link
          to="/"
          className="font-mono text-sm tracking-wider uppercase font-semibold text-zinc-900 dark:text-zinc-50 focus:outline-none"
          onClick={() => setMobileMenuOpen(false)}
        >
          danish_nawaz.sh
        </Link>
        
        <ul className="flex items-center gap-2">
          {NAVIGATION_LINKS.map(({ label, href }, index) => (
            <li key={index} className="whitespace-nowrap relative">
              <Link
                className={`text-xs font-mono px-3.5 py-1.5 rounded-lg border transition-all duration-150 ${
                  isActive(href)
                    ? "bg-zinc-100 border-zinc-300/60 dark:bg-zinc-900 dark:border-zinc-800 text-zinc-900 dark:text-zinc-50 font-medium"
                    : "bg-transparent border-transparent text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-900/40"
                }`}
                to={href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Theme Toggle - Sharp, Plain Border */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-900 border border-zinc-200 dark:border-zinc-850 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-all duration-150"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <RiSunLine className="w-3.5 h-3.5" />
          ) : (
            <RiMoonLine className="w-3.5 h-3.5" />
          )}
        </button>
      </div>

      {/* Mobile Menu - Flat Panel */}
      <div className="py-3.5 px-6 backdrop-blur-md lg:hidden bg-white/95 dark:bg-zinc-950/95 border-b border-zinc-200 dark:border-zinc-900 shadow-sm">
        <div className="flex items-center justify-between w-full">
          <Link
            to="/"
            className="font-mono text-sm tracking-wider uppercase font-semibold text-zinc-900 dark:text-zinc-50 focus:outline-none"
            onClick={() => setMobileMenuOpen(false)}
          >
            danish_nawaz.sh
          </Link>
          <div className="flex items-center gap-2">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-850 text-zinc-500 dark:text-zinc-400"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <RiSunLine className="w-3.5 h-3.5" />
              ) : (
                <RiMoonLine className="w-3.5 h-3.5" />
              )}
            </button>

            <button
              className="focus:outline-none lg:hidden ml-auto text-zinc-550 dark:text-zinc-400"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMobileMenuOpen ? (
                <RiCloseLine className="m-1 h-5 w-5" />
              ) : (
                <RiMenu3Line className="m-1 h-5 w-5" />
              )}
            </button>
          </div>
        </div>
        
        {isMobileMenuOpen && (
          <ul className="my-4 flex flex-col gap-2 pl-1 animate-fade-in">
            {NAVIGATION_LINKS.map(({ label, href }, index) => (
              <li key={index} className="whitespace-nowrap">
                <Link
                  className={`text-xs font-mono py-2 rounded-lg px-3 block border transition-all ${
                    isActive(href)
                      ? "bg-zinc-100 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-50 font-semibold"
                      : "bg-transparent border-transparent text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100"
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
    </nav>
  );
};

export default Navbar;