import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHidden, setIsHidden] = useState(false);

  // Update cursor position
  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updatePosition);

    const hideCursor = () => {
      setIsHidden(true);
    };

    const showCursor = () => {
      setIsHidden(false);
    };

    document.addEventListener('mouseleave', hideCursor);
    document.addEventListener('mouseenter', showCursor);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseleave', hideCursor);
      document.removeEventListener('mouseenter', showCursor);
    };
  }, []);

  const cursorSize = 42; // Set the cursor size here
  const cursorHalfSize = cursorSize / 2;

  // Check if it's a mobile device based on screen width
  const isMobile = useMediaQuery({ maxWidth: 768 }); // You can adjust the threshold as needed

  return (
    <div
      className={`cursor ${isHidden || isMobile ? 'hidden' : ''}`}
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
