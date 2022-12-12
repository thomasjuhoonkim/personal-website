import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { DarkModeContext } from "./contexts/DarkModeContext";

import { Template, ProtectedRoute } from "./components/index";
import { Login, Register, FourZeroFour, Dashboard } from "./pages/index";

import "./App.css";

function App() {
  // set html theme for out of bounds background color
  const { theme } = useContext(DarkModeContext);
  document.querySelector("html").setAttribute("data-theme", theme);

  // ===== Content =====
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<Template />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Route>
        <Route path="*" element={<FourZeroFour />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
