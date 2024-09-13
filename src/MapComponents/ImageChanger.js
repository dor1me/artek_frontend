import React, { useState, useEffect } from 'react';
import './MapStyles.css'

// Массив путей к изображениям. Замените их на свои.
const images = [
    './source/MapImages/anim_map_test_0010001.jpg',
    './source/MapImages/anim_map_test_0010002.jpg',
    './source/MapImages/anim_map_test_0010003.jpg',
    './source/MapImages/anim_map_test_0010004.jpg',
    './source/MapImages/anim_map_test_0010005.jpg',
    './source/MapImages/anim_map_test_0010006.jpg',
    './source/MapImages/anim_map_test_0010007.jpg',
    './source/MapImages/anim_map_test_0010008.jpg',
    './source/MapImages/anim_map_test_0010009.jpg',
    './source/MapImages/anim_map_test_0010010.jpg',
    './source/MapImages/anim_map_test_0010011.jpg',
    './source/MapImages/anim_map_test_0010012.jpg',
    './source/MapImages/anim_map_test_0010013.jpg',
    './source/MapImages/anim_map_test_0010014.jpg',
    './source/MapImages/anim_map_test_0010015.jpg',
    './source/MapImages/anim_map_test_0010016.jpg',
    './source/MapImages/anim_map_test_0010017.jpg',
    './source/MapImages/anim_map_test_0010018.jpg',
    './source/MapImages/anim_map_test_0010019.jpg',
    './source/MapImages/anim_map_test_0010020.jpg',
    './source/MapImages/anim_map_test_0010021.jpg',
    './source/MapImages/anim_map_test_0010022.jpg',
    './source/MapImages/anim_map_test_0010023.jpg',
    './source/MapImages/anim_map_test_0010024.jpg',
    './source/MapImages/anim_map_test_0010025.jpg',
    './source/MapImages/anim_map_test_0010026.jpg',
    './source/MapImages/anim_map_test_0010027.jpg',
    './source/MapImages/anim_map_test_0010028.jpg',
    './source/MapImages/anim_map_test_0010029.jpg',
    './source/MapImages/anim_map_test_0010030.jpg',
    './source/MapImages/anim_map_test_0010031.jpg',
    './source/MapImages/anim_map_test_0010032.jpg',
    './source/MapImages/anim_map_test_0010033.jpg',
    './source/MapImages/anim_map_test_0010034.jpg',
    './source/MapImages/anim_map_test_0010035.jpg',
    './source/MapImages/anim_map_test_0010036.jpg',
    './source/MapImages/anim_map_test_0010037.jpg',
    './source/MapImages/anim_map_test_0010038.jpg',
    './source/MapImages/anim_map_test_0010039.jpg',
    './source/MapImages/anim_map_test_0010040.jpg',
    './source/MapImages/anim_map_test_0010041.jpg',
    './source/MapImages/anim_map_test_0010042.jpg',
    './source/MapImages/anim_map_test_0010043.jpg',
    './source/MapImages/anim_map_test_0010044.jpg',
    './source/MapImages/anim_map_test_0010045.jpg',
    './source/MapImages/anim_map_test_0010046.jpg',
    './source/MapImages/anim_map_test_0010047.jpg',
    './source/MapImages/anim_map_test_0010048.jpg',
    './source/MapImages/anim_map_test_0010049.jpg',
    './source/MapImages/anim_map_test_0010050.jpg'
    // добавь все 50 изображений
];

const ImageSwitcher = () => {
    // Состояние для хранения текущего индекса изображения
    const [imageIndex, setImageIndex] = useState(0);

    // Обработчик события движения мыши
    const handleMouseMove = (event) => {
        const { clientX } = event; // Получаем горизонтальную позицию курсора
        const width = window.innerWidth; // Ширина окна браузера
        const fraction = clientX / width; // Доля ширины окна, занятого курсором
        const index = Math.floor(fraction * images.length); // Вычисляем индекс изображения
        setImageIndex(index); // Обновляем состояние с новым индексом
    };

    // Используем эффект для добавления и удаления обработчика события
    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove); // Добавляем обработчик
        return () => window.removeEventListener('mousemove', handleMouseMove); // Удаляем обработчик при размонтировании
    }, []); // Пустой массив зависимостей, чтобы эффект выполнялся только один раз

    return (
        <div className={'changer-container'}>
            <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
                {/*<p>{imageIndex}</p>*/}
                <img
                    src={images[imageIndex]} // Используем текущее изображение из массива
                    alt="Rotating" // Альт-текст для изображения
                    style={{ width: '100%', height: 'auto' }} // Устанавливаем стили для изображения
                />

                {/*<img src = './source/object_card_images/artek_arena_card.png'/>*/}
            </div>
            <div className={'gradient-under-map'}/>
        </div>
    );
};

export default ImageSwitcher;