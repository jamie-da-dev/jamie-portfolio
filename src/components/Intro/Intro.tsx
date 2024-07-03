import "./Intro.css";
import React, { useEffect, useRef, useState } from "react";

const Intro: React.FC = () => {
  const introRef = useRef<HTMLDivElement>(null);
  const hasExecutedRef = useRef(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!introRef.current || hasExecutedRef.current) return;

      const { top } = introRef.current.getBoundingClientRect();
      if (top < 1) {
        setIsVisible(true);

        window.scrollTo({ top: window.scrollY + top, behavior: "smooth" });

        document.body.style.overflow = "hidden";
        setTimeout(() => {
          document.body.style.overflow = "auto";
        }, 2000);

        hasExecutedRef.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={introRef} className="intro-background">
      <div className={`intro-contents ${isVisible ? "visible" : "hidden"}`}>
        <div className="intro-heading">Hello World</div>
      </div>
    </div>
  );
};

export default Intro;
