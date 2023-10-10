import React from "react";
import "./Footer.css";
import Git from "../../assets/download (6).png";
import instgram from "../../assets/download (7).png";
import linkedin from "../../assets/download (8).png";
import Logo from "../../assets/logo.png";
function Footer() {
  return (
    <div className="Footer-container">
      <hr />

      <div className="Footer">
        <div className="social-links">
          <img src={Git} alt="...." />
          <img src={instgram} alt="...." />
          <img src={linkedin} alt="...." />
        </div>
        <div className="Logo-f">
          <img src={Logo} alt="....." />
        </div>
      </div>
      <div className="blur footer-blur-1"></div>
      <div className="blur footer-blur-2"></div>
    </div>
  );
}

export default Footer;
