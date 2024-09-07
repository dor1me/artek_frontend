import React from 'react';

const TeamCarouselPhoto = ({name, profession}) => {
    return (
        <div>
            <p className = {'member-name'}>{name}</p>
            <p className={'member-profession'}>{profession}</p>
        </div>
    )
}

export default TeamCarouselPhoto;