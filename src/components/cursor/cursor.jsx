import React, { useState, useEffect } from 'react';
import cursor from '../../assets/cursor.svg'

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Update cursor position
  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updatePosition);
    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  const cursorSize = 22; // Set the cursor size here
  const cursorHalfSize = cursorSize / 2;

  return (
    <div
      className="cursor"
      style={{
        left: `${position.x - cursorHalfSize}px`,
        top: `${position.y - cursorHalfSize}px`,
        width: `${cursorSize}px`,
        height: `${cursorSize}px`,
      }}
    ></div>
  );
};

export default Cursor;
