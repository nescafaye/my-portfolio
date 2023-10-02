import React, { useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion"
import SplitType from 'split-type';

const Hero = ({intro, quote }) => {

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const ref = useRef(null);

  const fadeInUp = {
    from: { 
      y: 100,
      opacity: 0
    },
    to: { 
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0,
        duration: 2,
        ease: "easeIn",
        repeat: 0
      }
    },
  }

  return (
    <section ref={ref} id="home" className="h-full flex flex-col justify-start items-center px-8 md:px-28 py-20 gap-y-12">
      <motion.div 
      // initial={{ y: 0 }}
      // whileInView={{ y: 100 }}
      // transition={{ duration: 2 }}
        className="hidden md:block absolute left-7 top-[50%]" style={{writingMode: 'vertical-rl', textOrientation: 'upright'}}>
          {currentYear}
      </motion.div>
      <motion.h4
        initial={{opacity: 0}}
        whileInView={{opacity: 1}} 
        transition={{duration: 1}}
        viewport={{ once: true }}
        className="dark:text-light w-[80%] md:w-[60%] lg:w-[45%] font-secondary text-sm md:text-base self-start" >
          {intro}
      </motion.h4>
      <motion.h1 
        variants={fadeInUp}
        initial="from"
        whileInView="to"
        viewport={{ once: true }}
        className={`w-full text-6xl md:text-8xl lg:text-[180px] font-bold font-primary uppercase dark:text-transparent neon-stroke text-glow break-words`}>
          {quote}
      </motion.h1>
    </section>
  );
};

export default Hero;
