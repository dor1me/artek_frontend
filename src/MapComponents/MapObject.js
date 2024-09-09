import React, {useState} from 'react'
import './MapStyles.css';
import Description from "./Description";

const MapObject = ({objectName}) => {
    const objectInfo = {
        artek_arena: {
            name: 'Артек-Арена',
            description: 'описание Артек-Арены',
    },
}

    const[hover, setHover] = useState(false);
    const hoverImage = `/source/object_images/${objectName}_outline.png`;
    const unhoverImage = `/source/object_images/${objectName}.png`;
    const mapObjectImage = hover ? hoverImage : unhoverImage;

    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <img src = {mapObjectImage} className={'map-object'}/>
            { hover && <Description name={objectInfo[objectName].name} description={objectInfo[objectName].description}/> }
        </div>
    )

}

export default MapObject;