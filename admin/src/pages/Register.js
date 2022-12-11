import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

import DarkModeButton from "../components/NavBar/DarkModeButton/DarkModeButton";

import styles from "./Register.module.scss";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registrationCode, setRegistrationCode] = useState("");

  const [loginPending, setRegistrationPending] = useState(false);
  const [loginMessage, setRegistrationMessage] = useState("");

  // ===== Axios ======
  Axios.defaults.withCredentials = true;
  const navigate = useNavigate();
  const register = (e) => {
    e.preventDefault();
    if (!username) {
      setRegistrationMessage("Username required.");
      return;
    }
    if (!password) {
      setRegistrationMessage("Password required.");
      return;
    }
    if (!registrationCode) {
      setRegistrationMessage("Registration code required.");
      return;
    }
    if (password !== confirmPassword) {
      setRegistrationMessage("Passwords do not match.");
      return;
    }

    setRegistrationPending(true);
    Axios.post(process.env.REACT_APP_API_ENDPOINT + "/register", {
      username: username,
      password: password,
      registrationCode: registrationCode,
    })
      .then((response) => {
        // successful registration
        if (response.data.registration === true) {
          setRegistrationPending(false);
          setRegistrationMessage(response.data.message);
          setTimeout(() => {
            console.log("navigate to admin dashboard");
            navigate("/login");
          }, 3000);
          return;
        }
        // unsuccessful registration
        setRegistrationMessage(response.data.message);
        setRegistrationPending(false);
      })
      .catch(() => {
        // network error
        setRegistrationPending(false);
        setRegistrationMessage("Network error, please try again later.");
      });
  };

  // ===== Content ======
  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <DarkModeButton />
        <h1>Register</h1>
        <form className={styles.formContainer} onSubmit={register}>
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
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Excommunicado!"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Excommunicado!"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <label>Registration Code</label>
          <input
            type="text"
            placeholder="The Continental"
            onChange={(e) => {
              setRegistrationCode(e.target.value);
            }}
          />
          <input
            value="Register"
            type="submit"
            style={{ background: loginPending ? "gray" : null }}
          />
        </form>
        <a href="/login" className={styles.login}>
          Go to Login Page
        </a>
      </div>
    </div>
  );
};

export default Register;
