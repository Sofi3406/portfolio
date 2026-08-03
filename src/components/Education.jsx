import { education } from "../data";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";

const Education = () => {
  // Optional: If you have graduation year, you can add it to data and display here
  // const graduationYear = "2024"; // Example

  return (
    <section id="education" className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden dark:from-slate-950 dark:to-slate-900">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-500 dark:text-gray-400 mt-4">My academic background</p>
        </div>

        {/* Education card */}
        <div className="max-w-3xl mx-auto">
          <div className="group bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl border border-gray-100 dark:border-slate-800">
            {/* Top gradient bar */}
            <div className="h-2 w-full bg-gradient-to-r from-blue-500 to-purple-600"></div>

            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Logo container */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-4 shadow-inner flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <img
                      src="/images/Addis_Ababa_University_logo.png"
                      alt="Addis Ababa University Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Text content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                    <FaGraduationCap className="text-blue-600 text-2xl" />
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
                      {education.degree}
                    </h3>
                  </div>

                  <p className="text-xl text-blue-600 dark:text-cyan-300 font-medium mb-4">
                    {education.institution}
                  </p>

                  {/* Optional year (if you add to data) */}
                  {/* <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500">
                    <FaCalendarAlt className="text-gray-400" />
                    <span>{graduationYear}</span>
                  </div> */}

                  {/* Decorative line */}
                  <div className="w-24 h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 mx-auto md:mx-0 mt-4"></div>
                </div>
              </div>
            </div>

            {/* Shine effect on hover */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>
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

export default Education;