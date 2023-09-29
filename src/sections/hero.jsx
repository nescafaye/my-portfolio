import React, { useEffect, useRef } from "react";
import { gsap } from 'gsap'
import SplitType from 'split-type'

const Hero = ({intro, quote }) => {

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  // Create a ref for the h1 element
  const h1Ref = useRef(null);

  let chars;

  useEffect(() => {

    // Initialize SplitType when the component mounts
    const ourText = SplitType.create(h1Ref.current, { types: 'chars' });
    chars = ourText.chars

    return () => {
      // Clean up SplitType when the component unmounts
      if (ourText.current) {
        ourText.current.dispose();
      }
    };
  }, []);

  useEffect(() => {

    gsap.fromTo(
      chars,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 2,
        ease: 'power4.out',
      }
    );
  }, []); 

  // Add non-breaking spaces between words
  const quoteLineBreak = quote.split(' ').map((word, index, array) => (
    <>
      <span className="clip-polygon">{word}</span>
      {index !== array.length - 1 && <br/>}
    </>
  ));

  return (
    <section id="home" className="h-full flex flex-col justify-start items-center px-8 md:px-28 py-20 gap-y-12">
      <div className="hidden md:block absolute left-7 top-[50%]" style={{writingMode: 'vertical-rl', textOrientation: 'upright'}}>
        {currentYear}
      </div>
      <h4 className="dark:text-light w-[80%] md:w-[60%] lg:w-[45%] font-secondary text-sm md:text-base self-start" >
        {intro}
      </h4>
      <h1 ref={h1Ref} className={`w-full text-6xl md:text-8xl lg:text-[180px] font-bold font-primary uppercase dark:text-transparent neon-stroke text-glow`}>
        {quoteLineBreak}
      </h1>
    </section>
  );
};

export default Hero;
