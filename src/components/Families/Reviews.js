import React, { useReducer, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { startSession } from "mongoose";
import OneStar from "../../images/reviews-1star.png";
import TwoStars from "../../images/reviews-2stars.png";
import ThreeStars from "../../images/reviews-3stars.png";
import FourStars from "../../images/reviews-4stars.png";
import FiveStars from "../../images/reviews-5stars.png";
import WriteReviews from "../Profile/WriteReviews";

function reviewStarts(rating) {
  if (rating === 1) {
    return <img src={OneStar} alt="rating" />;
  } else if (rating === 2) {
    return <img src={TwoStars} alt="rating" />;
  } else if (rating === 3) {
    return <img src={ThreeStars} alt="rating" />;
  } else if (rating === 4) {
    return <img src={FourStars} alt="rating" />;
  } else {
    return <img src={FiveStars} alt="rating" />;
  }
}

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

function Reviews({ props }) {
  console.log(props);
  const [data, dispatch] = useReducer(dataReducer, initialData);
  useEffect(() => {
    axios
      .get("http://localhost:2500/familyReviews")
      .then(response => {
        console.log(response);
        dispatch({ type: "SET_LIST", list: response.data });
      })
      .catch(() => {
        dispatch({ type: "SET_ERROR" });
      });
  }, []);
  return (
    <div className="reviews-container">
     
      <div className="get-reviews-container">
        <fieldset>
          <legend key={data.list._id}>Reviews</legend>
          {data.list
            .filter(review => review.familyId === props.id)
            .map(review => (
              <div className="each-review-container">
                <p>{reviewStarts(review.rating)}</p>
                <p>Review: {review.review}</p>
                <p>
                  by:{" "}
                  <Link
                    className="link-each-review-container"
                    to={`/family/${review.familyId}`}
                  >
                    {review.familyName}
                  </Link>
                </p>
              </div>
            ))}
        </fieldset>
      </div>
      <WriteReviews props={{ id: props.id }} />
    </div>
  );
}

export default Reviews;
