import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { DarkModeContext } from "./contexts/DarkModeContext";
import { AuthenticationContext } from "./contexts/AuthenticationContext";
import { LoadingContext } from "./contexts/LoadingContext";

import { DashboardTemplate, ProtectedRoute } from "./components";
import {
  Login,
  Register,
  FourZeroFour,
  Dashboard,
  Loading,
  Blog,
  BlogPost,
} from "./pages";

import "./App.css";

function App() {
  // set html theme for out of bounds background color
  const { theme } = useContext(DarkModeContext);
  document.querySelector("html").setAttribute("data-theme", theme);

  // loading screen
  const { isLoading } = useContext(LoadingContext);
  const { isAuthLoading } = useContext(AuthenticationContext);
  if (isLoading || isAuthLoading) return <Loading />;

  // ===== Content =====
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardTemplate />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:blogId" element={<BlogPost />} />
          </Route>
        </Route>
        <Route path="*" element={<FourZeroFour />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
