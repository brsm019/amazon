import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon"
        />
      </Link>
      <div class="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" />
          <h5>Password</h5>
          <input type="password" />
          <button className="login__signInButton">Sign In</button>
        </form>
        <p>
          By signing in you agree to Amazoniaz's conditions of Use and Sale.
          Please see our Privacy Notice, Cookie Policy and our Interest-Based
          ads
        </p>
        <button className="login__RegisterButton">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
