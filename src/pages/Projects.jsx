import Title from "../components/Title";
import automotive from "../assets/automotive.png";
import nexgen from "../assets/nexgen.png";
import workAtlas from "../assets/workAtlas.png";
import mongoDB from "../assets/logos/mongoDB.png";
import reactJs from "../assets/logos/reactJs.png";
import expressJs from "../assets/logos/expressJs.png";
import jwt from "../assets/logos/jwt.png";
import firebase from "../assets/logos/firebase.png";
import materialUi from "../assets/logos/materialUi.png";
import tailwind from "../assets/logos/tailwind.png";
import nodeJs from "../assets/logos/nodeJs.png";
import html from "../assets/logos/html.png";
import css from "../assets/logos/css.png";
import { Zoom } from "react-awesome-reveal";
const Projects = () => {
  return (
    <div className="container mx-auto px-5 md:px-20">
      <Title text={"Projects"} />
      <div className="grid  grid-cols-1 lg:grid-cols-3 gap-7">
        <Zoom>
          <div className="h-full rounded-2xl">
            <div className="h-[300px] overflow-y-scroll projectImage rounded-t-2xl">
              <img className="" src={automotive} alt="" />
            </div>
            <div>
              <div className="flex flex-col justify-center items-center px-5 py-10 bg-[#144182] rounded-b-2xl">
                <h4 className="text-center text-2xl md:text-3xl text-[#2EDEF5] font-semibold">
                  Automotive Oasis
                </h4>
                <p className="text-xl text-white mt-2">
                  A car showroom website
                </p>
                <div className="flex gap-2 text-xl text-[#2EDEF5] font-semibold my-3 ">
                  <img
                    className="w-7"
                    src="https://media.giphy.com/media/Tv5xsOxaj4xP9sGos7/giphy.gif"
                    alt="right arrow gif"
                  />
                  <a
                    href="https://automotive-oasis.web.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Site
                  </a>
                  |
                  <a
                    href="https://github.com/abdullah-al-monir/online-car-shop-client"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Front-End
                  </a>
                  |
                  <a
                    href="https://github.com/abdullah-al-monir/online-car-shop-server"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Back-End
                  </a>
                </div>
                <h2 className="text-white text-xl mb-5">Technologies</h2>
                <div className="flex gap-5 items-center flex-wrap">
                  <img className="h-7" src={html} alt="" />
                  <img className="h-7" src={css} alt="" />
                  <img className="h-6" src={reactJs} alt="" />
                  <img className="h-4" src={tailwind} alt="" />
                  <img className="h-7" src={mongoDB} alt="" />
                  <img className="h-6" src={nodeJs} alt="" />
                  <img className="h-5" src={firebase} alt="" />
                  <img className="h-5" src={expressJs} alt="" />
                </div>
              </div>
            </div>
          </div>
        </Zoom>
        <Zoom>
          <div className="h-full rounded-2xl">
            <div className="h-[300px] overflow-y-scroll  projectImage rounded-t-2xl">
              <img className="" src={nexgen} alt="" />
            </div>
            <div>
              <div className="flex flex-col justify-center items-center px-5 py-10 bg-[#144182] rounded-b-2xl">
                <h4 className="text-center text-2xl md:text-3xl text-[#2EDEF5] font-semibold">
                  NexGen Diagnosis
                </h4>
                <p className="text-xl text-white mt-2">
                  A diagnostic center website
                </p>
                <div className="flex gap-2 text-xl text-[#2EDEF5] font-semibold my-3 ">
                  <img
                    className="w-7"
                    src="https://media.giphy.com/media/Tv5xsOxaj4xP9sGos7/giphy.gif"
                    alt="right arrow gif"
                  />
                  <a
                    href="https://nexgen-diagnosia.web.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Site
                  </a>
                  |
                  <a
                    href="https://github.com/abdullah-al-monir/nexgen-diagnosia-client"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Front-End
                  </a>
                  |
                  <a
                    href="https://github.com/abdullah-al-monir/nexgen-diagnosia-server"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Back-End
                  </a>
                </div>
                <h2 className="text-white text-xl mb-5">Technologies</h2>
                <div className="flex gap-5 items-center flex-wrap">
                  <img className="h-7" src={html} alt="" />
                  <img className="h-7" src={css} alt="" />
                  <img className="h-6" src={reactJs} alt="" />
                  <img className="h-7" src={materialUi} alt="" />
                  <img className="h-7" src={mongoDB} alt="" />
                  <img className="h-6" src={nodeJs} alt="" />
                  <img className="h-5" src={firebase} alt="" />
                  <img className="h-5" src={expressJs} alt="" />
                  <img className="h-5" src={jwt} alt="" />
                </div>
              </div>
            </div>
          </div>
        </Zoom>
        <Zoom>
          <div className="h-full rounded-2xl">
            <div className="h-[300px] overflow-y-scroll projectImage rounded-t-2xl">
              <img className="" src={workAtlas} alt="" />
            </div>
            <div>
              <div className="flex flex-col justify-center items-center px-5 py-10 rounded-b-2xl bg-[#144182]">
                <h4 className="text-center text-2xl md:text-3xl text-[#2EDEF5] font-semibold">
                  Work Atlas
                </h4>
                <p className="text-xl text-white mt-2">
                  A job recruitment website
                </p>
                <div className="flex gap-2 text-xl text-[#2EDEF5] font-semibold my-3 ">
                  <img
                    className="w-7"
                    src="https://media.giphy.com/media/Tv5xsOxaj4xP9sGos7/giphy.gif"
                    alt="right arrow gif"
                  />
                  <a
                    href="https://work-atlas.web.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Site
                  </a>
                  |
                  <a
                    href="https://github.com/abdullah-al-monir/work-atlas-client"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Front-End
                  </a>
                  |
                  <a
                    href="https://github.com/abdullah-al-monir/work-atlas-server"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Back-End
                  </a>
                </div>
                <h2 className="text-white text-xl mb-5">Technologies</h2>
                <div className="flex gap-5 items-center flex-wrap">
                  <img className="h-7" src={html} alt="" />
                  <img className="h-7" src={css} alt="" />
                  <img className="h-6" src={reactJs} alt="" />
                  <img className="h-4" src={tailwind} alt="" />
                  <img className="h-7" src={mongoDB} alt="" />
                  <img className="h-6" src={nodeJs} alt="" />
                  <img className="h-5" src={firebase} alt="" />
                  <img className="h-5" src={expressJs} alt="" />
                  <img className="h-5" src={jwt} alt="" />
                </div>
              </div>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Projects;
