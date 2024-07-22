import "./AboutMe.css";
import Timeline from "../Timeline/Timeline";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const timelines = [
  {
    imgSrc: "aboutme1.jpeg",
    date: "08.2001",
    detail: "Born in August 2001, marking the beginning of my journey.",
  },
  {
    imgSrc: "aboutme2.jpeg",
    date: "03.2008",
    detail:
      "Embarked on my educational journey by starting elementary school, eager to learn and grow.",
  },
  {
    imgSrc: "aboutme3.jpeg",
    date: "06.2013",
    detail:
      "Significant life change by immigrating from Korea to New Zealand, embracing a new culture and environment.",
  },
  {
    imgSrc: "aboutme4.jpeg",
    date: "06.2020",
    detail:
      "Milestone in my personal life as I got married, starting a new chapter with my partner.",
  },
  {
    imgSrc: "aboutme5.jpeg",
    date: "05.2024",
    detail:
      "Proudly graduated from the University of Auckland with a Bachelor of Science in Computer Science, celebrating years of hard work and dedication to my studies.",
  },
];

const AboutMe: React.FC = () => {
  return (
    <div className="aboutme-contents">
      <div className="aboutme-profile">
        <div className="aboutme-profile-picture">
          <div className="aboutme-header">PROFILE</div>
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"></img>
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
      </div>
      <div className="aboutme-end"></div>
    </div>
  );
};

export default AboutMe;
