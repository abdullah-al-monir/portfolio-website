import Navbar from "../components/Navbar";
import MouseParticles from "react-mouse-particles";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import DisableRightClick from "../components/DisableRightClick";
const Layout = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <MouseParticles
        g={1}
        color="random"
        cull="MuiSvgIcon-root,MuiButton-root"
        level={6}
      />
      <DisableRightClick />
    </div>
  );
};

export default Layout;
