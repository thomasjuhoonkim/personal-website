import React, { createContext, useState, useEffect } from "react";

const LoadingContext = createContext();

const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => setIsLoading(false);

  useEffect(() => {
    window.addEventListener("load", handleLoadingComplete);
    // self assigning object allows resetting of data attribute
    // eslint-disable-next-line no-self-assign
    window.data = window.data;
    return () => window.removeEventListener("load", handleLoadingComplete);
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export { LoadingContext, LoadingProvider };
