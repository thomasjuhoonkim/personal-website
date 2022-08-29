import React, { createContext, useState } from "react";

const DarkModeContext = createContext();

function DarkModeProvider(props) {
  const storageTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(storageTheme ? storageTheme : "light");
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
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
