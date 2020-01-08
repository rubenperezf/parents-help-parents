import React from "react"
import { useAuth0 } from "../react-auth0-spa";
import axios from "axios";
import Dialog from "./Dialog"

function Interested({props}) {
    console.log(props)
    const { loading, user } = useAuth0();
    
    const handlePutInterested = () => {
      if(!props.interested.includes(user.email)) {
        axios.put(`http://localhost:2500/family/${props.id}`, {
        interested: props.interested.concat(user.email),
  
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
      }
      }

      if (loading || !user) {
        return <div>Loading...</div>;
      }
    return (
        <div className="interested-container">
          <Dialog props={{ handlePutInterested, page: "interested", id: props.id, familyName: props.familyName, numberOfKids: props.numberOfKids, parentsName: props.parentsName, parentsAge: props.parentsAge, kidsName: props.kidsName, kidsAge: props.kidsAge, location: props.location, description: props.description, images: props.images, interested: props.interested}}/>
           
        </div>
    )
}

export default Interested