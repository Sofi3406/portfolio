import { createElement } from "react";
import { FaBookOpen, FaBrain, FaChartBar, FaChartLine, FaCode, FaDatabase, FaFileExcel, FaGitAlt, FaJava, FaJs, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { SiAdobephotoshop, SiBootstrap, SiCplusplus, SiExpress, SiFlutter, SiGithub, SiMongodb, SiMysql, SiNumpy, SiOpencv, SiPandas, SiPostgresql, SiScikitlearn, SiTailwindcss, SiTensorflow } from "react-icons/si";
import SectionHeading from "./SectionHeading";

const iconMap = {
  Python: FaPython, Java: FaJava, JavaScript: FaJs, "C++": SiCplusplus, Dart: FaCode,
  React: FaReact, HTML5: FaCode, CSS3: FaCode, "Tailwind CSS": SiTailwindcss, Bootstrap: SiBootstrap, Flutter: SiFlutter, "Node.js": FaNodeJs, Express: SiExpress,
  MongoDB: SiMongodb, MySQL: SiMysql, PostgreSQL: SiPostgresql, Git: FaGitAlt, GitHub: SiGithub, "VS Code": FaCode, "Adobe Photoshop": SiAdobephotoshop, "Anaconda Notebook": FaBookOpen, "Jupyter Notebook": FaBookOpen, "Data Analysis": FaChartLine, "AI Training": FaBrain, "Machine Learning": FaBrain, "Computer Vision": FaBrain, "Data Visualization": FaChartLine, FastAPI: FaCode,
  "Scikit-learn": SiScikitlearn, TensorFlow: SiTensorflow, Pandas: SiPandas, NumPy: SiNumpy, OpenCV: SiOpencv, Matplotlib: FaChartLine, "Power BI": FaChartBar, Excel: FaFileExcel,
};

const categories = [
  { title: "Programming Languages", icon: FaCode, skills: ["Python", "Java", "JavaScript", "C++", "Dart"] },
  { title: "Web Development", icon: FaReact, skills: ["React", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Flutter", "Node.js", "Express"] },
  { title: "Databases", icon: FaDatabase, skills: ["MongoDB", "MySQL", "PostgreSQL"] },
  { title: "AI & Machine Learning", icon: FaBrain, skills: ["Scikit-learn", "TensorFlow", "Pandas", "NumPy", "OpenCV"] },
  { title: "Data Science & Analytics", icon: FaChartLine, skills: ["Matplotlib", "Power BI", "Excel", "Data Analysis", "Data Visualization"] },
  { title: "Tools & Platforms", icon: FaGitAlt, skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Adobe Photoshop"] },
];

const SkillCard = ({ name }) => {
  const Icon = iconMap[name] || FaCode;
  return <div className="skill-card flex min-h-24 flex-col items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-2 py-3 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900"><Icon className="text-2xl text-cyan-600 dark:text-cyan-300" /><span className="text-xs font-semibold text-slate-700 dark:text-slate-200">{name}</span></div>;
};

const Skills = () => (
  <section id="skills" className="reference-section px-4 py-24 sm:px-6">
    <div className="mx-auto max-w-6xl">
      <SectionHeading eyebrow="What I work with" title="My Technical" accent="Skills" subtitle="A practical toolkit for building responsive products, connected data systems, and useful digital experiences." />
      <div className="space-y-10">
        {categories.map(({ title, icon: CategoryIcon, skills: categorySkills }, categoryIndex) => <div key={title} className={`skill-category skill-category-${categoryIndex}`}><div className="mb-5 flex items-center gap-4"><span className="category-icon flex h-11 w-11 items-center justify-center rounded-xl text-xl">{createElement(CategoryIcon)}</span><h3 className="text-lg font-bold text-slate-900 dark:text-white">{title}</h3><span className="category-rule" /></div><div className={`grid grid-cols-2 gap-3 sm:grid-cols-3 ${title === "Programming Languages" ? "md:grid-cols-6 lg:grid-cols-6" : "md:grid-cols-5"}`}>{categorySkills.map((skill) => <SkillCard key={skill} name={skill} />)}</div></div>)}
      </div>
      <div className="learning-card mt-12 flex items-start gap-4 rounded-2xl border border-cyan-200 bg-cyan-50/70 p-6 dark:border-cyan-400/20 dark:bg-cyan-400/10"><FaBrain className="mt-1 shrink-0 text-2xl text-cyan-600 dark:text-cyan-300" /><div><h3 className="font-bold text-slate-900 dark:text-white">Continuous Learning</h3><p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">Always exploring new technologies, currently deepening my Qiyas AAU and ALX AI and Data Analysis training.</p></div></div>
    </div>
  </section>
);

export default Skills;
