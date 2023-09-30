import { React, useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";

import sparkle from "../../assets/shape/sparkle.svg";
import darkSparkle from "../../assets/shape/dark_sparkle.svg"


const Marquee = ({ text, size, isDarkMode, children, baseVelocity = 100 }) => {

  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -500, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

   /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */

  const num = 20;
  const items = [];

  for (let i = 0; i < num; i++) {
    items.push(
      <>
          <span key={`text-${i}`} className="whitespace-nowrap">
            {text}
          </span>
          <img key={`sparkle-${i}`}
            className="w-16 h-16"
            src={isDarkMode ? (sparkle) : (darkSparkle)}
          />
      </>
    );
  }

  const TextSize = {
    small: "text-5xl gap-x-8",
    large: "text-5xl gap-x-8 lg:text-9xl lg:gap-x-10",
  };

  const classNames =
    "h-full w-full flex flex-row items-center gap-x-10 font-primary font-bold marquee-animate" +
    " " +
    TextSize[size];

  return (
    <div className="w-full z-0 py-4 lg:py-5 mt-20 overflow-hidden relative border-y border-dark dark:border-neon-pink dark:text-transparent neon-stroke text-glow">
      <motion.div className={classNames} style={{ x }}>
        {items} {items}  
      </motion.div>
    </div>
  );
};

export default Marquee;
