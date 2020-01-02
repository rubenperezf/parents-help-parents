import React, { useEffect, useState } from "react";
import axios from "axios";


function UpdateEvent({ props }) {
  console.log(props)
  const [description, setDescription] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [parentsName, setParentsName] = useState("");
  const [parentsAge, setParentsAge] = useState("");
  const [numOfKids, setNumOfKids] = useState("");
  const [kidsName, setKidsName] = useState("");
  const [kidsAge, setKidsAge] = useState("");
  const [location, setLocation] = useState("");
  const [userName, setUserName] = useState("")

  useEffect(() => {

    setDescription(props.description);
    setFamilyName(props.familyName);
    setParentsName(props.parentsName);
    setParentsAge(props.parentsAge);
    setNumOfKids(props.numOfKids);
    setKidsName(props.kidsName);
    setKidsAge(props.kidsAge);
    setLocation(props.location);
    setUserName(props.userName);


  }, []);
  function handleUpdate(description, familyName, parentsName, parentsAge, numOfKids, kidsName, kidsAge, location, userName) {
    axios
      .put(`http://localhost:2500/family/${props._id}`, {
        description: description,
        familyName: familyName,
        parentsName: parentsName,
        parentsAge: parentsAge,
        numOfKids: numOfKids,
        kidsName: kidsName,
        kidsAge: kidsAge,
        location: location,
        userName: userName
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  return (
    <div className="my-family-container">
      <div className="shade">
        <div className="blackboard">
          <div className="form">
            <form
              onSubmit={e => {
                e.preventDefault();
                handleUpdate(
                    description,
                    familyName,
                    parentsName,
                    parentsAge,
                    numOfKids,
                    kidsName,
                    kidsAge,
                    location,
                );
              }}
            >
           
              <p>
                <label>Family Name: </label>
                <input
                  type="text"
                  onChange={e => setFamilyName(e.target.value)}
                  placeholder={familyName}
                />
              </p>
              <p>
                <label>Parents Name: </label>
                <input
                  type="text"
                  onChange={e => setParentsName(e.target.value)}
                  value={parentsName}
                />
              </p>
              <p>
                <label>Parents Age: </label>
                <input
                  type="text"
                  onChange={e => setParentsAge(e.target.value)}
                  value={parentsAge}
                />
              </p>
              <p>
                <label>Number of Kids: </label>
                <input
                  type="text"
                  onChange={e => setNumOfKids(e.target.value)}
                  defaultValue={setNumOfKids}
                />
              </p>
              <p>
                <label>Kids age: </label>
                <input type="text" onChange={e => setKidsAge(e.target.value)}
                value={kidsAge}
                />
                
              </p>
              <p>
                <label>Kids Name: </label>
                <input
                  type="text"
                  onChange={e => setKidsName(e.target.value)}
                  value={kidsName}
                />
              </p>
              <p>
                <label>Location: </label>
                <select
                  id="location"
                  name="location"
                  onChange={e => setLocation(e.target.value)}
                  value={location}
                >
                  <option value=""></option>
                  <option value="Mt. Pleasant Charleston SC">
                    Mt. Pleasant
                  </option>
                  <option value="Downtown Charleston SC">Downtown</option>
                  <option value="James Island Charleston SC">
                    James Island
                  </option>
                  <option value="North Charleston Charleston SC">
                    North Charleston
                  </option>
                  <option value="Island of Palms Charleston SC">
                    Island of Palms
                  </option>
                  <option value="Folly Beach Charleston SC">Folly Beach</option>
                  <option value="Edisto Island SC">Edisto Island</option>
                  <option value="Goose Creek SC">Goose Creek</option>
                  <option value="Kiawah Island SC">Kiawah Island</option>
                  <option value="Sullivans Island SC">Sullivans Island</option>
                </select>
              </p>
              <p>
                <label>Write a description: </label>
                <textarea
                  onChange={e => setDescription(e.target.value)}
                  value={description}
                ></textarea>
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
}

export default UpdateEvent;