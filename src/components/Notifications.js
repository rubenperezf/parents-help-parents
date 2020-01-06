import React, {useReducer, useEffect, useState} from "react"
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
function Notifications() {
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
        <div className="notifications-container">
          
            {data.list
              .filter(
                element => element.userName === user.name
              )
              .map(family => {
                return (
                  <div>
                    <fieldset>
                    
                      <legend key={family._id}>Family: {family.familyName}</legend>
                      <div className="row-family-details">
                        <div className="text-family-details">
                          <p>Notifications:</p>
                        </div>
                    
                      </div>
                      <div className="row-family-details">
                        {family.interested.map(element =>(
                           <p>There is a family interested in you, please contact them in the following email {element} </p>))}
                      </div>
                      <br></br>
                    </fieldset>
                  </div>
                );
              })}
          </div>

      );
    }

export default Notifications