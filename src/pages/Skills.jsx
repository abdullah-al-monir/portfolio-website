import Title from "../components/Title";
import mongoDB from "/logos/mongoDB.png";
import reactJs from "/logos/reactJs.png";
import expressJs from "/logos/expressJs.png";
import jwt from "/logos/jwt.png";
import firebase from "/logos/firebase.png";
import materialUi from "/logos/materialUi.png";
import tailwind from "/logos/tailwind.png";
import nodeJs from "/logos/nodeJs.png";
import vercel from "/logos/vercel.png";
import html from "/logos/html.png";
import css from "/logos/css.png";
import javascript from "/logos/javascript.png";
import surge from "/logos/surge.png";
import netlify from "/logos/netlify.png";
import github from "/logos/github.png";
import bootstrap from "/logos/bootstrap.png";
import es6 from "/logos/es6.png";
import api from "/logos/api.png";
import nextjs from "/logos/nextjs.webp";
import laravel from "/logos/laravel.png";
import php from "/logos/php.png";
import mysql from "/logos/mysql.png";
import typescript from "/logos/typescript.png";
import { Tooltip } from "react-tooltip";

const Skills = () => {
  return (
    <div className="container mx-auto p-5 md:px-20 overflow-hidden ">
      <Title text={"My Skills"} />
      <div className="text-center mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 ml-10 md:ml-0">
        <div
          data-aos="fade-right"
          className="flex flex-col justify-center items-center mb-5 px-5 bg-[#144182] rounded-2xl h-full"
        >
          <h2 className="text-white text-2xl my-5">Expertise</h2>
          <div className="flex gap-5 md:gap-10 my-5 items-center justify-center flex-wrap">
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
              data-tooltip-content="PHP"
              className="h-9 md:h-14"
              src={php}
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

        <div
          data-aos="fade-left"
          className="flex flex-col justify-center items-center mb-5 px-5 bg-[#144182] rounded-2xl h-full"
        >
          <h2 className="text-white text-2xl my-5">Comfortable</h2>
          <div className="flex gap-5 md:gap-10 my-5 justify-center items-center flex-wrap">
            <img
              data-tooltip-id="skills"
              data-tooltip-content="NextJs"
              className="h-8 md:h-10"
              src={nextjs}
              alt=""
            />
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
              data-tooltip-content="Laravel"
              className="h-8 md:h-14"
              src={laravel}
              alt=""
            />
            <img
              data-tooltip-id="skills"
              data-tooltip-content="ES6"
              className="h-8 md:h-10"
              src={es6}
              alt=""
            />
            <img
              data-tooltip-id="skills"
              data-tooltip-content="RESTful API"
              className="h-10 md:h-12"
              src={api}
              alt=""
            />
          </div>
        </div>
        <div
          data-aos="fade-right"
          className="flex flex-col justify-center items-center mb-5 px-5 bg-[#144182] rounded-2xl h-full"
        >
          <h2 className="text-white text-2xl my-5">Familiar</h2>
          <div className="flex gap-5 md:gap-10 mt-5 mb-7 justify-center items-center flex-wrap">
            <img
              data-tooltip-id="skills"
              data-tooltip-content="Bootstrap"
              className="h-8 md:h-10"
              src={bootstrap}
              alt=""
            />
            <img
              data-tooltip-id="skills"
              data-tooltip-content="Typescript"
              className="h-8 md:h-10"
              src={typescript}
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
            <img
              data-tooltip-id="skills"
              data-tooltip-content="MySQL"
              className="h-8 md:h-12"
              src={mysql}
              alt=""
            />
          </div>
        </div>

        <div
          data-aos="fade-left"
          className="flex flex-col justify-center items-center mb-5 px-5 bg-[#144182] rounded-2xl h-full"
        >
          <h2 className="text-white text-2xl my-5">Hosting</h2>
          <div className="flex gap-5 md:gap-10 mt-5 mb-7 justify-center items-center flex-wrap">
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
      </div>
      <Tooltip id="skills" />
    </div>
  );
};

export default Skills;
