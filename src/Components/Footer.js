import React from "react";
import "../Styles/Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div>
        <div className="logo_container">
          <img src={require("../assets/logo.png")} alt="logo" />
          <p>LaslesVPN</p>
        </div>
        <p className="info">
          LaslesVPN is a private virtual network that <br />
          has unique fetures and has high security
        </p>
        <p className="trademark" style={{ textAlign: "start" }}>
          @2020Lasles<b>VPN</b>
        </p>
      </div>
      <div className="footer-item">
        <p>
          <b>Product</b>
        </p>
        <p>Download</p>
        <p>Pricing</p>
        <p>Locaions</p>
        <p>Server</p>
        <p>Countries</p>
        <p>Blog</p>
      </div>
      <div className="footer-item">
        <p>
          <b>Engage</b>
        </p>
        <p>LaslesVPN ?</p>
        <p>FAQ</p>
        <p>Tutorials</p>
        <p>About Us</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
      <div className="footer-item">
        <p>
          <b>Earn Money</b>
        </p>
        <p>Affiliate</p>
        <p>Become Partner</p>
      </div>
    </div>
  );
}

export default Footer;
