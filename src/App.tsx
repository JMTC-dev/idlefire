import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Campfire from "./components/Campfire";
import { Routes, Route } from "react-router";
import Woodcutting from "./components/Woodcutting";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Campfire />} />
        <Route path="woodcutting" element={<Woodcutting />} />
      </Routes>
    </>
  );
}

export default App;
