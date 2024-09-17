import React from 'react'
import './MediaStyles.css'

const MediaPlayer = () => {
    return (
        <div className='video-container'>
            <video className="video-player" controls='controls'>
                <source src="./source/videos/olive.mp4"/>
            </video>
        </div>

    );
}

export default MediaPlayer;