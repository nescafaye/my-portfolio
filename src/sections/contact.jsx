import React from 'react'
import { motion, useScroll } from "framer-motion"
import Link from '../components/button/link'

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
    <footer id='contact' className='h-full px-8 md:px-24 py-16 lg:py-32 space-y-6 lg:space-y-12' >
        
        <motion.h1
        initial="from"
        whileInView="to"
        variants={fadeInUp}
        viewport={{ once: true }}
        className='h-96 flex items-center uppercase font-primary text-[100px] md:text-[150px] lg:text-[200px] leading-none'>
            Say hello
        </motion.h1>

        <div className='w-full lg:w-3/4 h-full flex flex-col lg:flex-row lg:justify-between gap-y-8'>
            <div>
              <motion.ul 
                initial="hidden"
                whileInView="show"
                variants={container}
                viewport={{ once: true }}
                className='font-primary text-3xl lg:text-6xl space-y-2 pb-8 lg:pb-0 border-b lg:border-none border-black dark:border-light'>
                <motion.li variants={item}><Link href={'#home'}>Home</Link></motion.li>
                <motion.li variants={item}><Link href={'#about'}>About</Link></motion.li>
                <motion.li variants={item}><Link href={'#work'}>Work</Link></motion.li>
                <motion.li variants={item}><Link href={'#contact'}>Contact</Link></motion.li>
              </motion.ul>
            </div>
            <div>
              <motion.ul
              initial="hidden"
              whileInView="show"
              variants={container}
              viewport={{ once: true }} 
              className='font-primary text-3xl lg:text-6xl space-y-2 pb-8 lg:pb-0 border-b lg:border-none border-black dark:border-light'>
                  {socials.map((social, index) => {
                    return (
                      <motion.li key={index} variants={item}>
                        <Link href={social.socialUrl} target={'_blank'} rel={'noopener noreferrer'}>{social.socialName}</Link>
                      </motion.li>
                    )
                  })}
              </motion.ul>
            </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, width: "0%" }}
          whileInView={{ opacity: 1, width: "100%" }}
          transition={{ duration: 1, ease: "easeIn"}}
          viewport={{ once: true }}
          className="hidden lg:block w-full h-[0.5px] bg-black dark:bg-light">
        </motion.div>

        <div className='flex flex-row justify-between opacity-40 italic'>
          
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