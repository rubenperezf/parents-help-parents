import React, { useEffect } from "react";
import { useAuth0 } from "../../react-auth0-spa";
import { useState } from "react";
import axios from "axios";
import Dialog from "../Dialog";

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
  useEffect(() => {
    setFamilyName(user.name.split("@")[0]);
  }, []);
  if (loading || !user) {
    return <div>Loading...</div>;
  }
  console.log(rating);

  return (
    <div className="write-reviews-container">
      <fieldset>
        <legend>Write a review</legend>
        <form>
          <div class="form-row">
            <textarea
              required
              placeholder="Write your review here."
              type="text"
              rows="10"
              cols="80"
              onChange={e => setReview(e.target.value)}
            ></textarea>
          </div>
          <div class="form-row">
            <label for="rating">Rating</label>
            <select
              required
              id="rating"
              name="rating"
              onChange={e => setRating(e.target.value)}
            >
              <option value=""></option>
              <option value="1">1 Star</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
            </select>
          </div>

          <Dialog
            props={{
              handlePost,
              familyName,
              familyId,
              rating,
              review,
              page: "writeReviews"
            }}
          />
        </form>
      </fieldset>
    </div>
  );
};

export default MyFamily;
