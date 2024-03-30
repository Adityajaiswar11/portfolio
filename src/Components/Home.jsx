/* eslint-disable react/jsx-no-target-blank */
import {
  TiSocialTwitterCircular,
  TiSocialLinkedinCircular,
  TiSocialGithubCircular,
} from "react-icons/ti";
import { TypeAnimation } from "react-type-animation";
function Home() {
  return (
    <>
      <div className="md:h-screen py-16 border-b  bg-slate-950" id="home">
        <div className="md:flex md:px-24 text-center md:text-left">
          <div className="md:w-[100%] flex flex-col justify-center  items-center">
            <h1 className="text-white text-4xl md:text-5xl font-bold  pt-20 md:pt-36 ">
              <TypeAnimation
                sequence={["Hello , I am Aditya Jaiswar "]}
                cursor={false}
              />
            </h1>
            <h1 className="text-[#00FFFF] font-bold text-xl md:text-2xl py-2 ">
              <TypeAnimation
                sequence={[
                  "I am a web developer",
                  1000,
                  "Front-End Developer with React ",
                  1000,
                  "Back-End using Node.js ,Express and MongoDB",
                  1000,
                  "Passionate Full Stack Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "20px", display: "inline-block" }}
                repeat={Infinity}
                cursor={false}
              />
            </h1>
            <p className="text-white sm:pb-5 pb-0  font-Poppins sm:w-[70%] text-center  opacity-80 md:text-md text-sm  pt-2 ">
              I have a strong command over both front-end and back-end
              technologies, allowing me to build complete and scalable
              applications. I’m excited to be part of a team where I can
              contribute my full stack development skills and help create
              innovative and impactful applications
            </p>
            <div className="my-4 md:w-96 w-full  bg-[#00FFFF] shadow-sm shadow-[#00FFFF] h-1"></div>
            <div className="text-[#040d12] md:py-6  py-6 flex md:justify-start justify-center items-center ">
            <a href="/public/Aditya_Jaiswar_Resume.pdf" download="Aditya_Resume.pdf"><button className="py-2 px-4 bg-slate-950 text-white/80 rounded-xl font-semibold hover:outline duration-300 outline-1 shadow-md shadow-white/50">Download CV</button></a>
            </div>
          </div>
        </div>
        <div className=" text-[#00FFFF] md:px-24  grid  place-items-center ">
          <div className="flex md:pt-7  pt-8">
            <h1>
              <a
                href="https://www.linkedin.com/in/aditya-jaiswar-60a167217/"
                target="_blank"
              >
                <TiSocialLinkedinCircular className="text-5xl" />
              </a>
            </h1>
            <h1>
              <a href="https://github.com/Adityajaiswar11" target="_blank">
                <TiSocialGithubCircular className="text-5xl" />
              </a>
            </h1>
            <h1>
              <a href="https://twitter.com/adityajaiswar_" target="_blank">
                <TiSocialTwitterCircular className="text-5xl" />
              </a>
            </h1>
          </div>
          <div className="my-1 w-36 bg-slate-400 h-0.5"></div>
        </div>
      </div>
    </>
  );
}

export default Home;
