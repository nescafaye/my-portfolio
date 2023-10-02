import { React, useRef } from 'react';
import Button from '../components/button/button'
import { Icon } from "@iconify/react";

const Other = ({ otherProjects }) => {

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

  return (
    <section className='px-0 md:px-28 py-16 space-y-8 overflow-hidden' >

      <div className='flex justify-end gap-4 px-8 md:px-0'>
        <Button toggle={scrollLeft} type="icon" style="outlined" shape="rounded">
          <Icon icon="ion:arrow-back" width="22" className="mx-auto" />
        </Button>
        <Button toggle={scrollRight} type="icon" style="filloutlined" shape="rounded">
          <Icon icon="ion:arrow-forward" width="22" className="mx-auto" />
        </Button>
      </div>

      <div className='h-full w-full flex flex-col lg:flex-row gap-12'>

          <div className='w-full xl:w-1/4 px-8 md:px-0'>

            <div className="font-secondary lg:text-xl uppercase">
                Other Works
            </div>

          </div>

          <div className='w-full xl:w-3/4'>

            <div className='flex flex-row flex-nowrap gap-2 md:gap-4 lg:gap-8 overflow-x-auto' ref={sliderRef}>

              {
                otherProjects.map((other, index) => {
                  return (
                    <div className='h-[36rem] min-w-[26rem] overflow-clip' key={index}>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src={other.projectImage} alt={other.projectAlt}
                        className='h-full w-full object-cover hover:scale-110 transition-transform duration-500'/>
                      </a>
                    </div>
                  )
                })
              }

            </div>

          </div>

      </div>
    </section>
  )
}

export default Other