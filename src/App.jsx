import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import {
  Reviews,
  Impact,
  Email,
  Footer,
  ProductPage,
} from "./components/index";
function App() {

  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <>
      <div ref={scrollRef} id="main" className="bg-[#F7F7F7]">
        <ProductPage />
        <Reviews />
        <Impact />
        <Email />
        <Footer />
      </div>
    </>
  );
}

export default App;
