import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter.js";
import VideoSidebar from "./VideoSidebar.js";

function Video({
  videoUrl,
  channel,
  description,
  song,
  likes,
  messages,
  shares,
}) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    // if video is playing
    // stop playback ...
    // otherwise if its not playing
    // start playback ...

    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        className="video__player"
        loop
        ref={videoRef}
        src={videoUrl}
        type="video/mp4"
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
      {/* VideoFooter */}
      {/* VideoSidebar */}
    </div>
  );
}

export default Video;
