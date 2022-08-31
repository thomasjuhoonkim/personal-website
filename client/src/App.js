import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { DarkModeContext } from "./context/DarkModeContext";

import Template from "./components/Template/Template";
import Home from "./views/Home";
import About from "./views/About";
import Experiences from "./views/Experiences";
import Portfolio from "./views/Portfolio";
import Contact from "./views/Contact";

import "./App.css";

function App() {
  const { theme } = useContext(DarkModeContext);
  document.querySelector("html").setAttribute("data-theme", theme);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Template>
              <Outlet />
            </Template>
          }
        >
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
