import React, {useState} from 'react';
import './VideoSidebar.css'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";

const VideoSidebar = () => {
    const [liked, setLiked] = useState(false)
    return (
      <div class="videoSidebar">
        <div class="videoSidebar__button">
          <FavoriteIcon fontSize="large" />
          <p>100</p>
        </div>
        <div class="videoSidebar__button">
          <MessageIcon fontSize="large" />
          <p>250</p>
        </div>
        <div class="videoSidebar__button">
          <ShareIcon fontSize="large" />
          <p>30</p>
        </div>
      </div>
    );
};

export default VideoSidebar;