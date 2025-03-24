import React from "react";
import { GoPerson } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import NavLogo from "../assets/images/NavLogo.avif";

function Navbar() {
  return (
    <div>
      <div className="w-screen h-5 sm:h-7 bg-[#E8E7E4] flex items-center justify-center">
        <p className="uppercase tracking-tight font-extrabold xl:text-[0.83rem] sm:text-[0.75rem] w-fit text-black text-center px-2 text-[0.55rem]">
          FREE WORLDWIDE SHIPPING ON CLOTHING ORDERS OVER £300
        </p>
      </div>

      <div className="w-full flex items-center justify-between xl:px-14 xl:py-5 sm:px-8 px-4 py-3">
        <div className="flex items-center justify-center xl:gap-10 gap-5">
          <img className="md:w-40 w-28 xl:mr-1" src={NavLogo} />
          <div className="hidden md:flex-row lg:gap-5 xl:gap-10 gap-2 md:grid md:grid-cols-4 lg:flex">
            <a className="font-extralight xl:text-[0.81rem] text-[0.55rem] tracking-[0.13vw]">
              NEW IN
            </a>
            <a className="font-extralight xl:text-[0.81rem] text-[0.55rem] tracking-[0.13vw]">
              CLOTHING
            </a>
            <a className="font-extralight xl:text-[0.81rem] text-[0.55rem] tracking-[0.13vw]">
              FURNITURE
            </a>
            <a className="font-extralight xl:text-[0.81rem] text-[0.55rem] tracking-[0.13vw]">
              HOMEWARE
            </a>
            <a className="font-extralight xl:text-[0.81rem] text-[0.55rem] tracking-[0.13vw]">
              INTERIOR DESIGN
            </a>
            <a className="font-extralight xl:text-[0.81rem] text-[0.55rem] tracking-[0.13vw]">
              ABOUT
            </a>
            <a className="font-extralight xl:text-[0.81rem] text-[0.55rem] tracking-[0.13vw]">
              JOURNAL
            </a>
          </div>
        </div>

        <div className="max-w-1/3 flex xl:gap-6 gap-3 items-center justify-center">
          <div className="relative">
            <select className="appearance-none tracking-[0.12vw] xl:w-24 w-16 lg:w-20 bg-white text-[#6E6D6D] xl:py-2 xl:pl-4 xl:pr-8 pr-4 xl:text-xs text-[0.6rem] font-light focus:outline-none">
              <option disabled>Select option</option>
              <option>USD $</option>
              <option>EUR €</option>
              <option>EUR €</option>
              <option>EUR €</option>
              <option>EUR €</option>
              <option>JPY ¥</option>
              <option>GBP £</option>
              <option>CNY ¥</option>
              <option>KRW ₩</option>
              <option>INR ₹</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
          <div className="flex xl:gap-5 gap-3">
            <GoPerson className="xl:w-7 xl:h-7 w-5 h-5" />
            <IoSearchOutline className="xl:w-7 xl:h-7 w-5 h-5" />
            <IoBagOutline className="xl:w-7 xl:h-7 w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
