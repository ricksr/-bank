import React from "react";

import hdr from './hdr3.png';

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  return (<div>
    <div style={{ width: '60vw' }}>
      <img style={{ width: '100vw' }} src={hdr} alt={hdr} />
    </div>
    <section className="login">

      <div className="loginContainer">
        <label>Email</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '40vw' }}
        />
        <p className="errorMsg">{emailError}</p>
        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '40vw' }}
        />
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button onClick={handleLogin}>Sign in</button>
              <p>
                Don't have an account ?{" "}
                <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
              </p>
            </>
          ) : (
              <>
                <button onClick={handleSignup} style={{ backgroundColor: '#680A34' }}>Sign up</button>
                <p>
                  have an account ?{" "}
                  <span onClick={() => setHasAccount(!hasAccount)} >Sign in</span>
                </p>
              </>
            )}
        </div>
      </div>
    </section>
  </div>
  );
};

export default Login;
