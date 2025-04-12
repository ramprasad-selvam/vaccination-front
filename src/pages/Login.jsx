import React from "react";
import logo from "../assets/logo.svg";

function Login() {
  return (
    <div className="container" role="main">
      <img src={logo} alt="Company Logo" className="logo" />
      <h2>Login</h2>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" autoComplete="username" required />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
