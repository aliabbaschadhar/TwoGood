import React from "react";
import ChristinaMaria from "../assets/images/Christina-Maria.jpg";
import patricia from "../assets/images/Patricia.jpg";
import { motion } from "framer-motion";

function Impact() {
  return (
    <div className="flex flex-col sm:flex-row-reverse sm:justify-between gap-6 px-4 lg:p-4 lg:py-10 pt-10 mb-10 overflow-hidden">
      <div
        data-scroll
        className="flex h-44 lg:h-[48rem] overflow-hidden bg-green400 sm:h-full sm:w-3/6 sm:flex-col md:flex-row justify-end lg:gap-5 lg:w-8/12"
      >
        <div className="w-1/2 pr-2 sm:pr-0 object-top">
          <img data-scroll data-scroll-speed="1" src={ChristinaMaria} />
        </div>
        <div className="w-1/2 pl-2 sm:pl-0 object-cover">
          <img data-scroll data-scroll-speed="1" src={patricia} />
        </div>
      </div>
      <div className="flex flex-col gap-10 sm:w-4/6 lg:w-3/12">
        <div className="flex flex-col gap-3 lg:gap-6">
          <h2 className="text-2xl lg:text-3xl font-futura">OUR IMPACT.</h2>
          <p className="sm:text-lg font-helvetica">
            The thing is, we don't save anyone.
          </p>
        </div>
        <div>
          <p className="sm:text-lg font-helvetica">
            What we do is provide a safe space for women to change the course of
            their own lives.
          </p>
        </div>
        <div>
          <p className="sm:text-lg font-helvetica">
            After many years of living in crisis, abuse and complex trauma,
            restoring self-worth is foundational for independence. We believe
            that through experiences that promote love and respect, we can spark
            and nurture a sense of self-worth for those on the path of healing.
          </p>
        </div>

        <div className="hover:text-gray-500 relative w-fit pb-2 cursor-pointer underline underline-offset-[0.9rem]">
          <a
            href="#"
            target="_blank"
            className="font-social-mono sm:text-sm text-xs"
          >
            HERE'S HOW WE DO IT
          </a>
        </div>
      </div>
    </div>
  );
}

export default Impact;
