import React from 'react'

const Chip = ({shape, variant,children}) => {

  const ChipShape = {
    rounded: "rounded-full",
    sharp: "rounded-none"
  };
  
  const ChipVariant = {
    regular: "dark:bg-[#232324] dark:text-[#72727B] border-none",
    beginner: "border-cyan-400",
    intermediate: "border-yellow-300",
    advanced: "border-lime-400"
  }

  const classNames = "font-secondary font-medium text-xs lg:text-sm w-fit px-6 py-1 border-[1px]" + " " + ChipShape[shape] + " " + ChipVariant[variant];

  return (
    <div className={classNames}>
        {children}
    </div>
  )
}

export default Chip