import React from 'react'
import Button from '../button/button'

const Navbar = () => {
  return (
    // <div className='h-screen'>
        <div className='h-20 flex w-full justify-between items-center px-8 py-6 sticky top-0 z-50 bg-white backdrop-blur-lg bg-opacity-40 shadow'>
            <div>Logo here</div>
            <div className='space-x-6'>
                <Button>Download Resume</Button>

                <button type="button" className='w-[42px] h-10 rounded-full border-[1px] border-black bg-slate-300'>
                    HI
                </button>
            </div>
        </div>
    // </div>
  )
}

export default Navbar