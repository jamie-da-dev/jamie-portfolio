import React, { useState, useEffect, useRef } from "react";
import "./Card.css";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoPhonePortrait } from "react-icons/io5";

const Card: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const [scale, setScale] = useState(1);
  const [color, setColor] = useState(40); //Original Background Color is rgb(40, 40, 40).

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

    // Reset the Transition affected by handleMouseOut
    containerRef.current.style.transition = "all 0.1s";
    overlayRef.current.style.transition = "all 0.1s";
  };

  const handleMouseEnter = () => {
    document.body.style.overflow = "hidden";
  };

  const handleMouseLeave = () => {
    console.log("Out");
    if (!overlayRef.current || !containerRef.current) return;

    document.body.style.overflow = "auto";

    overlayRef.current.style.filter = "opacity(0)";
    containerRef.current.style.transform =
      "perspective(350px) rotateY(0deg) rotateX(0deg)";
    containerRef.current.style.transition = "transform 0.5s";
    overlayRef.current.style.transition = "all 0.5s";
  };

  const handleScroll = () => {
    if (!containerRef.current) return;

    containerRef.current.style.transition = "transform 0.1s";

    const scrollY = window.scrollY;
    const newScale = Math.max(0, 1 - scrollY / 1000);
    const backgroundColor = Math.max(0, 40 - scrollY / 35);

    setColor(backgroundColor);
    setScale(newScale);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
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
              <img src="./public/card-logo.png" />
            </a>
          </div>
          <div className="card-contents">
            <div className="card-contents-name">
              <a
                href="https://www.instagram.com/tls___ha/"
                target="_blank"
                rel="noopener noreferrer"
              >
                JAMIE SHIN
              </a>
            </div>
            <div className="card-contents-role">Web Developer</div>
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
                github.com/jamie-da-dev/
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
