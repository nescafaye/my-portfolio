import React from "react";
import Chip from "../components/chip/chip";

const Works = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row space-y-4 md:space-y-0">

      <div className="flex-1 border-2">Image here</div>

      <div className="flex-1 space-y-10 border-2 py-16 lg:py-32">

        <div className="w-5/6 mx-auto space-y-4 border-2">

          <div className="font-primary text-5xl md:text-6xl lg:text-7xl font-bold text-transparent dark-stroke">
            Digital Portfolio
          </div>
          
          <div className="flex gap-x-2">
            <Chip shape="rounded" variant="regular">Wordpress</Chip>
            <Chip shape="rounded" variant="regular">Elementor</Chip>
          </div>

        </div>

        <div className="w-5/6 mx-auto font-secondary text-base lg:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eligendi
          nemo tenetur mollitia, voluptates dolore soluta esse alias
          perspiciatis totam incidunt optio ipsum, at quis voluptas fuga minima
          dolor ut.
        </div>

      </div>

    </div>
  );
};

export default Works;
