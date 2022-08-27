import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DarkModeProvider } from "./context/DarkModeContext";
import Home from "./views/Home";

import "./App.css";

function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
