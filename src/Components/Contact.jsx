import {
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaTelegramPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <div className="py-16" id="contact">
      <div className="">
        <h1 className="text-5xl font-bold text-white text-center mb-10">
          GET IN TOUCH
        </h1>

        <form className="md:flex">
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
                <button className="py-2 px-4 rounded-lg bg-blue-500 hover:bg-blue-700 duration-300 text-white shadow-md">
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-[30%] text-white md:items-start items-center flex flex-col gap-5 ">
            <div>
              <a href="#" className="flex items-center gap-4 underline ">
                <FaTelegramPlane className="text-2xl text-[#06BF96]" />
                adityajaiswar11@gmail.com
              </a>
            </div>
            <div>
              <a href="#" className="flex items-center gap-4 ">
                <FaPhoneAlt className="text-2xl text-[#06BF96]" />
                <span>+91 9152187470</span>
              </a>
            </div>
            <div className="flex gap-4 text-3xl text-[#ababab]  ">
              <a href="" target="_blank">
                <FaLinkedin className="hover:text-[#00FFFF] hover:scale-125 duration-500" />
              </a>
              <a href="" target="_blank">
                <FaGithub className="hover:text-[#00FFFF] hover:scale-125 duration-500" />
              </a>
            </div>
           
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
