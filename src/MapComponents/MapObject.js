import React, {useState} from 'react'

const MapObject = (/*{object_name}*/) => {
    const[hover, setHover] = useState(false);
    // const HoverImage = `./public/source/object_images/${object_name}_outline.png`;
    // const UnhoverImage = `./public/source/object_images/${object_name}.png`;
    const HoverImage = `../../public/source/object_images/obed_outline.jpg`;
    const UnhoverImage = `../../public/source/object_images/obed.jpg`;
    const mapObjectImage = hover ? HoverImage : UnhoverImage;

    return (
        <div
        className={'map-object'}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        >
            <img src = {mapObjectImage}/>
            <img src = '../../public/source/object_images/obed.jpg'/>
            <img src={`${window.location.origin}/public/source/object_images/obed.jpg`} />

        </div>
    )
}

export default MapObject;