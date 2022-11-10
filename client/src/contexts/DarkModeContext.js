import React, { createContext, useState } from "react";
import { getCookieConsentValue } from "react-cookie-consent";

const DarkModeContext = createContext();

function DarkModeProvider(props) {
  const [theme, setTheme] = useState(
    getCookieConsentValue()
      ? localStorage.getItem("theme")
      : window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    if (getCookieConsentValue()) localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  const handleCookieAccept = () => {
    setTheme("dark");
  };

  return (
    <div>
      <DarkModeContext.Provider
        value={{ theme, switchTheme, handleCookieAccept }}
      >
        {props.children}
      </DarkModeContext.Provider>
    </div>
  );
}

export { DarkModeContext, DarkModeProvider };
