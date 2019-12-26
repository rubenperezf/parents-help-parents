import React from "react";
import logo from "../images/parents-help-parents-logo.png";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

function Header() {
  
  return (
    <div className="header-container">
      <div className="header-links-container">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <ul>
          <Link to="/help"><li>Help</li></Link>
          <Link to="/aboutus"><li>About Us</li></Link>
        </ul>
      </div>
      <div className="header-login">
        <NavBar />
      </div>
    </div>
  );
}

export default Header;
