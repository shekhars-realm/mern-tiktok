import React, {useState} from 'react';
import './VideoSidebar.css'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";

const VideoSidebar = ({ likes, messages, shares}) => {
    const [liked, setLiked] = useState(false)
    return (
      <div class="videoSidebar">
        <div class="videoSidebar__button">
            {
                liked ? (
                    <FavoriteIcon fontSize="large" onClick={(e) => setLiked(false)} />
                ) : (
                    <FavoriteBorderIcon onClick={(e) => setLiked(true)} fontSize="large"/>
                )
            }
          <p>10  0</p>
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