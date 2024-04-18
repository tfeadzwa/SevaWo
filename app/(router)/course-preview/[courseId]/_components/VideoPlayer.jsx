import React from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ videoUrl, youtubeId }) => {
  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <>
      {videoUrl ? (
        <video width={1000} height={250} controls className="rounded-sm">
          <source src={videoUrl} type="video/mp4" />
        </video>
      ) : (
        <YouTube videoId={youtubeId} opts={opts} />
      )}
    </>
  );
};

export default VideoPlayer;
