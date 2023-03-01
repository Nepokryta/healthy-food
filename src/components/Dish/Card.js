import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Rating from './Rating';

import { ReactComponent as Close } from '../../assets/icons/close.svg';

class Card extends Component {                  
  render() {
    const {
      id, src, alt, title, subtitle, newSubtitle, description, 
      onCardClick, onAddElement, onDeleteElement, onAddElementOnClick, onAddCardClick
    } = this.props;

    return (
      <div className="dish__card">
        <button className="arrow-card" type="submit" onClick={() => onCardClick(id)}>
          <Close />
        </button>
        <img src={src} alt={alt} />
        <div className="dish__card-details">
          <h2 className="dish__card-title">{title}</h2>
          <h3 className="dish__card-subtitle">{subtitle}</h3>
          <h3 
            className="dish__card-subtitle"
            style={{ color: '#3be967', fontSize: '15px', fontWeight: '400' }}
          >
            {newSubtitle}
          </h3>
          <h4 className="dish__card-description">{description}</h4>
          <button className="card__action-btn" type="submit" onClick={() => onAddElement(id)}>MY FAVORITE</button>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button className="card__action-btn" type="submit" onClick={() => onDeleteElement(id)}>DELETE</button>
            <button className="card__action-btn" type="submit" onClick={() => onAddElementOnClick(id)}>ADD</button>
          </div>
        </div>
        <div className="dish__card-action">
          <Rating />
          <button 
            className="card__action-btn" 
            type="submit"
            onClick={() => onAddCardClick(src, alt, title, subtitle, description)}
          >
            ADD CARD
          </button>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  id: PropTypes.number.isRequired, 
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  newSubtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onCardClick: PropTypes.func.isRequired, 
  onAddElement: PropTypes.func.isRequired,
  onDeleteElement: PropTypes.func.isRequired,
  onAddElementOnClick: PropTypes.func.isRequired,
  onAddCardClick: PropTypes.func.isRequired,
};

export default Card;
