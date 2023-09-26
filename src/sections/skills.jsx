import React from "react";
import Chip from "../components/chip/chip";

const Skills = ({ skills }) => {
  return (
    <section className="h-full flex flex-col lg:flex-row gap-8 px-8 md:px-28  py-16 lg:py-32">

      <div className="w-full xl:w-1/4 h-fit lg:sticky lg:top-20 xl:top-24">
        <div className="font-secondary text-5xl lg:text-6xl xl:text-7xl font-bold lg:break-words">
            What I Do
        </div>
      </div>

      <div className="w-full xl:w-3/4">

        <div className="space-y-8"> 

          {
            skills.map((skill, index) => {
              return (
                <div className="space-y-8 lg:space-y-10 pb-8 lg:pb-10 border-b border-black dark:border-light" key={index}>
                  <div className="font-primary text-[52px] md:text-6xl lg:text-8xl font-bold uppercase leading-none break-words dark:text-transparent neon-stroke text-glow">{skill.skillName}</div>
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

    </section>
  );
};

export default Skills;
