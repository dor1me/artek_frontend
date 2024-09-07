import React from 'react'

const TeamCarouselItemPhoto = ({name}) => {

    const memberPhoto = `./source/member_photos/photo_${name}.png`
    return (
        <div>
            <img src = {memberPhoto} className={'carousel-item-photo'}/>
        </div>
    )
}
export default TeamCarouselItemPhoto;