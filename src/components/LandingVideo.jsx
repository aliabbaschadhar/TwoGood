import React from "react";
import video from "../assets/video/LandingVideo.mp4";
function LandingVideo() {
  return (
    <>
      <div>
        <video loop muted autoPlay src={video}></video>
        <a>EXPLORE TROUSERS, SHIRTS, JACKETS</a>
      </div>
    </>
  );
}

export default LandingVideo;
