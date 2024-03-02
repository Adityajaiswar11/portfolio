/* eslint-disable react/jsx-no-target-blank */

import img from "/Images/e-commerce.webp";
import todo from "/Images/todo.webp";
import youtube from "/Images/youtube.jpg";
import PortFolioImage from "/Images/Portfolio.avif";

function Project() {
  const Projects = [
    {
      image: img,
      name: "E-commerce",
      description:
        "The e-commerce website delivers a comprehensive shopping experience by combining intuitive user interfaces with robust authentication and data storage functionalities powered by Mongoose and MongoDB.",
      Technology: "React.js, NodeJs.js, Express, MongoDB, Tailwind",
      Github: "https://github.com/Adityajaiswar11/E-commerce-frontend",
      live: "",
    },
    {
      image: youtube,
      name: "Youtube_clone",
      description:
        "This application is fully functional and responsive.Users can search for a video based on their preferences in this application, and afterward, the results will be displayed based on the search query",
      Technology: "React.js,Rapid API,Tailwind CSS",

      Github: "https://github.com/Adityajaiswar11/Youtube_Clone",
      live: "https://youtubeclone2411.netlify.app/",
    },
    {
      image: PortFolioImage,
      name: "Portfolio",
      description:
        " See my portfolio! Dive into a showcase of my diverse projects, From innovative solutions to impactful results, each project reflects my dedication to excellence in Web Development",
      Technology: "React JS, Tailwind CSS",
      Github: "https://github.com/Adityajaiswar11/portfolio",
      live: "https://portfolio-drab-pi-37.vercel.app/",
    },
    {
      image: todo,
      name: "Todo task-management",
      description:
        "I developed a application  that is a simple yet effective tool designed to help users manage their tasks or to-do lists conveniently. With this application, users can easily add new tasks, edit existing ones, and delete tasks they no longer need. The data for these tasks is stored locally using the browser's local storage feature.",
      Technology: "React.Js, Tailwind CSS",
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
              className="h-[300px] group relative items-center justify-center overflow-hidden cursor-pointer rounded-lg "
            >
              <img
                className="object-cover w-full h-full rounded-lg group-hover:scale-125 transition-transform duration-500"
                src={data.image}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-transparent group-hover:to-[#06BF96] "></div>
              <div className=" absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-700 hover:bg-slate-900/90">
                <h1 className="text-xl font-bold text-[#00FFFF] mb-1 underline">
                  {data?.name}
                </h1>
                <div className="text-sm italic text-white/40 font-bold mb-3 opacity-0 group-hover:opacity-100  duration-1000">
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
