import { createElement } from "react";
import { FaCodeBranch, FaGithub, FaStar } from "react-icons/fa";
import SectionHeading from "./SectionHeading";

const fallbackStats = { repos: "70+", stars: "5+", contributions: "604+", forks: "2+" };
const languageFallback = [
  { name: "JavaScript", value: 40, color: "#facc15" },
  { name: "HTML", value: 12, color: "#f97316" },
  { name: "CSS", value: 11, color: "#2563eb" },
  { name: "Python", value: 15, color: "#60a5fa" },
  { name: "Dart", value: 8, color: "#22d3ee" },
  { name: "Flutter", value: 4, color: "#0ea5e9" },
  { name: "Jupyter Notebook", value: 5, color: "#f97316" },
  { name: "Other", value: 5, color: "#94a3b8" },
];

const GithubShowcase = () => {
  const statCards = [["Total Repositories", fallbackStats.repos, FaGithub], ["Total Stars", fallbackStats.stars, FaStar], ["Contributions", fallbackStats.contributions, FaCodeBranch], ["Forks", fallbackStats.forks, FaCodeBranch]];

  return <section id="github" className="reference-section px-4 py-24 sm:px-6"><div className="mx-auto max-w-6xl"><SectionHeading eyebrow="Open source" title="GitHub" accent="Showcase" subtitle="Open source contributions and project repositories." /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{statCards.map(([label, value, Icon]) => <div key={label} className="rounded-2xl border border-slate-200 bg-white/80 p-5 dark:border-slate-800 dark:bg-slate-900/70">{createElement(Icon, { className: "text-xl text-cyan-500" })}<p className="mt-5 text-2xl font-extrabold text-slate-900 dark:text-white">{value}</p><p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{label}</p></div>)}</div><div className="mt-6 rounded-2xl border border-slate-200 bg-white/80 p-6 dark:border-slate-800 dark:bg-slate-900/70"><h3 className="font-bold text-slate-900 dark:text-white">Most Used Languages</h3><div className="mt-5 space-y-4">{languageFallback.map((language) => <div key={language.name}><div className="mb-2 flex justify-between text-sm"><span className="font-semibold text-slate-700 dark:text-slate-200">{language.name}</span><span className="text-slate-500">{language.value}%</span></div><div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800"><div className="h-full rounded-full" style={{ width: `${language.value}%`, backgroundColor: language.color }} /></div></div>)}</div></div></div></section>;
};

export default GithubShowcase;
