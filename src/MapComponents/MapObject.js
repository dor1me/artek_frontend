import React, {useState} from 'react'

const MapObject = ({object_name}) => {
    const[hover, setHover] = useState(false);
    const HoverImage = `/source/object_images/${object_name}_outline.jpg`;
    const UnhoverImage = `/source/object_images/${object_name}.jpg`;
    const mapObjectImage = hover ? HoverImage : UnhoverImage;

    return (
        <div
        className={'map-object'}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        >
            <img src = {mapObjectImage}/>

        </div>
    )
}

export default MapObject;