import { AiOutlineHome } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import { GrProjects, GrContact } from "react-icons/gr";
import { SlGraduation } from "react-icons/sl";
const Sidebar = ({ onPress }) => {
  return (
    <div className="my-auto fixed z-20">
      <div className="col-md-4 col-sm-4 col-lg-4">
        <div className="position-relative w-100">
          <div
            className="position-fixed top-0 ps-5"
            style={{ marginTop: "calc(60vh/2)" }}
          >
            <a onClick={(e) => onPress(e)} href={"#header"}>
              <div
                data-to-scrollspy-id="header"
                className="section  flex items-center gap-2 relative"
              >
                <AiOutlineHome className="text-2xl" />
                <p className="absolute top-0 left-0 pl-16 text-right right-0 bottom-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                  Home
                </p>
              </div>
            </a>
            <a onClick={(e) => onPress(e)} href={"#about"}>
              <div
                data-to-scrollspy-id="about"
                className="section  flex items-center gap-2 relative"
              >
                <FaRegUser className="text-xl" />
                <p className="absolute top-0  left-0 pl-16 text-right right-0 bottom-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                  About
                </p>
              </div>
            </a>
            <a onClick={(e) => onPress(e)} href={"#skills"}>
              <div
                data-to-scrollspy-id="skills"
                className="section  flex items-center gap-2 relative"
              >
                <MdOutlineSettings className="text-2xl" />

                <p className="absolute top-0 left-0 pl-[60px] text-right right-0 bottom-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                  Skills
                </p>
              </div>
            </a>
            <a onClick={(e) => onPress(e)} href={"#projects"}>
              <div
                data-to-scrollspy-id="projects"
                className="section  flex items-center gap-2 relative"
              >
                <GrProjects className="text-xl" />

                <p className="absolute top-0 left-0 pl-[75px] text-right right-0 bottom-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                  Projects
                </p>
              </div>
            </a>
            <a onClick={(e) => onPress(e)} href={"#education"}>
              <div
                data-to-scrollspy-id="education"
                className="section  flex items-center gap-2 relative"
              >
                <SlGraduation className="text-2xl" />

                <p className="absolute top-0 left-0 pl-[85px] text-right right-0 bottom-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                  Education
                </p>
              </div>
            </a>
            <a onClick={(e) => onPress(e)} href={"#contact"}>
              <div
                data-to-scrollspy-id="contact"
                className="section  flex items-center gap-2 relative"
              >
                <GrContact className="text-2xl" />

                <p className="absolute top-0 left-0 pl-[75px] text-right right-0 bottom-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                  Contact
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
