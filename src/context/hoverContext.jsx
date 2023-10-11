import React, { createContext, useState, useContext } from 'react';

const HoverContext = createContext();

export const useHover = () => {
  
  return useContext(HoverContext);
};

export const HoverProvider = ({ children }) => {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <HoverContext.Provider value={{ isHovered, handleMouseEnter, handleMouseLeave }}>
      {children}
    </HoverContext.Provider>
  );
};
