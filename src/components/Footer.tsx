import FooterLogo from "./FooterLogo";
function Footer() {
  return (
    <>
      <div className="relative flex flex-col gap-32 p-4 lg:p-6">
        <div className="w-fit lg:absolute lg:top-1/4 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2">
          <FooterLogo />
        </div>

        <div className="flex lg:justify-between md:gap-72 gap-24">
          <div className="flex flex-col lg:gap-6 gap-10">
            <p className="lg:text-[0.9rem] lg:tracking-tighter font-helvetic text-[0.62rem] text-gray-500 uppercase">
              connect with us{" "}
            </p>
            <div className="flex flex-col">
              <a
                href="#"
                target="_blank"
                className="hover:text-gray-500 text-[1rem] font-helvetica"
              >
                Facebook
              </a>
              <a
                href="#"
                target="_blank"
                className="hover:text-gray-500 text-[1rem] font-helvetica"
              >
                Instagram
              </a>
              <a
                href="#"
                target="_blank"
                className="hover:text-gray-500 text-[1rem] font-helvetica"
              >
                Twitter
              </a>
              <a
                href="#"
                target="_blank"
                className="hover:text-gray-500 text-[1rem] font-helvetica"
              >
                LinkedIn
              </a>
              <a
                href="#"
                target="_blank"
                className="hover:text-gray-500 text-[1rem] font-helvetica"
              >
                Youtube
              </a>
            </div>
          </div>
          <div className="flex flex-col lg:gap-6 gap-10">
            <p className="lg:text-[0.9rem] lg:tracking-tighter font-helvetic text-[0.62rem] text-gray-500 uppercase">
              THE NITTY GRITTIES
            </p>
            <div className="flex flex-col">
              <a
                href="#"
                target="_blank"
                className="hover:text-gray-500 text-[1rem] lg:text-end font-helvetica"
              >
                Good Things FAQs
              </a>
              <a
                href="#"
                target="_blank"
                className="hover:text-gray-500 text-[1rem] lg:text-end font-helvetica"
              >
                Good Food FAQs
              </a>
              <a
                href="#"
                target="_blank"
                className="hover:text-gray-500 text-[1rem] lg:text-end font-helvetica"
              >
                Good Places
              </a>
              <a
                href="#"
                target="_blank"
                className="hover:text-gray-500 text-[1rem] lg:text-end font-helvetica"
              >
                Pathways{" "}
              </a>
              <a
                href="#"
                target="_blank"
                className="hover:text-gray-500 text-[1rem] lg:text-end font-helvetica"
              >
                Careers
              </a>
              <a
                href="#"
                target="_blank"
                className="hover:text-gray-500 text-[1rem] lg:text-end font-helvetica"
              >
                Wholesale
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-16 lg:gap-24 lg:flex-col-reverse lg:py-10">
          <div className="flex flex-col lg:justify-center lg:items-center gap-7">
            <p className="lg:hidden text-[0.62rem] text-gray-500 uppercase">
              Acknowledgement of country
            </p>
            <p className="font-helvetica text-sm text-start lg:text-center lg:max-w-[65vw] lg:text-[1rem] leading-6">
              We are proud and privileged to have our home on this land, and to
              be able to continue the long tradition of community coming
              together around food, begun thousands of years ago by First
              Nations peoples. As we stand together on this unceded land, we
              acknowledge our First Nations people, are the original custodians
              of this land, and we recognise their deep connection to land,
              water, sky and community which continues today. We pay our deep
              respects to community elders, past, present and emerging, for they
              hold the memories, the traditions, the culture and hopes of
              Aboriginal and Torres Strait Islander peoples. Always was, always
              will be Aboriginal land.
            </p>
          </div>

          <div className="text-gray-500 uppercase text-xs font-helvetica tracking-tight flex items-center justify-between lg:justify-center lg:gap-9 lg:text-[0.85rem]">
            <p>© Two Good Co. 2025</p>
            <a href="#" target="_blank">
              Terms of Use
            </a>
            <a href="#" target="_blank">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
