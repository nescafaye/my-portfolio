import React from "react";
import Chip from "../components/chip/chip";

const Experience = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row justify-between gap-8 lg:gap-4 px-8 md:px-28 lg:px-44 py-16 lg:py-32 border-2">

      <div className="w-full xl:w-2/6 h-fit lg:sticky top-20 xl:top-24 border-2">
        <div className="font-secondary text-4xl lg:text-5xl font-semibold">
            Notable Experience
        </div>
      </div>

      <div className="w-full xl:w-2/3 border-2">

        <div className="space-y-8"> 
        
          <div className="space-y-8 lg:space-y-10 pb-8 lg:pb-10 border-b border-black">
            <div className="font-primary text-[52px] md:text-6xl lg:text-7xl font-bold leading-none text-transparent dark-stroke break-words">Web Development</div>
            <div className="flex gap-2">
              <Chip shape="rounded" variant="advanced">HTML</Chip>
              <Chip shape="rounded" variant="advanced">CSS</Chip>
              <Chip shape="rounded" variant="intermediate">Javascript</Chip>
            </div>
          </div>

          <div className="space-y-8 lg:space-y-10 pb-8 lg:pb-10 border-b border-black">
            <div className="font-primary text-[52px] md:text-6xl lg:text-7xl font-bold leading-none text-transparent dark-stroke break-words">UI/UX Design</div>
            <div className="flex gap-2">
              <Chip shape="rounded" variant="advanced">Figma</Chip>
              <Chip shape="rounded" variant="beginner">Adobe XD</Chip>
              <Chip shape="rounded" variant="intermediate">Framer</Chip>
            </div>
          </div>

          <div className="space-y-8 lg:space-y-10 pb-8 lg:pb-10 border-b border-black">
            <div className="font-primary text-[52px] md:text-6xl lg:text-7xl font-bold leading-none text-transparent dark-stroke break-words">Graphic Design</div>
            <div className="flex gap-2">
              <Chip shape="rounded" variant="beginner">Photoshop</Chip>
              <Chip shape="rounded" variant="advanced">Figma</Chip>
            </div>
          </div>

          <div className="space-y-8 lg:space-y-10 pb-8 lg:pb-10 border-b border-black">
            <div className="font-primary text-[52px] md:text-6xl lg:text-7xl font-bold leading-none text-transparent dark-stroke break-words">Programming</div>
            <div className="flex gap-2">
              <Chip shape="rounded" variant="beginner">PHP</Chip>
              <Chip shape="rounded" variant="beginner">Java</Chip>
              <Chip shape="rounded" variant="intermediate">C#</Chip>
            </div>
          </div>

          <div className="space-y-8 lg:space-y-10 pb-8 lg:pb-10 border-b border-black">
            <div className="font-primary text-[52px] md:text-6xl lg:text-7xl font-bold leading-none text-transparent dark-stroke break-words">Content Management System</div>
            <div className="flex gap-2">
              <Chip shape="rounded" variant="beginner">Wordpress</Chip>
              <Chip shape="rounded" variant="beginner">Webflow</Chip>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Experience;
