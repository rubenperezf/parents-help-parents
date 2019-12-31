import React from "react";
import { Link } from "react-router-dom";
class GoBack extends React.Component {
  render() {
    return (
      <div className="GoBack-container">
        <button class="button">
          <span>
            <Link to="../families">Go back</Link>
          </span>
        </button>
      </div>
    );
  }
}

export default GoBack;
