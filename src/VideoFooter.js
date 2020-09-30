import React from 'react';
import './VideoFooter.css'
import MusicIcon from '@material-ui/icons/MusicNote'
import Ticker from 'react-ticker'

const VideoFooter = ({channel, description, song}) => {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div class="videoFooter__ticker">
                    <MusicIcon className="videoFooter_icon"/>
                    <Ticker mode='smooth'>
                        {
                            ({index}) => (
                                <>
                                    <p>{song}</p>
                                </>
                            )
                        }
                    </Ticker>
                </div>
            </div>
            <img src="https://static.thenounproject.com/png/934821-200.png" alt="" class="videoFooter__record"/>
        </div>
    );
};

export default VideoFooter;   