import React from 'react';

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
                {this.state.reviews.map(review => <p>{review.review}</p>)}
            </fieldset>
      </div>
    )
  }
}