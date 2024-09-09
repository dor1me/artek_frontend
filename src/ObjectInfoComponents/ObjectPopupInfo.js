import React, {useState} from 'react'

const ObjectPopupInfo = ({objectName}) => {
    const objectInfo = {
        artek_arena: {
            name: 'Артек-Арена',
            description: 'описание Артек-Арены',
            year: '1963',
        },
    }

    const [hover, setHover] = useState(false);
    const imageToRender = `./source/object_card_images/${objectName}_card.png`;

    // const infoToRender = hover ? objectInfo[ObjectName].description : objectInfo[ObjectName].name;

    return (
        <div
            className = 'map-object'
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {/*<div>{objectInfo[ObjectName].name}</div>*/}
            {/*<div>{objectInfo[ObjectName].description}</div>*/}
            {/*<div>{objectInfo[ObjectName].product}</div>*/}
            <img src = {imageToRender}/>
        </div>
    )

}

export default ObjectPopupInfo;