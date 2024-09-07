import React, {useState} from 'react'

const MapObject = ({object_name}) => {
    const[hover, setHover] = useState(false);
    const HoverImage = `./public/source/object_images/${object_name}_outline.png`;
    const UnhoverImage = `./public/source/object_images/${object_name}.png`;
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