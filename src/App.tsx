import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Campfire from "./components/Campfire";
import { Routes, Route } from "react-router";
import Woodcuting from "./components/Woodcutting";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Campfire />} />
        <Route path="Woodcutting" element={<Woodcuting />} />
      </Routes>
    </>
  );
}

export default App;
