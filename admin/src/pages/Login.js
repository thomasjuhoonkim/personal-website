import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

import DarkModeButton from "../components/NavBar/DarkModeButton/DarkModeButton";
import { AuthenticationContext } from "../contexts/AuthenticationContext";

import styles from "./Login.module.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setIsLoggedIn } = useContext(AuthenticationContext);
  const [loginPending, setLoginPending] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");

  // redirect if already logged in through session
  // could probably move axios get to the context itself
  const navigate = useNavigate();
  useEffect(() => {
    Axios.get(link + "/login")
      .then((response) => {
        if (response.data.auth) {
          setIsLoggedIn(true);
          setLoginMessage("Already logged in, redirecting...");
          setTimeout(() => navigate("/404"), 1000);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [navigate, setIsLoggedIn]);

  // ===== Axios ======
  const link = "http://localhost:5000";
  Axios.defaults.withCredentials = true;

  const login = (e) => {
    e.preventDefault();
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
        if (response.data.auth === true) {
          setLoginPending(false);
          localStorage.setItem("token", response.data.token);
          setLoginMessage(response.data.message);
          setTimeout(() => {
            setIsLoggedIn(true);
            navigate("404");
          }, 1000);
          return;
        }
        // unsuccessful authentication
        setLoginMessage(response.data.message);
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
        <form className={styles.formContainer} onSubmit={login}>
          {loginMessage && (
            <p
              className={styles.loginMessage}
              style={{
                color: loginMessage.includes("logged in") ? "green" : "red",
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
          <input
            value="Login"
            type="submit"
            style={{ background: loginPending ? "gray" : null }}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
