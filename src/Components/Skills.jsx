import {
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiCss3,
  SiBootstrap,
  SiExpress,
  SiGithub,
  SiMongodb,
} from "react-icons/si";
import { DiNodejs, DiReact } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";

function Skills() {
  const skills = [
    { icon: <SiHtml5 />, name: "HTML5", textColor: "text-red-500" },
    { icon: <SiCss3 />, name: "CSS", textColor: "text-blue-700" },
    { icon: <SiJavascript />, name: "JavaScript", textColor: "text-yellow-500" },
    { icon: <SiBootstrap />, name: "Bootstrap", textColor: "text-purple-600" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", textColor: "text-sky-500" },
    { icon: <DiReact />, name: "React Js", textColor: "text-sky-500" },
    { icon: <TbBrandNextjs />, name: "Next Js", textColor: "text-white" },
    { icon: <DiNodejs />, name: "Node Js", textColor: "text-green-500" },
    { icon: <SiExpress />, name: "Express Js", textColor: "text-gray-500" },
    { icon: <SiMongodb />, name: "MongoDB", textColor: "text-green-500" },
    { icon: <GrMysql />, name: "MySQL", textColor: "text-sky-400" },
    { icon: <SiGithub />, name: "GitHub", textColor: "text-white" },
  ];

  return (
    <div
      className="h-auto text-white px-6 py-16 bg-slate-950 border-b font-semibold"
      id="skills"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-white tracking-wide">
          My <span className="text-cyan-400">Technical Skills</span>
        </h1>
        <p className="text-gray-400 mt-2">Technologies I work with daily</p>
      </div>
      <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`flex flex-col justify-center items-center ${skill.textColor} hover:scale-110 duration-300 p-5 rounded-xl shadow-lg bg-slate-900 hover:bg-slate-800 border border-slate-700`}
          >
            <div className="text-4xl mb-3">{skill.icon}</div>
            <div className="text-center text-sm font-medium text-white">
              {skill.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
