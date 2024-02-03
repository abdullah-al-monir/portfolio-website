import { Link } from "react-router-dom";
import Title from "../components/Title";
import { useEffect, useState } from "react";
const Projects = () => {
  const [projects, setProjects] = useState();

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);
  return (
    <div className="container mx-auto px-5 md:px-20">
      <Title text={"Projects"} />

      <div className="grid  grid-cols-1 lg:grid-cols-3 gap-7 md:ml-0 ml-10">
        {projects?.slice(0, 3).map((p) => (
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
                  |
                  <a href={p.back} target="_blank" rel="noopener noreferrer">
                    Back-End
                  </a>
                </div>
                <h2 className="text-white text-xl mb-5">Technologies</h2>
                <div className="flex gap-5 items-center flex-wrap">
                  {p.tech.map((t, idx) => (
                    <img key={idx} className="h-6" src={t} alt="" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center my-10">
        <Link to="/allprojects">
          <button className=" bg-[#88afdd] hover:bg-[#4776b9] focus:ring-4 shadow-lg shadow-[#abb49b]/50 font-semibold rounded-lg px-3 md:px-5 py-1 md:py-2 md:text-lg mb-2">
            See More...
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
