import React from 'react'
import MapObject from "./MapObject";
import './MapStyles.css';

const Map = () => {
    return (
        <div className = 'map-container'>
            <img className={'back'} src={'./source/object_images/map.png'}/>
            <div className={'map'}>
                <MapObject className={'artek-arena'} objectName={'artek_arena'}/>
            </div>
        </div>

    )
}

export default Map;