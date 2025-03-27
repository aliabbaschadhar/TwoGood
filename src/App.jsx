import React from "react";
import {
  Reviews,
  Impact,
  Email,
  Footer,
  ProductPage,
} from "./components/index";
function App() {
  return (
    <>
      <div className="bg-[#F7F7F7]">
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
