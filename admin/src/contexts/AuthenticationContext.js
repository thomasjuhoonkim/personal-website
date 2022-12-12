import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";

const AuthenticationContext = createContext();

const AuthenticationProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // check if there is an active session
  useEffect(() => {
    Axios.get(process.env.REACT_APP_API_ENDPOINT + "/login")
      .then((response) => (response.data.auth ? setIsLoggedIn(true) : null))
      .catch((_error) => {})
      .finally(() => setIsLoading(false));
  }, []);

  // enable is needed
  // if (isLoading) return null;

  return (
    <AuthenticationContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, isLoading }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export { AuthenticationContext, AuthenticationProvider };
