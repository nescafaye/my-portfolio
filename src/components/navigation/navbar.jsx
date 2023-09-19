import React from 'react'
import Button from '../button/button'
import { Icon } from "@iconify/react";
// import useDarkMode from '../../theme';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {


  return (
    // <div className='h-screen'>
        <div className='flex w-full justify-between items-center px-6 py-4 md:px-8 md:py-6 sticky top-0 z-50'>
            
            <div>Logo here</div>

            <div className='flex items-center font-caption space-x-2 lg:space-x-4'>
                
                <Button type="text" style="filloutlined" shape="rounded">Download Resume</Button>

                <Button toggle={toggleDarkMode} type="icon" style="filloutlined" shape="rounded">
                  <Icon icon={isDarkMode ? "iconamoon:mode-light" : "iconamoon:mode-dark"} width="18" className="mx-auto" />
                </Button>

            </div>
        </div>
    // </div>
  )
}

export default Navbar