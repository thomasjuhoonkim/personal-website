import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";

const AuthenticationContext = createContext();

const AuthenticationProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  // check if there is an active session
  useEffect(() => {
    Axios.get(process.env.REACT_APP_API_ENDPOINT + "/login")
      .then((response) => (response.data.auth ? setIsLoggedIn(true) : null))
      .catch((_error) => {})
      .finally(() => setIsAuthLoading(false));
  }, []);

  return (
    <AuthenticationContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, isAuthLoading }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export { AuthenticationContext, AuthenticationProvider };
