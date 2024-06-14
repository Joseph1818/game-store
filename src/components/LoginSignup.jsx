import React from "react";
import "./LoginSignup.scss";
import user_icon from "./Assets/person.png";
import email_icon from "./Assets/email.png";
import password_icon from "./Assets/password.png";
import { useState } from "react";

const LoginSignup = () => {
  const [action, setAction] = useState("Register");

  return (
    <div className="main">
      <div className="container_login">
        <div className="header_login">
          <div className="text_login">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs_login">
          <div className="input_login">
            <img className="icon_img" src={user_icon} alt="" />
            <input placeholder="Name" type="text" />
          </div>
          <div className="input_login">
            <img className="icon_img" src={email_icon} alt="" />
            <input placeholder="Email " type="email" />
          </div>
          <div className="input_login">
            <img className="icon_img" src={password_icon} alt="" />
            <input placeholder="Password" type="password" />
          </div>
          <div className="forgot-password">
            Forgot Password? <span>Click here!</span>
          </div>
          <div className="submit-container">
            <a
              href=""
              className={
                action === "Se connecter" ? "btn_login gray" : "btn_login"
              }
              onClick={() => {
                setAction("S'enregistrer");
              }}
            >
              Register
            </a>
            <a
              href=""
              className={
                action === "Register" ? "btn_login gray" : "btn_login"
              }
              onClick={() => {
                setAction("Login");
              }}
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
