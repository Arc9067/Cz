import React from "react";
import "./Footer.scss";
import FooterLogo from "../../assets/heade-rlogo.png";
import Gmail from "../../assets/gmail.png";
import Telegram from "../../assets/telegram.png";
import twitter from "../../assets/twitter.png";

const Footer = () => {
  return (
    <footer className="container-fluid footer">
      <div className="container d-flex justify-content-center align-items-center justify-content-md-center gap-3 flex-column flex-md-row">
        {/* <h2 className="head">Cz</h2> */}

        <ul className="d-flex gap-2 align-items-center list-unstyled">
          <li>
            <a href="https://t.me/CzCommunityEth">
              <img src={Telegram} alt="" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/CZCommunityEth">
              <img src={twitter} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
