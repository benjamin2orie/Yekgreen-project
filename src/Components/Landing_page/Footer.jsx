import React from "react";
import footer_logo from "../Images/footer_logo.png";
import facebook from "../Images/facebook.png";
import twitter from "../Images/twitter.png";
import instagram from "../Images/instagram.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="container-footer">
        <div className="div_footer">
          <div className="logo_content">
            <img src={footer_logo} alt="logo" />
            <div className="border-free">
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>
              Aenean at tristique pellentesque arcu morbi rhoncus viverra nisi
              integer.
            </p>
            <p> Dui est, scelerisque amet, cursus. Dui convallis.</p>
            </div>
          </div>
          <div className="container_about">
            <ul>
              <li>about us</li>
              <li>privacy policy</li>
              <li>disclaimer</li>
            </ul>
          </div>
          <div className="social">
            <h3>social</h3>
            <div className="social_container">
              <img src={facebook} alt="icon" className="Book" />
              <img src={instagram} alt="icon" />
              <img src={twitter} alt="icon" />
            </div>
          </div>
        </div>
        <div className="border" />
        <p className="terms">copyright 2024. All right reserved</p>
      </footer>
    </>
  );
};

export default Footer;
