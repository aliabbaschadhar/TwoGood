import React from "react";
import {
  ChairTablePhoto,
  JournalImage1,
  JournalImage2,
  JournalImage3,
} from ".";
function Journal() {
  const data = [
    {
      image: JournalImage1,
      title: "COLLECTION 022",
      detail:
        "Red gingham tablecloth, milky tea in a mug, toast crumbs, fried eggs and a silver handle sticking out of the open jamjar. Real life. Real clothes - Faye Toogood",
    },
    {
      image: JournalImage2,
      title: "TOOGOOD TAPES 05",
      detail:
        "A tale of adventures close to home. Listen to WHAT THE TOAST RACK SAW on Spotify.",
    },
    {
      image: JournalImage3,
      title: "MANUFRACTURE",
      detail:
        "I’ve chosen to bring pieces from my own personal archive to the Stockholm Furniture Fair.",
    },
  ];

  return (
    <div>
      <div className="lg:pt-40 pt-14 pb-20 flex flex-col items-center justify-center">
        <div className="w-fi">
          <p className="text-center font-mon font-extrabold tracking-[0.2rem] lg:text-[1.2rem] uppercase p-2">
            Journal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:px-28 lg:py-5">
          {data.map((item, index) => {
            return (
              <div key={index} className="p-4 w-full">
                <div className="w-full">
                  <img
                    className="w-full object-cover object-center"
                    src={item.image}
                  />
                </div>
                <div className="flex items-center justify-center pt-8 pb-4">
                  <h3 className="font-mono font-bold text-[0.9rem] lg:text-[1rem] tracking-[0.15rem]">
                    {item.title}
                  </h3>
                </div>
                <div className="w-full text-center px-2 lg:px-3">
                  <p className="font-light text-sm lg:text-[0.95rem] tracking-wider ">
                    {item.detail}
                  </p>
                </div>
                <div className="flex items-center justify-center py-5">
                  <a className="text-xs lg:text-[1rem] text-gray-500 underline underline-offset-4 tracking-widest">
                    READ MORE
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Journal;
