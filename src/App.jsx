import React, { useEffect } from "react";
import LocomotiveScroll from 'locomotive-scroll';
import {
  Navbar,
  LandingPage,
  Goods,
  Reviews,
  Impact,
  Email,
  Footer,
  ProductPage,
} from "./components/index";

function App() {

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });

    return () => {
      scroll.destroy();
    }
  }, []);

  return (
    <main
      data-scroll-container
      className='w-full bg-[#F7F7F7]'>
      <Navbar />
      <LandingPage />
      <Goods />
      <ProductPage />
      <Reviews />
      <Impact />
      <Email />
      <Footer />
    </main>
  )
}

export default App;
