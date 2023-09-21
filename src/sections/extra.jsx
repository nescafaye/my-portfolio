import React from "react";
import Chip from "../components/chip/chip";

const Extra = () => {
  return (
    <div className="h-full flex flex-col justify-center gap-y-12  px-44 py-32">
      <div className="text-5xl">
        What I do
      </div>

      <div className="space-y-8">

      <div className="space-y-8 pb-8 border-b border-black">
            <div className="font-serif font-semibold text-7xl text-transparent dark-stroke">Web Development</div>
            <div className="flex gap-2">
              <Chip>HTML</Chip>
              <Chip>Javascript</Chip>
            </div>
          </div>

          <div className="space-y-6 pb-6 border-b border-black">
            <div className="font-serif font-semibold text-7xl text-transparent dark-stroke">UI/UX Design</div>
            <div className="flex gap-2">
              <Chip>HTML</Chip>
              <Chip>Javascript</Chip>
            </div>
          </div>

          <div className="space-y-6 pb-6 border-b border-black">
            <div className="font-serif font-semibold text-7xl text-transparent dark-stroke">Graphic Design</div>
            <div className="flex gap-2">
              <Chip>HTML</Chip>
              <Chip>Javascript</Chip>
            </div>
          </div>

          <div className="space-y-6 pb-6 border-b border-black">
            <div className="font-serif font-semibold text-7xl text-transparent dark-stroke">Programming</div>
            <div className="flex gap-2">
              <Chip>HTML</Chip>
              <Chip>Javascript</Chip>
            </div>
          </div>

          <div className="space-y-6 pb-6 border-b border-black">
            <div className="font-serif font-semibold text-7xl text-transparent dark-stroke">Content Management System</div>
            <div className="flex gap-2">
              <Chip>HTML</Chip>
              <Chip>Javascript</Chip>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default Extra;
