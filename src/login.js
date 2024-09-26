import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css"; // Assuming you want to style this with an external stylesheet
import logo from "./assets/Logo.png";
import apple from "./assets/Vector.png";
import google from "./assets/google 1.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);

  const validateEmail = (email) => {
    // Simple email validation regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      setEmailError("Email cannot be empty");
    } else if (!validateEmail(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
      // Add further actions like form submission or authentication
      alert("Form submitted successfully");
    }
  };

  return (
    <div className="login-page">
      <div className="hi">
        <img src={logo} alt="" className="logo"></img>
        <h1 className="h">Guidance</h1>
      </div>
      <h2>Login</h2>
      <div className="auth-buttons">
        <button className="google-btn">
          <img src={google} alt="" className="google-logo"></img>
          <p className="paragoogle">Continue with Google</p>
        </button>
      </div>
      <div className="auth-buttons">
        <button className="apple-btn">
          <img src={apple} alt="" className="apple"></img>
          <p className="applepara">Sign in with Apple</p>
        </button>
      </div>
      <div className="divider">
        <hr />
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="raybit@gmail.com"
            // required
            className={`email-input ${emailError ? "error-border" : ""}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && (
            <p className="error-text">The email you entered is incorrect</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="........"
            // required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="continue-button">
          Continue
        </button>
      </form>

      <div className="footer">
        <p className="fp">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
        <p className="fp">
          <Link to="/forgot-password">Forgot password?</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
