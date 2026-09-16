import { FaBriefcase, FaCheckCircle } from "react-icons/fa";
import { alxEducation, education, experiences, qiyasEducation } from "../data";
import SectionHeading from "./SectionHeading";

const ExperienceCard = ({ experience }) => (
  <article className="timeline-card rounded-2xl border border-slate-200 bg-white/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/80 sm:p-7">
    <div className="flex flex-wrap items-start justify-between gap-4">
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-lg text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-300"><FaBriefcase /></span>
        <div><h3 className="text-lg font-extrabold text-slate-900 dark:text-white">{experience.role}</h3><p className="mt-1 font-semibold text-cyan-600 dark:text-cyan-300">{experience.company}</p></div>
      </div>
      <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{experience.period}</span>
    </div>
    <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300">{experience.summary}</p>
    <div className="mt-5 grid gap-3 sm:grid-cols-2">
      {experience.highlights.map((highlight) => <div key={highlight} className="flex items-start gap-2 text-sm leading-6 text-slate-600 dark:text-slate-300"><FaCheckCircle className="mt-1 shrink-0 text-xs text-cyan-500" />{highlight}</div>)}
    </div>
    <div className="my-5 border-t border-slate-200 dark:border-slate-800" />
    <div className="flex flex-wrap items-center gap-2"><span className="mr-1 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Key Technologies:</span>{experience.technologies.map((technology) => <span key={technology} className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300">{technology}</span>)}</div>
  </article>
);

const EducationCard = () => (
  <article className="timeline-card rounded-2xl border border-slate-200 bg-white/85 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/80 sm:p-7">
    <div className="flex flex-wrap items-start justify-between gap-4"><div className="flex items-start gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1 dark:bg-slate-100"><img src="/images/Addis_Ababa_University_logo.png" alt="Addis Ababa University logo" className="h-full w-full object-contain" /></span><div><h3 className="text-lg font-extrabold text-slate-900 dark:text-white">{education.degree}</h3><p className="mt-1 font-semibold text-cyan-600 dark:text-cyan-300">{education.institution}</p></div></div><span className="text-sm font-medium text-slate-500 dark:text-slate-400">{education.years}</span></div>
    <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300">Strong foundation in algorithms, data structures, software engineering, and computer systems.</p>
    <div className="mt-5 flex flex-wrap gap-2"><span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300">Bachelor&apos;s Degree</span></div>
  </article>
);

const QiyasCard = () => (
  <article className="timeline-card rounded-2xl border border-slate-200 bg-white/85 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/80 sm:p-7">
    <div className="flex flex-wrap items-start justify-between gap-4"><div className="flex items-start gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1 dark:bg-slate-100"><img src="/images/Addis_Ababa_University_logo.png" alt="Addis Ababa University logo" className="h-full w-full object-contain" /></span><div><h3 className="text-lg font-extrabold text-slate-900 dark:text-white">{qiyasEducation.degree}</h3><p className="mt-1 font-semibold text-cyan-600 dark:text-cyan-300">{qiyasEducation.institution}</p></div></div><span className="text-sm font-medium text-slate-500 dark:text-slate-400">{qiyasEducation.years}</span></div>
    <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300">{qiyasEducation.description}</p>
    <div className="mt-5 flex flex-wrap gap-2"><span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300">{qiyasEducation.badge}</span></div>
  </article>
);

const AlxCard = () => (
  <article className="timeline-card rounded-2xl border border-slate-200 bg-white/85 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/80 sm:p-7">
    <div className="flex flex-wrap items-start justify-between gap-4"><div className="flex items-start gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1 dark:bg-slate-100"><img src="/images/Alx.jpg" alt="ALX Ethiopia logo" className="h-full w-full object-contain" /></span><div><h3 className="text-lg font-extrabold text-slate-900 dark:text-white">{alxEducation.degree}</h3><p className="mt-1 font-semibold text-cyan-600 dark:text-cyan-300">{alxEducation.institution}</p></div></div><span className="text-sm font-medium text-slate-500 dark:text-slate-400">{alxEducation.years}</span></div>
    <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300">{alxEducation.description}</p>
    <div className="mt-5 flex flex-wrap gap-2"><span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300">{alxEducation.badge}</span></div>
  </article>
);

const Experience = () => (
  <section id="experience" className="reference-section px-4 py-24 sm:px-6">
    <div className="mx-auto max-w-5xl"><SectionHeading eyebrow="Where I’ve grown" title="Work" accent="Experience" subtitle="A practical journey through frontend, full-stack development, and computer science." />
      <div className="timeline-rail space-y-7">{experiences.map((experience) => <div className="timeline-entry" key={experience.company}><ExperienceCard experience={experience} /></div>)}<div className="timeline-entry"><AlxCard /></div><div className="timeline-entry"><QiyasCard /></div><div className="timeline-entry"><EducationCard /></div></div>
    </div>
  </section>
);

export default Experience;
