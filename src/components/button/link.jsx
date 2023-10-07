import React from 'react'

const Link = ({ href, target, rel, children }) => {
  return (
    <a href={href} target={target} rel={rel} className='hover:font-normal hover:italic hover:text-transparent stroke hover:ease-in-out'>{children}</a>
  )
}

export default Link