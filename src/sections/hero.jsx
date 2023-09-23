import React from "react";

const Hero = ({intro, quote }) => {

  return (
    <div className="h-full flex flex-col justify-start items-center px-8 md:px-28 py-12 md:pb-20 gap-y-12">
      <div className="dark:text-light w-[80%] md:w-[60%] lg:w-[45%] font-secondary text-sm md:text-base self-start">
        {intro}
      </div>
      <div className={`w-full text-6xl md:text-8xl lg:text-9xl font-primary font-bold uppercase dark:text-transparent neon-stroke text-glow break-words`}>
        {quote}
      </div>
    </div>
  );
};

export default Hero;
