import React, { createContext, useState } from "react";

const setWithExpiry = (key, value, ttl) => {
  const now = new Date();
  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
};

const getWithExpiry = (key) => {
  const itemStr = localStorage.getItem(key);

  if (!itemStr) {
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  }

  const item = JSON.parse(itemStr);
  const now = new Date();

  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  }
  return item.value;
};

const DarkModeContext = createContext("light");

function DarkModeProvider(props) {
  const themeKey = "themeWithExpiry";

  const [theme, setTheme] = useState(getWithExpiry(themeKey));

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setWithExpiry(themeKey, newTheme, 1 * 60 * 60 * 1000);
    setTheme(newTheme);
  };

  return (
    <>
      <DarkModeContext.Provider value={{ theme, switchTheme }}>
        {props.children}
      </DarkModeContext.Provider>
    </>
  );
}

export { DarkModeContext, DarkModeProvider };
