import React from 'react';
import './MapStyles.css';

const PreviewCard = ({ name, type, handlePlay }) => {
    const previewImage = `./source/previews/${name}.jpg`;
    const label = (type === 'game') ? 'Играть' : 'Смотреть';

    return (
        <div className='preview-card-container'>
            <img src={previewImage} className='game'  width={576} height={319}/>
            <div className='preview-play-box'>

                    <button className='preview-play-button' onClick={handlePlay}>
                        <img src='./source/icons/play_arrow.svg' alt='Play'/>
                    </button>

                    <div className='preview-play-label'>{label}</div>

            </div>
        </div>
    );
};

export default PreviewCard;
