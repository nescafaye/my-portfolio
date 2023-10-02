import React from 'react'
import { motion, useScroll } from "framer-motion"

const Contact = ({ socials }) => {

  const fadeInUp = {
    from: { 
      opacity: 0,
      y: 80
    },
    to: { 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0,
        duration: 2,
        ease: "easeIn",
        delay: 0.2
      }
    },
  }

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
    hidden: { opacity: 0,  y: 20 },
    show: { opacity: 1, y: 0, transition: {
      type: "spring",
      bounce: 0,
      duration: 1,
      ease: "easeIn",
      repeat: 0
    } }
  }

  return (
    <footer id='contact' className='h-full px-8 md:px-28 py-16 lg:py-32 space-y-6 lg:space-y-20' >
        <motion.h1
        initial="from"
        whileInView="to"
        variants={fadeInUp}
        viewport={{ once: true }}
        className='h-96 flex items-center uppercase font-primary font-bold text-[100px] md:text-[150px] lg:text-[200px] leading-none dark:text-transparent neon-stroke text-glow'>
            Say hello
        </motion.h1>
        <div className='w-full lg:w-3/4 h-full flex flex-col lg:flex-row lg:justify-between lg:items-end gap-y-8'>
            <div>
              <motion.ul 
                initial="hidden"
                whileInView="show"
                variants={container}
                viewport={{ once: true }}
                className='font-secondary text-3xl lg:text-6xl space-y-2 pb-8 lg:pb-0 border-b lg:border-none'>
                <motion.li variants={item}>Home</motion.li>
                <motion.li variants={item}>About</motion.li>
                <motion.li variants={item}>Work</motion.li>
                <motion.li variants={item}>Contact</motion.li>
              </motion.ul>
            </div>
            <div>
              <motion.ul
              initial="hidden"
              whileInView="show"
              variants={container}
              viewport={{ once: true }} 
              className='font-secondary text-3xl lg:text-6xl space-y-2 pb-8 lg:pb-0 border-b lg:border-none'>
                  {socials.map((social, index) => {
                    return (
                      <motion.li key={index} variants={item}>
                        <a href={social.socialUrl} target="_blank" rel="noopener noreferrer">{social.socialName}</a>
                      </motion.li>
                    )
                  })}
              </motion.ul>
            </div>
        </div>
      <div className='flex flex-row justify-between pt-6 opacity-50 lg:border-t border-dark-2 dark:border-light'>
        <div className='font-secondary text-sm'>
          &copy; 2023
        </div>
        <div className='font-secondary text-sm'>
          design and code by faye
        </div>
      </div>
    </footer>
  )
}

export default Contact