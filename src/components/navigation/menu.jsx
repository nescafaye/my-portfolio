import React from 'react'
import { useEffect, useState } from 'react';

const Menu = () => {

  const [isMenuVisible, setMenuVisible] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

       // Calculate the height of the hero section
       const heroSectionHeight = 1000; // Change this value to match your hero section's height

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
    <div>
        <div className={`flex w-full justify-center fixed z-50 
        transition-transform duration-300 ease-in-out transform ${isMenuVisible ? 'translate-y-0 bottom-10' : 'translate-y-full bottom-0'}`}>
            <ul className='font-secondary text-sm flex gap-8 md:gap-10 px-8 md:px-12 py-3 rounded-full border-[1px] border-dark dark:border-neon-pink bg-light dark:bg-dark dark:backdrop-blur-lg dark:bg-opacity-40 uppercase'>
                <li>Home</li>
                <li>About</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Menu