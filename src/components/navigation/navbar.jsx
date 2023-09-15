import React from 'react'
import Button from '../button/button'
import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    // <div className='h-screen'>
        <div className='h-20 flex w-full justify-between items-center px-8 py-6 sticky top-0 z-50 bg-white backdrop-blur-lg bg-opacity-40 shadow'>
            
            <div>Logo here</div>

            <div className='flex items-center flexfont-urban font-medium space-x-4'>
                
                <Button type="text" style="filloutlined" shape="rounded">Download Resume</Button>

                <Button type="icon" style="filloutlined" shape="rounded">
                  <Icon icon="iconamoon:mode-dark-light" width="18" className="mx-auto" />
                </Button>

            </div>
        </div>
    // </div>
  )
}

export default Navbar