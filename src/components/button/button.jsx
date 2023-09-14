import React from "react";

export const ButtonType = {
    
};

const Button = ({children}) => {

    const classNames =""

  return (
    
      <button
        type="button" 
        className="font-urban font-medium px-7 py-2 rounded-full border-[1px] border-black bg-slate-300">
            {children}
      </button>
    
  );
};

export default Button;
