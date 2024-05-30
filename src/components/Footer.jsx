import {
  MdOutlineMarkEmailUnread,
  MdOutlineLocationOn,
  MdOutlinePhone,
} from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const date = new Date();
  const presentYear = date.getFullYear();
  return (
    <div className="">
      <div
        data-aos="fade-up"
        className="container px-6 pt-12 mx-auto text-white"
      >
        <div className="text-center">
          <p className="mt-3 text-xl font-semibold  md:text-2xl">
            Reach Me Anytime
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10  justify-center md:grid-cols-3">
          <div className="flex flex-col items-center justify-center text-center">
            <span className="p-2 border border-[#88afdd] rounded-full text-[#88afdd] ">
              <MdOutlinePhone />
            </span>
            <p className="mt-2 text-[#88afdd] ">+880 1848 384326</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <span className="p-2 border border-[#88afdd] rounded-full text-[#88afdd] ">
              <MdOutlineMarkEmailUnread className="text-lg" />
            </span>
            <p className="mt-2 text-[#88afdd]">abdullahalmonir364@gmail.com</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <span className="p-2 border border-[#88afdd] rounded-full text-[#88afdd] ">
              <MdOutlineLocationOn className="text-md" />
            </span>
            <p className="mt-2 text-[#88afdd]">Chittagong, Bangladesh</p>
          </div>
        </div>
        <div className="flex justify-center mt-10 mb-5">
          <FaRegCopyright className="mr-2 mt-1" />{" "}
          <h4> Abdullah Al Monir {presentYear}. All Rights Reserved.</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
