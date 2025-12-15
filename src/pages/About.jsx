import Title from "../components/Title";
import image from "../assets/monir.jpg";
import bg from "../assets/aboutBG.png";
const About = () => {
  return (
    <div className="container mx-auto p-5 md:p-10 lg:p-20">
      <Title text={"About Me"} />
      <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-7 md:gap-10 lg:gap-20  bg-cover bg-center px-5 md:px-10 lg:px-20 pt-5">
        <div className="">
          <img
            style={{ backgroundImage: `url('${bg}')` }}
            className="mx-auto max-h-[450px]"
            src={image}
            alt=""
          />
        </div>
        <div className="w-3/4 md:w-1/2 mb-10 lg:mb-0">
          <p className="text-md md:text-right lg:text-xl text-white lg:leading-relaxed">
            I am a versatile and passionate Web Developer with nearly two years of professional experience building and maintaining high-quality web applications. I possess strong full-stack proficiency across the MERN stack (MongoDB, Express, React.js, Node.js), complemented by expertise in the Laravel ecosystem. I specialize in creating dynamic user interfaces using Next.js and React.js, styled efficiently with Tailwind CSS. My technical toolkit also includes managing complex MySQL databases, integrating services like Paymob, and handling deployment configurations using Nginx, PM2, and VPS environments (Debian OS). I am actively seeking a junior/mid-level role where I can contribute my skills to deliver robust and faultless online experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
