import { certifications } from "../data";
import { FaCertificate, FaAward } from "react-icons/fa";
import { GiDiploma } from "react-icons/gi";
import { MdVerified } from "react-icons/md";

const Certifications = () => {
  // Alternate icons for visual variety
  const icons = [FaCertificate, GiDiploma, MdVerified, FaAward];

  return (
    <section id="certifications" className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative blobs (consistent with other sections) */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Certifications & Training
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-500 mt-4">Continuous learning and professional development</p>
        </div>

        {/* Certifications grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => {
            const IconComponent = icons[index % icons.length];
            // Generate a gradient color based on index
            const gradientFrom = index % 2 === 0 ? "from-blue-500" : "from-purple-500";
            const gradientTo = index % 3 === 0 ? "to-green-500" : index % 3 === 1 ? "to-pink-500" : "to-yellow-500";

            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
              >
                {/* Top gradient bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${gradientFrom} ${gradientTo}`}></div>

                <div className="p-6 flex items-start gap-4">
                  {/* Icon with gradient background */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Certificate text */}
                  <div className="flex-1">
                    <p className="text-gray-800 font-medium leading-relaxed">{cert}</p>
                    
                    {/* Optional decorative line */}
                    <div className="mt-3 flex items-center gap-2 text-xs text-gray-400">
                     
                    </div>
                  </div>
                </div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </div>
            );
          })}
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

export default Certifications;