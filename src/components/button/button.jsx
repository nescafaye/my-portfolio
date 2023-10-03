import React from "react";

const Button = ({ style, shape, color, type, toggle, link, children }) => {
  
  const ButtonStyle = {
    filled: "bg-light dark:bg-dark",
    outlined: `border border-dark dark:border-neon-pink dark:border-${color} bg-${color} dark:bg-dark`,
  };

  const ButtonShape = {
    rounded: "rounded-full",
    sharp: "rounded-none",
  };

  const ButtonType = {
    text: "font-secondary text-sm md:text-sm px-8 h-[36px] md:h-[42px] uppercase",
    icon: "w-[36px] h-[36px] md:w-[42px] md:h-[42px]"
  }

  const classNames = ButtonStyle[style] + " " + ButtonShape[shape] + " " + ButtonType[type];

  return (

    link ? 
    ( <a href={link} target="_blank">
        <button type="button" onClick={toggle} className={classNames}>
          {children}
        </button>
      </a> ) : (

      <button type="button" onClick={toggle} className={classNames}>
        {children}
      </button>
    )

  );
};

export default Button;
