import { RiMenu3Line, RiCloseLine } from "@remixicon/react";
import { useState, useCallback } from "react";

const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const handleLinkClick = useCallback((e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 85;
      const offsetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  }, []);

  return (
    <nav className="fixed left-0 right-0 z-50 lg:top-4">
      {/* Desktop Menu */}
      <div className="mx-auto hidden max-w-3xl items-center justify-between rounded-full border border-white/30 py-3 px-12 backdrop-blur-lg lg:flex">
        <a
          href="/"
          className="uppercase text-lg font-semibold text-white whitespace-nowrap mr-6" // Added spacing between brand and menu
        >
          Danish Nawaz
        </a>
        <ul className="flex items-center lg:gap-10"> {/* Adjusted gap for uniform spacing */}
          {NAVIGATION_LINKS.map(({ label, href }, index) => (
            <li key={index} className="whitespace-nowrap">
              <a
                className="text-sm hover:text-stone-300 transition-colors duration-200"
                href={href}
                onClick={(e) => handleLinkClick(e, href)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className="py-3 px-6 backdrop-blur-md lg:hidden">
        <div className="flex items-center justify-between w-full">
          <a
            href="/"
            className="pl-2 uppercase text-lg font-semibold text-white whitespace-nowrap"
          >
            Danish Nawaz
          </a>
          <button
            className="focus:outline-none lg:hidden ml-auto"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMobileMenuOpen ? (
              <RiCloseLine className="m-2 h-7 w-7 " />
            ) : (
              <RiMenu3Line className="m-2 h-7 w-7 " />
            )}
          </button>
        </div>
        {isMobileMenuOpen && (
          <ul className="my-4 flex flex-col gap-8 pl-6 backdrop-blur-md">
            {NAVIGATION_LINKS.map(({ label, href }, index) => (
              <li key={index} className="whitespace-nowrap">
                <a
                  className="text-sm hover:text-stone-300 transition-colors duration-200"
                  href={href}
                  onClick={(e) => handleLinkClick(e, href)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
