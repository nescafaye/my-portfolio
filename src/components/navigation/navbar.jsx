import React from 'react'
import Button from '../button/button'
import { Icon } from "@iconify/react";
// import useDarkMode from '../../theme';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {


  return (
    // <div className='h-screen'>
        <nav className='flex w-full justify-between items-center px-6 md:px-8 sticky top-6 z-50'>
            
            <div>Logo here</div>

            <div className='flex items-center font-caption space-x-2 lg:space-x-4'>
                
                <Button type="text" style="filloutlined" shape="rounded">Download Resume</Button>

                <Button toggle={toggleDarkMode} type="icon" style="filloutlined" shape="rounded">
                  <Icon icon={isDarkMode ? "iconamoon:mode-light" : "iconamoon:mode-dark"} width="25" className="mx-auto" />
                </Button>

            </div>
        </nav>
    // </div>
  )
}

export default Navbar