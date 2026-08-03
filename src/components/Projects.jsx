import { projects } from "../data";
import { FaFolderOpen, FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 bg-gradient-to-b from-slate-50 via-white to-slate-100 overflow-hidden dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob dark:bg-cyan-500"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 dark:bg-fuchsia-500"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-cyan-500/30 bg-white/90 dark:bg-slate-900/70 px-4 py-2 text-sm font-medium text-blue-700 dark:text-cyan-300 shadow-sm mb-5">
            <FaFolderOpen />
            <span>Selected work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-slate-500 dark:text-slate-400 mt-4">Real-world applications I've built with clean code and practical outcomes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 shadow-xl backdrop-blur-sm transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div
                className={`h-2 bg-gradient-to-r ${
                  index % 3 === 0
                    ? "from-blue-500 to-cyan-500"
                    : index % 3 === 1
                    ? "from-purple-500 to-pink-500"
                    : "from-green-500 to-emerald-500"
                }`}
              ></div>

              <div className="p-6 relative z-10 flex h-full flex-col">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-cyan-300">
                      Project {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                    <FaFolderOpen className="text-2xl" />
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack?.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between gap-4 pt-2">
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-slate-900 dark:bg-white px-4 py-2 text-sm font-semibold text-white dark:text-slate-900 shadow-md hover:shadow-lg transition-all"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 10s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Projects;