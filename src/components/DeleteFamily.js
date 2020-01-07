import React, { useReducer, useEffect, useState } from "react";
import axios from "axios";
import { useAuth0 } from "../react-auth0-spa";


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
function DeleteFamily() {
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
    const handleDelete = id => {
        axios.delete(`http://localhost:2500/family/${id}`);
      };
    return (
        <div>
                    {data.list
          .filter(element => element.userName === user.name)
          .map(family => {
              return (
                <button key={family._id} onSubmit={handleDelete(family._id)} className="button"><span>Delete Family</span></button>
              )
          })}
           
        </div>
        
    )
}

export default DeleteFamily