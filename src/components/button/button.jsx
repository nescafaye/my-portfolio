import React from "react";

const Button = ({ style, shape, type, toggle, link, children }) => {
  
  const ButtonStyle = {
    filled: "bg-light dark:bg-dark",
    outlined: "border border-dark dark:border-neon-pink bg-light dark:bg-dark hover:bg-dark-2 hover:text-light dark:hover:bg-neon-pink duration-200",
  };

  const ButtonShape = {
    rounded: "rounded-full",
    sharp: "rounded-none",
  };

  const ButtonType = {
    text: "font-secondary text-sm md:text-sm px-8 h-[36px] md:h-[42px] uppercase",
    icon: "w-[36px] h-[36px] md:w-[42px] md:h-[42px]"
  }

  const classNames = ButtonStyle[style] + " " + ButtonShape[shape] + " " + ButtonType[type] + " " + "backdrop-blur-lg bg-opacity-60 dark:backdrop-blur-lg dark:bg-opacity-60";

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
