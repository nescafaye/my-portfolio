import React from 'react'
import Button from '../button/button';
import { Icon } from "@iconify/react";
import { useEffect, useState } from 'react';

const Menu = () => {

  const [isMenuVisible, setMenuVisible] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

       // Calculate the height of the hero section
       const heroSectionHeight = 200; // Change this value to match your hero section's height

       // Check if the user has scrolled past the hero section
       const shouldShowMenu = window.scrollY > heroSectionHeight;
 
       setMenuVisible(shouldShowMenu);
     };
 
     window.addEventListener('scroll', handleScroll);
 
     return () => {

       window.removeEventListener('scroll', handleScroll);
     };
   }, []);
  
  return (

      <nav className={`hidden md:flex w-screen max-w-screen-2xl justify-center fixed z-50 transition-transform duration-300 ease-in-out transform ${isMenuVisible ? 'translate-y-0 bottom-6' : 'translate-y-full bottom-0'}`}>
          
          <div className='font-secondary px-12 py-3 rounded-full border md:border-dark md:dark:border-neon-pink bg-light dark:bg-dark backdrop-blur-lg bg-opacity-60 dark:backdrop-blur-lg dark:bg-opacity-60 uppercase'>
              
              <ul className='text-sm flex flex-row gap-10'>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>

          </div>

      </nav>

  )
}

export default Menu