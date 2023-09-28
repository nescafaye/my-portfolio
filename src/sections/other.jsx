import { React, useRef } from 'react';
import Button from '../components/button/button'
import { Icon } from "@iconify/react";

const Other = () => {

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
    <section className='px-0 md:px-28 py-16 space-y-8 overflow-hidden'>

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

            <div className="font-secondary text-5xl font-semibold lg:text-6xl xl:text-7xl lg:break-words">
                Other Works
            </div>

          </div>

          <div className='w-full xl:w-3/4'>

            <div className='flex flex-row flex-nowrap gap-2 md:gap-4 lg:gap-8 overflow-x-auto' ref={sliderRef}>
              <div className='h-[36rem] min-w-[26rem] overflow-clip'>
                <img src='https://images.unsplash.com/photo-1617785899222-fe06b15b6dd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80'
                className='h-full w-full object-cover hover:scale-110 transition-transform duration-500'/>
              </div>
              <div className='h-[36rem] min-w-[26rem] overflow-clip'>
                <img src='https://images.unsplash.com/photo-1561173477-f4a5fe106b32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1884&q=80' 
                  className='h-full w-full object-cover hover:scale-110 transition-transform duration-500'/>
              </div>
              <div className='h-[36rem] min-w-[26rem] overflow-clip'>
                <img src='https://images.unsplash.com/photo-1558155001-7e7e8b709e2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80' 
                  className='h-full w-full object-cover hover:scale-110 transition-transform duration-500'/>
              </div>
              <div className='h-[36rem] min-w-[26rem] overflow-clip'>
                <img src='https://images.unsplash.com/photo-1631016800696-5ea8801b3c2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80' 
                  className='h-full w-full object-cover hover:scale-110 transition-transform duration-500'/>
              </div>
              <div className='h-[36rem] min-w-[26rem] overflow-clip'>
                <img src='https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80' 
                  className='h-full w-full object-cover hover:scale-110 transition-transform duration-500'/>
              </div>
            </div>

          </div>

      </div>
    </section>
  )
}

export default Other