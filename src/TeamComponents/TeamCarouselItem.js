import React from 'react'

const TeamCarouselItem = ({name, profession}) => {

    const memberPhoto = `./source/member_photos/photo_${name}.png`
    return (
        <div>
            <img src = {memberPhoto} className={'carousel-item-photo'}/>
            <p className = {'member-name'}>{name}</p>
            <p className={'member-profession'}>{profession}</p>
        </div>
    )
}
export default TeamCarouselItem;