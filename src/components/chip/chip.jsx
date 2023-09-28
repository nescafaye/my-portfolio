import React from 'react'

const Chip = ({shape, variant,children}) => {

  const ChipShape = {
    rounded: "rounded-full",
    sharp: "rounded-none"
  };
  
  const ChipVariant = {
    regular: "bg-[#F0E9E5] text-[#bbabbb] dark:bg-[#232324] dark:text-[#72727B] border-none",
    beginner: "bg-neon-blue border-dark-2 dark:border-neon-blue dark:bg-transparent",
    intermediate: "bg-neon-yellow border-dark-2 dark:border-neon-yellow dark:bg-transparent",
    advanced: "bg-neon-green border-dark-2 dark:border-neon-green dark:bg-transparent"
  }

  const classNames = "font-secondary font-medium text-xs lg:text-sm w-fit px-5 py-1 border-[1px] text-dark-2 dark:text-light" + " " + ChipShape[shape] + " " + ChipVariant[variant];

  return (
    <div className={classNames}>
        {children}
    </div>
  )
}

export default Chip