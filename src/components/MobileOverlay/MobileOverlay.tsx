import React, { useEffect, useState } from "react";
import "./MobileOverlay.css";

const MobileOverlay: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  if (!isMobile) return null;

  return (
    <div className="mobile-overlay">
      <div className="mobile-overlay-content">
        <span>Will support mobile version soon.</span>
      </div>
    </div>
  );
};

export default MobileOverlay;
