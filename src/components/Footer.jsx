import React from "react";
import logoInstagram from "../images/logo-instagram.jpg"
import logoTwitter from "../images/logo-twitter.png"
import {Link} from "react-router-dom"


function Footer() {
  return (
    <div className="footer-container">
      <a href="https://www.instagram.com/parentshelpparents6/" target="_black"><img src={logoInstagram} alt="insagram logo"/></a>
      <a href="https://twitter.com/ParentsHelpPar1" target="_black"><img src={logoTwitter} alt="twitter logo"/></a>
        <p>&copy; Web Page made by Ruben Perez</p>
    </div>
  );
}

export default Footer;
