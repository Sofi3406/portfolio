import { personalInfo } from "../data";
import {
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowDown,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100"
    >
      {/* Animated background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-6000"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Name with gradient */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          {personalInfo.name}
        </h1>

        {/* Title with animated underline */}
        <div className="relative inline-block mb-8">
          <p className="text-2xl md:text-3xl text-gray-700 font-light">
            Full-Stack Web Developer
          </p>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </div>

        {/* Contact info as stylish cards */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a
            href={`mailto:${personalInfo.email}`}
            className="group flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md hover:shadow-xl transition-all duration-300 border border-white/50 hover:scale-105"
          >
            <FaEnvelope className="text-blue-600 group-hover:rotate-12 transition-transform" />
            <span className="text-gray-700">{personalInfo.email}</span>
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md hover:shadow-xl transition-all duration-300 border border-white/50 hover:scale-105"
          >
            <FaGithub className="text-gray-800 group-hover:rotate-12 transition-transform" />
            <span className="text-gray-700">GitHub</span>
          </a>

          <div className="group flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md border border-white/50">
            <FaPhone className="text-green-600" />
            <span className="text-gray-700">{personalInfo.phone}</span>
          </div>

          <div className="group flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md border border-white/50">
            <FaMapMarkerAlt className="text-red-600" />
            <span className="text-gray-700">{personalInfo.location}</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Get in touch</span>
            <FaEnvelope className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>

          <a
            href="#projects"
            className="group inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-gray-800 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl border border-white/50 transform hover:-translate-y-1 transition-all duration-300"
          >
            <span>View my work</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
          </a>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <FaArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;