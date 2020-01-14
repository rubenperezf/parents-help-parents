
import React, { useReducer, useEffect, useState } from "react";
import axios from "axios";
import { TextField } from '@material-ui/core'
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

function UpdateFamilyChild({props}) {
    console.log(props)
    const { loading, user } = useAuth0();
    const [data, dispatch] = useReducer(dataReducer, initialData);
    const [familyName, setFamilyName] = useState("");
    const [description, setDescription] = useState("");
    const [parentsName, setParentsName] = useState("");
    const [parentsAge, setParentsAge] = useState("");
    const [numberOfKids, setNumberOfKids] = useState("");
    const [kidsName, setKidsName] = useState("");
    const [kidsAge, setKidsAge] = useState("");
    const [location, setLocation] = useState("");
    const [images, setImages] = useState("");
    

    useEffect(() => {
        setFamilyName(props.familyName);
        setDescription(props.desription);
        setParentsName(props.parentsName);
        setParentsAge(props.parentsAge);
        setNumberOfKids(props.numberOfKids);
        setKidsName(props.kidsName);
        setKidsAge(props.kidsAge);
        setImages(props.Images);
        setLocation(props.location);
      }, []);

    function handleUpdate(
        familyName, 
        description,
        parentsName,
        parentsAge,
        numberOfKids,
        kidsName,
        kidsAge,
        images,
        location) {
      axios
        .put(`http://localhost:2500/family/${props.id}`, {
          familyName: familyName,
        description: description,
        parentsName: parentsName,
        parentsAge: parentsAge,
        numberOfKids:numberOfKids,
        kidsName: kidsName,
        kidsAge: kidsAge,
        images: images,
        location: location,
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });


    }
    
return (
    <div className="update-container">
      <fieldset>
    <legend>Update family</legend>
      <form
        onSubmit={e => {
          e.preventDefault();
          handleUpdate(      
            familyName, 
            description,
            parentsName,
            parentsAge,
            numberOfKids,
            kidsName,
            kidsAge,
            images,
            location
            );
        }}
      >   
        <div className="input-container">
          <br></br>
          <TextField
            required
            label="Family Name"
            id="family-name"
            defaultValue={props.familyName}
            style={{ width: "500px" }}
           onChange={e => setFamilyName(e.target.value)}
          ></TextField>
        </div>

        <div className="input-container">
             <br></br>
          <TextField
            required
            label="Description"
            id="family-description"
            rows="5"
            multiline
            defaultValue={props.description}
            style={{ width: "500px" }}
            onChange={e => setDescription(e.target.value)}
          ></TextField>
        </div>

        <div className="input-container">
          <br></br>
          <TextField
            required
            label="Parents Name"
            id="parents-name"
            defaultValue={props.parentsName}
            rows="1"
            style={{ width: "500px" }}
            onChange={e => setParentsName(e.target.value)}
          ></TextField>
        </div>

        <div className="input-container">
          <br></br>
          <TextField
            required
            label="Parents Age"
            id="parents-age"
            defaultValue={props.parentsAge}
            rows="1"
            style={{ width: "500px" }}
            onChange={e => setParentsAge(e.target.value)}
          ></TextField>
        </div>
        <div className="input-container">
          <br></br>
          <TextField
            required
            label="Number Of Kids"
            id="number-of-kids"
            defaultValue={props.numberOfKids}
            rows="1"
            style={{ width: "500px" }}
            onChange={e => setNumberOfKids(e.target.value)}
          ></TextField>
        </div>
        <div className="input-container">
            <br></br>
            <TextField
                required
                label="Kids Name"
                id="kids-name"
                defaultValue={props.kidsName}
                rows="1"
                style={{ width: "500px" }}
                onChange={e => setKidsName(e.target.value)}
            ></TextField>
        </div>
        <div className="input-container">
            <br></br>
            <TextField
                required
                label="Kids Age"
                id="kids-age"
                defaultValue={props.kidsAge}
                rows="1"
                style={{ width: "500px" }}
                onChange={e => setKidsAge(e.target.value)}
            ></TextField>
        </div>
        <div className="input-container">
            <br></br>
            <TextField
                required
                label="Images"
                id="images"
                defaultValue={props.images}
                rows="1"
                style={{ width: "500px" }}
                onChange={e => setImages(e.target.value)}
            ></TextField>
        </div>
        <div className="input-container">
            <br></br>
            <TextField
                required
                label="Location"
                id="location"
                defaultValue={props.location}
                rows="1"
                style={{ width: "500px" }}
                onChange={e => setLocation(e.target.value)}
            ></TextField>
            </div>
        <div className="input-container">
          <br></br>
          <button className="button"><span>Update Family</span></button>
        </div>
      </form>
      </fieldset>
         </div>   
    )
}

export default UpdateFamilyChild