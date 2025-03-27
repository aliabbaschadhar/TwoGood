import React, { useEffect } from 'react'
import { LandingPage, Navbar } from './components';
import LocomotiveScroll from 'locomotive-scroll';


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
      className='w-full'>
      <Navbar />
      <LandingPage />
    </main>
  )
}

export default App;
