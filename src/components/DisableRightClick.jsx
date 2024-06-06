import { useEffect } from "react";

const DisableRightClick = () => {
  useEffect(() => {
    const disableRightClick = (event) => {
      event.preventDefault();
    };
    document.addEventListener("contextmenu", disableRightClick);
    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);

  return null;
};

export default DisableRightClick;
