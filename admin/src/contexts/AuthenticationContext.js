import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";

import { Loading } from "../pages";

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

  if (isLoading) return <Loading />;

  return (
    <AuthenticationContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, isLoading }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export { AuthenticationContext, AuthenticationProvider };
