import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
  FaPhoneAlt,
  FaTelegramPlane,
} from "react-icons/fa";
import { SaveEmail, SendEmail } from "../Apis/ContactApi";
import { toast } from "react-toastify";

function Contact() {
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    try {
      const Data = {
        name: e.target.Name.value,
        email: e.target.Email.value,
        message: e.target.Message.value,
        subject: e.target.Subject.value,
      };
      if (!Data.name || !Data.email || !Data.message || !Data.message) {
        toast.error("All fields are required");
      } else {
        const Saveresponse = await SaveEmail(Data);
        if (Saveresponse.success === true) {
          console.log("Email Saved Successfully");
        } else {
          console.log(Saveresponse);
          toast.error("Enter Valid Email");
        }

        const Sendresponse = await SendEmail(Data);
        if (Sendresponse.success === true) {
          toast.success("Email Sent Successfully");
        } else {
          console.log(Sendresponse);
          toast.error("Enter Valid Email");
        }
      }
    } catch (error) {
      toast.error("something went wrong");
    }
  };
  const handleEmailClick = (event) => {
    event.preventDefault();
    const mailtoLink = `mailto:${JSON.stringify(
      import.meta.env.VITE_REACT_APP_MY_Email
    )}`;
    window.location.href = mailtoLink;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${JSON.stringify(
      import.meta.env.VITE_REACT_APP_MY_PhoneNO
    )}`;
  };

  return (
    <div className="py-16" id="contact">
      <div className="md:h-screen">
        <div className="flex flex-col">
          <h1 className="text-5xl font-bold text-white text-center py-8">
            Contact Me !
          </h1>
        </div>

        <form onSubmit={handleContactSubmit} className="md:flex">
          <div className="md:w-[70%] pt-4">
            <div className="flex flex-col  items-center md:flex-row justify-center gap-8 ">
              <input
                type="text"
                id="Name"
                placeholder="Your Name"
                className="bg-[#262626] text-white pl-8 border-2 border-[#06BF96] shadow-md shadow-[#06BF96]  h-[50px] w-[80%] md:w-[38%] rounded-lg"
              />
              <input
                type="text"
                id="Email"
                placeholder="Your Email"
                className="bg-[#262626] text-white pl-8 border-2 border-[#06BF96] shadow-md shadow-[#06BF96]  h-[50px] w-[80%] md:w-[38%] rounded-lg"
              />
            </div>
            <div className="flex justify-center  py-7">
              <input
                type="text"
                id="Subject"
                placeholder="Enter Subject"
                className="bg-[#262626] text-white pl-8  h-[50px] w-[80%] rounded-lg border-2 border-[#06BF96] shadow-md shadow-[#06BF96] "
              />
            </div>
            <div className="flex justify-center ">
              <textarea
                type="text"
                id="Message"
                placeholder="Your Message"
                className="bg-[#262626] text-white pl-8 h-[200px]   w-[80%] rounded-lg border-2 border-[#00FFFF] shadow-md shadow-[#00FFFF] "
              />
            </div>
            <div className="flex justify-center py-6">
              <div className="w-[80%] flex md:justify-start justify-center">
                <button className="h-[40px] w-[150px] rounded-lg bg-slate-900 text-white shadow-md borger-2 border-black shadow-[#00FFFF] ">
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-[30%] text-white md:items-start items-center flex flex-col gap-5 ">
            <div>
              <a
                href="#"
                onClick={handleEmailClick}
                className="flex items-center gap-4 "
              >
                <FaTelegramPlane className="text-4xl text-[#06BF96]" />
                abhilashpal128@gmail.com
              </a>
            </div>
            <div>
              <a
                href="#"
                onClick={handlePhoneClick}
                className="flex items-center gap-4 "
              >
                <FaPhoneAlt className="text-4xl text-[#06BF96]" />
                <h1>+91 8928996887</h1>
              </a>
            </div>
            <div className="flex gap-4 text-3xl text-[#ababab]  ">
              <a
                href="https://www.linkedin.com/in/abhilashpal8928/"
                target="_blank"
              >
                <FaLinkedin className="hover:text-[#00FFFF] hover:scale-125 duration-500" />
              </a>
              <a href="https://github.com/Abhilashpal128" target="_blank">
                <FaGithub className="hover:text-[#00FFFF] hover:scale-125 duration-500" />
              </a>
              <a
                href="https://www.facebook.com/abhilash.pal.9638"
                target="_blank"
              >
                <FaFacebook className="hover:text-[#00FFFF] hover:scale-125 duration-500" />
              </a>
              <a
                href="https://www.instagram.com/abhilash.pal.9638/"
                target="_blabk"
              >
                <FaInstagramSquare className="hover:text-[#00FFFF] hover:scale-125 duration-500" />
              </a>
            </div>
            <div className="py-3">
              <button className="h-[40px] bg-slate-900 text-white shadow-md shadow-[#06BF96]   rounded-md w-[150px]">
                Download CV
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
