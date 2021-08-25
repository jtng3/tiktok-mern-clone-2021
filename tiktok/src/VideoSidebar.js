import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
//import MessageBorderIcon from "@material-ui/icons/MessageBorder";
//import ShareBorderIcon from "@material-ui/icons/ShareBorder";

function VideoSidebar({ likes, messages, shares }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {liked ? (
          <FavoriteIcon fontSize="Large" onClick={(e) => setLiked(false)} />
        ) : (
          <FavoriteBorderIcon
            fontSize="Large"
            onClick={(e) => setLiked(true)}
          />
        )}
        <p>{liked ? likes + 1 : likes }</p>
      </div>

      <div className="videoSidebar__button">
        <MessageIcon fontSize="Large" />
        <p>{ shares }</p>
      </div>

      <div className="videoSidebar__button">
        <ShareIcon fontSize="Large" />
        <p>{ messages }</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
