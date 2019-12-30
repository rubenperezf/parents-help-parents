import React from "react";
import logoFacebook from "../images/logoFacebook.png"
import logoTwitter from "../images/logoTwitter.png"
import logoYoutube from "../images/logoYoutube.png"
import logoInstagram from "../images/logoInstagram.png"
import {Link} from "react-router-dom"


function Footer() {
  return (
    <div className="footer-container">
      <p>Follow us:</p>
      <div class="rounded-social-buttons">
        <a class="social-button facebook" href="https://www.facebook.com/Parents-Help-Parents-106535904200289/?modal=admin_todo_tour" target="_blank"><i class="fab fa-facebook-f"><img src={logoFacebook}/></i></a>
        <a class="social-button twitter" href="https://twitter.com/ParentsHelpPar1" target="_blank"><i class="fab fa-twitter"><img src={logoTwitter}/></i></a>
        <a class="social-button youtube" href="https://www.youtube.com/channel/UCyZffBk77yPwlBT2FxLA2Kw?view_as=subscriber" target="_blank"><i class="fab fa-youtube"><img src={logoYoutube}/></i></a>
        <a class="social-button instagram" href="https://www.instagram.com/parentshelpparents6/" target="_blank"><i class="fab fa-instagram"><img src={logoInstagram}/></i></a>
      </div>
      <p>&copy; Web Page made by <a href="https://www.linkedin.com/in/rubenperezf/" target="_blank">Ruben Perez</a></p>
    </div>
  );
}

export default Footer;
