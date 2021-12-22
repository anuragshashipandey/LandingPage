import React from "react";
import "../Styles/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="brandname">
        <img src={require("../assets/logo.png")} alt="logo" />
        <p>
          Lasles<b>VPN</b>
        </p>
      </div>
      <div className="r_header">
        <div className="features">
          <p className="feature">Pricing</p>
          <p className="feature">Testimonials</p>
        </div>
        <div className="sign">
          <p className="signin">Sign In</p>
          <p className="signup">Sign Up</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
