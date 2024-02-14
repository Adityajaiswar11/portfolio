import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const links = [
    { title: "Home", path: "home" },
    { title: "About", path: "about" },
    { title: "Skills", path: "skills" },
    { title: "Projects", path: "project" },
    { title: "Contact", path: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("div[id]");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          window.scrollY >= sectionTop - sectionHeight * 0.5 &&
          window.scrollY < sectionTop + sectionHeight - sectionHeight * 0.5
        ) {
          setActiveLink(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="md:px-[70px] w-full fixed  top-0 left-0 z-50  bg-gradient-to-r from-[#071b2e] to-[#000000]   ">
      <div className="flex justify-between h-16 items-center text-white ">
        <h1 className="text-2xl md:pl-6  pl-4 font-bold">Aditya.</h1>
        <div className="hidden text-white font-bold md:flex text-lg">
          {links.map((data) => (
            <Link
              key={Math.random()}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              to={data.path}
            >
              <ul className="md:flex hidden md:pr-8 pr-6 hover:cursor-pointer">
                <li
                  key={Math.random()}
                  className={`relative tracking-[1px]  cursor-pointer ${
                    activeLink === data.path ? "text-[#00FFFF]" : "text-white"
                  }`}
                >
                  {data.title}
                </li>
              </ul>
            </Link>
          ))}
        </div>
        <div
          onClick={() => setNav(!nav)}
          className="md:hidden text-xl text-white cursor-pointer pr-5 z-10"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <div className="  flex flex-col justify-center items-center absolute top-0 left-0 h-screen w-full text-2xl font-bold bg-zinc-950">
            {links.map((data) => (
              <Link
                key={Math.random()}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                to={data.path}
              >
                <ul>
                  <li
                    key={Math.random()}
                    onClick={() => setNav(!nav)}
                    className={`relative tracking-[1px] my-5  cursor-pointer ${
                      activeLink === data.path ? "text-[#00FFFF]" : "text-white"
                    }`}
                  >
                    {data.title}
                  </li>
                </ul>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;


