import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { AiOutlineEnter } from "react-icons/ai";

function Email() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="p-4 my-8 lg:my-24 flex items-center">
      <input
        type="text"
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
        placeholder="Enter your email address for good"
        className="outline-none w-full text-2xl font-futura bg-transparent uppercase pr-20 py-5 border-b-2 border-black placeholder:text-lg md:placeholder:text-2xl lg:placeholder:text-5xl sm:placeholder:text-4xl sm:placeholder:whitespace-nowrap placeholder:whitespace-pre-line"
      />
      {isFocused ? (
        <AiOutlineEnter className="w-6 h-6 -ml-6" />
      ) : (
        <button onClick={() => alert("Email Sent")}>
          <GoArrowRight className="w-6 h-6 -ml-6" />
        </button>
      )}
    </div>
  );
}

export default Email;
