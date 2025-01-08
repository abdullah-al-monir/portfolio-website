import Title from "../components/Title";
import image from "../assets/monir.jpg";
import bg from "../assets/aboutBG.png";
const About = () => {
  return (
    <div className="container mx-auto p-5 md:p-10 lg:p-20">
      <Title text={"About Me"} />
      <div className="flex flex-col md:flex-row items-center justify-center gap-7 md:gap-10 lg:gap-20  bg-cover bg-center px-5 md:px-10 lg:px-20 pt-5">
        <div className="">
          <img
            style={{ backgroundImage: `url('${bg}')` }}
            className="mx-auto max-h-[450px]"
            src={image}
            alt=""
          />
        </div>
        <div className="w-3/4 md:w-1/2 mb-10 lg:mb-0">
          <p className="text-md  lg:text-2xl text-white lg:leading-relaxed">
            I am working as a <strong className="text-[#88afdd]">Software Developer</strong> at Synchronise IT. Along with my
            core competencies in the MERN stack, I work closely with ReactJs, NextJs,
            Laravel, Inertia.js, and MySQL in my role. I have a strong desire to
            create faultless online experiences and am always looking to explore
            the newest developments in web technology. I'm excited to pick up
            new skills and keep up with the rapidly changing web development
            scene.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
