import React from "react";
import { useHover } from '../../context/hoverContext';

const Button = ({ style, shape, type, toggle, link, children, ...props }) => {

  const { handleMouseEnter, handleMouseLeave } = useHover();
  
  const ButtonStyle = {
    filled: "bg-dark-2 text-light dark:bg-neon-pink",
    outlined: "border border-dark dark:border-neon-pink bg-light dark:bg-dark hover:bg-dark-2 hover:text-light dark:hover:bg-neon-pink duration-200",
  };

  const ButtonShape = {
    rounded: "rounded-full",
    sharp: "rounded-none",
    none: "rounded-none"
  };

  const ButtonType = {
    text: "font-secondary text-sm md:text-sm px-8 h-[36px] md:h-[42px]",
    icon: "w-[36px] h-[36px] md:w-[42px] md:h-[42px]"
  }

  const classNames = ButtonStyle[style] + " " + ButtonShape[shape] + " " + ButtonType[type] + " " + "uppercase";

  return (

    <a href={link ? link : undefined} 
      target={link ? '_blank' : undefined}
      rel="noreferrer"
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}>
      <button type="button" onClick={toggle} className={classNames} {...props}>
        {children}
      </button>
    </a>
    
  );
};

export default Button;
