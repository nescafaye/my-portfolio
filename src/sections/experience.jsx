import React from "react";
import Chip from "../components/chip/chip";

const Experience = () => {
  return (
    <div className="h-full flex justify-between gap-4 px-44 py-32">

      <div className="w-2/6 h-fit sticky top-24 border-2">
        <div className="font-urban font-bold text-5xl">
            Notable Experience
        </div>
      </div>

      <div className="w-2/3 border-2">

        <div className="space-y-8"> 
        
          <div className="space-y-10 pb-10 border-b border-black">
            <div className="font-mono font-bold text-7xl text-transparent text-stroke">Web Development</div>
            <div className="flex gap-2">
              <Chip>HTML</Chip>
              <Chip>Javascript</Chip>
            </div>
          </div>

          <div className="space-y-10 pb-10 border-b border-black">
            <div className="font-mono font-bold text-7xl text-transparent text-stroke">UI/UX Design</div>
            <div className="flex gap-2">
              <Chip>HTML</Chip>
              <Chip>Javascript</Chip>
            </div>
          </div>

          <div className="space-y-10 pb-10 border-b border-black">
            <div className="font-mono font-bold text-7xl text-transparent text-stroke">Graphic Design</div>
            <div className="flex gap-2">
              <Chip>HTML</Chip>
              <Chip>Javascript</Chip>
            </div>
          </div>

          <div className="space-y-10 pb-10 border-b border-black">
            <div className="font-mono font-bold text-7xl text-transparent text-stroke">Programming</div>
            <div className="flex gap-2">
              <Chip>HTML</Chip>
              <Chip>Javascript</Chip>
            </div>
          </div>

          <div className="space-y-10 pb-10 border-b border-black">
            <div className="font-mono font-bold text-7xl text-transparent text-stroke">Content Management System</div>
            <div className="flex gap-2">
              <Chip>HTML</Chip>
              <Chip>Javascript</Chip>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Experience;
