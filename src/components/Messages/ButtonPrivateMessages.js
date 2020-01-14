import React, { useReducer, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



function ButtonPrivateMessages({ props }) {

  console.log(props);
  const [user1, setUser1] = useState("");
  const [user2, setUser2] = useState("");

  const handlePostPrivateMessages = users => {
    axios.post(`http://localhost:2500/private-messages`, {
      users: [user1, user2]
    });
  };

  useEffect(() => {
    setUser1(props.user1);
    setUser2(props.user2);
  }, []);

  console.log(props);
  return (
    <div>
     
        <button
          onClick={handlePostPrivateMessages}
          className="button button-privateMessages"
        > 
          <span>Private Message</span>
        </button>
     
    </div>
  );
}

export default ButtonPrivateMessages;
