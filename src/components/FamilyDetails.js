import React, { useReducer, useEffect, useState } from "react";
import axios from "axios";
import GoBack from "./GoBack";
import Reviews from "./Reviews";
import Interested from "./Interested"


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
  const [interested, setInterested] = useState("")
  useEffect(() => {
    axios
      .get(`http://localhost:2500/family/${props.match.params.id}`)
      .then(response => {
        console.log(response);
        setInterested(response.data[0].interested);
        dispatch({ type: "SET_LIST", list: response.data });
      })
      .catch(() => {
        dispatch({ type: "SET_ERROR" });
      });
  }, []);

  return (
    <div className="family-reviews-container">
      <div className="family-details-container">
      
        {data.list
          // .filter(
          //   element => element._id === props.location.pathname.split("/")[2]
          // )
          .map(family => {
            return (
              <div>
                <fieldset>
                <div className="interested-goBack-container">
                    <GoBack />
                    <Interested props={{id: props.location.pathname.split("/")[2], familyName: family.familyName, numberOfKids: family.numberOfKids, parentsName: family.parentsName, parentsAge: family.parentsAge, kidsName: family.kidsName, kidsAge: family.kidsAge, location: family.location, description: family.description, images: family.images, interested: family.interested}}/>

                    </div>
                
                
                  <legend key={family._id}>Family: {family.familyName}</legend>
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
                      <p>Number of kids: </p>
                    </div>
                    <p>{family.numberOfKids}</p>
                  </div>
                  <div className="row-family-details">
                    <div className="text-family-details">
                      <p>Parents age: </p>
                    </div>
                    <p>{family.parentsAge}</p>
                  </div>
                  <div className="row-family-details">
                    <div className="text-family-details">
                      <p>Kids Name: </p>
                    </div>
                    <p>{family.kidsName}</p>
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
                  <div>

                  </div>
                </fieldset>
              </div>
            );
          })}
      </div>
      <Reviews props={{ id: props.location.pathname.split("/")[2]}} />
    </div>
  );
}

export default FamilyDetails;
