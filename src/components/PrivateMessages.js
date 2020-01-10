import React, { useReducer, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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

function PrivateMessages({ props }) {
  console.log(props);
  const [user1, setUser1] = useState("");
  const [user2, setUser2] = useState("");
  const [messages, setMessages] = useState("");
  const [writter, setWritter] = useState("");

  const handlePostPrivateMessages = users => {
    axios.post(`http://localhost:2500/private-messages`, {
      users: [user1, user2],
      messages: messages,
      writter: writter
    });
  };

  useEffect(() => {
    setUser1(props.user1);
    setUser2(props.user2);
    setWritter(props.writter);
  }, []);
  const [data, dispatch] = useReducer(dataReducer, initialData);
  useEffect(() => {
    axios
      .get(`http://localhost:2500/private-messages`)
      .then(response => {
        console.log("private messages" + response.data);
        dispatch({ type: "SET_LIST", list: response.data });
      })
      .catch(() => {
        dispatch({ type: "SET_ERROR" });
      });
  }, []);

  return (
    <div className="private-messages-container">
      <fieldset>
        <legend>Private Messages</legend>
        <div className="send-message-container">
          <form
            onSubmit={e => {
              e.preventDefault();
              handlePostPrivateMessages(messages);
            }}
          >
            <input
              requiredtype="text"
              onChange={e => setMessages(e.target.value)}
            ></input>
            <input type="submit" value="Send" />
          </form>
        </div>
        <div className="read-message-container">
          {data.list.length > 0 && (
            <div>
              {data.list
                .filter(
                  item =>
                    (item.users[0] === user1 && item.users[1] === user2) ||
                    (item.users[0] === user2 && item.users[1] === user1)
                )
                .reverse()
                .map(item => {
                  return (
                    <div className="each-message">
                      <p className="writter">{item.writter}:</p>
                      <p>{item.messages}</p>
                    </div>
                  );
                })}
            </div>
          )}
          {data.error && <div>{data.error}</div>}
        </div>
      </fieldset>
    </div>
  );
}

export default PrivateMessages;
