/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable default-case */
import React, { useState, useEffect } from "react";
import { Redirect, Route, useHistory } from "react-router-dom";

import "./App.css";
import fire from "./Firebase/fire";
import Login from "./Login";
import Investor from "./Investor/HomePage/Investor";

const App = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState("");
  let history = useHistory();

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setPasswordError("");
    setEmailError("");
  };

  const handleLogin = () => {
    clearInputs();
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPassword(err.message);
            break;
        }
      });
  };

  const handleSignup = () => {
    clearInputs();
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPassword(err.message);
            break;
        }
      });
  };

  const handleLogOut = () => {
    clearInputs();
    fire.auth().signOut();
    history.location.state = "";
  };

  const authListener = async () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        localStorage.setItem("tok", user.refreshToken);
      } else {
        setUser("");
        // localStorage.setItem("tok", "");
      }
    });
  };

  useEffect(() => {
    // console.log("\n ---Hi at login/signup Page--- \n");
    if (history.location.state === "invest") {
      handleLogOut();
    }
    authListener();
  }, [authListener]);

  return (
    <div className="App">
      {user ? (
        (localStorage.setItem("user", user.email),
          history.push("/invest", user.refreshToken))
      ) : (
          <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}
          />
        )}
    </div>
  );
};

export default App;
