import React, { useEffect, useRef, useState } from "react";
import Footage from "../Footage/Footage";
import "./Project.css";

const Project: React.FC = () => {
  const projectRef = useRef<HTMLDivElement>(null);
  const itemRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
  const endRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isItemVisible, setIsItemVisible] = useState([false, false]);
  const [isEndVisible, setIsEndVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.01 }
    );

    if (projectRef.current) observer.observe(projectRef.current);
    return () => {
      if (projectRef.current) observer.unobserve(projectRef.current);
    };
  }, []);

  useEffect(() => {
    itemRefs.forEach((ref, index) => {
      const itemObserver = new IntersectionObserver(
        ([entry]) => {
          setIsItemVisible((prev) => {
            const newState = [...prev];
            newState[index] = entry.isIntersecting;
            return newState;
          });
        },
        { threshold: 1.0 }
      );

      if (ref.current) itemObserver.observe(ref.current);
      return () => {
        if (ref.current) itemObserver.unobserve(ref.current);
      };
    });
  }, []);

  useEffect(() => {
    const endObserver = new IntersectionObserver(
      ([entry]) => setIsEndVisible(entry.isIntersecting),
      { threshold: 0.01 }
    );

    if (endRef.current) endObserver.observe(endRef.current);
    return () => {
      if (endRef.current) endObserver.unobserve(endRef.current);
    };
  }, []);

  const handleScroll = () => {
    if (endRef.current) {
      const { top, height } = endRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrolled = Math.min(Math.max((windowHeight - top) / height, 0), 1);
      setScrollProgress(scrolled);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (overlayRef.current) {
      const darkness = 1 - Math.min(scrollProgress * 2, 1);
      overlayRef.current.style.setProperty(
        "--box-shadow-opacity",
        darkness.toString()
      );
    }
  }, [scrollProgress]);

  return (
    <div className="project-container" ref={projectRef}>
      {itemRefs.map((ref, index) => (
        <div
          key={index}
          className={`project-content ${isVisible ? "visible" : "hidden"}`}
        >
          <div
            className={`project-item-box1 ${
              isItemVisible[index] ? "visible" : "hidden"
            }`}
          >
            <div className="project-item-box1-content">
              <div>
                <span>{index === 0 ? "JAMIE SHIN" : "DOBLUE"}</span>
              </div>

              <div>
                <div>
                  <span className="project-typing">
                    {index === 0
                      ? "Built with React and TypeScript, this site showcases my skills, projects, and personality as a web developer. It features dynamic UI elements and detailed project sections, highlighting my expertise in modern web development technologies."
                      : "E-commerce platform focused on footwear, offering features for buying, selling, trading, and restoration. Built with React for the frontend and Node.js with Express and MongoDB on the backend, it provides seamless user interaction and robust data management."}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="project-item" ref={ref}>
            <img
              src={index === 0 ? "public/project1.png" : "public/project2.png"}
            ></img>
          </div>
          <div
            className={`project-item-box2 ${
              isItemVisible[index] ? "visible" : "hidden"
            }`}
          >
            <div className="project-item-box2-content">
              <div className="project-item-box-github">
                <div>
                  <span>:GITHUB</span>
                </div>
                <div>
                  <span>
                    {index === 0
                      ? "https://github.com/jamie-da-dev/jamie-portfolio"
                      : "Starts in August"}
                  </span>
                </div>
              </div>
              <div className="project-item-box-url">
                <div>
                  <span>:LINK</span>
                </div>
                <div>
                  <span>
                    {" "}
                    {index === 0
                      ? "https://github.com/jamie-da-dev/jamie-portfolio"
                      : "Starts in August"}
                  </span>
                </div>
              </div>
              <div className="project-item-box-frontend">
                <div>
                  <span>:SKILLS</span>
                </div>
                <div>
                  <span>
                    {index === 0
                      ? "Typescript, React"
                      : "Typescript, React, Node.js, MongoDB"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="project-end" ref={endRef}></div>
      <div
        className={`project-overlay ${
          isVisible ? (isEndVisible ? "bothVisible" : "visible") : "hidden"
        }`}
        ref={overlayRef}
      ></div>
      <Footage></Footage>
    </div>
  );
};

export default Project;
