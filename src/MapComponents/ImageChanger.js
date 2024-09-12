import React, { useState, useEffect } from 'react';

// Массив путей к изображениям. Замените их на свои.
const images = [
    './source/object_card_images/artek_arena_card.png',
    '/path/to/image2.jpg',
    '/path/to/image3.jpg',
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
        <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
            <p>{imageIndex}</p>
            <img
                src={images[imageIndex]} // Используем текущее изображение из массива
                alt="Rotating" // Альт-текст для изображения
                style={{ width: '100%', height: 'auto' }} // Устанавливаем стили для изображения
            />

            {/*<img src = './source/object_card_images/artek_arena_card.png'/>*/}
        </div>
    );
};

export default ImageSwitcher;