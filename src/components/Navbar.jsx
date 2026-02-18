import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaFileDownload } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Intersection Observer to detect active section
  useEffect(() => {
    const observers = navLinks.map((link) => {
      const sectionId = link.href.substring(1); // remove '#'
      const section = document.getElementById(sectionId);
      if (!section) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(sectionId);
            }
          });
        },
        { threshold: 0.5 } // section is considered active when 50% visible
      );

      observer.observe(section);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer && observer.disconnect());
    };
  }, [navLinks]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-0.5">
              <div className="w-full h-full rounded-full bg-white overflow-hidden flex items-center justify-center">
                {/* Profile image - replace with your image path */}
                <img
                  src="/images/sofiya.png"
                  alt="Sofiya"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image not found
                    e.target.onerror = null;
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML =
                      '<span class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">S</span>';
                  }}
                />
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-blue-600 transition-all">
              Sofiya Yasin
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors group ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                      isActive ? "scale-x-100" : ""
                    }`}
                  ></span>
                </a>
              );
            })}
          </div>

          {/* Resume Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="/resume.pdf" // Replace with your actual resume path
              download
              className="hidden md:flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <FaFileDownload />
              <span>Resume</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none transition-colors"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pb-4 space-y-2">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`block py-2 px-4 rounded-lg transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={handleLinkClick}
                >
                  {link.name}
                </a>
              );
            })}
            <a
              href="/resume.pdf"
              download
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold mt-4"
              onClick={handleLinkClick}
            >
              <FaFileDownload />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;