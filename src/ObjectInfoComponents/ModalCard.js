import React, { useState } from 'react';
import Modal from 'react-modal';
import ModalCardGame from './ModalCardGame';
import AudagGame from '../Games/AudagGame';
import './PopupStyle.css';
import {CardWave1} from "../Waves/FooterWave";
import PreviewCard from "../MapComponents/PreviewCard";

const ModalCard = ({objectName, classN }) => {
    const objectInfo = {
        artek_arena: {
            name: 'АРТЕК АРЕНА',
            description: 'Если ваши друзья в разных лагерях — это не страшно, ведь на самых главных событиях смены вас объединит Артек Арена!',
            year: '1963',
            address: 'пгт. Гурзуф и тп',
            type: 'game',
            game: 'Попробуйте сыграть в нашу увлекательную игру и познакомьтесь ближе с историей Артека!'
        },
        suuk_su: {
            name: 'ДВОРЕЦ СУУК-СУ',
            description: 'Музей истории Артека и космонавтики, праздники и концерты, библиотека и кружки — что только не вмешает досуговый центр артековца «Суук-Су»!',
            year: '1903',
            address: 'пгт. Гурзуф',
            type: 'video',
            game: 'Попробуйте сыграть в нашу увлекательную игру и познакомьтесь ближе с историей Артека!'
        },
        school: {
            name: 'ШКОЛА АРТЕКА',
            description: 'Никогда не были в Хогвартсе? Потому что он у нас, в Артеке! Здесь преподают лучшие волшебники мира, они поделиться с вами своей магией!',
            year: '1925',
            address: 'пгт. Гурзуф',
            type: 'game',
            game: 'Попробуйте сыграть в нашу увлекательную игру и познакомьтесь ближе с историей Артека!'
        },
        monument: {
            name: 'МОНУМЕНТ ДУЖБЫ ДЕТЕЙ МИРА',
            description: 'Этот памятник — напоминание о важности сотрудничества и дружбы народов во все времена!',
            year: '1967',
            address: 'пгт. Гурзуф',
            type: 'video',
            game: 'Попробуйте сыграть в нашу увлекательную игру и познакомьтесь ближе с историей Артека!'
        },
        stadium: {
            name: 'ЦЕНТРАЛЬНЫЙ СТАДИОН',
            description: 'Держать себя в форме помогает активная артековская жизнь, а её центр — Центральный стадион!',
            year: '1925',
            address: 'пгт. Гурзуф',
            type: 'game',
            game: 'Попробуйте сыграть в нашу увлекательную игру и познакомьтесь ближе с историей Артека!'
        },
        audag: {
            name: 'ГОРА АЮ-ДАГ',
            description: 'Звание артековца получают здесь! Сам Пушкин поднимался на Аю-Даг и вдохновлялся красотой Крыма. И, конечно, вечная легенда Артека — Абсолют на страже дневного отдыха.',
            year: '1926',
            address: 'пгт. Гурзуф',
            type: 'game',
            game: 'Попробуйте сыграть в нашу увлекательную игру и познакомьтесь ближе с историей Артека!'
        },
        stairs: {
            name: 'ИТАЛЬЯНСКАЯ ЛЕСТНИЦА',
            description: 'Лестница лагеря Морского, ведущая в краеведческий музей. И с ней связана очень забавная история, об этом в нашем сюжете!',
            year: '1967',
            address: 'пгт. Гурзуф',
            type: 'video',
            game: 'Попробуйте сыграть в нашу увлекательную игру и познакомьтесь ближе с историей Артека!'
        },
        fortress: {
            name: 'ГЕНУЭЗСКАЯ КРЕПОСТЬ',
            description: 'Ооочень древний объект. Кстати, артековцы тоже внесли вклад в изучение истории, найдя уникальные предметы тех времён!',
            year: '1371',
            address: 'г. Судак',
            type: 'video',
            game: 'Попробуйте сыграть в нашу увлекательную игру и познакомьтесь ближе с историей Артека!'
        },
        olive: {
            name: 'ОЛИВКОВАЯ РОЩА',
            description: 'Именно здесь заложена капсула времени на 2048 год — всё это подтверждает огромную культурную ценность рощи для «Артека».',
            year: '1808',
            address: 'пгт. Гурзуф',
            type: 'video',
            game: 'Попробуйте сыграть в нашу увлекательную игру и познакомьтесь ближе с историей Артека!'
        },
        cafe: {
            name: 'СТОЛОВАЯ',
            description: 'Многими поколениями проверено, и мы заявляем: любишь поесть? Ждём тебя в рядах артековцев-обжор!.',
            year: '1925',
            address: 'пгт. Гурзуф',
            type: 'game',
            game: 'Попробуйте сыграть в нашу увлекательную игру и познакомьтесь ближе с историей Артека!',
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
            minWidth: '1655px',

            overflow: 'hidden',
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Полупрозрачный фон
        },
    };

    const backgroundImage = `./source/object_card_images/${objectName}.png`
    const previewImage = `./source/previews/${objectName}.jpg`
    const miniImage = `./source/object_images/${objectName}.svg`

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
                    <p className='description-product-text'>{objectInfo[objectName].game}</p>
                </div>

                <div className='module-game'>
                    <button className='game-button' onClick={() => {
                        setGameIsPlaying(true);
                        openSecondModal(); // Открываем второе модальное окно
                    }}>
                        <PreviewCard name={objectName} type={(objectInfo[objectName].type).toString()} className='game'/>
                        {/*<img src={previewImage} className='game'/>*/}
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
                {isGamePlaying ? <ModalCardGame /> : modalContent}
            </Modal>
            {/*<Modal*/}
            {/*    isOpen={isSecondModalOpen}*/}
            {/*    onRequestClose={closeSecondModal}*/}
            {/*    style={commonStyles}*/}
            {/*    className='modal-content'*/}
            {/*    overlayClassName='modal-overlay'*/}
            {/*>*/}
            {/*    <div className={'game-modal'}>*/}
            {/*        <AudagGame/>*/}
            {/*    </div>*/}

            {/*</Modal>*/}
        </div>
    );
};

export default ModalCard;
