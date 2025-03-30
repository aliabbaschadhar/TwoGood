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
  // Add this useEffect for the Contra button script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://contra.com/static/embed/sdk.js';
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

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
    <>
      {/* Floating Contra button that stays visible across the site */}
      <div
        className="contra-hire-me-button fixed bottom-8 right-8 z-50"
        data-analyticsUserId="5857ac64-157f-4860-abd5-6bc65b9e98db"
        data-theme="light"
        data-username="aliabbaschadhar"
      ></div>

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
    </>
  )
}

export default App;
