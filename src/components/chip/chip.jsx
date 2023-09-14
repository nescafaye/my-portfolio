import React from 'react'

const Chip = ({children}) => {
  return (
    <div className="font-urban font-medium text-sm w-fit px-6 py-1 rounded-full border-[1px] border-black bg-slate-300">
        {children}
    </div>
  )
}

export default Chip