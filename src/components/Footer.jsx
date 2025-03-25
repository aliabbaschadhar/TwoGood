import React from "react";
import { LiaPinterestP } from "react-icons/lia";
import { PiInstagramLogoBold } from "react-icons/pi";

function Footer() {
  const links = [
    "Shipping & Returns",
    "Size Guide",
    "FAQ",
    "Terms & Conditions",
    "Cookies Policy",
    "Privacy Policy",
    "Terms of Service",
    "Refund Policy",
  ];

  const SocialLinks = ["About Toogood", "Contact", "Stockists", "Careers"];

  const Contact = ["150 Royal College Street", "London", "NW1 0TA"];

  return (
    <div className="h-fit bg-[#FAF4EB] px-2 pt-6 lg:px-12 xl:px-32 lg:pb-24 lg:pt-14 pb-20 flex flex-col gap-12 lg:gap-24 md:flex-row md:px-4">
      <div className="lg:w-[21vw] w-fit flex flex-col gap-4 lg:gap-6 px-2 py-2">
        <div className="flex flex-col gap-6 pt-2">
          <p className="font-extrabold font-helvetica text-[0.81rem] tracking-[0.15rem]">
            NEWSLETTER
          </p>
          <p className="text-[#686766] font-thin tracking-wide text-[0.73rem] lg:text-[1rem]">
            Subscribe to receive updates, access to <br /> exclusive sales, and
            more.
          </p>
        </div>

        <div className="flex flex-col gap-4 lg:gap-6">
          <input
            className="outline-none border-[0.1rem] lg:w-full md:max-w-xl text-[0.85rem] lg:text-[1rem] border-gray-300 p-2 lg:p-3  focus:border-black bg-transparent"
            type="text"
            placeholder="E-mail"
          />
          <button className="w-fit flex items-center justify-center px-6 py-3 lg:py-4 lg:px-8 bg-[rgb(15,15,15)] text-white cursor-pointer">
            <p className="tracking-[0.15rem] text-[0.6rem] lg:text-[0.8rem]">
              SUBSCRIBE
            </p>
          </button>
        </div>
      </div>

      <div className="w-fit px-2">
        <div className="flex flex-col gap-6 pt-2">
          <p className="font-extrabold font-helvetica text-[0.81rem] tracking-[0.15rem]">
            INFORMATION
          </p>
          <div className="flex flex-col gap-2 lg:gap-4">
            {links.map((text, index) => (
              <a
                key={index}
                className="text-[#686766] font-thin tracking-wider text-[0.73rem] lg:text-[0.95rem]"
              >
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="w-fit px-2">
        <div className="flex flex-col gap-4 pt-2">
          <p className="font-extrabold font-helvetica text-[0.81rem] tracking-[0.15rem]">
            ABOUT
          </p>
          <div className="flex flex-col gap-2 lg:gap-4">
            {SocialLinks.map((text, index) => (
              <a
                key={index}
                className="text-[#686766] font-thin tracking-wider text-[0.73rem] lg:text-[0.95rem]"
              >
                {text}
              </a>
            ))}
          </div>
        </div>
        <div className="flex gap-6 lg:gap-8 pt-4">
          <PiInstagramLogoBold className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400" />
          <LiaPinterestP className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400" />
        </div>
      </div>

      <div className="w-fit px-2">
        <div className="flex flex-col gap-4 pt-2">
          <p className="font-extrabold font-helvetica text-[0.81rem] tracking-[0.15rem]">
            CONTACT
          </p>
          <div className="flex flex-col gap-1">
            {Contact.map((text, index) => (
              <a
                key={index}
                className="text-[#686766] font-thin tracking-wide text-[0.73rem] lg:text-[0.95rem]"
              >
                {text}
              </a>
            ))}
          </div>
          <p className="text-[#686766] underline underline-offset-4 font-helvetica font-thin tracking-wide text-[0.73rem] lg:text-[0.95rem]">
            +44 (0)20 7226 1061
          </p>
          <p className="text-[#686766] underline underline-offset-4 font-helvetica font-thin tracking-wide text-[0.73rem] lg:text-[0.95rem]">
            sales@t-o-o-g-o-o-d.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
