import React from "react";
import { motion, useScroll } from "framer-motion"
import Chip from "../components/chip/chip";

const Works = ({ projects }) => {

  const fadeIn = {
    from: { 
      opacity: 0
    },
    to: { 
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeIn",
      }
    },
  }

  return (
    <>
      <section id="work" className="flex flex-col lg:flex-row justify-end gap-0 lg:gap-12">

        <div className="w-full lg:w-1/4 py-8 md:py-16">
          <motion.p
            initial="from"
            whileInView="to"
            variants={fadeIn}
            viewport={{ once: true }} 
            className="px-8 md:px-16 xl:px-28 font-secondary text-sm">
            The projects showcased in this section are personal undertakings created to both test and enhance my skills as a developer. 
          </motion.p>
        </div>

        <div className="w-full lg:w-3/4">

          {projects.map((project, index) => {

            return (

              <div key={index} className={`h-full lg:h-[80vh] flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"}`}>
                
                <div className="w-full lg:w-1/2 flex-1 flex justify-center items-center border-[0.1px] border-dark dark:border-neon-pink"> 
                    <a href="#" target="_blank" rel="noopener noreferrer" className="w-full h-full overflow-clip">
                      <img src={project.projectImage} alt={project.projectAlt} className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"/>
                    </a>
                </div>

                <div className="w-full lg:w-1/2 flex-1 space-y-10 border-[0.1px] border-dark dark:border-neon-pink py-16">
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{opacity: 1, y: 0 }} 
                    transition={{duration: 1, type: "spring", bounce: 0, ease: "easeIn", delay: 0.2}}
                    viewport={{ once: true }} 
                  className="w-5/6 mx-auto space-y-6">
                  
                    <div 
                      className="font-primary text-5xl lg:text-6xl xl:text-8xl font-bold dark:text-transparent neon-stroke text-glow break-words">
                      {project.projectName}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {
                        project.projectTags.map((tag, index) => {
                          return (
                            <Chip shape="rounded" variant="regular" key={index}>{tag}</Chip>
                          )
                        })
                      }
                    </div>

                  </motion.div>

                  <div className="w-5/6 mx-auto">

                    <motion.div
                      initial="from"
                      whileInView="to"
                      variants={fadeIn}
                      viewport={{ once: true }}  
                      className="font-secondary text-base lg:text-lg">
                      {project.projectDesc}
                    </motion.div>

                  </div>

                </div>

              </div>

            );
          })}

        </div>

      </section>
    </>
  );
};

export default Works;
