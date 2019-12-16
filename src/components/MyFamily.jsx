import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { useState } from "react";
import axios from "axios"

const MyFamily = () => {
  const { loading, user } = useAuth0();
  const [familyName, setFamilyName]=useState("")
  const [parentsName, setParentsName]=useState("")
  const [parentsAge, setParentsAge]=useState("")
  const [numberOfKids, setNumberOfKids]=useState("")
  const [kidsName, setKidsName]=useState("")
  const [kidsAge, setKidsAge]=useState("")
  const [location, setLocation]=useState("")
  const [images, setImages]=useState("")
  const [description, setDescription]=useState("")

  if (loading || !user) {
    return <div>Loading...</div>;
  }
  const handleImage = e => {
    let input = e.target;
    for (let i = 0; i < input.files.length; i++) {
      let reader = new FileReader();
      reader.onload = b =>
        setImages(images.concat(b.target.result));
      reader.readAsDataURL(input.files[i]);
    }
  };
  const handlePost = (
    familyName, 
    parentsName, 
    parentsAge,
    numberOfKids, 
    kidsName, 
    kidsAge, 
    location, 
    images,
    description) => {
      axios.post("http://localhost:2500/families", {
        familyName: familyName,
        parentsName: parentsName,
        parentsAge: parentsAge,
        numberOfKids: numberOfKids,
        kidsName: kidsName,
        kidsAge: kidsAge,
        location: location, 
        images: images,
        description: description
      })
    }

  return (
    <div className="my-family-container">
    <div className="shade">
		<div className="blackboard">
				<div className="form">
          <form onSubmit={e =>{
            e.preventDefault()
            handlePost(
              familyName, 
              parentsName, 
              parentsAge,
              numberOfKids, 
              kidsName, 
              kidsAge, 
              location, 
              images,
              description
            )
          }}>
						<p>
								<label>Family Name: </label>
								<input type="text" onChange={e => setFamilyName(e.target.value)}/>
						</p>
						<p>
								<label>Parents Name: </label>
								<input type="text" onChange={e => setParentsName(e.target.value)}/>
						</p>
            <p>
								<label>Parents Age: </label>
								<input type="text" onChange={e => setParentsAge(e.target.value)}/>
						</p>
						<p>
								<label>Number of Kids: </label>
								<input type="text" onChange={e => setNumberOfKids(e.target.value)}/>
						</p>
						<p>
								<label>Kids age: </label>
								<input type="text" onChange={e => setKidsAge(e.target.value)}/>
						</p>
            <p>
								<label>Kids Name: </label>
								<input type="text" onChange={e => setKidsName(e.target.value)}/>
						</p>
            <p>
								<label>Location(Zip Code, City, State): </label>
								<input type="text" onChange={e => setLocation(e.target.value)}/>
						</p>
            <p>
            <label>Add images: </label>
            <input
                id="file-input"
                type="file"
                onChange={e => handleImage(e)}
                multiple
              ></input>
            </p>
						<p>
								<label>Message: </label>
								<textarea onChange={e => setDescription(e.target.value)}></textarea>
						</p>
						<p className="wipeout">
								<input type="submit" value="Send" />
						</p>
            </form>
				</div>
		</div>
</div>
    </div>
  );
};

export default MyFamily;