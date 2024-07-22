import "./AboutMe.css";
import Timeline from "../Timeline/Timeline";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const timelines = [
  {
    imgSrc: "aboutme1.jpeg",
    date: "08.2001",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imgSrc: "aboutme2.jpeg",
    date: "03.2008",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imgSrc: "aboutme3.jpeg",
    date: "06.2013",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imgSrc: "aboutme4.jpeg",
    date: "06.2020",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imgSrc: "aboutme5.jpeg",
    date: "05.2024",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
              <AiFillInstagram className="aboutme-profile-icon" />
              <FaLinkedin className="aboutme-profile-icon" />
              <FaGithub className="aboutme-profile-icon" />
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
