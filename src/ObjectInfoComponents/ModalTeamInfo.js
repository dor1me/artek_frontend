import React, { useState } from 'react';
import Modal from 'react-modal';
import AudagGame from "../Games/AudagGame";
import PreviewCard from "../MapComponents/PreviewCard";

const ModalCard = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isGamePlaying, setGameIsPlaying] = useState(false);
    const [isSecondModalOpen, setSecondModalIsOpen] = useState(false);

    const closeGame = () => setGameIsPlaying(false);
    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);
    const openSecondModal = () => setSecondModalIsOpen(true);
    const closeSecondModal = () => setSecondModalIsOpen(false);



    function MediaPlayer() {
        return (
            <div className='media-container'>
                <div className='div-close-btn'>
                    <button onClick={closeGame} className='close-button'>
                        <img src='./source/icons/close.svg' alt='close'/>
                    </button>
                </div>
                <AudagGame/>
            </div>
        );
    }


    const commonStyles = {
        content: {
            // backgroundColor: 'white',
            margin: '0px 0px 0px 0px',

            top: '30px',
            borderRadius: '8px',
            padding: '0px',
            maxWidth: '1920px',
            minWidth: '1920px',
            maxHeight: '930px',
            alignContent: 'center',
            justifyContent: 'center',
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
                src={backgroundImage}
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
                    <p className='description-product-text'>{objectInfo[objectName].game}</p>

                    <button className='game-button' onClick={() => {
                        setGameIsPlaying(true);
                    }}>
                        <PreviewCard name={objectName} type={(objectInfo[objectName].type).toString()} className='game-preview'/>
                        <img src={previewImage} className='game'/>
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
            <button onClick={openModal} className={classN}>
                <img src={miniImage}/>
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={commonStyles}
                className='modal-content'
                overlayClassName='modal-overlay'
            >
                {isGamePlaying ? <MediaPlayer /> : modalContent}
            </Modal>
        </div>
    );
};

export default ModalTeamInfo;