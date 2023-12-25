import { useEffect, useRef } from "react";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Header from "./Header";
import Projects from "./Projects";
import Skills from "./Skills";
import ScrollSpy from "react-ui-scrollspy";
import Aos from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const parentScrollContainerRef = useRef(null);
  return (
    <div ref={parentScrollContainerRef}>
      <ScrollSpy
        activeClass="active-section"
        offsetBottom={100}
        scrollThrottle={80}
        useBoxMethod
      >
        <div id="header" className="h-[500px] md:h-[600px] lg:h-[800px] mb-20">
          <Header />
        </div>
        <div id="about" className="mb-20">
          <About />
        </div>
        <div id="skills" className="mb-20">
          <Skills />
        </div>
        <div id="projects" className="mb-20">
          <Projects />
        </div>
        <div id="education" className="mb-20">
          <Education />
        </div>
        <div id="contact" className="h-[750px] mb-20">
          <Contact />
        </div>
      </ScrollSpy>
    </div>
  );
};

export default Home;
