import React from 'react'
import MapObject from "./MapObject";
import './MapStyles.css';

const Map = () => {
    return (
        <div className = 'map-container'>
            <img className={'back'} src={'./source/object_images/map.png'}/>
            <MapObject className={'artek-arena'} objectName={'artek_arena'}/>

        </div>

    )
}

export default Map;