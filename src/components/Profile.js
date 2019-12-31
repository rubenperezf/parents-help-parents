import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";
import CreateFamily from "./CreateFamily";

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <div className="profile-container">
        <div className="profile">
          <fieldset>
            <legend>Profile</legend>
            <img className="profile-picture" src={user.picture} alt="Profile" />
            <p>Username: {user.name}</p>
            <p>Email: {user.email}</p>
          </fieldset>
        </div>

        <CreateFamily />
      </div>
    </Fragment>
  );
};

export default Profile;
