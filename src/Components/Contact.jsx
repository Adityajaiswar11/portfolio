/* eslint-disable react/jsx-no-target-blank */
import { useState } from "react";
import {
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
  FaPhoneAlt,
  FaTelegramPlane,
} from "react-icons/fa";
import { PropagateLoader } from "react-spinners";
import { toast } from "react-toastify";


const color = "#00FFFF";


function Contact() {
  const [isActiveLoader, setIsActiveLoader] = useState(false);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsActiveLoader(true);
    try {
      const Data = {
        name: e.target.Name.value,
        email: e.target.Email.value,
        message: e.target.Message.value,
        subject: e.target.Subject.value,
      };
      if (!Data.name || !Data.email || !Data.message || !Data.message) {
        toast.error("All fields are required");
        setIsActiveLoader(false);
      } else {
        const Saveresponse = await SaveEmail(Data);
        if (Saveresponse.success === true) {
          console.log("Email Saved Successfully");
        } else {
          console.log(Saveresponse);
          toast.error("Enter Valid Email");
          setIsActiveLoader(false);
        }

        const Sendresponse = await SendEmail(Data);
        if (Sendresponse.success === true) {
          toast.success("Email Sent Successfully");
          setIsActiveLoader(false);
        } else {
          console.log(Sendresponse);
          toast.error("Enter Valid Email");
          setIsActiveLoader(false);
        }
      }
    } catch (error) {
      toast.error("something went wrong");
      setIsActiveLoader(false);
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
      <div className="">
       
          <h1 className="text-5xl font-bold text-white text-center mb-10">
            GET IN TOUCH 
          </h1>


        <form onSubmit={handleContactSubmit} className="md:flex">
          {isActiveLoader && (
            <div className=" absolute flex backdrop-blur-sm md:w-[65%] w-[100%]  flex-col md:h-[65%] h-[67%] justify-center items-center gap-3 ">
              <div>
                <label className="text-white text-3xl">Sending Mail....</label>
              </div>
              <div className="">
                <PropagateLoader
                  color={color}
                  size={25}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
            </div>
          )}
          <div className="md:w-[70%] pt-4">
            <div className="flex flex-col  items-center md:flex-row justify-center gap-8 ">
              <input
                type="text"
                id="Name"
                placeholder="Your Name"
                className="bg-[#262626] text-white pl-8   h-[50px] w-[80%] md:w-[38%] rounded-lg"
              />
              <input
                type="text"
                id="Email"
                placeholder="Your Email"
                className="bg-[#262626] text-white pl-8   h-[50px] w-[80%] md:w-[38%] rounded-lg"
              />
            </div>
            <div className="flex justify-center  py-7">
              <input
                type="text"
                id="Subject"
                placeholder="Enter Subject"
                className="bg-[#262626] text-white pl-8  h-[50px] w-[80%] rounded-lg  "
              />
            </div>
            <div className="flex justify-center ">
              <textarea
                type="text"
                id="Message"
                placeholder="Your Message"
                className="bg-[#262626] text-white pl-8 h-[200px]   w-[80%] rounded-lg "
              />
            </div>
            <div className="flex justify-center py-6">
              <div className="w-[80%] flex md:justify-start justify-center">
                <button className="py-2 px-4 rounded-lg bg-slate-900 text-white shadow-md">
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
                className="flex items-center gap-4 underline "
              >
                <FaTelegramPlane className="text-2xl text-[#06BF96]" />
                adityajaiswar11@gmail.com
              </a>
            </div>
            <div>
              <a
                href="#"
                onClick={handlePhoneClick}
                className="flex items-center gap-4 "
              >
                <FaPhoneAlt className="text-2xl text-[#06BF96]" />
                <span>+91 9152187470</span>
              </a>
            </div>
            <div className="flex gap-4 text-3xl text-[#ababab]  ">
              <a
                href=""
                target="_blank"
              >
                <FaLinkedin className="hover:text-[#00FFFF] hover:scale-125 duration-500" />
              </a>
              <a href="" target="_blank">
                <FaGithub className="hover:text-[#00FFFF] hover:scale-125 duration-500" />
              </a>
            </div>
            <div className="py-3">
              <button className=" bg-slate-900 text-white py-2 px-5 opacity-90  rounded-md font-semibold hover:border duration-300 delay-300">
                Download Resume
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
