import { useRef } from 'react';
import { motion } from "framer-motion"
import Button from '../components/button/button'
import { Icon } from "@iconify/react";

const PassionProj = ({ projects }) => {

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 436;
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 436; 
    }
  };

  const fadeIn = {
    from: { 
      opacity: 0,
    },
    to: { 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      }
    },
  }

  return (
    <motion.section 
    initial="from"
    whileInView="to"
    variants={fadeIn}
    viewport={{ once: true }} 
    className='px-0 md:px-24 py-16 space-y-8 overflow-hidden' 
    >

      <div className='hidden lg:flex justify-end gap-4 px-8 md:px-0'>
        <Button toggle={scrollLeft} type="icon" style="outlined" shape="rounded">
          <Icon icon="ion:arrow-back" width="22" className="mx-auto" />
        </Button>
        <Button toggle={scrollRight} type="icon" style="outlined" shape="rounded">
          <Icon icon="ion:arrow-forward" width="22" className="mx-auto" />
        </Button>
      </div>

      <div className='flex flex-col lg:flex-row gap-12'>

          <div className='w-full xl:w-1/4 px-8 md:px-0'>

            <h4 className="font-secondary font-semibold lg:text-xl uppercase">
                Passion Projects
            </h4>

          </div>

          <div className='w-full lg:w-3/4'>

            <div className='flex flex-row flex-nowrap gap-2 md:gap-4 lg:gap-8 overflow-x-auto' ref={sliderRef}>

              {
                projects.map((proj, index) => {
                  return (
                    <div className='h-[30rem] min-w-[26rem] overflow-clip' key={index}>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src={proj.projectImage} alt={proj.projectAlt}
                        className='h-full w-full object-cover hover:scale-110 transition-transform duration-500'/>
                      </a>
                    </div>
                  )
                })
              }

            </div>

          </div>

      </div>
    </motion.section>
  )
}

export default PassionProj