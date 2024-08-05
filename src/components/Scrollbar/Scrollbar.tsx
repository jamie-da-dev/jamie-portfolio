import React, { useEffect, useState } from "react";
import "./Scrollbar.css";

const Scrollbar: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollPosition(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scrollbar-container">
      <div
        className="scrollbar-indicator"
        style={{ top: `${scrollPosition}%` }}
      />
    </div>
  );
};

export default Scrollbar;
