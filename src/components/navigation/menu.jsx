import React from 'react'

const Menu = () => {
  return (
    <div>
        <div className='flex w-full justify-center fixed bottom-10 z-50'>
            <ul className='font-secondary text-sm flex gap-8 md:gap-10 px-8 md:px-12 py-3 rounded-full border-[1px] border-black bg-slate-200 dark:bg-dark-60 dark:backdrop-blur-lg dark:bg-opacity-40 uppercase'>
                <li>Home</li>
                <li>About</li>
                <li>Works</li>
                <li>Contacts</li>
            </ul>
        </div>
    </div>
  )
}

export default Menu