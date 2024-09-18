import React from 'react'
import './MediaStyles.css'

const MediaPlayer = ({name}) => {
    const trailer = `./source/videos/${name}.mp4`
    return (
        <div className='video-container'>
            <video className="video-player"  autoPlay={true} >
                <source src={trailer}/>
            </video>
        </div>
    );
}

export default MediaPlayer;