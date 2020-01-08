import React, {useReducer, useEffect, useState} from "react"
import axios from "axios";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom"

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
function NotificationsDetails({props}) {
    console.log("props "+props)
        const { loading, user } = useAuth0();
        const [data, dispatch] = useReducer(dataReducer, initialData);
    
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
        <div>
        {data.list
                .filter(
            element => element.userName === props.family)
            .map(family => {
                return (
        <ul>
          <li kay={family._id}>Family name: {family.familyName}</li>
          <li>Number of kids: {family.numberOfKids}</li>
          <li><Link to={`./family/${family._id}`}> Visit their family profile.</Link></li>
         </ul>
                )
                })}
            </div> 
    )
    
}

export default NotificationsDetails