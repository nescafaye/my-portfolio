import React from "react";
import sparkle from "../../assets/shape/sparkle.svg"

const Marquee = ({ text, size }) => {

  const num = 20;
  const items = [];

  for (let i = 0; i < num; i++) {
    items.push(
      <>
        <span key={i} className="whitespace-nowrap">
          {text}
        </span>
        <img className="w-16 h-16" src={sparkle} alt="sparkle"/> 
      </>
    );
  }

  const TextSize = {
    small: "text-5xl gap-x-8",
    large: "text-5xl gap-x-8 lg:text-8xl lg:gap-x-10"
  }

  const classNames = "h-full w-full flex items-center gap-x-10 font-primary font-bold marquee-animate" + " " + TextSize[size]

  return (
    <div className="w-full py-4 lg:py-5 mt-20 overflow-hidden relative border-y border-dark dark:border-neon-pink text-transparent neon-stroke">

      <div className={classNames}>
            {items} {items}
      </div>

    </div>
  );
};

export default Marquee;
