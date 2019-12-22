import React from "react";
import {Link} from "react-router-dom"
class GoBack extends React.Component {
  render() {
    return (
    <div className="GoBack-container">
                <div class="form-row">
            <div class="container-2">
              <div class="btn btn-two">
                <span><Link className="details-button" to="/families/">Back</Link></span>
              </div>
            </div>
          </div>
        
    </div>
    )
  }
}


export default GoBack;