import React, { useState } from 'react'
import Button from '../button/button'
import { Icon } from "@iconify/react";
import { useMediaQuery } from 'react-responsive';
import Modal from '../modal/modal';
import Hamburger from './hamburger';
// import useDarkMode from '../../theme';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen); // Toggle the modal's state
  };

  return (
    // <div className='h-screen'>
        <nav className='flex w-full justify-between items-center px-6 md:px-8 sticky top-6 z-50'>

            <div className='font-primary text-4xl font-bold'>f.</div>   

            <div className='flex items-center space-x-2 lg:space-x-4'>
                
                <Button type={isMobile ? 'icon' : 'text'} style="filloutlined" shape="rounded">
                  {isMobile ? <Icon icon="carbon:document" width="18" className="mx-auto" /> 
                  : "Download Resume" }
                </Button>

                <Button toggle={toggleDarkMode} type="icon" style="filloutlined" shape="rounded">
                  <Icon icon={isDarkMode ? "iconamoon:mode-light" : "iconamoon:mode-dark"} width="18" className="mx-auto" />
                </Button>

                <div className='block md:hidden'>
                  <Button toggle={toggleModal} type="icon" style="filloutlined" shape="rounded">
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