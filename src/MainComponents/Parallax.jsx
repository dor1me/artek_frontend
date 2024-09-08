import React, { useEffect, useRef } from 'react';
import './MainStyles.css'; // Импортируйте стили здесь, если они находятся в отдельном файле

const ParallaxComponent = () => {
    const wrapperRef = useRef(null);
    const layersRef = useRef([]);

    const handleParallax = (evt) => {
        if (!wrapperRef.current) return;

        // размер области просмотра
        const parallaxLeftOffset = wrapperRef.current.getBoundingClientRect().left;
        const parallaxTopOffset = wrapperRef.current.getBoundingClientRect().top;

        // координаты центра экрана
        const coordX = evt.clientX - parallaxLeftOffset - 0.5 * wrapperRef.current.offsetWidth;
        const coordY = evt.clientY - parallaxTopOffset - 0.5 * wrapperRef.current.offsetHeight;

        layersRef.current.forEach(layer => {
            if (layer) {
                const layerSpeed = layer.dataset.speed;
                const x = - (coordX * layerSpeed).toFixed(2);
                const y = - (coordY * layerSpeed).toFixed(2);
                layer.style.transform = `translate(${x}px, ${y}px)`;
            }
        });
    };

    const reset = () => {
        layersRef.current.forEach(layer => {
            if (layer) {
                layer.style.transform = '';
            }
        });
    };

    useEffect(() => {
        const wrapper = wrapperRef.current;
        if (wrapper) {
            wrapper.addEventListener('mousemove', handleParallax);
            wrapper.addEventListener('mouseout', reset);
        }

        return () => {
            if (wrapper) {
                wrapper.removeEventListener('mousemove', handleParallax);
                wrapper.removeEventListener('mouseout', reset);
            }
        };
    }, []);

    return (
        <div className="wrapper">
            <div className="parallax" ref={wrapperRef}>
                <h1
                    className="parallax__layer title"
                    data-speed="0.03"
                    ref={el => layersRef.current[0] = el}
                >
                    Здорово быть енотом!
                </h1>

                <button
                    className="parallax__layer button"
                    type="button"
                    data-speed="0.05"
                    ref={el => layersRef.current[1] = el}
                >
                    Стать енотом
                </button>

                <div
                    className="parallax__layer circle"
                    data-speed="0.18"
                    ref={el => layersRef.current[2] = el}
                />
            </div>
        </div>
    );
};

export default ParallaxComponent;
