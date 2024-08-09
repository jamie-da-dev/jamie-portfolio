// Intro.tsx
import "./Intro.css";
import React, { useEffect, useRef, useState } from "react";
import Background from "../Background/Background";
import { Language } from "../../types";

interface IntroProps {
  language: Language;
}

const Intro: React.FC<IntroProps> = ({ language }) => {
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
            <div className="intro-quote">
              {language === "en" && "'SOMETIMES YOU NEVER REALISE"}
              {language === "ko" && ""}
              {language === "ja" && ""}
            </div>
            <div className="intro-quote">
              {language === "en" &&
                "THE VALUE OF A MOMENT UNTIL IT BECOMES A MEMORY'"}
              {language === "ko" && "'내 언어적 한계는 내 세계의 한계다'"}
              {language === "ja" && "'百聞は一見にしかず.'"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
