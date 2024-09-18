import React, { useState } from 'react';
import Modal from 'react-modal';
import './PopupStyle.css';

import AudagGame from "../Games/AudagGame";
import MediaPlayer from "../MediaPlayerCompinents/MediaPlayer";


const ModalCardGame = ({objectName, type, onClose}) => {
    const [modalIsOpen, setModalIsOpen] = useState(true);
    const [isGamePlaying, setGameIsPlaying] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        onClose();
    };

    const customStyles = {
        content: {
            backgroundColor: 'transperent',
            backdropFilter: 'blur(10)',// Your modal's background color
        },
        overlay: {
            backgroundColor: 'transparent',  // This removes the grey overlay
            backdropFilter: 'blur(10)',
        },
    };

    return (
        <div className={'modal-window'}>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                className='modal-content'    // Используйте CSS класс для контента модального окна
                overlayClassName='modal-overlay'
            >
                {
                    type==='game'
                        ?<AudagGame gameName={objectName}/>
                        :<MediaPlayer name={objectName}/>
                }
                <div className='game-close-btn'>
                    <button onClick={closeModal} className={'close-button'}>
                        <img src='./source/icons/close.svg'></img>
                    </button>
                </div>

            </Modal>
        </div>
    );
}

export default ModalCardGame;
