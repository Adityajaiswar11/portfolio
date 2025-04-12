/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

function About() {
  const [activeTab, setActiveTab] = useState("Tab2");

  const education = [
    {
      year: "2020-2023",
      mark: "Score : 8.01/10 CGPA",
      college: "Thakur College of Science and Commerce, Kandivali",
      description: "B.Sc in Computer Science",
    },
    {
      year: "2019-2020",
      mark: "Score : 6/10 CGPA",
      college: "R.D National College, Bandra West",
      description: "HSC (Science)",
    },
    {
      year: "2017-2018",
      mark: "Score : 84.20%",
      college: "B.L Ruia High School, Vile Parle",
      description: "SSC",
    },
  ];

  return (
    <section id="about" className="bg-slate-950 py-16 md:py-24 border-b">
      <h1 className="text-5xl font-bold text-center text-white mb-12">About Me!</h1>

      <div className="flex flex-col md:flex-row justify-around items-start gap-10 px-6 md:px-12">
        {/* Left Section - About Text */}
        <div className="md:w-1/2 text-[#ababab] space-y-4">
          <TypeAnimation
            sequence={["Hello, I am Aditya Jaiswar."]}
            cursor={false}
            className="text-[#00FFFF] font-bold text-2xl mb-2"
          />
          <p>
            As a passionate developer with a keen interest in Full Stack Development, I hold a Bachelor of Science degree in Computer Science from the University of Mumbai.
          </p>
          <p>
            I enjoy exploring new trends in web development and bring strong communication and collaboration skills to every project.
          </p>
          <p>
            <span className="text-[#00FFFF] font-bold text-xl">Networking:</span> Feel free to connect with me on LinkedIn or check out my portfolio to see my recent work.
          </p>
        </div>

        {/* Right Section - Tabs */}
        <div className="md:w-1/2">
          <div className="flex border-2 border-[#00FFFF] rounded-lg overflow-hidden mb-6">
            <button
              onClick={() => setActiveTab("Tab2")}
              className={`w-1/2 py-2 text-lg font-semibold transition ${
                activeTab === "Tab2" ? "bg-[#00FFFF] text-black" : "text-white"
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveTab("Tab1")}
              className={`w-1/2 py-2 text-lg font-semibold transition ${
                activeTab === "Tab1" ? "bg-[#00FFFF] text-black" : "text-white"
              }`}
            >
              Education
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "Tab1" && (
            <div className="space-y-8">
              {education.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-24 text-right text-white font-bold">{item.year}</div>
                  <div className="flex flex-col gap-1">
                    <span className="text-white font-semibold">{item.description}</span>
                    <span className="text-[#00FFFF] text-sm">{item.college}</span>
                    <span className="text-white text-sm">{item.mark}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Tab2" && (
            <div className="text-[#ababab] text-sm space-y-4">
              <p>
                <span className="text-[#00FFFF] font-bold text-xl">Work Experience:</span> Hi, I am Aditya, a frontend developer with 1.6 years of experience in <strong>React.js</strong> and <strong>Next.js</strong>. I build fast,
                scalable, and user-friendly web applications. I also have experience building Android apps using <strong>React Native</strong>.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Proficient in React.js, Next.js, Tailwind CSS, Redux, and Material UI</li>
                <li>Hands-on backend experience using Node.js, Express.js, MongoDB, and SQL</li>
                <li>Strong problem-solving & debugging skills for seamless user experiences</li>
                <li>Performance optimization, accessibility, and responsive design expertise</li>
                <li>Familiar with Git, GitHub, and Vercel for version control and deployment</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default About;
