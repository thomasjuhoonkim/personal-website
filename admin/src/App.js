import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { DarkModeContext } from "./contexts/DarkModeContext";

import { Template } from "./components/index";
import { Login, FourZeroFour } from "./pages/index";

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
          <Route path="/" element={<Login />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Route>
        <Route path="*" element={<FourZeroFour />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
