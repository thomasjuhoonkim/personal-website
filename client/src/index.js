import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { DarkModeProvider } from "./contexts/DarkModeContext";

import Axios from "axios";

import App from "./App";

import "./index.css";

// ===== AXIOS =====
Axios.defaults.withCredentials = true;
Axios.interceptors.request.use(
  (config) => {
    config.headers["X-Api-Key"] = process.env.REACT_APP_API_KEY;
    return config;
  },
  (error) => Promise.reject(error)
  // ,{ synchronous: true }
);

// ===== CONTENT =====
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
