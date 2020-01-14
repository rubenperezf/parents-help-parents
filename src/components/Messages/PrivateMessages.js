import React, { useReducer, useEffect, useState } from "react";
import axios from "axios";


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
  const [shouldFetch, setShouldFetch] = useState(true)

  const handlePostPrivateMessages = users => {
    axios
      .post(`http://localhost:2500/private-messages`, {
        users: [user1, user2],
        messages: messages,
        writter: writter
      })
      .then(()=> {
        setShouldFetch(true)
        console.log("successfull post")
      })
      .catch(error => {
        console.error(error)
      })
    ;

  };

  useEffect(() => {
    setUser1(props.user1);
    setUser2(props.user2);
    setWritter(props.writter);
  }, []);
  const [data, dispatch] = useReducer(dataReducer, initialData);
  useEffect(() => {
    if(!shouldFetch) return 
    console.log("fetching")
    axios
      .get(`http://localhost:2500/private-messages`)
      .then(response => {
        console.log("private messages", response.data);
        dispatch({ type: "SET_LIST", list: response.data });
        setShouldFetch(false)
      })
      .catch(() => {
        dispatch({ type: "SET_ERROR" });
        setShouldFetch(false)
      });
  }, [shouldFetch]);

  return (
    <div className="private-messages-container">
      <fieldset>
        <legend>Private Messages</legend>
        <h3>Write message:</h3>
        <div className="send-message-container">
          <form
            onSubmit={e => {
              e.preventDefault();
              handlePostPrivateMessages(messages);
            }}
          >
            <input
              placeholder={`Write a private message to ${props.familyName}'s family.`}
              className="text-message"
              required
              type="text"
              onChange={e => setMessages(e.target.value)}
            ></input>
            <button className="button button-send-message"><span>Send</span></button>
          </form>
        </div>
        <div className="read-message-container">
        <h3>Conversation:</h3>
          {data.list.length > 0 && (
            <div>
              {data.list
                .filter(
                  item =>
                    (item.users[0] === user1 && item.users[1] === user2) ||
                    (item.users[0] === user2 && item.users[1] === user1)
                )
                .slice()
                .reverse()
                .map(item => {
                  return (
                    <div key={item._id} className="each-message">
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
