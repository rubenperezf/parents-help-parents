import React, { Fragment, useState, useEffect } from "react";
import { useAuth0 } from "../react-auth0-spa";
import CreateFamily from "./CreateFamily";
import axios from "axios"

const Profile = () => {
  const { loading, user } = useAuth0();
  const [userName, setUserName] = useState("");
  const [opinion, setOpinion] = useState("");
  const [rating, setRating] = useState("");


  const handlePost = (
    opinion,
    rating

  ) => {
    axios.post("http://localhost:2500/opinion", {
      userName: userName,
      opinion: opinion,
      rating: rating

    });
  };
  useEffect(() => {
    setUserName(user.name);
  }, []);

 

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
      <form  onSubmit={e => {
                e.preventDefault();
                handlePost(
                  opinion,
                  rating
                );
              }}>
     
        <textarea onChange={e => setOpinion(e.target.value)} placeholder="Type your Opinion" rows="20" cols="110" ></textarea>
        <label for="rating">Rating</label>
            <select
              id="rating"
              name="rating"
              onChange={e => setRating(e.target.value)}
            >
              <option value=""></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>

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
