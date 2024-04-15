import {
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
  FaPhoneAlt,
  FaTelegramPlane,
} from "react-icons/fa";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

function Contact() {
  const form = useRef();
  const [loader,setLoader] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();

    if(!e.target.name.value || !e.target.email.value || !e.target.message.value) {
      return toast.error("All fields must be provided!",{position:"top-center",autoClose:2000});
    }
    setLoader(true)
    emailjs
      .sendForm("service_z0wf0vl", "template_extyb5h", form.current, {
        publicKey: "LYWwOwhKu_czBnJxD",
       
      })
      .then(
        () => {
          toast.success("Form submitted! Thanks! ", {
            autoClose: 2000,
            position: "top-center",
          });
          setLoader(false)
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Something went wrong..", {
            autoClose: 2000,
            position: "top-center",
          });
        }
      );
  };
  return (
    <div className="py-16" id="contact">
      <div className="">
        <h1 className="text-5xl font-bold text-white text-center mb-10">
          GET IN TOUCH
        </h1>

        <form className="md:flex" ref={form} onSubmit={handleSubmit}>
          <div className="md:w-[70%] pt-4">
            <div className="flex flex-col  items-center md:flex-row justify-center gap-8 ">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="bg-[#262626] text-white pl-8   h-[50px] w-[80%] md:w-[38%] rounded-lg"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="bg-[#262626] text-white pl-8   h-[50px] w-[80%] md:w-[38%] rounded-lg"
              />
            </div>

            <div className="flex justify-center py-7 ">
              <textarea
                type="text"
                name="message"
                placeholder="Your Message"
                className="bg-[#262626] text-white pl-8 h-[200px]   w-[80%] rounded-lg "
              />
            </div>
            <div className="flex justify-center py-6">
              <div className="w-[80%] flex md:justify-start justify-center">
                <input
                  type="submit"
                  value={loader?"Please Wait...":"Send"}
                  className="py-2 px-4 rounded-lg bg-blue-500 hover:bg-blue-700 duration-300 text-white shadow-md"
                />
              </div>
            </div>
          </div>
          <div className="md:w-[30%] text-white md:items-start items-center flex flex-col gap-5 ">
            <div>
              <div className="flex items-center gap-4 underline ">
                <FaTelegramPlane className="text-2xl text-[#06BF96]" />
                adityajaiswar11@gmail.com
              </div>
            </div>
            <div>
              <div className="flex items-center gap-4 ">
                <FaPhoneAlt className="text-2xl text-[#06BF96]" />
                <span>+91 9152187470</span>
              </div>
            </div>
            <div className="flex gap-4 text-3xl text-[#ababab]  ">
              <a href="https://www.linkedin.com/in/aditya-jaiswar-60a167217/" rel="noreferrer" target="_blank">
                <FaLinkedin className="hover:text-[#00FFFF] hover:scale-125 duration-500" />
              </a>
              <a href="https://github.com/Adityajaiswar11" rel="noreferrer" target="_blank">
                <FaGithub className="hover:text-[#00FFFF] hover:scale-125 duration-500" />
              </a>
              <a href="https://www.instagram.com/adityajaiswar_/" rel="noreferrer" target="_blank" > <FaInstagramSquare className="hover:text-[#00FFFF] hover:scale-125 duration-500"/></a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
