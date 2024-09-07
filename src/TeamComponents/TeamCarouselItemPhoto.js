import React from 'react'
import TeamCarouselPhoto from "./TeamCarouselDescription";

const TeamCarouselItemPhoto = ({name, profession}) => {

    const memberPhoto = `./source/member_photos/photo_${name}.png`
    return (
        <div>
            <img src = {memberPhoto} className={'carousel-item-photo'}/>
        </div>
    )
}
export default TeamCarouselItemPhoto;