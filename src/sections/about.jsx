import React from "react";
import Button from "../components/button/button";
import { Icon } from "@iconify/react";

const About = () => {
  return (
    <div className="h-screen flex justify-between items-center gap-4 px-44 py-6 border-2">

      <div className="flex-1 h-4/5 space-y-10 border-2">
        <div className="font-mono font-bold text-7xl text-transparent text-stroke">
            Kumusta!
        </div>
        <div>
            Photo here
        </div>
        <div className="space-x-4">
            <Button type="text" style="filloutlined" shape="rounded">Contact Me</Button>
            <Button type="text" style="filloutlined" shape="rounded">Contact Me</Button>
        </div>
      </div>

      <div className="flex-1 h-4/5 space-y-10 border-2">
        <div className="font-urban font-semibold text-4xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et euismod
            sapien Pellentesque habitant.
        </div>
        <div className="font-urban text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et euismod
            sapien Pellentesque habitant. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Ut et euismod sapien Pellentesque habitant. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Ut et euismod
            sapien Pellentesque habitant. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Ut et euismod sapien Pellentesque habitant.
        </div>
        <div className="space-x-4">
            <Button type="icon" style="filloutlined" shape="rounded">
              <Icon icon="iconamoon:mode-dark-light" width="18" className="mx-auto" />
            </Button>
            <Button type="icon" style="filloutlined" shape="rounded">
              <Icon icon="iconamoon:mode-dark-light" width="18" className="mx-auto" />
            </Button>
            <Button type="icon" style="filloutlined" shape="rounded">
              <Icon icon="iconamoon:mode-dark-light" width="18" className="mx-auto" />
            </Button>
        </div>
      </div>

    </div>
  );
};

export default About;
