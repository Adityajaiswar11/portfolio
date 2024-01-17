import React from "react";
import {
  TiSocialFacebookCircular,
  TiSocialTwitterCircular,
  TiSocialLinkedinCircular,
} from "react-icons/ti";
function Home() {
  return (
    <>
      <div className="h-screen ">
        <div className="md:flex md:px-24 text-center md:text-left">
          <div className="md:w-[60%]">
            <h1 className="text-white text-4xl font-bold  pt-8 md:pt-44 ">
              Hii I'am Abhilash Pal
            </h1>
            <h1 className="text-[#E63946]  text-xl py-2 ">
              FullStack Developer
            </h1>
            <p className="text-[#ababab] font-Poppins  font-serif text-sm  pt-2 ">
              I have a strong command over both front-end and back-end
              technologies, allowing me to build complete and scalable
              applications. I’m excited to be part of a team where I can
              contribute my full stack development skills and help create
              innovative and impactful applications
            </p>
            <div className="my-4 md:w-80 w-100 bg-slate-400 h-1"></div>
            <div className="text-white md:py-6 ">
              <button className="bg-[#E63946] rounded-lg h-9 w-36 hover:bg-slate-900">
                View My Resume
              </button>
            </div>
          </div>
          <div className=" md:pt-24 pt-8 md:w-[40%]  grid place-items-center">
            <img
              className="md:h-auto md:w-auto w-80 h-52  "
              src="../../src/images/Homeimg1.png"
              alt="home"
            />
          </div>
        </div>
        <div className=" text-[#E63946] md:px-24  grid md:place-items-start place-items-center ">
          <div className="flex md:pt-7  pt-8">
            <h1>
              <TiSocialFacebookCircular className="text-5xl" />
            </h1>
            <h1>
              <TiSocialTwitterCircular className="text-5xl" />
            </h1>
            <h1>
              <TiSocialLinkedinCircular className="text-5xl" />
            </h1>
          </div>
          <div className="my-1 w-36 bg-slate-400 h-0.5"></div>
        </div>
      </div>
    </>
  );
}

export default Home;
