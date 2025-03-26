import React from "react";
import Footer from "./components/Footer";
import Email from "./components/Email";
import Impact from "./components/Impact";
function App() {
  return (
    <>
      <div className="bg-[#F7F7F7]">
        <SendMessage />
        <Impact />
        <Email />
        <Footer />
      </div>
    </>
  );
}

export default App;
