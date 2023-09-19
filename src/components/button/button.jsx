import React from "react";

const Button = ({ style, shape, variant, type, toggle, children }) => {
  
  const ButtonStyle = {
    filled: "bg-slate-300 dark:bg-transparent",
    outlined: "border-[1px] border-black dark:border-white",
    filloutlined: "bg-slate-300 dark:bg-transparent border-[1px] border-black dark:border-white",
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
    <button type="button" onClick={toggle} className={classNames}>
      {children}
    </button>
  );
};

export default Button;
