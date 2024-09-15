import React, { useState } from 'react';
import Modal from 'react-modal';
import ModalCardGame from './ModalCardGame';
import AudagGame from '../Games/AudagGame';
import './PopupStyle.css';
import {CardWave1} from "../Waves/FooterWave";

const ModalCard = ({ objectName, classN }) => {
    const objectInfo = {
        artek_arena: {
            name: 'АРТЕК АРЕНА',
            description: 'Если ваши друзья в разных лагерях — это не страшно, \n' +
                'ведь на самых главных событиях смены вас объединит Артек Арена!',
            year: '1963',
            address: 'пгт. Гурзуф и тп',
        },
    };

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isGamePlaying, setGameIsPlaying] = useState(false);
    const [isSecondModalOpen, setSecondModalIsOpen] = useState(false);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);
    const openSecondModal = () => setSecondModalIsOpen(true);
    const closeSecondModal = () => setSecondModalIsOpen(false);

    const commonStyles = {
        content: {
            // backgroundColor: 'white',
            margin: '0px 0px 135px 0px',
            top: '30px',
            borderRadius: '8px',
            padding: '20px',
            maxWidth: '1655px',
            minWodth: '1655px',

            overflow: 'hidden',
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Полупрозрачный фон
        },
    };

    const modalContent = (
        <div className='modale-div-all'>
            <img
                className='back-img'
                src='./source/object_card_images/artek_arena.png'
                alt='background'
            />
            <div className='modal-div'>
                <div className='modal-window-header'>
                    <h1 className='header-text'>{objectInfo[objectName].name}</h1>
                    <div className='description-top'>
                        <p className='description-text-top'>Год постройки · {objectInfo[objectName].year}</p>
                        <p className='description-text-top'>Адрес · {objectInfo[objectName].address}</p>
                    </div>
                    <p className='description-text'>{objectInfo[objectName].description}</p>
                </div>

                <div className='module-game'>
                    <button className='game-button' onClick={() => {
                        setGameIsPlaying(true);
                        openSecondModal(); // Открываем второе модальное окно
                    }}>
                        <img src='./source/previews/audag_peview.jpg' className='game'/>
                    </button>
                </div>
                <img src='./source/waves/wave_1.svg' className='wave-1'/>
                <img src='./source/waves/wave_2.svg' className='wave-2'/>
                <img src='./source/waves/wave_3.svg' className='wave-3'/>
            </div>
            <div className='div-close-btn'>
                <button onClick={closeModal} className='close-button'>
                    <img src='./source/icons/close.svg' alt='close'/>
                </button>
            </div>
        </div>
    );

    return (
        <div className='modal-window'>
            <button onClick={openModal} className={classN}>Открыть модальное окно</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={commonStyles}
                className='modal-content'
                overlayClassName='modal-overlay'
            >
                {isGamePlaying ? <ModalCardGame /> : modalContent}
            </Modal>
            <Modal
                isOpen={isSecondModalOpen}
                onRequestClose={closeSecondModal}
                style={commonStyles}
                className='modal-content'
                overlayClassName='modal-overlay'
            >
                <div className={'game-modal'}>
                    <AudagGame/>
                </div>

            </Modal>
        </div>
    );
};

export default ModalCard;
