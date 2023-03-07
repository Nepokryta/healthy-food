import React, { Component } from 'react';

import RatingStarView from './RatingStarView';
import StarValue from '../../../constants/StarValue';
import '../sass/RatingStars.sass';

class RatingStars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 4,
      starValue: 20,
    };
  }

  handleStarClick = (rating) => {
    this.setState({ rating });
    const newStarValue = StarValue[rating] || 0;
    this.setState({ starValue: newStarValue });
  };
    
  render() {
    const { rating, starValue } = this.state;
    const stars = [];
    for (let i = 1; i <= 5; i += 1) {
      stars.push(
        <RatingStarView 
          key={i} 
          filled={i <= rating}
          onClick={() => this.handleStarClick(i)}
        />
      );
    }
    return (
      <div className="dish__card-action-stars">
        {stars}
        <div className="dish__card-action-value">{starValue}</div>
      </div>
    );
  }
}

export default RatingStars;
