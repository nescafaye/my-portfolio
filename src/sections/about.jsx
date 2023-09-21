import React from "react";
import Button from "../components/button/button";
import Icon from "../components/icon/icon";

const About = ({ summary, desc, socials }) => {
  return (
    <div className="h-full flex flex-col xl:flex-row justify-center items-stretch  gap-8 xl:gap-4 px-8 md:px-28 lg:px-44 py-16 lg:py-32 border-2 border-black">

      <div className="flex-1 space-y-10 border-2">
        <div className="font-primary text-6xl lg:text-7xl font-bold text-transparent dark-stroke">
            Kumusta!
        </div>
        <div>
            Photo here
        </div>
        <div className="space-x-2 xl:space-x-4">
            <Button type="text" style="filloutlined" shape="rounded">Contact Me</Button>
            <Button type="text" style="filloutlined" shape="rounded">Contact Me</Button>
        </div>
      </div>

      <div className="flex-1 space-y-8 xl:space-y-10 border-2">

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
            socials.map((social)=> {
              return (
                <Button type="icon" style="filloutlined" shape="rounded" link={social.socialUrl} key={social.socialName}>
                  <Icon name={social.socialName}/>
                </Button>
              )
            })
          }
        </div>

      </div>

    </div>
  );
};

export default About;
