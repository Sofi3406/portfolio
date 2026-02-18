import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
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

  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;