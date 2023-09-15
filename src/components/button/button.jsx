import React from "react";

const Button = ({ style, shape, variant, type, children }) => {
  
  const ButtonStyle = {
    filled: "bg-slate-300",
    outlined: "border-[1px] border-black",
    filloutlined: "bg-slate-300 border-[1px] border-black",
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
    text: "font-urban font-medium px-7 py-2",
    icon: "w-[42px] h-10"
  }

  const classNames = ButtonStyle[style] + " " + ButtonShape[shape] + " " + ButtonVariant[variant] + " " + ButtonType[type];

  return (
    <button type="button" className={classNames}>
      {children}
    </button>
  );
};

export default Button;
