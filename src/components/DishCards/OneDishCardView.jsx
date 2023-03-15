import React from 'react';
import PropTypes from 'prop-types';

import RatingStars from './RatingStars/RatingStars';
import { ReactComponent as Close } from '../../assets/icons/close.svg';

function OneDishCardView(props) {  
  const {
    id, cardKey, src, alt, title, subtitle, newSubtitle, description, onCardClick, onAddCardClick, onAddElement,
    onDeleteElement, onAddElementOnClick, showElement, chekImg,
  } = props;

  return (
    <>
      <button className="arrow-card" type="submit" onClick={() => onCardClick(id, cardKey)}>
        <Close />
      </button>
      <img src={src} alt={alt} onLoad={(e) => chekImg(e)} onError={(e) => chekImg(e)} />
      <div className="dish__card-details">
        <h2 className="dish__card-title">{title}</h2>
        <h3 className="dish__card-subtitle">{subtitle}</h3>
        { showElement ? '' : <h3 className="dish__card-newsubtitle">{newSubtitle}</h3> }
        <h4 className="dish__card-description">{description}</h4>
        <button className="activityBTN button" type="submit" onClick={() => onAddElement(cardKey, title)}>MY FAVORITE</button>
        <div className="botton_block">
          <button className="activityBTN button" type="submit" onClick={() => onDeleteElement(cardKey)}>DELETE</button>
          <button className="activityBTN button" type="submit" onClick={() => onAddElementOnClick(cardKey)}>ADD</button>
        </div>
      </div>
      <div className="dish__card-action">
        <RatingStars />
        <button 
          className="activityBTN button" 
          type="submit"
          onClick={() => onAddCardClick(id, src, alt, title, subtitle, description, newSubtitle)}
        >
          ADD CARD
        </button>
      </div>
    </>
  );
}

OneDishCardView.propTypes = {
  cardKey: PropTypes.number.isRequired, 
  id: PropTypes.string.isRequired, 
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  newSubtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onCardClick: PropTypes.func.isRequired, 
  onAddCardClick: PropTypes.func.isRequired,
  onAddElement: PropTypes.func.isRequired,
  onDeleteElement: PropTypes.func.isRequired,
  onAddElementOnClick: PropTypes.func.isRequired,
  showElement: PropTypes.bool.isRequired,
  chekImg: PropTypes.func.isRequired,
};

export default OneDishCardView;
