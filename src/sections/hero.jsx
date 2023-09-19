import React from "react";

const Hero = () => {

  return (
    <div className="h-full flex flex-col justify-start items-center px-8 md:px-28 lg:px-44 py-12 md:pb-20 gap-y-12">
      <div className="dark:text-dark-10 w-[80%] md:w-[60%] lg:w-[45%] font-secondary text-sm md:text-base self-start">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et euismod
        sapien Pellentesque habitant. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Ut et euismod sapien.
      </div>
      <div className={`w-full text-6xl md:text-6xl lg:text-8xl font-primary font-bold text-transparent dark-stroke text-glow break-words`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et euismod
        sapien Pellentesque habitant.
      </div>
    </div>
  );
};

export default Hero;
