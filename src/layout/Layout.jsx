import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Home from "../pages/Home";
import MouseParticles from "react-mouse-particles";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Layout = () => {
  useEffect(() => {
    Aos.init();
  }, []);
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
  return (
    <div>
      <Navbar />
      <Sidebar onPress={onPress} />
      <div>
        <Home />
      </div>
      <MouseParticles
        g={1}
        color="random"
        cull="MuiSvgIcon-root,MuiButton-root"
        level={6}
      />
    </div>
  );
};

export default Layout;
