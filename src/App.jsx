import React from "react";
import Navbar from "./components/Navbar";
import TwoGoodSvg from "./components/TwoGoodSvg";
import CartSvg from "./components/CartSvg";
import LandingVideo from "./components/LandingVideo";

function App() {
  return (
    <>
      <div className="w-screen">
        <Navbar />
        <LandingVideo />
      </div>
    </>
  );
}

export default App;
