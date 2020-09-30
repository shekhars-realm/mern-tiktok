import React, {useRef, useState} from 'react';
import './Video.css'
import VideoSidebar from './VideoSidebar';
import VideoFooter from "./VideoFooter";

function Video(props) {
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
                src="/videos/coverr-lake-view-1572182181649.mp4" 
                loop
            >
            </video>
            <VideoSidebar/>
            <VideoFooter/>
        </div>
    );
}    

export default Video;