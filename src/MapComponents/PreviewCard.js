import React from 'react';
import './MapStyles.css';

const PreviewCard = ({ name, type }) => {
    const previewImage = `./source/previews/${name}.jpg`;
    const label = (type === 'game') ? 'Играть' : 'Смотреть';

    return (
        <div className='preview-card-container'>
            <img src={previewImage} className='game' alt={name} />
            <div className='center-overlay'>
                <div className='play-button'>
                    <img src='./source/icons/play_arrow.svg' alt='Play' />
                </div>
                <span className='play-label'>{label}</span>

            </div>
        </div>
    );
};

export default PreviewCard;
