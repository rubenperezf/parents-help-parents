import React from 'react';
import { Link } from "react-router-dom"
import axios from 'axios';

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
          <fieldset>
            <legend key={this.state.reviews._id}>Comments</legend>
                {this.state.reviews.map(review => 
                <div className="each-review-container">
                    
                    <p>Review: {review.review}</p>
                    <p>by: <Link className="link-each-review-container" to={`/family/${review.familyId}`}>{review.familyName}</Link></p>
                </div>
                )}
            </fieldset>
      </div>
    )
  }
}