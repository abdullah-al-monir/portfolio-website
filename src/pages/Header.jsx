import Typewriter from "typewriter-effect";
import { RiDownload2Line } from "react-icons/ri";
const Header = () => {
  return (
    <div className="h-full bg-cover bg-center flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-20   p-20 ">
      <div className="mt-40 md:mt-0 ">
        <img
          className="w-1/2 md:w-3/4 lg:w-full mx-auto"
          src="https://media.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif"
          alt=""
        />
      </div>
      <div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold md:mb-3  lg:mb-5 text-white leading-10">
          Welcome!
        </h2>
        <div className="text-3xl md:text-4xl lg:text-5xl font-bold md:mb-3  lg:mb-5 text-white leading-10 flex items-end flex-wrap gap-2">
          <p>I am </p> <h2>Abdullah Al Monir,</h2>
        </div>
        <div className="text-xl md:text-2xl lg:text-4xl font-semibold text-[#88afdd]">
          <Typewriter
            options={{
              strings: [
                "A Software Developer",
                "A MERN Stack Developer",
                "A Frontend Developer",
                "A ReactJs Developer",
                "A JavaScript Developer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="my-10 w-full mx-auto">
          <a
            href="https://drive.google.com/uc?export=download&id=1NwCiZm7Ff4a7jSmyhJMf4DEzSi86PN4t"
            download="Resume of Abdullah Al Monir.pdf"
          >
            <button
              type="button"
              className=" bg-[#88afdd] hover:bg-[#4776b9] focus:ring-4 shadow-lg shadow-[#abb49b]/50 font-semibold rounded-lg px-3 md:px-5 py-1 md:py-2 md:text-lg me-2 mb-2 flex items-center gap-2 uppercase"
            >
              Resume <RiDownload2Line className="text-lg" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
