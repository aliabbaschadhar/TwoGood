import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
function MessageButton() {
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef(null);

  // Detect click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleSend = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={cardRef}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            exit={{ height: 0, opacity: 0, duration: 1 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 bg-black text-white lg:w-[22.5rem] w-[20rem] rounded-[2rem] overflow-hidden pt-8 shadow-2xl z-50 space-y-4"
          >
            <div className="flex flex-col gap-8 px-6">
              <div className="flex flex-col gap-2">
                <label className="font-helvetica uppercase lg:text-[0.85rem] text-[0.75rem] tracking-widest font-semibold text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full mt-1 bg-transparent text-sm outline-none placeholder-[#636262] placeholder:font-helvetica placeholder:text-[0.9rem] placeholder:tracking-wide lg:placeholder:font-semibold placeholder:font-medium"
                />
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-xs uppercase tracking-wide mb-1">
                  <span className=" font-helvetica uppercase lg:text-[0.85rem] text-[0.75rem] tracking-wide font-semibold text-gray-300">
                    Message
                  </span>
                  <span className=" font-helvetica uppercase lg:text-[0.85rem] text-[0.75rem]F tracking-wide font-semibold text-gray-300">
                    80 characters max
                  </span>
                </div>
                <textarea
                  maxLength={80}
                  rows={3}
                  placeholder={`With every purchase, you have the potential to change the course of a woman's life.We are changing the course of every homeless woman's life for good by selling meals and handcrafted products.`}
                  className="w-full h-40 bg-transparent text-sm outline-none resize-none placeholder-[#636262] placeholder:font-helvetica placeholder:text-[0.9rem] lg:placeholder:tracking-wide lg:placeholder:font-semibold placeholder:font-medium"
                />
              </div>
            </div>

            <button
              onClick={handleSend}
              className="bg-[#222222] font-helvetica uppercase text-[0.8rem] tracking-wider font-semibold py-5 text-white w-full hover:text-gray-300 transition-all"
            >
              Send your own message
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex justify-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-black font-helvetica uppercase lg:text-[0.85rem] text-[0.8rem] tracking-wider font-semibold px-18 lg:py-6 py-5 text-white rounded-full hover:text-gray-300 transition-all w-[20rem] lg:w-[22.5rem]"
        >
          {isOpen ? "Close" : "Send your own message"}
        </button>
      </div>
    </div>
  );
}

export default MessageButton;
