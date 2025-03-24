import React from "react";
import { basil, alemais } from "./assets/images";

function App() {
  return (
    <div>
      <h1 className="font-social-mono">Hello World</h1>
      <h1 className="font-futura">Hello World</h1>
      <h1 className="font-helvetica">Hello World</h1>
      <h1 className="font-sans">Hello World</h1>
      <h1>
        Hello Ali Abbas How are you I have created a new branch and now testing
        it
      </h1>
      <img src={basil} alt="" />
      <img src={alemais} alt="" />
    </div>
  );
}

export default App;
