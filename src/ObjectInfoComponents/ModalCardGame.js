import React, { useState } from 'react';
import Modal from 'react-modal';
import './PopupStyle.css';

import AudagGame from "../Games/AudagGame";


const ModalCardGame = ({objectName, classN}) => {
    const [modalIsOpen, setModalIsOpen] = useState(true);
    const [isGamePlaying, setGameIsPlaying] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
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

    const modalContent = (
        <div className='modale-div-all'>
            <img
                className='back-img'
                src='./source/object_card_images/artek_arena.png'
                alt='background'></img>
            <div className='modal-div'>
                <div className='modal-window-header'>
                    <h1 className='header-text'></h1>
                    <div className='description-top'>
                        <p className='description-text-top'>Год постройки · </p>

                    </div>


                    <p className='description-text'>Год постройки · </p>

                </div>

                <div className='module-game'>
                    <button className='game-button'
                            onClick={()=>setGameIsPlaying(true)}>
                        <img src='./source/previews/audag_peview.jpg' className='game'/>
                    </button>
                </div>

            </div>
            <div className='div-close-btn'>
                <button onClick={closeModal} className={'close-button'}>
                    <img src='./source/icons/close.svg'></img>
                </button>
            </div>
        </div>

    );
    return (
        <div className={'modal-window'}>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                className='modal-content'    // Используйте CSS класс для контента модального окна
                overlayClassName='modal-overlay'
            >
                <div className='div-close-btn'>
                    <button onClick={closeModal} className={'close-button'}>
                        <img src='./source/icons/close.svg'></img>
                    </button>
                </div>
                {/*<AudagGame/>*/}
            </Modal>
        </div>
    );
}

export default ModalCardGame;
