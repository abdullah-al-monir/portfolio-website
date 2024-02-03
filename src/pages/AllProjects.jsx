import { useEffect, useState } from "react";
import Title from "../components/Title";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaArrowLeft } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";
const AllProjects = () => {
  const [projects, setProjects] = useState();
  useEffect(() => {
    Aos.init();
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div className="container mx-auto px-10 md:px-20 mt-20">
      <div className="container mx-auto fixed top-1/2 lg:top-20 left-0 lg:left-10">
        <Link to="/">
          <button
            className="text-white flex items-center gap-2 z-30 text-xl rotate-180"
            data-tooltip-id="back"
            data-tooltip-content="Go back"
          >
           <img className="w-12" src="https://media.giphy.com/media/Tv5xsOxaj4xP9sGos7/giphy.gif" alt="right arrow gif" />
          </button>
        </Link>
      </div>
      <Title text={"All Projects"} />
      <div className="grid  grid-cols-1 lg:grid-cols-3 gap-7 ml-5 md:ml-0">
        {projects?.map((p) => (
          <div
            key={p.name}
            className="h-full rounded-2xl hover:scale-105 duration-300"
          >
            <div className="h-[280px] overflow-y-scroll  projectImage rounded-t-2xl">
              <img className="imageHoverScroll" src={p.image} alt="" />
            </div>
            <div>
              <div className="flex flex-col justify-center items-center px-5 py-10 bg-[#144182] rounded-b-2xl">
                <h4 className="text-center text-2xl md:text-3xl text-[#2EDEF5] font-semibold">
                  {p.name}
                </h4>
                <p className="text-xl text-white mt-2">{p.title}</p>
                <div className="flex gap-2 text-xl text-[#2EDEF5] font-semibold my-3 ">
                  <img
                    className="w-7"
                    src="https://media.giphy.com/media/Tv5xsOxaj4xP9sGos7/giphy.gif"
                    alt="right arrow gif"
                  />
                  <a href={p.live} target="_blank" rel="noopener noreferrer">
                    Live Site
                  </a>
                  |
                  <a href={p.front} target="_blank" rel="noopener noreferrer">
                    Front-End
                  </a>
                  {p.back && (
                    <>
                      |
                      <a
                        href={p.back}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Back-End
                      </a>
                    </>
                  )}
                </div>
                <h2 className="text-white text-xl mb-5">Technologies</h2>
                <div className="flex gap-5 items-center flex-wrap">
                  {p.tech.map((t, idx) => (
                    <img key={idx} className="h-5" src={t} alt="" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Tooltip id="back" />
    </div>
  );
};

export default AllProjects;
