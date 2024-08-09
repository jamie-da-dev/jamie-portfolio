import React, { useEffect, useRef, useState } from "react";
import Footage from "../Footage/Footage";
import "./Project.css";
import { Language } from "../../types";

interface ProjectProps {
  language: Language;
}

const Project: React.FC<ProjectProps> = ({ language }) => {
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
      const colour = 220 - Math.min(scrollProgress * 2 * 220, 220);
      overlayRef.current.style.setProperty(
        "--box-shadow-colour",
        colour.toString()
      );
    }
  }, [scrollProgress]);

  const projectDescriptions = {
    en: [
      "Built with React and TypeScript, this site showcases my skills, projects, and personality as a web developer. It features dynamic UI elements and detailed project sections, highlighting my expertise in modern web development technologies.",
      "E-commerce platform focused on footwear, offering features for buying, selling, trading, and restoration. Built with React for the frontend and Node.js with Express and MongoDB on the backend, it provides seamless user interaction and robust data management.",
    ],
    ko: [
      "React와 TypeScript로 구축된 이 사이트는 저의 웹 개발자로서의 기술, 프로젝트, 그리고 개성을 보여줍니다. 동적인 UI 요소와 상세한 프로젝트 섹션을 통해 현대 웹 개발 기술에 대한 저의 전문성을 강조합니다.",
      "신발에 중점을 둔 전자상거래 플랫폼으로, 구매, 판매, 거래, 복원 기능을 제공합니다. 프론트엔드는 React로, 백엔드는 Node.js와 Express, 그리고 MongoDB로 구축되어 원활한 사용자 상호작용과 강력한 데이터 관리를 제공합니다.",
    ],
    ja: [
      "ReactとTypeScriptで構築されたこのサイトは、私のウェブ開発者としてのスキル、プロジェクト、そして個性を紹介します。動的なUI要素や詳細なプロジェクトセクションを通じて、現代のウェブ開発技術に対する私の専門知識を強調しています。",
      "靴に特化した電子商取引プラットフォームで、購入、販売、取引、修復機能を提供します。フロントエンドはReactで、バックエンドはNode.jsとExpress、そしてMongoDBで構築され、シームレスなユーザーインタラクションと強力なデータ管理を提供します。",
    ],
  };

  const projectStart = {
    en: "Starts in August",
    ko: "8월에 시작",
    ja: "8月に開始",
  };

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
                    {projectDescriptions[language][index]}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="project-item" ref={ref}>
            <img
              src={
                index === 0
                  ? "https://res.cloudinary.com/dzdr7yyz4/image/upload/v1722068923/project1_o5oz3z.png"
                  : "https://res.cloudinary.com/dzdr7yyz4/image/upload/v1722068924/project2_ikbsmo.png"
              }
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
                    {index === 0 ? (
                      <a
                        href="https://github.com/jamie-da-dev/jamie-portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://github.com/jamie-da-dev/jamie-portfolio
                      </a>
                    ) : (
                      projectStart[language]
                    )}
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
                    {index === 0 ? (
                      <a
                        href="https://jamie-da-dev.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        jamie-da-dev.com
                      </a>
                    ) : (
                      projectStart[language]
                    )}
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
                      ? "TypeScript, React"
                      : "TypeScript, React, Node.js, MongoDB"}
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
