import React from "react";
import Chip from "../components/chip/chip";

const Works = ({ projects }) => {
  return (
    <>
      {projects.map((project, index) => {

        return (
          <div className={`h-full md:h-[80vh] lg:h-screen flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"}`} key={index}>
            
            <div className="w-full md:w-1/2 flex-1 border-x-[0.5px] border-b border-dark dark:border-neon-pink overflow-clip">
              <img src={project.projectImage} alt="" className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"/>
            </div>

            <div className="w-full md:w-1/2 flex-1 space-y-10 border-x-[0.5px] border-b border-dark dark:border-neon-pink py-16 lg:py-32">
              
              <div className="w-5/6 mx-auto space-y-6">
               
                <div className="font-primary text-5xl md:text-6xl lg:text-7xl font-bold dark:text-transparent neon-stroke text-glow break-words">
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

              </div>

              <div className="w-5/6 mx-auto">

                <div className="font-secondary text-base lg:text-lg">
                  {project.projectDesc}
                </div>

              </div>

            </div>
          </div>
        );
      })}
    </>
  );
};

export default Works;
