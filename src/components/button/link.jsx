import React from 'react'

const Link = ({ href, target, rel, children }) => {
  return (
    <a href={href} target={target} rel={rel} className='hover:font-bold hover:italic hover:ease-in-out'>{children}</a>
  )
}

export default Link