import React, { useState } from "react";
import { QuoteAnimation } from "./index";
import MessageButton from "./MessageButton";
import { motion, AnimatePresence } from "framer-motion";

function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    {
      name: "Alex",
      message:
        "Loved it! The team went above and beyond to make everything perfect.",
    },
    {
      name: "Sophia",
      message:
        "Great food, wonderful people, and a meaningful cause behind every meal. They made our event unforgettable and we felt good supporting them.",
    },
    {
      name: "James",
      message:
        "Amazing experience! Everything was smooth and the food was fantastic.",
    },
    {
      name: "Emily",
      message:
        "A heartwarming initiative with top-notch quality. I'm genuinely happy I chose them. The food was fresh, flavorful, and beautifully presented.",
    },
    {
      name: "Michael",
      message:
        "The best catering choice we've made in a long time! Not only was the food absolutely delicious, but knowing that it supports such an impactful cause made it even better.",
    },
    {
      name: "Olivia",
      message:
        "Tasty, well-organized, and simple to arrange. Everything went according to plan and our guests were impressed.",
    },
    {
      name: "Daniel",
      message:
        "Two Good brings quality and kindness together like no one else. The meals were full of flavor, and their mission makes every bite more meaningful.",
    },
    {
      name: "Ava",
      message:
        "Highly recommended! From ordering to delivery, everything was smooth. I love what they stand for.",
    },
    {
      name: "William",
      message: "Loved it! The food was delicious, and I’d happily order again.",
    },
    {
      name: "Emma",
      message:
        "Their food and mission make them stand out from the crowd. Every bite was worth it, and the guests kept asking where we got the catering from!",
    },
    {
      name: "Benjamin",
      message:
        "Exceptional quality and service. I admire the dedication behind their work. It’s rare to find a team this passionate and professional.",
    },
    {
      name: "Charlotte",
      message:
        "Fantastic people, fantastic food. The flavors were amazing, and it was clear how much love went into every detail.",
    },
  ];

  return (
    <>
      <div className="lg:px-8 px-4 lg:mb-12 mb-3">
        <div className="flex justify-between border-b-[0.09rem] border-black">
          <p className="font-helvetica text-[0.75rem] lg:text-[0.85rem] uppercase w-36 text-start md:w-full">
            Words of Goodness
          </p>
          <p className="font-helvetica text-[0.75rem] lg:text-[0.85rem] uppercase w-32 text-end md:w-full">
            Messages of Love & Support
          </p>
        </div>
      </div>

      <div className="p-4">
        <div className="p-2 flex justify-start overflow-hidden gap-5 lg:gap-20">
          {data.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`flex flex-col items-start p-2 min-w-24 lg:min-w-48 rounded-lg transition-all duration-300 ease-in-out`}
            >
              <div
                className={`rounded-full w-4 h-4 border-[0.09rem] ${
                  activeIndex == index ? "bg-black" : ""
                } border-black mb-4`}
              ></div>
              <span
                className={`text-start text-lg font-helvetica font-medium lg:text-3xl my-1 hover:text-gray-500 ${
                  activeIndex == index ? "text-gray-500" : ""
                }`}
              >
                m// 00{index + 1}
                <br />
                {item.name}
              </span>
              <div>{activeIndex == index && <QuoteAnimation />}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-8 py-2 mb-10 md:mb-72 lg:mb-96">
        <AnimatePresence mode="wait">
          <motion.p
            key={activeIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="text-2xl lg:text-7xl uppercase tracking-tight font-futura px-10 lg:px-0 lg:py-8 py-2 lg:my-12 text-center lg:max-w-7xl"
          >
            {data[activeIndex].message}
          </motion.p>
        </AnimatePresence>
        <div>
          <MessageButton />
        </div>
        <div>
          <p className="sm:text-lg font-helvetica text-center w-64 lg:w-72">
            Sometimes it’s the smallest actions that can make the biggest
            impact.
          </p>
        </div>
      </div>
    </>
  );
}

export default Reviews;
