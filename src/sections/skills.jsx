import React from "react";
import { motion } from "framer-motion";
import Chip from "../components/chip/chip";

const Skills = ({ skills }) => {
  return (
    <section className="h-full flex flex-col lg:flex-row gap-8 px-8 md:px-28 py-16 lg:py-32">

      <div className="w-full xl:w-1/4 h-fit lg:sticky lg:top-20 xl:top-24">
        <div className="font-secondary lg:text-xl uppercase">
            What I Do
        </div>
      </div>

      <div className="w-full xl:w-3/4">

        <div className="space-y-8"> 

          {
            skills.map((skill, index) => {
              return (
                <div className="space-y-8 lg:space-y-10 pb-8 lg:pb-10 border-b border-black dark:border-light" key={index}>
                  <motion.div 
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{duration: 0.8}}
                  viewport={{ once: true }}
                  className="font-primary text-[52px] md:text-6xl lg:text-9xl font-bold uppercase leading-none break-words dark:text-transparent neon-stroke text-glow">{skill.skillName}</motion.div>
                  <div className="flex gap-2 flex-wrap">
                    {
                      skill.stack.map((stack, index) => {
                        return (
                          <motion.div 
                          initial={{ y: 50, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{duration: 0.8, delay: index * 0.05,}}
                          viewport={{ once: true }}>
                            <Chip shape="rounded" variant={stack.level} key={index}>{stack.stackName}</Chip>
                          </motion.div>
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
