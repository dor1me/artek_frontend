import React, {useState} from 'react'
import './MapStyles.css';
import Description from "./Description";
import TestGame from "../Games/TestGame";

const MapObject = ({objectName, className}) => {
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
        <span
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <img src = {mapObjectImage} className={className}/>
            {hover && <Description name={objectInfo[objectName].name} description={objectInfo[objectName].description} className={'object-card'}/> }
        </span>
    )

}

export default MapObject;