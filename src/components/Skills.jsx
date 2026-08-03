import { skills } from "../data";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaPython,
  FaTools,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaJava,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiCplusplus,
  SiAdobephotoshop,
} from "react-icons/si";

// Map skill names to icons (add more as needed)
const getSkillIcon = (skill) => {
  const iconMap = {
    // Frontend
    HTML: <FaCode />,
    CSS: <FaCss3Alt />,
    JavaScript: <FaJs />,
    React: <FaReact />,
    Bootstrap: <FaBootstrap />,
    "Tailwind CSS": <SiTailwindcss />,
    // Backend
    "Node.js": <FaNodeJs />,
    Express: <SiExpress />,
    PHP: <FaPhp />,
    // Databases
    MongoDB: <SiMongodb />,
    MySQL: <SiMysql />,
    PostgreSQL: <SiPostgresql />,
    // Languages
    Python: <FaPython />,
    Java: <FaJava />,
    "C++": <SiCplusplus />,
    // Tools
    Git: <FaGitAlt />,
    GitHub: <FaGitAlt />,
    "Adobe Photoshop": <SiAdobephotoshop />,
  };
  return iconMap[skill] || null;
};

// Category styling configuration
const categoryStyles = {
  "Front-End": {
    bg: "from-blue-50 to-indigo-100",
    border: "border-blue-200",
    icon: <FaCode className="text-blue-600" />,
  },
  "Back-End": {
    bg: "from-green-50 to-emerald-100",
    border: "border-green-200",
    icon: <FaServer className="text-green-600" />,
  },
  Databases: {
    bg: "from-purple-50 to-violet-100",
    border: "border-purple-200",
    icon: <FaDatabase className="text-purple-600" />,
  },
  "Programming Languages": {
    bg: "from-orange-50 to-amber-100",
    border: "border-orange-200",
    icon: <FaPython className="text-orange-600" />,
  },
  "Tools & Others": {
    bg: "from-pink-50 to-rose-100",
    border: "border-pink-200",
    icon: <FaTools className="text-pink-600" />,
  },
};

const SkillBadge = ({ skill }) => {
  const icon = getSkillIcon(skill);
  return (
    <span className="inline-flex items-center gap-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm text-gray-700 dark:text-gray-200 px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-gray-200 dark:border-slate-700 hover:scale-105 hover:shadow-md transition-all duration-300 group">
      {icon && <span className="text-lg group-hover:rotate-12 transition-transform">{icon}</span>}
      {skill}
    </span>
  );
};

const SkillCategory = ({ title, items }) => {
  const style = categoryStyles[title] || categoryStyles["Tools & Others"];
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${style.bg} dark:from-slate-900 dark:to-slate-800 p-6 shadow-lg border ${style.border} dark:border-slate-700 hover:shadow-xl transition-shadow duration-300`}
    >
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-8 -mt-8 blur-2xl"></div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-3xl">{style.icon}</div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {items.map((skill, idx) => (
            <SkillBadge key={idx} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Technical Skills</h2>
          
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SkillCategory title="Front-End" items={skills.frontend} />
          <SkillCategory title="Back-End" items={skills.backend} />
          <SkillCategory title="Databases" items={skills.databases} />
          <SkillCategory title="Programming Languages" items={skills.languages} />
          <div className="lg:col-span-2">
            <SkillCategory title="Tools & Others" items={skills.tools} />
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default Skills;