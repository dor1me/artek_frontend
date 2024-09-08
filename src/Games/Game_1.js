import React, { useEffect, useRef } from 'react';

const UnityGame = () => {
    const unityContainerRef = useRef(null);

    useEffect(() => {
        const loadUnity = () => {
            const script = document.createElement('script');
            script.src = '../public/unity/magic-story.loader.js'; // Путь к loader.js
            script.onload = () => {
                if (window.UnityLoader) {
                    window.UnityLoader.instantiate(
                        'unityContainer',
                        '../public/unity/magic-story.loader.js' // Путь к .data.br файлу
                        // Удаляем параметр { onProgress: UnityProgress }
                    );
                } else {
                    console.error('UnityLoader не найден');
                }
            };
            document.body.appendChild(script);
        };

        loadUnity();

        return () => {
            if (unityContainerRef.current) {
                unityContainerRef.current.innerHTML = '';
            }
        };
    }, []);

    return (
        <div>
            <div id="unityContainer" ref={unityContainerRef} style={{ width: '100%', height: '600px' }} />
        </div>
    );
};

export default UnityGame;
