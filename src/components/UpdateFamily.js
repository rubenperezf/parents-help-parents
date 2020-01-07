import React, { useReducer, useEffect, useState } from "react";
import axios from "axios";
import { useAuth0 } from "../react-auth0-spa";
import UpdateFamilyChild from "./UpdateFamilyChild"


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


function UpdateFamily() {
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
    <div className="form-container-update">
         {data.list.filter(element => element.userName === user.name)
      .map(family => {
        return (
            <div key={family._id}>
     <UpdateFamilyChild props= {{id: family._id}}/>
            </div>
     
  )
        })}
  </div>
 )
}

export default UpdateFamily;