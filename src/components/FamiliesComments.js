import React, { useReducer, useEffect, useState } from "react";
import axios from "axios";
import Slider from "infinite-react-carousel";

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

const FamiliesComments = () => {
  const [data, dispatch] = useReducer(dataReducer, initialData);
  useEffect(() => {
    axios
      .get(`http://localhost:2500/opinion`)
      .then(response => {
        console.log(response.data);
        dispatch({ type: "SET_LIST", list: response.data });
      })
      .catch(() => {
        dispatch({ type: "SET_ERROR" });
      });
  }, []);
  return (
    <div className="families-comments-container">
      <h1>Our clients talk about us.</h1>
      {data.list.length > 0 && (
        <Slider>
          {data.list
            .filter(item => item.rating > 7)
            .map(item => {
              return (
                <div className="families-comments-container">
                  <blockquote key={item._id}>
                    <p className="quotation">{item.opinion}</p>
                    <footer>{item.userName.split("@")[0]}</footer>
                  </blockquote>
                </div>
              );
            })}
        </Slider>
      )}
      {data.error && <div>{data.error}</div>}
    </div>
  );
};

export default FamiliesComments;
