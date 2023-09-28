import React from "react";
import Chip from "../components/chip/chip";

const Works = ({ projects }) => {
  return (
    <>
      <section id="work" className="flex flex-col lg:flex-row justify-end gap-0 lg:gap-12">

        <div className="w-full lg:w-1/4 py-8 md:py-16">
          <p className="px-8 md:px-16 xl:px-28 font-secondary text-sm">
            The projects showcased in this section are personal undertakings created to both test and enhance my skills as a developer. 
          </p>
        </div>

        <div className="w-full lg:w-3/4">

          {projects.map((project, index) => {

            return (

              <div key={index} className={`h-full lg:h-[80vh] flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"}`}>

                {/* <table className=" border-collapse">
                
                  <tbody className="">
                    <tr>
                      <td className="border border-black">
                        fsdfs
                      </td>
                      <td className="border border-black">
                        sdfdsfsd
                      </td>
                    </tr>
                  </tbody>
                
                </table> */}
                
                <div className="w-full lg:w-1/2 flex-1 border-[0.1px] border-dark dark:border-neon-pink overflow-clip">
                  <img src={project.projectImage} alt="" className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"/>
                </div>

                <div className="w-full lg:w-1/2 flex-1 space-y-10 border-[0.1px] border-dark dark:border-neon-pink py-16">
                  
                  <div className="w-5/6 mx-auto space-y-6">
                  
                    <div className="font-primary text-5xl md:text-6xl lg:text-8xl font-bold dark:text-transparent neon-stroke text-glow break-words">
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

        </div>

      </section>
    </>
  );
};

export default Works;
