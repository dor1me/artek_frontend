import React, {useState} from 'react'

const ObjectPopupInfo = ({ObjectName}) => {

    const objectInfo = {
        1: {
            name: 'артек 1',
            description: 'fdsfsdfs',
            product: 'game',
        },
        2: {
            name: 'артек 2',
            description: 'fdsfsdfs',
            product: 'game',
        },
        3: {
            name: 'артек 3',
            description: 'fdsfsdfs',
            product: 'game',
        },
        4: {
            name: 'артек 1',
            description: 'fdsfsdfs',
            product: 'game',
        }
    }

    const [hover, setHover] = useState(false);
    const imageHovered = `./source/object_images/${ObjectName}_image_hovered.png`;
    const imageUnhovered = `./source/object_images/${ObjectName}_image_unhovered.png`;
    const imageToRender = `./source/object_images/${ObjectName}_image.png`;

    // const infoToRender = hover ? objectInfo[ObjectName].description : objectInfo[ObjectName].name;

    return (
        <div
            className = 'map-object'
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div>{objectInfo[ObjectName].name}</div>
            <div>{objectInfo[ObjectName].description}</div>
            <div>{objectInfo[ObjectName].product}</div>
            <img src = {imageToRender}/>
        </div>
    )

}

export default ObjectPopupInfo;