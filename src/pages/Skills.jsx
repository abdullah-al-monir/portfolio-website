import Title from "../components/Title";
import mongoDB from "../assets/logos/mongoDB.png";
import reactJs from "../assets/logos/reactJs.png";
import expressJs from "../assets/logos/expressJs.png";
import jwt from "../assets/logos/jwt.png";
import firebase from "../assets/logos/firebase.png";
import materialUi from "../assets/logos/materialUi.png";
import tailwind from "../assets/logos/tailwind.png";
import nodeJs from "../assets/logos/nodeJs.png";
import vercel from "../assets/logos/vercel.png";
import html from "../assets/logos/html.png";
import css from "../assets/logos/css.png";
import javascript from "../assets/logos/javascript.png";
import surge from "../assets/logos/surge.png";
import netlify from "../assets/logos/netlify.png";
import github from "../assets/logos/github.png";
import bootstrap from "../assets/logos/bootstrap.png";
import es6 from "../assets/logos/es6.png";
import api from "../assets/logos/api.png";
import nextjs from "../assets/logos/nextjs.webp";
import { Slide } from "react-awesome-reveal";
import { Tooltip } from "react-tooltip";
const Skills = () => {
  return (
    <div className="container mx-auto p-5 md:px-20 overflow-hidden">
      <Title text={"My Skills"} />
      <div className="text-center mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <Slide>
          <div className="flex flex-col justify-center items-center mb-5 px-5 bg-[#144182] rounded-2xl h-full">
            <h2 className="text-white text-2xl my-5">Expertise</h2>
            <div className="flex gap-5 md:gap-10 my-5 items-center flex-wrap">
              <img
                data-tooltip-id="skills"
                data-tooltip-content="HTML"
                className="h-9 md:h-12"
                src={html}
                alt=""
              />
              <img
                data-tooltip-id="skills"
                data-tooltip-content="Vanilla CSS"
                className="h-9 md:h-12"
                src={css}
                alt=""
              />
              <img
                data-tooltip-id="skills"
                data-tooltip-content="JavaScript"
                className="h-9 md:h-12"
                src={javascript}
                alt=""
              />
              <img
                data-tooltip-id="skills"
                data-tooltip-content="ReactJs"
                className="h-9 md:h-10"
                src={reactJs}
                alt=""
              />
              <img
                data-tooltip-id="skills"
                data-tooltip-content="Tailwind CSS"
                className="h-5 md:h-7"
                src={tailwind}
                alt=""
              />
            </div>
          </div>
        </Slide>
        <Slide direction="right">
          <div className="flex flex-col justify-center items-center mb-5 px-5 bg-[#144182] rounded-2xl h-full">
            <h2 className="text-white text-2xl my-5">Comfortable</h2>
            <div className="flex gap-5 md:gap-10 my-5 items-center flex-wrap">
              <img
                data-tooltip-id="skills"
                data-tooltip-content="MongoDB"
                className="h-9 md:h-12"
                src={mongoDB}
                alt=""
              />
              <img
                data-tooltip-id="skills"
                data-tooltip-content="ExpressJs"
                className="h-8 md:h-10"
                src={expressJs}
                alt=""
              />
              <img
                data-tooltip-id="skills"
                data-tooltip-content="NodeJs"
                className="h-9 md:h-12"
                src={nodeJs}
                alt=""
              />
              <img
                data-tooltip-id="skills"
                data-tooltip-content="ES6"
                className="h-8 md:h-11"
                src={es6}
                alt=""
              />
              <img
                data-tooltip-id="skills"
                data-tooltip-content="RESTful API"
                className="h-10 md:h-14"
                src={api}
                alt=""
              />
            </div>
          </div>
        </Slide>
        <Slide>
          <div className="flex flex-col justify-center items-center mb-5 px-5 bg-[#144182] rounded-2xl h-full">
            <h2 className="text-white text-2xl my-5">Familiar</h2>
            <div className="flex gap-5 md:gap-10 mt-5 mb-7 items-center flex-wrap">
              <img
                data-tooltip-id="skills"
                data-tooltip-content="Bootstrap"
                className="h-8 md:h-10"
                src={bootstrap}
                alt=""
              />
              <img
                data-tooltip-id="skills"
                data-tooltip-content="NextJs"
                className="h-8 md:h-10"
                src={nextjs}
                alt=""
              />
              <img
                data-tooltip-id="skills"
                data-tooltip-content="JsonWebToken"
                className="h-8 md:h-10"
                src={jwt}
                alt=""
              />
              <img
                data-tooltip-id="skills"
                data-tooltip-content="Material UI"
                className="h-8 md:h-12"
                src={materialUi}
                alt=""
              />
            </div>
          </div>
        </Slide>
        <Slide direction="right">
          <div className="flex flex-col justify-center items-center mb-5 px-5 bg-[#144182] rounded-2xl h-full">
            <h2 className="text-white text-2xl my-5">Hosting</h2>
            <div className="flex gap-5 md:gap-10 mt-5 mb-7 items-center flex-wrap">
              <img
                data-tooltip-id="skills"
                data-tooltip-content="Github"
                className="h-8 md:h-10"
                src={github}
                alt=""
              />
              <img
                data-tooltip-id="skills"
                data-tooltip-content="Firebase"
                className="h-8 md:h-10"
                src={firebase}
                alt=""
              />
              <img
                data-tooltip-id="skills"
                data-tooltip-content="Surge"
                className="h-8 md:h-10"
                src={surge}
                alt=""
              />
              <img
                data-tooltip-id="skills"
                data-tooltip-content="Netlify"
                className="h-8 md:h-10"
                src={netlify}
                alt=""
              />
              <img
                data-tooltip-id="skills"
                data-tooltip-content="Vercel"
                className="h-7 md:h-8"
                src={vercel}
                alt=""
              />
            </div>
          </div>
        </Slide>
      </div>
      <Tooltip id="skills" />
    </div>
  );
};

export default Skills;
