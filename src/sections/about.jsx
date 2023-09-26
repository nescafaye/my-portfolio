import React from "react";
import Button from "../components/button/button";
import Icon from "../components/icon/icon";

const About = ({ summary, link, desc, socials }) => {
  
  return (
    <section className="h-full flex flex-col xl:flex-row justify-center items-stretch gap-8 xl:gap-4 px-8 md:px-28  py-16 lg:py-32">

      <div className="flex-1 space-y-10">
        <div className="font-primary text-6xl lg:text-7xl font-bold dark:text-transparent neon-stroke text-glow">
            Kumusta!
        </div>
        <div>
            Photo here
        </div>
        <div className="space-x-2 xl:space-x-4">
            <Button type="text" style="outlined" shape="rounded" link={link}>Contact Me</Button>
        </div>
      </div>

      <div className="flex-1 space-y-8 xl:space-y-10">

        <div className="font-primary text-3xl lg:text-4xl font-bold">
            {summary}
        </div>

        <div className="font-secondary text-base lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et euismod
            sapien Pellentesque habitant. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Ut et euismod sapien Pellentesque habitant. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Ut et euismod
            sapien Pellentesque habitant. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Ut et euismod sapien Pellentesque habitant.
        </div>

        <div className="flex gap-x-4">
          {
            socials.map((social, index)=> {
              return (
                <Button type="icon" style="filloutlined" shape="rounded" link={social.socialUrl} key={index}>
                  <Icon name={social.socialName}/>
                </Button>
              )
            })
          }
        </div>

      </div>

    </section>
  );
};

export default About;
