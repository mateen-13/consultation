import React from "react";
import "./ResetLinkSent.css";
import logo from "./assets/Logo.png";

const ResetLinkSent = () => {
  const openGmail = () => {
    window.open("https://mail.google.com/", "_blank");
  };

  return (
    <div className="reset-link-sent-container">
      <div className="hi">
        <img src={logo} alt="" className="logo"></img>
        <h1 className="h">Guidance</h1>
      </div>

      {/* Icon with Tick Mark */}
      <div className="icon-circle">
        <span className="tick-mark">✔</span>
      </div>

      {/* Heading and Text */}
      <h2>Reset link sent</h2>
      <p>Check your email for the reset password link.</p>

      {/* Open Email Link Button */}
      <button className="open-email-btn" onClick={openGmail}>
        Open email app
      </button>

      {/* Divider */}
      <div className="divider">
        <hr />
      </div>

      {/* Additional Text */}
      <p className="info-text">
        If you don’t see your reset password email link, please check your spam
        folder inside your mail.
      </p>
    </div>
  );
};

export default ResetLinkSent;
