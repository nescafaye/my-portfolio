import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useHover } from '../../context/hoverContext';

const Cursor = () => {
  const [position, setPosition] = useState({ x: -10, y: -10 });
  const [isHidden, setIsHidden] = useState(false);
  const { isHovered } = useHover();

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

  const cursorSize = 22; // Set the cursor size here
  const cursorHalfSize = cursorSize / 2;

  // Check if it's a mobile device based on screen width
  const isMobile = useMediaQuery({ maxWidth: 768 }); //

  const bgGradient = {
    position: 'fixed',
    inset: 0,
    background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(248, 0, 193, 0.05), transparent 80%)`,
    pointerEvents: 'none',
    mixBlendMode: 'screen'
  };

  const cursorStyle = {
    left: `${position.x - cursorHalfSize}px`,
    top: `${position.y - cursorHalfSize}px`,
    width: `${cursorSize}px`,
    height: `${cursorSize}px`,
    transform: isHovered ? 'scale(6)' : 'scale(1)',
    transition: 'transform 0.4s',
  }

  return (
    <>
      <div
        className={`${isMobile ? 'hidden' : ''}`}
        style={bgGradient}
      />

      <div
        className={`cursor ${isHidden || isMobile ? 'hidden' : ''}`}
        style={cursorStyle}
      ></div>
    </>
  );
};

export default Cursor;
