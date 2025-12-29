import {
  MdOutlineMarkEmailUnread,
  MdOutlineLocationOn,
  MdOutlinePhone,
} from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Tooltip } from "react-tooltip";
const Footer = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const date = new Date();
  const presentYear = date.getFullYear();
  return (
    <div className="pb-5">
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
            <a
              href="tel:+8801848384326"
              className="p-2 border border-[#88afdd] rounded-full text-[#88afdd] inline-block"
              data-tooltip-id="contact"
              data-tooltip-content="Call me"
            >
              <MdOutlinePhone className="text-lg" />
            </a>
            <p className="mt-2 text-[#88afdd] ">+880 1848 384326</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <a
              href="mailto:abdullahalmonir364@gmail.com"
              className="p-2 border border-[#88afdd] rounded-full text-[#88afdd] inline-block"
              data-tooltip-id="contact"
              data-tooltip-content="Send email"
            >
              <MdOutlineMarkEmailUnread className="text-lg" />
            </a>
            <p className="mt-2 text-[#88afdd]">abdullahalmonir364@gmail.com</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <a
              href="https://www.google.com/maps/place/Chittagong,+Bangladesh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-[#88afdd] rounded-full text-[#88afdd]"
              data-tooltip-id="contact"
              data-tooltip-content="My location"
            >
              <MdOutlineLocationOn className="text-md" />
            </a>
            <p className="mt-2 text-[#88afdd]">Chittagong, Bangladesh</p>
          </div>
        </div>
        <div className="flex justify-center mt-10 mb-5">
          <FaRegCopyright className="mr-2 mt-1" />{" "}
          <h4> Abdullah Al Monir {presentYear}. All Rights Reserved.</h4>
        </div>
      </div>
      <Tooltip id="contact" />
    </div>
  );
};

export default Footer;
