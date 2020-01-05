import React from "react";
import video from "../video/php-video.mp4";

const BackgroundVideo = () => {
  return (
    <div className="background-video-container">
      <h1>How PHP works.</h1>
      <video className="videoTag" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
