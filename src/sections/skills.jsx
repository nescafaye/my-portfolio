import React from "react";
import { easeIn, easeInOut, motion } from "framer-motion";
import Chip from "../components/chip/chip";

const Skills = ({ skills }) => {
  return (
    <section className="h-full flex flex-col xl:flex-row gap-8 px-8 md:px-24 py-16 xl:py-32">

      <div className="w-full xl:w-1/4 h-fit font-secondary lg:sticky xl:top-24 space-y-4">
        <h4 className="lg:text-xl font-semibold uppercase">
            What I Do
        </h4>
        <div className="text-sm flex flex-row xl:flex-col gap-2">
          <div className="flex flex-nowrap items-center gap-2">
            <div className="w-3 h-3 bg-neon-blue border border-dark-2 rounded-full"></div>
            <div>Beginner</div>
          </div>
          <div className="flex flex-nowrap items-center gap-2">
            <div className="w-3 h-3 bg-neon-yellow border border-dark-2 rounded-full"></div>
            <div>Intermediate</div>
          </div>
          <div className="flex flex-nowrap items-center gap-2">
            <div className="w-3 h-3 bg-neon-green border border-dark-2 rounded-full"></div>
            <div>Advanced</div>
          </div>
        </div>
      </div>

      <div className="w-full xl:w-3/4">

        <div className="space-y-8"> 

          {
            skills.map((skill, index) => {
              return (
                <>
                  <div className="space-y-8 lg:space-y-10 pb-4" key={index}>
                    
                    <motion.h2 
                      initial={{ y: 100, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{duration: 0.8}}
                      viewport={{ once: true }}
                      className="font-primary text-4xl sm:text-5xl md:text-7xl lg:text-9xl leading-none break-words">
                        {skill.skillName}
                    </motion.h2>
                    
                    <div className="flex gap-2 flex-wrap">
                      {
                        skill.stack.map((stack, index) => {
                          return (
                            <motion.div 
                              key={index}
                              initial={{ y: 50, opacity: 0 }}
                              whileInView={{ y: 0, opacity: 1 }}
                              transition={{duration: 0.8, delay: index * 0.05,}}
                              viewport={{ once: true }}>
                              <Chip shape="rounded" variant={stack.level}>{stack.stackName}</Chip>
                            </motion.div>
                          )
                        })
                      }
                    </div>

                  </div>
                  
                  <motion.div 
                    role="separator"
                    initial={{ opacity: 0, width: "0%" }}
                    whileInView={{ opacity: 1, width: "100%" }}
                    transition={{ duration: 1, ease: "easeIn"}}
                    viewport={{ once: true }}
                    className="w-full h-[0.5px] bg-black dark:bg-light">
                  </motion.div>
                  
                </>
              )
            })
          }

        </div>

      </div>

    </section>
  );
};

export default Skills;
