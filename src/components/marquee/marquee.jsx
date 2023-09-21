import React from "react";

const Marquee = ({ text, size }) => {

  const num = 20;
  const items = [];

  for (let i = 0; i < num; i++) {
    items.push(
      <span key={i} className="whitespace-nowrap">
        {text}
      </span>
    );
  }

  const TextSize = {
    small: "text-5xl gap-x-8",
    large: "text-8xl gap-x-10"
  }

  const classNames = "h-full w-full flex gap-x-10 font-primary font-bold marquee-animate" + " " + TextSize[size]

  return (
    <div className="w-full py-4 lg:py-5 overflow-x-hidden relative border text-transparent dark-stroke">

      <div className={classNames}>
            {items} {items}
      </div>

    </div>
  );
};

export default Marquee;
