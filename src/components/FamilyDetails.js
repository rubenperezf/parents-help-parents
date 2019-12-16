import React, { useReducer, useEffect } from "react";
import { Link } from "react"
import axios from "axios";
import GoBack from "./GoBack"

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
function FamilyDetails(props) {
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
    <div className="family-details-container" >
        {data.list
          .filter(element => element._id === props.location.pathname.split("/")[2])
          .map(family => {

            return (
              <div key={family._id}>
                <fieldset>
                  <legend>Family: {family.familyName}</legend>
                  <div className="row-family-details">
                    <div className="text-family-details">
                      <p>About us:</p>
                    </div>
                    <div className="text-maped-details">
                      <p>{family.description}</p>
                      </div>
                  </div>
                  <div className="row-family-details">
                    {family.images.map(element =>
                      <img src={element} alt="family together" />
                    )}
                  </div>
                  <div className="row-family-details">
                  <div className="text-family-details">
                    <p>Parents names:</p>
                    </div>
                    <p>
                    {family.parentsName.map(function (element, i) {
                      if (i === 0) {
                        return element + " and ";
                      } else {
                        return element;
                      }
                    })}</p>
                    </div>
                    <div className="row-family-details">
                    <div className="text-family-details">
                      <p>Number of kids: </p>
                    </div>
                    <p>{family.numberOfKids}</p>
                    </div>
                    <div className="row-family-details">
                    <div className="text-family-details">
                      <p>Number of kids: </p>
                    </div>
                    <p>{family.parentsAge.map(element => element + " ")}</p>
                    </div>
                    <div className="row-family-details">
                    <div className="text-family-details">
                      <p>Kids Name: </p>
                    </div>
                    <p>{family.kidsName.map(element => element + " ")}</p>
                    </div>
                    <div className="row-family-details">
                    <div className="text-family-details">
                      <p>City Zone: </p>
                    </div>
                    <iframe className='details-map'
                      width="600"
                      height="500"
                      id="gmap_canvas"
                      src={`https://maps.google.com/maps?q=${family.location}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                      frameborder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                ></iframe>
                    </div>
                  <div>
                      <GoBack/>
                  </div>

                </fieldset>
                </div>
            );
            
          })}
          
    </div>  
  );
 
}

export default FamilyDetails;