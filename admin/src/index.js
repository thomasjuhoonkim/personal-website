import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import App from "./App";

import Axios from "axios";

import { DarkModeProvider } from "./contexts/DarkModeContext";
import { AuthenticationProvider } from "./contexts/AuthenticationContext";
import { LoadingProvider } from "./contexts/LoadingContext";

import "./index.css";

// ===== AXIOS =====
Axios.defaults.withCredentials = true;
// can also use Axios.defaults.header["X-Api-Key"] = process.enc.REACT_APP_API_KEY;
Axios.interceptors.request.use(
  (config) => {
    config.headers["X-Api-Key"] = process.env.REACT_APP_API_KEY;
    return config;
  },
  (error) => Promise.reject(error)
);

// ===== CONTENT =====
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoadingProvider>
      <DarkModeProvider>
        <AuthenticationProvider>
          <App />
        </AuthenticationProvider>
      </DarkModeProvider>
    </LoadingProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
