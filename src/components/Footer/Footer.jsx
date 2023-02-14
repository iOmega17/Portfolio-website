import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Github from "../../img/github1.png";
import LinkedIn from "../../img/linkedin1.png";
import Instagram from "../../img/instagram1.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
      <div className="i-icons">
          <a href="https://github.com/iOmega17"><img src={Github} alt="Github" /></a>
          <a href="https://www.linkedin.com/in/anujps17/"><img src={LinkedIn} alt="Linkedin" /></a>
          <a href="https://www.instagram.com/anuj.sann/"><img src={Instagram} alt="Instagram" /></a>
        </div>
        <a href="https://mail.google.com/mail/u/0/?fs=1&to=mr.anujps@gmail.com&body=Hey%20Anuj,&bcc=anujpratap.singh280211@gmail.com&tf=cm"
          className="f-foot">
        <p>mr.anujps@gmail.com</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
