import React, { useEffect, useRef } from "react";

const Hero = ({intro, quote }) => {

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();


  return (
    <section id="home" className="h-full flex flex-col justify-start items-center px-8 md:px-28 py-20 gap-y-12">
      <div className="hidden md:block absolute left-7 top-[50%]" style={{writingMode: 'vertical-rl', textOrientation: 'upright'}}>
        {currentYear}
      </div>
      <h4 className="dark:text-light w-[80%] md:w-[60%] lg:w-[45%] font-secondary text-sm md:text-base self-start" >
        {intro}
      </h4>
      <h1 className={`w-full text-6xl md:text-8xl lg:text-[180px] font-bold font-primary uppercase dark:text-transparent neon-stroke text-glow`}>
        {quote}
      </h1>
    </section>
  );
};

export default Hero;
