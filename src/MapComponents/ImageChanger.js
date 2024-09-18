import React, { useState, useEffect } from 'react';
import './MapStyles.css'
import '../ObjectInfoComponents/PopupStyle.css'

// Массив путей к изображениям. Замените их на свои.
const images =
    [
            './source/MapImages/map_seq_0001.jpg',
            './source/MapImages/map_seq_0002.jpg',
            './source/MapImages/map_seq_0003.jpg',
            './source/MapImages/map_seq_0004.jpg',
            './source/MapImages/map_seq_0005.jpg',
            './source/MapImages/map_seq_0006.jpg',
            './source/MapImages/map_seq_0007.jpg',
            './source/MapImages/map_seq_0008.jpg',
            './source/MapImages/map_seq_0009.jpg',
            './source/MapImages/map_seq_0010.jpg',
            './source/MapImages/map_seq_0011.jpg',
            './source/MapImages/map_seq_0012.jpg',
            './source/MapImages/map_seq_0013.jpg',
            './source/MapImages/map_seq_0014.jpg',
            './source/MapImages/map_seq_0015.jpg',
            './source/MapImages/map_seq_0016.jpg',
            './source/MapImages/map_seq_0017.jpg',
            './source/MapImages/map_seq_0018.jpg',
            './source/MapImages/map_seq_0019.jpg',
            './source/MapImages/map_seq_0020.jpg',
            './source/MapImages/map_seq_0021.jpg',
            './source/MapImages/map_seq_0022.jpg',
            './source/MapImages/map_seq_0023.jpg',
            './source/MapImages/map_seq_0024.jpg',
            './source/MapImages/map_seq_0025.jpg',
            './source/MapImages/map_seq_0026.jpg',
            './source/MapImages/map_seq_0027.jpg',
            './source/MapImages/map_seq_0028.jpg',
            './source/MapImages/map_seq_0029.jpg',
            './source/MapImages/map_seq_0030.jpg',
            './source/MapImages/map_seq_0031.jpg',
            './source/MapImages/map_seq_0032.jpg',
            './source/MapImages/map_seq_0033.jpg',
            './source/MapImages/map_seq_0034.jpg',
            './source/MapImages/map_seq_0035.jpg',
            './source/MapImages/map_seq_0036.jpg',
            './source/MapImages/map_seq_0037.jpg',
            './source/MapImages/map_seq_0038.jpg',
            './source/MapImages/map_seq_0039.jpg',
            './source/MapImages/map_seq_0040.jpg',
            './source/MapImages/map_seq_0041.jpg',
            './source/MapImages/map_seq_0042.jpg',
            './source/MapImages/map_seq_0043.jpg',
            './source/MapImages/map_seq_0044.jpg',
            './source/MapImages/map_seq_0045.jpg',
            './source/MapImages/map_seq_0046.jpg',
            './source/MapImages/map_seq_0047.jpg',
            './source/MapImages/map_seq_0048.jpg',
            './source/MapImages/map_seq_0049.jpg',
            './source/MapImages/map_seq_0050.jpg',
            './source/MapImages/map_seq_0051.jpg',
            './source/MapImages/map_seq_0052.jpg',
            './source/MapImages/map_seq_0053.jpg',
            './source/MapImages/map_seq_0054.jpg',
            './source/MapImages/map_seq_0055.jpg',
            './source/MapImages/map_seq_0056.jpg',
            './source/MapImages/map_seq_0057.jpg',
            './source/MapImages/map_seq_0058.jpg',
            './source/MapImages/map_seq_0059.jpg',
            './source/MapImages/map_seq_0060.jpg',
            './source/MapImages/map_seq_0061.jpg',
            './source/MapImages/map_seq_0062.jpg',
            './source/MapImages/map_seq_0063.jpg',
            './source/MapImages/map_seq_0064.jpg',
            './source/MapImages/map_seq_0065.jpg',
            './source/MapImages/map_seq_0066.jpg',
            './source/MapImages/map_seq_0067.jpg',
            './source/MapImages/map_seq_0068.jpg',
            './source/MapImages/map_seq_0069.jpg',
            './source/MapImages/map_seq_0070.jpg',
            './source/MapImages/map_seq_0071.jpg',
            './source/MapImages/map_seq_0072.jpg',
            './source/MapImages/map_seq_0073.jpg',
            './source/MapImages/map_seq_0074.jpg',
            './source/MapImages/map_seq_0075.jpg',
            './source/MapImages/map_seq_0076.jpg',
            './source/MapImages/map_seq_0077.jpg',
            './source/MapImages/map_seq_0078.jpg',
            './source/MapImages/map_seq_0079.jpg',
            './source/MapImages/map_seq_0080.jpg',
            './source/MapImages/map_seq_0081.jpg',
            './source/MapImages/map_seq_0082.jpg',
            './source/MapImages/map_seq_0083.jpg',
            './source/MapImages/map_seq_0084.jpg',
            './source/MapImages/map_seq_0085.jpg',
            './source/MapImages/map_seq_0086.jpg',
            './source/MapImages/map_seq_0087.jpg',
            './source/MapImages/map_seq_0088.jpg',
            './source/MapImages/map_seq_0089.jpg',
            './source/MapImages/map_seq_0090.jpg',
            './source/MapImages/map_seq_0091.jpg',
            './source/MapImages/map_seq_0092.jpg',
            './source/MapImages/map_seq_0093.jpg',
            './source/MapImages/map_seq_0094.jpg',
            './source/MapImages/map_seq_0095.jpg',
            './source/MapImages/map_seq_0096.jpg',
            './source/MapImages/map_seq_0097.jpg',
            './source/MapImages/map_seq_0098.jpg',
            './source/MapImages/map_seq_0099.jpg',
            './source/MapImages/map_seq_0100.jpg',
            './source/MapImages/map_seq_0101.jpg',
            './source/MapImages/map_seq_0102.jpg',
            './source/MapImages/map_seq_0103.jpg',
            './source/MapImages/map_seq_0104.jpg',
            './source/MapImages/map_seq_0105.jpg',
            './source/MapImages/map_seq_0106.jpg',
            './source/MapImages/map_seq_0107.jpg',
            './source/MapImages/map_seq_0108.jpg',
            './source/MapImages/map_seq_0109.jpg',
            './source/MapImages/map_seq_0110.jpg',
            './source/MapImages/map_seq_0111.jpg',
            './source/MapImages/map_seq_0112.jpg',
            './source/MapImages/map_seq_0113.jpg',
            './source/MapImages/map_seq_0114.jpg',
            './source/MapImages/map_seq_0115.jpg',
            './source/MapImages/map_seq_0116.jpg',
            './source/MapImages/map_seq_0117.jpg',
            './source/MapImages/map_seq_0118.jpg',
            './source/MapImages/map_seq_0119.jpg',
            './source/MapImages/map_seq_0120.jpg',
            './source/MapImages/map_seq_0121.jpg',
            './source/MapImages/map_seq_0122.jpg',
            './source/MapImages/map_seq_0123.jpg',
            './source/MapImages/map_seq_0124.jpg',
            './source/MapImages/map_seq_0125.jpg',
            './source/MapImages/map_seq_0126.jpg',
            './source/MapImages/map_seq_0127.jpg',
            './source/MapImages/map_seq_0128.jpg',
            './source/MapImages/map_seq_0129.jpg',
            './source/MapImages/map_seq_0130.jpg',
            './source/MapImages/map_seq_0131.jpg',
            './source/MapImages/map_seq_0132.jpg',
            './source/MapImages/map_seq_0133.jpg',
            './source/MapImages/map_seq_0134.jpg',
            './source/MapImages/map_seq_0135.jpg',
            './source/MapImages/map_seq_0136.jpg',
            './source/MapImages/map_seq_0137.jpg',
            './source/MapImages/map_seq_0138.jpg',
            './source/MapImages/map_seq_0139.jpg',
            './source/MapImages/map_seq_0140.jpg',
            './source/MapImages/map_seq_0141.jpg',
            './source/MapImages/map_seq_0142.jpg',
            './source/MapImages/map_seq_0143.jpg',
            './source/MapImages/map_seq_0144.jpg',
            './source/MapImages/map_seq_0145.jpg',
            './source/MapImages/map_seq_0146.jpg',
            './source/MapImages/map_seq_0147.jpg',
            './source/MapImages/map_seq_0148.jpg',
            './source/MapImages/map_seq_0149.jpg',
            './source/MapImages/map_seq_0150.jpg',
    ];

const ImageSwitcher = () => {
    // Состояние для хранения текущего индекса изображения
    const [imageIndex, setImageIndex] = useState(0);
    const [hover, setImageHover] = useState(false);

    // Обработчик события движения мыши
    const handleMouseMove = (event) => {
        const { clientX } = event; // Получаем горизонтальную позицию курсора
        const width = window.innerWidth; // Ширина окна браузера
        const fraction = clientX / width; // Доля ширины окна, занятого курсором
        const imageIndex = Math.floor(fraction * images.length); // Вычисляем индекс изображения
        setImageIndex(imageIndex); // Обновляем состояние с новым индексом
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
                <div className='event-block' />
            <div className={'gradient-under-map'}/>
        </div>
    );
};

export default ImageSwitcher;