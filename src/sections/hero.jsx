import { useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion"
import darkArrow from "../assets/shape/dark_arrow.svg"
import darkSparkle from "../assets/shape/dark_sparkle.svg"
import darkStar from "../assets/shape/dark_star.svg"
import pinkArrow from "../assets/shape/arrow.svg"
import pinkSparkle from "../assets/shape/sparkle.svg"
import pinkStar from "../assets/shape/star.svg"
import { useTheme } from '../context/themeContext';

const Hero = ({intro}) => {

  const { isDarkMode } = useTheme();
  
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
      opacity: 1
    },
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
        className="dark:text-light w-[80%] md:w-[60%] lg:w-[35%] font-secondary font-light italic text-sm md:text-base self-start" >
          {intro}
      </motion.h4>
      <div 
        className={`w-full text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[180px] font-regular font-primary tracking-tight uppercase`}>
          <div className="overflow-hidden">
            <motion.div className="flex gap-2 lg:gap-8 items-center" variants={fadeInUp} initial="from" animate="to" 
            transition={{type: "spring",
              bounce: 0,
              duration: 1.2,
              ease: "easeIn",
            }}>
              <span>Web</span>
              <img src={isDarkMode ? (pinkArrow) : (darkArrow)} className="w-14 h-14 sm:w-16 sm:h-16 md:w-24 md:h-24 xl:w-48 xl:h-48 rotate-45" alt=""/>
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div className="text-center lg:text-right" variants={fadeInUp} initial="from" animate="to" 
              transition={{type: "spring",
              bounce: 0,
              duration: 1.2,
              ease: "easeIn",
              delay: 0.20
            }}>
              Developer
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div className="flex gap-2 lg:gap-8 items-center" variants={fadeInUp} initial="from" animate="to" 
            transition={{type: "spring",
              bounce: 0,
              duration: 1.2,
              ease: "easeIn",
              delay: 0.40
            }}>
              <span>Designer</span>
              <img src={isDarkMode ? (pinkSparkle) : (darkSparkle)}className="w-14 h-14 sm:w-16 sm:h-16 md:w-24 md:h-24 xl:w-48 xl:h-48" alt=""/>
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div className="flex gap-2 lg:gap-8 justify-end items-center" variants={fadeInUp} initial="from" animate="to"
              transition={{type: "spring",
              bounce: 0,
              duration: 1.2,
              ease: "easeIn",
              delay: 0.60
            }}>
              <img src={isDarkMode ? (pinkStar) : (darkStar)} className="w-14 h-14 sm:w-16 sm:h-16 md:w-24 md:h-24 xl:w-48 xl:h-48" alt=""/>
              <span>Dreamer.</span>
            </motion.div>
          </div>
      </div>
    </section>
  );
};

export default Hero;
