import React from 'react';
import './MapStyles.css';

const PreviewCard = ({ name, type }) => {
    const previewImage = `./source/previews/${name}.jpg`;
    const label = (type === 'game') ? 'Играть' : 'Смотреть';

    return (
        <div className='preview-card-container'>

            <div className='overlay'></div>
                <img src={previewImage} className='game'/>
                <div className='center-overlay'>
                    <button className='play-button'>
                        <img src='./source/icons/play_arrow.svg' alt='Play' />
                    </button>
                    <span className='play-label'>{label}</span>
                </div>
        </div>
    );
};

export default PreviewCard;
