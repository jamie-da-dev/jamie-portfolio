import React from "react";
import "./Timeline.css";

interface TimelineProps {
  imgSrc: string;
  date: string;
  detail: string;
}

const Timeline: React.FC<TimelineProps> = ({ imgSrc, date, detail }) => {
  const [month, year] = date.split(".");
  return (
    <div className="timeline-container-row">
      <div className="timeline-container-img-box">
        <img className="timeline-container-img" src={imgSrc} alt="Event" />
      </div>

      <div className="timeline-container-context">
        <div className="timeline-date">
          <div className="timeline-month">.{month}</div>
          <div className="timeline-year">{year}</div>
        </div>
        <div className="timeline-container-detail">{detail}</div>
      </div>
    </div>
  );
};

export default Timeline;
