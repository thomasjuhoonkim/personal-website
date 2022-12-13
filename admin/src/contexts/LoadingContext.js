import React, { createContext, useState, useEffect } from "react";

const LoadingContext = createContext();

const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => setIsLoading(false);

  useEffect(() => {
    window.addEventListener("load", handleLoadingComplete);
    return () => window.removeEventListener("load", handleLoadingComplete);
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export { LoadingContext, LoadingProvider };
