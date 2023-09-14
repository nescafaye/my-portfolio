import React from "react";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col justify-start items-center px-44 py-6 gap-y-12 border-2">
      <div className="w-[40%] self-start">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et euismod
        sapien Pellentesque habitant. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Ut et euismod sapien.
      </div>
      <div className="font-serif font-semibold text-6xl border-2 leading-tight tracking-wider text-transparent text-stroke text-glow">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et euismod
        sapien Pellentesque habitant.
      </div>
    </div>
  );
};

export default Hero;
