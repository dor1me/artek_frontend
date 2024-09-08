import React from 'react'

const MediaPlayer = () => {
    return (
    <video className="video-player" controls>
        <source src="/public/source/videos/trailer.mp4" type="video/mp4" />
    </video>
    );
}

export default MediaPlayer;