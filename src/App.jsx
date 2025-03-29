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

    // Make the instance accessible globally for the Navbar component
    window.locomotiveScroll = scroll;

    return () => {
      scroll.destroy();
      delete window.locomotiveScroll;
    }
  }, []);

  return (
    <main
      data-scroll-container
      className='w-full bg-[#F7F7F7] overflow-hidden'>
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
