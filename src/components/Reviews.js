import React from 'react';
import { Link } from "react-router-dom"
import axios from 'axios';
import { startSession } from 'mongoose';
import OneStar from "../images/reviews-1star.png";
import TwoStars from "../images/reviews-2stars.png";
import ThreeStars from "../images/reviews-3stars.png";
import FourStars from "../images/reviews-4stars.png";
import FiveStars from "../images/reviews-5stars.png";
import WriteReviews from "./WriteReviews"

function reviewStarts(rating) {
    if(rating ===1) {
        return <img src={OneStar} alt="rating"/>
    } else if(rating ===2) {
      return <img src={TwoStars} alt="rating"/>
  }
  else if(rating ===3) {
      return <img src={ThreeStars} alt="rating"/>
  } else if(rating ===4) {
      return <img src={FourStars} alt="rating"/>
  } else {
      return <img src={FiveStars} alt="rating"/>
  }
}

export default class Reviews extends React.Component {
  state = {
    reviews: []
  }

  componentDidMount() {
    axios.get(`http://localhost:2500/familyReviews`)
      .then(res => {
        const reviews = res.data;
        this.setState({ reviews });
      })
  }


  render() {
    return (
      <div className="reviews-container">
          <WriteReviews />
          <div className="get-reviews-container">
          <fieldset>
            <legend key={this.state.reviews._id}>Reviews</legend>
                {this.state.reviews.map(review => 
                <div className="each-review-container">
                    <p>{reviewStarts(review.rating)}</p>
                    <p>Review: {review.review}</p>
                    <p>by: <Link className="link-each-review-container" to={`/family/${review.familyId}`}>{review.familyName}</Link></p>
                </div>
                )}
            </fieldset>
            </div>
            
      </div>
    )
  }
}