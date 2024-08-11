import React, { useEffect, useState } from "react";
import "./Scrollbar.css";

const Scrollbar: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHorizontal, setIsHorizontal] = useState(window.innerWidth <= 768);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const additionalHeight = window.innerHeight / 2; // Added additional height for the Footage component.
    const docHeight =
      document.documentElement.scrollHeight -
      window.innerHeight +
      additionalHeight;

    const scrolled = (scrollTop / docHeight) * 100;
    setScrollPosition(scrolled);
  };

  const handleResize = () => {
    setIsHorizontal(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="scrollbar-container">
      <div
        className="scrollbar-indicator"
        style={
          isHorizontal
            ? { left: `${scrollPosition}%` }
            : { top: `${scrollPosition}%` }
        }
      />
    </div>
  );
};

export default Scrollbar;
