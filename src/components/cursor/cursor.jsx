import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHidden, setIsHidden] = useState(false);

  // Update cursor position based on mouse movement
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  // Hide the cursor when leaving the document
  const handleMouseLeave = () => {
    setIsHidden(true);
  };

  // Show the cursor when entering the document
  const handleMouseEnter = () => {
    setIsHidden(false);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
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
        left: `${mousePosition.x - cursorHalfSize}px`,
        top: `${mousePosition.y - cursorHalfSize}px`,
        width: `${cursorSize}px`,
        height: `${cursorSize}px`,
      }}
    ></div>
  );
};

export default Cursor;
