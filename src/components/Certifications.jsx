import { createElement } from "react";
import { FaAward, FaBrain, FaChartLine, FaCheckCircle, FaCode } from "react-icons/fa";
import { certifications } from "../data";
import SectionHeading from "./SectionHeading";

const certificateIcons = [FaCode, FaBrain, FaChartLine, FaAward];

const Certifications = () => (
  <section id="certifications" className="reference-section px-4 py-24 sm:px-6">
    <div className="mx-auto max-w-6xl">
      <SectionHeading eyebrow="Beyond the degree" title="Certifications" accent="& Training" subtitle="Professional credentials and continuous learning." />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <article key={cert.title} className="certification-card flex min-h-40 gap-4 rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/80">
            <span className="certification-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-xl text-sky-500 dark:bg-cyan-400/15 dark:text-cyan-300">
              {createElement(certificateIcons[index % certificateIcons.length])}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-bold leading-6 text-slate-900 dark:text-white">{cert.title}</h3>
                <FaCheckCircle className="mt-1 shrink-0 text-lg text-emerald-500" aria-label="Verified certification" />
              </div>
              <p className="mt-3 text-sm font-semibold text-sky-500 dark:text-cyan-300">{cert.issuer}</p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{cert.year}{cert.status ? ` · ${cert.status}` : ""}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
