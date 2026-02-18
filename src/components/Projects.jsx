import { projects } from "../data";
import { FaFolderOpen, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative blobs (consistent with other sections) */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-500 mt-4">Real-world applications I've built</p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Top color bar (unique per project based on index) */}
              <div
                className={`h-2 bg-gradient-to-r ${
                  index % 3 === 0
                    ? "from-blue-500 to-cyan-500"
                    : index % 3 === 1
                    ? "from-purple-500 to-pink-500"
                    : "from-green-500 to-emerald-500"
                }`}
              ></div>

              {/* Content */}
              <div className="p-6 relative z-10">
                {/* Folder icon */}
                <div className="flex items-center justify-between mb-4">
                  <FaFolderOpen className="text-4xl text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
                  
                  {/* Placeholder links (if you have live demo or github, you can add later) */}
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href="#"
                      className="text-gray-500 hover:text-blue-600 transition-colors"
                      title="View on GitHub"
                    >
                      <FaGithub size={20} />
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-blue-600 transition-colors"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-4">{project.description}</p>

                {/* Optional: Technology tags (if you add tech stack later) */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {/* You can map through project.tech if available */}
                </div>

                {/* "Learn more" arrow */}
                <div className="flex justify-end">
                  <span className="inline-flex items-center gap-1 text-blue-600 font-medium group-hover:gap-2 transition-all">
                    Learn more
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation keyframes (if not already in global CSS) */}
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