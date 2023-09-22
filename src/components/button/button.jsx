import React from "react";

const Button = ({ style, shape, variant, type, toggle, link, children }) => {
  
  const ButtonStyle = {
    filled: "bg-light dark:bg-dark",
    outlined: "border border-black dark:border-neon-pink",
    filloutlined: "bg-light dark:bg-dark border border-black dark:border-neon-pink",
  };

  const ButtonShape = {
    rounded: "rounded-full",
    sharp: "rounded-none",
  };

  const ButtonVariant = {
    primary: "", // neon
    secondary: "", // non-neon
  };

  const ButtonType = {
    text: "font-secondary text-sm md:text-base px-6 py-2",
    icon: "w-[38px] h-[38px] md:w-[42px] md:h-[42px]"
  }

  const classNames = ButtonStyle[style] + " " + ButtonShape[shape] + " " + ButtonVariant[variant] + " " + ButtonType[type];

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
