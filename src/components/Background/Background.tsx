import React from "react";
import "./Background.css";

interface BackgroundProps {
  perspective: number;
  scale: number;
}

const poemLines = [
  "T is not too late to seek a newer world.",
  "Push off, and sitting well in order smite",
  "The sounding furrows; for my purpose holds",
  "To sail beyond the sunset, and the baths",
  "Of all the western stars, until I die.",
  "It may be that the gulfs will wash us down:",
  "It may be we shall touch the Happy Isles,",
  "And see the great Achilles, whom we knew.",
  "Tho' much is taken, much abides; and tho'",
  "We are not now that strength which in old days",
  "Moved earth and heaven, that which we are, we are;",
  "One equal temper of heroic hearts,",
  "Made weak by time and fate, but strong in will",
  "To strive, to seek, to find, and not to yield.",
];

const Background: React.FC<BackgroundProps> = ({ perspective, scale }) => {
  return (
    <div
      className="background-container"
      style={{
        perspective: `${perspective}px`,
        scale: `${scale}`,
      }}
    >
      <div className="background-box">
        {poemLines.map((line, i) => (
          <span
            key={i}
            className="background-span"
            style={{ "--i": i + 1 } as React.CSSProperties}
          >
            {line}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Background;
