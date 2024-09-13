import React, {useState} from 'react'
import './PopupStyle.css';
import TestGame from "../Games/TestGame";

const ObjectPopupInfo = ({objectName}) => {
    const objectInfo = {
        artek_arena: {
            name: 'Артек-Арена',
            description: 'описание Артек-Арены',
            year: '1963',
        },
    }

    const imageToRender = `./source/object_card_images/${objectName}_card.png`;

    // const infoToRender = hover ? objectInfo[ObjectName].description : objectInfo[ObjectName].name;

    return (
        <div className={'popup-container'}>
            {/*<div>{objectInfo[ObjectName].name}</div>*/}
            {/*<div>{objectInfo[ObjectName].description}</div>*/}
            {/*<div>{objectInfo[ObjectName].product}</div>*/}

            <TestGame className={'unity-game-container'}/>
        </div>
    )

}

export default ObjectPopupInfo;