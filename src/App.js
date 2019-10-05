import React from "react";
import Payments from "./Payments";

function App({ className }) {
  return (
    <div className={`App ${className}`}>
      <Payments />
    </div>
  );
}

export default App;
