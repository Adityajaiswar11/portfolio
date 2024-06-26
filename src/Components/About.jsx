/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

function About() {
  const [activeTab, setActiveTab] = useState("Tab1");

  const events = [
    {
      year: "2020-2023",
      mark: "Score : 8.01/10 CGPA",
      college : "Thakur College of Science and Commerce.Kandivali.",
      description: "B.Sc in Computer Science",
      
    },
    {
      year: "2019-2020",
      mark: "Score : 6/10 CGPA",
      college:"R.D National College Bandra West.",
      description: "HSC (Science)",
    },
    {
      year: "2017-2018",
      mark: "Score : 84.20%",
      college:"B.L Ruia High School Vile Parle .",
      description: "SSC",
    },
  ];

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="md:h-screen sm:py-16 py-24 bg-slate-950 border-b " id="about">
      <div className="pb-5">
        <h1 className="text-5xl  font-bold text-center py-10 opacity-90 text-white">
          About Me!
        </h1>
      </div>
      <div className="md:flex items-start justify-around gap-5 w-full">
        <div className="md:w-[50%] text-white mx-auto">
          <div className="py-1 md:text-[14px] text-[#ababab] text-sm mx-6 md:mx-0 flex flex-col gap-2">
            <p className="text-md opacity-90">
              <TypeAnimation
                sequence={["Hello , I am Aditya Jaiswar. "]}
                cursor={false}
                className="text-[#00FFFF] font-bold  text-xl"
              />
             As a passionate developer with a keen interest in Full Stack Development, I hold a Bachelor of Science degree in Computer Science from the University of Mumbai.
            </p>
            <p  className="text-md opacity-90">
            I am particularly enthusiastic about development and enjoy exploring new trends and innovations in web development. In addition to my technical skills, I bring strong communication and collaboration skills to every project.
              
            </p>
            <p>
              <span className="text-[#00FFFF] text-2xl font-bold">
                Networking :
              </span>{" "}
              Feel free to connect with me on Linked In, or explore my portfolio
              to see some of my recent projects
            </p>
          </div>
        </div>
        <div className="md:w-[40%] px-6 h-[500px] mt-16 md:mt-0  ">
          <div className="w-[100%] h-[40px]  flex items-center border-2 border-[#00FFFF] ">
            <button
              className={`w-[50%] font-bold text-2xl ${
                activeTab === "Tab1" ? "text-[#00FFFF]" : "text-white"
              }`}
              onClick={() => handleTabClick("Tab1")}
            >
              Education
            </button>
            <button
              className={`w-[50%] font-bold text-2xl ${
                activeTab === "Tab2" ? "text-[#00FFFF]" : "text-white"
              }`}
              onClick={() => handleTabClick("Tab2")}
            >
              Experience
            </button>
          </div>
          <div>
            {activeTab === "Tab1" && (
              <div className="container my-8 relative pt-4">
                <div className="flex flex-col md:flex-row md:space-x-6">
                  <div className=" w-[100%] relative ">
                    {events.map((event, index) => (
                      <div
                        key={index}
                        className="flex items-start justify-center  "
                      >
                        <div className="w-16 text-right mr-4">
                          <p className="text-white font-bold">{event.year}</p>
                        </div>
                        <div className="flex flex-col items-center mr-4 ">
                          <div className="w-4 h-4 bg-[#00FFFF] rounded-full "></div>
                          <div className=" w-[2px] h-24 border-2 border-[#00FFFF]"></div>
                        </div>
                        <div className="w-[70%] ">
                          <p className="text-white font-bold">
                            {event.description}
                          </p>
                          <p className="text-[#00FFFF] text-sm font-semibold">{event.college}</p>
                          <p className="text-white">{event.mark}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {activeTab === "Tab2" && (
              <div className="pt-12 md:pt-5 md:text-lg text-[#ababab]  text-sm md:mx-6 ">
                <p className="text-[14px] font-medium ">
                  {" "}
                  <span className="text-[#00FFFF] py-1 text-xl px-1 font-bold">
                    Work Experience :
                  </span>
                  I have one year of professional experience as a Frontend Developer.
                  I am currently working at Bold Softmation LLP as a Frontend Developer, where I am involved in developing a comprehensive CRM system for Glutape India Private Limited. My role focuses on creating an intuitive user interface, ensuring responsive design, and integrating the frontend with backend APIs to deliver a seamless and efficient user experience. Additionally, I am dedicated to performance optimization and thorough debugging to maintain a high-quality, reliable application.
                </p>
                <p className="py-1 text-[14px] font-semibold ">
                  Gained hands-on experience in Web development.
                </p>
                <p className="py-1 text-[14px] font-semibold ">
                  Demonstrated ability to work in a professional environment and
                  meet project deadlines.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
