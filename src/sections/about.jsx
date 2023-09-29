import React from "react";
import Button from "../components/button/button";
import Icon from "../components/icon/icon";

const About = ({ summary, link, desc, socials }) => {
  
  return (
    <section id="about" className="h-full flex flex-col xl:flex-row justify-between items-stretch gap-8 px-8 md:px-28 py-16 lg:py-32">

      <div className="w-full lg:w-1/4 space-y-10">
        <div>
            Photo here
        </div>
        <div className="space-x-2 xl:space-x-4">
            <Button type="text" style="outlined" shape="rounded" link={link}>Contact Me</Button>
        </div>
      </div>

      <div className="w-full lg:w-3/4 space-y-8 xl:space-y-10">

        <h3 className="font-primary text-3xl lg:text-7xl font-bold">
            {summary}
        </h3>

        <p className="font-secondary text-base">
            {desc}
        </p>

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
