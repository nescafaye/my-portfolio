import React, { useState, useEffect } from 'react'
import Button from '../button/button'
import { Icon } from "@iconify/react";
import { useMediaQuery } from 'react-responsive';
// import useDarkMode from '../../theme';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen); // Toggle the modal's state
  };

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

            <div className='flex items-center space-x-2 lg:space-x-8'>
                
                <Button>
                  {isMobile ? <Icon icon="carbon:document" width="18" className="mx-auto" /> 
                  : "Download Resume" }
                </Button>

                <Button toggle={toggleDarkMode} blend="difference">
                  <Icon icon={isDarkMode ? "iconamoon:mode-light" : "iconamoon:mode-dark"} width="18" className="mx-auto" />
                </Button>

                <div className='hidden'>
                  <Button toggle={toggleModal} type="icon" style="filled" shape="rounded">
                      <Icon icon="gg:menu-grid-o" width="18" className="mx-auto" />
                  </Button>

                  {/* <Modal isOpen={isModalOpen}>
                    <Hamburger/>
                  </Modal> */}
                </div>

            </div>
        </nav>
    // </div>
  )
}

export default Navbar