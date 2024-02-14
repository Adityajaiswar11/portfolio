/* eslint-disable react/jsx-no-target-blank */

import img from "/Images/e-commerce.webp";
import todo from "/Images/todo.webp";
import WeatherApp from "/Images/WeatherApp.jpg";
import PortFolioImage from "/Images/Portfolio.avif";

function Project() {
  const Projects = [
    {
      image:img,
      name: "E-commerce",
      description:
        "The e-commerce website delivers a comprehensive shopping experience by combining intuitive user interfaces with robust authentication and data storage functionalities powered by Mongoose and MongoDB.",
      Technology:
        "React.js, NodeJs.js, Express, MongoDB",
      Github: "https://github.com/Adityajaiswar11/E-commerce-frontend",
      live: "",
    },
    {
      image: WeatherApp,
      name: "Weather App",
      description:
        "Live Weather Forecaste : Realtime Updates on Current weather conditions",
      Technology: "Next Js , External API",
      Github: "",
      live: "",
    },
    {
      image: PortFolioImage,
      name: "Portfolio",
      description:
        " See my portfolio! Dive into a showcase of my diverse projects, From innovative solutions to impactful results, each project reflects my dedication to excellence in Web Development",
      Technology:
        "React JS, Tailwind CSS",
      Github: "",
      live: "",
    },
    {
      image: todo,
      name: "Todo task-management",
      description:
        " I developed a Tic-Tac-Toe game using React to enhance my logic-building skills and learn the fundamentals of React development. This project demonstrates my ability to implement game mechanics and utilize React's component-based architecture effectively. ",
      Technology: "React.Js",
      Github: "https://github.com/Adityajaiswar11/CRUD-OPERATION-in-React",
      live: "https://crud-operation-in-react-three.vercel.app/",
    },
  ];

  return (
    <div className="py-16 bg-slate-950 border-b" id="project">
      <h1 className="text-4xl md:py-2 font-bold text-white text-center">
        Projects
      </h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center gap-10 mx-10 md:px-12 pt-4">
        {Projects.map((data) => {
          return (
            <div
              key={Math.random()}
              className="h-[300px] group relative items-center shadow-lg shadow-[#06BF96] justify-center overflow-hidden cursor-pointer rounded-lg "
            >
              <img
                className="object-cover w-full h-full rounded-lg group-hover:scale-125 transition-transform duration-500"
                src={data.image}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-transparent group-hover:to-[#06BF96]  "></div>
              <div className=" absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-700">
                <h1 className="text-3xl font-bold text-gray-300">
                  {data?.name}
                </h1>
                <div className="text-sm italic text-black font-bold mb-3 opacity-0 group-hover:opacity-100  duration-1000">
                  <p>{data?.description}</p>

                  <p>Technology Used:- {data?.Technology}</p>
                </div>
                <div className="flex gap-10">
                  <a href={data.Github} target="_blank">
                    <button className="bg-white w-[100px] font-bold h-[35px] rounded-md">
                      GitHub
                    </button>
                  </a>
                  <a href={data.live} target="_blank">
                    <button className="bg-white w-[100px] font-bold h-[35px] rounded-md">
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Project;
