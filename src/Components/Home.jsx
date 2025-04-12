
import {
  TiSocialTwitterCircular,
  TiSocialLinkedinCircular,
  TiSocialGithubCircular,
} from "react-icons/ti";
import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <div className="relative bg-slate-950 py-16 md:h-screen border-b" id="home">
      <div className="container mx-auto px-6 md:px-24 text-center md:text-left">
        <div className="flex flex-col justify-center items-center md:w-full">
          <h1 className="text-white text-4xl md:text-5xl font-bold pt-20 md:pt-36">
            <TypeAnimation
              sequence={["Hello, I am Aditya Jaiswar"]}
              cursor={false}
              wrapper="span"
            />
          </h1>
          <h2 className="text-[#00FFFF] font-bold text-xl md:text-2xl py-2">
            <TypeAnimation
              sequence={[
                "I am a web developer",
                1000,
                "Front-End Developer with React",
                1000,
                "Back-End with Node.js, Express, and MongoDB",
                1000,
                "Passionate Full Stack Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={false}
            />
          </h2>
          <p className="text-white opacity-80 font-Poppins sm:w-[70%] text-center md:text-md text-sm pt-2">
            I possess a strong command over both front-end and back-end
            technologies, enabling me to develop comprehensive and scalable
            applications. I am enthusiastic about joining a team where I can
            leverage my full stack development skills to contribute to the
            creation of innovative and impactful applications.
          </p>
          <div className="my-4 w-full md:w-96 bg-[#00FFFF] h-1 mx-auto shadow-md"></div>
          <div className="flex justify-center mt-6">
            <a
              href="/Aditya_Jaiswar_resume.pdf"
              download="Aditya_Resume.pdf"
              className="inline-flex items-center py-2 px-4 bg-slate-950 text-white/80 rounded-xl font-semibold hover:outline duration-300 outline-1 shadow-md shadow-white/50"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      <div className="text-[#00FFFF] py-6 text-center">
        <div className="flex justify-center space-x-6 md:space-x-8">
          <a
            href="https://www.linkedin.com/in/aditya-jaiswar-60a167217/"
            target="_blank"
            aria-label="LinkedIn"
            className="text-5xl"
          >
            <TiSocialLinkedinCircular />
          </a>
          <a
            href="https://github.com/Adityajaiswar11"
            target="_blank"
            aria-label="GitHub"
            className="text-5xl"
          >
            <TiSocialGithubCircular />
          </a>
          <a
            href="https://twitter.com/adityajaiswar_"
            target="_blank"
            aria-label="Twitter"
            className="text-5xl"
          >
            <TiSocialTwitterCircular />
          </a>
        </div>
        <div className="my-6 w-36 mx-auto bg-slate-400 h-0.5"></div>
      </div>
    </div>
  );
}

export default Home;
