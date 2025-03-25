import React from "react";

function ContactOrder() {
  return (
    <div>
      <div className="bg-[#FAF4EB] flex flex-col items-center gap-6 px-3 lg:px-36 py-8 lg:py-16">
        <div>
          <p className="font-[1000] text-[0.81rem] lg:text-[1rem] tracking-[0.2rem] text-center px-6">
            TOOGOOD CREATES TIMELESS WORKS OF UNCONVENTIONAL DESIGN. OUR
            APPROACH UNITES THE ARTISTIC WITH THE EVERYDAY TO MAKE THE LANDSCAPE
            OF OUR LIVES LESS ORDINARY.
          </p>
        </div>
        <div className="flex gap-2">
          <a className="text-xs lg:text-[1rem] text-gray-500 underline underline-offset-4 tracking-tight">
            ABOUT
          </a>
          <div className="w-[0.1rem] bg-gray-400"></div>
          <a className="text-xs lg:text-[1rem] text-gray-500 underline underline-offset-4 tracking-tight">
            CONTACT US
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:py-14">
        <div>
          <p className="font-[1000] text-[0.81rem] lg:text-[1rem] tracking-[0.2rem] text-center px-6 pt-6">
            FURNITURE
          </p>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-sm lg:text-[1.02rem] tracking-wide font-extralight w-fit lg:max-w-4xl md:max-w-2xl text-center px-8">
            All of the pieces are handmade by small-scale fabricators and
            traditional artisans, with an honesty to the irregularity of the
            chosen material.
          </p>
        </div>
        <div className="flex items-center justify-center pt-4 pb-16">
          <a className="text-xs lg:text-[1rem] text-gray-500 underline underline-offset-4 tracking-widest">
            MADE TO ORDER
          </a>{" "}
        </div>
      </div>
    </div>
  );
}

export default ContactOrder;
