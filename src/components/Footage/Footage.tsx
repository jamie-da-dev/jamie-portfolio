import "./Footage.css";
import React, { useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";

const Footage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  const videoIds = [
    "pxh4EfQHsUw",
    "teio2vZLUj4",
    "1Tw8tVNpaVE",
    "JW3NBRpjBJM",
    "7iZFiPqVG7A",
  ];

  const randomVideoId = videoIds[Math.floor(Math.random() * videoIds.length)];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.01 }
    );

    if (endRef.current) observer.observe(endRef.current);
    return () => {
      if (endRef.current) observer.unobserve(endRef.current);
    };
  }, []);

  return (
    <div className="footage">
      <div className="footage-content">
        <div className={`footage-box ${isVisible ? "visible" : "hidden"}`}>
          {" "}
          <div className="footage-overlay"></div>
          <YouTube
            className="footage-video"
            videoId={randomVideoId}
            opts={{
              height: "225",
              width: "400",
              playerVars: {
                autoplay: 1,
                controls: 0,
                rel: 0,
                showinfo: 0,
                mute: 1,
                loop: 1,
                modestbranding: 1,
                playlist: randomVideoId,
              },
            }}
          />
        </div>
      </div>
      <div className="footage-end" ref={endRef}></div>
    </div>
  );
};

export default Footage;
