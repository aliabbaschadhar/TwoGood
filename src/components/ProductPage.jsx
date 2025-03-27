import React from "react";
import { basil, alemais, teady, theCourse } from "../assets/images/index";

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
              <a className="font-social-mono text-[0.8rem] lg:text-[0.9rem] underline underline-offset-[0.8rem]">
                SHOP TO SUPPORT
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between mt-14 h-fit">
          {data.map((item) => {
            return (
              <div className="flex flex-col items-center w-[49%] mb-20 lg:h-[45rem]">
                <div className="flex items-center justify-center w-full h-full">
                  <img className="w-32 md:w-72 lg:w-[78%]" src={item.image} />
                </div>
                <div>
                  <p className="text-center text-xs lg:text-sm font-helvetica px-2 pt-5  leading-[0.9rem] uppercase">
                    {item.title}
                  </p>
                </div>
                <div>
                  <p className="pt-1 text-center text-sm lg:text-xs font-helvetica font-medium">
                    {item.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductPage;
