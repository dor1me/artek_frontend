import React, {useState, useEffect} from 'react'
import './MapStyles.css';
import Description from "./Description";
import TestGame from "../Games/TestGame";

const MapObject = ({objectName, className}) => {

    const[hover, setHover] = useState(false);
    const hoverImage = `/source/object_images/${objectName}_outline.png`;
    const unhoverImage = `/source/object_images/${objectName}.png`;
    const mapObjectImage = hover ? hoverImage : unhoverImage;

    // const handleMouseMove = (event) => {
    //     if (!hover) {
    //         console.log('Mouse is moving:', event.clientX, event.clientY);
    //
    // useEffect(() => {
    //     // Добавляем обработчик события на движение мыши
    //     window.removeEventListener('mousemove', handleMouseMove);
    //
    //     // Удаляем обработчик при размонтировании компонента
    //     return () => {
    //         window.removeEventListener('mousemove', handleMouseMove);
    //     };
    // }, [hover]); // Обновляем эффект при изменении mouseOver

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