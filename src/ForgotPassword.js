import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css"; // Include your styles
import logo from "./assets/Logo.png";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSendResetLink = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email");
    } else {
      setError("");
      setEmailSent(true);
      // Navigate to ResetLinkSent page after sending email
      navigate("/ResetLinkSent");
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="hi">
        <img src={logo} alt="" className="logo"></img>
        <h1 className="h">Guidance</h1>
      </div>
      {/* Back Link */}
      <div className="back-link" onClick={() => navigate(-1)}>
        <span className="back-icon">←</span> Back
      </div>

      {/* Heading */}
      <h1>Forgot Password</h1>

      {/* Description */}
      <p>
        Enter the email you use for the account and we’ll send you a reset
        password link.
      </p>

      {/* Email Input */}
      <form onSubmit={handleSendResetLink}>
        <input
          type="email"
          placeholder="Email"
          className={`email-input ${error ? "error-border" : ""}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && (
          <p className="error-text">The email you entered is incorrect</p>
        )}

        {/* Reset Link Button */}
        <button type="submit" className="reset-btn">
          Email me my reset link
        </button>
      </form>

      {/* Additional Text */}
      <p className="info-text">
        If you don’t see your reset password email link, please check your spam
        folder.
      </p>
    </div>
  );
};

export default ForgotPassword;
