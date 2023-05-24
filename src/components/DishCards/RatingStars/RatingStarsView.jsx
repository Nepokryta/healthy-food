import React, { useState } from 'react';
import RatingStarView from './RatingStarView';
import { StarValue } from '../../../constants/constants';

function RatingStarsView() {
  const [rating, setRating] = useState(4);

  const handleStarClick = (i) => {
    setRating(i);
  };
    
  const stars = [];
  for (let i = 1; i <= 5; i += 1) {
    stars.push(
      <RatingStarView 
        key={i} 
        filled={i <= rating}
        onClick={() => handleStarClick(i)}
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

export default RatingStarsView;
