import { useState, useEffect } from "react";
import { BsGithub } from "react-icons/bs";
import { RiLinkedinBoxLine, RiFacebookBoxLine } from "react-icons/ri";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`w-full fixed z-20`}>
      <div></div>
      <div
        className={`flex gap-10 justify-end items-center py-5 pr-5 md:py-7 md:mp-10`}
      >
        <img
          className={`w-14 transition-all duration-300 ${
            scrollY > 0
              ? "bg-[#040615] bg-opacity-50 backdrop-blur-sm"
              : "bg-transparent"
          }`}
          src="https://media.giphy.com/media/Tv5xsOxaj4xP9sGos7/giphy.gif"
          alt="right arrow gif"
        />
        <a
          className={`transition-all duration-300 ${
            scrollY > 0
              ? "bg-[#040615] bg-opacity-50 backdrop-blur-sm"
              : "bg-transparent"
          }`}
          href="https://www.linkedin.com/in/aam364"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiLinkedinBoxLine className="text-4xl text-white hover:text-[#88afdd] m-2" />
        </a>
        <a
          className={`transition-all duration-300 rounded-full ${
            scrollY > 0
              ? "bg-[#040615] bg-opacity-50 backdrop-blur-sm"
              : "bg-transparent"
          }`}
          href="https://github.com/abdullah-al-monir"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub className="text-3xl text-white hover:text-[#88afdd] m-3" />
        </a>
        <a
          className={`transition-all duration-300 ${
            scrollY > 0
              ? "bg-[#040615] bg-opacity-50 backdrop-blur-sm"
              : "bg-transparent"
          }`}
          href="https://www.facebook.com/aam364"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiFacebookBoxLine className="text-4xl text-white hover:text-[#88afdd] m-2" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
