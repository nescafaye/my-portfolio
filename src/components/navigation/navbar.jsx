import React, { useState, useEffect } from 'react'
import Button from '../button/button'
import { Icon } from "@iconify/react";
import { useMediaQuery } from 'react-responsive';
import { useTheme } from '../../context/themeContext';

const Navbar = () => {

  const { isDarkMode, toggleDarkMode } = useTheme();

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const [scrollingUp, setScrollingUp] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setScrollingUp(prevScrollPos > currentScrollPos);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // <div className='h-screen'>
        <nav className={`flex w-full justify-between items-center px-6 md:px-8 sticky z-50 transition-transform duration-300 ease-in-out transform ${scrollingUp ? 'translate-y-0 top-6' : '-translate-y-full -top-1'}`}>

            <div className='font-primary text-3xl md:text-4xl font-bold'>f;</div>   

            <div className='flex flex-row items-center space-x-2 lg:space-x-8'>
                
                <Button>
                  {isMobile ? <Icon icon="carbon:document" width="20" /> 
                  : "Download Resume" }
                </Button>

                <Button toggle={toggleDarkMode}>
                  <Icon icon={isDarkMode ? "iconamoon:mode-light" : "iconamoon:mode-dark"} width="20" />
                </Button>

            </div>
        </nav>
    // </div>
  )
}

export default Navbar