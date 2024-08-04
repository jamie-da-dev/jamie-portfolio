import "./AboutMe.css";
import Timeline from "../Timeline/Timeline";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import React, { useRef, useEffect, useState } from "react";

const timelines = [
  {
    imgSrc:
      "https://res.cloudinary.com/dzdr7yyz4/image/upload/v1722068924/aboutme1_rguyxo.jpg",
    date: "08.2001",
    detail: "Born in August 2001, marking the beginning of my journey.",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/dzdr7yyz4/image/upload/v1722068927/aboutme2_ze5kay.jpg",
    date: "03.2008",
    detail:
      "Embarked on my educational journey by starting elementary school, eager to learn and grow.",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/dzdr7yyz4/image/upload/v1722068923/aboutme3_rh7bqs.jpg",
    date: "06.2013",
    detail:
      "Significant life change by immigrating from Korea to New Zealand, embracing a new culture and environment.",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/dzdr7yyz4/image/upload/v1722068930/aboutme4_nkw6rw.jpg",
    date: "06.2020",
    detail:
      "Milestone in my personal life as I got married, starting a new chapter with my partner.",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/dzdr7yyz4/image/upload/v1722068926/aboutme5_jwcnml.jpg",
    date: "05.2024",
    detail:
      "Proudly graduated from the University of Auckland with a Bachelor of Science in Computer Science.",
  },
];

const AboutMe: React.FC = () => {
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
          <div className="aboutme-header">PROFILE</div>
          <img
            src="https://res.cloudinary.com/dzdr7yyz4/image/upload/v1722076846/profile_efmcam.png"
            alt="Profile"
          ></img>
        </div>
        <div className="aboutme-profile-detail">
          <div className="aboutme-profile-name">
            <div className="aboutme-profile-detail-title">NAME</div>
            <div className="aboutme-profile-detail-content">JAMIE SHIN</div>
          </div>
          <div className="aboutme-profile-dob">
            <div className="aboutme-profile-detail-title">DOB</div>
            <div className="aboutme-profile-detail-content">01/08/2001</div>
          </div>
          <div className="aboutme-profile-link">
            <div className="aboutme-profile-detail-title">ADDRESS</div>
            <div className="aboutme-profile-detail-content">
              AUCKLAND, NEW ZEALAND
            </div>
          </div>
          <div className="aboutme-profile-address">
            <div className="aboutme-profile-detail-title aboutme-profile-detail-last">
              LINK
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
            {timelines.map((event, index) => (
              <Timeline key={index} {...event} />
            ))}
          </div>
        </div>
        <div className="aboutme-timeline-scroll" ref={ref}>
          <div
            className="aboutme-timeline-scroll-img"
            style={{ transform: `translateX(-${scrollRatio * 100}%)` }}
          >
            <img src="https://res.cloudinary.com/dzdr7yyz4/image/upload/v1722090565/banner_vdkojq.png"></img>
          </div>
        </div>
      </div>
      <div className="aboutme-end"></div>
    </div>
  );
};

export default AboutMe;