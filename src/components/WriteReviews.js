import React, { useEffect } from "react";
import { useAuth0 } from "../react-auth0-spa";
import { useState } from "react";
import axios from "axios";

const MyFamily = ({ props }) => {
  const { loading, user } = useAuth0();
  const [familyName, setFamilyName] = useState("");
  const [familyId, setFamilyId] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");

  const handlePost = (familyName, familyId, rating, review) => {
    axios.post(`http://localhost:2500/familyReviews`, {
      familyName: familyName,
      familyId: familyId,
      rating: rating,
      review: review
    });
  };
  useEffect(() => {
    setFamilyId(props.id);
  }, []);
  if (loading || !user) {
    return <div>Loading...</div>;
  }
  console.log(rating)

  return (
    <div className="write-reviews-container">
      <fieldset>
        <legend>Write a review</legend>
        <form
          onSubmit={e => {
            e.preventDefault();
            handlePost(familyName, familyId, rating, review);
          }}
        >
          <div class="form-row">
            <label>Family Name: </label>
            <input type="text" onChange={e => setFamilyName(e.target.value)} />
          </div>
          {/* <div class="form-row">
            <label>Rating: </label>
            <input type="text" onChange={e => setRating(e.target.value)} />
          </div> */}
          <div class="form-row">
            <label for="rating">Rating</label>
            <select id="rating" name="rating" onChange={e => setRating(e.target.value)}>
              <option value="" >
               
              </option>
              <option value="1" >
                1 Star
              </option>
              <option value="2" >
                2 Stars
              </option>
              <option value="3" >
                3 Stars
              </option>
              <option value="4" >
                4 Stars
              </option>
              <option value="5" >
                5 Stars
              </option>
            </select>
          </div>
          <div class='form-row'>
				<label>Review: </label>
        <br></br>
        <br></br>
				<textarea type="text" rows="10" cols="45" onChange={e => setReview(e.target.value)}></textarea>
			</div>
          <div class="form-row">
            <button>Send</button>
          </div>
        </form>
      </fieldset>
    </div>
  );
};

export default MyFamily;
