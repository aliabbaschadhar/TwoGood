
import React, { useState } from "react";
import { basil, alemais, teady, theCourse } from "../assets/images/index";
import { motion } from "framer-motion";
function ProductPage() {
  const data = [
    { image: teady, title: "Two Hugs Bar 'n' Bear Set", price: "$50" },
    {
      image: alemais,
      title: "Alemais Cook in colour apron",
      price: "$190",
    },
    { image: theCourse, title: "change the course cookbook", price: "$45" },
    {
      image: basil,
      title: "Strawberry gum leaf, coriander, Basil+ mint candle",
      price: "$59",
    },
    { image: teady, title: "Two Hugs Bar 'n' Bear Set", price: "$50" },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center lg:px-8 px-3 pb-4 ">
        <div className="w-full flex flex-col gap-6 lg:flex-row lg:justify-between lg:pr-36 py-5">
          <h2 className="text-3xl lg:text-6xl lg:max-w-3xl text-center lg:text-left font-futura uppercase">
            We believe in people, until they believe in themselves again.
          </h2>
          <div className="flex flex-col lg:items-start gap-8 lg:max-w-sm">
            <div>
              <p className="sm:text-lg font-helvetica text-center md:text-[1rem] lg:text-left sm:px-2 lg:px-0 lg:text-lg">
                Everything we do is designed to rebuild self worth and
                independence, in order to break free from the cycle of
                disadvantage.
              </p>
            </div>
            <div>
              <p className="sm:text-lg font-helvetica text-center lg:text-left md:text-[1rem] lg:text-lg sm:px-1 lg:px-0">
                With every purchase you make with us, you're helping to change
                the course of someone's life; you're walking alongside
                vulnerable women as they find their way home again.
              </p>
            </div>
            <div className="flex justify-center h-10">
              <a href="#" className="font-social-mono text-[0.8rem] lg:text-[0.9rem] no-underline cursor-pointer relative w-fit pb-2 group text-zinc-700 hover:text-black">
                SHOP TO SUPPORT
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-black w-0 group-hover:w-full transition-all duration-500 ease-in-out origin-left"></span>
                {/* <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-black w-full group-hover:w-0 transition-all delay-500 duration-500 ease-in-out origin-right"></span>  */}
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between mt-14 h-fit">
          {data.map((item, index) => (
            <HoverProduct key={index} item={item} />
          ))}
        </div >
      </div >
    </>
  );
}

export default ProductPage;
function HoverProduct({ item }) {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  return (
    <motion.div
      className="relative flex flex-col items-center w-[50%] mb-20 lg:h-[45rem] z-10"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 pointer-events-none overflow-visible">
        {isHovered && (
          <motion.div
            className="absolute bg-white opacity-100 z-0 rounded-full pointer-events-none"
            style={{
              width: "18rem",
              height: "18rem",
              transform: `translate(-50%, -50%)`,
              left: cursorPos.x,
              top: cursorPos.y,
            }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        )}
      </div>

      <div className="flex items-center justify-center w-full h-full z-10">
        <img className="w-32 md:w-72 lg:w-[78%]" src={item.image} />
      </div>
      <p className="text-center text-xs lg:text-sm font-helvetica px-2 pt-5 leading-[0.9rem] uppercase">
        {item.title}
      </p>
      <p className="pt-1 text-center text-sm lg:text-xs font-helvetica font-medium">
        {item.price}
      </p>
    </motion.div>
  );
}
