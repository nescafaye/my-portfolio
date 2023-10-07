import React from 'react'

const Chip = ({shape, variant,children}) => {

  const ChipShape = {
    rounded: "rounded-full",
    sharp: "rounded-none"
  };
  
  const ChipVariant = {
    regular: "bg-[#E3E4D4] text-[#bbabbb] dark:bg-[#232324] dark:text-[#72727B] border-none",
    beginner: "bg-neon-blue border-dark-2 dark:border-none",
    intermediate: "bg-neon-yellow border-dark-2 dark:border-none",
    advanced: "bg-neon-green border-dark-2 dark:border-none"
  }

  const classNames = "font-secondary text-xs lg:text-sm w-fit px-5 py-1 border-[1px] text-dark-2" + " " + ChipShape[shape] + " " + ChipVariant[variant];

  return (
    <div className={classNames}>
        {children}
    </div>
  )
}

export default Chip