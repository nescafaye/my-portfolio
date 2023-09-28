import React, { useState } from 'react'
import Button from '../button/button'
import { Icon } from '@iconify/react'

const Hamburger = () => {

    return (
    
    <div className=''>

        <div className='font-secondary space-y-4'>

            <ul className='text-6xl md:text-sm flex flex-col md:flex-row gap-2 md:gap-10 '>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <ul className='text-5xl md:hidden'>
                <li><a href="">LinkedIn</a></li>
                <li><a href="">Github</a></li>
                <li><a href="">Behance</a></li>
                <li><a href="">Dribbble</a></li>
            </ul>

        </div>  

    </div>
  )
}

export default Hamburger