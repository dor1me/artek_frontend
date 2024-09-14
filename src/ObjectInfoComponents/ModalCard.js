import React, { useState } from 'react';
import Modal from 'react-modal';
import TestGame from "../Games/TestGame";
import './PopupStyle.css';
import {CrossIcon} from "../Icons/CrossIcon";

const ModalCard = ({objectName}) => {
    const objectInfo = {
        artek_arena: {
            name: 'Артек-Арена',
            description: 'Если ваши друзья в разных лагерях — это не страшно, \n' +
                'ведь на самых главных событиях смены вас объединит Артек Арена!',
            year: '1963',
            address: 'пгт. Гурзуф и тп',
        },
    }
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isGamePlaying, setGameIsPlaying] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
    console.log(objectName);
    const modalContent = (
        <div>
            <h1>{objectInfo[objectName].name}</h1>
            <p>Год постройки · {objectInfo[objectName].year}</p>

            <button onClick={closeModal} className={'close-button'}>
                <CrossIcon/>
            </button>
            <button
                onClick={()=>setGameIsPlaying(true)}>
                <img src='./source/previews/audag_peview.jpg'/>
            </button>

        </div>

    );
    return (
        <div>
            <button onClick={openModal}>Открыть модальное окно
                <img/>
            </button>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className={'modal-window'}>
                {isGamePlaying && <TestGame/>}
                {!isGamePlaying && modalContent}
            </Modal>
        </div>
    );
}

export default ModalCard;