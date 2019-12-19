import React, {useEffect} from "react";
import { useAuth0 } from "../react-auth0-spa";
import { useState } from "react";
import axios from "axios"
import { startSession } from "mongoose";

const MyFamily = ({props}) => {
  console.log(props)
  const { loading, user } = useAuth0();
  const [familyName, setFamilyName]=useState("")
  const [familyId, setFamilyId]=useState("")
  const [rating, setRating]=useState("")
  const [review, setReview]=useState("")



  const handlePost = (
    familyName, 
    familyId, 
    rating,
    review, 
) => {
      axios.post(`http://localhost:2500/familyReviews`, {
        familyName: familyName,
        familyId: familyId,
        rating: rating,
        review: review
      })
    }
    useEffect(() => {
      setFamilyId(props.id)
  },[])
  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
        <div className="write-reviews-container">
            <fieldset>
                <legend>Write a review</legend>
          <form onSubmit={e =>{
            e.preventDefault()
            handlePost(
                familyName, 
                familyId, 
                rating,
                review, 
            )
          }}>
			<p>
				<label>Family Name: </label>
				<input type="text" onChange={e => setFamilyName(e.target.value)}/>
			</p>
            <p>
				<label>Rating: </label>
				<input type="text" onChange={e => setRating(e.target.value)}/>
			</p>
			<p>
				<label>Review: </label>
				<input type="text" onChange={e => setReview(e.target.value)}/>
			</p>
            <button>Send</button>
            </form>
            </fieldset>
            </div>

  );
};

export default MyFamily;