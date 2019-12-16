import React, { useReducer, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
function Families() {
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

<div className="display-families-container">
          {data.list.map(family => {
          return(
            <div className="row"  key={family._id}>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team">
            <div>
          <div className="picture">
            <img className="img-fluid" src={family.images[0]} alt="family together"/>
          </div>
          <div className="team-content">
            <h3 className="name">Family: {family.familyName}</h3>
            <p className="title">Parents names:{" "}
                  {family.parentsName.map(function(element, i) {
                    if (i === 0) {
                      return element + " and ";
                    } else {
                      return element;
                    }
                  })}</p>
            <p className="title">Number of kids: {family.numberOfKids}</p>
            <p className="title">Kids Age: {family.kidsAge.map(element => element + " ")}</p>
            <div className="social">
            <Link to={`/family/${family._id}`}>See more</Link>
            </div>
          </div>
          </div>
          </div>
          </div>
          </div>
          );
          }

          )}
          </div>
                );

              }         


export default Families;
