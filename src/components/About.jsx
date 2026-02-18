import { personalInfo } from "../data";
import { FaQuoteLeft, FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Excutive Summary
          </h2>
         
        </div>

        {/* Main content card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100 transform hover:scale-[1.02] transition-transform duration-300">
          <div className="relative">
            {/* Large quote icon */}
            <FaQuoteLeft className="absolute -top-6 -left-6 text-6xl text-blue-100 opacity-50" />
            
            {/* Summary text */}
            <div className="relative z-10 pl-8 md:pl-12">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light italic">
                {personalInfo.summary}
              </p>
            </div>
            
            {/* Author signature (optional) */}
            <div className="mt-8 flex items-center justify-end gap-2 text-gray-500">
              <span className="w-12 h-px bg-gray-300"></span>
              <span className="text-sm font-medium">{personalInfo.name}</span>
            </div>
          </div>
        </div>

        {/* Call to action link */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors group"
          >
            <span>Let's work together</span>
            <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Add animation keyframes if not already in global CSS */}
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

export default About;