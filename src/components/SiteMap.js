import React from "react";
import {Link} from "react-router-dom"

function SiteMap() {
  return (
    <div className="sitemap-privacy-container">
      <h1>Site Map</h1>
      <ul>
        <li>Home ->{" "}<Link to="/">Link</Link></li>
        <li>Contact Us ->{" "}<Link to="/contactus">Link</Link></li>
        <li>About Us ->{" "}<Link to="/aboutus">Link</Link></li>
        <li>FAQ ->{" "}<Link to="/faq">Link</Link></li>
        <li>Privacy Policy ->{" "}<Link to="/privacy-policy">Link</Link></li>
        <li>Site Map ->{" "}<Link to="/site-map">Link</Link></li>
        <li>Private (Need to Log In)</li>
        <ul>
          <li>Profile </li>
          <li>My family</li>
          <li>Families</li>
        </ul>
        <li>Social Media</li>
        <ul>
          <li>Facebook ->{" "}<a target="_black" href="https://www.facebook.com/Parents-Help-Parents-106535904200289/?modal=admin_todo_tour">Link</a></li>
          <li>Twitter ->{" "}<a target="_black" href="https://twitter.com/ParentsHelpPar1">Link</a></li>
          <li>Youtube ->{" "}<a target="_black" href="https://www.youtube.com/channel/UCyZffBk77yPwlBT2FxLA2Kw?view_as=subscriber">Link</a></li>
          <li>instagram ->{" "}<a target="_black" href="https://www.instagram.com/parentshelpparents6/">Link</a></li>
        </ul>
        <li>Newsletter </li>
      </ul>
    </div>
  );
}

export default SiteMap;
