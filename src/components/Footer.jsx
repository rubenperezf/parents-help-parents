import React from "react";
import logoFacebook from "../images/logoFacebook.png"
import logoTwitter from "../images/logoTwitter.png"
import logoYoutube from "../images/logoYoutube.png"
import logoInstagram from "../images/logoInstagram.png"
import {Link} from "react-router-dom"


function Footer() {
  return (
    <div className="footer-container">
      {/* <a href="https://www.instagram.com/parentshelpparents6/" target="_black"><img src={logoInstagram} alt="insagram logo"/></a>
      <a href="https://twitter.com/ParentsHelpPar1" target="_black"><img src={logoTwitter} alt="twitter logo"/></a> */}
        <div class="rounded-social-buttons">
          <a class="social-button facebook" href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"><img src={logoFacebook}/></i></a>
          <a class="social-button twitter" href={"https://www.twitter.com/"} target="_blank"><i class="fab fa-twitter"><img src={logoTwitter}/></i></a>
          <a class="social-button youtube" href="https://www.youtube.com/" target="_blank"><i class="fab fa-youtube"><img src={logoYoutube}/></i></a>
          <a class="social-button instagram" href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"><img src={logoInstagram}/></i></a>
        </div>
        <p>&copy; Web Page made by Ruben Perez</p>
    </div>
  );
}

export default Footer;
