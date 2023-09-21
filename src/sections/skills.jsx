import React from "react";
import Chip from "../components/chip/chip";

const Skills = ({ skills }) => {
  return (
    <div className="h-full flex flex-col lg:flex-row justify-between gap-8 px-8 md:px-28 lg:px-44 py-16 lg:py-32">

      <div className="w-full xl:w-2/6 h-fit lg:sticky lg:top-20 xl:top-24">
        <div className="font-primary text-4xl lg:text-6xl font-semibold">
            What I Do
        </div>
      </div>

      <div className="w-full xl:w-2/3">

        <div className="space-y-8"> 

          {
            skills.map((skill, index) => {
              return (
                <div className="space-y-8 lg:space-y-10 pb-8 lg:pb-10 border-b border-black dark:border-dark-10" key={index}>
                  <div className="font-primary text-[52px] md:text-6xl lg:text-7xl font-bold leading-none break-words text-transparent dark-stroke">{skill.skillName}</div>
                  <div className="flex gap-2 flex-wrap">
                    {
                      skill.stack.map((stack, index) => {
                        return (
                          <Chip shape="rounded" variant={stack.level} key={index}>{stack.stackName}</Chip>
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
