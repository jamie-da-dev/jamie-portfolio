import "./Intro.css";
import React, { useEffect, useRef, useState } from "react";
import Background from "../Background/Background";

const Intro: React.FC = () => {
  const introRef = useRef<HTMLDivElement>(null);
  const hasExecutedRef = useRef(false);
  const [isVisible, setIsVisible] = useState(false);
  const [perspective, setPerspective] = useState(100);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!introRef.current || hasExecutedRef.current) return;

      const { top } = introRef.current.getBoundingClientRect();
      if (top < 1) {
        setIsVisible(true);

        setPerspective(100);
        setScale(1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Background perspective={perspective} scale={scale} />
      <div ref={introRef} className="intro-background">
        <div className={`intro-contents ${isVisible ? "visible" : "hidden"}`}>
          <div className="intro-heading">
            <div className="intro-typing intro-role-box">
              <span className="intro-role"></span>
            </div>
            <div className="intro-name">
              <div className="intro-name">JAMIE</div>
              <div className="intro-name">SHIN</div>
            </div>
          </div>
          <div className="intro-context">
            <div className="intro-quote">"SOMETIMES </div>
            <div className="intro-quote">YOU NEVER REALISE THE VALUE OF</div>
            <div className="intro-quote">
              A MOMENT UNTIL IT BECOMES A MEMORY" - Dr. Seuss
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
