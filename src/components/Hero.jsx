import { useEffect, useState } from "react";
import { FaArrowRight, FaEnvelope, FaGithub, FaGlobe } from "react-icons/fa";
import { personalInfo } from "../data";

const roles = ["AI & Data Enthusiast", "Full-Stack Developer", "Frontend Developer"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState(roles[0]);

  useEffect(() => {
    let characterIndex = roles[roleIndex].length;
    const deleteTimer = setInterval(() => {
      characterIndex -= 1;
      setTypedRole(roles[roleIndex].slice(0, characterIndex));
      if (characterIndex === 0) {
        clearInterval(deleteTimer);
        setRoleIndex((currentIndex) => (currentIndex + 1) % roles.length);
      }
    }, 90);
    return () => clearInterval(deleteTimer);
  }, [roleIndex]);

  useEffect(() => {
    if (typedRole) return undefined;
    const role = roles[roleIndex];
    let characterIndex = 0;
    const typeTimer = setInterval(() => {
      characterIndex += 1;
      setTypedRole(role.slice(0, characterIndex));
      if (characterIndex === role.length) clearInterval(typeTimer);
    }, 90);
    return () => clearInterval(typeTimer);
  }, [roleIndex, typedRole]);

  return (
    <section id="home" className="hero-section relative flex min-h-screen items-center justify-center overflow-hidden px-4 pb-16 pt-32 sm:px-6">
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />
      <div className="relative mx-auto flex w-full max-w-4xl justify-center">
        <div className="text-center">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.28em] text-cyan-600 dark:text-cyan-300">Hello, I’m</p>
          <h1 className="text-5xl font-extrabold tracking-[-0.06em] text-slate-950 dark:text-white sm:text-7xl">{personalInfo.name}</h1>
          <h2 className="mt-6 text-2xl font-bold text-slate-800 dark:text-slate-100 sm:text-4xl"><span className="hero-accent">{typedRole}</span><span className="typing-cursor">|</span></h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">Building clean, scalable, user-focused web solutions.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#contact" className="hero-primary inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-500/20">Contact Me <FaArrowRight /></a>
            <a href="#projects" className="hero-secondary inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold">View Projects</a>
          </div>
          <div className="mt-10 flex justify-center gap-3">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="social-button" aria-label="GitHub"><FaGithub /></a>
            <a href={`mailto:${personalInfo.email}`} className="social-button" aria-label="Email"><FaEnvelope /></a>
            <a href={personalInfo.website} target="_blank" rel="noreferrer" className="social-button" aria-label="Website"><FaGlobe /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
