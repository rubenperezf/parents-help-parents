import React, { Fragment, useState, useEffect, useReducer } from "react";
import { useAuth0 } from "../react-auth0-spa";
import {Link} from "react-router-dom"
import axios from "axios";
import MyFamily from "./MyFamily"
import Dialog from "./Dialog"

export const dataReducer = (state, action) => {
  if (action.type === "SET_ERROR") {
    return { ...state, list: [], error: true };
  }
  if (action.type === "SET_LIST") {
    return { ...state, list: action.list, error: null };
  }
  throw new Error();
};
const initialData = {
  list: [],
  error: null
};

const Profile = () => {
  const [data, dispatch] = useReducer(dataReducer, initialData);
  const { loading, user } = useAuth0();
  const [userName, setUserName] = useState("");
  const [opinion, setOpinion] = useState("");
  const [rating, setRating] = useState("");

  const handlePostOpinion = (opinion, rating) => {
    axios.post("http://localhost:2500/opinion", {
      userName: userName,
      opinion: opinion,
      rating: rating
    });
  };
  useEffect(() => {
    setUserName(user.name);
  }, []);
  useEffect(() => {
    axios
      .get(`http://localhost:2500/opinion`)
      .then(response => {
        console.log(response.data);
        dispatch({ type: "SET_LIST", list: response.data });
      })
      .catch(() => {
        dispatch({ type: "SET_ERROR" });
      });
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
            <Link to="create-family"><button className="button"><span>Create Family</span></button></Link>
          </fieldset>

          <fieldset>
            <legend>Evaluation</legend>
            <h1>Value our service</h1>
            <form
              onSubmit={e => {
                e.preventDefault();
                handlePostOpinion(opinion, rating);
              }}
            >
              <textarea
                onChange={e => setOpinion(e.target.value)}
                placeholder="Type your Opinion"
                rows="20"
                cols="110"
              ></textarea>
              <label htmlFor="rating">Rating</label>
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
              <Dialog props ={{page: 'opinion', handlePostOpinion, userName: userName, opinion: opinion, rating: rating}}/>
             
            </form>
          </fieldset>
        </div>
        <MyFamily />
      </div>
    </Fragment>
  );
};
export default Profile;
