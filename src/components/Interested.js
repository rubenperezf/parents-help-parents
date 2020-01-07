import React from "react"
import { useAuth0 } from "../react-auth0-spa";
import axios from "axios";

function Interested({props}) {
    console.log(props)
    const { loading, user } = useAuth0();
    const handlePutInterested = () => {
      if(!props.interested.includes(user.email)) {
        axios.put(`http://localhost:2500/family/${props.id}`, {
        interested: props.interested.concat(user.email)
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
            <button className="button button-interested" onClick={handlePutInterested}><span>Like it</span></button>
        </div>
    )
}

export default Interested