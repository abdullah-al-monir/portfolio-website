import { useEffect } from "react";

const DisableRightClick = () => {
  useEffect(() => {
    const blockKeys = (e) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.shiftKey && e.key === "J") ||
        (e.ctrlKey && e.key === "U")
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", (e) => e.preventDefault());
    document.addEventListener("keydown", blockKeys);

    return () => {
      document.removeEventListener("contextmenu", (e) => e.preventDefault());
      document.removeEventListener("keydown", blockKeys);
    };
  }, []);

  return null;
};

export default DisableRightClick;
