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
          <fieldset>
            <legend>Evaluation</legend>
            <h1>Value our service</h1>
      <form>
        <textarea placeholder="Type your Opinion" rows="20" cols="100" ></textarea>
        <button className="button"><span>Send</span></button>
      </form>
          </fieldset>
        </div>

        <CreateFamily />
      </div>
    </Fragment>
  );
};

export default Profile;
