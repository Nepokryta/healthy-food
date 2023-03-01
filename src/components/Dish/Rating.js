import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as StarBorder } from '../../assets/icons/ic_star_border.svg';
// import { ReactComponent as StarHalf } from '../../assets/icons/ic_star_half.svg'
import { ReactComponent as Star } from '../../assets/icons/ic_star.svg';

class Rating extends Component {
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
        <RatingStar 
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

// Rating.propTypes = {
//   rating: PropTypes.number.isRequired, 
//   starValue: PropTypes.number.isRequired, 
// };

function RatingStar({ filled, onClick }) {
  return (
    <button
      className="Star"
      onClick={() => onClick()}
      type="submit" 
      style={{ backgroundColor: 'transparent', padding: '0', border: '0' }}
    >
      { filled ? <Star /> : <StarBorder />}
    </button>
  );
}
RatingStar.propTypes = {
  filled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Rating;
