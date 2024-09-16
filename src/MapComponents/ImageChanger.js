import React, { useState, useEffect } from 'react';
import './MapStyles.css'
import '../ObjectInfoComponents/PopupStyle.css'

// Массив путей к изображениям. Замените их на свои.
const images =
    [
        './source/MapImages/anim_map_test_0020001.jpg',
        './source/MapImages/anim_map_test_0020002.jpg',
        './source/MapImages/anim_map_test_0020003.jpg',
        './source/MapImages/anim_map_test_0020004.jpg',
        './source/MapImages/anim_map_test_0020005.jpg',
        './source/MapImages/anim_map_test_0020006.jpg',
        './source/MapImages/anim_map_test_0020007.jpg',
        './source/MapImages/anim_map_test_0020008.jpg',
        './source/MapImages/anim_map_test_0020009.jpg',
        './source/MapImages/anim_map_test_0020010.jpg',
        './source/MapImages/anim_map_test_0020011.jpg',
        './source/MapImages/anim_map_test_0020012.jpg',
        './source/MapImages/anim_map_test_0020013.jpg',
        './source/MapImages/anim_map_test_0020014.jpg',
        './source/MapImages/anim_map_test_0020015.jpg',
        './source/MapImages/anim_map_test_0020016.jpg',
        './source/MapImages/anim_map_test_0020017.jpg',
        './source/MapImages/anim_map_test_0020018.jpg',
        './source/MapImages/anim_map_test_0020019.jpg',
        './source/MapImages/anim_map_test_0020020.jpg',
        './source/MapImages/anim_map_test_0020021.jpg',
        './source/MapImages/anim_map_test_0020022.jpg',
        './source/MapImages/anim_map_test_0020023.jpg',
        './source/MapImages/anim_map_test_0020024.jpg',
        './source/MapImages/anim_map_test_0020025.jpg',
        './source/MapImages/anim_map_test_0020026.jpg',
        './source/MapImages/anim_map_test_0020027.jpg',
        './source/MapImages/anim_map_test_0020028.jpg',
        './source/MapImages/anim_map_test_0020029.jpg',
        './source/MapImages/anim_map_test_0020030.jpg',
        './source/MapImages/anim_map_test_0020031.jpg',
        './source/MapImages/anim_map_test_0020032.jpg',
        './source/MapImages/anim_map_test_0020033.jpg',
        './source/MapImages/anim_map_test_0020034.jpg',
        './source/MapImages/anim_map_test_0020035.jpg',
        './source/MapImages/anim_map_test_0020036.jpg',
        './source/MapImages/anim_map_test_0020037.jpg',
        './source/MapImages/anim_map_test_0020038.jpg',
        './source/MapImages/anim_map_test_0020039.jpg',
        './source/MapImages/anim_map_test_0020040.jpg',
        './source/MapImages/anim_map_test_0020041.jpg',
        './source/MapImages/anim_map_test_0020042.jpg',
        './source/MapImages/anim_map_test_0020043.jpg',
        './source/MapImages/anim_map_test_0020044.jpg',
        './source/MapImages/anim_map_test_0020045.jpg',
        './source/MapImages/anim_map_test_0020046.jpg',
        './source/MapImages/anim_map_test_0020047.jpg',
        './source/MapImages/anim_map_test_0020048.jpg',
        './source/MapImages/anim_map_test_0020049.jpg',
        './source/MapImages/anim_map_test_0020050.jpg',
        './source/MapImages/anim_map_test_0020051.jpg',
        './source/MapImages/anim_map_test_0020052.jpg',
        './source/MapImages/anim_map_test_0020053.jpg',
        './source/MapImages/anim_map_test_0020054.jpg',
        './source/MapImages/anim_map_test_0020055.jpg',
        './source/MapImages/anim_map_test_0020056.jpg',
        './source/MapImages/anim_map_test_0020057.jpg',
        './source/MapImages/anim_map_test_0020058.jpg',
        './source/MapImages/anim_map_test_0020059.jpg',
        './source/MapImages/anim_map_test_0020060.jpg',
        './source/MapImages/anim_map_test_0020061.jpg',
        './source/MapImages/anim_map_test_0020062.jpg',
        './source/MapImages/anim_map_test_0020063.jpg',
        './source/MapImages/anim_map_test_0020064.jpg',
        './source/MapImages/anim_map_test_0020065.jpg',
        './source/MapImages/anim_map_test_0020066.jpg',
        './source/MapImages/anim_map_test_0020067.jpg',
        './source/MapImages/anim_map_test_0020068.jpg',
        './source/MapImages/anim_map_test_0020069.jpg',
        './source/MapImages/anim_map_test_0020070.jpg',
        './source/MapImages/anim_map_test_0020071.jpg',
        './source/MapImages/anim_map_test_0020072.jpg',
        './source/MapImages/anim_map_test_0020073.jpg',
        './source/MapImages/anim_map_test_0020074.jpg',
        './source/MapImages/anim_map_test_0020075.jpg',
        './source/MapImages/anim_map_test_0020076.jpg',
        './source/MapImages/anim_map_test_0020077.jpg',
        './source/MapImages/anim_map_test_0020078.jpg',
        './source/MapImages/anim_map_test_0020079.jpg',
        './source/MapImages/anim_map_test_0020080.jpg',
        './source/MapImages/anim_map_test_0020081.jpg',
        './source/MapImages/anim_map_test_0020082.jpg',
        './source/MapImages/anim_map_test_0020083.jpg',
        './source/MapImages/anim_map_test_0020084.jpg',
        './source/MapImages/anim_map_test_0020085.jpg',
        './source/MapImages/anim_map_test_0020086.jpg',
        './source/MapImages/anim_map_test_0020087.jpg',
        './source/MapImages/anim_map_test_0020088.jpg',
        './source/MapImages/anim_map_test_0020089.jpg',
        './source/MapImages/anim_map_test_0020090.jpg',
        './source/MapImages/anim_map_test_0020091.jpg',
        './source/MapImages/anim_map_test_0020092.jpg',
        './source/MapImages/anim_map_test_0020093.jpg',
        './source/MapImages/anim_map_test_0020094.jpg',
        './source/MapImages/anim_map_test_0020095.jpg',
        './source/MapImages/anim_map_test_0020096.jpg',
        './source/MapImages/anim_map_test_0020097.jpg',
        './source/MapImages/anim_map_test_0020098.jpg',
        './source/MapImages/anim_map_test_0020099.jpg',
        './source/MapImages/anim_map_test_0020100.jpg',
        './source/MapImages/anim_map_test_0020101.jpg',
        './source/MapImages/anim_map_test_0020102.jpg',
        './source/MapImages/anim_map_test_0020103.jpg',
        './source/MapImages/anim_map_test_0020104.jpg',
        './source/MapImages/anim_map_test_0020105.jpg',
        './source/MapImages/anim_map_test_0020106.jpg',
        './source/MapImages/anim_map_test_0020107.jpg',
        './source/MapImages/anim_map_test_0020108.jpg',
        './source/MapImages/anim_map_test_0020109.jpg',
        './source/MapImages/anim_map_test_0020110.jpg',
        './source/MapImages/anim_map_test_0020111.jpg',
        './source/MapImages/anim_map_test_0020112.jpg',
        './source/MapImages/anim_map_test_0020113.jpg',
        './source/MapImages/anim_map_test_0020114.jpg',
        './source/MapImages/anim_map_test_0020115.jpg',
        './source/MapImages/anim_map_test_0020116.jpg',
        './source/MapImages/anim_map_test_0020117.jpg',
        './source/MapImages/anim_map_test_0020118.jpg',
        './source/MapImages/anim_map_test_0020119.jpg',
        './source/MapImages/anim_map_test_0020120.jpg',
        './source/MapImages/anim_map_test_0020121.jpg',
        './source/MapImages/anim_map_test_0020122.jpg',
        './source/MapImages/anim_map_test_0020123.jpg',
        './source/MapImages/anim_map_test_0020124.jpg',
        './source/MapImages/anim_map_test_0020125.jpg',
        './source/MapImages/anim_map_test_0020126.jpg',
        './source/MapImages/anim_map_test_0020127.jpg',
        './source/MapImages/anim_map_test_0020128.jpg',
        './source/MapImages/anim_map_test_0020129.jpg',
        './source/MapImages/anim_map_test_0020130.jpg',
        './source/MapImages/anim_map_test_0020131.jpg',
        './source/MapImages/anim_map_test_0020132.jpg',
        './source/MapImages/anim_map_test_0020133.jpg',
        './source/MapImages/anim_map_test_0020134.jpg',
        './source/MapImages/anim_map_test_0020135.jpg',
        './source/MapImages/anim_map_test_0020136.jpg',
        './source/MapImages/anim_map_test_0020137.jpg',
        './source/MapImages/anim_map_test_0020138.jpg',
        './source/MapImages/anim_map_test_0020139.jpg',
        './source/MapImages/anim_map_test_0020140.jpg',
        './source/MapImages/anim_map_test_0020141.jpg',
        './source/MapImages/anim_map_test_0020142.jpg',
        './source/MapImages/anim_map_test_0020143.jpg',
        './source/MapImages/anim_map_test_0020144.jpg',
        './source/MapImages/anim_map_test_0020145.jpg',
        './source/MapImages/anim_map_test_0020146.jpg',
        './source/MapImages/anim_map_test_0020147.jpg',
        './source/MapImages/anim_map_test_0020148.jpg',
        './source/MapImages/anim_map_test_0020149.jpg',
        './source/MapImages/anim_map_test_0020150.jpg'
    // добавь все 50 изображений
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
                <div className='event-block' />
            <div className={'gradient-under-map'}/>
        </div>
    );
};

export default ImageSwitcher;