import React, { useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion"
import arrow from "../assets/shape/dark_arrow.svg"
import sparkle from "../assets/shape/dark_sparkle.svg"
import star from "../assets/shape/dark_star.svg"

const Hero = ({intro, quote }) => {

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const ref = useRef(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0,  y: 50 },
    show: { opacity: 1, y: 0, transition: {
      type: "spring",
      bounce: 0,
      duration: 1,
      ease: "easeIn",
      repeat: 0
    } }
  }

  return (
    <section ref={ref} id="home" className="h-full flex flex-col justify-start items-center px-8 md:px-24 py-20 gap-y-12">
      <motion.div 
        className="hidden md:block absolute left-7 top-[30%] lg:top-[50%]" style={{writingMode: 'vertical-rl', textOrientation: 'upright'}}>
          {currentYear}
      </motion.div>
      <motion.h4
        initial={{opacity: 0}}
        whileInView={{opacity: 1}} 
        transition={{duration: 1}}
        viewport={{ once: true }}
        className="dark:text-light w-[80%] md:w-[60%] lg:w-[35%] font-secondary text-sm md:text-base self-start" >
          {intro}
      </motion.h4>
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={`w-full text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[180px] font-bold font-primary uppercase dark:text-transparent neon-stroke text-glow`}>
          <motion.div variants={item} className="flex gap-8 overflow-hidden"><span>Web</span><img src={arrow} className="w-48 h-48" alt=""/></motion.div>
          <motion.div variants={item} className="text-right">Developer</motion.div>
          <motion.div variants={item} className="flex gap-8">Designer<img src={sparkle} className="w-48 h-48" alt=""/></motion.div>
          <motion.div variants={item} className="flex gap-8"><img src={star} className="w-48 h-48" alt=""/>Dreamer</motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
