import React from "react";
import Chip from "../components/chip/chip";

const Skills = ({ skills }) => {
  return (
    <div className="h-full flex flex-col lg:flex-row justify-between gap-8 lg:gap-4 px-8 md:px-28 lg:px-44 py-16 lg:py-32 border-2">

      <div className="w-full xl:w-2/6 h-fit lg:sticky top-20 xl:top-24 border-2">
        <div className="font-secondary text-4xl lg:text-5xl font-semibold">
            What I Do
        </div>
      </div>

      <div className="w-full xl:w-2/3 border-2">

        <div className="space-y-8"> 

          {
            skills.map((skill) => {
              return (
                <div className="space-y-8 lg:space-y-10 pb-8 lg:pb-10 border-b border-black">
                  <div className="font-primary text-[52px] md:text-6xl lg:text-7xl font-bold leading-none text-transparent dark-stroke break-words">{skill.skillName}</div>
                  <div className="flex gap-2 flex-wrap">
                    {
                      skill.stack.map((stack) => {
                        return (
                          <Chip shape="rounded" variant={stack.level}>{stack.stackName}</Chip>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          }

        </div>

      </div>

    </div>
  );
};

export default Skills;
