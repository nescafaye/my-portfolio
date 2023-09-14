import React from 'react'

const Menu = () => {
  return (
    <div>
        <div className='flex w-full justify-center fixed bottom-10 z-50'>
            <ul className='flex gap-10 px-12 py-3 rounded-full border-[1px] border-black bg-slate-200 uppercase text-sm'>
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