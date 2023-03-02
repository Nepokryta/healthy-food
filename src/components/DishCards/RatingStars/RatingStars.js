import React, { Component } from 'react';

import RatingStarsView from './RatingStarsView';

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
    let newStarValue = 0;
    switch (rating) {
      case 1:
        newStarValue = 5;
        break;
      case 2:
        newStarValue = 10;
        break;
      case 3:
        newStarValue = 15;
        break;
      case 4:
        newStarValue = 20;
        break;
      case 5:
        newStarValue = 25;
        break;
      default:
        newStarValue = 0;
    }

    this.setState({ starValue: newStarValue });
  };
    
  render() {
    const { rating, starValue } = this.state;
    const stars = [];
    for (let i = 1; i <= 5; i += 1) {
      stars.push(
        <RatingStarsView 
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
