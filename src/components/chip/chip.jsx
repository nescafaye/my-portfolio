import React from 'react'

const Chip = ({shape, variant,children}) => {

  const ChipShape = {
    rounded: "rounded-full",
    sharp: "rounded-none"
  };
  
  const ChipVariant = {
    regular: "bg-slate-200 text-gray-500",
    beginner: "border-cyan-400",
    intermediate: "border-yellow-300",
    advanced: "border-lime-400"
  }

  const classNames = "font-small font-medium text-sm w-fit px-6 py-1 border-[1px]" + " " + ChipShape[shape] + " " + ChipVariant[variant];

  return (
    <div className={classNames}>
        {children}
    </div>
  )
}

export default Chip