import React from "react";
import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Google from "../Assets/google-icon.png";
import Apple from "../Assets/apple-icon.png";

function Login() {
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/dashboard");
  };

  return (
    <div className="login">
      <div className="login-bar">
        <h1 className="head-signin">Sign In</h1>
        <div className="head-signin-para">Sign in to your account</div>
        <div className="login-options">
          <div className="login-opt">
            <img src={Google} alt="G" />
            Sign in with Google
          </div>
          <div className="login-opt">
            <img src={Apple} alt="G" />
            Sign in with Apple
          </div>
        </div>

        <form>
          <label>Email Address</label>
          <br />
          <input type="email"></input>
          <br />
          <label>Password</label>
          <br></br>
          <input type="password"></input>
          <br></br>
          <a href="">Forgot Password?</a>
          <br></br>
          <button className="signIn" onClick={handleSearch}>
            Sign In
          </button>
        </form>
        <div className="register">
          Don't have an account? <a href="">Register here</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
