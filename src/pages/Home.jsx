import { useRef } from "react";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Header from "./Header";
import Projects from "./Projects";
import Skills from "./Skills";
import ScrollSpy from "react-ui-scrollspy";
import "aos/dist/aos.css";
import Services from "./Services";
import Experience from "./Experience";
import Sidebar from "../components/Sidebar";
const Home = () => {
  const onPress = (e) => {
    e.preventDefault();
    const target = window.document.getElementById(
      e.currentTarget.href.split("#")[1]
    );
    if (target) {
      var headerOffset = 20;
      var elementPosition = target.getBoundingClientRect().top;
      var offsetPosition = elementPosition - headerOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  const parentScrollContainerRef = useRef(null);
  return (
    <div ref={parentScrollContainerRef}>
      <Sidebar onPress={onPress} />
      <ScrollSpy
        activeClass="active-section"
        offsetBottom={100}
        scrollThrottle={80}
        useBoxMethod
      >
        <div id="header" className="ml-5 md:ml-0">
          <Header />
        </div>
        <div id="about" className="ml-8 md:ml-0 mb-16 md:mb-20">
          <About />
        </div>
        <div id="skills" className="ml-8 md:ml-0 mb-16 md:mb-20">
          <Skills />
        </div>
        <div id="projects" className="ml-7 md:ml-0 pt-5 mb-16 md:mb-20">
          <Projects />
        </div>
        <div id="experience" className="ml-8 md:ml-0 mb-16 md:mb-20">
          <Experience />
        </div>
        <div id="services" className="ml-7 md:ml-0 mb-16 md:mb-20">
          <Services />
        </div>
        <div id="education" className="ml-7 md:ml-0 mb-16 md:mb-20">
          <Education />
        </div>
        <div id="contact" className="ml-8 md:ml-0 h-[750px] mb-16 md:mb-20">
          <Contact />
        </div>
      </ScrollSpy>
    </div>
  );
};

export default Home;
