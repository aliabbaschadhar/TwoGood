import React from "react";
import { HandyLeftImage, HandyRightImage } from ".";

function HandyMan() {
  return (
    <div>
      <div className="">
        <h3 className="font-[1000] text-[0.81rem] lg:text-[1rem] tracking-[0.2rem] text-center px-6 pt-20 pb-2">
          THE HANDYMAN TOTE
        </h3>
        <div className="flex items-center justify-center">
          <p className="text-xs md:text-sm lg:text-[1.02rem] tracking-wide font-extralight w-fit lg:max-w-4xl md:max-w-3xl text-center px-8 pt-3 pb-6">
            The capacious handyman tote is made from thick bonded raw canvas,
            robust enough to carry all of life’s <br /> belongings. This new
            boxy tote was designed starting with a tool bag structure.
          </p>
        </div>
      </div>
      <div className="flex xl:flex-row flex-col items-center justify-center pb-20">
        <img className="md:max-w-3xl p-4 lg:pl-14" src={HandyLeftImage} />
        <img className="md:max-w-3xl p-4 lg:pr-14" src={HandyRightImage} />
      </div>
    </div>
  );
}

export default HandyMan;
