import "./AboutMe.css";
import Timeline from "../Timeline/Timeline";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import React, { useRef, useEffect, useState } from "react";
import { Language } from "../../types";
import timelines from "./timelines";

interface AboutMeProps {
  language: Language;
}

const AboutMe: React.FC<AboutMeProps> = ({ language }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollRatio, setScrollRatio] = useState(0);

  const handleScroll = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;

      const ratio = Math.max(
        0,
        Math.min(1, (windowHeight - rect.top) / (windowHeight + elementHeight))
      );
      setScrollRatio(ratio);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="aboutme-contents">
      <div className="aboutme-profile">
        <div className="aboutme-profile-picture">
          <div className="aboutme-header">
            {language === "en" && "PROFILE"}
            {language === "ko" && "프로필"}
            {language === "ja" && "プロフィール"}
          </div>
          <img
            src="https://res.cloudinary.com/dzdr7yyz4/image/upload/v1722076846/profile_efmcam.png"
            alt="Profile"
          />
        </div>
        <div className="aboutme-profile-detail">
          <div className="aboutme-profile-name">
            <div className="aboutme-profile-detail-title">
              {language === "en" && "NAME"}
              {language === "ko" && "이름"}
              {language === "ja" && "名前"}
            </div>
            <div className="aboutme-profile-detail-content">
              {language === "en" && "JAMIE SHIN"}
              {language === "ko" && "신준하"}
              {language === "ja" && "シン・ジュンハ"}
            </div>
          </div>
          <div className="aboutme-profile-dob">
            <div className="aboutme-profile-detail-title">
              {language === "en" && "DOB"}
              {language === "ko" && "생년월일"}
              {language === "ja" && "生年月日"}
            </div>
            <div className="aboutme-profile-detail-content">
              {language === "en" && "01/08/2001"}
              {language === "ko" && "2001년 8월 1일"}
              {language === "ja" && "2001年8月1日"}
            </div>
          </div>
          <div className="aboutme-profile-link">
            <div className="aboutme-profile-detail-title">
              {language === "en" && "ADDRESS"}
              {language === "ko" && "주소"}
              {language === "ja" && "住所"}
            </div>
            <div className="aboutme-profile-detail-content">AKL, NZ</div>
          </div>
          <div className="aboutme-profile-address">
            <div className="aboutme-profile-detail-title aboutme-profile-detail-last">
              {language === "en" && "LINK"}
              {language === "ko" && "링크"}
              {language === "ja" && "リンク"}
            </div>
            <div className="aboutme-profile-detail-content aboutme-profile-detail-last">
              <a
                href="https://www.instagram.com/tls___ha/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram className="aboutme-profile-icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/jamie-da-dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="aboutme-profile-icon" />
              </a>
              <a
                href="https://github.com/jamie-da-dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="aboutme-profile-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutme-timeline">
        <div className="aboutme-timeline-container">
          <div className="aboutme-timeline-container-box">
            {timelines[language].map((event, index) => (
              <Timeline key={index} {...event} />
            ))}
          </div>
        </div>
        <div className="aboutme-timeline-scroll" ref={ref}>
          <div
            className="aboutme-timeline-scroll-img"
            style={{ transform: `translateX(-${scrollRatio * 100}%)` }}
          >
            <img src="https://res.cloudinary.com/dzdr7yyz4/image/upload/v1722090565/banner_vdkojq.png" />
          </div>
        </div>
      </div>
      <div className="aboutme-end"></div>
    </div>
  );
};

export default AboutMe;
