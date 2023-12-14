import Title from "../components/Title";
import image from "../assets/monir.png";
import bg from "../assets/aboutBG.png";
const About = () => {
  return (
    <div className="container mx-auto p-5 md:p-20">
      <Title text={"About Me"} />
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-20  bg-cover bg-center px-5 md:px-10 lg:px-20 pt-10">
        <div className="px-10">
          <img
            style={{ backgroundImage: `url('${bg}')` }}
            className="mx-auto"
            src={image}
            alt=""
          />
        </div>
        <div className="w-3/4 md:w-1/2 mb-10 lg:mb-0">
          <p className="text-md  lg:text-2xl text-white lg:leading-relaxed">
            I'm a junior front-end developer with MERN Stack expertise. I'm
            eager to get started in the field and am looking for an internship
            or full-time position where I can use my love of building flawless
            online experiences. I'm a committed and motivated individual who
            learns and grows best in team settings. Together, let's work to
            create something incredible!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
