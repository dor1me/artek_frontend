import React, { useState, useEffect } from 'react';

const MousePosition = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        console.log(`X: ${position.x}, Y: ${position.y}`);
    }, [position]);

    return (
        <div>
            <p>Двигайте мышь по экрану, чтобы увидеть координаты в консоли.</p>
        </div>
    );
};

export default MousePosition;
