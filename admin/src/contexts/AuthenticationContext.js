import React, { createContext, useState } from "react";

const AuthenticationContext = createContext(null);

const AuthenticationProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // create function for checking if session is active here

  return (
    <>
      <AuthenticationContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        {children}
      </AuthenticationContext.Provider>
    </>
  );
};

export { AuthenticationContext, AuthenticationProvider };
