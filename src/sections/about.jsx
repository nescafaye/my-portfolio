import React from "react";
import Button from "../components/button/button";
import { Icon } from "@iconify/react";

const About = () => {
  return (
    <div className="h-full flex flex-col xl:flex-row justify-center items-stretch  gap-8 xl:gap-4 px-8 md:px-28 lg:px-44 py-16 lg:py-32 border-2 border-black">

      <div className="flex-1 space-y-10 border-2">
        <div className="font-mono text-6xl lg:text-7xl font-bold text-transparent text-stroke">
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

        <div className="font-mono text-3xl lg:text-4xl font-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et euismod
            sapien Pellentesque habitant.
        </div>

        <div className="font-urban text-base lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et euismod
            sapien Pellentesque habitant. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Ut et euismod sapien Pellentesque habitant. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Ut et euismod
            sapien Pellentesque habitant. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Ut et euismod sapien Pellentesque habitant.
        </div>

        <div className="flex gap-x-4">
            <Button type="icon" style="filloutlined" shape="rounded">
              <Icon icon="uit:linkedin-alt" width="22" className="mx-auto" />
            </Button>
            <Button type="icon" style="filloutlined" shape="rounded">
              <Icon icon="akar-icons:github-outline-fill" width="22" className="mx-auto" />
            </Button>
            <Button type="icon" style="filloutlined" shape="rounded">
              <Icon icon="simple-line-icons:social-behance" width="22" className="mx-auto" />
            </Button>
            <Button type="icon" style="filloutlined" shape="rounded">
              <Icon icon="ph:dribbble-logo-light" width="24" className="mx-auto" />
            </Button>
        </div>

      </div>

    </div>
  );
};

export default About;
