import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { DarkModeContext } from "./contexts/DarkModeContext";
import CookieConsent from "react-cookie-consent";

import { Template } from "./components/index";
import {
  Home,
  About,
  Experience,
  Portfolio,
  Contact,
  FourZeroFour,
} from "./views/index";

import "./App.css";

function App() {
  const { theme, handleCookieAccept } = useContext(DarkModeContext);
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
          <Route path="/experience" element={<Experience />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<FourZeroFour />} />
      </Routes>
      <CookieConsent
        location="bottom"
        enableDeclineButton
        buttonText="Allow Cookies"
        declineButtonText="Dark Mode is Boring"
        flipButtons={true}
        style={{
          background: "var(--font-color)",
          color: "var(--bg-color)",
          transition: "background .5s ease, color .5s ease",
        }}
        buttonStyle={{
          borderRadius: 10,
          marginLeft: 15,
          marginRight: 0,
        }}
        declineButtonStyle={{ borderRadius: 10 }}
        onAccept={handleCookieAccept}
      >
        This website uses cookies to save theme preferences. You can change
        themes by clicking the doodle on the top left.
      </CookieConsent>
    </BrowserRouter>
  );
}

export default App;
