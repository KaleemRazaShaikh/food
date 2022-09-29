import React from "react";
import Logo from "../../assets/logo.png";
import "./footer.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <div className="container">
      <div className="footer">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="social-icons">
          <TwitterIcon className="icon" />
          <FacebookIcon className="icon" />
          <InstagramIcon className="icon" />
        </div>
        <p className="footer-p">Copywright 2020 Bella Onojie.com</p>
      </div>
    </div>
  );
}

export default Footer;
