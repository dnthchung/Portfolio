import React from "react";

const VideoBackground = ({
  videoSource,
  loop = true,
  muted = true,
  className = "",
}) => {
  return (
    <div className={`video-background ${className}`}>
      <video autoPlay loop={loop} muted={muted} className="fill-object">
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
