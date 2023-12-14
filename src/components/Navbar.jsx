import { BsGithub } from "react-icons/bs";
import { RiLinkedinBoxLine, RiFacebookBoxLine } from "react-icons/ri";
const Navbar = () => {
  return (
    <div className="w-full fixed z-20">
      <div className="flex gap-10 justify-end items-center mt-5 mr-5 md:mt-10 md:mr-10">
        <img className="w-14" src="https://media.giphy.com/media/Tv5xsOxaj4xP9sGos7/giphy.gif" alt="right arrow gif" />
        <a  href="https://www.linkedin.com/in/aam364" target="_blank" rel="noopener noreferrer">
          <RiLinkedinBoxLine className="text-4xl text-white hover:text-[#88afdd]" />
        </a>
        <a href="https://github.com/abdullah-al-monir" target="_blank" rel="noopener noreferrer">
          <BsGithub className="text-3xl text-white hover:text-[#88afdd]" />
        </a>
        <a href="https://www.facebook.com/aam364" target="_blank" rel="noopener noreferrer">
          <RiFacebookBoxLine className="text-4xl text-white hover:text-[#88afdd]" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
