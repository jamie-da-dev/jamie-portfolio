import React, { useRef } from "react";
import "./Card.css";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoPhonePortrait } from "react-icons/io5";

const Card: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!containerRef.current || !overlayRef.current) return;

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

  const handleMouseOut = () => {
    if (!overlayRef.current || !containerRef.current) return;

    overlayRef.current.style.filter = "opacity(0)";
    containerRef.current.style.transform =
      "perspective(350px) rotateY(0deg) rotateX(0deg)";
    containerRef.current.style.transition = "transform 0.5s";
    overlayRef.current.style.transition = "all 0.5s";
  };

  return (
    <div className="background flex-center">
      <div
        className="container"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseOut={handleMouseOut}
      >
        <div className="overlay" ref={overlayRef}></div>
        <div className="card flex-center">
          <div className="card-logo flex-center">
            <img src="./public/card-logo.png" />
          </div>
          <div className="card-contents flex-center">
            <div className="card-contents-name">JAMIE SHIN</div>
            <div className="card-contents-role">Web Developer</div>
            <div className="card-contents-number">
              <IoPhonePortrait className="card-contents-icons" />
              +64-21-205-5088
            </div>
            <div className="card-contents-email">
              <MdEmail className="card-contents-icons" />
              jamietls0801@gmail.com
            </div>
            <div className="card-contents-github">
              <FaGithub className="card-contents-icons" />
              github.com/jamie-da-dev
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
