import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";

import DarkModeButton from "../components/NavBar/DarkModeButton/DarkModeButton";
import { AuthenticationContext } from "../contexts/AuthenticationContext";

import styles from "./Login.module.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { isLoggedIn, setIsLoggedIn } = useContext(AuthenticationContext);
  const [loginPending, setLoginPending] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");

  // ===== Axios ======
  const link = "http://localhost:5000";
  Axios.defaults.withCredentials = true;

  const login = () => {
    if (!username) {
      setLoginMessage("Please enter a username.");
      return;
    }
    if (!password) {
      setLoginMessage("Please enter a password.");
      return;
    }

    setLoginPending(true);
    Axios.post(link + "/login", {
      username: username,
      password: password,
    })
      .then((response) => {
        // successful authentication
        if (response.data.auth) {
          setLoginPending(false);
          setLoginMessage("Successfully logged in, redirecting...");
          setTimeout(() => setIsLoggedIn(true), 1000);
          return;
        }
        // unsuccessful authentication
        setLoginMessage("Incorrect username or password.");
        setLoginPending(false);
        setIsLoggedIn(false);
      })
      .catch(() => {
        // network error
        setLoginPending(false);
        setLoginMessage("Network error, please try again later.");
        setIsLoggedIn(false);
      });
  };

  // ===== Content ======
  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <DarkModeButton />
        <h1>Login</h1>
        <div className={styles.formContainer}>
          {loginMessage && (
            <p
              className={styles.loginMessage}
              style={{
                color: loginMessage.includes("Success") ? "green" : "red",
              }}
            >
              {loginMessage}
            </p>
          )}
          <label>Username</label>
          <input
            type="text"
            placeholder="johnwick@dog.com"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            required
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Excommunicado!"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
        </div>
        <button
          style={{ background: loginPending ? "gray" : null }}
          onClick={login}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
