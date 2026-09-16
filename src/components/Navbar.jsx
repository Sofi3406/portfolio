import { useEffect, useState } from "react";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = ({ isDarkTheme, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const observers = navLinks.map((link) => {
      const sectionId = link.href.substring(1); // remove '#'
      const section = document.getElementById(sectionId);
      if (!section) return null;

      const observer = new IntersectionObserver(
        ([entry]) => entry.isIntersecting && setActiveSection(sectionId),
        { rootMargin: "-35% 0px -55%" }
      );

      observer.observe(section);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer && observer.disconnect());
    };
  }, []);

  return (
    <nav className="reference-nav fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 rounded-2xl border border-white/70 bg-white/80 px-4 shadow-lg shadow-slate-200/40 backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-950/75 dark:shadow-black/20 sm:px-6">
      <div className="flex h-[4.5rem] items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" className="flex shrink-0 items-center gap-3" aria-label="Sofiya Yasin home">
            <img src="/images/sofiya.png" alt="Sofiya Yasin logo" className="h-8 w-8 rounded-lg border border-slate-200 bg-white object-contain p-1 dark:border-slate-700" />
            <span className="hidden text-sm font-bold text-slate-900 dark:text-white sm:block">Sofiya Yasin</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-semibold transition ${
                    isActive
                      ? "text-cyan-600 dark:text-cyan-300"
                      : "text-slate-600 hover:text-cyan-600 dark:text-slate-300"
                  }`}
                >
                  {link.name}
                  {isActive && <span className="absolute inset-x-3 -bottom-1 h-0.5 rounded-full bg-cyan-400" />}
                </a>
              );
            })}
          </div>

          {/* Resume Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onToggleTheme}
              className="theme-switch flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-cyan-400 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
              aria-label={isDarkTheme ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkTheme ? <FaSun className="text-amber-400" /> : <FaMoon />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 md:hidden dark:border-slate-700 dark:text-slate-200"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {isOpen && <div className="border-t border-slate-200 py-3 dark:border-slate-800 md:hidden">
          {navLinks.map((link) => <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800">{link.name}</a>)}
        </div>}
    </nav>
  );
};

export default Navbar;