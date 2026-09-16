import { createElement } from "react";
import { FaBrain, FaCode, FaGraduationCap, FaLightbulb } from "react-icons/fa";
import { personalInfo } from "../data";
import SectionHeading from "./SectionHeading";

const highlights = [
  { title: "Computer Science Graduate", text: "AAU, algorithms, software engineering", icon: FaGraduationCap },
  { title: "Full-Stack Developer", text: "React, Node.js, MongoDB, PostgreSQL", icon: FaCode },
  { title: "AI & Data Enthusiast", text: "Qiyas AAU, ALX, Udacity", icon: FaBrain },
  { title: "Problem Solver", text: "Real-world apps, collaboration", icon: FaLightbulb },
];

const About = () => (
  <section id="about" className="reference-section px-4 py-24 sm:px-6">
    <div className="mx-auto max-w-6xl">
      <SectionHeading eyebrow="A little about me" title="About" accent="Me" subtitle="A curious builder focused on useful, thoughtful digital experiences." />
      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div className="about-copy rounded-3xl border border-slate-200/80 bg-white/70 p-7 shadow-sm dark:border-slate-800 dark:bg-slate-900/60 sm:p-9">
          <p className="text-lg leading-9 text-slate-600 dark:text-slate-300">{personalInfo.summary}</p>
          <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-cyan-600 dark:text-cyan-300">Let’s work together <FaLightbulb /></a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map(({ title, text, icon: HighlightIcon }) => <article key={title} className="highlight-card rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">{createElement(HighlightIcon, { className: "mb-5 text-2xl text-cyan-500" })}<h3 className="text-lg font-bold text-slate-900 dark:text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{text}</p></article>)}
        </div>
      </div>
    </div>
  </section>
);

export default About;
