import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Typecard from "./components/Typecard.jsx";

function App() {
  return (
    <div className="flex flex-wrap gap-4 p-4 justify-center">
      <Typecard type="Global Cuisine" />
      <Typecard type="Special Diets" />
      <Typecard type="Quick N Easy" />
      <Typecard type="Healthy Diet" />
    </div>
  );
}

export default App;
