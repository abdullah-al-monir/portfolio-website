import { AiOutlineHome } from "react-icons/ai";
import { FaRegUser, FaServicestack } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import { GrProjects, GrContact } from "react-icons/gr";
import { SlGraduation } from "react-icons/sl";
import { useState } from "react";
import { GoGoal } from "react-icons/go";
const Sidebar = ({ onPress }) => {
  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isServiceHovered, setIsServiceHovered] = useState(false);
  const [isSkillsHovered, setIsSkillsHovered] = useState(false);
  const [isExperienceHovered, setIsExperienceHovered] = useState(false);
  const [isProjectsHovered, setIsProjectsHovered] = useState(false);
  const [isEducationHovered, setIsEducationHovered] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);

  return (
    <div className="my-auto fixed z-20">
      <div className="col-md-4 col-sm-4 col-lg-4">
        <div className="position-relative w-100">
          <div
            className="position-fixed top-0 ps-1 md:ps-5"
            style={{ marginTop: "calc(60vh/2)" }}
          >
            <a onClick={(e) => onPress(e)} href="#header">
              <div
                data-to-scrollspy-id="header"
                className="section flex items-center gap-2 relative"
                onMouseEnter={() => setIsHomeHovered(true)}
                onMouseLeave={() => setIsHomeHovered(false)}
              >
                <AiOutlineHome className="text-2xl" />
                {isHomeHovered && (
                  <p className="absolute top-0 left-0 pl-16 text-right right-0 bottom-0 hidden md:flex items-center justify-center transition-opacity duration-300 opacity-100">
                    Home
                  </p>
                )}
              </div>
            </a>
            <a onClick={(e) => onPress(e)} href="#about">
              <div
                data-to-scrollspy-id="about"
                className="section flex items-center gap-2 relative"
                onMouseEnter={() => setIsAboutHovered(true)}
                onMouseLeave={() => setIsAboutHovered(false)}
              >
                <FaRegUser className="text-xl" />
                {isAboutHovered && (
                  <p className="absolute top-0 left-0 pl-16 text-right right-0 bottom-0 hidden md:flex items-center justify-center transition-opacity duration-300 opacity-100">
                    About
                  </p>
                )}
              </div>
            </a>
            <a onClick={(e) => onPress(e)} href="#services">
              <div
                data-to-scrollspy-id="services"
                className="section flex items-center gap-2 relative"
                onMouseEnter={() => setIsServiceHovered(true)}
                onMouseLeave={() => setIsServiceHovered(false)}
              >
                <FaServicestack className="text-2xl" />
                {isServiceHovered && (
                  <p className="absolute top-0 left-0 pl-[70px] text-right right-0 bottom-0 hidden md:flex items-center justify-center transition-opacity duration-300 opacity-100">
                    Service
                  </p>
                )}
              </div>
            </a>
            <a onClick={(e) => onPress(e)} href="#skills">
              <div
                data-to-scrollspy-id="skills"
                className="section flex items-center gap-2 relative"
                onMouseEnter={() => setIsSkillsHovered(true)}
                onMouseLeave={() => setIsSkillsHovered(false)}
              >
                <MdOutlineSettings className="text-2xl" />
                {isSkillsHovered && (
                  <p className="absolute top-0 left-0 pl-[60px] text-right right-0 bottom-0 hidden md:flex items-center justify-center transition-opacity duration-300 opacity-100">
                    Skills
                  </p>
                )}
              </div>
            </a>
            <a onClick={(e) => onPress(e)} href="#experience">
              <div
                data-to-scrollspy-id="experience"
                className="section flex items-center gap-2 relative"
                onMouseEnter={() => setIsExperienceHovered(true)}
                onMouseLeave={() => setIsExperienceHovered(false)}
              >
                <GoGoal className="text-2xl" />
                {isExperienceHovered && (
                  <p className="absolute top-0 left-0 pl-[84px] text-right right-0 bottom-0 hidden md:flex items-center justify-center transition-opacity duration-300 opacity-100">
                    Experience
                  </p>
                )}
              </div>
            </a>
            <a onClick={(e) => onPress(e)} href={"#projects"}>
              <div
                data-to-scrollspy-id="projects"
                className="section  flex items-center gap-2 relative"
                onMouseEnter={() => setIsProjectsHovered(true)}
                onMouseLeave={() => setIsProjectsHovered(false)}
              >
                <GrProjects className="text-xl" />

                {isProjectsHovered && (
                  <p className="absolute top-0 left-0 pl-[75px] text-right right-0 bottom-0 hidden md:flex items-center justify-center transition-opacity duration-300 opacity-100">
                    Projects
                  </p>
                )}
              </div>
            </a>
            <a onClick={(e) => onPress(e)} href={"#education"}>
              <div
                data-to-scrollspy-id="education"
                className="section  flex items-center gap-2 relative"
                onMouseEnter={() => setIsEducationHovered(true)}
                onMouseLeave={() => setIsEducationHovered(false)}
              >
                <SlGraduation className="text-2xl" />

                {isEducationHovered && (
                  <p className="absolute top-0 left-0 pl-[85px] text-right right-0 bottom-0 hidden md:flex items-center justify-center transition-opacity duration-300 opacity-100">
                    Education
                  </p>
                )}
              </div>
            </a>
            <a onClick={(e) => onPress(e)} href={"#contact"}>
              <div
                data-to-scrollspy-id="contact"
                className="section  flex items-center gap-2 relative"
                onMouseEnter={() => setIsContactHovered(true)}
                onMouseLeave={() => setIsContactHovered(false)}
              >
                <GrContact className="text-2xl" />

                {isContactHovered && (
                  <p className="absolute top-0 left-0 pl-[75px] text-right right-0 bottom-0 hidden md:flex items-center justify-center transition-opacity duration-300 opacity-100">
                    Contact
                  </p>
                )}
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
