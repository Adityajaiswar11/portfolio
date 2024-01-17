import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
  FaPhoneAlt,
  FaTelegramPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <div>
      <div className="md:h-screen">
        <div className="flex flex-col">
          <h1 className="text-5xl font-bold text-white text-center py-8">
            Contact Me !
          </h1>
        </div>
        <div className="md:flex">
          <div className="md:w-[70%] pt-4">
            <div className="flex justify-center  ">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-[#262626] text-white pl-8  h-[50px] w-[80%] rounded-lg"
              />
            </div>
            <div className="flex justify-center  py-7">
              <input
                type="email"
                placeholder="Your Email"
                className="bg-[#262626] text-white pl-8  h-[50px] w-[80%] rounded-lg"
              />
            </div>
            <div className="flex justify-center ">
              <textarea
                type="text"
                placeholder="Your Message"
                className="bg-[#262626] text-white pl-8 h-[200px]   w-[80%] rounded-lg"
              />
            </div>
            <div className="flex justify-center py-6">
              <div className="w-[80%] flex md:justify-start justify-center">
                <button className="h-[40px] w-[150px] rounded-lg bg-[#E63946]">
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-[30%] text-white md:items-start items-center flex flex-col gap-5 ">
            <div className="flex items-center gap-4 ">
              <FaTelegramPlane className="text-4xl text-[#E63946]" />
              <h1>abhilashpal128@gmail.com</h1>
            </div>
            <div className="flex items-center gap-4 ">
              <FaPhoneAlt className="text-4xl text-[#E63946]" />
              <h1>+91 8928996887</h1>
            </div>
            <div className="flex gap-4 text-3xl text-[#ababab]  ">
              <FaLinkedin className="hover:text-[#E63946] hover:scale-125 duration-500" />
              <FaGithub className="hover:text-[#E63946] hover:scale-125 duration-500" />
              <FaFacebook className="hover:text-[#E63946] hover:scale-125 duration-500" />
              <FaInstagramSquare className="hover:text-[#E63946] hover:scale-125 duration-500" />
            </div>
            <div className="py-3">
              <button className="h-[40px] bg-[#E63946] rounded-md w-[150px]">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
