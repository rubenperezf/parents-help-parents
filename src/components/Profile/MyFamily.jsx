import React, { useReducer, useEffect, useState } from "react";
import axios from "axios";
import { useAuth0 } from "../../react-auth0-spa";
import DeleteFamily from "./DeleteFamily";
import { Link } from "react-router-dom";
import UpdateFamily from "./UpdateFamily";

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

const MyFamily = () => {
  const [data, dispatch] = useReducer(dataReducer, initialData);
  const { loading, user } = useAuth0();

  useEffect(() => {
    axios
      .get("http://localhost:2500/families")
      .then(response => {
        console.log(response);
        dispatch({ type: "SET_LIST", list: response.data });
      })
      .catch(() => {
        dispatch({ type: "SET_ERROR" });
      });
  }, []);

  return (
    
    <div className="myfamily-edit-container">
      <div className="myfamily-container">
        {data.list
          .filter(element => element.userName === user.name)
          .map(family => {
            return (
              <div key={family._id}>
                <fieldset>
                  <div className="update-delete-container">
                  <Link to="update-family">
                    <button className="button button-update">
                      <span>UpdateFamily</span>
                    </button>
                  </Link>
                  <DeleteFamily />
                  </div>
                  <legend>My Family</legend>
                  <div className="row-family-details">
                    <div className="text-family-details">
                      <p>Family Name:</p>
                    </div>
                    <div className="text-maped-details">
                      <p>{family.familyName}</p>
                    </div>
                  </div>
                  <div className="row-family-details">
                    <div className="text-family-details">
                      <p>About us:</p>
                    </div>
                    <div className="text-maped-details">
                      <p>{family.description}</p>
                    </div>
                  </div>
                  <div className="row-family-details">
                    {family.images.map(element => (
                      <img src={element} alt="family together" />
                    ))}
                  </div>
                  <div className="row-family-details">
                    <div className="text-family-details">
                      <p>Parents names:</p>
                    </div>
                    <p>{family.parentsName}</p>
                  </div>
                  <div className="row-family-details">
                    <div className="text-family-details">
                      <p>Parents age: </p>
                    </div>
                    <p>{family.parentsAge}</p>
                  </div>
                  <div className="row-family-details">
                    <div className="text-family-details">
                      <p>Number of kids: </p>
                    </div>
                    <p>{family.numberOfKids}</p>
                  </div>
                  <div className="row-family-details">
                    <div className="text-family-details">
                      <p>Kids Name: </p>
                    </div>
                    <p>{family.kidsName}</p>
                  </div>
                  <div className="row-family-details">
                    <div className="text-family-details">
                      <p>Kids Age: </p>
                    </div>
                    <p>{family.kidsAge}</p>
                  </div>
                  <div className="row-family-details">
                    <div className="text-family-details">
                      <p>City Zone: </p>
                    </div>
                    <p>{family.location}</p>
                  </div>
                  <div className="row-family-details">
                    <iframe
                      className="details-map"
                      title="city-zone"
                      width="400"
                      height="300"
                      id="gmap_canvas"
                      src={`https://maps.google.com/maps?q=${family.location}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                    ></iframe>
                  </div>
                </fieldset>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MyFamily;
