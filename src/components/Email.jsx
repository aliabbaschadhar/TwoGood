import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { AiOutlineEnter } from "react-icons/ai";
import { newsletterAnimation } from "../assets/images/index";
function Email() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <div className="h-48 lg:h-96 mx-auto realtive">
        <img
          src={newsletterAnimation}
          className={`lg:w-64 absolute left-[49%] ${
            isFocused ? "hidden" : "lg:block hidden"
          }`}
        />

        <div className="p-4 my-8 pt-10 flex items-center">
          <input
            type="text"
            onFocus={() => {
              setIsFocused(true);
            }}
            onBlur={() => {
              setIsFocused(false);
            }}
            placeholder="Enter your email address for good"
            className={`outline-none w-full text-2xl font-futura placeholder:text-black bg-transparent uppercase pr-20 py-5 border-b-2 border-black placeholder:text-xl md:placeholder:text-2xl lg:placeholder:text-3xl xl:placeholder:text-5xl sm:placeholder:text-4xl sm:placeholder:whitespace-nowrap placeholder:whitespace-pre-line ${
              isFocused
                ? "placeholder:text-transparent"
                : "placeholder:text-black"
            }`}
          />
          {isFocused ? (
            <AiOutlineEnter className="w-6 h-6 -ml-6" />
          ) : (
            <button onClick={() => alert("Email Sent")}>
              <GoArrowRight className="w-6 h-6 -ml-6" />
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Email;
