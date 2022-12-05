import React, { createContext, useState, useEffect } from "react";
import { getCookieConsentValue } from "react-cookie-consent";

function isJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

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

  if (!itemStr) return null;
  if (!isJsonString(itemStr)) return null;

  const item = JSON.parse(itemStr);
  const now = new Date();

  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
};

const DarkModeContext = createContext();

function DarkModeProvider(props) {
  useEffect(() => {
    if (
      localStorage.getItem("theme") === "light" ||
      localStorage.getItem("theme") === "dark"
    ) {
      localStorage.removeItem("theme");
    }
  }, []);

  const [theme, setTheme] = useState(
    getCookieConsentValue()
      ? getWithExpiry("theme")
      : window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    if (getCookieConsentValue()) {
      setWithExpiry("theme", newTheme, 1 * 60 * 60 * 1000);
    }
    setTheme(newTheme);
  };

  return (
    <div>
      <DarkModeContext.Provider value={{ theme, switchTheme }}>
        {props.children}
      </DarkModeContext.Provider>
    </div>
  );
}

export { DarkModeContext, DarkModeProvider };
