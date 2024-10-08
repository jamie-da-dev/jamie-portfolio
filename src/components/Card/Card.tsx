import React, { useState, useRef, useEffect } from "react";
import { Language } from "../../types";
import "./Card.css";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoPhonePortrait } from "react-icons/io5";

interface CardProps {
  language: Language;
}

const Card: React.FC<CardProps> = ({ language }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const [scale, setScale] = useState(1);
  const [color, setColor] = useState(200); //Original Background Color is rgb(200, 200, 200).

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!containerRef.current || !overlayRef.current || !backgroundRef.current)
      return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((centerX - x) / centerX) * 20;
    const rotateX = ((centerY - y) / centerY) * 20;

    containerRef.current.style.transform = `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    overlayRef.current.style.filter = `opacity(${x / 450}) brightness(0.4)`;
    overlayRef.current.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.2) 10%, transparent) 50%`;

    containerRef.current.style.transition = "all 0.1s";
    overlayRef.current.style.transition = "all 0.1s";
  };

  const handleMouseEnter = () => {
    document.documentElement.style.overflow = "hidden";
  };

  const handleMouseLeave = () => {
    if (!overlayRef.current || !containerRef.current) return;

    document.documentElement.style.overflow = "auto";

    overlayRef.current.style.filter = "opacity(0)";
    containerRef.current.style.transform =
      "perspective(350px) rotateY(0deg) rotateX(0deg)";
    containerRef.current.style.transition = "transform 0.5s";
    overlayRef.current.style.transition = "all 0.5s";
  };

  const handleScroll = () => {
    if (!containerRef.current || !backgroundRef.current) return;

    containerRef.current.style.transition = "transform 0.1s";

    const rect = backgroundRef.current.getBoundingClientRect();
    const scrollY = window.scrollY;
    const backgroundHeight = rect.height;

    const newScale = Math.max(0, 1 - (scrollY / backgroundHeight) * 2);
    const backgroundColor = Math.max(
      0,
      200 - (scrollY / backgroundHeight) * 400
    );

    setColor(backgroundColor);
    setScale(newScale);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="card-background flex-center"
      ref={backgroundRef}
      style={{ backgroundColor: `rgb(${color}, ${color}, ${color})` }}
    >
      <div
        className="card-container"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ transform: `scale(${scale})` }}
      >
        <div className="overlay" ref={overlayRef}></div>
        <div className="card flex-center">
          <div className="card-logo flex-center">
            <a
              href="https://www.linkedin.com/in/jamie-da-dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://res.cloudinary.com/dzdr7yyz4/image/upload/v1722068922/card-logo_g0ukoy.png" />
            </a>
          </div>
          <div className="card-contents">
            <div className="card-contents-name">
              <a
                href="https://www.linkedin.com/in/jamie-da-dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {language === "en" && "JAMIE SHIN"}
                {language === "ko" && "신준하"}
                {language === "ja" && "シン・ジュンハ"}
              </a>
            </div>
            <div className="card-contents-role">
              {language === "en" && "Developer"}
              {language === "ko" && "개발자"}
              {language === "ja" && "開発者"}
            </div>
            <div className="card-contents-number">
              <IoPhonePortrait className="card-contents-icons" />
              <a href="tel:+64212591874">+64-21-205-5088</a>
            </div>
            <div className="card-contents-email">
              <MdEmail className="card-contents-icons" />
              <a
                href="mailto:jamietls0801@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                jamietls0801@gmail.com
              </a>
            </div>
            <div className="card-contents-github">
              <FaGithub className="card-contents-icons" />
              <a
                href="https://github.com/jamie-da-dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/jamie-da-dev
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
