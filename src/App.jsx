import React from "react";
import Footer from "./components/Footer";
import Journal from "./components/Journal";
import TableChairImg from "./components/TableChairImg";
import ContactOrder from "./components/ContactOrder";
import HandyMan from "./components/HandyMan";
function App() {
  return (
    <>
      <HandyMan />
      <ContactOrder />
      <TableChairImg />
      <Journal />
      <Footer />
    </>
  );
}

export default App;
