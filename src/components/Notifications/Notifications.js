import React, { useReducer, useEffect, useState } from "react";
import axios from "axios";
import { useAuth0 } from "../../react-auth0-spa";
import NotificationDitails from "./NotificationsDetails";

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
function Notifications() {
  const { loading, user } = useAuth0();
  const [data, dispatch] = useReducer(dataReducer, initialData);

  useEffect(() => {
    axios
      .get("http://localhost:2500/families")
      .then(response => {
        console.log(response);
        dispatch({ type: "SET_LIST", list: response.data });
      })
      .catch(() => {
        dispatch({ type: "SET_ERROR" });
      });
  }, []);
  return (
    <div className="notifications-container">
      {data.list
        .filter(element => element.userName === user.name)
        .map(family => {
          return (
            <div>
              <fieldset>
                <legend key={family._id}>Notifications</legend>
                <div className="row-family-details">
                  <ol>
                    {family.interested
                      .slice()
                      .reverse()
                      .map(element => (
                        <div className="notification-family-container">
                          <li>
                            There is a family interested in you, please contact
                            them in the following email{" "}
                            <span className="email-notifications">
                              {element}
                            </span>{" "}
                          </li>
                          <NotificationDitails props={{ family: element, notificationsReaded: family.notificationsReaded, id: family._id, interested: family.interested }} />
                          {console.log(element)}
                        </div>
                      ))}
                  </ol>
                </div>
                <br></br>
              </fieldset>
            </div>
          );
        })}
    </div>
  );
}

export default Notifications;
