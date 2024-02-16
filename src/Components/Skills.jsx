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
    { icon: <SiHtml5 />, name: "HTML5", textColor: "red-500" },
    { icon: <SiCss3 />, name: "CSS", textColor: "blue-700" },
    {
      icon: <SiJavascript />,
      name: "JavaScript",
      textColor: "yellow-500",
    },
    {
      icon: <SiBootstrap />,
      name: "Bootstrap",
      textColor: "purple-600",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwindcss",
      textColor: "sky-500",
    },
    { icon: <DiReact />, name: "React Js", textColor: "sky-500" },
    {
      icon: <TbBrandNextjs />,
      name: "Next Js",
      textColor: "white",
    },
    {
      icon: <DiNodejs />,
      name: "Node Js",
      textColor: "green-500",
    },
    {
      icon: <SiExpress />,
      name: "Express Js",
      textColor: "gray-500",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
      textColor: "green-500",
    },
    { icon: <GrMysql />, name: "MySQL", textColor: "sky-400" },
    { icon: <SiGithub />, name: "GitHub", textColor: "white" },
  ];

  return (
    <div
      className="lg:h-screen text-white sm:px-7 px-8 py-16 bg-slate-950 border-b"
      id="skills"
    >
      <div className="text-center py-10 mb-5">
        <h1 className="text-4xl font-bold">Skills</h1>
      </div>
      <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-9 gap-8">
        {skills.map((skill, index) => {
          return (
            <>
              <div className={`text-${skill.textColor} flex justify-center items-center flex-col bg-transparent rounded-full hover:scale-125 duration-500 py-[2rem]`} key={index}>
                <h1 className={` text-5xl`}>
                  {" "}
                  {skill.icon}
                </h1>
                <h3 className="">{skill.name}</h3>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
