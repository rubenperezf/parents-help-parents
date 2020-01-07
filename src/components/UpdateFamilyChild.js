
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
    const [parentsName, setParentsName] = useState("");
    const [parentsAge, setParentsAge] = useState("");
    const [numberOfKids, setNumberOfKids] = useState("");
    const [kidsName, setKidsName] = useState("");
    const [kidsAge, setKidsAge] = useState("");
    const [location, setLocation] = useState("");
    const [images, setImages] = useState("");
    const [description, setDescription] = useState("");

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
    <div>
    <h1>Update family</h1>
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
      {data.list.filter(element => element.userName === user.name)
      .map(family => {
        return (
            <div>
        <div className="input-container">
          <br></br>
          <TextField
            required
            label="familyName"
            id="family-name"
            defaultValue={family.familyName}
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
            defaultValue={family.description}
            style={{ width: "500px" }}
            onChange={e => setDescription(e.target.value)}
          ></TextField>
        </div>

        <div className="input-container">
          <br></br>
          <TextField
            required
            label="parentsName"
            id="parents-name"
            defaultValue={family.parentsName}
            rows="3"
            style={{ width: "500px" }}
            multiline
            variant="outlined"
            onChange={e => setParentsName(e.target.value)}
          ></TextField>
        </div>

        <div className="input-container">
          <br></br>
          <TextField
            required
            label="parentsAge"
            id="parents-age"
            defaultValue={family.parentsAge}
            rows="15"
            style={{ width: "500px" }}
            multiline
            variant="outlined"
            onChange={e => setParentsAge(e.target.value)}
          ></TextField>
        </div>
        <div className="input-container">
          <br></br>
          <TextField
            required
            label="numberOfKids"
            id="number-of-kids"
            defaultValue={family.numberOfKids}
            rows="1"
            style={{ width: "500px" }}
            multiline
            variant="outlined"
            onChange={e => setNumberOfKids(e.target.value)}
          ></TextField>
        </div>
        <div className="input-container">
            <br></br>
            <TextField
                required
                label="kidsName"
                id="kids-name"
                defaultValue={family.kidsName}
                rows="1"
                style={{ width: "500px" }}
                multiline
                variant="outlined"
                onChange={e => setKidsName(e.target.value)}
            ></TextField>
        </div>
        <div className="input-container">
            <br></br>
            <TextField
                required
                label="kidsAge"
                id="kids-age"
                defaultValue={family.kidsAge}
                rows="1"
                style={{ width: "500px" }}
                multiline
                variant="outlined"
                onChange={e => setKidsAge(e.target.value)}
            ></TextField>
        </div>
        <div className="input-container">
            <br></br>
            <TextField
                required
                label="images"
                id="images"
                defaultValue={family.images}
                rows="1"
                style={{ width: "500px" }}
                multiline
                variant="outlined"
                onChange={e => setImages(e.target.value)}
            ></TextField>
        </div>
        <div className="input-container">
            <br></br>
            <TextField
                required
                label="location"
                id="location"
                defaultValue={family.location}
                rows="1"
                style={{ width: "500px" }}
                multiline
                variant="outlined"
                onChange={e => setLocation(e.target.value)}
            ></TextField>
            </div>
        <div className="input-container">
          <br></br>
          <button className="button">Update Family</button>
        </div>
        </div>
        )
      })}
      </form>
         </div>   
    )
}

export default UpdateFamilyChild