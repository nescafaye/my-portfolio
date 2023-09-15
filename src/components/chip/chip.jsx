import React from 'react'

const Chip = ({shape, variant,children}) => {

  const ChipShape = {
    rounded: "rounded-full",
    sharp: "rounded-none"
  };
  
  const ChipVariant = {
    beginner: "border-cyan-400",
    intermediate: "border-yellow-300",
    advanced: "border-lime-400"
  }

  const classNames = "font-urban font-medium text-sm w-fit px-6 py-1 border-2" + " " + ChipShape[shape] + " " + ChipVariant[variant];

  return (
    <div className={classNames}>
        {children}
    </div>
  )
}

export default Chip