import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DarkModeContext } from "./context/DarkModeContext";

import Home from "./views/Home";
import About from "./views/About";
import Experiences from "./views/Experiences";
import Contact from "./views/Experiences";

import "./App.css";

function App() {
  const { theme } = useContext(DarkModeContext);
  document.querySelector("html").setAttribute("data-theme", theme);
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
