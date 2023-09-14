import React from "react";
import Chip from "../components/chip/chip";

const Skills = () => {
  return (
    <div className="h-fit flex flex-col justify-center gap-y-12 border-2 px-44 py-6">
      <div className="font-serif font-semibold text-7xl leading-tight tracking-wider text-transparent text-stroke">
        What I do
      </div>

      <div className="space-y-8">

        <div className="space-y-6 pb-6 border-b border-black">
          <div className="text-3xl">Web Development</div>
          <div className="flex gap-2">
            <Chip>HTML</Chip>
            <Chip>Javascript</Chip>
          </div>
        </div>

        <div className="space-y-6 pb-6 border-b border-black">
          <div className="text-3xl">Web Development</div>
          <div className="flex gap-2">
            <Chip>HTML</Chip>
            <Chip>Javascript</Chip>
          </div>
        </div>

        <div className="space-y-6 pb-6 border-b border-black">
          <div className="text-3xl">Web Development</div>
          <div className="flex gap-2">
            <Chip>HTML</Chip>
            <Chip>Javascript</Chip>
          </div>
        </div>

        <div className="space-y-6 pb-6 border-b border-black">
          <div className="text-3xl">Web Development</div>
          <div className="flex gap-2">
            <Chip>HTML</Chip>
            <Chip>Javascript</Chip>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Skills;
