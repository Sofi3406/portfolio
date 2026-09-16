const SectionHeading = ({ eyebrow, title, accent, subtitle }) => (
  <div className="section-heading mb-12 text-center">
    {eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-cyan-600 dark:text-cyan-300">{eyebrow}</p>}
    <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
      {title} <span className="heading-accent">{accent}</span>
    </h2>
    <div className="heading-line mx-auto mt-4" />
    {subtitle && <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400">{subtitle}</p>}
  </div>
);

export default SectionHeading;