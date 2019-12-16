import React from "react";
import {Link} from "react-router-dom"
class GoBack extends React.Component {
  render() {
    return (
    <div className="GoBack-container">
        <Link className="details-button" to="/families/">Back</Link>
    </div>
    )
  }
}


export default GoBack;