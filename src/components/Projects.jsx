import { FaCode, FaGithub } from "react-icons/fa";
import { projects } from "../data";
import SectionHeading from "./SectionHeading";

const Projects = () => (
  <section id="projects" className="reference-section px-4 py-24 sm:px-6">
    <div className="mx-auto max-w-6xl"><SectionHeading eyebrow="Selected work" title="Featured" accent="Projects" subtitle="Full-stack web applications I've built with clean code and real-world impact." />
      <div className="grid gap-6 lg:grid-cols-3">{projects.map((project, index) => <article key={project.title} className="project-card flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white/85 shadow-sm dark:border-slate-800 dark:bg-slate-900/80"><div className={`h-1.5 ${index === 0 ? "bg-cyan-400" : index === 1 ? "bg-blue-500" : "bg-violet-500"}`} /><div className="flex flex-1 flex-col p-6"><div className="mb-6 flex items-start justify-between gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-lg text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-300"><FaCode /></span><span className="text-xs font-bold uppercase tracking-wider text-slate-400">0{index + 1}</span></div><h3 className="text-xl font-extrabold text-slate-900 dark:text-white">{project.title}</h3><div className="mt-5 space-y-4 text-sm leading-6"><div><p className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-300">Problem</p><p className="mt-1 text-slate-600 dark:text-slate-300">{project.problem}</p></div><div><p className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-300">Solution</p><p className="mt-1 text-slate-600 dark:text-slate-300">{project.solution}</p></div></div><div className="mt-auto pt-6"><p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Tech Stack</p><div className="mt-3 flex flex-wrap gap-2">{project.stack.map((technology) => <span key={technology} className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300">{technology}</span>)}</div><a href={project.github} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-700 transition hover:text-cyan-600 dark:text-slate-200 dark:hover:text-cyan-300"><FaGithub /> Code</a></div></div></article>)}</div>
    </div>
  </section>
);

export default Projects;
