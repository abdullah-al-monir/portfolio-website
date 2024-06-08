import { useEffect, useState } from "react";
import Title from "../components/Title";
import Aos from "aos";
import "aos/dist/aos.css";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";
import MouseParticles from "react-mouse-particles";
import Footer from "../components/Footer";
import { SyncLoader } from "react-spinners";
const AllProjects = () => {
  const [projects, setProjects] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      });
    Aos.init();
  }, [setLoading]);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        <SyncLoader
          color="#2EDEF5"
          className="h-10 w-10 text-center text-secondary"
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-10 md:px-20 mt-20">
      <MouseParticles
        g={1}
        color="random"
        cull="MuiSvgIcon-root,MuiButton-root"
        level={6}
      />
      <div className="container mx-auto fixed top-1/2 lg:top-20 left-0 lg:left-10">
        <Link to="/">
          <button
            className="text-white flex items-center gap-2 z-30 text-xl rotate-180"
            data-tooltip-id="back"
            data-tooltip-content="Go back"
          >
            <img
              className="w-12"
              src="https://media.giphy.com/media/Tv5xsOxaj4xP9sGos7/giphy.gif"
              alt="right arrow gif"
            />
          </button>
        </Link>
      </div>
      <Title text={"All Projects"} />
      <div className="grid  grid-cols-1 lg:grid-cols-3 gap-7 ml-5 mb-10 md:ml-0">
        {projects?.map((p) => (
          <div data-aos="zoom-in" key={p.name} className="h-full rounded-2xl">
            <div className="h-[280px] overflow-y-scroll  projectImage rounded-t-2xl">
              <img className="imageHoverScroll" src={p.image} alt="" />
            </div>
            <div>
              <div className="flex flex-col justify-center items-center px-5 py-10 bg-[#144182] rounded-b-2xl">
                <h4 className="text-center text-2xl md:text-3xl text-[#2EDEF5] font-semibold">
                  {p.name}
                </h4>
                <p className="text-xl text-white mt-2">{p.title}</p>
                <div className="flex 2xl:flex-row lg:flex-col md:flex-row flex-col justify-center gap-2 text-xl text-[#2EDEF5] font-semibold my-3 w-full">
                  <img
                    className="w-7 hidden 2xl:block"
                    src="https://media.giphy.com/media/Tv5xsOxaj4xP9sGos7/giphy.gif"
                    alt="right arrow gif"
                  />
                  <div className="flex items-center justify-center gap-2">
                    <img
                      className="w-7 2xl:hidden"
                      src="https://media.giphy.com/media/Tv5xsOxaj4xP9sGos7/giphy.gif"
                      alt="right arrow gif"
                    />
                    <a href={p.live} target="_blank" rel="noopener noreferrer">
                      Live Site
                    </a>
                  </div>
                  {/* <p className="hidden 2xl:block">|</p>
                  <div className="flex items-center justify-center gap-2 flex-start">
                    <img
                      className="w-7 2xl:hidden"
                      src="https://media.giphy.com/media/Tv5xsOxaj4xP9sGos7/giphy.gif"
                      alt="right arrow gif"
                    />
                    <a href={p.front} target="_blank" rel="noopener noreferrer">
                      Front-End
                    </a>
                  </div>
                  {p.back && (
                    <>
                      <p className="hidden 2xl:block">|</p>
                      <div className="flex items-center justify-end gap-2 flex-start">
                        <img
                          className="w-7 2xl:hidden"
                          src="https://media.giphy.com/media/Tv5xsOxaj4xP9sGos7/giphy.gif"
                          alt="right arrow gif"
                        />
                        <a
                          href={p.back}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Back-End
                        </a>
                      </div>
                    </>
                  )} */}
                </div>
                <h2 className="text-white text-xl mb-5">Technologies</h2>
                <div className="flex gap-5 justify-center items-center flex-wrap">
                  {p.tech.map((t, idx) => (
                    <img key={idx} className="h-6" src={t} alt="" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
        x
      </div>
      <Footer />
      <Tooltip id="back" />
    </div>
  );
};

export default AllProjects;
