import React from 'react'

const Contact = () => {
  return (
    <div className='h-full px-8 md:px-28  py-16 lg:py-32 space-y-6'>
        <div className='h-96 flex items-center uppercase font-primary font-bold text-[100px] md:text-[150px] lg:text-[200px] leading-tight dark:text-transparent neon-stroke text-glow'>
            Say hello
        </div>
        <div className='w-full lg:w-3/4 h-full flex flex-col lg:flex-row lg:justify-between lg:items-end gap-y-8'>
            <div>
              <ul className='font-primary text-3xl lg:text-5xl space-y-2 pb-8 lg:pb-0 border-b lg:border-none'>
                <li>Home</li>
                <li>About</li>
                <li>Work</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <ul className='font-primary text-3xl lg:text-5xl space-y-2 pb-8 lg:pb-0 border-b lg:border-none'>
                  <li>LinkedIn</li>
                  <li>Github</li>
                  <li>Behance</li>
                  <li>Email</li>
              </ul>
            </div>
        </div>
      <div className='pt-6 lg:border-t border-dark-2 dark:border-light'>
        <div className='font-secondary text-sm'>
          &copy; 2023
        </div>
      </div>
    </div>
  )
}

export default Contact