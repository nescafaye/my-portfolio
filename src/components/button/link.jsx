import React from 'react'
import { useHover } from '../../context/hoverContext';

const Link = ({ href, target, rel, children }) => {

  const { handleMouseEnter, handleMouseLeave } = useHover();
  
  return (
    <a 
    href={href} 
    target={target} 
    rel={rel} 
    onMouseEnter={handleMouseEnter} 
    onMouseLeave={handleMouseLeave}
    className='hover:italic hover:ease-in-out'>
      {children}
    </a>
  )
  
}

export default Link