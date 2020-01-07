import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";
import FamilyDetails from "./FamilyDetails";
import NumberofNotifications from "./NumberOfNotifications"

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button className="sign-up" onClick={() => loginWithRedirect({})}>
          Log in
        </button>
      )}
      <div className="hola">
        {isAuthenticated && (
          <div className="dropdown">
            <button className="dropbtn">My Family</button>
            <div className="dropdown-content">
              <Link to="/">Home</Link>
              <Link to="/profile">Profile</Link>
              {/* <Link to="/myfamily">My Family </Link> */}
              {/* <Link to="/external-api">External API</Link> */}
              <Link to="/families">Families</Link>
              <Link to="/notifications">Notifications <NumberofNotifications /></Link>
            </div>
          </div>
        )}
        {isAuthenticated && (
          <button className="sign-up" onClick={() => logout()}>
            Log out
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
