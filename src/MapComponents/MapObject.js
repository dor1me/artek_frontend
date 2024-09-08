import React, {useState} from 'react'
import './MapStyles.css';

const MapObject = ({object_name}) => {
    const[hover, setHover] = useState(false);
    const HoverImage = `/source/object_images/${object_name}_outline.png`;
    const UnhoverImage = `/source/object_images/${object_name}.png`;
    const mapObjectImage = hover ? HoverImage : UnhoverImage;

    return (
        <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        >
            <img src = {mapObjectImage} className={'map-object'}/>

        </div>
    )
}

export default MapObject;