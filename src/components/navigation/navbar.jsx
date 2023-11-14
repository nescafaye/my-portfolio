import { useState, useEffect, useRef } from 'react'
import Button from '../button/button'
import { Icon } from "@iconify/react";
import { useMediaQuery } from 'react-responsive';
import { useTheme } from '../../context/themeContext';

const Navbar = () => {

  const { isDarkMode, toggleDarkMode } = useTheme();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [scrollingUp, setScrollingUp] = useState(true);
  const prevScrollPosRef = useRef(0);

  useEffect(() => {
    
    const handleScroll = () => {
      const currentScrollPos = window.scrollY || window.pageYOffset;
      setScrollingUp(prevScrollPosRef.current > currentScrollPos);
      prevScrollPosRef.current = currentScrollPos;
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // <div className='h-screen'>
        <nav className={`flex w-full justify-between items-center px-6 md:px-8 sticky z-50 dark:mix-blend-difference transition-transform duration-300 ease-in-out transform ${scrollingUp ? 'translate-y-0 top-6' : '-translate-y-full -top-1'}`}>

            <div className='font-primary text-3xl md:text-4xl font-bold'>f;</div>   

            <div className='flex flex-row items-center space-x-2 lg:space-x-8'>
                
                <Button link="https://www.figma.com/proto/80Ml477E1oorOc80XnoLzu/My-Portfolio?node-id=224-93&starting-point-node-id=224%3A93&mode=design&t=3Kl3DD0hcqniUsrl-1">
                  {isMobile ? <Icon icon="carbon:document" width="20" /> 
                  : "View Portfolio" }
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