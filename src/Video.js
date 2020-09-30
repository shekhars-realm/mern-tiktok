import React, {useRef, useState} from 'react';
import './Video.css'
import VideoSidebar from './VideoSidebar';
import VideoFooter from "./VideoFooter";

function Video({url}) {
    const videoRef = useRef(null)
    const [playing, setPlaying] = useState(false)

    const handleVideoPress = () => {
        if(playing) {
            videoRef.current.pause()
            setPlaying(false)
        } else {
            videoRef.current.play()
            setPlaying(true)
        }
    }

    return (
        <div>
            <video
                onClick={handleVideoPress}
                className="video__player" 
                ref={videoRef}
                src={url}
                loop
            >
            </video>
            <VideoSidebar/>
            <VideoFooter channel={'shekhar'} song={'7 years old'} description={'nature'} />
        </div>
    );
}    

export default Video;