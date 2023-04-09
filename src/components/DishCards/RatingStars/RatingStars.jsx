import React, { Component } from 'react';

import RatingStarView from './RatingStarView';
import { StarValue } from '../../../constants/constants';
import '../sass/RatingStars.sass';

class RatingStars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 4,
    };
  }

  handleStarClick = (rating) => {
    this.setState({ rating });
  };
    
  render() {
    const { rating } = this.state;
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
        <div className="dish__card-action-value">{ StarValue[rating] || 0 }</div>
      </div>
    );
  }
}

export default RatingStars;
