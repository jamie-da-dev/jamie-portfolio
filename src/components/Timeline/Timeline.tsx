import React, { useRef, useEffect, useState } from "react";
import "./Timeline.css";

interface TimelineProps {
  imgSrc: string;
  date: string;
  detail: string;
}

const Timeline: React.FC<TimelineProps> = ({ imgSrc, date, detail }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollRatio, setScrollRatio] = useState(0);

  const handleScroll = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const start = windowHeight;
      const end = windowHeight / 2;

      if (rect.top <= start && rect.top >= end) {
        const ratio = 1 - (rect.top - end) / (start - end);
        setScrollRatio(ratio);
      } else if (rect.top < end) {
        setScrollRatio(1);
      } else {
        setScrollRatio(0);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [month, year] = date.split(".");
  return (
    <div
      ref={ref}
      className="timeline-container-row"
      style={{ transform: `translateX(${(1 - scrollRatio) * -30}%)` }}
    >
      <div className="timeline-row">
        <div className="timeline-container-context">
          <div className="timeline-date">
            <div className="timeline-month">{month}</div>
            <div className="timeline-year">{year}</div>
          </div>
          <div className="timeline-container-detail-pc">{detail}</div>
        </div>
        <div className="timeline-container-img-box">
          <img className="timeline-container-img" src={imgSrc} alt="Event" />
        </div>
      </div>
      <div>
        <div className="timeline-container-detail-mobile">{detail}</div>
      </div>
    </div>
  );
};

export default Timeline;
