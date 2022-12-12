import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import App from "./App";

import Axios from "axios";

import { DarkModeProvider } from "./contexts/DarkModeContext";
import { AuthenticationProvider } from "./contexts/AuthenticationContext";

import "./index.css";

// ===== CONTENT =====
Axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <AuthenticationProvider>
        <App />
      </AuthenticationProvider>
    </DarkModeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
