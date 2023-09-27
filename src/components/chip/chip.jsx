import React from 'react'

const Chip = ({shape, variant,children}) => {

  const ChipShape = {
    rounded: "rounded-full",
    sharp: "rounded-none"
  };
  
  const ChipVariant = {
    regular: "bg-[#F0E9E5] text-[#bbabbb] dark:bg-[#232324] dark:text-[#72727B] border-none",
    beginner: "border-dark dark:border-neon-blue",
    intermediate: "border-dark dark:border-neon-yellow",
    advanced: "border-dark dark:border-neon-green"
  }

  const classNames = "font-secondary font-medium text-xs lg:text-sm w-fit px-6 py-2 border-[1px]" + " " + ChipShape[shape] + " " + ChipVariant[variant];

  return (
    <div className={classNames}>
        {children}
    </div>
  )
}

export default Chip