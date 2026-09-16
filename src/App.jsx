import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import GithubShowcase from "./components/GithubShowcase";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import BackToTop from "./components/BackToTop";
import "./App.css";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const storedTheme = localStorage.getItem("portfolio-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return storedTheme ? storedTheme === "dark" : prefersDark;
  });

  // Smooth scroll for anchor links
  useEffect(() => {
    const handleHashChange = () => {
      const id = window.location.hash.substring(1); // remove #
      if (id) {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // on initial load if hash exists
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkTheme);
    localStorage.setItem("portfolio-theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme((currentTheme) => !currentTheme);
  };

  return (
    <div className="portfolio-shell min-h-screen font-sans antialiased bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <Navbar isDarkTheme={isDarkTheme} onToggleTheme={toggleTheme} />
      <div className="portfolio-grid" aria-hidden="true" />
      <main className="relative z-10 overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GithubShowcase />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
      <BackToTop />
    </div>
  );
}

export default App;